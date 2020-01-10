date: 2018-5-11
categories: 研究方向
tags: [GraphX,Scala,实践,整合]
comments: true
title: GraphX具体功能的代码使用实例-Scala实现

---

GraphX 为整个图计算流程提供了强大的支持，先前已经有若干篇文章先后介绍了GraphX的强大功能，在GraphX官方编程指南中，提供了部分简单易懂的示例代码，其为GraphX的使用提供了一个初步的认识，作为需要用GraphX来编码实现需求的读者来说是十分宝贵的资源。

本文利用一个初始示例代码，结合部分官方文档中的说明，对GraphX的部分功能方法进行了实践，在全部亲自运行通过后，对大部分代码添加了自己的理解和认识，并且在Pregel模型编程部分结合运行结果对其运行流程做了一定梳理，来意图理解其执行机制。

下面，是ben程序代码中使用到的主要程序部分，即定义出一个简单的图结构，并构造一个图Graph[VD,ED]，对具体功能的实现均放置在代码的后半部分，主要包括一下几部分：

- Property Operators
- Structural Operators
- Computing Degree
- Collecting Neighbors
- Join Operators
- mapReduceTriplets
- aggregateMessages
- Pregel API Functions

主程序代码如下：

```scala
import org.apache.log4j.{Level, Logger}
import org.apache.spark.graphx._
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

object RDD_println {

  def main(args: Array[String]) {

    //屏蔽日志
    Logger.getLogger("org.apache.spark").setLevel(Level.ERROR)
    Logger.getLogger("org.eclipse.jetty.server").setLevel(Level.OFF)

    //设置运行环境
    val conf = new SparkConf().setAppName("XXXAppName").setMaster("local")
    val sc = new SparkContext(conf)

    //设置顶点和边，注意顶点和边都是用元组定义的Array
    //顶点的数据类型
    val vertexArray = Array(
      (1L, ("Alice", 28)),(2L, ("Bob", 27)),
      (3L, ("Charlie", 65)),(4L, ("David", 42)),
      (5L, ("Ed", 55)),(6L, ("Fran", 50))
    )
    //边的数据类型
    val edgeArray = Array(
      Edge(2L, 1L, 7),Edge(2L, 4L, 2),Edge(3L, 2L, 4),
      Edge(3L, 6L, 3),Edge(4L, 1L, 1),Edge(5L, 2L, 2),
      Edge(5L, 3L, 8),Edge(5L, 6L, 3)
    )

    //构造vertexRDD和edgeRDD
    val vertexRDD: RDD[(Long, (String, Int))] = sc.parallelize(vertexArray)
    val edgeRDD: RDD[Edge[Int]] = sc.parallelize(edgeArray)

    //构造图Graph[VD,ED]
    val graph: Graph[(String, Int), Int] = Graph(vertexRDD, edgeRDD)

    //----------------- Property Operators -----------------
    
    //----------------- Structural Operators -----------------
    
    //----------------- Computing Degree -----------------
    
    //----------------- Collecting Neighbors -----------------
    
    //----------------- Join Operators -----------------
    
    //----------------- mapReduceTriplets -----------------
    
    //----------------- aggregateMessages -----------------
    
    //----------------- Pregel API Functions -----------------
    
  }
}
  
```

### **Property Operators**

```scala

graph.edges.foreach(println)
println
graph.vertices.foreach(println)
println
graph.triplets.foreach(println)
println
graph.triplets.foreach(e => prin(s"edge(${e.srcId},${e.dstId})\tage(${e.srcAttr._2},${e.dstAttr._2})"))
//---- vertexRDD.foreach ----原始的vertexRDD保持顺序
//1 name=Alice age=28
//2 name=Bob age=27
//3 name=Charlie age=65
//4 name=David age=42
//5 name=Ed age=55
//6 name=Fran age=50
//---- edgeRDD.foreach ----
//  2 to 1 w=7
//2 to 4 w=2
//3 to 2 w=4
//3 to 6 w=3
//4 to 1 w=1
//5 to 2 w=2
//5 to 3 w=8
//5 to 6 w=3
//---- graph.vertices.foreach ----生成graph之后顺序被打乱
//4 name=David age=42
//1 name=Alice age=28
//6 name=Fran age=50
//3 name=Charlie age=65
//5 name=Ed age=55
//2 name=Bob age=27
//---- graph.edges.foreach ----
//  2 to 1 w=7
//2 to 4 w=2
//3 to 2 w=4
//3 to 6 w=3
//4 to 1 w=1
//5 to 2 w=2
//5 to 3 w=8
//5 to 6 w=3

//take(n) 按与按顺序！取出前 n 个
graph.edges.take(3).foreach(println)

// mapVertices 对Vertices进行map操作
// 对整个顶点集的 某一部分 进行批量操作
graph.vertices.foreach( x => println(x))
// 不改变顺序的进行map操作
graph.mapVertices{
  case (id, (name, age)) => (id, (name, age+10))
}.vertices.collect.foreach(v => println(s"${v._2._1} is ${v._2._2}"))
//collect可有可无
//mapVertices{case()=> ()} 这种必须用{}
//但是对于 mapVertices{ () => () } 这种也可以用 mapVertices( () => () )

graph.mapEdges{
  e=>e.attr*2
}.edges.collect.foreach(e => println(s"${e.srcId} to ${e.dstId} att ${e.attr}"))
```

### **Structural Operators**

```scala
// 原始图结构
graph.edges.foreach(println)
println
// 满足要求的子图结构 这里只用到了 参数epred
val sub = graph.subgraph( epred = e => e.srcId > e.dstId )
sub.edges.foreach(println)

//println("原图顶点数："+graph.vertices.count()+"\t子图顶点数："+sub.vertices.count())
//println("原图边数："+graph.edges.count()+"\t子图边："+sub.edges.count())
//原图顶点数：6	子图顶点数：6
//原图边数：8	子图边：5
//分析：过滤掉了3条边，但是仍然包含全部顶点

// 错误的写法：   subgraph( epred = e => e.srcId > e.dstId, vpred = (id,(_,_)) => id > 4 )
val sub2 = graph.subgraph( epred = e => e.srcId > e.dstId, vpred = (id,_) => id > 4 )
//println("原图顶点数："+graph.vertices.count()+"\t子图顶点数："+sub2.vertices.count())
//println("原图边数："+graph.edges.count()+"\t子图边："+sub2.edges.count())
//原图顶点数：6	子图顶点数：2
//原图边数：8	子图边：0
//分析：同时有epred和vpred两个条件，最终只剩两点，且无边连接，即边数为0


graph.edges.foreach(println)
println
graph.edges.reverse.foreach(println)
//Edge(2,1,7)
//Edge(2,4,2)
//Edge(3,2,4)
//Edge(3,6,3)
//Edge(4,1,1)
//Edge(5,2,2)
//Edge(5,3,8)
//Edge(5,6,3)
// reverse之后，是边的入点出点 相互交换，即边进行翻转
//Edge(1,2,7)
//Edge(1,4,1)
//Edge(2,3,4)
//Edge(2,5,2)
//Edge(3,5,8)
//Edge(4,2,2)
//Edge(6,3,3)
//Edge(6,5,3)
// 注意：graph.vertices 没有reverse这个方法，即不能对顶点进行翻转
```

### **Computing Degree**

```scala
//输出全部 ( 度数 , 该度的个数 )
graph.outDegrees.foreach( x => println(x))

graph.degrees.foreach( x => println(x))

println

// 为什么这样设计
// 因为：跟的是graph.degrees，即格式为 (VertexId, Int)，
// 所以对其的处理的参数 max(参数a:参数b):(结果)，均为此格式
// 得到最大度的节点：首先需要一个比较两点度大小的函数 max()
def max(a: (VertexId, Int), b: (VertexId, Int)): (VertexId, Int) = {
  if (a._2 > b._2) a else b
}
println(graph.degrees.reduce(max))//foreach( x => println(x))
println(graph.inDegrees.reduce(max))//foreach( x => println(x))
println(graph.outDegrees.reduce(max))//foreach( x => println(x))
```

### **Collecting Neighbors**

```scala
// GraphOps实现的，即是属于 graph 的方法

graph.collectNeighborIds(EdgeDirection.Out).foreach( x => {
  print(x._1+" cnt=")
  x._2.foreach(print)
  println
})
// 按出度，找到的点的邻居节点
//4 cnt=1
//1 cnt=
//6 cnt=
//3 cnt=26
//5 cnt=236
//2 cnt=14
println
graph.collectNeighborIds(EdgeDirection.Either).foreach( x => {
  print(x._1+" cnt=")
  x._2.foreach(print)
  println
})
// 按出入度，不能用Both，要用Either
//4 cnt=21
//1 cnt=24
//6 cnt=35
//3 cnt=265
//5 cnt=236
//2 cnt=1435

println
graph.collectNeighbors(EdgeDirection.Either).foreach( x => {
  print(x._1+" cnt=")
  x._2.foreach(print) //collectNeighbors 找到的邻居是全属性，而不仅是ID
  println
})
//4 cnt=(2,(Bob,27))(1,(Alice,28))
//1 cnt=(2,(Bob,27))(4,(David,42))
//6 cnt=(3,(Charlie,65))(5,(Ed,55))
//3 cnt=(2,(Bob,27))(6,(Fran,50))(5,(Ed,55))
//5 cnt=(2,(Bob,27))(3,(Charlie,65))(6,(Fran,50))
//2 cnt=(1,(Alice,28))(4,(David,42))(3,(Charlie,65))(5,(Ed,55))
```

### **Join Operators**

```scala
// 属性重置为0
val rawGraph = graph.mapVertices((id,_) => 0)
rawGraph.vertices.foreach(println)
println
rawGraph.joinVertices[Int](rawGraph.degrees)((_,_,outDeg) => outDeg).vertices.foreach(println)
//(4,0)
//(1,0)
//(6,0)
//(3,0)
//(5,0)
//(2,0)
// joinVertices 按degree使用join操作 加入到 rawGraph 中
//(4,2)
//(1,2)
//(6,2)
//(3,3)
//(5,3)
//(2,4)
rawGraph.outerJoinVertices(rawGraph.degrees)((_,_,outDeg) => outDeg).vertices.foreach(println)
//(4,Some(2))
//(1,Some(2))
//(6,Some(2))
//(3,Some(3))
//(5,Some(3))
//(2,Some(4)


//进阶用法   

//顶点用 类对象来代替，利用到 outerJoinVertices

val inDegrees: VertexRDD[Int] = graph.inDegrees
case class User(name: String, age: Int, inDeg: Int, outDeg: Int)

//创建一个新图，顶点VD的数据类型为User，并从graph做类型转换
// Graph[User, Int] 即 Graph[VD，ED]，意思是顶点由User类代替，ED是Int类型
val ugraph: Graph[User, Int] = graph.mapVertices { case (id, (name, age)) => User(name, age, 0, }

//initialUserGraph与inDegrees、outDegrees（RDD）进行连接，并修改initialUserGraph中inDeg值、outD值
//outerJoinVertices 这个方法属于 Graph 类型的方法
val userGraph = ugraph.outerJoinVertices(ugraph.inDegrees) {
  //required: (graphx.VertexId, User, Option[Int])
  case (id, u, in) => User(u.name, u.age, in.getOrElse(0), u.outDeg)
}.outerJoinVertices(ugraph.outDegrees) {
  case (id, u, out) => User(u.name, u.age, u.inDeg,out.getOrElse(0))
}

println("连接图顶点的属性：")
userGraph.vertices.collect.foreach(v => println(s"${v._2.name} inDeg: ${v._2.inDeg}  outDeg: v._2.outDeg}"))

println("出度和入读相同的：")
userGraph.vertices.filter {
      //此处应该格式为 (graphx.VertexId, User)
  case (id, u) => u.inDeg == u.outDeg
}.collect.foreach {
  case (id, property) => println(property.name)
}

```

### **mapReduceTriplets**

```scala
//在早的GraphX版本中我们计算邻居聚合使用mapReduceTriplets操作;
//注意：当前版本 Graph已经不存在MapReduceTriplets这个方法
//    libraryDependencies += "org.apache.spark" %% "spark-core" % "2.2.0"
//    libraryDependencies += "org.apache.spark" %% "spark-graphx" % "2.2.0"
//
//mapReduceTriplets
// 操作应用用户定义的map函数到每一个triplet ，使用用户定义的reduce函数聚合产生 messages。。
// 然而，我们发现用户返回迭代器是昂贵的，它抑制了我们应用额外优化(例如，本地顶点的重新编号)的能
// 在 aggregateMessages 中我们引进了EdgeContext，其暴露triplet属性，也明确了函数发送信息的源和顶点//。
// 除此之外，我们移除了字节码检测，取而代之的是要求用户指明哪个triplet属性被需要。

val graph: Graph[Int, Float] = ...
def msgFun(triplet: Triplet[Int, Float]): Iterator[(Int, String)] = {
  Iterator((triplet.dstId, "Hi"))
}
def reduceFun(a: Int, b: Int): Int = a + b
val result = graph.mapReduceTriplets[String](msgFun, reduceFun)

def msgFun(t: EdgeContext[(String,Int), Int, Int]) {
  t.sendToSrc(100)
}
def reduceFun(a: Int, b: Int): Int = a + b
val result = graph.aggregateMessages[Int](msgFun, reduceFun)

result.foreach(println)
```

### **aggregateMessages**

```scala

//对每个节点的邻接点的属性进行聚合统计
//老版本使用 mapReduceTriplets
val oldFlowers: VertexRDD[(Int,Double)] = graph.mapReduceTriplets[(Int,Double)]{
    triplet => {
      if (triplet.srcAttr > triplet.dstAttr) {
        Iterator((triplet.dstId, (1, triplet.srcAttr )))
      } else {
        Iterator.empty
      }
    },
    (a,b) => (a._1+b._1, a._2+b._2)
  }
}

// 现在使用 aggregateMessages 代替
// 首先生成一个随机图
val g: Graph[Double,Int] = GraphGenerators.logNormalGraph(sc, numVertices = 100).mapVertices( d,_) => id.toDouble )
//g.edges.foreach(println)
//println
def msgFun(triplet: EdgeContext[Double, Int, (Int,Double)]) {

  if (triplet.srcAttr > triplet.dstAttr) {
    triplet.sendToDst((1, triplet.srcAttr ))
    //注意：原先的 Iterator((triplet.dstId, (1, triplet.srcAttr ))) 上述代码替换，作用完全一样
    //sendToDst 意思为向 目标点 发送消息
    //println("Iterator(("+triplet.dstId+", (1, "+triplet.srcAttr+" )))");
  }else{
    Iterator.empty
  }
}
// 有个问题：写成函数定义的形式 下面代码总是出错
// def reduceFun(a:Int,b:Double): (Int,Double) = (a._1+b._1, a._2+b._2)
// aggregateMessages[OOO] OOO处的类型，会附加到图g类型之后，
// 即：g为 Double,Int -->  result为 Double,Int,OOO
val result = g.aggregateMessages[(Int,Double)](msgFun, (a,b) => (a._1+b._1,a._2+b._2))

//result.collect.foreach(println)
//上述代码执行完后，形如(45,2913.0)，已经是reduce完成的状态，如果下面继续计算平均值，直接后项除项即可
//(19,(45,2913.0))
//(39,(45,2873.0))
//(34,(32,2102.0))
//(4,(62,3466.0))
//(71,(12,1028.0))


//result现在是(Int,Double)形式，现在对Double元素即value
//这里的的match-case类似于switch-case
//对于avg:VertexRDD[Double]，后项变量类型可以省去不写
val avg:VertexRDD[Double] = result.mapValues(
  (_,value) => //这句话意思是前项保持不动，对后项value即形如(12,1028.0)的部分进行加工
    value match {
      case (count,total) => total/count
    }
) //整体返回值avg类型为(Int,Double)

//avg.collect.foreach(println)


//下面不使用随机图，使用开头自定义的图结构时：

graph.triplets.foreach(e => intln(s"edge(${e.srcId},${e.dstId})\tage(${e.srcAttr._2},${e.dstAttr._2})"))

def msgFun(triplet: EdgeContext[(String,Int), Int, (Int,Double)]) {
  if (triplet.srcAttr._2 > triplet.dstAttr._2) {
    triplet.sendToDst((1, triplet.srcAttr._2 ))
  }else{
    Iterator.empty
  }
}
val result = graph.aggregateMessages[(Int,Double)](msgFun, (a,b) => (a._1+b._1,a._2+b._2))
println
result.collect.foreach(println)
//分析：原始图结构
//((2,(Bob,27)),(1,(Alice,28)),7)
//((2,(Bob,27)),(4,(David,42)),2)
//((3,(Charlie,65)),(2,(Bob,27)),4)   年龄条件符合：顶点2 邻居的Age为 65
//((3,(Charlie,65)),(6,(Fran,50)),3)  年龄条件符合：顶点6 邻居的Age为 65
//((4,(David,42)),(1,(Alice,28)),1)   年龄条件符合：顶点1 邻居的Age为 42     = 42  1个邻居
//((5,(Ed,55)),(2,(Bob,27)),2)        年龄条件符合：顶点2 邻居的Age为 65+55  = 120 2个邻居
//((5,(Ed,55)),(3,(Charlie,65)),8)
//((5,(Ed,55)),(6,(Fran,50)),3)       年龄条件符合：顶点6 邻居的Age为 65+55  = 120 2个邻居
//上述计算的意义是：找到每个顶点用户的比自身年龄大的邻居节点用户的年龄之和，以及邻居数；
//所以，result为：
//(1,(1,42.0))
//(6,(2,120.0))
//(2,(2,120.0))

//继续求平均值
val avg:VertexRDD[Double] = result.mapValues(
  (_,value) =>
    value match {
      case (count,total) => total/count
    }
)
println
avg.collect.foreach(println)
//上述计算的意义是：找到每个顶点用户的比自身年龄大的邻居节点用户的平均年龄，即原本的计算目的
//结果为：
// (1,42.0)
// (6,60.0)
// (2,60.0)

```

### **Pregel API Functions**

- **Shortest path**

```scala

// ShortestPath 没有被封装成方法，需要自己实现

val sourceId: VertexId = 5L // 定义源点
// 用一个新图initialGraph 来初始化 顶点5 同其他顶点间的距离：本身距离为0，其他距离为MAX
val initialGraph = graph.mapVertices((id,_) => if (id == sourceId) 0.0 else uble.PositiveInfinity)
//initialGraph.vertices.foreach(println)
//(4,Infinity)
//(1,Infinity)
//(6,Infinity)
//(3,Infinity)
//(5,0.0)
//(2,Infinity)
//initialGraph.triplets.foreach(println)
//((2,Infinity),(1,Infinity),7)
//((2,Infinity),(4,Infinity),2)
//((3,Infinity),(2,Infinity),4)
//((3,Infinity),(6,Infinity),3)
//((4,Infinity),(1,Infinity),1)
//((5,0.0),(2,Infinity),2)
//((5,0.0),(3,Infinity),8)
//((5,0.0),(6,Infinity),3)

//Unspecified value parameters: vprog:
// 第一部分：(graphx.VertexId, Double, Double) => Double,
// 第二部分：sendMsg: EdgeTriplet[Double, Int] => Iterator[(graphx.VertexId, Double)],
// 第三部分：mergeMsg: (Double, Double) => Double
val sssp = initialGraph.pregel(Double.PositiveInfinity)(
  (id, dist, newDist) => {math.min(dist, newDist)},
  triplet => {  // 计算权重

    if (triplet.srcAttr + triplet.attr < triplet.dstAttr) {
      println("Iterator(("+triplet.dstId+", "+triplet.srcAttr+" + "+triplet.attr+"))")
      //triplet.attr即边的权重，不断加入triplet.attr，最后就能找到最短路径
      Iterator((triplet.dstId, triplet.srcAttr + triplet.attr))
    } else {
      println("Iterator.empty")
      Iterator.empty
    }
  },
  (a,b) => math.min(a,b) // 更新点⑤到该点的距离
)

//解释下过程，拿Triplets结构来说
//((2,Infinity),(1,Infinity),7)
//((2,Infinity),(4,Infinity),2)
//((3,Infinity),(2,Infinity),4)
//((3,Infinity),(6,Infinity),3)
//((4,Infinity),(1,Infinity),1)
//((5,0.0),(2,Infinity),2)
//((5,0.0),(3,Infinity),8)
//((5,0.0),(6,Infinity),3)
//首先由于前五行，顶点的attr均为Infinity，所以sendMsg中的Iterator均是empty空迭代
//第六行，0+2<Infinity，满足条件，传递（0+2=2）到入点，即变为((5,0.0),(2,2),2)，意为5到点2距2
//第七行，0+8<Infinity，满足条件，传递（0+8=8）到入点，即变为((5,0.0),(3,8),8)，意为5到点3距8
//第八行，0+2<Infinity，满足条件，传递（0+2=2）到入点，即变为((5,0.0),(6,3),3)，意为5到点6距3
//==进行mergeMsg步骤== 注意现在更新为：
//((2,2),(1,Infinity),7)
//((2,2),(4,Infinity),2)
//((3,8),(2,2),4)
//((3,8),(6,3),3)
//((4,Infinity),(1,Infinity),1)
//((5,0.0),(2,2),2)
//((5,0.0),(3,8),8)
//((5,0.0),(6,3),3)
//第一行，2+7<Infinity，满足条件，传递（2+7=9）到入点，即变为((2,2),(1,9),7)，意为5到点1距离为2=9
//第二行，2+2<Infinity，满足条件，传递（2+2=4）到入点，即变为((2,2),(4,4),2)，意为5到点4距离为2=4
//Iterator.empty 因为 8+4>2
//Iterator.empty 因为 8+3>3
//Iterator.empty 因为 Infinity无法比较
//Iterator.empty 因为 0+2=2
//Iterator.empty 因为 0+8=8
//Iterator.empty 因为 0+3=3
//==进行mergeMsg步骤== 注意现在更新为：
//((2,2),(1,9),7)
//((2,2),(4,4),2)
//((3,8),(2,2),4)
//((3,8),(6,3),3)
//((4,4),(1,9),1)
//((5,0.0),(2,2),2)
//((5,0.0),(3,8),8)
//((5,0.0),(6,3),3)
//第一行：Iterator.empty 因为 2+7=9
//第二行：Iterator.empty 因为 2+2=4
//第三行：Iterator.empty 因为 8+4>2
//第四行：Iterator.empty 因为 8+3>3
//第五行：4+1<9，满足条件，传递（4+1=5）到入点，即变为((4,4),(1,5),1)，意为5到点1距离由9更新为5
//第六行：Iterator.empty 因为 0+2=2
//第七行：Iterator.empty 因为 0+8=8
//第八行：Iterator.empty 因为 0+3=3
//==进行mergeMsg步骤== 注意现在更新为：
//((2,2),(1,5),7)
//((2,2),(4,4),2)
//((3,8),(2,2),4)
//((3,8),(6,3),3)
//((4,4),(1,5),1)
//((5,0.0),(2,2),2)
//((5,0.0),(3,8),8)
//((5,0.0),(6,3),3)
//此时，每个顶点的格式即（顶点id，顶点5到该顶点的最短距离），即最短路径算法完成

sssp.vertices.foreach(println)
//最终输出的结果:
//(4,4.0)
//(1,5.0)
//(6,3.0)
//(3,8.0)
//(5,0.0)
//(2,2.0)

```

- **PageRank**

```scala
// PageRank 有封装好的方法

//注意PageRank的参数，其实可以用精度来理解，这个值越小rank计算越精确，但计算时间也越长
graph.pageRank(0.01).vertices.foreach(println)
//(4,0.9727164143364966)
//(1,1.7757164399923602)
//(6,1.0009207604397985)
//(3,0.7024005336419639)
//(5,0.5473250911495823)
//(2,1.0009207604397985)
graph.pageRank(0.05).vertices.foreach(println)
//(4,0.9993165004824702)
//(1,1.700587005467996)
//(6,0.9890640077195239)
//(3,0.7430041814088131)
//(5,0.5789642972016725)
//(2,0.9890640077195239)
graph.pageRank(0.1).vertices.foreach(println)
//(4,1.035409289731306)
//(1,1.5453030618621122)
//(6,1.0247865028119143)
//(3,0.7698396167465112)
//(5,0.5998750260362425)
//(2,1.0247865028119143)
graph.pageRank(0.5).vertices.foreach(println)
//(4,0.9999999999999999)
//(1,0.9999999999999999)
//(6,0.9999999999999999)
//(3,0.9999999999999999)
//(5,0.9999999999999999)
//(2,0.9999999999999999)
```

- **TrangleCount**

```scala
// TrangleCount 有封装好的方法

// 注意，老版本GraphX需要 srcID<dstID，有些教程还是这样说的，但是2.x已经没有这个要求
graph.triangleCount().vertices.foreach(println)
//输出结果：
//(4,1) 意思为顶点4 外接一个三角形
//(1,1) ..
//(6,1) ..
//(3,2) 意思为顶点2 外接两个三角形
//(5,2) ..
//(2,2) ..
```

