
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no"> 
<meta name="description" content="专题科普" />
<link rel="stylesheet" href="../style/css/mui.min.css">
<link rel="stylesheet" type="text/css" href="../style/css/app.css"/>
<link rel="stylesheet" href="/public/css/public.css">
<title>科普园地</title>
<%-- <link rel="stylesheet" href="${path }/public/css/mui.min.css"> --%>
<%-- <link rel="stylesheet" type="text/css" href="${path }/public/css/app.css"/> --%>
 		<style>
 			body {
			    font-family: 'Helvetica Neue',Helvetica,sans-serif;
			    font-size: 17px;
			    line-height: 21px;
			    color: #000;
			    background-color: #fff;
			    -webkit-overflow-scrolling: touch;
			}
            .mui-tab-label{
			  font-size: 17px;
			}
			ul{
			 list-style: none;
			 margin: 0;
			 padding: 0;
			}
			ul li{
			  width: 100%;
			  margin-bottom: 5px;
			}
			ul li img{
			   width: 100%
			}
        </style>
    </head>
    <body>     
    
    <div class="mui-control-content mui-active">
	    <ul>
	    <li>
	        <a href="${path }/bing/index"><img src="../public/images/zt/2.png"></a>
	     </li>
	    <!-- 
	     <li>
	        <a href="${path }/yilu/toindex"><img src="../public/images/zt/2.png"></a>
	     </li> --> 
	   
	     <li>
	        <a href="${path }/bmspatient/toindex"><img src="../public/images/zt/3.jpg"></a>
	     </li>
	    </ul>
	</div>
		
		<footer>
		<nav class="mui-bar mui-bar-tab">
		
						<a class="mui-tab-item" href="${path}/tuwenkepu.jsp" style="border-right:1px solid #cecece">
							<span class="mui-tab-label">图文科普</span>
						</a>
						<a class="mui-tab-item" href="${path }/shipinkepu.jsp?page=1" style="border-right:1px solid #cecece">
							<span class="mui-tab-label">视频科普</span>
						</a>
						<a class="mui-tab-item" href="${path }/changjianwenti.jsp?share=1" style="border-right:1px solid #cecece">
							<span class="mui-tab-label">常见问题</span>
						</a>
						<a class="mui-tab-item mui-active" href="#" style="border-right:1px solid #cecece;background: #3cc7c0;">
							<span class="mui-tab-label" style="color: #fff;">专题科普</span>
						</a>
		</nav>
		
		</footer>
		<div class="rightbtn">
			<a href="/public/puljsp/platform_sp.jsp"><img src="/public/images/gdxz.png" alt=""></a>
		</div>
		<script type="text/javascript">
		    function setHTMLFontSise(){
		        var windowWidth = document.documentElement.clientWidth;
		        //判断视口宽度是不是已经大于了最大版心
		        if(windowWidth > 640){
		           document.documentElement.style.fontSize = "20px";
		        }else if(windowWidth < 320){
		           //判断视口宽度是不是已经小于了最大版心
		           document.documentElement.style.fontSize = 320 / 640 * 20 + "px";
		            
		        }else{
		           document.documentElement.style.fontSize =  windowWidth / 640 * 20 + "px";
		        }
		    
		    }
		    window.onresize = setHTMLFontSise;
		    setHTMLFontSise();
		</script>
<script src="${path }/public/js/jquery-1.11.1.js"></script>
<script src="${path }/resource/js/wxshare-1.6.0.js"></script>
<script type="text/javascript">
	var host="http://"+window.location.host+"";
	var link=host+"/zhuantikepu.jsp";
	var WXSHARE = new WXSHARE("肝胆科普—惠及大众、传播知识","肝胆相照-肝胆病在线公共服务平台",link,"");
</script>
    </body>
</html>