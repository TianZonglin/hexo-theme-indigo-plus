date: 2017-11-15
categories: 研究方向
tags: [WebSocket,可视化,布局算法]
comments: true
title: 用WebSocket给传统Web系统赋能
---

#### 现有的机制
传统的Web系统的全部交互都采用HTTP请求的方式，另外在可视化领域的一些Web展示系统，也多是以HTTP请求的方式来返回需要展示的结果，虽然使用AJAX等技术可以使展示结果具有很高的交互性，但是本质上仍然是针对某一次返回结果的再加工。

#### 难以完成的任务
对于这样的场景：需要将某个迭代算法中每次迭代的数据进行可视化，传统认知上这样的需求一般在Java语言领域使用JavaSwing进行开发，保证展示效果的同时也保证了整个数据传输的效率（几乎没有传输损耗，数据都在内存中），如果非要以Web方式承载，那么一般方式是使用Ajax长轮询，这种方式核心仍然是一个个的HTTP请求，并不能将算法中迭代的某一中间结果返回到Web端。

#### 解决方式
WebSocket技术伴随着HTML5出现后给这种场景提供了一种可行的解决方案，其可以允许前后台创建一种类似Socket的长连接机制，而且可以维持多个连接，这种非常类似Socket的特点也使得其取名为WebSocket，可以允许前后台建立一个稳定的连接，在后台代码中这个连接以Session的方式维护，后台可以无限制的、随时的、随处的向前台传输数据（只需引用这个Session）。总的来说，这种方式赋予了传统Web系统（BS系统）具有CS系统的敏捷性和便捷性（数据传输不限于请求）。

#### 其他解决方案
本质上，一切以连接为基础的数据交互都能完成展示中间计算步骤的目的，例如Redis和一些MQ队列等等，但是能在前端支持js客户端的并不多见，阿里现在支持redis的js client，也有类似GoEasy这种黑盒方式的 前后台通讯方式，不过这些方式严重依赖第三方管理（例如上述两者都需要其自家的秘钥等等），在使用过程中并不透明，WebSocket在这方面具有优良的特性，而且也可以轻易的进行诸如队列的扩展。

#### 如何实现
在《WebSocket的使用》中已经对其开发方式做了说明，这里只对部分关键内容进行描述，其实区别于示例代码（多人实时聊天），对于一个需要中间过程数据的系统，例如布局算法中迭代结果的过程展现，其区别是很明显的：
    
- 不需要多人连接，也就不需要在Server对消息进行群发
对于前者，只需在原有在线人数上加判断即可(前文代码中有)
对于后者，之前代码中的群发部分就可以删除了
```java
/*
 * 收到客户端消息后调用的方法
 * @param message 客户端发送过来的消息
 * @param session 
 */
@OnMessage
public void onMessage(String message, Session session) {
	System.out.println("来自客户端的消息:" + message);
	//群发消息,可以删掉
	for(WebSocketTest item: webSocketSet){
		try {
			item.sendMessage(message);
		} catch (IOException e) {
			e.printStackTrace();
			continue;
		}
	}
}
```

- 需要在算法迭代过程中对当前会话进行引用，即迭代时需要Session在场：
```java
//下面的核心迭代控制代码中引入Session
//然后在每次迭代过程中，将当前步的数据通过session.getBasicRemote().sendText方法发送给前端
//当然，也可以将Session传入更深层的算法步中，使前台获取更深层算法步骤的中间值
@Override
public void doLayout(Session session) {
	try {
		this.initAlgo();
		if (layoutByTimes) {
			for (int i = 0; i < times; ++i) {
				this.goAlgo();
				this.temperature=cool(this.temperature);
				session.getBasicRemote().sendText(Output.outputJson(graph));
				Thread.sleep(1000);
			}
		} else { //如果没有迭代参数，则会按一次迭代来执行
			this.goAlgo();
			int times = 1;
			double force = Math.sqrt(this.resultantForceX
					* this.resultantForceX + this.resultantForceY
					+ this.resultantForceY);
			System.out.println(force);
			while (this.forceThreshold < force) {
				this.goAlgo();
				times++;
				System.out.println(force);
				force = Math.sqrt(this.resultantForceX
						* this.resultantForceX + this.resultantForceY
						+ this.resultantForceY);
				Thread.sleep(1000);
				session.getBasicRemote().sendText(Output.outputJson(graph)); 
			}
			System.out.println("times=" + times);
		}
	} catch (Exception e) {
		// TODO Auto-generated catch block
		System.out.println("暂时没实现这种类型的布局");
		e.printStackTrace();
	}
}
```

- 修改原先的OnMessa方法，将此方法改造为类似Servlet的方法，该方法现在是作为后台接收前端数据的桥头堡，应该在这里对前端的数据进行过滤，并在此方法内发起相应的后台操作。
```java
@OnMessage
public void onMessage(String message, Session session) {
	System.out.println("来自客户端的消息:" + message);
	//群发消息
	try {
		dojob(message); //这里做了简单包装，将全部逻辑放到dojob中去做
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}	
}
```

#### 实现结果
可以将整个布局算法在迭代过程中的每个步骤的布局结构都在前端进行展示，下面的效果只进行了一次请求，每次绘制的数据都是通过WebSocket传输到前端的，效果如下：
（由于算法写的还有点问题所以节点运动轨迹有点问题，不过不影响效果展示）
![GIF.gif-7105.2kB][1]


  [1]: http://static.zybuluo.com/EVA001/cdu5ysgbca67hg3ya97x3c04/GIF.gif