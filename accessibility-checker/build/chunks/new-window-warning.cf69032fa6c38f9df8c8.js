"use strict";(self.webpackChunkaccessibility_checker=self.webpackChunkaccessibility_checker||[]).push([[459],{835:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const i=(0,n(575).__)("opens a new window","accessibility-checker"),o=()=>{document.querySelectorAll(".edac-nww-external-link-icon").forEach((e=>e.remove())),document.querySelectorAll("a").forEach((e=>{const t=e.getAttribute("onclick");if("_blank"===e.getAttribute("target")&&(l(e),c(e),a(e)),t&&t.includes("window.open")){const n=t.match(/window\.open\([^,]+,\s*['"]([^'"]+)['"]/),i=n?n[1]:"";"_blank"!==i&&""!==i||(l(e),c(e),a(e))}}))},l=e=>{const t=e.querySelector("h1, h2, h3, h4, h5, h6");t?t.insertAdjacentHTML("beforeend",'<i class="edac-nww-external-link-icon" aria-hidden="true"></i>'):e.insertAdjacentHTML("beforeend",'<i class="edac-nww-external-link-icon" aria-hidden="true"></i>')},c=e=>{let t="";e.getAttribute("aria-label")?t=e.getAttribute("aria-label"):e.querySelector("img")?t=e.querySelector("img").getAttribute("alt"):e.textContent&&(t=e.textContent),t?(t=t.trimEnd(),t+=", "+i):t+=i,e.setAttribute("aria-label",t)},a=e=>{const t=document.querySelector(".edac-nww-tooltip");e.addEventListener("mousemove",(e=>{t.style.top=e.pageY+10+"px",t.style.left=e.pageX+10+"px"})),e.addEventListener("mouseenter",(()=>{t.style.display="block",t.innerHTML=i})),e.addEventListener("mouseleave",(()=>{t.style.display="none"})),e.addEventListener("focusin",(()=>{const n=e.getBoundingClientRect();t.style.top=n.top+window.scrollY+e.offsetHeight+"px",t.style.left=n.left+window.scrollX+"px",t.style.display="block",t.innerHTML=i})),e.addEventListener("focusout",(()=>{t.style.display="none"}))},s=()=>{(()=>{const e=document.createElement("div");Object.assign(e.style,{position:"absolute",background:"white",color:"#1e1e1e",fontSize:"16px",border:"1px solid black",padding:"5px 10px",zIndex:9999,display:"none"}),e.classList.add("edac-nww-tooltip"),document.body.appendChild(e)})(),o(),document.addEventListener("facetwp-loaded",o)}}}]);