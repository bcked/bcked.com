import{S as Le,i as Ne,s as Ie,y as b,a as L,z as w,c as N,A as y,b as d,g as $,d as c,B as k,h as _,a1 as Te,k as B,l as H,m as K,n as q,v as P,f as A,J as je,e as de,q as V,r as C,u as F}from"../chunks/index.3647f7f4.js";import{b as I}from"../chunks/paths.f1fc3302.js";import{p as Ve}from"../chunks/stores.4b6537f8.js";import{M as Ce,H as De,F as Ue,I as G,C as Ee,S as Pe}from"../chunks/main.153de233.js";import{M}from"../chunks/main.2b7b246d.js";import{P as Ae}from"../chunks/page.03da4228.js";import{f as Me,T as Oe}from"../chunks/index.aa21e5bb.js";import{P as he}from"../chunks/public.d1f81b30.js";import{f as O,b as Be}from"../chunks/string-formatting.ca7775a2.js";import{C as He}from"../chunks/CurrencyDollar.eeb38cdf.js";import{E as Ke}from"../chunks/ExternalLink.f7713a66.js";import{S as qe}from"../chunks/index.816323cb.js";function ve(i,a,r){const e=i.slice();return e[0]=a[r],e}function be(i){let a,r;return a=new G({props:{href:I+"/assets/"+i[1].native,icon:He,$$slots:{default:[Fe]},$$scope:{ctx:i}}}),{c(){b(a.$$.fragment)},l(e){w(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const t={};s&2&&(t.href=I+"/assets/"+e[1].native),s&1049090&&(t.$$scope={dirty:s,ctx:e}),a.$set(t)},i(e){r||($(a.$$.fragment,e),r=!0)},o(e){c(a.$$.fragment,e),r=!1},d(e){k(a,e)}}}function Fe(i){var s;let a,r=((s=i[9][i[1].native])==null?void 0:s.name)+"",e;return{c(){a=V("Native: "),e=V(r)},l(t){a=C(t,"Native: "),e=C(t,r)},m(t,l){d(t,a,l),d(t,e,l)},p(t,l){var n;l&514&&r!==(r=((n=t[9][t[1].native])==null?void 0:n.name)+"")&&F(e,r)},d(t){t&&_(a),t&&_(e)}}}function we(i){let a,r;return a=new G({props:{href:i[1].explorer,icon:Ke,$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){b(a.$$.fragment)},l(e){w(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const t={};s&2&&(t.href=e[1].explorer),s&1048578&&(t.$$scope={dirty:s,ctx:e}),a.$set(t)},i(e){r||($(a.$$.fragment,e),r=!0)},o(e){c(a.$$.fragment,e),r=!1},d(e){k(a,e)}}}function Ge(i){let a,r=i[1].explorer+"",e;return{c(){a=V("Explorer: "),e=V(r)},l(s){a=C(s,"Explorer: "),e=C(s,r)},m(s,t){d(s,a,t),d(s,e,t)},p(s,t){t&2&&r!==(r=s[1].explorer+"")&&F(e,r)},d(s){s&&_(a),s&&_(e)}}}function ye(i){let a,r;return a=new G({props:{icon:Ee,$$slots:{default:[Je]},$$scope:{ctx:i}}}),{c(){b(a.$$.fragment)},l(e){w(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const t={};s&1048640&&(t.$$scope={dirty:s,ctx:e}),a.$set(t)},i(e){r||($(a.$$.fragment,e),r=!0)},o(e){c(a.$$.fragment,e),r=!1},d(e){k(a,e)}}}function Je(i){let a,r=new Date(i[6]).toLocaleDateString()+"",e;return{c(){a=V("Updated on "),e=V(r)},l(s){a=C(s,"Updated on "),e=C(s,r)},m(s,t){d(s,a,t),d(s,e,t)},p(s,t){t&64&&r!==(r=new Date(s[6]).toLocaleDateString()+"")&&F(e,r)},d(s){s&&_(a),s&&_(e)}}}function ze(i){let a,r,e,s,t=i[1].native&&be(i),l=i[1].explorer&&we(i),n=i[6]&&ye(i);return{c(){t&&t.c(),a=L(),l&&l.c(),r=L(),n&&n.c(),e=de()},l(o){t&&t.l(o),a=N(o),l&&l.l(o),r=N(o),n&&n.l(o),e=de()},m(o,m){t&&t.m(o,m),d(o,a,m),l&&l.m(o,m),d(o,r,m),n&&n.m(o,m),d(o,e,m),s=!0},p(o,m){o[1].native?t?(t.p(o,m),m&2&&$(t,1)):(t=be(o),t.c(),$(t,1),t.m(a.parentNode,a)):t&&(P(),c(t,1,1,()=>{t=null}),A()),o[1].explorer?l?(l.p(o,m),m&2&&$(l,1)):(l=we(o),l.c(),$(l,1),l.m(r.parentNode,r)):l&&(P(),c(l,1,1,()=>{l=null}),A()),o[6]?n?(n.p(o,m),m&64&&$(n,1)):(n=ye(o),n.c(),$(n,1),n.m(e.parentNode,e)):n&&(P(),c(n,1,1,()=>{n=null}),A())},i(o){s||($(t),$(l),$(n),s=!0)},o(o){c(t),c(l),c(n),s=!1},d(o){t&&t.d(o),o&&_(a),l&&l.d(o),o&&_(r),n&&n.d(o),o&&_(e)}}}function Qe(i){let a,r,e;return a=new Pe({props:{data:i[0]}}),{c(){b(a.$$.fragment),r=L()},l(s){w(a.$$.fragment,s),r=N(s)},m(s,t){y(a,s,t),d(s,r,t),e=!0},p(s,t){const l={};t&16&&(l.data=s[0]),a.$set(l)},i(s){e||($(a.$$.fragment,s),e=!0)},o(s){c(a.$$.fragment,s),e=!1},d(s){k(a,s),s&&_(r)}}}function ke(i){let a,r;return a=new M({props:{class:"relative px-4 py-5 sm:p-6",$$slots:{default:[Qe]},$$scope:{ctx:i}}}),{c(){b(a.$$.fragment)},l(e){w(a.$$.fragment,e)},m(e,s){y(a,e,s),r=!0},p(e,s){const t={};s&1048592&&(t.$$scope={dirty:s,ctx:e}),a.$set(t)},i(e){r||($(a.$$.fragment,e),r=!0)},o(e){c(a.$$.fragment,e),r=!1},d(e){k(a,e)}}}function Re(i){let a,r,e,s,t;return a=new De({props:{title:"TVL History",subtitle:"The history of total value locked (TVL) on "+i[1].name+"."}}),s=new Ue({props:{formatter:O,data:i[2].count>0?i[3].history.map(Se):[{date:new Date().toISOString(),value:0}]}}),{c(){b(a.$$.fragment),r=L(),e=B("div"),b(s.$$.fragment),this.h()},l(l){w(a.$$.fragment,l),r=N(l),e=H(l,"DIV",{class:!0});var n=K(e);w(s.$$.fragment,n),n.forEach(_),this.h()},h(){q(e,"class","mt-5 sm:mt-6 h-full overflow-hidden")},m(l,n){y(a,l,n),d(l,r,n),d(l,e,n),y(s,e,null),t=!0},p(l,n){const o={};n&2&&(o.subtitle="The history of total value locked (TVL) on "+l[1].name+"."),a.$set(o);const m={};n&12&&(m.data=l[2].count>0?l[3].history.map(Se):[{date:new Date().toISOString(),value:0}]),s.$set(m)},i(l){t||($(a.$$.fragment,l),$(s.$$.fragment,l),t=!0)},o(l){c(a.$$.fragment,l),c(s.$$.fragment,l),t=!1},d(l){k(a,l),l&&_(r),l&&_(e),k(s)}}}function We(i){let a,r,e,s,t;return a=new De({props:{title:"Assets on Chain",subtitle:"List of assets on "+i[1].name+"."}}),s=new Oe({props:{data:i[0],columns:[{id:"name",title:"Name",class:"font-medium",link:!0},{id:"price",title:"Price",class:""},{id:"supply",title:"Supply",class:""},{id:"mcap",title:"Market Cap",class:""}],rows:i[7].map(i[17]),sort:[{by:"mcap"}],class:""}}),{c(){b(a.$$.fragment),r=L(),e=B("div"),b(s.$$.fragment),this.h()},l(l){w(a.$$.fragment,l),r=N(l),e=H(l,"DIV",{class:!0});var n=K(e);w(s.$$.fragment,n),n.forEach(_),this.h()},h(){q(e,"class","mt-5 sm:mt-6")},m(l,n){y(a,l,n),d(l,r,n),d(l,e,n),y(s,e,null),t=!0},p(l,n){const o={};n&2&&(o.subtitle="List of assets on "+l[1].name+"."),a.$set(o);const m={};n&1&&(m.data=l[0]),n&128&&(m.rows=l[7].map(l[17])),s.$set(m)},i(l){t||($(a.$$.fragment,l),$(s.$$.fragment,l),t=!0)},o(l){c(a.$$.fragment,l),c(s.$$.fragment,l),t=!1},d(l){k(a,l),l&&_(r),l&&_(e),k(s)}}}function Xe(i){var S;let a,r,e,s,t,l,n,o;a=new Ce({props:{title:i[1].name,iconUrl:I+"/"+((S=i[8])==null?void 0:S.href),$$slots:{default:[ze]},$$scope:{ctx:i}}});let m=i[4],p=[];for(let f=0;f<m.length;f+=1)p[f]=ke(ve(i,m,f));const U=f=>c(p[f],1,1,()=>{p[f]=null});return t=new M({props:{$$slots:{default:[Re]},$$scope:{ctx:i}}}),n=new M({props:{class:"sm:mx-0 divide-y divide-gray-200",$$slots:{default:[We]},$$scope:{ctx:i}}}),{c(){b(a.$$.fragment),r=L(),e=B("div");for(let f=0;f<p.length;f+=1)p[f].c();s=L(),b(t.$$.fragment),l=L(),b(n.$$.fragment),this.h()},l(f){w(a.$$.fragment,f),r=N(f),e=H(f,"DIV",{class:!0});var u=K(e);for(let v=0;v<p.length;v+=1)p[v].l(u);u.forEach(_),s=N(f),w(t.$$.fragment,f),l=N(f),w(n.$$.fragment,f),this.h()},h(){q(e,"class","grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none")},m(f,u){y(a,f,u),d(f,r,u),d(f,e,u);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(e,null);d(f,s,u),y(t,f,u),d(f,l,u),y(n,f,u),o=!0},p(f,u){var j;const v={};if(u&2&&(v.title=f[1].name),u&256&&(v.iconUrl=I+"/"+((j=f[8])==null?void 0:j.href)),u&1049154&&(v.$$scope={dirty:u,ctx:f}),a.$set(v),u&16){m=f[4];let h;for(h=0;h<m.length;h+=1){const E=ve(f,m,h);p[h]?(p[h].p(E,u),$(p[h],1)):(p[h]=ke(E),p[h].c(),$(p[h],1),p[h].m(e,null))}for(P(),h=m.length;h<p.length;h+=1)U(h);A()}const T={};u&1048590&&(T.$$scope={dirty:u,ctx:f}),t.$set(T);const D={};u&1048707&&(D.$$scope={dirty:u,ctx:f}),n.$set(D)},i(f){if(!o){$(a.$$.fragment,f);for(let u=0;u<m.length;u+=1)$(p[u]);$(t.$$.fragment,f),$(n.$$.fragment,f),o=!0}},o(f){c(a.$$.fragment,f),p=p.filter(Boolean);for(let u=0;u<p.length;u+=1)c(p[u]);c(t.$$.fragment,f),c(n.$$.fragment,f),o=!1},d(f){k(a,f),f&&_(r),f&&_(e),je(p,f),f&&_(s),k(t,f),f&&_(l),k(n,f)}}}function Ye(i){let a,r,e,s;return a=new qe({props:{title:i[5].title,description:i[5].description,openGraph:{title:i[5].title,description:i[5].description,url:i[5].url,type:"website",images:[i[5].image]},twitter:{site:"@bcked_com",title:i[5].title,description:i[5].description,image:i[5].image.url,imageAlt:i[5].image.alt}}}),e=new Ae({props:{class:"px-0",$$slots:{default:[Xe]},$$scope:{ctx:i}}}),{c(){b(a.$$.fragment),r=L(),b(e.$$.fragment)},l(t){w(a.$$.fragment,t),r=N(t),w(e.$$.fragment,t)},m(t,l){y(a,t,l),d(t,r,l),y(e,t,l),s=!0},p(t,[l]){const n={};l&32&&(n.title=t[5].title),l&32&&(n.description=t[5].description),l&32&&(n.openGraph={title:t[5].title,description:t[5].description,url:t[5].url,type:"website",images:[t[5].image]}),l&32&&(n.twitter={site:"@bcked_com",title:t[5].title,description:t[5].description,image:t[5].image.url,imageAlt:t[5].image.alt}),a.$set(n);const o={};l&1049567&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||($(a.$$.fragment,t),$(e.$$.fragment,t),s=!0)},o(t){c(a.$$.fragment,t),c(e.$$.fragment,t),s=!1},d(t){k(a,t),t&&_(r),k(e,t)}}}const Se=i=>({date:i.timestamp,value:i.tvl.value});function Ze(i,a,r){let e,s,t,l,n,o,m,p,U,S,f,u,v,T;Te(i,Ve,g=>r(16,T=g));let{data:D}=a,j,h=[];const E=g=>{var J,z,Q,R,W,X,Y,Z,x,ee,te,ae,se,re,le,ie,ne,fe,oe,me,ue,pe,$e,ce,_e,ge;return{name:{text:g.details.name,value:g.details.name,icon:`${I}/assets/${g.details.id}/icon.svg`},"name-path":{text:`${I}/assets/${g.details.id}`,value:`${I}/assets/${g.details.id}`},price:{text:(Q=(z=(J=g.history)==null?void 0:J.at(-1))==null?void 0:z.price)!=null&&Q.usd?O(((X=(W=(R=g.history)==null?void 0:R.at(-1))==null?void 0:W.price)==null?void 0:X.usd)??0):"UNK",value:(x=(Z=(Y=g.history)==null?void 0:Y.at(-1))==null?void 0:Z.price)==null?void 0:x.usd},supply:{text:(ae=(te=(ee=g.history)==null?void 0:ee.at(-1))==null?void 0:te.supply)!=null&&ae.total?Be(((le=(re=(se=g.history)==null?void 0:se.at(-1))==null?void 0:re.supply)==null?void 0:le.total)??0):"UNK",value:(fe=(ne=(ie=g.history)==null?void 0:ie.at(-1))==null?void 0:ne.supply)==null?void 0:fe.total},mcap:{text:(me=(oe=g.history)==null?void 0:oe.at(-1))!=null&&me.mcap?O((($e=(pe=(ue=g.history)==null?void 0:ue.at(-1))==null?void 0:pe.mcap)==null?void 0:$e.value)??0):"UNK",value:(ge=(_e=(ce=g.history)==null?void 0:ce.at(-1))==null?void 0:_e.mcap)==null?void 0:ge.value}}};return i.$$set=g=>{"data"in g&&r(0,D=g.data)},i.$$.update=()=>{i.$$.dirty&1&&r(14,{chainsDetails:e,chainsStats:s,chainsIcons:t,assetsDetails:l,graphData:n}=D,e,(r(13,s),r(0,D)),(r(12,t),r(0,D)),(r(9,l),r(0,D)),(r(15,n),r(0,D))),i.$$.dirty&65536&&r(11,o=T.params.id),i.$$.dirty&32768&&r(10,j=Me(n)),i.$$.dirty&18432&&r(1,m=e[o]),i.$$.dirty&10240&&r(3,p=s[o]),i.$$.dirty&6144&&r(8,U=t[o]),i.$$.dirty&8&&r(2,S=p.history.at(-1)),i.$$.dirty&1028&&r(7,f=Object.keys(S.mcaps).map(g=>j.getNode(g).data)),i.$$.dirty&4&&r(6,u=S.timestamp),i.$$.dirty&4&&r(4,h=[{name:"Number of Assets",value:S.count.toString(),type:"standard"},{name:"Total Value Locked (TVL)",value:S.tvl.value,type:"currency"},{name:"TVL 7d %",value:S.tvl.rate7d,type:"change"},{name:"TVL 30d %",value:S.tvl.rate30d,type:"change"}]),i.$$.dirty&2050&&r(5,v={title:`${m.name}'s assets`,description:`See all assets of ${m.name}. Learn more ...`,url:`${he}/issuers/${o}`,image:{url:`${he}/issuers/${o}/preview.jpg`,width:1200,height:630,alt:`Preview of ${m.name}'s detail view.`}})},[D,m,S,p,h,v,u,f,U,l,j,o,t,s,e,n,T,E]}class ut extends Le{constructor(a){super(),Ne(this,a,Ze,Ye,Ie,{data:0})}}export{ut as component};
