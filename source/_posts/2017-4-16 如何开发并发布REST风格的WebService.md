date: 2017-4-16
categories: Java/数据库
tags: [WebService,总结]
comments: true
title: 如何开发并发布REST风格的WebService
---

>在《WebService的使用》中已经可以发现其调用方式非常简单，但是也知道一个WebService服务包含非常多的定义和描述（在对WSDL文件的分析中就可以看出），可以说其实现是非常的复杂。不过，在常见开发语言中（JavaC#）都有对实现WebService的封装框架，Java下有AXIS2、CXF、JAX-WS、XFire方式，并且每种方式在常见IDE如Eclipse中都有相关的插件支持或者操作界面化的支持。

#### 开发和使用的复杂性
>AXIS2、CXF、XFire均需要引入其自身的支持，而且有的需要特殊的代码结构支持，这里采用JDK原生支持的方式来对WebService的实现进行简单阐述。

>通常来说使用JAX-WS方式是最简单快速的开发方式，是JDK支持的一种编写方法，实现非常简单，但是相对的，在使用时，其并不支持多种方式调用，也不支持直接的Http调用，需要添加相关方法来辅助实现调用的完成，不过这一过程在Eclipse中可以自动根据WSDL文件来生成相关代码。JAX-WS的不足突出体现在调用方式的笨拙上，即不支持REST方式的调用，为此出现了其进阶版JAX-RS（Java API for RESTful Web Services）这是一个Java编程语言的应用程序接口，支持按照表述性状态转移（REST）架构风格创建Web服务。它有好几种实现方式，而Jersey是其实现方式之一。

#### 使用Eclipse开发示例
    示例完成的功能：
    同天气接口一样，在地址栏输入调用链接并返回数据；
    在Java代码中调用返回数据；
    新建一个Web Service Project，注意要选择JAX-RS选项，并且添加Maven支持。右侧是初始项目结构：
![a.png-60.8kB][1]    
![b.png-12.2kB][2]
>对于上述项目结构，我们要实现发布一个服务，只需要关心三部分：
首先，打开pom.xml添加项目依赖；
然后，在src/main/java下编写逻辑代码；
最后，在web.xml中修改拦截目录以及对应上述代码的位置

#### 打开pom.xml添加项目依赖；
>这部分主要添加的是jersey的包，这里使用的是org.glassfish.jersey提供的包，不同组织提供了不同的包，但本质实现的功能都是一样的，这里添加jersey-bom这个包（对应其他组织提供的包可能需要导入的包名会发生变化）。

#### 在src/main/java下编写逻辑代码；
![c.png-67.5kB][3] 

#### 在web.xml中修改
![d.png-53.5kB][4] 
上述三部分完成后，在Tomcat中运行即可，然后在浏览器中测试一下。
![e.png-94.6kB][5]
 
#### Java代码中的调用
![f.png-48.9kB][6]

#### 总结
>在JDK原生支持的WebService开发方式中，JAX-WS和JAX-RS是主要的形式，前者在使用上较为不便，所以推荐时候支持REST方式的JAX-RS进行开发，而其本身只是一种规范，Jersey是这种规范的实现之一，上述示例即使用Jersey完成了一个简单的WebService的开发，其调用方式与之前提到的天气接口相同，非常方便，且使用Jersey开发的整个流程也十分简单快速。


  [1]: http://static.zybuluo.com/EVA001/xww9la2y3o9omvixwx2y67ns/a.png
  [2]: http://static.zybuluo.com/EVA001/rmrdh4ishi91t9zwuxn1qx9t/b.png
  [3]: http://static.zybuluo.com/EVA001/qs9gdzvgugt4fhbegh8r8dw9/c.png
  [4]: http://static.zybuluo.com/EVA001/pbgsxfedrdnccesaliavhmah/d.png
  [5]: http://static.zybuluo.com/EVA001/nwjcfn5suu7bdt4k6pi4adoa/e.png
  [6]: http://static.zybuluo.com/EVA001/t8pyjhh03tm2js4gvnc8kumg/f.png