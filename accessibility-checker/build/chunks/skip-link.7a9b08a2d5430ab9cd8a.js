"use strict";(self.webpackChunkaccessibility_checker=self.webpackChunkaccessibility_checker||[]).push([[307],{695:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var c=n(575);const r=()=>{const e=document.getElementById("skip-link-template");if(!e)return;if(!window.edac_frontend_fixes.skip_link.targets)return;if((()=>{const e=(()=>{const e=document.querySelectorAll("body a:not(.ab-item)");for(const t of e)if(!t.closest("#wpadminbar"))return t;return null})();if(e&&e.href&&-1!==e.href.indexOf("#")){const t=e.href.split("#")[1];return!!document.getElementById(t)}return!1})())return;const t=window.edac_frontend_fixes.skip_link.targets.find((e=>document.querySelector(e)));t||console.log((0,c.__)("EDAC: Did not find a matching target ID on the page for the skip link.","accessibility-checker"));const n=e.content.cloneNode(!0);t?n.querySelector(".edac-skip-link--content").href=t:n.querySelector(".edac-skip-link--content").remove(),document.body.prepend(n)}}}]);