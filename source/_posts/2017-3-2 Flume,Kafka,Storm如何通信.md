date: 2017-3-2
categories: 大数据相关
tags: [Flume, Kafka, Storm,整合,转载]
comments: true
title: Flume、Kafka、Storm如何结合使用
---

#### 原理
如何仔细阅读过关于Flume、Kafka、Storm的介绍，就会知道，在他们各自之间对外交互发送消息的原理。
在后面的例子中，主要对Flume的sink进行重构，调用kafka的消费生产者(producer)发送消息;在Storm的spout中继承IRichSpout接口，调用kafka的消息消费者(Consumer)来接收消息，然后经过几个自定义的Bolt，将自定义的内容进行输出。

#### flume和kafka的整合
- 复制flume要用到的kafka相关jar到flume目录下的lib里面。
- 编写sink.java文件,然后在eclipse导出jar包，放到flume-1.5.1-bin/lib目录中,项目中要引用flume-ng-configuration-1.5.0.jar,flume-ng-sdk-1.5.0.jar,flume-ng-core-1.5.0.jar,zkclient-0.3.jar,commons-logging-1.1.1.jar,在flume目录中，可以找到这几个jar文件，如果找不到就用find命令搜一下。
- 在m1上配置flume和kafka交互的agent
- 在m1,m2,s1,s2的机器上,分别启动kafka（如果不会请参考这篇文章介绍了kafka的安装、配置和启动《kafka2.9.2的分布式集群安装和demo(java api)测试》），然后在s1机器上再启动一个消息消费者consumer
- 在m1启动flume
- 在m1上再打开一个窗口，测试向flume中发送syslog
  - m1打开的flume窗口中看最后一行的信息，Flume已经向kafka发送了消息
- 在刚才s1机器上打开的kafka消费端，同样可以看到从Flume中发出的信息，说明flume和kafka已经调试成功了

#### kafka和storm的整合 
- 我们先在eclipse中写代码，在写代码之前，我们要先对maven进行配置，pom.xml配置文件内容如下：
- 编写KafkaSpouttest.java文件
- 编写KafkaTopologytest.java文件
- 测试kafka和storm的结合
    - 打开两个窗口(也可以在两台机器上分别打开)，分别m2上运行kafka的producer，在s1上运行kafka的consumer(如果刚才打开了就不用再打开),先测试kafka自运行是否正常。
    - 如下所示，我在m2上运行producer，输入“hellowelcomeidoall.org”，在s1的机器上consumer同样收到了消息。说明kafka已经运行正常，并且消息通讯也没有问题。
    - m2机器输出的消息：
    - s1机器接收的消息：
- 我们再在Eclipse中运行KafkaTopologytest.java，可以看到在控制台，同样收到了刚才在m2上kafka发送的消息。说明kafka和storm也打通了。

#### flume、kafka、storm的整合 
- 从上面两个例子我们可以看到，flume和kafka之前已经完成了通讯和部署，kafka和storm之间可以正常通讯，只差把storm的相关文件打包成jar部署到storm中即可完成三者的通讯。
- Storm的安装、配置、部署，如果不了解，可以参考这篇文章《ubuntu12.04+storm0.9.2分布式集群的搭建》
- 复制kafka相关的jar包到storm的lib里面。（因为在上面我们已经说过，kafka和storm的整合，主要是重写storm的spout，调用kafka的Consumer来接收消息并打印，所在需要用到这些jar包）
- 在m1上启动storm nimbus
- 在s1,s2上启动storm supervisor
- 在m1上启动storm ui
- 将Eclipse中的文件打包成jar复制到做任意目录，然后用storm来运行
- 在flume中发消息，在storm中看是否有接收到
    - 在flume中发送的消息：
    - storm中显示的内容：

##### 通过以上实例，即完成了flume、kafka、storm之间的通讯，