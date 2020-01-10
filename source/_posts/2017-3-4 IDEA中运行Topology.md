date: 2017-3-4
categories: 大数据相关
tags: [IDEA,Storm,调试]
comments: true
title: IDEA中运行Topology
---

## 基本调试过程				   	  

现在IDEA编译成功topo后，使用WinSCP将打包好的包传到主节点

注意：打包之前--要讲 [ 本地模式 ] 改为 [ 集群模式 ]
```
//本地测试模式           
LocalCluster cluster = new LocalCluster();
    cluster.submitTopology("firstTopo", conf, builder.createTopology());
    Utils.sleep(100000);
    cluster.killTopology("firstTopo");
    cluster.shutdown();
    //集群提交模式
    StormSubmitter.submitTopology("firstTopo", conf, builder.createTopology());
```
 
storm.yaml文件中的seeds选项不能与host同时存在
如果同时存在，则storm运行时会出错：提交任务找不到主类等等

 

修改storm配置中的UI端口，只能！在nimbus中修改
在supervisor中修改会导致supervisor启动不了，会报一下错误
```
Caused by: while scanning a simple key
 in 'reader', line 32, column 2:
     ui.port = 8000
     ^
could not found expected ':'
 in 'reader', line 33, column 1:
    # 
```
 

package是把jar打到本项目的target下，
install时把target下的jar安装到本地仓库，供其他项目使用
此处使用
先clean再使用pakage打包
```
storm jar  simple-1.0.jar Random.FirstTopo
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.test</groupId>
    <artifactId>simple</artifactId>
    <version>1.0</version>
    <packaging>jar</packaging>

    <name>simple</name>
    <url>http://maven.apache.org</url>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.storm</groupId>
            <artifactId>storm-core</artifactId>
            <version>1.0.1</version>
            <scope>compile</scope>  
            //引入依赖的方式默认[没有scope]为compile，意为最后打包无需包含此依赖，
            //provided必须显式写出scope[打包时会包含依赖]
        </dependency>
    </dependencies>

    <build>
        <plugins>
            //可删去
            <plugin>  
                <artifactId>maven-compiler-plugin</artifactId>
                <version>2.3.2</version>
                <configuration>
                    <source>1.8</source>              
                    //实测此处的1.8没有什么用处，改成1.6也行，但是最好改成与系统一致的jdk版本
                    <target>1.8</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
            <plugin>

            <plugin>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>2.4</version>
                <configuration>
                    <descriptorRefs>
                        <descriptorRef>jar-with-dependencies</descriptorRef>
                    </descriptorRefs>
                </configuration>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```
 
![截图.png-328.3kB][1]

Random包下有三个文件，则再提交时，main入口class应为 Random.FirstTopo
提交命令中的jar应为上图中的simple-1.0.jar
simple-1.0.jar                                           5 KB
simple-1.0-jar-with-dependencies.jar    24735 KB
src/main/java/Random : src,main,java都不算路径，Random才对应eclipse中的package


## 运行组合用例	 
```
Object : kafka-storm-demo
Assign：
 
[IDEA] 打包的时候要改为 集群 模式
[IDEA] 修改topic的名称
[IDEA] 验证成功与否需要在console中查看System.out的输出
[Attention!] 此实例可以放在集群中提交，但是在集群中无法验证是否执行成功
  因为代码中只有 [ 系统输出 ] 在集群中提交并不会将输出写入日志，
  也就是说，查看日志等方法无法知道是否执行成功，唯一的方式是
  在IDEA的调试窗口看输出。
```
```
[Prepare] IDEA运行程序
[Prepare] CRT_1开启flume
[Prepare] CRT_2开启kafka-consumer
[Prepare] CRT_3开启shell脚本循环写log文件（模拟生产）
```
```
[Process-1] CRT_3循环写log，文本 => logg.log								[会在界面输出]
[Process-2] CRT_1监控logg文件，文本 => logg.log => flume					[输出同上一致]
[Process-3] flume充当producer，文本 => logg.log => flume => kafkaproducer
[Process-4] storm获取产生数据并处理，文本 => logg.log => flume => kafkaproducer => storm
[Process-5] 数据被订阅方consumer接收，文本 => logg.log => flume => kafkaproducer => storm => kafkaconsumer
```
```
flume+kafka+storm
[do] topic：test 上述各方的topic要一致，不一致要在代码中改过来
[do] cd cmd  => sh logg.sh			                                        
                                                                            打开脚本生产数据[1]
[do]应有的终端窗口 flume | consumer | shell-log | idea-console 									
[do] bin/flume-ng agent --conf conf --conf-file conf/flume-conf.properties --name producer -Dflume.root.logger=INFO,console			                                
                                                                            开启flume[2]
[do] kafka-console-producer.sh --broker-list hadoop01:9092 --topic test     开启消费者[3]
[do] storm jar simple-1.0.jar Skafka.KafkaTopologytest						提交任务[4]
```


  [1]: http://static.zybuluo.com/EVA001/iqhcxzeui6kvxn9h83h5u80x/%E6%88%AA%E5%9B%BE.png