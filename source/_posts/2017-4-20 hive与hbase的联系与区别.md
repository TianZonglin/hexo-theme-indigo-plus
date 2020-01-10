date: 2017-4-20 
categories: 大数据相关
tags: [Hive,区别]
comments: true
title: hive与hbase的联系与区别
---

hive与hbase的联系与区别：
共同点：
1. hbase与hive都是架构在hadoop之上的。都是用hadoop作为底层存储

区别：

1. Hive是建立在Hadoop之上为了减少MapReduce jobs编写工作的批处理系统，HBase是为了支持弥补Hadoop对实时操作的缺陷的项目 。
2. 想象你在操作RMDB数据库，如果是全表扫描，就用Hive+Hadoop,如果是索引访问，就用HBase+Hadoop 。
3. Hive query就是MapReduce jobs可以从5分钟到数小时不止，HBase是非常高效的，肯定比Hive高效的多。
4. Hive本身不存储和计算数据，它完全依赖于HDFS和MapReduce，Hive中的表纯逻辑。
5. hive借用hadoop的MapReduce来完成一些hive中的命令的执行
6. hbase是物理表，不是逻辑表，提供一个超大的内存hash表，搜索引擎通过它来存储索引，方便查询操作。
7. hbase是列存储。
8. hdfs作为底层存储，hdfs是存放文件的系统，而Hbase负责组织文件。
9. hive需要用到hdfs存储文件，需要用到MapReduce计算框架。




