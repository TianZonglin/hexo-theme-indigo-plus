---
layout: page      # 必须
title: ......关..于 # 必须，页面名称
description:        # 页面二级标题，描述性文字
comments: true     # 禁用评论，可选，默认开启
reward: true      # 禁用打赏，可选，默认开启
about: false
---


<script src="https://cdn.bootcss.com/moment.js/2.22.1/moment-with-locales.min.js"></script>
 

<script>
$(".heimu").on("mouseenter", function () {
    var $this = $(this);
    $this.removeClass("heimu");
}).on("mouseleave", function () {
    var $this = $(this);
    $this.addClass("heimu");
});
</script>

<style type="text/css"> 

.heimu {
	background-color: #252525;
	color: #252525;
	text-shadow: none;
}

.card{
	padding-bottom:20px !important;
	padding-left:15px !important;
	padding-right:15px !important;
	padding-top:15px !important;
}
.page-content{
	border-bottom:0px !important;
	border-bottom-width:0px !important;
	}
	
.image-bubble{
	margin-bottom:0px;
}
* {
	font-family: "PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微软雅黑",sans-serif;
}
#activeness-graph rect.day {
	shape-rendering: crispedges;
}
#activeness-graph text.month,
#activeness-graph text.wday {
	font-size: 10px;
	fill: #999;
}

@media screen and (max-width: 25em) {
	svg{
		float:right;
		margin-right:-10px;
	}
}

</style> 



@card{

## **关于 | 我**

-----
 
 
<div style="font-size:15px;text-align:center">
<i class="icon icon-github" style="color:#3f51b5ed"></i>&nbsp;<a  href="https://github.com/TianZonglin">Github</a>&emsp;/&emsp;<i class="icon icon-globe" style="color:#3f51b5ed"></i>&nbsp;<a href="https://coding.net/u/#">Coding</a>&emsp;/&emsp;<i class="icon icon-music" style="color:#3f51b5ed"></i>&nbsp;<a href="http://music.163.com/#/user/home?id=99148651">CloudMusic</a>
</div>

![](http://ozmhkse3b.bkt.clouddn.com/image/gif/184911578.gif)

<center>

<div style="text-align:center;">
<h5>Coding widget</b><h5>
<div class="mobile" id="activeness-graph" coding="VkVWVFZGUlpVRVV0UlZaQk1ERT0=" github="VkdsaGJscHZibWRzYVc0PQ==" style="text-align:center;" contract="20"></div>
</div>
</center>
<script src="../js/graph.js"></script>
<br>

}

@card{

## **关于 | 本站**

-----


关于自己的博客，当然需要精心打扮，上面说的都很基础，其实作为一个独立站点，需要考虑的东西还是很多的，主要有下面一些：

- 域名的绑定
这是外界对整个博客最直观的感受之一，当然不是必须的，但现在一般域名也就几块钱一年，而且瞬间使自己的站点显得高大上，何乐而不为。这里要注意的是我们只需要购买域名就行了，空间实名备案什么的跟咱们没关系，因为博客是直接托管在Github或者Coding上的！

- 托管的平台：Hexo+Github VS Hexo+Coding
曾经一度我放在Github，但是其更新后的部署速度让我吃惊，大概需要几分钟，访问也不是那么快速，权衡了一下最终还是托管到了[Coding](https://coding.net)上，体验什么的感觉丝毫不输Github，最重要的是国内源就是快。

- md文章的解析差异
我们都知道Markdown有一套标准解析语法，但是其扩展却有千千万，就拿我现在的Cmd Markdown这款软件来说，‘#文字’之间不需要空格，但是发布在Hexo上则必须是‘# 文字’这种形式。其他差异还有很多，比如#不能紧跟在上一段后，需要加空行等等，这些自己实际试用一下就知道了，而且修改也比较容易。

- 不可或缺的评论
关于评论，我觉得是博客称之为博客的原因之一，如果没有评论功能，那就失去了共同探讨的机会，也就失去了博客本身存在的价值，虽然有很多人关闭了评论，但不能否认多数人还是希望听到别人的声音，无论是意见不同的分歧，还是志同道合的点赞，在我看来这都是不可或缺的。要注意，现在多说死了，网易云评论好像也完蛋了，disqus国内太慢，然后现在好像来比力还可以，除此之外就是基于GitApp的[gitalk](https://github.com/gitalk/gitalk)和[gitment](https://github.com/imsun/gitment)了，现在我正在使用[gitment](https://github.com/imsun/gitment)作为评论，还是很不错的，看到这里，还不抓紧在下面评论一波！

- 必不可少的用户统计
现在百度、腾讯、CNZZ、谷歌等都有类似站长统计的服务，另外在我使用的indigo主题中自带有‘不蒜子’的统计，其将PV和UV显示在最下方，另外，也支持前面讲的几种统计，试过水之后我认为百度统计大概对于国内站点来说是最准确好用的了。

- 当然要听歌
现在我把high一下放到博客里了，由于放在header里移动端会太挤（因为我的名字太长了），所以放到左侧menu里了。坑爹的是第一次集成时并不好使，原来音乐源是amazon的，果断找了一个网易云的换上。非常完美。

- 站点的SEO
这方面其实是个人博客与CSDN这类博客最大的差距所在了吧，如果我们想将自己的站点更好的暴露在搜索引擎的视野范围内，那要做的工作还是很多的，这方面对一个博客来讲显得尤为重要。现在我按[这篇文章](http://www.jianshu.com/p/86557c34b671)的叙述，进行了一些简单操作。
 - 碰见一个坑：添加谷歌的[Search Console](https://www.google.com/webmasters/)死活验证失败，使用GoogleAnalysis关联也是失败的，非常崩溃，直到看到了下图，网站预览图里那几行诗真的是惊到我了，那特喵的是CodingPages的跳转页!!真相原来在这儿。
 ![image_1buavrbnb1gmn1a3n8ls10p0ptr1p.png-25.1kB][4]  

 - 知道真相之后马上去Coding的项目中的Pages设置中按要求把署名加到了主页上，居然审核要2工作日，吐槽一下。添加之后，博客的footer变成这个样子了，还还凑合把。
![image_1bub01d04eq08lm1fk0anq1ul2j.png-13.1kB][5]

- 其他：想到了再添加

 

**非常感谢你能读到末尾，如果你同我一样也是一位新手，欢迎在下方的留言板留言交流！    —— 2017.11.15 改**

}




{%raw%} 
<br>
<br>
<div class="card page-about-me flex-row" style="margin-top:20px;">
	<a href="/other/page_about.html" class="avatar waves-effect waves-circle waves-light"><img src="/img/logo.jpg"></a>
	<div class="content flex-col">
		<p><strong>TZLoop</strong></p>
		<p><em>交流 / 分享 / 提升 /</em></p>
		<p>本博客为个人博客，非商业用途，内容多为原创，转载会特别注明，如有侵权，请<a href="tianzonglin@qq.com" value="">邮件</a>告知。<a href="https://www.whereareyou.site/other/page_my.html"> </a><br><span style="display:block;width:100px;height:30px;float:left;line-height:50px;"></span></p>
	</div>

            
	<div class="page-share-wrap">
		<div class="page-share" id="pageShare">
			<ul class="reset share-icons">
			  <li>
				<a class="weibo share-sns" target="_blank" href="http://service.weibo.com/share/share.php?url=https://www.whereareyou.site/other/page_comment.html&title=《留言评论中心》 — TZLoop's Blog&pic=https://www.whereareyou.site/img/logo.jpg" data-title="微博">
				  <i class="icon icon-weibo"></i>
				</a>
			  </li>
			  <li>
				<a class="weixin share-sns wxFab" href="javascript:;" data-title="微信">
				  <i class="icon icon-weixin"></i>
				</a>
			  </li>
			  <li>
				<a class="qq share-sns" target="_blank" href="http://connect.qq.com/widget/shareqq/index.html?url=https://www.whereareyou.site/other/page_comment.html&title=《留言评论中心》 — TZLoop's Blog&source=" data-title=" QQ">
				  <i class="icon icon-qq"></i>
				</a>
			  </li>
			  <li>
				<a class="facebook share-sns" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://www.whereareyou.site/other/page_comment.html" data-title=" Facebook">
				  <i class="icon icon-facebook"></i>
				</a>
			  </li>
			  <li>
				<a class="twitter share-sns" target="_blank" href="https://twitter.com/intent/tweet?text=《留言评论中心》 — TZLoop's Blog&url=https://www.whereareyou.site/other/page_comment.html&via=https://www.whereareyou.site" data-title=" Twitter">
				  <i class="icon icon-twitter"></i>
				</a>
			  </li>
			  <li>
				<a class="google share-sns" target="_blank" href="https://plus.google.com/share?url=https://www.whereareyou.site/other/page_comment.html" data-title=" Google+">
				  <i class="icon icon-google-plus"></i>
				</a>
			  </li>
			</ul>
		</div>
		<a href="javascript:;" id="shareFab" class="page-share-fab waves-effect waves-circle">
			<i class="icon icon-share-alt icon-lg"></i>
		</a>
	</div>



</div>
{%endraw%}











  [1]: http://static.zybuluo.com/EVA001/05wjmql4bfxju2cjzd3qfzeo/image_1buagdvvft841m3c1r861vkb1qas9.png
  [2]: http://static.zybuluo.com/EVA001/3cldxj7si3kju2z473jx10sm/image_1buajmk0918ju1c62b0gvs16sdm.png
  [3]: http://static.zybuluo.com/EVA001/gl1bbo7h4rvt3035xkr355p5/image_1buakkartgjvkbf1c3a9j0d1n13.png
  [4]: http://static.zybuluo.com/EVA001/9gl6ujf70khzvhvb3pj685ka/image_1buavrbnb1gmn1a3n8ls10p0ptr1p.png
  [5]: http://static.zybuluo.com/EVA001/d3nvecz23n67tp89z6goelny/image_1bub01d04eq08lm1fk0anq1ul2j.png
  
  