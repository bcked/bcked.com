import{S as P,i as S,s as T,y as v,a as B,k as D,z as b,c as L,l as V,m as j,h as c,n as C,A as k,b as w,g as $,d as A,B as y}from"../chunks/index.6847575b.js";import{b as g}from"../chunks/paths.50719a96.js";import{T as O}from"../chunks/table.393ff533.js";import{P as I}from"../chunks/public.d1f81b30.js";import{c as G,f as N}from"../chunks/string-formatting.ca7775a2.js";import{n as R}from"../chunks/index.4679d6cd.js";import{S as q}from"../chunks/index.b15051cd.js";import{l as z}from"../chunks/lodash.default.76769d5d.js";function E(t){let r,i,o,l,n;return r=new q({props:{title:t[2].title,description:t[2].description,openGraph:{title:t[2].title,description:t[2].description,url:t[2].url,type:"website",images:[t[2].image]},twitter:{site:"@bcked_com",title:t[2].title,description:t[2].description,image:t[2].image.url,imageAlt:t[2].image.alt}}}),l=new O({props:{data:t[0],columns:[{id:"rank",title:"#",class:""},{id:"name",title:"Name",class:"font-medium",link:!0},{id:"numAssets",title:"Assets",class:"hidden sm:table-cell"},{id:"tvl",title:"Total Value Locked (TVL)",class:""}],rows:t[1],sort:[{by:"tvl"}],class:""}}),{c(){v(r.$$.fragment),i=B(),o=D("div"),v(l.$$.fragment),this.h()},l(e){b(r.$$.fragment,e),i=L(e),o=V(e,"DIV",{class:!0});var a=j(o);b(l.$$.fragment,a),a.forEach(c),this.h()},h(){C(o,"class","w-full pt-8")},m(e,a){k(r,e,a),w(e,i,a),w(e,o,a),k(l,o,null),n=!0},p(e,[a]){const m={};a&4&&(m.title=e[2].title),a&4&&(m.description=e[2].description),a&4&&(m.openGraph={title:e[2].title,description:e[2].description,url:e[2].url,type:"website",images:[e[2].image]}),a&4&&(m.twitter={site:"@bcked_com",title:e[2].title,description:e[2].description,image:e[2].image.url,imageAlt:e[2].image.alt}),r.$set(m);const d={};a&1&&(d.data=e[0]),a&2&&(d.rows=e[1]),l.$set(d)},i(e){n||($(r.$$.fragment,e),$(l.$$.fragment,e),n=!0)},o(e){A(r.$$.fragment,e),A(l.$$.fragment,e),n=!1},d(e){y(r,e),e&&c(i),e&&c(o),y(l)}}}function M(t,r,i){let o,l,n,e,a,m,d,{data:f}=r;return t.$$set=s=>{"data"in s&&i(0,f=s.data)},t.$$.update=()=>{t.$$.dirty&1&&i(4,{assetsPrice:o,assetsBacking:l,graphData:n,issuersDetails:e,issuersIcons:a}=f,n,(i(5,e),i(0,f)),(i(3,a),i(0,f))),t.$$.dirty&16&&R(n),t.$$.dirty&56&&i(1,m=Object.values(e).map(s=>{const u=n.nodes.filter(p=>p.data.details.issuer==s.id).filter(p=>!p.data.details.tags.includes("lp"));return{...s,numAssets:u.length,tvl:z.sumBy(u,p=>{var h,_;return((_=(h=p.data.history)==null?void 0:h.at(-1))==null?void 0:_.mcap)??0})}}).filter(s=>s.tvl).sort((s,u)=>G(s.tvl,u.tvl)).map((s,u)=>{var p;return{rank:{text:u+1,value:u},name:{text:s.name,value:s.name,icon:`${g}/${(p=a[s.id])==null?void 0:p.href}`},"name-path":{text:`${g}/issuers/${s.id}`,value:`${g}/issuers/${s.id}`},numAssets:{text:s.numAssets,value:s.numAssets},tvl:{text:N(s.tvl),value:s.tvl}}})),t.$$.dirty&2&&i(2,d={title:"bcked: Issuers Ranking",description:`Ranking of ${m.length} issuers based on total value locked (TVL). See all ...`,url:`${I}/issuers`,image:{url:`${I}/issuers/preview.jpg`,width:1200,height:630,alt:"Preview of issuers ranking."}})},[f,m,d,a,n,e]}class Y extends P{constructor(r){super(),S(this,r,M,E,T,{data:0})}}export{Y as default};
