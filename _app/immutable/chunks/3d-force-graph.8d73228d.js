import{d as bc,i as Zu,m as Ku,b as Ju,n as Qu}from"./init.3cd90c52.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="150",en={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eh=0,ls=1,th=2,wc=1,nh=2,Ki=3,Dn=0,St=1,An=2,Ln=0,Mi=1,cs=2,us=3,hs=4,ih=5,vi=100,rh=101,ah=102,fs=103,ds=104,oh=200,sh=201,lh=202,ch=203,Mc=204,Sc=205,uh=206,hh=207,fh=208,dh=209,ph=210,mh=0,gh=1,vh=2,fo=3,_h=4,yh=5,xh=6,bh=7,ko=0,wh=1,Mh=2,mn=0,Sh=1,Eh=2,Th=3,Ah=4,Ch=5,Ec=300,Ti=301,Ai=302,po=303,mo=304,ia=306,go=1e3,Wt=1001,vo=1002,xt=1003,ps=1004,va=1005,Ft=1006,Ph=1007,or=1008,$n=1009,Lh=1010,Rh=1011,Tc=1012,Dh=1013,Hn=1014,Wn=1015,sr=1016,Oh=1017,Ih=1018,Si=1020,Nh=1021,jt=1023,Fh=1024,zh=1025,jn=1026,Ci=1027,kh=1028,Bh=1029,Uh=1030,Gh=1031,Vh=1033,_a=33776,ya=33777,xa=33778,ba=33779,ms=35840,gs=35841,vs=35842,_s=35843,Hh=36196,ys=37492,xs=37496,bs=37808,ws=37809,Ms=37810,Ss=37811,Es=37812,Ts=37813,As=37814,Cs=37815,Ps=37816,Ls=37817,Rs=37818,Ds=37819,Os=37820,Is=37821,wa=36492,Wh=36283,Ns=36284,Fs=36285,zs=36286,qn=3e3,qe=3001,jh=3200,$h=3201,Ac=0,qh=1,Qt="srgb",lr="srgb-linear",Cc="display-p3",Ma=7680,Xh=519,_o=35044,ks="300 es",yo=1035;class Yt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,Bs=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Yh(i,e){return(i%e+e)%e}function Ea(i,e,t){return(1-t)*i+t*e}function Us(i){return(i&i-1)===0&&i!==0}function Zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=r[0],p=r[3],v=r[6],w=r[1],_=r[4],b=r[7],y=r[2],S=r[5],P=r[8];return a[0]=s*d+o*w+l*y,a[3]=s*p+o*_+l*S,a[6]=s*v+o*b+l*P,a[1]=c*d+u*w+h*y,a[4]=c*p+u*_+h*S,a[7]=c*v+u*b+h*P,a[2]=f*d+m*w+g*y,a[5]=f*p+m*_+g*S,a[8]=f*v+m*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*a,m=c*a-s*l,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(o*n-r*s)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*a-o*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(s*t-n*a)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new wt;function Pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class Xt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=a[s+0],m=a[s+1],g=a[s+2],d=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-o;const v=l*f+c*m+u*g+h*d,w=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const y=Math.sqrt(_),S=Math.atan2(y,v*w);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y}const b=o*w;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,h=h*p+d*b,p===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=a[s],f=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(a/2),f=l(n/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-r*o,this._w=s*u-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*r-o*n,u=l*n+o*t-a*r,h=l*r+a*n-s*t,f=-a*t-s*n-o*r;return this.x=c*l+f*-a+u*-o-h*-s,this.y=u*l+f*-s+h*-a-c*-o,this.z=h*l+f*-o+c*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new O,Gs=new Xt;function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kh=new wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Jh=new wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Pn=new O;function Qh(i){return i.convertSRGBToLinear(),Pn.set(i.r,i.g,i.b).applyMatrix3(Jh),i.setRGB(Pn.x,Pn.y,Pn.z)}function ef(i){return Pn.set(i.r,i.g,i.b).applyMatrix3(Kh),i.setRGB(Pn.x,Pn.y,Pn.z).convertLinearToSRGB()}const tf={[lr]:i=>i,[Qt]:i=>i.convertSRGBToLinear(),[Cc]:Qh},nf={[lr]:i=>i,[Qt]:i=>i.convertLinearToSRGB(),[Cc]:ef},vt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return lr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=tf[e],r=nf[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Jn;class Lc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=cr("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ei(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Rc{constructor(e=null){this.isSource=!0,this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Pa(r[s].image)):a.push(Pa(r[s]))}else a=Pa(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class Et extends Yt{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Wt,r=Wt,a=Ft,s=or,o=jt,l=$n,c=Et.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Rn(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Ec;Et.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(m+1)/2,y=(v+1)/2,S=(u+f)/4,P=(h+d)/4,x=(g+p)/4;return _>b&&_>y?_<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(_),r=S/n,a=P/n):b>y?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=S/r,a=x/r):y<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(y),n=P/a,r=x/a),this.set(n,r,a,t),this}let w=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-d)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends Yt{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dc extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class af extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,a=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>a&&(a=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(a,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,a=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>a&&(a=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(a,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let s=0,o=a.count;s<o;s++)zn.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(zn)}else n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox),La.applyMatrix4(e.matrixWorld),this.union(La);const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),pr.subVectors(this.max,Ni),Qn.subVectors(e.a,Ni),ei.subVectors(e.b,Ni),ti.subVectors(e.c,Ni),xn.subVectors(ei,Qn),bn.subVectors(ti,ei),kn.subVectors(Qn,ti);let t=[0,-xn.z,xn.y,0,-bn.z,bn.y,0,-kn.z,kn.y,xn.z,0,-xn.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-xn.y,xn.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!Ra(t,Qn,ei,ti,pr)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,Qn,ei,ti,pr))?!1:(mr.crossVectors(xn,bn),t=[mr.x,mr.y,mr.z],Ra(t,Qn,ei,ti,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,La=new Yn,Qn=new O,ei=new O,ti=new O,xn=new O,bn=new O,kn=new O,Ni=new O,pr=new O,mr=new O,Bn=new O;function Ra(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Bn.fromArray(i,a);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const of=new Yn,Fi=new O,Da=new O;class ra{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):of.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(Da)),this.expandByPoint(Fi.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new O,Oa=new O,gr=new O,wn=new O,Ia=new O,vr=new O,Na=new O;class Bo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Oa.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Oa);const a=e.distanceTo(t)*.5,s=-this.direction.dot(gr),o=wn.dot(this.direction),l=-wn.dot(gr),c=wn.lengthSq(),u=Math.abs(1-s*s);let h,f,m,g;if(u>0)if(h=s*l-o,f=s*o-l,g=a*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+o)),m=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),m=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oa).addScaledVector(gr,f),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,a){Ia.subVectors(t,e),vr.subVectors(n,e),Na.crossVectors(Ia,vr);let s=this.direction.dot(Na),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(vr.crossVectors(wn,vr));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(wn));if(c<0||l+c>s)return null;const u=-o*wn.dot(Na);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,a,s,o,l,c,u,h,f,m,g,d,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=a,v[5]=s,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=m,v[7]=g,v[11]=d,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),a=1/ni.setFromMatrixColumn(e,1).length(),s=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=s*u,m=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-s*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=d-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=s*l,m=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=s*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,lf)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Mn.crossVectors(n,Rt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Mn.crossVectors(n,Rt)),Mn.normalize(),_r.crossVectors(Rt,Mn),r[0]=Mn.x,r[4]=_r.x,r[8]=Rt.x,r[1]=Mn.y,r[5]=_r.y,r[9]=Rt.y,r[2]=Mn.z,r[6]=_r.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],v=n[14],w=n[3],_=n[7],b=n[11],y=n[15],S=r[0],P=r[4],x=r[8],E=r[12],I=r[1],B=r[5],V=r[9],z=r[13],A=r[2],L=r[6],k=r[10],J=r[14],$=r[3],ee=r[7],ie=r[11],me=r[15];return a[0]=s*S+o*I+l*A+c*$,a[4]=s*P+o*B+l*L+c*ee,a[8]=s*x+o*V+l*k+c*ie,a[12]=s*E+o*z+l*J+c*me,a[1]=u*S+h*I+f*A+m*$,a[5]=u*P+h*B+f*L+m*ee,a[9]=u*x+h*V+f*k+m*ie,a[13]=u*E+h*z+f*J+m*me,a[2]=g*S+d*I+p*A+v*$,a[6]=g*P+d*B+p*L+v*ee,a[10]=g*x+d*V+p*k+v*ie,a[14]=g*E+d*z+p*J+v*me,a[3]=w*S+_*I+b*A+y*$,a[7]=w*P+_*B+b*L+y*ee,a[11]=w*x+_*V+b*k+y*ie,a[15]=w*E+_*z+b*J+y*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],v=e[15];return g*(+a*l*h-r*c*h-a*o*f+n*c*f+r*o*m-n*l*m)+d*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*u-a*l*u)+p*(+t*c*h-t*o*m-a*s*h+n*s*m+a*o*u-n*c*u)+v*(-r*o*u-t*l*h+t*o*f+r*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],v=e[15],w=h*p*c-d*f*c+d*l*m-o*p*m-h*l*v+o*f*v,_=g*f*c-u*p*c-g*l*m+s*p*m+u*l*v-s*f*v,b=u*d*c-g*h*c+g*o*m-s*d*m-u*o*v+s*h*v,y=g*h*l-u*d*l-g*o*f+s*d*f+u*o*p-s*h*p,S=t*w+n*_+r*b+a*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/S;return e[0]=w*P,e[1]=(d*f*a-h*p*a-d*r*m+n*p*m+h*r*v-n*f*v)*P,e[2]=(o*p*a-d*l*a+d*r*c-n*p*c-o*r*v+n*l*v)*P,e[3]=(h*l*a-o*f*a-h*r*c+n*f*c+o*r*m-n*l*m)*P,e[4]=_*P,e[5]=(u*p*a-g*f*a+g*r*m-t*p*m-u*r*v+t*f*v)*P,e[6]=(g*l*a-s*p*a-g*r*c+t*p*c+s*r*v-t*l*v)*P,e[7]=(s*f*a-u*l*a+u*r*c-t*f*c-s*r*m+t*l*m)*P,e[8]=b*P,e[9]=(g*h*a-u*d*a-g*n*m+t*d*m+u*n*v-t*h*v)*P,e[10]=(s*d*a-g*o*a+g*n*c-t*d*c-s*n*v+t*o*v)*P,e[11]=(u*o*a-s*h*a-u*n*c+t*h*c+s*n*m-t*o*m)*P,e[12]=y*P,e[13]=(u*d*r-g*h*r+g*n*f-t*d*f-u*n*p+t*h*p)*P,e[14]=(g*o*r-s*d*r-g*n*l+t*d*l+s*n*p-t*o*p)*P,e[15]=(s*h*r-u*o*r+u*n*l-t*h*l-s*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,h=o+o,f=a*c,m=a*u,g=a*h,d=s*u,p=s*h,v=o*h,w=l*c,_=l*u,b=l*h,y=n.x,S=n.y,P=n.z;return r[0]=(1-(d+v))*y,r[1]=(m+b)*y,r[2]=(g-_)*y,r[3]=0,r[4]=(m-b)*S,r[5]=(1-(f+v))*S,r[6]=(p+w)*S,r[7]=0,r[8]=(g+_)*P,r[9]=(p-w)*P,r[10]=(1-(f+d))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ni.set(r[0],r[1],r[2]).length();const s=ni.set(r[4],r[5],r[6]).length(),o=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/a,u=1/s,h=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s){const o=this.elements,l=2*a/(t-e),c=2*a/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(s+a)/(s-a),m=-2*s*a/(s-a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,a,s){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(s-a),h=(t+e)*l,f=(n+r)*c,m=(s+a)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new O,Bt=new Ye,sf=new O(0,0,0),lf=new O(1,1,1),Mn=new O,_r=new O,Rt=new O,Vs=new Ye,Hs=new Xt;class aa{constructor(e=0,t=0,n=0,r=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hs.setFromEuler(this),this.setFromQuaternion(Hs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cf=0;const Ws=new O,ii=new Xt,ln=new Ye,yr=new O,zi=new O,uf=new O,hf=new Xt,js=new O(1,0,0),$s=new O(0,1,0),qs=new O(0,0,1),ff={type:"added"},Xs={type:"removed"};class ct extends Yt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new O,t=new aa,n=new Xt,r=new O(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new wt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(js,e)}rotateY(e){return this.rotateOnAxis($s,e)}rotateZ(e){return this.rotateOnAxis(qs,e)}translateOnAxis(e,t){return Ws.copy(e).applyQuaternion(this.quaternion),this.position.add(Ws.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(js,e)}translateY(e){return this.translateOnAxis($s,e)}translateZ(e){return this.translateOnAxis(qs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(zi,yr,this.up):ln.lookAt(yr,zi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(ln),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ct.DEFAULT_UP=new O(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new O,cn=new O,Fa=new O,un=new O,ri=new O,ai=new O,Ys=new O,za=new O,ka=new O,Ba=new O;class nn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ut.subVectors(e,t),r.cross(Ut);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ut.subVectors(r,t),cn.subVectors(n,t),Fa.subVectors(e,t);const s=Ut.dot(Ut),o=Ut.dot(cn),l=Ut.dot(Fa),c=cn.dot(cn),u=cn.dot(Fa),h=s*c-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,g=(s*u-o*l)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,un),l.set(0,0),l.addScaledVector(a,un.x),l.addScaledVector(s,un.y),l.addScaledVector(o,un.z),l}static isFrontFacing(e,t,n,r){return Ut.subVectors(n,t),cn.subVectors(e,t),Ut.cross(cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ut.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return nn.getUV(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;ri.subVectors(r,n),ai.subVectors(a,n),za.subVectors(e,n);const l=ri.dot(za),c=ai.dot(za);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,r);const u=ri.dot(ka),h=ai.dot(ka);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(ri,s);Ba.subVectors(e,a);const m=ri.dot(Ba),g=ai.dot(Ba);if(g>=0&&m<=g)return t.copy(a);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ai,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ys.subVectors(a,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(Ys,o);const v=1/(p+d+f);return s=d*v,o=f*v,t.copy(n).addScaledVector(ri,s).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let df=0;class Zn extends Yt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Mi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gt={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=Yh(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ua(s,a,e+1/3),this.g=Ua(s,a,e),this.b=Ua(s,a,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,vt.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,vt.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(a[1])/360,c=parseFloat(a[2])/100,u=parseFloat(a[3])/100;return n(a[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return vt.fromWorkingColorSpace(ht.copy(this),e),ft(ht.r*255,0,255)<<16^ft(ht.g*255,0,255)<<8^ft(ht.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(ht.copy(this),t);const n=ht.r,r=ht.g,a=ht.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-n)/h+2;break;case a:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(ht.copy(this),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Qt){vt.fromWorkingColorSpace(ht.copy(this),e);const t=ht.r,n=ht.g,r=ht.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(xr);const n=Ea(Gt.h,xr.h,t),r=Ea(Gt.s,xr.s,t),a=Ea(Gt.l,xr.l,t);return this.setHSL(n,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ht=new ke;ke.NAMES=Oc;class Go extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new O,br=new le;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),r=We(r,this.array),a=We(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ic extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pf=0;const Nt=new Ye,Ga=new ct,oi=new O,Dt=new Yn,ki=new Yn,st=new O;class Tt extends Yt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?Nc:Ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new wt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(Dt.min,ki.min),Dt.expandByPoint(st),st.addVectors(Dt.max,ki.max),Dt.expandByPoint(st)):(Dt.expandByPoint(ki.min),Dt.expandByPoint(ki.max))}Dt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)st.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(st));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)st.fromBufferAttribute(o,c),l&&(oi.fromBufferAttribute(e,c),st.add(oi)),r=Math.max(r,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new O,u[I]=new O;const h=new O,f=new O,m=new O,g=new le,d=new le,p=new le,v=new O,w=new O;function _(I,B,V){h.fromArray(r,I*3),f.fromArray(r,B*3),m.fromArray(r,V*3),g.fromArray(s,I*2),d.fromArray(s,B*2),p.fromArray(s,V*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const z=1/(d.x*p.y-p.x*d.y);isFinite(z)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(z),w.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(z),c[I].add(v),c[B].add(v),c[V].add(v),u[I].add(w),u[B].add(w),u[V].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,B=b.length;I<B;++I){const V=b[I],z=V.start,A=V.count;for(let L=z,k=z+A;L<k;L+=3)_(n[L+0],n[L+1],n[L+2])}const y=new O,S=new O,P=new O,x=new O;function E(I){P.fromArray(a,I*3),x.copy(P);const B=c[I];y.copy(B),y.sub(P.multiplyScalar(P.dot(B))).normalize(),S.crossVectors(x,B);const z=S.dot(u[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=z}for(let I=0,B=b.length;I<B;++I){const V=b[I],z=V.start,A=V.count;for(let L=z,k=z+A;L<k;L+=3)E(n[L+0]),E(n[L+1]),E(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new O,a=new O,s=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,d),s.fromBufferAttribute(t,p),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let v=0;v<u;v++)f[g++]=c[m++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zs=new Ye,Jt=new Bo,wr=new ra,Ks=new O,Bi=new O,Ui=new O,Gi=new O,Va=new O,Mr=new O,Sr=new le,Er=new le,Tr=new le,Ha=new O,Ar=new O;class $t extends ct{constructor(e=new Tt,t=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Mr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(Va.fromBufferAttribute(h,e),s?Mr.addScaledVector(Va,u):Mr.addScaledVector(Va.sub(t),u))}t.add(Mr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(a),Jt.copy(e.ray).recast(e.near),wr.containsPoint(Jt.origin)===!1&&(Jt.intersectSphere(wr,Ks)===null||Jt.origin.distanceToSquared(Ks)>(e.far-e.near)**2))||(Zs.copy(a).invert(),Jt.copy(e.ray).applyMatrix4(Zs),n.boundingBox!==null&&Jt.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=r[d.materialIndex],v=Math.max(d.start,f.start),w=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let _=v,b=w;_<b;_+=3){const y=o.getX(_),S=o.getX(_+1),P=o.getX(_+2);s=Cr(this,p,e,Jt,c,u,y,S,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const v=o.getX(d),w=o.getX(d+1),_=o.getX(d+2);s=Cr(this,r,e,Jt,c,u,v,w,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=r[d.materialIndex],v=Math.max(d.start,f.start),w=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let _=v,b=w;_<b;_+=3){const y=_,S=_+1,P=_+2;s=Cr(this,p,e,Jt,c,u,y,S,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const v=d,w=d+1,_=d+2;s=Cr(this,r,e,Jt,c,u,v,w,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function mf(i,e,t,n,r,a,s,o){let l;if(e.side===St?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Dn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:i}}function Cr(i,e,t,n,r,a,s,o,l){i.getVertexPosition(s,Bi),i.getVertexPosition(o,Ui),i.getVertexPosition(l,Gi);const c=mf(i,e,t,n,Bi,Ui,Gi,Ha);if(c){r&&(Sr.fromBufferAttribute(r,s),Er.fromBufferAttribute(r,o),Tr.fromBufferAttribute(r,l),c.uv=nn.getUV(Ha,Bi,Ui,Gi,Sr,Er,Tr,new le)),a&&(Sr.fromBufferAttribute(a,s),Er.fromBufferAttribute(a,o),Tr.fromBufferAttribute(a,l),c.uv2=nn.getUV(Ha,Bi,Ui,Gi,Sr,Er,Tr,new le));const u={a:s,b:o,c:l,normal:new O,materialIndex:0};nn.getNormal(Bi,Ui,Gi,u.normal),c.face=u}return c}class fr extends Tt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function g(d,p,v,w,_,b,y,S,P,x,E){const I=b/P,B=y/x,V=b/2,z=y/2,A=S/2,L=P+1,k=x+1;let J=0,$=0;const ee=new O;for(let ie=0;ie<k;ie++){const me=ie*B-z;for(let j=0;j<L;j++){const ne=j*I-V;ee[d]=ne*w,ee[p]=me*_,ee[v]=A,c.push(ee.x,ee.y,ee.z),ee[d]=0,ee[p]=0,ee[v]=S>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(j/P),h.push(1-ie/x),J+=1}}for(let ie=0;ie<x;ie++)for(let me=0;me<P;me++){const j=f+me+L*ie,ne=f+me+L*(ie+1),X=f+(me+1)+L*(ie+1),D=f+(me+1)+L*ie;l.push(j,ne,D),l.push(ne,X,D),$+=6}o.addGroup(m,$,E),m+=$,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Pi(i[t]);for(const r in n)e[r]=n[r]}return e}function gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){return i.getRenderTarget()===null&&i.outputEncoding===qe?Qt:lr}const zc={clone:Pi,merge:yt};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kc extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends kc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,li=1;class yf extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new zt(si,li,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new zt(si,li,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const s=new zt(si,li,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new zt(si,li,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new zt(si,li,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new zt(si,li,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Bc extends Et{constructor(e,t,n,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xf extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),a=new vn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:Ln});a.uniforms.tEquirect.value=t;const s=new $t(r,a),o=t.minFilter;return t.minFilter===or&&(t.minFilter=Ft),new yf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Wa=new O,bf=new O,wf=new wt;class Tn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Wa.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wf.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ra,Pr=new O;class Vo{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,a=new Tn,s=new Tn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],a=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],v=n[13],w=n[14],_=n[15];return t[0].setComponents(o-r,h-l,d-f,_-p).normalize(),t[1].setComponents(o+r,h+l,d+f,_+p).normalize(),t[2].setComponents(o+a,h+c,d+m,_+v).normalize(),t[3].setComponents(o-a,h-c,d-m,_-v).normalize(),t[4].setComponents(o-s,h-u,d-g,_-w).normalize(),t[5].setComponents(o+s,h+u,d+g,_+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Mf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(a(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class Ho extends Tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],d=[],p=[];for(let v=0;v<u;v++){const w=v*f-s;for(let _=0;_<c;_++){const b=_*h-a;g.push(b,-w,0),d.push(0,0,1),p.push(_/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let w=0;w<o;w++){const _=w+c*v,b=w+c*(v+1),y=w+1+c*(v+1),S=w+1+c*v;m.push(_,b,S),m.push(b,y,S)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf="vec3 transformed = vec3( position );",Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Of=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hf=`#define PI 3.141592653589793
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
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
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
#endif`,dd=`#if defined( USE_ENVMAP )
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
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
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
#endif`,yd=`struct PhysicalMaterial {
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
}`,xd=`
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
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
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,kd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
}`,Lp=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ip=`uniform float scale;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Bp=`#define LAMBERT
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
}`,Up=`#define MATCAP
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
}`,Gp=`#define MATCAP
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
}`,Vp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Wp=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,qp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,Zp=`uniform float size;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 color;
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
}`,em=`uniform float rotation;
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
}`,tm=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:Sf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Cf,aomap_pars_fragment:Pf,begin_vertex:Lf,beginnormal_vertex:Rf,bsdfs:Df,iridescence_fragment:Of,bumpmap_pars_fragment:If,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:zf,clipping_planes_vertex:kf,color_fragment:Bf,color_pars_fragment:Uf,color_pars_vertex:Gf,color_vertex:Vf,common:Hf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:jf,displacementmap_pars_vertex:$f,displacementmap_vertex:qf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Yf,encodings_fragment:Zf,encodings_pars_fragment:Kf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:ed,envmap_pars_vertex:td,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:rd,fog_fragment:ad,fog_pars_fragment:od,gradientmap_pars_fragment:sd,lightmap_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:hd,lights_pars_begin:fd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:vd,lights_physical_fragment:_d,lights_physical_pars_fragment:yd,lights_fragment_begin:xd,lights_fragment_maps:bd,lights_fragment_end:wd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:Ad,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Od,morphnormal_vertex:Id,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:zd,normal_fragment_maps:kd,normal_pars_fragment:Bd,normal_pars_vertex:Ud,normal_vertex:Gd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:$d,output_fragment:qd,packing:Xd,premultiplied_alpha_fragment:Yd,project_vertex:Zd,dithering_fragment:Kd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:sp,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:up,tonemapping_fragment:hp,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:vp,uv2_pars_fragment:_p,uv2_pars_vertex:yp,uv2_vertex:xp,worldpos_vertex:bp,background_vert:wp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:Ep,cube_vert:Tp,cube_frag:Ap,depth_vert:Cp,depth_frag:Pp,distanceRGBA_vert:Lp,distanceRGBA_frag:Rp,equirect_vert:Dp,equirect_frag:Op,linedashed_vert:Ip,linedashed_frag:Np,meshbasic_vert:Fp,meshbasic_frag:zp,meshlambert_vert:kp,meshlambert_frag:Bp,meshmatcap_vert:Up,meshmatcap_frag:Gp,meshnormal_vert:Vp,meshnormal_frag:Hp,meshphong_vert:Wp,meshphong_frag:jp,meshphysical_vert:$p,meshphysical_frag:qp,meshtoon_vert:Xp,meshtoon_frag:Yp,points_vert:Zp,points_frag:Kp,shadow_vert:Jp,shadow_frag:Qp,sprite_vert:em,sprite_frag:tm},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},tn={basic:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:yt([ce.points,ce.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:yt([ce.common,ce.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:yt([ce.sprite,ce.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:yt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:yt([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};tn.physical={uniforms:yt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Lr={r:0,b:0,g:0};function nm(i,e,t,n,r,a,s){const o=new ke(0);let l=a===!0?0:1,c,u,h=null,f=0,m=null;function g(p,v){let w=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const b=i.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?d(o,l):_&&_.isColor&&(d(_,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ia)?(u===void 0&&(u=new $t(new fr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Pi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==qe,(h!==_||f!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new $t(new Ho(2,2),new vn({name:"BackgroundMaterial",uniforms:Pi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,v){p.getRGB(Lr,Fc(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,v,s)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:g}}function im(i,e,t,n){const r=i.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},l=p(null);let c=l,u=!1;function h(A,L,k,J,$){let ee=!1;if(s){const ie=d(J,k,L);c!==ie&&(c=ie,m(c.object)),ee=v(A,J,k,$),ee&&w(A,J,k,$)}else{const ie=L.wireframe===!0;(c.geometry!==J.id||c.program!==k.id||c.wireframe!==ie)&&(c.geometry=J.id,c.program=k.id,c.wireframe=ie,ee=!0)}$!==null&&t.update($,34963),(ee||u)&&(u=!1,x(A,L,k,J),$!==null&&i.bindBuffer(34963,t.get($).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(A){return n.isWebGL2?i.bindVertexArray(A):a.bindVertexArrayOES(A)}function g(A){return n.isWebGL2?i.deleteVertexArray(A):a.deleteVertexArrayOES(A)}function d(A,L,k){const J=k.wireframe===!0;let $=o[A.id];$===void 0&&($={},o[A.id]=$);let ee=$[L.id];ee===void 0&&(ee={},$[L.id]=ee);let ie=ee[J];return ie===void 0&&(ie=p(f()),ee[J]=ie),ie}function p(A){const L=[],k=[],J=[];for(let $=0;$<r;$++)L[$]=0,k[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:J,object:A,attributes:{},index:null}}function v(A,L,k,J){const $=c.attributes,ee=L.attributes;let ie=0;const me=k.getAttributes();for(const j in me)if(me[j].location>=0){const X=$[j];let D=ee[j];if(D===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(D=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(D=A.instanceColor)),X===void 0||X.attribute!==D||D&&X.data!==D.data)return!0;ie++}return c.attributesNum!==ie||c.index!==J}function w(A,L,k,J){const $={},ee=L.attributes;let ie=0;const me=k.getAttributes();for(const j in me)if(me[j].location>=0){let X=ee[j];X===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(X=A.instanceColor));const D={};D.attribute=X,X&&X.data&&(D.data=X.data),$[j]=D,ie++}c.attributes=$,c.attributesNum=ie,c.index=J}function _(){const A=c.newAttributes;for(let L=0,k=A.length;L<k;L++)A[L]=0}function b(A){y(A,0)}function y(A,L){const k=c.newAttributes,J=c.enabledAttributes,$=c.attributeDivisors;k[A]=1,J[A]===0&&(i.enableVertexAttribArray(A),J[A]=1),$[A]!==L&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,L),$[A]=L)}function S(){const A=c.newAttributes,L=c.enabledAttributes;for(let k=0,J=L.length;k<J;k++)L[k]!==A[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function P(A,L,k,J,$,ee){n.isWebGL2===!0&&(k===5124||k===5125)?i.vertexAttribIPointer(A,L,k,$,ee):i.vertexAttribPointer(A,L,k,J,$,ee)}function x(A,L,k,J){if(n.isWebGL2===!1&&(A.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const $=J.attributes,ee=k.getAttributes(),ie=L.defaultAttributeValues;for(const me in ee){const j=ee[me];if(j.location>=0){let ne=$[me];if(ne===void 0&&(me==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),me==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor)),ne!==void 0){const X=ne.normalized,D=ne.itemSize,Q=t.get(ne);if(Q===void 0)continue;const N=Q.buffer,W=Q.type,te=Q.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ae=ne.data,he=ae.stride,ve=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let Te=0;Te<j.locationSize;Te++)y(j.location+Te,ae.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Te=0;Te<j.locationSize;Te++)b(j.location+Te);i.bindBuffer(34962,N);for(let Te=0;Te<j.locationSize;Te++)P(j.location+Te,D/j.locationSize,W,X,he*te,(ve+D/j.locationSize*Te)*te)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)y(j.location+ae,ne.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<j.locationSize;ae++)b(j.location+ae);i.bindBuffer(34962,N);for(let ae=0;ae<j.locationSize;ae++)P(j.location+ae,D/j.locationSize,W,X,D*te,D/j.locationSize*ae*te)}}else if(ie!==void 0){const X=ie[me];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(j.location,X);break;case 3:i.vertexAttrib3fv(j.location,X);break;case 4:i.vertexAttrib4fv(j.location,X);break;default:i.vertexAttrib1fv(j.location,X)}}}}S()}function E(){V();for(const A in o){const L=o[A];for(const k in L){const J=L[k];for(const $ in J)g(J[$].object),delete J[$];delete L[k]}delete o[A]}}function I(A){if(o[A.id]===void 0)return;const L=o[A.id];for(const k in L){const J=L[k];for(const $ in J)g(J[$].object),delete J[$];delete L[k]}delete o[A.id]}function B(A){for(const L in o){const k=o[L];if(k[A.id]===void 0)continue;const J=k[A.id];for(const $ in J)g(J[$].object),delete J[$];delete k[A.id]}}function V(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:b,disableUnusedAttributes:S}}function rm(i,e,t,n){const r=n.isWebGL2;let a;function s(c){a=c}function o(c,u){i.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](a,c,u,h),t.update(u,a,h)}this.setMode=s,this.render=o,this.renderInstances=l}function am(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),w=i.getParameter(36349),_=f>0,b=s||e.has("OES_texture_float"),y=_&&b,S=s?i.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:S}}function om(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Tn,o=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,v=i.get(h);if(!r||g===null||g.length===0||a&&!p)a?u(null):c();else{const w=a?0:n,_=w*4;let b=v.clippingState||null;l.value=b,b=u(g,f,_,m);for(let y=0;y!==_;++y)b[y]=t[y];v.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const v=m+d*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,b=m;_!==d;++_,b+=4)s.copy(h[_]).applyMatrix4(w,o),s.normal.toArray(p,b),p[b+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function sm(i){let e=new WeakMap;function t(s,o){return o===po?s.mapping=Ti:o===mo&&(s.mapping=Ai),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===po||o===mo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new xf(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Wo extends kc{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,Js=[.125,.215,.35,.446,.526,.582],Gn=20,ja=new Wo,Qs=new ke;let $a=null;const Un=(1+Math.sqrt(5))/2,ui=1/Un,el=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Un,ui),new O(0,Un,-ui),new O(ui,0,Un),new O(-ui,0,Un),new O(Un,ui,0),new O(-Un,ui,0)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){$a=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a),e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:sr,format:jt,encoding:qn,depthBuffer:!1},r=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lm(a)),this._blurMaterial=cm(a,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,r){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Qs),u.toneMapping=mn,u.autoClear=!1;const m=new Go({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new $t(new fr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Qs),d=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):w===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const _=this._cubeSize;Rr(r,w*_,v>2?_:0,_,_),u.setRenderTarget(r),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ti||e.mapping===Ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new $t(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=el[(r-1)%el.length];this._blur(e,r-1,r,a,s)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),d=a/g,p=isFinite(a)?1+Math.floor(u*d):Gn;p>Gn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const v=[];let w=0;for(let P=0;P<Gn;++P){const x=P/d,E=Math.exp(-x*x/2);v.push(E),P===0?w+=E:P<p&&(w+=2*E)}for(let P=0;P<v.length;P++)v[P]=v[P]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const b=this._sizeLods[r],y=3*b*(r>_-_i?r-_+_i:0),S=4*(this._cubeSize-b);Rr(t,y,S,3*b,2*b),l.setRenderTarget(t),l.render(h,ja)}}function lm(i){const e=[],t=[],n=[];let r=i;const a=i-_i+1+Js.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-_i?l=Js[s-i+_i-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,v=1,w=new Float32Array(d*g*m),_=new Float32Array(p*g*m),b=new Float32Array(v*g*m);for(let S=0;S<m;S++){const P=S%3*2/3-1,x=S>2?0:-1,E=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];w.set(E,d*g*S),_.set(f,p*g*S);const I=[S,S,S,S,S,S];b.set(I,v*g*S)}const y=new Tt;y.setAttribute("position",new kt(w,d)),y.setAttribute("uv",new kt(_,p)),y.setAttribute("faceIndex",new kt(b,v)),e.push(y),r>_i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nl(i,e,t){const n=new On(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cm(i,e,t){const n=new Float32Array(Gn),r=new O(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function il(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function rl(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function um(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===po||l===mo,u=l===Ti||l===Ai;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new tl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new tl(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function hm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fm(i,e,t,n){const r={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,v=d.length;p<v;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const w=m.array;d=m.version;for(let _=0,b=w.length;_<b;_+=3){const y=w[_+0],S=w[_+1],P=w[_+2];f.push(y,S,S,P,P,y)}}else{const w=g.array;d=g.version;for(let _=0,b=w.length/3-1;_<b;_+=3){const y=_+0,S=_+1,P=_+2;f.push(y,S,S,P,P,y)}}const p=new(Pc(f)?Nc:Ic)(f,1);p.version=d;const v=a.get(h);v&&e.remove(v),a.set(h,p)}function u(h){const f=a.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dm(i,e,t,n){const r=n.isWebGL2;let a;function s(f){a=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(a,m,o,f*l),t.update(m,a,1)}function h(f,m,g){if(g===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,m,o,f*l,g),t.update(m,a,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(a/3);break;case 1:t.lines+=o*(a/2);break;case 3:t.lines+=o*(a-1);break;case 2:t.lines+=o*a;break;case 0:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mm(i,e){return i[0]-e[0]}function gm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function vm(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,s=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let d=a.get(u);if(d===void 0||d.count!==g){let A=function(){V.dispose(),a.delete(u),u.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const w=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let x=0;w===!0&&(x=1),_===!0&&(x=2),b===!0&&(x=3);let E=u.attributes.position.count*x,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const B=new Float32Array(E*I*4*g),V=new Dc(B,E,I,g);V.type=Wn,V.needsUpdate=!0;const z=x*4;for(let L=0;L<g;L++){const k=y[L],J=S[L],$=P[L],ee=E*I*4*L;for(let ie=0;ie<k.count;ie++){const me=ie*z;w===!0&&(s.fromBufferAttribute(k,ie),B[ee+me+0]=s.x,B[ee+me+1]=s.y,B[ee+me+2]=s.z,B[ee+me+3]=0),_===!0&&(s.fromBufferAttribute(J,ie),B[ee+me+4]=s.x,B[ee+me+5]=s.y,B[ee+me+6]=s.z,B[ee+me+7]=0),b===!0&&(s.fromBufferAttribute($,ie),B[ee+me+8]=s.x,B[ee+me+9]=s.y,B[ee+me+10]=s.z,B[ee+me+11]=$.itemSize===4?s.w:1)}}d={count:g,texture:V,size:new le(E,I)},a.set(u,d),u.addEventListener("dispose",A)}let p=0;for(let w=0;w<f.length;w++)p+=f[w];const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const m=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<m;_++){const b=g[_];b[0]=_,b[1]=f[_]}g.sort(gm);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(mm);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const b=o[_],y=b[0],S=b[1];y!==Number.MAX_SAFE_INTEGER&&S?(d&&u.getAttribute("morphTarget"+_)!==d[y]&&u.setAttribute("morphTarget"+_,d[y]),p&&u.getAttribute("morphNormal"+_)!==p[y]&&u.setAttribute("morphNormal"+_,p[y]),r[_]=S,v+=S):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function _m(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Gc=new Et,Vc=new Dc,Hc=new af,Wc=new Bc,al=[],ol=[],sl=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=al[r];if(a===void 0&&(a=new Float32Array(r),al[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function it(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function Mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),rt(t,n)}}function Sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),rt(t,n)}}function Em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),rt(t,n)}}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function Im(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Gc,r)}function Nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hc,r)}function Fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wc,r)}function zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vc,r)}function km(i){switch(i){case 5126:return ym;case 35664:return xm;case 35665:return bm;case 35666:return wm;case 35674:return Mm;case 35675:return Sm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Rm;case 36295:return Dm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return zm}}function Bm(i,e){i.uniform1fv(this.addr,e)}function Um(i,e){const t=Di(e,this.size,2);i.uniform2fv(this.addr,t)}function Gm(i,e){const t=Di(e,this.size,3);i.uniform3fv(this.addr,t)}function Vm(i,e){const t=Di(e,this.size,4);i.uniform4fv(this.addr,t)}function Hm(i,e){const t=Di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wm(i,e){const t=Di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jm(i,e){const t=Di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function qm(i,e){i.uniform2iv(this.addr,e)}function Xm(i,e){i.uniform3iv(this.addr,e)}function Ym(i,e){i.uniform4iv(this.addr,e)}function Zm(i,e){i.uniform1uiv(this.addr,e)}function Km(i,e){i.uniform2uiv(this.addr,e)}function Jm(i,e){i.uniform3uiv(this.addr,e)}function Qm(i,e){i.uniform4uiv(this.addr,e)}function eg(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);it(n,a)||(i.uniform1iv(this.addr,a),rt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Gc,a[s])}function tg(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);it(n,a)||(i.uniform1iv(this.addr,a),rt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Hc,a[s])}function ng(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);it(n,a)||(i.uniform1iv(this.addr,a),rt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Wc,a[s])}function ig(i,e,t){const n=this.cache,r=e.length,a=oa(t,r);it(n,a)||(i.uniform1iv(this.addr,a),rt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Vc,a[s])}function rg(i){switch(i){case 5126:return Bm;case 35664:return Um;case 35665:return Gm;case 35666:return Vm;case 35674:return Hm;case 35675:return Wm;case 35676:return jm;case 5124:case 35670:return $m;case 35667:case 35671:return qm;case 35668:case 35672:return Xm;case 35669:case 35673:return Ym;case 5125:return Zm;case 36294:return Km;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class ag{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=km(t.type)}}class og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rg(t.type)}}class sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function ul(i,e){i.seq.push(e),i.map[e.id]=e}function lg(i,e,t){const n=i.name,r=n.length;for(qa.lastIndex=0;;){const a=qa.exec(n),s=qa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){ul(t,c===void 0?new ag(o,i,e):new og(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new sg(o),ul(t,h)),t=h}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);lg(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let cg=0;function ug(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function hg(i){switch(i){case qn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function fl(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ug(i.getShaderSource(e),s)}else return r}function fg(i,e){const t=hg(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dg(i,e){let t;switch(e){case Sh:t="Linear";break;case Eh:t="Reinhard";break;case Th:t="OptimizedCineon";break;case Ah:t="ACESFilmic";break;case Ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function mg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gg(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===35674&&(o=2),a.type===35675&&(o=3),a.type===35676&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ji(i){return i!==""}function dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(i){return i.replace(vg,_g)}function _g(i,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xo(t)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(i){return i.replace(yg,xg)}function xg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function gl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Sg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case wh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Eg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tg(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=bg(t),c=wg(t),u=Mg(t),h=Sg(t),f=Eg(t),m=t.isWebGL2?"":pg(t),g=mg(a),d=r.createProgram();let p,v,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ji).join(`
`),p.length>0&&(p+=`
`),v=[m,g].filter(Ji).join(`
`),v.length>0&&(v+=`
`)):(p=[gl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),v=[m,gl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==mn?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,fg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),s=xo(s),s=dl(s,t),s=pl(s,t),o=xo(o),o=dl(o,t),o=pl(o,t),s=ml(s),o=ml(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===ks?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ks?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=w+p+s,b=w+v+o,y=hl(r,35633,_),S=hl(r,35632,b);if(r.attachShader(d,y),r.attachShader(d,S),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(d).trim(),I=r.getShaderInfoLog(y).trim(),B=r.getShaderInfoLog(S).trim();let V=!0,z=!0;if(r.getProgramParameter(d,35714)===!1){V=!1;const A=fl(r,y,"vertex"),L=fl(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+E+`
`+A+`
`+L)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||B==="")&&(z=!1);z&&(this.diagnostics={runnable:V,programLog:E,vertexShader:{log:I,prefix:p},fragmentShader:{log:B,prefix:v}})}r.deleteShader(y),r.deleteShader(S);let P;this.getUniforms=function(){return P===void 0&&(P=new Ur(r,d)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=gg(r,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=S,this}let Ag=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pg(e),t.set(e,n)),n}}class Pg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Lg(i,e,t,n,r,a,s){const o=new Uo,l=new Cg,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,E,I,B,V){const z=B.fog,A=V.geometry,L=x.isMeshStandardMaterial?B.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||L),J=k&&k.mapping===ia?k.image.height:null,$=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ee=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ie=ee!==void 0?ee.length:0;let me=0;A.morphAttributes.position!==void 0&&(me=1),A.morphAttributes.normal!==void 0&&(me=2),A.morphAttributes.color!==void 0&&(me=3);let j,ne,X,D;if($){const he=tn[$];j=he.vertexShader,ne=he.fragmentShader}else j=x.vertexShader,ne=x.fragmentShader,l.update(x),X=l.getVertexShaderID(x),D=l.getFragmentShaderID(x);const Q=i.getRenderTarget(),N=x.alphaTest>0,W=x.clearcoat>0,te=x.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:x.type,vertexShader:j,fragmentShader:ne,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:D,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Q===null?i.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:qn,map:!!x.map,matcap:!!x.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===qh,tangentSpaceNormalMap:x.normalMapType===Ac,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===qe,clearcoat:W,clearcoatMap:W&&!!x.clearcoatMap,clearcoatRoughnessMap:W&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:W&&!!x.clearcoatNormalMap,iridescence:te,iridescenceMap:te&&!!x.iridescenceMap,iridescenceThicknessMap:te&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Mi,alphaMap:!!x.alphaMap,alphaTest:N,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!A.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:mn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===St,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(v(E,x),w(E,x),E.push(i.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),x.push(o.mask)}function _(x){const E=g[x.type];let I;if(E){const B=tn[E];I=zc.clone(B.uniforms)}else I=x.uniforms;return I}function b(x,E){let I;for(let B=0,V=c.length;B<V;B++){const z=c[B];if(z.cacheKey===E){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Tg(i,E,x,a),c.push(I)),I}function y(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:P}}function Rg(){let i=new WeakMap;function e(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function t(a){i.delete(a)}function n(a,s,o){i.get(a)[s]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _l(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(h,f,m,g,d,p){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=m,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=d,v.group=p),e++,v}function o(h,f,m,g,d,p){const v=s(h,f,m,g,d,p);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(h,f,m,g,d,p){const v=s(h,f,m,g,d,p);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||Dg),n.length>1&&n.sort(f||vl),r.length>1&&r.sort(f||vl)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function Og(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new _l,i.set(n,[s])):r>=a.length?(s=new _l,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ke};break;case"SpotLight":t={position:new O,direction:new O,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Ng(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fg=0;function zg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kg(i,e){const t=new Ig,n=Ng(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const a=new O,s=new Ye,o=new Ye;function l(u,h){let f=0,m=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let d=0,p=0,v=0,w=0,_=0,b=0,y=0,S=0,P=0,x=0;u.sort(zg);const E=h===!0?Math.PI:1;for(let B=0,V=u.length;B<V;B++){const z=u[B],A=z.color,L=z.intensity,k=z.distance,J=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=A.r*L*E,m+=A.g*L*E,g+=A.b*L*E;else if(z.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(z.sh.coefficients[$],L);else if(z.isDirectionalLight){const $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const ee=z.shadow,ie=n.get(z);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,r.directionalShadow[d]=ie,r.directionalShadowMap[d]=J,r.directionalShadowMatrix[d]=z.shadow.matrix,b++}r.directional[d]=$,d++}else if(z.isSpotLight){const $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(A).multiplyScalar(L*E),$.distance=k,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,r.spot[v]=$;const ee=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,ee.updateMatrices(z),z.castShadow&&x++),r.spotLightMatrix[v]=ee.matrix,z.castShadow){const ie=n.get(z);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,r.spotShadow[v]=ie,r.spotShadowMap[v]=J,S++}v++}else if(z.isRectAreaLight){const $=t.get(z);$.color.copy(A).multiplyScalar(L),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),r.rectArea[w]=$,w++}else if(z.isPointLight){const $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*E),$.distance=z.distance,$.decay=z.decay,z.castShadow){const ee=z.shadow,ie=n.get(z);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=z.shadow.matrix,y++}r.point[p]=$,p++}else if(z.isHemisphereLight){const $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(L*E),$.groundColor.copy(z.groundColor).multiplyScalar(L*E),r.hemi[_]=$,_++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==w||I.hemiLength!==_||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==S||I.numSpotMaps!==P)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=w,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=S+P-x,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=x,I.directionalLength=d,I.pointLength=p,I.spotLength=v,I.rectAreaLength=w,I.hemiLength=_,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=S,I.numSpotMaps=P,r.version=Fg++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const v=h.matrixWorldInverse;for(let w=0,_=u.length;w<_;w++){const b=u[w];if(b.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(v),f++}else if(b.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(v),g++}else if(b.isRectAreaLight){const y=r.rectArea[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(v),o.identity(),s.copy(b.matrixWorld),s.premultiply(v),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),d++}else if(b.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(v),m++}else if(b.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function yl(i,e){const t=new kg(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function s(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Bg(i,e){let t=new WeakMap;function n(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new yl(i,e),t.set(a,[l])):s>=o.length?(l=new yl(i,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ug extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gg extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function Wg(i,e,t){let n=new Vo;const r=new le,a=new le,s=new lt,o=new Ug({depthPacking:$h}),l=new Gg,c={},u=t.maxTextureSize,h={[Dn]:St,[St]:Dn,[An]:An},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Vg,fragmentShader:Hg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new $t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc,this.render=function(b,y,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ln),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let B=0,V=b.length;B<V;B++){const z=b[B],A=z.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);const L=A.getFrameExtents();if(r.multiply(L),a.copy(A.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/L.x),r.x=a.x*L.x,A.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/L.y),r.y=a.y*L.y,A.mapSize.y=a.y)),A.map===null){const J=this.type!==Ki?{minFilter:xt,magFilter:xt}:{};A.map=new On(r.x,r.y,J),A.map.texture.name=z.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();const k=A.getViewportCount();for(let J=0;J<k;J++){const $=A.getViewport(J);s.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),I.viewport(s),A.updateMatrices(z,J),n=A.getFrustum(),_(y,S,A.camera,z,this.type)}A.isPointLightShadow!==!0&&this.type===Ki&&v(A,S),A.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(P,x,E)};function v(b,y){const S=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new On(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,S,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,S,m,d,null)}function w(b,y,S,P,x,E){let I=null;const B=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0)I=B;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const V=I.uuid,z=y.uuid;let A=c[V];A===void 0&&(A={},c[V]=A);let L=A[z];L===void 0&&(L=I.clone(),A[z]=L),I=L}return I.visible=y.visible,I.wireframe=y.wireframe,E===Ki?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:h[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(S.matrixWorld),I.nearDistance=P,I.farDistance=x),I}function _(b,y,S,P,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ki)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const B=e.update(b),V=b.material;if(Array.isArray(V)){const z=B.groups;for(let A=0,L=z.length;A<L;A++){const k=z[A],J=V[k.materialIndex];if(J&&J.visible){const $=w(b,J,P,S.near,S.far,x);i.renderBufferDirect(S,null,B,$,b,k)}}}else if(V.visible){const z=w(b,V,P,S.near,S.far,x);i.renderBufferDirect(S,null,B,z,b,null)}}const I=b.children;for(let B=0,V=I.length;B<V;B++)_(I[B],y,S,P,x)}}function jg(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const Z=new lt;let re=null;const pe=new lt(0,0,0,0);return{setMask:function(ge){re!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),re=ge)},setLocked:function(ge){F=ge},setClear:function(ge,$e,at,mt,Zt){Zt===!0&&(ge*=mt,$e*=mt,at*=mt),Z.set(ge,$e,at,mt),pe.equals(Z)===!1&&(i.clearColor(ge,$e,at,mt),pe.copy(Z))},reset:function(){F=!1,re=null,pe.set(-1,0,0,0)}}}function a(){let F=!1,Z=null,re=null,pe=null;return{setTest:function(ge){ge?N(2929):W(2929)},setMask:function(ge){Z!==ge&&!F&&(i.depthMask(ge),Z=ge)},setFunc:function(ge){if(re!==ge){switch(ge){case mh:i.depthFunc(512);break;case gh:i.depthFunc(519);break;case vh:i.depthFunc(513);break;case fo:i.depthFunc(515);break;case _h:i.depthFunc(514);break;case yh:i.depthFunc(518);break;case xh:i.depthFunc(516);break;case bh:i.depthFunc(517);break;default:i.depthFunc(515)}re=ge}},setLocked:function(ge){F=ge},setClear:function(ge){pe!==ge&&(i.clearDepth(ge),pe=ge)},reset:function(){F=!1,Z=null,re=null,pe=null}}}function s(){let F=!1,Z=null,re=null,pe=null,ge=null,$e=null,at=null,mt=null,Zt=null;return{setTest:function(Je){F||(Je?N(2960):W(2960))},setMask:function(Je){Z!==Je&&!F&&(i.stencilMask(Je),Z=Je)},setFunc:function(Je,It,Kt){(re!==Je||pe!==It||ge!==Kt)&&(i.stencilFunc(Je,It,Kt),re=Je,pe=It,ge=Kt)},setOp:function(Je,It,Kt){($e!==Je||at!==It||mt!==Kt)&&(i.stencilOp(Je,It,Kt),$e=Je,at=It,mt=Kt)},setLocked:function(Je){F=Je},setClear:function(Je){Zt!==Je&&(i.clearStencil(Je),Zt=Je)},reset:function(){F=!1,Z=null,re=null,pe=null,ge=null,$e=null,at=null,mt=null,Zt=null}}}const o=new r,l=new a,c=new s,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,v=!1,w=null,_=null,b=null,y=null,S=null,P=null,x=null,E=!1,I=null,B=null,V=null,z=null,A=null;const L=i.getParameter(35661);let k=!1,J=0;const $=i.getParameter(7938);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),k=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=J>=2);let ee=null,ie={};const me=i.getParameter(3088),j=i.getParameter(2978),ne=new lt().fromArray(me),X=new lt().fromArray(j);function D(F,Z,re){const pe=new Uint8Array(4),ge=i.createTexture();i.bindTexture(F,ge),i.texParameteri(F,10241,9728),i.texParameteri(F,10240,9728);for(let $e=0;$e<re;$e++)i.texImage2D(Z+$e,0,6408,1,1,0,6408,5121,pe);return ge}const Q={};Q[3553]=D(3553,3553,1),Q[34067]=D(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(fo),Ve(!1),Be(ls),N(2884),Ne(Ln);function N(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function W(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function te(F,Z){return m[F]!==Z?(i.bindFramebuffer(F,Z),m[F]=Z,n&&(F===36009&&(m[36160]=Z),F===36160&&(m[36009]=Z)),!0):!1}function ae(F,Z){let re=d,pe=!1;if(F)if(re=g.get(Z),re===void 0&&(re=[],g.set(Z,re)),F.isWebGLMultipleRenderTargets){const ge=F.texture;if(re.length!==ge.length||re[0]!==36064){for(let $e=0,at=ge.length;$e<at;$e++)re[$e]=36064+$e;re.length=ge.length,pe=!0}}else re[0]!==36064&&(re[0]=36064,pe=!0);else re[0]!==1029&&(re[0]=1029,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function he(F){return p!==F?(i.useProgram(F),p=F,!0):!1}const ve={[vi]:32774,[rh]:32778,[ah]:32779};if(n)ve[fs]=32775,ve[ds]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(ve[fs]=F.MIN_EXT,ve[ds]=F.MAX_EXT)}const Te={[oh]:0,[sh]:1,[lh]:768,[Mc]:770,[ph]:776,[fh]:774,[uh]:772,[ch]:769,[Sc]:771,[dh]:775,[hh]:773};function Ne(F,Z,re,pe,ge,$e,at,mt){if(F===Ln){v===!0&&(W(3042),v=!1);return}if(v===!1&&(N(3042),v=!0),F!==ih){if(F!==w||mt!==E){if((_!==vi||S!==vi)&&(i.blendEquation(32774),_=vi,S=vi),mt)switch(F){case Mi:i.blendFuncSeparate(1,771,1,771);break;case cs:i.blendFunc(1,1);break;case us:i.blendFuncSeparate(0,769,0,1);break;case hs:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Mi:i.blendFuncSeparate(770,771,1,771);break;case cs:i.blendFunc(770,1);break;case us:i.blendFuncSeparate(0,769,0,1);break;case hs:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,y=null,P=null,x=null,w=F,E=mt}return}ge=ge||Z,$e=$e||re,at=at||pe,(Z!==_||ge!==S)&&(i.blendEquationSeparate(ve[Z],ve[ge]),_=Z,S=ge),(re!==b||pe!==y||$e!==P||at!==x)&&(i.blendFuncSeparate(Te[re],Te[pe],Te[$e],Te[at]),b=re,y=pe,P=$e,x=at),w=F,E=!1}function Ze(F,Z){F.side===An?W(2884):N(2884);let re=F.side===St;Z&&(re=!re),Ve(re),F.blending===Mi&&F.transparent===!1?Ne(Ln):Ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const pe=F.stencilWrite;c.setTest(pe),pe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(32926):W(32926)}function Ve(F){I!==F&&(F?i.frontFace(2304):i.frontFace(2305),I=F)}function Be(F){F!==eh?(N(2884),F!==B&&(F===ls?i.cullFace(1029):F===th?i.cullFace(1028):i.cullFace(1032))):W(2884),B=F}function Ue(F){F!==V&&(k&&i.lineWidth(F),V=F)}function je(F,Z,re){F?(N(32823),(z!==Z||A!==re)&&(i.polygonOffset(Z,re),z=Z,A=re)):W(32823)}function Ct(F){F?N(3089):W(3089)}function pt(F){F===void 0&&(F=33984+L-1),ee!==F&&(i.activeTexture(F),ee=F)}function C(F,Z,re){re===void 0&&(ee===null?re=33984+L-1:re=ee);let pe=ie[re];pe===void 0&&(pe={type:void 0,texture:void 0},ie[re]=pe),(pe.type!==F||pe.texture!==Z)&&(ee!==re&&(i.activeTexture(re),ee=re),i.bindTexture(F,Z||Q[F]),pe.type=F,pe.texture=Z)}function M(){const F=ie[ee];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function R(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){ne.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function xe(F){X.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function Le(F,Z){let re=h.get(Z);re===void 0&&(re=new WeakMap,h.set(Z,re));let pe=re.get(F);pe===void 0&&(pe=i.getUniformBlockIndex(Z,F.name),re.set(F,pe))}function Ie(F,Z){const pe=h.get(Z).get(F);u.get(Z)!==pe&&(i.uniformBlockBinding(Z,pe,F.__bindingPointIndex),u.set(Z,pe))}function Ge(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,ie={},m={},g=new WeakMap,d=[],p=null,v=!1,w=null,_=null,b=null,y=null,S=null,P=null,x=null,E=!1,I=null,B=null,V=null,z=null,A=null,ne.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:N,disable:W,bindFramebuffer:te,drawBuffers:ae,useProgram:he,setBlending:Ne,setMaterial:Ze,setFlipSided:Ve,setCullFace:Be,setLineWidth:Ue,setPolygonOffset:je,setScissorTest:Ct,activeTexture:pt,bindTexture:C,unbindTexture:M,compressedTexImage2D:Y,compressedTexImage3D:oe,texImage2D:ue,texImage3D:_e,updateUBOMapping:Le,uniformBlockBinding:Ie,texStorage2D:U,texStorage3D:de,texSubImage2D:se,texSubImage3D:fe,compressedTexSubImage2D:we,compressedTexSubImage3D:R,scissor:be,viewport:xe,reset:Ge}}function $g(i,e,t,n,r,a,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,M){return v?new OffscreenCanvas(C,M):cr("canvas")}function _(C,M,Y,oe){let se=1;if((C.width>oe||C.height>oe)&&(se=oe/Math.max(C.width,C.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=M?Zh:Math.floor,we=fe(se*C.width),R=fe(se*C.height);d===void 0&&(d=w(we,R));const U=Y?w(we,R):d;return U.width=we,U.height=R,U.getContext("2d").drawImage(C,0,0,we,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+R+")."),U}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return Us(C.width)&&Us(C.height)}function y(C){return o?!1:C.wrapS!==Wt||C.wrapT!==Wt||C.minFilter!==xt&&C.minFilter!==Ft}function S(C,M){return C.generateMipmaps&&M&&C.minFilter!==xt&&C.minFilter!==Ft}function P(C){i.generateMipmap(C)}function x(C,M,Y,oe,se=!1){if(o===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=M;return M===6403&&(Y===5126&&(fe=33326),Y===5131&&(fe=33325),Y===5121&&(fe=33321)),M===33319&&(Y===5126&&(fe=33328),Y===5131&&(fe=33327),Y===5121&&(fe=33323)),M===6408&&(Y===5126&&(fe=34836),Y===5131&&(fe=34842),Y===5121&&(fe=oe===qe&&se===!1?35907:32856),Y===32819&&(fe=32854),Y===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function E(C,M,Y){return S(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==xt&&C.minFilter!==Ft?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){return C===xt||C===ps||C===va?9728:9729}function B(C){const M=C.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&g.delete(M)}function V(C){const M=C.target;M.removeEventListener("dispose",V),L(M)}function z(C){const M=n.get(C);if(M.__webglInit===void 0)return;const Y=C.source,oe=p.get(Y);if(oe){const se=oe[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&A(C),Object.keys(oe).length===0&&p.delete(Y)}n.remove(C)}function A(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const Y=C.source,oe=p.get(Y);delete oe[M.__cacheKey],s.memory.textures--}function L(C){const M=C.texture,Y=n.get(C),oe=n.get(M);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)i.deleteFramebuffer(Y.__webglFramebuffer[se]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[se]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let se=0;se<Y.__webglColorRenderbuffer.length;se++)Y.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[se]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let se=0,fe=M.length;se<fe;se++){const we=n.get(M[se]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),s.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(C)}let k=0;function J(){k=0}function $(){const C=k;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),k+=1,C}function ee(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function ie(C,M){const Y=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(Y,C,M);return}}t.bindTexture(3553,Y.__webglTexture,33984+M)}function me(C,M){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){W(Y,C,M);return}t.bindTexture(35866,Y.__webglTexture,33984+M)}function j(C,M){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){W(Y,C,M);return}t.bindTexture(32879,Y.__webglTexture,33984+M)}function ne(C,M){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){te(Y,C,M);return}t.bindTexture(34067,Y.__webglTexture,33984+M)}const X={[go]:10497,[Wt]:33071,[vo]:33648},D={[xt]:9728,[ps]:9984,[va]:9986,[Ft]:9729,[Ph]:9985,[or]:9987};function Q(C,M,Y){if(Y?(i.texParameteri(C,10242,X[M.wrapS]),i.texParameteri(C,10243,X[M.wrapT]),(C===32879||C===35866)&&i.texParameteri(C,32882,X[M.wrapR]),i.texParameteri(C,10240,D[M.magFilter]),i.texParameteri(C,10241,D[M.minFilter])):(i.texParameteri(C,10242,33071),i.texParameteri(C,10243,33071),(C===32879||C===35866)&&i.texParameteri(C,32882,33071),(M.wrapS!==Wt||M.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,10240,I(M.magFilter)),i.texParameteri(C,10241,I(M.minFilter)),M.minFilter!==xt&&M.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===xt||M.minFilter!==va&&M.minFilter!==or||M.type===Wn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function N(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",B));const oe=M.source;let se=p.get(oe);se===void 0&&(se={},p.set(oe,se));const fe=ee(M);if(fe!==C.__cacheKey){se[fe]===void 0&&(se[fe]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),se[fe].usedTimes++;const we=se[C.__cacheKey];we!==void 0&&(se[C.__cacheKey].usedTimes--,we.usedTimes===0&&A(M)),C.__cacheKey=fe,C.__webglTexture=se[fe].texture}return Y}function W(C,M,Y){let oe=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=35866),M.isData3DTexture&&(oe=32879);const se=N(C,M),fe=M.source;t.bindTexture(oe,C.__webglTexture,33984+Y);const we=n.get(fe);if(fe.version!==we.__version||se===!0){t.activeTexture(33984+Y),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const R=y(M)&&b(M.image)===!1;let U=_(M.image,R,!1,u);U=pt(M,U);const de=b(U)||o,ue=a.convert(M.format,M.encoding);let _e=a.convert(M.type),be=x(M.internalFormat,ue,_e,M.encoding,M.isVideoTexture);Q(oe,M,de);let xe;const Le=M.mipmaps,Ie=o&&M.isVideoTexture!==!0,Ge=we.__version===void 0||se===!0,F=E(M,U,de);if(M.isDepthTexture)be=6402,o?M.type===Wn?be=36012:M.type===Hn?be=33190:M.type===Si?be=35056:be=33189:M.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===jn&&be===6402&&M.type!==Tc&&M.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Hn,_e=a.convert(M.type)),M.format===Ci&&be===6402&&(be=34041,M.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Si,_e=a.convert(M.type))),Ge&&(Ie?t.texStorage2D(3553,1,be,U.width,U.height):t.texImage2D(3553,0,be,U.width,U.height,0,ue,_e,null));else if(M.isDataTexture)if(Le.length>0&&de){Ie&&Ge&&t.texStorage2D(3553,F,be,Le[0].width,Le[0].height);for(let Z=0,re=Le.length;Z<re;Z++)xe=Le[Z],Ie?t.texSubImage2D(3553,Z,0,0,xe.width,xe.height,ue,_e,xe.data):t.texImage2D(3553,Z,be,xe.width,xe.height,0,ue,_e,xe.data);M.generateMipmaps=!1}else Ie?(Ge&&t.texStorage2D(3553,F,be,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,ue,_e,U.data)):t.texImage2D(3553,0,be,U.width,U.height,0,ue,_e,U.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&Ge&&t.texStorage3D(35866,F,be,Le[0].width,Le[0].height,U.depth);for(let Z=0,re=Le.length;Z<re;Z++)xe=Le[Z],M.format!==jt?ue!==null?Ie?t.compressedTexSubImage3D(35866,Z,0,0,0,xe.width,xe.height,U.depth,ue,xe.data,0,0):t.compressedTexImage3D(35866,Z,be,xe.width,xe.height,U.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(35866,Z,0,0,0,xe.width,xe.height,U.depth,ue,_e,xe.data):t.texImage3D(35866,Z,be,xe.width,xe.height,U.depth,0,ue,_e,xe.data)}else{Ie&&Ge&&t.texStorage2D(3553,F,be,Le[0].width,Le[0].height);for(let Z=0,re=Le.length;Z<re;Z++)xe=Le[Z],M.format!==jt?ue!==null?Ie?t.compressedTexSubImage2D(3553,Z,0,0,xe.width,xe.height,ue,xe.data):t.compressedTexImage2D(3553,Z,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(3553,Z,0,0,xe.width,xe.height,ue,_e,xe.data):t.texImage2D(3553,Z,be,xe.width,xe.height,0,ue,_e,xe.data)}else if(M.isDataArrayTexture)Ie?(Ge&&t.texStorage3D(35866,F,be,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ue,_e,U.data)):t.texImage3D(35866,0,be,U.width,U.height,U.depth,0,ue,_e,U.data);else if(M.isData3DTexture)Ie?(Ge&&t.texStorage3D(32879,F,be,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ue,_e,U.data)):t.texImage3D(32879,0,be,U.width,U.height,U.depth,0,ue,_e,U.data);else if(M.isFramebufferTexture){if(Ge)if(Ie)t.texStorage2D(3553,F,be,U.width,U.height);else{let Z=U.width,re=U.height;for(let pe=0;pe<F;pe++)t.texImage2D(3553,pe,be,Z,re,0,ue,_e,null),Z>>=1,re>>=1}}else if(Le.length>0&&de){Ie&&Ge&&t.texStorage2D(3553,F,be,Le[0].width,Le[0].height);for(let Z=0,re=Le.length;Z<re;Z++)xe=Le[Z],Ie?t.texSubImage2D(3553,Z,0,0,ue,_e,xe):t.texImage2D(3553,Z,be,ue,_e,xe);M.generateMipmaps=!1}else Ie?(Ge&&t.texStorage2D(3553,F,be,U.width,U.height),t.texSubImage2D(3553,0,0,0,ue,_e,U)):t.texImage2D(3553,0,be,ue,_e,U);S(M,de)&&P(oe),we.__version=fe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function te(C,M,Y){if(M.image.length!==6)return;const oe=N(C,M),se=M.source;t.bindTexture(34067,C.__webglTexture,33984+Y);const fe=n.get(se);if(se.version!==fe.__version||oe===!0){t.activeTexture(33984+Y),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,R=M.image[0]&&M.image[0].isDataTexture,U=[];for(let Z=0;Z<6;Z++)!we&&!R?U[Z]=_(M.image[Z],!1,!0,c):U[Z]=R?M.image[Z].image:M.image[Z],U[Z]=pt(M,U[Z]);const de=U[0],ue=b(de)||o,_e=a.convert(M.format,M.encoding),be=a.convert(M.type),xe=x(M.internalFormat,_e,be,M.encoding),Le=o&&M.isVideoTexture!==!0,Ie=fe.__version===void 0||oe===!0;let Ge=E(M,de,ue);Q(34067,M,ue);let F;if(we){Le&&Ie&&t.texStorage2D(34067,Ge,xe,de.width,de.height);for(let Z=0;Z<6;Z++){F=U[Z].mipmaps;for(let re=0;re<F.length;re++){const pe=F[re];M.format!==jt?_e!==null?Le?t.compressedTexSubImage2D(34069+Z,re,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(34069+Z,re,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+Z,re,0,0,pe.width,pe.height,_e,be,pe.data):t.texImage2D(34069+Z,re,xe,pe.width,pe.height,0,_e,be,pe.data)}}}else{F=M.mipmaps,Le&&Ie&&(F.length>0&&Ge++,t.texStorage2D(34067,Ge,xe,U[0].width,U[0].height));for(let Z=0;Z<6;Z++)if(R){Le?t.texSubImage2D(34069+Z,0,0,0,U[Z].width,U[Z].height,_e,be,U[Z].data):t.texImage2D(34069+Z,0,xe,U[Z].width,U[Z].height,0,_e,be,U[Z].data);for(let re=0;re<F.length;re++){const ge=F[re].image[Z].image;Le?t.texSubImage2D(34069+Z,re+1,0,0,ge.width,ge.height,_e,be,ge.data):t.texImage2D(34069+Z,re+1,xe,ge.width,ge.height,0,_e,be,ge.data)}}else{Le?t.texSubImage2D(34069+Z,0,0,0,_e,be,U[Z]):t.texImage2D(34069+Z,0,xe,_e,be,U[Z]);for(let re=0;re<F.length;re++){const pe=F[re];Le?t.texSubImage2D(34069+Z,re+1,0,0,_e,be,pe.image[Z]):t.texImage2D(34069+Z,re+1,xe,_e,be,pe.image[Z])}}}S(M,ue)&&P(34067),fe.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ae(C,M,Y,oe,se){const fe=a.convert(Y.format,Y.encoding),we=a.convert(Y.type),R=x(Y.internalFormat,fe,we,Y.encoding);n.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,R,M.width,M.height,M.depth,0,fe,we,null):t.texImage2D(se,0,R,M.width,M.height,0,fe,we,null)),t.bindFramebuffer(36160,C),je(M)?f.framebufferTexture2DMultisampleEXT(36160,oe,se,n.get(Y).__webglTexture,0,Ue(M)):(se===3553||se>=34069&&se<=34074)&&i.framebufferTexture2D(36160,oe,se,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(C,M,Y){if(i.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let oe=33189;if(Y||je(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Wn?oe=36012:se.type===Hn&&(oe=33190));const fe=Ue(M);je(M)?f.renderbufferStorageMultisampleEXT(36161,fe,oe,M.width,M.height):i.renderbufferStorageMultisample(36161,fe,oe,M.width,M.height)}else i.renderbufferStorage(36161,oe,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const oe=Ue(M);Y&&je(M)===!1?i.renderbufferStorageMultisample(36161,oe,35056,M.width,M.height):je(M)?f.renderbufferStorageMultisampleEXT(36161,oe,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,C)}else{const oe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<oe.length;se++){const fe=oe[se],we=a.convert(fe.format,fe.encoding),R=a.convert(fe.type),U=x(fe.internalFormat,we,R,fe.encoding),de=Ue(M);Y&&je(M)===!1?i.renderbufferStorageMultisample(36161,de,U,M.width,M.height):je(M)?f.renderbufferStorageMultisampleEXT(36161,de,U,M.width,M.height):i.renderbufferStorage(36161,U,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function ve(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const oe=n.get(M.depthTexture).__webglTexture,se=Ue(M);if(M.depthTexture.format===jn)je(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,se):i.framebufferTexture2D(36160,36096,3553,oe,0);else if(M.depthTexture.format===Ci)je(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,se):i.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function Te(C){const M=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,C)}else if(Y){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=i.createRenderbuffer(),he(M.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),he(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ne(C,M,Y){const oe=n.get(C);M!==void 0&&ae(oe.__webglFramebuffer,C,C.texture,36064,3553),Y!==void 0&&Te(C)}function Ze(C){const M=C.texture,Y=n.get(C),oe=n.get(M);C.addEventListener("dispose",V),C.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,s.memory.textures++);const se=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,we=b(C)||o;if(se){Y.__webglFramebuffer=[];for(let R=0;R<6;R++)Y.__webglFramebuffer[R]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),fe)if(r.drawBuffers){const R=C.texture;for(let U=0,de=R.length;U<de;U++){const ue=n.get(R[U]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&je(C)===!1){const R=fe?M:[M];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let U=0;U<R.length;U++){const de=R[U];Y.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[U]);const ue=a.convert(de.format,de.encoding),_e=a.convert(de.type),be=x(de.internalFormat,ue,_e,de.encoding,C.isXRRenderTarget===!0),xe=Ue(C);i.renderbufferStorageMultisample(36161,xe,be,C.width,C.height),i.framebufferRenderbuffer(36160,36064+U,36161,Y.__webglColorRenderbuffer[U])}i.bindRenderbuffer(36161,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,oe.__webglTexture),Q(34067,M,we);for(let R=0;R<6;R++)ae(Y.__webglFramebuffer[R],C,M,36064,34069+R);S(M,we)&&P(34067),t.unbindTexture()}else if(fe){const R=C.texture;for(let U=0,de=R.length;U<de;U++){const ue=R[U],_e=n.get(ue);t.bindTexture(3553,_e.__webglTexture),Q(3553,ue,we),ae(Y.__webglFramebuffer,C,ue,36064+U,3553),S(ue,we)&&P(3553)}t.unbindTexture()}else{let R=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?R=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,oe.__webglTexture),Q(R,M,we),ae(Y.__webglFramebuffer,C,M,36064,R),S(M,we)&&P(R),t.unbindTexture()}C.depthBuffer&&Te(C)}function Ve(C){const M=b(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0,se=Y.length;oe<se;oe++){const fe=Y[oe];if(S(fe,M)){const we=C.isWebGLCubeRenderTarget?34067:3553,R=n.get(fe).__webglTexture;t.bindTexture(we,R),P(we),t.unbindTexture()}}}function Be(C){if(o&&C.samples>0&&je(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,oe=C.height;let se=16384;const fe=[],we=C.stencilBuffer?33306:36096,R=n.get(C),U=C.isWebGLMultipleRenderTargets===!0;if(U)for(let de=0;de<M.length;de++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let de=0;de<M.length;de++){fe.push(36064+de),C.depthBuffer&&fe.push(we);const ue=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(ue===!1&&(C.depthBuffer&&(se|=256),C.stencilBuffer&&(se|=1024)),U&&i.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[de]),ue===!0&&(i.invalidateFramebuffer(36008,[we]),i.invalidateFramebuffer(36009,[we])),U){const _e=n.get(M[de]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,_e,0)}i.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,se,9728),m&&i.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let de=0;de<M.length;de++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+de,36161,R.__webglColorRenderbuffer[de]);const ue=n.get(M[de]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+de,3553,ue,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function Ue(C){return Math.min(h,C.samples)}function je(C){const M=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(C){const M=s.render.frame;g.get(C)!==M&&(g.set(C,M),C.update())}function pt(C,M){const Y=C.encoding,oe=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===yo||Y!==qn&&(Y===qe?o===!1?e.has("EXT_sRGB")===!0&&oe===jt?(C.format=yo,C.minFilter=Ft,C.generateMipmaps=!1):M=Lc.sRGBToLinear(M):(oe!==jt||se!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),M}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=ie,this.setTexture2DArray=me,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=Ne,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=je}function qg(i,e,t){const n=t.isWebGL2;function r(a,s=null){let o;if(a===$n)return 5121;if(a===Oh)return 32819;if(a===Ih)return 32820;if(a===Lh)return 5120;if(a===Rh)return 5122;if(a===Tc)return 5123;if(a===Dh)return 5124;if(a===Hn)return 5125;if(a===Wn)return 5126;if(a===sr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Nh)return 6406;if(a===jt)return 6408;if(a===Fh)return 6409;if(a===zh)return 6410;if(a===jn)return 6402;if(a===Ci)return 34041;if(a===yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===kh)return 6403;if(a===Bh)return 36244;if(a===Uh)return 33319;if(a===Gh)return 33320;if(a===Vh)return 36249;if(a===_a||a===ya||a===xa||a===ba)if(s===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===_a)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===_a)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ya)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ba)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ms||a===gs||a===vs||a===_s)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ms)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===gs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===vs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===_s)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ys||a===xs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ys)return s===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===xs)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===bs||a===ws||a===Ms||a===Ss||a===Es||a===Ts||a===As||a===Cs||a===Ps||a===Ls||a===Rs||a===Ds||a===Os||a===Is)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===bs)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ws)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ms)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ss)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Es)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ts)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===As)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cs)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ps)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ls)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Rs)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ds)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Os)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Is)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===wa)return s===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Wh||a===Ns||a===Fs||a===zs)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===wa)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ns)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Fs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zs)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Si?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class Xg extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let yi=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Yg={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),v=this._getHandJoint(c,d);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zg extends Et{constructor(e,t,n,r,a,s,o,l,c,u){if(u=u!==void 0?u:jn,u!==jn&&u!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===jn&&(n=Hn),n===void 0&&u===Ci&&(n=Si),super(null,r,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}class Kg extends Yt{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const d=t.getContextAttributes();let p=null,v=null;const w=[],_=[],b=new Set,y=new Map,S=new zt;S.layers.enable(1),S.viewport=new lt;const P=new zt;P.layers.enable(2),P.viewport=new lt;const x=[S,P],E=new Xg;E.layers.enable(1),E.layers.enable(2);let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=w[j];return ne===void 0&&(ne=new Xa,w[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=w[j];return ne===void 0&&(ne=new Xa,w[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=w[j];return ne===void 0&&(ne=new Xa,w[j]=ne),ne.getHandSpace()};function V(j){const ne=_.indexOf(j.inputSource);if(ne===-1)return;const X=w[ne];X!==void 0&&X.dispatchEvent({type:j.type,data:j.inputSource})}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",A);for(let j=0;j<w.length;j++){const ne=_[j];ne!==null&&(_[j]=null,w[j].disconnect(ne))}I=null,B=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,v=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",A),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),v=new On(m.framebufferWidth,m.framebufferHeight,{format:jt,type:$n,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ne=null,X=null,D=null;d.depth&&(D=d.stencil?35056:33190,ne=d.stencil?Ci:jn,X=d.stencil?Si:Hn);const Q={colorFormat:32856,depthFormat:D,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),v=new On(f.textureWidth,f.textureHeight,{format:jt,type:$n,depthTexture:new Zg(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const N=e.properties.get(v);N.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function A(j){for(let ne=0;ne<j.removed.length;ne++){const X=j.removed[ne],D=_.indexOf(X);D>=0&&(_[D]=null,w[D].disconnect(X))}for(let ne=0;ne<j.added.length;ne++){const X=j.added[ne];let D=_.indexOf(X);if(D===-1){for(let N=0;N<w.length;N++)if(N>=_.length){_.push(X),D=N;break}else if(_[N]===null){_[N]=X,D=N;break}if(D===-1)break}const Q=w[D];Q&&Q.connect(X)}}const L=new O,k=new O;function J(j,ne,X){L.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(X.matrixWorld);const D=L.distanceTo(k),Q=ne.projectionMatrix.elements,N=X.projectionMatrix.elements,W=Q[14]/(Q[10]-1),te=Q[14]/(Q[10]+1),ae=(Q[9]+1)/Q[5],he=(Q[9]-1)/Q[5],ve=(Q[8]-1)/Q[0],Te=(N[8]+1)/N[0],Ne=W*ve,Ze=W*Te,Ve=D/(-ve+Te),Be=Ve*-ve;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Ue=W+Ve,je=te+Ve,Ct=Ne-Be,pt=Ze+(D-Be),C=ae*te/je*Ue,M=he*te/je*Ue;j.projectionMatrix.makePerspective(Ct,pt,C,M,Ue,je)}function $(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;E.near=P.near=S.near=j.near,E.far=P.far=S.far=j.far,(I!==E.near||B!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,B=E.far);const ne=j.parent,X=E.cameras;$(E,ne);for(let Q=0;Q<X.length;Q++)$(X[Q],ne);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),j.matrix.copy(E.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);const D=j.children;for(let Q=0,N=D.length;Q<N;Q++)D[Q].updateMatrixWorld(!0);X.length===2?J(E,S,P):E.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.getPlanes=function(){return b};let ee=null;function ie(j,ne){if(u=ne.getViewerPose(c||s),g=ne,u!==null){const X=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let D=!1;X.length!==E.cameras.length&&(E.cameras.length=0,D=!0);for(let Q=0;Q<X.length;Q++){const N=X[Q];let W=null;if(m!==null)W=m.getViewport(N);else{const ae=h.getViewSubImage(f,N);W=ae.viewport,Q===0&&(e.setRenderTargetTextures(v,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(v))}let te=x[Q];te===void 0&&(te=new zt,te.layers.enable(Q),te.viewport=new lt,x[Q]=te),te.matrix.fromArray(N.transform.matrix),te.projectionMatrix.fromArray(N.projectionMatrix),te.viewport.set(W.x,W.y,W.width,W.height),Q===0&&E.matrix.copy(te.matrix),D===!0&&E.cameras.push(te)}}for(let X=0;X<w.length;X++){const D=_[X],Q=w[X];D!==null&&Q!==void 0&&Q.update(D,ne,c||s)}if(ee&&ee(j,ne),ne.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ne.detectedPlanes});let X=null;for(const D of b)ne.detectedPlanes.has(D)||(X===null&&(X=[]),X.push(D));if(X!==null)for(const D of X)b.delete(D),y.delete(D),n.dispatchEvent({type:"planeremoved",data:D});for(const D of ne.detectedPlanes)if(!b.has(D))b.add(D),y.set(D,ne.lastChangedTime),n.dispatchEvent({type:"planeadded",data:D});else{const Q=y.get(D);D.lastChangedTime>Q&&(y.set(D,D.lastChangedTime),n.dispatchEvent({type:"planechanged",data:D}))}}g=null}const me=new Uc;me.setAnimationLoop(ie),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}function Jg(i,e){function t(d,p){p.color.getRGB(d.fogColor.value,Fc(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,v,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,_)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&s(d,p)):p.isPointsMaterial?o(d,p,v,w):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===St&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===St&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.iridescenceMap?w=p.iridescenceMap:p.iridescenceThicknessMap?w=p.iridescenceThicknessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function s(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,v,w){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=w*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,v){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===St&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Qg(i,e,t,n){let r={},a={},s=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(w,_){const b=_.program;n.uniformBlockBinding(w,b)}function c(w,_){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",p));const y=_.program;n.updateUBOMapping(w,y);const S=e.render.frame;a[w.id]!==S&&(f(w),a[w.id]=S)}function u(w){const _=h();w.__bindingPointIndex=_;const b=i.createBuffer(),y=w.__size,S=w.usage;return i.bindBuffer(35345,b),i.bufferData(35345,y,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,_,b),b}function h(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const _=r[w.id],b=w.uniforms,y=w.__cache;i.bindBuffer(35345,_);for(let S=0,P=b.length;S<P;S++){const x=b[S];if(m(x,S,y)===!0){const E=x.__offset,I=Array.isArray(x.value)?x.value:[x.value];let B=0;for(let V=0;V<I.length;V++){const z=I[V],A=d(z);typeof z=="number"?(x.__data[0]=z,i.bufferSubData(35345,E+B,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=z.elements[0],x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=z.elements[0],x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=z.elements[0]):(z.toArray(x.__data,B),B+=A.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,E,x.__data)}}i.bindBuffer(35345,null)}function m(w,_,b){const y=w.value;if(b[_]===void 0){if(typeof y=="number")b[_]=y;else{const S=Array.isArray(y)?y:[y],P=[];for(let x=0;x<S.length;x++)P.push(S[x].clone());b[_]=P}return!0}else if(typeof y=="number"){if(b[_]!==y)return b[_]=y,!0}else{const S=Array.isArray(b[_])?b[_]:[b[_]],P=Array.isArray(y)?y:[y];for(let x=0;x<S.length;x++){const E=S[x];if(E.equals(P[x])===!1)return E.copy(P[x]),!0}}return!1}function g(w){const _=w.uniforms;let b=0;const y=16;let S=0;for(let P=0,x=_.length;P<x;P++){const E=_[P],I={boundary:0,storage:0},B=Array.isArray(E.value)?E.value:[E.value];for(let V=0,z=B.length;V<z;V++){const A=B[V],L=d(A);I.boundary+=L.boundary,I.storage+=L.storage}if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,P>0){S=b%y;const V=y-S;S!==0&&V-I.boundary<0&&(b+=y-S,E.__offset=b)}b+=I.storage}return S=b%y,S>0&&(b+=y-S),w.__size=b,w.__cache={},this}function d(w){const _={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){const _=w.target;_.removeEventListener("dispose",p);const b=s.indexOf(_.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function v(){for(const w in r)i.deleteBuffer(r[w]);s=[],r={},a={}}return{bind:l,update:c,dispose:v}}function e0(){const i=cr("canvas");return i.style.display="block",i}function $o(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:e0(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,a=i.antialias!==void 0?i.antialias:!1,s=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const d=this;let p=!1,v=0,w=0,_=null,b=-1,y=null;const S=new lt,P=new lt;let x=null,E=e.width,I=e.height,B=1,V=null,z=null;const A=new lt(0,0,E,I),L=new lt(0,0,E,I);let k=!1;const J=new Vo;let $=!1,ee=!1,ie=null;const me=new Ye,j=new O,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function X(){return _===null?B:1}let D=t;function Q(T,H){for(let q=0;q<T.length;q++){const G=T[q],K=e.getContext(G,H);if(K!==null)return K}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zo}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",xe,!1),D===null){const H=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&H.shift(),D=Q(H,T),D===null)throw Q(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let N,W,te,ae,he,ve,Te,Ne,Ze,Ve,Be,Ue,je,Ct,pt,C,M,Y,oe,se,fe,we,R,U;function de(){N=new hm(D),W=new am(D,N,i),N.init(W),we=new qg(D,N,W),te=new jg(D,N,W),ae=new pm,he=new Rg,ve=new $g(D,N,te,he,W,we,ae),Te=new sm(d),Ne=new um(d),Ze=new Mf(D,W),R=new im(D,N,Ze,W),Ve=new fm(D,Ze,ae,R),Be=new _m(D,Ve,Ze,ae),oe=new vm(D,W,ve),C=new om(he),Ue=new Lg(d,Te,Ne,N,W,R,C),je=new Jg(d,he),Ct=new Og,pt=new Bg(N,W),Y=new nm(d,Te,Ne,te,Be,u,s),M=new Wg(d,Be,W),U=new Qg(D,ae,W,te),se=new rm(D,N,ae,W),fe=new dm(D,N,ae,W),ae.programs=Ue.programs,d.capabilities=W,d.extensions=N,d.properties=he,d.renderLists=Ct,d.shadowMap=M,d.state=te,d.info=ae}de();const ue=new Kg(d,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=N.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=N.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(E,I,!1))},this.getSize=function(T){return T.set(E,I)},this.setSize=function(T,H,q=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,I=H,e.width=Math.floor(T*B),e.height=Math.floor(H*B),q===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(E*B,I*B).floor()},this.setDrawingBufferSize=function(T,H,q){E=T,I=H,B=q,e.width=Math.floor(T*q),e.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(A)},this.setViewport=function(T,H,q,G){T.isVector4?A.set(T.x,T.y,T.z,T.w):A.set(T,H,q,G),te.viewport(S.copy(A).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(L)},this.setScissor=function(T,H,q,G){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,H,q,G),te.scissor(P.copy(L).multiplyScalar(B).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(T){te.setScissorTest(k=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(T=!0,H=!0,q=!0){let G=0;T&&(G|=16384),H&&(G|=256),q&&(G|=1024),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),Ct.dispose(),pt.dispose(),he.dispose(),Te.dispose(),Ne.dispose(),Be.dispose(),R.dispose(),U.dispose(),Ue.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",re),ue.removeEventListener("sessionend",pe),ie&&(ie.dispose(),ie=null),ge.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ae.autoReset,H=M.enabled,q=M.autoUpdate,G=M.needsUpdate,K=M.type;de(),ae.autoReset=T,M.enabled=H,M.autoUpdate=q,M.needsUpdate=G,M.type=K}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const H=T.target;H.removeEventListener("dispose",Le),Ie(H)}function Ie(T){Ge(T),he.remove(T)}function Ge(T){const H=he.get(T).programs;H!==void 0&&(H.forEach(function(q){Ue.releaseProgram(q)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,G,K,Me){H===null&&(H=ne);const Ee=K.isMesh&&K.matrixWorld.determinant()<0,Ce=$u(T,H,q,G,K);te.setMaterial(G,Ee);let Pe=q.index,Fe=1;G.wireframe===!0&&(Pe=Ve.getWireframeAttribute(q),Fe=2);const Re=q.drawRange,De=q.attributes.position;let Qe=Re.start*Fe,Pt=(Re.start+Re.count)*Fe;Me!==null&&(Qe=Math.max(Qe,Me.start*Fe),Pt=Math.min(Pt,(Me.start+Me.count)*Fe)),Pe!==null?(Qe=Math.max(Qe,0),Pt=Math.min(Pt,Pe.count)):De!=null&&(Qe=Math.max(Qe,0),Pt=Math.min(Pt,De.count));const an=Pt-Qe;if(an<0||an===1/0)return;R.setup(K,G,Ce,q,Pe);let In,et=se;if(Pe!==null&&(In=Ze.get(Pe),et=fe,et.setIndex(In)),K.isMesh)G.wireframe===!0?(te.setLineWidth(G.wireframeLinewidth*X()),et.setMode(1)):et.setMode(4);else if(K.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),te.setLineWidth(Oe*X()),K.isLineSegments?et.setMode(1):K.isLineLoop?et.setMode(2):et.setMode(3)}else K.isPoints?et.setMode(0):K.isSprite&&et.setMode(4);if(K.isInstancedMesh)et.renderInstances(Qe,an,K.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,da=Math.min(q.instanceCount,Oe);et.renderInstances(Qe,an,da)}else et.render(Qe,an)},this.compile=function(T,H){function q(G,K,Me){G.transparent===!0&&G.side===An&&G.forceSinglePass===!1?(G.side=St,G.needsUpdate=!0,It(G,K,Me),G.side=Dn,G.needsUpdate=!0,It(G,K,Me),G.side=An):It(G,K,Me)}f=pt.get(T),f.init(),g.push(f),T.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.useLegacyLights),T.traverse(function(G){const K=G.material;if(K)if(Array.isArray(K))for(let Me=0;Me<K.length;Me++){const Ee=K[Me];q(Ee,T,G)}else q(K,T,G)}),g.pop(),f=null};let F=null;function Z(T){F&&F(T)}function re(){ge.stop()}function pe(){ge.start()}const ge=new Uc;ge.setAnimationLoop(Z),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){F=T,ue.setAnimationLoop(T),T===null?ge.stop():ge.start()},ue.addEventListener("sessionstart",re),ue.addEventListener("sessionend",pe),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,H,_),f=pt.get(T,g.length),f.init(),g.push(f),me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(me),ee=this.localClippingEnabled,$=C.init(this.clippingPlanes,ee),h=Ct.get(T,m.length),h.init(),m.push(h),$e(T,H,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(V,z),$===!0&&C.beginShadows();const q=f.state.shadowsArray;if(M.render(q,T,H),$===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(h,T),f.setupLights(d.useLegacyLights),H.isArrayCamera){const G=H.cameras;for(let K=0,Me=G.length;K<Me;K++){const Ee=G[K];at(h,T,Ee,Ee.viewport)}}else at(h,T,H);_!==null&&(ve.updateMultisampleRenderTarget(_),ve.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(d,T,H),R.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function $e(T,H,q,G){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){G&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Ee=Be.update(T),Ce=T.material;Ce.visible&&h.push(T,Ee,Ce,q,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ae.render.frame&&(T.skeleton.update(),T.skeleton.frame=ae.render.frame),!T.frustumCulled||J.intersectsObject(T))){G&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Ee=Be.update(T),Ce=T.material;if(Array.isArray(Ce)){const Pe=Ee.groups;for(let Fe=0,Re=Pe.length;Fe<Re;Fe++){const De=Pe[Fe],Qe=Ce[De.materialIndex];Qe&&Qe.visible&&h.push(T,Ee,Qe,q,j.z,De)}}else Ce.visible&&h.push(T,Ee,Ce,q,j.z,null)}}const Me=T.children;for(let Ee=0,Ce=Me.length;Ee<Ce;Ee++)$e(Me[Ee],H,q,G)}function at(T,H,q,G){const K=T.opaque,Me=T.transmissive,Ee=T.transparent;f.setupLightsView(q),$===!0&&C.setGlobalState(d.clippingPlanes,q),Me.length>0&&mt(K,H,q),G&&te.viewport(S.copy(G)),K.length>0&&Zt(K,H,q),Me.length>0&&Zt(Me,H,q),Ee.length>0&&Zt(Ee,H,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function mt(T,H,q){const G=W.isWebGL2;ie===null&&(ie=new On(1024,1024,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?sr:$n,minFilter:or,samples:G&&a===!0?4:0}));const K=d.getRenderTarget();d.setRenderTarget(ie),d.clear();const Me=d.toneMapping;d.toneMapping=mn,Zt(T,H,q),d.toneMapping=Me,ve.updateMultisampleRenderTarget(ie),ve.updateRenderTargetMipmap(ie),d.setRenderTarget(K)}function Zt(T,H,q){const G=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Me=T.length;K<Me;K++){const Ee=T[K],Ce=Ee.object,Pe=Ee.geometry,Fe=G===null?Ee.material:G,Re=Ee.group;Ce.layers.test(q.layers)&&Je(Ce,H,q,Pe,Fe,Re)}}function Je(T,H,q,G,K,Me){T.onBeforeRender(d,H,q,G,K,Me),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(d,H,q,G,T,Me),K.transparent===!0&&K.side===An&&K.forceSinglePass===!1?(K.side=St,K.needsUpdate=!0,d.renderBufferDirect(q,H,G,K,T,Me),K.side=Dn,K.needsUpdate=!0,d.renderBufferDirect(q,H,G,K,T,Me),K.side=An):d.renderBufferDirect(q,H,G,K,T,Me),T.onAfterRender(d,H,q,G,K,Me)}function It(T,H,q){H.isScene!==!0&&(H=ne);const G=he.get(T),K=f.state.lights,Me=f.state.shadowsArray,Ee=K.state.version,Ce=Ue.getParameters(T,K.state,Me,H,q),Pe=Ue.getProgramCacheKey(Ce);let Fe=G.programs;G.environment=T.isMeshStandardMaterial?H.environment:null,G.fog=H.fog,G.envMap=(T.isMeshStandardMaterial?Ne:Te).get(T.envMap||G.environment),Fe===void 0&&(T.addEventListener("dispose",Le),Fe=new Map,G.programs=Fe);let Re=Fe.get(Pe);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===Ee)return Kt(T,Ce),Re}else Ce.uniforms=Ue.getUniforms(T),T.onBuild(q,Ce,d),T.onBeforeCompile(Ce,d),Re=Ue.acquireProgram(Ce,Pe),Fe.set(Pe,Re),G.uniforms=Ce.uniforms;const De=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=C.uniform),Kt(T,Ce),G.needsLights=Xu(T),G.lightsStateVersion=Ee,G.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix);const Qe=Re.getUniforms(),Pt=Ur.seqWithValue(Qe.seq,De);return G.currentProgram=Re,G.uniformsList=Pt,Re}function Kt(T,H){const q=he.get(T);q.outputEncoding=H.outputEncoding,q.instancing=H.instancing,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function $u(T,H,q,G,K){H.isScene!==!0&&(H=ne),ve.resetTextureUnits();const Me=H.fog,Ee=G.isMeshStandardMaterial?H.environment:null,Ce=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:qn,Pe=(G.isMeshStandardMaterial?Ne:Te).get(G.envMap||Ee),Fe=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!G.normalMap&&!!q.attributes.tangent,De=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,Pt=!!q.morphAttributes.color,an=G.toneMapped?d.toneMapping:mn,In=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=In!==void 0?In.length:0,Oe=he.get(G),da=f.state.lights;if($===!0&&(ee===!0||T!==y)){const Lt=T===y&&G.id===b;C.setState(G,T,Lt)}let ot=!1;G.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==da.state.version||Oe.outputEncoding!==Ce||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Pe||G.fog===!0&&Oe.fog!==Me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==C.numPlanes||Oe.numIntersection!==C.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==Re||Oe.morphTargets!==De||Oe.morphNormals!==Qe||Oe.morphColors!==Pt||Oe.toneMapping!==an||W.isWebGL2===!0&&Oe.morphTargetsCount!==et)&&(ot=!0):(ot=!0,Oe.__version=G.version);let Nn=Oe.currentProgram;ot===!0&&(Nn=It(G,H,K));let os=!1,Ii=!1,pa=!1;const gt=Nn.getUniforms(),Fn=Oe.uniforms;if(te.useProgram(Nn.program)&&(os=!0,Ii=!0,pa=!0),G.id!==b&&(b=G.id,Ii=!0),os||y!==T){if(gt.setValue(D,"projectionMatrix",T.projectionMatrix),W.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,Ii=!0,pa=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Lt=gt.map.cameraPosition;Lt!==void 0&&Lt.setValue(D,j.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&gt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||K.isSkinnedMesh)&&gt.setValue(D,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){gt.setOptional(D,K,"bindMatrix"),gt.setOptional(D,K,"bindMatrixInverse");const Lt=K.skeleton;Lt&&(W.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),gt.setValue(D,"boneTexture",Lt.boneTexture,ve),gt.setValue(D,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ma=q.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0&&W.isWebGL2===!0)&&oe.update(K,q,Nn),(Ii||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,gt.setValue(D,"receiveShadow",K.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fn.envMap.value=Pe,Fn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Ii&&(gt.setValue(D,"toneMappingExposure",d.toneMappingExposure),Oe.needsLights&&qu(Fn,pa),Me&&G.fog===!0&&je.refreshFogUniforms(Fn,Me),je.refreshMaterialUniforms(Fn,G,B,I,ie),Ur.upload(D,Oe.uniformsList,Fn,ve)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ur.upload(D,Oe.uniformsList,Fn,ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&gt.setValue(D,"center",K.center),gt.setValue(D,"modelViewMatrix",K.modelViewMatrix),gt.setValue(D,"normalMatrix",K.normalMatrix),gt.setValue(D,"modelMatrix",K.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Lt=G.uniformsGroups;for(let ga=0,Yu=Lt.length;ga<Yu;ga++)if(W.isWebGL2){const ss=Lt[ga];U.update(ss,Nn),U.bind(ss,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function qu(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Xu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,H,q){he.get(T.texture).__webglTexture=H,he.get(T.depthTexture).__webglTexture=q;const G=he.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const q=he.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){_=T,v=H,w=q;let G=!0,K=null,Me=!1,Ee=!1;if(T){const Pe=he.get(T);Pe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(36160,null),G=!1):Pe.__webglFramebuffer===void 0?ve.setupRenderTarget(T):Pe.__hasExternalTextures&&ve.rebindTextures(T,he.get(T.texture).__webglTexture,he.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);const Re=he.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Re[H],Me=!0):W.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?K=he.get(T).__webglMultisampledFramebuffer:K=Re,S.copy(T.viewport),P.copy(T.scissor),x=T.scissorTest}else S.copy(A).multiplyScalar(B).floor(),P.copy(L).multiplyScalar(B).floor(),x=k;if(te.bindFramebuffer(36160,K)&&W.drawBuffers&&G&&te.drawBuffers(T,K),te.viewport(S),te.scissor(P),te.setScissorTest(x),Me){const Pe=he.get(T.texture);D.framebufferTexture2D(36160,36064,34069+H,Pe.__webglTexture,q)}else if(Ee){const Pe=he.get(T.texture),Fe=H||0;D.framebufferTextureLayer(36160,36064,Pe.__webglTexture,q||0,Fe)}b=-1},this.readRenderTargetPixels=function(T,H,q,G,K,Me,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){te.bindFramebuffer(36160,Ce);try{const Pe=T.texture,Fe=Pe.format,Re=Pe.type;if(Fe!==jt&&we.convert(Fe)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Re===sr&&(N.has("EXT_color_buffer_half_float")||W.isWebGL2&&N.has("EXT_color_buffer_float"));if(Re!==$n&&we.convert(Re)!==D.getParameter(35738)&&!(Re===Wn&&(W.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-G&&q>=0&&q<=T.height-K&&D.readPixels(H,q,G,K,we.convert(Fe),we.convert(Re),Me)}finally{const Pe=_!==null?he.get(_).__webglFramebuffer:null;te.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(T,H,q=0){const G=Math.pow(2,-q),K=Math.floor(H.image.width*G),Me=Math.floor(H.image.height*G);ve.setTexture2D(H,0),D.copyTexSubImage2D(3553,q,0,0,T.x,T.y,K,Me),te.unbindTexture()},this.copyTextureToTexture=function(T,H,q,G=0){const K=H.image.width,Me=H.image.height,Ee=we.convert(q.format),Ce=we.convert(q.type);ve.setTexture2D(q,0),D.pixelStorei(37440,q.flipY),D.pixelStorei(37441,q.premultiplyAlpha),D.pixelStorei(3317,q.unpackAlignment),H.isDataTexture?D.texSubImage2D(3553,G,T.x,T.y,K,Me,Ee,Ce,H.image.data):H.isCompressedTexture?D.compressedTexSubImage2D(3553,G,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ee,H.mipmaps[0].data):D.texSubImage2D(3553,G,T.x,T.y,Ee,Ce,H.image),G===0&&q.generateMipmaps&&D.generateMipmap(3553),te.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q,G,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Pe=we.convert(G.format),Fe=we.convert(G.type);let Re;if(G.isData3DTexture)ve.setTexture3D(G,0),Re=32879;else if(G.isDataArrayTexture)ve.setTexture2DArray(G,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,G.flipY),D.pixelStorei(37441,G.premultiplyAlpha),D.pixelStorei(3317,G.unpackAlignment);const De=D.getParameter(3314),Qe=D.getParameter(32878),Pt=D.getParameter(3316),an=D.getParameter(3315),In=D.getParameter(32877),et=q.isCompressedTexture?q.mipmaps[0]:q.image;D.pixelStorei(3314,et.width),D.pixelStorei(32878,et.height),D.pixelStorei(3316,T.min.x),D.pixelStorei(3315,T.min.y),D.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Re,K,H.x,H.y,H.z,Me,Ee,Ce,Pe,Fe,et.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Re,K,H.x,H.y,H.z,Me,Ee,Ce,Pe,et.data)):D.texSubImage3D(Re,K,H.x,H.y,H.z,Me,Ee,Ce,Pe,Fe,et),D.pixelStorei(3314,De),D.pixelStorei(32878,Qe),D.pixelStorei(3316,Pt),D.pixelStorei(3315,an),D.pixelStorei(32877,In),K===0&&G.generateMipmaps&&D.generateMipmap(Re),te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){v=0,w=0,_=null,te.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties($o.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class t0 extends $o{}t0.prototype.isWebGL1Renderer=!0;class n0 extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class i0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_o,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _t=new O;class jr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),r=We(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),r=We(r,this.array),a=We(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class r0 extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hi;const Vi=new O,fi=new O,di=new O,pi=new le,Hi=new le,jc=new Ye,Dr=new O,Wi=new O,Or=new O,xl=new le,Ya=new le,bl=new le;class yb extends ct{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",hi===void 0){hi=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new i0(t,5);hi.setIndex([0,1,2,0,2,3]),hi.setAttribute("position",new jr(n,3,0,!1)),hi.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=hi,this.material=e!==void 0?e:new r0,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),jc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-di.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;Ir(Dr.set(-.5,-.5,0),di,s,fi,r,a),Ir(Wi.set(.5,-.5,0),di,s,fi,r,a),Ir(Or.set(.5,.5,0),di,s,fi,r,a),xl.set(0,0),Ya.set(1,0),bl.set(1,1);let o=e.ray.intersectTriangle(Dr,Wi,Or,!1,Vi);if(o===null&&(Ir(Wi.set(-.5,.5,0),di,s,fi,r,a),Ya.set(0,1),o=e.ray.intersectTriangle(Dr,Or,Wi,!1,Vi),o===null))return;const l=e.ray.origin.distanceTo(Vi);l<e.near||l>e.far||t.push({distance:l,point:Vi.clone(),uv:nn.getUV(Vi,Dr,Wi,Or,xl,Ya,bl,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ir(i,e,t,n,r,a){pi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Hi.x=a*pi.x-r*pi.y,Hi.y=r*pi.x+a*pi.y):Hi.copy(pi),i.copy(e),i.x+=Hi.x,i.y+=Hi.y,i.applyMatrix4(jc)}class $c extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wl=new O,Ml=new O,Sl=new Ye,Za=new Bo,Nr=new ra;class a0 extends ct{constructor(e=new Tt,t=new $c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)wl.fromBufferAttribute(t,r-1),Ml.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=wl.distanceTo(Ml);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Nr.radius+=a,e.ray.intersectsSphere(Nr)===!1)return;Sl.copy(r).invert(),Za.copy(e.ray).applyMatrix4(Sl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,u=new O,h=new O,f=new O,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,s.start),w=Math.min(g.count,s.start+s.count);for(let _=v,b=w-1;_<b;_+=m){const y=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,S),Za.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,s.start),w=Math.min(p.count,s.start+s.count);for(let _=v,b=w-1;_<b;_+=m){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Za.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const a=n.length;let s;t?s=t:s=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(a-1);const u=n[r],f=n[r+1]-u,m=(s-u)/f;return(r+m)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new le:new O);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,r=[],a=[],s=[],o=new O,l=new Ye;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new O)}a[0]=new O,s[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),s[m]=s[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ft(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,g))}s[m].crossVectors(r[m],a[m])}if(t===!0){let m=Math.acos(ft(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(m=-m);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qc extends yn{constructor(e=0,t=0,n=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new le,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class o0 extends qc{constructor(e,t,n,r,a,s){super(e,t,n,n,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let i=0,e=0,t=0,n=0;function r(a,s,o,l){i=a,e=o,t=-3*a+3*s-2*o-l,n=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,h){let f=(s-a)/c-(o-a)/(c+u)+(o-s)/u,m=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,m*=u,r(s,o,f,m)},calc:function(a){const s=a*a,o=s*a;return i+e*a+t*s+n*o}}}const Fr=new O,Ka=new qo,Ja=new qo,Qa=new qo;class s0 extends yn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%a]:(Fr.subVectors(r[0],r[1]).add(r[0]),c=Fr);const h=r[o%a],f=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(Fr.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);d<1e-4&&(d=1),g<1e-4&&(g=d),p<1e-4&&(p=d),Ka.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,d,p),Ja.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,d,p),Qa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,d,p)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ja.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Qa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ka.calc(l),Ja.calc(l),Qa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function El(i,e,t,n,r){const a=(n-e)*.5,s=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+s)*l+(-3*t+3*n-2*a-s)*o+a*i+t}function l0(i,e){const t=1-i;return t*t*e}function c0(i,e){return 2*(1-i)*i*e}function u0(i,e){return i*i*e}function ir(i,e,t,n){return l0(i,e)+c0(i,t)+u0(i,n)}function h0(i,e){const t=1-i;return t*t*t*e}function f0(i,e){const t=1-i;return 3*t*t*i*e}function d0(i,e){return 3*(1-i)*i*i*e}function p0(i,e){return i*i*i*e}function rr(i,e,t,n,r){return h0(i,e)+f0(i,t)+d0(i,n)+p0(i,r)}class m0 extends yn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(rr(e,r.x,a.x,s.x,o.x),rr(e,r.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xc extends yn{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(rr(e,r.x,a.x,s.x,o.x),rr(e,r.y,a.y,s.y,o.y),rr(e,r.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g0 extends yn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v0 extends yn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _0 extends yn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(ir(e,r.x,a.x,s.x),ir(e,r.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xo extends yn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(ir(e,r.x,a.x,s.x),ir(e,r.y,a.y,s.y),ir(e,r.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y0 extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return n.set(El(o,l.x,c.x,u.x,h.x),El(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var x0=Object.freeze({__proto__:null,ArcCurve:o0,CatmullRomCurve3:s0,CubicBezierCurve:m0,CubicBezierCurve3:Xc,EllipseCurve:qc,LineCurve:g0,LineCurve3:v0,QuadraticBezierCurve:_0,QuadraticBezierCurve3:Xo,SplineCurve:y0});class sa extends Tt{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],f=[],m=[];let g=0;const d=[],p=n/2;let v=0;w(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(m,2));function w(){const b=new O,y=new O;let S=0;const P=(t-e)/n;for(let x=0;x<=a;x++){const E=[],I=x/a,B=I*(t-e)+e;for(let V=0;V<=r;V++){const z=V/r,A=z*l+o,L=Math.sin(A),k=Math.cos(A);y.x=B*L,y.y=-I*n+p,y.z=B*k,h.push(y.x,y.y,y.z),b.set(L,P,k).normalize(),f.push(b.x,b.y,b.z),m.push(z,1-I),E.push(g++)}d.push(E)}for(let x=0;x<r;x++)for(let E=0;E<a;E++){const I=d[E][x],B=d[E+1][x],V=d[E+1][x+1],z=d[E][x+1];u.push(I,B,z),u.push(B,V,z),S+=6}c.addGroup(v,S,0),v+=S}function _(b){const y=g,S=new le,P=new O;let x=0;const E=b===!0?e:t,I=b===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,p*I,0),f.push(0,I,0),m.push(.5,.5),g++;const B=g;for(let V=0;V<=r;V++){const A=V/r*l+o,L=Math.cos(A),k=Math.sin(A);P.x=E*k,P.y=p*I,P.z=E*L,h.push(P.x,P.y,P.z),f.push(0,I,0),S.x=L*.5+.5,S.y=k*.5*I+.5,m.push(S.x,S.y),g++}for(let V=0;V<r;V++){const z=y+V,A=B+V;b===!0?u.push(A,A+1,z):u.push(A+1,A,z),x+=3}c.addGroup(v,x,b===!0?1:2),v+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends sa{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class la extends Tt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new O,f=new O,m=[],g=[],d=[],p=[];for(let v=0;v<=n;v++){const w=[],_=v/n;let b=0;v==0&&s==0?b=.5/t:v==n&&l==Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const S=y/t;h.x=-e*Math.cos(r+S*a)*Math.sin(s+_*o),h.y=e*Math.cos(s+_*o),h.z=e*Math.sin(r+S*a)*Math.sin(s+_*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(S+b,1-_),w.push(c++)}u.push(w)}for(let v=0;v<n;v++)for(let w=0;w<t;w++){const _=u[v][w+1],b=u[v][w],y=u[v+1][w],S=u[v+1][w+1];(v!==0||s>0)&&m.push(_,b,S),(v!==n-1||l<Math.PI)&&m.push(b,y,S)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zo extends Tt{constructor(e=new Xo(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new O,l=new O,c=new le;let u=new O;const h=[],f=[],m=[],g=[];d(),this.setIndex(g),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(m,2));function d(){for(let _=0;_<t;_++)p(_);p(a===!1?t:0),w(),v()}function p(_){u=e.getPointAt(_/t,u);const b=s.normals[_],y=s.binormals[_];for(let S=0;S<=r;S++){const P=S/r*Math.PI*2,x=Math.sin(P),E=-Math.cos(P);l.x=E*b.x+x*y.x,l.y=E*b.y+x*y.y,l.z=E*b.z+x*y.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function v(){for(let _=1;_<=t;_++)for(let b=1;b<=r;b++){const y=(r+1)*(_-1)+(b-1),S=(r+1)*_+(b-1),P=(r+1)*_+b,x=(r+1)*(_-1)+b;g.push(y,S,x),g.push(S,P,x)}}function w(){for(let _=0;_<=t;_++)for(let b=0;b<=r;b++)c.x=_/t,c.y=b/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zo(new x0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class b0 extends Zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Tl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class w0{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const M0=new w0;class Yc{constructor(e){this.manager=e!==void 0?e:M0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class S0 extends Yc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Tl.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=cr("img");function l(){u(),Tl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){u(),r&&r(h),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class E0 extends Yc{constructor(e){super(e)}load(e,t,n,r){const a=new Et,s=new S0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Zc extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const eo=new Ye,Al=new O,Cl=new O;class T0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class A0 extends T0{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C0 extends Zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new A0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class P0 extends Zc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pl(){return(typeof performance>"u"?Date:performance).now()}class Jc{constructor(e,t,n=0,r=1/0){this.ray=new Bo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return bo(e,this,n,t),n.sort(Ll),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)bo(e[r],this,n,t);return n.sort(Ll),n}}function Ll(i,e){return i.distance-e.distance}function bo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let a=0,s=r.length;a<s;a++)bo(r[a],e,t,!0)}}class wo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const mi=new Tn,Sn=new Jc,ji=new le,Rl=new O,zr=new O,to=new O,Dl=new Ye;class L0 extends Yt{constructor(e,t,n){super(),n.style.touchAction="none";let r=null,a=null;const s=[],o=this;function l(){n.addEventListener("pointermove",m),n.addEventListener("pointerdown",g),n.addEventListener("pointerup",d),n.addEventListener("pointerleave",d)}function c(){n.removeEventListener("pointermove",m),n.removeEventListener("pointerdown",g),n.removeEventListener("pointerup",d),n.removeEventListener("pointerleave",d),n.style.cursor=""}function u(){c()}function h(){return e}function f(){return Sn}function m(v){if(o.enabled!==!1){if(p(v),Sn.setFromCamera(ji,t),r){Sn.ray.intersectPlane(mi,zr)&&r.position.copy(zr.sub(Rl).applyMatrix4(Dl)),o.dispatchEvent({type:"drag",object:r});return}if(v.pointerType==="mouse"||v.pointerType==="pen")if(s.length=0,Sn.setFromCamera(ji,t),Sn.intersectObjects(e,!0,s),s.length>0){const w=s[0].object;mi.setFromNormalAndCoplanarPoint(t.getWorldDirection(mi.normal),to.setFromMatrixPosition(w.matrixWorld)),a!==w&&a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),n.style.cursor="auto",a=null),a!==w&&(o.dispatchEvent({type:"hoveron",object:w}),n.style.cursor="pointer",a=w)}else a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),n.style.cursor="auto",a=null)}}function g(v){o.enabled!==!1&&(p(v),s.length=0,Sn.setFromCamera(ji,t),Sn.intersectObjects(e,!0,s),s.length>0&&(r=o.transformGroup===!0?e[0]:s[0].object,mi.setFromNormalAndCoplanarPoint(t.getWorldDirection(mi.normal),to.setFromMatrixPosition(r.matrixWorld)),Sn.ray.intersectPlane(mi,zr)&&(Dl.copy(r.parent.matrixWorld).invert(),Rl.copy(zr).sub(to.setFromMatrixPosition(r.matrixWorld))),n.style.cursor="move",o.dispatchEvent({type:"dragstart",object:r})))}function d(){o.enabled!==!1&&(r&&(o.dispatchEvent({type:"dragend",object:r}),r=null),n.style.cursor=a?"pointer":"auto")}function p(v){const w=n.getBoundingClientRect();ji.x=(v.clientX-w.left)/w.width*2-1,ji.y=-(v.clientY-w.top)/w.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=h,this.getRaycaster=f}}function R0(i,e,t){var n,r=1;i==null&&(i=0),e==null&&(e=0),t==null&&(t=0);function a(){var s,o=n.length,l,c=0,u=0,h=0;for(s=0;s<o;++s)l=n[s],c+=l.x||0,u+=l.y||0,h+=l.z||0;for(c=(c/o-i)*r,u=(u/o-e)*r,h=(h/o-t)*r,s=0;s<o;++s)l=n[s],c&&(l.x-=c),u&&(l.y-=u),h&&(l.z-=h)}return a.initialize=function(s){n=s},a.x=function(s){return arguments.length?(i=+s,a):i},a.y=function(s){return arguments.length?(e=+s,a):e},a.z=function(s){return arguments.length?(t=+s,a):t},a.strength=function(s){return arguments.length?(r=+s,a):r},a}function D0(i){const e=+this._x.call(null,i);return Qc(this.cover(e),e,i)}function Qc(i,e,t){if(isNaN(e))return i;var n,r=i._root,a={data:t},s=i._x0,o=i._x1,l,c,u,h,f;if(!r)return i._root=a,i;for(;r.length;)if((u=e>=(l=(s+o)/2))?s=l:o=l,n=r,!(r=r[h=+u]))return n[h]=a,i;if(c=+i._x.call(null,r.data),e===c)return a.next=r,n?n[h]=a:i._root=a,i;do n=n?n[h]=new Array(2):i._root=new Array(2),(u=e>=(l=(s+o)/2))?s=l:o=l;while((h=+u)==(f=+(c>=l)));return n[f]=r,n[h]=a,i}function O0(i){Array.isArray(i)||(i=Array.from(i));const e=i.length,t=new Float64Array(e);let n=1/0,r=-1/0;for(let a=0,s;a<e;++a)isNaN(s=+this._x.call(null,i[a]))||(t[a]=s,s<n&&(n=s),s>r&&(r=s));if(n>r)return this;this.cover(n).cover(r);for(let a=0;a<e;++a)Qc(this,t[a],i[a]);return this}function I0(i){if(isNaN(i=+i))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(i))+1;else{for(var n=t-e||1,r=this._root,a,s;e>i||i>=t;)switch(s=+(i<e),a=new Array(2),a[s]=r,r=a,n*=2,s){case 0:t=e+n;break;case 1:e=t-n;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function N0(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function F0(i){return arguments.length?this.cover(+i[0][0]).cover(+i[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function gn(i,e,t){this.node=i,this.x0=e,this.x1=t}function z0(i,e){var t,n=this._x0,r,a,s=this._x1,o=[],l=this._root,c,u;for(l&&o.push(new gn(l,n,s)),e==null?e=1/0:(n=i-e,s=i+e);c=o.pop();)if(!(!(l=c.node)||(r=c.x0)>s||(a=c.x1)<n))if(l.length){var h=(r+a)/2;o.push(new gn(l[1],h,a),new gn(l[0],r,h)),(u=+(i>=h))&&(c=o[o.length-1],o[o.length-1]=o[o.length-1-u],o[o.length-1-u]=c)}else{var f=Math.abs(i-+this._x.call(null,l.data));f<e&&(e=f,n=i-f,s=i+f,t=l.data)}return t}function k0(i){if(isNaN(l=+this._x.call(null,i)))return this;var e,t=this._root,n,r,a,s=this._x0,o=this._x1,l,c,u,h,f;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(s+o)/2))?s=c:o=c,e=t,!(t=t[h=+u]))return this;if(!t.length)break;e[h+1&1]&&(n=e,f=h)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[h]=a:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(n?n[f]=t:this._root=t),this):(this._root=a,this)}function B0(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function U0(){return this._root}function G0(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function V0(i){var e=[],t,n=this._root,r,a,s;for(n&&e.push(new gn(n,this._x0,this._x1));t=e.pop();)if(!i(n=t.node,a=t.x0,s=t.x1)&&n.length){var o=(a+s)/2;(r=n[1])&&e.push(new gn(r,o,s)),(r=n[0])&&e.push(new gn(r,a,o))}return this}function H0(i){var e=[],t=[],n;for(this._root&&e.push(new gn(this._root,this._x0,this._x1));n=e.pop();){var r=n.node;if(r.length){var a,s=n.x0,o=n.x1,l=(s+o)/2;(a=r[0])&&e.push(new gn(a,s,l)),(a=r[1])&&e.push(new gn(a,l,o))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.x1);return this}function W0(i){return i[0]}function j0(i){return arguments.length?(this._x=i,this):this._x}function eu(i,e){var t=new Ko(e??W0,NaN,NaN);return i==null?t:t.addAll(i)}function Ko(i,e,t){this._x=i,this._x0=e,this._x1=t,this._root=void 0}function Ol(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var At=eu.prototype=Ko.prototype;At.copy=function(){var i=new Ko(this._x,this._x0,this._x1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Ol(e),i;for(t=[{source:e,target:i._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(2)}):e.target[r]=Ol(n));return i};At.add=D0;At.addAll=O0;At.cover=I0;At.data=N0;At.extent=F0;At.find=z0;At.remove=k0;At.removeAll=B0;At.root=U0;At.size=G0;At.visit=V0;At.visitAfter=H0;At.x=j0;function $0(i){const e=+this._x.call(null,i),t=+this._y.call(null,i);return tu(this.cover(e,t),e,t,i)}function tu(i,e,t,n){if(isNaN(e)||isNaN(t))return i;var r,a=i._root,s={data:n},o=i._x0,l=i._y0,c=i._x1,u=i._y1,h,f,m,g,d,p,v,w;if(!a)return i._root=s,i;for(;a.length;)if((d=e>=(h=(o+c)/2))?o=h:c=h,(p=t>=(f=(l+u)/2))?l=f:u=f,r=a,!(a=a[v=p<<1|d]))return r[v]=s,i;if(m=+i._x.call(null,a.data),g=+i._y.call(null,a.data),e===m&&t===g)return s.next=a,r?r[v]=s:i._root=s,i;do r=r?r[v]=new Array(4):i._root=new Array(4),(d=e>=(h=(o+c)/2))?o=h:c=h,(p=t>=(f=(l+u)/2))?l=f:u=f;while((v=p<<1|d)===(w=(g>=f)<<1|m>=h));return r[w]=a,r[v]=s,i}function q0(i){var e,t,n=i.length,r,a,s=new Array(n),o=new Array(n),l=1/0,c=1/0,u=-1/0,h=-1/0;for(t=0;t<n;++t)isNaN(r=+this._x.call(null,e=i[t]))||isNaN(a=+this._y.call(null,e))||(s[t]=r,o[t]=a,r<l&&(l=r),r>u&&(u=r),a<c&&(c=a),a>h&&(h=a));if(l>u||c>h)return this;for(this.cover(l,c).cover(u,h),t=0;t<n;++t)tu(this,s[t],o[t],i[t]);return this}function X0(i,e){if(isNaN(i=+i)||isNaN(e=+e))return this;var t=this._x0,n=this._y0,r=this._x1,a=this._y1;if(isNaN(t))r=(t=Math.floor(i))+1,a=(n=Math.floor(e))+1;else{for(var s=r-t||1,o=this._root,l,c;t>i||i>=r||n>e||e>=a;)switch(c=(e<n)<<1|i<t,l=new Array(4),l[c]=o,o=l,s*=2,c){case 0:r=t+s,a=n+s;break;case 1:t=r-s,a=n+s;break;case 2:r=t+s,n=a-s;break;case 3:t=r-s,n=a-s;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=n,this._x1=r,this._y1=a,this}function Y0(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function Z0(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function bt(i,e,t,n,r){this.node=i,this.x0=e,this.y0=t,this.x1=n,this.y1=r}function K0(i,e,t){var n,r=this._x0,a=this._y0,s,o,l,c,u=this._x1,h=this._y1,f=[],m=this._root,g,d;for(m&&f.push(new bt(m,r,a,u,h)),t==null?t=1/0:(r=i-t,a=e-t,u=i+t,h=e+t,t*=t);g=f.pop();)if(!(!(m=g.node)||(s=g.x0)>u||(o=g.y0)>h||(l=g.x1)<r||(c=g.y1)<a))if(m.length){var p=(s+l)/2,v=(o+c)/2;f.push(new bt(m[3],p,v,l,c),new bt(m[2],s,v,p,c),new bt(m[1],p,o,l,v),new bt(m[0],s,o,p,v)),(d=(e>=v)<<1|i>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-d],f[f.length-1-d]=g)}else{var w=i-+this._x.call(null,m.data),_=e-+this._y.call(null,m.data),b=w*w+_*_;if(b<t){var y=Math.sqrt(t=b);r=i-y,a=e-y,u=i+y,h=e+y,n=m.data}}return n}function J0(i){if(isNaN(u=+this._x.call(null,i))||isNaN(h=+this._y.call(null,i)))return this;var e,t=this._root,n,r,a,s=this._x0,o=this._y0,l=this._x1,c=this._y1,u,h,f,m,g,d,p,v;if(!t)return this;if(t.length)for(;;){if((g=u>=(f=(s+l)/2))?s=f:l=f,(d=h>=(m=(o+c)/2))?o=m:c=m,e=t,!(t=t[p=d<<1|g]))return this;if(!t.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(n=e,v=p)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[p]=a:delete e[p],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[v]=t:this._root=t),this):(this._root=a,this)}function Q0(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function ev(){return this._root}function tv(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function nv(i){var e=[],t,n=this._root,r,a,s,o,l;for(n&&e.push(new bt(n,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!i(n=t.node,a=t.x0,s=t.y0,o=t.x1,l=t.y1)&&n.length){var c=(a+o)/2,u=(s+l)/2;(r=n[3])&&e.push(new bt(r,c,u,o,l)),(r=n[2])&&e.push(new bt(r,a,u,c,l)),(r=n[1])&&e.push(new bt(r,c,s,o,u)),(r=n[0])&&e.push(new bt(r,a,s,c,u))}return this}function iv(i){var e=[],t=[],n;for(this._root&&e.push(new bt(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var r=n.node;if(r.length){var a,s=n.x0,o=n.y0,l=n.x1,c=n.y1,u=(s+l)/2,h=(o+c)/2;(a=r[0])&&e.push(new bt(a,s,o,u,h)),(a=r[1])&&e.push(new bt(a,u,o,l,h)),(a=r[2])&&e.push(new bt(a,s,h,u,c)),(a=r[3])&&e.push(new bt(a,u,h,l,c))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function rv(i){return i[0]}function av(i){return arguments.length?(this._x=i,this):this._x}function ov(i){return i[1]}function sv(i){return arguments.length?(this._y=i,this):this._y}function nu(i,e,t){var n=new Jo(e??rv,t??ov,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function Jo(i,e,t,n,r,a){this._x=i,this._y=e,this._x0=t,this._y0=n,this._x1=r,this._y1=a,this._root=void 0}function Il(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var Mt=nu.prototype=Jo.prototype;Mt.copy=function(){var i=new Jo(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Il(e),i;for(t=[{source:e,target:i._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(4)}):e.target[r]=Il(n));return i};Mt.add=$0;Mt.addAll=q0;Mt.cover=X0;Mt.data=Y0;Mt.extent=Z0;Mt.find=K0;Mt.remove=J0;Mt.removeAll=Q0;Mt.root=ev;Mt.size=tv;Mt.visit=nv;Mt.visitAfter=iv;Mt.x=av;Mt.y=sv;function lv(i){const e=+this._x.call(null,i),t=+this._y.call(null,i),n=+this._z.call(null,i);return iu(this.cover(e,t,n),e,t,n,i)}function iu(i,e,t,n,r){if(isNaN(e)||isNaN(t)||isNaN(n))return i;var a,s=i._root,o={data:r},l=i._x0,c=i._y0,u=i._z0,h=i._x1,f=i._y1,m=i._z1,g,d,p,v,w,_,b,y,S,P,x;if(!s)return i._root=o,i;for(;s.length;)if((b=e>=(g=(l+h)/2))?l=g:h=g,(y=t>=(d=(c+f)/2))?c=d:f=d,(S=n>=(p=(u+m)/2))?u=p:m=p,a=s,!(s=s[P=S<<2|y<<1|b]))return a[P]=o,i;if(v=+i._x.call(null,s.data),w=+i._y.call(null,s.data),_=+i._z.call(null,s.data),e===v&&t===w&&n===_)return o.next=s,a?a[P]=o:i._root=o,i;do a=a?a[P]=new Array(8):i._root=new Array(8),(b=e>=(g=(l+h)/2))?l=g:h=g,(y=t>=(d=(c+f)/2))?c=d:f=d,(S=n>=(p=(u+m)/2))?u=p:m=p;while((P=S<<2|y<<1|b)===(x=(_>=p)<<2|(w>=d)<<1|v>=g));return a[x]=s,a[P]=o,i}function cv(i){Array.isArray(i)||(i=Array.from(i));const e=i.length,t=new Float64Array(e),n=new Float64Array(e),r=new Float64Array(e);let a=1/0,s=1/0,o=1/0,l=-1/0,c=-1/0,u=-1/0;for(let h=0,f,m,g,d;h<e;++h)isNaN(m=+this._x.call(null,f=i[h]))||isNaN(g=+this._y.call(null,f))||isNaN(d=+this._z.call(null,f))||(t[h]=m,n[h]=g,r[h]=d,m<a&&(a=m),m>l&&(l=m),g<s&&(s=g),g>c&&(c=g),d<o&&(o=d),d>u&&(u=d));if(a>l||s>c||o>u)return this;this.cover(a,s,o).cover(l,c,u);for(let h=0;h<e;++h)iu(this,t[h],n[h],r[h],i[h]);return this}function uv(i,e,t){if(isNaN(i=+i)||isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,a=this._z0,s=this._x1,o=this._y1,l=this._z1;if(isNaN(n))s=(n=Math.floor(i))+1,o=(r=Math.floor(e))+1,l=(a=Math.floor(t))+1;else{for(var c=s-n||1,u=this._root,h,f;n>i||i>=s||r>e||e>=o||a>t||t>=l;)switch(f=(t<a)<<2|(e<r)<<1|i<n,h=new Array(8),h[f]=u,u=h,c*=2,f){case 0:s=n+c,o=r+c,l=a+c;break;case 1:n=s-c,o=r+c,l=a+c;break;case 2:s=n+c,r=o-c,l=a+c;break;case 3:n=s-c,r=o-c,l=a+c;break;case 4:s=n+c,o=r+c,a=l-c;break;case 5:n=s-c,o=r+c,a=l-c;break;case 6:s=n+c,r=o-c,a=l-c;break;case 7:n=s-c,r=o-c,a=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=r,this._z0=a,this._x1=s,this._y1=o,this._z1=l,this}function hv(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function fv(i){return arguments.length?this.cover(+i[0][0],+i[0][1],+i[0][2]).cover(+i[1][0],+i[1][1],+i[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function He(i,e,t,n,r,a,s){this.node=i,this.x0=e,this.y0=t,this.z0=n,this.x1=r,this.y1=a,this.z1=s}function dv(i,e,t,n){var r,a=this._x0,s=this._y0,o=this._z0,l,c,u,h,f,m,g=this._x1,d=this._y1,p=this._z1,v=[],w=this._root,_,b;for(w&&v.push(new He(w,a,s,o,g,d,p)),n==null?n=1/0:(a=i-n,s=e-n,o=t-n,g=i+n,d=e+n,p=t+n,n*=n);_=v.pop();)if(!(!(w=_.node)||(l=_.x0)>g||(c=_.y0)>d||(u=_.z0)>p||(h=_.x1)<a||(f=_.y1)<s||(m=_.z1)<o))if(w.length){var y=(l+h)/2,S=(c+f)/2,P=(u+m)/2;v.push(new He(w[7],y,S,P,h,f,m),new He(w[6],l,S,P,y,f,m),new He(w[5],y,c,P,h,S,m),new He(w[4],l,c,P,y,S,m),new He(w[3],y,S,u,h,f,P),new He(w[2],l,S,u,y,f,P),new He(w[1],y,c,u,h,S,P),new He(w[0],l,c,u,y,S,P)),(b=(t>=P)<<2|(e>=S)<<1|i>=y)&&(_=v[v.length-1],v[v.length-1]=v[v.length-1-b],v[v.length-1-b]=_)}else{var x=i-+this._x.call(null,w.data),E=e-+this._y.call(null,w.data),I=t-+this._z.call(null,w.data),B=x*x+E*E+I*I;if(B<n){var V=Math.sqrt(n=B);a=i-V,s=e-V,o=t-V,g=i+V,d=e+V,p=t+V,r=w.data}}return r}function pv(i){if(isNaN(f=+this._x.call(null,i))||isNaN(m=+this._y.call(null,i))||isNaN(g=+this._z.call(null,i)))return this;var e,t=this._root,n,r,a,s=this._x0,o=this._y0,l=this._z0,c=this._x1,u=this._y1,h=this._z1,f,m,g,d,p,v,w,_,b,y,S;if(!t)return this;if(t.length)for(;;){if((w=f>=(d=(s+c)/2))?s=d:c=d,(_=m>=(p=(o+u)/2))?o=p:u=p,(b=g>=(v=(l+h)/2))?l=v:h=v,e=t,!(t=t[y=b<<2|_<<1|w]))return this;if(!t.length)break;(e[y+1&7]||e[y+2&7]||e[y+3&7]||e[y+4&7]||e[y+5&7]||e[y+6&7]||e[y+7&7])&&(n=e,S=y)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[y]=a:delete e[y],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[S]=t:this._root=t),this):(this._root=a,this)}function mv(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function gv(){return this._root}function vv(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function _v(i){var e=[],t,n=this._root,r,a,s,o,l,c,u;for(n&&e.push(new He(n,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!i(n=t.node,a=t.x0,s=t.y0,o=t.z0,l=t.x1,c=t.y1,u=t.z1)&&n.length){var h=(a+l)/2,f=(s+c)/2,m=(o+u)/2;(r=n[7])&&e.push(new He(r,h,f,m,l,c,u)),(r=n[6])&&e.push(new He(r,a,f,m,h,c,u)),(r=n[5])&&e.push(new He(r,h,s,m,l,f,u)),(r=n[4])&&e.push(new He(r,a,s,m,h,f,u)),(r=n[3])&&e.push(new He(r,h,f,o,l,c,m)),(r=n[2])&&e.push(new He(r,a,f,o,h,c,m)),(r=n[1])&&e.push(new He(r,h,s,o,l,f,m)),(r=n[0])&&e.push(new He(r,a,s,o,h,f,m))}return this}function yv(i){var e=[],t=[],n;for(this._root&&e.push(new He(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();){var r=n.node;if(r.length){var a,s=n.x0,o=n.y0,l=n.z0,c=n.x1,u=n.y1,h=n.z1,f=(s+c)/2,m=(o+u)/2,g=(l+h)/2;(a=r[0])&&e.push(new He(a,s,o,l,f,m,g)),(a=r[1])&&e.push(new He(a,f,o,l,c,m,g)),(a=r[2])&&e.push(new He(a,s,m,l,f,u,g)),(a=r[3])&&e.push(new He(a,f,m,l,c,u,g)),(a=r[4])&&e.push(new He(a,s,o,g,f,m,h)),(a=r[5])&&e.push(new He(a,f,o,g,c,m,h)),(a=r[6])&&e.push(new He(a,s,m,g,f,u,h)),(a=r[7])&&e.push(new He(a,f,m,g,c,u,h))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);return this}function xv(i){return i[0]}function bv(i){return arguments.length?(this._x=i,this):this._x}function wv(i){return i[1]}function Mv(i){return arguments.length?(this._y=i,this):this._y}function Sv(i){return i[2]}function Ev(i){return arguments.length?(this._z=i,this):this._z}function ru(i,e,t,n){var r=new Qo(e??xv,t??wv,n??Sv,NaN,NaN,NaN,NaN,NaN,NaN);return i==null?r:r.addAll(i)}function Qo(i,e,t,n,r,a,s,o,l){this._x=i,this._y=e,this._z=t,this._x0=n,this._y0=r,this._z0=a,this._x1=s,this._y1=o,this._z1=l,this._root=void 0}function Nl(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var dt=ru.prototype=Qo.prototype;dt.copy=function(){var i=new Qo(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Nl(e),i;for(t=[{source:e,target:i._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(8)}):e.target[r]=Nl(n));return i};dt.add=lv;dt.addAll=cv;dt.cover=uv;dt.data=hv;dt.extent=fv;dt.find=dv;dt.remove=pv;dt.removeAll=mv;dt.root=gv;dt.size=vv;dt.visit=_v;dt.visitAfter=yv;dt.x=bv;dt.y=Mv;dt.z=Ev;function pn(i){return function(){return i}}function dn(i){return(i()-.5)*1e-6}function Tv(i){return i.index}function Fl(i,e){var t=i.get(e);if(!t)throw new Error("node not found: "+e);return t}function Av(i){var e=Tv,t=f,n,r=pn(30),a,s,o,l,c,u,h=1;i==null&&(i=[]);function f(v){return 1/Math.min(l[v.source.index],l[v.target.index])}function m(v){for(var w=0,_=i.length;w<h;++w)for(var b=0,y,S,P,x=0,E=0,I=0,B,V;b<_;++b)y=i[b],S=y.source,P=y.target,x=P.x+P.vx-S.x-S.vx||dn(u),o>1&&(E=P.y+P.vy-S.y-S.vy||dn(u)),o>2&&(I=P.z+P.vz-S.z-S.vz||dn(u)),B=Math.sqrt(x*x+E*E+I*I),B=(B-a[b])/B*v*n[b],x*=B,E*=B,I*=B,P.vx-=x*(V=c[b]),o>1&&(P.vy-=E*V),o>2&&(P.vz-=I*V),S.vx+=x*(V=1-V),o>1&&(S.vy+=E*V),o>2&&(S.vz+=I*V)}function g(){if(s){var v,w=s.length,_=i.length,b=new Map(s.map((S,P)=>[e(S,P,s),S])),y;for(v=0,l=new Array(w);v<_;++v)y=i[v],y.index=v,typeof y.source!="object"&&(y.source=Fl(b,y.source)),typeof y.target!="object"&&(y.target=Fl(b,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(v=0,c=new Array(_);v<_;++v)y=i[v],c[v]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);n=new Array(_),d(),a=new Array(_),p()}}function d(){if(s)for(var v=0,w=i.length;v<w;++v)n[v]=+t(i[v],v,i)}function p(){if(s)for(var v=0,w=i.length;v<w;++v)a[v]=+r(i[v],v,i)}return m.initialize=function(v,...w){s=v,u=w.find(_=>typeof _=="function")||Math.random,o=w.find(_=>[1,2,3].includes(_))||2,g()},m.links=function(v){return arguments.length?(i=v,g(),m):i},m.id=function(v){return arguments.length?(e=v,m):e},m.iterations=function(v){return arguments.length?(h=+v,m):h},m.strength=function(v){return arguments.length?(t=typeof v=="function"?v:pn(+v),d(),m):t},m.distance=function(v){return arguments.length?(r=typeof v=="function"?v:pn(+v),p(),m):r},m}var Cv={value:()=>{}};function au(){for(var i=0,e=arguments.length,t={},n;i<e;++i){if(!(n=arguments[i]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new Gr(t)}function Gr(i){this._=i}function Pv(i,e){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}Gr.prototype=au.prototype={constructor:Gr,on:function(i,e){var t=this._,n=Pv(i+"",t),r,a=-1,s=n.length;if(arguments.length<2){for(;++a<s;)if((r=(i=n[a]).type)&&(r=Lv(t[r],i.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<s;)if(r=(i=n[a]).type)t[r]=zl(t[r],i.name,e);else if(e==null)for(r in t)t[r]=zl(t[r],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new Gr(i)},call:function(i,e){if((r=arguments.length-2)>0)for(var t=new Array(r),n=0,r,a;n<r;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(a=this._[i],n=0,r=a.length;n<r;++n)a[n].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,a=n.length;r<a;++r)n[r].value.apply(e,t)}};function Lv(i,e){for(var t=0,n=i.length,r;t<n;++t)if((r=i[t]).name===e)return r.value}function zl(i,e,t){for(var n=0,r=i.length;n<r;++n)if(i[n].name===e){i[n]=Cv,i=i.slice(0,n).concat(i.slice(n+1));break}return t!=null&&i.push({name:e,value:t}),i}var Li=0,Qi=0,$i=0,ou=1e3,$r,er,qr=0,Xn=0,ca=0,ur=typeof performance=="object"&&performance.now?performance:Date,su=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function lu(){return Xn||(su(Rv),Xn=ur.now()+ca)}function Rv(){Xn=0}function Mo(){this._call=this._time=this._next=null}Mo.prototype=cu.prototype={constructor:Mo,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?lu():+t)+(e==null?0:+e),!this._next&&er!==this&&(er?er._next=this:$r=this,er=this),this._call=i,this._time=t,So()},stop:function(){this._call&&(this._call=null,this._time=1/0,So())}};function cu(i,e,t){var n=new Mo;return n.restart(i,e,t),n}function Dv(){lu(),++Li;for(var i=$r,e;i;)(e=Xn-i._time)>=0&&i._call.call(void 0,e),i=i._next;--Li}function kl(){Xn=(qr=ur.now())+ca,Li=Qi=0;try{Dv()}finally{Li=0,Iv(),Xn=0}}function Ov(){var i=ur.now(),e=i-qr;e>ou&&(ca-=e,qr=i)}function Iv(){for(var i,e=$r,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:$r=t);er=i,So(n)}function So(i){if(!Li){Qi&&(Qi=clearTimeout(Qi));var e=i-Xn;e>24?(i<1/0&&(Qi=setTimeout(kl,i-ur.now()-ca)),$i&&($i=clearInterval($i))):($i||(qr=ur.now(),$i=setInterval(Ov,ou)),Li=1,su(kl))}}const Nv=1664525,Fv=1013904223,Bl=4294967296;function zv(){let i=1;return()=>(i=(Nv*i+Fv)%Bl)/Bl}var Ul=3;function no(i){return i.x}function Gl(i){return i.y}function kv(i){return i.z}var Bv=10,Uv=Math.PI*(3-Math.sqrt(5)),Gv=Math.PI*20/(9+Math.sqrt(221));function Vv(i,e){e=e||2;var t=Math.min(Ul,Math.max(1,Math.round(e))),n,r=1,a=.001,s=1-Math.pow(a,1/300),o=0,l=.6,c=new Map,u=cu(m),h=au("tick","end"),f=zv();i==null&&(i=[]);function m(){g(),h.call("tick",n),r<a&&(u.stop(),h.call("end",n))}function g(v){var w,_=i.length,b;v===void 0&&(v=1);for(var y=0;y<v;++y)for(r+=(o-r)*s,c.forEach(function(S){S(r)}),w=0;w<_;++w)b=i[w],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return n}function d(){for(var v=0,w=i.length,_;v<w;++v){if(_=i[v],_.index=v,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||t>1&&isNaN(_.y)||t>2&&isNaN(_.z)){var b=Bv*(t>2?Math.cbrt(.5+v):t>1?Math.sqrt(.5+v):v),y=v*Uv,S=v*Gv;t===1?_.x=b:t===2?(_.x=b*Math.cos(y),_.y=b*Math.sin(y)):(_.x=b*Math.sin(y)*Math.cos(S),_.y=b*Math.cos(y),_.z=b*Math.sin(y)*Math.sin(S))}(isNaN(_.vx)||t>1&&isNaN(_.vy)||t>2&&isNaN(_.vz))&&(_.vx=0,t>1&&(_.vy=0),t>2&&(_.vz=0))}}function p(v){return v.initialize&&v.initialize(i,f,t),v}return d(),n={tick:g,restart:function(){return u.restart(m),n},stop:function(){return u.stop(),n},numDimensions:function(v){return arguments.length?(t=Math.min(Ul,Math.max(1,Math.round(v))),c.forEach(p),n):t},nodes:function(v){return arguments.length?(i=v,d(),c.forEach(p),n):i},alpha:function(v){return arguments.length?(r=+v,n):r},alphaMin:function(v){return arguments.length?(a=+v,n):a},alphaDecay:function(v){return arguments.length?(s=+v,n):+s},alphaTarget:function(v){return arguments.length?(o=+v,n):o},velocityDecay:function(v){return arguments.length?(l=1-v,n):1-l},randomSource:function(v){return arguments.length?(f=v,c.forEach(p),n):f},force:function(v,w){return arguments.length>1?(w==null?c.delete(v):c.set(v,p(w)),n):c.get(v)},find:function(){var v=Array.prototype.slice.call(arguments),w=v.shift()||0,_=(t>1?v.shift():null)||0,b=(t>2?v.shift():null)||0,y=v.shift()||1/0,S=0,P=i.length,x,E,I,B,V,z;for(y*=y,S=0;S<P;++S)V=i[S],x=w-V.x,E=_-(V.y||0),I=b-(V.z||0),B=x*x+E*E+I*I,B<y&&(z=V,y=B);return z},on:function(v,w){return arguments.length>1?(h.on(v,w),n):h.on(v)}}}function Hv(){var i,e,t,n,r,a=pn(-30),s,o=1,l=1/0,c=.81;function u(g){var d,p=i.length,v=(e===1?eu(i,no):e===2?nu(i,no,Gl):e===3?ru(i,no,Gl,kv):null).visitAfter(f);for(r=g,d=0;d<p;++d)t=i[d],v.visit(m)}function h(){if(i){var g,d=i.length,p;for(s=new Array(d),g=0;g<d;++g)p=i[g],s[p.index]=+a(p,g,i)}}function f(g){var d=0,p,v,w=0,_,b,y,S,P=g.length;if(P){for(_=b=y=S=0;S<P;++S)(p=g[S])&&(v=Math.abs(p.value))&&(d+=p.value,w+=v,_+=v*(p.x||0),b+=v*(p.y||0),y+=v*(p.z||0));d*=Math.sqrt(4/P),g.x=_/w,e>1&&(g.y=b/w),e>2&&(g.z=y/w)}else{p=g,p.x=p.data.x,e>1&&(p.y=p.data.y),e>2&&(p.z=p.data.z);do d+=s[p.data.index];while(p=p.next)}g.value=d}function m(g,d,p,v,w){if(!g.value)return!0;var _=[p,v,w][e-1],b=g.x-t.x,y=e>1?g.y-t.y:0,S=e>2?g.z-t.z:0,P=_-d,x=b*b+y*y+S*S;if(P*P/c<x)return x<l&&(b===0&&(b=dn(n),x+=b*b),e>1&&y===0&&(y=dn(n),x+=y*y),e>2&&S===0&&(S=dn(n),x+=S*S),x<o&&(x=Math.sqrt(o*x)),t.vx+=b*g.value*r/x,e>1&&(t.vy+=y*g.value*r/x),e>2&&(t.vz+=S*g.value*r/x)),!0;if(g.length||x>=l)return;(g.data!==t||g.next)&&(b===0&&(b=dn(n),x+=b*b),e>1&&y===0&&(y=dn(n),x+=y*y),e>2&&S===0&&(S=dn(n),x+=S*S),x<o&&(x=Math.sqrt(o*x)));do g.data!==t&&(P=s[g.data.index]*r/x,t.vx+=b*P,e>1&&(t.vy+=y*P),e>2&&(t.vz+=S*P));while(g=g.next)}return u.initialize=function(g,...d){i=g,n=d.find(p=>typeof p=="function")||Math.random,e=d.find(p=>[1,2,3].includes(p))||2,h()},u.strength=function(g){return arguments.length?(a=typeof g=="function"?g:pn(+g),h(),u):a},u.distanceMin=function(g){return arguments.length?(o=g*g,u):Math.sqrt(o)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}function Wv(i,e,t,n){var r,a,s=pn(.1),o,l;typeof i!="function"&&(i=pn(+i)),e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function c(h){for(var f=0,m=r.length;f<m;++f){var g=r[f],d=g.x-e||1e-6,p=(g.y||0)-t||1e-6,v=(g.z||0)-n||1e-6,w=Math.sqrt(d*d+p*p+v*v),_=(l[f]-w)*o[f]*h/w;g.vx+=d*_,a>1&&(g.vy+=p*_),a>2&&(g.vz+=v*_)}}function u(){if(r){var h,f=r.length;for(o=new Array(f),l=new Array(f),h=0;h<f;++h)l[h]=+i(r[h],h,r),o[h]=isNaN(l[h])?0:+s(r[h],h,r)}}return c.initialize=function(h,...f){r=h,a=f.find(m=>[1,2,3].includes(m))||2,u()},c.strength=function(h){return arguments.length?(s=typeof h=="function"?h:pn(+h),u(),c):s},c.radius=function(h){return arguments.length?(i=typeof h=="function"?h:pn(+h),u(),c):i},c.x=function(h){return arguments.length?(e=+h,c):e},c.y=function(h){return arguments.length?(t=+h,c):t},c.z=function(h){return arguments.length?(n=+h,c):n},c}var Xr={},jv={get exports(){return Xr},set exports(i){Xr=i}},Ri={},$v={get exports(){return Ri},set exports(i){Ri=i}},uu=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const qv=uu;var Oi=function(e){return t;function t(n,r){let a=r&&r.indent||0,s=r&&r.join!==void 0?r.join:`
`,o=Array(a+1).join(" "),l=[];for(let c=0;c<e;++c){let u=qv(c),h=c===0?"":o;l.push(h+n.replace(/{var}/g,u))}return l.join(s)}};const hu=Oi;$v.exports=Xv;Ri.generateCreateBodyFunctionBody=fu;Ri.getVectorCode=pu;Ri.getBodyCode=du;function Xv(i,e){let t=fu(i,e),{Body:n}=new Function(t)();return n}function fu(i,e){return`
${pu(i,e)}
${du(i)}
return {Body: Body, Vector: Vector};
`}function du(i){let e=hu(i),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function pu(i,e){let t=hu(i),n="";return e&&(n=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${n}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var _n={},Yv={get exports(){return _n},set exports(i){_n=i}};const es=Oi,En=uu;Yv.exports=Zv;_n.generateQuadTreeFunctionBody=mu;_n.getInsertStackCode=xu;_n.getQuadNodeCode=yu;_n.isSamePosition=gu;_n.getChildBodyCode=_u;_n.setChildBodyCode=vu;function Zv(i){let e=mu(i);return new Function(e)()}function mu(i){let e=es(i),t=Math.pow(2,i);return`
${xu()}
${yu(i)}
${gu(i)}
${_u(i)}
${vu(i)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${s("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${En(0)} - node.min_${En(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${a()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(o){let l=[],c=Array(o+1).join(" ");for(let u=0;u<i;++u)l.push(c+`if (${En(u)} > max_${En(u)}) {`),l.push(c+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),l.push(c+`  min_${En(u)} = max_${En(u)};`),l.push(c+`  max_${En(u)} = node.max_${En(u)};`),l.push(c+"}");return l.join(`
`)}function a(){let o=Array(11).join(" "),l=[];for(let c=0;c<t;++c)l.push(o+`if (node.quad${c}) {`),l.push(o+`  queue[pushIdx] = node.quad${c};`),l.push(o+"  queueLength += 1;"),l.push(o+"  pushIdx += 1;"),l.push(o+"}");return l.join(`
`)}function s(o){let l=[];for(let c=0;c<t;++c)l.push(`${o}quad${c} = null;`);return l.join(`
`)}}function gu(i){let e=es(i);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function vu(i){var e=Math.pow(2,i);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let n=[];for(let r=0;r<e;++r){let a=r===0?"  ":"  else ";n.push(`${a}if (idx === ${r}) node.quad${r} = child;`)}return n.join(`
`)}}function _u(i){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],n=Math.pow(2,i);for(let r=0;r<n;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function yu(i){let e=es(i),t=Math.pow(2,i);var n=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return n;function r(a){let s=[];for(let o=0;o<t;++o)s.push(`${a}quad${o} = null;`);return s.join(`
`)}}function xu(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Yr={},Kv={get exports(){return Yr},set exports(i){Yr=i}};Kv.exports=Qv;Yr.generateFunctionBody=bu;const Jv=Oi;function Qv(i){let e=bu(i);return new Function("bodies","settings","random",e)}function bu(i){let e=Jv(i);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Zr={},e_={get exports(){return Zr},set exports(i){Zr=i}};const t_=Oi;e_.exports=n_;Zr.generateCreateDragForceFunctionBody=wu;function n_(i){let e=wu(i);return new Function("options",e)}function wu(i){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${t_(i)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Kr={},i_={get exports(){return Kr},set exports(i){Kr=i}};const r_=Oi;i_.exports=a_;Kr.generateCreateSpringForceFunctionBody=Mu;function a_(i){let e=Mu(i);return new Function("options","random",e)}function Mu(i){let e=r_(i);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var Jr={},o_={get exports(){return Jr},set exports(i){Jr=i}};const s_=Oi;o_.exports=l_;Jr.generateIntegratorFunctionBody=Su;function l_(i){let e=Su(i);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Su(i){let e=s_(i);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var io,Vl;function c_(){if(Vl)return io;Vl=1,io=i;function i(e,t,n,r){this.from=e,this.to=t,this.length=n,this.coefficient=r}return io}var ro,Hl;function u_(){if(Hl)return ro;Hl=1,ro=i;function i(e,t){var n;if(e||(e={}),t){for(n in t)if(t.hasOwnProperty(n)){var r=e.hasOwnProperty(n),a=typeof t[n],s=!r||typeof e[n]!==a;s?e[n]=t[n]:a==="object"&&(e[n]=i(e[n],t[n]))}}return e}return ro}var xi={},h_={get exports(){return xi},set exports(i){xi=i}},Wl;function f_(){if(Wl)return xi;Wl=1,h_.exports=i,xi.random=i,xi.randomIterator=o;function i(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=s,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=n;function n(){var l=1.5,c=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function a(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function s(l){return Math.floor(this.nextDouble()*l)}function o(l,c){var u=c||i();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:h};function h(){var m,g,d;for(m=l.length-1;m>0;--m)g=u.next(m+1),d=l[g],l[g]=l[m],l[m]=d;return l}function f(m){var g,d,p;for(g=l.length-1;g>0;--g)d=u.next(g+1),p=l[d],l[d]=l[g],l[g]=p,m(p);l.length&&m(l[0])}}return xi}var Eu=y_,d_=Ri,p_=_n,m_=Yr,g_=Zr,v_=Kr,__=Jr,jl={};function y_(i){var e=c_(),t=u_(),n=bc;if(i){if(i.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(i.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}i=t(i,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=jl[i.dimensions];if(!r){var a=i.dimensions;r={Body:d_(a,i.debug),createQuadTree:p_(a),createBounds:m_(a),createDragForce:g_(a),createSpringForce:v_(a),integrate:__(a)},jl[a]=r}var s=r.Body,o=r.createQuadTree,l=r.createBounds,c=r.createDragForce,u=r.createSpringForce,h=r.integrate,f=L=>new s(L),m=f_().random(42),g=[],d=[],p=o(i,m),v=l(g,i,m),w=u(i,m),_=c(i),b=0,y=[],S=new Map,P=0;I("nbody",z),I("spring",A);var x={bodies:g,quadTree:p,springs:d,settings:i,addForce:I,removeForce:B,getForces:V,step:function(){for(var L=0;L<y.length;++L)y[L](P);var k=h(g,i.timeStep,i.adaptiveTimeStepWeight);return P+=1,k},addBody:function(L){if(!L)throw new Error("Body is required");return g.push(L),L},addBodyAt:function(L){if(!L)throw new Error("Body position is required");var k=f(L);return g.push(k),k},removeBody:function(L){if(L){var k=g.indexOf(L);if(!(k<0))return g.splice(k,1),g.length===0&&v.reset(),!0}},addSpring:function(L,k,J,$){if(!L||!k)throw new Error("Cannot add null spring to force simulator");typeof J!="number"&&(J=-1);var ee=new e(L,k,J,$>=0?$:-1);return d.push(ee),ee},getTotalMovement:function(){return b},removeSpring:function(L){if(L){var k=d.indexOf(L);if(k>-1)return d.splice(k,1),!0}},getBestNewBodyPosition:function(L){return v.getBestNewPosition(L)},getBBox:E,getBoundingBox:E,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(L){return L!==void 0?(i.gravity=L,p.options({gravity:L}),this):i.gravity},theta:function(L){return L!==void 0?(i.theta=L,p.options({theta:L}),this):i.theta},random:m};return x_(i,x),n(x),x;function E(){return v.update(),v.box}function I(L,k){if(S.has(L))throw new Error("Force "+L+" is already added");S.set(L,k),y.push(k)}function B(L){var k=y.indexOf(S.get(L));k<0||(y.splice(k,1),S.delete(L))}function V(){return S}function z(){if(g.length!==0){p.insertBodies(g);for(var L=g.length;L--;){var k=g[L];k.isPinned||(k.reset(),p.updateBodyForce(k),_.update(k))}}}function A(){for(var L=d.length;L--;)w.update(d[L])}}function x_(i,e){for(var t in i)b_(i,e,t)}function b_(i,e,t){if(i.hasOwnProperty(t)&&typeof e[t]!="function"){var n=Number.isFinite(i[t]);n?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return i[t]=r,e}return i[t]}:e[t]=function(r){return r!==void 0?(i[t]=r,e):i[t]}}}jv.exports=M_;Xr.simulator=Eu;var w_=bc;function M_(i,e){if(!i)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Eu,n=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=i.version>19?z:V;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var a=new Map,s={},o=0,l=n.settings.springTransform||S_;_(),p();var c=!1,u={step:function(){if(o===0)return h(!0),!0;var A=n.step();u.lastMove=A,u.fire("step");var L=A/o,k=L<=.01;return h(k),k},getNodePosition:function(A){return B(A).pos},setNodePosition:function(A){var L=B(A);L.setPosition.apply(L,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(A){var L=s[A];if(L)return{from:L.from.pos,to:L.to.pos}},getGraphRect:function(){return n.getBBox()},forEachBody:f,pinNode:function(A,L){var k=B(A.id);k.isPinned=!!L},isNodePinned:function(A){return B(A.id).isPinned},dispose:function(){i.off("changed",w),u.fire("disposed")},getBody:d,getSpring:g,getForceVectorLength:m,simulator:n,graph:i,lastMove:0};return w_(u),u;function h(A){c!==A&&(c=A,v(A))}function f(A){a.forEach(A)}function m(){var A=0,L=0;return f(function(k){A+=Math.abs(k.force.x),L+=Math.abs(k.force.y)}),Math.sqrt(A*A+L*L)}function g(A,L){var k;if(L===void 0)typeof A!="object"?k=A:k=A.id;else{var J=i.hasLink(A,L);if(!J)return;k=J.id}return s[k]}function d(A){return a.get(A)}function p(){i.on("changed",w)}function v(A){u.fire("stable",A)}function w(A){for(var L=0;L<A.length;++L){var k=A[L];k.changeType==="add"?(k.node&&b(k.node.id),k.link&&S(k.link)):k.changeType==="remove"&&(k.node&&y(k.node),k.link&&P(k.link))}o=i.getNodesCount()}function _(){o=0,i.forEachNode(function(A){b(A.id),o+=1}),i.forEachLink(S)}function b(A){var L=a.get(A);if(!L){var k=i.getNode(A);if(!k)throw new Error("initBody() was called with unknown node id");var J=k.position;if(!J){var $=x(k);J=n.getBestNewBodyPosition($)}L=n.addBodyAt(J),L.id=A,a.set(A,L),E(A),I(k)&&(L.isPinned=!0)}}function y(A){var L=A.id,k=a.get(L);k&&(a.delete(L),n.removeBody(k))}function S(A){E(A.fromId),E(A.toId);var L=a.get(A.fromId),k=a.get(A.toId),J=n.addSpring(L,k,A.length);l(A,J),s[A.id]=J}function P(A){var L=s[A.id];if(L){var k=i.getNode(A.fromId),J=i.getNode(A.toId);k&&E(k.id),J&&E(J.id),delete s[A.id],n.removeSpring(L)}}function x(A){var L=[];if(!A.links)return L;for(var k=Math.min(A.links.length,2),J=0;J<k;++J){var $=A.links[J],ee=$.fromId!==A.id?a.get($.fromId):a.get($.toId);ee&&ee.pos&&L.push(ee)}return L}function E(A){var L=a.get(A);if(L.mass=r(A),Number.isNaN(L.mass))throw new Error("Node mass should be a number")}function I(A){return A&&(A.isPinned||A.data&&A.data.isPinned)}function B(A){var L=a.get(A);return L||(b(A),L=a.get(A)),L}function V(A){var L=i.getLinks(A);return L?1+L.length/3:1}function z(A){var L=i.getLinks(A);return L?1+L.size/3:1}}function S_(){}function Eo(i,e,t){var n,r,a,s,o;e==null&&(e=100);function l(){var u=Date.now()-s;u<e&&u>=0?n=setTimeout(l,e-u):(n=null,t||(o=i.apply(a,r),a=r=null))}var c=function(){a=this,r=arguments,s=Date.now();var u=t&&!n;return n||(n=setTimeout(l,e)),u&&(o=i.apply(a,r),a=r=null),o};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(o=i.apply(a,r),a=r=null,clearTimeout(n),n=null)},c}Eo.debounce=Eo;var E_=Eo;function T_(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,s,o=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return o}}function A_(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function $l(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,I_(n.key),n)}}function C_(i,e,t){return e&&$l(i.prototype,e),t&&$l(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function P_(i,e){return L_(i)||T_(i,e)||R_(i,e)||D_()}function L_(i){if(Array.isArray(i))return i}function R_(i,e){if(i){if(typeof i=="string")return ql(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ql(i,e)}}function ql(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function D_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O_(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function I_(i){var e=O_(i,"string");return typeof e=="symbol"?e:String(e)}var N_=C_(function i(e,t){var n=t.default,r=n===void 0?null:n,a=t.triggerUpdate,s=a===void 0?!0:a,o=t.onChange,l=o===void 0?function(c,u){}:o;A_(this,i),this.name=e,this.defaultVal=r,this.triggerUpdate=s,this.onChange=l});function ts(i){var e=i.stateInit,t=e===void 0?function(){return{}}:e,n=i.props,r=n===void 0?{}:n,a=i.methods,s=a===void 0?{}:a,o=i.aliases,l=o===void 0?{}:o,c=i.init,u=c===void 0?function(){}:c,h=i.update,f=h===void 0?function(){}:h,m=Object.keys(r).map(function(g){return new N_(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),p={};function v(b){return w(b,g),_(),v}var w=function(y,S){u.call(v,y,d,S),d.initialised=!0},_=E_(function(){d.initialised&&(f.call(v,d,p),p={})},1);return m.forEach(function(b){v[b.name]=y(b);function y(S){var P=S.name,x=S.triggerUpdate,E=x===void 0?!1:x,I=S.onChange,B=I===void 0?function(A,L){}:I,V=S.defaultVal,z=V===void 0?null:V;return function(A){var L=d[P];if(!arguments.length)return L;var k=A===void 0?z:A;return d[P]=k,B.call(v,k,d,L),!p.hasOwnProperty(P)&&(p[P]=L),E&&_(),v}}}),Object.keys(s).forEach(function(b){v[b]=function(){for(var y,S=arguments.length,P=new Array(S),x=0;x<S;x++)P[x]=arguments[x];return(y=s[b]).call.apply(y,[v,d].concat(P))}}),Object.entries(l).forEach(function(b){var y=P_(b,2),S=y[0],P=y[1];return v[S]=v[P]}),v.resetProps=function(){return m.forEach(function(b){v[b.name](b.defaultVal)}),v},v.resetProps(),d._rerender=_,v}}var ze=function(i){return i instanceof Function?i:typeof i=="string"?function(e){return e[i]}:function(e){return i}};class Xl extends Map{constructor(e,t=k_){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[n,r]of e)this.set(n,r)}get(e){return super.get(Yl(this,e))}has(e){return super.has(Yl(this,e))}set(e,t){return super.set(F_(this,e),t)}delete(e){return super.delete(z_(this,e))}}function Yl({_intern:i,_key:e},t){const n=e(t);return i.has(n)?i.get(n):t}function F_({_intern:i,_key:e},t){const n=e(t);return i.has(n)?i.get(n):(i.set(n,t),t)}function z_({_intern:i,_key:e},t){const n=e(t);return i.has(n)&&(t=i.get(n),i.delete(n)),t}function k_(i){return i!==null&&typeof i=="object"?i.valueOf():i}function B_(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,s,o=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return o}}function U_(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,a;for(a=0;a<n.length;a++)r=n[a],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function G_(i,e){if(i==null)return{};var t=U_(i,e),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function V_(i,e){return j_(i)||B_(i,e)||Tu(i,e)||X_()}function H_(i){return W_(i)||$_(i)||Tu(i)||q_()}function W_(i){if(Array.isArray(i))return To(i)}function j_(i){if(Array.isArray(i))return i}function $_(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Tu(i,e){if(i){if(typeof i=="string")return To(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return To(i,e)}}function To(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function q_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y_(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Z_(i){var e=Y_(i,"string");return typeof e=="symbol"?e:String(e)}var Zl=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(o){return{keyAccessor:o,isProp:!(o instanceof Function)}}),a=i.reduce(function(o,l){var c=o,u=l;return r.forEach(function(h,f){var m=h.keyAccessor,g=h.isProp,d;if(g){var p=u,v=p[m],w=G_(p,[m].map(Z_));d=v,u=w}else d=m(u,f);f+1<r.length?(c.hasOwnProperty(d)||(c[d]={}),c=c[d]):t?(c.hasOwnProperty(d)||(c[d]=[]),c[d].push(u)):c[d]=u}),o},{});t instanceof Function&&function o(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return o(u,c+1)})}(a);var s=a;return n&&(s=[],function o(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?s.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var h=V_(u,2),f=h[0],m=h[1];return o(m,[].concat(H_(c),[f]))})}(a),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function K_(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,s,o=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return o}}function Kl(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function J_(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kl(Object(t),!0).forEach(function(n){Au(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Kl(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Au(i,e,t){return e=sy(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Q_(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,a;for(a=0;a<n.length;a++)r=n[a],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function ey(i,e){if(i==null)return{};var t=Q_(i,e),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function Cu(i,e){return ny(i)||K_(i,e)||Pu(i,e)||ay()}function Qr(i){return ty(i)||iy(i)||Pu(i)||ry()}function ty(i){if(Array.isArray(i))return Ao(i)}function ny(i){if(Array.isArray(i))return i}function iy(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Pu(i,e){if(i){if(typeof i=="string")return Ao(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ao(i,e)}}function Ao(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function ry(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ay(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oy(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function sy(i){var e=oy(i,"string");return typeof e=="symbol"?e:String(e)}var ly=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function cy(i,e,t){var n={enter:[],update:[],exit:[]};if(t){var s=Zl(i,t,!1),o=Zl(e,t,!1),l=Object.assign({},s,o);Object.entries(l).forEach(function(c){var u=Cu(c,2),h=u[0],f=u[1],m=s.hasOwnProperty(h)?o.hasOwnProperty(h)?"update":"exit":"enter";n[m].push(m==="update"?[s[h],o[h]]:f)})}else{var r=new Set(i),a=new Set(e);new Set([].concat(Qr(r),Qr(a))).forEach(function(c){var u=r.has(c)?a.has(c)?"update":"exit":"enter";n[u].push(u==="update"?[c,c]:c)})}return n}function uy(i,e,t){var n=t.objBindAttr,r=n===void 0?"__obj":n,a=t.dataBindAttr,s=a===void 0?"__data":a,o=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(p){return p.hasOwnProperty(s)},h=e.filter(function(d){return!u(d)}),f=e.filter(u).map(function(d){return d[s]}),m=i,g=c?{enter:m,exit:f,update:[]}:cy(f,m,o);return g.update=g.update.map(function(d){var p=Cu(d,2),v=p[0],w=p[1];return v!==w&&(w[r]=v[r],w[r][s]=w),w}),g.exit=g.exit.concat(h.map(function(d){return Au({},r,d)})),g}function hy(i,e,t,n,r){var a=r.createObj,s=a===void 0?function(x){return{}}:a,o=r.updateObj,l=o===void 0?function(x,E){}:o,c=r.exitObj,u=c===void 0?function(x){}:c,h=r.objBindAttr,f=h===void 0?"__obj":h,m=r.dataBindAttr,g=m===void 0?"__data":m,d=ey(r,ly),p=uy(i,e,J_({objBindAttr:f,dataBindAttr:g},d)),v=p.enter,w=p.update,_=p.exit;_.forEach(function(x){var E=x[f];delete x[f],u(E),n(E)});var b=S(v),y=[].concat(Qr(v),Qr(w));P(y),b.forEach(t);function S(x){var E=[];return x.forEach(function(I){var B=s(I);B&&(B[g]=I,I[f]=B,E.push(B))}),E}function P(x){x.forEach(function(E){var I=E[f];I&&(I[g]=E,l(I,E))})}}const Jl=Symbol("implicit");function Lu(){var i=new Xl,e=[],t=[],n=Jl;function r(a){let s=i.get(a);if(s===void 0){if(n!==Jl)return n;i.set(a,s=e.push(a)-1)}return t[s%t.length]}return r.domain=function(a){if(!arguments.length)return e.slice();e=[],i=new Xl;for(const s of a)i.has(s)||i.set(s,e.push(s)-1);return r},r.range=function(a){return arguments.length?(t=Array.from(a),r):t.slice()},r.unknown=function(a){return arguments.length?(n=a,r):n},r.copy=function(){return Lu(e,t).unknown(n)},Zu.apply(r,arguments),r}function fy(i){for(var e=i.length/6|0,t=new Array(e),n=0;n<e;)t[n]="#"+i.slice(n*6,++n*6);return t}const dy=fy("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function ea(i){return ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ea(i)}var py=/^\s+/,my=/\s+$/;function ye(i,e){if(i=i||"",e=e||{},i instanceof ye)return i;if(!(this instanceof ye))return new ye(i,e);var t=gy(i);this._originalInput=i,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}ye.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,n,r,a,s,o;return t=e.r/255,n=e.g/255,r=e.b/255,t<=.03928?a=t/12.92:a=Math.pow((t+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),.2126*a+.7152*s+.0722*o},setAlpha:function(e){return this._a=Ru(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=ec(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=ec(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Ql(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Ql(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return tc(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return xy(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Xe(this._r,255)*100)+"%",g:Math.round(Xe(this._g,255)*100)+"%",b:Math.round(Xe(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Xe(this._r,255)*100)+"%, "+Math.round(Xe(this._g,255)*100)+"%, "+Math.round(Xe(this._b,255)*100)+"%)":"rgba("+Math.round(Xe(this._r,255)*100)+"%, "+Math.round(Xe(this._g,255)*100)+"%, "+Math.round(Xe(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Dy[tc(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+nc(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=ye(e);n="#"+nc(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0,a=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return a?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return ye(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Sy,arguments)},brighten:function(){return this._applyModification(Ey,arguments)},darken:function(){return this._applyModification(Ty,arguments)},desaturate:function(){return this._applyModification(by,arguments)},saturate:function(){return this._applyModification(wy,arguments)},greyscale:function(){return this._applyModification(My,arguments)},spin:function(){return this._applyModification(Ay,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Ly,arguments)},complement:function(){return this._applyCombination(Cy,arguments)},monochromatic:function(){return this._applyCombination(Ry,arguments)},splitcomplement:function(){return this._applyCombination(Py,arguments)},triad:function(){return this._applyCombination(ic,[3])},tetrad:function(){return this._applyCombination(ic,[4])}};ye.fromRatio=function(i,e){if(ea(i)=="object"){var t={};for(var n in i)i.hasOwnProperty(n)&&(n==="a"?t[n]=i[n]:t[n]=tr(i[n]));i=t}return ye(i,e)};function gy(i){var e={r:0,g:0,b:0},t=1,n=null,r=null,a=null,s=!1,o=!1;return typeof i=="string"&&(i=Fy(i)),ea(i)=="object"&&(hn(i.r)&&hn(i.g)&&hn(i.b)?(e=vy(i.r,i.g,i.b),s=!0,o=String(i.r).substr(-1)==="%"?"prgb":"rgb"):hn(i.h)&&hn(i.s)&&hn(i.v)?(n=tr(i.s),r=tr(i.v),e=yy(i.h,n,r),s=!0,o="hsv"):hn(i.h)&&hn(i.s)&&hn(i.l)&&(n=tr(i.s),a=tr(i.l),e=_y(i.h,n,a),s=!0,o="hsl"),i.hasOwnProperty("a")&&(t=i.a)),t=Ru(t),{ok:s,format:i.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function vy(i,e,t){return{r:Xe(i,255)*255,g:Xe(e,255)*255,b:Xe(t,255)*255}}function Ql(i,e,t){i=Xe(i,255),e=Xe(e,255),t=Xe(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),a,s,o=(n+r)/2;if(n==r)a=s=0;else{var l=n-r;switch(s=o>.5?l/(2-n-r):l/(n+r),n){case i:a=(e-t)/l+(e<t?6:0);break;case e:a=(t-i)/l+2;break;case t:a=(i-e)/l+4;break}a/=6}return{h:a,s,l:o}}function _y(i,e,t){var n,r,a;i=Xe(i,360),e=Xe(e,100),t=Xe(t,100);function s(c,u,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?c+(u-c)*6*h:h<1/2?u:h<2/3?c+(u-c)*(2/3-h)*6:c}if(e===0)n=r=a=t;else{var o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;n=s(l,o,i+1/3),r=s(l,o,i),a=s(l,o,i-1/3)}return{r:n*255,g:r*255,b:a*255}}function ec(i,e,t){i=Xe(i,255),e=Xe(e,255),t=Xe(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),a,s,o=n,l=n-r;if(s=n===0?0:l/n,n==r)a=0;else{switch(n){case i:a=(e-t)/l+(e<t?6:0);break;case e:a=(t-i)/l+2;break;case t:a=(i-e)/l+4;break}a/=6}return{h:a,s,v:o}}function yy(i,e,t){i=Xe(i,360)*6,e=Xe(e,100),t=Xe(t,100);var n=Math.floor(i),r=i-n,a=t*(1-e),s=t*(1-r*e),o=t*(1-(1-r)*e),l=n%6,c=[t,s,a,a,o,t][l],u=[o,t,t,s,a,a][l],h=[a,a,o,t,t,s][l];return{r:c*255,g:u*255,b:h*255}}function tc(i,e,t,n){var r=[qt(Math.round(i).toString(16)),qt(Math.round(e).toString(16)),qt(Math.round(t).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function xy(i,e,t,n,r){var a=[qt(Math.round(i).toString(16)),qt(Math.round(e).toString(16)),qt(Math.round(t).toString(16)),qt(Du(n))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function nc(i,e,t,n){var r=[qt(Du(n)),qt(Math.round(i).toString(16)),qt(Math.round(e).toString(16)),qt(Math.round(t).toString(16))];return r.join("")}ye.equals=function(i,e){return!i||!e?!1:ye(i).toRgbString()==ye(e).toRgbString()};ye.random=function(){return ye.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function by(i,e){e=e===0?0:e||10;var t=ye(i).toHsl();return t.s-=e/100,t.s=ua(t.s),ye(t)}function wy(i,e){e=e===0?0:e||10;var t=ye(i).toHsl();return t.s+=e/100,t.s=ua(t.s),ye(t)}function My(i){return ye(i).desaturate(100)}function Sy(i,e){e=e===0?0:e||10;var t=ye(i).toHsl();return t.l+=e/100,t.l=ua(t.l),ye(t)}function Ey(i,e){e=e===0?0:e||10;var t=ye(i).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),ye(t)}function Ty(i,e){e=e===0?0:e||10;var t=ye(i).toHsl();return t.l-=e/100,t.l=ua(t.l),ye(t)}function Ay(i,e){var t=ye(i).toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,ye(t)}function Cy(i){var e=ye(i).toHsl();return e.h=(e.h+180)%360,ye(e)}function ic(i,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=ye(i).toHsl(),n=[ye(i)],r=360/e,a=1;a<e;a++)n.push(ye({h:(t.h+a*r)%360,s:t.s,l:t.l}));return n}function Py(i){var e=ye(i).toHsl(),t=e.h;return[ye(i),ye({h:(t+72)%360,s:e.s,l:e.l}),ye({h:(t+216)%360,s:e.s,l:e.l})]}function Ly(i,e,t){e=e||6,t=t||30;var n=ye(i).toHsl(),r=360/t,a=[ye(i)];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,a.push(ye(n));return a}function Ry(i,e){e=e||6;for(var t=ye(i).toHsv(),n=t.h,r=t.s,a=t.v,s=[],o=1/e;e--;)s.push(ye({h:n,s:r,v:a})),a=(a+o)%1;return s}ye.mix=function(i,e,t){t=t===0?0:t||50;var n=ye(i).toRgb(),r=ye(e).toRgb(),a=t/100,s={r:(r.r-n.r)*a+n.r,g:(r.g-n.g)*a+n.g,b:(r.b-n.b)*a+n.b,a:(r.a-n.a)*a+n.a};return ye(s)};ye.readability=function(i,e){var t=ye(i),n=ye(e);return(Math.max(t.getLuminance(),n.getLuminance())+.05)/(Math.min(t.getLuminance(),n.getLuminance())+.05)};ye.isReadable=function(i,e,t){var n=ye.readability(i,e),r,a;switch(a=!1,r=zy(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7;break}return a};ye.mostReadable=function(i,e,t){var n=null,r=0,a,s,o,l;t=t||{},s=t.includeFallbackColors,o=t.level,l=t.size;for(var c=0;c<e.length;c++)a=ye.readability(i,e[c]),a>r&&(r=a,n=ye(e[c]));return ye.isReadable(i,n,{level:o,size:l})||!s?n:(t.includeFallbackColors=!1,ye.mostReadable(i,["#fff","#000"],t))};var Co=ye.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Dy=ye.hexNames=Oy(Co);function Oy(i){var e={};for(var t in i)i.hasOwnProperty(t)&&(e[i[t]]=t);return e}function Ru(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function Xe(i,e){Iy(i)&&(i="100%");var t=Ny(i);return i=Math.min(e,Math.max(0,parseFloat(i))),t&&(i=parseInt(i*e,10)/100),Math.abs(i-e)<1e-6?1:i%e/parseFloat(e)}function ua(i){return Math.min(1,Math.max(0,i))}function Ot(i){return parseInt(i,16)}function Iy(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1}function Ny(i){return typeof i=="string"&&i.indexOf("%")!=-1}function qt(i){return i.length==1?"0"+i:""+i}function tr(i){return i<=1&&(i=i*100+"%"),i}function Du(i){return Math.round(parseFloat(i)*255).toString(16)}function rc(i){return Ot(i)/255}var Vt=function(){var i="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+i+")",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function hn(i){return!!Vt.CSS_UNIT.exec(i)}function Fy(i){i=i.replace(py,"").replace(my,"").toLowerCase();var e=!1;if(Co[i])i=Co[i],e=!0;else if(i=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Vt.rgb.exec(i))?{r:t[1],g:t[2],b:t[3]}:(t=Vt.rgba.exec(i))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Vt.hsl.exec(i))?{h:t[1],s:t[2],l:t[3]}:(t=Vt.hsla.exec(i))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Vt.hsv.exec(i))?{h:t[1],s:t[2],v:t[3]}:(t=Vt.hsva.exec(i))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Vt.hex8.exec(i))?{r:Ot(t[1]),g:Ot(t[2]),b:Ot(t[3]),a:rc(t[4]),format:e?"name":"hex8"}:(t=Vt.hex6.exec(i))?{r:Ot(t[1]),g:Ot(t[2]),b:Ot(t[3]),format:e?"name":"hex"}:(t=Vt.hex4.exec(i))?{r:Ot(t[1]+""+t[1]),g:Ot(t[2]+""+t[2]),b:Ot(t[3]+""+t[3]),a:rc(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Vt.hex3.exec(i))?{r:Ot(t[1]+""+t[1]),g:Ot(t[2]+""+t[2]),b:Ot(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function zy(i){var e,t;return i=i||{level:"AA",size:"small"},e=(i.level||"AA").toUpperCase(),t=(i.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function ky(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,s,o=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return o}}function ac(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Ou(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ac(Object(t),!0).forEach(function(n){ns(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):ac(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Po(i){return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Po(i)}function By(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function oc(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,zu(n.key),n)}}function Uy(i,e,t){return e&&oc(i.prototype,e),t&&oc(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function ns(i,e,t){return e=zu(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Gy(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&na(i,e)}function ta(i){return ta=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ta(i)}function na(i,e){return na=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},na(i,e)}function Iu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vr(i,e,t){return Iu()?Vr=Reflect.construct.bind():Vr=function(r,a,s){var o=[null];o.push.apply(o,a);var l=Function.bind.apply(r,o),c=new l;return s&&na(c,s.prototype),c},Vr.apply(null,arguments)}function Vy(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,a;for(a=0;a<n.length;a++)r=n[a],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function Hy(i,e){if(i==null)return{};var t=Vy(i,e),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function Nu(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Wy(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Nu(i)}function jy(i){var e=Iu();return function(){var n=ta(i),r;if(e){var a=ta(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Wy(this,r)}}function sc(i,e){return qy(i)||ky(i,e)||Fu(i,e)||Zy()}function Ht(i){return $y(i)||Xy(i)||Fu(i)||Yy()}function $y(i){if(Array.isArray(i))return Lo(i)}function qy(i){if(Array.isArray(i))return i}function Xy(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Fu(i,e){if(i){if(typeof i=="string")return Lo(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Lo(i,e)}}function Lo(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Yy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ky(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function zu(i){var e=Ky(i,"string");return typeof e=="symbol"?e:String(e)}var Jy=function i(e){e instanceof Array?e.forEach(i):(e.map&&e.map.dispose(),e.dispose())},Qy=function i(e){e.geometry&&e.geometry.dispose(),e.material&&Jy(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(i)},Ro=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),Qy(t)}},ex=["objFilter"];function qi(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.objFilter,r=n===void 0?function(){return!0}:n,a=Hy(t,ex);return hy(i,e.children.filter(r),function(s){return e.add(s)},function(s){e.remove(s),Ro(s)},Ou({objBindAttr:"__threeObj"},a))}var Xi=function(e){return isNaN(e)?parseInt(ye(e).toHex(),16):e},ao=function(e){return isNaN(e)?ye(e).getAlpha():1},tx=Lu(dy);function lc(i,e,t){!e||typeof t!="string"||i.filter(function(n){return!n[t]}).forEach(function(n){n[t]=tx(e(n))})}function nx(i,e){var t=i.nodes,n=i.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=r.nodeFilter,s=a===void 0?function(){return!0}:a,o=r.onLoopError,l=o===void 0?function(m){throw"Invalid DAG structure! Found cycle in node path: ".concat(m.join(" -> "),".")}:o,c={};t.forEach(function(m){return c[e(m)]={data:m,out:[],depth:-1,skip:!s(m)}}),n.forEach(function(m){var g=m.source,d=m.target,p=b(g),v=b(d);if(!c.hasOwnProperty(p))throw"Missing source node with id: ".concat(p);if(!c.hasOwnProperty(v))throw"Missing target node with id: ".concat(v);var w=c[p],_=c[v];w.out.push(_);function b(y){return Po(y)==="object"?e(y):y}});var u=[];f(Object.values(c));var h=Object.assign.apply(Object,[{}].concat(Ht(Object.entries(c).filter(function(m){var g=sc(m,2),d=g[1];return!d.skip}).map(function(m){var g=sc(m,2),d=g[0],p=g[1];return ns({},d,p.depth)}))));return h;function f(m){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,p=function(){var y=m[v];if(g.indexOf(y)!==-1){var S=[].concat(Ht(g.slice(g.indexOf(y))),[y]).map(function(P){return e(P.data)});return u.some(function(P){return P.length===S.length&&P.every(function(x,E){return x===S[E]})})||(u.push(S),l(S)),"continue"}d>y.depth&&(y.depth=d,f(y.out,[].concat(Ht(g),[y]),d+(y.skip?0:1)))},v=0,w=m.length;v<w;v++)var _=p()}}var Se=window.THREE?window.THREE:{Group:yi,Mesh:$t,MeshLambertMaterial:b0,Color:ke,BufferGeometry:Tt,BufferAttribute:kt,Matrix4:Ye,Vector3:O,SphereGeometry:la,CylinderGeometry:sa,TubeGeometry:Zo,ConeGeometry:Yo,Line:a0,LineBasicMaterial:$c,QuadraticBezierCurve3:Xo,CubicBezierCurve3:Xc,Box3:Yn},cc={graph:Qu,forcelayout:Xr},ix=2,uc=new Se.BufferGeometry().setAttribute?"setAttribute":"addAttribute",kr=new Se.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",rx=ts({props:{jsonUrl:{onChange:function(e,t){var n=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),n.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var n=t.d3ForceLayout.force("charge");n&&n.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(a,s){a.forEach(function(o){delete o[s],delete o["v".concat(s)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(n){return n.fx=n.fy=n.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,n){return n===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,n),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&n(),r(),a(),this;function n(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var s=ze(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(f){var m=f.__threeObj;if(m){var g=t?f:e.layout.getNodePosition(f[e.nodeId]),d=s(f);(!e.nodePositionUpdate||!e.nodePositionUpdate(d?m.children[0]:m,{x:g.x,y:g.y,z:g.z},f)||d)&&(m.position.x=g.x,m.position.y=g.y||0,m.position.z=g.z||0)}});var o=ze(e.linkWidth),l=ze(e.linkCurvature),c=ze(e.linkCurveRotation),u=ze(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var m=f.__lineObj;if(m){var g=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),d=g[t?"source":"from"],p=g[t?"target":"to"];if(!(!d||!p||!d.hasOwnProperty("x")||!p.hasOwnProperty("x"))){h(f);var v=u(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(v?m.children[1]:m,{start:{x:d.x,y:d.y,z:d.z},end:{x:p.x,y:p.y,z:p.z}},f)&&!v)){var w=30,_=f.__curve,b=m.children.length?m.children[0]:m;if(b.type==="Line"){if(_)b.geometry.setFromPoints(_.getPoints(w));else{var y=b.geometry.getAttribute("position");(!y||!y.array||y.array.length!==6)&&b.geometry[uc]("position",y=new Se.BufferAttribute(new Float32Array(2*3),3)),y.array[0]=d.x,y.array[1]=d.y||0,y.array[2]=d.z||0,y.array[3]=p.x,y.array[4]=p.y||0,y.array[5]=p.z||0,y.needsUpdate=!0}b.geometry.computeBoundingSphere()}else if(b.type==="Mesh")if(_){b.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(b.position.set(0,0,0),b.rotation.set(0,0,0),b.scale.set(1,1,1));var V=Math.ceil(o(f)*10)/10,z=V/2,A=new Se.TubeGeometry(_,w,z,e.linkResolution,!1);b.geometry.dispose(),b.geometry=A}else{if(!b.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var S=Math.ceil(o(f)*10)/10,P=S/2,x=new Se.CylinderGeometry(P,P,1,e.linkResolution,1,!1);x[kr](new Se.Matrix4().makeTranslation(0,1/2,0)),x[kr](new Se.Matrix4().makeRotationX(Math.PI/2)),b.geometry.dispose(),b.geometry=x}var E=new Se.Vector3(d.x,d.y||0,d.z||0),I=new Se.Vector3(p.x,p.y||0,p.z||0),B=E.distanceTo(I);b.position.x=E.x,b.position.y=E.y,b.position.z=E.z,b.scale.z=B,b.parent.localToWorld(I),b.lookAt(I)}}}}});function h(f){var m=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=m[t?"source":"from"],d=m[t?"target":"to"];if(!(!g||!d||!g.hasOwnProperty("x")||!d.hasOwnProperty("x"))){var p=l(f);if(!p)f.__curve=null;else{var v=new Se.Vector3(g.x,g.y||0,g.z||0),w=new Se.Vector3(d.x,d.y||0,d.z||0),_=v.distanceTo(w),b,y=c(f);if(_>0){var S=d.x-g.x,P=d.y-g.y||0,x=new Se.Vector3().subVectors(w,v),E=x.clone().multiplyScalar(p).cross(S!==0||P!==0?new Se.Vector3(0,0,1):new Se.Vector3(0,1,0)).applyAxisAngle(x.normalize(),y).add(new Se.Vector3().addVectors(v,w).divideScalar(2));b=new Se.QuadraticBezierCurve3(v,E,w)}else{var I=p*70,B=-y,V=B+Math.PI/2;b=new Se.CubicBezierCurve3(v,new Se.Vector3(I*Math.cos(V),I*Math.sin(V),0).add(v),new Se.Vector3(I*Math.cos(B),I*Math.sin(B),0).add(v),w)}f.__curve=b}}}}function r(){var s=ze(e.linkDirectionalArrowRelPos),o=ze(e.linkDirectionalArrowLength),l=ze(e.nodeVal);e.graphData.links.forEach(function(c){var u=c.__arrowObj;if(u){var h=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),f=h[t?"source":"from"],m=h[t?"target":"to"];if(!(!f||!m||!f.hasOwnProperty("x")||!m.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,l(f)||1))*e.nodeRelSize,d=Math.cbrt(Math.max(0,l(m)||1))*e.nodeRelSize,p=o(c),v=s(c),w=c.__curve?function(x){return c.__curve.getPoint(x)}:function(x){var E=function(B,V,z,A){return V[B]+(z[B]-V[B])*A||0};return{x:E("x",f,m,x),y:E("y",f,m,x),z:E("z",f,m,x)}},_=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(x){return Math.pow((m[x]||0)-(f[x]||0),2)}).reduce(function(x,E){return x+E},0)),b=g+p+(_-g-d-p)*v,y=w(b/_),S=w((b-p)/_);["x","y","z"].forEach(function(x){return u.position[x]=S[x]});var P=Vr(Se.Vector3,Ht(["x","y","z"].map(function(x){return y[x]})));u.parent.localToWorld(P),u.lookAt(P)}}})}function a(){var s=ze(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(o){var l=o.__photonsObj&&o.__photonsObj.children,c=o.__singleHopPhotonsObj&&o.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!l||!l.length))){var u=t?o:e.layout.getLinkPosition(e.layout.graph.getLink(o.source,o.target).id),h=u[t?"source":"from"],f=u[t?"target":"to"];if(!(!h||!f||!h.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var m=s(o),g=o.__curve?function(p){return o.__curve.getPoint(p)}:function(p){var v=function(_,b,y,S){return b[_]+(y[_]-b[_])*S||0};return{x:v("x",h,f,p),y:v("y",h,f,p),z:v("z",h,f,p)}},d=[].concat(Ht(l||[]),Ht(c||[]));d.forEach(function(p,v){var w=p.parent.__linkThreeObjType==="singleHopPhotons";if(p.hasOwnProperty("__progressRatio")||(p.__progressRatio=w?0:v/l.length),p.__progressRatio+=m,p.__progressRatio>=1)if(!w)p.__progressRatio=p.__progressRatio%1;else{p.parent.remove(p),Ro(p);return}var _=p.__progressRatio,b=g(_);["x","y","z"].forEach(function(y){return p.position[y]=b[y]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var n=new Se.Group;n.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=n,e.graphScene.add(n)}var r=ze(e.linkDirectionalParticleWidth),a=Math.ceil(r(t)*10)/10/2,s=e.linkDirectionalParticleResolution,o=new Se.SphereGeometry(a,s,s),l=ze(e.linkColor),c=ze(e.linkDirectionalParticleColor),u=c(t)||l(t)||"#f0f0f0",h=new Se.Color(Xi(u)),f=e.linkOpacity*3,m=new Se.MeshLambertMaterial({color:h,transparent:!0,opacity:f});t.__singleHopPhotonsObj.add(new Se.Mesh(o,m))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var n=function r(a){var s=[];if(a.geometry){a.geometry.computeBoundingBox();var o=new Se.Box3;o.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),s.push(o)}return s.concat.apply(s,Ht((a.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(r)))}(e.graphScene);return n.length?Object.assign.apply(Object,Ht(["x","y","z"].map(function(r){return ns({},r,[Ku(n,function(a){return a.min[r]}),Ju(n,function(a){return a.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:Vv().force("link",Av()).force("charge",Hv()).force("center",R0()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var n=function(D){return D.some(function(Q){return t.hasOwnProperty(Q)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&n(["nodeAutoColorBy","graphData","nodeColor"])&&lc(e.graphData.nodes,ze(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&n(["linkAutoColorBy","graphData","linkColor"])&&lc(e.graphData.links,ze(e.linkAutoColorBy),e.linkColor),e._flushObjects||n(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=ze(e.nodeThreeObject),a=ze(e.nodeThreeObjectExtend),s=ze(e.nodeVal),o=ze(e.nodeColor),l=ze(e.nodeVisibility),c={},u={};qi(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||n(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(D){return D.__graphObjType==="node"},createObj:function(D){var Q=r(D),N=a(D);Q&&e.nodeThreeObject===Q&&(Q=Q.clone());var W;return Q&&!N?W=Q:(W=new Se.Mesh,W.__graphDefaultObj=!0,Q&&N&&W.add(Q)),W.__graphObjType="node",W},updateObj:function(D,Q){if(D.__graphDefaultObj){var N=s(Q)||1,W=Math.cbrt(N)*e.nodeRelSize,te=e.nodeResolution;(!D.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||D.geometry.parameters.radius!==W||D.geometry.parameters.widthSegments!==te)&&(c.hasOwnProperty(N)||(c[N]=new Se.SphereGeometry(W,te,te)),D.geometry.dispose(),D.geometry=c[N]);var ae=o(Q),he=new Se.Color(Xi(ae||"#ffffaa")),ve=e.nodeOpacity*ao(ae);(D.material.type!=="MeshLambertMaterial"||!D.material.color.equals(he)||D.material.opacity!==ve)&&(u.hasOwnProperty(ae)||(u[ae]=new Se.MeshLambertMaterial({color:he,transparent:!0,opacity:ve})),D.material.dispose(),D.material=u[ae])}}})}if(e._flushObjects||n(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var h=ze(e.linkThreeObject),f=ze(e.linkThreeObjectExtend),m=ze(e.linkMaterial),g=ze(e.linkVisibility),d=ze(e.linkColor),p=ze(e.linkWidth),v={},w={},_={},b=e.graphData.links.filter(g);if(qi(b,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||n(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(D){return D.__graphObjType==="link"},exitObj:function(D){var Q=D.__data&&D.__data.__singleHopPhotonsObj;Q&&(Q.parent.remove(Q),Ro(Q),delete D.__data.__singleHopPhotonsObj)},createObj:function(D){var Q=h(D),N=f(D);Q&&e.linkThreeObject===Q&&(Q=Q.clone());var W;if(!Q||N){var te=!!p(D);if(te)W=new Se.Mesh;else{var ae=new Se.BufferGeometry;ae[uc]("position",new Se.BufferAttribute(new Float32Array(2*3),3)),W=new Se.Line(ae)}}var he;return Q?N?(he=new Se.Group,he.__graphDefaultObj=!0,he.add(W),he.add(Q)):he=Q:(he=W,he.__graphDefaultObj=!0),he.renderOrder=10,he.__graphObjType="link",he},updateObj:function(D,Q){if(D.__graphDefaultObj){var N=D.children.length?D.children[0]:D,W=Math.ceil(p(Q)*10)/10,te=!!W;if(te){var ae=W/2,he=e.linkResolution;if(!N.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||N.geometry.parameters.radiusTop!==ae||N.geometry.parameters.radialSegments!==he){if(!v.hasOwnProperty(W)){var ve=new Se.CylinderGeometry(ae,ae,1,he,1,!1);ve[kr](new Se.Matrix4().makeTranslation(0,1/2,0)),ve[kr](new Se.Matrix4().makeRotationX(Math.PI/2)),v[W]=ve}N.geometry.dispose(),N.geometry=v[W]}}var Te=m(Q);if(Te)N.material=Te;else{var Ne=d(Q),Ze=new Se.Color(Xi(Ne||"#f0f0f0")),Ve=e.linkOpacity*ao(Ne),Be=te?"MeshLambertMaterial":"LineBasicMaterial";if(N.material.type!==Be||!N.material.color.equals(Ze)||N.material.opacity!==Ve){var Ue=te?w:_;Ue.hasOwnProperty(Ne)||(Ue[Ne]=new Se[Be]({color:Ze,transparent:Ve<1,opacity:Ve,depthWrite:Ve>=1})),N.material.dispose(),N.material=Ue[Ne]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var y=ze(e.linkDirectionalArrowLength),S=ze(e.linkDirectionalArrowColor);qi(b.filter(y),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(D){return D.__linkThreeObjType==="arrow"},createObj:function(){var D=new Se.Mesh(void 0,new Se.MeshLambertMaterial({transparent:!0}));return D.__linkThreeObjType="arrow",D},updateObj:function(D,Q){var N=y(Q),W=e.linkDirectionalArrowResolution;if(!D.geometry.type.match(/^Cone(Buffer)?Geometry$/)||D.geometry.parameters.height!==N||D.geometry.parameters.radialSegments!==W){var te=new Se.ConeGeometry(N*.25,N,W);te.translate(0,N/2,0),te.rotateX(Math.PI/2),D.geometry.dispose(),D.geometry=te}var ae=S(Q)||d(Q)||"#f0f0f0";D.material.color=new Se.Color(Xi(ae)),D.material.opacity=e.linkOpacity*3*ao(ae)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var P=ze(e.linkDirectionalParticles),x=ze(e.linkDirectionalParticleWidth),E=ze(e.linkDirectionalParticleColor),I={},B={};qi(b.filter(P),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(D){return D.__linkThreeObjType==="photons"},createObj:function(){var D=new Se.Group;return D.__linkThreeObjType="photons",D},updateObj:function(D,Q){var N=Math.round(Math.abs(P(Q))),W=!!D.children.length&&D.children[0],te=Math.ceil(x(Q)*10)/10/2,ae=e.linkDirectionalParticleResolution,he;W&&W.geometry.parameters.radius===te&&W.geometry.parameters.widthSegments===ae?he=W.geometry:(B.hasOwnProperty(te)||(B[te]=new Se.SphereGeometry(te,ae,ae)),he=B[te],W&&W.geometry.dispose());var ve=E(Q)||d(Q)||"#f0f0f0",Te=new Se.Color(Xi(ve)),Ne=e.linkOpacity*3,Ze;W&&W.material.color.equals(Te)&&W.material.opacity===Ne?Ze=W.material:(I.hasOwnProperty(ve)||(I[ve]=new Se.MeshLambertMaterial({color:Te,transparent:!0,opacity:Ne})),Ze=I[ve],W&&W.material.dispose()),qi(Ht(new Array(N)).map(function(Ve,Be){return{idx:Be}}),D,{idAccessor:function(Be){return Be.idx},createObj:function(){return new Se.Mesh(he,Ze)},updateObj:function(Be){Be.geometry=he,Be.material=Ze}})}})}}if(e._flushObjects=!1,n(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(X){X.source=X[e.linkSource],X.target=X[e.linkTarget]});var V=e.forceEngine!=="ngraph",z;if(V){(z=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var A=e.d3ForceLayout.force("link");A&&A.id(function(X){return X[e.nodeId]}).links(e.graphData.links);var L=e.dagMode&&nx(e.graphData,function(X){return X[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),k=Math.max.apply(Math,Ht(Object.values(L||[]))),J=e.dagLevelDistance||e.graphData.nodes.length/(k||1)*ix*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var $=function(D,Q){return function(N){return D?(L[N[e.nodeId]]-k/2)*J*(Q?-1:1):void 0}},ee=$(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),ie=$(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),me=$(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(X){X.fx=ee(X),X.fy=ie(X),X.fz=me(X)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?Wv(function(X){var D=L[X[e.nodeId]]||-1;return(e.dagMode==="radialin"?k-D:D)*J}).strength(function(X){return e.dagNodeFilter(X)?1:0}):null)}else{var j=cc.graph();e.graphData.nodes.forEach(function(X){j.addNode(X[e.nodeId])}),e.graphData.links.forEach(function(X){j.addLink(X.source,X.target)}),z=cc.forcelayout(j,Ou({dimensions:e.numDimensions},e.ngraphPhysics)),z.graph=j}for(var ne=0;ne<e.warmupTicks&&!(V&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);ne++)z[V?"tick":"step"]();e.layout=z,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function ax(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=function(r){Gy(s,r);var a=jy(s);function s(){var o;By(this,s);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return o=a.call.apply(a,[this].concat(c)),o.__kapsuleInstance=i().apply(void 0,[].concat(Ht(t?[Nu(o)]:[]),c)),o}return Uy(s)}(e);return Object.keys(i()).forEach(function(r){return n.prototype[r]=function(){var a,s=(a=this.__kapsuleInstance)[r].apply(a,arguments);return s===this.__kapsuleInstance?this:s}}),n}var ox=window.THREE?window.THREE:{Group:yi},ku=ax(rx,ox.Group,!0);const oo={type:"change"},so={type:"start"},lo={type:"end"};class sx extends Yt{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:en.ROTATE,MIDDLE:en.DOLLY,RIGHT:en.PAN},this.target=new O;const a=1e-6,s=new O;let o=1,l=r.NONE,c=r.NONE,u=0,h=0,f=0;const m=new O,g=new le,d=new le,p=new O,v=new le,w=new le,_=new le,b=new le,y=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const N=n.domElement.getBoundingClientRect(),W=n.domElement.ownerDocument.documentElement;n.screen.left=N.left+window.pageXOffset-W.clientLeft,n.screen.top=N.top+window.pageYOffset-W.clientTop,n.screen.width=N.width,n.screen.height=N.height};const P=function(){const N=new le;return function(te,ae){return N.set((te-n.screen.left)/n.screen.width,(ae-n.screen.top)/n.screen.height),N}}(),x=function(){const N=new le;return function(te,ae){return N.set((te-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-ae))/n.screen.width),N}}();this.rotateCamera=function(){const N=new O,W=new Xt,te=new O,ae=new O,he=new O,ve=new O;return function(){ve.set(d.x-g.x,d.y-g.y,0);let Ne=ve.length();Ne?(m.copy(n.object.position).sub(n.target),te.copy(m).normalize(),ae.copy(n.object.up).normalize(),he.crossVectors(ae,te).normalize(),ae.setLength(d.y-g.y),he.setLength(d.x-g.x),ve.copy(ae.add(he)),N.crossVectors(ve,m).normalize(),Ne*=n.rotateSpeed,W.setFromAxisAngle(N,Ne),m.applyQuaternion(W),n.object.up.applyQuaternion(W),p.copy(N),f=Ne):!n.staticMoving&&f&&(f*=Math.sqrt(1-n.dynamicDampingFactor),m.copy(n.object.position).sub(n.target),W.setFromAxisAngle(p,f),m.applyQuaternion(W),n.object.up.applyQuaternion(W)),g.copy(d)}}(),this.zoomCamera=function(){let N;l===r.TOUCH_ZOOM_PAN?(N=u/h,u=h,n.object.isPerspectiveCamera?m.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom/=N,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(N=1+(w.y-v.y)*n.zoomSpeed,N!==1&&N>0&&(n.object.isPerspectiveCamera?m.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom/=N,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?v.copy(w):v.y+=(w.y-v.y)*this.dynamicDampingFactor)},this.panCamera=function(){const N=new le,W=new O,te=new O;return function(){if(N.copy(b).sub(_),N.lengthSq()){if(n.object.isOrthographicCamera){const he=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,ve=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;N.x*=he,N.y*=ve}N.multiplyScalar(m.length()*n.panSpeed),te.copy(m).cross(n.object.up).setLength(N.x),te.add(W.copy(n.object.up).setLength(N.y)),n.object.position.add(te),n.target.add(te),n.staticMoving?_.copy(b):_.add(N.subVectors(b,_).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(m.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,m.setLength(n.maxDistance)),v.copy(w)),m.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,m.setLength(n.minDistance)),v.copy(w)))},this.update=function(){m.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,m),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),s.distanceToSquared(n.object.position)>a&&(n.dispatchEvent(oo),s.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(s.distanceToSquared(n.object.position)>a||o!==n.object.zoom)&&(n.dispatchEvent(oo),s.copy(n.object.position),o=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),m.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(oo),s.copy(n.object.position),o=n.object.zoom};function E(N){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",I),n.domElement.addEventListener("pointerup",B)),ne(N),N.pointerType==="touch"?ee(N):L(N))}function I(N){n.enabled!==!1&&(N.pointerType==="touch"?ie(N):k(N))}function B(N){n.enabled!==!1&&(N.pointerType==="touch"?me(N):J(),X(N),y.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",B)))}function V(N){X(N)}function z(N){n.enabled!==!1&&(window.removeEventListener("keydown",z),c===r.NONE&&(N.code===n.keys[r.ROTATE]&&!n.noRotate?c=r.ROTATE:N.code===n.keys[r.ZOOM]&&!n.noZoom?c=r.ZOOM:N.code===n.keys[r.PAN]&&!n.noPan&&(c=r.PAN)))}function A(){n.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",z))}function L(N){if(l===r.NONE)switch(N.button){case n.mouseButtons.LEFT:l=r.ROTATE;break;case n.mouseButtons.MIDDLE:l=r.ZOOM;break;case n.mouseButtons.RIGHT:l=r.PAN;break}const W=c!==r.NONE?c:l;W===r.ROTATE&&!n.noRotate?(d.copy(x(N.pageX,N.pageY)),g.copy(d)):W===r.ZOOM&&!n.noZoom?(v.copy(P(N.pageX,N.pageY)),w.copy(v)):W===r.PAN&&!n.noPan&&(_.copy(P(N.pageX,N.pageY)),b.copy(_)),n.dispatchEvent(so)}function k(N){const W=c!==r.NONE?c:l;W===r.ROTATE&&!n.noRotate?(g.copy(d),d.copy(x(N.pageX,N.pageY))):W===r.ZOOM&&!n.noZoom?w.copy(P(N.pageX,N.pageY)):W===r.PAN&&!n.noPan&&b.copy(P(N.pageX,N.pageY))}function J(){l=r.NONE,n.dispatchEvent(lo)}function $(N){if(n.enabled!==!1&&n.noZoom!==!0){switch(N.preventDefault(),N.deltaMode){case 2:v.y-=N.deltaY*.025;break;case 1:v.y-=N.deltaY*.01;break;default:v.y-=N.deltaY*25e-5;break}n.dispatchEvent(so),n.dispatchEvent(lo)}}function ee(N){switch(D(N),y.length){case 1:l=r.TOUCH_ROTATE,d.copy(x(y[0].pageX,y[0].pageY)),g.copy(d);break;default:l=r.TOUCH_ZOOM_PAN;const W=y[0].pageX-y[1].pageX,te=y[0].pageY-y[1].pageY;h=u=Math.sqrt(W*W+te*te);const ae=(y[0].pageX+y[1].pageX)/2,he=(y[0].pageY+y[1].pageY)/2;_.copy(P(ae,he)),b.copy(_);break}n.dispatchEvent(so)}function ie(N){switch(D(N),y.length){case 1:g.copy(d),d.copy(x(N.pageX,N.pageY));break;default:const W=Q(N),te=N.pageX-W.x,ae=N.pageY-W.y;h=Math.sqrt(te*te+ae*ae);const he=(N.pageX+W.x)/2,ve=(N.pageY+W.y)/2;b.copy(P(he,ve));break}}function me(N){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,d.copy(x(N.pageX,N.pageY)),g.copy(d);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let W=0;W<y.length;W++)if(y[W].pointerId!==N.pointerId){const te=S[y[W].pointerId];d.copy(x(te.x,te.y)),g.copy(d);break}break}n.dispatchEvent(lo)}function j(N){n.enabled!==!1&&N.preventDefault()}function ne(N){y.push(N)}function X(N){delete S[N.pointerId];for(let W=0;W<y.length;W++)if(y[W].pointerId==N.pointerId){y.splice(W,1);return}}function D(N){let W=S[N.pointerId];W===void 0&&(W=new le,S[N.pointerId]=W),W.set(N.pageX,N.pageY)}function Q(N){const W=N.pointerId===y[0].pointerId?y[1]:y[0];return S[W.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",B),window.removeEventListener("keydown",z),window.removeEventListener("keyup",A)},this.domElement.addEventListener("contextmenu",j),this.domElement.addEventListener("pointerdown",E),this.domElement.addEventListener("pointercancel",V),this.domElement.addEventListener("wheel",$,{passive:!1}),window.addEventListener("keydown",z),window.addEventListener("keyup",A),this.handleResize(),this.update()}}const hc={type:"change"},co={type:"start"},fc={type:"end"};class lx extends Yt{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:en.ROTATE,MIDDLE:en.DOLLY,RIGHT:en.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",pt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hc),n.update(),a=r.NONE},this.update=function(){const R=new O,U=new Xt().setFromUnitVectors(e.up,new O(0,1,0)),de=U.clone().invert(),ue=new O,_e=new Xt,be=2*Math.PI;return function(){const Le=n.object.position;R.copy(Le).sub(n.target),R.applyQuaternion(U),o.setFromVector3(R),n.autoRotate&&a===r.NONE&&E(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ie=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(Ie)&&isFinite(Ge)&&(Ie<-Math.PI?Ie+=be:Ie>Math.PI&&(Ie-=be),Ge<-Math.PI?Ge+=be:Ge>Math.PI&&(Ge-=be),Ie<=Ge?o.theta=Math.max(Ie,Math.min(Ge,o.theta)):o.theta=o.theta>(Ie+Ge)/2?Math.max(Ie,o.theta):Math.min(Ge,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(de),Le.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ue.distanceToSquared(n.object.position)>s||8*(1-_e.dot(n.object.quaternion))>s?(n.dispatchEvent(hc),ue.copy(n.object.position),_e.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y),n.domElement.removeEventListener("pointerdown",Ne),n.domElement.removeEventListener("pointercancel",Be),n.domElement.removeEventListener("wheel",Ct),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new wo,l=new wo;let c=1;const u=new O;let h=!1;const f=new le,m=new le,g=new le,d=new le,p=new le,v=new le,w=new le,_=new le,b=new le,y=[],S={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(R){l.theta-=R}function I(R){l.phi-=R}const B=function(){const R=new O;return function(de,ue){R.setFromMatrixColumn(ue,0),R.multiplyScalar(-de),u.add(R)}}(),V=function(){const R=new O;return function(de,ue){n.screenSpacePanning===!0?R.setFromMatrixColumn(ue,1):(R.setFromMatrixColumn(ue,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(de),u.add(R)}}(),z=function(){const R=new O;return function(de,ue){const _e=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;R.copy(be).sub(n.target);let xe=R.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*de*xe/_e.clientHeight,n.object.matrix),V(2*ue*xe/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(de*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),V(ue*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function A(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(R){f.set(R.clientX,R.clientY)}function J(R){w.set(R.clientX,R.clientY)}function $(R){d.set(R.clientX,R.clientY)}function ee(R){m.set(R.clientX,R.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;E(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),f.copy(m),n.update()}function ie(R){_.set(R.clientX,R.clientY),b.subVectors(_,w),b.y>0?A(x()):b.y<0&&L(x()),w.copy(_),n.update()}function me(R){p.set(R.clientX,R.clientY),v.subVectors(p,d).multiplyScalar(n.panSpeed),z(v.x,v.y),d.copy(p),n.update()}function j(R){R.deltaY<0?L(x()):R.deltaY>0&&A(x()),n.update()}function ne(R){let U=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),U=!0;break}U&&(R.preventDefault(),n.update())}function X(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),U=.5*(y[0].pageY+y[1].pageY);f.set(R,U)}}function D(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),U=.5*(y[0].pageY+y[1].pageY);d.set(R,U)}}function Q(){const R=y[0].pageX-y[1].pageX,U=y[0].pageY-y[1].pageY,de=Math.sqrt(R*R+U*U);w.set(0,de)}function N(){n.enableZoom&&Q(),n.enablePan&&D()}function W(){n.enableZoom&&Q(),n.enableRotate&&X()}function te(R){if(y.length==1)m.set(R.pageX,R.pageY);else{const de=we(R),ue=.5*(R.pageX+de.x),_e=.5*(R.pageY+de.y);m.set(ue,_e)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;E(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),f.copy(m)}function ae(R){if(y.length===1)p.set(R.pageX,R.pageY);else{const U=we(R),de=.5*(R.pageX+U.x),ue=.5*(R.pageY+U.y);p.set(de,ue)}v.subVectors(p,d).multiplyScalar(n.panSpeed),z(v.x,v.y),d.copy(p)}function he(R){const U=we(R),de=R.pageX-U.x,ue=R.pageY-U.y,_e=Math.sqrt(de*de+ue*ue);_.set(0,_e),b.set(0,Math.pow(_.y/w.y,n.zoomSpeed)),A(b.y),w.copy(_)}function ve(R){n.enableZoom&&he(R),n.enablePan&&ae(R)}function Te(R){n.enableZoom&&he(R),n.enableRotate&&te(R)}function Ne(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Ze),n.domElement.addEventListener("pointerup",Ve)),oe(R),R.pointerType==="touch"?C(R):Ue(R))}function Ze(R){n.enabled!==!1&&(R.pointerType==="touch"?M(R):je(R))}function Ve(R){se(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Ze),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(fc),a=r.NONE}function Be(R){se(R)}function Ue(R){let U;switch(R.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case en.DOLLY:if(n.enableZoom===!1)return;J(R),a=r.DOLLY;break;case en.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;$(R),a=r.PAN}else{if(n.enableRotate===!1)return;k(R),a=r.ROTATE}break;case en.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;k(R),a=r.ROTATE}else{if(n.enablePan===!1)return;$(R),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(co)}function je(R){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;ee(R);break;case r.DOLLY:if(n.enableZoom===!1)return;ie(R);break;case r.PAN:if(n.enablePan===!1)return;me(R);break}}function Ct(R){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(R.preventDefault(),n.dispatchEvent(co),j(R),n.dispatchEvent(fc))}function pt(R){n.enabled===!1||n.enablePan===!1||ne(R)}function C(R){switch(fe(R),y.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;X(),a=r.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;D(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(),a=r.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(co)}function M(R){switch(fe(R),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;te(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ae(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(R),n.update();break;default:a=r.NONE}}function Y(R){n.enabled!==!1&&R.preventDefault()}function oe(R){y.push(R)}function se(R){delete S[R.pointerId];for(let U=0;U<y.length;U++)if(y[U].pointerId==R.pointerId){y.splice(U,1);return}}function fe(R){let U=S[R.pointerId];U===void 0&&(U=new le,S[R.pointerId]=U),U.set(R.pageX,R.pageY)}function we(R){const U=R.pointerId===y[0].pointerId?y[1]:y[0];return S[U.pointerId]}n.domElement.addEventListener("contextmenu",Y),n.domElement.addEventListener("pointerdown",Ne),n.domElement.addEventListener("pointercancel",Be),n.domElement.addEventListener("wheel",Ct,{passive:!1}),this.update()}}const cx={type:"change"};class ux extends Yt{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const n=this,r=1e-6,a=new Xt,s=new O;this.tmpQuaternion=new Xt,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(f){if(!f.altKey){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(f){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(f){if(this.dragToLook)this.status++;else{switch(f.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(f){if(!this.dragToLook||this.status>0){const m=this.getContainerDimensions(),g=m.size[0]/2,d=m.size[1]/2;this.moveState.yawLeft=-(f.pageX-m.offset[0]-g)/g,this.moveState.pitchDown=(f.pageY-m.offset[1]-d)/d,this.updateRotationVector()}},this.pointerup=function(f){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(f.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(f){const m=f*n.movementSpeed,g=f*n.rollSpeed;n.object.translateX(n.moveVector.x*m),n.object.translateY(n.moveVector.y*m),n.object.translateZ(n.moveVector.z*m),n.tmpQuaternion.set(n.rotationVector.x*g,n.rotationVector.y*g,n.rotationVector.z*g,1).normalize(),n.object.quaternion.multiply(n.tmpQuaternion),(s.distanceToSquared(n.object.position)>r||8*(1-a.dot(n.object.quaternion))>r)&&(n.dispatchEvent(cx),a.copy(n.object.quaternion),s.copy(n.object.position))},this.updateMovementVector=function(){const f=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-f+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",dc),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",o),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)};const o=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),h=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",dc),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",o),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",h),this.updateMovementVector(),this.updateRotationVector()}}function dc(i){i.preventDefault()}const hx={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ha{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fx=new Wo(-1,1,1,-1,0,1),is=new Tt;is.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3));is.setAttribute("uv",new nt([0,2,0,0,2,0],2));class dx{constructor(e){this._mesh=new $t(is,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class px extends ha{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zc.clone(e.uniforms),this.material=new vn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dx(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pc extends ha{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class mx extends ha{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gx{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new le);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new px(hx),this.clock=new Kc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pc!==void 0&&(s instanceof pc?n=!0:s instanceof mx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vx extends ha{constructor(e,t,n,r,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=r}}function Do(){return Do=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Do.apply(this,arguments)}function _x(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function hr(i,e){return hr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},hr(i,e)}function yx(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,hr(i,e)}function Oo(i){return Oo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Oo(i)}function xx(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function bx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hr(i,e,t){return bx()?Hr=Reflect.construct.bind():Hr=function(r,a,s){var o=[null];o.push.apply(o,a);var l=Function.bind.apply(r,o),c=new l;return s&&hr(c,s.prototype),c},Hr.apply(null,arguments)}function Io(i){var e=typeof Map=="function"?new Map:void 0;return Io=function(n){if(n===null||!xx(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return Hr(n,arguments,Oo(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),hr(r,n)},Io(i)}var bi=function(i){yx(e,i);function e(t){var n;return n=i.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,_x(n)}return e}(Io(Error));function uo(i){return Math.round(i*255)}function wx(i,e,t){return uo(i)+","+uo(e)+","+uo(t)}function mc(i,e,t,n){if(n===void 0&&(n=wx),e===0)return n(t,t,t);var r=(i%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,s=a*(1-Math.abs(r%2-1)),o=0,l=0,c=0;r>=0&&r<1?(o=a,l=s):r>=1&&r<2?(o=s,l=a):r>=2&&r<3?(l=a,c=s):r>=3&&r<4?(l=s,c=a):r>=4&&r<5?(o=s,c=a):r>=5&&r<6&&(o=a,c=s);var u=t-a/2,h=o+u,f=l+u,m=c+u;return n(h,f,m)}var gc={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Mx(i){if(typeof i!="string")return i;var e=i.toLowerCase();return gc[e]?"#"+gc[e]:i}var Sx=/^#[a-fA-F0-9]{6}$/,Ex=/^#[a-fA-F0-9]{8}$/,Tx=/^#[a-fA-F0-9]{3}$/,Ax=/^#[a-fA-F0-9]{4}$/,ho=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Cx=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Px=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Lx=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function rs(i){if(typeof i!="string")throw new bi(3);var e=Mx(i);if(e.match(Sx))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(Ex)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(Tx))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(Ax)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var r=ho.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var a=Cx.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var s=Px.exec(e);if(s){var o=parseInt(""+s[1],10),l=parseInt(""+s[2],10)/100,c=parseInt(""+s[3],10)/100,u="rgb("+mc(o,l,c)+")",h=ho.exec(u);if(!h)throw new bi(4,e,u);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var f=Lx.exec(e.substring(0,50));if(f){var m=parseInt(""+f[1],10),g=parseInt(""+f[2],10)/100,d=parseInt(""+f[3],10)/100,p="rgb("+mc(m,g,d)+")",v=ho.exec(p);if(!v)throw new bi(4,e,p);return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new bi(5)}var Rx=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},vc=Rx;function gi(i){var e=i.toString(16);return e.length===1?"0"+e:e}function _c(i,e,t){if(typeof i=="number"&&typeof e=="number"&&typeof t=="number")return vc("#"+gi(i)+gi(e)+gi(t));if(typeof i=="object"&&e===void 0&&t===void 0)return vc("#"+gi(i.red)+gi(i.green)+gi(i.blue));throw new bi(6)}function Dx(i,e,t,n){if(typeof i=="string"&&typeof e=="number"){var r=rs(i);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof i=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?_c(i,e,t):"rgba("+i+","+e+","+t+","+n+")";if(typeof i=="object"&&e===void 0&&t===void 0&&n===void 0)return i.alpha>=1?_c(i.red,i.green,i.blue):"rgba("+i.red+","+i.green+","+i.blue+","+i.alpha+")"}throw new bi(7)}function Bu(i,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?i.apply(this,r):Bu(i,e,r)}}function Ox(i){return Bu(i,i.length,[])}function Ix(i,e,t){return Math.max(i,Math.min(e,t))}function Nx(i,e){if(e==="transparent")return e;var t=rs(e),n=typeof t.alpha=="number"?t.alpha:1,r=Do({},t,{alpha:Ix(0,1,(n*100+parseFloat(i)*100)/100)});return Dx(r)}var Fx=Ox(Nx),zx=Fx,ar={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-ar.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?ar.Bounce.In(i*2)*.5:ar.Bounce.Out(i*2-1)*.5+.5}}},nr;typeof self>"u"&&typeof process<"u"&&process.hrtime?nr=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?nr=self.performance.now.bind(self.performance):Date.now!==void 0?nr=Date.now:nr=function(){return new Date().getTime()};var Vn=nr,Uu=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=Vn()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var a=this._tweens[n[r]],s=!t;a&&a.update(e,s)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),wi={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),a=wi.Utils.Linear;return e<0?a(i[0],i[1],n):e>1?a(i[t],i[t-1],t-n):a(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,a=wi.Utils.Bernstein,s=0;s<=n;s++)t+=r(1-e,n-s)*r(e,s)*i[s]*a(n,s);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),a=wi.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),a(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(a(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(a(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):a(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=wi.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var a=(t-i)*.5,s=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*t+a+s)*l+(-3*e+3*t-2*a-s)*o+a*r+e}}},as=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Gu=new Uu,kx=function(){function i(e,t){t===void 0&&(t=Gu),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ar.Linear.None,this._interpolationFunction=wi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=as.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Vn()+parseFloat(e):e:Vn(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,r){for(var a in n){var s=e[a],o=Array.isArray(s),l=o?"array":typeof s,c=!o&&Array.isArray(n[a]);if(!(l==="undefined"||l==="function")){if(c){var u=n[a];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,s)),n[a]=[s].concat(u)}if((l==="object"||o)&&s&&!c){t[a]=o?[]:{};for(var h in s)t[a][h]=s[h];r[a]=o?[]:{},this._setupProperties(s,t[a],n[a],r[a])}else typeof t[a]>"u"&&(t[a]=s),o||(t[a]*=1),c?r[a]=n[a].slice().reverse():r[a]=t[a]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=Vn()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=Vn()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=Vn()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var s=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var a in n)if(t[a]!==void 0){var s=t[a]||0,o=n[a],l=Array.isArray(e[a]),c=Array.isArray(o),u=!l&&c;u?e[a]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[a],s,o,r):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(e[a]=s+(o-s)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),Bx="18.6.4",Ux=as.nextId,rn=Gu,Gx=rn.getAll.bind(rn),Vx=rn.removeAll.bind(rn),Hx=rn.add.bind(rn),Wx=rn.remove.bind(rn),jx=rn.update.bind(rn),Yi={Easing:ar,Group:Uu,Interpolation:wi,now:Vn,Sequence:as,nextId:Ux,Tween:kx,VERSION:Bx,getAll:Gx,removeAll:Vx,add:Hx,remove:Wx,update:jx};function $x(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var qx=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
}

.scene-container canvas:focus {
  outline: none;
}`;$x(qx);function Xx(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,s,o=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(o.push(n.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw r}}return o}}function Yx(i,e,t){return e=ib(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Zx(i,e){return Jx(i)||Xx(i,e)||Vu(i,e)||tb()}function Zi(i){return Kx(i)||Qx(i)||Vu(i)||eb()}function Kx(i){if(Array.isArray(i))return No(i)}function Jx(i){if(Array.isArray(i))return i}function Qx(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Vu(i,e){if(i){if(typeof i=="string")return No(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return No(i,e)}}function No(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function eb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nb(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function ib(i){var e=nb(i,"string");return typeof e=="symbol"?e:String(e)}var Ke=window.THREE?window.THREE:{WebGLRenderer:$o,Scene:n0,PerspectiveCamera:zt,Raycaster:Jc,TextureLoader:E0,Vector2:le,Vector3:O,Box3:Yn,Color:ke,Mesh:$t,SphereGeometry:la,MeshBasicMaterial:Go,BackSide:St,EventDispatcher:Yt,MOUSE:en,Quaternion:Xt,Spherical:wo,Clock:Kc},Hu=ts({props:{width:{default:window.innerWidth,onChange:function(e,t,n){isNaN(e)&&(t.width=n)}},height:{default:window.innerHeight,onChange:function(e,t,n){isNaN(e)&&(t.height=n)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(a){return a.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var n=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(a){return e.hoverFilter(a.object)}).sort(function(a,s){return e.hoverOrderComparator(a.object,s.object)}),r=n.length?n[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&ze(e.tooltipContent)(t)||"",e.hoverObj=t)}Yi.update()}return this},getPointerPos:function(e){var t=e.pointerPos,n=t.x,r=t.y;return{x:n,y:r}},cameraPosition:function(e,t,n,r){var a=e.camera;if(t&&e.initialised){var s=t,o=n||{x:0,y:0,z:0};if(!r)u(s),h(o);else{var l=Object.assign({},a.position),c=f();new Yi.Tween(l).to(s,r).easing(Yi.Easing.Quadratic.Out).onUpdate(u).start(),new Yi.Tween(c).to(o,r/3).easing(Yi.Easing.Quadratic.Out).onUpdate(h).start()}return this}return Object.assign({},a.position,{lookAt:f()});function u(m){var g=m.x,d=m.y,p=m.z;g!==void 0&&(a.position.x=g),d!==void 0&&(a.position.y=d),p!==void 0&&(a.position.z=p)}function h(m){var g=new Ke.Vector3(m.x,m.y,m.z);e.controls.target?e.controls.target=g:a.lookAt(g)}function f(){return Object.assign(new Ke.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,a=new Array(r>3?r-3:0),s=3;s<r;s++)a[s-3]=arguments[s];return this.fitToBbox(this.getBbox.apply(this,a),t,n)},fitToBbox:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=e.camera;if(t){var s=new Ke.Vector3(0,0,0),o=Math.max.apply(Math,Zi(Object.entries(t).map(function(m){var g=Zx(m,2),d=g[0],p=g[1];return Math.max.apply(Math,Zi(p.map(function(v){return Math.abs(s[d]-v)})))})))*2,l=(1-r*2/e.height)*a.fov,c=o/Math.atan(l*Math.PI/180),u=c/a.aspect,h=Math.max(c,u);if(h>0){var f=s.clone().sub(a.position).normalize().multiplyScalar(-h);this.cameraPosition(f,s,n)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},n=new Ke.Box3(new Ke.Vector3(0,0,0),new Ke.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(a){return n.expandByObject(a)}),Object.assign.apply(Object,Zi(["x","y","z"].map(function(a){return Yx({},a,[n.min[a],n.max[a]])})))):null},getScreenCoords:function(e,t,n,r){var a=new Ke.Vector3(t,n,r);return a.project(this.camera()),{x:(a.x+1)*e.width/2,y:-(a.y-1)*e.height/2}},getSceneCoords:function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new Ke.Vector2(t/e.width*2-1,-(n/e.height)*2+1),s=new Ke.Raycaster;return s.setFromCamera(a,e.camera),Object.assign({},s.ray.at(r,new Ke.Vector3))},intersectingObjects:function(e,t,n){var r=new Ke.Vector2(t/e.width*2-1,-(n/e.height)*2+1),a=new Ke.Raycaster;return a.params.Line.threshold=e.lineHoverPrecision,a.setFromCamera(r,e.camera),a.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new Ke.Scene,camera:new Ke.PerspectiveCamera,clock:new Ke.Clock}},init:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.controlType,a=r===void 0?"trackball":r,s=n.rendererConfig,o=s===void 0?{}:s,l=n.extraRenderers,c=l===void 0?[]:l,u=n.waitForLoadComplete,h=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new Ke.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(f){return t.container.addEventListener(f,function(m){if(f==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&m.type==="pointermove"&&(m.pressure>0||t.isPointerPressed)&&(m.pointerType!=="touch"||m.movementX===void 0||[m.movementX,m.movementY].some(function(p){return Math.abs(p)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=d(t.container);t.pointerPos.x=m.pageX-g.left,t.pointerPos.y=m.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function d(p){var v=p.getBoundingClientRect(),w=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:v.top+_,left:v.left+w}}},{passive:!0})}),t.container.addEventListener("pointerup",function(f){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){f.button===0&&t.onClick(t.hoverObj||null,f,t.intersectionPoint),f.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,f,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(f){t.onRightClick&&f.preventDefault()}),t.renderer=new Ke.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},o)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(f){f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.pointerEvents="none",t.container.appendChild(f.domElement)}),t.postProcessingComposer=new gx(t.renderer),t.postProcessingComposer.addPass(new vx(t.scene,t.camera)),t.controls=new{trackball:sx,orbit:lx,fly:ux}[a](t.camera,t.renderer.domElement),a==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Zi(t.extraRenderers)).forEach(function(f){return f.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new Ke.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!h,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Zi(e.extraRenderers)).forEach(function(a){return a.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new Ke.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var n=rs(e.backgroundColor).alpha;n===void 0&&(n=1),e.renderer.setClearColor(new Ke.Color(zx(1,e.backgroundColor)),n)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new Ke.TextureLoader().load(e.backgroundImageUrl,function(a){e.skysphere.material=new Ke.MeshBasicMaterial({map:a,side:Ke.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(a){return e.scene.remove(a)}),e.objects.forEach(function(a){return e.scene.add(a)}));function r(){e.loadComplete=e.scene.visible=!0}}});function rb(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var ab=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;rb(ab);function yc(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Br(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yc(Object(t),!0).forEach(function(n){dr(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):yc(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function dr(i,e,t){return e=hb(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function fa(i){return ob(i)||sb(i)||lb(i)||cb()}function ob(i){if(Array.isArray(i))return Fo(i)}function sb(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function lb(i,e){if(i){if(typeof i=="string")return Fo(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fo(i,e)}}function Fo(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function cb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ub(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function hb(i){var e=ub(i,"string");return typeof e=="symbol"?e:String(e)}function Wu(i,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(s,o){o[i][r](s)},triggerUpdate:!1}},linkMethod:function(r){return function(a){for(var s=a[i],o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];var u=s[r].apply(s,l);return u===s?this:u}}}}var xc=window.THREE?window.THREE:{AmbientLight:P0,DirectionalLight:C0,Vector3:O},fb=170,ju=Wu("forceGraph",ku),db=Object.assign.apply(Object,fa(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(i){return dr({},i,ju.linkProp(i))}))),pb=Object.assign.apply(Object,fa(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(i){return dr({},i,ju.linkMethod(i))}))),Wr=Wu("renderObjs",Hu),mb=Object.assign.apply(Object,fa(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(i){return dr({},i,Wr.linkProp(i))}))),gb=Object.assign.apply(Object,fa(["cameraPosition","postProcessingComposer"].map(function(i){return dr({},i,Wr.linkMethod(i))})).concat([{graph2ScreenCoords:Wr.linkMethod("getScreenCoords"),screen2GraphCoords:Wr.linkMethod("getSceneCoords")}])),xb=ts({props:Br(Br({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var n=t.renderObjs.controls();n&&(n.enabled=e,e&&n.domElement&&n.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},db),mb),methods:Br(Br({zoomToFit:function(e,t,n){for(var r,a=arguments.length,s=new Array(a>3?a-3:0),o=3;o<a;o++)s[o-3]=arguments[o];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,s),t,n),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},pb),gb),stateInit:function(e){var t=e.controlType,n=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new ku,renderObjs:Hu({controlType:t,rendererConfig:n,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var n=document.createElement("div");t.container.appendChild(n),t.renderObjs(n);var r=t.renderObjs.camera(),a=t.renderObjs.renderer(),s=t.renderObjs.controls();s.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var o;t.container.appendChild(o=document.createElement("div")),o.className="graph-info-msg",o.textContent="",t.forceGraph.onLoading(function(){o.textContent="Loading..."}).onFinishLoading(function(){o.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*fb)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new L0(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,a.domElement);c.addEventListener("dragstart",function(u){s.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var h=fn(u.object).__data;!h.__initialFixedPos&&(h.__initialFixedPos={fx:h.fx,fy:h.fy,fz:h.fz}),!h.__initialPos&&(h.__initialPos={x:h.x,y:h.y,z:h.z}),["x","y","z"].forEach(function(f){return h["f".concat(f)]=h[f]}),a.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(u){var h=fn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var f=u.object.__initialPos,m=u.object.__prevPos,g=u.object.position;h.position.add(g.clone().sub(m)),m.copy(g),g.copy(f)}var d=h.__data,p=h.position,v={x:p.x-d.x,y:p.y-d.y,z:p.z-d.z};["x","y","z"].forEach(function(w){return d["f".concat(w)]=d[w]=p[w]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),d.__dragged=!0,t.onNodeDrag(d,v)}),c.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var h=fn(u.object).__data;h.__disposeControlsAfterDrag&&(c.dispose(),delete h.__disposeControlsAfterDrag);var f=h.__initialFixedPos,m=h.__initialPos,g={x:m.x-h.x,y:m.y-h.y,z:m.z-h.z};f&&(["x","y","z"].forEach(function(d){var p="f".concat(d);f[p]===void 0&&delete h[p]}),delete h.__initialFixedPos,delete h.__initialPos,h.__dragged&&(delete h.__dragged,t.onNodeDragEnd(h,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(s.enabled=!0,s.domElement&&s.domElement.ownerDocument&&s.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),a.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new xc.AmbientLight(12303291),new xc.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(l,c){var u=fn(l);if(!u)return 1;var h=fn(c);if(!h)return-1;var f=function(g){return g.__graphObjType==="node"};return f(h)-f(u)}).tooltipContent(function(l){var c=fn(l);return c&&ze(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var c=fn(l);if(c!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,h=t.hoverObj?t.hoverObj.__data:null,f=c?c.__graphObjType:null,m=c?c.__data:null;if(u&&u!==f){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,h)}if(f){var d=t["on".concat(f==="node"?"Node":"Link","Hover")];d&&d(m,u===f?h:null)}a.domElement.classList[c&&t["on".concat(f==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(l,c){var u=fn(l);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];h&&h(u.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(l,c){var u=fn(l);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];h&&h(u.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function fn(i){for(var e=i;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}export{cs as A,ke as C,dx as F,Go as M,ha as P,r0 as S,E0 as T,zc as U,le as V,On as W,xb as _,yb as a,vn as b,O as c,hx as d};
