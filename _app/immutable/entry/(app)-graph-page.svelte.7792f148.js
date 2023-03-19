import{S as te,i as ie,s as ae,ae as re,y as se,a as O,k as U,z as oe,c as j,l as P,m as k,h as _,n as S,A as le,b as F,H as C,L as ne,g as ue,d as he,B as me,o as de,q as A,r as R,ad as Y,u as N,w as fe}from"../chunks/index.467a0851.js";import{b as J}from"../chunks/paths.db943442.js";import{P as Z}from"../chunks/public.550f299c.js";import{f as ce}from"../chunks/init.3cd90c52.js";import{C as q,P as pe,V,W as G,U as $,b as W,c as L,d as ve,A as ge,M as be,F as Te,_ as xe,T as _e,S as we,a as Me}from"../chunks/3d-force-graph.8d73228d.js";import{S as Se}from"../chunks/index.7ee114f9.js";const ye={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class H extends pe{constructor(e,n,r,s){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=s,this.resolution=e!==void 0?new V(e.x,e.y):new V(256,256),this.clearColor=new q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new G(i,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const w=new G(i,o);w.texture.name="UnrealBloomPass.h"+v,w.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(w);const f=new G(i,o);f.texture.name="UnrealBloomPass.v"+v,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),i=Math.round(i/2),o=Math.round(o/2)}const m=ye;this.highPassUniforms=$.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new W({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[v])),this.separableBlurMaterials[v].uniforms.texSize.value=new V(i,o),i=Math.round(i/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ve;this.copyUniforms=$.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new W({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ge,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new q,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new Te(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(r,s);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,s),this.renderTargetsVertical[i].setSize(r,s),this.separableBlurMaterials[i].uniforms.texSize.value=new V(r,s),r=Math.round(r/2),s=Math.round(s/2)}render(e,n,r,s,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let m=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[a].uniforms.direction.value=H.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=H.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this.fsQuad.render(e),m=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new W({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new W({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}H.BlurDirectionX=new V(1,0);H.BlurDirectionY=new V(0,1);function ee(l){var p,y,I;let e,n,r,s,i,o,m,a=((I=(y=(p=l[3])==null?void 0:p.data)==null?void 0:y.details)==null?void 0:I.name)+"",u,h,v;function w(d,T){var b,c,x,g,M,D,B,z,E,Q,K,X;if((x=(c=(b=d[3])==null?void 0:b.data)==null?void 0:c.issuer)!=null&&x.name&&((D=(M=(g=d[3])==null?void 0:g.data)==null?void 0:M.chain)!=null&&D.name))return Ue;if((E=(z=(B=d[3])==null?void 0:B.data)==null?void 0:z.issuer)!=null&&E.name)return De;if((X=(K=(Q=d[3])==null?void 0:Q.data)==null?void 0:K.chain)!=null&&X.name)return Ce}let f=w(l),t=f&&f(l);return{c(){e=U("img"),s=O(),i=U("div"),o=U("h2"),m=U("a"),u=A(a),v=O(),t&&t.c(),this.h()},l(d){e=P(d,"IMG",{class:!0,src:!0,alt:!0}),s=j(d),i=P(d,"DIV",{});var T=k(i);o=P(T,"H2",{class:!0});var b=k(o);m=P(b,"A",{href:!0});var c=k(m);u=R(c,a),c.forEach(_),b.forEach(_),v=j(T),t&&t.l(T),T.forEach(_),this.h()},h(){var d,T,b,c,x,g,M;S(e,"class","h-10 w-10 flex-shrink-1"),Y(e.src,n=(b=(T=(d=l[3])==null?void 0:d.data)==null?void 0:T.icon)==null?void 0:b.href)||S(e,"src",n),S(e,"alt",r="Icon of "+((g=(x=(c=l[3])==null?void 0:c.data)==null?void 0:x.details)==null?void 0:g.name)),S(m,"href",h=J+"/assets/"+((M=l[3])==null?void 0:M.id)),S(o,"class","text-lg font-medium leading-6 text-neon-pink")},m(d,T){F(d,e,T),F(d,s,T),F(d,i,T),C(i,o),C(o,m),C(m,u),C(i,v),t&&t.m(i,null)},p(d,T){var b,c,x,g,M,D,B,z,E,Q;T&8&&!Y(e.src,n=(x=(c=(b=d[3])==null?void 0:b.data)==null?void 0:c.icon)==null?void 0:x.href)&&S(e,"src",n),T&8&&r!==(r="Icon of "+((D=(M=(g=d[3])==null?void 0:g.data)==null?void 0:M.details)==null?void 0:D.name))&&S(e,"alt",r),T&8&&a!==(a=((E=(z=(B=d[3])==null?void 0:B.data)==null?void 0:z.details)==null?void 0:E.name)+"")&&N(u,a),T&8&&h!==(h=J+"/assets/"+((Q=d[3])==null?void 0:Q.id))&&S(m,"href",h),f===(f=w(d))&&t?t.p(d,T):(t&&t.d(1),t=f&&f(d),t&&(t.c(),t.m(i,null)))},d(d){d&&_(e),d&&_(s),d&&_(i),t&&t.d()}}}function Ce(l){var i,o,m;let e,n,r=((m=(o=(i=l[3])==null?void 0:i.data)==null?void 0:o.chain)==null?void 0:m.name)+"",s;return{c(){e=U("p"),n=A("Chain: "),s=A(r),this.h()},l(a){e=P(a,"P",{class:!0});var u=k(e);n=R(u,"Chain: "),s=R(u,r),u.forEach(_),this.h()},h(){S(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(a,u){F(a,e,u),C(e,n),C(e,s)},p(a,u){var h,v,w;u&8&&r!==(r=((w=(v=(h=a[3])==null?void 0:h.data)==null?void 0:v.chain)==null?void 0:w.name)+"")&&N(s,r)},d(a){a&&_(e)}}}function De(l){var i,o,m;let e,n,r=((m=(o=(i=l[3])==null?void 0:i.data)==null?void 0:o.issuer)==null?void 0:m.name)+"",s;return{c(){e=U("p"),n=A("Issuer: "),s=A(r),this.h()},l(a){e=P(a,"P",{class:!0});var u=k(e);n=R(u,"Issuer: "),s=R(u,r),u.forEach(_),this.h()},h(){S(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(a,u){F(a,e,u),C(e,n),C(e,s)},p(a,u){var h,v,w;u&8&&r!==(r=((w=(v=(h=a[3])==null?void 0:h.data)==null?void 0:v.issuer)==null?void 0:w.name)+"")&&N(s,r)},d(a){a&&_(e)}}}function Ue(l){var a,u,h,v,w,f;let e,n,r=((h=(u=(a=l[3])==null?void 0:a.data)==null?void 0:u.issuer)==null?void 0:h.name)+"",s,i,o=((f=(w=(v=l[3])==null?void 0:v.data)==null?void 0:w.chain)==null?void 0:f.name)+"",m;return{c(){e=U("p"),n=A("Issuer: "),s=A(r),i=A(" | Chain: "),m=A(o),this.h()},l(t){e=P(t,"P",{class:!0});var p=k(e);n=R(p,"Issuer: "),s=R(p,r),i=R(p," | Chain: "),m=R(p,o),p.forEach(_),this.h()},h(){S(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(t,p){F(t,e,p),C(e,n),C(e,s),C(e,i),C(e,m)},p(t,p){var y,I,d,T,b,c;p&8&&r!==(r=((d=(I=(y=t[3])==null?void 0:y.data)==null?void 0:I.issuer)==null?void 0:d.name)+"")&&N(s,r),p&8&&o!==(o=((c=(b=(T=t[3])==null?void 0:T.data)==null?void 0:b.chain)==null?void 0:c.name)+"")&&N(m,o)},d(t){t&&_(e)}}}function Pe(l){let e,n,r,s,i,o,m,a,u,h,v,w;re(l[8]),e=new Se({props:{title:l[4].title,description:l[4].description,openGraph:{title:l[4].title,description:l[4].description,url:l[4].url,type:"website",images:[l[4].image]},twitter:{site:"@bcked_com",title:l[4].title,description:l[4].description,image:l[4].image.url,imageAlt:l[4].image.alt}}});let f=l[3]&&ee(l);return{c(){se(e.$$.fragment),n=O(),r=U("div"),s=U("div"),i=U("div"),o=U("div"),f&&f.c(),a=O(),u=U("div"),this.h()},l(t){oe(e.$$.fragment,t),n=j(t),r=P(t,"DIV",{class:!0});var p=k(r);s=P(p,"DIV",{class:!0});var y=k(s);i=P(y,"DIV",{class:!0});var I=k(i);o=P(I,"DIV",{class:!0});var d=k(o);f&&f.l(d),d.forEach(_),I.forEach(_),y.forEach(_),p.forEach(_),a=j(t),u=P(t,"DIV",{id:!0}),k(u).forEach(_),this.h()},h(){S(o,"class","flex items-center justify-start space-x-4"),S(i,"class","px-4 py-2 sm:px-6 transition-all motion-reduce:transition-none duration-1000"),S(s,"class",m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(l[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"),S(r,"class","flex fixed w-full z-10 px-2 sm:px-4 items-start justify-end transition-all motion-reduce:transition-none duration-1000"),S(u,"id","3d-graph")},m(t,p){le(e,t,p),F(t,n,p),F(t,r,p),C(r,s),C(s,i),C(i,o),f&&f.m(o,null),F(t,a,p),F(t,u,p),l[9](u),h=!0,v||(w=ne(window,"resize",l[8]),v=!0)},p(t,[p]){const y={};p&16&&(y.title=t[4].title),p&16&&(y.description=t[4].description),p&16&&(y.openGraph={title:t[4].title,description:t[4].description,url:t[4].url,type:"website",images:[t[4].image]}),p&16&&(y.twitter={site:"@bcked_com",title:t[4].title,description:t[4].description,image:t[4].image.url,imageAlt:t[4].image.alt}),e.$set(y),t[3]?f?f.p(t,p):(f=ee(t),f.c(),f.m(o,null)):f&&(f.d(1),f=null),(!h||p&8&&m!==(m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(t[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"))&&S(s,"class",m)},i(t){h||(ue(e.$$.fragment,t),h=!0)},o(t){he(e.$$.fragment,t),h=!1},d(t){me(e,t),t&&_(n),t&&_(r),f&&f.d(),t&&_(a),t&&_(u),l[9](null),v=!1,w()}}}function Be(l,e,n){let r,s,i,{data:o}=e,m,a=0,u=0,h,v;de(()=>{const t=xe();n(6,h=t(m).linkSource("fromId").linkTarget("toId").backgroundColor("#00000000").enableNodeDrag(!1).nodeLabel(b=>{var B,z;const x=b.data,g=x.details.name,M=(B=x.issuer)==null?void 0:B.name,D=(z=x.chain)==null?void 0:z.name;return g&&M&&D?`${g} - ${M} (${D})`:g&&M?`${g} - ${M}`:g&&D?`${g} (${D})`:g}).nodeThreeObject(b=>{var z;const x=b.data,g=(z=x==null?void 0:x.icon)==null?void 0:z.href,M=new _e().load(g),D=new we({map:M}),B=new Me(D);return B.scale.set(18,18,18),B}).onNodeClick(b=>{const c=b;n(3,v=c);const x=150,g=1+x/Math.hypot(c.x,c.y,c.z);let M={x:0,y:0,z:x};c.x&&c.y&&c.z&&(M={x:c.x*g,y:c.y*g,z:c.z*g}),h.cameraPosition(M,c,1e3)}).linkLabel(b=>{var g;const x=(g=b.data.history.at(-1))==null?void 0:g.value;return x?ce(x):""}).linkDirectionalArrowLength(9).linkDirectionalArrowRelPos(.5).linkCurvature(b=>{const c=b;return c.fromId==c.toId?.75:.25}).graphData(r));const p=new V(a,u),y=.3,I=4,d=0,T=new H(p,y,I,d);h.postProcessingComposer().addPass(T)});function w(){n(0,a=window.innerWidth),n(1,u=window.innerHeight)}function f(t){fe[t?"unshift":"push"](()=>{m=t,n(2,m)})}return l.$$set=t=>{"data"in t&&n(5,o=t.data)},l.$$.update=()=>{l.$$.dirty&32&&n(7,{graphData:r,globalStats:s}=o,s),l.$$.dirty&65&&n(6,h=h==null?void 0:h.width(a)),l.$$.dirty&66&&n(6,h=h==null?void 0:h.height(u)),l.$$.dirty&128&&n(4,i={title:"3D Graph Visualizing Asset Backing",description:`Take an interactive look at the ${s.count} assets in the 3D graph.`,url:`${Z}`,image:{url:`${Z}/previews/landing.jpg`,width:1200,height:630,alt:"Preview of bcked's landing page."}})},[a,u,m,v,i,o,h,s,w,f]}class Re extends te{constructor(e){super(),ie(this,e,Be,Pe,ae,{data:5})}}export{Re as default};
