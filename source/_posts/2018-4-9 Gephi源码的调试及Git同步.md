date: 2018-4-9
categories: 研究方向
tags: [调试,GitHub,NetBeans,Maven]
comments: true
title: Gephi源码的调试及Git同步
---

### Fork原始Gephi项目

1. 进入Gephi的github地址：https://github.com/gephi/gephi
2. 点击右上角的`fork`按钮将其fork到自己的github中：

 ![image_1ca53iver1qbkv0pq7o35k1iho9.png-80.4kB][1]

3. fork完毕后我们就在自己的github中有了完整的备份：
 
 ![image_1ca53pgdihf218v1g4b1cg1u6om.png-45.7kB][2]

4. 然后点击上图中绿色的Clone按钮，注意必须在自己的备份中进行Clone以便后期提交自己的修改；
（如何确认本地或源只需看左上角的根目录名称和有无fork标记）
![image_1ca53ucsl1rno1la01adbakj1aun13.png-21.2kB][3]

5. 将上图中的https地址复制待用；
关于如何将代码Clone到本地，有多种方法，可以选用NetBeans自带的Clone功能：
![image_1ca54n00r1r3qrs0s3t18j21trrm.png-42.2kB][4]

 不过我这里连接github时总是出错（如下），所以使用了git for windows来进行克隆。

#### Git for Windows 的安装
> **
在Windows上使用Git，可以从[Git官网](https://git-scm.com/download/win)直接下载安装程序(Setup)，（网速慢的同学请移步国内镜像），然后按默认选项安装即可。
安装完成后，在开始菜单里找到“Git”->“GitBash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！
install-git-on-windows
安装完成后，还需要最后一步设置，在命令行输入：
`$ git config --global user.name "Your Name"`       
`$ git config --global user.email "email@example.com"`
因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。
这里的名字和地址对应你最常用的git仓库的用户名和密码（比如这里就是用Github的）
注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。**

### 克隆项目到本地

1. 继续上述过程，首先进入到NetBeans的项目空间目录（不是必须的）。然后单机鼠标右键，这时应该有`Git Bush Here`的选项，点击后在弹出的黑框中输入如下命令：
 
 ![image_1ca55gggfghf10tsmrb1bhoh9m23.png-14.7kB][5]
`git clone`是克隆项目的指令
`https://github.com/TianZonglin/gephi`对应上文中复制备用的https的地址
`YourProjectName`对应你想要给你的项目起的名字，如果不带这个参数，则会默认一个文件名；

 克隆完成后文件夹如下所示：

 ![image_1ca55upkg6pb1mu91d24140t30e2g.png-17kB][6]

### NetBeans关联Maven

现在开始使用NetBeans进行操作，由于Gephi的源代码使用的Maven进行构建的，所以首先需要在本机安装Maven（与Netbeans无关），Windows安装Maven的教程如下：

#### Windows下的Maven下载与安装
> 
1. 前往https://maven.apache.org/download.cgi下载最新版的Maven程序：
![image_1ca56kl5tbt0v43nr3tpp1qlr3q.png-61.3kB][7]
2. 将文件解压到D:\Program Files\Apache\maven目录下:
![image_1ca56m53m15o71nojv13r6n1c485a.png-54.3kB][8]
3. 新建环境变量MAVEN_HOME，赋值D:\Program Files\Apache\maven
![image_1ca56o81u9op1gq9c4d182f1jtr6q.png-24.2kB][9]
4. 编辑环境变量Path，追加%MAVEN_HOME%\bin\;
5. 至此，maven已经完成了安装，我们可以通过DOS命令`mvn -v`检查一下我们是否安装成功：
![image_1ca56pkcd1k71i4c1f301bmp1sbu7a.png-29.5kB][10]
配置Maven本地仓库
1. 在D:\Program Files\Apache\目录下新建maven-repository文件夹，该目录用作maven的本地库。
2. 打开D:\Program Files\Apache\maven\conf\settings.xml文件，查找下面这行代码：
<localRepository>/path/to/local/repo</localRepository>
localRepository节点默认是被注释掉的，需要把它移到注释之外，然后将localRepository节点的值改为我们在之前创建的目录D:\Program Files\Apache\maven-repository。
3. localRepository节点用于配置本地仓库，本地仓库其实起到了一个缓存的作用，它的默认地址是 C:\Users\用户名.m2。
当我们从maven中获取jar包的时候，maven首先会在本地仓库中查找，如果本地仓库有则返回；如果没有则从远程仓库中获取包，并在本地库中保存。
此外，我们在maven项目中运行mvn install，项目将会自动打包并安装到本地仓库中。
4. 运行一下DOS命令
mvn help:system
如果前面的配置成功，那么D:\Program Files\Apache\maven-repository会出现一些文件。**

1. 需要将NetBeans和本地的Maven进行关联，点击 工具->选项->Java->Maven，在页面中修改Maven主目录，浏览本地的Maven目录并选定，如果正常，则会显示如下：
 
 ![image_1ca5742nv16t86c916dgtok1j6v7n.png-3.8kB][11]

### NetBeans打开Gephi源码

1. Maven配置成功后，依次点击 文件->打开项目->找到之前克隆的项目的文件，然后会发现有特殊的[ma]图标，这是Maven项目的标识。双击打开即可：

 ![image_1ca567b4b1of2jf616np1gjbf8a3a.png-17kB][12]

2. 打开之后会发现项目名称为gephi，后跟[master]说明是从主分支上克隆的，并且已经被关联git。初次打开时由于需要加载gephi的依赖文件（Maven），所以会有一段时间处于读条状态（右下角）。第一次运行需要进行`构建`，这时会下载一些本地Maven库中不存在的jar包，所以可能构建过程很慢。

 

### NetBeans修改、执行、同步Gephi源代码

1. **执行**：由于NetBeans的模块化构建，使得gephi整个项目没有一个传统的Main函数入口，这里的入口，在位于gephi源代码项目目录下的`模块`内的`gephi-app`模块，双击后即可独立的打开该模块，然后右键选项中点击运行即可打开Gephi主界面。 

 ![image_1ca57k9781t6cr0rnr117rb8l58h.png-11.3kB][14]
上述打开的Gephi就是具有完整功能的客户端。

2. **修改布局源代码**：类似的，找到模块中的LayoutPlugin，双击打开，然后在源包中就是全部的布局算法的源码了，针对具体的代码文件进行修改即可。一般的调试源码的步骤：修改源码->运行gephi-app，如果修改无效，请在修改源码后，对LayoutPlugin模块先进行一次`构建`

3. **同步**：回到开头的内容，使用Git的主要目的是进行版本的控制，这对于对源码的修修补补来说显得尤为重要，现在已经对源码进行了修改，可以按下面的操作将修改同步到自己fork的github中：

    3.1. 右键所修改的模块->点击Git->点击提交->添加修改的备注->点击提交
    3.2. 右键所有该的模块->点击Git->点击远程->点击推入->选择配置的Git资源库位置，如果没有默认资源库则需要配置->全部下一步结束
 



  [1]: http://static.zybuluo.com/EVA001/gfmt9a95dfv8qg33byea73ep/image_1ca53iver1qbkv0pq7o35k1iho9.png
  [2]: http://static.zybuluo.com/EVA001/tcf653nl9fqcoclvrbelovql/image_1ca53pgdihf218v1g4b1cg1u6om.png
  [3]: http://static.zybuluo.com/EVA001/jnoaud3zbf5rgwhrmvy5s5qf/image_1ca53ucsl1rno1la01adbakj1aun13.png
  [4]: http://static.zybuluo.com/EVA001/ajd76lk0tcoeb7qmgt2okiku/image_1ca54n00r1r3qrs0s3t18j21trrm.png
  [5]: http://static.zybuluo.com/EVA001/8od95l7gjv4cqwfr4wjjnpdd/image_1ca55gggfghf10tsmrb1bhoh9m23.png
  [6]: http://static.zybuluo.com/EVA001/1joayhklxk98jj9j9lhfp7qf/image_1ca55upkg6pb1mu91d24140t30e2g.png
  [7]: http://static.zybuluo.com/EVA001/otn5pel8ffw03kpcywfx9rgk/image_1ca56kl5tbt0v43nr3tpp1qlr3q.png
  [8]: http://static.zybuluo.com/EVA001/2qwjzfoardbmhwn3yc08nqoc/image_1ca56m53m15o71nojv13r6n1c485a.png
  [9]: http://static.zybuluo.com/EVA001/vo3yt39e2vcivho8yg4kscnq/image_1ca56o81u9op1gq9c4d182f1jtr6q.png
  [10]: http://static.zybuluo.com/EVA001/g01uktu4nkufjf7ixlgzani7/image_1ca56pkcd1k71i4c1f301bmp1sbu7a.png
  [11]: http://static.zybuluo.com/EVA001/wxorsl1svi5bs6busd4cbqml/image_1ca5742nv16t86c916dgtok1j6v7n.png
  [12]: http://static.zybuluo.com/EVA001/9bv7csd28dlfuaf20xr8la7i/image_1ca567b4b1of2jf616np1gjbf8a3a.png
  [13]: http://static.zybuluo.com/EVA001/b60ytqd2imvfkn1aqgd3kjk0/image_1ca57hh6416c61823m8645bvo84.png
  [14]: http://static.zybuluo.com/EVA001/m3twn85p2pefrs1hgq6xhs0j/image_1ca57k9781t6cr0rnr117rb8l58h.png
  