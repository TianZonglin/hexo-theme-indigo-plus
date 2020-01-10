layout: page      # 必须
title: 私有云空间
description:        # 页面二级标题，描述性文字
comments: true     # 禁用评论，可选，默认开启
reward: false      # 禁用打赏，可选，默认开启
about: false
---

{%raw%}

 
 
<style> 
	a{ text-decoration:none} 
	.page-content img, .page-content>figure {
		background: #fff !important;
		border-radius: 2px !important;
		box-shadow: 0 0px 0px rgba(151,151,151,0.58) !important;
	}
	.post-content p code, .post-content li code {
		line-height: 1 !important;
		margin: 0 4px !important;
		font-weight: 300 !important;
		padding: 1px 3px 1px 3px !important;
		border: 1px solid #ff8989 !important;
		word-wrap: break-word !important;
	}
	
	.page-content{	
		border-bottom: 0px solid #bbbbbb !important;
	}

	.aa > a{
		margin-top: 10px; margin-right: 5px; margin-left: 0px;
	}
 
	.btn {
		display: inline-block;
		padding: 6px 12px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: normal;
		line-height: 1.428571429;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		background-image: none;
		border: 1px solid transparent;
		border-radius: 4px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		user-select: none;
	}
	
	.btn-default {
		color: #333333;
		background-color: #ffffff;
		border-color: #cccccc;
	}
	
	.btn-default.disabled, .btn-default[disabled], fieldset[disabled] .btn-default, .btn-default.disabled:hover, .btn-default[disabled]:hover, fieldset[disabled] .btn-default:hover, .btn-default.disabled:focus, .btn-default[disabled]:focus, fieldset[disabled] .btn-default:focus, .btn-default.disabled:active, .btn-default[disabled]:active, fieldset[disabled] .btn-default:active, .btn-default.disabled.active, .btn-default[disabled].active, fieldset[disabled] .btn-default.active {
		background-color: #ffffff;
		border-color: #cccccc;
	}
	
	.btn.disabled, .btn[disabled], fieldset[disabled] .btn {
		pointer-events: none;
		cursor: not-allowed;
		opacity: 0.65;
		filter: alpha(opacity=65);
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	.page-content h1, .page-content h2, .page-content h3, .page-content h4, .page-content h5 {
		text-align: left !important;
	}
	
	.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content blockquote, .post-content ol, .post-content p, .post-content pre, .post-content table, .post-content ul, .post-content figure, .post-content .video-container {
		margin-bottom: 5px !important;
	}
	
	.post-content table tr, .post-content table td {
		height: 0px !important;
	}
	
	.post-content table td, .post-content table th {
		border: 1px solid #dedede;
		padding: 0 5px;
	}
</style>
<script>
	
	var color,font="white";
	var now = new Date(),hour = now.getHours();
	
	if (hour<9&&hour>6){color = "#FFFFFF";font = "#000000";}
	else if (hour < 12){color = "#DCDCDC";font = "#000000";}
	else if (hour < 14){color = "#C0C0C0";font = "#000000";}
	else if (hour < 17){color = "#A9A9A9";font = "#000000";}
	else if (hour < 19){color = "#F5F5F5";font = "#FFFFFF";}
	else if (hour < 22){color = "#808080";font = "#FFFFFF";}
	else if (hour < 6) {color = "#F5F5F5";font = "#FFFFFF";}
	else               {color = "#000000";font = "#FFFFFF";}



	$.ping = function(option) 
	{
		var ping, requestTime, responseTime ;
		var getUrl = function(url){    //保证url带http://
			var strReg="^((https|http)?://){1}"
			var re=new RegExp(strReg); 
			return re.test(url)?url:"http://"+url;
		}
		$.ajax({
			url: getUrl(option.url)+'/'+ (new Date()).getTime() + '.html',  //设置一个空的ajax请求
			type: 'POST',
			dataType: 'html',
			timeout: 1000,
			beforeSend : function() 
			{
				if(option.beforePing) option.beforePing();
				requestTime = new Date().getTime();
			},
			complete : function() 
			{
				responseTime = new Date().getTime();
				ping = Math.abs(requestTime - responseTime);
				if(option.afterPing) option.afterPing(ping);
			}
		});
	 
		if(option.interval && option.interval > 0)
		{
			var interval = option.interval * 1000;
			setTimeout(function(){$.ping(option)}, interval);
	//        option.interval = 0;        // 阻止多重循环
	//        setInterval(function(){$.ping(option)}, interval);
		}
	};
	
	var jsonstr = [
	
		
		{app:"LC-Web",out:"5000",osts:"failed",path:"/"},
		{app:"LC-Plex",out:"32400",osts:"failed",path:"/web/index.html"},
		{app:"LC-Photo",out:"5080",osts:"failed",path:"/photo"},
		{app:"LC-SFTP",out:"5022",osts:"failed",path:"/"},
		{app:"LC-Center",out:"5070",osts:"failed",path:"/"},
		{app:"LC-Kod",out:"9010",osts:"failed",path:"/"},
		{app:"WS16-Tomcat",out:"8081",osts:"failed",path:"/"},
		{app:"WS16-Plex",out:"32401",osts:"failed",path:"/web/index.html"},
		{app:"R7000",out:"5590",osts:"failed",path:"/Main_Login.asp"},
		{app:"IKUAI",out:"5580",osts:"failed",path:"/login#/login"},
		{app:"Exsi",out:"5570",osts:"failed",path:"/ui/"}
	];
		//{app:"WS16-Remote",out:"13389",osts:"failed",path:"/"},
		//{app:"WS16-Anydesk",out:"17070",osts:"failed",path:"/"},
		//{app:"WS16-VNC",out:"15901",osts:"failed",path:"/"},
	$(document).ready(function(){ 
		 
 
		var map = new Map();
		$.ajax({
			url:  "http://asus.myds.me:9001/fetch",
			type: 'get',
			async: true,
			success:function (data) {
				data.split("@").forEach(function(d,i){
					//console.log(d);
					var aid = d.split("%")[0];
					var vok = d.split("%")[1];
					map.set(aid,vok);
				})
				console.log(map);
				jsonstr.forEach(function(d,i){
		 
					$.ping({
						url : "asus.myds.me:"+d.out, 
						beforePing : function(){
						},
						afterPing : function(ping){
							var x="http://";
							if(d.out=="5570"||d.out=="5580") { x='https://' }
							var htm = "<tr><td><a target='_blank' href='"+x+"asus.myds.me:"+d.out+d.path+"'>"+d.app+"</a></td>";

							var tmp = map.get(d.out);
							if(typeof(tmp)=="undefined"){
								if(ping % 1 === 0 && ping < 1000){
									htm += "<td style='color:blue;'>unknown</td><td>"+d.out+"</td><td style='color:green;'>"+ping+" ms</td></tr>";
								}else{
									htm += "<td style='color:red;'>failed</td><td>"+d.out+"</td><td style='color:red;'>unknown</td></tr>";
								}
							}else if(tmp==200||tmp==302){
								if(ping % 1 === 0 && ping < 1000){
									htm += "<td style='color:green;'>"+tmp+"</td><td>"+d.out+"</td><td style='color:green;'>"+ping+" ms</td></tr>";
								}else{
									htm += "<td style='color:green;'>"+tmp+"</td><td>"+d.out+"</td><td style='color:red;'>>1000ms</td></tr>";
								}
							}else{
								if(ping % 1 === 0 && ping < 1000){
									htm += "<td style='color:blue;' title="+tmp.replace(" ","").replace(" ","").replace("\n","")+">hold</td><td>"+d.out+"</td><td style='color:green;'>"+ping+" ms</td></tr>";
								}else{
									htm += "<td style='color:blue;' title="+tmp.replace(" ","").replace(" ","").replace("\n","")+">hold</td><td>"+d.out+"</td><td style='color:red;'>failed</td></tr>";
								}
							}
							$("#tab").append(htm);
						}, 
						interval : 100000
					});
					
					
				});
			},
		});


	});
	

	
</script>

{%endraw%}

@card{

{%raw%}

	<div class="aa" style="text-align:left">

		 
		<h3>
			路由 | Router Manager
		</h3> 
		
	 
			<a style="background-color:#1d74b2;color:#fefeff;border:1px solid #155c8f;text-shadow: 0px 0px 2px #fefeff" href="https://asus.myds.me:5580/login#/login""  class="btn btn-default" target="_blank" disabled>IKUAI</a>
			<a style="background-color:#4d5758;color:#93d2d9;border:1px solid #303a3b;text-shadow: 0px 0px 2px #93d2d9" href="http://asus.myds.me:5590/Main_Login.asp"  class="btn btn-default" target="_blank">R7000</a>
	  
		<br><br>
		<h3>
			群晖 | Synology NAS
		</h3> 
		
			<a style="background-color:#0086E5;color:#ffffff;border:1px solid #1270B2;text-shadow: 0px 0px 2px #ffffff" href="http://asus.myds.me:5000"  class="btn btn-default" target="_blank">DSM</a> 
			<a style="background-color:#2c2922;color:#e5a00d;border:1px solid #252420;text-shadow: 0px 0px 2px #e5a00d" href="http://asus.myds.me:32400/web/index.html" class="btn btn-default" target="_blank">PLEX</a>
			<a style="background-color:#00c0fe;color:#ffffff;border:1px solid #0199ca;text-shadow: 0px 0px 2px #ffffff" href="http://asus.myds.me:5080/photo"  class="btn btn-default" target="_blank">DS PHOTO</a>
			<a style="background-color:#a9a9a9;color:#ffffff;border:1px solid #808080;text-shadow: 0px 0px 2px #ffffff" href="http://asus.myds.me:5070"  class="btn btn-default" target="_blank">INDEX</a>
			<a style="background-color:#246cff;color:#ffffff;border:1px solid #1251d4;text-shadow: 0px 0px 2px #ffffff" href="http://asus.myds.me:9010"  class="btn btn-default" target="_blank">KOD EXPLORER</a>
			<a style="background-color:#3385ff;color:#ffffff;border:1px solid #2d78f4;text-shadow: 0px 0px 2px #ffffff" href="http://asus.myds.me:7001"  class="btn btn-default" target="_blank">BaiduPCS</a> 
			<a href="http://asus.myds.me:x"  class="btn btn-default" target="_blank" disabled>RR SHARE</a>
			<a href="http://asus.myds.me:x"  class="btn btn-default" target="_blank" disabled>WEB SSH</a>
			<a href="http://asus.myds.me:5022"  class="btn btn-default" target="_blank" disabled>SFTP</a>
		 
		<br><br>
		<h3>
			虚机 | ESXi Virtual Machine
		</h3> 
		 
			<a style="background-color:#e5e5e5;color:#686b6d;border:1px solid #bdbdbd;text-shadow: 0px 0px 2px #686b6d" href="https://asus.myds.me:5570/ui/"  class="btn btn-default" target="_blank">ESXI</a>
			<a style="background-color:#2c2922;color:#e5a00d;border:1px solid #252420;text-shadow: 0px 0px 2px #e5a00d" href="http://asus.myds.me:32401/web/index.html" class="btn btn-default" target="_blank">PLEX</a>
			<a style="background-color:#fff1c8;color:#963;   border:1px solid #ffdc76;text-shadow: 0px 0px 2px #963   " href="http://asus.myds.me:8081"  class="btn btn-default" target="_blank">TOMCAT</a>
			<a href="http://asus.myds.me:13389" class="btn btn-default" target="_blank" disabled>SERVER 2016</a>
			<a href="http://asus.myds.me:x"  class="btn btn-default" target="_blank" disabled>UBUNTU 1804</a>
			<a href="http://asus.myds.me:x"  class="btn btn-default" target="_blank" disabled>CENTOS 6.3</a>
 
		<br><br>
		
		<h3>
			链接 | Personal Link
		</h3> 
		
 
			<a style="background-color:#566cea;color:#ffffff;border:1px solid #3f51b5;text-shadow: 0px 0px 2px #ffffff" href="https://www.zonelyn.com"  class="btn btn-default" target="_blank">BLOG</a>
			<a style="background-color:#f0f0f0;color:#4a4a4a;border:1px solid #ccc   ;text-shadow: 0px 0px 2px #686b6d" href="https://docs.google.com/document/d/e/2PACX-1vT3hHQ2WLxgtfT80-C40vekvoYcYmd-kRHaTkFyRma5VE35AIH6PFKyYTGdXRmAzhiNmFy4-Ly1K_-_/pub"  class="btn btn-default" target="_blank">RESUME</a>
			<a style="background-color:#ffc746;color:#fc75a9;border:1px solid #e7a50c;text-shadow: 0px 0px 2px #fc75a9" href="https://喵帕斯.com/user"  class="btn btn-default" target="_blank">MIAOPS</a> 
	
		<br><br>
		
		<h3>
			监测 | Status Reports
		</h3> 
		
		<table class="table" width="">
			<thead>
				<tr>
					<th>app</th>
					<th>inStatus</th>
					<th>outer</th>
					<th>arrival</th>
		 
				</tr>
			</thead>
			<tbody id="tab">
			 
			</tbody>
		</table>
		<br>
	</div>	 
	
{%endraw%}


}