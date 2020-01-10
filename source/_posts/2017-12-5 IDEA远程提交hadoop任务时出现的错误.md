date: 2017-12-5
categories: Hadoop相关
tags: [WebSocket,可视化,布局算法]
comments: true
title: IDEA远程提交hadoop任务时出现的错误
---

### 远程过程中出现的一些错误


```
Cannot delete /tmp/hadoop-yarn/staging/hadoop/.staging/job_1477796535608_0001. Name node is in safe mode.
```
上述问题解决：Linux集群中的namenode没有关闭safemode


```
2017-12-05 18:32:27,979 INFO  [main] mapred.ClientServiceDelegate (ClientServiceDelegate.java:getProxy(276)) - Application state is completed. FinalApplicationStatus=SUCCEEDED. Redirecting to job history server
Retrying connect to server: 192.168.146.130/192.168.146.130:10020. Already tried 9 time(s); retry policy is RetryUpToMaximumCountWithFixedSleep(maxRetries=10, sleepTime=1000 MILLISECONDS)
Exception in thread "main" java.io.IOException: java.net.ConnectException: Call From MSI/118.202.43.35 to 192.168.146.130:10020 failed on connection exception: java.net.ConnectException: Connection refused: no further information; For more details see:  http://wiki.apache.org/hadoop/ConnectionRefused
```
上述问题解决：开启historyserver服务  mr-jobhistory-daemon.sh start historyserver

```
Exception in thread "main" java.io.IOException: Job status not available 
```
上述问题解决：在mapred-site.xml中添加如下配置：

```
  <property> 
    <name>yarn.app.mapreduce.am.staging-dir</name> 
    <value>/tmp/hadoop-yarn/staging</value>
  </property> 
  <property> 
    <name>mapreduce.jobhistory.intermediate-done-dir</name> 
    <value>${yarn.app.mapreduce.am.staging-dir}/history/done_intermediate</value> 
  </property> 
  <property> 
    <name>mapreduce.jobhistory.done-dir</name> 
    <value>${yarn.app.mapreduce.am.staging-dir}/history/done</value> 
  </property>
```


    **注意**：在本地PC可以访问虚拟机集群的
    hdfs  监控：xxx.xxx.xxx.xxx:50070
    mr job监控：xxx.xxx.xxx.xxx:19888


```
WebUI无权访问hdfs文件夹/tmp
Permission denied: user=dr.who, access=READ_EXECUTE, inode="/tmp":hadoop:supergroup:drwx------
```
上述问题解决：hadoop dfs -chmod -R 755 /tmp
注意：其显示是弃用的方法，不过仍然有效


### hadoop put 机制
特别注意！关于hdfs的底层原理（上传一个文件的整个历程）
[一定要看这个文章](http://www.daniubiji.cn/archives/596)、[文章的备用连接](https://www.cnblogs.com/laov/p/3434917.html)

<iframe height="500px" width="100%" src="https://yq.aliyun.com/articles/37968"></iframe>