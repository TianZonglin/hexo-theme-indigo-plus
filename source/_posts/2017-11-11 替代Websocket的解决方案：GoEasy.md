date: 2017-11-11
categories: 研究方向
tags: [WebSocket,可视化]
comments: true
title: 替代Websocket的解决方案：GoEasy
---

### 写在前面

GoEasy这个库的适用场景：同Websocket的场景
在后台使用例如Java进行逻辑处理后将变量的值传入前台，前台不用发起请求即可接收后台发布的数据，
整个流程与Redis的Pub和Sub过程类似
整个交互类似Socket的长连接，前台首次调用不需要请求后台。
非常适合监控后台参数等场景；

>但是：
GoEasy最大的问题：传输数据大小有限制，大概只有几千字符！！
超出大小的传输部分会被丢弃从而会报错。

### 从GoEasy获取appkey

appkey是验证用户的有效性的唯一标识。

注册账号。 GoEasy官网：http://goeasy.io
用注册好的账号登录到GoEasy的后台管理系统，创建您自己应用（application）.
Application创建好之后系统会自动为您生成appkey
系统会生成两个keys，一个Super key和一个Subscribe key；它们的区别在于前者既可以订阅又可以推送，但后者只能用于订阅。

### GoEasy实现向特定用户群推送的原理

知道了他们的推送原理，可以更加方便我们了解他们的服务，以及理解我们写的代码。其实原理很简单，只需要确定哪些用户需要接收信息，然后让这些用户都订阅一个相同的channel（频道）。 然后再往这个平台上推送消息即可！所有关键在于channel，channel一致，则可以接收到信息，否则收不到！

对于订阅必须要的信息有：Appkey, channel

对于推送必须要的信息有：Appkey, channel, content

### 用GoEasy实现订阅（接收）的实例

```
<script type="text/javascript" src="https://cdn.goeasy.io/goeasy.js"></script>

<script type="text/javascript">
             var goEasy = new GoEasy({appkey: 'your appkey'});
                                goEasy.subscribe({
                         channel: 'your_channel',
                         onMessage: function(message){
                                alert('接收到消息:'+message.content);
                                //拿到了信息之后，你可以做你任何想做的事
                         }
               });
</script>     
```

有了这几行代码后，只要保证网络畅通的情况下，页面会自动弹出你从任何平台上推送的信息。

### 用GoEasy实现推送及接收的实例

目前GoEasy支持三种推送方式： Java后台推送（它们有提供JAVA SDK和 maven远程仓库）， JS推送，RestAPI推送（有了RestAPI，我们就可以用PHP, .NET, Ruby…来推送信息了，很方便）

 

说了这么多，来我们看一下怎么用GoEasy的三种方式分别实现推送吧。

#### 用GoEasy SDK推送

##### 获取SDK

Java SDK的获取方式，方式一，直接在goeasy的官网上进行下载；方式二，用maven远程库直接导入到项目中。尽管官网上已经做了相同的说明了，我这里还是把关键点帖出来，方便大家查看。

GoEasy SDK下载链接：http://maven.goeasy.io/service/local/artifact/maven/redirect?r=releases&g=io.goeasy&a=goeasy-sdk&v=0.3.3&e=jar

GoEasy远程maven库的配置：

```
<repository>
    <id>goeasy</id>
    <name>goeasy</name>
    <url>http://maven.goeasy.io/content/repositories/releases/</url>
</repository>
 …
<dependency>
    <groupId>io.goeasy</groupId>
    <artifactId>goeasy-sdk</artifactId>
    <version>0.3.3</version>
</dependency>
```
 
需要注意的是：GoEasy需要依赖两个额外的jar 包：
gson.jar : http://repo.maven.apache.org/maven2/com/google/code/gson/gson/2.3.1/gson-2.3.1.jar
slf4j-api.jar : http://repo.maven.apache.org/maven2/org/slf4j/slf4j-api/1.7.2/slf4j-api-1.7.2.jar

##### 实例化GoEasy对象

```
GoEasy goEasy = new GoEasy("your appkey");
``` 

##### 推送消息

```
goEasy.publish('your_channel', 'First message');
```

#### JS推送

**Step1.引入goeasy.js**


```
CDN：https://cdn.goeasy.io/goeasy.js
``` 

**Step2.实例化Goeasy对象，并用publish函数进行推送**

```

var goEasy = new GoEasy({appkey: 'your appkey'});
	   goEasy. publish ({
			channel: 'your_channel', 
			message: 'Second message！'
});

```
 

#### 用RestAPI进行推送

URL: https://goeasy.io/goeasy/publish
Method: Post
参数：appkey, channel, content
例如：https://goeasy.io/goeasy/publish?appkey={your_appkey}&channel={your_channel}&content={your_message}
 
GoEasy官网：http://goeasy.io
快速入门：http://goeasy.io/www/started
文档下载：http://goeasy.io/www/documents




