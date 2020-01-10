date: 2017-2-24 
categories: Hadoop相关
tags: [IDEA,Hadoop,调试]
comments: true
title: 在windows下使用IDEA远程连接linux集群进行mapreduce调试
---

在windows下使用IDEA远程连接linux集群进行mapreduce调试

改用户名，administrator改为hadoop，即改为linux集群的用户名，我的为hadoop

将hadoop.tar.gz解压至windows下，添加系统变量跟环境变量 HADOOP_HOME，添加PATH追加上HADOOP_HOME\bin;HADOOP_HOME\sbin;

在Windows下解压winutils包，将其内的七个文件复制到hadoop目录下的bin中和lib中
 
 - 打开IDEA，新建maven项目，测试maven是否正常打包，正常则跳过，不正常则（maven缺失）：下载maven并解压到自定义目录，配置环境变量和系统变量，MAVEN_HOME(可不要)和M2_HOME，并在PATH路径中加入M2_HOME\bin和\sbin。
 - 再次新建maven项目，在idea左下角的运行选项中选择maven，在弹出对话框中填写入运行参数，如-Dmaven……=$M2_HOME
 - 点击运行，出现打包信息，则表示maven正常使用，继续下一步。

开启集群，即
>start-all.sh
mr-jobhistory-daemon.sh start historyserver [一定要开historyserver]

linux下开启集群，开启后一定要确定集群开启无误，并且确定\input目录存在且有数据（因为要运行wordcount必须有输入）之后就不用动了（本人用的是虚拟机）

之后注意要关闭防火墙，一般已经关闭
还要离开安全模式，即
>hadoop -dfsadmin safemode leave

正式开始IDEA调试：
>新建maven项目，之后右键项目出现菜单中选择open module setting ，选择dependencies
点绿色＋号添加library，找到hadoop目录下的share中的hadoop文件夹，将其中的除https之外的文件全部添加进来，可以取名为hadoop

 - 打开pom.xml，添加相关依赖，之后右上角会有import导入提示，点击后就会导入相关依赖，同时先前的红色字体（错误）会变为灰色（正确），到此maven配置结束。

 - 在main文件夹中的resources下新建log4j.properties和core-site.xml，即一些配置项文件。

 - 在main文件夹中的java中新建wordcount类，具体代码可从网上得到，注意代码中的conf.()设置，其中内容要跟linux集群相匹配，另外其他xxx:9000等类似地方也要修改为自己的master节点的ip。

 - 从置顶菜单栏中选择run configration，在弹出的配置页中添加运行参数，包括xxxx:9000\tmp\input，和xxxx:9000\tmp\output，注意此处的input文件夹在运行之前就要存在，而output文件夹在运行之前不能存在。另外端口9000后的路径就是linux下的真实路径，即运行的输入输出均不在Windows本地，而在远程linux。

 - 要去开启或关闭windows功能中，勾选上telnet，在windows系统中telnet是默认关闭的，要手动开启。

 - 最后一步，从IDEA左下角选择maven启动项，填上参数点击run，即可开始运行mapreduce代码，远程调用集群的资源，本地并不涉及存取，相应的运行信息或者日志均在IDEA下打印。

修改用户名为hadoop，首先要去用户管理里修改、
然后去，用户组管理里修改，分两步！！！！






