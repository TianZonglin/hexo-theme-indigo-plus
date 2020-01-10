date: 2017-3-3
categories: 大数据相关
tags: [IDEA,Kafka,调试]
comments: true
title: IDEA中调试Topology出现的错误
---

在IDEA的maven项目中编写Topology出错：
NoClassFound找不到主类：解决--
在pom.xml中，找到<dependence>中的storm，添加<>compi<>

```
kafka中的topic不新建也可以使用
如果不执行 ./kafka-topics.sh --create --zookeeper hadoop01:2181 --replication-factor 1 --partitions 1 --topic test
直接执行下述两条命令：
kafka生产者客户端命令
./kafka-console-producer.sh --broker-list hadoop01:9092 --topic test
kafka消费者客户端命令
./kafka-console-consumer.sh -zookeeper hadoop01:2181 --from-beginning --topic test
也可以起到新建topic的目的
```
--------------------------------------------------------------------------------
maven有很多插件，在IDEA中调试时需要使用compile插件来执行compile命令、
```
mvn compile exec:Java -Dstorm.topology=storm.starter.WordCountTopology 错
mvn compile exec:java -Dstorm.topology=storm.starter.WordCountTopology 对
```
调试Topology过程：
```
pom.xml ：                     打包出错，jdk版本问题，打包中[显式指定]
项目setting加M2_HOME　：　      -DmultiXXXXX错误[首行出错]
import org.apache.storm..　：   新版storm包　１.０.ｘ
import backtype.storm..　：　   旧版storm包版本 ０.９.ｘ
src目录结构 ：待探究
本地运行找不到IRichSpout ：     同compile改动
打包compile、provided ：        ClassNotFoundError
SLF4J ERROR ：                  引入两个dependence - slf4j+log4j
```

--------------------------------------------------------------------------------



kafka启动问题的日志在logs文件夹中的server.log

kafka主题的日志才在自己自定义的目录中
```
2017-03-01 17:23:12.906 o.a.s.u.NimbusClient [WARN] Using deprecated config nimbus.host for backward compatibility. Please update your storm.yaml so it only has config nimbus.seeds
2017-03-01 17:23:12.906 o.a.s.u.NimbusClient [WARN] Using deprecated config nimbus.host for backward compatibility. Please update your storm.yaml so it only has config nimbus.seeds
```
错误原因：更改UI端口只修改了nimbus的，没有修改supervisor的

storm nimbus启动失败：nimbus进程不可用时，storm ui将无法访问
查nimbus.log无果，直接使用命令./storm nimbus 则会在下方打印出错误：
```
SLF4J: Class path contains multiple SLF4J bindings.
SLF4J: Found binding in [jar:file:/usr/local/storm/tzl-depend.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: Found binding in [jar:file:/usr/local/storm/lib/log4j-slf4j-impl-2.1.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
```
是因为之前提交的topo有slf4j的错误，再次开启storm时就会自动运行[叙述不恰当]而出错
改：删掉之
（使用storm kill不行，因为nimbus已经出错启动不起来了，故而直接删除掉相关文件）

下图如是：tzl.jar和tzl-depend.jar是之前提交的错误任务，其有slf4j的错误，在启动时好像storm命令会扫描整个目录文件
解决：删掉后，storm nimbus & 完美运行







