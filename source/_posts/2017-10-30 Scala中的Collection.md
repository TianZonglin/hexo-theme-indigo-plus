categories: Spark学习笔记
tags: [Scala,Collection]
comments: true
title: Scala中的Collection
date: 2017-10-30 00:00:00
---
# Scala中的immutable Collection 集合
Traversable 遍历
Iterable    迭代
Set无序集合     Sequence序列        Map映射

- **Set**
- SortedSet HashSet BitSet  ListSet
- TreeSet       

- **Sequence**
- IndexedSeq   LinearSeq   

- IndexedSeq
- Vector,NumericRange,Range,Array,String  
- LinearSeq
- List,Stream,Quene,Stack

- **Map**
- Sortedmap HashMap LsitMap
- TreeMap


## List[T]
T是类型，由于会自动推导类型，所以不必指明类型

```scala
scala> val a = List(1,2,3,4)        //定义方法一
a: List[Int] = List(1, 2, 3, 4)     //自动推导为Int类型的List

scala> val b = 0::a                 //定义方法二：连接操作符
b: List[Int] = List(0, 1, 2, 3, 4)  //将左边的元素添加到右边List的头部

scala> var c = "x"::"y"::"z"::Nil   //Nil是空List
c: List[String] = List(x, y, z)     

//上述过程是从右往左连接，步骤如下：
scala> "z"::Nil
res5: List[String] = List(z)

scala> "y"::res5
res6: List[String] = List(y, z)

scala> "x"::res6
res7: List[String] = List(x, y, z)

scala> val d = a:::c                //定义方法三：使用:::连接两个List
d: List[Any] = List(1, 2, 3, 4, x, y, z)
                                    //自动推导为Int,String的父类为Any
scala> a.head
res8: Int = 1

scala> d.head                       //.head返回头元素
res9: Any = 1

scala> c.head
res10: String = x

scala> a.tail                       //.tail返回除头元素之外的元素
res11: List[Int] = List(2, 3, 4)

scala> d.tail
res12: List[Any] = List(2, 3, 4, x, y, z)

scala> a.isEmpty                    //.isEmpty返回List是否为空
res13: Boolean = false

scala> Nil.isEmpty
res14: Boolean = true

//利用tail和isEmpty构造循环来实现List的遍历：
scala> def scanf(list: List[Int]):String = {
     | if(list.isEmpty) "NULL"
     | else list.head.toString+" "+scanf(list.tail)
     | }
scanf: (list: List[Int])String

scala> scanf(a)
res15: String = 1 2 3 4 NULL
```

# List的高阶函数 filter：过滤
```scala
//将List元素进行过滤
//下面filter参数是一个匿名函数，x代表一个元素，filter会遍历List判断每个元素是否满足条件
scala> a.filter(x => x % 2 ==1) 
res17: List[Int] = List(1, 3)

//toList表达式，结果是将当前字符串转为List
scala> "100 Persons".toList
res18: List[Char] = List(1, 0, 0,  , P, e, r, s, o, n, s)

//判断是否为数字可以用Character.isDigit(x)方法
scala> "100 Persons".toList.filter(x => Character.isDigit(x))
res20: List[Char] = List(1, 0, 0)

//takeWhile满足条件则取元素，直到！取到某元素才停止
//（类似while循环）下面取元素取到字符‘o’终止，并且不会打印‘o’
scala> "100 Persons".toList.takeWhile(x => x!='o')
res21: List[Char] = List(1, 0, 0,  , P, e, r, s)
```
# List的高阶函数 map/flatMap：映射
```scala
//对于下面的变量a和c应用映射
scala> a
res22: List[Int] = List(1, 2, 3, 4)
scala> c
res22: List[String] = List(x, y, z)

//map的参数就是一个匿名函数，表明一个转换过程，参数中的匿名函数参数x是List中得每个元素
//使用map实现全部字母大写
scala> c.map(x => x.toUpperCase)
res23: List[String] = List(X, Y, Z)

//参数中的匿名函数参数x可以使用通配符下划线'_'来代替
scala> c.map( _.toUpperCase)
res24: List[String] = List(X, Y, Z)

//同样的filter也可以使用通配符下划线'_'来代替
scala> a.filter( _ % 2 ==1)
res25: List[Int] = List(1, 3)

//通过filter和map来实现对List中过滤后元素的具体操作
//下面是将奇数全部加10
scala> a.filter( _ % 2 ==1).map( _ +  10)
res26: List[Int] = List(11, 13)

//下面是嵌套List
scala> val complex = List( a,List(4,5,6))
complex: List[List[Int]] = List(List(1, 2, 3, 4), List(4, 5, 6))

//对于嵌套List，filter仍然会遍历到最里层的元素并且进行过滤
//但是其返回不会去掉外壳，仍然是个嵌套List
scala> complex.map(x => x.filter( _%2 ==0))
res27: List[List[Int]] = List(List(2, 4), List(4, 6))

//同样，使用下划线也可以通配参数x
scala> complex.map( _.filter( _%2 ==0))
res28: List[List[Int]] = List(List(2, 4), List(4, 6))

//使用flatMap可以将嵌套List“打平”，将返回元素全部放在同一层
//下面就可以取出嵌套List中的偶数，注意，去除了‘外壳’
scala> complex.flatMap( _.filter( _%2 ==0))
res30: List[Int] = List(2, 4, 4, 6)
```
# List的高阶函数 集合的规约操作
把集合的元素通过运算和操作规约为一个值

## reduceLeft(op: (T, T) => T )
```
x1  x2  x3      ... xn
  op    x3      ... xn
     op         ... xn
                ...
                 op
```
特性1：参数为一个匿名函数
特性2：规约结果一定是List元素的类型，所以是被经常使用的（相较于foldLeft）
```scala
对于List变量a
scala> a
res33: List[Int] = List(1, 2, 3, 4)
使用reduceLeft，参数为匿名函数，表示规约的表达式
scala> a.reduceLeft((x,y) => x+y)
res31: Int = 10
可以使用下划线通配
scala> a.reduceLeft(_+_)
res32: Int = 10
```



## foldLeft(z:U)(op: (U, T) => U )
```
z   x1  x2      ... xn
  op    x1      ... xn
     op         ... xn
                ...
                 op
```
特性1：使用柯里化定义
特性2：必须有初始值z
特性3：返回值是初始值z的类型，故不太使用
```scala
scala> a
res33: List[Int] = List(1, 2, 3, 4)
//使用foldLeft进行元素的求和，并且初值为0
scala> a.foldLeft(0)((x,y) => x+y)
res34: Int = 10
//使用通配符
scala> a.foldLeft(0)(_+_)
res35: Int = 10
//初值改变后的结果
scala> a.foldLeft(1)(_+_)
res36: Int = 11
```
# 惰性求值的类型：Stream 流
```scala
//使用to或until来获取range类型
scala> 1 to 10 by 2
res41: scala.collection.immutable.Range = inexact Range 1 to 10 by 2
//until是小于，取不到边界
scala> (1 until 10).toList
res44: List[Int] = List(1, 2, 3, 4, 5, 6, 7, 8, 9)
//to是小于等于，可以取边界
scala> (1 to 10).toList
res45: List[Int] = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//使用操作符#::来连接定义一个Stream，其中Stream.empty是空流
scala> 1 #:: 2#:: 3#:: Stream.empty
res46: scala.collection.immutable.Stream[Int] = Stream(1, ?)

//惰性求值的特性：由打印可知，只显示和判断第一个元素是什么，其他的用？表示
scala> val s = (1 to 1000).toStream
s: scala.collection.immutable.Stream[Int] = Stream(1, ?)

//获取Stream的第一个元素
scala> s.head
res48: Int = 1

//获取Stream除首元素以外的元素，其返回结果仍然是Stream类型，所以仍然只显示(2, ?)
scala> s.tail
res49: scala.collection.immutable.Stream[Int] = Stream(2, ?)
scala> s.tail.head
res50: Int = 2
```
# Scala中的tuple：元组
```scala
//元组的概念，和Python中的元组类似，可以放不用类型的变量
scala> (1,2)
res51: (Int, Int) = (1,2)

//只有两个元素的元组叫pair，可以使用箭头的方式来定义
scala> 1 -> 2
res52: (Int, Int) = (1,2)

//scala自动识别元素类型
scala> val t = (1,'a',"Tom",34.5)
t: (Int, Char, String, Double) = (1,a,Tom,34.5)

//对于一个元组变量，下划线加数字表示第N个元素，t._1表示第一个元素
scala> t._1
res54: Int = 1
//取元素时不能超出下标，否则报错
scala> t._5
<console>:13: error: value _5 is not a member of (Int, Char, String, Double)
       t._5
         ^
```
**元组的用处：**
可以封装函数的返回值，在函数返回多个类型的变量时，可以包装起来一并返回
```scala
//下面这个函数通过元组，一并返回输入参数List变量中所有元素的个数、求和、平方和
scala> def _3operate(in:List[Int]):(Int,Int,Int) =
     | in.foldLeft((0,0,0))((t,v) => (t._1+1,t._2+v,t._3+v*v)
     | )
_3operate: (in: List[Int])(Int, Int, Int)
//调用该函数，可以返回三个值
scala> _3operate(a)
res56: (Int, Int, Int) = (4,10,30)

```
# Scala中的Map<K,V>

```scala
//使用类似元组的箭头来定义一个键值对
scala> val p = Map(1 ->  "Tom",9->"Jack")
p: scala.collection.immutable.Map[Int,String] = Map(1 -> Tom, 9 -> Jack)

//按Key取值
scala> p(1)
res58: String = Tom

//判断指定Key是否在Map中
scala> p.contains(1)
res59: Boolean = true

//返回包含全部Key的Set集合
scala> p.keys
res60: Iterable[Int] = Set(1, 9)

//返回包含全部Value的Iterable类型
scala> p.values
res61: Iterable[String] = MapLike.DefaultValuesIterable(Tom, Jack)
```
**涉及的Map相关运算**
```scala
//使用+号 添加键值对，注意Map不支持混合类型的添加，否则会出错
scala> p + ("name" -> "Kim")
<console>:13: error: type mismatch;
 found   : (String, String)
 required: (Int, ?)
       p + ("name" -> "Kim")
                   ^
//正确添加键值对，注意会按Key值覆写键值对，即Key冲突时丢弃原来的Value
//有冲突的添加
scala> p + (1 -> "Kim")
res63: scala.collection.immutable.Map[Int,String] = Map(1 -> Kim, 9 -> Jack)
//正常的添加
scala> p + (2 -> "Kim")
res65: scala.collection.immutable.Map[Int,String] = Map(1 -> Tom, 9 -> Jack, 2 -> Kim)

//使用-号来删除键值对，注意减的是Key值
scala> p - 1
res70: scala.collection.immutable.Map[Int,String] = Map(9 -> Jack)

//注意添加或删减的结果不能直接通过= 赋值给自己，会报错
scala> p = p -9
<console>:12: error: reassignment to val
       p = p -9
         ^
//上述的添加和删除都是操作单个元素，下面使用包含键值对的List集合加上++运算符来完成添加拖个键值对
scala> p ++ List(2->"a",5->"b")
res72: scala.collection.immutable.Map[Int,String] = Map(1 -> Tom, 9 -> Jack, 2 -> a, 5 -> b)

//删除多个键值对，注意删除只需要含Key值的List即可
scala> p -- List(1,9,2,5)
res73: scala.collection.immutable.Map[Int,String] = Map()

//可以联合构成表达式
scala> p ++ List(2->"a",5->"b") -- List(2,5)
res74: scala.collection.immutable.Map[Int,String] = Map(1 -> Tom, 9 -> Jack)

```
# 函数式编程示例：快速排序
```scala
def qSort(a:List[Int]):List[Int] = {
		if(a.length < 2) a
		else
			qSort( a.filter( _ < a.head )) ++ 
			a.filter( _ == a.head ) ++ 
			qSort( a.filter( _ > a.head ))
			
}                                 //> qSort: (a: List[Int])List[Int]

qSort(List(2,3,5,1,2,8,5,2))      //> res0: List[Int] = List(1, 2, 2, 2, 3, 5, 5, 8)
qSort(List(9,4,8,2,5,1,3,0))      //> res1: List[Int] = List(0, 1, 2, 3, 4, 5, 8, 9)
```
**解释：**
>首先快排需要一个分割变量，这里直接用a.head即输入List的第一个元素来做分割
其次是归类，每次递归都要分出小于，大于和等于的元素
然后是合并，使用++操作符，把每次的元素拼接起来，即每次调整后的结果
最后是判断递归结束条件：如果当前作为输入的分割后的List元素不足2，那么表示无序调整，排序结束

**注意：**
>这里外层递归中含有两个递归，外层递归即函数的返回的是三部分之和，这并不是尾递归
这个例子是综合了函数式编程、高阶函数、递归等Scala编程思想的体现。