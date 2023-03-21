/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cs="150",Np={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bo=0,bs=1,ko=2,Ja=1,Go=2,mi=3,an=0,Se=1,tn=2,sn=0,jn=1,ws=2,Ts=3,Es=4,Vo=5,Hn=100,Wo=101,Ho=102,As=103,Cs=104,qo=200,Xo=201,Yo=202,jo=203,Za=204,$a=205,Jo=206,Zo=207,$o=208,Ko=209,Qo=210,tl=0,el=1,nl=2,Kr=3,il=4,rl=5,sl=6,al=7,us=0,ol=1,ll=2,je=0,cl=1,ul=2,hl=3,fl=4,dl=5,Ka=300,Kn=301,Qn=302,Qr=303,ts=304,ir=306,es=1e3,Re=1001,ns=1002,ge=1003,Ls=1004,pr=1005,Ee=1006,pl=1007,vi=1008,yn=1009,ml=1010,gl=1011,Qa=1012,xl=1013,xn=1014,_n=1015,yi=1016,_l=1017,vl=1018,Jn=1020,yl=1021,De=1023,Ml=1024,Sl=1025,vn=1026,ti=1027,bl=1028,wl=1029,Tl=1030,El=1031,Al=1033,mr=33776,gr=33777,xr=33778,_r=33779,Ps=35840,Rs=35841,Ds=35842,Is=35843,Cl=36196,Ns=37492,Fs=37496,zs=37808,Os=37809,Us=37810,Bs=37811,ks=37812,Gs=37813,Vs=37814,Ws=37815,Hs=37816,qs=37817,Xs=37818,Ys=37819,js=37820,Js=37821,vr=36492,Ll=36283,Zs=36284,$s=36285,Ks=36286,Mn=3e3,Ht=3001,Pl=3200,Rl=3201,to=0,Dl=1,Oe="srgb",Mi="srgb-linear",eo="display-p3",yr=7680,Il=519,is=35044,Qs="300 es",rs=1035;class ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mr=Math.PI/180,ta=180/Math.PI;function Je(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(le[s&255]+le[s>>8&255]+le[s>>16&255]+le[s>>24&255]+"-"+le[t&255]+le[t>>8&255]+"-"+le[t>>16&15|64]+le[t>>24&255]+"-"+le[e&63|128]+le[e>>8&255]+"-"+le[e>>16&255]+le[e>>24&255]+le[n&255]+le[n>>8&255]+le[n>>16&255]+le[n>>24&255]).toLowerCase()}function ue(s,t,e){return Math.max(t,Math.min(e,s))}function Nl(s,t){return(s%t+t)%t}function Sr(s,t,e){return(1-e)*s+e*t}function ea(s){return(s&s-1)===0&&s!==0}function Fl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function en(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vt(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],x=n[8],p=i[0],d=i[3],_=i[6],T=i[1],g=i[4],y=i[7],E=i[2],P=i[5],D=i[8];return r[0]=o*p+a*T+c*E,r[3]=o*d+a*g+c*P,r[6]=o*_+a*y+c*D,r[1]=l*p+u*T+h*E,r[4]=l*d+u*g+h*P,r[7]=l*_+u*y+h*D,r[2]=f*p+m*T+x*E,r[5]=f*d+m*g+x*P,r[8]=f*_+m*y+x*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,m=l*r-o*c,x=e*h+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return t[0]=h*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=f*p,t[4]=(u*e-i*c)*p,t[5]=(i*r-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Jt;function no(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Si(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class Ei{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],x=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=p;return}if(h!==p||c!==f||l!==m||u!==x){let d=1-a;const _=c*f+l*m+u*x+h*p,T=_>=0?1:-1,g=1-_*_;if(g>Number.EPSILON){const E=Math.sqrt(g),P=Math.atan2(E,_*T);d=Math.sin(d*P)/E,a=Math.sin(a*P)/E}const y=a*T;if(c=c*d+f*y,l=l*d+m*y,u=u*d+x*y,h=h*d+p*y,d===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*h+c*m-l*f,t[e+1]=c*x+u*f+l*h-a*m,t[e+2]=l*x+u*m+a*f-c*h,t[e+3]=u*x-a*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),m=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*m*x,this._y=l*m*h-f*u*x,this._z=l*u*x+f*m*h,this._w=l*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+l*m*x,this._y=l*m*h-f*u*x,this._z=l*u*x-f*m*h,this._w=l*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-l*m*x,this._y=l*m*h+f*u*x,this._z=l*u*x+f*m*h,this._w=l*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-l*m*x,this._y=l*m*h+f*u*x,this._z=l*u*x-f*m*h,this._w=l*u*h+f*m*x;break;case"YZX":this._x=f*u*h+l*m*x,this._y=l*m*h+f*u*x,this._z=l*u*x-f*m*h,this._w=l*u*h-f*m*x;break;case"XZY":this._x=f*u*h-l*m*x,this._y=l*m*h-f*u*x,this._z=l*u*x+f*m*h,this._w=l*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,h=c*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=l*c+f*-r+u*-a-h*-o,this.y=u*c+f*-o+h*-r-l*-a,this.z=h*c+f*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new F,na=new Ei;function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const zl=new Jt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ol=new Jt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),nn=new F;function Ul(s){return s.convertSRGBToLinear(),nn.set(s.r,s.g,s.b).applyMatrix3(Ol),s.setRGB(nn.x,nn.y,nn.z)}function Bl(s){return nn.set(s.r,s.g,s.b).applyMatrix3(zl),s.setRGB(nn.x,nn.y,nn.z).convertLinearToSRGB()}const kl={[Mi]:s=>s,[Oe]:s=>s.convertSRGBToLinear(),[eo]:Ul},Gl={[Mi]:s=>s,[Oe]:s=>s.convertLinearToSRGB(),[eo]:Bl},de={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Mi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=kl[t],i=Gl[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let An;class io{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{An===void 0&&(An=Si("canvas")),An.width=t.width,An.height=t.height;const n=An.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=An}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Si("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ro{constructor(t=null){this.isSource=!0,this.uuid=Je(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Er(i[o].image)):r.push(Er(i[o]))}else r=Er(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Er(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?io.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vl=0;class xe extends ni{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=Re,i=Re,r=Ee,o=vi,a=De,c=yn,l=xe.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Je(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case Re:t.x=t.x<0?0:1;break;case ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case Re:t.y=t.y<0?0:1;break;case ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=Ka;xe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],x=c[9],p=c[2],d=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,y=(m+1)/2,E=(_+1)/2,P=(u+f)/4,D=(h+p)/4,v=(x+d)/4;return g>y&&g>E?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=P/n,r=D/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=P/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=v/r),this.set(n,i,r,e),this}let T=Math.sqrt((d-x)*(d-x)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(d-x)/T,this.y=(h-p)/T,this.z=(f-u)/T,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sn extends ni{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ee,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class so extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)un.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(un)}else n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox),Ar.applyMatrix4(t.matrixWorld),this.union(Ar);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(si),Ci.subVectors(this.max,si),Cn.subVectors(t.a,si),Ln.subVectors(t.b,si),Pn.subVectors(t.c,si),Ze.subVectors(Ln,Cn),$e.subVectors(Pn,Ln),hn.subVectors(Cn,Pn);let e=[0,-Ze.z,Ze.y,0,-$e.z,$e.y,0,-hn.z,hn.y,Ze.z,0,-Ze.x,$e.z,0,-$e.x,hn.z,0,-hn.x,-Ze.y,Ze.x,0,-$e.y,$e.x,0,-hn.y,hn.x,0];return!Cr(e,Cn,Ln,Pn,Ci)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,Cn,Ln,Pn,Ci))?!1:(Li.crossVectors(Ze,$e),e=[Li.x,Li.y,Li.z],Cr(e,Cn,Ln,Pn,Ci))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ve[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ve[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ve[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ve[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ve[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ve[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ve[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ve[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ve),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ve=[new F,new F,new F,new F,new F,new F,new F,new F],un=new F,Ar=new Tn,Cn=new F,Ln=new F,Pn=new F,Ze=new F,$e=new F,hn=new F,si=new F,Ci=new F,Li=new F,fn=new F;function Cr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fn.fromArray(s,r);const a=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),c=t.dot(fn),l=e.dot(fn),u=n.dot(fn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Hl=new Tn,ai=new F,Lr=new F;class rr{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ai.subVectors(t,this.center);const e=ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ai,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ai.copy(t.center).add(Lr)),this.expandByPoint(ai.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new F,Pr=new F,Pi=new F,Ke=new F,Rr=new F,Ri=new F,Dr=new F;class hs{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pr.copy(t).add(e).multiplyScalar(.5),Pi.copy(e).sub(t).normalize(),Ke.copy(this.origin).sub(Pr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pi),a=Ke.dot(this.direction),c=-Ke.dot(Pi),l=Ke.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*c-a,f=o*a-c,x=r*u,h>=0)if(f>=-x)if(f<=x){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Pr).addScaledVector(Pi,f),m}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),i=We.dot(We)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,i,r){Rr.subVectors(e,t),Ri.subVectors(n,t),Dr.crossVectors(Rr,Ri);let o=this.direction.dot(Dr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ke.subVectors(this.origin,t);const c=a*this.direction.dot(Ri.crossVectors(Ke,Ri));if(c<0)return null;const l=a*this.direction.dot(Rr.cross(Ke));if(l<0||c+l>o)return null;const u=-a*Ke.dot(Dr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,h,f,m,x,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=x,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Rn.setFromMatrixColumn(t,0).length(),r=1/Rn.setFromMatrixColumn(t,1).length(),o=1/Rn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,x=a*u,p=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+x*l,e[5]=f-p*l,e[9]=-a*c,e[2]=p-f*l,e[6]=x+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,x=l*u,p=l*h;e[0]=f+p*a,e[4]=x*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=p+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,x=l*u,p=l*h;e[0]=f-p*a,e[4]=-o*h,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=p-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,m=o*h,x=a*u,p=a*h;e[0]=c*u,e[4]=x*l-m,e[8]=f*l+p,e[1]=c*h,e[5]=p*l+f,e[9]=m*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,x=a*c,p=a*l;e[0]=c*u,e[4]=p-f*h,e[8]=x*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+x,e[10]=f-p*h}else if(t.order==="XZY"){const f=o*c,m=o*l,x=a*c,p=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+p,e[5]=o*u,e[9]=m*h-x,e[2]=x*h-m,e[6]=a*u,e[10]=p*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ql,t,Xl)}lookAt(t,e,n){const i=this.elements;return ye.subVectors(t,e),ye.lengthSq()===0&&(ye.z=1),ye.normalize(),Qe.crossVectors(n,ye),Qe.lengthSq()===0&&(Math.abs(n.z)===1?ye.x+=1e-4:ye.z+=1e-4,ye.normalize(),Qe.crossVectors(n,ye)),Qe.normalize(),Di.crossVectors(ye,Qe),i[0]=Qe.x,i[4]=Di.x,i[8]=ye.x,i[1]=Qe.y,i[5]=Di.y,i[9]=ye.y,i[2]=Qe.z,i[6]=Di.z,i[10]=ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],x=n[2],p=n[6],d=n[10],_=n[14],T=n[3],g=n[7],y=n[11],E=n[15],P=i[0],D=i[4],v=i[8],A=i[12],N=i[1],Z=i[5],H=i[9],G=i[13],z=i[2],X=i[6],nt=i[10],$=i[14],O=i[3],rt=i[7],at=i[11],vt=i[15];return r[0]=o*P+a*N+c*z+l*O,r[4]=o*D+a*Z+c*X+l*rt,r[8]=o*v+a*H+c*nt+l*at,r[12]=o*A+a*G+c*$+l*vt,r[1]=u*P+h*N+f*z+m*O,r[5]=u*D+h*Z+f*X+m*rt,r[9]=u*v+h*H+f*nt+m*at,r[13]=u*A+h*G+f*$+m*vt,r[2]=x*P+p*N+d*z+_*O,r[6]=x*D+p*Z+d*X+_*rt,r[10]=x*v+p*H+d*nt+_*at,r[14]=x*A+p*G+d*$+_*vt,r[3]=T*P+g*N+y*z+E*O,r[7]=T*D+g*Z+y*X+E*rt,r[11]=T*v+g*H+y*nt+E*at,r[15]=T*A+g*G+y*$+E*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],x=t[3],p=t[7],d=t[11],_=t[15];return x*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*m-n*c*m)+p*(+e*c*m-e*l*f+r*o*f-i*o*m+i*l*u-r*c*u)+d*(+e*l*h-e*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+_*(-i*a*u-e*c*h+e*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],x=t[12],p=t[13],d=t[14],_=t[15],T=h*d*l-p*f*l+p*c*m-a*d*m-h*c*_+a*f*_,g=x*f*l-u*d*l-x*c*m+o*d*m+u*c*_-o*f*_,y=u*p*l-x*h*l+x*a*m-o*p*m-u*a*_+o*h*_,E=x*h*c-u*p*c-x*a*f+o*p*f+u*a*d-o*h*d,P=e*T+n*g+i*y+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=T*D,t[1]=(p*f*r-h*d*r-p*i*m+n*d*m+h*i*_-n*f*_)*D,t[2]=(a*d*r-p*c*r+p*i*l-n*d*l-a*i*_+n*c*_)*D,t[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*m-n*c*m)*D,t[4]=g*D,t[5]=(u*d*r-x*f*r+x*i*m-e*d*m-u*i*_+e*f*_)*D,t[6]=(x*c*r-o*d*r-x*i*l+e*d*l+o*i*_-e*c*_)*D,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*m+e*c*m)*D,t[8]=y*D,t[9]=(x*h*r-u*p*r-x*n*m+e*p*m+u*n*_-e*h*_)*D,t[10]=(o*p*r-x*a*r+x*n*l-e*p*l-o*n*_+e*a*_)*D,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*m-e*a*m)*D,t[12]=E*D,t[13]=(u*p*i-x*h*i+x*n*f-e*p*f-u*n*d+e*h*d)*D,t[14]=(x*a*i-o*p*i-x*n*c+e*p*c+o*n*d-e*a*d)*D,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*f+e*a*f)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,m=r*u,x=r*h,p=o*u,d=o*h,_=a*h,T=c*l,g=c*u,y=c*h,E=n.x,P=n.y,D=n.z;return i[0]=(1-(p+_))*E,i[1]=(m+y)*E,i[2]=(x-g)*E,i[3]=0,i[4]=(m-y)*P,i[5]=(1-(f+_))*P,i[6]=(d+T)*P,i[7]=0,i[8]=(x+g)*D,i[9]=(d-T)*D,i[10]=(1-(f+p))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Rn.set(i[0],i[1],i[2]).length();const o=Rn.set(i[4],i[5],i[6]).length(),a=Rn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ae.copy(this);const l=1/r,u=1/o,h=1/a;return Ae.elements[0]*=l,Ae.elements[1]*=l,Ae.elements[2]*=l,Ae.elements[4]*=u,Ae.elements[5]*=u,Ae.elements[6]*=u,Ae.elements[8]*=h,Ae.elements[9]*=h,Ae.elements[10]*=h,e.setFromRotationMatrix(Ae),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),h=(e+t)*c,f=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rn=new F,Ae=new Yt,ql=new F(0,0,0),Xl=new F(1,1,1),Qe=new F,Di=new F,ye=new F,ia=new Yt,ra=new Ei;class sr{constructor(t=0,e=0,n=0,i=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ra.setFromEuler(this),this.setFromQuaternion(ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class fs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yl=0;const sa=new F,Dn=new Ei,He=new Yt,Ii=new F,oi=new F,jl=new F,Jl=new Ei,aa=new F(1,0,0),oa=new F(0,1,0),la=new F(0,0,1),Zl={type:"added"},ca={type:"removed"};class oe extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new F,e=new sr,n=new Ei,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Jt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(aa,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(la,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(aa,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(la,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(He.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ii.copy(t):Ii.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?He.lookAt(oi,Ii,this.up):He.lookAt(Ii,oi,this.up),this.quaternion.setFromRotationMatrix(He),i&&(He.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(He),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ca)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ca)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),He.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),He.multiply(t.parent.matrixWorld)),t.applyMatrix4(He),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,t,jl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,Jl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}oe.DEFAULT_UP=new F(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ce=new F,qe=new F,Ir=new F,Xe=new F,In=new F,Nn=new F,ua=new F,Nr=new F,Fr=new F,zr=new F;class Be{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ce.subVectors(t,e),i.cross(Ce);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ce.subVectors(i,e),qe.subVectors(n,e),Ir.subVectors(t,e);const o=Ce.dot(Ce),a=Ce.dot(qe),c=Ce.dot(Ir),l=qe.dot(qe),u=qe.dot(Ir),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-a*u)*f,x=(o*u-a*c)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xe),Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Xe),c.set(0,0),c.addScaledVector(r,Xe.x),c.addScaledVector(o,Xe.y),c.addScaledVector(a,Xe.z),c}static isFrontFacing(t,e,n,i){return Ce.subVectors(n,e),qe.subVectors(t,e),Ce.cross(qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ce.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Ce.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Be.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;In.subVectors(i,n),Nn.subVectors(r,n),Nr.subVectors(t,n);const c=In.dot(Nr),l=Nn.dot(Nr);if(c<=0&&l<=0)return e.copy(n);Fr.subVectors(t,i);const u=In.dot(Fr),h=Nn.dot(Fr);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(In,o);zr.subVectors(t,r);const m=In.dot(zr),x=Nn.dot(zr);if(x>=0&&m<=x)return e.copy(r);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(Nn,a);const d=u*x-m*h;if(d<=0&&h-u>=0&&m-x>=0)return ua.subVectors(r,i),a=(h-u)/(h-u+(m-x)),e.copy(i).addScaledVector(ua,a);const _=1/(d+p+f);return o=p*_,a=f*_,e.copy(n).addScaledVector(In,o).addScaledVector(Nn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let $l=0;class En extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Je(),this.name="",this.type="Material",this.blending=jn,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Za,this.blendDst=$a,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Le={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Or(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Nl(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Or(o,r,t+1/3),this.g=Or(o,r,t),this.b=Or(o,r,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,de.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,de.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,de.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,de.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=ao[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return de.fromWorkingColorSpace(ce.copy(this),t),ue(ce.r*255,0,255)<<16^ue(ce.g*255,0,255)<<8^ue(ce.b*255,0,255)<<0}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(ce.copy(this),e);const n=ce.r,i=ce.g,r=ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(ce.copy(this),e),t.r=ce.r,t.g=ce.g,t.b=ce.b,t}getStyle(t=Oe){de.fromWorkingColorSpace(ce.copy(this),t);const e=ce.r,n=ce.g,i=ce.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Le),Le.h+=t,Le.s+=e,Le.l+=n,this.setHSL(Le.h,Le.s,Le.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Le),t.getHSL(Ni);const n=Sr(Le.h,Ni.h,e),i=Sr(Le.s,Ni.s,e),r=Sr(Le.l,Ni.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ce=new Gt;Gt.NAMES=ao;class oo extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new F,Fi=new ht;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=is,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fi.fromBufferAttribute(this,e),Fi.applyMatrix3(t),this.setXY(e,Fi.x,Fi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==is&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lo extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class co extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kl=0;const Te=new Yt,Ur=new oe,Fn=new F,Me=new Tn,li=new Tn,se=new F;class be extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(no(t)?co:lo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Te.makeRotationFromQuaternion(t),this.applyMatrix4(Te),this}rotateX(t){return Te.makeRotationX(t),this.applyMatrix4(Te),this}rotateY(t){return Te.makeRotationY(t),this.applyMatrix4(Te),this}rotateZ(t){return Te.makeRotationZ(t),this.applyMatrix4(Te),this}translate(t,e,n){return Te.makeTranslation(t,e,n),this.applyMatrix4(Te),this}scale(t,e,n){return Te.makeScale(t,e,n),this.applyMatrix4(Te),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Me.setFromBufferAttribute(r),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,Me.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,Me.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(Me.min),this.boundingBox.expandByPoint(Me.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Me.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];li.setFromBufferAttribute(a),this.morphTargetsRelative?(se.addVectors(Me.min,li.min),Me.expandByPoint(se),se.addVectors(Me.max,li.max),Me.expandByPoint(se)):(Me.expandByPoint(li.min),Me.expandByPoint(li.max))}Me.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)se.fromBufferAttribute(a,l),c&&(Fn.fromBufferAttribute(t,l),se.add(Fn)),i=Math.max(i,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let N=0;N<a;N++)l[N]=new F,u[N]=new F;const h=new F,f=new F,m=new F,x=new ht,p=new ht,d=new ht,_=new F,T=new F;function g(N,Z,H){h.fromArray(i,N*3),f.fromArray(i,Z*3),m.fromArray(i,H*3),x.fromArray(o,N*2),p.fromArray(o,Z*2),d.fromArray(o,H*2),f.sub(h),m.sub(h),p.sub(x),d.sub(x);const G=1/(p.x*d.y-d.x*p.y);isFinite(G)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(G),T.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(G),l[N].add(_),l[Z].add(_),l[H].add(_),u[N].add(T),u[Z].add(T),u[H].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let N=0,Z=y.length;N<Z;++N){const H=y[N],G=H.start,z=H.count;for(let X=G,nt=G+z;X<nt;X+=3)g(n[X+0],n[X+1],n[X+2])}const E=new F,P=new F,D=new F,v=new F;function A(N){D.fromArray(r,N*3),v.copy(D);const Z=l[N];E.copy(Z),E.sub(D.multiplyScalar(D.dot(Z))).normalize(),P.crossVectors(v,Z);const G=P.dot(u[N])<0?-1:1;c[N*4]=E.x,c[N*4+1]=E.y,c[N*4+2]=E.z,c[N*4+3]=G}for(let N=0,Z=y.length;N<Z;++N){const H=y[N],G=H.start,z=H.count;for(let X=G,nt=G+z;X<nt;X+=3)A(n[X+0]),A(n[X+1]),A(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,x=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let _=0;_<u;_++)f[x++]=l[m++]}return new Ie(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new Yt,ze=new hs,zi=new rr,fa=new F,ci=new F,ui=new F,hi=new F,Br=new F,Oi=new F,Ui=new ht,Bi=new ht,ki=new ht,kr=new F,Gi=new F;class rn extends oe{constructor(t=new be,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Oi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Br.fromBufferAttribute(h,t),o?Oi.addScaledVector(Br,u):Oi.addScaledVector(Br.sub(e),u))}e.add(Oi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(r),ze.copy(t.ray).recast(t.near),zi.containsPoint(ze.origin)===!1&&(ze.intersectSphere(zi,fa)===null||ze.origin.distanceToSquared(fa)>(t.far-t.near)**2))||(ha.copy(r).invert(),ze.copy(t.ray).applyMatrix4(ha),n.boundingBox!==null&&ze.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,x=h.length;m<x;m++){const p=h[m],d=i[p.materialIndex],_=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let g=_,y=T;g<y;g+=3){const E=a.getX(g),P=a.getX(g+1),D=a.getX(g+2);o=Vi(this,d,t,ze,l,u,E,P,D),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,d=x;p<d;p+=3){const _=a.getX(p),T=a.getX(p+1),g=a.getX(p+2);o=Vi(this,i,t,ze,l,u,_,T,g),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,x=h.length;m<x;m++){const p=h[m],d=i[p.materialIndex],_=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let g=_,y=T;g<y;g+=3){const E=g,P=g+1,D=g+2;o=Vi(this,d,t,ze,l,u,E,P,D),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,d=x;p<d;p+=3){const _=p,T=p+1,g=p+2;o=Vi(this,i,t,ze,l,u,_,T,g),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Ql(s,t,e,n,i,r,o,a){let c;if(t.side===Se?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===an,a),c===null)return null;Gi.copy(a),Gi.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Gi);return l<e.near||l>e.far?null:{distance:l,point:Gi.clone(),object:s}}function Vi(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,ci),s.getVertexPosition(a,ui),s.getVertexPosition(c,hi);const l=Ql(s,t,e,n,ci,ui,hi,kr);if(l){i&&(Ui.fromBufferAttribute(i,o),Bi.fromBufferAttribute(i,a),ki.fromBufferAttribute(i,c),l.uv=Be.getUV(kr,ci,ui,hi,Ui,Bi,ki,new ht)),r&&(Ui.fromBufferAttribute(r,o),Bi.fromBufferAttribute(r,a),ki.fromBufferAttribute(r,c),l.uv2=Be.getUV(kr,ci,ui,hi,Ui,Bi,ki,new ht));const u={a:o,b:a,c,normal:new F,materialIndex:0};Be.getNormal(ci,ui,hi,u.normal),l.face=u}return l}class Ai extends be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function x(p,d,_,T,g,y,E,P,D,v,A){const N=y/D,Z=E/v,H=y/2,G=E/2,z=P/2,X=D+1,nt=v+1;let $=0,O=0;const rt=new F;for(let at=0;at<nt;at++){const vt=at*Z-G;for(let j=0;j<X;j++){const lt=j*N-H;rt[p]=lt*T,rt[d]=vt*g,rt[_]=z,l.push(rt.x,rt.y,rt.z),rt[p]=0,rt[d]=0,rt[_]=P>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(j/D),h.push(1-at/v),$+=1}}for(let at=0;at<v;at++)for(let vt=0;vt<D;vt++){const j=f+vt+X*at,lt=f+vt+X*(at+1),I=f+(vt+1)+X*(at+1),M=f+(vt+1)+X*at;c.push(j,lt,M),c.push(lt,I,M),O+=6}a.addGroup(m,O,A),m+=O,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ei(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function me(s){const t={};for(let e=0;e<s.length;e++){const n=ei(s[e]);for(const i in n)t[i]=n[i]}return t}function tc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uo(s){return s.getRenderTarget()===null&&s.outputEncoding===Ht?Oe:Mi}const ec={clone:ei,merge:me};var nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nc,this.fragmentShader=ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ei(t.uniforms),this.uniformsGroups=tc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ho extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pe extends ho{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zn=-90,On=1;class rc extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pe(zn,On,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Pe(zn,On,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Pe(zn,On,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Pe(zn,On,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Pe(zn,On,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Pe(zn,On,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=je,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class fo extends xe{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Kn,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sc extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ai(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:sn});r.uniforms.tEquirect.value=e;const o=new rn(i,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Ee),new rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Gr=new F,ac=new F,oc=new Jt;class pn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Gr.subVectors(n,e).cross(ac.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oc.getNormalMatrix(t),i=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new rr,Wi=new F;class ds{constructor(t=new pn,e=new pn,n=new pn,i=new pn,r=new pn,o=new pn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],x=n[10],p=n[11],d=n[12],_=n[13],T=n[14],g=n[15];return e[0].setComponents(a-i,h-c,p-f,g-d).normalize(),e[1].setComponents(a+i,h+c,p+f,g+d).normalize(),e[2].setComponents(a+r,h+l,p+m,g+_).normalize(),e[3].setComponents(a-r,h-l,p-m,g-_).normalize(),e[4].setComponents(a-o,h-u,p-x,g-T).normalize(),e[5].setComponents(a+o,h+u,p+x,g+T).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wi.x=i.normal.x>0?t.max.x:t.min.x,Wi.y=i.normal.y>0?t.max.y:t.min.y,Wi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function po(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function lc(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,f):(e?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class ps extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,m=[],x=[],p=[],d=[];for(let _=0;_<u;_++){const T=_*f-o;for(let g=0;g<l;g++){const y=g*h-r;x.push(y,-T,0),p.push(0,0,1),d.push(g/a),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<a;T++){const g=T+l*_,y=T+l*(_+1),E=T+1+l*(_+1),P=T+1+l*_;m.push(g,y,P),m.push(y,E,P)}this.setIndex(m),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,uc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mc="vec3 transformed = vec3( position );",gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,_c=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fc="gl_FragColor = linearToOutputTexel( gl_FragColor );",zc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$c=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ru=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,su=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,bu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Nu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$u=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,th=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,nh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ih=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ah=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ph=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_h=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ch=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ph=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ih=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,It={alphamap_fragment:cc,alphamap_pars_fragment:uc,alphatest_fragment:hc,alphatest_pars_fragment:fc,aomap_fragment:dc,aomap_pars_fragment:pc,begin_vertex:mc,beginnormal_vertex:gc,bsdfs:xc,iridescence_fragment:_c,bumpmap_pars_fragment:vc,clipping_planes_fragment:yc,clipping_planes_pars_fragment:Mc,clipping_planes_pars_vertex:Sc,clipping_planes_vertex:bc,color_fragment:wc,color_pars_fragment:Tc,color_pars_vertex:Ec,color_vertex:Ac,common:Cc,cube_uv_reflection_fragment:Lc,defaultnormal_vertex:Pc,displacementmap_pars_vertex:Rc,displacementmap_vertex:Dc,emissivemap_fragment:Ic,emissivemap_pars_fragment:Nc,encodings_fragment:Fc,encodings_pars_fragment:zc,envmap_fragment:Oc,envmap_common_pars_fragment:Uc,envmap_pars_fragment:Bc,envmap_pars_vertex:kc,envmap_physical_pars_fragment:Kc,envmap_vertex:Gc,fog_vertex:Vc,fog_pars_vertex:Wc,fog_fragment:Hc,fog_pars_fragment:qc,gradientmap_pars_fragment:Xc,lightmap_fragment:Yc,lightmap_pars_fragment:jc,lights_lambert_fragment:Jc,lights_lambert_pars_fragment:Zc,lights_pars_begin:$c,lights_toon_fragment:Qc,lights_toon_pars_fragment:tu,lights_phong_fragment:eu,lights_phong_pars_fragment:nu,lights_physical_fragment:iu,lights_physical_pars_fragment:ru,lights_fragment_begin:su,lights_fragment_maps:au,lights_fragment_end:ou,logdepthbuf_fragment:lu,logdepthbuf_pars_fragment:cu,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:hu,map_fragment:fu,map_pars_fragment:du,map_particle_fragment:pu,map_particle_pars_fragment:mu,metalnessmap_fragment:gu,metalnessmap_pars_fragment:xu,morphcolor_vertex:_u,morphnormal_vertex:vu,morphtarget_pars_vertex:yu,morphtarget_vertex:Mu,normal_fragment_begin:Su,normal_fragment_maps:bu,normal_pars_fragment:wu,normal_pars_vertex:Tu,normal_vertex:Eu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Cu,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Pu,iridescence_pars_fragment:Ru,output_fragment:Du,packing:Iu,premultiplied_alpha_fragment:Nu,project_vertex:Fu,dithering_fragment:zu,dithering_pars_fragment:Ou,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Bu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:Gu,shadowmap_vertex:Vu,shadowmask_pars_fragment:Wu,skinbase_vertex:Hu,skinning_pars_vertex:qu,skinning_vertex:Xu,skinnormal_vertex:Yu,specularmap_fragment:ju,specularmap_pars_fragment:Ju,tonemapping_fragment:Zu,tonemapping_pars_fragment:$u,transmission_fragment:Ku,transmission_pars_fragment:Qu,uv_pars_fragment:th,uv_pars_vertex:eh,uv_vertex:nh,uv2_pars_fragment:ih,uv2_pars_vertex:rh,uv2_vertex:sh,worldpos_vertex:ah,background_vert:oh,background_frag:lh,backgroundCube_vert:ch,backgroundCube_frag:uh,cube_vert:hh,cube_frag:fh,depth_vert:dh,depth_frag:ph,distanceRGBA_vert:mh,distanceRGBA_frag:gh,equirect_vert:xh,equirect_frag:_h,linedashed_vert:vh,linedashed_frag:yh,meshbasic_vert:Mh,meshbasic_frag:Sh,meshlambert_vert:bh,meshlambert_frag:wh,meshmatcap_vert:Th,meshmatcap_frag:Eh,meshnormal_vert:Ah,meshnormal_frag:Ch,meshphong_vert:Lh,meshphong_frag:Ph,meshphysical_vert:Rh,meshphysical_frag:Dh,meshtoon_vert:Ih,meshtoon_frag:Nh,points_vert:Fh,points_frag:zh,shadow_vert:Oh,shadow_frag:Uh,sprite_vert:Bh,sprite_frag:kh},mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},Ue={basic:{uniforms:me([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:me([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:me([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:me([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:me([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:me([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:me([mt.points,mt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:me([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:me([mt.common,mt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:me([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:me([mt.sprite,mt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:me([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:me([mt.lights,mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ue.physical={uniforms:me([Ue.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ht(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Hi={r:0,b:0,g:0};function Gh(s,t,e,n,i,r,o){const a=new Gt(0);let c=r===!0?0:1,l,u,h=null,f=0,m=null;function x(d,_){let T=!1,g=_.isScene===!0?_.background:null;g&&g.isTexture&&(g=(_.backgroundBlurriness>0?e:t).get(g));const y=s.xr,E=y.getSession&&y.getSession();E&&E.environmentBlendMode==="additive"&&(g=null),g===null?p(a,c):g&&g.isColor&&(p(g,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ir)?(u===void 0&&(u=new rn(new Ai(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ei(Ue.backgroundCube.uniforms),vertexShader:Ue.backgroundCube.vertexShader,fragmentShader:Ue.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=g.encoding!==Ht,(h!==g||f!==g.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,m=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new rn(new ps(2,2),new bn({name:"BackgroundMaterial",uniforms:ei(Ue.background.uniforms),vertexShader:Ue.background.vertexShader,fragmentShader:Ue.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=g.encoding!==Ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=g,f=g.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,_){d.getRGB(Hi,uo(s)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:x}}function Vh(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null);let l=c,u=!1;function h(z,X,nt,$,O){let rt=!1;if(o){const at=p($,nt,X);l!==at&&(l=at,m(l.object)),rt=_(z,$,nt,O),rt&&T(z,$,nt,O)}else{const at=X.wireframe===!0;(l.geometry!==$.id||l.program!==nt.id||l.wireframe!==at)&&(l.geometry=$.id,l.program=nt.id,l.wireframe=at,rt=!0)}O!==null&&e.update(O,34963),(rt||u)&&(u=!1,v(z,X,nt,$),O!==null&&s.bindBuffer(34963,e.get(O).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(z){return n.isWebGL2?s.bindVertexArray(z):r.bindVertexArrayOES(z)}function x(z){return n.isWebGL2?s.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function p(z,X,nt){const $=nt.wireframe===!0;let O=a[z.id];O===void 0&&(O={},a[z.id]=O);let rt=O[X.id];rt===void 0&&(rt={},O[X.id]=rt);let at=rt[$];return at===void 0&&(at=d(f()),rt[$]=at),at}function d(z){const X=[],nt=[],$=[];for(let O=0;O<i;O++)X[O]=0,nt[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:nt,attributeDivisors:$,object:z,attributes:{},index:null}}function _(z,X,nt,$){const O=l.attributes,rt=X.attributes;let at=0;const vt=nt.getAttributes();for(const j in vt)if(vt[j].location>=0){const I=O[j];let M=rt[j];if(M===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(M=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(M=z.instanceColor)),I===void 0||I.attribute!==M||M&&I.data!==M.data)return!0;at++}return l.attributesNum!==at||l.index!==$}function T(z,X,nt,$){const O={},rt=X.attributes;let at=0;const vt=nt.getAttributes();for(const j in vt)if(vt[j].location>=0){let I=rt[j];I===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(I=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(I=z.instanceColor));const M={};M.attribute=I,I&&I.data&&(M.data=I.data),O[j]=M,at++}l.attributes=O,l.attributesNum=at,l.index=$}function g(){const z=l.newAttributes;for(let X=0,nt=z.length;X<nt;X++)z[X]=0}function y(z){E(z,0)}function E(z,X){const nt=l.newAttributes,$=l.enabledAttributes,O=l.attributeDivisors;nt[z]=1,$[z]===0&&(s.enableVertexAttribArray(z),$[z]=1),O[z]!==X&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,X),O[z]=X)}function P(){const z=l.newAttributes,X=l.enabledAttributes;for(let nt=0,$=X.length;nt<$;nt++)X[nt]!==z[nt]&&(s.disableVertexAttribArray(nt),X[nt]=0)}function D(z,X,nt,$,O,rt){n.isWebGL2===!0&&(nt===5124||nt===5125)?s.vertexAttribIPointer(z,X,nt,O,rt):s.vertexAttribPointer(z,X,nt,$,O,rt)}function v(z,X,nt,$){if(n.isWebGL2===!1&&(z.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const O=$.attributes,rt=nt.getAttributes(),at=X.defaultAttributeValues;for(const vt in rt){const j=rt[vt];if(j.location>=0){let lt=O[vt];if(lt===void 0&&(vt==="instanceMatrix"&&z.instanceMatrix&&(lt=z.instanceMatrix),vt==="instanceColor"&&z.instanceColor&&(lt=z.instanceColor)),lt!==void 0){const I=lt.normalized,M=lt.itemSize,w=e.get(lt);if(w===void 0)continue;const S=w.buffer,V=w.type,J=w.bytesPerElement;if(lt.isInterleavedBufferAttribute){const k=lt.data,st=k.stride,ot=lt.offset;if(k.isInstancedInterleavedBuffer){for(let ct=0;ct<j.locationSize;ct++)E(j.location+ct,k.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ct=0;ct<j.locationSize;ct++)y(j.location+ct);s.bindBuffer(34962,S);for(let ct=0;ct<j.locationSize;ct++)D(j.location+ct,M/j.locationSize,V,I,st*J,(ot+M/j.locationSize*ct)*J)}else{if(lt.isInstancedBufferAttribute){for(let k=0;k<j.locationSize;k++)E(j.location+k,lt.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let k=0;k<j.locationSize;k++)y(j.location+k);s.bindBuffer(34962,S);for(let k=0;k<j.locationSize;k++)D(j.location+k,M/j.locationSize,V,I,M*J,M/j.locationSize*k*J)}}else if(at!==void 0){const I=at[vt];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(j.location,I);break;case 3:s.vertexAttrib3fv(j.location,I);break;case 4:s.vertexAttrib4fv(j.location,I);break;default:s.vertexAttrib1fv(j.location,I)}}}}P()}function A(){H();for(const z in a){const X=a[z];for(const nt in X){const $=X[nt];for(const O in $)x($[O].object),delete $[O];delete X[nt]}delete a[z]}}function N(z){if(a[z.id]===void 0)return;const X=a[z.id];for(const nt in X){const $=X[nt];for(const O in $)x($[O].object),delete $[O];delete X[nt]}delete a[z.id]}function Z(z){for(const X in a){const nt=a[X];if(nt[z.id]===void 0)continue;const $=nt[z.id];for(const O in $)x($[O].object),delete $[O];delete nt[z.id]}}function H(){G(),u=!0,l!==c&&(l=c,m(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:G,dispose:A,releaseStatesOfGeometry:N,releaseStatesOfProgram:Z,initAttributes:g,enableAttribute:y,disableUnusedAttributes:P}}function Wh(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Hh(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),x=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),T=s.getParameter(36349),g=f>0,y=o||t.has("OES_texture_float"),E=g&&y,P=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:P}}function qh(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new pn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=s.get(h);if(!i||x===null||x.length===0||r&&!d)r?u(null):l();else{const T=r?0:n,g=T*4;let y=_.clippingState||null;c.value=y,y=u(x,f,g,m);for(let E=0;E!==g;++E)y[E]=e[E];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,x){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=c.value,x!==!0||d===null){const _=m+p*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(d===null||d.length<_)&&(d=new Float32Array(_));for(let g=0,y=m;g!==p;++g,y+=4)o.copy(h[g]).applyMatrix4(T,a),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function Xh(s){let t=new WeakMap;function e(o,a){return a===Qr?o.mapping=Kn:a===ts&&(o.mapping=Qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qr||a===ts)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class mo extends ho{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qn=4,da=[.125,.215,.35,.446,.526,.582],gn=20,Vr=new mo,pa=new Gt;let Wr=null;const mn=(1+Math.sqrt(5))/2,Bn=1/mn,ma=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,mn,Bn),new F(0,mn,-Bn),new F(Bn,0,mn),new F(-Bn,0,mn),new F(mn,Bn,0),new F(-mn,Bn,0)];class ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr),t.scissorTest=!1,qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:yi,format:De,encoding:Mn,depthBuffer:!1},i=xa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yh(r)),this._blurMaterial=jh(r,t,e)}return i}_compileMaterial(t){const e=new rn(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,i){const a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pa),u.toneMapping=je,u.autoClear=!1;const m=new oo({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),x=new rn(new Ai,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(pa),p=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):T===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const g=this._cubeSize;qi(i,T*g,_>2?g:0,g,g),u.setRenderTarget(i),p&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Kn||t.mapping===Qn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=va()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;qi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ma[(i-1)%ma.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rn(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gn-1),p=r/x,d=isFinite(r)?1+Math.floor(u*p):gn;d>gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${gn}`);const _=[];let T=0;for(let D=0;D<gn;++D){const v=D/p,A=Math.exp(-v*v/2);_.push(A),D===0?T+=A:D<d&&(T+=2*A)}for(let D=0;D<_.length;D++)_[D]=_[D]/T;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-n;const y=this._sizeLods[i],E=3*y*(i>g-qn?i-g+qn:0),P=4*(this._cubeSize-y);qi(e,E,P,3*y,2*y),c.setRenderTarget(e),c.render(h,Vr)}}function Yh(s){const t=[],e=[],n=[];let i=s;const r=s-qn+1+da.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-qn?c=da[o-s+qn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,p=3,d=2,_=1,T=new Float32Array(p*x*m),g=new Float32Array(d*x*m),y=new Float32Array(_*x*m);for(let P=0;P<m;P++){const D=P%3*2/3-1,v=P>2?0:-1,A=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];T.set(A,p*x*P),g.set(f,d*x*P);const N=[P,P,P,P,P,P];y.set(N,_*x*P)}const E=new be;E.setAttribute("position",new Ie(T,p)),E.setAttribute("uv",new Ie(g,d)),E.setAttribute("faceIndex",new Ie(y,_)),t.push(E),i>qn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xa(s,t,e){const n=new Sn(s,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jh(s,t,e){const n=new Float32Array(gn),i=new F(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function _a(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function va(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ms(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jh(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Qr||c===ts,u=c===Kn||c===Qn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ga(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new ga(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zh(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $h(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const x in f)t.update(f[x],34962);const m=h.morphAttributes;for(const x in m){const p=m[x];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function l(h){const f=[],m=h.index,x=h.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let g=0,y=T.length;g<y;g+=3){const E=T[g+0],P=T[g+1],D=T[g+2];f.push(E,P,P,D,D,E)}}else{const T=x.array;p=x.version;for(let g=0,y=T.length/3-1;g<y;g+=3){const E=g+0,P=g+1,D=g+2;f.push(E,P,P,D,D,E)}}const d=new(no(f)?co:lo)(f,1);d.version=p;const _=r.get(h);_&&t.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Kh(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*c),e.update(m,r,1)}function h(f,m,x){if(x===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*c,x),e.update(m,r,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Qh(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tf(s,t){return s[0]-t[0]}function ef(s,t){return Math.abs(t[1])-Math.abs(s[1])}function nf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ae,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let p=r.get(u);if(p===void 0||p.count!==x){let z=function(){H.dispose(),r.delete(u),u.removeEventListener("dispose",z)};p!==void 0&&p.texture.dispose();const T=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let v=0;T===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let A=u.attributes.position.count*v,N=1;A>t.maxTextureSize&&(N=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const Z=new Float32Array(A*N*4*x),H=new so(Z,A,N,x);H.type=_n,H.needsUpdate=!0;const G=v*4;for(let X=0;X<x;X++){const nt=E[X],$=P[X],O=D[X],rt=A*N*4*X;for(let at=0;at<nt.count;at++){const vt=at*G;T===!0&&(o.fromBufferAttribute(nt,at),Z[rt+vt+0]=o.x,Z[rt+vt+1]=o.y,Z[rt+vt+2]=o.z,Z[rt+vt+3]=0),g===!0&&(o.fromBufferAttribute($,at),Z[rt+vt+4]=o.x,Z[rt+vt+5]=o.y,Z[rt+vt+6]=o.z,Z[rt+vt+7]=0),y===!0&&(o.fromBufferAttribute(O,at),Z[rt+vt+8]=o.x,Z[rt+vt+9]=o.y,Z[rt+vt+10]=o.z,Z[rt+vt+11]=O.itemSize===4?o.w:1)}}p={count:x,texture:H,size:new ht(A,N)},r.set(u,p),u.addEventListener("dispose",z)}let d=0;for(let T=0;T<f.length;T++)d+=f[T];const _=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const m=f===void 0?0:f.length;let x=n[u.id];if(x===void 0||x.length!==m){x=[];for(let g=0;g<m;g++)x[g]=[g,0];n[u.id]=x}for(let g=0;g<m;g++){const y=x[g];y[0]=g,y[1]=f[g]}x.sort(ef);for(let g=0;g<8;g++)g<m&&x[g][1]?(a[g][0]=x[g][0],a[g][1]=x[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(tf);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let g=0;g<8;g++){const y=a[g],E=y[0],P=y[1];E!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+g)!==p[E]&&u.setAttribute("morphTarget"+g,p[E]),d&&u.getAttribute("morphNormal"+g)!==d[E]&&u.setAttribute("morphNormal"+g,d[E]),i[g]=P,_+=P):(p&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),d&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),i[g]=0)}const T=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function rf(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const go=new xe,xo=new so,_o=new Wl,vo=new fo,ya=[],Ma=[],Sa=new Float32Array(16),ba=new Float32Array(9),wa=new Float32Array(4);function ii(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ya[i];if(r===void 0&&(r=new Float32Array(i),ya[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function te(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ar(s,t){let e=Ma[t];e===void 0&&(e=new Int32Array(t),Ma[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;s.uniform2fv(this.addr,t),ee(e,t)}}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(te(e,t))return;s.uniform3fv(this.addr,t),ee(e,t)}}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;s.uniform4fv(this.addr,t),ee(e,t)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;wa.set(n),s.uniformMatrix2fv(this.addr,!1,wa),ee(e,n)}}function uf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;ba.set(n),s.uniformMatrix3fv(this.addr,!1,ba),ee(e,n)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Sa.set(n),s.uniformMatrix4fv(this.addr,!1,Sa),ee(e,n)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;s.uniform2iv(this.addr,t),ee(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;s.uniform3iv(this.addr,t),ee(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;s.uniform4iv(this.addr,t),ee(e,t)}}function gf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;s.uniform2uiv(this.addr,t),ee(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;s.uniform3uiv(this.addr,t),ee(e,t)}}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;s.uniform4uiv(this.addr,t),ee(e,t)}}function yf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||go,i)}function Mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_o,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vo,i)}function bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xo,i)}function wf(s){switch(s){case 5126:return sf;case 35664:return af;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return uf;case 35676:return hf;case 5124:case 35670:return ff;case 35667:case 35671:return df;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return xf;case 36295:return _f;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return bf}}function Tf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=ii(t,this.size,2);s.uniform2fv(this.addr,e)}function Af(s,t){const e=ii(t,this.size,3);s.uniform3fv(this.addr,e)}function Cf(s,t){const e=ii(t,this.size,4);s.uniform4fv(this.addr,e)}function Lf(s,t){const e=ii(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pf(s,t){const e=ii(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rf(s,t){const e=ii(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Df(s,t){s.uniform1iv(this.addr,t)}function If(s,t){s.uniform2iv(this.addr,t)}function Nf(s,t){s.uniform3iv(this.addr,t)}function Ff(s,t){s.uniform4iv(this.addr,t)}function zf(s,t){s.uniform1uiv(this.addr,t)}function Of(s,t){s.uniform2uiv(this.addr,t)}function Uf(s,t){s.uniform3uiv(this.addr,t)}function Bf(s,t){s.uniform4uiv(this.addr,t)}function kf(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||go,r[o])}function Gf(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_o,r[o])}function Vf(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vo,r[o])}function Wf(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xo,r[o])}function Hf(s){switch(s){case 5126:return Tf;case 35664:return Ef;case 35665:return Af;case 35666:return Cf;case 35674:return Lf;case 35675:return Pf;case 35676:return Rf;case 5124:case 35670:return Df;case 35667:case 35671:return If;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return zf;case 36294:return Of;case 36295:return Uf;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Wf}}class qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=wf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Hf(e.type)}}class Yf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function Ta(s,t){s.seq.push(t),s.map[t.id]=t}function jf(s,t,e){const n=s.name,i=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),o=Hr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ta(e,l===void 0?new qf(a,s,t):new Xf(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Yf(a),Ta(e,h)),e=h}}}class Qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);jf(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ea(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Jf=0;function Zf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $f(s){switch(s){case Mn:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Aa(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zf(s.getShaderSource(t),o)}else return i}function Kf(s,t){const e=$f(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qf(s,t){let e;switch(t){case cl:e="Linear";break;case ul:e="Reinhard";break;case hl:e="OptimizedCineon";break;case fl:e="ACESFilmic";break;case dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function td(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function ed(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nd(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function gi(s){return s!==""}function Ca(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function La(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const id=/^[ \t]*#include +<([\w\d./]+)>/gm;function ss(s){return s.replace(id,rd)}function rd(s,t){const e=It[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ss(e)}const sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(s){return s.replace(sd,ad)}function ad(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ra(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function od(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ja?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Go?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function ld(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Kn:case Qn:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cd(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qn:t="ENVMAP_MODE_REFRACTION";break}return t}function ud(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case us:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case ll:t="ENVMAP_BLENDING_ADD";break}return t}function hd(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fd(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=od(e),l=ld(e),u=cd(e),h=ud(e),f=hd(e),m=e.isWebGL2?"":td(e),x=ed(r),p=i.createProgram();let d,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[x].filter(gi).join(`
`),d.length>0&&(d+=`
`),_=[m,x].filter(gi).join(`
`),_.length>0&&(_+=`
`)):(d=[Ra(e),"#define SHADER_NAME "+e.shaderName,x,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),_=[m,Ra(e),"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==je?"#define TONE_MAPPING":"",e.toneMapping!==je?It.tonemapping_pars_fragment:"",e.toneMapping!==je?Qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.encodings_pars_fragment,Kf("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gi).join(`
`)),o=ss(o),o=Ca(o,e),o=La(o,e),a=ss(a),a=Ca(a,e),a=La(a,e),o=Pa(o),a=Pa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===Qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const g=T+d+o,y=T+_+a,E=Ea(i,35633,g),P=Ea(i,35632,y);if(i.attachShader(p,E),i.attachShader(p,P),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(E).trim(),Z=i.getShaderInfoLog(P).trim();let H=!0,G=!0;if(i.getProgramParameter(p,35714)===!1){H=!1;const z=Aa(i,E,"vertex"),X=Aa(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+z+`
`+X)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(N===""||Z==="")&&(G=!1);G&&(this.diagnostics={runnable:H,programLog:A,vertexShader:{log:N,prefix:d},fragmentShader:{log:Z,prefix:_}})}i.deleteShader(E),i.deleteShader(P);let D;this.getUniforms=function(){return D===void 0&&(D=new Qi(i,p)),D};let v;return this.getAttributes=function(){return v===void 0&&(v=nd(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Jf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=P,this}let dd=0;class pd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new md(t),e.set(t,n)),n}}class md{constructor(t){this.id=dd++,this.code=t,this.usedTimes=0}}function gd(s,t,e,n,i,r,o){const a=new fs,c=new pd,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,N,Z,H){const G=Z.fog,z=H.geometry,X=v.isMeshStandardMaterial?Z.environment:null,nt=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),$=nt&&nt.mapping===ir?nt.image.height:null,O=x[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=rt!==void 0?rt.length:0;let vt=0;z.morphAttributes.position!==void 0&&(vt=1),z.morphAttributes.normal!==void 0&&(vt=2),z.morphAttributes.color!==void 0&&(vt=3);let j,lt,I,M;if(O){const st=Ue[O];j=st.vertexShader,lt=st.fragmentShader}else j=v.vertexShader,lt=v.fragmentShader,c.update(v),I=c.getVertexShaderID(v),M=c.getFragmentShaderID(v);const w=s.getRenderTarget(),S=v.alphaTest>0,V=v.clearcoat>0,J=v.iridescence>0;return{isWebGL2:u,shaderID:O,shaderName:v.type,vertexShader:j,fragmentShader:lt,defines:v.defines,customVertexShaderID:I,customFragmentShaderID:M,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:w===null?s.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Mn,map:!!v.map,matcap:!!v.matcap,envMap:!!nt,envMapMode:nt&&nt.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Dl,tangentSpaceNormalMap:v.normalMapType===to,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ht,clearcoat:V,clearcoatMap:V&&!!v.clearcoatMap,clearcoatRoughnessMap:V&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:V&&!!v.clearcoatNormalMap,iridescence:J,iridescenceMap:J&&!!v.iridescenceMap,iridescenceThicknessMap:J&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===jn,alphaMap:!!v.alphaMap,alphaTest:S,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!G,useFog:v.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:vt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:je,useLegacyLights:s.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Se,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)A.push(N),A.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(A,v),T(A,v),A.push(s.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function T(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function g(v){const A=x[v.type];let N;if(A){const Z=Ue[A];N=ec.clone(Z.uniforms)}else N=v.uniforms;return N}function y(v,A){let N;for(let Z=0,H=l.length;Z<H;Z++){const G=l[Z];if(G.cacheKey===A){N=G,++N.usedTimes;break}}return N===void 0&&(N=new fd(s,A,v,r),l.push(N)),N}function E(v){if(--v.usedTimes===0){const A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),v.destroy()}}function P(v){c.remove(v)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:g,acquireProgram:y,releaseProgram:E,releaseShaderCache:P,programs:l,dispose:D}}function xd(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _d(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Da(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ia(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,m,x,p,d){let _=s[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:p,group:d},s[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=p,_.group=d),t++,_}function a(h,f,m,x,p,d){const _=o(h,f,m,x,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(h,f,m,x,p,d){const _=o(h,f,m,x,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(h,f){e.length>1&&e.sort(h||_d),n.length>1&&n.sort(f||Da),i.length>1&&i.sort(f||Da)}function u(){for(let h=t,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function vd(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ia,s.set(n,[o])):i>=r.length?(o=new Ia,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yd(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Md(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Sd=0;function bd(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wd(s,t){const e=new yd,n=Md(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,o=new Yt,a=new Yt;function c(u,h){let f=0,m=0,x=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let p=0,d=0,_=0,T=0,g=0,y=0,E=0,P=0,D=0,v=0;u.sort(bd);const A=h===!0?Math.PI:1;for(let Z=0,H=u.length;Z<H;Z++){const G=u[Z],z=G.color,X=G.intensity,nt=G.distance,$=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=z.r*X*A,m+=z.g*X*A,x+=z.b*X*A;else if(G.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(G.sh.coefficients[O],X);else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity*A),G.castShadow){const rt=G.shadow,at=n.get(G);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,i.directionalShadow[p]=at,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=G.shadow.matrix,y++}i.directional[p]=O,p++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(z).multiplyScalar(X*A),O.distance=nt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,i.spot[_]=O;const rt=G.shadow;if(G.map&&(i.spotLightMap[D]=G.map,D++,rt.updateMatrices(G),G.castShadow&&v++),i.spotLightMatrix[_]=rt.matrix,G.castShadow){const at=n.get(G);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,i.spotShadow[_]=at,i.spotShadowMap[_]=$,P++}_++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(z).multiplyScalar(X),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),i.rectArea[T]=O,T++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity*A),O.distance=G.distance,O.decay=G.decay,G.castShadow){const rt=G.shadow,at=n.get(G);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,at.shadowCameraNear=rt.camera.near,at.shadowCameraFar=rt.camera.far,i.pointShadow[d]=at,i.pointShadowMap[d]=$,i.pointShadowMatrix[d]=G.shadow.matrix,E++}i.point[d]=O,d++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(X*A),O.groundColor.copy(G.groundColor).multiplyScalar(X*A),i.hemi[g]=O,g++}}T>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const N=i.hash;(N.directionalLength!==p||N.pointLength!==d||N.spotLength!==_||N.rectAreaLength!==T||N.hemiLength!==g||N.numDirectionalShadows!==y||N.numPointShadows!==E||N.numSpotShadows!==P||N.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=T,i.point.length=d,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=P+D-v,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=v,N.directionalLength=p,N.pointLength=d,N.spotLength=_,N.rectAreaLength=T,N.hemiLength=g,N.numDirectionalShadows=y,N.numPointShadows=E,N.numSpotShadows=P,N.numSpotMaps=D,i.version=Sd++)}function l(u,h){let f=0,m=0,x=0,p=0,d=0;const _=h.matrixWorldInverse;for(let T=0,g=u.length;T<g;T++){const y=u[T];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),f++}else if(y.isSpotLight){const E=i.spot[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),x++}else if(y.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:i}}function Na(s,t){const e=new wd(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Td(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Na(s,t),e.set(r,[c])):o>=a.length?(c=new Na(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ed extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ad extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ld=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pd(s,t,e){let n=new ds;const i=new ht,r=new ht,o=new ae,a=new Ed({depthPacking:Rl}),c=new Ad,l={},u=e.maxTextureSize,h={[an]:Se,[Se]:an,[tn]:tn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Cd,fragmentShader:Ld}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new be;x.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new rn(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja,this.render=function(y,E,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const D=s.getRenderTarget(),v=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),N=s.state;N.setBlending(sn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let Z=0,H=y.length;Z<H;Z++){const G=y[Z],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,z.mapSize.y=r.y)),z.map===null){const $=this.type!==mi?{minFilter:ge,magFilter:ge}:{};z.map=new Sn(i.x,i.y,$),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const nt=z.getViewportCount();for(let $=0;$<nt;$++){const O=z.getViewport($);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),N.viewport(o),z.updateMatrices(G,$),n=z.getFrustum(),g(E,P,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&_(z,P),z.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(D,v,A)};function _(y,E){const P=t.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Sn(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(E,null,P,f,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(E,null,P,m,p,null)}function T(y,E,P,D,v,A){let N=null;const Z=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0)N=Z;else if(N=P.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=N.uuid,G=E.uuid;let z=l[H];z===void 0&&(z={},l[H]=z);let X=z[G];X===void 0&&(X=N.clone(),z[G]=X),N=X}return N.visible=E.visible,N.wireframe=E.wireframe,A===mi?N.side=E.shadowSide!==null?E.shadowSide:E.side:N.side=E.shadowSide!==null?E.shadowSide:h[E.side],N.alphaMap=E.alphaMap,N.alphaTest=E.alphaTest,N.map=E.map,N.clipShadows=E.clipShadows,N.clippingPlanes=E.clippingPlanes,N.clipIntersection=E.clipIntersection,N.displacementMap=E.displacementMap,N.displacementScale=E.displacementScale,N.displacementBias=E.displacementBias,N.wireframeLinewidth=E.wireframeLinewidth,N.linewidth=E.linewidth,P.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(P.matrixWorld),N.nearDistance=D,N.farDistance=v),N}function g(y,E,P,D,v){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===mi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const Z=t.update(y),H=y.material;if(Array.isArray(H)){const G=Z.groups;for(let z=0,X=G.length;z<X;z++){const nt=G[z],$=H[nt.materialIndex];if($&&$.visible){const O=T(y,$,D,P.near,P.far,v);s.renderBufferDirect(P,null,Z,O,y,nt)}}}else if(H.visible){const G=T(y,H,D,P.near,P.far,v);s.renderBufferDirect(P,null,Z,G,y,null)}}const N=y.children;for(let Z=0,H=N.length;Z<H;Z++)g(N[Z],E,P,D,v)}}function Rd(s,t,e){const n=e.isWebGL2;function i(){let U=!1;const Q=new ae;let ft=null;const St=new ae(0,0,0,0);return{setMask:function(wt){ft!==wt&&!U&&(s.colorMask(wt,wt,wt,wt),ft=wt)},setLocked:function(wt){U=wt},setClear:function(wt,Wt,ie,he,Ne){Ne===!0&&(wt*=he,Wt*=he,ie*=he),Q.set(wt,Wt,ie,he),St.equals(Q)===!1&&(s.clearColor(wt,Wt,ie,he),St.copy(Q))},reset:function(){U=!1,ft=null,St.set(-1,0,0,0)}}}function r(){let U=!1,Q=null,ft=null,St=null;return{setTest:function(wt){wt?S(2929):V(2929)},setMask:function(wt){Q!==wt&&!U&&(s.depthMask(wt),Q=wt)},setFunc:function(wt){if(ft!==wt){switch(wt){case tl:s.depthFunc(512);break;case el:s.depthFunc(519);break;case nl:s.depthFunc(513);break;case Kr:s.depthFunc(515);break;case il:s.depthFunc(514);break;case rl:s.depthFunc(518);break;case sl:s.depthFunc(516);break;case al:s.depthFunc(517);break;default:s.depthFunc(515)}ft=wt}},setLocked:function(wt){U=wt},setClear:function(wt){St!==wt&&(s.clearDepth(wt),St=wt)},reset:function(){U=!1,Q=null,ft=null,St=null}}}function o(){let U=!1,Q=null,ft=null,St=null,wt=null,Wt=null,ie=null,he=null,Ne=null;return{setTest:function(jt){U||(jt?S(2960):V(2960))},setMask:function(jt){Q!==jt&&!U&&(s.stencilMask(jt),Q=jt)},setFunc:function(jt,we,Fe){(ft!==jt||St!==we||wt!==Fe)&&(s.stencilFunc(jt,we,Fe),ft=jt,St=we,wt=Fe)},setOp:function(jt,we,Fe){(Wt!==jt||ie!==we||he!==Fe)&&(s.stencilOp(jt,we,Fe),Wt=jt,ie=we,he=Fe)},setLocked:function(jt){U=jt},setClear:function(jt){Ne!==jt&&(s.clearStencil(jt),Ne=jt)},reset:function(){U=!1,Q=null,ft=null,St=null,wt=null,Wt=null,ie=null,he=null,Ne=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,p=[],d=null,_=!1,T=null,g=null,y=null,E=null,P=null,D=null,v=null,A=!1,N=null,Z=null,H=null,G=null,z=null;const X=s.getParameter(35661);let nt=!1,$=0;const O=s.getParameter(7938);O.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(O)[1]),nt=$>=1):O.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),nt=$>=2);let rt=null,at={};const vt=s.getParameter(3088),j=s.getParameter(2978),lt=new ae().fromArray(vt),I=new ae().fromArray(j);function M(U,Q,ft){const St=new Uint8Array(4),wt=s.createTexture();s.bindTexture(U,wt),s.texParameteri(U,10241,9728),s.texParameteri(U,10240,9728);for(let Wt=0;Wt<ft;Wt++)s.texImage2D(Q+Wt,0,6408,1,1,0,6408,5121,St);return wt}const w={};w[3553]=M(3553,3553,1),w[34067]=M(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),S(2929),c.setFunc(Kr),gt(!1),xt(bs),S(2884),et(sn);function S(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function V(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function J(U,Q){return m[U]!==Q?(s.bindFramebuffer(U,Q),m[U]=Q,n&&(U===36009&&(m[36160]=Q),U===36160&&(m[36009]=Q)),!0):!1}function k(U,Q){let ft=p,St=!1;if(U)if(ft=x.get(Q),ft===void 0&&(ft=[],x.set(Q,ft)),U.isWebGLMultipleRenderTargets){const wt=U.texture;if(ft.length!==wt.length||ft[0]!==36064){for(let Wt=0,ie=wt.length;Wt<ie;Wt++)ft[Wt]=36064+Wt;ft.length=wt.length,St=!0}}else ft[0]!==36064&&(ft[0]=36064,St=!0);else ft[0]!==1029&&(ft[0]=1029,St=!0);St&&(e.isWebGL2?s.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function st(U){return d!==U?(s.useProgram(U),d=U,!0):!1}const ot={[Hn]:32774,[Wo]:32778,[Ho]:32779};if(n)ot[As]=32775,ot[Cs]=32776;else{const U=t.get("EXT_blend_minmax");U!==null&&(ot[As]=U.MIN_EXT,ot[Cs]=U.MAX_EXT)}const ct={[qo]:0,[Xo]:1,[Yo]:768,[Za]:770,[Qo]:776,[$o]:774,[Jo]:772,[jo]:769,[$a]:771,[Ko]:775,[Zo]:773};function et(U,Q,ft,St,wt,Wt,ie,he){if(U===sn){_===!0&&(V(3042),_=!1);return}if(_===!1&&(S(3042),_=!0),U!==Vo){if(U!==T||he!==A){if((g!==Hn||P!==Hn)&&(s.blendEquation(32774),g=Hn,P=Hn),he)switch(U){case jn:s.blendFuncSeparate(1,771,1,771);break;case ws:s.blendFunc(1,1);break;case Ts:s.blendFuncSeparate(0,769,0,1);break;case Es:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case jn:s.blendFuncSeparate(770,771,1,771);break;case ws:s.blendFunc(770,1);break;case Ts:s.blendFuncSeparate(0,769,0,1);break;case Es:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,E=null,D=null,v=null,T=U,A=he}return}wt=wt||Q,Wt=Wt||ft,ie=ie||St,(Q!==g||wt!==P)&&(s.blendEquationSeparate(ot[Q],ot[wt]),g=Q,P=wt),(ft!==y||St!==E||Wt!==D||ie!==v)&&(s.blendFuncSeparate(ct[ft],ct[St],ct[Wt],ct[ie]),y=ft,E=St,D=Wt,v=ie),T=U,A=!1}function ut(U,Q){U.side===tn?V(2884):S(2884);let ft=U.side===Se;Q&&(ft=!ft),gt(ft),U.blending===jn&&U.transparent===!1?et(sn):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);const St=U.stencilWrite;l.setTest(St),St&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),R(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?S(32926):V(32926)}function gt(U){N!==U&&(U?s.frontFace(2304):s.frontFace(2305),N=U)}function xt(U){U!==Bo?(S(2884),U!==Z&&(U===bs?s.cullFace(1029):U===ko?s.cullFace(1028):s.cullFace(1032))):V(2884),Z=U}function B(U){U!==H&&(nt&&s.lineWidth(U),H=U)}function R(U,Q,ft){U?(S(32823),(G!==Q||z!==ft)&&(s.polygonOffset(Q,ft),G=Q,z=ft)):V(32823)}function Mt(U){U?S(3089):V(3089)}function Rt(U){U===void 0&&(U=33984+X-1),rt!==U&&(s.activeTexture(U),rt=U)}function L(U,Q,ft){ft===void 0&&(rt===null?ft=33984+X-1:ft=rt);let St=at[ft];St===void 0&&(St={type:void 0,texture:void 0},at[ft]=St),(St.type!==U||St.texture!==Q)&&(rt!==ft&&(s.activeTexture(ft),rt=ft),s.bindTexture(U,Q||w[U]),St.type=U,St.texture=Q)}function b(){const U=at[rt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(U){lt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function Et(U){I.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),I.copy(U))}function Bt(U,Q){let ft=h.get(Q);ft===void 0&&(ft=new WeakMap,h.set(Q,ft));let St=ft.get(U);St===void 0&&(St=s.getUniformBlockIndex(Q,U.name),ft.set(U,St))}function qt(U,Q){const St=h.get(Q).get(U);u.get(Q)!==St&&(s.uniformBlockBinding(Q,St,U.__bindingPointIndex),u.set(Q,St))}function ne(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},rt=null,at={},m={},x=new WeakMap,p=[],d=null,_=!1,T=null,g=null,y=null,E=null,P=null,D=null,v=null,A=!1,N=null,Z=null,H=null,G=null,z=null,lt.set(0,0,s.canvas.width,s.canvas.height),I.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:S,disable:V,bindFramebuffer:J,drawBuffers:k,useProgram:st,setBlending:et,setMaterial:ut,setFlipSided:gt,setCullFace:xt,setLineWidth:B,setPolygonOffset:R,setScissorTest:Mt,activeTexture:Rt,bindTexture:L,unbindTexture:b,compressedTexImage2D:Y,compressedTexImage3D:dt,texImage2D:bt,texImage3D:Pt,updateUBOMapping:Bt,uniformBlockBinding:qt,texStorage2D:it,texStorage3D:Lt,texSubImage2D:pt,texSubImage3D:_t,compressedTexSubImage2D:Tt,compressedTexSubImage3D:yt,scissor:At,viewport:Et,reset:ne}}function Dd(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return _?new OffscreenCanvas(L,b):Si("canvas")}function g(L,b,Y,dt){let pt=1;if((L.width>dt||L.height>dt)&&(pt=dt/Math.max(L.width,L.height)),pt<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const _t=b?Fl:Math.floor,Tt=_t(pt*L.width),yt=_t(pt*L.height);p===void 0&&(p=T(Tt,yt));const it=Y?T(Tt,yt):p;return it.width=Tt,it.height=yt,it.getContext("2d").drawImage(L,0,0,Tt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Tt+"x"+yt+")."),it}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return ea(L.width)&&ea(L.height)}function E(L){return a?!1:L.wrapS!==Re||L.wrapT!==Re||L.minFilter!==ge&&L.minFilter!==Ee}function P(L,b){return L.generateMipmaps&&b&&L.minFilter!==ge&&L.minFilter!==Ee}function D(L){s.generateMipmap(L)}function v(L,b,Y,dt,pt=!1){if(a===!1)return b;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t=b;return b===6403&&(Y===5126&&(_t=33326),Y===5131&&(_t=33325),Y===5121&&(_t=33321)),b===33319&&(Y===5126&&(_t=33328),Y===5131&&(_t=33327),Y===5121&&(_t=33323)),b===6408&&(Y===5126&&(_t=34836),Y===5131&&(_t=34842),Y===5121&&(_t=dt===Ht&&pt===!1?35907:32856),Y===32819&&(_t=32854),Y===32820&&(_t=32855)),(_t===33325||_t===33326||_t===33327||_t===33328||_t===34842||_t===34836)&&t.get("EXT_color_buffer_float"),_t}function A(L,b,Y){return P(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==ge&&L.minFilter!==Ee?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function N(L){return L===ge||L===Ls||L===pr?9728:9729}function Z(L){const b=L.target;b.removeEventListener("dispose",Z),G(b),b.isVideoTexture&&x.delete(b)}function H(L){const b=L.target;b.removeEventListener("dispose",H),X(b)}function G(L){const b=n.get(L);if(b.__webglInit===void 0)return;const Y=L.source,dt=d.get(Y);if(dt){const pt=dt[b.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&z(L),Object.keys(dt).length===0&&d.delete(Y)}n.remove(L)}function z(L){const b=n.get(L);s.deleteTexture(b.__webglTexture);const Y=L.source,dt=d.get(Y);delete dt[b.__cacheKey],o.memory.textures--}function X(L){const b=L.texture,Y=n.get(L),dt=n.get(b);if(dt.__webglTexture!==void 0&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++)s.deleteFramebuffer(Y.__webglFramebuffer[pt]),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[pt]);else{if(s.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let pt=0;pt<Y.__webglColorRenderbuffer.length;pt++)Y.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[pt]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let pt=0,_t=b.length;pt<_t;pt++){const Tt=n.get(b[pt]);Tt.__webglTexture&&(s.deleteTexture(Tt.__webglTexture),o.memory.textures--),n.remove(b[pt])}n.remove(b),n.remove(L)}let nt=0;function $(){nt=0}function O(){const L=nt;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),nt+=1,L}function rt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.encoding),b.join()}function at(L,b){const Y=n.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const dt=L.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Y,L,b);return}}e.bindTexture(3553,Y.__webglTexture,33984+b)}function vt(L,b){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){V(Y,L,b);return}e.bindTexture(35866,Y.__webglTexture,33984+b)}function j(L,b){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){V(Y,L,b);return}e.bindTexture(32879,Y.__webglTexture,33984+b)}function lt(L,b){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){J(Y,L,b);return}e.bindTexture(34067,Y.__webglTexture,33984+b)}const I={[es]:10497,[Re]:33071,[ns]:33648},M={[ge]:9728,[Ls]:9984,[pr]:9986,[Ee]:9729,[pl]:9985,[vi]:9987};function w(L,b,Y){if(Y?(s.texParameteri(L,10242,I[b.wrapS]),s.texParameteri(L,10243,I[b.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,I[b.wrapR]),s.texParameteri(L,10240,M[b.magFilter]),s.texParameteri(L,10241,M[b.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(b.wrapS!==Re||b.wrapT!==Re)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,N(b.magFilter)),s.texParameteri(L,10241,N(b.minFilter)),b.minFilter!==ge&&b.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const dt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===ge||b.minFilter!==pr&&b.minFilter!==vi||b.type===_n&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===yi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(L,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function S(L,b){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",Z));const dt=b.source;let pt=d.get(dt);pt===void 0&&(pt={},d.set(dt,pt));const _t=rt(b);if(_t!==L.__cacheKey){pt[_t]===void 0&&(pt[_t]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),pt[_t].usedTimes++;const Tt=pt[L.__cacheKey];Tt!==void 0&&(pt[L.__cacheKey].usedTimes--,Tt.usedTimes===0&&z(b)),L.__cacheKey=_t,L.__webglTexture=pt[_t].texture}return Y}function V(L,b,Y){let dt=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=35866),b.isData3DTexture&&(dt=32879);const pt=S(L,b),_t=b.source;e.bindTexture(dt,L.__webglTexture,33984+Y);const Tt=n.get(_t);if(_t.version!==Tt.__version||pt===!0){e.activeTexture(33984+Y),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const yt=E(b)&&y(b.image)===!1;let it=g(b.image,yt,!1,u);it=Rt(b,it);const Lt=y(it)||a,bt=r.convert(b.format,b.encoding);let Pt=r.convert(b.type),At=v(b.internalFormat,bt,Pt,b.encoding,b.isVideoTexture);w(dt,b,Lt);let Et;const Bt=b.mipmaps,qt=a&&b.isVideoTexture!==!0,ne=Tt.__version===void 0||pt===!0,U=A(b,it,Lt);if(b.isDepthTexture)At=6402,a?b.type===_n?At=36012:b.type===xn?At=33190:b.type===Jn?At=35056:At=33189:b.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===vn&&At===6402&&b.type!==Qa&&b.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=xn,Pt=r.convert(b.type)),b.format===ti&&At===6402&&(At=34041,b.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Jn,Pt=r.convert(b.type))),ne&&(qt?e.texStorage2D(3553,1,At,it.width,it.height):e.texImage2D(3553,0,At,it.width,it.height,0,bt,Pt,null));else if(b.isDataTexture)if(Bt.length>0&&Lt){qt&&ne&&e.texStorage2D(3553,U,At,Bt[0].width,Bt[0].height);for(let Q=0,ft=Bt.length;Q<ft;Q++)Et=Bt[Q],qt?e.texSubImage2D(3553,Q,0,0,Et.width,Et.height,bt,Pt,Et.data):e.texImage2D(3553,Q,At,Et.width,Et.height,0,bt,Pt,Et.data);b.generateMipmaps=!1}else qt?(ne&&e.texStorage2D(3553,U,At,it.width,it.height),e.texSubImage2D(3553,0,0,0,it.width,it.height,bt,Pt,it.data)):e.texImage2D(3553,0,At,it.width,it.height,0,bt,Pt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&ne&&e.texStorage3D(35866,U,At,Bt[0].width,Bt[0].height,it.depth);for(let Q=0,ft=Bt.length;Q<ft;Q++)Et=Bt[Q],b.format!==De?bt!==null?qt?e.compressedTexSubImage3D(35866,Q,0,0,0,Et.width,Et.height,it.depth,bt,Et.data,0,0):e.compressedTexImage3D(35866,Q,At,Et.width,Et.height,it.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(35866,Q,0,0,0,Et.width,Et.height,it.depth,bt,Pt,Et.data):e.texImage3D(35866,Q,At,Et.width,Et.height,it.depth,0,bt,Pt,Et.data)}else{qt&&ne&&e.texStorage2D(3553,U,At,Bt[0].width,Bt[0].height);for(let Q=0,ft=Bt.length;Q<ft;Q++)Et=Bt[Q],b.format!==De?bt!==null?qt?e.compressedTexSubImage2D(3553,Q,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(3553,Q,At,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(3553,Q,0,0,Et.width,Et.height,bt,Pt,Et.data):e.texImage2D(3553,Q,At,Et.width,Et.height,0,bt,Pt,Et.data)}else if(b.isDataArrayTexture)qt?(ne&&e.texStorage3D(35866,U,At,it.width,it.height,it.depth),e.texSubImage3D(35866,0,0,0,0,it.width,it.height,it.depth,bt,Pt,it.data)):e.texImage3D(35866,0,At,it.width,it.height,it.depth,0,bt,Pt,it.data);else if(b.isData3DTexture)qt?(ne&&e.texStorage3D(32879,U,At,it.width,it.height,it.depth),e.texSubImage3D(32879,0,0,0,0,it.width,it.height,it.depth,bt,Pt,it.data)):e.texImage3D(32879,0,At,it.width,it.height,it.depth,0,bt,Pt,it.data);else if(b.isFramebufferTexture){if(ne)if(qt)e.texStorage2D(3553,U,At,it.width,it.height);else{let Q=it.width,ft=it.height;for(let St=0;St<U;St++)e.texImage2D(3553,St,At,Q,ft,0,bt,Pt,null),Q>>=1,ft>>=1}}else if(Bt.length>0&&Lt){qt&&ne&&e.texStorage2D(3553,U,At,Bt[0].width,Bt[0].height);for(let Q=0,ft=Bt.length;Q<ft;Q++)Et=Bt[Q],qt?e.texSubImage2D(3553,Q,0,0,bt,Pt,Et):e.texImage2D(3553,Q,At,bt,Pt,Et);b.generateMipmaps=!1}else qt?(ne&&e.texStorage2D(3553,U,At,it.width,it.height),e.texSubImage2D(3553,0,0,0,bt,Pt,it)):e.texImage2D(3553,0,At,bt,Pt,it);P(b,Lt)&&D(dt),Tt.__version=_t.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function J(L,b,Y){if(b.image.length!==6)return;const dt=S(L,b),pt=b.source;e.bindTexture(34067,L.__webglTexture,33984+Y);const _t=n.get(pt);if(pt.version!==_t.__version||dt===!0){e.activeTexture(33984+Y),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,it=[];for(let Q=0;Q<6;Q++)!Tt&&!yt?it[Q]=g(b.image[Q],!1,!0,l):it[Q]=yt?b.image[Q].image:b.image[Q],it[Q]=Rt(b,it[Q]);const Lt=it[0],bt=y(Lt)||a,Pt=r.convert(b.format,b.encoding),At=r.convert(b.type),Et=v(b.internalFormat,Pt,At,b.encoding),Bt=a&&b.isVideoTexture!==!0,qt=_t.__version===void 0||dt===!0;let ne=A(b,Lt,bt);w(34067,b,bt);let U;if(Tt){Bt&&qt&&e.texStorage2D(34067,ne,Et,Lt.width,Lt.height);for(let Q=0;Q<6;Q++){U=it[Q].mipmaps;for(let ft=0;ft<U.length;ft++){const St=U[ft];b.format!==De?Pt!==null?Bt?e.compressedTexSubImage2D(34069+Q,ft,0,0,St.width,St.height,Pt,St.data):e.compressedTexImage2D(34069+Q,ft,Et,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(34069+Q,ft,0,0,St.width,St.height,Pt,At,St.data):e.texImage2D(34069+Q,ft,Et,St.width,St.height,0,Pt,At,St.data)}}}else{U=b.mipmaps,Bt&&qt&&(U.length>0&&ne++,e.texStorage2D(34067,ne,Et,it[0].width,it[0].height));for(let Q=0;Q<6;Q++)if(yt){Bt?e.texSubImage2D(34069+Q,0,0,0,it[Q].width,it[Q].height,Pt,At,it[Q].data):e.texImage2D(34069+Q,0,Et,it[Q].width,it[Q].height,0,Pt,At,it[Q].data);for(let ft=0;ft<U.length;ft++){const wt=U[ft].image[Q].image;Bt?e.texSubImage2D(34069+Q,ft+1,0,0,wt.width,wt.height,Pt,At,wt.data):e.texImage2D(34069+Q,ft+1,Et,wt.width,wt.height,0,Pt,At,wt.data)}}else{Bt?e.texSubImage2D(34069+Q,0,0,0,Pt,At,it[Q]):e.texImage2D(34069+Q,0,Et,Pt,At,it[Q]);for(let ft=0;ft<U.length;ft++){const St=U[ft];Bt?e.texSubImage2D(34069+Q,ft+1,0,0,Pt,At,St.image[Q]):e.texImage2D(34069+Q,ft+1,Et,Pt,At,St.image[Q])}}}P(b,bt)&&D(34067),_t.__version=pt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function k(L,b,Y,dt,pt){const _t=r.convert(Y.format,Y.encoding),Tt=r.convert(Y.type),yt=v(Y.internalFormat,_t,Tt,Y.encoding);n.get(b).__hasExternalTextures||(pt===32879||pt===35866?e.texImage3D(pt,0,yt,b.width,b.height,b.depth,0,_t,Tt,null):e.texImage2D(pt,0,yt,b.width,b.height,0,_t,Tt,null)),e.bindFramebuffer(36160,L),R(b)?f.framebufferTexture2DMultisampleEXT(36160,dt,pt,n.get(Y).__webglTexture,0,B(b)):(pt===3553||pt>=34069&&pt<=34074)&&s.framebufferTexture2D(36160,dt,pt,n.get(Y).__webglTexture,0),e.bindFramebuffer(36160,null)}function st(L,b,Y){if(s.bindRenderbuffer(36161,L),b.depthBuffer&&!b.stencilBuffer){let dt=33189;if(Y||R(b)){const pt=b.depthTexture;pt&&pt.isDepthTexture&&(pt.type===_n?dt=36012:pt.type===xn&&(dt=33190));const _t=B(b);R(b)?f.renderbufferStorageMultisampleEXT(36161,_t,dt,b.width,b.height):s.renderbufferStorageMultisample(36161,_t,dt,b.width,b.height)}else s.renderbufferStorage(36161,dt,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(b.depthBuffer&&b.stencilBuffer){const dt=B(b);Y&&R(b)===!1?s.renderbufferStorageMultisample(36161,dt,35056,b.width,b.height):R(b)?f.renderbufferStorageMultisampleEXT(36161,dt,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const dt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let pt=0;pt<dt.length;pt++){const _t=dt[pt],Tt=r.convert(_t.format,_t.encoding),yt=r.convert(_t.type),it=v(_t.internalFormat,Tt,yt,_t.encoding),Lt=B(b);Y&&R(b)===!1?s.renderbufferStorageMultisample(36161,Lt,it,b.width,b.height):R(b)?f.renderbufferStorageMultisampleEXT(36161,Lt,it,b.width,b.height):s.renderbufferStorage(36161,it,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function ot(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);const dt=n.get(b.depthTexture).__webglTexture,pt=B(b);if(b.depthTexture.format===vn)R(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,dt,0,pt):s.framebufferTexture2D(36160,36096,3553,dt,0);else if(b.depthTexture.format===ti)R(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,dt,0,pt):s.framebufferTexture2D(36160,33306,3553,dt,0);else throw new Error("Unknown depthTexture format")}function ct(L){const b=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ot(b.__webglFramebuffer,L)}else if(Y){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(36160,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]=s.createRenderbuffer(),st(b.__webglDepthbuffer[dt],L,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),st(b.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function et(L,b,Y){const dt=n.get(L);b!==void 0&&k(dt.__webglFramebuffer,L,L.texture,36064,3553),Y!==void 0&&ct(L)}function ut(L){const b=L.texture,Y=n.get(L),dt=n.get(b);L.addEventListener("dispose",H),L.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=b.version,o.memory.textures++);const pt=L.isWebGLCubeRenderTarget===!0,_t=L.isWebGLMultipleRenderTargets===!0,Tt=y(L)||a;if(pt){Y.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)Y.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(Y.__webglFramebuffer=s.createFramebuffer(),_t)if(i.drawBuffers){const yt=L.texture;for(let it=0,Lt=yt.length;it<Lt;it++){const bt=n.get(yt[it]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&R(L)===!1){const yt=_t?b:[b];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let it=0;it<yt.length;it++){const Lt=yt[it];Y.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[it]);const bt=r.convert(Lt.format,Lt.encoding),Pt=r.convert(Lt.type),At=v(Lt.internalFormat,bt,Pt,Lt.encoding,L.isXRRenderTarget===!0),Et=B(L);s.renderbufferStorageMultisample(36161,Et,At,L.width,L.height),s.framebufferRenderbuffer(36160,36064+it,36161,Y.__webglColorRenderbuffer[it])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),st(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(pt){e.bindTexture(34067,dt.__webglTexture),w(34067,b,Tt);for(let yt=0;yt<6;yt++)k(Y.__webglFramebuffer[yt],L,b,36064,34069+yt);P(b,Tt)&&D(34067),e.unbindTexture()}else if(_t){const yt=L.texture;for(let it=0,Lt=yt.length;it<Lt;it++){const bt=yt[it],Pt=n.get(bt);e.bindTexture(3553,Pt.__webglTexture),w(3553,bt,Tt),k(Y.__webglFramebuffer,L,bt,36064+it,3553),P(bt,Tt)&&D(3553)}e.unbindTexture()}else{let yt=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?yt=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,dt.__webglTexture),w(yt,b,Tt),k(Y.__webglFramebuffer,L,b,36064,yt),P(b,Tt)&&D(yt),e.unbindTexture()}L.depthBuffer&&ct(L)}function gt(L){const b=y(L)||a,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let dt=0,pt=Y.length;dt<pt;dt++){const _t=Y[dt];if(P(_t,b)){const Tt=L.isWebGLCubeRenderTarget?34067:3553,yt=n.get(_t).__webglTexture;e.bindTexture(Tt,yt),D(Tt),e.unbindTexture()}}}function xt(L){if(a&&L.samples>0&&R(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,dt=L.height;let pt=16384;const _t=[],Tt=L.stencilBuffer?33306:36096,yt=n.get(L),it=L.isWebGLMultipleRenderTargets===!0;if(it)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(36160,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Lt,36161,null),e.bindFramebuffer(36160,yt.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Lt,3553,null,0);e.bindFramebuffer(36008,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,yt.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){_t.push(36064+Lt),L.depthBuffer&&_t.push(Tt);const bt=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(bt===!1&&(L.depthBuffer&&(pt|=256),L.stencilBuffer&&(pt|=1024)),it&&s.framebufferRenderbuffer(36008,36064,36161,yt.__webglColorRenderbuffer[Lt]),bt===!0&&(s.invalidateFramebuffer(36008,[Tt]),s.invalidateFramebuffer(36009,[Tt])),it){const Pt=n.get(b[Lt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Pt,0)}s.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,pt,9728),m&&s.invalidateFramebuffer(36008,_t)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),it)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(36160,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Lt,36161,yt.__webglColorRenderbuffer[Lt]);const bt=n.get(b[Lt]).__webglTexture;e.bindFramebuffer(36160,yt.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Lt,3553,bt,0)}e.bindFramebuffer(36009,yt.__webglMultisampledFramebuffer)}}function B(L){return Math.min(h,L.samples)}function R(L){const b=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Mt(L){const b=o.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function Rt(L,b){const Y=L.encoding,dt=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===rs||Y!==Mn&&(Y===Ht?a===!1?t.has("EXT_sRGB")===!0&&dt===De?(L.format=rs,L.minFilter=Ee,L.generateMipmaps=!1):b=io.sRGBToLinear(b):(dt!==De||pt!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),b}this.allocateTextureUnit=O,this.resetTextureUnits=$,this.setTexture2D=at,this.setTexture2DArray=vt,this.setTexture3D=j,this.setTextureCube=lt,this.rebindTextures=et,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=k,this.useMultisampledRTT=R}function Id(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===yn)return 5121;if(r===_l)return 32819;if(r===vl)return 32820;if(r===ml)return 5120;if(r===gl)return 5122;if(r===Qa)return 5123;if(r===xl)return 5124;if(r===xn)return 5125;if(r===_n)return 5126;if(r===yi)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yl)return 6406;if(r===De)return 6408;if(r===Ml)return 6409;if(r===Sl)return 6410;if(r===vn)return 6402;if(r===ti)return 34041;if(r===rs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bl)return 6403;if(r===wl)return 36244;if(r===Tl)return 33319;if(r===El)return 33320;if(r===Al)return 36249;if(r===mr||r===gr||r===xr||r===_r)if(o===Ht)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ps||r===Rs||r===Ds||r===Is)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ps)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ds)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Is)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ns||r===Fs)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ns)return o===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zs||r===Os||r===Us||r===Bs||r===ks||r===Gs||r===Vs||r===Ws||r===Hs||r===qs||r===Xs||r===Ys||r===js||r===Js)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Os)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Us)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ks)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ws)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xs)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ys)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===js)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Js)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===vr)return o===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ll||r===Zs||r===$s||r===Ks)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===vr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$s)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ks)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Nd extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xn extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n),_=this._getHandJoint(l,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class zd extends xe{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:vn,u!==vn&&u!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vn&&(n=xn),n===void 0&&u===ti&&(n=Jn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ge,this.minFilter=c!==void 0?c:ge,this.flipY=!1,this.generateMipmaps=!1}}class Od extends ni{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,x=null;const p=e.getContextAttributes();let d=null,_=null;const T=[],g=[],y=new Set,E=new Map,P=new Pe;P.layers.enable(1),P.viewport=new ae;const D=new Pe;D.layers.enable(2),D.viewport=new ae;const v=[P,D],A=new Nd;A.layers.enable(1),A.layers.enable(2);let N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=T[j];return lt===void 0&&(lt=new qr,T[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=T[j];return lt===void 0&&(lt=new qr,T[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=T[j];return lt===void 0&&(lt=new qr,T[j]=lt),lt.getHandSpace()};function H(j){const lt=g.indexOf(j.inputSource);if(lt===-1)return;const I=T[lt];I!==void 0&&I.dispatchEvent({type:j.type,data:j.inputSource})}function G(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",z);for(let j=0;j<T.length;j++){const lt=g[j];lt!==null&&(g[j]=null,T[j].disconnect(lt))}N=null,Z=null,t.setRenderTarget(d),m=null,f=null,h=null,i=null,_=null,vt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",G),i.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const lt={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:m}),_=new Sn(m.framebufferWidth,m.framebufferHeight,{format:De,type:yn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let lt=null,I=null,M=null;p.depth&&(M=p.stencil?35056:33190,lt=p.stencil?ti:vn,I=p.stencil?Jn:xn);const w={colorFormat:32856,depthFormat:M,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(w),i.updateRenderState({layers:[f]}),_=new Sn(f.textureWidth,f.textureHeight,{format:De,type:yn,depthTexture:new zd(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const S=t.properties.get(_);S.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(j){for(let lt=0;lt<j.removed.length;lt++){const I=j.removed[lt],M=g.indexOf(I);M>=0&&(g[M]=null,T[M].disconnect(I))}for(let lt=0;lt<j.added.length;lt++){const I=j.added[lt];let M=g.indexOf(I);if(M===-1){for(let S=0;S<T.length;S++)if(S>=g.length){g.push(I),M=S;break}else if(g[S]===null){g[S]=I,M=S;break}if(M===-1)break}const w=T[M];w&&w.connect(I)}}const X=new F,nt=new F;function $(j,lt,I){X.setFromMatrixPosition(lt.matrixWorld),nt.setFromMatrixPosition(I.matrixWorld);const M=X.distanceTo(nt),w=lt.projectionMatrix.elements,S=I.projectionMatrix.elements,V=w[14]/(w[10]-1),J=w[14]/(w[10]+1),k=(w[9]+1)/w[5],st=(w[9]-1)/w[5],ot=(w[8]-1)/w[0],ct=(S[8]+1)/S[0],et=V*ot,ut=V*ct,gt=M/(-ot+ct),xt=gt*-ot;lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xt),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const B=V+gt,R=J+gt,Mt=et-xt,Rt=ut+(M-xt),L=k*J/R*B,b=st*J/R*B;j.projectionMatrix.makePerspective(Mt,Rt,L,b,B,R)}function O(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;A.near=D.near=P.near=j.near,A.far=D.far=P.far=j.far,(N!==A.near||Z!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,Z=A.far);const lt=j.parent,I=A.cameras;O(A,lt);for(let w=0;w<I.length;w++)O(I[w],lt);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),j.matrix.copy(A.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);const M=j.children;for(let w=0,S=M.length;w<S;w++)M[w].updateMatrixWorld(!0);I.length===2?$(A,P,D):A.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.getPlanes=function(){return y};let rt=null;function at(j,lt){if(u=lt.getViewerPose(l||o),x=lt,u!==null){const I=u.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let M=!1;I.length!==A.cameras.length&&(A.cameras.length=0,M=!0);for(let w=0;w<I.length;w++){const S=I[w];let V=null;if(m!==null)V=m.getViewport(S);else{const k=h.getViewSubImage(f,S);V=k.viewport,w===0&&(t.setRenderTargetTextures(_,k.colorTexture,f.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(_))}let J=v[w];J===void 0&&(J=new Pe,J.layers.enable(w),J.viewport=new ae,v[w]=J),J.matrix.fromArray(S.transform.matrix),J.projectionMatrix.fromArray(S.projectionMatrix),J.viewport.set(V.x,V.y,V.width,V.height),w===0&&A.matrix.copy(J.matrix),M===!0&&A.cameras.push(J)}}for(let I=0;I<T.length;I++){const M=g[I],w=T[I];M!==null&&w!==void 0&&w.update(M,lt,l||o)}if(rt&&rt(j,lt),lt.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:lt.detectedPlanes});let I=null;for(const M of y)lt.detectedPlanes.has(M)||(I===null&&(I=[]),I.push(M));if(I!==null)for(const M of I)y.delete(M),E.delete(M),n.dispatchEvent({type:"planeremoved",data:M});for(const M of lt.detectedPlanes)if(!y.has(M))y.add(M),E.set(M,lt.lastChangedTime),n.dispatchEvent({type:"planeadded",data:M});else{const w=E.get(M);M.lastChangedTime>w&&(E.set(M,M.lastChangedTime),n.dispatchEvent({type:"planechanged",data:M}))}}x=null}const vt=new po;vt.setAnimationLoop(at),this.setAnimationLoop=function(j){rt=j},this.dispose=function(){}}}function Ud(s,t){function e(p,d){d.color.getRGB(p.fogColor.value,uo(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,T,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,g)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),x(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Se&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Se&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let g;d.aoMap?g=d.aoMap:d.lightMap&&(g=d.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uv2Transform.value.copy(g.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Se&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Bd(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(T,g){const y=g.program;n.uniformBlockBinding(T,y)}function l(T,g){let y=i[T.id];y===void 0&&(x(T),y=u(T),i[T.id]=y,T.addEventListener("dispose",d));const E=g.program;n.updateUBOMapping(T,E);const P=t.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function u(T){const g=h();T.__bindingPointIndex=g;const y=s.createBuffer(),E=T.__size,P=T.usage;return s.bindBuffer(35345,y),s.bufferData(35345,E,P),s.bindBuffer(35345,null),s.bindBufferBase(35345,g,y),y}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const g=i[T.id],y=T.uniforms,E=T.__cache;s.bindBuffer(35345,g);for(let P=0,D=y.length;P<D;P++){const v=y[P];if(m(v,P,E)===!0){const A=v.__offset,N=Array.isArray(v.value)?v.value:[v.value];let Z=0;for(let H=0;H<N.length;H++){const G=N[H],z=p(G);typeof G=="number"?(v.__data[0]=G,s.bufferSubData(35345,A+Z,v.__data)):G.isMatrix3?(v.__data[0]=G.elements[0],v.__data[1]=G.elements[1],v.__data[2]=G.elements[2],v.__data[3]=G.elements[0],v.__data[4]=G.elements[3],v.__data[5]=G.elements[4],v.__data[6]=G.elements[5],v.__data[7]=G.elements[0],v.__data[8]=G.elements[6],v.__data[9]=G.elements[7],v.__data[10]=G.elements[8],v.__data[11]=G.elements[0]):(G.toArray(v.__data,Z),Z+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,v.__data)}}s.bindBuffer(35345,null)}function m(T,g,y){const E=T.value;if(y[g]===void 0){if(typeof E=="number")y[g]=E;else{const P=Array.isArray(E)?E:[E],D=[];for(let v=0;v<P.length;v++)D.push(P[v].clone());y[g]=D}return!0}else if(typeof E=="number"){if(y[g]!==E)return y[g]=E,!0}else{const P=Array.isArray(y[g])?y[g]:[y[g]],D=Array.isArray(E)?E:[E];for(let v=0;v<P.length;v++){const A=P[v];if(A.equals(D[v])===!1)return A.copy(D[v]),!0}}return!1}function x(T){const g=T.uniforms;let y=0;const E=16;let P=0;for(let D=0,v=g.length;D<v;D++){const A=g[D],N={boundary:0,storage:0},Z=Array.isArray(A.value)?A.value:[A.value];for(let H=0,G=Z.length;H<G;H++){const z=Z[H],X=p(z);N.boundary+=X.boundary,N.storage+=X.storage}if(A.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,D>0){P=y%E;const H=E-P;P!==0&&H-N.boundary<0&&(y+=E-P,A.__offset=y)}y+=N.storage}return P=y%E,P>0&&(y+=E-P),T.__size=y,T.__cache={},this}function p(T){const g={boundary:0,storage:0};return typeof T=="number"?(g.boundary=4,g.storage=4):T.isVector2?(g.boundary=8,g.storage=8):T.isVector3||T.isColor?(g.boundary=16,g.storage=12):T.isVector4?(g.boundary=16,g.storage=16):T.isMatrix3?(g.boundary=48,g.storage=48):T.isMatrix4?(g.boundary=64,g.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),g}function d(T){const g=T.target;g.removeEventListener("dispose",d);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function _(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function kd(){const s=Si("canvas");return s.style.display="block",s}function yo(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:kd(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.useLegacyLights=!0,this.toneMapping=je,this.toneMappingExposure=1;const p=this;let d=!1,_=0,T=0,g=null,y=-1,E=null;const P=new ae,D=new ae;let v=null,A=t.width,N=t.height,Z=1,H=null,G=null;const z=new ae(0,0,A,N),X=new ae(0,0,A,N);let nt=!1;const $=new ds;let O=!1,rt=!1,at=null;const vt=new Yt,j=new F,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function I(){return g===null?Z:1}let M=e;function w(C,q){for(let K=0;K<C.length;K++){const W=C[K],tt=t.getContext(W,q);if(tt!==null)return tt}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cs}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Et,!1),M===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),M=w(q,C),M===null)throw w(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let S,V,J,k,st,ot,ct,et,ut,gt,xt,B,R,Mt,Rt,L,b,Y,dt,pt,_t,Tt,yt,it;function Lt(){S=new Zh(M),V=new Hh(M,S,s),S.init(V),Tt=new Id(M,S,V),J=new Rd(M,S,V),k=new Qh,st=new xd,ot=new Dd(M,S,J,st,V,Tt,k),ct=new Xh(p),et=new Jh(p),ut=new lc(M,V),yt=new Vh(M,S,ut,V),gt=new $h(M,ut,k,yt),xt=new rf(M,gt,ut,k),dt=new nf(M,V,ot),L=new qh(st),B=new gd(p,ct,et,S,V,yt,L),R=new Ud(p,st),Mt=new vd,Rt=new Td(S,V),Y=new Gh(p,ct,et,J,xt,u,o),b=new Pd(p,xt,V),it=new Bd(M,k,V,J),pt=new Wh(M,S,k,V),_t=new Kh(M,S,k,V),k.programs=B.programs,p.capabilities=V,p.extensions=S,p.properties=st,p.renderLists=Mt,p.shadowMap=b,p.state=J,p.info=k}Lt();const bt=new Od(p,M);this.xr=bt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const C=S.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=S.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(A,N,!1))},this.getSize=function(C){return C.set(A,N)},this.setSize=function(C,q,K=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,N=q,t.width=Math.floor(C*Z),t.height=Math.floor(q*Z),K===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(A*Z,N*Z).floor()},this.setDrawingBufferSize=function(C,q,K){A=C,N=q,Z=K,t.width=Math.floor(C*K),t.height=Math.floor(q*K),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,q,K,W){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,q,K,W),J.viewport(P.copy(z).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,q,K,W){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,q,K,W),J.scissor(D.copy(X).multiplyScalar(Z).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){J.setScissorTest(nt=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(C=!0,q=!0,K=!0){let W=0;C&&(W|=16384),q&&(W|=256),K&&(W|=1024),M.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Mt.dispose(),Rt.dispose(),st.dispose(),ct.dispose(),et.dispose(),xt.dispose(),yt.dispose(),it.dispose(),B.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ft),bt.removeEventListener("sessionend",St),at&&(at.dispose(),at=null),wt.stop()};function Pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const C=k.autoReset,q=b.enabled,K=b.autoUpdate,W=b.needsUpdate,tt=b.type;Lt(),k.autoReset=C,b.enabled=q,b.autoUpdate=K,b.needsUpdate=W,b.type=tt}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Bt(C){const q=C.target;q.removeEventListener("dispose",Bt),qt(q)}function qt(C){ne(C),st.remove(C)}function ne(C){const q=st.get(C).programs;q!==void 0&&(q.forEach(function(K){B.releaseProgram(K)}),C.isShaderMaterial&&B.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,K,W,tt,Ct){q===null&&(q=lt);const Dt=tt.isMesh&&tt.matrixWorld.determinant()<0,Nt=Fo(C,q,K,W,tt);J.setMaterial(W,Dt);let Ft=K.index,kt=1;W.wireframe===!0&&(Ft=gt.getWireframeAttribute(K),kt=2);const zt=K.drawRange,Ot=K.attributes.position;let Zt=zt.start*kt,_e=(zt.start+zt.count)*kt;Ct!==null&&(Zt=Math.max(Zt,Ct.start*kt),_e=Math.min(_e,(Ct.start+Ct.count)*kt)),Ft!==null?(Zt=Math.max(Zt,0),_e=Math.min(_e,Ft.count)):Ot!=null&&(Zt=Math.max(Zt,0),_e=Math.min(_e,Ot.count));const Ge=_e-Zt;if(Ge<0||Ge===1/0)return;yt.setup(tt,W,Nt,K,Ft);let on,$t=pt;if(Ft!==null&&(on=ut.get(Ft),$t=_t,$t.setIndex(on)),tt.isMesh)W.wireframe===!0?(J.setLineWidth(W.wireframeLinewidth*I()),$t.setMode(1)):$t.setMode(4);else if(tt.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),J.setLineWidth(Ut*I()),tt.isLineSegments?$t.setMode(1):tt.isLineLoop?$t.setMode(2):$t.setMode(3)}else tt.isPoints?$t.setMode(0):tt.isSprite&&$t.setMode(4);if(tt.isInstancedMesh)$t.renderInstances(Zt,Ge,tt.count);else if(K.isInstancedBufferGeometry){const Ut=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ur=Math.min(K.instanceCount,Ut);$t.renderInstances(Zt,Ge,ur)}else $t.render(Zt,Ge)},this.compile=function(C,q){function K(W,tt,Ct){W.transparent===!0&&W.side===tn&&W.forceSinglePass===!1?(W.side=Se,W.needsUpdate=!0,we(W,tt,Ct),W.side=an,W.needsUpdate=!0,we(W,tt,Ct),W.side=tn):we(W,tt,Ct)}f=Rt.get(C),f.init(),x.push(f),C.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(p.useLegacyLights),C.traverse(function(W){const tt=W.material;if(tt)if(Array.isArray(tt))for(let Ct=0;Ct<tt.length;Ct++){const Dt=tt[Ct];K(Dt,C,W)}else K(tt,C,W)}),x.pop(),f=null};let U=null;function Q(C){U&&U(C)}function ft(){wt.stop()}function St(){wt.start()}const wt=new po;wt.setAnimationLoop(Q),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(C){U=C,bt.setAnimationLoop(C),C===null?wt.stop():wt.start()},bt.addEventListener("sessionstart",ft),bt.addEventListener("sessionend",St),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,q,g),f=Rt.get(C,x.length),f.init(),x.push(f),vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(vt),rt=this.localClippingEnabled,O=L.init(this.clippingPlanes,rt),h=Mt.get(C,m.length),h.init(),m.push(h),Wt(C,q,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(H,G),O===!0&&L.beginShadows();const K=f.state.shadowsArray;if(b.render(K,C,q),O===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(h,C),f.setupLights(p.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let tt=0,Ct=W.length;tt<Ct;tt++){const Dt=W[tt];ie(h,C,Dt,Dt.viewport)}}else ie(h,C,q);g!==null&&(ot.updateMultisampleRenderTarget(g),ot.updateRenderTargetMipmap(g)),C.isScene===!0&&C.onAfterRender(p,C,q),yt.resetDefaultState(),y=-1,E=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Wt(C,q,K,W){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){W&&j.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const Dt=xt.update(C),Nt=C.material;Nt.visible&&h.push(C,Dt,Nt,K,j.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==k.render.frame&&(C.skeleton.update(),C.skeleton.frame=k.render.frame),!C.frustumCulled||$.intersectsObject(C))){W&&j.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const Dt=xt.update(C),Nt=C.material;if(Array.isArray(Nt)){const Ft=Dt.groups;for(let kt=0,zt=Ft.length;kt<zt;kt++){const Ot=Ft[kt],Zt=Nt[Ot.materialIndex];Zt&&Zt.visible&&h.push(C,Dt,Zt,K,j.z,Ot)}}else Nt.visible&&h.push(C,Dt,Nt,K,j.z,null)}}const Ct=C.children;for(let Dt=0,Nt=Ct.length;Dt<Nt;Dt++)Wt(Ct[Dt],q,K,W)}function ie(C,q,K,W){const tt=C.opaque,Ct=C.transmissive,Dt=C.transparent;f.setupLightsView(K),O===!0&&L.setGlobalState(p.clippingPlanes,K),Ct.length>0&&he(tt,q,K),W&&J.viewport(P.copy(W)),tt.length>0&&Ne(tt,q,K),Ct.length>0&&Ne(Ct,q,K),Dt.length>0&&Ne(Dt,q,K),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function he(C,q,K){const W=V.isWebGL2;at===null&&(at=new Sn(1024,1024,{generateMipmaps:!0,type:S.has("EXT_color_buffer_half_float")?yi:yn,minFilter:vi,samples:W&&r===!0?4:0}));const tt=p.getRenderTarget();p.setRenderTarget(at),p.clear();const Ct=p.toneMapping;p.toneMapping=je,Ne(C,q,K),p.toneMapping=Ct,ot.updateMultisampleRenderTarget(at),ot.updateRenderTargetMipmap(at),p.setRenderTarget(tt)}function Ne(C,q,K){const W=q.isScene===!0?q.overrideMaterial:null;for(let tt=0,Ct=C.length;tt<Ct;tt++){const Dt=C[tt],Nt=Dt.object,Ft=Dt.geometry,kt=W===null?Dt.material:W,zt=Dt.group;Nt.layers.test(K.layers)&&jt(Nt,q,K,Ft,kt,zt)}}function jt(C,q,K,W,tt,Ct){C.onBeforeRender(p,q,K,W,tt,Ct),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(p,q,K,W,C,Ct),tt.transparent===!0&&tt.side===tn&&tt.forceSinglePass===!1?(tt.side=Se,tt.needsUpdate=!0,p.renderBufferDirect(K,q,W,tt,C,Ct),tt.side=an,tt.needsUpdate=!0,p.renderBufferDirect(K,q,W,tt,C,Ct),tt.side=tn):p.renderBufferDirect(K,q,W,tt,C,Ct),C.onAfterRender(p,q,K,W,tt,Ct)}function we(C,q,K){q.isScene!==!0&&(q=lt);const W=st.get(C),tt=f.state.lights,Ct=f.state.shadowsArray,Dt=tt.state.version,Nt=B.getParameters(C,tt.state,Ct,q,K),Ft=B.getProgramCacheKey(Nt);let kt=W.programs;W.environment=C.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(C.isMeshStandardMaterial?et:ct).get(C.envMap||W.environment),kt===void 0&&(C.addEventListener("dispose",Bt),kt=new Map,W.programs=kt);let zt=kt.get(Ft);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===Dt)return Fe(C,Nt),zt}else Nt.uniforms=B.getUniforms(C),C.onBuild(K,Nt,p),C.onBeforeCompile(Nt,p),zt=B.acquireProgram(Nt,Ft),kt.set(Ft,zt),W.uniforms=Nt.uniforms;const Ot=W.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ot.clippingPlanes=L.uniform),Fe(C,Nt),W.needsLights=Oo(C),W.lightsStateVersion=Dt,W.needsLights&&(Ot.ambientLightColor.value=tt.state.ambient,Ot.lightProbe.value=tt.state.probe,Ot.directionalLights.value=tt.state.directional,Ot.directionalLightShadows.value=tt.state.directionalShadow,Ot.spotLights.value=tt.state.spot,Ot.spotLightShadows.value=tt.state.spotShadow,Ot.rectAreaLights.value=tt.state.rectArea,Ot.ltc_1.value=tt.state.rectAreaLTC1,Ot.ltc_2.value=tt.state.rectAreaLTC2,Ot.pointLights.value=tt.state.point,Ot.pointLightShadows.value=tt.state.pointShadow,Ot.hemisphereLights.value=tt.state.hemi,Ot.directionalShadowMap.value=tt.state.directionalShadowMap,Ot.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ot.spotShadowMap.value=tt.state.spotShadowMap,Ot.spotLightMatrix.value=tt.state.spotLightMatrix,Ot.spotLightMap.value=tt.state.spotLightMap,Ot.pointShadowMap.value=tt.state.pointShadowMap,Ot.pointShadowMatrix.value=tt.state.pointShadowMatrix);const Zt=zt.getUniforms(),_e=Qi.seqWithValue(Zt.seq,Ot);return W.currentProgram=zt,W.uniformsList=_e,zt}function Fe(C,q){const K=st.get(C);K.outputEncoding=q.outputEncoding,K.instancing=q.instancing,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function Fo(C,q,K,W,tt){q.isScene!==!0&&(q=lt),ot.resetTextureUnits();const Ct=q.fog,Dt=W.isMeshStandardMaterial?q.environment:null,Nt=g===null?p.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:Mn,Ft=(W.isMeshStandardMaterial?et:ct).get(W.envMap||Dt),kt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,zt=!!W.normalMap&&!!K.attributes.tangent,Ot=!!K.morphAttributes.position,Zt=!!K.morphAttributes.normal,_e=!!K.morphAttributes.color,Ge=W.toneMapped?p.toneMapping:je,on=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=on!==void 0?on.length:0,Ut=st.get(W),ur=f.state.lights;if(O===!0&&(rt===!0||C!==E)){const ve=C===E&&W.id===y;L.setState(W,C,ve)}let re=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ur.state.version||Ut.outputEncoding!==Nt||tt.isInstancedMesh&&Ut.instancing===!1||!tt.isInstancedMesh&&Ut.instancing===!0||tt.isSkinnedMesh&&Ut.skinning===!1||!tt.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==Ft||W.fog===!0&&Ut.fog!==Ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==L.numPlanes||Ut.numIntersection!==L.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==zt||Ut.morphTargets!==Ot||Ut.morphNormals!==Zt||Ut.morphColors!==_e||Ut.toneMapping!==Ge||V.isWebGL2===!0&&Ut.morphTargetsCount!==$t)&&(re=!0):(re=!0,Ut.__version=W.version);let ln=Ut.currentProgram;re===!0&&(ln=we(W,q,tt));let Ms=!1,ri=!1,hr=!1;const fe=ln.getUniforms(),cn=Ut.uniforms;if(J.useProgram(ln.program)&&(Ms=!0,ri=!0,hr=!0),W.id!==y&&(y=W.id,ri=!0),Ms||E!==C){if(fe.setValue(M,"projectionMatrix",C.projectionMatrix),V.logarithmicDepthBuffer&&fe.setValue(M,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,ri=!0,hr=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ve=fe.map.cameraPosition;ve!==void 0&&ve.setValue(M,j.setFromMatrixPosition(C.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(M,"isOrthographic",C.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||tt.isSkinnedMesh)&&fe.setValue(M,"viewMatrix",C.matrixWorldInverse)}if(tt.isSkinnedMesh){fe.setOptional(M,tt,"bindMatrix"),fe.setOptional(M,tt,"bindMatrixInverse");const ve=tt.skeleton;ve&&(V.floatVertexTextures?(ve.boneTexture===null&&ve.computeBoneTexture(),fe.setValue(M,"boneTexture",ve.boneTexture,ot),fe.setValue(M,"boneTextureSize",ve.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fr=K.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&V.isWebGL2===!0)&&dt.update(tt,K,ln),(ri||Ut.receiveShadow!==tt.receiveShadow)&&(Ut.receiveShadow=tt.receiveShadow,fe.setValue(M,"receiveShadow",tt.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(cn.envMap.value=Ft,cn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ri&&(fe.setValue(M,"toneMappingExposure",p.toneMappingExposure),Ut.needsLights&&zo(cn,hr),Ct&&W.fog===!0&&R.refreshFogUniforms(cn,Ct),R.refreshMaterialUniforms(cn,W,Z,N,at),Qi.upload(M,Ut.uniformsList,cn,ot)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qi.upload(M,Ut.uniformsList,cn,ot),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(M,"center",tt.center),fe.setValue(M,"modelViewMatrix",tt.modelViewMatrix),fe.setValue(M,"normalMatrix",tt.normalMatrix),fe.setValue(M,"modelMatrix",tt.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ve=W.uniformsGroups;for(let dr=0,Uo=ve.length;dr<Uo;dr++)if(V.isWebGL2){const Ss=ve[dr];it.update(Ss,ln),it.bind(Ss,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function zo(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Oo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(C,q,K){st.get(C.texture).__webglTexture=q,st.get(C.depthTexture).__webglTexture=K;const W=st.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=K===void 0,W.__autoAllocateDepthBuffer||S.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const K=st.get(C);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,K=0){g=C,_=q,T=K;let W=!0,tt=null,Ct=!1,Dt=!1;if(C){const Ft=st.get(C);Ft.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(36160,null),W=!1):Ft.__webglFramebuffer===void 0?ot.setupRenderTarget(C):Ft.__hasExternalTextures&&ot.rebindTextures(C,st.get(C.texture).__webglTexture,st.get(C.depthTexture).__webglTexture);const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Dt=!0);const zt=st.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(tt=zt[q],Ct=!0):V.isWebGL2&&C.samples>0&&ot.useMultisampledRTT(C)===!1?tt=st.get(C).__webglMultisampledFramebuffer:tt=zt,P.copy(C.viewport),D.copy(C.scissor),v=C.scissorTest}else P.copy(z).multiplyScalar(Z).floor(),D.copy(X).multiplyScalar(Z).floor(),v=nt;if(J.bindFramebuffer(36160,tt)&&V.drawBuffers&&W&&J.drawBuffers(C,tt),J.viewport(P),J.scissor(D),J.setScissorTest(v),Ct){const Ft=st.get(C.texture);M.framebufferTexture2D(36160,36064,34069+q,Ft.__webglTexture,K)}else if(Dt){const Ft=st.get(C.texture),kt=q||0;M.framebufferTextureLayer(36160,36064,Ft.__webglTexture,K||0,kt)}y=-1},this.readRenderTargetPixels=function(C,q,K,W,tt,Ct,Dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){J.bindFramebuffer(36160,Nt);try{const Ft=C.texture,kt=Ft.format,zt=Ft.type;if(kt!==De&&Tt.convert(kt)!==M.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=zt===yi&&(S.has("EXT_color_buffer_half_float")||V.isWebGL2&&S.has("EXT_color_buffer_float"));if(zt!==yn&&Tt.convert(zt)!==M.getParameter(35738)&&!(zt===_n&&(V.isWebGL2||S.has("OES_texture_float")||S.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-W&&K>=0&&K<=C.height-tt&&M.readPixels(q,K,W,tt,Tt.convert(kt),Tt.convert(zt),Ct)}finally{const Ft=g!==null?st.get(g).__webglFramebuffer:null;J.bindFramebuffer(36160,Ft)}}},this.copyFramebufferToTexture=function(C,q,K=0){const W=Math.pow(2,-K),tt=Math.floor(q.image.width*W),Ct=Math.floor(q.image.height*W);ot.setTexture2D(q,0),M.copyTexSubImage2D(3553,K,0,0,C.x,C.y,tt,Ct),J.unbindTexture()},this.copyTextureToTexture=function(C,q,K,W=0){const tt=q.image.width,Ct=q.image.height,Dt=Tt.convert(K.format),Nt=Tt.convert(K.type);ot.setTexture2D(K,0),M.pixelStorei(37440,K.flipY),M.pixelStorei(37441,K.premultiplyAlpha),M.pixelStorei(3317,K.unpackAlignment),q.isDataTexture?M.texSubImage2D(3553,W,C.x,C.y,tt,Ct,Dt,Nt,q.image.data):q.isCompressedTexture?M.compressedTexSubImage2D(3553,W,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Dt,q.mipmaps[0].data):M.texSubImage2D(3553,W,C.x,C.y,Dt,Nt,q.image),W===0&&K.generateMipmaps&&M.generateMipmap(3553),J.unbindTexture()},this.copyTextureToTexture3D=function(C,q,K,W,tt=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=C.max.x-C.min.x+1,Dt=C.max.y-C.min.y+1,Nt=C.max.z-C.min.z+1,Ft=Tt.convert(W.format),kt=Tt.convert(W.type);let zt;if(W.isData3DTexture)ot.setTexture3D(W,0),zt=32879;else if(W.isDataArrayTexture)ot.setTexture2DArray(W,0),zt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(37440,W.flipY),M.pixelStorei(37441,W.premultiplyAlpha),M.pixelStorei(3317,W.unpackAlignment);const Ot=M.getParameter(3314),Zt=M.getParameter(32878),_e=M.getParameter(3316),Ge=M.getParameter(3315),on=M.getParameter(32877),$t=K.isCompressedTexture?K.mipmaps[0]:K.image;M.pixelStorei(3314,$t.width),M.pixelStorei(32878,$t.height),M.pixelStorei(3316,C.min.x),M.pixelStorei(3315,C.min.y),M.pixelStorei(32877,C.min.z),K.isDataTexture||K.isData3DTexture?M.texSubImage3D(zt,tt,q.x,q.y,q.z,Ct,Dt,Nt,Ft,kt,$t.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(zt,tt,q.x,q.y,q.z,Ct,Dt,Nt,Ft,$t.data)):M.texSubImage3D(zt,tt,q.x,q.y,q.z,Ct,Dt,Nt,Ft,kt,$t),M.pixelStorei(3314,Ot),M.pixelStorei(32878,Zt),M.pixelStorei(3316,_e),M.pixelStorei(3315,Ge),M.pixelStorei(32877,on),tt===0&&W.generateMipmaps&&M.generateMipmap(zt),J.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),J.unbindTexture()},this.resetState=function(){_=0,T=0,g=null,J.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(yo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class Gd extends yo{}Gd.prototype.isWebGL1Renderer=!0;class zp extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Vd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=is,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pe=new F;class er{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mo extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let kn;const fi=new F,Gn=new F,Vn=new F,Wn=new ht,di=new ht,So=new Yt,Xi=new F,pi=new F,Yi=new F,Fa=new ht,Xr=new ht,za=new ht;class Wd extends oe{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",kn===void 0){kn=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vd(e,5);kn.setIndex([0,1,2,0,2,3]),kn.setAttribute("position",new er(n,3,0,!1)),kn.setAttribute("uv",new er(n,2,3,!1))}this.geometry=kn,this.material=t!==void 0?t:new Mo,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gn.setFromMatrixScale(this.matrixWorld),So.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gn.multiplyScalar(-Vn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ji(Xi.set(-.5,-.5,0),Vn,o,Gn,i,r),ji(pi.set(.5,-.5,0),Vn,o,Gn,i,r),ji(Yi.set(.5,.5,0),Vn,o,Gn,i,r),Fa.set(0,0),Xr.set(1,0),za.set(1,1);let a=t.ray.intersectTriangle(Xi,pi,Yi,!1,fi);if(a===null&&(ji(pi.set(-.5,.5,0),Vn,o,Gn,i,r),Xr.set(0,1),a=t.ray.intersectTriangle(Xi,Yi,pi,!1,fi),a===null))return;const c=t.ray.origin.distanceTo(fi);c<t.near||c>t.far||e.push({distance:c,point:fi.clone(),uv:Be.getUV(fi,Xi,pi,Yi,Fa,Xr,za,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ji(s,t,e,n,i,r){Wn.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(di.x=r*Wn.x-i*Wn.y,di.y=i*Wn.x+r*Wn.y):di.copy(Wn),s.copy(t),s.x+=di.x,s.y+=di.y,s.applyMatrix4(So)}class Hd extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oa=new F,Ua=new F,Ba=new Yt,Yr=new hs,Ji=new rr;class Op extends oe{constructor(t=new be,e=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Oa.fromBufferAttribute(e,i-1),Ua.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Oa.distanceTo(Ua);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(i),Ji.radius+=r,t.ray.intersectsSphere(Ji)===!1)return;Ba.copy(i).invert(),Yr.copy(t.ray).applyMatrix4(Ba);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new F,u=new F,h=new F,f=new F,m=this.isLineSegments?2:1,x=n.index,d=n.attributes.position;if(x!==null){const _=Math.max(0,o.start),T=Math.min(x.count,o.start+o.count);for(let g=_,y=T-1;g<y;g+=m){const E=x.getX(g),P=x.getX(g+1);if(l.fromBufferAttribute(d,E),u.fromBufferAttribute(d,P),Yr.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),T=Math.min(d.count,o.start+o.count);for(let g=_,y=T-1;g<y;g+=m){if(l.fromBufferAttribute(d,g),u.fromBufferAttribute(d,g+1),Yr.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class ke{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,m=(o-u)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ht:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,i=[],r=[],o=[],a=new F,c=new Yt;for(let m=0;m<=t;m++){const x=m/t;i[m]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(ue(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,x))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ue(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],m*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gs extends ke{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ht,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qd extends gs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xs(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,m*=u,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Zi=new F,jr=new xs,Jr=new xs,Zr=new xs;class Xd extends ke{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Zi.subVectors(i[0],i[1]).add(i[0]),l=Zi);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Zi.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Zi),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);p<1e-4&&(p=1),x<1e-4&&(x=p),d<1e-4&&(d=p),jr.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,x,p,d),Jr.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,x,p,d),Zr.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,x,p,d)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Jr.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Zr.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(jr.calc(c),Jr.calc(c),Zr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ka(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Yd(s,t){const e=1-s;return e*e*t}function jd(s,t){return 2*(1-s)*s*t}function Jd(s,t){return s*s*t}function xi(s,t,e,n){return Yd(s,t)+jd(s,e)+Jd(s,n)}function Zd(s,t){const e=1-s;return e*e*e*t}function $d(s,t){const e=1-s;return 3*e*e*s*t}function Kd(s,t){return 3*(1-s)*s*s*t}function Qd(s,t){return s*s*s*t}function _i(s,t,e,n,i){return Zd(s,t)+$d(s,e)+Kd(s,n)+Qd(s,i)}class bo extends ke{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_i(t,i.x,r.x,o.x,a.x),_i(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tp extends ke{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_i(t,i.x,r.x,o.x,a.x),_i(t,i.y,r.y,o.y,a.y),_i(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _s extends ke{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ep extends ke{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wo extends ke{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(xi(t,i.x,r.x,o.x),xi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class To extends ke{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(xi(t,i.x,r.x,o.x),xi(t,i.y,r.y,o.y),xi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eo extends ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ka(a,c.x,l.x,u.x,h.x),ka(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Ao=Object.freeze({__proto__:null,ArcCurve:qd,CatmullRomCurve3:Xd,CubicBezierCurve:bo,CubicBezierCurve3:tp,EllipseCurve:gs,LineCurve:_s,LineCurve3:ep,QuadraticBezierCurve:wo,QuadraticBezierCurve3:To,SplineCurve:Eo});class np extends ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new _s(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ao[i.type]().fromJSON(i))}return this}}class $n extends np{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _s(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new wo(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new bo(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new gs(t,e,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vs extends be{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],m=[];let x=0;const p=[],d=n/2;let _=0;T(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(m,2));function T(){const y=new F,E=new F;let P=0;const D=(e-t)/n;for(let v=0;v<=r;v++){const A=[],N=v/r,Z=N*(e-t)+t;for(let H=0;H<=i;H++){const G=H/i,z=G*c+a,X=Math.sin(z),nt=Math.cos(z);E.x=Z*X,E.y=-N*n+d,E.z=Z*nt,h.push(E.x,E.y,E.z),y.set(X,D,nt).normalize(),f.push(y.x,y.y,y.z),m.push(G,1-N),A.push(x++)}p.push(A)}for(let v=0;v<i;v++)for(let A=0;A<r;A++){const N=p[A][v],Z=p[A+1][v],H=p[A+1][v+1],G=p[A][v+1];u.push(N,Z,G),u.push(Z,H,G),P+=6}l.addGroup(_,P,0),_+=P}function g(y){const E=x,P=new ht,D=new F;let v=0;const A=y===!0?t:e,N=y===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,d*N,0),f.push(0,N,0),m.push(.5,.5),x++;const Z=x;for(let H=0;H<=i;H++){const z=H/i*c+a,X=Math.cos(z),nt=Math.sin(z);D.x=A*nt,D.y=d*N,D.z=A*X,h.push(D.x,D.y,D.z),f.push(0,N,0),P.x=X*.5+.5,P.y=nt*.5*N+.5,m.push(P.x,P.y),x++}for(let H=0;H<i;H++){const G=E+H,z=Z+H;y===!0?u.push(z,z+1,G):u.push(z+1,z,G),v+=3}l.addGroup(_,v,y===!0?1:2),_+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends vs{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Co(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tr extends $n{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new $n().fromJSON(i))}return this}}const ip={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Lo(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,m;if(n&&(r=lp(s,t,r,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let x=e;x<i;x+=e)h=s[x],f=s[x+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return bi(r,o,e,a,c,m,0),o}};function Lo(s,t,e,n,i){let r,o;if(i===vp(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Ga(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ga(r,s[r],s[r+1],o);return o&&or(o,o.next)&&(Ti(o),o=o.next),o}function wn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(or(e,e.next)||Xt(e.prev,e,e.next)===0)){if(Ti(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&dp(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?sp(s,n,i,r):rp(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Ti(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ap(wn(s),t,e),bi(s,t,e,n,i,r,2)):o===2&&op(s,t,e,n,i,r):bi(wn(s),t,e,n,i,r,1);break}}}function rp(s){const t=s.prev,e=s,n=s.next;if(Xt(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=f&&x.y>=h&&x.y<=m&&Yn(i,a,r,c,o,l,x.x,x.y)&&Xt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function sp(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Xt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,m=a<c?a<l?a:l:c<l?c:l,x=u<h?u<f?u:f:h<f?h:f,p=a>c?a>l?a:l:c>l?c:l,d=u>h?u>f?u:f:h>f?h:f,_=as(m,x,t,e,n),T=as(p,d,t,e,n);let g=s.prevZ,y=s.nextZ;for(;g&&g.z>=_&&y&&y.z<=T;){if(g.x>=m&&g.x<=p&&g.y>=x&&g.y<=d&&g!==i&&g!==o&&Yn(a,u,c,h,l,f,g.x,g.y)&&Xt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=m&&y.x<=p&&y.y>=x&&y.y<=d&&y!==i&&y!==o&&Yn(a,u,c,h,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=_;){if(g.x>=m&&g.x<=p&&g.y>=x&&g.y<=d&&g!==i&&g!==o&&Yn(a,u,c,h,l,f,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=T;){if(y.x>=m&&y.x<=p&&y.y>=x&&y.y<=d&&y!==i&&y!==o&&Yn(a,u,c,h,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ap(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!or(i,r)&&Po(i,n,n.next,r)&&wi(i,r)&&wi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ti(n),Ti(n.next),n=s=r),n=n.next}while(n!==s);return wn(n)}function op(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gp(o,a)){let c=Ro(o,a);o=wn(o,o.next),c=wn(c,c.next),bi(o,t,e,n,i,r,0),bi(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function lp(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Lo(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(mp(l));for(i.sort(cp),r=0;r<i.length;r++)e=up(i[r],e);return e}function cp(s,t){return s.x-t.x}function up(s,t){const e=hp(s,t);if(!e)return t;const n=Ro(e,s);return wn(n,n.next),wn(e,e.next)}function hp(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Yn(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),wi(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&fp(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function fp(s,t){return Xt(s.prev,s,t.prev)<0&&Xt(t.next,s,s.next)<0}function dp(s,t,e,n){let i=s;do i.z===0&&(i.z=as(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,pp(i)}function pp(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function as(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function mp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Yn(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function gp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!xp(s,t)&&(wi(s,t)&&wi(t,s)&&_p(s,t)&&(Xt(s.prev,s,t.prev)||Xt(s,t.prev,t))||or(s,t)&&Xt(s.prev,s,s.next)>0&&Xt(t.prev,t,t.next)>0)}function Xt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function or(s,t){return s.x===t.x&&s.y===t.y}function Po(s,t,e,n){const i=Ki(Xt(s,t,e)),r=Ki(Xt(s,t,n)),o=Ki(Xt(e,n,s)),a=Ki(Xt(e,n,t));return!!(i!==r&&o!==a||i===0&&$i(s,e,t)||r===0&&$i(s,n,t)||o===0&&$i(e,s,n)||a===0&&$i(e,t,n))}function $i(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ki(s){return s>0?1:s<0?-1:0}function xp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Po(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function wi(s,t){return Xt(s.prev,s,s.next)<0?Xt(s,t,s.next)>=0&&Xt(s,s.prev,t)>=0:Xt(s,t,s.prev)<0||Xt(s,s.next,t)<0}function _p(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ro(s,t){const e=new os(s.i,s.x,s.y),n=new os(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ga(s,t,e,n){const i=new os(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ti(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function os(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class lr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return lr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Va(t),Wa(n,t);let o=t.length;e.forEach(Va);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Wa(n,e[c]);const a=ip.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Va(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Wa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Do extends be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new F,f=new F,m=[],x=[],p=[],d=[];for(let _=0;_<=n;_++){const T=[],g=_/n;let y=0;_==0&&o==0?y=.5/e:_==n&&c==Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const P=E/e;h.x=-t*Math.cos(i+P*r)*Math.sin(o+g*a),h.y=t*Math.cos(o+g*a),h.z=t*Math.sin(i+P*r)*Math.sin(o+g*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(P+y,1-g),T.push(l++)}u.push(T)}for(let _=0;_<n;_++)for(let T=0;T<e;T++){const g=u[_][T+1],y=u[_][T],E=u[_+1][T],P=u[_+1][T+1];(_!==0||o>0)&&m.push(g,y,P),(_!==n-1||c<Math.PI)&&m.push(y,E,P)}this.setIndex(m),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Io extends be{constructor(t=new To(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,c=new F,l=new ht;let u=new F;const h=[],f=[],m=[],x=[];p(),this.setIndex(x),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(m,2));function p(){for(let g=0;g<e;g++)d(g);d(r===!1?e:0),T(),_()}function d(g){u=t.getPointAt(g/e,u);const y=o.normals[g],E=o.binormals[g];for(let P=0;P<=i;P++){const D=P/i*Math.PI*2,v=Math.sin(D),A=-Math.cos(D);c.x=A*y.x+v*E.x,c.y=A*y.y+v*E.y,c.z=A*y.z+v*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function _(){for(let g=1;g<=e;g++)for(let y=1;y<=i;y++){const E=(i+1)*(g-1)+(y-1),P=(i+1)*g+(y-1),D=(i+1)*g+y,v=(i+1)*(g-1)+y;x.push(E,P,v),x.push(P,D,v)}}function T(){for(let g=0;g<=e;g++)for(let y=0;y<=i;y++)l.x=g/e,l.y=y/i,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Io(new Ao[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Up extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const nr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yp{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],x=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Mp=new yp;class cr{constructor(t){this.manager=t!==void 0?t:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Ye={};class Sp extends Error{constructor(t,e){super(t),this.response=e}}class bp extends cr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=nr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ye[t]!==void 0){Ye[t].push({onLoad:e,onProgress:n,onError:i});return}Ye[t]=[],Ye[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ye[t],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,x=m!==0;let p=0;const d=new ReadableStream({start(_){T();function T(){h.read().then(({done:g,value:y})=>{if(g)_.close();else{p+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:x,loaded:p,total:m});for(let P=0,D=u.length;P<D;P++){const v=u[P];v.onProgress&&v.onProgress(E)}_.enqueue(y),T()}})}}});return new Response(d)}else throw new Sp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{nr.add(t,l);const u=Ye[t];delete Ye[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Ye[t];if(u===void 0)throw this.manager.itemError(t),l;delete Ye[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class wp extends cr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=nr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Si("img");function c(){u(),nr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Tp extends cr{constructor(t){super(t)}load(t,e,n,i){const r=new xe,o=new wp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class No extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const $r=new Yt,Ha=new F,qa=new F;class Ep{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ha.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ha),qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qa),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ap extends Ep{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bp extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kp extends No{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xa(){return(typeof performance>"u"?Date:performance).now()}class Vp{constructor(t,e,n=0,i=1/0){this.ray=new hs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ls(t,this,n,e),n.sort(Ya),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ls(t[i],this,n,e);return n.sort(Ya),n}}function Ya(s,t){return s.distance-t.distance}function ls(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ls(i[r],t,e,!0)}}class Wp{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ja=new ht;class Cp{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ja.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ja).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class dn{constructor(){this.type="ShapePath",this.color=new Gt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new $n,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const T=[];for(let g=0,y=_.length;g<y;g++){const E=_[g],P=new tr;P.curves=E.curves,T.push(P)}return T}function n(_,T){const g=T.length;let y=!1;for(let E=g-1,P=0;P<g;E=P++){let D=T[E],v=T[P],A=v.x-D.x,N=v.y-D.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(D=T[P],A=-A,v=T[E],N=-N),_.y<D.y||_.y>v.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const Z=N*(_.x-D.x)-A*(_.y-D.y);if(Z===0)return!0;if(Z<0)continue;y=!y}}else{if(_.y!==D.y)continue;if(v.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=v.x)return!0}}return y}const i=lr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new tr,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],x=0,p;f[x]=void 0,m[x]=[];for(let _=0,T=r.length;_<T;_++)a=r[_],p=a.getPoints(),o=i(p),o=t?!o:o,o?(!u&&f[x]&&x++,f[x]={s:new tr,p},f[x].s.curves=a.curves,u&&x++,m[x]=[]):m[x].push({h:a,p:p[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,T=0;for(let g=0,y=f.length;g<y;g++)h[g]=[];for(let g=0,y=f.length;g<y;g++){const E=m[g];for(let P=0;P<E.length;P++){const D=E[P];let v=!0;for(let A=0;A<f.length;A++)n(D.p,f[A].p)&&(g!==A&&T++,v?(v=!1,h[A].push(D)):_=!0);v&&h[g].push(D)}}T>0&&_===!1&&(m=h)}let d;for(let _=0,T=f.length;_<T;_++){c=f[_].s,l.push(c),d=m[_];for(let g=0,y=d.length;g<y;g++)c.holes.push(d[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cs);class ys extends cr{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const r=this,o=new bp(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(I,M){if(I.nodeType!==1)return;const w=y(I);let S=!1,V=null;switch(I.nodeName){case"svg":M=x(I,M);break;case"style":r(I);break;case"g":M=x(I,M);break;case"path":M=x(I,M),I.hasAttribute("d")&&(V=i(I));break;case"rect":M=x(I,M),V=c(I);break;case"polygon":M=x(I,M),V=l(I);break;case"polyline":M=x(I,M),V=u(I);break;case"circle":M=x(I,M),V=h(I);break;case"ellipse":M=x(I,M),V=f(I);break;case"line":M=x(I,M),V=m(I);break;case"defs":S=!0;break;case"use":M=x(I,M);const st=(I.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ot=I.viewportElement.getElementById(st);ot?n(ot,M):console.warn("SVGLoader: 'use node' references non-existent node id: "+st);break}V&&(M.fill!==void 0&&M.fill!=="none"&&V.color.setStyle(M.fill),P(V,vt),H.push(V),V.userData={node:I,style:M});const J=I.childNodes;for(let k=0;k<J.length;k++){const st=J[k];S&&st.nodeName!=="style"&&st.nodeName!=="defs"||n(st,M)}w&&(z.pop(),z.length>0?vt.copy(z[z.length-1]):vt.identity())}function i(I){const M=new dn,w=new ht,S=new ht,V=new ht;let J=!0,k=!1;const st=I.getAttribute("d");if(st===""||st==="none")return null;const ot=st.match(/[a-df-z][^a-df-z]*/ig);for(let ct=0,et=ot.length;ct<et;ct++){const ut=ot[ct],gt=ut.charAt(0),xt=ut.slice(1).trim();J===!0&&(k=!0,J=!1);let B;switch(gt){case"M":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=2)w.x=B[R+0],w.y=B[R+1],S.x=w.x,S.y=w.y,R===0?M.moveTo(w.x,w.y):M.lineTo(w.x,w.y),R===0&&V.copy(w);break;case"H":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R++)w.x=B[R],S.x=w.x,S.y=w.y,M.lineTo(w.x,w.y),R===0&&k===!0&&V.copy(w);break;case"V":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R++)w.y=B[R],S.x=w.x,S.y=w.y,M.lineTo(w.x,w.y),R===0&&k===!0&&V.copy(w);break;case"L":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=2)w.x=B[R+0],w.y=B[R+1],S.x=w.x,S.y=w.y,M.lineTo(w.x,w.y),R===0&&k===!0&&V.copy(w);break;case"C":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=6)M.bezierCurveTo(B[R+0],B[R+1],B[R+2],B[R+3],B[R+4],B[R+5]),S.x=B[R+2],S.y=B[R+3],w.x=B[R+4],w.y=B[R+5],R===0&&k===!0&&V.copy(w);break;case"S":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=4)M.bezierCurveTo(p(w.x,S.x),p(w.y,S.y),B[R+0],B[R+1],B[R+2],B[R+3]),S.x=B[R+0],S.y=B[R+1],w.x=B[R+2],w.y=B[R+3],R===0&&k===!0&&V.copy(w);break;case"Q":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=4)M.quadraticCurveTo(B[R+0],B[R+1],B[R+2],B[R+3]),S.x=B[R+0],S.y=B[R+1],w.x=B[R+2],w.y=B[R+3],R===0&&k===!0&&V.copy(w);break;case"T":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=2){const Rt=p(w.x,S.x),L=p(w.y,S.y);M.quadraticCurveTo(Rt,L,B[R+0],B[R+1]),S.x=Rt,S.y=L,w.x=B[R+0],w.y=B[R+1],R===0&&k===!0&&V.copy(w)}break;case"A":B=d(xt,[3,4],7);for(let R=0,Mt=B.length;R<Mt;R+=7){if(B[R+5]==w.x&&B[R+6]==w.y)continue;const Rt=w.clone();w.x=B[R+5],w.y=B[R+6],S.x=w.x,S.y=w.y,o(M,B[R],B[R+1],B[R+2],B[R+3],B[R+4],Rt,w),R===0&&k===!0&&V.copy(w)}break;case"m":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=2)w.x+=B[R+0],w.y+=B[R+1],S.x=w.x,S.y=w.y,R===0?M.moveTo(w.x,w.y):M.lineTo(w.x,w.y),R===0&&V.copy(w);break;case"h":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R++)w.x+=B[R],S.x=w.x,S.y=w.y,M.lineTo(w.x,w.y),R===0&&k===!0&&V.copy(w);break;case"v":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R++)w.y+=B[R],S.x=w.x,S.y=w.y,M.lineTo(w.x,w.y),R===0&&k===!0&&V.copy(w);break;case"l":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=2)w.x+=B[R+0],w.y+=B[R+1],S.x=w.x,S.y=w.y,M.lineTo(w.x,w.y),R===0&&k===!0&&V.copy(w);break;case"c":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=6)M.bezierCurveTo(w.x+B[R+0],w.y+B[R+1],w.x+B[R+2],w.y+B[R+3],w.x+B[R+4],w.y+B[R+5]),S.x=w.x+B[R+2],S.y=w.y+B[R+3],w.x+=B[R+4],w.y+=B[R+5],R===0&&k===!0&&V.copy(w);break;case"s":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=4)M.bezierCurveTo(p(w.x,S.x),p(w.y,S.y),w.x+B[R+0],w.y+B[R+1],w.x+B[R+2],w.y+B[R+3]),S.x=w.x+B[R+0],S.y=w.y+B[R+1],w.x+=B[R+2],w.y+=B[R+3],R===0&&k===!0&&V.copy(w);break;case"q":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=4)M.quadraticCurveTo(w.x+B[R+0],w.y+B[R+1],w.x+B[R+2],w.y+B[R+3]),S.x=w.x+B[R+0],S.y=w.y+B[R+1],w.x+=B[R+2],w.y+=B[R+3],R===0&&k===!0&&V.copy(w);break;case"t":B=d(xt);for(let R=0,Mt=B.length;R<Mt;R+=2){const Rt=p(w.x,S.x),L=p(w.y,S.y);M.quadraticCurveTo(Rt,L,w.x+B[R+0],w.y+B[R+1]),S.x=Rt,S.y=L,w.x=w.x+B[R+0],w.y=w.y+B[R+1],R===0&&k===!0&&V.copy(w)}break;case"a":B=d(xt,[3,4],7);for(let R=0,Mt=B.length;R<Mt;R+=7){if(B[R+5]==0&&B[R+6]==0)continue;const Rt=w.clone();w.x+=B[R+5],w.y+=B[R+6],S.x=w.x,S.y=w.y,o(M,B[R],B[R+1],B[R+2],B[R+3],B[R+4],Rt,w),R===0&&k===!0&&V.copy(w)}break;case"Z":case"z":M.currentPath.autoClose=!0,M.currentPath.curves.length>0&&(w.copy(V),M.currentPath.currentPoint.copy(w),J=!0);break;default:console.warn(ut)}k=!1}return M}function r(I){if(!(!I.sheet||!I.sheet.cssRules||!I.sheet.cssRules.length))for(let M=0;M<I.sheet.cssRules.length;M++){const w=I.sheet.cssRules[M];if(w.type!==1)continue;const S=w.selectorText.split(/,/gm).filter(Boolean).map(V=>V.trim());for(let V=0;V<S.length;V++){const J=Object.fromEntries(Object.entries(w.style).filter(([,k])=>k!==""));G[S[V]]=Object.assign(G[S[V]]||{},J)}}}function o(I,M,w,S,V,J,k,st){if(M==0||w==0){I.lineTo(st.x,st.y);return}S=S*Math.PI/180,M=Math.abs(M),w=Math.abs(w);const ot=(k.x-st.x)/2,ct=(k.y-st.y)/2,et=Math.cos(S)*ot+Math.sin(S)*ct,ut=-Math.sin(S)*ot+Math.cos(S)*ct;let gt=M*M,xt=w*w;const B=et*et,R=ut*ut,Mt=B/gt+R/xt;if(Mt>1){const it=Math.sqrt(Mt);M=it*M,w=it*w,gt=M*M,xt=w*w}const Rt=gt*R+xt*B,L=(gt*xt-Rt)/Rt;let b=Math.sqrt(Math.max(0,L));V===J&&(b=-b);const Y=b*M*ut/w,dt=-b*w*et/M,pt=Math.cos(S)*Y-Math.sin(S)*dt+(k.x+st.x)/2,_t=Math.sin(S)*Y+Math.cos(S)*dt+(k.y+st.y)/2,Tt=a(1,0,(et-Y)/M,(ut-dt)/w),yt=a((et-Y)/M,(ut-dt)/w,(-et-Y)/M,(-ut-dt)/w)%(Math.PI*2);I.currentPath.absellipse(pt,_t,M,w,Tt,Tt+yt,J===0,S)}function a(I,M,w,S){const V=I*w+M*S,J=Math.sqrt(I*I+M*M)*Math.sqrt(w*w+S*S);let k=Math.acos(Math.max(-1,Math.min(1,V/J)));return I*S-M*w<0&&(k=-k),k}function c(I){const M=g(I.getAttribute("x")||0),w=g(I.getAttribute("y")||0),S=g(I.getAttribute("rx")||I.getAttribute("ry")||0),V=g(I.getAttribute("ry")||I.getAttribute("rx")||0),J=g(I.getAttribute("width")),k=g(I.getAttribute("height")),st=1-.551915024494,ot=new dn;return ot.moveTo(M+S,w),ot.lineTo(M+J-S,w),(S!==0||V!==0)&&ot.bezierCurveTo(M+J-S*st,w,M+J,w+V*st,M+J,w+V),ot.lineTo(M+J,w+k-V),(S!==0||V!==0)&&ot.bezierCurveTo(M+J,w+k-V*st,M+J-S*st,w+k,M+J-S,w+k),ot.lineTo(M+S,w+k),(S!==0||V!==0)&&ot.bezierCurveTo(M+S*st,w+k,M,w+k-V*st,M,w+k-V),ot.lineTo(M,w+V),(S!==0||V!==0)&&ot.bezierCurveTo(M,w+V*st,M+S*st,w,M+S,w),ot}function l(I){function M(J,k,st){const ot=g(k),ct=g(st);V===0?S.moveTo(ot,ct):S.lineTo(ot,ct),V++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new dn;let V=0;return I.getAttribute("points").replace(w,M),S.currentPath.autoClose=!0,S}function u(I){function M(J,k,st){const ot=g(k),ct=g(st);V===0?S.moveTo(ot,ct):S.lineTo(ot,ct),V++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new dn;let V=0;return I.getAttribute("points").replace(w,M),S.currentPath.autoClose=!1,S}function h(I){const M=g(I.getAttribute("cx")||0),w=g(I.getAttribute("cy")||0),S=g(I.getAttribute("r")||0),V=new $n;V.absarc(M,w,S,0,Math.PI*2);const J=new dn;return J.subPaths.push(V),J}function f(I){const M=g(I.getAttribute("cx")||0),w=g(I.getAttribute("cy")||0),S=g(I.getAttribute("rx")||0),V=g(I.getAttribute("ry")||0),J=new $n;J.absellipse(M,w,S,V,0,Math.PI*2);const k=new dn;return k.subPaths.push(J),k}function m(I){const M=g(I.getAttribute("x1")||0),w=g(I.getAttribute("y1")||0),S=g(I.getAttribute("x2")||0),V=g(I.getAttribute("y2")||0),J=new dn;return J.moveTo(M,w),J.lineTo(S,V),J.currentPath.autoClose=!1,J}function x(I,M){M=Object.assign({},M);let w={};if(I.hasAttribute("class")){const k=I.getAttribute("class").split(/\s/).filter(Boolean).map(st=>st.trim());for(let st=0;st<k.length;st++)w=Object.assign(w,G["."+k[st]])}I.hasAttribute("id")&&(w=Object.assign(w,G["#"+I.getAttribute("id")]));function S(k,st,ot){ot===void 0&&(ot=function(et){return et.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),et}),I.hasAttribute(k)&&(M[st]=ot(I.getAttribute(k))),w[k]&&(M[st]=ot(w[k])),I.style&&I.style[k]!==""&&(M[st]=ot(I.style[k]))}function V(k){return Math.max(0,Math.min(1,g(k)))}function J(k){return Math.max(0,g(k))}return S("fill","fill"),S("fill-opacity","fillOpacity",V),S("fill-rule","fillRule"),S("opacity","opacity",V),S("stroke","stroke"),S("stroke-opacity","strokeOpacity",V),S("stroke-width","strokeWidth",J),S("stroke-linejoin","strokeLineJoin"),S("stroke-linecap","strokeLineCap"),S("stroke-miterlimit","strokeMiterLimit",J),S("visibility","visibility"),M}function p(I,M){return I-(M-I)}function d(I,M,w){if(typeof I!="string")throw new TypeError("Invalid input: "+typeof I);const S={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},V=0,J=1,k=2,st=3;let ot=V,ct=!0,et="",ut="";const gt=[];function xt(Rt,L,b){const Y=new SyntaxError('Unexpected character "'+Rt+'" at index '+L+".");throw Y.partial=b,Y}function B(){et!==""&&(ut===""?gt.push(Number(et)):gt.push(Number(et)*Math.pow(10,Number(ut)))),et="",ut=""}let R;const Mt=I.length;for(let Rt=0;Rt<Mt;Rt++){if(R=I[Rt],Array.isArray(M)&&M.includes(gt.length%w)&&S.FLAGS.test(R)){ot=J,et=R,B();continue}if(ot===V){if(S.WHITESPACE.test(R))continue;if(S.DIGIT.test(R)||S.SIGN.test(R)){ot=J,et=R;continue}if(S.POINT.test(R)){ot=k,et=R;continue}S.COMMA.test(R)&&(ct&&xt(R,Rt,gt),ct=!0)}if(ot===J){if(S.DIGIT.test(R)){et+=R;continue}if(S.POINT.test(R)){et+=R,ot=k;continue}if(S.EXP.test(R)){ot=st;continue}S.SIGN.test(R)&&et.length===1&&S.SIGN.test(et[0])&&xt(R,Rt,gt)}if(ot===k){if(S.DIGIT.test(R)){et+=R;continue}if(S.EXP.test(R)){ot=st;continue}S.POINT.test(R)&&et[et.length-1]==="."&&xt(R,Rt,gt)}if(ot===st){if(S.DIGIT.test(R)){ut+=R;continue}if(S.SIGN.test(R)){if(ut===""){ut+=R;continue}ut.length===1&&S.SIGN.test(ut)&&xt(R,Rt,gt)}}S.WHITESPACE.test(R)?(B(),ot=V,ct=!1):S.COMMA.test(R)?(B(),ot=V,ct=!0):S.SIGN.test(R)?(B(),ot=J,et=R):S.POINT.test(R)?(B(),ot=k,et=R):xt(R,Rt,gt)}return B(),gt}const _=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(I){let M="px";if(typeof I=="string"||I instanceof String)for(let S=0,V=_.length;S<V;S++){const J=_[S];if(I.endsWith(J)){M=J,I=I.substring(0,I.length-J.length);break}}let w;return M==="px"&&e.defaultUnit!=="px"?w=T.in[e.defaultUnit]/e.defaultDPI:(w=T[M][e.defaultUnit],w<0&&(w=T[M].in*e.defaultDPI)),w*parseFloat(I)}function y(I){if(!(I.hasAttribute("transform")||I.nodeName==="use"&&(I.hasAttribute("x")||I.hasAttribute("y"))))return null;const M=E(I);return z.length>0&&M.premultiply(z[z.length-1]),vt.copy(M),z.push(M),M}function E(I){const M=new Jt,w=X;if(I.nodeName==="use"&&(I.hasAttribute("x")||I.hasAttribute("y"))){const S=g(I.getAttribute("x")),V=g(I.getAttribute("y"));M.translate(S,V)}if(I.hasAttribute("transform")){const S=I.getAttribute("transform").split(")");for(let V=S.length-1;V>=0;V--){const J=S[V].trim();if(J==="")continue;const k=J.indexOf("("),st=J.length;if(k>0&&k<st){const ot=J.slice(0,k),ct=d(J.slice(k+1));switch(w.identity(),ot){case"translate":if(ct.length>=1){const et=ct[0];let ut=0;ct.length>=2&&(ut=ct[1]),w.translate(et,ut)}break;case"rotate":if(ct.length>=1){let et=0,ut=0,gt=0;et=ct[0]*Math.PI/180,ct.length>=3&&(ut=ct[1],gt=ct[2]),nt.makeTranslation(-ut,-gt),$.makeRotation(et),O.multiplyMatrices($,nt),nt.makeTranslation(ut,gt),w.multiplyMatrices(nt,O)}break;case"scale":if(ct.length>=1){const et=ct[0];let ut=et;ct.length>=2&&(ut=ct[1]),w.scale(et,ut)}break;case"skewX":ct.length===1&&w.set(1,Math.tan(ct[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ct.length===1&&w.set(1,0,0,Math.tan(ct[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ct.length===6&&w.set(ct[0],ct[2],ct[4],ct[1],ct[3],ct[5],0,0,1);break}}M.premultiply(w)}}return M}function P(I,M){function w(k){at.set(k.x,k.y,1).applyMatrix3(M),k.set(at.x,at.y)}function S(k){const st=k.xRadius,ot=k.yRadius,ct=Math.cos(k.aRotation),et=Math.sin(k.aRotation),ut=new F(st*ct,st*et,0),gt=new F(-ot*et,ot*ct,0),xt=ut.applyMatrix3(M),B=gt.applyMatrix3(M),R=X.set(xt.x,B.x,0,xt.y,B.y,0,0,0,1),Mt=nt.copy(R).invert(),b=$.copy(Mt).transpose().multiply(Mt).elements,Y=Z(b[0],b[1],b[4]),dt=Math.sqrt(Y.rt1),pt=Math.sqrt(Y.rt2);if(k.xRadius=1/dt,k.yRadius=1/pt,k.aRotation=Math.atan2(Y.sn,Y.cs),!((k.aEndAngle-k.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Tt=nt.set(dt,0,0,0,pt,0,0,0,1),yt=$.set(Y.cs,Y.sn,0,-Y.sn,Y.cs,0,0,0,1),it=Tt.multiply(yt).multiply(R),Lt=bt=>{const{x:Pt,y:At}=new F(Math.cos(bt),Math.sin(bt),0).applyMatrix3(it);return Math.atan2(At,Pt)};k.aStartAngle=Lt(k.aStartAngle),k.aEndAngle=Lt(k.aEndAngle),D(M)&&(k.aClockwise=!k.aClockwise)}}function V(k){const st=A(M),ot=N(M);k.xRadius*=st,k.yRadius*=ot;const ct=st>Number.EPSILON?Math.atan2(M.elements[1],M.elements[0]):Math.atan2(-M.elements[3],M.elements[4]);k.aRotation+=ct,D(M)&&(k.aStartAngle*=-1,k.aEndAngle*=-1,k.aClockwise=!k.aClockwise)}const J=I.subPaths;for(let k=0,st=J.length;k<st;k++){const ct=J[k].curves;for(let et=0;et<ct.length;et++){const ut=ct[et];ut.isLineCurve?(w(ut.v1),w(ut.v2)):ut.isCubicBezierCurve?(w(ut.v0),w(ut.v1),w(ut.v2),w(ut.v3)):ut.isQuadraticBezierCurve?(w(ut.v0),w(ut.v1),w(ut.v2)):ut.isEllipseCurve&&(rt.set(ut.aX,ut.aY),w(rt),ut.aX=rt.x,ut.aY=rt.y,v(M)?S(ut):V(ut))}}}function D(I){const M=I.elements;return M[0]*M[4]-M[1]*M[3]<0}function v(I){const M=I.elements,w=M[0]*M[3]+M[1]*M[4];if(w===0)return!1;const S=A(I),V=N(I);return Math.abs(w/(S*V))>Number.EPSILON}function A(I){const M=I.elements;return Math.sqrt(M[0]*M[0]+M[1]*M[1])}function N(I){const M=I.elements;return Math.sqrt(M[3]*M[3]+M[4]*M[4])}function Z(I,M,w){let S,V,J,k,st;const ot=I+w,ct=I-w,et=Math.sqrt(ct*ct+4*M*M);return ot>0?(S=.5*(ot+et),st=1/S,V=I*st*w-M*st*M):ot<0?V=.5*(ot-et):(S=.5*et,V=-.5*et),ct>0?J=ct+et:J=ct-et,Math.abs(J)>2*Math.abs(M)?(st=-2*M/J,k=1/Math.sqrt(1+st*st),J=st*k):Math.abs(M)===0?(J=1,k=0):(st=-.5*J/M,J=1/Math.sqrt(1+st*st),k=st*J),ct>0&&(st=J,J=-k,k=st),{rt1:S,rt2:V,cs:J,sn:k}}const H=[],G={},z=[],X=new Jt,nt=new Jt,$=new Jt,O=new Jt,rt=new ht,at=new F,vt=new Jt,j=new DOMParser().parseFromString(t,"image/svg+xml");return n(j.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:H,xml:j.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(p,d,_,T){const g=p.x,y=d.x,E=_.x,P=T.x,D=p.y,v=d.y,A=_.y,N=T.y,Z=(P-E)*(D-A)-(N-A)*(g-E),H=(y-g)*(D-A)-(v-D)*(g-E),G=(N-A)*(y-g)-(P-E)*(v-D),z=Z/G,X=H/G;if(G===0&&Z!==0||z<=0||z>=1||X<0||X>1)return null;if(Z===0&&G===0){for(let nt=0;nt<2;nt++)if(o(nt===0?_:T,p,d),i.loc==n.ORIGIN){const $=nt===0?_:T;return{x:$.x,y:$.y,t:i.t}}else if(i.loc==n.BETWEEN){const $=+(g+i.t*(y-g)).toPrecision(10),O=+(D+i.t*(v-D)).toPrecision(10);return{x:$,y:O,t:i.t}}return null}else{for(let O=0;O<2;O++)if(o(O===0?_:T,p,d),i.loc==n.ORIGIN){const rt=O===0?_:T;return{x:rt.x,y:rt.y,t:i.t}}const nt=+(g+z*(y-g)).toPrecision(10),$=+(D+z*(v-D)).toPrecision(10);return{x:nt,y:$,t:z}}}function o(p,d,_){const T=_.x-d.x,g=_.y-d.y,y=p.x-d.x,E=p.y-d.y,P=T*E-y*g;if(p.x===d.x&&p.y===d.y){i.loc=n.ORIGIN,i.t=0;return}if(p.x===_.x&&p.y===_.y){i.loc=n.DESTINATION,i.t=1;return}if(P<-Number.EPSILON){i.loc=n.LEFT;return}if(P>Number.EPSILON){i.loc=n.RIGHT;return}if(T*y<0||g*E<0){i.loc=n.BEHIND;return}if(Math.sqrt(T*T+g*g)<Math.sqrt(y*y+E*E)){i.loc=n.BEYOND;return}let D;T!==0?D=y/T:D=E/g,i.loc=n.BETWEEN,i.t=D}function a(p,d){const _=[],T=[];for(let g=1;g<p.length;g++){const y=p[g-1],E=p[g];for(let P=1;P<d.length;P++){const D=d[P-1],v=d[P],A=r(y,E,D,v);A!==null&&_.find(N=>N.t<=A.t+Number.EPSILON&&N.t>=A.t-Number.EPSILON)===void 0&&(_.push(A),T.push(new ht(A.x,A.y)))}}return T}function c(p,d,_){const T=new ht;d.getCenter(T);const g=[];return _.forEach(y=>{y.boundingBox.containsPoint(T)&&a(p,y.points).forEach(P=>{g.push({identifier:y.identifier,isCW:y.isCW,point:P})})}),g.sort((y,E)=>y.point.x-E.point.x),g}function l(p,d,_,T,g){(g==null||g==="")&&(g="nonzero");const y=new ht;p.boundingBox.getCenter(y);const E=[new ht(_,y.y),new ht(T,y.y)],P=c(E,p.boundingBox,d);P.sort((H,G)=>H.point.x-G.point.x);const D=[],v=[];P.forEach(H=>{H.identifier===p.identifier?D.push(H):v.push(H)});const A=D[0].point.x,N=[];let Z=0;for(;Z<v.length&&v[Z].point.x<A;)N.length>0&&N[N.length-1]===v[Z].identifier?N.pop():N.push(v[Z].identifier),Z++;if(N.push(p.identifier),g==="evenodd"){const H=N.length%2===0,G=N[N.length-2];return{identifier:p.identifier,isHole:H,for:G}}else if(g==="nonzero"){let H=!0,G=null,z=null;for(let X=0;X<N.length;X++){const nt=N[X];H?(z=d[nt].isCW,H=!1,G=nt):z!==d[nt].isCW&&(z=d[nt].isCW,H=!0)}return{identifier:p.identifier,isHole:H,for:G}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(p=>{const d=p.getPoints();let _=-999999999,T=999999999,g=-999999999,y=999999999;for(let E=0;E<d.length;E++){const P=d[E];P.y>_&&(_=P.y),P.y<T&&(T=P.y),P.x>g&&(g=P.x),P.x<y&&(y=P.x)}return h<=g&&(h=g+1),u>=y&&(u=y-1),{curves:p.curves,points:d,isCW:lr.isClockWise(d),identifier:-1,boundingBox:new Cp(new ht(y,T),new ht(g,_))}});f=f.filter(p=>p.points.length>1);for(let p=0;p<f.length;p++)f[p].identifier=p;const m=f.map(p=>l(p,f,u,h,t.userData?t.userData.style.fillRule:void 0)),x=[];return f.forEach(p=>{if(!m[p.identifier].isHole){const _=new tr;_.curves=p.curves,m.filter(g=>g.isHole&&g.for===p.identifier).forEach(g=>{const y=f[g.identifier],E=new $n;E.curves=y.curves,_.holes.push(E)}),x.push(_)}}),x}static getStrokeStyle(t,e,n,i,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(t,e,n,i){const r=[],o=[],a=[];if(ys.pointsToStrokeWithBuffers(t,e,n,i,r,o,a)===0)return null;const c=new be;return c.setAttribute("position",new Qt(r,3)),c.setAttribute("normal",new Qt(o,3)),c.setAttribute("uv",new Qt(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,i,r,o,a,c){const l=new ht,u=new ht,h=new ht,f=new ht,m=new ht,x=new ht,p=new ht,d=new ht,_=new ht,T=new ht,g=new ht,y=new ht,E=new ht,P=new ht,D=new ht,v=new ht,A=new ht;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,t=ct(t);const N=t.length;if(N<2)return 0;const Z=t[0].equals(t[N-1]);let H,G=t[0],z;const X=e.strokeWidth/2,nt=1/(N-1);let $=0,O,rt,at,vt,j=!1,lt=0,I=c*3,M=c*2;w(t[0],t[1],l).multiplyScalar(X),d.copy(t[0]).sub(l),_.copy(t[0]).add(l),T.copy(d),g.copy(_);for(let et=1;et<N;et++){H=t[et],et===N-1?Z?z=t[1]:z=void 0:z=t[et+1];const ut=l;if(w(G,H,ut),h.copy(ut).multiplyScalar(X),y.copy(H).sub(h),E.copy(H).add(h),O=$+nt,rt=!1,z!==void 0){w(H,z,u),h.copy(u).multiplyScalar(X),P.copy(H).sub(h),D.copy(H).add(h),at=!0,h.subVectors(z,G),ut.dot(h)<0&&(at=!1),et===1&&(j=at),h.subVectors(z,H),h.normalize();const gt=Math.abs(ut.dot(h));if(gt>Number.EPSILON){const xt=X/gt;h.multiplyScalar(-xt),f.subVectors(H,G),m.copy(f).setLength(xt).add(h),v.copy(m).negate();const B=m.length(),R=f.length();f.divideScalar(R),x.subVectors(z,H);const Mt=x.length();switch(x.divideScalar(Mt),f.dot(v)<R&&x.dot(v)<Mt&&(rt=!0),A.copy(m).add(H),v.add(H),vt=!1,rt?at?(D.copy(v),E.copy(v)):(P.copy(v),y.copy(v)):J(),e.strokeLineJoin){case"bevel":k(at,rt,O);break;case"round":st(at,rt),at?V(H,y,P,O,0):V(H,D,E,O,1);break;case"miter":case"miter-clip":default:const Rt=X*e.strokeMiterLimit/B;if(Rt<1)if(e.strokeLineJoin!=="miter-clip"){k(at,rt,O);break}else st(at,rt),at?(x.subVectors(A,y).multiplyScalar(Rt).add(y),p.subVectors(A,P).multiplyScalar(Rt).add(P),S(y,O,0),S(x,O,0),S(H,O,.5),S(H,O,.5),S(x,O,0),S(p,O,0),S(H,O,.5),S(p,O,0),S(P,O,0)):(x.subVectors(A,E).multiplyScalar(Rt).add(E),p.subVectors(A,D).multiplyScalar(Rt).add(D),S(E,O,1),S(x,O,1),S(H,O,.5),S(H,O,.5),S(x,O,1),S(p,O,1),S(H,O,.5),S(p,O,1),S(D,O,1));else rt?(at?(S(_,$,1),S(d,$,0),S(A,O,0),S(_,$,1),S(A,O,0),S(v,O,1)):(S(_,$,1),S(d,$,0),S(A,O,1),S(d,$,0),S(v,O,0),S(A,O,1)),at?P.copy(A):D.copy(A)):at?(S(y,O,0),S(A,O,0),S(H,O,.5),S(H,O,.5),S(A,O,0),S(P,O,0)):(S(E,O,1),S(A,O,1),S(H,O,.5),S(H,O,.5),S(A,O,1),S(D,O,1)),vt=!0;break}}else J()}else J();!Z&&et===N-1&&ot(t[0],T,g,at,!0,$),$=O,G=H,d.copy(P),_.copy(D)}if(!Z)ot(H,y,E,at,!1,O);else if(rt&&r){let et=A,ut=v;j!==at&&(et=v,ut=A),at?(vt||j)&&(ut.toArray(r,0*3),ut.toArray(r,3*3),vt&&et.toArray(r,1*3)):(vt||!j)&&(ut.toArray(r,1*3),ut.toArray(r,3*3),vt&&et.toArray(r,0*3))}return lt;function w(et,ut,gt){return gt.subVectors(ut,et),gt.set(-gt.y,gt.x).normalize()}function S(et,ut,gt){r&&(r[I]=et.x,r[I+1]=et.y,r[I+2]=0,o&&(o[I]=0,o[I+1]=0,o[I+2]=1),I+=3,a&&(a[M]=ut,a[M+1]=gt,M+=2)),lt+=3}function V(et,ut,gt,xt,B){l.copy(ut).sub(et).normalize(),u.copy(gt).sub(et).normalize();let R=Math.PI;const Mt=l.dot(u);Math.abs(Mt)<1&&(R=Math.abs(Math.acos(Mt))),R/=n,h.copy(ut);for(let Rt=0,L=n-1;Rt<L;Rt++)f.copy(h).rotateAround(et,R),S(h,xt,B),S(f,xt,B),S(et,xt,.5),h.copy(f);S(f,xt,B),S(gt,xt,B),S(et,xt,.5)}function J(){S(_,$,1),S(d,$,0),S(y,O,0),S(_,$,1),S(y,O,1),S(E,O,0)}function k(et,ut,gt){ut?et?(S(_,$,1),S(d,$,0),S(y,O,0),S(_,$,1),S(y,O,0),S(v,O,1),S(y,gt,0),S(P,gt,0),S(v,gt,.5)):(S(_,$,1),S(d,$,0),S(E,O,1),S(d,$,0),S(v,O,0),S(E,O,1),S(E,gt,1),S(D,gt,0),S(v,gt,.5)):et?(S(y,gt,0),S(P,gt,0),S(H,gt,.5)):(S(E,gt,1),S(D,gt,0),S(H,gt,.5))}function st(et,ut){ut&&(et?(S(_,$,1),S(d,$,0),S(y,O,0),S(_,$,1),S(y,O,0),S(v,O,1),S(y,$,0),S(H,O,.5),S(v,O,1),S(H,O,.5),S(P,$,0),S(v,O,1)):(S(_,$,1),S(d,$,0),S(E,O,1),S(d,$,0),S(v,O,0),S(E,O,1),S(E,$,1),S(v,O,0),S(H,O,.5),S(H,O,.5),S(v,O,0),S(D,$,1)))}function ot(et,ut,gt,xt,B,R){switch(e.strokeLineCap){case"round":B?V(et,gt,ut,R,.5):V(et,ut,gt,R,.5);break;case"square":if(B)l.subVectors(ut,et),u.set(l.y,-l.x),h.addVectors(l,u).add(et),f.subVectors(u,l).add(et),xt?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),h.toArray(r,3*3),f.toArray(r,0*3));else{l.subVectors(gt,et),u.set(l.y,-l.x),h.addVectors(l,u).add(et),f.subVectors(u,l).add(et);const Mt=r.length;xt?(h.toArray(r,Mt-1*3),f.toArray(r,Mt-2*3),f.toArray(r,Mt-4*3)):(h.toArray(r,Mt-2*3),f.toArray(r,Mt-1*3),f.toArray(r,Mt-4*3))}break}}function ct(et){let ut=!1;for(let xt=1,B=et.length-1;xt<B;xt++)if(et[xt].distanceTo(et[xt+1])<i){ut=!0;break}if(!ut)return et;const gt=[];gt.push(et[0]);for(let xt=1,B=et.length-1;xt<B;xt++)et[xt].distanceTo(et[xt+1])>=i&&gt.push(et[xt]);return gt.push(et[et.length-1]),gt}}}function Lp(s){let t=new F;return new Tn().setFromObject(s).getCenter(t),t}function Pp(s){let t=new F;return new Tn().setFromObject(s).getSize(t),t}function Rp(s,t){const e=Pp(s),n=t.divide(e);s.scale.set(isNaN(n.x)?1:n.x,isNaN(n.y)?1:n.y,isNaN(n.z)?1:n.z)}function Dp(s){const t=s.worldToLocal(Lp(s));s.position.set(-t.x,-t.y,-t.z)}function Ip(s){const t=new Xn,e=s.xml.querySelectorAll("image");for(const n of e){const i=n.getAttribute("href"),r=+(n.getAttribute("x")??0),o=+(n.getAttribute("y")??0),a=+n.getAttribute("width"),c=+n.getAttribute("height"),l=new Tp().load(i),u=new Mo({map:l}),h=new Wd(u);h.scale.set(a,c,1),h.position.set(r,o,0),t.add(h)}return Dp(t),t}function Hp(s,t){const e=new Xn;return new ys().load(s,i=>{e.add(Ip(i)),Rp(e,t)},i=>{},i=>{}),e}export{ws as A,be as B,Gt as C,Bp as D,ni as E,Qt as F,Xn as G,Op as L,oo as M,mo as O,pn as P,To as Q,Vp as R,bn as S,Io as T,ec as U,F as V,Sn as W,ht as a,Yt as b,rn as c,Up as d,Ie as e,Do as f,vs as g,Co as h,Hd as i,tp as j,Tn as k,Hp as l,Np as m,Ei as n,Fp as o,Wp as p,Gp as q,yo as r,zp as s,Pe as t,Tp as u,Se as v,kp as w};
