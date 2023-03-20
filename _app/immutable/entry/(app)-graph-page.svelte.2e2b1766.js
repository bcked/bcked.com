import{_ as ee}from"../chunks/preload-helper.41c905a7.js";import{S as te,i as ae,s as ie,ae as re,y as se,a as N,k as U,z as oe,c as O,l as P,m as B,h as _,n as M,A as le,b as F,H as C,L as ne,g as ue,d as he,B as me,o as de,q as A,r as E,u as Q,w as fe}from"../chunks/index.467a0851.js";import{b as j}from"../chunks/paths.ac21f65c.js";import{P as J}from"../chunks/public.550f299c.js";import{f as ce}from"../chunks/string-formatting.b7f3ddf5.js";import{S as pe}from"../chunks/index.7ee114f9.js";import{C as G,V as I,W,U as Z,b as L,c as H,A as ve,M as ge,T as be,S as Te,a as xe}from"../chunks/three.module.c56356eb.js";import{P as _e,F as we,C as Me}from"../chunks/CopyShader.7c46ad6e.js";const Se={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class R extends _e{constructor(e,n,r,s){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=s,this.resolution=e!==void 0?new I(e.x,e.y):new I(256,256),this.clearColor=new G(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new W(a,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const w=new W(a,o);w.texture.name="UnrealBloomPass.h"+v,w.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(w);const f=new W(a,o);f.texture.name="UnrealBloomPass.v"+v,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),o=Math.round(o/2)}const m=Se;this.highPassUniforms=Z.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new L({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const i=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(i[v])),this.separableBlurMaterials[v].uniforms.texSize.value=new I(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Me;this.copyUniforms=Z.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new L({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ve,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new G,this.oldClearAlpha=1,this.basic=new ge,this.fsQuad=new we(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(r,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,s),this.renderTargetsVertical[a].setSize(r,s),this.separableBlurMaterials[a].uniforms.texSize.value=new I(r,s),r=Math.round(r/2),s=Math.round(s/2)}render(e,n,r,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let m=this.renderTargetBright;for(let i=0;i<this.nMips;i++)this.fsQuad.material=this.separableBlurMaterials[i],this.separableBlurMaterials[i].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[i].uniforms.direction.value=R.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[i]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[i].uniforms.colorTexture.value=this.renderTargetsHorizontal[i].texture,this.separableBlurMaterials[i].uniforms.direction.value=R.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[i]),e.clear(),this.fsQuad.render(e),m=this.renderTargetsVertical[i];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new L({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new I(.5,.5)},direction:{value:new I(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new L({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}R.BlurDirectionX=new I(1,0);R.BlurDirectionY=new I(0,1);function $(l){var p,S,k;let e,n,r,s,a,o,m,i=((k=(S=(p=l[3])==null?void 0:p.data)==null?void 0:S.details)==null?void 0:k.name)+"",u,h,v;function w(d,b){var g,c,T,x,y,D,z,V,q,K,X,Y;if((T=(c=(g=d[3])==null?void 0:g.data)==null?void 0:c.issuer)!=null&&T.name&&((D=(y=(x=d[3])==null?void 0:x.data)==null?void 0:y.chain)!=null&&D.name))return De;if((q=(V=(z=d[3])==null?void 0:z.data)==null?void 0:V.issuer)!=null&&q.name)return Ce;if((Y=(X=(K=d[3])==null?void 0:K.data)==null?void 0:X.chain)!=null&&Y.name)return ye}let f=w(l),t=f&&f(l);return{c(){e=U("object"),s=N(),a=U("div"),o=U("h2"),m=U("a"),u=A(i),v=N(),t&&t.c(),this.h()},l(d){e=P(d,"OBJECT",{"aria-label":!0,class:!0,data:!0,type:!0}),B(e).forEach(_),s=O(d),a=P(d,"DIV",{});var b=B(a);o=P(b,"H2",{class:!0});var g=B(o);m=P(g,"A",{href:!0});var c=B(m);u=E(c,i),c.forEach(_),g.forEach(_),v=O(b),t&&t.l(b),b.forEach(_),this.h()},h(){var d,b,g,c,T;M(e,"aria-label",n="Icon of "+((g=(b=(d=l[3])==null?void 0:d.data)==null?void 0:b.details)==null?void 0:g.name)),M(e,"class","h-10 w-10 flex-shrink-1 object-contain"),M(e,"data",r=j+"/assets/"+((c=l[3])==null?void 0:c.id)+"/icon.svg"),M(e,"type","image/svg+xml"),M(m,"href",h=j+"/assets/"+((T=l[3])==null?void 0:T.id)),M(o,"class","text-lg font-medium leading-6 text-neon-pink")},m(d,b){F(d,e,b),F(d,s,b),F(d,a,b),C(a,o),C(o,m),C(m,u),C(a,v),t&&t.m(a,null)},p(d,b){var g,c,T,x,y,D,z,V;b&8&&n!==(n="Icon of "+((T=(c=(g=d[3])==null?void 0:g.data)==null?void 0:c.details)==null?void 0:T.name))&&M(e,"aria-label",n),b&8&&r!==(r=j+"/assets/"+((x=d[3])==null?void 0:x.id)+"/icon.svg")&&M(e,"data",r),b&8&&i!==(i=((z=(D=(y=d[3])==null?void 0:y.data)==null?void 0:D.details)==null?void 0:z.name)+"")&&Q(u,i),b&8&&h!==(h=j+"/assets/"+((V=d[3])==null?void 0:V.id))&&M(m,"href",h),f===(f=w(d))&&t?t.p(d,b):(t&&t.d(1),t=f&&f(d),t&&(t.c(),t.m(a,null)))},d(d){d&&_(e),d&&_(s),d&&_(a),t&&t.d()}}}function ye(l){var a,o,m;let e,n,r=((m=(o=(a=l[3])==null?void 0:a.data)==null?void 0:o.chain)==null?void 0:m.name)+"",s;return{c(){e=U("p"),n=A("Chain: "),s=A(r),this.h()},l(i){e=P(i,"P",{class:!0});var u=B(e);n=E(u,"Chain: "),s=E(u,r),u.forEach(_),this.h()},h(){M(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(i,u){F(i,e,u),C(e,n),C(e,s)},p(i,u){var h,v,w;u&8&&r!==(r=((w=(v=(h=i[3])==null?void 0:h.data)==null?void 0:v.chain)==null?void 0:w.name)+"")&&Q(s,r)},d(i){i&&_(e)}}}function Ce(l){var a,o,m;let e,n,r=((m=(o=(a=l[3])==null?void 0:a.data)==null?void 0:o.issuer)==null?void 0:m.name)+"",s;return{c(){e=U("p"),n=A("Issuer: "),s=A(r),this.h()},l(i){e=P(i,"P",{class:!0});var u=B(e);n=E(u,"Issuer: "),s=E(u,r),u.forEach(_),this.h()},h(){M(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(i,u){F(i,e,u),C(e,n),C(e,s)},p(i,u){var h,v,w;u&8&&r!==(r=((w=(v=(h=i[3])==null?void 0:h.data)==null?void 0:v.issuer)==null?void 0:w.name)+"")&&Q(s,r)},d(i){i&&_(e)}}}function De(l){var i,u,h,v,w,f;let e,n,r=((h=(u=(i=l[3])==null?void 0:i.data)==null?void 0:u.issuer)==null?void 0:h.name)+"",s,a,o=((f=(w=(v=l[3])==null?void 0:v.data)==null?void 0:w.chain)==null?void 0:f.name)+"",m;return{c(){e=U("p"),n=A("Issuer: "),s=A(r),a=A(" | Chain: "),m=A(o),this.h()},l(t){e=P(t,"P",{class:!0});var p=B(e);n=E(p,"Issuer: "),s=E(p,r),a=E(p," | Chain: "),m=E(p,o),p.forEach(_),this.h()},h(){M(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(t,p){F(t,e,p),C(e,n),C(e,s),C(e,a),C(e,m)},p(t,p){var S,k,d,b,g,c;p&8&&r!==(r=((d=(k=(S=t[3])==null?void 0:S.data)==null?void 0:k.issuer)==null?void 0:d.name)+"")&&Q(s,r),p&8&&o!==(o=((c=(g=(b=t[3])==null?void 0:b.data)==null?void 0:g.chain)==null?void 0:c.name)+"")&&Q(m,o)},d(t){t&&_(e)}}}function Ue(l){let e,n,r,s,a,o,m,i,u,h,v,w;re(l[8]),e=new pe({props:{title:l[4].title,description:l[4].description,openGraph:{title:l[4].title,description:l[4].description,url:l[4].url,type:"website",images:[l[4].image]},twitter:{site:"@bcked_com",title:l[4].title,description:l[4].description,image:l[4].image.url,imageAlt:l[4].image.alt}}});let f=l[3]&&$(l);return{c(){se(e.$$.fragment),n=N(),r=U("div"),s=U("div"),a=U("div"),o=U("div"),f&&f.c(),i=N(),u=U("div"),this.h()},l(t){oe(e.$$.fragment,t),n=O(t),r=P(t,"DIV",{class:!0});var p=B(r);s=P(p,"DIV",{class:!0});var S=B(s);a=P(S,"DIV",{class:!0});var k=B(a);o=P(k,"DIV",{class:!0});var d=B(o);f&&f.l(d),d.forEach(_),k.forEach(_),S.forEach(_),p.forEach(_),i=O(t),u=P(t,"DIV",{id:!0}),B(u).forEach(_),this.h()},h(){M(o,"class","flex items-center justify-start space-x-4"),M(a,"class","px-4 py-2 sm:px-6 transition-all motion-reduce:transition-none duration-1000"),M(s,"class",m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(l[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"),M(r,"class","flex fixed w-full z-10 px-2 sm:px-4 items-start justify-end transition-all motion-reduce:transition-none duration-1000"),M(u,"id","3d-graph")},m(t,p){le(e,t,p),F(t,n,p),F(t,r,p),C(r,s),C(s,a),C(a,o),f&&f.m(o,null),F(t,i,p),F(t,u,p),l[9](u),h=!0,v||(w=ne(window,"resize",l[8]),v=!0)},p(t,[p]){const S={};p&16&&(S.title=t[4].title),p&16&&(S.description=t[4].description),p&16&&(S.openGraph={title:t[4].title,description:t[4].description,url:t[4].url,type:"website",images:[t[4].image]}),p&16&&(S.twitter={site:"@bcked_com",title:t[4].title,description:t[4].description,image:t[4].image.url,imageAlt:t[4].image.alt}),e.$set(S),t[3]?f?f.p(t,p):(f=$(t),f.c(),f.m(o,null)):f&&(f.d(1),f=null),(!h||p&8&&m!==(m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(t[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"))&&M(s,"class",m)},i(t){h||(ue(e.$$.fragment,t),h=!0)},o(t){he(e.$$.fragment,t),h=!1},d(t){me(e,t),t&&_(n),t&&_(r),f&&f.d(),t&&_(i),t&&_(u),l[9](null),v=!1,w()}}}function Pe(l,e,n){let r,s,a,{data:o}=e,m,i=0,u=0,h,v;de(async()=>{const{createForceNGraph:t}=await ee(()=>import("../chunks/force-ngraph-3d.b54d0bd6.js"),["../chunks/force-ngraph-3d.b54d0bd6.js","../chunks/three.module.c56356eb.js","../chunks/index.481b1549.js","../chunks/index.d06fb743.js","../chunks/CopyShader.7c46ad6e.js"],import.meta.url);n(6,h=t(m).enableNodeDrag(!1).nodeLabel(g=>{var z,V;const T=g.data,x=T.details.name,y=(z=T.issuer)==null?void 0:z.name,D=(V=T.chain)==null?void 0:V.name;return x&&y&&D?`${x} - ${y} (${D})`:x&&y?`${x} - ${y}`:x&&D?`${x} (${D})`:x}).nodeThreeObject(g=>{var V;const T=g.data,x=(V=T==null?void 0:T.icon)==null?void 0:V.href,y=new be().load(x),D=new Te({map:y}),z=new xe(D);return z.scale.set(18,18,18),z}).onNodeClick(g=>{const c=g;n(3,v=c);const T=150,x=1+T/Math.hypot(c.x,c.y,c.z);let y={x:0,y:0,z:T};c.x&&c.y&&c.z&&(y={x:c.x*x,y:c.y*x,z:c.z*x}),h.cameraPosition(y,c,1e3)}).linkLabel(g=>{var x;const T=(x=g.data.history.at(-1))==null?void 0:x.value;return T?ce(T):""}).linkDirectionalArrowLength(9).linkDirectionalArrowRelPos(.5).linkCurvature(g=>{const c=g;return c.fromId==c.toId?.75:.25}).graphData(r));const p=new I(i,u),S=.3,k=4,d=0,b=new R(p,S,k,d);h.postProcessingComposer().addPass(b)});function w(){n(0,i=window.innerWidth),n(1,u=window.innerHeight)}function f(t){fe[t?"unshift":"push"](()=>{m=t,n(2,m)})}return l.$$set=t=>{"data"in t&&n(5,o=t.data)},l.$$.update=()=>{l.$$.dirty&32&&n(7,{graphData:r,globalStats:s}=o,s),l.$$.dirty&65&&n(6,h=h==null?void 0:h.width(i)),l.$$.dirty&66&&n(6,h=h==null?void 0:h.height(u)),l.$$.dirty&128&&n(4,a={title:"3D Graph Visualizing Asset Backing",description:`Take an interactive look at the ${s.count} assets in the 3D graph.`,url:`${J}`,image:{url:`${J}/previews/landing.jpg`,width:1200,height:630,alt:"Preview of bcked's landing page."}})},[i,u,m,v,a,o,h,s,w,f]}class Re extends te{constructor(e){super(),ae(this,e,Pe,Ue,ie,{data:5})}}export{Re as default};
