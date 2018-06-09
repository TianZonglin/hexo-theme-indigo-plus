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
    <script src="//unpkg.com/valine@latest/dist/Valine.min.js"></script>
   
    <script type="text/javascript">
        var GUEST_INFO = ['nick','mail','link'];
        var guest_info = '<%= theme.valine.guest_info %>'.split(',').filter(function(item){
          return GUEST_INFO.indexOf(item) > -1
        });
        new Valine({
            el: '#comments',
            notify: true,
            verify: true,
            appId: "WbLE88qfAcz4hSI5GsQFRlzW-gzGzoHsz",
            appKey: "ycqjmtEfUxuxD3IY97oRkrdO",
            avatar: "retro",
            placeholder: "请在这里输入你想说的话~",
            guest_info: GUEST_INFO,
            pageSize: "15"
        })
		console.log("Valine done!")
    </script>
  
</section>

<br/>




{%endraw%}

