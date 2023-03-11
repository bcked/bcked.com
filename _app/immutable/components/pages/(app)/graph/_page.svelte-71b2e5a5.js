import{S as te,i as ie,s as ae,ae as re,x as se,a as W,k as D,y as oe,c as j,l as U,m as z,h as x,n as M,z as le,b as V,K as C,O as ne,f as ue,t as he,A as me,o as de,q as I,r as A,ad as Y,u as L,v as fe}from"../../../../chunks/index-17510b9a.js";import{b as J}from"../../../../chunks/paths-24bb4e9c.js";import{P as Z}from"../../../../chunks/public-550f299c.js";import{C as q,P as ce,V as F,W as G,U as $,q as O,r as N,s as pe,A as ve,M as ge,t as be,F as Te,T as xe,S as _e,a as we,f as Me}from"../../../../chunks/graph-c02c7a11.js";import{S as Se}from"../../../../chunks/index-24193bbc.js";const ye={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class R extends ce{constructor(e,n,r,s){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=s,this.resolution=e!==void 0?new F(e.x,e.y):new F(256,256),this.clearColor=new q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new G(i,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new G(i,o);_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const f=new G(i,o);f.texture.name="UnrealBloomPass.v"+g,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),i=Math.round(i/2),o=Math.round(o/2)}const m=ye;this.highPassUniforms=$.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new O({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new F(i,o),i=Math.round(i/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=pe;this.copyUniforms=$.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new O({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ve,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new q,this.oldClearAlpha=1,this.basic=new ge,this.fsQuad=new be(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(r,s);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,s),this.renderTargetsVertical[i].setSize(r,s),this.separableBlurMaterials[i].uniforms.texSize.value=new F(r,s),r=Math.round(r/2),s=Math.round(s/2)}render(e,n,r,s,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let m=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[a].uniforms.direction.value=R.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=R.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this.fsQuad.render(e),m=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new O({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new F(.5,.5)},direction:{value:new F(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new O({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}R.BlurDirectionX=new F(1,0);R.BlurDirectionY=new F(0,1);function ee(l){var p,S,k;let e,n,r,s,i,o,m,a=((k=(S=(p=l[3])==null?void 0:p.data)==null?void 0:S.details)==null?void 0:k.name)+"",u,h,g;function _(d,v){var c,b,T,w,y,P,B,H,E,Q,K,X;if((T=(b=(c=d[3])==null?void 0:c.data)==null?void 0:b.issuer)!=null&&T.name&&((P=(y=(w=d[3])==null?void 0:w.data)==null?void 0:y.chain)!=null&&P.name))return Ue;if((E=(H=(B=d[3])==null?void 0:B.data)==null?void 0:H.issuer)!=null&&E.name)return De;if((X=(K=(Q=d[3])==null?void 0:Q.data)==null?void 0:K.chain)!=null&&X.name)return Ce}let f=_(l),t=f&&f(l);return{c(){e=D("img"),s=W(),i=D("div"),o=D("h2"),m=D("a"),u=I(a),g=W(),t&&t.c(),this.h()},l(d){e=U(d,"IMG",{class:!0,src:!0,alt:!0}),s=j(d),i=U(d,"DIV",{});var v=z(i);o=U(v,"H2",{class:!0});var c=z(o);m=U(c,"A",{href:!0});var b=z(m);u=A(b,a),b.forEach(x),c.forEach(x),g=j(v),t&&t.l(v),v.forEach(x),this.h()},h(){var d,v,c,b,T,w,y;M(e,"class","h-10 w-10 flex-shrink-1"),Y(e.src,n=(c=(v=(d=l[3])==null?void 0:d.data)==null?void 0:v.icon)==null?void 0:c.href)||M(e,"src",n),M(e,"alt",r="Icon of "+((w=(T=(b=l[3])==null?void 0:b.data)==null?void 0:T.details)==null?void 0:w.name)),M(m,"href",h=J+"/assets/"+((y=l[3])==null?void 0:y.id)),M(o,"class","text-lg font-medium leading-6 text-neon-pink")},m(d,v){V(d,e,v),V(d,s,v),V(d,i,v),C(i,o),C(o,m),C(m,u),C(i,g),t&&t.m(i,null)},p(d,v){var c,b,T,w,y,P,B,H,E,Q;v&8&&!Y(e.src,n=(T=(b=(c=d[3])==null?void 0:c.data)==null?void 0:b.icon)==null?void 0:T.href)&&M(e,"src",n),v&8&&r!==(r="Icon of "+((P=(y=(w=d[3])==null?void 0:w.data)==null?void 0:y.details)==null?void 0:P.name))&&M(e,"alt",r),v&8&&a!==(a=((E=(H=(B=d[3])==null?void 0:B.data)==null?void 0:H.details)==null?void 0:E.name)+"")&&L(u,a),v&8&&h!==(h=J+"/assets/"+((Q=d[3])==null?void 0:Q.id))&&M(m,"href",h),f===(f=_(d))&&t?t.p(d,v):(t&&t.d(1),t=f&&f(d),t&&(t.c(),t.m(i,null)))},d(d){d&&x(e),d&&x(s),d&&x(i),t&&t.d()}}}function Ce(l){var i,o,m;let e,n,r=((m=(o=(i=l[3])==null?void 0:i.data)==null?void 0:o.chain)==null?void 0:m.name)+"",s;return{c(){e=D("p"),n=I("Chain: "),s=I(r),this.h()},l(a){e=U(a,"P",{class:!0});var u=z(e);n=A(u,"Chain: "),s=A(u,r),u.forEach(x),this.h()},h(){M(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(a,u){V(a,e,u),C(e,n),C(e,s)},p(a,u){var h,g,_;u&8&&r!==(r=((_=(g=(h=a[3])==null?void 0:h.data)==null?void 0:g.chain)==null?void 0:_.name)+"")&&L(s,r)},d(a){a&&x(e)}}}function De(l){var i,o,m;let e,n,r=((m=(o=(i=l[3])==null?void 0:i.data)==null?void 0:o.issuer)==null?void 0:m.name)+"",s;return{c(){e=D("p"),n=I("Issuer: "),s=I(r),this.h()},l(a){e=U(a,"P",{class:!0});var u=z(e);n=A(u,"Issuer: "),s=A(u,r),u.forEach(x),this.h()},h(){M(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(a,u){V(a,e,u),C(e,n),C(e,s)},p(a,u){var h,g,_;u&8&&r!==(r=((_=(g=(h=a[3])==null?void 0:h.data)==null?void 0:g.issuer)==null?void 0:_.name)+"")&&L(s,r)},d(a){a&&x(e)}}}function Ue(l){var a,u,h,g,_,f;let e,n,r=((h=(u=(a=l[3])==null?void 0:a.data)==null?void 0:u.issuer)==null?void 0:h.name)+"",s,i,o=((f=(_=(g=l[3])==null?void 0:g.data)==null?void 0:_.chain)==null?void 0:f.name)+"",m;return{c(){e=D("p"),n=I("Issuer: "),s=I(r),i=I(" | Chain: "),m=I(o),this.h()},l(t){e=U(t,"P",{class:!0});var p=z(e);n=A(p,"Issuer: "),s=A(p,r),i=A(p," | Chain: "),m=A(p,o),p.forEach(x),this.h()},h(){M(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(t,p){V(t,e,p),C(e,n),C(e,s),C(e,i),C(e,m)},p(t,p){var S,k,d,v,c,b;p&8&&r!==(r=((d=(k=(S=t[3])==null?void 0:S.data)==null?void 0:k.issuer)==null?void 0:d.name)+"")&&L(s,r),p&8&&o!==(o=((b=(c=(v=t[3])==null?void 0:v.data)==null?void 0:c.chain)==null?void 0:b.name)+"")&&L(m,o)},d(t){t&&x(e)}}}function Pe(l){let e,n,r,s,i,o,m,a,u,h,g,_;re(l[8]),e=new Se({props:{title:l[4].title,description:l[4].description,openGraph:{title:l[4].title,description:l[4].description,url:l[4].url,type:"website",images:[l[4].image]},twitter:{site:"@bcked_com",title:l[4].title,description:l[4].description,image:l[4].image.url,imageAlt:l[4].image.alt}}});let f=l[3]&&ee(l);return{c(){se(e.$$.fragment),n=W(),r=D("div"),s=D("div"),i=D("div"),o=D("div"),f&&f.c(),a=W(),u=D("div"),this.h()},l(t){oe(e.$$.fragment,t),n=j(t),r=U(t,"DIV",{class:!0});var p=z(r);s=U(p,"DIV",{class:!0});var S=z(s);i=U(S,"DIV",{class:!0});var k=z(i);o=U(k,"DIV",{class:!0});var d=z(o);f&&f.l(d),d.forEach(x),k.forEach(x),S.forEach(x),p.forEach(x),a=j(t),u=U(t,"DIV",{id:!0}),z(u).forEach(x),this.h()},h(){M(o,"class","flex items-center justify-start space-x-4"),M(i,"class","px-4 py-2 sm:px-6 transition-all motion-reduce:transition-none duration-1000"),M(s,"class",m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(l[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"),M(r,"class","flex fixed w-full z-10 px-2 sm:px-4 items-start justify-end transition-all motion-reduce:transition-none duration-1000"),M(u,"id","3d-graph")},m(t,p){le(e,t,p),V(t,n,p),V(t,r,p),C(r,s),C(s,i),C(i,o),f&&f.m(o,null),V(t,a,p),V(t,u,p),l[9](u),h=!0,g||(_=ne(window,"resize",l[8]),g=!0)},p(t,[p]){const S={};p&16&&(S.title=t[4].title),p&16&&(S.description=t[4].description),p&16&&(S.openGraph={title:t[4].title,description:t[4].description,url:t[4].url,type:"website",images:[t[4].image]}),p&16&&(S.twitter={site:"@bcked_com",title:t[4].title,description:t[4].description,image:t[4].image.url,imageAlt:t[4].image.alt}),e.$set(S),t[3]?f?f.p(t,p):(f=ee(t),f.c(),f.m(o,null)):f&&(f.d(1),f=null),(!h||p&8&&m!==(m="w-full max-w-[15rem] sm:max-w-lg lg:max-w-xl bg-gray-50 shadow rounded-b-lg "+(t[3]?"translate-y-0 opacity-100":"-translate-y-16 opacity-0")+" transition-all motion-reduce:transition-none duration-1000"))&&M(s,"class",m)},i(t){h||(ue(e.$$.fragment,t),h=!0)},o(t){he(e.$$.fragment,t),h=!1},d(t){me(e,t),t&&x(n),t&&x(r),f&&f.d(),t&&x(a),t&&x(u),l[9](null),g=!1,_()}}}function Be(l,e,n){let r,s,i,{data:o}=e,m,a=0,u=0,h,g;de(()=>{n(6,h=Te(m).enableNodeDrag(!1).nodeLabel(v=>{var P,B;const b=v.data,T=b.details.name,w=(P=b.issuer)==null?void 0:P.name,y=(B=b.chain)==null?void 0:B.name;return T&&w&&y?`${T} - ${w} (${y})`:T&&w?`${T} - ${w}`:T&&y?`${T} (${y})`:T}).nodeThreeObject(v=>{var B;const b=v.data,T=(B=b==null?void 0:b.icon)==null?void 0:B.href,w=new xe().load(T),y=new _e({map:w}),P=new we(y);return P.scale.set(18,18,18),P}).onNodeClick(v=>{const c=v;n(3,g=c);const b=150,T=1+b/Math.hypot(c.x,c.y,c.z);let w={x:0,y:0,z:b};c.x&&c.y&&c.z&&(w={x:c.x*T,y:c.y*T,z:c.z*T}),h.cameraPosition(w,c,1e3)}).linkLabel(v=>{var T;const b=(T=v.data.history.at(-1))==null?void 0:T.value;return b?Me(b):""}).linkDirectionalArrowLength(9).linkDirectionalArrowRelPos(.5).linkCurvature(v=>{const c=v;return c.fromId==c.toId?.75:.25}).graphData(r));const t=new F(a,u),p=.3,S=4,k=0,d=new R(t,p,S,k);h.postProcessingComposer().addPass(d)});function _(){n(0,a=window.innerWidth),n(1,u=window.innerHeight)}function f(t){fe[t?"unshift":"push"](()=>{m=t,n(2,m)})}return l.$$set=t=>{"data"in t&&n(5,o=t.data)},l.$$.update=()=>{l.$$.dirty&32&&n(7,{graphData:r,globalStats:s}=o,s),l.$$.dirty&65&&n(6,h=h==null?void 0:h.width(a)),l.$$.dirty&66&&n(6,h=h==null?void 0:h.height(u)),l.$$.dirty&128&&n(4,i={title:"3D Graph Visualizing Asset Backing",description:`Take an interactive look at the ${s.count} assets in the 3D graph.`,url:`${Z}`,image:{url:`${Z}/previews/landing.jpg`,width:1200,height:630,alt:"Preview of bcked's landing page."}})},[a,u,m,g,i,o,h,s,_,f]}class Ae extends te{constructor(e){super(),ie(this,e,Be,Pe,ae,{data:5})}}export{Ae as default};
