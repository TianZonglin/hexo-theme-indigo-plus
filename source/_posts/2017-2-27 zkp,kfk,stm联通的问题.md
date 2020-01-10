date: 2017-2-27 
categories: 大数据相关
tags: [Zookeeperp,Kafka,Storm,整合]
comments: true
title: zkp,kfk,stm联通的问题
---

要注意source的使用;
在root下使用之后有时需要在hadoop用户下再source一次才可以；


注意各个组件的配置文件
zookeeper： 
zookeeper/conf/zoo.cfg
运行参数的配置文件
zookeeper/data 自定义工作目录
内有myid  version-2  zookeeper_server.pid，version-2里有snapshot.xxxxxxxx
zookeeper/没配置目录，默认在/bin/zookeeper.out
zookeeper/bin:
zkServer.sh start[正常的启动/默认后台运行]
注意：启动要各个节点分别启动，平等的peer关系，用id区分
zkServer.sh start-foreground带日志输出的启动[会不能退出！]
zkServer.sh status 显示follow、leader等信息
zkServer.sh stop 停止zookeeper
注意：zookeeper服务通常要最后关闭...

---
storm : 
storm/conf/storm.yaml
运行参数的配置文件
storm/workdir 自定义工作目录
storm/logs 默认目录位置
storm/bin:
./storm nimbus 在nimbus节点使用
./storm supervisor 在supervisor节点使用
注意：storm的各个节点有主控节点和工作节点之区别！
另：在终端运行时要使用nohup ./storm nimbus & 来后台运行

---
kafka :
kafka/logs 自定义的kafka工作目录
kafka/config/server.properties 
运行参数的配置文件
kafka/config/zookeeper.properties 
kafka所连接的zookeeper的相关配置

---
nohup kafka-server-start  server.properties & 启动
注意：kafka也要全部启动，类似平等的关系，用id区分

另：kafka-topics.sh的使用 +
--create --zookeeper hadoop01,hadoop02,hadoop03 --replication-factor 1 --partitions 3 --topic hadoop01
--list --zookeeper localhost:2181
--describe --zookeeper localhost:2181 --topic hadoop01 等等



注意：在关闭kafka时使用kafka-server-stop.sh之后，jps仍然显示有kafka，这时只要关闭zookeeper，就可将kafka彻底关闭，[错误][有时候就是关不掉kafka，kill也不好使？待解决]
顺序应为：kafka->zookeeper





