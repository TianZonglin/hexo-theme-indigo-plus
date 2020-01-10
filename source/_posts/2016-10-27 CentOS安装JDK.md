date: 2016-10-27 
categories: Hadoop相关
tags: [CentOS,JDK]
comments: true
title: CentOS安装JDK
---


## centos 安装jdk
>目的是使用hadoop
不要使用openjdk，要使用更完整的jdk，Oracle官网

首先卸载当前已有的jdk【root下进行】
```
java-version显示当前jdk
rpm -qa | grep java将本机全部的jdk查找出来
```
然后挨个卸载之
```
rpm -e --nodeps java-1.x.x-openjdk-xxx将此jdk卸载
yum -y remove java java-1.x.x-openjdk-xxx双管齐下，确保卸载
```

之后开始安装jdk【hadoop用户下即可】
用浏览器去官网下载tar.gz后缀的jdk，64位的要选x64的jdk
```
sudo tar -zxf ~/下载/jdk-x.x.x.tar.gz -C /usr/local/java 【使用浏览器默认下载路径】
```
以上将下载好的jdk直接解压到/usr/local/java目录中

修改环境变量，双管齐下
【root中】修改、etc/profile
在profile中末尾添加：
```
JAVA_HOME=你的路径
export JRE_HOME=你的路径/jre
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
然后
source /etc/profile
```

【hadoop中】修改 ~/.bashrc 
```
在bashrc末尾加上JAVA_HOME=你的路径
然后source ~/.bashrc
```
【hadoop中】测试
java -version输出版本则表示OK
>注意：
去到hadoop目录下找到hadoop-env.sh
此文件在/usr/local/hadoop/etc/hadoop 中
其中找到JAVA_HOME，看是否对应正确的当前jdk路径

【hadoop中】终极测试
```
  1. cd /usr/local/hadoop
  2. mkdir ./input
  3. cp ./etc/hadoop/*.xml ./input   将配置文件作为输入文件
  4. ./bin/hadoop jar ./share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar grep ./input ./output 'dfs[a-z.]+'
  5. cat ./output/*      
运行hadoop的wordcount实例，正常则OK
```
完








