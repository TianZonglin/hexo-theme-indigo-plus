date: 2018-5-20
categories: 研究方向
tags: [Spark,SBT,IndexedRDD]
comments: true
title: 使用SBT正确构建IndexedRDD环境

---

`IndexedRDD`由`AMPLab`的`Ankur Dave`提出，它是`Immutability`和`Fine-Grained updates`的精妙结合。`IndexedRDD`是一个基于`RDD`的`Key-Value Store`，扩展自`RDD[(K, V)]`，可以在`IndexRDD`上进行高效的查找、更新以及删除。由于其并没有合并到 `Spark` 的主项目分支，所以在使用时需要引入特别的对其的支持。

[IndexedRDD的详细分析](https://blog.csdn.net/zcf1002797280/article/details/49657757)

这里主要是记录引进 `IndexedRDD` 之后项目出现的各种错误及解决过程，目前关于 `IndexedRDD` 的文章不多，百度出来的与搭环境有关系的也就十几篇左右，出现错误更是无解，所以特此记录一下填坑之路。

### 开始引入 IndexedRDD 

参见 [Github](https://github.com/amplab/spark-indexedrdd) 的说明，在 build.sbt 中添加：

```
//这句很关键
resolvers += "Spark Packages Repo" at "http://dl.bintray.com/spark-packages/maven"
libraryDependencies += "amplab" % "spark-indexedrdd" % "0.3"

//顺带引入GraphX
libraryDependencies += "org.apache.spark" %% "spark-graphx" % "2.2.0"
```

### 编译错误

注意：这里出现了一个天坑，总是编译（包含IndexedRDD时）出错的问题

历经解决过程：

#### 解决措施一

明确 `scala` 和 `spark` 版本的对照关系，版本确定为：
scala-2.11.8 
spark-core-2.1.0（graphx同2.1.0） 

上述版本是 `spark-rdd` 代码库中 `build.sbt` 的版本，详见 [Github-spark-indexedrdd](https://github.com/amplab/spark-indexedrdd/blob/master/build.sbt)

明确 spark-indexedrdd 版本
注意，maven源 的版本只有 0.1 0.2 0.3 0.4.0 这四个，Github代码库中的实例程序推荐的是 0.3

但是编译时会出现如下错误：

```
Run:
18/05/22 01:29:47 WARN ClosureCleaner: Expected a closure; got edu.berkeley.cs.amplab.spark.indexedrdd.IndexedRDD$MultiputZipper
Exception in thread "main" java.lang.NoSuchMethodError: org.apache.spark.SparkContext.runJob

Sbt shell:
could not find implicit value for evidence parameter of type edu.berkeley.cs.amplab.spark.indexedrdd.KeySerializer[Long]
```

#### 解决措施二

这时看到了 源库 的这个 [Issue](https://github.com/amplab/spark-indexedrdd/issues/31)
于是将 `spark-indexedrdd` 改为 `0.4.0` 版本，注意是三位数字

然后继续编译仍然出同样的错（没效果）

#### 解决措施三

这时，又看见了 [**这个问题**](https://blog.csdn.net/feng12345zi/article/details/79754730) 其错误跟咱们的不一样，但是格式太像了，然后看他的解决方案：

>报错分析：这种异常的发生通常是因为程序需要一个隐式参数 `(implicit parameter)`，
方法的定义中有个 `[R: TypeInformation]` ，但程序并没有指定任何有关隐式参数的定义，编译代码无法创建 `TypeInformation` ，所以出现上面提到的异常信息。
解决方案：
1） 我们可以直接在代码里面加上以下的代码：
&emsp;&emsp;**implicit val typeInfo = TypeInformation.of(classOf[Int])**
然后再去编译代码就不会出现上面的异常。
2） 但是这并不是Flink推荐我们去做的，推荐的做法是在代码中引入一下包：
&emsp;&emsp;**import org.apache.flink.streaming.api.scala.\_**
如果数据是有限的（静态数据集），我们可以引入以下包：
&emsp;&emsp;**import org.apache.flink.api.scala.\_**
然后即可解决上面的异常信息。

同样的思路，翻过头来看，自己项目里的 import 确实少了一个！

```
import edu.berkeley.cs.amplab.spark.indexedrdd.IndexedRDD
// 下面这个不引入也不会报错，但是会编译出错
// 还要注意顺序，上下颠倒IDEA会自动省略
import edu.berkeley.cs.amplab.spark.indexedrdd.IndexedRDD._
```

同时还要注意，之前改为 `0.4.0` 版本是对的，如果换做 0.3 ，此时还是会编译出错

### 结论

综上，IndexedRDD 环境（示例运行正常）应该如下：

    scala-2.11.8 
    spark-core-2.1.0
    graphx-2.1.0（非必须）
    spark-indexedrdd-0.4.0

build.sbt 文件：

```
name := "VISNWK"
version := "0.1"
scalaVersion := "2.11.8"
libraryDependencies += "org.apache.spark" %% "spark-core" % "2.1.0"
libraryDependencies += "org.apache.spark" %% "spark-graphx" % "2.1.0"
resolvers += "Spark Packages Repo" at "http://dl.bintray.com/spark-packages/maven"
libraryDependencies += "amplab" % "spark-indexedrdd" % "0.4.0"
```

IndexedRDD demo（IDEA环境下）：

```scala
import edu.berkeley.cs.amplab.spark.indexedrdd.IndexedRDD   //缺一不可
import edu.berkeley.cs.amplab.spark.indexedrdd.IndexedRDD._ //缺一不可
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

import scala.util.Random

object graphxDemo {
  def main(args: Array[String]) {

    //设置运行环境
    val conf = new SparkConf().setAppName("SimpleGraphX").setMaster("local")
    val sc = new SparkContext(conf)

    // Create an RDD of key-value pairs with Long keys.
    val rdd = sc.parallelize((1 to 1000000).map(x => (x.toLong, 0)))
    // Construct an IndexedRDD from the pairs, hash-partitioning and indexing
    // the entries.
    val indexed = IndexedRDD(rdd).cache()

    // Perform a point update.
    val indexed2 = indexed.put(1234L, 10873).cache()
    // Perform a point lookup. Note that the original IndexedRDD remains
    // unmodified.
    indexed2.get(1234L) // => Some(10873)
    indexed.get(1234L) // => Some(0)

    // Efficiently join derived IndexedRDD with original.
    val indexed3 = indexed.innerJoin(indexed2) { (id, a, b) => b }.filter(_._2 != 0)
    indexed3.collect // => Array((1234L, 10873))

    // Perform insertions and deletions.
    val indexed4 = indexed2.put(-100L, 111).delete(Array(998L, 999L)).cache()
    indexed2.get(-100L) // => None
    indexed4.get(-100L) // => Some(111)
    indexed2.get(999L) // => Some(0)
    indexed4.get(999L) // => None
    
    sc.stop()
  }
}

```

### 其他错误

注意，之前还出现过 `Apache Spark: Java.Lang.NoSuchMethodError .RddToPairRDDFunctions` 这个错误，但是今天明确版本后就没有复现，所以该错误八成是因为版本不兼容的缘故，总之还是版本不兼容引起的编译错误。

还有这个错误 `unresolved dependency: com.ankurdave#part_2.10;0.1`，之前是使用 Sbt 和 Maven 混用，然后用 Maven 添加的 spark-indexedrdd 才出现的这个错误，在改用 Sbt 单一管理依赖后该错误也没有复现。