import{a7 as i}from"./index-b20d2c73.js";const u=t=>new Promise(e=>setTimeout(e,t)),p=(t,e)=>Math.floor(Math.random()*(e-t)+t),l=async(t,e,s)=>{if(!e){console.error("The specified parent element does not exists!");return}let n=t;do{if(n===e)return;s(n),n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1)},r=t=>t.childNodes.length===1&&t.childNodes[0].nodeType===3,a=(t,e)=>{const s=document.createElement(e);return s.textContent=t,s},d=t=>t.dataset.static===void 0,c=(t,{parentElement:e})=>{if(r(e)){const s=e.textContent,n=a(e.textContent,"p");return e.textContent="",e.appendChild(n),[{currentNode:n,text:s}]}if(r(t)){const s=t.innerHTML.replaceAll("&amp;","&");return[{currentNode:t,text:s}]}else return[...t.children].filter(d).flatMap(o=>c(o,{parentElement:e}))},h=t=>{const e=[...t.querySelectorAll("[data-static]")];for(const s of e)l(s,t,n=>{n!==s&&n.classList.add("finished-typing")})},f=(t,e)=>{const s=i(),n={parentElement:t,dispatch:s,...e},o=c(t,n);return h(t),{options:n,elements:o}};export{f as a,l as b,h as m,p as r,u as s};
