import{_ as te}from"../chunks/preload-helper.41c905a7.js";import{S as ae,i as ie,s as re,ae as se,y as oe,a as O,k as y,z as le,c as W,l as C,m as D,h as _,n as w,A as ne,b as I,H as M,L as ue,g as he,d as me,B as de,o as fe,q as z,r as V,u as L,w as ce}from"../chunks/index.467a0851.js";import{b as j}from"../chunks/paths.58b0a859.js";import{P as $}from"../chunks/public.550f299c.js";import{f as pe}from"../chunks/string-formatting.b7f3ddf5.js";import{C as q,a as B,W as G,U as Z,S as N,V as R,A as ve,M as ge,l as be}from"../chunks/three.a415fcc1.js";import{S as Te}from"../chunks/index.7ee114f9.js";import{P as xe,F as _e,C as we}from"../chunks/CopyShader.c686ab4e.js";const Me={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class H extends xe{constructor(e,s,a,o){super(),this.strength=s!==void 0?s:1,this.radius=a,this.threshold=o,this.resolution=e!==void 0?new B(e.x,e.y):new B(256,256),this.clearColor=new q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);this.renderTargetBright=new G(r,m),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const f=new G(r,m);f.texture.name="UnrealBloomPass.h"+v,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const i=new G(r,m);i.texture.name="UnrealBloomPass.v"+v,i.texture.generateMipmaps=!1,this.renderTargetsVertical.push(i),r=Math.round(r/2),m=Math.round(m/2)}const d=Me;this.highPassUniforms=Z.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new N({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const t=[3,5,7,9,11];r=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(t[v])),this.separableBlurMaterials[v].uniforms.texSize.value=new B(r,m),r=Math.round(r/2),m=Math.round(m/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=we;this.copyUniforms=Z.clone(c.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new N({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:ve,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new q,this.oldClearAlpha=1,this.basic=new ge,this.fsQuad=new _e(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,s){let a=Math.round(e/2),o=Math.round(s/2);this.renderTargetBright.setSize(a,o);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(a,o),this.renderTargetsVertical[r].setSize(a,o),this.separableBlurMaterials[r].uniforms.texSize.value=new B(a,o),a=Math.round(a/2),o=Math.round(o/2)}render(e,s,a,o,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const m=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=a.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let d=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this.fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[t].uniforms.direction.value=H.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=H.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this.fsQuad.render(e),d=this.renderTargetsVertical[t];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=m}getSeperableBlurMaterial(e){return new N({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new N({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}H.BlurDirectionX=new B(1,0);H.BlurDirectionY=new B(0,1);function ee(l){var U,A,E;let e,s,a,o,r,m,d,t,h=((E=(A=(U=l[3])==null?void 0:U.data)==null?void 0:A.details)==null?void 0:E.name)+"",c,v,f;function i(T,g){var p,x,b,S,P,k,F,Q,K,X,Y,J;if((b=(x=(p=T[3])==null?void 0:p.data)==null?void 0:x.issuer)!=null&&b.name&&((k=(P=(S=T[3])==null?void 0:S.data)==null?void 0:P.chain)!=null&&k.name))return Ce;if((K=(Q=(F=T[3])==null?void 0:F.data)==null?void 0:Q.issuer)!=null&&K.name)return ye;if((J=(Y=(X=T[3])==null?void 0:X.data)==null?void 0:Y.chain)!=null&&J.name)return Se}let n=i(l),u=n&&n(l);return{c(){e=y("a"),s=y("div"),a=y("object"),m=O(),d=y("div"),t=y("h2"),c=z(h),v=O(),u&&u.c(),this.h()},l(T){e=C(T,"A",{href:!0});var g=D(e);s=C(g,"DIV",{class:!0});var p=D(s);a=C(p,"OBJECT",{"aria-label":!0,class:!0,data:!0,type:!0}),D(a).forEach(_),m=W(p),d=C(p,"DIV",{});var x=D(d);t=C(x,"H2",{class:!0});var b=D(t);c=V(b,h),b.forEach(_),v=W(x),u&&u.l(x),x.forEach(_),p.forEach(_),g.forEach(_),this.h()},h(){var T,g,p,x,b;w(a,"aria-label",o="Icon of "+((p=(g=(T=l[3])==null?void 0:T.data)==null?void 0:g.details)==null?void 0:p.name)),w(a,"class","h-10 w-10 flex-shrink-1 object-contain pointer-events-none"),w(a,"data",r=j+"/assets/"+((x=l[3])==null?void 0:x.id)+"/icon.svg"),w(a,"type","image/svg+xml"),w(t,"class","text-lg font-medium leading-6 text-neon-pink"),w(s,"class","flex items-center justify-start space-x-4"),w(e,"href",f=j+"/assets/"+((b=l[3])==null?void 0:b.id))},m(T,g){I(T,e,g),M(e,s),M(s,a),M(s,m),M(s,d),M(d,t),M(t,c),M(d,v),u&&u.m(d,null)},p(T,g){var p,x,b,S,P,k,F,Q;g&8&&o!==(o="Icon of "+((b=(x=(p=T[3])==null?void 0:p.data)==null?void 0:x.details)==null?void 0:b.name))&&w(a,"aria-label",o),g&8&&r!==(r=j+"/assets/"+((S=T[3])==null?void 0:S.id)+"/icon.svg")&&w(a,"data",r),g&8&&h!==(h=((F=(k=(P=T[3])==null?void 0:P.data)==null?void 0:k.details)==null?void 0:F.name)+"")&&L(c,h),n===(n=i(T))&&u?u.p(T,g):(u&&u.d(1),u=n&&n(T),u&&(u.c(),u.m(d,null))),g&8&&f!==(f=j+"/assets/"+((Q=T[3])==null?void 0:Q.id))&&w(e,"href",f)},d(T){T&&_(e),u&&u.d()}}}function Se(l){var r,m,d;let e,s,a=((d=(m=(r=l[3])==null?void 0:r.data)==null?void 0:m.chain)==null?void 0:d.name)+"",o;return{c(){e=y("p"),s=z("Chain: "),o=z(a),this.h()},l(t){e=C(t,"P",{class:!0});var h=D(e);s=V(h,"Chain: "),o=V(h,a),h.forEach(_),this.h()},h(){w(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(t,h){I(t,e,h),M(e,s),M(e,o)},p(t,h){var c,v,f;h&8&&a!==(a=((f=(v=(c=t[3])==null?void 0:c.data)==null?void 0:v.chain)==null?void 0:f.name)+"")&&L(o,a)},d(t){t&&_(e)}}}function ye(l){var r,m,d;let e,s,a=((d=(m=(r=l[3])==null?void 0:r.data)==null?void 0:m.issuer)==null?void 0:d.name)+"",o;return{c(){e=y("p"),s=z("Issuer: "),o=z(a),this.h()},l(t){e=C(t,"P",{class:!0});var h=D(e);s=V(h,"Issuer: "),o=V(h,a),h.forEach(_),this.h()},h(){w(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(t,h){I(t,e,h),M(e,s),M(e,o)},p(t,h){var c,v,f;h&8&&a!==(a=((f=(v=(c=t[3])==null?void 0:c.data)==null?void 0:v.issuer)==null?void 0:f.name)+"")&&L(o,a)},d(t){t&&_(e)}}}function Ce(l){var t,h,c,v,f,i;let e,s,a=((c=(h=(t=l[3])==null?void 0:t.data)==null?void 0:h.issuer)==null?void 0:c.name)+"",o,r,m=((i=(f=(v=l[3])==null?void 0:v.data)==null?void 0:f.chain)==null?void 0:i.name)+"",d;return{c(){e=y("p"),s=z("Issuer: "),o=z(a),r=z(" | Chain: "),d=z(m),this.h()},l(n){e=C(n,"P",{class:!0});var u=D(e);s=V(u,"Issuer: "),o=V(u,a),r=V(u," | Chain: "),d=V(u,m),u.forEach(_),this.h()},h(){w(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(n,u){I(n,e,u),M(e,s),M(e,o),M(e,r),M(e,d)},p(n,u){var U,A,E,T,g,p;u&8&&a!==(a=((E=(A=(U=n[3])==null?void 0:U.data)==null?void 0:A.issuer)==null?void 0:E.name)+"")&&L(o,a),u&8&&m!==(m=((p=(g=(T=n[3])==null?void 0:T.data)==null?void 0:g.chain)==null?void 0:p.name)+"")&&L(d,m)},d(n){n&&_(e)}}}function De(l){let e,s,a,o,r,m,d,t,h,c,v;se(l[8]),e=new Te({props:{title:l[4].title,description:l[4].description,openGraph:{title:l[4].title,description:l[4].description,url:l[4].url,type:"website",images:[l[4].image]},twitter:{site:"@bcked_com",title:l[4].title,description:l[4].description,image:l[4].image.url,imageAlt:l[4].image.alt}}});let f=l[3]&&ee(l);return{c(){oe(e.$$.fragment),s=O(),a=y("div"),o=y("div"),r=y("div"),f&&f.c(),d=O(),t=y("div"),this.h()},l(i){le(e.$$.fragment,i),s=W(i),a=C(i,"DIV",{class:!0});var n=D(a);o=C(n,"DIV",{class:!0});var u=D(o);r=C(u,"DIV",{class:!0});var U=D(r);f&&f.l(U),U.forEach(_),u.forEach(_),n.forEach(_),d=W(i),t=C(i,"DIV",{id:!0,class:!0}),D(t).forEach(_),this.h()},h(){w(r,"class","px-4 py-2 sm:px-6 transition-all motion-reduce:transition-none duration-1000"),w(o,"class",m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(l[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"),w(a,"class","flex fixed w-full z-10 px-2 sm:px-4 items-start justify-end transition-all motion-reduce:transition-none duration-1000"),w(t,"id","3d-graph"),w(t,"class","cursor-grab active:cursor-grabbing")},m(i,n){ne(e,i,n),I(i,s,n),I(i,a,n),M(a,o),M(o,r),f&&f.m(r,null),I(i,d,n),I(i,t,n),l[9](t),h=!0,c||(v=ue(window,"resize",l[8]),c=!0)},p(i,[n]){const u={};n&16&&(u.title=i[4].title),n&16&&(u.description=i[4].description),n&16&&(u.openGraph={title:i[4].title,description:i[4].description,url:i[4].url,type:"website",images:[i[4].image]}),n&16&&(u.twitter={site:"@bcked_com",title:i[4].title,description:i[4].description,image:i[4].image.url,imageAlt:i[4].image.alt}),e.$set(u),i[3]?f?f.p(i,n):(f=ee(i),f.c(),f.m(r,null)):f&&(f.d(1),f=null),(!h||n&8&&m!==(m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(i[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"))&&w(o,"class",m)},i(i){h||(he(e.$$.fragment,i),h=!0)},o(i){me(e.$$.fragment,i),h=!1},d(i){de(e,i),i&&_(s),i&&_(a),f&&f.d(),i&&_(d),i&&_(t),l[9](null),c=!1,v()}}}function Ue(l,e,s){let a,o,r,{data:m}=e,d,t=0,h=0,c,v;fe(async()=>{const{createForceNGraph:n}=await te(()=>import("../chunks/force-ngraph-3d.31f4e55f.js"),["../chunks/force-ngraph-3d.31f4e55f.js","../chunks/three.a415fcc1.js","../chunks/index.481b1549.js","../chunks/index.d06fb743.js","../chunks/CopyShader.c686ab4e.js"],import.meta.url);s(6,c=n(d).enableNodeDrag(!1).nodeLabel(g=>{var k,F;const x=g.data,b=x.details.name,S=(k=x.issuer)==null?void 0:k.name,P=(F=x.chain)==null?void 0:F.name;return b&&S&&P?`${b} - ${S} (${P})`:b&&S?`${b} - ${S}`:b&&P?`${b} (${P})`:b}).nodeThreeObject(g=>{const x=g.data;return be(`${j}/assets/${x.details.id}/icon.svg`,new R(18,18))}).onNodeClick(g=>{const p=g;s(3,v=p);const x=150,b=1+x/Math.hypot(p.x,p.y,p.z);let S={x:0,y:0,z:x};p.x&&p.y&&p.z&&(S={x:p.x*b,y:p.y*b,z:p.z*b}),c.cameraPosition(S,p,1e3)}).linkLabel(g=>{var b;const x=(b=g.data.history.at(-1))==null?void 0:b.value;return x?pe(x):""}).linkDirectionalArrowLength(9).linkDirectionalArrowRelPos(.5).linkCurvature(g=>{const p=g;return p.fromId==p.toId?.75:.25}).graphData(a));const u=new B(t,h),U=.3,A=4,E=0,T=new H(u,U,A,E);c.postProcessingComposer().addPass(T)});function f(){s(0,t=window.innerWidth),s(1,h=window.innerHeight)}function i(n){ce[n?"unshift":"push"](()=>{d=n,s(2,d)})}return l.$$set=n=>{"data"in n&&s(5,m=n.data)},l.$$.update=()=>{l.$$.dirty&32&&s(7,{graphData:a,globalStats:o}=m,o),l.$$.dirty&65&&s(6,c=c==null?void 0:c.width(t)),l.$$.dirty&66&&s(6,c=c==null?void 0:c.height(h)),l.$$.dirty&128&&s(4,r={title:"3D Graph Visualizing Asset Backing",description:`Take an interactive look at the ${o.count} assets in the 3D graph.`,url:`${$}`,image:{url:`${$}/previews/landing.jpg`,width:1200,height:630,alt:"Preview of bcked's landing page."}})},[t,h,d,v,r,m,c,o,f,i]}class Ee extends ae{constructor(e){super(),ie(this,e,Ue,De,re,{data:5})}}export{Ee as default};
