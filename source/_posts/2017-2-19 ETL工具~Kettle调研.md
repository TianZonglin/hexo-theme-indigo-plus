date: 2017-2-19
categories: 大数据相关
tags: [Kettle,概述]
comments: true
title: ETL工具~Kettle调研
---

ETL工具~Kettle调研 2017.2
Kettle
kettle是其中Pentaho默认的ETL工具，下图为Pentaho的使用情况
![clipboard.png-298.8kB][1]

## 什么是ETL
>抽取（Extract）：需要连接到不同的数据资源，以便为随后的步骤（转换、加载、分析、报表展示等）提供数据。数据抽取实际上是ETL解决方案的成功实施的一个主要障碍。
转换（Transform）:任何对数据的处理过程都是转换。通常包括： 
1、移动数据 
2、根据规则验证数据 
3、修改数据的内容或者数据结构 
4、集成多个数据源的数据 
5、根据处理后的数据计算派生值或者聚集值
加载（Load）:将数据加载到目标系统的所有操作

## 能解决什么问题？
  1. 适用于将多个应用系统的大批量的、异构的数据进行整合，有强大的数据转换功能。
  2. 高效适配多种类型的异构数据库、文件和应用系统。
  3. 快速构建复杂数据大集中应用、无需编码。

## 适合什么场景？
>异构数据库迁移，如将两个SQL Server中的业务数据分别依照特定的逻辑迁移到三个Oracle数据库中。
Kettle通过Webservice获取天气信息 http://blog.itpub.net/10009036/viewspace-1398948/
kettle学习：JsonInput使用 http://blog.csdn.net/jiesa/article/details/50098601
开源ETL工具kettle系列之增量更新设计http://blog.csdn.net/aiynmimi/article/details/52150318
用kettle向hdfs复制文件http://www.cnblogs.com/allan00/p/3838256.html
KETTLE访问HIVE表数据https://ask.hellobi.com/blog/hql15/3450

## Kettle的优点？
>1. 插件架构扩展性好
Kettle 体系架构http://blog.csdn.net/romaticjun2011/article/details/40680483
2. 流程式设计方便易用
3. 全面的数据访问支持(支持多个数据库, 如果非默认支持,还可以通过插件扩展)
4. 支持多平台
5. 高效稳定： 
1）每个步骤一个线程或者一个步骤分多个线程处理
2）集群，把数据分散在多个机器中，在每个机器中作运算再汇总
6. 商业、社区支持
7. 多种方式应用集成：
1) 把Kettle集成到应用中，通过调用Kettle的API来调用一个作业
2) 把自己写的jar包集成到Kettle里面，通过Kettle的javascript来调用自己编写的class
3) 通过向web页面提交参数，执行一个kettle作业

## 是否跨平台？
>底层依靠JVM，且为纯JAVA开发
Linux
1）进入到Kettle部署的路径 
2）执行 chmod *.sh，将所有shell文件添加可执行权限 
3）在Kettle路径下，如果要执行transformation，就运行./pan.sh -file=?.ktr -debug=debug -log=log.log 其中。-file说明你要运行的transformation文件所在的路径；-debug说明日志输出的级别；-log说明日志输出的路径  
4）同理，对于job的执行，请将./pan.sh更换成./kitchen.sh，其他部分说明不变。
Windows
执行spoon.bat

## 是否开源，社区支持如何？
>开源社区http://www.ukettle.org/forum.php

## 对分布式集群的针对性如何？
>Kettle Execution on Storm http://wiki.pentaho.com/display/BAD/Kettle+Execution+on+Storm
Kettle on Spark http://wiki.pentaho.com/display/BAD/Kettle+on+Spark
Loading Data into HDFS http://wiki.pentaho.com/display/BAD/Loading+Data+into+HDFS
Kettle 集群（cluster）在多个服务器（windows、linux）上并发执行 http://blog.csdn.net/lixuemei504/article/details/38271145
KETTLE集群搭建 http://www.cnblogs.com/skyrim/p/5104557.html

## 是否可以进行自定义改进源代码？
>kettle插件开发 https://wenku.baidu.com/view/33c46d1459eef8c75fbfb3b5.html?re=view
kettle调用第三方短信平台HTTP接口发送短信 http://www.ukettle.org/thread-1025-1-1.html

## 结构组成？
>Spoon	一个基于swt开发的流式处理客户端，用户开发转换、任务、创建数据库、集群、分区等 
Pan		独立的命令行程序，支持通过命令行实现界面的功能，如果转换启停,任务启停,状态查看等 
Kitchen	一个独立的命令行程序，用于执行由Spoon编辑的作业.
Carte	一个轻量级的Web容器，用于建立专用、远程的ETL Server。

--------

## 有什么缺点？
>kettle性能及效率提升 http://blog.csdn.net/littlecaesar1234/article/details/18657093
kettle中做查询时,遇到大数据时怎么处理 http://www.myexception.cn/database/1294030.html

## kettle处理数据的速度，相比较？

>让kettle的执行速度飞起来 https://my.oschina.net/sucre/blog/398996


## 注意事项？
开源ETL工具kettle系列之常见问题 http://blog.csdn.net/zftang/article/details/6194124


81个开源大数据处理的工具 http://www.36dsj.com/archives/25042


  [1]: http://static.zybuluo.com/EVA001/f0vac4fwc6hqyaf3liz3it2l/clipboard.png