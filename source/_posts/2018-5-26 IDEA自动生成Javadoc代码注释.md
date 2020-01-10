date: 2018-5-26
categories: 研究方向
tags: [IDEA,扩展,调试]
comments: true
title: IDEA自动生成Javadoc代码注释

---

在日常写代码时往往不会注重注释的格式、规范等问题，可能注释都不会写，但是一旦代码完成后要交付他人，就需要考虑注释的问题了，因为重要函数、方法的注释往往对整个代码的阅读起着十分重要的作用，在`eclipse`中，我们可以自动生成注释的模板，在`IDEA`中显然也是可以的，下面就介绍两种生成注释的方式。

### Jindent

Jindent是一个十分强大的代码格式化工具，它不局限于IDE插件，其本身就是进行代码格式化的，官网如下：
http://www.newforms-tech.com/products/jindent/about

安装教程 [点击此处](https://blog.csdn.net/liyanlei5858/article/details/51312600)

注意：注释添加不成功，弹出需要License许可，看来不是拿来即用的插件；
可以对代码进行格式化，但只能对Java和C/C++代码进行代码格式化，其他语言执行格式化不会有反应；

### Live Templates

这是`IDEA`的自带功能，主要目的是使用快捷键快速生成固定模式的代码：
```
def main(args: Array[String]): Unit = {
  $END$
}
```
比如上述代码只需在编辑器内输入`main`四个字符，然后敲击`tab键`即可出现整段代码，利用这一特性，当然的可以进行函数注释的生成。

首先，在`File`->`Setting`->`搜索Live转到Live Templates`，然后`新建Template`并输入名称

![](http://static.zybuluo.com/EVA001/ey5kpax91ex6s1f0uffbopge/image_1cf7jnpj21d7d1ktnuml11hj1fdk9.png)

选中建好的Template再点击上图中的`Live Template`，新建一个模板；

对于注释的模板，可以按类和函数分为`class`和`def`两个关键词，例如`def`的注释

![](http://static.zybuluo.com/EVA001/uoqp76mu0k9eqeq1ixoz0ful/image_1cf7k4ij1ho418o0ovm1anq1rnbm.png)

可以发现，其关键就是变量参数指定的`Expression`，正是这些指定使得模板可以将参数、返回类型等统统取到并替换进模板中。

最终的效果是，只需编辑`def+tab键`，即可在指定位置生成注释，然后将`description`添加上之后，对这个函数的注释就算完成了。

![](http://static.zybuluo.com/EVA001/6dmraj0akb4rzw9utqfkya3r/image_1cf7k8nhh1oo1co8mv41og21gh213.png)

按同样的方式，可以对比如`Class`等结构定义模板，进行注释的快速生成

