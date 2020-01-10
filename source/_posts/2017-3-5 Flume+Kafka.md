date: 2017-3-5
categories: 大数据相关
tags: [Flume,Kafka,整合]
comments: true
title: Flume+Kafka联通
---

#### 前提
前提是要先把flume和kafka独立的部分先搭建好。
下载插件包
下载flume-kafka-plus:https://github.com/beyondj2ee/flumeng-kafka-plugin
把lib目录下的
![16170518367.jpeg-13.2kB][1]
和package下的
![16170609628.jpeg-3.8kB][2]
 
都放到flume的lib目录
修改原有的flume-conf文件
在插件包里有一个flume-conf.properties，把这个文件放到flume的conf文件夹里

#### 修改以下内容
```
producer.sources.s.type = exec
producer.sources.s.command = tail -f -n+1 ~/tmp/test.log
producer.sources.s.channels = c
……
producer.sinks.r.custom.topic.name=test
……
consumer.sources.s.custom.topic.name=test
```
>producer.sources.s.type = exec
producer.sources.s.command = tail -f -n+1 ~/tmp/test.log
producer.sources.s.channels = c

以上路径处需要注意：

- 尽量不要使用~/tmp/这种目录格式，~代表的是当前用户的目录。
- 使用tail -f filename 就可以了这里
- 文件目录要对应正确路径，且对应位置要有相应文件！！！！
- 与文件权限无关

#### 启动zookeeper
>zkServer.sh start

#### 启动kafka broker
>bin/kafka-server-start.sh config/server.properties

#### 创建kafka topic
>bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

#### 启动kafka consumer
>bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning

#### 启动flume
>bin/flume-ng agent --conf conf --conf-file conf/flume-conf.properties --name producer -Dflume.root.logger=INFO,console

#### 测试
>echo "this is a test" >> ~/tmp/test.txt
此时只要能在consumer里现“this is a test”就表示成功

测试成功
![clipboard.png-341.1kB][3]
 


  [1]: http://static.zybuluo.com/EVA001/tpbh3f9gohzlhub17isbdog8/16170518367.jpeg
  [2]: http://static.zybuluo.com/EVA001/6g1obtz1ta8v3ni98m3mxvq8/16170609628.jpeg
  [3]: http://static.zybuluo.com/EVA001/ka8x77hq9bkxoeuxftjtspu9/clipboard.png