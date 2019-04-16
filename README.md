hexo-theme-indigo-plus
================

[Hexo-theme-indigo]主题的扩展，基于 Hexo 3.0+ 制作。 
基于 `indigo` 主题进行的顶层扩展。
本项目一是可以给使用indigo主题的用户提供一些扩展的idea，其次，尤为重要的是，在readme中包括了部分indigo主题文件对应现实功能的描述，这部分可以更好的指导爱好者按自己的需要球盖indigo主题。
注：本项目并非Hexo主题，只是附加功能和文档描述，基本不包括对原主题的入侵式改动（样式除外）

[原作地址](https://github.com/yscoder/hexo-theme-indigo)
[原作示例](http://imys.net/)


### 原主题文档

[文档 | Document](https://github.com/yscoder/hexo-theme-indigo/wiki)


> 注：theme-card 风格主题

### 扩展功能（非插件扩展）

1. 添加Valine本地化支持
2. 添加相关文章生成
2. 添加Coding+Github贡献值挂件
3. 自定义基于FeedEK的RSS订阅
4. 自定义图片展示
5. 自定义电影评价滚轴


### 对应目录文件

    资源分享    source/other/page_share.md
        链接分享    source/torrent/neubt.html
        壁纸分享    source/other/page_paper.md
        动图分享    source/other/page_gif.md
    建站日志    source/other/page_log.md
    留言评论    source/other/page_comment.md
    我的订阅    source/feedek/feedread.html

> 注意：source是_post所在目录，并列于indigo主题目录
	
### 更新历史

- 添加[字数统计](https://github.com/willin/hexo-wordcount)，本地化[Valine](https://github.com/xcss/Valine)
- 对文件压缩上传，参见[minifier](https://github.com/chenzhutian/hexo-all-minifier)，加速动画效果
- 添加rss加载gif及页面的简单访问拦截
- 去掉音乐，新增[我的订阅](https://www.whereareyou.site/feedek/feedread.html)和代码挂件
- 现在用[QSunSync](https://github.com/qiniu/qsunsync)来完成本地资源云同步
- 在[资源分享](https://www.whereareyou.site/other/page_share.html)栏添加[BT资源分享](https://www.whereareyou.site/torrent/neubt.html)页面
- 添加 Google 广告支持，添加[留言中心](https://www.whereareyou.site/other/page_comment.html)栏目
- 停用gitment评论，新增valine评论支持，详见[这里](https://www.whereareyou.site/article/2018-4-20%20在站点中添加Valine评论系统并修改评论样式.html)
- 修改侧边栏项目，汇总相关文档，添加[资源分享](https://www.whereareyou.site/other/page_share.html)栏目
- 引入JQuery和自定义CSS代码，未发现与nodejs的兼容问题
- 本页面添加文件修改记录；改动了各模块的显示样式
- 功能异常，修复未果，故进行了一次主题重置，详见[这里](https://www.whereareyou.site/article/2017-12-2%20Hexo%20Install%20and%20Reset.html#主题部分（初始化-重置）)
- 添加背景纹理，美化留白
- 侧边栏添加图片收藏栏目，使用七牛云做图床
- 侧边栏整合标签(书签)云插件，删掉原有标签选项
- 动次打次添加切歌，使用七牛云做音频存储
- SEO优化，开启百度爬虫推送，使用google webmaster
- 添加Google Analysis，添加百度统计
- 更换托管源，托管在Coding
- 文章整理完毕，做第一次发布
- 侧边栏添加[建站日志](https://www.whereareyou.site/other/page_log.html)
- 添加gitment评论，添加rss等基础功能
- 更换indigo主题，添加high一下功能
- 托管在Github并绑定域名，站点正式上线
- 站点搭建完毕，域名申请完成
- 正式接触到Hexo，着手搭建站点





### 主体增加改动记录

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

```



