---
layout: page      # 必须
title: 自留言页面   # 必须，页面名称
description: <br>属于我自己的一亩三分地~      # 页面二级标题，描述性文字
comments: false     # 禁用评论，可选，默认开启
reward: false      # 禁用打赏，可选，默认开启
about: false
---

<style type="text/css"> 
.page-content{
	border-bottom:0px !important;
	border-bottom-width:0px !important;
	}
</style>
 
{%raw%} 
<section class="comments" id="comments"  style="margin-top:30px;padding:1px 30px 1px 30px;background-color:rgba(255,255,255,1);box-shadow: 0px 0px 5px #bbbbbb;border-radius: 5px;border-left-width: 10px;margin-left: 0px;margin-right: 0px;">
 
 
	  <div class="comments vcomment" id="comments"></div>
	  <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/xaoxuu/volantis@1/js/volantis.min.js"></script>
   
	  <script>
	  var GUEST_INFO = ['nick','mail','link'];
	  var guest_info = 'nick,mail,link'.split(',').filter(function(item){
		return GUEST_INFO.indexOf(item) > -1
	  });
	  var valine = new Valine();
	  valine.init({
		el: '#comments',
		notify: true,
		verify: true,
		guest_info: guest_info,
		appId: "WbLE88qfAcz4hSI5GsQFRlzW-gzGzoHsz",
		appKey: "ycqjmtEfUxuxD3IY97oRkrdO",
		placeholder: "请在这里输入你想说的话~",
		pageSize:"10",
		avatar:"retro"
	  })
	  </script>
  
</section>

<br/>




{%endraw%}

