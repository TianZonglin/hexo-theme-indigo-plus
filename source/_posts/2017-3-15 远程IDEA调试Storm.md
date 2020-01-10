date: 2017-3-15
categories: 大数据相关
tags: [IDEA,Storm,调试]
comments: true
title: 远程IDEA调试Storm
---

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
--------------------------------------------

storm.yaml文件中的seeds选项不能与host同时存在
如果同时存在，则storm运行时会出错：提交任务找不到主类等等

--------------------------------------------

修改storm配置中的UI端口，只能！在nimbus中修改
```
在supervisor中修改会导致supervisor启动不了，会报一下错误
Caused by: while scanning a simple key
 in 'reader', line 32, column 2:
     ui.port = 8000
     ^
could not found expected ':'
 in 'reader', line 33, column 1:
    # 
```
--------------------------------------------

package是把jar打到本项目的target下，
install时把target下的jar安装到本地仓库，供其他项目使用
此处使用
先clean再使用pakage打包
```
storm jar  simple-1.0.jar Random.FirstTopo
```
Maven配置文件
```java
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
--------------------------------------------
![截图.png-328.3kB][1]

Random包下有三个文件，则再提交时，main入口class应为 Random.FirstTopo
提交命令中的jar应为上图中的simple-1.0.jar
```
simple-1.0.jar                                           5 KB
simple-1.0-jar-with-dependencies.jar    24735 KB
src/main/java/Random : src,main,java都不算路径，Random才对应eclipse中的package
```

附SenqueceBolt:
```
package Random; /**
 * Created by hadoop on 2017/3/1.
 */
import org.apache.storm.topology.BasicOutputCollector;
import org.apache.storm.topology.OutputFieldsDeclarer;
import org.apache.storm.topology.base.BaseBasicBolt;
import org.apache.storm.tuple.Tuple;

public class SenqueceBolt extends BaseBasicBolt{
    /* (non-Javadoc)
     * @see backtype.storm.topology.IBasicBolt#execute(backtype.storm.tuple.Tuple, backtype.storm.topology.BasicOutputCollector)
     */
    public void execute(Tuple input, BasicOutputCollector collector) {
        // TODO Auto-generated method stub
        String word = (String) input.getValue(0);
        String out = "I'm " + word +  "!";
        System.out.println("out=" + out);
    }

    /* (non-Javadoc)
     * @see backtype.storm.topology.IComponent#declareOutputFields(backtype.storm.topology.OutputFieldsDeclarer)
     */
    public void declareOutputFields(OutputFieldsDeclarer declarer) {
        // TODO Auto-generated method stub
    }
}
```
附RandomSpout:
```
package Random; /**
 * Created by hadoop on 2017/3/1.
 */
import org.apache.storm.spout.SpoutOutputCollector;
import org.apache.storm.task.TopologyContext;
import org.apache.storm.topology.OutputFieldsDeclarer;
import org.apache.storm.topology.base.BaseRichSpout;
import org.apache.storm.tuple.Fields;
import org.apache.storm.tuple.Values;

import java.util.Map;
import java.util.Random;

public class RandomSpout extends BaseRichSpout{
    private SpoutOutputCollector collector;
    private static String[] words = {"happy","excited","angry"};

    /* (non-Javadoc)
     * @see backtype.storm.spout.ISpout#open(java.util.Map, backtype.storm.task.TopologyContext, backtype.storm.spout.SpoutOutputCollector)
     */
    public void open(Map arg0, TopologyContext arg1, SpoutOutputCollector arg2) {
        // TODO Auto-generated method stub
        this.collector = arg2;
    }

    /* (non-Javadoc)
     * @see backtype.storm.spout.ISpout#nextTuple()
     */
    public void nextTuple() {
        // TODO Auto-generated method stub
        String word = words[new Random().nextInt(words.length)];
        collector.emit(new Values(word));
    }

    /* (non-Javadoc)
     * @see backtype.storm.topology.IComponent#declareOutputFields(backtype.storm.topology.OutputFieldsDeclarer)
     */
    public void declareOutputFields(OutputFieldsDeclarer arg0) {
        // TODO Auto-generated method stub
        arg0.declare(new Fields("randomstring"));
    }
}
```
附FirstTopo:
```
package Random; /**
 * Created by hadoop on 2017/3/1.
 */
import org.apache.storm.Config;
import org.apache.storm.LocalCluster;
import org.apache.storm.StormSubmitter;
import org.apache.storm.topology.TopologyBuilder;
import org.apache.storm.utils.Utils;

public class FirstTopo {

    public static void main(String[] args) throws Exception {
        TopologyBuilder builder = new TopologyBuilder();
        builder.setSpout("spout", new RandomSpout());
        builder.setBolt("bolt", new SenqueceBolt()).shuffleGrouping("spout");
        Config conf = new Config();
        conf.setDebug(false);
        if (args != null && args.length > 0) {
            conf.setNumWorkers(3);
            StormSubmitter.submitTopology(args[0], conf, builder.createTopology());
        } else {

            LocalCluster cluster = new LocalCluster();
            cluster.submitTopology("firstTopo", conf, builder.createTopology());
            Utils.sleep(100000);
            cluster.killTopology("firstTopo");
            cluster.shutdown();
        }
    }
}
```
  [1]: http://static.zybuluo.com/EVA001/lujg9lqc83tgrb3znpgm7d3b/%E6%88%AA%E5%9B%BE.png