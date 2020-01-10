---
layout: page      # 必须
title: 站点更新事件序列   # 必须，页面名称
description: <br>包括相关文件修改，站点功能扩展记录等~      # 页面二级标题，描述性文字
comments: false     # 禁用评论，可选，默认开启
reward: false       # 禁用打赏，可选，默认开启
about: false
---
<br>

<style type="text/css"> 
.page-content{
	border-bottom:0px !important;
	border-bottom-width:0px !important;
	}
	
 

	
</style>



@card{

**搭建清单**

> **框架：**HEXO
> **主题：**Indigo
> **模板：**EJS
> **托管：**Github Pages
> **图床：**阿里云OSS(作业部落)、微博相册
> **文档：**Google Docs
> **文件：**Nginx(Local Server)
> **云盘：**可道云(Synology NAS)
> **订阅：**FeedEK
> **弃用：**APlayer、七牛云

}

@card{

**创建记录(根目录)**
```
myblog\source\CNAME							域名映射
myblog\source\robots.txt						百度、谷歌的爬虫规则
myblog\source\plugin-shake\harlem-shake-style.css			本地化资源文件
myblog\source\categories\index						开启后自动生成
myblog\source\tags\index						开启后自动生成
myblog\source\pdf\...							本地化文章显示的pdf
myblog\source\other\page_log						建站日志页面
myblog\source\other\page_share						图片收藏页面
myblog\source\other\page_gif						动态图页面
myblog\source\other\page_bground					壁纸页面
myblog\source\other\page_comment					全站评论页面
myblog\source\torrent\neubt						BT资源文件分享页面
myblog\source\feedek\feedread						显示订阅内容页面
myblog\source\videos\look						视频资源左右滑动展示

indigo\source\js\graph.js						获取Json数据并构造svg元素
indigo\source\js\barry.js						简单的拦截某些页面的访问
indigo\source\js\av-min.js						本地化
indigo\source\js\Valin.js						本地化
indigo\layout\_partial\post\wordcount.ejs				字数统计		
```


**文件改动记录**

```
indigo\_config.yaml 							配置文件|内置功能的配置
indigo\source\img\...							资源文件|头像和打赏图片等
indigo\layout\_partial\menu.ejs						左侧面板|添加各功能入口
indigo\layout\_partial\footer.ejs					底部样式|添加 Host by
indigo\layout\_partial\plugins\site-visit				站点访问|去除数量显示
indigo\layout\_partial\plugins\page-visit				页面访问|去除数量显示
indigo\layout\_partial\plugins\google-analytics.ejs			谷歌分析|加入解析路径
indigo\layout\_partial\plugins\baidu.ejs				百度统计|添加自定义匹配项
indigo\layout\tag.ejs							标签显示|修改样式
indigo\source\css\style.less						主要样式|修改背景纹理
indigo\layout\_partial\post\toc.ejs					构造目录|修改模块透明度及边框
indigo\layout\_partial\post\nav.ejs					前进后退|修改模块透明度及边框
indigo\layout\_partial\plugins\gitment.ejs				评论模块|修改模块透明度及边框
indigo\source\css\_partial\article.less					文章样式|修改目录焦点变化的跟随高度

indigo\layout\_partial\script.ejs					全局添加|添加自定义JS或者CSS
indigo\layout\page.ejs							文章页面|修改底部ABOUT模块内容
indigo\layout\post\copyright.ejs					文章页面|自定义底部标注模块内容
indigo\layout\_partial\header.ejs					顶层浮栏|下滑后修改标题居中,添加头像
indigo\layout\post\copyright.ejs					文章页面|自定义底部标注模块内容
indigo\layout\_partial\header.ejs					顶层浮栏|下滑后修改标题居中,添加头像

indigo\layout\_partial\plugins\valine.ejs				评论模块|新添加Valine评论
indigo\layout\_partial\post\comment.ejs					评论模块|接入扩展的Valine插件
indigo\source\css\_partial\article.less					文章样式|修改最后的评论模块的Section风格
indigo\layout\_partial\head.less					全局头部|全部页面<head>添加GoogleAdsense
indigo\layout\page.ejs							自定页面|Pages添加底部about模块的控制变量
indigo\layout\_partial\menu.ejs						左侧面板|在_config中添加标签云控制变量
indigo\source\css\_partial\highlight.less				代码模块|调整代码区域字体大小行间距
indigo\source\css\_partial\variable.less				代码字体|更换代码块字体@font-code

indigo\layout\_partial\archive.ejs					归档分类|去掉两部分显示时的tags
indigo\layout\_partial\head.ejs						首页结构|规范首页meta信息及整体代码结构
indigo\source\css\_partial\article.less					文章样式|修改image-bubble(-35->0)
indigo\layout\_partial\head.ejs						页面头部|在加载页面前加载barry.js
indigo\source\css\_partial\article.less					标注词组|修改词组标注样式
indigo\source\css\_partial\highlight.less				代码模块|修改代码段样式，pre和gutter
indigo\layout\_partial\head.ejs						全局头部|添加自定义Js和Css代码段
indigo\layout\_partial\menu.ejs						全局音乐|利用frameset和catch检测跳转实现
indigo\layout\index.ejs							主页列表|添加首项为已有全部评论

```

}

<br>

@timeline{

##### NOW..

@item{
###### 12月3日

头像下方添加个人社交信息

}

##### 2019年12月

@item{
###### 7月12日

更新友链页面的样式

}

@item{
###### 7月11日

侧边栏添加多个功能页，整合 NAS和自己服务器的应用

}

@item{
###### 7月2日

更换新的.COM域名

}

##### 2019年7月



@item{
###### 5月10日

去除音乐，视频、下载页面失效（七牛云到期）

}

##### 2019年5月


@item{
###### 6月21日

利用多frame添加全局音乐的播放，暂不清楚对SEO的影响

}

@item{
###### 6月20日

添加[视频播放页面](../../videos/look.html)，未适配移动端

}


@item{
###### 6月16日

使用[LeanCloud](https://leancloud.cn/)实现[分享下载页](../../other/page_share.html)的下载计数

}

@item{
###### 6月10日

利用Hexo原生API添加生成**相关文章**

}

##### 2018年6月

@item{
###### 5月21日

添加[字数统计](https://github.com/willin/hexo-wordcount)，本地化[Valine](https://github.com/xcss/Valine)

}

@item{
###### 5月18日

对文件压缩上传，参见[minifier](https://github.com/chenzhutian/hexo-all-minifier)，加速动画效果

}


@item{
###### 5月17日

添加rss加载gif及页面的简单访问拦截

}

@item{
###### 5月16日

去掉音乐，新增[我的订阅](https://www.zonelyn.com/feedek/feedread.html)和代码挂件

}


@item{
###### 5月12日

现在用[QSunSync](https://github.com/qiniu/qsunsync)来完成本地资源云同步

}

##### 2018年5月

@item{
###### 5月11日

在[资源分享](https://www.zonelyn.com/other/page_share.html)栏添加[BT资源分享](https://www.zonelyn.com/torrent/neubt.html)页面

}


@item{
###### 4月21日

添加 Google 广告支持，添加[留言中心](https://www.zonelyn.com/other/page_comment.html)栏目

}

@item{
###### 4月20日

停用gitment评论，新增valine评论支持，详见[这里](https://www.zonelyn.com/article/2018-4-20%20在站点中添加Valine评论系统并修改评论样式.html)

}

@item{
###### 4月15日

修改侧边栏项目，汇总相关文档，添加[资源分享](https://www.zonelyn.com/other/page_share.html)栏目

}

##### 2018年4月

@item{
###### 12月27日

引入JQuery和自定义CSS代码，未发现与nodejs的兼容问题

}

@item{
###### 12月19日

本页面添加文件修改记录；改动了各模块的显示样式

}

@item{
###### 12月15日

功能异常，修复未果，故进行了一次主题重置，详见[这里](https://www.zonelyn.com/article/2017-12-2%20Hexo%20Install%20and%20Reset.html#主题部分（初始化-重置）)

}

@item{
###### 12月10日

添加背景纹理，美化留白

}

@item{
###### 12月4日

侧边栏添加<span style="text-decoration:line-through;">图片收藏栏目</span>，使用七牛云做图床

}

##### 2017年12月

@item{
###### 11月20日

侧边栏整合标签(书签)云插件，删掉原有标签选项

}

@item{
###### 11月18日

动次打次添加切歌，使用七牛云做音频存储

}

@item{
###### 11月17日

SEO优化，开启百度爬虫推送，使用google webmaster

}

@item{
###### 11月7日

添加Google Analysis，添加百度统计

}

@item{
###### 11月4日

更换托管源，托管在Coding

}

@item{
###### 11月3日

文章整理完毕，做第一次发布

}

##### 2017年11月

@item{
###### 10月29日

侧边栏添加[建站日志](https://www.zonelyn.com/other/page_log.html)

}

@item{
###### 10月27日

添加gitment评论，添加rss等基础功能

}

@item{
###### 10月26日

更换indigo主题，添加high一下功能

}

@item{
###### 10月24日

托管在Github并绑定域名，站点正式上线

}


@item{
###### 10月23日

站点搭建完毕，域名申请完成

}

@item{
###### 10月20日

正式接触到Hexo，着手搭建站点

}

##### 2017年10月

}

}

<br>


<section class="comments" id="comments"  style="margin-top:20px;padding:0px 0px 30px 30px;background-color:rgba(255,255,255,1);box-shadow: 0px 0px 5px #bbbbbb;border-radius: 3px;border-left-width: 10px;margin-left: -16px;margin-right: -16px;">
 
 
<span class="ppt"><b>如需评论请移步<a href="../../other/page_comment.html">&nbsp;评论中心&nbsp;</a>统一留言回复。</b></span>    

  
</section>

<br>