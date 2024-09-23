/*! For license information please see editorApp.bundle.js.LICENSE.txt */
(()=>{"use strict";let t=!1;"undefined"!=typeof edacEditorApp&&(t="1"===edacEditorApp.debug);const e=t,i=t,n=t=>{e&&console.info(t)};var o,s=function(){return s=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},a=function(){function t(t){this.options=t,this.listeners={}}return t.prototype.on=function(t,e){var i=this.listeners[t]||[];this.listeners[t]=i.concat([e])},t.prototype.triggerEvent=function(t,e){var i=this;(this.listeners[t]||[]).forEach((function(t){return t({target:i,event:e})}))},t}();!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(o||(o={}));var r,c=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,o.Add,this.notifications)},t.prototype.splice=function(t,e){var i=this.notifications.splice(t,e)[0];return this.updateFn(i,o.Remove,this.notifications),i},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onUpdate=function(t){this.updateFn=t},t}();!function(t){t.Dismiss="dismiss",t.Click="click"}(r||(r={}));var d={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},p=function(){function t(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),e=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.on=function(t,e){var i;this.events=s(s({},this.events),((i={})[t]=e,i))},t.prototype.update=function(t,e){e===o.Add?this.addNotification(t):e===o.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,i,n=this,o=this._popRenderedNotification(t);o&&((e=o.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,i=function(t){t.target===e&&(e.removeEventListener(n.animationEndEventName,i),n.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e,i=this._buildNotificationCard(t),n=t.options.className;return n&&(e=i.classList).add.apply(e,n.split(" ")),this.container.appendChild(i),i},t.prototype._popRenderedNotification=function(t){for(var e=-1,i=0;i<this.notifications.length&&e<0;i++)this.notifications[i].notification===t&&(e=i);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype.getXPosition=function(t){var e;return(null===(e=null==t?void 0:t.position)||void 0===e?void 0:e.x)||"right"},t.prototype.getYPosition=function(t){var e;return(null===(e=null==t?void 0:t.position)||void 0===e?void 0:e.y)||"bottom"},t.prototype.adjustContainerAlignment=function(t){var e=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],i=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],n=this.container.style;n.setProperty("justify-content",i),n.setProperty("align-items",e)},t.prototype._buildNotificationCard=function(t){var e=this,i=t.options,n=i.icon;this.adjustContainerAlignment(i);var o=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),s=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),a=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),c=this._createHTMLElement({tagName:"div",className:"notyf__message"});c.innerHTML=i.message||"";var d=i.background||i.backgroundColor;if(n){var p=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if(("string"==typeof n||n instanceof String)&&(p.innerHTML=new String(n).valueOf()),"object"==typeof n){var l=n.tagName,u=void 0===l?"i":l,f=n.className,m=n.text,h=n.color,v=void 0===h?d:h,y=this._createHTMLElement({tagName:u,className:f,text:m});v&&(y.style.color=v),p.appendChild(y)}a.appendChild(p)}if(a.appendChild(c),o.appendChild(a),d&&(i.ripple?(s.style.background=d,o.appendChild(s)):o.style.background=d),i.dismissible){var _=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),g=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});_.appendChild(g),a.appendChild(_),o.classList.add("notyf__toast--dismissible"),g.addEventListener("click",(function(i){var n,o;null===(o=(n=e.events)[r.Dismiss])||void 0===o||o.call(n,{target:t,event:i}),i.stopPropagation()}))}o.addEventListener("click",(function(i){var n,o;return null===(o=(n=e.events)[r.Click])||void 0===o?void 0:o.call(n,{target:t,event:i})}));var b="top"===this.getYPosition(i)?"upper":"lower";return o.classList.add("notyf__toast--"+b),o},t.prototype._createHTMLElement=function(t){var e=t.tagName,i=t.className,n=t.text,o=document.createElement(e);return i&&(o.className=i),o.textContent=n||null,o},t.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout((function(){e.a11yContainer.textContent=t}),100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),i={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in i)if(void 0!==e.style[t])return i[t];return"animationend"},t}(),l=function(){function t(t){var e=this;this.dismiss=this._removeNotification,this.notifications=new c,this.view=new p;var i=this.registerTypes(t);this.options=s(s({},d),t),this.options.types=i,this.notifications.onUpdate((function(t,i){return e.view.update(t,i)})),this.view.on(r.Dismiss,(function(t){var i=t.target,n=t.event;e._removeNotification(i),i.triggerEvent(r.Dismiss,n)})),this.view.on(r.Click,(function(t){var e=t.target,i=t.event;return e.triggerEvent(r.Click,i)}))}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);return this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);return this.open(e)},t.prototype.open=function(t){var e=this.options.types.find((function(e){return e.type===t.type}))||{},i=s(s({},e),t);this.assignProps(["ripple","position","dismissible"],i);var n=new a(i);return this._pushNotification(n),n},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(t,e){var i=this;t.forEach((function(t){e[t]=null==e[t]?i.options[t]:e[t]}))},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var i=void 0!==t.options.duration?t.options.duration:this.options.duration;i&&setTimeout((function(){return e._removeNotification(t)}),i)},t.prototype._removeNotification=function(t){var e=this.notifications.indexOf(t);-1!==e&&this.notifications.splice(e,1)},t.prototype.normalizeOptions=function(t,e){var i={type:t};return"string"==typeof e?i.message=e:"object"==typeof e&&(i=s(s({},i),e)),i},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice();return d.types.map((function(t){var i=-1;e.forEach((function(e,n){e.type===t.type&&(i=n)}));var n=-1!==i?e.splice(i,1)[0]:{};return s(s({},t),n)})).concat(e)},t}();const u=(t,e)=>{const i="iframe_"+(new Date).getTime()+"_"+Math.floor(1e3*Math.random()),n=document.createElement("iframe");n.setAttribute("id",i),n.setAttribute("src",t),n.style.width=screen.width+"px",n.style.height=screen.height+"px",n.style.position="absolute",n.style.left="-"+screen.width+"px",document.body.append(n),n.addEventListener("load",(function(){const t=n.contentDocument||n.contentWindow.document,o=t.querySelector("body");if(o.setAttribute("data-iframe-id",i),o.setAttribute("data-iframe-event-name","edac_scan_complete"),o.setAttribute("data-iframe-post-id",e),t){const e=t.createElement("script");e.src=edac_editor_app.baseurl+"/build/pageScanner.bundle.js?v="+edac_editor_app.version,t.head.appendChild(e)}}))},f=()=>{top.addEventListener("edac_scan_complete",(function(t){const e=t.detail.postId,i=t.detail.violations,o=t.detail.iframeId;setTimeout((function(){document.getElementById(o).remove()}),1e3),((t,e)=>{document.querySelector(".edac-panel").classList.add("edac-panel-loading"),(async(t="",e={})=>await fetch(t,{method:"POST",headers:{"X-WP-Nonce":edac_script_vars.restNonce,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).catch((()=>({}))))(edac_editor_app.edacApiUrl+"/post-scan-results/"+t,{violations:e}).then((e=>{n("Saving "+t+": done");const i=new CustomEvent("edac_js_scan_save_complete");top.dispatchEvent(i),e.success||(n("Saving "+t+": error"),(t=>{const e=Object.assign({},{msg:"",type:"warning",url:!1,label:"",closeOthers:!0},{msg:"Whoops! It looks like there was a problem updating. Please try again.",type:"warning"});if(void 0!==window.wp&&void 0!==window.wp.data&&void 0!==window.wp.data.dispatch){const t={isDismissible:!0};let i=e.msg;e.url?(t.actions=[{url:e.url,label:e.label}],i=i.replace("{link}","follow the link below")):i=i.replace("{link}",""),e.closeOthers&&document.querySelectorAll(".components-notice").forEach((t=>{t.style.display="none"})),setTimeout((function(){wp.data.dispatch("core/notices").createNotice(e.type,i,t)}),10)}else{if(window.edac_editor_app&&window.edac_editor_app.baseurl){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=window.edac_editor_app.baseurl+"/build/css/editorApp.css",document.getElementsByTagName("head")[0].appendChild(t)}let t=e.msg;t=e.url?t.replace("{link}",'<a href="'+e.url+'" target="_blank" arial-label="'+e.label+'">'+e.label+"</a>"):t.replace("{link}","");const i=new l({position:{x:"right",y:"top"},ripple:!1,types:[{type:"success",background:"#193EEE",duration:2e3,dismissible:!0,icon:!1},{type:"warning",background:"#454545",duration:4e3,dismissible:!0,icon:!1},{type:"error",background:"#AD1414",duration:0,dismissible:!0,icon:!1}]});e.closeOthers&&i.dismissAll(),i.open({type:e.type,message:t})}})()),document.querySelector(".edac-panel").classList.add("edac-panel-loading")}))})(e,i)}));let t=!1,e=!1;var o;void 0!==wp.data&&void 0!==wp.data.subscribe?wp.data.subscribe((()=>{void 0!==wp.data.select("core/editor")&&(wp.data.select("core/editor").isAutosavingPost()&&(e=!0),wp.data.select("core/editor").isSavingPost()?t=!0:t&&(t=!1,e?e=!1:u(edac_editor_app.scanUrl,edac_editor_app.postID)))})):(o="Gutenberg is not enabled.",i&&(location.href!==window.top.location.href&&console.debug("DEBUG [ "+location.href+" ]"),console.debug("DEBUG: "+o))),u(edac_editor_app.scanUrl,edac_editor_app.postID)};window.addEventListener("DOMContentLoaded",(()=>{edac_editor_app.active&&"1"===edac_editor_app.authOk&&setTimeout((function(){f()}),250)}))})();