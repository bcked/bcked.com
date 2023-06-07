import{_ as ae}from"../chunks/preload-helper.41c905a7.js";import{S as ie,i as re,s as se,ag as oe,y as le,a as W,k as D,z as ne,c as G,l as U,m as B,h as b,n as d,A as ue,b as k,H as x,M as he,g as me,d as fe,B as de,o as ce,q as z,r as V,u as Q,w as ve}from"../chunks/index.e8ba378b.js";import{b as P}from"../chunks/paths.5cf5983f.js";import{P as $}from"../chunks/public.d1f81b30.js";import{f as pe}from"../chunks/string-formatting.ca7775a2.js";import{C as X,a as A,W as q,U as ee,S as L,V as E,A as ge,M as be,l as _e}from"../chunks/three.cbb020f2.js";import{S as Te}from"../chunks/index.36ed8b92.js";import{P as we,F as xe,C as Me}from"../chunks/CopyShader.91adf915.js";const Se={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new X(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class R extends we{constructor(e,l,i,u){super(),this.strength=l!==void 0?l:1,this.radius=i,this.threshold=u,this.resolution=e!==void 0?new A(e.x,e.y):new A(256,256),this.clearColor=new X(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new q(r,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const a=new q(r,s);a.texture.name="UnrealBloomPass.h"+v,a.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(a);const t=new q(r,s);t.texture.name="UnrealBloomPass.v"+v,t.texture.generateMipmaps=!1,this.renderTargetsVertical.push(t),r=Math.round(r/2),s=Math.round(s/2)}const o=Se;this.highPassUniforms=ee.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=u,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new L({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.texSize.value=new A(r,s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=l,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const _=Me;this.copyUniforms=ee.clone(_.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new L({uniforms:this.copyUniforms,vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,blending:ge,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new X,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new xe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,l){let i=Math.round(e/2),u=Math.round(l/2);this.renderTargetBright.setSize(i,u);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,u),this.renderTargetsVertical[r].setSize(i,u),this.separableBlurMaterials[r].uniforms.texSize.value=new A(i,u),i=Math.round(i/2),u=Math.round(u/2)}render(e,l,i,u,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[h].uniforms.direction.value=R.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=R.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new L({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new A(.5,.5)},direction:{value:new A(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}R.BlurDirectionX=new A(1,0);R.BlurDirectionY=new A(0,1);function K(n){var u,r,s,o;const e=n.slice(),l=e[6][((r=(u=e[3])==null?void 0:u.data)==null?void 0:r.issuer)??""];e[13]=l;const i=e[5][((o=(s=e[3])==null?void 0:s.data)==null?void 0:o.chain)??""];return e[14]=i,e}function te(n){var j,N,O;let e,l,i,u,r,s,o,h,p,_,v=((O=(N=(j=n[3])==null?void 0:j.data)==null?void 0:N.details)==null?void 0:O.name)+"",a,t,g,M;function y(f,m){var T,c,w,C;if((T=f[13])!=null&&T.name&&((c=f[14])!=null&&c.name))return De;if((w=f[13])!=null&&w.name)return Ce;if((C=f[14])!=null&&C.name)return ye}let F=y(n),S=F&&F(n);return{c(){e=D("div"),l=D("a"),i=D("object"),o=W(),h=D("div"),p=D("a"),_=D("h2"),a=z(v),g=W(),M=D("p"),S&&S.c(),this.h()},l(f){e=U(f,"DIV",{class:!0});var m=B(e);l=U(m,"A",{href:!0});var T=B(l);i=U(T,"OBJECT",{"aria-label":!0,class:!0,data:!0,type:!0}),B(i).forEach(b),T.forEach(b),o=G(m),h=U(m,"DIV",{});var c=B(h);p=U(c,"A",{href:!0});var w=B(p);_=U(w,"H2",{class:!0});var C=B(_);a=V(C,v),C.forEach(b),w.forEach(b),g=G(c),M=U(c,"P",{class:!0});var I=B(M);S&&S.l(I),I.forEach(b),c.forEach(b),m.forEach(b),this.h()},h(){var f,m,T,c,w,C;d(i,"aria-label",u="Icon of "+((T=(m=(f=n[3])==null?void 0:f.data)==null?void 0:m.details)==null?void 0:T.name)),d(i,"class","h-10 w-10 flex-shrink-1 object-contain pointer-events-none"),d(i,"data",r=P+"/assets/"+((c=n[3])==null?void 0:c.id)+"/icon.svg"),d(i,"type","image/svg+xml"),d(l,"href",s=P+"/assets/"+((w=n[3])==null?void 0:w.id)),d(_,"class","text-lg font-medium leading-6 text-neon-pink"),d(p,"href",t=P+"/assets/"+((C=n[3])==null?void 0:C.id)),d(M,"class","mt-1 max-w-2xl text-sm text-gray-500"),d(e,"class","flex items-center justify-start space-x-4")},m(f,m){k(f,e,m),x(e,l),x(l,i),x(e,o),x(e,h),x(h,p),x(p,_),x(_,a),x(h,g),x(h,M),S&&S.m(M,null)},p(f,m){var T,c,w,C,I,H,Y,J,Z;m&8&&u!==(u="Icon of "+((w=(c=(T=f[3])==null?void 0:T.data)==null?void 0:c.details)==null?void 0:w.name))&&d(i,"aria-label",u),m&8&&r!==(r=P+"/assets/"+((C=f[3])==null?void 0:C.id)+"/icon.svg")&&d(i,"data",r),m&8&&s!==(s=P+"/assets/"+((I=f[3])==null?void 0:I.id))&&d(l,"href",s),m&8&&v!==(v=((J=(Y=(H=f[3])==null?void 0:H.data)==null?void 0:Y.details)==null?void 0:J.name)+"")&&Q(a,v),m&8&&t!==(t=P+"/assets/"+((Z=f[3])==null?void 0:Z.id))&&d(p,"href",t),F===(F=y(f))&&S?S.p(f,m):(S&&S.d(1),S=F&&F(f),S&&(S.c(),S.m(M,null)))},d(f){f&&b(e),S&&S.d()}}}function ye(n){let e,l,i=n[14].name+"",u,r;return{c(){e=D("a"),l=z("Chain: "),u=z(i),this.h()},l(s){e=U(s,"A",{href:!0,class:!0});var o=B(e);l=V(o,"Chain: "),u=V(o,i),o.forEach(b),this.h()},h(){d(e,"href",r=P+"/chains/"+n[14].id),d(e,"class","hover:text-gray-900")},m(s,o){k(s,e,o),x(e,l),x(e,u)},p(s,o){o&40&&i!==(i=s[14].name+"")&&Q(u,i),o&40&&r!==(r=P+"/chains/"+s[14].id)&&d(e,"href",r)},d(s){s&&b(e)}}}function Ce(n){let e,l,i=n[13].name+"",u,r;return{c(){e=D("a"),l=z("Issuer: "),u=z(i),this.h()},l(s){e=U(s,"A",{href:!0,class:!0});var o=B(e);l=V(o,"Issuer: "),u=V(o,i),o.forEach(b),this.h()},h(){d(e,"href",r=P+"/issuers/"+n[13].id),d(e,"class","hover:text-gray-900")},m(s,o){k(s,e,o),x(e,l),x(e,u)},p(s,o){o&72&&i!==(i=s[13].name+"")&&Q(u,i),o&72&&r!==(r=P+"/issuers/"+s[13].id)&&d(e,"href",r)},d(s){s&&b(e)}}}function De(n){let e,l,i=n[13].name+"",u,r,s,o,h,p=n[14].name+"",_,v;return{c(){e=D("a"),l=z("Issuer: "),u=z(i),s=z(`
								|
								`),o=D("a"),h=z("Chain: "),_=z(p),this.h()},l(a){e=U(a,"A",{href:!0,class:!0});var t=B(e);l=V(t,"Issuer: "),u=V(t,i),t.forEach(b),s=V(a,`
								|
								`),o=U(a,"A",{href:!0,class:!0});var g=B(o);h=V(g,"Chain: "),_=V(g,p),g.forEach(b),this.h()},h(){d(e,"href",r=P+"/issuers/"+n[13].id),d(e,"class","hover:text-gray-900"),d(o,"href",v=P+"/chains/"+n[14].id),d(o,"class","hover:text-gray-900")},m(a,t){k(a,e,t),x(e,l),x(e,u),k(a,s,t),k(a,o,t),x(o,h),x(o,_)},p(a,t){t&72&&i!==(i=a[13].name+"")&&Q(u,i),t&72&&r!==(r=P+"/issuers/"+a[13].id)&&d(e,"href",r),t&40&&p!==(p=a[14].name+"")&&Q(_,p),t&40&&v!==(v=P+"/chains/"+a[14].id)&&d(o,"href",v)},d(a){a&&b(e),a&&b(s),a&&b(o)}}}function Ue(n){let e,l,i,u,r,s,o,h,p,_,v;oe(n[10]),e=new Te({props:{title:n[4].title,description:n[4].description,openGraph:{title:n[4].title,description:n[4].description,url:n[4].url,type:"website",images:[n[4].image]},twitter:{site:"@bcked_com",title:n[4].title,description:n[4].description,image:n[4].image.url,imageAlt:n[4].image.alt}}});let a=n[3]&&te(K(n));return{c(){le(e.$$.fragment),l=W(),i=D("div"),u=D("div"),r=D("div"),a&&a.c(),o=W(),h=D("div"),this.h()},l(t){ne(e.$$.fragment,t),l=G(t),i=U(t,"DIV",{class:!0});var g=B(i);u=U(g,"DIV",{class:!0});var M=B(u);r=U(M,"DIV",{class:!0});var y=B(r);a&&a.l(y),y.forEach(b),M.forEach(b),g.forEach(b),o=G(t),h=U(t,"DIV",{id:!0,class:!0}),B(h).forEach(b),this.h()},h(){d(r,"class","px-4 py-2 sm:px-6 transition-all motion-reduce:transition-none duration-1000"),d(u,"class",s="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(n[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"),d(i,"class","flex fixed w-full z-10 px-2 sm:px-4 items-start justify-end transition-all motion-reduce:transition-none duration-1000"),d(h,"id","3d-graph"),d(h,"class","cursor-grab active:cursor-grabbing")},m(t,g){ue(e,t,g),k(t,l,g),k(t,i,g),x(i,u),x(u,r),a&&a.m(r,null),k(t,o,g),k(t,h,g),n[11](h),p=!0,_||(v=he(window,"resize",n[10]),_=!0)},p(t,[g]){const M={};g&16&&(M.title=t[4].title),g&16&&(M.description=t[4].description),g&16&&(M.openGraph={title:t[4].title,description:t[4].description,url:t[4].url,type:"website",images:[t[4].image]}),g&16&&(M.twitter={site:"@bcked_com",title:t[4].title,description:t[4].description,image:t[4].image.url,imageAlt:t[4].image.alt}),e.$set(M),t[3]?a?a.p(K(t),g):(a=te(K(t)),a.c(),a.m(r,null)):a&&(a.d(1),a=null),(!p||g&8&&s!==(s="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(t[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"))&&d(u,"class",s)},i(t){p||(me(e.$$.fragment,t),p=!0)},o(t){fe(e.$$.fragment,t),p=!1},d(t){de(e,t),t&&b(l),t&&b(i),a&&a.d(),t&&b(o),t&&b(h),n[11](null),_=!1,v()}}}function Be(n,e,l){let i,u,r,s,o,{data:h}=e,p,_=0,v=0,a,t;ce(async()=>{const{createForceNGraph:y}=await ae(()=>import("../chunks/force-ngraph-3d.55543d2f.js"),["../chunks/force-ngraph-3d.55543d2f.js","../chunks/three.cbb020f2.js","../chunks/index.2c9455fa.js","../chunks/index.d06fb743.js","../chunks/debounce.2ccf7e51.js","../chunks/toNumber.c3f3ab99.js","../chunks/init.77b53fdd.js","../chunks/CopyShader.91adf915.js"],import.meta.url);l(8,a=y(p).enableNodeDrag(!1).nodeLabel(f=>{var I,H;const T=f.data,c=T.details.name,w=(I=r[T.issuer??""])==null?void 0:I.name,C=(H=s[T.chain??""])==null?void 0:H.name;return c&&w&&C?`${c} - ${w} (${C})`:c&&w?`${c} - ${w}`:c&&C?`${c} (${C})`:c}).nodeThreeObject(f=>{const T=f.data;return _e(`${P}/assets/${T.details.id}/icon.svg`,new E(18,18))}).onNodeClick(f=>{const m=f;l(3,t=m);const T=150,c=1+T/Math.hypot(m.x,m.y,m.z);let w={x:0,y:0,z:T};m.x&&m.y&&m.z&&(w={x:m.x*c,y:m.y*c,z:m.z*c}),a.cameraPosition(w,m,1e3)}).linkLabel(f=>{var c,w;const T=(w=(c=f.data.history.at(-1))==null?void 0:c.usd)==null?void 0:w.value;return T==null?"":pe(T)}).linkDirectionalArrowLength(9).linkDirectionalArrowRelPos(.5).linkCurvature(f=>{const m=f;return m.fromId==m.toId?.75:.25}).graphData(i));const F=new A(_,v),S=.3,j=4,N=0,O=new R(F,S,j,N);a.postProcessingComposer().addPass(O)});function g(){l(0,_=window.innerWidth),l(1,v=window.innerHeight)}function M(y){ve[y?"unshift":"push"](()=>{p=y,l(2,p)})}return n.$$set=y=>{"data"in y&&l(7,h=y.data)},n.$$.update=()=>{var y;n.$$.dirty&128&&l(9,{graphData:i,globalStats:u,issuersDetails:r,chainsDetails:s}=h,u,(l(6,r),l(7,h)),(l(5,s),l(7,h))),n.$$.dirty&257&&l(8,a=a==null?void 0:a.width(_)),n.$$.dirty&258&&l(8,a=a==null?void 0:a.height(v)),n.$$.dirty&512&&l(4,o={title:"3D Graph Visualizing Asset Backing",description:`Take an interactive look at the ${(y=u.history.at(-1))==null?void 0:y.count} assets in the 3D graph.`,url:`${$}`,image:{url:`${$}/preview.jpg`,width:1200,height:630,alt:"Preview of bcked's landing page."}})},[_,v,p,t,o,s,r,h,a,u,g,M]}class Re extends ie{constructor(e){super(),re(this,e,Be,Ue,se,{data:7})}}export{Re as default};
