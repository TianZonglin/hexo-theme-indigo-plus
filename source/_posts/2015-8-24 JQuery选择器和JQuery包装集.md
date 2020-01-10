date: 2015-8-24 
categories: JQuery
tags: [JQuery,HTML]
comments: true
title: JQuery选择器和JQuery包装集
---

（本文年代久远，请谨慎阅读）今天学习了JQuery的一些基本用法，包括JQuery选择器和JQuery包装集；

从现在开始，要慎重区分DOM对象和JQuery对象，两种对象的方法不同，属性不同，在使用中要特别注意

### JQuery选择器

编写任何javascript程序都需要首先获得对象, jQuery选择器能彻底改变我们平时获取对象的方式, 可以获取几乎任何语意的对象, 

比如"拥有title属性并且值中包含test的元素", 完成这些工作只需要编写一个jQuery选择器字符串. 学习jQuery选择器是学习jQuery最重要的一步. 

DOM对象获取方法：

    单个对象：var objDiv =document.getElementById(“id”);
    多个对象：Var arrObj = document.getElementsByTagName(“id”);

JQuery对象获取方法：

    单个对象：var objDiv = $ (“#Id"); 
    多个对象：var arrObj = $('div');
    //警告：此处是JQuery语法形式，但依然是dom对象数组！！

在DOM编程中我们只能使用有限的函数根据id或者TagName获取DOM对象。

而在JQUERY中则完全不同，JQUERY提供了异常强大的选择器用来帮助我们获取页面上的对象,并且将对象以JQUERY包装集的形式返回。

    "$"符号在JQUERY中代表对JQUERY框架集的引用。

JQUERY选择器包括以下几种：

    1、基础选择器
    2、层次选择器
    3、基本过滤器
    4、内容过滤器
    5、可见性过滤器
    6、属性过滤器
    7、子元素过滤器
    8、表单选择器
    9、表单过滤器

下面列出几种重要的选择器：

#### 基础选择器

    $("#Id") 选择ID为divId的元素（根据元素Id选择）
    
    $("element") 选择所有元素（根据元素的名称选择）
    
    $(".class") 选择所用CSS类为bgRed的元素（根据元素的css类选择）
    
    $("*")选择页面所有元素（选择所有元素）
    
    $("#divId, element, .class")（可以将几个选择器用","分隔开然后再拼成一个选择器字符串.会同时选中这几个选择器匹配的内容.）

#### 属性过滤器

    $("div[id]")匹配包含给定属性的元素
    
    $("input[name='...']") 匹配给定的属性是某个特定值的元素  name='...'
    
    $("input[name!='...']")匹配给定的属性是不包含某个特定值的元素 name='...'
    
    $("input[name^='...']")匹配给定的属性是以某些值开始的元素 name^='...'
    
    $("input[name$='...']")匹配给定的属性是以某些值结尾的元素 name$='...'
    
    $("input[name*='...']")匹配给定的属性是以包含某些值的元素 name*='...'
    
    $("input[id][name$='...']")复合属性选择器，需要同时满足多个条件时使用 [id][name$='...']

#### 表单过滤器

    $("input:enabled")匹配所有可用元素
    
    $("input:disabled")匹配所有不可用元素
    
    $("input:checked")匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option)
    
    $("select option:selected")匹配所有选中的option元素

#### 注意

1. DOM转JQUERY包装集：$(arrDiv[i]).html('div'+i);//arrDivp[i]是DOM对象，直接用$()转为JQuery对象后调用html方法；
2. JQUERY包装集转DOM对象
3. 通过索引访问到的JQUERY包装集中的单个元素是DOM对象
4. 通过包装集的某些遍历函数，例如each中传递的遍历函数中的this也是DOM元素
```
var arrDiv = $('div');
for( var i = 0;i < arrDiv.length; i++) {
    arrDiv[i].innerHTML = 'div' + i;//通过索引访问到的元素不是JQuery对象，而是DOM对象
}
```

### JQuery包装集

在此介绍一些基本的JQuery包装集及使用

#### ready()方法

在使用JQUERY时，当 DOM（文档对象模型） 已经加载完成时，就会发生 ready 事件。由于该事件在文档就绪后发生，因此把所有其他的 JQUERY事件和函数置于该事件中是非常好的做法。

即将JQuery函数及事件全部放到$(document).ready(function(){...all jquery functions..});

相比较而言，`<body onload=""></body>`中的onload同ready的区别有：

onload是原生的JAVASCRIPT事件方法；

onload必须等到页面内包括图片的所有元素加载完毕后才能执行，ready是DOM结构绘制完毕后就执行，不必等到加载完毕；

onload不能同时编写多个，如果有多个onload方法，只会执行一个，而ready可以同时编写多个，并且都可以得到执行 ；

onload无简化写法，ready有简化的写法，可以简写成$(function(){...})；

#### appendTo()方法

在被选元素的结尾（仍然在内部）插入指定内容，可以被用来动态添加若干句HTML语句；

```
var testDiv = $('#testDiv');
$('<select><option>choose1</option><option>choose2</option></select>').appendTo(testDiv);
```

意思是将此行html语句先转换成JQuery对象，然后用对象的appendTo方法追加到testDiv这个被选元素的结尾，这个被选元素即某个控件，

如一个div块或者一个文本框，效果是在此控件后显示一个下拉框；

#### 其他一些常用的操作JQUERY包装集的函数

    $("p").eq(1) 获取第N个元素：.eq(Index)
    
    $("p").filter(".bgRed")筛选出与指定表达式匹配的元素集合：.filter("Express")
    
    $("div").filter(function(index) {});筛选出与指定函数返回值匹配的元素集合：.filter(function)
    
    $("input[type='checkbox']").parent().is("form")用一个表达式来检查当前选择的元素集合，如果其中至少有一个元素符合这个给定的表达式就返回true
    
    $("p").parent()查找每个段落的父元素：

#### 示例

    HTML 代码：<div><p>Hello</p><p>Hello</p></div>执行$("p").parent()之后结果为：[ <div><p>Hello</p><p>Hello</p></div>]
    
    $("p").parent(".selected")查找段落的父元素中每个类名为selected的父元素：
    
    HTML 代码：<div><p>Hello</p></div><div class="selected"><p>Hello Again</p></div>执行$("p").parent(".selected")之后结果为：[ <div class="selected"><p>Hello Again</p></div> ]

#### 其他

```
使用is()方法查找段落的父元素中每个类名为selected的父元素（带返回值true/false）：

使用var flagValue = $("p").parent().is("select") 代替 $("p").parent(".selected") // 使用is()方法会有返回值，如果满足条件，则flagValue会为true;

$("input").map(function(){}).get().join(", ")把form中的每个input元素的值建立一个列表

<p><b>Values: </b></p>

<form>  
    <input type="text" name="name" value="John"/>  
    <input type="text" name="password" value="password"/>  
    <input type="text" name="url" value="http://ejohn.org/"/>
</form>

JS：$("p").append(  $("input").map(function(){  return $(this).val();}).get().join(", ")  ); 

结果：在<p>标签后追加字符串，其内容是取出所有<input>标签的value值，并用“，”分隔，最后结果为：

<p><b>Values:John, password, http://ejohn.org/</b></p>

jQuery.map(arr|obj,callback) //将一个数组转换为另一个数组

将原数组中每个元素加 4 转换为一个新数组：$.map( [0,1,2], function(n){  return n + 4;});  结果:[4, 5, 6]

原数组中大于 0 的元素加 1 ，否则删除：$.map( [0,1,2], function(n){  return n > 0 ? n + 1 : null;}); 结果:[2, 3]

原数组中每个元素扩展为一个包含其本身和其值加 1 的数组，并转换为一个新数组：$.map( [0,1,2], function(n){  return [ n, n + 1 ];}); 结果:[0, 1, 1, 2, 2, 3]

$("p").not($("#testid")[0])去除所有与给定选择器匹配的元素

<input name="apple" /><input name="flower" checked="checked" />

查找所有未选中的 input 元素：$("input:not(:checked)") 结果:[ <input name="apple" /> ]

$("p").slice(0, 1);选取一个匹配的子集

.slice(start [,end] );第一个参数：开始选取子集的位置。第一个元素是0.如果是负数，则可以从集合的尾部开始选起。

第二个参数：结束选取自己的位置，如果不指定，则就是本身的结尾。

<p>Hello</p><p>cruel</p><p>World</p>

选择第一个p元素：$("p").slice(0, 1).wrapInner("<b></b>");//选择的是value值

选择前两个p元素：$("p").slice(0, 2).wrapInner("<b></b>");

只选取第二个p元素：$("p").slice(1, 2).wrapInner("<b></b>");

只选取第二第三个p元素$("p").slice(1).wrapInner("<b></b>");

选取第最后一个p元素：$("p").slice(-1).wrapInner("<b></b>");

$("p").wrapInner(htm|element|fnl)将每一个匹配的元素的子内容(包括文本节点)用一个HTML结构包裹起来，举例如上，将全部字符加粗；

```

