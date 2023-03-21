import{O as a,B as i,F as t,c as o}from"./three.5f8d48fa.js";class m{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const n=new a(-1,1,1,-1,0,1),r=new i;r.setAttribute("position",new t([-1,3,0,-1,-1,0,3,-1,0],3));r.setAttribute("uv",new t([0,2,0,0,2,0],2));class u{constructor(e){this._mesh=new o(r,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const c={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};export{c as C,u as F,m as P};
