date: 2014-12-7 
categories: Java/数据库
tags: [JavaScript,HTML]
comments: true
title: select标签添加onclick()事件的兼容写法
---

（本文年代久远，请谨慎阅读）

### 修改前

```html
<select style="height:25px;width:160px;"> 
  <option onclick="xx('err')" selected>选择查找方式</option>
  <option onclick="xx('low')" >简单查询</option>
  <option onclick="xx('mid')" >模糊检索</option>
  <option onclick="xx('hih')" >高级搜索</option>
</select>
```
javascript如下：
```javascript
function xx(value){
	alert(value);
	if(value=="low"){
            ... ...
 	}else if(value=="mid"){
   ... ...
 	}else if(value=="hih"){
   ... ...
 	}
}
```
以上代码片是可以在Firefox和IE9下运行的，但是它在我的360浏览器上就是无效的，究其原因还是IE版本的问题（存在兼容性问题），
也就是：老版本只能这样 `<select  onclick() ></select>`

而高版本和Firefox则支持这样 `<option onclick() ></option>`

具体版本我们不去管它，因为我找到了折中的实现办法，即可以兼容的实现触发事件，解决了以上问题

### 修改后

修改后的代码片如下：
```html
  <select style="height:25px;width:160px;" onclick="xx(this)"> 
  	<option value="err" selected>选择查找方式</option>
  	<option value="low" >简单查询</option>
  	<option value="mid" >模糊检索</option>
  	<option value="hih" >高级搜索</option>
  </select>
```
javascript：
```javascript
function xx(value){
    var selectedOption=value.options[value.selectedIndex];  
	//alert(selectedOption.value);
	if(selectedOption.value=="low"){
... ...
 	}else if(selectedOption.value=="mid"){
... ...
 	}else if(selectedOption.value=="hih"){
... ...
 	}
}
```

修改后的实现其实是用了低版本IE的方法，但是通过获取到选项的value值，来选择要执行的js代码段，从而实现了一种灵活的兼容的触发事件的方法
个人认为，此办法非常不错。

