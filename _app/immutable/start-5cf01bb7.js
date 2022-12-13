import{S as Me,i as Xe,s as Ye,a as Qe,e as D,c as Ze,b as B,g as Z,t as N,d as x,f as V,h as q,j as xe,o as ve,k as et,l as tt,m as nt,n as we,p as G,q as rt,r as at,u as ot,v as J,w as ae,x as z,y as K,z as Ce}from"./chunks/index-f480599e.js";import{g as qe,f as Be,s as Q,a as Ee,i as st}from"./chunks/singletons-dcf4f598.js";import{s as it}from"./chunks/paths-6cd3a76e.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(r,e){return new URL(r,e).href},Je={},C=function(e,t,s){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=ct(a,s),a in Je)return;Je[a]=!0;const u=a.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":lt,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((d,h)=>{i.addEventListener("load",d),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};class ye{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,t){this.status=e,this.location=t}}function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const s of dt){let a=t[s];Object.defineProperty(t,s,{get(){return e(),a},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(s,a,u)=>u(r,a),ht(t),t}function ht(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ce.delete(s)}return Re(r,e)};const ce=new Map;function mt(r,e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(a+=`[data-hash="${_t(t.body)}"]`);const u=document.querySelector(a);if(u!=null&&u.textContent){const{body:n,...i}=JSON.parse(u.textContent),d=u.getAttribute("data-ttl");return d&&ce.set(e,{body:n,init:i,ttl:1e3*Number(d)}),Promise.resolve(new Response(n,i))}return Re(r,t)}function gt(r,e){const t=ce.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ce.delete(r)}return Re(r,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(r){const e=[],t=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(bt).map((u,n,i)=>{const d=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const y=n===i.length-1;return d&&"/"+d.split(/\[(.+?)\]/).map((L,T)=>{if(T%2){const $=wt.exec(L);if(!$)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,F,W]=$;return e.push(F),t.push(W),I?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(s=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:t}}function bt(r){return!/^\([^)]+\)$/.test(r)}function vt(r,e,t,s){const a={};for(let u=0;u<e.length;u+=1){const n=e[u],i=t[u],d=r[u+1]||"";if(i){const h=s[i];if(!h)throw new Error(`Missing "${i}" param matcher`);if(!h(d))return}a[n]=d}return a}function Et(r,e,t,s){const a=new Set(e);return Object.entries(t).map(([i,[d,h,y]])=>{const{pattern:L,names:T,types:$}=yt(i),I={id:i,exec:F=>{const W=L.exec(F);if(W)return vt(W,T,$,s)},errors:[1,...y||[]].map(F=>r[F]),layouts:[0,...h||[]].map(n),leaf:u(d)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(i){const d=i<0;return d&&(i=~i),[d,r[i]]}function n(i){return i===void 0?i:[a.has(i),r[i]]}}function kt(r){let e,t,s;var a=r[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&J(e.$$.fragment),t=D()},l(n){e&&ae(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),B(n,t,i),s=!0},p(n,i){const d={};if(i&4&&(d.data=n[2]),i&2&&(d.form=n[1]),a!==(a=n[0][0])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(n)),J(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&N(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&K(e,n)}}}function $t(r){let e,t,s;var a=r[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[Pt]},$$scope:{ctx:n}}}}return a&&(e=new a(u(r))),{c(){e&&J(e.$$.fragment),t=D()},l(n){e&&ae(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),B(n,t,i),s=!0},p(n,i){const d={};if(i&4&&(d.data=n[2]),i&1051&&(d.$$scope={dirty:i,ctx:n}),a!==(a=n[0][0])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(n)),J(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&N(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&K(e,n)}}}function Rt(r){let e,t,s;var a=r[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&J(e.$$.fragment),t=D()},l(n){e&&ae(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),B(n,t,i),s=!0},p(n,i){const d={};if(i&8&&(d.data=n[3]),i&2&&(d.form=n[1]),a!==(a=n[0][1])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(n)),J(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&N(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&K(e,n)}}}function Lt(r){let e,t,s;var a=r[0][1];function u(n){return{props:{data:n[3],$$slots:{default:[St]},$$scope:{ctx:n}}}}return a&&(e=new a(u(r))),{c(){e&&J(e.$$.fragment),t=D()},l(n){e&&ae(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),B(n,t,i),s=!0},p(n,i){const d={};if(i&8&&(d.data=n[3]),i&1043&&(d.$$scope={dirty:i,ctx:n}),a!==(a=n[0][1])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(n)),J(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&N(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&K(e,n)}}}function St(r){let e,t,s;var a=r[0][2];function u(n){return{props:{data:n[4],form:n[1]}}}return a&&(e=new a(u(r))),{c(){e&&J(e.$$.fragment),t=D()},l(n){e&&ae(e.$$.fragment,n),t=D()},m(n,i){e&&z(e,n,i),B(n,t,i),s=!0},p(n,i){const d={};if(i&16&&(d.data=n[4]),i&2&&(d.form=n[1]),a!==(a=n[0][2])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(n)),J(e.$$.fragment),V(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else a&&e.$set(d)},i(n){s||(e&&V(e.$$.fragment,n),s=!0)},o(n){e&&N(e.$$.fragment,n),s=!1},d(n){n&&q(t),e&&K(e,n)}}}function Pt(r){let e,t,s,a;const u=[Lt,Rt],n=[];function i(d,h){return d[0][2]?0:1}return e=i(r),t=n[e]=u[e](r),{c(){t.c(),s=D()},l(d){t.l(d),s=D()},m(d,h){n[e].m(d,h),B(d,s,h),a=!0},p(d,h){let y=e;e=i(d),e===y?n[e].p(d,h):(Z(),N(n[y],1,1,()=>{n[y]=null}),x(),t=n[e],t?t.p(d,h):(t=n[e]=u[e](d),t.c()),V(t,1),t.m(s.parentNode,s))},i(d){a||(V(t),a=!0)},o(d){N(t),a=!1},d(d){n[e].d(d),d&&q(s)}}}function Ke(r){let e,t=r[6]&&Fe(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(s){e=tt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=nt(e);t&&t.l(a),a.forEach(q),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(s,a){B(s,e,a),t&&t.m(e,null)},p(s,a){s[6]?t?t.p(s,a):(t=Fe(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&q(e),t&&t.d()}}}function Fe(r){let e;return{c(){e=rt(r[7])},l(t){e=at(t,r[7])},m(t,s){B(t,e,s)},p(t,s){s&128&&ot(e,t[7])},d(t){t&&q(e)}}}function Ot(r){let e,t,s,a,u;const n=[$t,kt],i=[];function d(y,L){return y[0][1]?0:1}e=d(r),t=i[e]=n[e](r);let h=r[5]&&Ke(r);return{c(){t.c(),s=Qe(),h&&h.c(),a=D()},l(y){t.l(y),s=Ze(y),h&&h.l(y),a=D()},m(y,L){i[e].m(y,L),B(y,s,L),h&&h.m(y,L),B(y,a,L),u=!0},p(y,[L]){let T=e;e=d(y),e===T?i[e].p(y,L):(Z(),N(i[T],1,1,()=>{i[T]=null}),x(),t=i[e],t?t.p(y,L):(t=i[e]=n[e](y),t.c()),V(t,1),t.m(s.parentNode,s)),y[5]?h?h.p(y,L):(h=Ke(y),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(y){u||(V(t),u=!0)},o(y){N(t),u=!1},d(y){i[e].d(y),y&&q(s),h&&h.d(y),y&&q(a)}}}function It(r,e,t){let{stores:s}=e,{page:a}=e,{components:u}=e,{form:n}=e,{data_0:i=null}=e,{data_1:d=null}=e,{data_2:h=null}=e;xe(s.page.notify);let y=!1,L=!1,T=null;return ve(()=>{const $=s.page.subscribe(()=>{y&&(t(6,L=!0),t(7,T=document.title||"untitled page"))});return t(5,y=!0),$}),r.$$set=$=>{"stores"in $&&t(8,s=$.stores),"page"in $&&t(9,a=$.page),"components"in $&&t(0,u=$.components),"form"in $&&t(1,n=$.form),"data_0"in $&&t(2,i=$.data_0),"data_1"in $&&t(3,d=$.data_1),"data_2"in $&&t(4,h=$.data_2)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[u,n,i,d,h,y,L,T,s,a]}class At extends Me{constructor(e){super(),Xe(this,e,It,Ot,Ye,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const jt={},fe=[()=>C(()=>import("./chunks/0-ee4cc88d.js"),["chunks/0-ee4cc88d.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-343e0a06.js","assets/_layout-e93b98fe.css","chunks/index-f480599e.js","chunks/paths-6cd3a76e.js","chunks/stores-552a6c00.js","chunks/singletons-dcf4f598.js","chunks/index-045dda39.js","chunks/search-38c5cdd0.js","assets/search-4c825759.css","chunks/Cash-22daff9f.js","chunks/github-60e021ab.js"],import.meta.url),()=>C(()=>import("./chunks/1-e65dbea0.js"),["chunks/1-e65dbea0.js","components/pages/_error.svelte-f6c59a18.js","chunks/index-f480599e.js","chunks/404-8ba6d2a8.js","chunks/paths-6cd3a76e.js","chunks/github-60e021ab.js","chunks/SvelteSeo-4c1f7364.js"],import.meta.url),()=>C(()=>import("./chunks/2-4a63c271.js"),["chunks/2-4a63c271.js","components/pages/(markdown)/_layout.svelte-34c18852.js","chunks/index-f480599e.js"],import.meta.url),()=>C(()=>import("./chunks/3-68b8a716.js"),["chunks/3-68b8a716.js","components/pages/assets/_error.svelte-43ae9d6b.js","chunks/index-f480599e.js","chunks/stores-552a6c00.js","chunks/singletons-dcf4f598.js","chunks/index-045dda39.js","chunks/paths-6cd3a76e.js","chunks/404-8ba6d2a8.js","chunks/github-60e021ab.js","chunks/SvelteSeo-4c1f7364.js"],import.meta.url),()=>C(()=>import("./chunks/4-d67daad7.js"),["chunks/4-d67daad7.js","components/pages/tokens/_error.svelte-06bb3070.js","chunks/index-f480599e.js","chunks/404-8ba6d2a8.js","chunks/paths-6cd3a76e.js","chunks/github-60e021ab.js","chunks/SvelteSeo-4c1f7364.js","chunks/stores-552a6c00.js","chunks/singletons-dcf4f598.js","chunks/index-045dda39.js"],import.meta.url),()=>C(()=>import("./chunks/5-4e628ba6.js"),["chunks/5-4e628ba6.js","components/pages/_page.svelte-c0c599d1.js","chunks/index-f480599e.js","chunks/SvelteSeo-4c1f7364.js","chunks/paths-6cd3a76e.js","chunks/search-38c5cdd0.js","assets/search-4c825759.css","chunks/stores-552a6c00.js","chunks/singletons-dcf4f598.js","chunks/index-045dda39.js","chunks/Cash-22daff9f.js","chunks/table-27d5c253.js"],import.meta.url),()=>C(()=>import("./chunks/6-11c17d66.js"),["chunks/6-11c17d66.js","components/pages/(markdown)/about/_page.svelte-aa8ff1fc.js","chunks/index-f480599e.js","chunks/SvelteSeo-4c1f7364.js"],import.meta.url),()=>C(()=>import("./chunks/7-54148d47.js"),["chunks/7-54148d47.js","components/pages/(markdown)/legal-notice/_page.svelte-b37e3790.js","chunks/index-f480599e.js","chunks/SvelteSeo-4c1f7364.js"],import.meta.url),()=>C(()=>import("./chunks/8-30e4cf32.js"),["chunks/8-30e4cf32.js","components/pages/api/_page.svelte-258694da.js","chunks/index-f480599e.js","chunks/SvelteSeo-4c1f7364.js"],import.meta.url),()=>C(()=>import("./chunks/9-a1110cf4.js"),["chunks/9-a1110cf4.js","components/pages/assets/_id_/_page.svelte-9b755ff0.js","assets/_page-1f23e042.css","chunks/index-f480599e.js","chunks/table-27d5c253.js","chunks/paths-6cd3a76e.js","chunks/Cash-22daff9f.js","chunks/SvelteSeo-4c1f7364.js","chunks/index-045dda39.js","chunks/_commonjsHelpers-456b4ed0.js"],import.meta.url),()=>C(()=>import("./chunks/10-8be9d70c.js"),["chunks/10-8be9d70c.js","components/pages/donate/_page.svelte-8988f045.js","chunks/index-f480599e.js","chunks/_commonjsHelpers-456b4ed0.js"],import.meta.url),()=>C(()=>import("./chunks/11-0c395357.js"),["chunks/11-0c395357.js","components/pages/faq/_page.svelte-642b7757.js","chunks/index-f480599e.js","chunks/SvelteSeo-4c1f7364.js"],import.meta.url)],Ut=[],Tt={"":[-6],"(markdown)/about":[-7,[2]],"(markdown)/legal-notice":[-8,[2]],api:[8],donate:[10],faq:[-12],"assets/[id]":[-10,[],[3]]},Dt={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},Nt="/__data.js",He="sveltekit:scroll",X="sveltekit:index",se=Et(fe,Ut,Tt,jt),ke=fe[0],$e=fe[1];ke();$e();let re={};try{re=JSON.parse(sessionStorage[He])}catch{}function be(r){re[r]=Ee()}function Vt({target:r,base:e,trailing_slash:t}){var Te;const s=[],a={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},i=!1,d=!0,h=!1,y=1,L=null,T=!1,$,I=(Te=history.state)==null?void 0:Te[X];I||(I=Date.now(),history.replaceState({...history.state,[X]:I},"",location.href));const F=re[I];F&&(history.scrollRestoration="manual",scrollTo(F.x,F.y));let W=!1,H,Le;function Se(){if(!L){const o=new URL(location.href);L=Promise.resolve().then(async()=>{const c=he(o,!0);await Oe(c,o,[]),L=null,T=!1})}return L}async function ue(o,{noscroll:c=!1,replaceState:_=!1,keepfocus:l=!1,state:f={}},m){return typeof o=="string"&&(o=new URL(o,qe(document))),_e({url:o,scroll:c?Ee():null,keepfocus:l,redirect_chain:m,details:{state:f,replaceState:_},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(o){const c=he(o,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=je(c),a.id=c.id,a.promise}async function Oe(o,c,_,l,f){var v,E;const m=Le={};let g=o&&await je(o);if(!g&&c.origin===location.origin&&c.pathname===location.pathname&&(g=await oe({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!g)return await te(c),!1;if(c=(o==null?void 0:o.url)||c,Le!==m)return!1;if(s.length=0,g.type==="redirect")if(_.length>10||_.includes(c.pathname))g=await oe({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return ue(new URL(g.location,c).href,{},[..._,c.pathname]),!1;else((E=(v=g.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await Q.updated.check()&&await te(c);if(h=!0,l&&l.details){const{details:b}=l,w=b.replaceState?0:1;b.state[X]=I+=w,history[b.replaceState?"replaceState":"pushState"](b.state,"",c)}if(i){n=g.state,g.props.page&&(g.props.page.url=c);const b=le();$.$set(g.props),b()}else Ie(g);if(l){const{scroll:b,keepfocus:w}=l;if(!w){const k=document.body,A=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),A!==null?k.setAttribute("tabindex",A):k.removeAttribute("tabindex")}if(await Ce(),d){const k=c.hash&&document.getElementById(c.hash.slice(1));b?scrollTo(b.x,b.y):k?k.scrollIntoView():scrollTo(0,0)}}else await Ce();a.promise=null,a.id=null,d=!0,g.props.page&&(H=g.props.page),f&&f(),h=!1}function Ie(o){var f,m;n=o.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),H=o.props.page;const _=le();$=new At({target:r,props:{...o.props,stores:Q},hydrate:!0}),_();const l={from:null,to:ie("to",{params:n.params,routeId:(m=(f=n.route)==null?void 0:f.id)!=null?m:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(g=>g(l)),i=!0}async function ee({url:o,params:c,branch:_,status:l,error:f,route:m,form:g}){var A;const v=_.filter(Boolean),E={type:"loaded",state:{url:o,params:c,branch:_,error:f,route:m,session_id:y},props:{components:v.map(S=>S.node.component)}};g!==void 0&&(E.props.form=g);let b={},w=!H;for(let S=0;S<v.length;S+=1){const j=v[S];b={...b,...j.data},(w||!n.branch.some(U=>U===j))&&(E.props[`data_${S}`]=b,w=w||Object.keys((A=j.data)!=null?A:{}).length>0)}if(w||(w=Object.keys(H.data).length!==Object.keys(b).length),!n.url||o.href!==n.url.href||n.error!==f||w){E.props.page={error:f,params:c,routeId:m&&m.id,status:l,url:o,data:w?b:H.data};const S=(j,U)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${U}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function de({loader:o,parent:c,url:_,params:l,routeId:f,server_data_node:m}){var b,w,k,A,S;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await o();if((b=E.shared)!=null&&b.load){let j=function(...p){for(const R of p){const{href:P}=new URL(R,_);v.dependencies.add(P)}};const U={};for(const p in l)Object.defineProperty(U,p,{get(){return v.params.add(p),l[p]},enumerable:!0});const M={routeId:f,params:U,data:(w=m==null?void 0:m.data)!=null?w:null,url:pt(_,()=>{v.url=!0}),async fetch(p,R){let P;typeof p=="string"?P=p:(P=p.url,R={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...R});const O=new URL(P,_).href;return j(O),i?gt(O,R):mt(P,O,R)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,c()}};Object.defineProperties(M,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(k=await E.shared.load.call(null,M))!=null?k:null}return{node:E,loader:o,server:m,shared:(A=E.shared)!=null&&A.load?{type:"data",data:g,uses:v}:null,data:(S=g!=null?g:m==null?void 0:m.data)!=null?S:null}}function Ae(o,c,_){if(T)return!0;if(!_)return!1;if(_.parent&&c||o.url&&_.url)return!0;for(const l of o.params)if(_.params.has(l))return!0;for(const l of _.dependencies)if(s.some(f=>f(new URL(l))))return!0;return!1}function pe(o,c){var _,l;return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set((_=o.uses.dependencies)!=null?_:[]),params:new Set((l=o.uses.params)!=null?l:[]),parent:!!o.uses.parent,url:!!o.uses.url}}:(o==null?void 0:o.type)==="skip"&&c!=null?c:null}async function je({id:o,invalidating:c,url:_,params:l,route:f}){var M;if(a.id===o&&a.promise)return a.promise;const{errors:m,layouts:g,leaf:v}=f,E=n.url&&{url:o!==n.url.pathname+n.url.search,params:Object.keys(l).filter(p=>n.params[p]!==l[p])},b=[...g,v];m.forEach(p=>p==null?void 0:p().catch(()=>{})),b.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let w=null;const k=b.reduce((p,R,P)=>{var Y;const O=n.branch[P],ne=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||Ae(E,p.some(Boolean),(Y=O.server)==null?void 0:Y.uses));return p.push(ne),p},[]);if(k.some(Boolean)){try{w=await Ge(_,k)}catch(p){return oe({status:500,error:p,url:_,routeId:f.id})}if(w.type==="redirect")return w}const A=w==null?void 0:w.nodes;let S=!1;const j=b.map(async(p,R)=>{var me,De;if(!p)return;const P=n.branch[R],O=(me=A==null?void 0:A[R])!=null?me:null;if((!O||O.type==="skip")&&p[1]===(P==null?void 0:P.loader)&&!Ae(E,S,(De=P.shared)==null?void 0:De.uses))return P;if(S=!0,(O==null?void 0:O.type)==="error")throw O;return de({loader:p[1],url:_,params:l,routeId:f.id,parent:async()=>{var Ve;const Ne={};for(let ge=0;ge<R;ge+=1)Object.assign(Ne,(Ve=await j[ge])==null?void 0:Ve.data);return Ne},server_data_node:pe(O,P==null?void 0:P.server)})});for(const p of j)p.catch(()=>{});const U=[];for(let p=0;p<b.length;p+=1)if(b[p])try{U.push(await j[p])}catch(R){if(R instanceof ze)return{type:"redirect",location:R.location};let P=500,O;for(A!=null&&A.includes(R)?(P=(M=R.status)!=null?M:P,O=R.error):R instanceof ye?(P=R.status,O=R.body):O=We(R,{params:l,url:_,routeId:f.id});p--;)if(m[p]){let ne,Y=p;for(;!U[Y];)Y-=1;try{return ne={node:await m[p](),loader:m[p],data:{},server:null,shared:null},await ee({url:_,params:l,branch:U.slice(0,Y+1).concat(ne),status:P,error:O,route:f})}catch{continue}}await te(_);return}else U.push(void 0);return await ee({url:_,params:l,branch:U,status:200,error:null,route:f,form:c?void 0:null})}async function oe({status:o,error:c,url:_,routeId:l}){var b;const f={},m=await ke();let g=null;if(m.server)try{const w=await Ge(_,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=(b=w.nodes[0])!=null?b:null}catch{await te(_);return}const v=await de({loader:ke,url:_,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data_node:pe(g)}),E={node:await $e(),loader:$e,shared:null,server:null,data:null};return await ee({url:_,params:f,branch:[v,E],status:o,error:c instanceof ye?c.body:We(c,{url:_,params:f,routeId:null}),route:null})}function he(o,c){if(Ue(o))return;const _=decodeURI(o.pathname.slice(e.length)||"/");for(const l of se){const f=l.exec(_);if(f){const m=new URL(o.origin+ft(o.pathname,t)+o.search+o.hash);return{id:m.pathname+m.search,invalidating:c,route:l,params:ut(f),url:m}}}}function Ue(o){return o.origin!==location.origin||!o.pathname.startsWith(e)}async function _e({url:o,scroll:c,keepfocus:_,redirect_chain:l,details:f,type:m,delta:g,accepted:v,blocked:E}){var S,j,U,M;let b=!1;const w=he(o,!1),k={from:ie("from",{params:n.params,routeId:(j=(S=n.route)==null?void 0:S.id)!=null?j:null,url:n.url}),to:ie("to",{params:(U=w==null?void 0:w.params)!=null?U:null,routeId:(M=w==null?void 0:w.route.id)!=null?M:null,url:o}),type:m};g!==void 0&&(k.delta=g);const A={...k,cancel:()=>{b=!0}};if(u.before_navigate.forEach(p=>p(A)),b){E();return}be(I),v(),i&&Q.navigating.set(k),await Oe(w,o,l,{scroll:c,keepfocus:_,details:f},()=>{u.after_navigate.forEach(p=>p(k)),Q.navigating.set(null)})}function te(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{ve(()=>(u.after_navigate.push(o),()=>{const c=u.after_navigate.indexOf(o);u.after_navigate.splice(c,1)}))},before_navigate:o=>{ve(()=>(u.before_navigate.push(o),()=>{const c=u.before_navigate.indexOf(o);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!i)&&(d=!1)},goto:(o,c={})=>ue(o,c,[]),invalidate:o=>{if(o===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof o=="function")s.push(o);else{const{href:c}=new URL(o,location.href);s.push(_=>_.href===c)}return Se()},invalidateAll:()=>(T=!0,Se()),prefetch:async o=>{const c=new URL(o,qe(document));await Pe(c)},prefetch_routes:async o=>{const _=(o?se.filter(l=>o.some(f=>l.exec(f))):se).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(_)},apply_action:async o=>{if(o.type==="error"){const c=new URL(location.href),{branch:_,route:l}=n;if(!l)return;let f=n.branch.length;for(;f--;)if(l.errors[f]){let m,g=f;for(;!_[g];)g-=1;try{m={node:await l.errors[f](),loader:l.errors[f],data:{},server:null,shared:null};const v=await ee({url:c,params:n.params,branch:_.slice(0,g+1).concat(m),status:500,error:o.error,route:l});n=v.state;const E=le();$.$set(v.props),E();return}catch{continue}}}else if(o.type==="redirect")ue(o.location,{},[]);else{const c={form:o.data};o.status!==H.status&&(c.page={...H,status:o.status});const _=le();$.$set(c),_()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,v;let f=!1;const m={from:ie("from",{params:n.params,routeId:(v=(g=n.route)==null?void 0:g.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(E=>E(m)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(I);try{sessionStorage[He]=JSON.stringify(re)}catch{}}});const o=l=>{const{url:f,options:m}=Be(l);if(f&&m.prefetch){if(Ue(f))return;Pe(f)}};let c;const _=l=>{clearTimeout(c),c=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",_),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:f,url:m,options:g}=Be(l);if(!f||!m)return;const v=f instanceof SVGAElement;if(!v&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||g.reload||(v?f.target.baseVal:f.target))return;const[b,w]=m.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){W=!0,be(I),Q.page.set({...H,url:m}),Q.page.notify();return}_e({url:m,scroll:g.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[X]===I)return;const f=l.state[X]-I;_e({url:new URL(location.href),scroll:re[l.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=l.state[X]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[X]:++I},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Q.navigating.set(null)})},_hydrate:async({status:o,error:c,node_ids:_,params:l,routeId:f,data:m,form:g})=>{var b;const v=new URL(location.href);let E;try{const w=_.map(async(k,A)=>{const S=m[A];return de({loader:fe[k],url:v,params:l,routeId:f,parent:async()=>{const j={};for(let U=0;U<A;U+=1)Object.assign(j,(await w[U]).data);return j},server_data_node:pe(S)})});E=await ee({url:v,params:l,branch:await Promise.all(w),status:o,error:c,form:g,route:(b=se.find(k=>k.id===f))!=null?b:null})}catch(w){const k=w;if(k instanceof ze){await te(new URL(w.location,location.href));return}E=await oe({status:k instanceof ye?k.status:500,error:k,url:v,routeId:f})}Ie(E)}}}let Ct=1;async function Ge(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Nt,t.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),t.searchParams.set("__id",String(Ct++)),await C(()=>import(t.href),[],import.meta.url);const s=window.__sveltekit_data;return delete window.__sveltekit_data,s}function We(r,e){var t;return(t=Dt.handleError({error:r,event:e}))!=null?t:{message:"Internal Error"}}const qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ie(r,e){for(const t of qt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function le(){return()=>{}}async function Kt({env:r,hydrate:e,paths:t,target:s,trailing_slash:a}){it(t);const u=Vt({target:s,base:t.base,trailing_slash:a});st({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Kt as start};
