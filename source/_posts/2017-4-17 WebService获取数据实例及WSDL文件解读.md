date: 2017-4-15
categories: Java/数据库
tags: [WebService,总结]
comments: true
title: WebService获取数据实例及WSDL文件解读
---

#### 网址
这是一个汇总webservice的网站:http://www.webxml.com.cn
里面有非常多可以供调用的WebService
![1.png-147.3kB][1] 

#### 概览
点进某个服务，针对这个服务的方法都有非常详细的方法说明，完整说明以文件的形式列出：
![2.png-27.6kB][2] 
点进某个具体方法是调用接口的具体方式，例如SOAP方式以及Http的Post或者Get方式等等，通常是使用Http进行请求，这种方式返回的结果就是结果本身。（SOAP方式返回结果还有一层soap的标签）
 ![3.png-13.8kB][3]
 
#### 测试使用
在这个页面可以进行对方法的调用测试
![4.png-2.8kB][4] 

#### 测试结果
![5.png-369.1kB][5] 
对此种调用方式进行分析
上述直接在浏览器中显示的是POST方式；
调用返回的数据格式为XML，还可以支持JSON格式（这个示例只能返回XML）；
上述服务是采用C#写的，并且发布环境是IIS；
上述getRegionCountry方法只是该天气服务的一个方法；

#### 接口描述文件：
![6.png-58kB][6]
对于全部方法的描述，在没有说明文档时，可以参考接口描述文件(WSDL)，对于规范的WebService服务都可以使用“WebService地址”+“?WSDL”的方式访问到该文件，该文件详细的描述了：
服务中包含的所有方法；
方法传入的参数类型
方法调用的路径等等；

#### 分析整个WSDL文档：
![7.png-38.2kB][7] 
![8.png-29.9kB][8]
![9.png-75.3kB][9] 

#### 代码中调用
本质还是实现一次Http请求,故非常简单,只需要使用代码发送一次请求即可(默认是POST方式)
![10.png-69.8kB][10] 


  [1]: http://static.zybuluo.com/EVA001/2af6ck0fjnuobs3jmlt74v8w/1.png
  [2]: http://static.zybuluo.com/EVA001/crc4us6ib41os3fulskgmbsz/2.png
  [3]: http://static.zybuluo.com/EVA001/kby0nv544wgqhkouqvmhul7l/3.png
  [4]: http://static.zybuluo.com/EVA001/tqr1423lwup455vo8fs9klf6/4.png
  [5]: http://static.zybuluo.com/EVA001/72u5ercnpelxzzbs6szyhmot/5.png
  [6]: http://static.zybuluo.com/EVA001/unzphssfk5v7u7o8d1zuoiy3/6.png
  [7]: http://static.zybuluo.com/EVA001/kcbmzbvnymdg3mwjwix0lz8k/7.png
  [8]: http://static.zybuluo.com/EVA001/v4hc2mkvmeuvasz92kl2ucm1/8.png
  [9]: http://static.zybuluo.com/EVA001/hwc04cj7qe7v6o1ibq066xuk/9.png
  [10]: http://static.zybuluo.com/EVA001/kqc2qpnyitzgg8mhzjz75i20/10.png