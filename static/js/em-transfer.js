!function(){var e=function(){},t=function(){try{return new window.XMLHttpRequest}catch(e){return!1}},a=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){return!1}},n=function(n){var r=n.dataType||"text",s=n.success||e,i=n.error||e,o=t()||a();o.onreadystatechange=function(){if(4===o.readyState){var e=o.status||0;if(200===e){if("text"===r)return void s(o.responseText,o);if("json"===r){try{var t=JSON.parse(o.responseText);s(t,o)}catch(a){}return}return void s(o.response||o.responseText,o)}if("json"==r){try{var t=Utils.parseJSON(o.responseText);i(t,o,"服务器返回错误信息")}catch(a){i(o.responseText,o,"服务器返回错误信息")}return}return void i(o.responseText,o,"服务器返回错误信息")}0===o.readyState&&i(o.responseText,o,"服务器异常")};var u=n.type||"GET",c=n.data||{},m="";if("get"===u.toLowerCase()){for(var d in c)c.hasOwnProperty(d)&&(m+=d+"="+c[d]+"&");m=m?m.slice(0,-1):m,n.url+=(n.url.indexOf("?")>0?"&":"?")+(m?m+"&":m)+"_v="+(new Date).getTime(),c=null}else c._v=(new Date).getTime(),c=JSON.stringify(c);return o.open(u,n.url),o.setRequestHeader("Content-Type","application/json"),o.send(c),o};window.easemobIM=window.easemobIM||{},window.easemobIM.emajax=n}(),window.easemobIM=window.easemobIM||function(){},easemobIM.Transfer=function(){var e=function(e,t){if(JSON&&JSON.parse){var a=e.data;a=JSON.parse(a),this.targetOrigin=a.data.origin,"function"==typeof t&&t(a)}},t=function(e){return this instanceof t?(this.iframe=document.getElementById(e),void(this.origin=location.protocol+"//"+document.domain+(location.port?":"+location.port:""))):new t};return t.prototype.send=function(e){return e.origin=this.origin,e=JSON.stringify(e),this.iframe?this.iframe.contentWindow.postMessage(e,"*"):window.parent.postMessage(e,this.targetOrigin),this},t.prototype.listen=function(t){return window.addEventListener?window.addEventListener("message",function(a){e(a,t)},!1):window.attachEvent&&window.attachEvent("onmessage",function(a){e(a,t)}),this},t}(),function(){var e=new easemobIM.Transfer,t=function(t){return{url:t.url,data:t.excludeData?null:t.msg.data,type:t.type||"GET",success:function(a){try{a=JSON.parse(a)}catch(n){}e.send({call:t.msg.api,timespan:t.msg.timespan,status:0,data:a})},error:function(a){try{a=JSON.parse(a)}catch(n){}e.send({call:t.msg.api,status:1,data:a})}}};e.listen(function(a){switch(e.targetOrigin=a.origin,a.api){case"getRelevanceList":easemobIM.emajax(t({url:"/v1/webimplugin/targetChannels",msg:a}));break;case"getDutyStatus":easemobIM.emajax(t({url:"/v1/webimplugin/timeOffDuty",msg:a}));break;case"createVisitor":easemobIM.emajax(t({url:"/v1/webimplugin/visitors",msg:a,type:"POST"}));break;case"getSession":easemobIM.emajax(t({url:"/v1/webimplugin/visitors/"+a.data.id+"/CurrentServiceSession?techChannelInfo="+a.data.orgName+"%23"+a.data.appName+"%23"+a.data.imServiceNumber+"&tenantId="+a.data.tenantId,msg:a,excludeData:!0}));break;case"getPassword":easemobIM.emajax(t({url:"/v1/webimplugin/visitors/password",msg:a}));break;case"getGroup":easemobIM.emajax(t({url:"/v1/webimplugin/visitors/"+a.data.id+"/ChatGroupId?techChannelInfo="+a.data.orgName+"%23"+a.data.appName+"%23"+a.data.imServiceNumber+"&tenantId="+a.data.tenantId,msg:a,excludeData:!0}));break;case"getHistory":easemobIM.emajax(t({url:"/v1/webimplugin/visitors/msgHistory",msg:a}));break;case"getSlogan":easemobIM.emajax(t({url:"/v1/webimplugin/notice/options",msg:a}));break;case"getSystemGreeting":easemobIM.emajax(t({url:"/v1/webimplugin/welcome?tenantId="+a.data.tenantId,msg:a}));break;case"getRobertGreeting":easemobIM.emajax(t({url:"/v1/Tenants/"+a.data.tenantId+"/robots/visitor/greetings",msg:a}))}})}();