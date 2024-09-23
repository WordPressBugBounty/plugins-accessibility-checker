/*! For license information please see emailOptIn.bundle.js.LICENSE.txt */
(()=>{"use strict";(()=>{var e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],t=e.join(","),n="undefined"==typeof Element,o=n?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,r=!n&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},a=function e(t,n){var o;void 0===n&&(n=!0);var r=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===r||"true"===r||n&&t&&e(t.parentNode)},i=function(e,n,r){if(a(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(t));return n&&o.call(e,t)&&i.unshift(e),i.filter(r)},c=function e(n,r,i){for(var c=[],l=Array.from(n);l.length;){var s=l.shift();if(!a(s,!1))if("SLOT"===s.tagName){var u=s.assignedElements(),d=e(u.length?u:s.children,!0,i);i.flatten?c.push.apply(c,d):c.push({scopeParent:s,candidates:d})}else{o.call(s,t)&&i.filter(s)&&(r||!n.includes(s))&&c.push(s);var f=s.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(s),p=!a(f,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(s));if(f&&p){var m=e(!0===f?s.children:f.children,!0,i);i.flatten?c.push.apply(c,m):c.push({scopeParent:s,candidates:m})}else l.unshift.apply(l,s.children)}}return c},l=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},s=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!l(e)?0:e.tabIndex},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){return!(t.disabled||a(t)||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,a=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=o.call(e,"details>summary:first-of-type")?e.parentElement:e;if(o.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return f(e)}else{if("function"==typeof a){for(var c=e;e;){var l=e.parentElement,s=r(e);if(l&&!l.shadowRoot&&!0===a(l))return f(e);e=e.assignedSlot?e.assignedSlot:l||s===e.ownerDocument?l:s.host}e=c}if(function(e){var t,n,o,a,i=e&&r(e),c=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=c)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(c)||null!=e&&null!==(a=e.ownerDocument)&&void 0!==a&&a.contains(e));!l&&c;){var s,u,d;l=!(null===(u=c=null===(s=i=r(c))||void 0===s?void 0:s.host)||void 0===u||null===(d=u.ownerDocument)||void 0===d||!d.contains(c))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!o.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||r(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var a=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!a||a===e}(e)}(t)||s(t)<0||!p(e,t))},v=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},b=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,c=function(e,t){var n=s(e);return n<0&&t&&!l(e)?0:n}(i,a),u=a?e(t.candidates):i;0===c?a?n.push.apply(n,u):n.push(i):o.push({documentOrder:r,tabIndex:c,item:t,isScope:a,content:u})})),o.sort(u).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},h=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return!1!==o.call(e,t)&&m(n,e)},y=e.concat("iframe").join(","),w=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==o.call(e,y)&&p(t,e)};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){var o,r,a;o=e,r=t,a=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(r))in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},E=function(e){return N(e)&&!e.shiftKey},S=function(e){return N(e)&&e.shiftKey},k=function(e){return setTimeout(e,0)},T=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},C=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},R=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},I=[],O=function(e,t){var n,o=(null==t?void 0:t.document)||document,r=(null==t?void 0:t.trapStack)||I,a=_({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:E,isKeyBackward:S},t),l={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(e,t,n){return e&&void 0!==e[t]?e[t]:a[n||t]},d=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return l.containerGroups.findIndex((function(t){var o=t.container,r=t.tabbableNodes;return o.contains(e)||(null==n?void 0:n.includes(o))||r.find((function(t){return t===e}))}))},f=function(e){var t=a[e];if("function"==typeof t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t=t.apply(void 0,r)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"==typeof t&&!(c=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},y=function(){var e=f("initialFocus");if(!1===e)return!1;if(void 0===e||!w(e,a.tabbableOptions))if(d(o.activeElement)>=0)e=o.activeElement;else{var t=l.tabbableGroups[0];e=t&&t.firstTabbableNode||f("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},g=function(){if(l.containerGroups=l.containers.map((function(e){var t=function(e,t){var n;return n=(t=t||{}).getShadowRoot?c([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:v}):i(e,t.includeContainer,m.bind(null,t)),b(n)}(e,a.tabbableOptions),n=function(e,t){return(t=t||{}).getShadowRoot?c([e],t.includeContainer,{filter:p.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):i(e,t.includeContainer,p.bind(null,t))}(e,a.tabbableOptions),o=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,l=n.find((function(e){return h(e)})),u=n.slice().reverse().find((function(e){return h(e)})),d=!!t.find((function(e){return s(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:d,firstTabbableNode:o,lastTabbableNode:r,firstDomTabbableNode:l,lastDomTabbableNode:u,nextTabbableNode:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?o?n.slice(n.indexOf(e)+1).find((function(e){return h(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return h(e)})):t[r+(o?1:-1)]}}})),l.tabbableGroups=l.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),l.tabbableGroups.length<=0&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(l.containerGroups.find((function(e){return e.posTabIndexesFound}))&&l.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},O=function e(t){var n=t.activeElement;if(n)return n.shadowRoot&&null!==n.shadowRoot.activeElement?e(n.shadowRoot):n},x=function e(t){!1!==t&&t!==O(document)&&(t&&t.focus?(t.focus({preventScroll:!!a.preventScroll}),l.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(y()))},F=function(e){var t=f("setReturnFocus",e);return t||!1!==t&&e},D=function(e){var t=e.target,n=e.event,o=e.isBackward,r=void 0!==o&&o;t=t||R(n),g();var i=null;if(l.tabbableGroups.length>0){var c=d(t,n),u=c>=0?l.containerGroups[c]:void 0;if(c<0)i=r?l.tabbableGroups[l.tabbableGroups.length-1].lastTabbableNode:l.tabbableGroups[0].firstTabbableNode;else if(r){var p=T(l.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(p<0&&(u.container===t||w(t,a.tabbableOptions)&&!h(t,a.tabbableOptions)&&!u.nextTabbableNode(t,!1))&&(p=c),p>=0){var m=0===p?l.tabbableGroups.length-1:p-1,v=l.tabbableGroups[m];i=s(t)>=0?v.lastTabbableNode:v.lastDomTabbableNode}else N(n)||(i=u.nextTabbableNode(t,!1))}else{var b=T(l.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(b<0&&(u.container===t||w(t,a.tabbableOptions)&&!h(t,a.tabbableOptions)&&!u.nextTabbableNode(t))&&(b=c),b>=0){var y=b===l.tabbableGroups.length-1?0:b+1,_=l.tabbableGroups[y];i=s(t)>=0?_.firstTabbableNode:_.firstDomTabbableNode}else N(n)||(i=u.nextTabbableNode(t))}}else i=f("fallbackFocus");return i},P=function(e){var t=R(e);d(t,e)>=0||(C(a.clickOutsideDeactivates,e)?n.deactivate({returnFocus:a.returnFocusOnDeactivate}):C(a.allowOutsideClick,e)||e.preventDefault())},A=function(e){var t=R(e),n=d(t,e)>=0;if(n||t instanceof Document)n&&(l.mostRecentlyFocusedNode=t);else{var o;e.stopImmediatePropagation();var r=!0;if(l.mostRecentlyFocusedNode)if(s(l.mostRecentlyFocusedNode)>0){var i=d(l.mostRecentlyFocusedNode),c=l.containerGroups[i].tabbableNodes;if(c.length>0){var u=c.findIndex((function(e){return e===l.mostRecentlyFocusedNode}));u>=0&&(a.isKeyForward(l.recentNavEvent)?u+1<c.length&&(o=c[u+1],r=!1):u-1>=0&&(o=c[u-1],r=!1))}}else l.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return s(e)>0}))}))||(r=!1);else r=!1;r&&(o=D({target:l.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(l.recentNavEvent)})),x(o||l.mostRecentlyFocusedNode||y())}l.recentNavEvent=void 0},L=function(e){if(("Escape"===(null==(t=e)?void 0:t.key)||"Esc"===(null==t?void 0:t.key)||27===(null==t?void 0:t.keyCode))&&!1!==C(a.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(a.isKeyForward(e)||a.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l.recentNavEvent=e;var n=D({event:e,isBackward:t});n&&(N(e)&&e.preventDefault(),x(n))}(e,a.isKeyBackward(e))},j=function(e){var t=R(e);d(t,e)>=0||C(a.clickOutsideDeactivates,e)||C(a.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},G=function(){if(l.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)}(r,n),l.delayInitialFocusTimer=a.delayInitialFocus?k((function(){x(y())})):x(y()),o.addEventListener("focusin",A,!0),o.addEventListener("mousedown",P,{capture:!0,passive:!1}),o.addEventListener("touchstart",P,{capture:!0,passive:!1}),o.addEventListener("click",j,{capture:!0,passive:!1}),o.addEventListener("keydown",L,{capture:!0,passive:!1}),n},B=function(){if(l.active)return o.removeEventListener("focusin",A,!0),o.removeEventListener("mousedown",P,!0),o.removeEventListener("touchstart",P,!0),o.removeEventListener("click",j,!0),o.removeEventListener("keydown",L,!0),n},q="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===l.mostRecentlyFocusedNode}))}))&&x(y())})):void 0,U=function(){q&&(q.disconnect(),l.active&&!l.paused&&l.containers.map((function(e){q.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return l.active},get paused(){return l.paused},activate:function(e){if(l.active)return this;var t=u(e,"onActivate"),n=u(e,"onPostActivate"),r=u(e,"checkCanFocusTrap");r||g(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=o.activeElement,null==t||t();var a=function(){r&&g(),G(),U(),null==n||n()};return r?(r(l.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!l.active)return this;var t=_({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},e);clearTimeout(l.delayInitialFocusTimer),l.delayInitialFocusTimer=void 0,B(),l.active=!1,l.paused=!1,U(),function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(r,n);var o=u(t,"onDeactivate"),i=u(t,"onPostDeactivate"),c=u(t,"checkCanReturnFocus"),s=u(t,"returnFocus","returnFocusOnDeactivate");null==o||o();var d=function(){k((function(){s&&x(F(l.nodeFocusedBeforeActivation)),null==i||i()}))};return s&&c?(c(F(l.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(l.paused||!l.active)return this;var t=u(e,"onPause"),n=u(e,"onPostPause");return l.paused=!0,null==t||t(),B(),U(),null==n||n(),this},unpause:function(e){if(!l.paused||!l.active)return this;var t=u(e,"onUnpause"),n=u(e,"onPostUnpause");return l.paused=!1,null==t||t(),g(),G(),U(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return l.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),l.active&&g(),U(),this}}).updateContainerElements(e),n};window.edac_email_opt_in_form=window.edac_email_opt_in_form||{};const x=e=>{e.deactivate(),fetch(window.edac_email_opt_in_form.ajaxurl+"?action=edac_email_opt_in_closed_modal_ajax").then((e=>e.json()))},F=function(){const e={action:"edac_email_opt_in_ajax",nonce:edac_email_opt_in_form.nonce},t=Object.keys(e).map((t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t]))).join("&");fetch(edac_email_opt_in_form.ajaxurl+"?"+t).then((e=>{e.ok||(document.querySelector("._form-thank-you").textContent="There was a problem. Please try again.")}))};window.cfields=[],window._show_thank_you=function(e,t,n,o){var r=document.getElementById("_form_"+e+"_"),a=r.querySelector("._form-thank-you");r.querySelector("._form-content").style.display="none",a.innerHTML=t,a.style.display="block";const i="undefined"==typeof visitorGlobalObjectAlias?"vgo":visitorGlobalObjectAlias;var c=window[i];o&&void 0!==c?(c("setEmail",o),c("update")):void 0!==n&&n&&_load_script(n),void 0!==window._form_callback&&window._form_callback(e)},window._show_error=function(e,t,n){var o=document.getElementById("_form_"+e+"_"),r=document.createElement("div"),a=o.querySelector("button"),i=o.querySelector("._form_error");i&&i.parentNode.removeChild(i),r.innerHTML=t,r.className="_error-inner _form_error _no_arrow";var c=document.createElement("div");c.className="_form-inner",c.appendChild(r),a.parentNode.insertBefore(c,a);var l=o.querySelector('[id^="_form"][id$="_submit"]');if(l.disabled=!1,l.classList.remove("processing"),n){var s=document.createElement("div");s.className="_error-html",s.innerHTML=n,r.appendChild(s)}},window._load_script=function(e,t,n){var o=document.querySelector("head"),r=document.createElement("script"),a=!1,i=document.querySelector("#_form_1_submit");r.type="text/javascript",r.charset="utf-8",r.src=e,t&&(r.onload=r.onreadystatechange=function(){a||this.readyState&&"complete"!=this.readyState||(a=!0,t())}),r.onerror=function(){n&&(r.src.length>1e4?_show_error("1","Sorry, your submission failed. Please shorten your responses and try again."):_show_error("1","Sorry, your submission failed. Please try again."),i.disabled=!1,i.classList.remove("processing"))},o.appendChild(r)},function(){if(-1!==window.location.search.search("excludeform"))return!1;for(var e,t=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{var o=e["on"+t];e["on"+t]=function(){o.apply(this,arguments),n.apply(this,arguments)}}},n=document.getElementById("_form_1_"),o=n.querySelectorAll("input, select, textarea"),r=[],a=!1,i=function(e,t){var n=decodeURIComponent(e);if(t&&null!==t.match(/(%d|%e).*%m/gi))return n.replace(/(\d{2}).*(\d{2}).*(\d{4})/g,"$3-$2-$1");if(Date.parse(n)){var o=new Date(n),r=o.getFullYear(),a=o.getMonth()+1,i=o.getDate();return`${r}-${a<10?`0${a}`:a}-${i<10?`0${i}`:i}`}return!1},c=0;c<o.length;c++){var l=new RegExp("field\\[(\\d+)\\]").exec(o[c].name);o[c].dataset.name=null!=l?o[c].name.match(/\[time\]$/)?`${window.cfields[l[1]]}_time`:window.cfields[l[1]]:o[c].name;var s=(e=o[c].dataset.name,new URLSearchParams(window.location.search).get(e)||!1);if(s){if("false"===o[c].dataset.autofill)continue;"radio"==o[c].type||"checkbox"==o[c].type?o[c].value==s&&(o[c].checked=!0):"date"==o[c].type?o[c].value=i(s,"%m/%d/%Y"):"time"==o[c].type?o[c].value=(u=void 0,d=void 0,f=void 0,d=decodeURIComponent(s),f=Array.from(d.matchAll(/(\d{1,2}):(\d{1,2})\W*([AaPp][Mm])?/gm))[0],u=f[3]?"pm"===f[3].toLowerCase()?12===parseInt(f[1])?"12":`${parseInt(f[1])+12}`:12===parseInt(f[1])?"0":f[1]:f[1],`${parseInt(u)<10?`0${parseInt(u)}`:u}:${f[2]}`):o[c].value=s}}var u,d,f,p=function(e,t){var n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i={};return"radio"!=e.type&&"checkbox"!=e.type?(n.className="_error",o.className="_error-arrow",a.className="_error-inner",a.innerHTML=t,n.appendChild(o),n.appendChild(a),e.parentNode.appendChild(n)):(n.className="_error-inner _no_arrow",n.innerHTML=t,e.parentNode.insertBefore(n,e),i.no_arrow=!0),i.tip=n,i.elem=e,r.push(i),i},m=function(e){var t=e.elem.getBoundingClientRect(),n=document.documentElement,o=t.top-((window.pageYOffset||n.scrollTop)-(n.clientTop||0));e.tip.className=o<40?e.tip.className.replace(/ ?(_above|_below) ?/g,"")+" _below":e.tip.className.replace(/ ?(_above|_below) ?/g,"")+" _above"},v=function(){for(var e=0;e<r.length;e++)r[e].no_arrow||m(r[e])},b=function(e,t){var o=null,a=e.value,i=!0;if(t&&function(e){for(var t=0;t<r.length;t++)if(r[t].elem===e)return r[t].tip.parentNode.removeChild(r[t].tip),void r.splice(t,1)}(e),"checkbox"!=e.type&&(e.className=e.className.replace(/ ?_has_error ?/g,"")),null!==e.getAttribute("required"))if("radio"==e.type||"checkbox"==e.type&&/any/.test(e.className)){if(!((l=n.elements[e.name])instanceof NodeList||l instanceof HTMLCollection)||l.length<=1)i=e.checked;else{i=!1;for(var c=0;c<l.length;c++)l[c].checked&&(i=!0)}i||(o=p(e,"Please select an option."))}else if("checkbox"==e.type){var l=n.elements[e.name],s=!1,u=[];for(i=!0,c=0;c<l.length;c++)if(null!==l[c].getAttribute("required")){if(!s&&l[c]!==e)return!0;s=!0,l[c].className=l[c].className.replace(/ ?_has_error ?/g,""),l[c].checked||(i=!1,l[c].className=l[c].className+" _has_error",u.push("Checking %s is required".replace("%s",l[c].value)))}i||(o=p(e,u.join("<br/>")))}else if("SELECT"==e.tagName){var d=!0;if(e.multiple){for(d=!1,c=0;c<e.options.length;c++)if(e.options[c].selected){d=!0;break}}else for(c=0;c<e.options.length;c++)!e.options[c].selected||e.options[c].value&&!e.options[c].value.match(/\n/g)||(d=!1);d||(e.className=e.className+" _has_error",i=!1,o=p(e,"Please select an option."))}else null!=a&&""!==a||(e.className=e.className+" _has_error",i=!1,o=p(e,"This field is required."));return!i||"field[]"!=e.id&&"ca[11][v]"!=e.id||e.className.includes("phone-input-error")&&(e.className=e.className+" _has_error",i=!1),i&&"email"==e.name&&(a.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)||(e.className=e.className+" _has_error",i=!1,o=p(e,"Enter a valid email address."))),i&&/date_field/.test(e.className)&&(a.match(/^\d\d\d\d-\d\d-\d\d$/)||(e.className=e.className+" _has_error",i=!1,o=p(e,"Enter a valid date."))),o&&m(o),i},h=function(e){return null!==e.getAttribute("required")||"email"===e.name&&""!==e.value||!("field[]"!=e.id&&"ca[11][v]"!=e.id||!e.className.includes("phone-input-error"))};t(window,"resize",v),t(window,"scroll",v),t(n,"submit",(function(e){if(e.preventDefault(),function(e){n.querySelector("._form_error");var i=!0;if(!a){a=!0;for(var c=0,l=o.length;c<l;c++){var s=o[c];h(s)&&("tel"==s.type&&t(s,"blur",(function(){this.value=this.value.trim(),b(this,!0)})),"text"==s.type||"number"==s.type||"time"==s.type?(t(s,"blur",(function(){this.value=this.value.trim(),b(this,!0)})),t(s,"input",(function(){b(this,!0)}))):"radio"==s.type||"checkbox"==s.type?function(e){for(var o=n.elements[e.name],r=0;r<o.length;r++)t(o[r],"click",(function(){b(e,!0)}))}(s):"SELECT"==s.tagName?t(s,"change",(function(){b(this,!0)})):"textarea"==s.type&&t(s,"input",(function(){b(this,!0)})))}}for(function(){for(var e=0;e<r.length;e++)r[e].tip.parentNode.removeChild(r[e].tip);r=[]}(),c=0,l=o.length;c<l;c++){var u=o[c];h(u)&&("select"!==u.tagName.toLowerCase()&&(u.value=u.value.trim()),b(u)||(i=!1))}return!i&&e&&e.preventDefault(),v(),i}()){var i=e.target.querySelector("#_form_1_submit");i.disabled=!0,i.classList.add("processing");var c=function(e){if(e&&"FORM"===e.nodeName){var t,n,o=[];for(t=0;t<e.elements.length;t++)if(""!==e.elements[t].name)switch(e.elements[t].nodeName){case"INPUT":switch(e.elements[t].type){case"tel":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].previousSibling.querySelector("div.iti__selected-dial-code").innerText)+encodeURIComponent(" ")+encodeURIComponent(e.elements[t].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"checkbox":case"radio":e.elements[t].checked&&o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}break;case"TEXTAREA":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"SELECT":switch(e.elements[t].type){case"select-one":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"select-multiple":for(n=0;n<e.elements[t].options.length;n++)e.elements[t].options[n].selected&&o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].options[n].value))}break;case"BUTTON":switch(e.elements[t].type){case"reset":case"submit":case"button":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}}return o.join("&")}}(document.getElementById("_form_1_")).replace(/%0A/g,"\\n"),l=n.querySelector("._form_error");l&&l.parentNode.removeChild(l),_load_script("https://equalizedigital.activehosted.com/proc.php?"+c+"&jsonp=true",F,!0)}return!1})),window.edac_email_opt_in_form.showModal&&(window.onload=function(){tb_show("Accessibility Checker","#TB_inline?width=600&inlineId=edac-opt-in-modal",null);let e=0;const t=setInterval((()=>{((()=>{const e=document.getElementById("TB_window"),t=e?.querySelector(".tb-close-icon");if(!e||!t)return!1;t.setAttribute("aria-hidden","true");const n=O(e);return n.activate(),jQuery(document).one("tb_unload",(function(){x(n)})),!0})()||e>=10)&&clearInterval(t),e++}),250)})}()})()})();