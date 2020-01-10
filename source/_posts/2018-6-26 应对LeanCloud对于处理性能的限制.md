date: 2018-6-26
categories: Hexo相关
tags: [JQuery,LeanCloud,JavaScript]
comments: true
title: 应对LeanCloud对于处理性能的限制

---

最近一直想如何才能统计[资源分享](https://www.zonelyn.com/other/page_share.html)页面里的资源的下载次数，由于是直接放的资源链接，即点击即可获取，所以没有所谓的拦截页面进行统计，同时作为静态博客也几乎没有带数据存储的动态扩展能力，这时想到了用`LeanCloud`来实现下载的计数，最后基本实现了这个想法，有兴趣的可以去[资源分享]()里看看效果。

### 更广泛的应用场景

其实上面说的对下载次数进行统计实际上就是统计点击的计数，这就可以应用到更多的场景，比如给文章**添加喜欢数、顶数、踩数**等等，这是可以直接用的，处理逻辑都不变。
还有就是类似**淘宝五颗星打分数**的这种评分机制，也是可以稍作改变就可以。
总之，只要是由点击后触发数据更新的场景都可以用此来实现。

这里，对如何实现整个需求暂不细说，主要说一下遇到的主要问题。

### LeanCloud查询处理的性能局限

>**QPS**
因特网上，经常用每秒查询率来衡量域名系统服务器的机器的性能，其即为QPS。
对应fetches/sec，即每秒的响应请求数，也即是最大吞吐能力。
计算关系：
QPS = 并发量 / 平均响应时间
并发量 = QPS * 平均响应时间

这里，`LeanCloud`对免费实例的`QPS`做了限制，可以理解，如果同时的查询发送的过多，则会使Lean返回错误代码，如下图所示：

![](http://static.zybuluo.com/EVA001/qra41l8o6yq4w0a1xqpq3hu4/image_1cgcl6rvj125disn1qjr1fgi7lb9.png)

[错误码详解](https://leancloud.cn/docs/error_code.html)

>**429**
信息 - **Too many requests.**
含义 - 超过应用的流控限制，即超过每个应用同一时刻最多可使用的工作线程数，或者说同一时刻最多可以同时处理的数据请求。通过 **控制台 > 存储 > API 统计 > API 性能 > 总览** 可以查看应用产生的请求统计数据，如平均工作线程、平均响应时间等。使用 LeanCloud 商用版或企业版 的用户，如有需要，可以联系我们来调整工作线程数。

### 原因分析

第一遍打开时需要循环发一遍查询来查询每个资源已有的下载数。

这里注意，为什么要循环每次发一次查询呢，因为在`LeanCloud`中创建的实例场景是广义的计数实例，即我只发一次查询然后处理返回结果，这种方式理论上是可行的，但是在实现上需要附加查询条件，还要考虑在库中的实例不一定只是一个地方的计数统计，总之较为复杂。

更简单的处理方式就是一一对应，一个计数实例（表中的一行记录）就是对应页面某处的一个计数器，只是在这里，由于分享下载的资源有点多，大概200元素，所以如果不加处理的发送查询请求，那几乎算是同时对`LeanCloud`发起这200次查询请求，由于其访问性能有限，所以需要对请求的发送做一定调整。

```javascript
$(tar).each(function(index, item) {
    var url = $(this).attr("id");
    var texts = $(this).parent().find(sp).eq(cnt);
    var url = $(this).attr("id");
    query.equalTo("url", url);
    query.find({
    	success: function(results) {
    		if (results.length == 0) {
    			texts.text("0"); //初始是 0
    			return;
    		}
    		for (var i = 0; i < results.length; i++) {
    			var object = results[i];
    			texts.text(object.get('time'));
    		}
    	}
    });
});
```

![](http://static.zybuluo.com/EVA001/itcj2lnmbxzrw57y1ow6vi9o/image_1cge7og1n2h510su1h5deno18oq13.png)
  
我们主要关注`QPS`的变化，上图中较高的曲线是未经处理时发送查询请求的QPS曲线，这时由于并发的查询数过多，导致`LeanCloud`达到瞬时的负载上限而出现`429`错误。官方的错误代码解释为：
  
>**429**
信息 - **Too many requests.**
含义 - 超过应用的流控限制，即超过每个应用同一时刻最多可使用的工作线程数，或者说同一时刻最多可以同时处理的数据请求。通过 **控制台 > 存储 > API 统计 > API 性能 > 总览** 可以查看应用产生的请求统计数据，如平均工作线程、平均响应时间等。使用 LeanCloud 商用版或企业版 的用户，如有需要，可以联系我们来调整工作线程数。
  
### 解决方法

解决此问题自然的会想到使用降低同时请求的查询数量，进而想到可以使用延迟执行来实现，这里可以使用`setTimeout`来针对循环内的每一次查询都进行延时操作。

这里又引出一个问题，那就是如何在`each`循环中进行延时操作


### 在`each`循环中进行延时操作

`JQuery`中的循环`each`的工作原理，其并不是类似`Java`那样的顺序循环，即第一次循环代码的执行总是先于第二次循环中代码的执行，这里要特别注意，`each`中循环的的代码的执行理论上是同时进行的（**异步执行**），即没有严格的先后执行顺序，对于这一问题，可以统一归类为 **JQuery异步执行的代码如何顺序执行** 的问题。可以看看这篇文章，[JQuery回调、递延对象总结](https://www.cnblogs.com/yangjunhua/p/3509342.html)，注意，使用`then`等对逻辑进行严格控制是正确的，但不是唯一的方法，如果你想完成的按顺序执行仅仅是**时间上的先后**而没有**逻辑上的先后**，那么还是用**延时**来实现比较容易理解。

```javascript
$(tar).each(function(index, item) {
    send.leancloud.query(item); // 伪代码
});
```

上述执行后几乎是同时发送循环总数的查询请求，这样就容易导致`429`错误；

```javascript
$(tar).each(function(index, item) {
    setTimeout(function(){ 
    	 send.leancloud.query(item); // 伪代码
    },1000);
});
```

上述延时的代码是经典的错误做法，误认为`each`是同步的顺序的循环，但其实不是，这样添加之后的效果是，全部查询同时在延时1000ms后发出，其结果还是几乎同时发向了LeanCloud。

```javascript
$(tar).each(function(index, item) {
    setTimeout(function(){ 
    	 send.leancloud.query(item); // 伪代码	 
    },100*index);
});
```

上述为正确的写法，注意`100*index`，这是利用了其异步执行的特点来进行延时，每次循环后的查询请求还是跟之前叙述一样会几乎同时被执行，但是这里执行时的延时时间不一样了，这里变成了`0,100,200...`，即查询请求会在`0ms,100ms,200ms...`后被发送给LeanCloud，显然的，达到了控制`QPS`的要求。
  
![](http://static.zybuluo.com/EVA001/fnijmpwthuvxyos4pzpp2zoe/image_1cge7qlcu1m82fj0i7k8g11tjv1g.png)

上图是查询发送处理后的`QPS`曲线，可以看出其值下降了很多，但仍有时很**尖锐**，可以通过加大查询的发送间隙来降低，当然，图示状态已经可以正常查询且不触发`429`错误。

### 最终效果

对于时间间隔来说，要综合查询的数量考虑，但总体上不能过大，这样会在前端显示过慢而损失交互性。
![](http://static.zybuluo.com/EVA001/8uttol7g62infft0sdfqmgkj/1111112.gif)

  
### 其他

偶发的断线异常，非本地错误!：
>**0**
信息 - (无)
含义 - WebSocket 正常关闭，可能发生在服务器重启，或本地网络异常的情况。SDK 会自动重连，无需人工干预。


  [1]: https://leancloud.cn/docs/leanstorage_guide-js.html
 