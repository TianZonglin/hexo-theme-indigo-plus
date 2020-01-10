date: 2017-11-17
categories: 研究方向
tags: [WebSocket,调试]
comments: true
title: WebSocket的初次使用及调试
---

#### 出现的错误

```
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.3:compile (default-compile) on project JavaWebSocket: Fatal error compiling: 无效的目标发行版: 1.8 -> [Help 1]
```

**修改：**

```
       <plugin>
        <artifactId>maven-war-plugin</artifactId>
        <version>2.6</version>
        <configuration>
          <warSourceDirectory>WebRoot</warSourceDirectory>
          <failOnMissingWebXml>false</failOnMissingWebXml>
        </configuration>
      </plugin>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.3</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>

    <plugins>
      <plugin>
        <artifactId>maven-war-plugin</artifactId>
      </plugin>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>1.6</source>
          <target>1.6</target>
        </configuration>
      </plugin>
    </plugins>
```


**此处使用maven自动打包上传的插件**

```
              <plugin>  
			    <groupId>org.codehaus.mojo</groupId>  
			    <artifactId>tomcat-maven-plugin</artifactId>  
			    <version>1.1</version>  
			    <configuration>  
			        <url>http://localhost:9080/manager/text</url>  
			        <server>tomcat8</server>  
			        <username>admin</username>  
			        <password>admin</password>  
			        <ignorePackaging>true</ignorePackaging>    
			    </configuration>  
			</plugin>
```			

**tomcat-users.xml（修改后重启Tomcat）**

```
<tomcat-users>	
	    <role rolename="admin-gui"/>  
    <role rolename="admin-script"/>  
    <role rolename="manager-gui"/>  
    <role rolename="manager-script"/>  
    <role rolename="manager-jmx"/>  
    <role rolename="manager-status"/>  
    <user username="admin" password="admin" roles="manager-gui,manager-script,manager-jmx,manager-status,admin-script,admin-gui"/>  
</tomcat-users>
```

**部署的名字与pom.xml开头的配置是一致的**

```
  <modelVersion>4.0.0</modelVersion>
  <groupId>WeeeebSkt</groupId>
  <artifactId>WeeeebSkt</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>war</packaging>
```  

**注意下面的路径+项目名**  

```
[INFO] Deploying war to http://localhost:8080/WeeeebSkt  
[INFO] OK - Deployed application at context path /WeeeebSkt
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 2.045 s
[INFO] Finished at: 2017-11-13T13:29:02+08:00
[INFO] Final Memory: 15M/308M
[INFO] ------------------------------------------------------------------------
```

**果然报错**

```
    (index):20 WebSocket connection to 'ws://localhost:8080/websocket' failed: Error during WebSocket handshake: Unexpected response code: 404
```
 
 
 **定位前台的出错位置：**
 
 ![image_1bupu08q5hn82aepo61qp31dr09.png-36.3kB][1]
 
 **确认后台的EndPoint：**
 
 ![image_1bupu1ltd8muej0nmn1o6u1cv8m.png-12.5kB][2]
 
 **完全对应，怎么会出错？？？**
 
 **当前环境：**
 
 ![image_1bupu4rg71ee81cps6rod41qs39.png-62.4kB][3]
 
 **项目环境，依赖：**
 
 ![image_1bupu6m1h1ou567jq8k19blcpdm.png-25.3kB][4]
 
 **查找错误：**
 
 更换 Tomcat8.5 + JavaSE-1.8 结果完全一样的错误
 
> j2ee 项目里面是不是设置了拦截器之类的东西，在web.xml中配置的。可能ws协议的请求被拦截器拦截下来了。这方面的问题网络上有很多。
我犯过的一个弱智的错误：在 ws 请求路径中没有写 j2ee 的项目名称。比如我的工程项目叫BoardGame，
var webSocket = new WebSocket('ws://localhost:8080/BoardGame/websocket'); 
//没有 BoardGame 所有一定是找不到的。
 
**修改Tomcat7版本的代码：**

前台代码修改：

```
if ('WebSocket' in window) {
    //websocket = new WebSocket("ws://localhost:8080/websocket");
    websocket = new WebSocket("ws://localhost:8080/websocket");
}
```

**错误还是依旧：**

```
WebSocket connection to 'ws://localhost:8080/WeeeebSkt/websocket' failed: Error during WebSocket handshake: Unexpected response code: 404
```

**修改Tomcat8版本的代码：**

前台代码修改：

```
if ('WebSocket' in window) {
    //websocket = new WebSocket("ws://localhost:8080/websocket");
    websocket = new WebSocket("ws://localhost:8080/websocket");
}
```

**已经连接成功：**

```
[CodeLive] HTTP detected: Connecting using WS
VM37:109 [CodeLive] Connected to CodeLive at ws://127.0.0.1:8123
```

通过比较Tomcat7的Webapps中部署的文件来看，和Tomcat8.5中的完全一样，但是，结果是失败的。
之后又尝试了很多修改都是报错。

#### 结论

如果你使用Tomcat7.05以上的版本+J2SE-1.7来尝试websocket时出现404，别找错误了，坑太多，直接更换环境吧，使用Tomcat8以上+J2SE-1.8是完全可行的，已亲测。
 
#### 运行效果

![image_1bupvpea51j8va86v82154jase9.png-142.1kB][5]
 
 
 
 
#### 下面是相关代码

前台index.jsp中核心的javascript调用：

```
<script type="text/javascript">
    var websocket = null;
    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
        websocket = new WebSocket("ws://localhost:8080/websocket");
    }
    else {
        alert('当前浏览器 Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function () {
        setMessageInnerHTML("WebSocket连接发生错误");
    };

    //连接成功建立的回调方法
    websocket.onopen = function () {
        setMessageInnerHTML("WebSocket连接成功");
    }

    //接收到消息的回调方法
    websocket.onmessage = function (event) {
        setMessageInnerHTML(event.data);
    }

    //连接关闭的回调方法
    websocket.onclose = function () {
        setMessageInnerHTML("WebSocket连接关闭");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        closeWebSocket();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML) {
        document.getElementById('message').innerHTML += innerHTML + '<br/>';
    }

    //关闭WebSocket连接
    function closeWebSocket() {
        websocket.close();
    }

    //发送消息
    function send() {
        var message = document.getElementById('text').value;
        websocket.send(message);
    }
</script>
```

#### 后台WebSocket的实现

```
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

/**
 * @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
 * 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
 */
@ServerEndpoint("/websocket")
public class Ws {
	//静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
	private static int onlineCount = 0;

	//concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
	private static CopyOnWriteArraySet<Ws> webSocketSet = new CopyOnWriteArraySet<Ws>();

	//与某个客户端的连接会话，需要通过它来给客户端发送数据
	private Session session;

	/**
	 * 连接建立成功调用的方法
	 * @param session  可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
	 */
	@OnOpen
	public void onOpen(Session session){
		this.session = session;
		webSocketSet.add(this);     //加入set中
		addOnlineCount();           //在线数加1
		System.out.println("有新连接加入！当前在线人数为" + getOnlineCount());
	}

	/**
	 * 连接关闭调用的方法
	 */
	@OnClose
	public void onClose(){
		webSocketSet.remove(this);  //从set中删除
		subOnlineCount();           //在线数减1
		System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
	}

	/**
	 * 收到客户端消息后调用的方法
	 * @param message 客户端发送过来的消息
	 * @param session 可选的参数
	 */
	@OnMessage
	public void onMessage(String message, Session session) {
		System.out.println("来自客户端的消息:" + message);
		//群发消息
		for(Ws item: webSocketSet){
			try {
				item.sendMessage(message);
			} catch (IOException e) {
				e.printStackTrace();
				continue;
			}
		}
	}

	/**
	 * 发生错误时调用
	 * @param session
	 * @param error
	 */
	@OnError
	public void onError(Session session, Throwable error){
		System.out.println("发生错误");
		error.printStackTrace();
	}
}
```

#### Maven配置：

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>JavaWebSocket</groupId>
  <artifactId>JavaWebSocket</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>war</packaging>
  <properties>
  	<webVersion>3.1</webVersion>
  </properties>
  <dependencies>
<dependency>
    <groupId>javax.websocket</groupId>
    <artifactId>javax.websocket-api</artifactId>
    <version>1.0</version>
</dependency>
  </dependencies>
  <build>
    <sourceDirectory>src</sourceDirectory>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.3</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>
              <plugin>  
			    <groupId>org.codehaus.mojo</groupId>  
			    <artifactId>tomcat-maven-plugin</artifactId>  
			    <version>1.1</version>  
			    <configuration>  
			        <url>http://localhost:9080/manager/text</url>  
			        <server>tomcat8</server>  
			        <username>admin</username>  
			        <password>admin</password>  
			        <ignorePackaging>true</ignorePackaging>    
			    </configuration>  
			</plugin> 
 
      <plugin>
        <artifactId>maven-war-plugin</artifactId>
        <version>2.6</version>
        <configuration>
          <warSourceDirectory>WebRoot</warSourceDirectory>
          <failOnMissingWebXml>false</failOnMissingWebXml>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```




  [1]: http://static.zybuluo.com/EVA001/zfpvfdautxifby5xd3wlibw9/image_1bupu08q5hn82aepo61qp31dr09.png
  [2]: http://static.zybuluo.com/EVA001/x8tbqgwttbqcn4m2kxkvrqu9/image_1bupu1ltd8muej0nmn1o6u1cv8m.png
  [3]: http://static.zybuluo.com/EVA001/d5un8w5tyaern2u3bf76f1jf/image_1bupu4rg71ee81cps6rod41qs39.png
  [4]: http://static.zybuluo.com/EVA001/tpzj3ebz1givzcsom530hfwz/image_1bupu6m1h1ou567jq8k19blcpdm.png
  [5]: http://static.zybuluo.com/EVA001/zt64tpnhgl4wdykp5jfqw81c/image_1bupvpea51j8va86v82154jase9.png