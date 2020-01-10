date: 2018-3-19
categories: 研究方向
tags: [IDEA,Maven,调试]
comments: true
title: IDEA如何在项目中快速添加Maven依赖

---

#### 前言

在日常项目开发中，组件的引入是很平常的事情，一般来说，我们的项目由Maven构建，然后在需要新引入一个依赖时，只需在pom.xml中添加依赖描述即可，但是，有时我们的项目未必采用Maven构建，比如Spark项目就多采用sbt，或者直接添加jar包的方式，这时，如果需要添加某个外部依赖如果采用添加jar包的方式就会非常繁琐，不过IDEA为我们提供了方便的添加方式。

现在，以Spark项目中添加`gephi-toolkit`为例，来说明整个添加流程，具体流程如下：

#### 流程

- 右键项目名称，点击`Open Module Settings`，转到`Dependencies`
- 点击右侧绿色的加号，并选择 Library
![](http://static.zybuluo.com/EVA001/4ag0cg6r8fccir92desb38om/image_1cd2ti7aar5poa51hse1t1jn9um.png)

- 在弹出页面选择下面的`New Library`中的`Frome Maven`
![](http://static.zybuluo.com/EVA001/6e06f9o6mi7t3r8czg9lpv3t/image_1cd2tk06kdf7p2q1ic01c4qv0813.png)

- 在弹出页面输入`gephi-tookit`，点击搜索，然后选择对应的版本
![](http://static.zybuluo.com/EVA001/tdrz5gj03ixli362glwn3x7z/image_1cd5a71n51ij3tguso012jun1k9.png)

- 之后，注意选择该Library的级别为`Project`即可
![](http://static.zybuluo.com/EVA001/3fsuqoet6zyhdijaeuwhdge7/image_1cd2toms11fk61tbt94d1j4d1goh1t.png)

- 选完一定要点`Add Selected`
![](http://static.zybuluo.com/EVA001/tc6cfa235kj6is1tn4axl2vt/image_1cd2ts1ci157h7o91t6ojao1lcp2a.png)

- 最后，查看`dependencies`，我们发现`toolkit`已经被添加到项目
![](http://static.zybuluo.com/EVA001/1j3vpag5712ccpupqwjk9vy3/image_1cd5a9gv5buv1ri31j34gn4d4m.png)


 