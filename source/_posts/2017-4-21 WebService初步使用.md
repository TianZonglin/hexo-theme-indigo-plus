date: 2017-4-21
categories: Java/数据库
tags: [WebService,初次使用]
comments: true
title: WebService初步使用
---

####　使用中出现的错误

```
faultDetail: 
	{http://xml.apache.org/axis/}stackTrace:服务器无法处理请求。 ---&gt; 值不能为空。
		    call.setOperationName(new QName("http://WebXml.com.cn/","getSupportCity"));                      //一定要加·QName
      call.addParameter(
            new QName("http://WebXml.com.cn/","byProvinceName") ,
            org.apache.axis.encoding.XMLType.XSD_STRING, 
            javax.xml.rpc.ParameterMode.IN
      );  //一定要加·QName  

```

```
 faultString: 服务器未能识别 HTTP 头 SOAPAction 的值: 。
		    call.setUseSOAPAction(true);   
		    call.setSOAPActionURI("http://WebXml.com.cn/getRegionCountry");
```

```
 faultString: (405)Method Not Allowed faultDetail: {}:return code:  405 
     call.setTargetEndpointAddress("http://ws.webxml.com.cn/WebServices/WeatherWebService.asmx");     //路径要写对
```

```
关于invoke传参res=(String[]) call.invoke(new Object[]{"4544"});   
 faultString: 404 
 faultString: 400 bad request
 faultString: SimpleDeserializer encountered a child element, which is NOT expected, in something it was trying to deserialize.
 faultString: (403)Forbidden
您未被授权查看该页
您试图访问的 Web 服务器上有一个不被允许访问该网站的 IP 地址列表，并且您用来浏览的计算机的 IP 地址也在其中。
HTTP 错误 403.6 - 禁止访问：客户端的 IP 地址被拒绝。
打开浏览器：直接输网址，同样打不开，被禁了
- No returnType was specified to the Call object!  You must call setReturnType() if you have called addParameter().
call.setReturnType(org.apache.axis.encoding.XMLType.XSD_UNSIGNEDBYTE); 
```

```
- Exception:
org.xml.sax.SAXException: SimpleDeserializer encountered a child element, which is NOT expected, in something it was trying to deserialize.
（应该与下方错误 原因一样）
 faultString: org.xml.sax.SAXException: Found character data inside an array element while deserializing
```

```
				byte a = (Byte) call.invoke(new Object[]{"山东"}); //要强制转换
			        ~call.setReturnType(org.apache.axis.encoding.XMLType.XSD_UNSIGNEDBYTE); 
                //上一句非常重要：规定了返回的值的类型（UsignedByte），直接打印即可
                if(call.invoke(new Object[]{"dqw@qq.com"}).toString().equals("1")) 	    
                    System.out.println("合法");	
			    else	
			        System.out.println("非法");	
                //通过返回值来解析出实际结果
```

删掉bin中的class之后，出现cant find the main class，解决：执行clean     project->clean
 


#### 书写规范

```
Service service = new Service();   
Call call = (Call) service.createCall();  
call.setTargetEndpointAddress("http://ws.webxml.com.cn/WebServices/WeatherWebService.asmx");   //?wsdl
call.setOperationName(new QName("http://WebXml.com.cn/","getWeatherbyCityName"));   
call.addParameter(new QName("http://WebXml.com.cn/","theCityName") ,org.apache.axis.encoding.XMLType.XSD_STRING, javax.xml.rpc.ParameterMode.IN);         
call.setUseSOAPAction(true);   
call.setSOAPActionURI("http://WebXml.com.cn/getWeatherbyCityName");  
call.setReturnType(org.apache.axis.encoding.XMLType.XSD_UNSIGNEDBYTE); 
call.setReturnClass(java.lang.String[].class);  
String[] returnConetext =  (String[])call.invoke(new Object[]{"53772"}); 			
for (int i = 0; i < returnConetext.length; i++) { 
	 System.out.println(returnConetext[i]);				
}   

```

>定义Service----------------Service service = new Service();   
定义Call--------------------Call call = (Call) service.createCall();  
设置EndpointURL---------使用服务发布的WSDL（结尾是 ?wsdl）或者ENDPOINT（原链接）
http://ws.webxml.com.cn/WebServices/WeatherWebService.asmx 或
http://ws.webxml.com.cn/WebServices/WeatherWebService.asmx？wsdl    

![clipboard.png-16kB][1]

>设置Operation名称--------要使用的接口方法，必须 new QName( 高层域名，原方法名称 )；（如下应为getWeatherbyCityName）  

![clipboard.png-22.1kB][2]

>添加Parameter参数--------接口方法传入的参数，有几个就写几个，必须 new QName( 高层域名，原参数名称 )；外加 XMLType.XSD_STRING, 和 ParameterMode.IN
  注意，此处是“注明”之意，赋值操作不在此处；（如下应为theCityName）  
  
![clipboard.png-7.8kB][3]

>设置SOAPActionURL------高层域名url+接口方法；（如下应为http://WebXml.com.cn/getWeatherbyCityName），其中高层域名为"http://WebXml.com.cn/";  

![clipboard.png-24.4kB][4]

>设置返回类型Type----------关系到invoke的返回值，具体要与发布的服务信息相对应
如下应使用为call.setReturnClass(java.lang.String[].class);  ，因为字符串数组是封装类，此时应声明返回的类型
如果返回值是可以描述的类型，比如String，byte这些基础类型，可以直接使用call.setReturnType(XMLType.XSD_STRING）  

![clipboard.png-19.6kB][5]

>触发invoke-----------------传入实际的参数，一是参数要为Object对象数组，二是返回类型可转换时(如String) invoke前要加强制转换，



#### **会员先注册，然后点击我的服务**

![截图.png-144.8kB][6]

#### **然后点击一个服务的试用，之后返回，再用UserID就可以了**

![clipboard.png-9kB][7]

#### **结果很完美**

![clipboard.png-47.1kB][8]

#### **注意**

![截图.png-144.8kB][9]


  [1]: http://static.zybuluo.com/EVA001/6vtdx4cdjvs89c5ujruy8mey/clipboard.png
  [2]: http://static.zybuluo.com/EVA001/p61vlbzcge3sr2yk6s687vjd/clipboard.png
  [3]: http://static.zybuluo.com/EVA001/1zejh03r21lf366sp5zhmdhq/clipboard.png
  [4]: http://static.zybuluo.com/EVA001/njxdb6yayzzpby97gq9r38tm/clipboard.png
  [5]: http://static.zybuluo.com/EVA001/w1sqcpq2rzppot9a11tbb0cg/clipboard.png
  [6]: http://static.zybuluo.com/EVA001/srn4tffcu48difxfqf32pqsr/%E6%88%AA%E5%9B%BE.png
  [7]: http://static.zybuluo.com/EVA001/9iihwtmyfnqfr4hpcdpr8bbe/clipboard.png
  [8]: http://static.zybuluo.com/EVA001/rifkd1kvponuxuuco9ardx22/clipboard.png
  [9]: http://static.zybuluo.com/EVA001/gnkv9yxgvh2a4r0vlqpyz9kt/%E6%88%AA%E5%9B%BE.png