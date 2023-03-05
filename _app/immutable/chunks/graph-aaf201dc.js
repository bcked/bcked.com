var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oI(i,e=2,t="USD",n="symbol",r=!0){const o={minimumFractionDigits:e,maximumFractionDigits:e,style:"currency",currency:t,currencyDisplay:n,useGrouping:r};let u="standard";return i>=1e3?u="compact":i<.1&&i>0&&(u="scientific"),Intl.NumberFormat("en-US",{notation:u,...o}).format(i)}function sI(i,e=2,t=!0){const n={minimumFractionDigits:e,maximumFractionDigits:e,useGrouping:t};let r="standard";return i>=1e3?r="compact":i<.1&&i>0&&(r="scientific"),Intl.NumberFormat("en-US",{notation:r,...n}).format(i)}function lI(i,e=0){return Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:e,maximumFractionDigits:e}).format(i)}function uI(i,e,t=!0){let n;return i!==""&&e!==""&&!isNaN(i)&&!isNaN(e)?n=i-e:n=String(e).localeCompare(String(i)),n*(t?-1:1)}function cI(...i){return(e,t)=>{if(!i)return 0;for(let n=i.length-1;n>=0;n--){const r=i[n](e,t);if(r!==0)return r}return 0}}var Sf=function(e){lM(e);var t=sM(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function sM(i){var e=Object.create(null);return{on:function(t,n,r){if(typeof n!="function")throw new Error("callback is expected to be a function");var o=e[t];return o||(o=e[t]=[]),o.push({callback:n,ctx:r}),i},off:function(t,n){var r=typeof t>"u";if(r)return e=Object.create(null),i;if(e[t]){var o=typeof n!="function";if(o)delete e[t];else for(var u=e[t],l=0;l<u.length;++l)u[l].callback===n&&u.splice(l,1)}return i},fire:function(t){var n=e[t];if(!n)return i;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<n.length;++o){var u=n[o];u.callback.apply(u.ctx,r)}return i}}}function lM(i){if(!i)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(i.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Vo={},uM={get exports(){return Vo},set exports(i){Vo=i}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(i,e){(function(){var t,n="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",l="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,g=2,_=4,y=1,v=2,m=1,b=2,A=4,S=8,M=16,w=32,P=64,I=128,T=256,D=512,U=30,ee="...",Z=800,j=16,O=1,F=2,V=3,ie=1/0,ae=9007199254740991,_e=17976931348623157e292,J=0/0,pe=4294967295,$=pe-1,fe=pe>>>1,le=[["ary",I],["bind",m],["bindKey",b],["curry",S],["curryRight",M],["flip",D],["partial",w],["partialRight",P],["rearg",T]],Q="[object Arguments]",W="[object Array]",q="[object AsyncFunction]",oe="[object Boolean]",ye="[object Date]",xe="[object DOMException]",Ne="[object Error]",Ie="[object Function]",ke="[object GeneratorFunction]",Ye="[object Map]",yt="[object Number]",vt="[object Null]",ft="[object Object]",St="[object Promise]",pt="[object Proxy]",Jt="[object RegExp]",At="[object Set]",z="[object String]",R="[object Symbol]",ue="[object Undefined]",we="[object WeakMap]",Se="[object WeakSet]",Ae="[object ArrayBuffer]",He="[object DataView]",k="[object Float32Array]",te="[object Float64Array]",Le="[object Int8Array]",Re="[object Int16Array]",Pe="[object Int32Array]",ze="[object Uint8Array]",Fe="[object Uint8ClampedArray]",tt="[object Uint16Array]",at="[object Uint32Array]",bt=/\b__p \+= '';/g,Y=/\b(__p \+=) '' \+/g,he=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Me=/&(?:amp|lt|gt|quot|#39);/g,De=/[&<>"']/g,Ge=RegExp(Me.source),gt=RegExp(De.source),Vt=/<%-([\s\S]+?)%>/g,Qt=/<%([\s\S]+?)%>/g,_i=/<%=([\s\S]+?)%>/g,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ni=/^\w*$/,Sn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xr=/[\\^$.*+?()[\]{}|]/g,Wl=RegExp(Xr.source),Xa=/^\s+/,jl=/\s/,N=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,re=/\{\n\/\* \[wrapped with (.+)\] \*/,de=/,? & /,ne=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ge=/[()=,{}\[\]\/\s]/,Ve=/\\(\\)?/g,Xe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Je=/\w*$/,nt=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,st=/^\[object .+?Constructor\]$/,lt=/^0o[0-7]+$/i,kt=/^(?:0|[1-9]\d*)$/,pn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,En=/($^)/,Ci=/['\n\r\u2028\u2029\\]/g,Rt="\\ud800-\\udfff",ut="\\u0300-\\u036f",Ya="\\ufe20-\\ufe2f",Wt="\\u20d0-\\u20ff",xi=ut+Ya+Wt,Za="\\u2700-\\u27bf",Qi="a-z\\xdf-\\xf6\\xf8-\\xff",Ka="\\xac\\xb1\\xd7\\xf7",an="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pi="\\u2000-\\u206f",Ja=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ln="A-Z\\xc0-\\xd6\\xd8-\\xde",Yr="\\ufe0e\\ufe0f",ts=Ka+an+Pi+Ja,Zr="['’]",s0="["+Rt+"]",Kf="["+ts+"]",ns="["+xi+"]",Jf="\\d+",l0="["+Za+"]",Qf="["+Qi+"]",eh="[^"+Rt+ts+Jf+Za+Qi+ln+"]",$l="\\ud83c[\\udffb-\\udfff]",u0="(?:"+ns+"|"+$l+")",th="[^"+Rt+"]",ql="(?:\\ud83c[\\udde6-\\uddff]){2}",Xl="[\\ud800-\\udbff][\\udc00-\\udfff]",Kr="["+ln+"]",nh="\\u200d",ih="(?:"+Qf+"|"+eh+")",c0="(?:"+Kr+"|"+eh+")",rh="(?:"+Zr+"(?:d|ll|m|re|s|t|ve))?",ah="(?:"+Zr+"(?:D|LL|M|RE|S|T|VE))?",oh=u0+"?",sh="["+Yr+"]?",f0="(?:"+nh+"(?:"+[th,ql,Xl].join("|")+")"+sh+oh+")*",h0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",d0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",lh=sh+oh+f0,p0="(?:"+[l0,ql,Xl].join("|")+")"+lh,g0="(?:"+[th+ns+"?",ns,ql,Xl,s0].join("|")+")",m0=RegExp(Zr,"g"),v0=RegExp(ns,"g"),Yl=RegExp($l+"(?="+$l+")|"+g0+lh,"g"),_0=RegExp([Kr+"?"+Qf+"+"+rh+"(?="+[Kf,Kr,"$"].join("|")+")",c0+"+"+ah+"(?="+[Kf,Kr+ih,"$"].join("|")+")",Kr+"?"+ih+"+"+rh,Kr+"+"+ah,d0,h0,Jf,p0].join("|"),"g"),x0=RegExp("["+nh+Rt+xi+Yr+"]"),y0=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,b0=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],w0=-1,Dt={};Dt[k]=Dt[te]=Dt[Le]=Dt[Re]=Dt[Pe]=Dt[ze]=Dt[Fe]=Dt[tt]=Dt[at]=!0,Dt[Q]=Dt[W]=Dt[Ae]=Dt[oe]=Dt[He]=Dt[ye]=Dt[Ne]=Dt[Ie]=Dt[Ye]=Dt[yt]=Dt[ft]=Dt[Jt]=Dt[At]=Dt[z]=Dt[we]=!1;var Pt={};Pt[Q]=Pt[W]=Pt[Ae]=Pt[He]=Pt[oe]=Pt[ye]=Pt[k]=Pt[te]=Pt[Le]=Pt[Re]=Pt[Pe]=Pt[Ye]=Pt[yt]=Pt[ft]=Pt[Jt]=Pt[At]=Pt[z]=Pt[R]=Pt[ze]=Pt[Fe]=Pt[tt]=Pt[at]=!0,Pt[Ne]=Pt[Ie]=Pt[we]=!1;var M0={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},S0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},E0={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},T0={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},A0=parseFloat,C0=parseInt,uh=typeof go=="object"&&go&&go.Object===Object&&go,P0=typeof self=="object"&&self&&self.Object===Object&&self,on=uh||P0||Function("return this")(),Zl=e&&!e.nodeType&&e,wr=Zl&&!0&&i&&!i.nodeType&&i,ch=wr&&wr.exports===Zl,Kl=ch&&uh.process,Wn=function(){try{var X=wr&&wr.require&&wr.require("util").types;return X||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),fh=Wn&&Wn.isArrayBuffer,hh=Wn&&Wn.isDate,dh=Wn&&Wn.isMap,ph=Wn&&Wn.isRegExp,gh=Wn&&Wn.isSet,mh=Wn&&Wn.isTypedArray;function On(X,ce,se){switch(se.length){case 0:return X.call(ce);case 1:return X.call(ce,se[0]);case 2:return X.call(ce,se[0],se[1]);case 3:return X.call(ce,se[0],se[1],se[2])}return X.apply(ce,se)}function L0(X,ce,se,Oe){for(var Ze=-1,_t=X==null?0:X.length;++Ze<_t;){var $t=X[Ze];ce(Oe,$t,se($t),X)}return Oe}function jn(X,ce){for(var se=-1,Oe=X==null?0:X.length;++se<Oe&&ce(X[se],se,X)!==!1;);return X}function R0(X,ce){for(var se=X==null?0:X.length;se--&&ce(X[se],se,X)!==!1;);return X}function vh(X,ce){for(var se=-1,Oe=X==null?0:X.length;++se<Oe;)if(!ce(X[se],se,X))return!1;return!0}function er(X,ce){for(var se=-1,Oe=X==null?0:X.length,Ze=0,_t=[];++se<Oe;){var $t=X[se];ce($t,se,X)&&(_t[Ze++]=$t)}return _t}function is(X,ce){var se=X==null?0:X.length;return!!se&&Jr(X,ce,0)>-1}function Jl(X,ce,se){for(var Oe=-1,Ze=X==null?0:X.length;++Oe<Ze;)if(se(ce,X[Oe]))return!0;return!1}function Ot(X,ce){for(var se=-1,Oe=X==null?0:X.length,Ze=Array(Oe);++se<Oe;)Ze[se]=ce(X[se],se,X);return Ze}function tr(X,ce){for(var se=-1,Oe=ce.length,Ze=X.length;++se<Oe;)X[Ze+se]=ce[se];return X}function Ql(X,ce,se,Oe){var Ze=-1,_t=X==null?0:X.length;for(Oe&&_t&&(se=X[++Ze]);++Ze<_t;)se=ce(se,X[Ze],Ze,X);return se}function D0(X,ce,se,Oe){var Ze=X==null?0:X.length;for(Oe&&Ze&&(se=X[--Ze]);Ze--;)se=ce(se,X[Ze],Ze,X);return se}function eu(X,ce){for(var se=-1,Oe=X==null?0:X.length;++se<Oe;)if(ce(X[se],se,X))return!0;return!1}var I0=tu("length");function O0(X){return X.split("")}function N0(X){return X.match(ne)||[]}function _h(X,ce,se){var Oe;return se(X,function(Ze,_t,$t){if(ce(Ze,_t,$t))return Oe=_t,!1}),Oe}function rs(X,ce,se,Oe){for(var Ze=X.length,_t=se+(Oe?1:-1);Oe?_t--:++_t<Ze;)if(ce(X[_t],_t,X))return _t;return-1}function Jr(X,ce,se){return ce===ce?q0(X,ce,se):rs(X,xh,se)}function F0(X,ce,se,Oe){for(var Ze=se-1,_t=X.length;++Ze<_t;)if(Oe(X[Ze],ce))return Ze;return-1}function xh(X){return X!==X}function yh(X,ce){var se=X==null?0:X.length;return se?iu(X,ce)/se:J}function tu(X){return function(ce){return ce==null?t:ce[X]}}function nu(X){return function(ce){return X==null?t:X[ce]}}function bh(X,ce,se,Oe,Ze){return Ze(X,function(_t,$t,Et){se=Oe?(Oe=!1,_t):ce(se,_t,$t,Et)}),se}function z0(X,ce){var se=X.length;for(X.sort(ce);se--;)X[se]=X[se].value;return X}function iu(X,ce){for(var se,Oe=-1,Ze=X.length;++Oe<Ze;){var _t=ce(X[Oe]);_t!==t&&(se=se===t?_t:se+_t)}return se}function ru(X,ce){for(var se=-1,Oe=Array(X);++se<X;)Oe[se]=ce(se);return Oe}function B0(X,ce){return Ot(ce,function(se){return[se,X[se]]})}function wh(X){return X&&X.slice(0,Th(X)+1).replace(Xa,"")}function Nn(X){return function(ce){return X(ce)}}function au(X,ce){return Ot(ce,function(se){return X[se]})}function Qa(X,ce){return X.has(ce)}function Mh(X,ce){for(var se=-1,Oe=X.length;++se<Oe&&Jr(ce,X[se],0)>-1;);return se}function Sh(X,ce){for(var se=X.length;se--&&Jr(ce,X[se],0)>-1;);return se}function k0(X,ce){for(var se=X.length,Oe=0;se--;)X[se]===ce&&++Oe;return Oe}var U0=nu(M0),G0=nu(S0);function H0(X){return"\\"+T0[X]}function V0(X,ce){return X==null?t:X[ce]}function Qr(X){return x0.test(X)}function W0(X){return y0.test(X)}function j0(X){for(var ce,se=[];!(ce=X.next()).done;)se.push(ce.value);return se}function ou(X){var ce=-1,se=Array(X.size);return X.forEach(function(Oe,Ze){se[++ce]=[Ze,Oe]}),se}function Eh(X,ce){return function(se){return X(ce(se))}}function nr(X,ce){for(var se=-1,Oe=X.length,Ze=0,_t=[];++se<Oe;){var $t=X[se];($t===ce||$t===d)&&(X[se]=d,_t[Ze++]=se)}return _t}function as(X){var ce=-1,se=Array(X.size);return X.forEach(function(Oe){se[++ce]=Oe}),se}function $0(X){var ce=-1,se=Array(X.size);return X.forEach(function(Oe){se[++ce]=[Oe,Oe]}),se}function q0(X,ce,se){for(var Oe=se-1,Ze=X.length;++Oe<Ze;)if(X[Oe]===ce)return Oe;return-1}function X0(X,ce,se){for(var Oe=se+1;Oe--;)if(X[Oe]===ce)return Oe;return Oe}function ea(X){return Qr(X)?Z0(X):I0(X)}function ii(X){return Qr(X)?K0(X):O0(X)}function Th(X){for(var ce=X.length;ce--&&jl.test(X.charAt(ce)););return ce}var Y0=nu(E0);function Z0(X){for(var ce=Yl.lastIndex=0;Yl.test(X);)++ce;return ce}function K0(X){return X.match(Yl)||[]}function J0(X){return X.match(_0)||[]}var Q0=function X(ce){ce=ce==null?on:ta.defaults(on.Object(),ce,ta.pick(on,b0));var se=ce.Array,Oe=ce.Date,Ze=ce.Error,_t=ce.Function,$t=ce.Math,Et=ce.Object,su=ce.RegExp,e_=ce.String,$n=ce.TypeError,os=se.prototype,t_=_t.prototype,na=Et.prototype,ss=ce["__core-js_shared__"],ls=t_.toString,Mt=na.hasOwnProperty,n_=0,Ah=function(){var a=/[^.]+$/.exec(ss&&ss.keys&&ss.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),us=na.toString,i_=ls.call(Et),r_=on._,a_=su("^"+ls.call(Mt).replace(Xr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),cs=ch?ce.Buffer:t,ir=ce.Symbol,fs=ce.Uint8Array,Ch=cs?cs.allocUnsafe:t,hs=Eh(Et.getPrototypeOf,Et),Ph=Et.create,Lh=na.propertyIsEnumerable,ds=os.splice,Rh=ir?ir.isConcatSpreadable:t,eo=ir?ir.iterator:t,Mr=ir?ir.toStringTag:t,ps=function(){try{var a=Cr(Et,"defineProperty");return a({},"",{}),a}catch{}}(),o_=ce.clearTimeout!==on.clearTimeout&&ce.clearTimeout,s_=Oe&&Oe.now!==on.Date.now&&Oe.now,l_=ce.setTimeout!==on.setTimeout&&ce.setTimeout,gs=$t.ceil,ms=$t.floor,lu=Et.getOwnPropertySymbols,u_=cs?cs.isBuffer:t,Dh=ce.isFinite,c_=os.join,f_=Eh(Et.keys,Et),qt=$t.max,un=$t.min,h_=Oe.now,d_=ce.parseInt,Ih=$t.random,p_=os.reverse,uu=Cr(ce,"DataView"),to=Cr(ce,"Map"),cu=Cr(ce,"Promise"),ia=Cr(ce,"Set"),no=Cr(ce,"WeakMap"),io=Cr(Et,"create"),vs=no&&new no,ra={},g_=Pr(uu),m_=Pr(to),v_=Pr(cu),__=Pr(ia),x_=Pr(no),_s=ir?ir.prototype:t,ro=_s?_s.valueOf:t,Oh=_s?_s.toString:t;function C(a){if(Ut(a)&&!Ke(a)&&!(a instanceof ct)){if(a instanceof qn)return a;if(Mt.call(a,"__wrapped__"))return Nd(a)}return new qn(a)}var aa=function(){function a(){}return function(s){if(!zt(s))return{};if(Ph)return Ph(s);a.prototype=s;var h=new a;return a.prototype=t,h}}();function xs(){}function qn(a,s){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}C.templateSettings={escape:Vt,evaluate:Qt,interpolate:_i,variable:"",imports:{_:C}},C.prototype=xs.prototype,C.prototype.constructor=C,qn.prototype=aa(xs.prototype),qn.prototype.constructor=qn;function ct(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function y_(){var a=new ct(this.__wrapped__);return a.__actions__=Tn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Tn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Tn(this.__views__),a}function b_(){if(this.__filtered__){var a=new ct(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function w_(){var a=this.__wrapped__.value(),s=this.__dir__,h=Ke(a),x=s<0,E=h?a.length:0,L=Ox(0,E,this.__views__),B=L.start,G=L.end,K=G-B,me=x?G:B-1,ve=this.__iteratees__,be=ve.length,Ce=0,Be=un(K,this.__takeCount__);if(!h||!x&&E==K&&Be==K)return rd(a,this.__actions__);var je=[];e:for(;K--&&Ce<Be;){me+=s;for(var et=-1,$e=a[me];++et<be;){var ot=ve[et],ht=ot.iteratee,Bn=ot.type,vn=ht($e);if(Bn==F)$e=vn;else if(!vn){if(Bn==O)continue e;break e}}je[Ce++]=$e}return je}ct.prototype=aa(xs.prototype),ct.prototype.constructor=ct;function Sr(a){var s=-1,h=a==null?0:a.length;for(this.clear();++s<h;){var x=a[s];this.set(x[0],x[1])}}function M_(){this.__data__=io?io(null):{},this.size=0}function S_(a){var s=this.has(a)&&delete this.__data__[a];return this.size-=s?1:0,s}function E_(a){var s=this.__data__;if(io){var h=s[a];return h===c?t:h}return Mt.call(s,a)?s[a]:t}function T_(a){var s=this.__data__;return io?s[a]!==t:Mt.call(s,a)}function A_(a,s){var h=this.__data__;return this.size+=this.has(a)?0:1,h[a]=io&&s===t?c:s,this}Sr.prototype.clear=M_,Sr.prototype.delete=S_,Sr.prototype.get=E_,Sr.prototype.has=T_,Sr.prototype.set=A_;function Li(a){var s=-1,h=a==null?0:a.length;for(this.clear();++s<h;){var x=a[s];this.set(x[0],x[1])}}function C_(){this.__data__=[],this.size=0}function P_(a){var s=this.__data__,h=ys(s,a);if(h<0)return!1;var x=s.length-1;return h==x?s.pop():ds.call(s,h,1),--this.size,!0}function L_(a){var s=this.__data__,h=ys(s,a);return h<0?t:s[h][1]}function R_(a){return ys(this.__data__,a)>-1}function D_(a,s){var h=this.__data__,x=ys(h,a);return x<0?(++this.size,h.push([a,s])):h[x][1]=s,this}Li.prototype.clear=C_,Li.prototype.delete=P_,Li.prototype.get=L_,Li.prototype.has=R_,Li.prototype.set=D_;function Ri(a){var s=-1,h=a==null?0:a.length;for(this.clear();++s<h;){var x=a[s];this.set(x[0],x[1])}}function I_(){this.size=0,this.__data__={hash:new Sr,map:new(to||Li),string:new Sr}}function O_(a){var s=Ds(this,a).delete(a);return this.size-=s?1:0,s}function N_(a){return Ds(this,a).get(a)}function F_(a){return Ds(this,a).has(a)}function z_(a,s){var h=Ds(this,a),x=h.size;return h.set(a,s),this.size+=h.size==x?0:1,this}Ri.prototype.clear=I_,Ri.prototype.delete=O_,Ri.prototype.get=N_,Ri.prototype.has=F_,Ri.prototype.set=z_;function Er(a){var s=-1,h=a==null?0:a.length;for(this.__data__=new Ri;++s<h;)this.add(a[s])}function B_(a){return this.__data__.set(a,c),this}function k_(a){return this.__data__.has(a)}Er.prototype.add=Er.prototype.push=B_,Er.prototype.has=k_;function ri(a){var s=this.__data__=new Li(a);this.size=s.size}function U_(){this.__data__=new Li,this.size=0}function G_(a){var s=this.__data__,h=s.delete(a);return this.size=s.size,h}function H_(a){return this.__data__.get(a)}function V_(a){return this.__data__.has(a)}function W_(a,s){var h=this.__data__;if(h instanceof Li){var x=h.__data__;if(!to||x.length<r-1)return x.push([a,s]),this.size=++h.size,this;h=this.__data__=new Ri(x)}return h.set(a,s),this.size=h.size,this}ri.prototype.clear=U_,ri.prototype.delete=G_,ri.prototype.get=H_,ri.prototype.has=V_,ri.prototype.set=W_;function Nh(a,s){var h=Ke(a),x=!h&&Lr(a),E=!h&&!x&&lr(a),L=!h&&!x&&!E&&ua(a),B=h||x||E||L,G=B?ru(a.length,e_):[],K=G.length;for(var me in a)(s||Mt.call(a,me))&&!(B&&(me=="length"||E&&(me=="offset"||me=="parent")||L&&(me=="buffer"||me=="byteLength"||me=="byteOffset")||Ni(me,K)))&&G.push(me);return G}function Fh(a){var s=a.length;return s?a[bu(0,s-1)]:t}function j_(a,s){return Is(Tn(a),Tr(s,0,a.length))}function $_(a){return Is(Tn(a))}function fu(a,s,h){(h!==t&&!ai(a[s],h)||h===t&&!(s in a))&&Di(a,s,h)}function ao(a,s,h){var x=a[s];(!(Mt.call(a,s)&&ai(x,h))||h===t&&!(s in a))&&Di(a,s,h)}function ys(a,s){for(var h=a.length;h--;)if(ai(a[h][0],s))return h;return-1}function q_(a,s,h,x){return rr(a,function(E,L,B){s(x,E,h(E),B)}),x}function zh(a,s){return a&&bi(s,en(s),a)}function X_(a,s){return a&&bi(s,Cn(s),a)}function Di(a,s,h){s=="__proto__"&&ps?ps(a,s,{configurable:!0,enumerable:!0,value:h,writable:!0}):a[s]=h}function hu(a,s){for(var h=-1,x=s.length,E=se(x),L=a==null;++h<x;)E[h]=L?t:$u(a,s[h]);return E}function Tr(a,s,h){return a===a&&(h!==t&&(a=a<=h?a:h),s!==t&&(a=a>=s?a:s)),a}function Xn(a,s,h,x,E,L){var B,G=s&p,K=s&g,me=s&_;if(h&&(B=E?h(a,x,E,L):h(a)),B!==t)return B;if(!zt(a))return a;var ve=Ke(a);if(ve){if(B=Fx(a),!G)return Tn(a,B)}else{var be=cn(a),Ce=be==Ie||be==ke;if(lr(a))return sd(a,G);if(be==ft||be==Q||Ce&&!E){if(B=K||Ce?{}:Td(a),!G)return K?Ex(a,X_(B,a)):Sx(a,zh(B,a))}else{if(!Pt[be])return E?a:{};B=zx(a,be,G)}}L||(L=new ri);var Be=L.get(a);if(Be)return Be;L.set(a,B),tp(a)?a.forEach(function($e){B.add(Xn($e,s,h,$e,a,L))}):Qd(a)&&a.forEach(function($e,ot){B.set(ot,Xn($e,s,h,ot,a,L))});var je=me?K?Du:Ru:K?Cn:en,et=ve?t:je(a);return jn(et||a,function($e,ot){et&&(ot=$e,$e=a[ot]),ao(B,ot,Xn($e,s,h,ot,a,L))}),B}function Y_(a){var s=en(a);return function(h){return Bh(h,a,s)}}function Bh(a,s,h){var x=h.length;if(a==null)return!x;for(a=Et(a);x--;){var E=h[x],L=s[E],B=a[E];if(B===t&&!(E in a)||!L(B))return!1}return!0}function kh(a,s,h){if(typeof a!="function")throw new $n(u);return ho(function(){a.apply(t,h)},s)}function oo(a,s,h,x){var E=-1,L=is,B=!0,G=a.length,K=[],me=s.length;if(!G)return K;h&&(s=Ot(s,Nn(h))),x?(L=Jl,B=!1):s.length>=r&&(L=Qa,B=!1,s=new Er(s));e:for(;++E<G;){var ve=a[E],be=h==null?ve:h(ve);if(ve=x||ve!==0?ve:0,B&&be===be){for(var Ce=me;Ce--;)if(s[Ce]===be)continue e;K.push(ve)}else L(s,be,x)||K.push(ve)}return K}var rr=hd(yi),Uh=hd(pu,!0);function Z_(a,s){var h=!0;return rr(a,function(x,E,L){return h=!!s(x,E,L),h}),h}function bs(a,s,h){for(var x=-1,E=a.length;++x<E;){var L=a[x],B=s(L);if(B!=null&&(G===t?B===B&&!zn(B):h(B,G)))var G=B,K=L}return K}function K_(a,s,h,x){var E=a.length;for(h=Qe(h),h<0&&(h=-h>E?0:E+h),x=x===t||x>E?E:Qe(x),x<0&&(x+=E),x=h>x?0:ip(x);h<x;)a[h++]=s;return a}function Gh(a,s){var h=[];return rr(a,function(x,E,L){s(x,E,L)&&h.push(x)}),h}function sn(a,s,h,x,E){var L=-1,B=a.length;for(h||(h=kx),E||(E=[]);++L<B;){var G=a[L];s>0&&h(G)?s>1?sn(G,s-1,h,x,E):tr(E,G):x||(E[E.length]=G)}return E}var du=dd(),Hh=dd(!0);function yi(a,s){return a&&du(a,s,en)}function pu(a,s){return a&&Hh(a,s,en)}function ws(a,s){return er(s,function(h){return Fi(a[h])})}function Ar(a,s){s=or(s,a);for(var h=0,x=s.length;a!=null&&h<x;)a=a[wi(s[h++])];return h&&h==x?a:t}function Vh(a,s,h){var x=s(a);return Ke(a)?x:tr(x,h(a))}function gn(a){return a==null?a===t?ue:vt:Mr&&Mr in Et(a)?Ix(a):$x(a)}function gu(a,s){return a>s}function J_(a,s){return a!=null&&Mt.call(a,s)}function Q_(a,s){return a!=null&&s in Et(a)}function ex(a,s,h){return a>=un(s,h)&&a<qt(s,h)}function mu(a,s,h){for(var x=h?Jl:is,E=a[0].length,L=a.length,B=L,G=se(L),K=1/0,me=[];B--;){var ve=a[B];B&&s&&(ve=Ot(ve,Nn(s))),K=un(ve.length,K),G[B]=!h&&(s||E>=120&&ve.length>=120)?new Er(B&&ve):t}ve=a[0];var be=-1,Ce=G[0];e:for(;++be<E&&me.length<K;){var Be=ve[be],je=s?s(Be):Be;if(Be=h||Be!==0?Be:0,!(Ce?Qa(Ce,je):x(me,je,h))){for(B=L;--B;){var et=G[B];if(!(et?Qa(et,je):x(a[B],je,h)))continue e}Ce&&Ce.push(je),me.push(Be)}}return me}function tx(a,s,h,x){return yi(a,function(E,L,B){s(x,h(E),L,B)}),x}function so(a,s,h){s=or(s,a),a=Ld(a,s);var x=a==null?a:a[wi(Zn(s))];return x==null?t:On(x,a,h)}function Wh(a){return Ut(a)&&gn(a)==Q}function nx(a){return Ut(a)&&gn(a)==Ae}function ix(a){return Ut(a)&&gn(a)==ye}function lo(a,s,h,x,E){return a===s?!0:a==null||s==null||!Ut(a)&&!Ut(s)?a!==a&&s!==s:rx(a,s,h,x,lo,E)}function rx(a,s,h,x,E,L){var B=Ke(a),G=Ke(s),K=B?W:cn(a),me=G?W:cn(s);K=K==Q?ft:K,me=me==Q?ft:me;var ve=K==ft,be=me==ft,Ce=K==me;if(Ce&&lr(a)){if(!lr(s))return!1;B=!0,ve=!1}if(Ce&&!ve)return L||(L=new ri),B||ua(a)?Md(a,s,h,x,E,L):Rx(a,s,K,h,x,E,L);if(!(h&y)){var Be=ve&&Mt.call(a,"__wrapped__"),je=be&&Mt.call(s,"__wrapped__");if(Be||je){var et=Be?a.value():a,$e=je?s.value():s;return L||(L=new ri),E(et,$e,h,x,L)}}return Ce?(L||(L=new ri),Dx(a,s,h,x,E,L)):!1}function ax(a){return Ut(a)&&cn(a)==Ye}function vu(a,s,h,x){var E=h.length,L=E,B=!x;if(a==null)return!L;for(a=Et(a);E--;){var G=h[E];if(B&&G[2]?G[1]!==a[G[0]]:!(G[0]in a))return!1}for(;++E<L;){G=h[E];var K=G[0],me=a[K],ve=G[1];if(B&&G[2]){if(me===t&&!(K in a))return!1}else{var be=new ri;if(x)var Ce=x(me,ve,K,a,s,be);if(!(Ce===t?lo(ve,me,y|v,x,be):Ce))return!1}}return!0}function jh(a){if(!zt(a)||Gx(a))return!1;var s=Fi(a)?a_:st;return s.test(Pr(a))}function ox(a){return Ut(a)&&gn(a)==Jt}function sx(a){return Ut(a)&&cn(a)==At}function lx(a){return Ut(a)&&ks(a.length)&&!!Dt[gn(a)]}function $h(a){return typeof a=="function"?a:a==null?Pn:typeof a=="object"?Ke(a)?Yh(a[0],a[1]):Xh(a):pp(a)}function _u(a){if(!fo(a))return f_(a);var s=[];for(var h in Et(a))Mt.call(a,h)&&h!="constructor"&&s.push(h);return s}function ux(a){if(!zt(a))return jx(a);var s=fo(a),h=[];for(var x in a)x=="constructor"&&(s||!Mt.call(a,x))||h.push(x);return h}function xu(a,s){return a<s}function qh(a,s){var h=-1,x=An(a)?se(a.length):[];return rr(a,function(E,L,B){x[++h]=s(E,L,B)}),x}function Xh(a){var s=Ou(a);return s.length==1&&s[0][2]?Cd(s[0][0],s[0][1]):function(h){return h===a||vu(h,a,s)}}function Yh(a,s){return Fu(a)&&Ad(s)?Cd(wi(a),s):function(h){var x=$u(h,a);return x===t&&x===s?qu(h,a):lo(s,x,y|v)}}function Ms(a,s,h,x,E){a!==s&&du(s,function(L,B){if(E||(E=new ri),zt(L))cx(a,s,B,h,Ms,x,E);else{var G=x?x(Bu(a,B),L,B+"",a,s,E):t;G===t&&(G=L),fu(a,B,G)}},Cn)}function cx(a,s,h,x,E,L,B){var G=Bu(a,h),K=Bu(s,h),me=B.get(K);if(me){fu(a,h,me);return}var ve=L?L(G,K,h+"",a,s,B):t,be=ve===t;if(be){var Ce=Ke(K),Be=!Ce&&lr(K),je=!Ce&&!Be&&ua(K);ve=K,Ce||Be||je?Ke(G)?ve=G:Gt(G)?ve=Tn(G):Be?(be=!1,ve=sd(K,!0)):je?(be=!1,ve=ld(K,!0)):ve=[]:po(K)||Lr(K)?(ve=G,Lr(G)?ve=rp(G):(!zt(G)||Fi(G))&&(ve=Td(K))):be=!1}be&&(B.set(K,ve),E(ve,K,x,L,B),B.delete(K)),fu(a,h,ve)}function Zh(a,s){var h=a.length;if(h)return s+=s<0?h:0,Ni(s,h)?a[s]:t}function Kh(a,s,h){s.length?s=Ot(s,function(L){return Ke(L)?function(B){return Ar(B,L.length===1?L[0]:L)}:L}):s=[Pn];var x=-1;s=Ot(s,Nn(We()));var E=qh(a,function(L,B,G){var K=Ot(s,function(me){return me(L)});return{criteria:K,index:++x,value:L}});return z0(E,function(L,B){return Mx(L,B,h)})}function fx(a,s){return Jh(a,s,function(h,x){return qu(a,x)})}function Jh(a,s,h){for(var x=-1,E=s.length,L={};++x<E;){var B=s[x],G=Ar(a,B);h(G,B)&&uo(L,or(B,a),G)}return L}function hx(a){return function(s){return Ar(s,a)}}function yu(a,s,h,x){var E=x?F0:Jr,L=-1,B=s.length,G=a;for(a===s&&(s=Tn(s)),h&&(G=Ot(a,Nn(h)));++L<B;)for(var K=0,me=s[L],ve=h?h(me):me;(K=E(G,ve,K,x))>-1;)G!==a&&ds.call(G,K,1),ds.call(a,K,1);return a}function Qh(a,s){for(var h=a?s.length:0,x=h-1;h--;){var E=s[h];if(h==x||E!==L){var L=E;Ni(E)?ds.call(a,E,1):Su(a,E)}}return a}function bu(a,s){return a+ms(Ih()*(s-a+1))}function dx(a,s,h,x){for(var E=-1,L=qt(gs((s-a)/(h||1)),0),B=se(L);L--;)B[x?L:++E]=a,a+=h;return B}function wu(a,s){var h="";if(!a||s<1||s>ae)return h;do s%2&&(h+=a),s=ms(s/2),s&&(a+=a);while(s);return h}function it(a,s){return ku(Pd(a,s,Pn),a+"")}function px(a){return Fh(ca(a))}function gx(a,s){var h=ca(a);return Is(h,Tr(s,0,h.length))}function uo(a,s,h,x){if(!zt(a))return a;s=or(s,a);for(var E=-1,L=s.length,B=L-1,G=a;G!=null&&++E<L;){var K=wi(s[E]),me=h;if(K==="__proto__"||K==="constructor"||K==="prototype")return a;if(E!=B){var ve=G[K];me=x?x(ve,K,G):t,me===t&&(me=zt(ve)?ve:Ni(s[E+1])?[]:{})}ao(G,K,me),G=G[K]}return a}var ed=vs?function(a,s){return vs.set(a,s),a}:Pn,mx=ps?function(a,s){return ps(a,"toString",{configurable:!0,enumerable:!1,value:Yu(s),writable:!0})}:Pn;function vx(a){return Is(ca(a))}function Yn(a,s,h){var x=-1,E=a.length;s<0&&(s=-s>E?0:E+s),h=h>E?E:h,h<0&&(h+=E),E=s>h?0:h-s>>>0,s>>>=0;for(var L=se(E);++x<E;)L[x]=a[x+s];return L}function _x(a,s){var h;return rr(a,function(x,E,L){return h=s(x,E,L),!h}),!!h}function Ss(a,s,h){var x=0,E=a==null?x:a.length;if(typeof s=="number"&&s===s&&E<=fe){for(;x<E;){var L=x+E>>>1,B=a[L];B!==null&&!zn(B)&&(h?B<=s:B<s)?x=L+1:E=L}return E}return Mu(a,s,Pn,h)}function Mu(a,s,h,x){var E=0,L=a==null?0:a.length;if(L===0)return 0;s=h(s);for(var B=s!==s,G=s===null,K=zn(s),me=s===t;E<L;){var ve=ms((E+L)/2),be=h(a[ve]),Ce=be!==t,Be=be===null,je=be===be,et=zn(be);if(B)var $e=x||je;else me?$e=je&&(x||Ce):G?$e=je&&Ce&&(x||!Be):K?$e=je&&Ce&&!Be&&(x||!et):Be||et?$e=!1:$e=x?be<=s:be<s;$e?E=ve+1:L=ve}return un(L,$)}function td(a,s){for(var h=-1,x=a.length,E=0,L=[];++h<x;){var B=a[h],G=s?s(B):B;if(!h||!ai(G,K)){var K=G;L[E++]=B===0?0:B}}return L}function nd(a){return typeof a=="number"?a:zn(a)?J:+a}function Fn(a){if(typeof a=="string")return a;if(Ke(a))return Ot(a,Fn)+"";if(zn(a))return Oh?Oh.call(a):"";var s=a+"";return s=="0"&&1/a==-ie?"-0":s}function ar(a,s,h){var x=-1,E=is,L=a.length,B=!0,G=[],K=G;if(h)B=!1,E=Jl;else if(L>=r){var me=s?null:Px(a);if(me)return as(me);B=!1,E=Qa,K=new Er}else K=s?[]:G;e:for(;++x<L;){var ve=a[x],be=s?s(ve):ve;if(ve=h||ve!==0?ve:0,B&&be===be){for(var Ce=K.length;Ce--;)if(K[Ce]===be)continue e;s&&K.push(be),G.push(ve)}else E(K,be,h)||(K!==G&&K.push(be),G.push(ve))}return G}function Su(a,s){return s=or(s,a),a=Ld(a,s),a==null||delete a[wi(Zn(s))]}function id(a,s,h,x){return uo(a,s,h(Ar(a,s)),x)}function Es(a,s,h,x){for(var E=a.length,L=x?E:-1;(x?L--:++L<E)&&s(a[L],L,a););return h?Yn(a,x?0:L,x?L+1:E):Yn(a,x?L+1:0,x?E:L)}function rd(a,s){var h=a;return h instanceof ct&&(h=h.value()),Ql(s,function(x,E){return E.func.apply(E.thisArg,tr([x],E.args))},h)}function Eu(a,s,h){var x=a.length;if(x<2)return x?ar(a[0]):[];for(var E=-1,L=se(x);++E<x;)for(var B=a[E],G=-1;++G<x;)G!=E&&(L[E]=oo(L[E]||B,a[G],s,h));return ar(sn(L,1),s,h)}function ad(a,s,h){for(var x=-1,E=a.length,L=s.length,B={};++x<E;){var G=x<L?s[x]:t;h(B,a[x],G)}return B}function Tu(a){return Gt(a)?a:[]}function Au(a){return typeof a=="function"?a:Pn}function or(a,s){return Ke(a)?a:Fu(a,s)?[a]:Od(wt(a))}var xx=it;function sr(a,s,h){var x=a.length;return h=h===t?x:h,!s&&h>=x?a:Yn(a,s,h)}var od=o_||function(a){return on.clearTimeout(a)};function sd(a,s){if(s)return a.slice();var h=a.length,x=Ch?Ch(h):new a.constructor(h);return a.copy(x),x}function Cu(a){var s=new a.constructor(a.byteLength);return new fs(s).set(new fs(a)),s}function yx(a,s){var h=s?Cu(a.buffer):a.buffer;return new a.constructor(h,a.byteOffset,a.byteLength)}function bx(a){var s=new a.constructor(a.source,Je.exec(a));return s.lastIndex=a.lastIndex,s}function wx(a){return ro?Et(ro.call(a)):{}}function ld(a,s){var h=s?Cu(a.buffer):a.buffer;return new a.constructor(h,a.byteOffset,a.length)}function ud(a,s){if(a!==s){var h=a!==t,x=a===null,E=a===a,L=zn(a),B=s!==t,G=s===null,K=s===s,me=zn(s);if(!G&&!me&&!L&&a>s||L&&B&&K&&!G&&!me||x&&B&&K||!h&&K||!E)return 1;if(!x&&!L&&!me&&a<s||me&&h&&E&&!x&&!L||G&&h&&E||!B&&E||!K)return-1}return 0}function Mx(a,s,h){for(var x=-1,E=a.criteria,L=s.criteria,B=E.length,G=h.length;++x<B;){var K=ud(E[x],L[x]);if(K){if(x>=G)return K;var me=h[x];return K*(me=="desc"?-1:1)}}return a.index-s.index}function cd(a,s,h,x){for(var E=-1,L=a.length,B=h.length,G=-1,K=s.length,me=qt(L-B,0),ve=se(K+me),be=!x;++G<K;)ve[G]=s[G];for(;++E<B;)(be||E<L)&&(ve[h[E]]=a[E]);for(;me--;)ve[G++]=a[E++];return ve}function fd(a,s,h,x){for(var E=-1,L=a.length,B=-1,G=h.length,K=-1,me=s.length,ve=qt(L-G,0),be=se(ve+me),Ce=!x;++E<ve;)be[E]=a[E];for(var Be=E;++K<me;)be[Be+K]=s[K];for(;++B<G;)(Ce||E<L)&&(be[Be+h[B]]=a[E++]);return be}function Tn(a,s){var h=-1,x=a.length;for(s||(s=se(x));++h<x;)s[h]=a[h];return s}function bi(a,s,h,x){var E=!h;h||(h={});for(var L=-1,B=s.length;++L<B;){var G=s[L],K=x?x(h[G],a[G],G,h,a):t;K===t&&(K=a[G]),E?Di(h,G,K):ao(h,G,K)}return h}function Sx(a,s){return bi(a,Nu(a),s)}function Ex(a,s){return bi(a,Sd(a),s)}function Ts(a,s){return function(h,x){var E=Ke(h)?L0:q_,L=s?s():{};return E(h,a,We(x,2),L)}}function oa(a){return it(function(s,h){var x=-1,E=h.length,L=E>1?h[E-1]:t,B=E>2?h[2]:t;for(L=a.length>3&&typeof L=="function"?(E--,L):t,B&&mn(h[0],h[1],B)&&(L=E<3?t:L,E=1),s=Et(s);++x<E;){var G=h[x];G&&a(s,G,x,L)}return s})}function hd(a,s){return function(h,x){if(h==null)return h;if(!An(h))return a(h,x);for(var E=h.length,L=s?E:-1,B=Et(h);(s?L--:++L<E)&&x(B[L],L,B)!==!1;);return h}}function dd(a){return function(s,h,x){for(var E=-1,L=Et(s),B=x(s),G=B.length;G--;){var K=B[a?G:++E];if(h(L[K],K,L)===!1)break}return s}}function Tx(a,s,h){var x=s&m,E=co(a);function L(){var B=this&&this!==on&&this instanceof L?E:a;return B.apply(x?h:this,arguments)}return L}function pd(a){return function(s){s=wt(s);var h=Qr(s)?ii(s):t,x=h?h[0]:s.charAt(0),E=h?sr(h,1).join(""):s.slice(1);return x[a]()+E}}function sa(a){return function(s){return Ql(hp(fp(s).replace(m0,"")),a,"")}}function co(a){return function(){var s=arguments;switch(s.length){case 0:return new a;case 1:return new a(s[0]);case 2:return new a(s[0],s[1]);case 3:return new a(s[0],s[1],s[2]);case 4:return new a(s[0],s[1],s[2],s[3]);case 5:return new a(s[0],s[1],s[2],s[3],s[4]);case 6:return new a(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new a(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var h=aa(a.prototype),x=a.apply(h,s);return zt(x)?x:h}}function Ax(a,s,h){var x=co(a);function E(){for(var L=arguments.length,B=se(L),G=L,K=la(E);G--;)B[G]=arguments[G];var me=L<3&&B[0]!==K&&B[L-1]!==K?[]:nr(B,K);if(L-=me.length,L<h)return xd(a,s,As,E.placeholder,t,B,me,t,t,h-L);var ve=this&&this!==on&&this instanceof E?x:a;return On(ve,this,B)}return E}function gd(a){return function(s,h,x){var E=Et(s);if(!An(s)){var L=We(h,3);s=en(s),h=function(G){return L(E[G],G,E)}}var B=a(s,h,x);return B>-1?E[L?s[B]:B]:t}}function md(a){return Oi(function(s){var h=s.length,x=h,E=qn.prototype.thru;for(a&&s.reverse();x--;){var L=s[x];if(typeof L!="function")throw new $n(u);if(E&&!B&&Rs(L)=="wrapper")var B=new qn([],!0)}for(x=B?x:h;++x<h;){L=s[x];var G=Rs(L),K=G=="wrapper"?Iu(L):t;K&&zu(K[0])&&K[1]==(I|S|w|T)&&!K[4].length&&K[9]==1?B=B[Rs(K[0])].apply(B,K[3]):B=L.length==1&&zu(L)?B[G]():B.thru(L)}return function(){var me=arguments,ve=me[0];if(B&&me.length==1&&Ke(ve))return B.plant(ve).value();for(var be=0,Ce=h?s[be].apply(this,me):ve;++be<h;)Ce=s[be].call(this,Ce);return Ce}})}function As(a,s,h,x,E,L,B,G,K,me){var ve=s&I,be=s&m,Ce=s&b,Be=s&(S|M),je=s&D,et=Ce?t:co(a);function $e(){for(var ot=arguments.length,ht=se(ot),Bn=ot;Bn--;)ht[Bn]=arguments[Bn];if(Be)var vn=la($e),kn=k0(ht,vn);if(x&&(ht=cd(ht,x,E,Be)),L&&(ht=fd(ht,L,B,Be)),ot-=kn,Be&&ot<me){var Ht=nr(ht,vn);return xd(a,s,As,$e.placeholder,h,ht,Ht,G,K,me-ot)}var oi=be?h:this,Bi=Ce?oi[a]:a;return ot=ht.length,G?ht=qx(ht,G):je&&ot>1&&ht.reverse(),ve&&K<ot&&(ht.length=K),this&&this!==on&&this instanceof $e&&(Bi=et||co(Bi)),Bi.apply(oi,ht)}return $e}function vd(a,s){return function(h,x){return tx(h,a,s(x),{})}}function Cs(a,s){return function(h,x){var E;if(h===t&&x===t)return s;if(h!==t&&(E=h),x!==t){if(E===t)return x;typeof h=="string"||typeof x=="string"?(h=Fn(h),x=Fn(x)):(h=nd(h),x=nd(x)),E=a(h,x)}return E}}function Pu(a){return Oi(function(s){return s=Ot(s,Nn(We())),it(function(h){var x=this;return a(s,function(E){return On(E,x,h)})})})}function Ps(a,s){s=s===t?" ":Fn(s);var h=s.length;if(h<2)return h?wu(s,a):s;var x=wu(s,gs(a/ea(s)));return Qr(s)?sr(ii(x),0,a).join(""):x.slice(0,a)}function Cx(a,s,h,x){var E=s&m,L=co(a);function B(){for(var G=-1,K=arguments.length,me=-1,ve=x.length,be=se(ve+K),Ce=this&&this!==on&&this instanceof B?L:a;++me<ve;)be[me]=x[me];for(;K--;)be[me++]=arguments[++G];return On(Ce,E?h:this,be)}return B}function _d(a){return function(s,h,x){return x&&typeof x!="number"&&mn(s,h,x)&&(h=x=t),s=zi(s),h===t?(h=s,s=0):h=zi(h),x=x===t?s<h?1:-1:zi(x),dx(s,h,x,a)}}function Ls(a){return function(s,h){return typeof s=="string"&&typeof h=="string"||(s=Kn(s),h=Kn(h)),a(s,h)}}function xd(a,s,h,x,E,L,B,G,K,me){var ve=s&S,be=ve?B:t,Ce=ve?t:B,Be=ve?L:t,je=ve?t:L;s|=ve?w:P,s&=~(ve?P:w),s&A||(s&=~(m|b));var et=[a,s,E,Be,be,je,Ce,G,K,me],$e=h.apply(t,et);return zu(a)&&Rd($e,et),$e.placeholder=x,Dd($e,a,s)}function Lu(a){var s=$t[a];return function(h,x){if(h=Kn(h),x=x==null?0:un(Qe(x),292),x&&Dh(h)){var E=(wt(h)+"e").split("e"),L=s(E[0]+"e"+(+E[1]+x));return E=(wt(L)+"e").split("e"),+(E[0]+"e"+(+E[1]-x))}return s(h)}}var Px=ia&&1/as(new ia([,-0]))[1]==ie?function(a){return new ia(a)}:Ju;function yd(a){return function(s){var h=cn(s);return h==Ye?ou(s):h==At?$0(s):B0(s,a(s))}}function Ii(a,s,h,x,E,L,B,G){var K=s&b;if(!K&&typeof a!="function")throw new $n(u);var me=x?x.length:0;if(me||(s&=~(w|P),x=E=t),B=B===t?B:qt(Qe(B),0),G=G===t?G:Qe(G),me-=E?E.length:0,s&P){var ve=x,be=E;x=E=t}var Ce=K?t:Iu(a),Be=[a,s,h,x,E,ve,be,L,B,G];if(Ce&&Wx(Be,Ce),a=Be[0],s=Be[1],h=Be[2],x=Be[3],E=Be[4],G=Be[9]=Be[9]===t?K?0:a.length:qt(Be[9]-me,0),!G&&s&(S|M)&&(s&=~(S|M)),!s||s==m)var je=Tx(a,s,h);else s==S||s==M?je=Ax(a,s,G):(s==w||s==(m|w))&&!E.length?je=Cx(a,s,h,x):je=As.apply(t,Be);var et=Ce?ed:Rd;return Dd(et(je,Be),a,s)}function bd(a,s,h,x){return a===t||ai(a,na[h])&&!Mt.call(x,h)?s:a}function wd(a,s,h,x,E,L){return zt(a)&&zt(s)&&(L.set(s,a),Ms(a,s,t,wd,L),L.delete(s)),a}function Lx(a){return po(a)?t:a}function Md(a,s,h,x,E,L){var B=h&y,G=a.length,K=s.length;if(G!=K&&!(B&&K>G))return!1;var me=L.get(a),ve=L.get(s);if(me&&ve)return me==s&&ve==a;var be=-1,Ce=!0,Be=h&v?new Er:t;for(L.set(a,s),L.set(s,a);++be<G;){var je=a[be],et=s[be];if(x)var $e=B?x(et,je,be,s,a,L):x(je,et,be,a,s,L);if($e!==t){if($e)continue;Ce=!1;break}if(Be){if(!eu(s,function(ot,ht){if(!Qa(Be,ht)&&(je===ot||E(je,ot,h,x,L)))return Be.push(ht)})){Ce=!1;break}}else if(!(je===et||E(je,et,h,x,L))){Ce=!1;break}}return L.delete(a),L.delete(s),Ce}function Rx(a,s,h,x,E,L,B){switch(h){case He:if(a.byteLength!=s.byteLength||a.byteOffset!=s.byteOffset)return!1;a=a.buffer,s=s.buffer;case Ae:return!(a.byteLength!=s.byteLength||!L(new fs(a),new fs(s)));case oe:case ye:case yt:return ai(+a,+s);case Ne:return a.name==s.name&&a.message==s.message;case Jt:case z:return a==s+"";case Ye:var G=ou;case At:var K=x&y;if(G||(G=as),a.size!=s.size&&!K)return!1;var me=B.get(a);if(me)return me==s;x|=v,B.set(a,s);var ve=Md(G(a),G(s),x,E,L,B);return B.delete(a),ve;case R:if(ro)return ro.call(a)==ro.call(s)}return!1}function Dx(a,s,h,x,E,L){var B=h&y,G=Ru(a),K=G.length,me=Ru(s),ve=me.length;if(K!=ve&&!B)return!1;for(var be=K;be--;){var Ce=G[be];if(!(B?Ce in s:Mt.call(s,Ce)))return!1}var Be=L.get(a),je=L.get(s);if(Be&&je)return Be==s&&je==a;var et=!0;L.set(a,s),L.set(s,a);for(var $e=B;++be<K;){Ce=G[be];var ot=a[Ce],ht=s[Ce];if(x)var Bn=B?x(ht,ot,Ce,s,a,L):x(ot,ht,Ce,a,s,L);if(!(Bn===t?ot===ht||E(ot,ht,h,x,L):Bn)){et=!1;break}$e||($e=Ce=="constructor")}if(et&&!$e){var vn=a.constructor,kn=s.constructor;vn!=kn&&"constructor"in a&&"constructor"in s&&!(typeof vn=="function"&&vn instanceof vn&&typeof kn=="function"&&kn instanceof kn)&&(et=!1)}return L.delete(a),L.delete(s),et}function Oi(a){return ku(Pd(a,t,Bd),a+"")}function Ru(a){return Vh(a,en,Nu)}function Du(a){return Vh(a,Cn,Sd)}var Iu=vs?function(a){return vs.get(a)}:Ju;function Rs(a){for(var s=a.name+"",h=ra[s],x=Mt.call(ra,s)?h.length:0;x--;){var E=h[x],L=E.func;if(L==null||L==a)return E.name}return s}function la(a){var s=Mt.call(C,"placeholder")?C:a;return s.placeholder}function We(){var a=C.iteratee||Zu;return a=a===Zu?$h:a,arguments.length?a(arguments[0],arguments[1]):a}function Ds(a,s){var h=a.__data__;return Ux(s)?h[typeof s=="string"?"string":"hash"]:h.map}function Ou(a){for(var s=en(a),h=s.length;h--;){var x=s[h],E=a[x];s[h]=[x,E,Ad(E)]}return s}function Cr(a,s){var h=V0(a,s);return jh(h)?h:t}function Ix(a){var s=Mt.call(a,Mr),h=a[Mr];try{a[Mr]=t;var x=!0}catch{}var E=us.call(a);return x&&(s?a[Mr]=h:delete a[Mr]),E}var Nu=lu?function(a){return a==null?[]:(a=Et(a),er(lu(a),function(s){return Lh.call(a,s)}))}:Qu,Sd=lu?function(a){for(var s=[];a;)tr(s,Nu(a)),a=hs(a);return s}:Qu,cn=gn;(uu&&cn(new uu(new ArrayBuffer(1)))!=He||to&&cn(new to)!=Ye||cu&&cn(cu.resolve())!=St||ia&&cn(new ia)!=At||no&&cn(new no)!=we)&&(cn=function(a){var s=gn(a),h=s==ft?a.constructor:t,x=h?Pr(h):"";if(x)switch(x){case g_:return He;case m_:return Ye;case v_:return St;case __:return At;case x_:return we}return s});function Ox(a,s,h){for(var x=-1,E=h.length;++x<E;){var L=h[x],B=L.size;switch(L.type){case"drop":a+=B;break;case"dropRight":s-=B;break;case"take":s=un(s,a+B);break;case"takeRight":a=qt(a,s-B);break}}return{start:a,end:s}}function Nx(a){var s=a.match(re);return s?s[1].split(de):[]}function Ed(a,s,h){s=or(s,a);for(var x=-1,E=s.length,L=!1;++x<E;){var B=wi(s[x]);if(!(L=a!=null&&h(a,B)))break;a=a[B]}return L||++x!=E?L:(E=a==null?0:a.length,!!E&&ks(E)&&Ni(B,E)&&(Ke(a)||Lr(a)))}function Fx(a){var s=a.length,h=new a.constructor(s);return s&&typeof a[0]=="string"&&Mt.call(a,"index")&&(h.index=a.index,h.input=a.input),h}function Td(a){return typeof a.constructor=="function"&&!fo(a)?aa(hs(a)):{}}function zx(a,s,h){var x=a.constructor;switch(s){case Ae:return Cu(a);case oe:case ye:return new x(+a);case He:return yx(a,h);case k:case te:case Le:case Re:case Pe:case ze:case Fe:case tt:case at:return ld(a,h);case Ye:return new x;case yt:case z:return new x(a);case Jt:return bx(a);case At:return new x;case R:return wx(a)}}function Bx(a,s){var h=s.length;if(!h)return a;var x=h-1;return s[x]=(h>1?"& ":"")+s[x],s=s.join(h>2?", ":" "),a.replace(N,`{
/* [wrapped with `+s+`] */
`)}function kx(a){return Ke(a)||Lr(a)||!!(Rh&&a&&a[Rh])}function Ni(a,s){var h=typeof a;return s=s??ae,!!s&&(h=="number"||h!="symbol"&&kt.test(a))&&a>-1&&a%1==0&&a<s}function mn(a,s,h){if(!zt(h))return!1;var x=typeof s;return(x=="number"?An(h)&&Ni(s,h.length):x=="string"&&s in h)?ai(h[s],a):!1}function Fu(a,s){if(Ke(a))return!1;var h=typeof a;return h=="number"||h=="symbol"||h=="boolean"||a==null||zn(a)?!0:ni.test(a)||!Ct.test(a)||s!=null&&a in Et(s)}function Ux(a){var s=typeof a;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?a!=="__proto__":a===null}function zu(a){var s=Rs(a),h=C[s];if(typeof h!="function"||!(s in ct.prototype))return!1;if(a===h)return!0;var x=Iu(h);return!!x&&a===x[0]}function Gx(a){return!!Ah&&Ah in a}var Hx=ss?Fi:ec;function fo(a){var s=a&&a.constructor,h=typeof s=="function"&&s.prototype||na;return a===h}function Ad(a){return a===a&&!zt(a)}function Cd(a,s){return function(h){return h==null?!1:h[a]===s&&(s!==t||a in Et(h))}}function Vx(a){var s=zs(a,function(x){return h.size===f&&h.clear(),x}),h=s.cache;return s}function Wx(a,s){var h=a[1],x=s[1],E=h|x,L=E<(m|b|I),B=x==I&&h==S||x==I&&h==T&&a[7].length<=s[8]||x==(I|T)&&s[7].length<=s[8]&&h==S;if(!(L||B))return a;x&m&&(a[2]=s[2],E|=h&m?0:A);var G=s[3];if(G){var K=a[3];a[3]=K?cd(K,G,s[4]):G,a[4]=K?nr(a[3],d):s[4]}return G=s[5],G&&(K=a[5],a[5]=K?fd(K,G,s[6]):G,a[6]=K?nr(a[5],d):s[6]),G=s[7],G&&(a[7]=G),x&I&&(a[8]=a[8]==null?s[8]:un(a[8],s[8])),a[9]==null&&(a[9]=s[9]),a[0]=s[0],a[1]=E,a}function jx(a){var s=[];if(a!=null)for(var h in Et(a))s.push(h);return s}function $x(a){return us.call(a)}function Pd(a,s,h){return s=qt(s===t?a.length-1:s,0),function(){for(var x=arguments,E=-1,L=qt(x.length-s,0),B=se(L);++E<L;)B[E]=x[s+E];E=-1;for(var G=se(s+1);++E<s;)G[E]=x[E];return G[s]=h(B),On(a,this,G)}}function Ld(a,s){return s.length<2?a:Ar(a,Yn(s,0,-1))}function qx(a,s){for(var h=a.length,x=un(s.length,h),E=Tn(a);x--;){var L=s[x];a[x]=Ni(L,h)?E[L]:t}return a}function Bu(a,s){if(!(s==="constructor"&&typeof a[s]=="function")&&s!="__proto__")return a[s]}var Rd=Id(ed),ho=l_||function(a,s){return on.setTimeout(a,s)},ku=Id(mx);function Dd(a,s,h){var x=s+"";return ku(a,Bx(x,Xx(Nx(x),h)))}function Id(a){var s=0,h=0;return function(){var x=h_(),E=j-(x-h);if(h=x,E>0){if(++s>=Z)return arguments[0]}else s=0;return a.apply(t,arguments)}}function Is(a,s){var h=-1,x=a.length,E=x-1;for(s=s===t?x:s;++h<s;){var L=bu(h,E),B=a[L];a[L]=a[h],a[h]=B}return a.length=s,a}var Od=Vx(function(a){var s=[];return a.charCodeAt(0)===46&&s.push(""),a.replace(Sn,function(h,x,E,L){s.push(E?L.replace(Ve,"$1"):x||h)}),s});function wi(a){if(typeof a=="string"||zn(a))return a;var s=a+"";return s=="0"&&1/a==-ie?"-0":s}function Pr(a){if(a!=null){try{return ls.call(a)}catch{}try{return a+""}catch{}}return""}function Xx(a,s){return jn(le,function(h){var x="_."+h[0];s&h[1]&&!is(a,x)&&a.push(x)}),a.sort()}function Nd(a){if(a instanceof ct)return a.clone();var s=new qn(a.__wrapped__,a.__chain__);return s.__actions__=Tn(a.__actions__),s.__index__=a.__index__,s.__values__=a.__values__,s}function Yx(a,s,h){(h?mn(a,s,h):s===t)?s=1:s=qt(Qe(s),0);var x=a==null?0:a.length;if(!x||s<1)return[];for(var E=0,L=0,B=se(gs(x/s));E<x;)B[L++]=Yn(a,E,E+=s);return B}function Zx(a){for(var s=-1,h=a==null?0:a.length,x=0,E=[];++s<h;){var L=a[s];L&&(E[x++]=L)}return E}function Kx(){var a=arguments.length;if(!a)return[];for(var s=se(a-1),h=arguments[0],x=a;x--;)s[x-1]=arguments[x];return tr(Ke(h)?Tn(h):[h],sn(s,1))}var Jx=it(function(a,s){return Gt(a)?oo(a,sn(s,1,Gt,!0)):[]}),Qx=it(function(a,s){var h=Zn(s);return Gt(h)&&(h=t),Gt(a)?oo(a,sn(s,1,Gt,!0),We(h,2)):[]}),ey=it(function(a,s){var h=Zn(s);return Gt(h)&&(h=t),Gt(a)?oo(a,sn(s,1,Gt,!0),t,h):[]});function ty(a,s,h){var x=a==null?0:a.length;return x?(s=h||s===t?1:Qe(s),Yn(a,s<0?0:s,x)):[]}function ny(a,s,h){var x=a==null?0:a.length;return x?(s=h||s===t?1:Qe(s),s=x-s,Yn(a,0,s<0?0:s)):[]}function iy(a,s){return a&&a.length?Es(a,We(s,3),!0,!0):[]}function ry(a,s){return a&&a.length?Es(a,We(s,3),!0):[]}function ay(a,s,h,x){var E=a==null?0:a.length;return E?(h&&typeof h!="number"&&mn(a,s,h)&&(h=0,x=E),K_(a,s,h,x)):[]}function Fd(a,s,h){var x=a==null?0:a.length;if(!x)return-1;var E=h==null?0:Qe(h);return E<0&&(E=qt(x+E,0)),rs(a,We(s,3),E)}function zd(a,s,h){var x=a==null?0:a.length;if(!x)return-1;var E=x-1;return h!==t&&(E=Qe(h),E=h<0?qt(x+E,0):un(E,x-1)),rs(a,We(s,3),E,!0)}function Bd(a){var s=a==null?0:a.length;return s?sn(a,1):[]}function oy(a){var s=a==null?0:a.length;return s?sn(a,ie):[]}function sy(a,s){var h=a==null?0:a.length;return h?(s=s===t?1:Qe(s),sn(a,s)):[]}function ly(a){for(var s=-1,h=a==null?0:a.length,x={};++s<h;){var E=a[s];x[E[0]]=E[1]}return x}function kd(a){return a&&a.length?a[0]:t}function uy(a,s,h){var x=a==null?0:a.length;if(!x)return-1;var E=h==null?0:Qe(h);return E<0&&(E=qt(x+E,0)),Jr(a,s,E)}function cy(a){var s=a==null?0:a.length;return s?Yn(a,0,-1):[]}var fy=it(function(a){var s=Ot(a,Tu);return s.length&&s[0]===a[0]?mu(s):[]}),hy=it(function(a){var s=Zn(a),h=Ot(a,Tu);return s===Zn(h)?s=t:h.pop(),h.length&&h[0]===a[0]?mu(h,We(s,2)):[]}),dy=it(function(a){var s=Zn(a),h=Ot(a,Tu);return s=typeof s=="function"?s:t,s&&h.pop(),h.length&&h[0]===a[0]?mu(h,t,s):[]});function py(a,s){return a==null?"":c_.call(a,s)}function Zn(a){var s=a==null?0:a.length;return s?a[s-1]:t}function gy(a,s,h){var x=a==null?0:a.length;if(!x)return-1;var E=x;return h!==t&&(E=Qe(h),E=E<0?qt(x+E,0):un(E,x-1)),s===s?X0(a,s,E):rs(a,xh,E,!0)}function my(a,s){return a&&a.length?Zh(a,Qe(s)):t}var vy=it(Ud);function Ud(a,s){return a&&a.length&&s&&s.length?yu(a,s):a}function _y(a,s,h){return a&&a.length&&s&&s.length?yu(a,s,We(h,2)):a}function xy(a,s,h){return a&&a.length&&s&&s.length?yu(a,s,t,h):a}var yy=Oi(function(a,s){var h=a==null?0:a.length,x=hu(a,s);return Qh(a,Ot(s,function(E){return Ni(E,h)?+E:E}).sort(ud)),x});function by(a,s){var h=[];if(!(a&&a.length))return h;var x=-1,E=[],L=a.length;for(s=We(s,3);++x<L;){var B=a[x];s(B,x,a)&&(h.push(B),E.push(x))}return Qh(a,E),h}function Uu(a){return a==null?a:p_.call(a)}function wy(a,s,h){var x=a==null?0:a.length;return x?(h&&typeof h!="number"&&mn(a,s,h)?(s=0,h=x):(s=s==null?0:Qe(s),h=h===t?x:Qe(h)),Yn(a,s,h)):[]}function My(a,s){return Ss(a,s)}function Sy(a,s,h){return Mu(a,s,We(h,2))}function Ey(a,s){var h=a==null?0:a.length;if(h){var x=Ss(a,s);if(x<h&&ai(a[x],s))return x}return-1}function Ty(a,s){return Ss(a,s,!0)}function Ay(a,s,h){return Mu(a,s,We(h,2),!0)}function Cy(a,s){var h=a==null?0:a.length;if(h){var x=Ss(a,s,!0)-1;if(ai(a[x],s))return x}return-1}function Py(a){return a&&a.length?td(a):[]}function Ly(a,s){return a&&a.length?td(a,We(s,2)):[]}function Ry(a){var s=a==null?0:a.length;return s?Yn(a,1,s):[]}function Dy(a,s,h){return a&&a.length?(s=h||s===t?1:Qe(s),Yn(a,0,s<0?0:s)):[]}function Iy(a,s,h){var x=a==null?0:a.length;return x?(s=h||s===t?1:Qe(s),s=x-s,Yn(a,s<0?0:s,x)):[]}function Oy(a,s){return a&&a.length?Es(a,We(s,3),!1,!0):[]}function Ny(a,s){return a&&a.length?Es(a,We(s,3)):[]}var Fy=it(function(a){return ar(sn(a,1,Gt,!0))}),zy=it(function(a){var s=Zn(a);return Gt(s)&&(s=t),ar(sn(a,1,Gt,!0),We(s,2))}),By=it(function(a){var s=Zn(a);return s=typeof s=="function"?s:t,ar(sn(a,1,Gt,!0),t,s)});function ky(a){return a&&a.length?ar(a):[]}function Uy(a,s){return a&&a.length?ar(a,We(s,2)):[]}function Gy(a,s){return s=typeof s=="function"?s:t,a&&a.length?ar(a,t,s):[]}function Gu(a){if(!(a&&a.length))return[];var s=0;return a=er(a,function(h){if(Gt(h))return s=qt(h.length,s),!0}),ru(s,function(h){return Ot(a,tu(h))})}function Gd(a,s){if(!(a&&a.length))return[];var h=Gu(a);return s==null?h:Ot(h,function(x){return On(s,t,x)})}var Hy=it(function(a,s){return Gt(a)?oo(a,s):[]}),Vy=it(function(a){return Eu(er(a,Gt))}),Wy=it(function(a){var s=Zn(a);return Gt(s)&&(s=t),Eu(er(a,Gt),We(s,2))}),jy=it(function(a){var s=Zn(a);return s=typeof s=="function"?s:t,Eu(er(a,Gt),t,s)}),$y=it(Gu);function qy(a,s){return ad(a||[],s||[],ao)}function Xy(a,s){return ad(a||[],s||[],uo)}var Yy=it(function(a){var s=a.length,h=s>1?a[s-1]:t;return h=typeof h=="function"?(a.pop(),h):t,Gd(a,h)});function Hd(a){var s=C(a);return s.__chain__=!0,s}function Zy(a,s){return s(a),a}function Os(a,s){return s(a)}var Ky=Oi(function(a){var s=a.length,h=s?a[0]:0,x=this.__wrapped__,E=function(L){return hu(L,a)};return s>1||this.__actions__.length||!(x instanceof ct)||!Ni(h)?this.thru(E):(x=x.slice(h,+h+(s?1:0)),x.__actions__.push({func:Os,args:[E],thisArg:t}),new qn(x,this.__chain__).thru(function(L){return s&&!L.length&&L.push(t),L}))});function Jy(){return Hd(this)}function Qy(){return new qn(this.value(),this.__chain__)}function eb(){this.__values__===t&&(this.__values__=np(this.value()));var a=this.__index__>=this.__values__.length,s=a?t:this.__values__[this.__index__++];return{done:a,value:s}}function tb(){return this}function nb(a){for(var s,h=this;h instanceof xs;){var x=Nd(h);x.__index__=0,x.__values__=t,s?E.__wrapped__=x:s=x;var E=x;h=h.__wrapped__}return E.__wrapped__=a,s}function ib(){var a=this.__wrapped__;if(a instanceof ct){var s=a;return this.__actions__.length&&(s=new ct(this)),s=s.reverse(),s.__actions__.push({func:Os,args:[Uu],thisArg:t}),new qn(s,this.__chain__)}return this.thru(Uu)}function rb(){return rd(this.__wrapped__,this.__actions__)}var ab=Ts(function(a,s,h){Mt.call(a,h)?++a[h]:Di(a,h,1)});function ob(a,s,h){var x=Ke(a)?vh:Z_;return h&&mn(a,s,h)&&(s=t),x(a,We(s,3))}function sb(a,s){var h=Ke(a)?er:Gh;return h(a,We(s,3))}var lb=gd(Fd),ub=gd(zd);function cb(a,s){return sn(Ns(a,s),1)}function fb(a,s){return sn(Ns(a,s),ie)}function hb(a,s,h){return h=h===t?1:Qe(h),sn(Ns(a,s),h)}function Vd(a,s){var h=Ke(a)?jn:rr;return h(a,We(s,3))}function Wd(a,s){var h=Ke(a)?R0:Uh;return h(a,We(s,3))}var db=Ts(function(a,s,h){Mt.call(a,h)?a[h].push(s):Di(a,h,[s])});function pb(a,s,h,x){a=An(a)?a:ca(a),h=h&&!x?Qe(h):0;var E=a.length;return h<0&&(h=qt(E+h,0)),Us(a)?h<=E&&a.indexOf(s,h)>-1:!!E&&Jr(a,s,h)>-1}var gb=it(function(a,s,h){var x=-1,E=typeof s=="function",L=An(a)?se(a.length):[];return rr(a,function(B){L[++x]=E?On(s,B,h):so(B,s,h)}),L}),mb=Ts(function(a,s,h){Di(a,h,s)});function Ns(a,s){var h=Ke(a)?Ot:qh;return h(a,We(s,3))}function vb(a,s,h,x){return a==null?[]:(Ke(s)||(s=s==null?[]:[s]),h=x?t:h,Ke(h)||(h=h==null?[]:[h]),Kh(a,s,h))}var _b=Ts(function(a,s,h){a[h?0:1].push(s)},function(){return[[],[]]});function xb(a,s,h){var x=Ke(a)?Ql:bh,E=arguments.length<3;return x(a,We(s,4),h,E,rr)}function yb(a,s,h){var x=Ke(a)?D0:bh,E=arguments.length<3;return x(a,We(s,4),h,E,Uh)}function bb(a,s){var h=Ke(a)?er:Gh;return h(a,Bs(We(s,3)))}function wb(a){var s=Ke(a)?Fh:px;return s(a)}function Mb(a,s,h){(h?mn(a,s,h):s===t)?s=1:s=Qe(s);var x=Ke(a)?j_:gx;return x(a,s)}function Sb(a){var s=Ke(a)?$_:vx;return s(a)}function Eb(a){if(a==null)return 0;if(An(a))return Us(a)?ea(a):a.length;var s=cn(a);return s==Ye||s==At?a.size:_u(a).length}function Tb(a,s,h){var x=Ke(a)?eu:_x;return h&&mn(a,s,h)&&(s=t),x(a,We(s,3))}var Ab=it(function(a,s){if(a==null)return[];var h=s.length;return h>1&&mn(a,s[0],s[1])?s=[]:h>2&&mn(s[0],s[1],s[2])&&(s=[s[0]]),Kh(a,sn(s,1),[])}),Fs=s_||function(){return on.Date.now()};function Cb(a,s){if(typeof s!="function")throw new $n(u);return a=Qe(a),function(){if(--a<1)return s.apply(this,arguments)}}function jd(a,s,h){return s=h?t:s,s=a&&s==null?a.length:s,Ii(a,I,t,t,t,t,s)}function $d(a,s){var h;if(typeof s!="function")throw new $n(u);return a=Qe(a),function(){return--a>0&&(h=s.apply(this,arguments)),a<=1&&(s=t),h}}var Hu=it(function(a,s,h){var x=m;if(h.length){var E=nr(h,la(Hu));x|=w}return Ii(a,x,s,h,E)}),qd=it(function(a,s,h){var x=m|b;if(h.length){var E=nr(h,la(qd));x|=w}return Ii(s,x,a,h,E)});function Xd(a,s,h){s=h?t:s;var x=Ii(a,S,t,t,t,t,t,s);return x.placeholder=Xd.placeholder,x}function Yd(a,s,h){s=h?t:s;var x=Ii(a,M,t,t,t,t,t,s);return x.placeholder=Yd.placeholder,x}function Zd(a,s,h){var x,E,L,B,G,K,me=0,ve=!1,be=!1,Ce=!0;if(typeof a!="function")throw new $n(u);s=Kn(s)||0,zt(h)&&(ve=!!h.leading,be="maxWait"in h,L=be?qt(Kn(h.maxWait)||0,s):L,Ce="trailing"in h?!!h.trailing:Ce);function Be(Ht){var oi=x,Bi=E;return x=E=t,me=Ht,B=a.apply(Bi,oi),B}function je(Ht){return me=Ht,G=ho(ot,s),ve?Be(Ht):B}function et(Ht){var oi=Ht-K,Bi=Ht-me,gp=s-oi;return be?un(gp,L-Bi):gp}function $e(Ht){var oi=Ht-K,Bi=Ht-me;return K===t||oi>=s||oi<0||be&&Bi>=L}function ot(){var Ht=Fs();if($e(Ht))return ht(Ht);G=ho(ot,et(Ht))}function ht(Ht){return G=t,Ce&&x?Be(Ht):(x=E=t,B)}function Bn(){G!==t&&od(G),me=0,x=K=E=G=t}function vn(){return G===t?B:ht(Fs())}function kn(){var Ht=Fs(),oi=$e(Ht);if(x=arguments,E=this,K=Ht,oi){if(G===t)return je(K);if(be)return od(G),G=ho(ot,s),Be(K)}return G===t&&(G=ho(ot,s)),B}return kn.cancel=Bn,kn.flush=vn,kn}var Pb=it(function(a,s){return kh(a,1,s)}),Lb=it(function(a,s,h){return kh(a,Kn(s)||0,h)});function Rb(a){return Ii(a,D)}function zs(a,s){if(typeof a!="function"||s!=null&&typeof s!="function")throw new $n(u);var h=function(){var x=arguments,E=s?s.apply(this,x):x[0],L=h.cache;if(L.has(E))return L.get(E);var B=a.apply(this,x);return h.cache=L.set(E,B)||L,B};return h.cache=new(zs.Cache||Ri),h}zs.Cache=Ri;function Bs(a){if(typeof a!="function")throw new $n(u);return function(){var s=arguments;switch(s.length){case 0:return!a.call(this);case 1:return!a.call(this,s[0]);case 2:return!a.call(this,s[0],s[1]);case 3:return!a.call(this,s[0],s[1],s[2])}return!a.apply(this,s)}}function Db(a){return $d(2,a)}var Ib=xx(function(a,s){s=s.length==1&&Ke(s[0])?Ot(s[0],Nn(We())):Ot(sn(s,1),Nn(We()));var h=s.length;return it(function(x){for(var E=-1,L=un(x.length,h);++E<L;)x[E]=s[E].call(this,x[E]);return On(a,this,x)})}),Vu=it(function(a,s){var h=nr(s,la(Vu));return Ii(a,w,t,s,h)}),Kd=it(function(a,s){var h=nr(s,la(Kd));return Ii(a,P,t,s,h)}),Ob=Oi(function(a,s){return Ii(a,T,t,t,t,s)});function Nb(a,s){if(typeof a!="function")throw new $n(u);return s=s===t?s:Qe(s),it(a,s)}function Fb(a,s){if(typeof a!="function")throw new $n(u);return s=s==null?0:qt(Qe(s),0),it(function(h){var x=h[s],E=sr(h,0,s);return x&&tr(E,x),On(a,this,E)})}function zb(a,s,h){var x=!0,E=!0;if(typeof a!="function")throw new $n(u);return zt(h)&&(x="leading"in h?!!h.leading:x,E="trailing"in h?!!h.trailing:E),Zd(a,s,{leading:x,maxWait:s,trailing:E})}function Bb(a){return jd(a,1)}function kb(a,s){return Vu(Au(s),a)}function Ub(){if(!arguments.length)return[];var a=arguments[0];return Ke(a)?a:[a]}function Gb(a){return Xn(a,_)}function Hb(a,s){return s=typeof s=="function"?s:t,Xn(a,_,s)}function Vb(a){return Xn(a,p|_)}function Wb(a,s){return s=typeof s=="function"?s:t,Xn(a,p|_,s)}function jb(a,s){return s==null||Bh(a,s,en(s))}function ai(a,s){return a===s||a!==a&&s!==s}var $b=Ls(gu),qb=Ls(function(a,s){return a>=s}),Lr=Wh(function(){return arguments}())?Wh:function(a){return Ut(a)&&Mt.call(a,"callee")&&!Lh.call(a,"callee")},Ke=se.isArray,Xb=fh?Nn(fh):nx;function An(a){return a!=null&&ks(a.length)&&!Fi(a)}function Gt(a){return Ut(a)&&An(a)}function Yb(a){return a===!0||a===!1||Ut(a)&&gn(a)==oe}var lr=u_||ec,Zb=hh?Nn(hh):ix;function Kb(a){return Ut(a)&&a.nodeType===1&&!po(a)}function Jb(a){if(a==null)return!0;if(An(a)&&(Ke(a)||typeof a=="string"||typeof a.splice=="function"||lr(a)||ua(a)||Lr(a)))return!a.length;var s=cn(a);if(s==Ye||s==At)return!a.size;if(fo(a))return!_u(a).length;for(var h in a)if(Mt.call(a,h))return!1;return!0}function Qb(a,s){return lo(a,s)}function e1(a,s,h){h=typeof h=="function"?h:t;var x=h?h(a,s):t;return x===t?lo(a,s,t,h):!!x}function Wu(a){if(!Ut(a))return!1;var s=gn(a);return s==Ne||s==xe||typeof a.message=="string"&&typeof a.name=="string"&&!po(a)}function t1(a){return typeof a=="number"&&Dh(a)}function Fi(a){if(!zt(a))return!1;var s=gn(a);return s==Ie||s==ke||s==q||s==pt}function Jd(a){return typeof a=="number"&&a==Qe(a)}function ks(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=ae}function zt(a){var s=typeof a;return a!=null&&(s=="object"||s=="function")}function Ut(a){return a!=null&&typeof a=="object"}var Qd=dh?Nn(dh):ax;function n1(a,s){return a===s||vu(a,s,Ou(s))}function i1(a,s,h){return h=typeof h=="function"?h:t,vu(a,s,Ou(s),h)}function r1(a){return ep(a)&&a!=+a}function a1(a){if(Hx(a))throw new Ze(o);return jh(a)}function o1(a){return a===null}function s1(a){return a==null}function ep(a){return typeof a=="number"||Ut(a)&&gn(a)==yt}function po(a){if(!Ut(a)||gn(a)!=ft)return!1;var s=hs(a);if(s===null)return!0;var h=Mt.call(s,"constructor")&&s.constructor;return typeof h=="function"&&h instanceof h&&ls.call(h)==i_}var ju=ph?Nn(ph):ox;function l1(a){return Jd(a)&&a>=-ae&&a<=ae}var tp=gh?Nn(gh):sx;function Us(a){return typeof a=="string"||!Ke(a)&&Ut(a)&&gn(a)==z}function zn(a){return typeof a=="symbol"||Ut(a)&&gn(a)==R}var ua=mh?Nn(mh):lx;function u1(a){return a===t}function c1(a){return Ut(a)&&cn(a)==we}function f1(a){return Ut(a)&&gn(a)==Se}var h1=Ls(xu),d1=Ls(function(a,s){return a<=s});function np(a){if(!a)return[];if(An(a))return Us(a)?ii(a):Tn(a);if(eo&&a[eo])return j0(a[eo]());var s=cn(a),h=s==Ye?ou:s==At?as:ca;return h(a)}function zi(a){if(!a)return a===0?a:0;if(a=Kn(a),a===ie||a===-ie){var s=a<0?-1:1;return s*_e}return a===a?a:0}function Qe(a){var s=zi(a),h=s%1;return s===s?h?s-h:s:0}function ip(a){return a?Tr(Qe(a),0,pe):0}function Kn(a){if(typeof a=="number")return a;if(zn(a))return J;if(zt(a)){var s=typeof a.valueOf=="function"?a.valueOf():a;a=zt(s)?s+"":s}if(typeof a!="string")return a===0?a:+a;a=wh(a);var h=dt.test(a);return h||lt.test(a)?C0(a.slice(2),h?2:8):nt.test(a)?J:+a}function rp(a){return bi(a,Cn(a))}function p1(a){return a?Tr(Qe(a),-ae,ae):a===0?a:0}function wt(a){return a==null?"":Fn(a)}var g1=oa(function(a,s){if(fo(s)||An(s)){bi(s,en(s),a);return}for(var h in s)Mt.call(s,h)&&ao(a,h,s[h])}),ap=oa(function(a,s){bi(s,Cn(s),a)}),Gs=oa(function(a,s,h,x){bi(s,Cn(s),a,x)}),m1=oa(function(a,s,h,x){bi(s,en(s),a,x)}),v1=Oi(hu);function _1(a,s){var h=aa(a);return s==null?h:zh(h,s)}var x1=it(function(a,s){a=Et(a);var h=-1,x=s.length,E=x>2?s[2]:t;for(E&&mn(s[0],s[1],E)&&(x=1);++h<x;)for(var L=s[h],B=Cn(L),G=-1,K=B.length;++G<K;){var me=B[G],ve=a[me];(ve===t||ai(ve,na[me])&&!Mt.call(a,me))&&(a[me]=L[me])}return a}),y1=it(function(a){return a.push(t,wd),On(op,t,a)});function b1(a,s){return _h(a,We(s,3),yi)}function w1(a,s){return _h(a,We(s,3),pu)}function M1(a,s){return a==null?a:du(a,We(s,3),Cn)}function S1(a,s){return a==null?a:Hh(a,We(s,3),Cn)}function E1(a,s){return a&&yi(a,We(s,3))}function T1(a,s){return a&&pu(a,We(s,3))}function A1(a){return a==null?[]:ws(a,en(a))}function C1(a){return a==null?[]:ws(a,Cn(a))}function $u(a,s,h){var x=a==null?t:Ar(a,s);return x===t?h:x}function P1(a,s){return a!=null&&Ed(a,s,J_)}function qu(a,s){return a!=null&&Ed(a,s,Q_)}var L1=vd(function(a,s,h){s!=null&&typeof s.toString!="function"&&(s=us.call(s)),a[s]=h},Yu(Pn)),R1=vd(function(a,s,h){s!=null&&typeof s.toString!="function"&&(s=us.call(s)),Mt.call(a,s)?a[s].push(h):a[s]=[h]},We),D1=it(so);function en(a){return An(a)?Nh(a):_u(a)}function Cn(a){return An(a)?Nh(a,!0):ux(a)}function I1(a,s){var h={};return s=We(s,3),yi(a,function(x,E,L){Di(h,s(x,E,L),x)}),h}function O1(a,s){var h={};return s=We(s,3),yi(a,function(x,E,L){Di(h,E,s(x,E,L))}),h}var N1=oa(function(a,s,h){Ms(a,s,h)}),op=oa(function(a,s,h,x){Ms(a,s,h,x)}),F1=Oi(function(a,s){var h={};if(a==null)return h;var x=!1;s=Ot(s,function(L){return L=or(L,a),x||(x=L.length>1),L}),bi(a,Du(a),h),x&&(h=Xn(h,p|g|_,Lx));for(var E=s.length;E--;)Su(h,s[E]);return h});function z1(a,s){return sp(a,Bs(We(s)))}var B1=Oi(function(a,s){return a==null?{}:fx(a,s)});function sp(a,s){if(a==null)return{};var h=Ot(Du(a),function(x){return[x]});return s=We(s),Jh(a,h,function(x,E){return s(x,E[0])})}function k1(a,s,h){s=or(s,a);var x=-1,E=s.length;for(E||(E=1,a=t);++x<E;){var L=a==null?t:a[wi(s[x])];L===t&&(x=E,L=h),a=Fi(L)?L.call(a):L}return a}function U1(a,s,h){return a==null?a:uo(a,s,h)}function G1(a,s,h,x){return x=typeof x=="function"?x:t,a==null?a:uo(a,s,h,x)}var lp=yd(en),up=yd(Cn);function H1(a,s,h){var x=Ke(a),E=x||lr(a)||ua(a);if(s=We(s,4),h==null){var L=a&&a.constructor;E?h=x?new L:[]:zt(a)?h=Fi(L)?aa(hs(a)):{}:h={}}return(E?jn:yi)(a,function(B,G,K){return s(h,B,G,K)}),h}function V1(a,s){return a==null?!0:Su(a,s)}function W1(a,s,h){return a==null?a:id(a,s,Au(h))}function j1(a,s,h,x){return x=typeof x=="function"?x:t,a==null?a:id(a,s,Au(h),x)}function ca(a){return a==null?[]:au(a,en(a))}function $1(a){return a==null?[]:au(a,Cn(a))}function q1(a,s,h){return h===t&&(h=s,s=t),h!==t&&(h=Kn(h),h=h===h?h:0),s!==t&&(s=Kn(s),s=s===s?s:0),Tr(Kn(a),s,h)}function X1(a,s,h){return s=zi(s),h===t?(h=s,s=0):h=zi(h),a=Kn(a),ex(a,s,h)}function Y1(a,s,h){if(h&&typeof h!="boolean"&&mn(a,s,h)&&(s=h=t),h===t&&(typeof s=="boolean"?(h=s,s=t):typeof a=="boolean"&&(h=a,a=t)),a===t&&s===t?(a=0,s=1):(a=zi(a),s===t?(s=a,a=0):s=zi(s)),a>s){var x=a;a=s,s=x}if(h||a%1||s%1){var E=Ih();return un(a+E*(s-a+A0("1e-"+((E+"").length-1))),s)}return bu(a,s)}var Z1=sa(function(a,s,h){return s=s.toLowerCase(),a+(h?cp(s):s)});function cp(a){return Xu(wt(a).toLowerCase())}function fp(a){return a=wt(a),a&&a.replace(pn,U0).replace(v0,"")}function K1(a,s,h){a=wt(a),s=Fn(s);var x=a.length;h=h===t?x:Tr(Qe(h),0,x);var E=h;return h-=s.length,h>=0&&a.slice(h,E)==s}function J1(a){return a=wt(a),a&&gt.test(a)?a.replace(De,G0):a}function Q1(a){return a=wt(a),a&&Wl.test(a)?a.replace(Xr,"\\$&"):a}var ew=sa(function(a,s,h){return a+(h?"-":"")+s.toLowerCase()}),tw=sa(function(a,s,h){return a+(h?" ":"")+s.toLowerCase()}),nw=pd("toLowerCase");function iw(a,s,h){a=wt(a),s=Qe(s);var x=s?ea(a):0;if(!s||x>=s)return a;var E=(s-x)/2;return Ps(ms(E),h)+a+Ps(gs(E),h)}function rw(a,s,h){a=wt(a),s=Qe(s);var x=s?ea(a):0;return s&&x<s?a+Ps(s-x,h):a}function aw(a,s,h){a=wt(a),s=Qe(s);var x=s?ea(a):0;return s&&x<s?Ps(s-x,h)+a:a}function ow(a,s,h){return h||s==null?s=0:s&&(s=+s),d_(wt(a).replace(Xa,""),s||0)}function sw(a,s,h){return(h?mn(a,s,h):s===t)?s=1:s=Qe(s),wu(wt(a),s)}function lw(){var a=arguments,s=wt(a[0]);return a.length<3?s:s.replace(a[1],a[2])}var uw=sa(function(a,s,h){return a+(h?"_":"")+s.toLowerCase()});function cw(a,s,h){return h&&typeof h!="number"&&mn(a,s,h)&&(s=h=t),h=h===t?pe:h>>>0,h?(a=wt(a),a&&(typeof s=="string"||s!=null&&!ju(s))&&(s=Fn(s),!s&&Qr(a))?sr(ii(a),0,h):a.split(s,h)):[]}var fw=sa(function(a,s,h){return a+(h?" ":"")+Xu(s)});function hw(a,s,h){return a=wt(a),h=h==null?0:Tr(Qe(h),0,a.length),s=Fn(s),a.slice(h,h+s.length)==s}function dw(a,s,h){var x=C.templateSettings;h&&mn(a,s,h)&&(s=t),a=wt(a),s=Gs({},s,x,bd);var E=Gs({},s.imports,x.imports,bd),L=en(E),B=au(E,L),G,K,me=0,ve=s.interpolate||En,be="__p += '",Ce=su((s.escape||En).source+"|"+ve.source+"|"+(ve===_i?Xe:En).source+"|"+(s.evaluate||En).source+"|$","g"),Be="//# sourceURL="+(Mt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++w0+"]")+`
`;a.replace(Ce,function($e,ot,ht,Bn,vn,kn){return ht||(ht=Bn),be+=a.slice(me,kn).replace(Ci,H0),ot&&(G=!0,be+=`' +
__e(`+ot+`) +
'`),vn&&(K=!0,be+=`';
`+vn+`;
__p += '`),ht&&(be+=`' +
((__t = (`+ht+`)) == null ? '' : __t) +
'`),me=kn+$e.length,$e}),be+=`';
`;var je=Mt.call(s,"variable")&&s.variable;if(!je)be=`with (obj) {
`+be+`
}
`;else if(ge.test(je))throw new Ze(l);be=(K?be.replace(bt,""):be).replace(Y,"$1").replace(he,"$1;"),be="function("+(je||"obj")+`) {
`+(je?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(K?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+be+`return __p
}`;var et=dp(function(){return _t(L,Be+"return "+be).apply(t,B)});if(et.source=be,Wu(et))throw et;return et}function pw(a){return wt(a).toLowerCase()}function gw(a){return wt(a).toUpperCase()}function mw(a,s,h){if(a=wt(a),a&&(h||s===t))return wh(a);if(!a||!(s=Fn(s)))return a;var x=ii(a),E=ii(s),L=Mh(x,E),B=Sh(x,E)+1;return sr(x,L,B).join("")}function vw(a,s,h){if(a=wt(a),a&&(h||s===t))return a.slice(0,Th(a)+1);if(!a||!(s=Fn(s)))return a;var x=ii(a),E=Sh(x,ii(s))+1;return sr(x,0,E).join("")}function _w(a,s,h){if(a=wt(a),a&&(h||s===t))return a.replace(Xa,"");if(!a||!(s=Fn(s)))return a;var x=ii(a),E=Mh(x,ii(s));return sr(x,E).join("")}function xw(a,s){var h=U,x=ee;if(zt(s)){var E="separator"in s?s.separator:E;h="length"in s?Qe(s.length):h,x="omission"in s?Fn(s.omission):x}a=wt(a);var L=a.length;if(Qr(a)){var B=ii(a);L=B.length}if(h>=L)return a;var G=h-ea(x);if(G<1)return x;var K=B?sr(B,0,G).join(""):a.slice(0,G);if(E===t)return K+x;if(B&&(G+=K.length-G),ju(E)){if(a.slice(G).search(E)){var me,ve=K;for(E.global||(E=su(E.source,wt(Je.exec(E))+"g")),E.lastIndex=0;me=E.exec(ve);)var be=me.index;K=K.slice(0,be===t?G:be)}}else if(a.indexOf(Fn(E),G)!=G){var Ce=K.lastIndexOf(E);Ce>-1&&(K=K.slice(0,Ce))}return K+x}function yw(a){return a=wt(a),a&&Ge.test(a)?a.replace(Me,Y0):a}var bw=sa(function(a,s,h){return a+(h?" ":"")+s.toUpperCase()}),Xu=pd("toUpperCase");function hp(a,s,h){return a=wt(a),s=h?t:s,s===t?W0(a)?J0(a):N0(a):a.match(s)||[]}var dp=it(function(a,s){try{return On(a,t,s)}catch(h){return Wu(h)?h:new Ze(h)}}),ww=Oi(function(a,s){return jn(s,function(h){h=wi(h),Di(a,h,Hu(a[h],a))}),a});function Mw(a){var s=a==null?0:a.length,h=We();return a=s?Ot(a,function(x){if(typeof x[1]!="function")throw new $n(u);return[h(x[0]),x[1]]}):[],it(function(x){for(var E=-1;++E<s;){var L=a[E];if(On(L[0],this,x))return On(L[1],this,x)}})}function Sw(a){return Y_(Xn(a,p))}function Yu(a){return function(){return a}}function Ew(a,s){return a==null||a!==a?s:a}var Tw=md(),Aw=md(!0);function Pn(a){return a}function Zu(a){return $h(typeof a=="function"?a:Xn(a,p))}function Cw(a){return Xh(Xn(a,p))}function Pw(a,s){return Yh(a,Xn(s,p))}var Lw=it(function(a,s){return function(h){return so(h,a,s)}}),Rw=it(function(a,s){return function(h){return so(a,h,s)}});function Ku(a,s,h){var x=en(s),E=ws(s,x);h==null&&!(zt(s)&&(E.length||!x.length))&&(h=s,s=a,a=this,E=ws(s,en(s)));var L=!(zt(h)&&"chain"in h)||!!h.chain,B=Fi(a);return jn(E,function(G){var K=s[G];a[G]=K,B&&(a.prototype[G]=function(){var me=this.__chain__;if(L||me){var ve=a(this.__wrapped__),be=ve.__actions__=Tn(this.__actions__);return be.push({func:K,args:arguments,thisArg:a}),ve.__chain__=me,ve}return K.apply(a,tr([this.value()],arguments))})}),a}function Dw(){return on._===this&&(on._=r_),this}function Ju(){}function Iw(a){return a=Qe(a),it(function(s){return Zh(s,a)})}var Ow=Pu(Ot),Nw=Pu(vh),Fw=Pu(eu);function pp(a){return Fu(a)?tu(wi(a)):hx(a)}function zw(a){return function(s){return a==null?t:Ar(a,s)}}var Bw=_d(),kw=_d(!0);function Qu(){return[]}function ec(){return!1}function Uw(){return{}}function Gw(){return""}function Hw(){return!0}function Vw(a,s){if(a=Qe(a),a<1||a>ae)return[];var h=pe,x=un(a,pe);s=We(s),a-=pe;for(var E=ru(x,s);++h<a;)s(h);return E}function Ww(a){return Ke(a)?Ot(a,wi):zn(a)?[a]:Tn(Od(wt(a)))}function jw(a){var s=++n_;return wt(a)+s}var $w=Cs(function(a,s){return a+s},0),qw=Lu("ceil"),Xw=Cs(function(a,s){return a/s},1),Yw=Lu("floor");function Zw(a){return a&&a.length?bs(a,Pn,gu):t}function Kw(a,s){return a&&a.length?bs(a,We(s,2),gu):t}function Jw(a){return yh(a,Pn)}function Qw(a,s){return yh(a,We(s,2))}function eM(a){return a&&a.length?bs(a,Pn,xu):t}function tM(a,s){return a&&a.length?bs(a,We(s,2),xu):t}var nM=Cs(function(a,s){return a*s},1),iM=Lu("round"),rM=Cs(function(a,s){return a-s},0);function aM(a){return a&&a.length?iu(a,Pn):0}function oM(a,s){return a&&a.length?iu(a,We(s,2)):0}return C.after=Cb,C.ary=jd,C.assign=g1,C.assignIn=ap,C.assignInWith=Gs,C.assignWith=m1,C.at=v1,C.before=$d,C.bind=Hu,C.bindAll=ww,C.bindKey=qd,C.castArray=Ub,C.chain=Hd,C.chunk=Yx,C.compact=Zx,C.concat=Kx,C.cond=Mw,C.conforms=Sw,C.constant=Yu,C.countBy=ab,C.create=_1,C.curry=Xd,C.curryRight=Yd,C.debounce=Zd,C.defaults=x1,C.defaultsDeep=y1,C.defer=Pb,C.delay=Lb,C.difference=Jx,C.differenceBy=Qx,C.differenceWith=ey,C.drop=ty,C.dropRight=ny,C.dropRightWhile=iy,C.dropWhile=ry,C.fill=ay,C.filter=sb,C.flatMap=cb,C.flatMapDeep=fb,C.flatMapDepth=hb,C.flatten=Bd,C.flattenDeep=oy,C.flattenDepth=sy,C.flip=Rb,C.flow=Tw,C.flowRight=Aw,C.fromPairs=ly,C.functions=A1,C.functionsIn=C1,C.groupBy=db,C.initial=cy,C.intersection=fy,C.intersectionBy=hy,C.intersectionWith=dy,C.invert=L1,C.invertBy=R1,C.invokeMap=gb,C.iteratee=Zu,C.keyBy=mb,C.keys=en,C.keysIn=Cn,C.map=Ns,C.mapKeys=I1,C.mapValues=O1,C.matches=Cw,C.matchesProperty=Pw,C.memoize=zs,C.merge=N1,C.mergeWith=op,C.method=Lw,C.methodOf=Rw,C.mixin=Ku,C.negate=Bs,C.nthArg=Iw,C.omit=F1,C.omitBy=z1,C.once=Db,C.orderBy=vb,C.over=Ow,C.overArgs=Ib,C.overEvery=Nw,C.overSome=Fw,C.partial=Vu,C.partialRight=Kd,C.partition=_b,C.pick=B1,C.pickBy=sp,C.property=pp,C.propertyOf=zw,C.pull=vy,C.pullAll=Ud,C.pullAllBy=_y,C.pullAllWith=xy,C.pullAt=yy,C.range=Bw,C.rangeRight=kw,C.rearg=Ob,C.reject=bb,C.remove=by,C.rest=Nb,C.reverse=Uu,C.sampleSize=Mb,C.set=U1,C.setWith=G1,C.shuffle=Sb,C.slice=wy,C.sortBy=Ab,C.sortedUniq=Py,C.sortedUniqBy=Ly,C.split=cw,C.spread=Fb,C.tail=Ry,C.take=Dy,C.takeRight=Iy,C.takeRightWhile=Oy,C.takeWhile=Ny,C.tap=Zy,C.throttle=zb,C.thru=Os,C.toArray=np,C.toPairs=lp,C.toPairsIn=up,C.toPath=Ww,C.toPlainObject=rp,C.transform=H1,C.unary=Bb,C.union=Fy,C.unionBy=zy,C.unionWith=By,C.uniq=ky,C.uniqBy=Uy,C.uniqWith=Gy,C.unset=V1,C.unzip=Gu,C.unzipWith=Gd,C.update=W1,C.updateWith=j1,C.values=ca,C.valuesIn=$1,C.without=Hy,C.words=hp,C.wrap=kb,C.xor=Vy,C.xorBy=Wy,C.xorWith=jy,C.zip=$y,C.zipObject=qy,C.zipObjectDeep=Xy,C.zipWith=Yy,C.entries=lp,C.entriesIn=up,C.extend=ap,C.extendWith=Gs,Ku(C,C),C.add=$w,C.attempt=dp,C.camelCase=Z1,C.capitalize=cp,C.ceil=qw,C.clamp=q1,C.clone=Gb,C.cloneDeep=Vb,C.cloneDeepWith=Wb,C.cloneWith=Hb,C.conformsTo=jb,C.deburr=fp,C.defaultTo=Ew,C.divide=Xw,C.endsWith=K1,C.eq=ai,C.escape=J1,C.escapeRegExp=Q1,C.every=ob,C.find=lb,C.findIndex=Fd,C.findKey=b1,C.findLast=ub,C.findLastIndex=zd,C.findLastKey=w1,C.floor=Yw,C.forEach=Vd,C.forEachRight=Wd,C.forIn=M1,C.forInRight=S1,C.forOwn=E1,C.forOwnRight=T1,C.get=$u,C.gt=$b,C.gte=qb,C.has=P1,C.hasIn=qu,C.head=kd,C.identity=Pn,C.includes=pb,C.indexOf=uy,C.inRange=X1,C.invoke=D1,C.isArguments=Lr,C.isArray=Ke,C.isArrayBuffer=Xb,C.isArrayLike=An,C.isArrayLikeObject=Gt,C.isBoolean=Yb,C.isBuffer=lr,C.isDate=Zb,C.isElement=Kb,C.isEmpty=Jb,C.isEqual=Qb,C.isEqualWith=e1,C.isError=Wu,C.isFinite=t1,C.isFunction=Fi,C.isInteger=Jd,C.isLength=ks,C.isMap=Qd,C.isMatch=n1,C.isMatchWith=i1,C.isNaN=r1,C.isNative=a1,C.isNil=s1,C.isNull=o1,C.isNumber=ep,C.isObject=zt,C.isObjectLike=Ut,C.isPlainObject=po,C.isRegExp=ju,C.isSafeInteger=l1,C.isSet=tp,C.isString=Us,C.isSymbol=zn,C.isTypedArray=ua,C.isUndefined=u1,C.isWeakMap=c1,C.isWeakSet=f1,C.join=py,C.kebabCase=ew,C.last=Zn,C.lastIndexOf=gy,C.lowerCase=tw,C.lowerFirst=nw,C.lt=h1,C.lte=d1,C.max=Zw,C.maxBy=Kw,C.mean=Jw,C.meanBy=Qw,C.min=eM,C.minBy=tM,C.stubArray=Qu,C.stubFalse=ec,C.stubObject=Uw,C.stubString=Gw,C.stubTrue=Hw,C.multiply=nM,C.nth=my,C.noConflict=Dw,C.noop=Ju,C.now=Fs,C.pad=iw,C.padEnd=rw,C.padStart=aw,C.parseInt=ow,C.random=Y1,C.reduce=xb,C.reduceRight=yb,C.repeat=sw,C.replace=lw,C.result=k1,C.round=iM,C.runInContext=X,C.sample=wb,C.size=Eb,C.snakeCase=uw,C.some=Tb,C.sortedIndex=My,C.sortedIndexBy=Sy,C.sortedIndexOf=Ey,C.sortedLastIndex=Ty,C.sortedLastIndexBy=Ay,C.sortedLastIndexOf=Cy,C.startCase=fw,C.startsWith=hw,C.subtract=rM,C.sum=aM,C.sumBy=oM,C.template=dw,C.times=Vw,C.toFinite=zi,C.toInteger=Qe,C.toLength=ip,C.toLower=pw,C.toNumber=Kn,C.toSafeInteger=p1,C.toString=wt,C.toUpper=gw,C.trim=mw,C.trimEnd=vw,C.trimStart=_w,C.truncate=xw,C.unescape=yw,C.uniqueId=jw,C.upperCase=bw,C.upperFirst=Xu,C.each=Vd,C.eachRight=Wd,C.first=kd,Ku(C,function(){var a={};return yi(C,function(s,h){Mt.call(C.prototype,h)||(a[h]=s)}),a}(),{chain:!1}),C.VERSION=n,jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){C[a].placeholder=C}),jn(["drop","take"],function(a,s){ct.prototype[a]=function(h){h=h===t?1:qt(Qe(h),0);var x=this.__filtered__&&!s?new ct(this):this.clone();return x.__filtered__?x.__takeCount__=un(h,x.__takeCount__):x.__views__.push({size:un(h,pe),type:a+(x.__dir__<0?"Right":"")}),x},ct.prototype[a+"Right"]=function(h){return this.reverse()[a](h).reverse()}}),jn(["filter","map","takeWhile"],function(a,s){var h=s+1,x=h==O||h==V;ct.prototype[a]=function(E){var L=this.clone();return L.__iteratees__.push({iteratee:We(E,3),type:h}),L.__filtered__=L.__filtered__||x,L}}),jn(["head","last"],function(a,s){var h="take"+(s?"Right":"");ct.prototype[a]=function(){return this[h](1).value()[0]}}),jn(["initial","tail"],function(a,s){var h="drop"+(s?"":"Right");ct.prototype[a]=function(){return this.__filtered__?new ct(this):this[h](1)}}),ct.prototype.compact=function(){return this.filter(Pn)},ct.prototype.find=function(a){return this.filter(a).head()},ct.prototype.findLast=function(a){return this.reverse().find(a)},ct.prototype.invokeMap=it(function(a,s){return typeof a=="function"?new ct(this):this.map(function(h){return so(h,a,s)})}),ct.prototype.reject=function(a){return this.filter(Bs(We(a)))},ct.prototype.slice=function(a,s){a=Qe(a);var h=this;return h.__filtered__&&(a>0||s<0)?new ct(h):(a<0?h=h.takeRight(-a):a&&(h=h.drop(a)),s!==t&&(s=Qe(s),h=s<0?h.dropRight(-s):h.take(s-a)),h)},ct.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},ct.prototype.toArray=function(){return this.take(pe)},yi(ct.prototype,function(a,s){var h=/^(?:filter|find|map|reject)|While$/.test(s),x=/^(?:head|last)$/.test(s),E=C[x?"take"+(s=="last"?"Right":""):s],L=x||/^find/.test(s);E&&(C.prototype[s]=function(){var B=this.__wrapped__,G=x?[1]:arguments,K=B instanceof ct,me=G[0],ve=K||Ke(B),be=function(ot){var ht=E.apply(C,tr([ot],G));return x&&Ce?ht[0]:ht};ve&&h&&typeof me=="function"&&me.length!=1&&(K=ve=!1);var Ce=this.__chain__,Be=!!this.__actions__.length,je=L&&!Ce,et=K&&!Be;if(!L&&ve){B=et?B:new ct(this);var $e=a.apply(B,G);return $e.__actions__.push({func:Os,args:[be],thisArg:t}),new qn($e,Ce)}return je&&et?a.apply(this,G):($e=this.thru(be),je?x?$e.value()[0]:$e.value():$e)})}),jn(["pop","push","shift","sort","splice","unshift"],function(a){var s=os[a],h=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",x=/^(?:pop|shift)$/.test(a);C.prototype[a]=function(){var E=arguments;if(x&&!this.__chain__){var L=this.value();return s.apply(Ke(L)?L:[],E)}return this[h](function(B){return s.apply(Ke(B)?B:[],E)})}}),yi(ct.prototype,function(a,s){var h=C[s];if(h){var x=h.name+"";Mt.call(ra,x)||(ra[x]=[]),ra[x].push({name:s,func:h})}}),ra[As(t,b).name]=[{name:"wrapper",func:t}],ct.prototype.clone=y_,ct.prototype.reverse=b_,ct.prototype.value=w_,C.prototype.at=Ky,C.prototype.chain=Jy,C.prototype.commit=Qy,C.prototype.next=eb,C.prototype.plant=nb,C.prototype.reverse=ib,C.prototype.toJSON=C.prototype.valueOf=C.prototype.value=rb,C.prototype.first=C.prototype.head,eo&&(C.prototype[eo]=tb),C},ta=Q0();wr?((wr.exports=ta)._=ta,Zl._=ta):on._=ta}).call(go)})(uM,Vo);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="149",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,mp=1,fM=2,Dm=1,hM=2,Io=3,yr=0,Ln=1,mr=2,_r=0,Ba=1,vp=2,_p=3,xp=4,dM=5,Da=100,pM=101,gM=102,yp=103,bp=104,mM=200,vM=201,_M=202,xM=203,Im=204,Om=205,yM=206,bM=207,wM=208,MM=209,SM=210,EM=0,TM=1,AM=2,Jc=3,CM=4,PM=5,LM=6,RM=7,Tf=0,DM=1,IM=2,Xi=0,OM=1,NM=2,FM=3,zM=4,BM=5,Nm=300,Ua=301,Ga=302,Qc=303,ef=304,Ol=306,tf=1e3,hi=1001,nf=1002,bn=1003,wp=1004,tc=1005,Qn=1006,kM=1007,Wo=1008,Vr=1009,UM=1010,GM=1011,Fm=1012,HM=1013,kr=1014,Ur=1015,jo=1016,VM=1017,WM=1018,ka=1020,jM=1021,di=1023,$M=1024,qM=1025,Gr=1026,Ha=1027,XM=1028,YM=1029,ZM=1030,KM=1031,JM=1033,nc=33776,ic=33777,rc=33778,ac=33779,Mp=35840,Sp=35841,Ep=35842,Tp=35843,QM=36196,Ap=37492,Cp=37496,Pp=37808,Lp=37809,Rp=37810,Dp=37811,Ip=37812,Op=37813,Np=37814,Fp=37815,zp=37816,Bp=37817,kp=37818,Up=37819,Gp=37820,Hp=37821,oc=36492,eS=36283,Vp=36284,Wp=36285,jp=36286,Wr=3e3,It=3001,tS=3200,nS=3201,zm=0,iS=1,Mi="srgb",$o="srgb-linear",sc=7680,rS=519,rf=35044,$p="300 es",af=1035;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,u=r.length;o<u;o++)r[o].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=Math.PI/180,qp=180/Math.PI;function xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function aS(i,e){return(i%e+e)%e}function uc(i,e,t){return(1-t)*i+t*e}function Xp(i){return(i&i-1)===0&&i!==0}function of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*r+e.x,this.y=o*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(){Vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,o,u,l,c,f){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=o,d[5]=c,d[6]=n,d[7]=u,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,u=n[0],l=n[3],c=n[6],f=n[1],d=n[4],p=n[7],g=n[2],_=n[5],y=n[8],v=r[0],m=r[3],b=r[6],A=r[1],S=r[4],M=r[7],w=r[2],P=r[5],I=r[8];return o[0]=u*v+l*A+c*w,o[3]=u*m+l*S+c*P,o[6]=u*b+l*M+c*I,o[1]=f*v+d*A+p*w,o[4]=f*m+d*S+p*P,o[7]=f*b+d*M+p*I,o[2]=g*v+_*A+y*w,o[5]=g*m+_*S+y*P,o[8]=g*b+_*M+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],u=e[4],l=e[5],c=e[6],f=e[7],d=e[8];return t*u*d-t*l*f-n*o*d+n*l*c+r*o*f-r*u*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],u=e[4],l=e[5],c=e[6],f=e[7],d=e[8],p=d*u-l*f,g=l*c-d*o,_=f*o-u*c,y=t*p+n*g+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=p*v,e[1]=(r*f-d*n)*v,e[2]=(l*n-r*u)*v,e[3]=g*v,e[4]=(d*t-r*c)*v,e[5]=(r*o-l*t)*v,e[6]=_*v,e[7]=(n*c-f*t)*v,e[8]=(u*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,u,l){const c=Math.cos(o),f=Math.sin(o);return this.set(n*c,n*f,-n*(c*u+f*l)+u+e,-r*f,r*c,-r*(-f*u+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(cc.makeScale(e,t)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Vn;function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fc={[Mi]:{[$o]:Hr},[$o]:{[Mi]:gl}},_n={legacyMode:!0,get workingColorSpace(){return $o},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(fc[e]&&fc[e][t]!==void 0){const n=fc[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={r:0,g:0,b:0},si={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Vs(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_n.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_n.workingColorSpace){return this.r=e,this.g=t,this.b=n,_n.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_n.workingColorSpace){if(e=aS(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=hc(u,o,e+1/3),this.g=hc(u,o,e),this.b=hc(u,o,e-1/3)}return _n.toWorkingColorSpace(this,r),this}setStyle(e,t=Mi){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const u=r[1],l=r[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,_n.toWorkingColorSpace(this,t),n(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,_n.toWorkingColorSpace(this,t),n(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const c=parseFloat(o[1])/360,f=parseFloat(o[2])/100,d=parseFloat(o[3])/100;return n(o[4]),this.setHSL(c,f,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],u=o.length;if(u===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,_n.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,_n.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Mi){const n=km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return _n.fromWorkingColorSpace(Vs(this,Xt),e),hn(Xt.r*255,0,255)<<16^hn(Xt.g*255,0,255)<<8^hn(Xt.b*255,0,255)<<0}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_n.workingColorSpace){_n.fromWorkingColorSpace(Vs(this,Xt),t);const n=Xt.r,r=Xt.g,o=Xt.b,u=Math.max(n,r,o),l=Math.min(n,r,o);let c,f;const d=(l+u)/2;if(l===u)c=0,f=0;else{const p=u-l;switch(f=d<=.5?p/(u+l):p/(2-u-l),u){case n:c=(r-o)/p+(r<o?6:0);break;case r:c=(o-n)/p+2;break;case o:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=d,e}getRGB(e,t=_n.workingColorSpace){return _n.fromWorkingColorSpace(Vs(this,Xt),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Mi){return _n.fromWorkingColorSpace(Vs(this,Xt),e),e!==Mi?`color(${e} ${Xt.r} ${Xt.g} ${Xt.b})`:`rgb(${Xt.r*255|0},${Xt.g*255|0},${Xt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=n,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Hs);const n=uc(si.h,Hs.h,t),r=uc(si.s,Hs.s,t),o=uc(si.l,Hs.l,t);return this.setHSL(n,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xt.NAMES=km;let ha;class Um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ha===void 0&&(ha=qo("canvas")),ha.width=e.width,ha.height=e.height;const n=ha.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ha}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let u=0;u<o.length;u++)o[u]=Hr(o[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hr(t[n]/255)*255):t[n]=Hr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gm{constructor(e=null){this.isSource=!0,this.uuid=xr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let u=0,l=r.length;u<l;u++)r[u].isDataTexture?o.push(dc(r[u].image)):o.push(dc(r[u]))}else o=dc(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Um.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oS=0;class Rn extends vi{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,n=hi,r=hi,o=Qn,u=Wo,l=di,c=Vr,f=Rn.DEFAULT_ANISOTROPY,d=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=xr(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tf:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tf:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Nm;Rn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,n=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const c=e.elements,f=c[0],d=c[4],p=c[8],g=c[1],_=c[5],y=c[9],v=c[2],m=c[6],b=c[10];if(Math.abs(d-g)<.01&&Math.abs(p-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+g)<.1&&Math.abs(p+v)<.1&&Math.abs(y+m)<.1&&Math.abs(f+_+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(f+1)/2,M=(_+1)/2,w=(b+1)/2,P=(d+g)/4,I=(p+v)/4,T=(y+m)/4;return S>M&&S>w?S<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(S),r=P/n,o=I/n):M>w?M<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),n=P/r,o=T/r):w<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(w),n=I/o,r=T/o),this.set(n,r,o,t),this}let A=Math.sqrt((m-y)*(m-y)+(p-v)*(p-v)+(g-d)*(g-d));return Math.abs(A)<.001&&(A=1),this.x=(m-y)/A,this.y=(p-v)/A,this.z=(g-d)/A,this.w=Math.acos((f+_+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class br extends vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hm extends Rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sS extends Rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,u,l){let c=n[r+0],f=n[r+1],d=n[r+2],p=n[r+3];const g=o[u+0],_=o[u+1],y=o[u+2],v=o[u+3];if(l===0){e[t+0]=c,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=g,e[t+1]=_,e[t+2]=y,e[t+3]=v;return}if(p!==v||c!==g||f!==_||d!==y){let m=1-l;const b=c*g+f*_+d*y+p*v,A=b>=0?1:-1,S=1-b*b;if(S>Number.EPSILON){const w=Math.sqrt(S),P=Math.atan2(w,b*A);m=Math.sin(m*P)/w,l=Math.sin(l*P)/w}const M=l*A;if(c=c*m+g*M,f=f*m+_*M,d=d*m+y*M,p=p*m+v*M,m===1-l){const w=1/Math.sqrt(c*c+f*f+d*d+p*p);c*=w,f*=w,d*=w,p*=w}}e[t]=c,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,o,u){const l=n[r],c=n[r+1],f=n[r+2],d=n[r+3],p=o[u],g=o[u+1],_=o[u+2],y=o[u+3];return e[t]=l*y+d*p+c*_-f*g,e[t+1]=c*y+d*g+f*p-l*_,e[t+2]=f*y+d*_+l*g-c*p,e[t+3]=d*y-l*p-c*g-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,o=e._z,u=e._order,l=Math.cos,c=Math.sin,f=l(n/2),d=l(r/2),p=l(o/2),g=c(n/2),_=c(r/2),y=c(o/2);switch(u){case"XYZ":this._x=g*d*p+f*_*y,this._y=f*_*p-g*d*y,this._z=f*d*y+g*_*p,this._w=f*d*p-g*_*y;break;case"YXZ":this._x=g*d*p+f*_*y,this._y=f*_*p-g*d*y,this._z=f*d*y-g*_*p,this._w=f*d*p+g*_*y;break;case"ZXY":this._x=g*d*p-f*_*y,this._y=f*_*p+g*d*y,this._z=f*d*y+g*_*p,this._w=f*d*p-g*_*y;break;case"ZYX":this._x=g*d*p-f*_*y,this._y=f*_*p+g*d*y,this._z=f*d*y-g*_*p,this._w=f*d*p+g*_*y;break;case"YZX":this._x=g*d*p+f*_*y,this._y=f*_*p+g*d*y,this._z=f*d*y-g*_*p,this._w=f*d*p-g*_*y;break;case"XZY":this._x=g*d*p-f*_*y,this._y=f*_*p-g*d*y,this._z=f*d*y+g*_*p,this._w=f*d*p+g*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],u=t[1],l=t[5],c=t[9],f=t[2],d=t[6],p=t[10],g=n+l+p;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(d-c)*_,this._y=(o-f)*_,this._z=(u-r)*_}else if(n>l&&n>p){const _=2*Math.sqrt(1+n-l-p);this._w=(d-c)/_,this._x=.25*_,this._y=(r+u)/_,this._z=(o+f)/_}else if(l>p){const _=2*Math.sqrt(1+l-n-p);this._w=(o-f)/_,this._x=(r+u)/_,this._y=.25*_,this._z=(c+d)/_}else{const _=2*Math.sqrt(1+p-n-l);this._w=(u-r)/_,this._x=(o+f)/_,this._y=(c+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,u=e._w,l=t._x,c=t._y,f=t._z,d=t._w;return this._x=n*d+u*l+r*f-o*c,this._y=r*d+u*c+o*l-n*f,this._z=o*d+u*f+n*c-r*l,this._w=u*d-n*l-r*c-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,u=this._w;let l=u*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=u,this._x=n,this._y=r,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const _=1-t;return this._w=_*u+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(c),d=Math.atan2(f,l),p=Math.sin((1-t)*d)/f,g=Math.sin(t*d)/f;return this._w=u*p+this._w*g,this._x=n*p+this._x*g,this._y=r*p+this._y*g,this._z=o*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,u=e.y,l=e.z,c=e.w,f=c*t+u*r-l*n,d=c*n+l*t-o*r,p=c*r+o*n-u*t,g=-o*t-u*n-l*r;return this.x=f*c+g*-o+d*-l-p*-u,this.y=d*c+g*-u+p*-o-f*-l,this.z=p*c+g*-l+f*-u-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,u=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*u-n*c,this.z=n*l-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new H,Yp=new mi;class $r{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,o=-1/0,u=-1/0,l=-1/0;for(let c=0,f=e.length;c<f;c+=3){const d=e[c],p=e[c+1],g=e[c+2];d<t&&(t=d),p<n&&(n=p),g<r&&(r=g),d>o&&(o=d),p>u&&(u=p),g>l&&(l=g)}return this.min.set(t,n,r),this.max.set(o,u,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,o=-1/0,u=-1/0,l=-1/0;for(let c=0,f=e.count;c<f;c++){const d=e.getX(c),p=e.getY(c),g=e.getZ(c);d<t&&(t=d),p<n&&(n=p),g<r&&(r=g),d>o&&(o=d),p>u&&(u=p),g>l&&(l=g)}return this.min.set(t,n,r),this.max.set(o,u,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const o=n.attributes.position;for(let u=0,l=o.count;u<l;u++)Rr.fromBufferAttribute(o,u).applyMatrix4(e.matrixWorld),this.expandByPoint(Rr)}else n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox),gc.applyMatrix4(e.matrixWorld),this.union(gc);const r=e.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ws.subVectors(this.max,mo),da.subVectors(e.a,mo),pa.subVectors(e.b,mo),ga.subVectors(e.c,mo),ur.subVectors(pa,da),cr.subVectors(ga,pa),Dr.subVectors(da,ga);let t=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Dr.z,Dr.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Dr.z,0,-Dr.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Dr.y,Dr.x,0];return!mc(t,da,pa,ga,Ws)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,da,pa,ga,Ws))?!1:(js.crossVectors(ur,cr),t=[js.x,js.y,js.z],mc(t,da,pa,ga,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Rr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new H,new H,new H,new H,new H,new H,new H,new H],Rr=new H,gc=new $r,da=new H,pa=new H,ga=new H,ur=new H,cr=new H,Dr=new H,mo=new H,Ws=new H,js=new H,Ir=new H;function mc(i,e,t,n,r){for(let o=0,u=i.length-3;o<=u;o+=3){Ir.fromArray(i,o);const l=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),c=e.dot(Ir),f=t.dot(Ir),d=n.dot(Ir);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>l)return!1}return!0}const lS=new $r,vo=new H,vc=new H;class Nl{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lS.setFromPoints(e).getCenter(n);let r=0;for(let o=0,u=e.length;o<u;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(vc)),this.expandByPoint(vo.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new H,_c=new H,$s=new H,fr=new H,xc=new H,qs=new H,yc=new H;class Af{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.direction).multiplyScalar(t).add(this.origin),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_c.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(_c);const o=e.distanceTo(t)*.5,u=-this.direction.dot($s),l=fr.dot(this.direction),c=-fr.dot($s),f=fr.lengthSq(),d=Math.abs(1-u*u);let p,g,_,y;if(d>0)if(p=u*c-l,g=u*l-c,y=o*d,p>=0)if(g>=-y)if(g<=y){const v=1/d;p*=v,g*=v,_=p*(p+u*g+2*l)+g*(u*p+g+2*c)+f}else g=o,p=Math.max(0,-(u*g+l)),_=-p*p+g*(g+2*c)+f;else g=-o,p=Math.max(0,-(u*g+l)),_=-p*p+g*(g+2*c)+f;else g<=-y?(p=Math.max(0,-(-u*o+l)),g=p>0?-o:Math.min(Math.max(-o,-c),o),_=-p*p+g*(g+2*c)+f):g<=y?(p=0,g=Math.min(Math.max(-o,-c),o),_=g*(g+2*c)+f):(p=Math.max(0,-(u*o+l)),g=p>0?o:Math.min(Math.max(-o,-c),o),_=-p*p+g*(g+2*c)+f);else g=u>0?-o:o,p=Math.max(0,-(u*g+l)),_=-p*p+g*(g+2*c)+f;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy($s).multiplyScalar(g).add(_c),_}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),r=Ui.dot(Ui)-n*n,o=e.radius*e.radius;if(r>o)return null;const u=Math.sqrt(o-r),l=n-u,c=n+u;return l<0&&c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,u,l,c;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,r=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,r=(e.min.x-g.x)*f),d>=0?(o=(e.min.y-g.y)*d,u=(e.max.y-g.y)*d):(o=(e.max.y-g.y)*d,u=(e.min.y-g.y)*d),n>u||o>r||((o>n||isNaN(n))&&(n=o),(u<r||isNaN(r))&&(r=u),p>=0?(l=(e.min.z-g.z)*p,c=(e.max.z-g.z)*p):(l=(e.max.z-g.z)*p,c=(e.min.z-g.z)*p),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,r,o){xc.subVectors(t,e),qs.subVectors(n,e),yc.crossVectors(xc,qs);let u=this.direction.dot(yc),l;if(u>0){if(r)return null;l=1}else if(u<0)l=-1,u=-u;else return null;fr.subVectors(this.origin,e);const c=l*this.direction.dot(qs.crossVectors(fr,qs));if(c<0)return null;const f=l*this.direction.dot(xc.cross(fr));if(f<0||c+f>u)return null;const d=-l*fr.dot(yc);return d<0?null:this.at(d/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,o,u,l,c,f,d,p,g,_,y,v,m){const b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=r,b[1]=o,b[5]=u,b[9]=l,b[13]=c,b[2]=f,b[6]=d,b[10]=p,b[14]=g,b[3]=_,b[7]=y,b[11]=v,b[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ma.setFromMatrixColumn(e,0).length(),o=1/ma.setFromMatrixColumn(e,1).length(),u=1/ma.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,u=Math.cos(n),l=Math.sin(n),c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const g=u*d,_=u*p,y=l*d,v=l*p;t[0]=c*d,t[4]=-c*p,t[8]=f,t[1]=_+y*f,t[5]=g-v*f,t[9]=-l*c,t[2]=v-g*f,t[6]=y+_*f,t[10]=u*c}else if(e.order==="YXZ"){const g=c*d,_=c*p,y=f*d,v=f*p;t[0]=g+v*l,t[4]=y*l-_,t[8]=u*f,t[1]=u*p,t[5]=u*d,t[9]=-l,t[2]=_*l-y,t[6]=v+g*l,t[10]=u*c}else if(e.order==="ZXY"){const g=c*d,_=c*p,y=f*d,v=f*p;t[0]=g-v*l,t[4]=-u*p,t[8]=y+_*l,t[1]=_+y*l,t[5]=u*d,t[9]=v-g*l,t[2]=-u*f,t[6]=l,t[10]=u*c}else if(e.order==="ZYX"){const g=u*d,_=u*p,y=l*d,v=l*p;t[0]=c*d,t[4]=y*f-_,t[8]=g*f+v,t[1]=c*p,t[5]=v*f+g,t[9]=_*f-y,t[2]=-f,t[6]=l*c,t[10]=u*c}else if(e.order==="YZX"){const g=u*c,_=u*f,y=l*c,v=l*f;t[0]=c*d,t[4]=v-g*p,t[8]=y*p+_,t[1]=p,t[5]=u*d,t[9]=-l*d,t[2]=-f*d,t[6]=_*p+y,t[10]=g-v*p}else if(e.order==="XZY"){const g=u*c,_=u*f,y=l*c,v=l*f;t[0]=c*d,t[4]=-p,t[8]=f*d,t[1]=g*p+v,t[5]=u*d,t[9]=_*p-y,t[2]=y*p-_,t[6]=l*d,t[10]=v*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,cS)}lookAt(e,t,n){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),hr.crossVectors(n,Un),hr.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),hr.crossVectors(n,Un)),hr.normalize(),Xs.crossVectors(Un,hr),r[0]=hr.x,r[4]=Xs.x,r[8]=Un.x,r[1]=hr.y,r[5]=Xs.y,r[9]=Un.y,r[2]=hr.z,r[6]=Xs.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,u=n[0],l=n[4],c=n[8],f=n[12],d=n[1],p=n[5],g=n[9],_=n[13],y=n[2],v=n[6],m=n[10],b=n[14],A=n[3],S=n[7],M=n[11],w=n[15],P=r[0],I=r[4],T=r[8],D=r[12],U=r[1],ee=r[5],Z=r[9],j=r[13],O=r[2],F=r[6],V=r[10],ie=r[14],ae=r[3],_e=r[7],J=r[11],pe=r[15];return o[0]=u*P+l*U+c*O+f*ae,o[4]=u*I+l*ee+c*F+f*_e,o[8]=u*T+l*Z+c*V+f*J,o[12]=u*D+l*j+c*ie+f*pe,o[1]=d*P+p*U+g*O+_*ae,o[5]=d*I+p*ee+g*F+_*_e,o[9]=d*T+p*Z+g*V+_*J,o[13]=d*D+p*j+g*ie+_*pe,o[2]=y*P+v*U+m*O+b*ae,o[6]=y*I+v*ee+m*F+b*_e,o[10]=y*T+v*Z+m*V+b*J,o[14]=y*D+v*j+m*ie+b*pe,o[3]=A*P+S*U+M*O+w*ae,o[7]=A*I+S*ee+M*F+w*_e,o[11]=A*T+S*Z+M*V+w*J,o[15]=A*D+S*j+M*ie+w*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],u=e[1],l=e[5],c=e[9],f=e[13],d=e[2],p=e[6],g=e[10],_=e[14],y=e[3],v=e[7],m=e[11],b=e[15];return y*(+o*c*p-r*f*p-o*l*g+n*f*g+r*l*_-n*c*_)+v*(+t*c*_-t*f*g+o*u*g-r*u*_+r*f*d-o*c*d)+m*(+t*f*p-t*l*_-o*u*p+n*u*_+o*l*d-n*f*d)+b*(-r*l*d-t*c*p+t*l*g+r*u*p-n*u*g+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],u=e[4],l=e[5],c=e[6],f=e[7],d=e[8],p=e[9],g=e[10],_=e[11],y=e[12],v=e[13],m=e[14],b=e[15],A=p*m*f-v*g*f+v*c*_-l*m*_-p*c*b+l*g*b,S=y*g*f-d*m*f-y*c*_+u*m*_+d*c*b-u*g*b,M=d*v*f-y*p*f+y*l*_-u*v*_-d*l*b+u*p*b,w=y*p*c-d*v*c-y*l*g+u*v*g+d*l*m-u*p*m,P=t*A+n*S+r*M+o*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=A*I,e[1]=(v*g*o-p*m*o-v*r*_+n*m*_+p*r*b-n*g*b)*I,e[2]=(l*m*o-v*c*o+v*r*f-n*m*f-l*r*b+n*c*b)*I,e[3]=(p*c*o-l*g*o-p*r*f+n*g*f+l*r*_-n*c*_)*I,e[4]=S*I,e[5]=(d*m*o-y*g*o+y*r*_-t*m*_-d*r*b+t*g*b)*I,e[6]=(y*c*o-u*m*o-y*r*f+t*m*f+u*r*b-t*c*b)*I,e[7]=(u*g*o-d*c*o+d*r*f-t*g*f-u*r*_+t*c*_)*I,e[8]=M*I,e[9]=(y*p*o-d*v*o-y*n*_+t*v*_+d*n*b-t*p*b)*I,e[10]=(u*v*o-y*l*o+y*n*f-t*v*f-u*n*b+t*l*b)*I,e[11]=(d*l*o-u*p*o-d*n*f+t*p*f+u*n*_-t*l*_)*I,e[12]=w*I,e[13]=(d*v*r-y*p*r+y*n*g-t*v*g-d*n*m+t*p*m)*I,e[14]=(y*l*r-u*v*r-y*n*c+t*v*c+u*n*m-t*l*m)*I,e[15]=(u*p*r-d*l*r+d*n*c-t*p*c-u*n*g+t*l*g)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,u=e.x,l=e.y,c=e.z,f=o*u,d=o*l;return this.set(f*u+n,f*l-r*c,f*c+r*l,0,f*l+r*c,d*l+n,d*c-r*u,0,f*c-r*l,d*c+r*u,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,u){return this.set(1,n,o,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,u=t._y,l=t._z,c=t._w,f=o+o,d=u+u,p=l+l,g=o*f,_=o*d,y=o*p,v=u*d,m=u*p,b=l*p,A=c*f,S=c*d,M=c*p,w=n.x,P=n.y,I=n.z;return r[0]=(1-(v+b))*w,r[1]=(_+M)*w,r[2]=(y-S)*w,r[3]=0,r[4]=(_-M)*P,r[5]=(1-(g+b))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(y+S)*I,r[9]=(m-A)*I,r[10]=(1-(g+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=ma.set(r[0],r[1],r[2]).length();const u=ma.set(r[4],r[5],r[6]).length(),l=ma.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const f=1/o,d=1/u,p=1/l;return li.elements[0]*=f,li.elements[1]*=f,li.elements[2]*=f,li.elements[4]*=d,li.elements[5]*=d,li.elements[6]*=d,li.elements[8]*=p,li.elements[9]*=p,li.elements[10]*=p,t.setFromRotationMatrix(li),n.x=o,n.y=u,n.z=l,this}makePerspective(e,t,n,r,o,u){const l=this.elements,c=2*o/(t-e),f=2*o/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),g=-(u+o)/(u-o),_=-2*u*o/(u-o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,u){const l=this.elements,c=1/(t-e),f=1/(n-r),d=1/(u-o),p=(t+e)*c,g=(n+r)*f,_=(u+o)*d;return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=-2*d,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ma=new H,li=new Ft,uS=new H(0,0,0),cS=new H(1,1,1),hr=new H,Xs=new H,Un=new H,Zp=new Ft,Kp=new mi;class Fl{constructor(e=0,t=0,n=0,r=Fl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],u=r[4],l=r[8],c=r[1],f=r[5],d=r[9],p=r[2],g=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-hn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fl.DEFAULT_ORDER="XYZ";class Cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const Jp=new H,va=new mi,Gi=new Ft,Ys=new H,_o=new H,hS=new H,dS=new mi,Qp=new H(1,0,0),eg=new H(0,1,0),tg=new H(0,0,1),pS={type:"added"},ng={type:"removed"};class rn extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new H,t=new Fl,n=new mi,r=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Vn}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(eg,e)}rotateZ(e){return this.rotateOnAxis(tg,e)}translateOnAxis(e,t){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(eg,e)}translateZ(e){return this.translateOnAxis(tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(_o,Ys,this.up):Gi.lookAt(Ys,_o,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),va.setFromRotationMatrix(Gi),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ng)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectsByProperty(e,t);u.length>0&&(n=n.concat(u))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,u=r.length;o<u;o++){const l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const p=c[f];o(e.shapes,p)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,f=this.material.length;c<f;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){const l=u(e.geometries),c=u(e.materials),f=u(e.textures),d=u(e.images),p=u(e.shapes),g=u(e.skeletons),_=u(e.animations),y=u(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=r,n;function u(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new H(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new H,Hi=new H,bc=new H,Vi=new H,_a=new H,xa=new H,ig=new H,wc=new H,Mc=new H,Sc=new H;class Ti{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ui.subVectors(e,t),r.cross(ui);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){ui.subVectors(r,t),Hi.subVectors(n,t),bc.subVectors(e,t);const u=ui.dot(ui),l=ui.dot(Hi),c=ui.dot(bc),f=Hi.dot(Hi),d=Hi.dot(bc),p=u*f-l*l;if(p===0)return o.set(-2,-1,-1);const g=1/p,_=(f*c-l*d)*g,y=(u*d-l*c)*g;return o.set(1-_-y,y,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vi),Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getUV(e,t,n,r,o,u,l,c){return this.getBarycoord(e,t,n,r,Vi),c.set(0,0),c.addScaledVector(o,Vi.x),c.addScaledVector(u,Vi.y),c.addScaledVector(l,Vi.z),c}static isFrontFacing(e,t,n,r){return ui.subVectors(n,t),Hi.subVectors(e,t),ui.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ui.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return Ti.getUV(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let u,l;_a.subVectors(r,n),xa.subVectors(o,n),wc.subVectors(e,n);const c=_a.dot(wc),f=xa.dot(wc);if(c<=0&&f<=0)return t.copy(n);Mc.subVectors(e,r);const d=_a.dot(Mc),p=xa.dot(Mc);if(d>=0&&p<=d)return t.copy(r);const g=c*p-d*f;if(g<=0&&c>=0&&d<=0)return u=c/(c-d),t.copy(n).addScaledVector(_a,u);Sc.subVectors(e,o);const _=_a.dot(Sc),y=xa.dot(Sc);if(y>=0&&_<=y)return t.copy(o);const v=_*f-c*y;if(v<=0&&f>=0&&y<=0)return l=f/(f-y),t.copy(n).addScaledVector(xa,l);const m=d*y-_*p;if(m<=0&&p-d>=0&&_-y>=0)return ig.subVectors(o,r),l=(p-d)/(p-d+(_-y)),t.copy(r).addScaledVector(ig,l);const b=1/(m+v+g);return u=v*b,l=g*b,t.copy(n).addScaledVector(_a,u).addScaledVector(xa,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gS=0;class qr extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Ba,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Im,this.blendDst=Om,this.blendEquation=Da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ba&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const u=[];for(const l in o){const c=o[l];delete c.metadata,u.push(c)}return u}if(t){const o=r(e.textures),u=r(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pf extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new H,Zs=new Ee;class ti{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),o=Lt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vm extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wm extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mS=0;const Jn=new Ft,Ec=new rn,ya=new H,Gn=new $r,xo=new $r,tn=new H;class Dn extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?Wm:Vm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Vn().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const l=t[o];xo.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(Gn.min,xo.min),Gn.expandByPoint(tn),tn.addVectors(Gn.max,xo.max),Gn.expandByPoint(tn)):(Gn.expandByPoint(xo.min),Gn.expandByPoint(xo.max))}Gn.getCenter(n);let r=0;for(let o=0,u=e.count;o<u;o++)tn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let o=0,u=t.length;o<u;o++){const l=t[o],c=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)tn.fromBufferAttribute(l,f),c&&(ya.fromBufferAttribute(e,f),tn.add(ya)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,o=t.normal.array,u=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,f=[],d=[];for(let U=0;U<l;U++)f[U]=new H,d[U]=new H;const p=new H,g=new H,_=new H,y=new Ee,v=new Ee,m=new Ee,b=new H,A=new H;function S(U,ee,Z){p.fromArray(r,U*3),g.fromArray(r,ee*3),_.fromArray(r,Z*3),y.fromArray(u,U*2),v.fromArray(u,ee*2),m.fromArray(u,Z*2),g.sub(p),_.sub(p),v.sub(y),m.sub(y);const j=1/(v.x*m.y-m.x*v.y);isFinite(j)&&(b.copy(g).multiplyScalar(m.y).addScaledVector(_,-v.y).multiplyScalar(j),A.copy(_).multiplyScalar(v.x).addScaledVector(g,-m.x).multiplyScalar(j),f[U].add(b),f[ee].add(b),f[Z].add(b),d[U].add(A),d[ee].add(A),d[Z].add(A))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let U=0,ee=M.length;U<ee;++U){const Z=M[U],j=Z.start,O=Z.count;for(let F=j,V=j+O;F<V;F+=3)S(n[F+0],n[F+1],n[F+2])}const w=new H,P=new H,I=new H,T=new H;function D(U){I.fromArray(o,U*3),T.copy(I);const ee=f[U];w.copy(ee),w.sub(I.multiplyScalar(I.dot(ee))).normalize(),P.crossVectors(T,ee);const j=P.dot(d[U])<0?-1:1;c[U*4]=w.x,c[U*4+1]=w.y,c[U*4+2]=w.z,c[U*4+3]=j}for(let U=0,ee=M.length;U<ee;++U){const Z=M[U],j=Z.start,O=Z.count;for(let F=j,V=j+O;F<V;F+=3)D(n[F+0]),D(n[F+1]),D(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const r=new H,o=new H,u=new H,l=new H,c=new H,f=new H,d=new H,p=new H;if(e)for(let g=0,_=e.count;g<_;g+=3){const y=e.getX(g+0),v=e.getX(g+1),m=e.getX(g+2);r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),u.fromBufferAttribute(t,m),d.subVectors(u,o),p.subVectors(r,o),d.cross(p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,m),l.add(d),c.add(d),f.add(d),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let g=0,_=t.count;g<_;g+=3)r.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),d.subVectors(u,o),p.subVectors(r,o),d.cross(p),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(l,c){const f=l.array,d=l.itemSize,p=l.normalized,g=new f.constructor(c.length*d);let _=0,y=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?_=c[v]*l.data.stride+l.offset:_=c[v]*d;for(let b=0;b<d;b++)g[y++]=f[_++]}return new ti(g,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],f=e(c,n);t.setAttribute(l,f)}const o=this.morphAttributes;for(const l in o){const c=[],f=o[l];for(let d=0,p=f.length;d<p;d++){const g=f[d],_=e(g,n);c.push(_)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let l=0,c=u.length;l<c;l++){const f=u[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const f=n[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let p=0,g=f.length;p<g;p++){const _=f[p];d.push(_.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(t))}const o=e.morphAttributes;for(const f in o){const d=[],p=o[f];for(let g=0,_=p.length;g<_;g++)d.push(p[g].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const rg=new Ft,ba=new Af,Tc=new Nl,yo=new H,bo=new H,wo=new H,Ac=new H,Ks=new H,Js=new Ee,Qs=new Ee,el=new Ee,Cc=new H,tl=new H;class pi extends rn{constructor(e=new Dn,t=new Pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){Ks.set(0,0,0);for(let c=0,f=o.length;c<f;c++){const d=l[c],p=o[c];d!==0&&(Ac.fromBufferAttribute(p,e),u?Ks.addScaledVector(Ac,d):Ks.addScaledVector(Ac.sub(t),d))}t.add(Ks)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(o),e.ray.intersectsSphere(Tc)===!1)||(rg.copy(o).invert(),ba.copy(e.ray).applyMatrix4(rg),n.boundingBox!==null&&ba.intersectsBox(n.boundingBox)===!1))return;let u;const l=n.index,c=n.attributes.position,f=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(l!==null)if(Array.isArray(r))for(let _=0,y=p.length;_<y;_++){const v=p[_],m=r[v.materialIndex],b=Math.max(v.start,g.start),A=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let S=b,M=A;S<M;S+=3){const w=l.getX(S),P=l.getX(S+1),I=l.getX(S+2);u=nl(this,m,e,ba,f,d,w,P,I),u&&(u.faceIndex=Math.floor(S/3),u.face.materialIndex=v.materialIndex,t.push(u))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let v=_,m=y;v<m;v+=3){const b=l.getX(v),A=l.getX(v+1),S=l.getX(v+2);u=nl(this,r,e,ba,f,d,b,A,S),u&&(u.faceIndex=Math.floor(v/3),t.push(u))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,y=p.length;_<y;_++){const v=p[_],m=r[v.materialIndex],b=Math.max(v.start,g.start),A=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let S=b,M=A;S<M;S+=3){const w=S,P=S+1,I=S+2;u=nl(this,m,e,ba,f,d,w,P,I),u&&(u.faceIndex=Math.floor(S/3),u.face.materialIndex=v.materialIndex,t.push(u))}}else{const _=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let v=_,m=y;v<m;v+=3){const b=v,A=v+1,S=v+2;u=nl(this,r,e,ba,f,d,b,A,S),u&&(u.faceIndex=Math.floor(v/3),t.push(u))}}}}function vS(i,e,t,n,r,o,u,l){let c;if(e.side===Ln?c=n.intersectTriangle(u,o,r,!0,l):c=n.intersectTriangle(r,o,u,e.side===yr,l),c===null)return null;tl.copy(l),tl.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(tl);return f<t.near||f>t.far?null:{distance:f,point:tl.clone(),object:i}}function nl(i,e,t,n,r,o,u,l,c){i.getVertexPosition(u,yo),i.getVertexPosition(l,bo),i.getVertexPosition(c,wo);const f=vS(i,e,t,n,yo,bo,wo,Cc);if(f){r&&(Js.fromBufferAttribute(r,u),Qs.fromBufferAttribute(r,l),el.fromBufferAttribute(r,c),f.uv=Ti.getUV(Cc,yo,bo,wo,Js,Qs,el,new Ee)),o&&(Js.fromBufferAttribute(o,u),Qs.fromBufferAttribute(o,l),el.fromBufferAttribute(o,c),f.uv2=Ti.getUV(Cc,yo,bo,wo,Js,Qs,el,new Ee));const d={a:u,b:l,c,normal:new H,materialIndex:0};Ti.getNormal(yo,bo,wo,d.normal),f.face=d}return f}class Qo extends Dn{constructor(e=1,t=1,n=1,r=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:u};const l=this;r=Math.floor(r),o=Math.floor(o),u=Math.floor(u);const c=[],f=[],d=[],p=[];let g=0,_=0;y("z","y","x",-1,-1,n,t,e,u,o,0),y("z","y","x",1,-1,n,t,-e,u,o,1),y("x","z","y",1,1,e,n,t,r,u,2),y("x","z","y",1,-1,e,n,-t,r,u,3),y("x","y","z",1,-1,e,t,n,r,o,4),y("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(c),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function y(v,m,b,A,S,M,w,P,I,T,D){const U=M/I,ee=w/T,Z=M/2,j=w/2,O=P/2,F=I+1,V=T+1;let ie=0,ae=0;const _e=new H;for(let J=0;J<V;J++){const pe=J*ee-j;for(let $=0;$<F;$++){const fe=$*U-Z;_e[v]=fe*A,_e[m]=pe*S,_e[b]=O,f.push(_e.x,_e.y,_e.z),_e[v]=0,_e[m]=0,_e[b]=P>0?1:-1,d.push(_e.x,_e.y,_e.z),p.push($/I),p.push(1-J/T),ie+=1}}for(let J=0;J<T;J++)for(let pe=0;pe<I;pe++){const $=g+pe+F*J,fe=g+pe+F*(J+1),le=g+(pe+1)+F*(J+1),Q=g+(pe+1)+F*J;c.push($,fe,Q),c.push(fe,le,Q),ae+=6}l.addGroup(_,ae,D),_+=ae,g+=ie}}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Va(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yn(i){const e={};for(let t=0;t<i.length;t++){const n=Va(i[t]);for(const r in n)e[r]=n[r]}return e}function _S(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jm(i){return i.getRenderTarget()===null&&i.outputEncoding===It?Mi:$o}const $m={clone:Va,merge:yn};var xS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xS,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Va(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qm extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ei extends qm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const c=u.fullWidth,f=u.fullHeight;o+=u.offsetX*r/c,t-=u.offsetY*n/f,r*=u.width/c,n*=u.height/f}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wa=-90,Ma=1;class bS extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new ei(wa,Ma,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new ei(wa,Ma,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const u=new ei(wa,Ma,e,t);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(0,1,0),this.add(u);const l=new ei(wa,Ma,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const c=new ei(wa,Ma,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const f=new ei(wa,Ma,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,-1),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,o,u,l,c,f]=this.children,d=e.getRenderTarget(),p=e.toneMapping,g=e.xr.enabled;e.toneMapping=Xi,e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,u),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xm extends Rn{constructor(e,t,n,r,o,u,l,c,f,d){e=e!==void 0?e:[],t=t!==void 0?t:Ua,super(e,t,n,r,o,u,l,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qo(5,5,5),o=new Zi({name:"CubemapFromEquirect",uniforms:Va(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:_r});o.uniforms.tEquirect.value=t;const u=new pi(r,o),l=t.minFilter;return t.minFilter===Wo&&(t.minFilter=Qn),new bS(1,10,this).update(e,u),t.minFilter=l,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(o)}}const Pc=new H,MS=new H,SS=new Vn;class gr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Pc.subVectors(n,t).cross(MS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Pc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(n).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||SS.getNormalMatrix(e),r=this.coplanarPoint(Pc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sa=new Nl,il=new H;class Lf{constructor(e=new gr,t=new gr,n=new gr,r=new gr,o=new gr,u=new gr){this.planes=[e,t,n,r,o,u]}set(e,t,n,r,o,u){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],o=n[1],u=n[2],l=n[3],c=n[4],f=n[5],d=n[6],p=n[7],g=n[8],_=n[9],y=n[10],v=n[11],m=n[12],b=n[13],A=n[14],S=n[15];return t[0].setComponents(l-r,p-c,v-g,S-m).normalize(),t[1].setComponents(l+r,p+c,v+g,S+m).normalize(),t[2].setComponents(l+o,p+f,v+_,S+b).normalize(),t[3].setComponents(l-o,p-f,v-_,S-b).normalize(),t[4].setComponents(l-u,p-d,v-y,S-A).normalize(),t[5].setComponents(l+u,p+d,v+y,S+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Sa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sa)}intersectsSprite(e){return Sa.center.set(0,0,0),Sa.radius=.7071067811865476,Sa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sa)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let i=null,e=!1,t=null,n=null;function r(o,u){t(o,u),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function ES(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,d){const p=f.array,g=f.usage,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,g),f.onUploadCallback();let y;if(p instanceof Float32Array)y=5126;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(p instanceof Int16Array)y=5122;else if(p instanceof Uint32Array)y=5125;else if(p instanceof Int32Array)y=5124;else if(p instanceof Int8Array)y=5120;else if(p instanceof Uint8Array)y=5121;else if(p instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version}}function o(f,d,p){const g=d.array,_=d.updateRange;i.bindBuffer(p,f),_.count===-1?i.bufferSubData(p,0,g):(t?i.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count):i.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g.subarray(_.offset,_.offset+_.count)),_.count=-1),d.onUploadCallback()}function u(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function c(f,d){if(f.isGLBufferAttribute){const g=n.get(f);(!g||g.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);p===void 0?n.set(f,r(f,d)):p.version<f.version&&(o(p.buffer,f,d),p.version=f.version)}return{get:u,remove:l,update:c}}class Rf extends Dn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,u=t/2,l=Math.floor(n),c=Math.floor(r),f=l+1,d=c+1,p=e/l,g=t/c,_=[],y=[],v=[],m=[];for(let b=0;b<d;b++){const A=b*g-u;for(let S=0;S<f;S++){const M=S*p-o;y.push(M,-A,0),v.push(0,0,1),m.push(S/l),m.push(1-b/c)}}for(let b=0;b<c;b++)for(let A=0;A<l;A++){const S=A+f*b,M=A+f*(b+1),w=A+1+f*(b+1),P=A+1+f*b;_.push(S,M,P),_.push(M,w,P)}this.setIndex(_),this.setAttribute("position",new Yt(y,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}static fromJSON(e){return new Rf(e.width,e.height,e.widthSegments,e.heightSegments)}}var TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,AS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS="vec3 transformed = vec3( position );",IS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,NS=`#ifdef USE_IRIDESCENCE
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
#endif`,FS=`#ifdef USE_BUMPMAP
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
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
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
}`,$S=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qS=`vec3 transformedNormal = objectNormal;
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
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JS="gl_FragColor = linearToOutputTexel( gl_FragColor );",QS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uE=`#ifdef USE_GRADIENTMAP
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
}`,cE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,gE=`#if defined( USE_ENVMAP )
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
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
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
#endif`,bE=`struct PhysicalMaterial {
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
}`,wE=`
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FE=`#ifdef USE_MORPHNORMALS
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
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,BE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,UE=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
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
#endif`,vT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_T=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,MT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LT=`#include <common>
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
}`,RT=`#if DEPTH_PACKING == 3200
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
}`,DT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FT=`uniform float scale;
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
}`,zT=`uniform vec3 diffuse;
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
}`,BT=`#include <common>
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
}`,kT=`uniform vec3 diffuse;
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
}`,UT=`#define LAMBERT
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
}`,GT=`#define LAMBERT
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
}`,HT=`#define MATCAP
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
}`,VT=`#define MATCAP
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
}`,WT=`#define NORMAL
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
}`,jT=`#define NORMAL
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
}`,$T=`#define PHONG
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
}`,qT=`#define PHONG
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
}`,XT=`#define STANDARD
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
}`,YT=`#define STANDARD
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
}`,ZT=`#define TOON
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
}`,KT=`#define TOON
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
}`,JT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,e2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,n2=`uniform float rotation;
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
}`,i2=`uniform vec3 diffuse;
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
}`,rt={alphamap_fragment:TS,alphamap_pars_fragment:AS,alphatest_fragment:CS,alphatest_pars_fragment:PS,aomap_fragment:LS,aomap_pars_fragment:RS,begin_vertex:DS,beginnormal_vertex:IS,bsdfs:OS,iridescence_fragment:NS,bumpmap_pars_fragment:FS,clipping_planes_fragment:zS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:kS,clipping_planes_vertex:US,color_fragment:GS,color_pars_fragment:HS,color_pars_vertex:VS,color_vertex:WS,common:jS,cube_uv_reflection_fragment:$S,defaultnormal_vertex:qS,displacementmap_pars_vertex:XS,displacementmap_vertex:YS,emissivemap_fragment:ZS,emissivemap_pars_fragment:KS,encodings_fragment:JS,encodings_pars_fragment:QS,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:gE,envmap_vertex:rE,fog_vertex:aE,fog_pars_vertex:oE,fog_fragment:sE,fog_pars_fragment:lE,gradientmap_pars_fragment:uE,lightmap_fragment:cE,lightmap_pars_fragment:fE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:dE,lights_pars_begin:pE,lights_toon_fragment:mE,lights_toon_pars_fragment:vE,lights_phong_fragment:_E,lights_phong_pars_fragment:xE,lights_physical_fragment:yE,lights_physical_pars_fragment:bE,lights_fragment_begin:wE,lights_fragment_maps:ME,lights_fragment_end:SE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:CE,map_fragment:PE,map_pars_fragment:LE,map_particle_fragment:RE,map_particle_pars_fragment:DE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:OE,morphcolor_vertex:NE,morphnormal_vertex:FE,morphtarget_pars_vertex:zE,morphtarget_vertex:BE,normal_fragment_begin:kE,normal_fragment_maps:UE,normal_pars_fragment:GE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:qE,iridescence_pars_fragment:XE,output_fragment:YE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:JE,dithering_fragment:QE,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:rT,shadowmap_vertex:aT,shadowmask_pars_fragment:oT,skinbase_vertex:sT,skinning_pars_vertex:lT,skinning_vertex:uT,skinnormal_vertex:cT,specularmap_fragment:fT,specularmap_pars_fragment:hT,tonemapping_fragment:dT,tonemapping_pars_fragment:pT,transmission_fragment:gT,transmission_pars_fragment:mT,uv_pars_fragment:vT,uv_pars_vertex:_T,uv_vertex:xT,uv2_pars_fragment:yT,uv2_pars_vertex:bT,uv2_vertex:wT,worldpos_vertex:MT,background_vert:ST,background_frag:ET,backgroundCube_vert:TT,backgroundCube_frag:AT,cube_vert:CT,cube_frag:PT,depth_vert:LT,depth_frag:RT,distanceRGBA_vert:DT,distanceRGBA_frag:IT,equirect_vert:OT,equirect_frag:NT,linedashed_vert:FT,linedashed_frag:zT,meshbasic_vert:BT,meshbasic_frag:kT,meshlambert_vert:UT,meshlambert_frag:GT,meshmatcap_vert:HT,meshmatcap_frag:VT,meshnormal_vert:WT,meshnormal_frag:jT,meshphong_vert:$T,meshphong_frag:qT,meshphysical_vert:XT,meshphysical_frag:YT,meshtoon_vert:ZT,meshtoon_frag:KT,points_vert:JT,points_frag:QT,shadow_vert:e2,shadow_frag:t2,sprite_vert:n2,sprite_frag:i2},Te={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vn},uv2Transform:{value:new Vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}}},Ei={basic:{uniforms:yn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:yn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:yn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:yn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:yn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:yn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:yn([Te.points,Te.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:yn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:yn([Te.common,Te.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:yn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:yn([Te.sprite,Te.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:yn([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:yn([Te.lights,Te.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ei.physical={uniforms:yn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const rl={r:0,b:0,g:0};function r2(i,e,t,n,r,o,u){const l=new xt(0);let c=o===!0?0:1,f,d,p=null,g=0,_=null;function y(m,b){let A=!1,S=b.isScene===!0?b.background:null;S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S));const M=i.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?v(l,c):S&&S.isColor&&(v(S,1),A=!0),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ol)?(d===void 0&&(d=new pi(new Qo(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Va(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=S.encoding!==It,(p!==S||g!==S.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,p=S,g=S.version,_=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(f===void 0&&(f=new pi(new Rf(2,2),new Zi({name:"BackgroundMaterial",uniforms:Va(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=S,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=S.encoding!==It,S.matrixAutoUpdate===!0&&S.updateMatrix(),f.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||g!==S.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,p=S,g=S.version,_=i.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null))}function v(m,b){m.getRGB(rl,jm(i)),n.buffers.color.setClear(rl.r,rl.g,rl.b,b,u)}return{getClearColor:function(){return l},setClearColor:function(m,b=1){l.set(m),c=b,v(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(l,c)},render:y}}function a2(i,e,t,n){const r=i.getParameter(34921),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),u=n.isWebGL2||o!==null,l={},c=m(null);let f=c,d=!1;function p(O,F,V,ie,ae){let _e=!1;if(u){const J=v(ie,V,F);f!==J&&(f=J,_(f.object)),_e=b(O,ie,V,ae),_e&&A(O,ie,V,ae)}else{const J=F.wireframe===!0;(f.geometry!==ie.id||f.program!==V.id||f.wireframe!==J)&&(f.geometry=ie.id,f.program=V.id,f.wireframe=J,_e=!0)}ae!==null&&t.update(ae,34963),(_e||d)&&(d=!1,T(O,F,V,ie),ae!==null&&i.bindBuffer(34963,t.get(ae).buffer))}function g(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function _(O){return n.isWebGL2?i.bindVertexArray(O):o.bindVertexArrayOES(O)}function y(O){return n.isWebGL2?i.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function v(O,F,V){const ie=V.wireframe===!0;let ae=l[O.id];ae===void 0&&(ae={},l[O.id]=ae);let _e=ae[F.id];_e===void 0&&(_e={},ae[F.id]=_e);let J=_e[ie];return J===void 0&&(J=m(g()),_e[ie]=J),J}function m(O){const F=[],V=[],ie=[];for(let ae=0;ae<r;ae++)F[ae]=0,V[ae]=0,ie[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:ie,object:O,attributes:{},index:null}}function b(O,F,V,ie){const ae=f.attributes,_e=F.attributes;let J=0;const pe=V.getAttributes();for(const $ in pe)if(pe[$].location>=0){const le=ae[$];let Q=_e[$];if(Q===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),le===void 0||le.attribute!==Q||Q&&le.data!==Q.data)return!0;J++}return f.attributesNum!==J||f.index!==ie}function A(O,F,V,ie){const ae={},_e=F.attributes;let J=0;const pe=V.getAttributes();for(const $ in pe)if(pe[$].location>=0){let le=_e[$];le===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(le=O.instanceColor));const Q={};Q.attribute=le,le&&le.data&&(Q.data=le.data),ae[$]=Q,J++}f.attributes=ae,f.attributesNum=J,f.index=ie}function S(){const O=f.newAttributes;for(let F=0,V=O.length;F<V;F++)O[F]=0}function M(O){w(O,0)}function w(O,F){const V=f.newAttributes,ie=f.enabledAttributes,ae=f.attributeDivisors;V[O]=1,ie[O]===0&&(i.enableVertexAttribArray(O),ie[O]=1),ae[O]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),ae[O]=F)}function P(){const O=f.newAttributes,F=f.enabledAttributes;for(let V=0,ie=F.length;V<ie;V++)F[V]!==O[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function I(O,F,V,ie,ae,_e){n.isWebGL2===!0&&(V===5124||V===5125)?i.vertexAttribIPointer(O,F,V,ae,_e):i.vertexAttribPointer(O,F,V,ie,ae,_e)}function T(O,F,V,ie){if(n.isWebGL2===!1&&(O.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const ae=ie.attributes,_e=V.getAttributes(),J=F.defaultAttributeValues;for(const pe in _e){const $=_e[pe];if($.location>=0){let fe=ae[pe];if(fe===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor)),fe!==void 0){const le=fe.normalized,Q=fe.itemSize,W=t.get(fe);if(W===void 0)continue;const q=W.buffer,oe=W.type,ye=W.bytesPerElement;if(fe.isInterleavedBufferAttribute){const xe=fe.data,Ne=xe.stride,Ie=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let ke=0;ke<$.locationSize;ke++)w($.location+ke,xe.meshPerAttribute);O.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ke=0;ke<$.locationSize;ke++)M($.location+ke);i.bindBuffer(34962,q);for(let ke=0;ke<$.locationSize;ke++)I($.location+ke,Q/$.locationSize,oe,le,Ne*ye,(Ie+Q/$.locationSize*ke)*ye)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<$.locationSize;xe++)w($.location+xe,fe.meshPerAttribute);O.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<$.locationSize;xe++)M($.location+xe);i.bindBuffer(34962,q);for(let xe=0;xe<$.locationSize;xe++)I($.location+xe,Q/$.locationSize,oe,le,Q*ye,Q/$.locationSize*xe*ye)}}else if(J!==void 0){const le=J[pe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv($.location,le);break;case 3:i.vertexAttrib3fv($.location,le);break;case 4:i.vertexAttrib4fv($.location,le);break;default:i.vertexAttrib1fv($.location,le)}}}}P()}function D(){Z();for(const O in l){const F=l[O];for(const V in F){const ie=F[V];for(const ae in ie)y(ie[ae].object),delete ie[ae];delete F[V]}delete l[O]}}function U(O){if(l[O.id]===void 0)return;const F=l[O.id];for(const V in F){const ie=F[V];for(const ae in ie)y(ie[ae].object),delete ie[ae];delete F[V]}delete l[O.id]}function ee(O){for(const F in l){const V=l[F];if(V[O.id]===void 0)continue;const ie=V[O.id];for(const ae in ie)y(ie[ae].object),delete ie[ae];delete V[O.id]}}function Z(){j(),d=!0,f!==c&&(f=c,_(f.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:j,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:ee,initAttributes:S,enableAttribute:M,disableUnusedAttributes:P}}function o2(i,e,t,n){const r=n.isWebGL2;let o;function u(f){o=f}function l(f,d){i.drawArrays(o,f,d),t.update(d,o,1)}function c(f,d,p){if(p===0)return;let g,_;if(r)g=i,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](o,f,d,p),t.update(d,o,p)}this.setMode=u,this.render=l,this.renderInstances=c}function s2(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let l=t.precision!==void 0?t.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const f=u||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(34930),g=i.getParameter(35660),_=i.getParameter(3379),y=i.getParameter(34076),v=i.getParameter(34921),m=i.getParameter(36347),b=i.getParameter(36348),A=i.getParameter(36349),S=g>0,M=u||e.has("OES_texture_float"),w=S&&M,P=u?i.getParameter(36183):0;return{isWebGL2:u,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:m,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:P}}function l2(i){const e=this;let t=null,n=0,r=!1,o=!1;const u=new gr,l=new Vn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const _=p.length!==0||g||n!==0||r;return r=g,n=p.length,_},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,g){t=d(p,g,0)},this.setState=function(p,g,_){const y=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,b=i.get(p);if(!r||y===null||y.length===0||o&&!m)o?d(null):f();else{const A=o?0:n,S=A*4;let M=b.clippingState||null;c.value=M,M=d(y,g,S,_);for(let w=0;w!==S;++w)M[w]=t[w];b.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,g,_,y){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,y!==!0||m===null){const b=_+v*4,A=g.matrixWorldInverse;l.getNormalMatrix(A),(m===null||m.length<b)&&(m=new Float32Array(b));for(let S=0,M=_;S!==v;++S,M+=4)u.copy(p[S]).applyMatrix4(A,l),u.normal.toArray(m,M),m[M+3]=u.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function u2(i){let e=new WeakMap;function t(u,l){return l===Qc?u.mapping=Ua:l===ef&&(u.mapping=Ga),u}function n(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const l=u.mapping;if(l===Qc||l===ef)if(e.has(u)){const c=e.get(u).texture;return t(c,u.mapping)}else{const c=u.image;if(c&&c.height>0){const f=new wS(c.height/2);return f.fromEquirectangularTexture(i,u),e.set(u,f),u.addEventListener("dispose",r),t(f.texture,u.mapping)}else return null}}return u}function r(u){const l=u.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Df extends qm{constructor(e=-1,t=1,n=1,r=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,u=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,u,l,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ia=4,ag=[.125,.215,.35,.446,.526,.582],zr=20,Lc=new Df,og=new xt;let Rc=null;const Or=(1+Math.sqrt(5))/2,Ea=1/Or,sg=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Or,Ea),new H(0,Or,-Ea),new H(Ea,0,Or),new H(-Ea,0,Or),new H(Or,Ea,0),new H(-Or,Ea,0)];class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Rc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc),e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ua||e.mapping===Ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:jo,format:di,encoding:Wr,depthBuffer:!1},r=ug(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c2(o)),this._blurMaterial=f2(o,e,t)}return r}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,r){const l=new ei(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor(og),d.toneMapping=Xi,d.autoClear=!1;const _=new Pf({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),y=new pi(new Qo,_);let v=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,v=!0):(_.color.copy(og),v=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(l.up.set(0,c[b],0),l.lookAt(f[b],0,0)):A===1?(l.up.set(0,0,c[b]),l.lookAt(0,f[b],0)):(l.up.set(0,c[b],0),l.lookAt(0,0,f[b]));const S=this._cubeSize;al(r,A*S,b>2?S:0,S,S),d.setRenderTarget(r),v&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=g,d.autoClear=p,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ua||e.mapping===Ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());const o=r?this._cubemapMaterial:this._equirectMaterial,u=new pi(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;al(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(u,Lc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),u=sg[(r-1)%sg.length];this._blur(e,r-1,r,o,u)}t.autoClear=n}_blur(e,t,n,r,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",o),this._halfBlur(u,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,u,l){const c=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new pi(this._lodPlanes[r],f),g=f.uniforms,_=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*zr-1),v=o/y,m=isFinite(o)?1+Math.floor(d*v):zr;m>zr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const b=[];let A=0;for(let I=0;I<zr;++I){const T=I/v,D=Math.exp(-T*T/2);b.push(D),I===0?A+=D:I<m&&(A+=2*D)}for(let I=0;I<b.length;I++)b[I]=b[I]/A;g.envMap.value=e.texture,g.samples.value=m,g.weights.value=b,g.latitudinal.value=u==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:S}=this;g.dTheta.value=y,g.mipInt.value=S-n;const M=this._sizeLods[r],w=3*M*(r>S-Ia?r-S+Ia:0),P=4*(this._cubeSize-M);al(t,w,P,3*M,2*M),c.setRenderTarget(t),c.render(p,Lc)}}function c2(i){const e=[],t=[],n=[];let r=i;const o=i-Ia+1+ag.length;for(let u=0;u<o;u++){const l=Math.pow(2,r);t.push(l);let c=1/l;u>i-Ia?c=ag[u-i+Ia-1]:u===0&&(c=0),n.push(c);const f=1/(l-2),d=-f,p=1+f,g=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,y=6,v=3,m=2,b=1,A=new Float32Array(v*y*_),S=new Float32Array(m*y*_),M=new Float32Array(b*y*_);for(let P=0;P<_;P++){const I=P%3*2/3-1,T=P>2?0:-1,D=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];A.set(D,v*y*P),S.set(g,m*y*P);const U=[P,P,P,P,P,P];M.set(U,b*y*P)}const w=new Dn;w.setAttribute("position",new ti(A,v)),w.setAttribute("uv",new ti(S,m)),w.setAttribute("faceIndex",new ti(M,b)),e.push(w),r>Ia&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ug(i,e,t){const n=new br(i,e,t);return n.texture.mapping=Ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function al(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function f2(i,e,t){const n=new Float32Array(zr),r=new H(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:If(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function cg(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function fg(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function If(){return`

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
	`}function h2(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,f=c===Qc||c===ef,d=c===Ua||c===Ga;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new lg(i)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new lg(i));const g=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,g),l.addEventListener("dispose",o),g.texture}else return null}}}return l}function r(l){let c=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&c++;return c===f}function o(l){const c=l.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function d2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function p2(i,e,t,n){const r={},o=new WeakMap;function u(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",u),delete r[g.id];const _=o.get(g);_&&(e.remove(_),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(p,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,t.memory.geometries++),g}function c(p){const g=p.attributes;for(const y in g)e.update(g[y],34962);const _=p.morphAttributes;for(const y in _){const v=_[y];for(let m=0,b=v.length;m<b;m++)e.update(v[m],34962)}}function f(p){const g=[],_=p.index,y=p.attributes.position;let v=0;if(_!==null){const A=_.array;v=_.version;for(let S=0,M=A.length;S<M;S+=3){const w=A[S+0],P=A[S+1],I=A[S+2];g.push(w,P,P,I,I,w)}}else{const A=y.array;v=y.version;for(let S=0,M=A.length/3-1;S<M;S+=3){const w=S+0,P=S+1,I=S+2;g.push(w,P,P,I,I,w)}}const m=new(Bm(g)?Wm:Vm)(g,1);m.version=v;const b=o.get(p);b&&e.remove(b),o.set(p,m)}function d(p){const g=o.get(p);if(g){const _=p.index;_!==null&&g.version<_.version&&f(p)}else f(p);return o.get(p)}return{get:l,update:c,getWireframeAttribute:d}}function g2(i,e,t,n){const r=n.isWebGL2;let o;function u(g){o=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function d(g,_){i.drawElements(o,_,l,g*c),t.update(_,o,1)}function p(g,_,y){if(y===0)return;let v,m;if(r)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,_,l,g*c,y),t.update(_,o,y)}this.setMode=u,this.setIndex=f,this.render=d,this.renderInstances=p}function m2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,l){switch(t.calls++,u){case 4:t.triangles+=l*(o/3);break;case 1:t.lines+=l*(o/2);break;case 3:t.lines+=l*(o-1);break;case 2:t.lines+=l*o;break;case 0:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function v2(i,e){return i[0]-e[0]}function _2(i,e){return Math.abs(e[1])-Math.abs(i[1])}function x2(i,e,t){const n={},r=new Float32Array(8),o=new WeakMap,u=new nn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function c(f,d,p,g){const _=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=y!==void 0?y.length:0;let m=o.get(d);if(m===void 0||m.count!==v){let F=function(){j.dispose(),o.delete(d),d.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const S=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let D=0;S===!0&&(D=1),M===!0&&(D=2),w===!0&&(D=3);let U=d.attributes.position.count*D,ee=1;U>e.maxTextureSize&&(ee=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const Z=new Float32Array(U*ee*4*v),j=new Hm(Z,U,ee,v);j.type=Ur,j.needsUpdate=!0;const O=D*4;for(let V=0;V<v;V++){const ie=P[V],ae=I[V],_e=T[V],J=U*ee*4*V;for(let pe=0;pe<ie.count;pe++){const $=pe*O;S===!0&&(u.fromBufferAttribute(ie,pe),Z[J+$+0]=u.x,Z[J+$+1]=u.y,Z[J+$+2]=u.z,Z[J+$+3]=0),M===!0&&(u.fromBufferAttribute(ae,pe),Z[J+$+4]=u.x,Z[J+$+5]=u.y,Z[J+$+6]=u.z,Z[J+$+7]=0),w===!0&&(u.fromBufferAttribute(_e,pe),Z[J+$+8]=u.x,Z[J+$+9]=u.y,Z[J+$+10]=u.z,Z[J+$+11]=_e.itemSize===4?u.w:1)}}m={count:v,texture:j,size:new Ee(U,ee)},o.set(d,m),d.addEventListener("dispose",F)}let b=0;for(let S=0;S<_.length;S++)b+=_[S];const A=d.morphTargetsRelative?1:1-b;g.getUniforms().setValue(i,"morphTargetBaseInfluence",A),g.getUniforms().setValue(i,"morphTargetInfluences",_),g.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),g.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const y=_===void 0?0:_.length;let v=n[d.id];if(v===void 0||v.length!==y){v=[];for(let M=0;M<y;M++)v[M]=[M,0];n[d.id]=v}for(let M=0;M<y;M++){const w=v[M];w[0]=M,w[1]=_[M]}v.sort(_2);for(let M=0;M<8;M++)M<y&&v[M][1]?(l[M][0]=v[M][0],l[M][1]=v[M][1]):(l[M][0]=Number.MAX_SAFE_INTEGER,l[M][1]=0);l.sort(v2);const m=d.morphAttributes.position,b=d.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const w=l[M],P=w[0],I=w[1];P!==Number.MAX_SAFE_INTEGER&&I?(m&&d.getAttribute("morphTarget"+M)!==m[P]&&d.setAttribute("morphTarget"+M,m[P]),b&&d.getAttribute("morphNormal"+M)!==b[P]&&d.setAttribute("morphNormal"+M,b[P]),r[M]=I,A+=I):(m&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),b&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const S=d.morphTargetsRelative?1:1-A;g.getUniforms().setValue(i,"morphTargetBaseInfluence",S),g.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function y2(i,e,t,n){let r=new WeakMap;function o(c){const f=n.render.frame,d=c.geometry,p=e.get(c,d);return r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),p}function u(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:u}}const Zm=new Rn,Km=new Hm,Jm=new sS,Qm=new Xm,hg=[],dg=[],pg=new Float32Array(16),gg=new Float32Array(9),mg=new Float32Array(4);function $a(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=hg[r];if(o===void 0&&(o=new Float32Array(r),hg[r]=o),e!==0){n.toArray(o,0);for(let u=1,l=0;u!==e;++u)l+=t,i[u].toArray(o,l)}return o}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=dg[e];t===void 0&&(t=new Int32Array(e),dg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function b2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function w2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function M2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function S2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function E2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;mg.set(n),i.uniformMatrix2fv(this.addr,!1,mg),Kt(t,n)}}function T2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;gg.set(n),i.uniformMatrix3fv(this.addr,!1,gg),Kt(t,n)}}function A2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;pg.set(n),i.uniformMatrix4fv(this.addr,!1,pg),Kt(t,n)}}function C2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function L2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function R2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function D2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function O2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function N2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function F2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Zm,r)}function z2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jm,r)}function B2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qm,r)}function k2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Km,r)}function U2(i){switch(i){case 5126:return b2;case 35664:return w2;case 35665:return M2;case 35666:return S2;case 35674:return E2;case 35675:return T2;case 35676:return A2;case 5124:case 35670:return C2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return R2;case 5125:return D2;case 36294:return I2;case 36295:return O2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return k2}}function G2(i,e){i.uniform1fv(this.addr,e)}function H2(i,e){const t=$a(e,this.size,2);i.uniform2fv(this.addr,t)}function V2(i,e){const t=$a(e,this.size,3);i.uniform3fv(this.addr,t)}function W2(i,e){const t=$a(e,this.size,4);i.uniform4fv(this.addr,t)}function j2(i,e){const t=$a(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $2(i,e){const t=$a(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q2(i,e){const t=$a(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function X2(i,e){i.uniform1iv(this.addr,e)}function Y2(i,e){i.uniform2iv(this.addr,e)}function Z2(i,e){i.uniform3iv(this.addr,e)}function K2(i,e){i.uniform4iv(this.addr,e)}function J2(i,e){i.uniform1uiv(this.addr,e)}function Q2(i,e){i.uniform2uiv(this.addr,e)}function eA(i,e){i.uniform3uiv(this.addr,e)}function tA(i,e){i.uniform4uiv(this.addr,e)}function nA(i,e,t){const n=this.cache,r=e.length,o=zl(t,r);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||Zm,o[u])}function iA(i,e,t){const n=this.cache,r=e.length,o=zl(t,r);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||Jm,o[u])}function rA(i,e,t){const n=this.cache,r=e.length,o=zl(t,r);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||Qm,o[u])}function aA(i,e,t){const n=this.cache,r=e.length,o=zl(t,r);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||Km,o[u])}function oA(i){switch(i){case 5126:return G2;case 35664:return H2;case 35665:return V2;case 35666:return W2;case 35674:return j2;case 35675:return $2;case 35676:return q2;case 5124:case 35670:return X2;case 35667:case 35671:return Y2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return J2;case 36294:return Q2;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return aA}}class sA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=U2(t.type)}}class lA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=oA(t.type)}}class uA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,u=r.length;o!==u;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function vg(i,e){i.seq.push(e),i.map[e.id]=e}function cA(i,e,t){const n=i.name,r=n.length;for(Dc.lastIndex=0;;){const o=Dc.exec(n),u=Dc.lastIndex;let l=o[1];const c=o[2]==="]",f=o[3];if(c&&(l=l|0),f===void 0||f==="["&&u+2===r){vg(t,f===void 0?new sA(l,i,e):new lA(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new uA(l),vg(t,p)),t=p}}}class ml{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),u=e.getUniformLocation(t,o.name);cA(o,u,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,u=t.length;o!==u;++o){const l=t[o],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function _g(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let fA=0;function hA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=r;u<o;u++){const l=u+1;n.push(`${l===e?">":" "} ${l}: ${t[u]}`)}return n.join(`
`)}function dA(i){switch(i){case Wr:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function xg(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hA(i.getShaderSource(e),u)}else return r}function pA(i,e){const t=dA(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gA(i,e){let t;switch(e){case OM:t="Linear";break;case NM:t="Reinhard";break;case FM:t="OptimizedCineon";break;case zM:t="ACESFilmic";break;case BM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mA(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oo).join(`
`)}function vA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _A(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),u=o.name;let l=1;o.type===35674&&(l=2),o.type===35675&&(l=3),o.type===35676&&(l=4),t[u]={type:o.type,location:i.getAttribLocation(e,u),locationSize:l}}return t}function Oo(i){return i!==""}function yg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(i){return i.replace(xA,yA)}function yA(i,e){const t=rt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return sf(t)}const bA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(i){return i.replace(bA,wA)}function wA(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Mg(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Io&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ua:case Ga:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ga:e="ENVMAP_MODE_REFRACTION";break}return e}function TA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case DM:e="ENVMAP_BLENDING_MIX";break;case IM:e="ENVMAP_BLENDING_ADD";break}return e}function AA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CA(i,e,t,n){const r=i.getContext(),o=t.defines;let u=t.vertexShader,l=t.fragmentShader;const c=MA(t),f=SA(t),d=EA(t),p=TA(t),g=AA(t),_=t.isWebGL2?"":mA(t),y=vA(o),v=r.createProgram();let m,b,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[y].filter(Oo).join(`
`),m.length>0&&(m+=`
`),b=[_,y].filter(Oo).join(`
`),b.length>0&&(b+=`
`)):(m=[Mg(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),b=[_,Mg(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?gA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.encodings_pars_fragment,pA("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),u=sf(u),u=yg(u,t),u=bg(u,t),l=sf(l),l=yg(l,t),l=bg(l,t),u=wg(u),l=wg(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["#define varying in",t.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const S=A+m+u,M=A+b+l,w=_g(r,35633,S),P=_g(r,35632,M);if(r.attachShader(v,w),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const D=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(w).trim(),ee=r.getShaderInfoLog(P).trim();let Z=!0,j=!0;if(r.getProgramParameter(v,35714)===!1){Z=!1;const O=xg(r,w,"vertex"),F=xg(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+D+`
`+O+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||ee==="")&&(j=!1);j&&(this.diagnostics={runnable:Z,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:ee,prefix:b}})}r.deleteShader(w),r.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new ml(r,v)),I};let T;return this.getAttributes=function(){return T===void 0&&(T=_A(r,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=P,this}let PA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RA(e),t.set(e,n)),n}}class RA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function DA(i,e,t,n,r,o,u){const l=new Cf,c=new LA,f=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T,D,U,ee,Z){const j=ee.fog,O=Z.geometry,F=T.isMeshStandardMaterial?ee.environment:null,V=(T.isMeshStandardMaterial?t:e).get(T.envMap||F),ie=V&&V.mapping===Ol?V.image.height:null,ae=y[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=_e!==void 0?_e.length:0;let pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let $,fe,le,Q;if(ae){const Ne=Ei[ae];$=Ne.vertexShader,fe=Ne.fragmentShader}else $=T.vertexShader,fe=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),Q=c.getFragmentShaderID(T);const W=i.getRenderTarget(),q=T.alphaTest>0,oe=T.clearcoat>0,ye=T.iridescence>0;return{isWebGL2:d,shaderID:ae,shaderName:T.type,vertexShader:$,fragmentShader:fe,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:g,outputEncoding:W===null?i.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Wr,map:!!T.map,matcap:!!T.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:ie,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===iS,tangentSpaceNormalMap:T.normalMapType===zm,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===It,clearcoat:oe,clearcoatMap:oe&&!!T.clearcoatMap,clearcoatRoughnessMap:oe&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!T.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!T.iridescenceMap,iridescenceThicknessMap:ye&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===Ba,alphaMap:!!T.alphaMap,alphaTest:q,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!O.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!j,useFog:T.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:p,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:T.toneMapped?i.toneMapping:Xi,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===mr,flipSided:T.side===Ln,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)D.push(U),D.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(b(D,T),A(D,T),D.push(i.outputEncoding)),D.push(T.customProgramCacheKey),D.join()}function b(T,D){T.push(D.precision),T.push(D.outputEncoding),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.combine),T.push(D.vertexUvs),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function A(T,D){l.disableAll(),D.isWebGL2&&l.enable(0),D.supportsVertexTextures&&l.enable(1),D.instancing&&l.enable(2),D.instancingColor&&l.enable(3),D.map&&l.enable(4),D.matcap&&l.enable(5),D.envMap&&l.enable(6),D.lightMap&&l.enable(7),D.aoMap&&l.enable(8),D.emissiveMap&&l.enable(9),D.bumpMap&&l.enable(10),D.normalMap&&l.enable(11),D.objectSpaceNormalMap&&l.enable(12),D.tangentSpaceNormalMap&&l.enable(13),D.clearcoat&&l.enable(14),D.clearcoatMap&&l.enable(15),D.clearcoatRoughnessMap&&l.enable(16),D.clearcoatNormalMap&&l.enable(17),D.iridescence&&l.enable(18),D.iridescenceMap&&l.enable(19),D.iridescenceThicknessMap&&l.enable(20),D.displacementMap&&l.enable(21),D.specularMap&&l.enable(22),D.roughnessMap&&l.enable(23),D.metalnessMap&&l.enable(24),D.gradientMap&&l.enable(25),D.alphaMap&&l.enable(26),D.alphaTest&&l.enable(27),D.vertexColors&&l.enable(28),D.vertexAlphas&&l.enable(29),D.vertexUvs&&l.enable(30),D.vertexTangents&&l.enable(31),D.uvsVertexOnly&&l.enable(32),T.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.skinning&&l.enable(4),D.morphTargets&&l.enable(5),D.morphNormals&&l.enable(6),D.morphColors&&l.enable(7),D.premultipliedAlpha&&l.enable(8),D.shadowMapEnabled&&l.enable(9),D.physicallyCorrectLights&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.specularIntensityMap&&l.enable(15),D.specularColorMap&&l.enable(16),D.transmission&&l.enable(17),D.transmissionMap&&l.enable(18),D.thicknessMap&&l.enable(19),D.sheen&&l.enable(20),D.sheenColorMap&&l.enable(21),D.sheenRoughnessMap&&l.enable(22),D.decodeVideoTexture&&l.enable(23),D.opaque&&l.enable(24),T.push(l.mask)}function S(T){const D=y[T.type];let U;if(D){const ee=Ei[D];U=$m.clone(ee.uniforms)}else U=T.uniforms;return U}function M(T,D){let U;for(let ee=0,Z=f.length;ee<Z;ee++){const j=f[ee];if(j.cacheKey===D){U=j,++U.usedTimes;break}}return U===void 0&&(U=new CA(i,D,T,o),f.push(U)),U}function w(T){if(--T.usedTimes===0){const D=f.indexOf(T);f[D]=f[f.length-1],f.pop(),T.destroy()}}function P(T){c.remove(T)}function I(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:P,programs:f,dispose:I}}function IA(){let i=new WeakMap;function e(o){let u=i.get(o);return u===void 0&&(u={},i.set(o,u)),u}function t(o){i.delete(o)}function n(o,u,l){i.get(o)[u]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function OA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eg(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function u(p,g,_,y,v,m){let b=i[e];return b===void 0?(b={id:p.id,object:p,geometry:g,material:_,groupOrder:y,renderOrder:p.renderOrder,z:v,group:m},i[e]=b):(b.id=p.id,b.object=p,b.geometry=g,b.material=_,b.groupOrder=y,b.renderOrder=p.renderOrder,b.z=v,b.group=m),e++,b}function l(p,g,_,y,v,m){const b=u(p,g,_,y,v,m);_.transmission>0?n.push(b):_.transparent===!0?r.push(b):t.push(b)}function c(p,g,_,y,v,m){const b=u(p,g,_,y,v,m);_.transmission>0?n.unshift(b):_.transparent===!0?r.unshift(b):t.unshift(b)}function f(p,g){t.length>1&&t.sort(p||OA),n.length>1&&n.sort(g||Sg),r.length>1&&r.sort(g||Sg)}function d(){for(let p=e,g=i.length;p<g;p++){const _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:d,sort:f}}function NA(){let i=new WeakMap;function e(n,r){const o=i.get(n);let u;return o===void 0?(u=new Eg,i.set(n,[u])):r>=o.length?(u=new Eg,o.push(u)):u=o[r],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function FA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new xt};break;case"SpotLight":t={position:new H,direction:new H,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function zA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let BA=0;function kA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UA(i,e){const t=new FA,n=zA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new H);const o=new H,u=new Ft,l=new Ft;function c(d,p){let g=0,_=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let v=0,m=0,b=0,A=0,S=0,M=0,w=0,P=0,I=0,T=0;d.sort(kA);const D=p!==!0?Math.PI:1;for(let ee=0,Z=d.length;ee<Z;ee++){const j=d[ee],O=j.color,F=j.intensity,V=j.distance,ie=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=O.r*F*D,_+=O.g*F*D,y+=O.b*F*D;else if(j.isLightProbe)for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(j.sh.coefficients[ae],F);else if(j.isDirectionalLight){const ae=t.get(j);if(ae.color.copy(j.color).multiplyScalar(j.intensity*D),j.castShadow){const _e=j.shadow,J=n.get(j);J.shadowBias=_e.bias,J.shadowNormalBias=_e.normalBias,J.shadowRadius=_e.radius,J.shadowMapSize=_e.mapSize,r.directionalShadow[v]=J,r.directionalShadowMap[v]=ie,r.directionalShadowMatrix[v]=j.shadow.matrix,M++}r.directional[v]=ae,v++}else if(j.isSpotLight){const ae=t.get(j);ae.position.setFromMatrixPosition(j.matrixWorld),ae.color.copy(O).multiplyScalar(F*D),ae.distance=V,ae.coneCos=Math.cos(j.angle),ae.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ae.decay=j.decay,r.spot[b]=ae;const _e=j.shadow;if(j.map&&(r.spotLightMap[I]=j.map,I++,_e.updateMatrices(j),j.castShadow&&T++),r.spotLightMatrix[b]=_e.matrix,j.castShadow){const J=n.get(j);J.shadowBias=_e.bias,J.shadowNormalBias=_e.normalBias,J.shadowRadius=_e.radius,J.shadowMapSize=_e.mapSize,r.spotShadow[b]=J,r.spotShadowMap[b]=ie,P++}b++}else if(j.isRectAreaLight){const ae=t.get(j);ae.color.copy(O).multiplyScalar(F),ae.halfWidth.set(j.width*.5,0,0),ae.halfHeight.set(0,j.height*.5,0),r.rectArea[A]=ae,A++}else if(j.isPointLight){const ae=t.get(j);if(ae.color.copy(j.color).multiplyScalar(j.intensity*D),ae.distance=j.distance,ae.decay=j.decay,j.castShadow){const _e=j.shadow,J=n.get(j);J.shadowBias=_e.bias,J.shadowNormalBias=_e.normalBias,J.shadowRadius=_e.radius,J.shadowMapSize=_e.mapSize,J.shadowCameraNear=_e.camera.near,J.shadowCameraFar=_e.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=j.shadow.matrix,w++}r.point[m]=ae,m++}else if(j.isHemisphereLight){const ae=t.get(j);ae.skyColor.copy(j.color).multiplyScalar(F*D),ae.groundColor.copy(j.groundColor).multiplyScalar(F*D),r.hemi[S]=ae,S++}}A>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const U=r.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==b||U.rectAreaLength!==A||U.hemiLength!==S||U.numDirectionalShadows!==M||U.numPointShadows!==w||U.numSpotShadows!==P||U.numSpotMaps!==I)&&(r.directional.length=v,r.spot.length=b,r.rectArea.length=A,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+I-T,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=T,U.directionalLength=v,U.pointLength=m,U.spotLength=b,U.rectAreaLength=A,U.hemiLength=S,U.numDirectionalShadows=M,U.numPointShadows=w,U.numSpotShadows=P,U.numSpotMaps=I,r.version=BA++)}function f(d,p){let g=0,_=0,y=0,v=0,m=0;const b=p.matrixWorldInverse;for(let A=0,S=d.length;A<S;A++){const M=d[A];if(M.isDirectionalLight){const w=r.directional[g];w.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(b),g++}else if(M.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(b),w.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(b),y++}else if(M.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(b),l.identity(),u.copy(M.matrixWorld),u.premultiply(b),l.extractRotation(u),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),v++}else if(M.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(b),_++}else if(M.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(b),m++}}}return{setup:c,setupView:f,state:r}}function Tg(i,e){const t=new UA(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function u(p){n.push(p)}function l(p){r.push(p)}function c(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:f,pushLight:u,pushShadow:l}}function GA(i,e){let t=new WeakMap;function n(o,u=0){const l=t.get(o);let c;return l===void 0?(c=new Tg(i,e),t.set(o,[c])):u>=l.length?(c=new Tg(i,e),l.push(c)):c=l[u],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class HA extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VA extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
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
}`;function $A(i,e,t){let n=new Lf;const r=new Ee,o=new Ee,u=new nn,l=new HA({depthPacking:nS}),c=new VA,f={},d=t.maxTextureSize,p={[yr]:Ln,[Ln]:yr,[mr]:mr},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:WA,fragmentShader:jA}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const y=new Dn;y.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pi(y,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dm,this.render=function(M,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const I=i.getRenderTarget(),T=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(_r),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let ee=0,Z=M.length;ee<Z;ee++){const j=M[ee],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const F=O.getFrameExtents();if(r.multiply(F),o.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/F.x),r.x=o.x*F.x,O.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/F.y),r.y=o.y*F.y,O.mapSize.y=o.y)),O.map===null){const ie=this.type!==Io?{minFilter:bn,magFilter:bn}:{};O.map=new br(r.x,r.y,ie),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const V=O.getViewportCount();for(let ie=0;ie<V;ie++){const ae=O.getViewport(ie);u.set(o.x*ae.x,o.y*ae.y,o.x*ae.z,o.y*ae.w),U.viewport(u),O.updateMatrices(j,ie),n=O.getFrustum(),S(w,P,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===Io&&b(O,P),O.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(I,T,D)};function b(M,w){const P=e.update(v);g.defines.VSM_SAMPLES!==M.blurSamples&&(g.defines.VSM_SAMPLES=M.blurSamples,_.defines.VSM_SAMPLES=M.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new br(r.x,r.y)),g.uniforms.shadow_pass.value=M.map.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,P,g,v,null),_.uniforms.shadow_pass.value=M.mapPass.texture,_.uniforms.resolution.value=M.mapSize,_.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,P,_,v,null)}function A(M,w,P,I,T,D){let U=null;const ee=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(ee!==void 0)U=ee;else if(U=P.isPointLight===!0?c:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=U.uuid,j=w.uuid;let O=f[Z];O===void 0&&(O={},f[Z]=O);let F=O[j];F===void 0&&(F=U.clone(),O[j]=F),U=F}return U.visible=w.visible,U.wireframe=w.wireframe,D===Io?U.side=w.shadowSide!==null?w.shadowSide:w.side:U.side=w.shadowSide!==null?w.shadowSide:p[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,P.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(P.matrixWorld),U.nearDistance=I,U.farDistance=T),U}function S(M,w,P,I,T){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Io)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const ee=e.update(M),Z=M.material;if(Array.isArray(Z)){const j=ee.groups;for(let O=0,F=j.length;O<F;O++){const V=j[O],ie=Z[V.materialIndex];if(ie&&ie.visible){const ae=A(M,ie,I,P.near,P.far,T);i.renderBufferDirect(P,null,ee,ae,M,V)}}}else if(Z.visible){const j=A(M,Z,I,P.near,P.far,T);i.renderBufferDirect(P,null,ee,j,M,null)}}const U=M.children;for(let ee=0,Z=U.length;ee<Z;ee++)S(U[ee],w,P,I,T)}}function qA(i,e,t){const n=t.isWebGL2;function r(){let Y=!1;const he=new nn;let Me=null;const De=new nn(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!Y&&(i.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){Y=Ge},setClear:function(Ge,gt,Vt,Qt,_i){_i===!0&&(Ge*=Qt,gt*=Qt,Vt*=Qt),he.set(Ge,gt,Vt,Qt),De.equals(he)===!1&&(i.clearColor(Ge,gt,Vt,Qt),De.copy(he))},reset:function(){Y=!1,Me=null,De.set(-1,0,0,0)}}}function o(){let Y=!1,he=null,Me=null,De=null;return{setTest:function(Ge){Ge?q(2929):oe(2929)},setMask:function(Ge){he!==Ge&&!Y&&(i.depthMask(Ge),he=Ge)},setFunc:function(Ge){if(Me!==Ge){switch(Ge){case EM:i.depthFunc(512);break;case TM:i.depthFunc(519);break;case AM:i.depthFunc(513);break;case Jc:i.depthFunc(515);break;case CM:i.depthFunc(514);break;case PM:i.depthFunc(518);break;case LM:i.depthFunc(516);break;case RM:i.depthFunc(517);break;default:i.depthFunc(515)}Me=Ge}},setLocked:function(Ge){Y=Ge},setClear:function(Ge){De!==Ge&&(i.clearDepth(Ge),De=Ge)},reset:function(){Y=!1,he=null,Me=null,De=null}}}function u(){let Y=!1,he=null,Me=null,De=null,Ge=null,gt=null,Vt=null,Qt=null,_i=null;return{setTest:function(Ct){Y||(Ct?q(2960):oe(2960))},setMask:function(Ct){he!==Ct&&!Y&&(i.stencilMask(Ct),he=Ct)},setFunc:function(Ct,ni,Sn){(Me!==Ct||De!==ni||Ge!==Sn)&&(i.stencilFunc(Ct,ni,Sn),Me=Ct,De=ni,Ge=Sn)},setOp:function(Ct,ni,Sn){(gt!==Ct||Vt!==ni||Qt!==Sn)&&(i.stencilOp(Ct,ni,Sn),gt=Ct,Vt=ni,Qt=Sn)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){_i!==Ct&&(i.clearStencil(Ct),_i=Ct)},reset:function(){Y=!1,he=null,Me=null,De=null,Ge=null,gt=null,Vt=null,Qt=null,_i=null}}}const l=new r,c=new o,f=new u,d=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,v=[],m=null,b=!1,A=null,S=null,M=null,w=null,P=null,I=null,T=null,D=!1,U=null,ee=null,Z=null,j=null,O=null;const F=i.getParameter(35661);let V=!1,ie=0;const ae=i.getParameter(7938);ae.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),V=ie>=1):ae.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),V=ie>=2);let _e=null,J={};const pe=i.getParameter(3088),$=i.getParameter(2978),fe=new nn().fromArray(pe),le=new nn().fromArray($);function Q(Y,he,Me){const De=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(Y,Ge),i.texParameteri(Y,10241,9728),i.texParameteri(Y,10240,9728);for(let gt=0;gt<Me;gt++)i.texImage2D(he+gt,0,6408,1,1,0,6408,5121,De);return Ge}const W={};W[3553]=Q(3553,3553,1),W[34067]=Q(34067,34069,6),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),q(2929),c.setFunc(Jc),vt(!1),ft(mp),q(2884),Ye(_r);function q(Y){g[Y]!==!0&&(i.enable(Y),g[Y]=!0)}function oe(Y){g[Y]!==!1&&(i.disable(Y),g[Y]=!1)}function ye(Y,he){return _[Y]!==he?(i.bindFramebuffer(Y,he),_[Y]=he,n&&(Y===36009&&(_[36160]=he),Y===36160&&(_[36009]=he)),!0):!1}function xe(Y,he){let Me=v,De=!1;if(Y)if(Me=y.get(he),Me===void 0&&(Me=[],y.set(he,Me)),Y.isWebGLMultipleRenderTargets){const Ge=Y.texture;if(Me.length!==Ge.length||Me[0]!==36064){for(let gt=0,Vt=Ge.length;gt<Vt;gt++)Me[gt]=36064+gt;Me.length=Ge.length,De=!0}}else Me[0]!==36064&&(Me[0]=36064,De=!0);else Me[0]!==1029&&(Me[0]=1029,De=!0);De&&(t.isWebGL2?i.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function Ne(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}const Ie={[Da]:32774,[pM]:32778,[gM]:32779};if(n)Ie[yp]=32775,Ie[bp]=32776;else{const Y=e.get("EXT_blend_minmax");Y!==null&&(Ie[yp]=Y.MIN_EXT,Ie[bp]=Y.MAX_EXT)}const ke={[mM]:0,[vM]:1,[_M]:768,[Im]:770,[SM]:776,[wM]:774,[yM]:772,[xM]:769,[Om]:771,[MM]:775,[bM]:773};function Ye(Y,he,Me,De,Ge,gt,Vt,Qt){if(Y===_r){b===!0&&(oe(3042),b=!1);return}if(b===!1&&(q(3042),b=!0),Y!==dM){if(Y!==A||Qt!==D){if((S!==Da||P!==Da)&&(i.blendEquation(32774),S=Da,P=Da),Qt)switch(Y){case Ba:i.blendFuncSeparate(1,771,1,771);break;case vp:i.blendFunc(1,1);break;case _p:i.blendFuncSeparate(0,769,0,1);break;case xp:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ba:i.blendFuncSeparate(770,771,1,771);break;case vp:i.blendFunc(770,1);break;case _p:i.blendFuncSeparate(0,769,0,1);break;case xp:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}M=null,w=null,I=null,T=null,A=Y,D=Qt}return}Ge=Ge||he,gt=gt||Me,Vt=Vt||De,(he!==S||Ge!==P)&&(i.blendEquationSeparate(Ie[he],Ie[Ge]),S=he,P=Ge),(Me!==M||De!==w||gt!==I||Vt!==T)&&(i.blendFuncSeparate(ke[Me],ke[De],ke[gt],ke[Vt]),M=Me,w=De,I=gt,T=Vt),A=Y,D=!1}function yt(Y,he){Y.side===mr?oe(2884):q(2884);let Me=Y.side===Ln;he&&(Me=!Me),vt(Me),Y.blending===Ba&&Y.transparent===!1?Ye(_r):Ye(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const De=Y.stencilWrite;f.setTest(De),De&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),pt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?q(32926):oe(32926)}function vt(Y){U!==Y&&(Y?i.frontFace(2304):i.frontFace(2305),U=Y)}function ft(Y){Y!==cM?(q(2884),Y!==ee&&(Y===mp?i.cullFace(1029):Y===fM?i.cullFace(1028):i.cullFace(1032))):oe(2884),ee=Y}function St(Y){Y!==Z&&(V&&i.lineWidth(Y),Z=Y)}function pt(Y,he,Me){Y?(q(32823),(j!==he||O!==Me)&&(i.polygonOffset(he,Me),j=he,O=Me)):oe(32823)}function Jt(Y){Y?q(3089):oe(3089)}function At(Y){Y===void 0&&(Y=33984+F-1),_e!==Y&&(i.activeTexture(Y),_e=Y)}function z(Y,he,Me){Me===void 0&&(_e===null?Me=33984+F-1:Me=_e);let De=J[Me];De===void 0&&(De={type:void 0,texture:void 0},J[Me]=De),(De.type!==Y||De.texture!==he)&&(_e!==Me&&(i.activeTexture(Me),_e=Me),i.bindTexture(Y,he||W[Y]),De.type=Y,De.texture=he)}function R(){const Y=J[_e];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function k(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(Y){fe.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),fe.copy(Y))}function Fe(Y){le.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),le.copy(Y))}function tt(Y,he){let Me=p.get(he);Me===void 0&&(Me=new WeakMap,p.set(he,Me));let De=Me.get(Y);De===void 0&&(De=i.getUniformBlockIndex(he,Y.name),Me.set(Y,De))}function at(Y,he){const De=p.get(he).get(Y);d.get(he)!==De&&(i.uniformBlockBinding(he,De,Y.__bindingPointIndex),d.set(he,De))}function bt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},_e=null,J={},_={},y=new WeakMap,v=[],m=null,b=!1,A=null,S=null,M=null,w=null,P=null,I=null,T=null,D=!1,U=null,ee=null,Z=null,j=null,O=null,fe.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:q,disable:oe,bindFramebuffer:ye,drawBuffers:xe,useProgram:Ne,setBlending:Ye,setMaterial:yt,setFlipSided:vt,setCullFace:ft,setLineWidth:St,setPolygonOffset:pt,setScissorTest:Jt,activeTexture:At,bindTexture:z,unbindTexture:R,compressedTexImage2D:ue,compressedTexImage3D:we,texImage2D:Re,texImage3D:Pe,updateUBOMapping:tt,uniformBlockBinding:at,texStorage2D:te,texStorage3D:Le,texSubImage2D:Se,texSubImage3D:Ae,compressedTexSubImage2D:He,compressedTexSubImage3D:k,scissor:ze,viewport:Fe,reset:bt}}function XA(i,e,t,n,r,o,u){const l=r.isWebGL2,c=r.maxTextures,f=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const m=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,R){return b?new OffscreenCanvas(z,R):qo("canvas")}function S(z,R,ue,we){let Se=1;if((z.width>we||z.height>we)&&(Se=we/Math.max(z.width,z.height)),Se<1||R===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Ae=R?of:Math.floor,He=Ae(Se*z.width),k=Ae(Se*z.height);v===void 0&&(v=A(He,k));const te=ue?A(He,k):v;return te.width=He,te.height=k,te.getContext("2d").drawImage(z,0,0,He,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+He+"x"+k+")."),te}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function M(z){return Xp(z.width)&&Xp(z.height)}function w(z){return l?!1:z.wrapS!==hi||z.wrapT!==hi||z.minFilter!==bn&&z.minFilter!==Qn}function P(z,R){return z.generateMipmaps&&R&&z.minFilter!==bn&&z.minFilter!==Qn}function I(z){i.generateMipmap(z)}function T(z,R,ue,we,Se=!1){if(l===!1)return R;if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ae=R;return R===6403&&(ue===5126&&(Ae=33326),ue===5131&&(Ae=33325),ue===5121&&(Ae=33321)),R===33319&&(ue===5126&&(Ae=33328),ue===5131&&(Ae=33327),ue===5121&&(Ae=33323)),R===6408&&(ue===5126&&(Ae=34836),ue===5131&&(Ae=34842),ue===5121&&(Ae=we===It&&Se===!1?35907:32856),ue===32819&&(Ae=32854),ue===32820&&(Ae=32855)),(Ae===33325||Ae===33326||Ae===33327||Ae===33328||Ae===34842||Ae===34836)&&e.get("EXT_color_buffer_float"),Ae}function D(z,R,ue){return P(z,ue)===!0||z.isFramebufferTexture&&z.minFilter!==bn&&z.minFilter!==Qn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function U(z){return z===bn||z===wp||z===tc?9728:9729}function ee(z){const R=z.target;R.removeEventListener("dispose",ee),j(R),R.isVideoTexture&&y.delete(R)}function Z(z){const R=z.target;R.removeEventListener("dispose",Z),F(R)}function j(z){const R=n.get(z);if(R.__webglInit===void 0)return;const ue=z.source,we=m.get(ue);if(we){const Se=we[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&O(z),Object.keys(we).length===0&&m.delete(ue)}n.remove(z)}function O(z){const R=n.get(z);i.deleteTexture(R.__webglTexture);const ue=z.source,we=m.get(ue);delete we[R.__cacheKey],u.memory.textures--}function F(z){const R=z.texture,ue=n.get(z),we=n.get(R);if(we.__webglTexture!==void 0&&(i.deleteTexture(we.__webglTexture),u.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)i.deleteFramebuffer(ue.__webglFramebuffer[Se]),ue.__webglDepthbuffer&&i.deleteRenderbuffer(ue.__webglDepthbuffer[Se]);else{if(i.deleteFramebuffer(ue.__webglFramebuffer),ue.__webglDepthbuffer&&i.deleteRenderbuffer(ue.__webglDepthbuffer),ue.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ue.__webglMultisampledFramebuffer),ue.__webglColorRenderbuffer)for(let Se=0;Se<ue.__webglColorRenderbuffer.length;Se++)ue.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(ue.__webglColorRenderbuffer[Se]);ue.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ue.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let Se=0,Ae=R.length;Se<Ae;Se++){const He=n.get(R[Se]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),u.memory.textures--),n.remove(R[Se])}n.remove(R),n.remove(z)}let V=0;function ie(){V=0}function ae(){const z=V;return z>=c&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+c),V+=1,z}function _e(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.encoding),R.join()}function J(z,R){const ue=n.get(z);if(z.isVideoTexture&&Jt(z),z.isRenderTargetTexture===!1&&z.version>0&&ue.__version!==z.version){const we=z.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ue,z,R);return}}t.bindTexture(3553,ue.__webglTexture,33984+R)}function pe(z,R){const ue=n.get(z);if(z.version>0&&ue.__version!==z.version){oe(ue,z,R);return}t.bindTexture(35866,ue.__webglTexture,33984+R)}function $(z,R){const ue=n.get(z);if(z.version>0&&ue.__version!==z.version){oe(ue,z,R);return}t.bindTexture(32879,ue.__webglTexture,33984+R)}function fe(z,R){const ue=n.get(z);if(z.version>0&&ue.__version!==z.version){ye(ue,z,R);return}t.bindTexture(34067,ue.__webglTexture,33984+R)}const le={[tf]:10497,[hi]:33071,[nf]:33648},Q={[bn]:9728,[wp]:9984,[tc]:9986,[Qn]:9729,[kM]:9985,[Wo]:9987};function W(z,R,ue){if(ue?(i.texParameteri(z,10242,le[R.wrapS]),i.texParameteri(z,10243,le[R.wrapT]),(z===32879||z===35866)&&i.texParameteri(z,32882,le[R.wrapR]),i.texParameteri(z,10240,Q[R.magFilter]),i.texParameteri(z,10241,Q[R.minFilter])):(i.texParameteri(z,10242,33071),i.texParameteri(z,10243,33071),(z===32879||z===35866)&&i.texParameteri(z,32882,33071),(R.wrapS!==hi||R.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(z,10240,U(R.magFilter)),i.texParameteri(z,10241,U(R.minFilter)),R.minFilter!==bn&&R.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const we=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===bn||R.minFilter!==tc&&R.minFilter!==Wo||R.type===Ur&&e.has("OES_texture_float_linear")===!1||l===!1&&R.type===jo&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(z,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function q(z,R){let ue=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",ee));const we=R.source;let Se=m.get(we);Se===void 0&&(Se={},m.set(we,Se));const Ae=_e(R);if(Ae!==z.__cacheKey){Se[Ae]===void 0&&(Se[Ae]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ue=!0),Se[Ae].usedTimes++;const He=Se[z.__cacheKey];He!==void 0&&(Se[z.__cacheKey].usedTimes--,He.usedTimes===0&&O(R)),z.__cacheKey=Ae,z.__webglTexture=Se[Ae].texture}return ue}function oe(z,R,ue){let we=3553;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(we=35866),R.isData3DTexture&&(we=32879);const Se=q(z,R),Ae=R.source;t.bindTexture(we,z.__webglTexture,33984+ue);const He=n.get(Ae);if(Ae.version!==He.__version||Se===!0){t.activeTexture(33984+ue),i.pixelStorei(37440,R.flipY),i.pixelStorei(37441,R.premultiplyAlpha),i.pixelStorei(3317,R.unpackAlignment),i.pixelStorei(37443,0);const k=w(R)&&M(R.image)===!1;let te=S(R.image,k,!1,d);te=At(R,te);const Le=M(te)||l,Re=o.convert(R.format,R.encoding);let Pe=o.convert(R.type),ze=T(R.internalFormat,Re,Pe,R.encoding,R.isVideoTexture);W(we,R,Le);let Fe;const tt=R.mipmaps,at=l&&R.isVideoTexture!==!0,bt=He.__version===void 0||Se===!0,Y=D(R,te,Le);if(R.isDepthTexture)ze=6402,l?R.type===Ur?ze=36012:R.type===kr?ze=33190:R.type===ka?ze=35056:ze=33189:R.type===Ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Gr&&ze===6402&&R.type!==Fm&&R.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=kr,Pe=o.convert(R.type)),R.format===Ha&&ze===6402&&(ze=34041,R.type!==ka&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=ka,Pe=o.convert(R.type))),bt&&(at?t.texStorage2D(3553,1,ze,te.width,te.height):t.texImage2D(3553,0,ze,te.width,te.height,0,Re,Pe,null));else if(R.isDataTexture)if(tt.length>0&&Le){at&&bt&&t.texStorage2D(3553,Y,ze,tt[0].width,tt[0].height);for(let he=0,Me=tt.length;he<Me;he++)Fe=tt[he],at?t.texSubImage2D(3553,he,0,0,Fe.width,Fe.height,Re,Pe,Fe.data):t.texImage2D(3553,he,ze,Fe.width,Fe.height,0,Re,Pe,Fe.data);R.generateMipmaps=!1}else at?(bt&&t.texStorage2D(3553,Y,ze,te.width,te.height),t.texSubImage2D(3553,0,0,0,te.width,te.height,Re,Pe,te.data)):t.texImage2D(3553,0,ze,te.width,te.height,0,Re,Pe,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&bt&&t.texStorage3D(35866,Y,ze,tt[0].width,tt[0].height,te.depth);for(let he=0,Me=tt.length;he<Me;he++)Fe=tt[he],R.format!==di?Re!==null?at?t.compressedTexSubImage3D(35866,he,0,0,0,Fe.width,Fe.height,te.depth,Re,Fe.data,0,0):t.compressedTexImage3D(35866,he,ze,Fe.width,Fe.height,te.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(35866,he,0,0,0,Fe.width,Fe.height,te.depth,Re,Pe,Fe.data):t.texImage3D(35866,he,ze,Fe.width,Fe.height,te.depth,0,Re,Pe,Fe.data)}else{at&&bt&&t.texStorage2D(3553,Y,ze,tt[0].width,tt[0].height);for(let he=0,Me=tt.length;he<Me;he++)Fe=tt[he],R.format!==di?Re!==null?at?t.compressedTexSubImage2D(3553,he,0,0,Fe.width,Fe.height,Re,Fe.data):t.compressedTexImage2D(3553,he,ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(3553,he,0,0,Fe.width,Fe.height,Re,Pe,Fe.data):t.texImage2D(3553,he,ze,Fe.width,Fe.height,0,Re,Pe,Fe.data)}else if(R.isDataArrayTexture)at?(bt&&t.texStorage3D(35866,Y,ze,te.width,te.height,te.depth),t.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,Re,Pe,te.data)):t.texImage3D(35866,0,ze,te.width,te.height,te.depth,0,Re,Pe,te.data);else if(R.isData3DTexture)at?(bt&&t.texStorage3D(32879,Y,ze,te.width,te.height,te.depth),t.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,Re,Pe,te.data)):t.texImage3D(32879,0,ze,te.width,te.height,te.depth,0,Re,Pe,te.data);else if(R.isFramebufferTexture){if(bt)if(at)t.texStorage2D(3553,Y,ze,te.width,te.height);else{let he=te.width,Me=te.height;for(let De=0;De<Y;De++)t.texImage2D(3553,De,ze,he,Me,0,Re,Pe,null),he>>=1,Me>>=1}}else if(tt.length>0&&Le){at&&bt&&t.texStorage2D(3553,Y,ze,tt[0].width,tt[0].height);for(let he=0,Me=tt.length;he<Me;he++)Fe=tt[he],at?t.texSubImage2D(3553,he,0,0,Re,Pe,Fe):t.texImage2D(3553,he,ze,Re,Pe,Fe);R.generateMipmaps=!1}else at?(bt&&t.texStorage2D(3553,Y,ze,te.width,te.height),t.texSubImage2D(3553,0,0,0,Re,Pe,te)):t.texImage2D(3553,0,ze,Re,Pe,te);P(R,Le)&&I(we),He.__version=Ae.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function ye(z,R,ue){if(R.image.length!==6)return;const we=q(z,R),Se=R.source;t.bindTexture(34067,z.__webglTexture,33984+ue);const Ae=n.get(Se);if(Se.version!==Ae.__version||we===!0){t.activeTexture(33984+ue),i.pixelStorei(37440,R.flipY),i.pixelStorei(37441,R.premultiplyAlpha),i.pixelStorei(3317,R.unpackAlignment),i.pixelStorei(37443,0);const He=R.isCompressedTexture||R.image[0].isCompressedTexture,k=R.image[0]&&R.image[0].isDataTexture,te=[];for(let he=0;he<6;he++)!He&&!k?te[he]=S(R.image[he],!1,!0,f):te[he]=k?R.image[he].image:R.image[he],te[he]=At(R,te[he]);const Le=te[0],Re=M(Le)||l,Pe=o.convert(R.format,R.encoding),ze=o.convert(R.type),Fe=T(R.internalFormat,Pe,ze,R.encoding),tt=l&&R.isVideoTexture!==!0,at=Ae.__version===void 0||we===!0;let bt=D(R,Le,Re);W(34067,R,Re);let Y;if(He){tt&&at&&t.texStorage2D(34067,bt,Fe,Le.width,Le.height);for(let he=0;he<6;he++){Y=te[he].mipmaps;for(let Me=0;Me<Y.length;Me++){const De=Y[Me];R.format!==di?Pe!==null?tt?t.compressedTexSubImage2D(34069+he,Me,0,0,De.width,De.height,Pe,De.data):t.compressedTexImage2D(34069+he,Me,Fe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(34069+he,Me,0,0,De.width,De.height,Pe,ze,De.data):t.texImage2D(34069+he,Me,Fe,De.width,De.height,0,Pe,ze,De.data)}}}else{Y=R.mipmaps,tt&&at&&(Y.length>0&&bt++,t.texStorage2D(34067,bt,Fe,te[0].width,te[0].height));for(let he=0;he<6;he++)if(k){tt?t.texSubImage2D(34069+he,0,0,0,te[he].width,te[he].height,Pe,ze,te[he].data):t.texImage2D(34069+he,0,Fe,te[he].width,te[he].height,0,Pe,ze,te[he].data);for(let Me=0;Me<Y.length;Me++){const Ge=Y[Me].image[he].image;tt?t.texSubImage2D(34069+he,Me+1,0,0,Ge.width,Ge.height,Pe,ze,Ge.data):t.texImage2D(34069+he,Me+1,Fe,Ge.width,Ge.height,0,Pe,ze,Ge.data)}}else{tt?t.texSubImage2D(34069+he,0,0,0,Pe,ze,te[he]):t.texImage2D(34069+he,0,Fe,Pe,ze,te[he]);for(let Me=0;Me<Y.length;Me++){const De=Y[Me];tt?t.texSubImage2D(34069+he,Me+1,0,0,Pe,ze,De.image[he]):t.texImage2D(34069+he,Me+1,Fe,Pe,ze,De.image[he])}}}P(R,Re)&&I(34067),Ae.__version=Se.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function xe(z,R,ue,we,Se){const Ae=o.convert(ue.format,ue.encoding),He=o.convert(ue.type),k=T(ue.internalFormat,Ae,He,ue.encoding);n.get(R).__hasExternalTextures||(Se===32879||Se===35866?t.texImage3D(Se,0,k,R.width,R.height,R.depth,0,Ae,He,null):t.texImage2D(Se,0,k,R.width,R.height,0,Ae,He,null)),t.bindFramebuffer(36160,z),pt(R)?g.framebufferTexture2DMultisampleEXT(36160,we,Se,n.get(ue).__webglTexture,0,St(R)):(Se===3553||Se>=34069&&Se<=34074)&&i.framebufferTexture2D(36160,we,Se,n.get(ue).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(z,R,ue){if(i.bindRenderbuffer(36161,z),R.depthBuffer&&!R.stencilBuffer){let we=33189;if(ue||pt(R)){const Se=R.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Ur?we=36012:Se.type===kr&&(we=33190));const Ae=St(R);pt(R)?g.renderbufferStorageMultisampleEXT(36161,Ae,we,R.width,R.height):i.renderbufferStorageMultisample(36161,Ae,we,R.width,R.height)}else i.renderbufferStorage(36161,we,R.width,R.height);i.framebufferRenderbuffer(36160,36096,36161,z)}else if(R.depthBuffer&&R.stencilBuffer){const we=St(R);ue&&pt(R)===!1?i.renderbufferStorageMultisample(36161,we,35056,R.width,R.height):pt(R)?g.renderbufferStorageMultisampleEXT(36161,we,35056,R.width,R.height):i.renderbufferStorage(36161,34041,R.width,R.height),i.framebufferRenderbuffer(36160,33306,36161,z)}else{const we=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Se=0;Se<we.length;Se++){const Ae=we[Se],He=o.convert(Ae.format,Ae.encoding),k=o.convert(Ae.type),te=T(Ae.internalFormat,He,k,Ae.encoding),Le=St(R);ue&&pt(R)===!1?i.renderbufferStorageMultisample(36161,Le,te,R.width,R.height):pt(R)?g.renderbufferStorageMultisampleEXT(36161,Le,te,R.width,R.height):i.renderbufferStorage(36161,te,R.width,R.height)}}i.bindRenderbuffer(36161,null)}function Ie(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),J(R.depthTexture,0);const we=n.get(R.depthTexture).__webglTexture,Se=St(R);if(R.depthTexture.format===Gr)pt(R)?g.framebufferTexture2DMultisampleEXT(36160,36096,3553,we,0,Se):i.framebufferTexture2D(36160,36096,3553,we,0);else if(R.depthTexture.format===Ha)pt(R)?g.framebufferTexture2DMultisampleEXT(36160,33306,3553,we,0,Se):i.framebufferTexture2D(36160,33306,3553,we,0);else throw new Error("Unknown depthTexture format")}function ke(z){const R=n.get(z),ue=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(ue)throw new Error("target.depthTexture not supported in Cube render targets");Ie(R.__webglFramebuffer,z)}else if(ue){R.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(36160,R.__webglFramebuffer[we]),R.__webglDepthbuffer[we]=i.createRenderbuffer(),Ne(R.__webglDepthbuffer[we],z,!1)}else t.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),Ne(R.__webglDepthbuffer,z,!1);t.bindFramebuffer(36160,null)}function Ye(z,R,ue){const we=n.get(z);R!==void 0&&xe(we.__webglFramebuffer,z,z.texture,36064,3553),ue!==void 0&&ke(z)}function yt(z){const R=z.texture,ue=n.get(z),we=n.get(R);z.addEventListener("dispose",Z),z.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture()),we.__version=R.version,u.memory.textures++);const Se=z.isWebGLCubeRenderTarget===!0,Ae=z.isWebGLMultipleRenderTargets===!0,He=M(z)||l;if(Se){ue.__webglFramebuffer=[];for(let k=0;k<6;k++)ue.__webglFramebuffer[k]=i.createFramebuffer()}else{if(ue.__webglFramebuffer=i.createFramebuffer(),Ae)if(r.drawBuffers){const k=z.texture;for(let te=0,Le=k.length;te<Le;te++){const Re=n.get(k[te]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&z.samples>0&&pt(z)===!1){const k=Ae?R:[R];ue.__webglMultisampledFramebuffer=i.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ue.__webglMultisampledFramebuffer);for(let te=0;te<k.length;te++){const Le=k[te];ue.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(36161,ue.__webglColorRenderbuffer[te]);const Re=o.convert(Le.format,Le.encoding),Pe=o.convert(Le.type),ze=T(Le.internalFormat,Re,Pe,Le.encoding,z.isXRRenderTarget===!0),Fe=St(z);i.renderbufferStorageMultisample(36161,Fe,ze,z.width,z.height),i.framebufferRenderbuffer(36160,36064+te,36161,ue.__webglColorRenderbuffer[te])}i.bindRenderbuffer(36161,null),z.depthBuffer&&(ue.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(ue.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(36160,null)}}if(Se){t.bindTexture(34067,we.__webglTexture),W(34067,R,He);for(let k=0;k<6;k++)xe(ue.__webglFramebuffer[k],z,R,36064,34069+k);P(R,He)&&I(34067),t.unbindTexture()}else if(Ae){const k=z.texture;for(let te=0,Le=k.length;te<Le;te++){const Re=k[te],Pe=n.get(Re);t.bindTexture(3553,Pe.__webglTexture),W(3553,Re,He),xe(ue.__webglFramebuffer,z,Re,36064+te,3553),P(Re,He)&&I(3553)}t.unbindTexture()}else{let k=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(l?k=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,we.__webglTexture),W(k,R,He),xe(ue.__webglFramebuffer,z,R,36064,k),P(R,He)&&I(k),t.unbindTexture()}z.depthBuffer&&ke(z)}function vt(z){const R=M(z)||l,ue=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let we=0,Se=ue.length;we<Se;we++){const Ae=ue[we];if(P(Ae,R)){const He=z.isWebGLCubeRenderTarget?34067:3553,k=n.get(Ae).__webglTexture;t.bindTexture(He,k),I(He),t.unbindTexture()}}}function ft(z){if(l&&z.samples>0&&pt(z)===!1){const R=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],ue=z.width,we=z.height;let Se=16384;const Ae=[],He=z.stencilBuffer?33306:36096,k=n.get(z),te=z.isWebGLMultipleRenderTargets===!0;if(te)for(let Le=0;Le<R.length;Le++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Le,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Le,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let Le=0;Le<R.length;Le++){Ae.push(36064+Le),z.depthBuffer&&Ae.push(He);const Re=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(Re===!1&&(z.depthBuffer&&(Se|=256),z.stencilBuffer&&(Se|=1024)),te&&i.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[Le]),Re===!0&&(i.invalidateFramebuffer(36008,[He]),i.invalidateFramebuffer(36009,[He])),te){const Pe=n.get(R[Le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Pe,0)}i.blitFramebuffer(0,0,ue,we,0,0,ue,we,Se,9728),_&&i.invalidateFramebuffer(36008,Ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),te)for(let Le=0;Le<R.length;Le++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Le,36161,k.__webglColorRenderbuffer[Le]);const Re=n.get(R[Le]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Le,3553,Re,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function St(z){return Math.min(p,z.samples)}function pt(z){const R=n.get(z);return l&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Jt(z){const R=u.render.frame;y.get(z)!==R&&(y.set(z,R),z.update())}function At(z,R){const ue=z.encoding,we=z.format,Se=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===af||ue!==Wr&&(ue===It?l===!1?e.has("EXT_sRGB")===!0&&we===di?(z.format=af,z.minFilter=Qn,z.generateMipmaps=!1):R=Um.sRGBToLinear(R):(we!==di||Se!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ue)),R}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.setTexture2D=J,this.setTexture2DArray=pe,this.setTexture3D=$,this.setTextureCube=fe,this.rebindTextures=Ye,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=pt}function YA(i,e,t){const n=t.isWebGL2;function r(o,u=null){let l;if(o===Vr)return 5121;if(o===VM)return 32819;if(o===WM)return 32820;if(o===UM)return 5120;if(o===GM)return 5122;if(o===Fm)return 5123;if(o===HM)return 5124;if(o===kr)return 5125;if(o===Ur)return 5126;if(o===jo)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===jM)return 6406;if(o===di)return 6408;if(o===$M)return 6409;if(o===qM)return 6410;if(o===Gr)return 6402;if(o===Ha)return 34041;if(o===af)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===XM)return 6403;if(o===YM)return 36244;if(o===ZM)return 33319;if(o===KM)return 33320;if(o===JM)return 36249;if(o===nc||o===ic||o===rc||o===ac)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ic)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===rc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ac)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Mp||o===Sp||o===Ep||o===Tp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Mp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Sp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ep)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Tp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===QM)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Ap||o===Cp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Ap)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Cp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Pp||o===Lp||o===Rp||o===Dp||o===Ip||o===Op||o===Np||o===Fp||o===zp||o===Bp||o===kp||o===Up||o===Gp||o===Hp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Pp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Lp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Rp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Dp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Ip)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Op)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Np)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Fp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===zp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Bp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===kp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Up)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Gp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Hp)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===oc)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===oc)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===eS||o===Vp||o===Wp||o===jp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===oc)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Vp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Wp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===jp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ka?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class ZA extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Oa=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const KA={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,u=null;const l=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),b=this._getHandJoint(f,v);m!==null&&(b.matrix.fromArray(m.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=m.radius),b.visible=m!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],g=d.position.distanceTo(p.position),_=.02,y=.005;f.inputState.pinching&&g>_+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=_-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class JA extends Rn{constructor(e,t,n,r,o,u,l,c,f,d){if(d=d!==void 0?d:Gr,d!==Gr&&d!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Gr&&(n=kr),n===void 0&&d===Ha&&(n=ka),super(null,r,o,u,l,c,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1}}class QA extends vi{constructor(e,t){super();const n=this;let r=null,o=1,u=null,l="local-floor",c=1,f=null,d=null,p=null,g=null,_=null,y=null;const v=t.getContextAttributes();let m=null,b=null;const A=[],S=[],M=new Set,w=new Map,P=new ei;P.layers.enable(1),P.viewport=new nn;const I=new ei;I.layers.enable(2),I.viewport=new nn;const T=[P,I],D=new ZA;D.layers.enable(1),D.layers.enable(2);let U=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=A[$];return fe===void 0&&(fe=new Ic,A[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=A[$];return fe===void 0&&(fe=new Ic,A[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=A[$];return fe===void 0&&(fe=new Ic,A[$]=fe),fe.getHandSpace()};function Z($){const fe=S.indexOf($.inputSource);if(fe===-1)return;const le=A[fe];le!==void 0&&le.dispatchEvent({type:$.type,data:$.inputSource})}function j(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",O);for(let $=0;$<A.length;$++){const fe=S[$];fe!==null&&(S[$]=null,A[$].disconnect(fe))}U=null,ee=null,e.setRenderTarget(m),_=null,g=null,p=null,r=null,b=null,pe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function($){f=$},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:_}),b=new br(_.framebufferWidth,_.framebufferHeight,{format:di,type:Vr,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let fe=null,le=null,Q=null;v.depth&&(Q=v.stencil?35056:33190,fe=v.stencil?Ha:Gr,le=v.stencil?ka:kr);const W={colorFormat:32856,depthFormat:Q,scaleFactor:o};p=new XRWebGLBinding(r,t),g=p.createProjectionLayer(W),r.updateRenderState({layers:[g]}),b=new br(g.textureWidth,g.textureHeight,{format:di,type:Vr,depthTexture:new JA(g.textureWidth,g.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const q=e.properties.get(b);q.__ignoreDepthValues=g.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),f=null,u=await r.requestReferenceSpace(l),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O($){for(let fe=0;fe<$.removed.length;fe++){const le=$.removed[fe],Q=S.indexOf(le);Q>=0&&(S[Q]=null,A[Q].disconnect(le))}for(let fe=0;fe<$.added.length;fe++){const le=$.added[fe];let Q=S.indexOf(le);if(Q===-1){for(let q=0;q<A.length;q++)if(q>=S.length){S.push(le),Q=q;break}else if(S[q]===null){S[q]=le,Q=q;break}if(Q===-1)break}const W=A[Q];W&&W.connect(le)}}const F=new H,V=new H;function ie($,fe,le){F.setFromMatrixPosition(fe.matrixWorld),V.setFromMatrixPosition(le.matrixWorld);const Q=F.distanceTo(V),W=fe.projectionMatrix.elements,q=le.projectionMatrix.elements,oe=W[14]/(W[10]-1),ye=W[14]/(W[10]+1),xe=(W[9]+1)/W[5],Ne=(W[9]-1)/W[5],Ie=(W[8]-1)/W[0],ke=(q[8]+1)/q[0],Ye=oe*Ie,yt=oe*ke,vt=Q/(-Ie+ke),ft=vt*-Ie;fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ft),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const St=oe+vt,pt=ye+vt,Jt=Ye-ft,At=yt+(Q-ft),z=xe*ye/pt*St,R=Ne*ye/pt*St;$.projectionMatrix.makePerspective(Jt,At,z,R,St,pt)}function ae($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;D.near=I.near=P.near=$.near,D.far=I.far=P.far=$.far,(U!==D.near||ee!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,ee=D.far);const fe=$.parent,le=D.cameras;ae(D,fe);for(let W=0;W<le.length;W++)ae(le[W],fe);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),$.matrix.copy(D.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const Q=$.children;for(let W=0,q=Q.length;W<q;W++)Q[W].updateMatrixWorld(!0);le.length===2?ie(D,P,I):D.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(!(g===null&&_===null))return c},this.setFoveation=function($){c=$,g!==null&&(g.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.getPlanes=function(){return M};let _e=null;function J($,fe){if(d=fe.getViewerPose(f||u),y=fe,d!==null){const le=d.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let Q=!1;le.length!==D.cameras.length&&(D.cameras.length=0,Q=!0);for(let W=0;W<le.length;W++){const q=le[W];let oe=null;if(_!==null)oe=_.getViewport(q);else{const xe=p.getViewSubImage(g,q);oe=xe.viewport,W===0&&(e.setRenderTargetTextures(b,xe.colorTexture,g.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(b))}let ye=T[W];ye===void 0&&(ye=new ei,ye.layers.enable(W),ye.viewport=new nn,T[W]=ye),ye.matrix.fromArray(q.transform.matrix),ye.projectionMatrix.fromArray(q.projectionMatrix),ye.viewport.set(oe.x,oe.y,oe.width,oe.height),W===0&&D.matrix.copy(ye.matrix),Q===!0&&D.cameras.push(ye)}}for(let le=0;le<A.length;le++){const Q=S[le],W=A[le];Q!==null&&W!==void 0&&W.update(Q,fe,f||u)}if(_e&&_e($,fe),fe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:fe.detectedPlanes});let le=null;for(const Q of M)fe.detectedPlanes.has(Q)||(le===null&&(le=[]),le.push(Q));if(le!==null)for(const Q of le)M.delete(Q),w.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of fe.detectedPlanes)if(!M.has(Q))M.add(Q),w.set(Q,fe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const W=w.get(Q);Q.lastChangedTime>W&&(w.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}y=null}const pe=new Ym;pe.setAnimationLoop(J),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}}function eC(i,e){function t(v,m){m.color.getRGB(v.fogColor.value,jm(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function n(v,m,b,A,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(v,m):m.isMeshToonMaterial?(r(v,m),d(v,m)):m.isMeshPhongMaterial?(r(v,m),f(v,m)):m.isMeshStandardMaterial?(r(v,m),p(v,m),m.isMeshPhysicalMaterial&&g(v,m,S)):m.isMeshMatcapMaterial?(r(v,m),_(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),y(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?l(v,m,b,A):m.isSpriteMaterial?c(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===Ln&&(v.bumpScale.value*=-1)),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===Ln&&v.normalScale.value.negate()),m.specularMap&&(v.specularMap.value=m.specularMap),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const b=e.get(m).envMap;if(b&&(v.envMap.value=b,v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap){v.lightMap.value=m.lightMap;const M=i.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity);let A;m.map?A=m.map:m.specularMap?A=m.specularMap:m.displacementMap?A=m.displacementMap:m.normalMap?A=m.normalMap:m.bumpMap?A=m.bumpMap:m.roughnessMap?A=m.roughnessMap:m.metalnessMap?A=m.metalnessMap:m.alphaMap?A=m.alphaMap:m.emissiveMap?A=m.emissiveMap:m.clearcoatMap?A=m.clearcoatMap:m.clearcoatNormalMap?A=m.clearcoatNormalMap:m.clearcoatRoughnessMap?A=m.clearcoatRoughnessMap:m.iridescenceMap?A=m.iridescenceMap:m.iridescenceThicknessMap?A=m.iridescenceThicknessMap:m.specularIntensityMap?A=m.specularIntensityMap:m.specularColorMap?A=m.specularColorMap:m.transmissionMap?A=m.transmissionMap:m.thicknessMap?A=m.thicknessMap:m.sheenColorMap?A=m.sheenColorMap:m.sheenRoughnessMap&&(A=m.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),v.uvTransform.value.copy(A.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),v.uv2Transform.value.copy(S.matrix))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,b,A){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*b,v.scale.value=A*.5,m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),v.uvTransform.value.copy(S.matrix))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),v.uvTransform.value.copy(b.matrix))}function f(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function p(v,m){v.roughness.value=m.roughness,v.metalness.value=m.metalness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function g(v,m,b){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),v.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Ln&&v.clearcoatNormalScale.value.negate())),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap)}function _(v,m){m.matcap&&(v.matcap.value=m.matcap)}function y(v,m){v.referencePosition.value.copy(m.referencePosition),v.nearDistance.value=m.nearDistance,v.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function tC(i,e,t,n){let r={},o={},u=[];const l=t.isWebGL2?i.getParameter(35375):0;function c(A,S){const M=S.program;n.uniformBlockBinding(A,M)}function f(A,S){let M=r[A.id];M===void 0&&(y(A),M=d(A),r[A.id]=M,A.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(A,w);const P=e.render.frame;o[A.id]!==P&&(g(A),o[A.id]=P)}function d(A){const S=p();A.__bindingPointIndex=S;const M=i.createBuffer(),w=A.__size,P=A.usage;return i.bindBuffer(35345,M),i.bufferData(35345,w,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,S,M),M}function p(){for(let A=0;A<l;A++)if(u.indexOf(A)===-1)return u.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const S=r[A.id],M=A.uniforms,w=A.__cache;i.bindBuffer(35345,S);for(let P=0,I=M.length;P<I;P++){const T=M[P];if(_(T,P,w)===!0){const D=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let ee=0;for(let Z=0;Z<U.length;Z++){const j=U[Z],O=v(j);typeof j=="number"?(T.__data[0]=j,i.bufferSubData(35345,D+ee,T.__data)):j.isMatrix3?(T.__data[0]=j.elements[0],T.__data[1]=j.elements[1],T.__data[2]=j.elements[2],T.__data[3]=j.elements[0],T.__data[4]=j.elements[3],T.__data[5]=j.elements[4],T.__data[6]=j.elements[5],T.__data[7]=j.elements[0],T.__data[8]=j.elements[6],T.__data[9]=j.elements[7],T.__data[10]=j.elements[8],T.__data[11]=j.elements[0]):(j.toArray(T.__data,ee),ee+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,D,T.__data)}}i.bindBuffer(35345,null)}function _(A,S,M){const w=A.value;if(M[S]===void 0){if(typeof w=="number")M[S]=w;else{const P=Array.isArray(w)?w:[w],I=[];for(let T=0;T<P.length;T++)I.push(P[T].clone());M[S]=I}return!0}else if(typeof w=="number"){if(M[S]!==w)return M[S]=w,!0}else{const P=Array.isArray(M[S])?M[S]:[M[S]],I=Array.isArray(w)?w:[w];for(let T=0;T<P.length;T++){const D=P[T];if(D.equals(I[T])===!1)return D.copy(I[T]),!0}}return!1}function y(A){const S=A.uniforms;let M=0;const w=16;let P=0;for(let I=0,T=S.length;I<T;I++){const D=S[I],U={boundary:0,storage:0},ee=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,j=ee.length;Z<j;Z++){const O=ee[Z],F=v(O);U.boundary+=F.boundary,U.storage+=F.storage}if(D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,I>0){P=M%w;const Z=w-P;P!==0&&Z-U.boundary<0&&(M+=w-P,D.__offset=M)}M+=U.storage}return P=M%w,P>0&&(M+=w-P),A.__size=M,A.__cache={},this}function v(A){const S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const M=u.indexOf(S.__bindingPointIndex);u.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function b(){for(const A in r)i.deleteBuffer(r[A]);u=[],r={},o={}}return{bind:c,update:f,dispose:b}}function nC(){const i=qo("canvas");return i.style.display="block",i}function ev(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:nC(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,u=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",f=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=i.alpha!==void 0?i.alpha:!1;let p=null,g=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wr,this.physicallyCorrectLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const v=this;let m=!1,b=0,A=0,S=null,M=-1,w=null;const P=new nn,I=new nn;let T=null,D=e.width,U=e.height,ee=1,Z=null,j=null;const O=new nn(0,0,D,U),F=new nn(0,0,D,U);let V=!1;const ie=new Lf;let ae=!1,_e=!1,J=null;const pe=new Ft,$=new Ee,fe=new H,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return S===null?ee:1}let W=t;function q(N,re){for(let de=0;de<N.length;de++){const ne=N[de],ge=e.getContext(ne,re);if(ge!==null)return ge}return null}try{const N={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ef}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",tt,!1),W===null){const re=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&re.shift(),W=q(re,N),W===null)throw q(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let oe,ye,xe,Ne,Ie,ke,Ye,yt,vt,ft,St,pt,Jt,At,z,R,ue,we,Se,Ae,He,k,te,Le;function Re(){oe=new d2(W),ye=new s2(W,oe,i),oe.init(ye),k=new YA(W,oe,ye),xe=new qA(W,oe,ye),Ne=new m2,Ie=new IA,ke=new XA(W,oe,xe,Ie,ye,k,Ne),Ye=new u2(v),yt=new h2(v),vt=new ES(W,ye),te=new a2(W,oe,vt,ye),ft=new p2(W,vt,Ne,te),St=new y2(W,ft,vt,Ne),Se=new x2(W,ye,ke),R=new l2(Ie),pt=new DA(v,Ye,yt,oe,ye,te,R),Jt=new eC(v,Ie),At=new NA,z=new GA(oe,ye),we=new r2(v,Ye,yt,xe,St,d,u),ue=new $A(v,St,ye),Le=new tC(W,Ne,ye,xe),Ae=new o2(W,oe,Ne,ye),He=new g2(W,oe,Ne,ye),Ne.programs=pt.programs,v.capabilities=ye,v.extensions=oe,v.properties=Ie,v.renderLists=At,v.shadowMap=ue,v.state=xe,v.info=Ne}Re();const Pe=new QA(v,W);this.xr=Pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const N=oe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=oe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(N){N!==void 0&&(ee=N,this.setSize(D,U,!1))},this.getSize=function(N){return N.set(D,U)},this.setSize=function(N,re,de){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=N,U=re,e.width=Math.floor(N*ee),e.height=Math.floor(re*ee),de!==!1&&(e.style.width=N+"px",e.style.height=re+"px"),this.setViewport(0,0,N,re)},this.getDrawingBufferSize=function(N){return N.set(D*ee,U*ee).floor()},this.setDrawingBufferSize=function(N,re,de){D=N,U=re,ee=de,e.width=Math.floor(N*de),e.height=Math.floor(re*de),this.setViewport(0,0,N,re)},this.getCurrentViewport=function(N){return N.copy(P)},this.getViewport=function(N){return N.copy(O)},this.setViewport=function(N,re,de,ne){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,re,de,ne),xe.viewport(P.copy(O).multiplyScalar(ee).floor())},this.getScissor=function(N){return N.copy(F)},this.setScissor=function(N,re,de,ne){N.isVector4?F.set(N.x,N.y,N.z,N.w):F.set(N,re,de,ne),xe.scissor(I.copy(F).multiplyScalar(ee).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(N){xe.setScissorTest(V=N)},this.setOpaqueSort=function(N){Z=N},this.setTransparentSort=function(N){j=N},this.getClearColor=function(N){return N.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(N=!0,re=!0,de=!0){let ne=0;N&&(ne|=16384),re&&(ne|=256),de&&(ne|=1024),W.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),At.dispose(),z.dispose(),Ie.dispose(),Ye.dispose(),yt.dispose(),St.dispose(),te.dispose(),Le.dispose(),pt.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",De),Pe.removeEventListener("sessionend",Ge),J&&(J.dispose(),J=null),gt.stop()};function ze(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const N=Ne.autoReset,re=ue.enabled,de=ue.autoUpdate,ne=ue.needsUpdate,ge=ue.type;Re(),Ne.autoReset=N,ue.enabled=re,ue.autoUpdate=de,ue.needsUpdate=ne,ue.type=ge}function tt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function at(N){const re=N.target;re.removeEventListener("dispose",at),bt(re)}function bt(N){Y(N),Ie.remove(N)}function Y(N){const re=Ie.get(N).programs;re!==void 0&&(re.forEach(function(de){pt.releaseProgram(de)}),N.isShaderMaterial&&pt.releaseShaderCache(N))}this.renderBufferDirect=function(N,re,de,ne,ge,Ve){re===null&&(re=le);const Xe=ge.isMesh&&ge.matrixWorld.determinant()<0,Je=Wl(N,re,de,ne,ge);xe.setMaterial(ne,Xe);let nt=de.index,dt=1;ne.wireframe===!0&&(nt=ft.getWireframeAttribute(de),dt=2);const st=de.drawRange,lt=de.attributes.position;let kt=st.start*dt,pn=(st.start+st.count)*dt;Ve!==null&&(kt=Math.max(kt,Ve.start*dt),pn=Math.min(pn,(Ve.start+Ve.count)*dt)),nt!==null?(kt=Math.max(kt,0),pn=Math.min(pn,nt.count)):lt!=null&&(kt=Math.max(kt,0),pn=Math.min(pn,lt.count));const En=pn-kt;if(En<0||En===1/0)return;te.setup(ge,ne,Je,de,nt);let Ci,Rt=Ae;if(nt!==null&&(Ci=vt.get(nt),Rt=He,Rt.setIndex(Ci)),ge.isMesh)ne.wireframe===!0?(xe.setLineWidth(ne.wireframeLinewidth*Q()),Rt.setMode(1)):Rt.setMode(4);else if(ge.isLine){let ut=ne.linewidth;ut===void 0&&(ut=1),xe.setLineWidth(ut*Q()),ge.isLineSegments?Rt.setMode(1):ge.isLineLoop?Rt.setMode(2):Rt.setMode(3)}else ge.isPoints?Rt.setMode(0):ge.isSprite&&Rt.setMode(4);if(ge.isInstancedMesh)Rt.renderInstances(kt,En,ge.count);else if(de.isInstancedBufferGeometry){const ut=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ya=Math.min(de.instanceCount,ut);Rt.renderInstances(kt,En,Ya)}else Rt.render(kt,En)},this.compile=function(N,re){function de(ne,ge,Ve){ne.transparent===!0&&ne.side===mr&&ne.forceSinglePass===!1?(ne.side=Ln,ne.needsUpdate=!0,Sn(ne,ge,Ve),ne.side=yr,ne.needsUpdate=!0,Sn(ne,ge,Ve),ne.side=mr):Sn(ne,ge,Ve)}g=z.get(N),g.init(),y.push(g),N.traverseVisible(function(ne){ne.isLight&&ne.layers.test(re.layers)&&(g.pushLight(ne),ne.castShadow&&g.pushShadow(ne))}),g.setupLights(v.physicallyCorrectLights),N.traverse(function(ne){const ge=ne.material;if(ge)if(Array.isArray(ge))for(let Ve=0;Ve<ge.length;Ve++){const Xe=ge[Ve];de(Xe,N,ne)}else de(ge,N,ne)}),y.pop(),g=null};let he=null;function Me(N){he&&he(N)}function De(){gt.stop()}function Ge(){gt.start()}const gt=new Ym;gt.setAnimationLoop(Me),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(N){he=N,Pe.setAnimationLoop(N),N===null?gt.stop():gt.start()},Pe.addEventListener("sessionstart",De),Pe.addEventListener("sessionend",Ge),this.render=function(N,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(re),re=Pe.getCamera()),N.isScene===!0&&N.onBeforeRender(v,N,re,S),g=z.get(N,y.length),g.init(),y.push(g),pe.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ie.setFromProjectionMatrix(pe),_e=this.localClippingEnabled,ae=R.init(this.clippingPlanes,_e),p=At.get(N,_.length),p.init(),_.push(p),Vt(N,re,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Z,j),ae===!0&&R.beginShadows();const de=g.state.shadowsArray;if(ue.render(de,N,re),ae===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),we.render(p,N),g.setupLights(v.physicallyCorrectLights),re.isArrayCamera){const ne=re.cameras;for(let ge=0,Ve=ne.length;ge<Ve;ge++){const Xe=ne[ge];Qt(p,N,Xe,Xe.viewport)}}else Qt(p,N,re);S!==null&&(ke.updateMultisampleRenderTarget(S),ke.updateRenderTargetMipmap(S)),N.isScene===!0&&N.onAfterRender(v,N,re),te.resetDefaultState(),M=-1,w=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Vt(N,re,de,ne){if(N.visible===!1)return;if(N.layers.test(re.layers)){if(N.isGroup)de=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(re);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ie.intersectsSprite(N)){ne&&fe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(pe);const Xe=St.update(N),Je=N.material;Je.visible&&p.push(N,Xe,Je,de,fe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==Ne.render.frame&&(N.skeleton.update(),N.skeleton.frame=Ne.render.frame),!N.frustumCulled||ie.intersectsObject(N))){ne&&fe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(pe);const Xe=St.update(N),Je=N.material;if(Array.isArray(Je)){const nt=Xe.groups;for(let dt=0,st=nt.length;dt<st;dt++){const lt=nt[dt],kt=Je[lt.materialIndex];kt&&kt.visible&&p.push(N,Xe,kt,de,fe.z,lt)}}else Je.visible&&p.push(N,Xe,Je,de,fe.z,null)}}const Ve=N.children;for(let Xe=0,Je=Ve.length;Xe<Je;Xe++)Vt(Ve[Xe],re,de,ne)}function Qt(N,re,de,ne){const ge=N.opaque,Ve=N.transmissive,Xe=N.transparent;g.setupLightsView(de),ae===!0&&R.setGlobalState(v.clippingPlanes,de),Ve.length>0&&_i(ge,re,de),ne&&xe.viewport(P.copy(ne)),ge.length>0&&Ct(ge,re,de),Ve.length>0&&Ct(Ve,re,de),Xe.length>0&&Ct(Xe,re,de),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _i(N,re,de){const ne=ye.isWebGL2;J===null&&(J=new br(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?jo:Vr,minFilter:Wo,samples:ne&&o===!0?4:0})),v.getDrawingBufferSize($),ne?J.setSize($.x,$.y):J.setSize(of($.x),of($.y));const ge=v.getRenderTarget();v.setRenderTarget(J),v.clear();const Ve=v.toneMapping;v.toneMapping=Xi,Ct(N,re,de),v.toneMapping=Ve,ke.updateMultisampleRenderTarget(J),ke.updateRenderTargetMipmap(J),v.setRenderTarget(ge)}function Ct(N,re,de){const ne=re.isScene===!0?re.overrideMaterial:null;for(let ge=0,Ve=N.length;ge<Ve;ge++){const Xe=N[ge],Je=Xe.object,nt=Xe.geometry,dt=ne===null?Xe.material:ne,st=Xe.group;Je.layers.test(de.layers)&&ni(Je,re,de,nt,dt,st)}}function ni(N,re,de,ne,ge,Ve){N.onBeforeRender(v,re,de,ne,ge,Ve),N.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ge.onBeforeRender(v,re,de,ne,N,Ve),ge.transparent===!0&&ge.side===mr&&ge.forceSinglePass===!1?(ge.side=Ln,ge.needsUpdate=!0,v.renderBufferDirect(de,re,ne,ge,N,Ve),ge.side=yr,ge.needsUpdate=!0,v.renderBufferDirect(de,re,ne,ge,N,Ve),ge.side=mr):v.renderBufferDirect(de,re,ne,ge,N,Ve),N.onAfterRender(v,re,de,ne,ge,Ve)}function Sn(N,re,de){re.isScene!==!0&&(re=le);const ne=Ie.get(N),ge=g.state.lights,Ve=g.state.shadowsArray,Xe=ge.state.version,Je=pt.getParameters(N,ge.state,Ve,re,de),nt=pt.getProgramCacheKey(Je);let dt=ne.programs;ne.environment=N.isMeshStandardMaterial?re.environment:null,ne.fog=re.fog,ne.envMap=(N.isMeshStandardMaterial?yt:Ye).get(N.envMap||ne.environment),dt===void 0&&(N.addEventListener("dispose",at),dt=new Map,ne.programs=dt);let st=dt.get(nt);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Xe)return Xr(N,Je),st}else Je.uniforms=pt.getUniforms(N),N.onBuild(de,Je,v),N.onBeforeCompile(Je,v),st=pt.acquireProgram(Je,nt),dt.set(nt,st),ne.uniforms=Je.uniforms;const lt=ne.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(lt.clippingPlanes=R.uniform),Xr(N,Je),ne.needsLights=jl(N),ne.lightsStateVersion=Xe,ne.needsLights&&(lt.ambientLightColor.value=ge.state.ambient,lt.lightProbe.value=ge.state.probe,lt.directionalLights.value=ge.state.directional,lt.directionalLightShadows.value=ge.state.directionalShadow,lt.spotLights.value=ge.state.spot,lt.spotLightShadows.value=ge.state.spotShadow,lt.rectAreaLights.value=ge.state.rectArea,lt.ltc_1.value=ge.state.rectAreaLTC1,lt.ltc_2.value=ge.state.rectAreaLTC2,lt.pointLights.value=ge.state.point,lt.pointLightShadows.value=ge.state.pointShadow,lt.hemisphereLights.value=ge.state.hemi,lt.directionalShadowMap.value=ge.state.directionalShadowMap,lt.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,lt.spotShadowMap.value=ge.state.spotShadowMap,lt.spotLightMatrix.value=ge.state.spotLightMatrix,lt.spotLightMap.value=ge.state.spotLightMap,lt.pointShadowMap.value=ge.state.pointShadowMap,lt.pointShadowMatrix.value=ge.state.pointShadowMatrix);const kt=st.getUniforms(),pn=ml.seqWithValue(kt.seq,lt);return ne.currentProgram=st,ne.uniformsList=pn,st}function Xr(N,re){const de=Ie.get(N);de.outputEncoding=re.outputEncoding,de.instancing=re.instancing,de.skinning=re.skinning,de.morphTargets=re.morphTargets,de.morphNormals=re.morphNormals,de.morphColors=re.morphColors,de.morphTargetsCount=re.morphTargetsCount,de.numClippingPlanes=re.numClippingPlanes,de.numIntersection=re.numClipIntersection,de.vertexAlphas=re.vertexAlphas,de.vertexTangents=re.vertexTangents,de.toneMapping=re.toneMapping}function Wl(N,re,de,ne,ge){re.isScene!==!0&&(re=le),ke.resetTextureUnits();const Ve=re.fog,Xe=ne.isMeshStandardMaterial?re.environment:null,Je=S===null?v.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Wr,nt=(ne.isMeshStandardMaterial?yt:Ye).get(ne.envMap||Xe),dt=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,st=!!ne.normalMap&&!!de.attributes.tangent,lt=!!de.morphAttributes.position,kt=!!de.morphAttributes.normal,pn=!!de.morphAttributes.color,En=ne.toneMapped?v.toneMapping:Xi,Ci=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Rt=Ci!==void 0?Ci.length:0,ut=Ie.get(ne),Ya=g.state.lights;if(ae===!0&&(_e===!0||N!==w)){const ln=N===w&&ne.id===M;R.setState(ne,N,ln)}let Wt=!1;ne.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Ya.state.version||ut.outputEncoding!==Je||ge.isInstancedMesh&&ut.instancing===!1||!ge.isInstancedMesh&&ut.instancing===!0||ge.isSkinnedMesh&&ut.skinning===!1||!ge.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==nt||ne.fog===!0&&ut.fog!==Ve||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==R.numPlanes||ut.numIntersection!==R.numIntersection)||ut.vertexAlphas!==dt||ut.vertexTangents!==st||ut.morphTargets!==lt||ut.morphNormals!==kt||ut.morphColors!==pn||ut.toneMapping!==En||ye.isWebGL2===!0&&ut.morphTargetsCount!==Rt)&&(Wt=!0):(Wt=!0,ut.__version=ne.version);let xi=ut.currentProgram;Wt===!0&&(xi=Sn(ne,re,ge));let Za=!1,Qi=!1,Ka=!1;const an=xi.getUniforms(),Pi=ut.uniforms;if(xe.useProgram(xi.program)&&(Za=!0,Qi=!0,Ka=!0),ne.id!==M&&(M=ne.id,Qi=!0),Za||w!==N){if(an.setValue(W,"projectionMatrix",N.projectionMatrix),ye.logarithmicDepthBuffer&&an.setValue(W,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),w!==N&&(w=N,Qi=!0,Ka=!0),ne.isShaderMaterial||ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshStandardMaterial||ne.envMap){const ln=an.map.cameraPosition;ln!==void 0&&ln.setValue(W,fe.setFromMatrixPosition(N.matrixWorld))}(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&an.setValue(W,"isOrthographic",N.isOrthographicCamera===!0),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial||ne.isShadowMaterial||ge.isSkinnedMesh)&&an.setValue(W,"viewMatrix",N.matrixWorldInverse)}if(ge.isSkinnedMesh){an.setOptional(W,ge,"bindMatrix"),an.setOptional(W,ge,"bindMatrixInverse");const ln=ge.skeleton;ln&&(ye.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),an.setValue(W,"boneTexture",ln.boneTexture,ke),an.setValue(W,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ja=de.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0&&ye.isWebGL2===!0)&&Se.update(ge,de,ne,xi),(Qi||ut.receiveShadow!==ge.receiveShadow)&&(ut.receiveShadow=ge.receiveShadow,an.setValue(W,"receiveShadow",ge.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Pi.envMap.value=nt,Pi.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Qi&&(an.setValue(W,"toneMappingExposure",v.toneMappingExposure),ut.needsLights&&Xa(Pi,Ka),Ve&&ne.fog===!0&&Jt.refreshFogUniforms(Pi,Ve),Jt.refreshMaterialUniforms(Pi,ne,ee,U,J),ml.upload(W,ut.uniformsList,Pi,ke)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ml.upload(W,ut.uniformsList,Pi,ke),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&an.setValue(W,"center",ge.center),an.setValue(W,"modelViewMatrix",ge.modelViewMatrix),an.setValue(W,"normalMatrix",ge.normalMatrix),an.setValue(W,"modelMatrix",ge.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const ln=ne.uniformsGroups;for(let Yr=0,ts=ln.length;Yr<ts;Yr++)if(ye.isWebGL2){const Zr=ln[Yr];Le.update(Zr,xi),Le.bind(Zr,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Xa(N,re){N.ambientLightColor.needsUpdate=re,N.lightProbe.needsUpdate=re,N.directionalLights.needsUpdate=re,N.directionalLightShadows.needsUpdate=re,N.pointLights.needsUpdate=re,N.pointLightShadows.needsUpdate=re,N.spotLights.needsUpdate=re,N.spotLightShadows.needsUpdate=re,N.rectAreaLights.needsUpdate=re,N.hemisphereLights.needsUpdate=re}function jl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(N,re,de){Ie.get(N.texture).__webglTexture=re,Ie.get(N.depthTexture).__webglTexture=de;const ne=Ie.get(N);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=de===void 0,ne.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,re){const de=Ie.get(N);de.__webglFramebuffer=re,de.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(N,re=0,de=0){S=N,b=re,A=de;let ne=!0,ge=null,Ve=!1,Xe=!1;if(N){const nt=Ie.get(N);nt.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),ne=!1):nt.__webglFramebuffer===void 0?ke.setupRenderTarget(N):nt.__hasExternalTextures&&ke.rebindTextures(N,Ie.get(N.texture).__webglTexture,Ie.get(N.depthTexture).__webglTexture);const dt=N.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Xe=!0);const st=Ie.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(ge=st[re],Ve=!0):ye.isWebGL2&&N.samples>0&&ke.useMultisampledRTT(N)===!1?ge=Ie.get(N).__webglMultisampledFramebuffer:ge=st,P.copy(N.viewport),I.copy(N.scissor),T=N.scissorTest}else P.copy(O).multiplyScalar(ee).floor(),I.copy(F).multiplyScalar(ee).floor(),T=V;if(xe.bindFramebuffer(36160,ge)&&ye.drawBuffers&&ne&&xe.drawBuffers(N,ge),xe.viewport(P),xe.scissor(I),xe.setScissorTest(T),Ve){const nt=Ie.get(N.texture);W.framebufferTexture2D(36160,36064,34069+re,nt.__webglTexture,de)}else if(Xe){const nt=Ie.get(N.texture),dt=re||0;W.framebufferTextureLayer(36160,36064,nt.__webglTexture,de||0,dt)}M=-1},this.readRenderTargetPixels=function(N,re,de,ne,ge,Ve,Xe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ie.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){xe.bindFramebuffer(36160,Je);try{const nt=N.texture,dt=nt.format,st=nt.type;if(dt!==di&&k.convert(dt)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=st===jo&&(oe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&oe.has("EXT_color_buffer_float"));if(st!==Vr&&k.convert(st)!==W.getParameter(35738)&&!(st===Ur&&(ye.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=N.width-ne&&de>=0&&de<=N.height-ge&&W.readPixels(re,de,ne,ge,k.convert(dt),k.convert(st),Ve)}finally{const nt=S!==null?Ie.get(S).__webglFramebuffer:null;xe.bindFramebuffer(36160,nt)}}},this.copyFramebufferToTexture=function(N,re,de=0){const ne=Math.pow(2,-de),ge=Math.floor(re.image.width*ne),Ve=Math.floor(re.image.height*ne);ke.setTexture2D(re,0),W.copyTexSubImage2D(3553,de,0,0,N.x,N.y,ge,Ve),xe.unbindTexture()},this.copyTextureToTexture=function(N,re,de,ne=0){const ge=re.image.width,Ve=re.image.height,Xe=k.convert(de.format),Je=k.convert(de.type);ke.setTexture2D(de,0),W.pixelStorei(37440,de.flipY),W.pixelStorei(37441,de.premultiplyAlpha),W.pixelStorei(3317,de.unpackAlignment),re.isDataTexture?W.texSubImage2D(3553,ne,N.x,N.y,ge,Ve,Xe,Je,re.image.data):re.isCompressedTexture?W.compressedTexSubImage2D(3553,ne,N.x,N.y,re.mipmaps[0].width,re.mipmaps[0].height,Xe,re.mipmaps[0].data):W.texSubImage2D(3553,ne,N.x,N.y,Xe,Je,re.image),ne===0&&de.generateMipmaps&&W.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(N,re,de,ne,ge=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=N.max.x-N.min.x+1,Xe=N.max.y-N.min.y+1,Je=N.max.z-N.min.z+1,nt=k.convert(ne.format),dt=k.convert(ne.type);let st;if(ne.isData3DTexture)ke.setTexture3D(ne,0),st=32879;else if(ne.isDataArrayTexture)ke.setTexture2DArray(ne,0),st=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,ne.flipY),W.pixelStorei(37441,ne.premultiplyAlpha),W.pixelStorei(3317,ne.unpackAlignment);const lt=W.getParameter(3314),kt=W.getParameter(32878),pn=W.getParameter(3316),En=W.getParameter(3315),Ci=W.getParameter(32877),Rt=de.isCompressedTexture?de.mipmaps[0]:de.image;W.pixelStorei(3314,Rt.width),W.pixelStorei(32878,Rt.height),W.pixelStorei(3316,N.min.x),W.pixelStorei(3315,N.min.y),W.pixelStorei(32877,N.min.z),de.isDataTexture||de.isData3DTexture?W.texSubImage3D(st,ge,re.x,re.y,re.z,Ve,Xe,Je,nt,dt,Rt.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(st,ge,re.x,re.y,re.z,Ve,Xe,Je,nt,Rt.data)):W.texSubImage3D(st,ge,re.x,re.y,re.z,Ve,Xe,Je,nt,dt,Rt),W.pixelStorei(3314,lt),W.pixelStorei(32878,kt),W.pixelStorei(3316,pn),W.pixelStorei(3315,En),W.pixelStorei(32877,Ci),ge===0&&ne.generateMipmaps&&W.generateMipmap(st),xe.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?ke.setTextureCube(N,0):N.isData3DTexture?ke.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ke.setTexture2DArray(N,0):ke.setTexture2D(N,0),xe.unbindTexture()},this.resetState=function(){b=0,A=0,S=null,xe.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class iC extends ev{}iC.prototype.isWebGL1Renderer=!0;class rC extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class aC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new H;class bl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),o=Lt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new ti(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oC extends qr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ta;const Mo=new H,Aa=new H,Ca=new H,Pa=new Ee,So=new Ee,tv=new Ft,ol=new H,Eo=new H,sl=new H,Ag=new Ee,Oc=new Ee,Cg=new Ee;class hI extends rn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Ta===void 0){Ta=new Dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new aC(t,5);Ta.setIndex([0,1,2,0,2,3]),Ta.setAttribute("position",new bl(n,3,0,!1)),Ta.setAttribute("uv",new bl(n,2,3,!1))}this.geometry=Ta,this.material=e!==void 0?e:new oC,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Aa.setFromMatrixScale(this.matrixWorld),tv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Aa.multiplyScalar(-Ca.z);const n=this.material.rotation;let r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));const u=this.center;ll(ol.set(-.5,-.5,0),Ca,u,Aa,r,o),ll(Eo.set(.5,-.5,0),Ca,u,Aa,r,o),ll(sl.set(.5,.5,0),Ca,u,Aa,r,o),Ag.set(0,0),Oc.set(1,0),Cg.set(1,1);let l=e.ray.intersectTriangle(ol,Eo,sl,!1,Mo);if(l===null&&(ll(Eo.set(-.5,.5,0),Ca,u,Aa,r,o),Oc.set(0,1),l=e.ray.intersectTriangle(ol,sl,Eo,!1,Mo),l===null))return;const c=e.ray.origin.distanceTo(Mo);c<e.near||c>e.far||t.push({distance:c,point:Mo.clone(),uv:Ti.getUV(Mo,ol,Eo,sl,Ag,Oc,Cg,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ll(i,e,t,n,r,o){Pa.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(So.x=o*Pa.x-r*Pa.y,So.y=r*Pa.x+o*Pa.y):So.copy(Pa),i.copy(e),i.x+=So.x,i.y+=So.y,i.applyMatrix4(tv)}class nv extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pg=new H,Lg=new H,Rg=new Ft,Nc=new Af,ul=new Nl;class sC extends rn{constructor(e=new Dn,t=new nv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Pg.fromBufferAttribute(t,r-1),Lg.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Pg.distanceTo(Lg);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(r),ul.radius+=o,e.ray.intersectsSphere(ul)===!1)return;Rg.copy(r).invert(),Nc.copy(e.ray).applyMatrix4(Rg);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,f=new H,d=new H,p=new H,g=new H,_=this.isLineSegments?2:1,y=n.index,m=n.attributes.position;if(y!==null){const b=Math.max(0,u.start),A=Math.min(y.count,u.start+u.count);for(let S=b,M=A-1;S<M;S+=_){const w=y.getX(S),P=y.getX(S+1);if(f.fromBufferAttribute(m,w),d.fromBufferAttribute(m,P),Nc.distanceSqToSegment(f,d,g,p)>c)continue;g.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(g);T<e.near||T>e.far||t.push({distance:T,point:p.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,u.start),A=Math.min(m.count,u.start+u.count);for(let S=b,M=A-1;S<M;S+=_){if(f.fromBufferAttribute(m,S),d.fromBufferAttribute(m,S+1),Nc.distanceSqToSegment(f,d,g,p)>c)continue;g.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(g);P<e.near||P>e.far||t.push({distance:P,point:p.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}class Ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let u=1;u<=e;u++)n=this.getPoint(u/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const o=n.length;let u;t?u=t:u=e*n[o-1];let l=0,c=o-1,f;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),f=n[r]-u,f<0)l=r+1;else if(f>0)c=r-1;else{c=r;break}if(r=c,n[r]===u)return r/(o-1);const d=n[r],g=n[r+1]-d,_=(u-d)/g;return(r+_)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const u=this.getPoint(r),l=this.getPoint(o),c=t||(u.isVector2?new Ee:new H);return c.copy(l).sub(u).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,r=[],o=[],u=[],l=new H,c=new Ft;for(let _=0;_<=e;_++){const y=_/e;r[_]=this.getTangentAt(y,new H)}o[0]=new H,u[0]=new H;let f=Number.MAX_VALUE;const d=Math.abs(r[0].x),p=Math.abs(r[0].y),g=Math.abs(r[0].z);d<=f&&(f=d,n.set(1,0,0)),p<=f&&(f=p,n.set(0,1,0)),g<=f&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],l),u[0].crossVectors(r[0],o[0]);for(let _=1;_<=e;_++){if(o[_]=o[_-1].clone(),u[_]=u[_-1].clone(),l.crossVectors(r[_-1],r[_]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(hn(r[_-1].dot(r[_]),-1,1));o[_].applyMatrix4(c.makeRotationAxis(l,y))}u[_].crossVectors(r[_],o[_])}if(t===!0){let _=Math.acos(hn(o[0].dot(o[e]),-1,1));_/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(_=-_);for(let y=1;y<=e;y++)o[y].applyMatrix4(c.makeRotationAxis(r[y],_*y)),u[y].crossVectors(r[y],o[y])}return{tangents:r,normals:o,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class iv extends Ji{constructor(e=0,t=0,n=1,r=1,o=0,u=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=u,this.aClockwise=l,this.aRotation=c}getPoint(e,t){const n=t||new Ee,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const u=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(u?o=0:o=r),this.aClockwise===!0&&!u&&(o===r?o=-r:o=o-r);const l=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),g=c-this.aX,_=f-this.aY;c=g*d-_*p+this.aX,f=g*p+_*d+this.aY}return n.set(c,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lC extends iv{constructor(e,t,n,r,o,u){super(e,t,n,n,r,o,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let i=0,e=0,t=0,n=0;function r(o,u,l,c){i=o,e=l,t=-3*o+3*u-2*l-c,n=2*o-2*u+l+c}return{initCatmullRom:function(o,u,l,c,f){r(u,l,f*(l-o),f*(c-u))},initNonuniformCatmullRom:function(o,u,l,c,f,d,p){let g=(u-o)/f-(l-o)/(f+d)+(l-u)/d,_=(l-u)/d-(c-u)/(d+p)+(c-l)/p;g*=d,_*=d,r(u,l,g,_)},calc:function(o){const u=o*o,l=u*o;return i+e*o+t*u+n*l}}}const cl=new H,Fc=new Of,zc=new Of,Bc=new Of;class uC extends Ji{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){const n=t,r=this.points,o=r.length,u=(o-(this.closed?0:1))*e;let l=Math.floor(u),c=u-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let f,d;this.closed||l>0?f=r[(l-1)%o]:(cl.subVectors(r[0],r[1]).add(r[0]),f=cl);const p=r[l%o],g=r[(l+1)%o];if(this.closed||l+2<o?d=r[(l+2)%o]:(cl.subVectors(r[o-1],r[o-2]).add(r[o-1]),d=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let y=Math.pow(f.distanceToSquared(p),_),v=Math.pow(p.distanceToSquared(g),_),m=Math.pow(g.distanceToSquared(d),_);v<1e-4&&(v=1),y<1e-4&&(y=v),m<1e-4&&(m=v),Fc.initNonuniformCatmullRom(f.x,p.x,g.x,d.x,y,v,m),zc.initNonuniformCatmullRom(f.y,p.y,g.y,d.y,y,v,m),Bc.initNonuniformCatmullRom(f.z,p.z,g.z,d.z,y,v,m)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(f.x,p.x,g.x,d.x,this.tension),zc.initCatmullRom(f.y,p.y,g.y,d.y,this.tension),Bc.initCatmullRom(f.z,p.z,g.z,d.z,this.tension));return n.set(Fc.calc(c),zc.calc(c),Bc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dg(i,e,t,n,r){const o=(n-e)*.5,u=(r-t)*.5,l=i*i,c=i*l;return(2*t-2*n+o+u)*c+(-3*t+3*n-2*o-u)*l+o*i+t}function cC(i,e){const t=1-i;return t*t*e}function fC(i,e){return 2*(1-i)*i*e}function hC(i,e){return i*i*e}function Uo(i,e,t,n){return cC(i,e)+fC(i,t)+hC(i,n)}function dC(i,e){const t=1-i;return t*t*t*e}function pC(i,e){const t=1-i;return 3*t*t*i*e}function gC(i,e){return 3*(1-i)*i*i*e}function mC(i,e){return i*i*i*e}function Go(i,e,t,n,r){return dC(i,e)+pC(i,t)+gC(i,n)+mC(i,r)}class vC extends Ji{constructor(e=new Ee,t=new Ee,n=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ee){const n=t,r=this.v0,o=this.v1,u=this.v2,l=this.v3;return n.set(Go(e,r.x,o.x,u.x,l.x),Go(e,r.y,o.y,u.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rv extends Ji{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){const n=t,r=this.v0,o=this.v1,u=this.v2,l=this.v3;return n.set(Go(e,r.x,o.x,u.x,l.x),Go(e,r.y,o.y,u.y,l.y),Go(e,r.z,o.z,u.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _C extends Ji{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Ee;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xC extends Ji{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yC extends Ji{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){const n=t,r=this.v0,o=this.v1,u=this.v2;return n.set(Uo(e,r.x,o.x,u.x),Uo(e,r.y,o.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nf extends Ji{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){const n=t,r=this.v0,o=this.v1,u=this.v2;return n.set(Uo(e,r.x,o.x,u.x),Uo(e,r.y,o.y,u.y),Uo(e,r.z,o.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bC extends Ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const n=t,r=this.points,o=(r.length-1)*e,u=Math.floor(o),l=o-u,c=r[u===0?u:u-1],f=r[u],d=r[u>r.length-2?r.length-1:u+1],p=r[u>r.length-3?r.length-1:u+2];return n.set(Dg(l,c.x,f.x,d.x,p.x),Dg(l,c.y,f.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}}var wC=Object.freeze({__proto__:null,ArcCurve:lC,CatmullRomCurve3:uC,CubicBezierCurve:vC,CubicBezierCurve3:rv,EllipseCurve:iv,LineCurve:_C,LineCurve3:xC,QuadraticBezierCurve:yC,QuadraticBezierCurve3:Nf,SplineCurve:bC});class Bl extends Dn{constructor(e=1,t=1,n=1,r=32,o=1,u=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:u,thetaStart:l,thetaLength:c};const f=this;r=Math.floor(r),o=Math.floor(o);const d=[],p=[],g=[],_=[];let y=0;const v=[],m=n/2;let b=0;A(),u===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(_,2));function A(){const M=new H,w=new H;let P=0;const I=(t-e)/n;for(let T=0;T<=o;T++){const D=[],U=T/o,ee=U*(t-e)+e;for(let Z=0;Z<=r;Z++){const j=Z/r,O=j*c+l,F=Math.sin(O),V=Math.cos(O);w.x=ee*F,w.y=-U*n+m,w.z=ee*V,p.push(w.x,w.y,w.z),M.set(F,I,V).normalize(),g.push(M.x,M.y,M.z),_.push(j,1-U),D.push(y++)}v.push(D)}for(let T=0;T<r;T++)for(let D=0;D<o;D++){const U=v[D][T],ee=v[D+1][T],Z=v[D+1][T+1],j=v[D][T+1];d.push(U,ee,j),d.push(ee,Z,j),P+=6}f.addGroup(b,P,0),b+=P}function S(M){const w=y,P=new Ee,I=new H;let T=0;const D=M===!0?e:t,U=M===!0?1:-1;for(let Z=1;Z<=r;Z++)p.push(0,m*U,0),g.push(0,U,0),_.push(.5,.5),y++;const ee=y;for(let Z=0;Z<=r;Z++){const O=Z/r*c+l,F=Math.cos(O),V=Math.sin(O);I.x=D*V,I.y=m*U,I.z=D*F,p.push(I.x,I.y,I.z),g.push(0,U,0),P.x=F*.5+.5,P.y=V*.5*U+.5,_.push(P.x,P.y),y++}for(let Z=0;Z<r;Z++){const j=w+Z,O=ee+Z;M===!0?d.push(O,O+1,j):d.push(O+1,O,j),T+=3}f.addGroup(b,T,M===!0?1:2),b+=T}}static fromJSON(e){return new Bl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ff extends Bl{constructor(e=1,t=1,n=32,r=1,o=!1,u=0,l=Math.PI*2){super(0,e,t,n,r,o,u,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:u,thetaLength:l}}static fromJSON(e){return new Ff(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends Dn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,u=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:u,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(u+l,Math.PI);let f=0;const d=[],p=new H,g=new H,_=[],y=[],v=[],m=[];for(let b=0;b<=n;b++){const A=[],S=b/n;let M=0;b==0&&u==0?M=.5/t:b==n&&c==Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const P=w/t;p.x=-e*Math.cos(r+P*o)*Math.sin(u+S*l),p.y=e*Math.cos(u+S*l),p.z=e*Math.sin(r+P*o)*Math.sin(u+S*l),y.push(p.x,p.y,p.z),g.copy(p).normalize(),v.push(g.x,g.y,g.z),m.push(P+M,1-S),A.push(f++)}d.push(A)}for(let b=0;b<n;b++)for(let A=0;A<t;A++){const S=d[b][A+1],M=d[b][A],w=d[b+1][A],P=d[b+1][A+1];(b!==0||u>0)&&_.push(S,M,P),(b!==n-1||c<Math.PI)&&_.push(M,w,P)}this.setIndex(_),this.setAttribute("position",new Yt(y,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}static fromJSON(e){return new kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zf extends Dn{constructor(e=new Nf(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};const u=e.computeFrenetFrames(t,o);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const l=new H,c=new H,f=new Ee;let d=new H;const p=[],g=[],_=[],y=[];v(),this.setIndex(y),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(_,2));function v(){for(let S=0;S<t;S++)m(S);m(o===!1?t:0),A(),b()}function m(S){d=e.getPointAt(S/t,d);const M=u.normals[S],w=u.binormals[S];for(let P=0;P<=r;P++){const I=P/r*Math.PI*2,T=Math.sin(I),D=-Math.cos(I);c.x=D*M.x+T*w.x,c.y=D*M.y+T*w.y,c.z=D*M.z+T*w.z,c.normalize(),g.push(c.x,c.y,c.z),l.x=d.x+n*c.x,l.y=d.y+n*c.y,l.z=d.z+n*c.z,p.push(l.x,l.y,l.z)}}function b(){for(let S=1;S<=t;S++)for(let M=1;M<=r;M++){const w=(r+1)*(S-1)+(M-1),P=(r+1)*S+(M-1),I=(r+1)*S+M,T=(r+1)*(S-1)+M;y.push(w,P,T),y.push(P,I,T)}}function A(){for(let S=0;S<=t;S++)for(let M=0;M<=r;M++)f.x=S/t,f.y=M/r,_.push(f.x,f.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zf(new wC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class MC extends qr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zm,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ig={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class SC{constructor(e,t,n){const r=this;let o=!1,u=0,l=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,o===!1&&r.onStart!==void 0&&r.onStart(d,u,l),o=!0},this.itemEnd=function(d){u++,r.onProgress!==void 0&&r.onProgress(d,u,l),u===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,g=f.length;p<g;p+=2){const _=f[p],y=f[p+1];if(_.global&&(_.lastIndex=0),_.test(d))return y}return null}}}const EC=new SC;class av{constructor(e){this.manager=e!==void 0?e:EC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class TC extends av{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Ig.get(e);if(u!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0),u;const l=qo("img");function c(){d(),Ig.add(e,this),t&&t(this),o.manager.itemEnd(e)}function f(p){d(),r&&r(p),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class AC extends av{constructor(e){super(e)}load(e,t,n,r){const o=new Rn,u=new TC(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class ov extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kc=new Ft,Og=new H,Ng=new H;class CC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lf,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Og.setFromMatrixPosition(e.matrixWorld),t.position.copy(Og),Ng.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ng),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PC extends CC{constructor(){super(new Df(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LC extends ov{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new PC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RC extends ov{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fg(){return(typeof performance>"u"?Date:performance).now()}class lv{constructor(e,t,n=0,r=1/0){this.ray=new Af(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return lf(e,this,n,t),n.sort(zg),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)lf(e[r],this,n,t);return n.sort(zg),n}}function zg(i,e){return i.distance-e.distance}function lf(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let o=0,u=r.length;o<u;o++)lf(r[o],e,t,!0)}}class uf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);const La=new gr,dr=new lv,To=new Ee,Bg=new H,fl=new H,Uc=new H,kg=new Ft;class DC extends vi{constructor(e,t,n){super(),n.style.touchAction="none";let r=null,o=null;const u=[],l=this;function c(){n.addEventListener("pointermove",_),n.addEventListener("pointerdown",y),n.addEventListener("pointerup",v),n.addEventListener("pointerleave",v)}function f(){n.removeEventListener("pointermove",_),n.removeEventListener("pointerdown",y),n.removeEventListener("pointerup",v),n.removeEventListener("pointerleave",v),n.style.cursor=""}function d(){f()}function p(){return e}function g(){return dr}function _(b){if(l.enabled!==!1){if(m(b),dr.setFromCamera(To,t),r){dr.ray.intersectPlane(La,fl)&&r.position.copy(fl.sub(Bg).applyMatrix4(kg)),l.dispatchEvent({type:"drag",object:r});return}if(b.pointerType==="mouse"||b.pointerType==="pen")if(u.length=0,dr.setFromCamera(To,t),dr.intersectObjects(e,!0,u),u.length>0){const A=u[0].object;La.setFromNormalAndCoplanarPoint(t.getWorldDirection(La.normal),Uc.setFromMatrixPosition(A.matrixWorld)),o!==A&&o!==null&&(l.dispatchEvent({type:"hoveroff",object:o}),n.style.cursor="auto",o=null),o!==A&&(l.dispatchEvent({type:"hoveron",object:A}),n.style.cursor="pointer",o=A)}else o!==null&&(l.dispatchEvent({type:"hoveroff",object:o}),n.style.cursor="auto",o=null)}}function y(b){l.enabled!==!1&&(m(b),u.length=0,dr.setFromCamera(To,t),dr.intersectObjects(e,!0,u),u.length>0&&(r=l.transformGroup===!0?e[0]:u[0].object,La.setFromNormalAndCoplanarPoint(t.getWorldDirection(La.normal),Uc.setFromMatrixPosition(r.matrixWorld)),dr.ray.intersectPlane(La,fl)&&(kg.copy(r.parent.matrixWorld).invert(),Bg.copy(fl).sub(Uc.setFromMatrixPosition(r.matrixWorld))),n.style.cursor="move",l.dispatchEvent({type:"dragstart",object:r})))}function v(){l.enabled!==!1&&(r&&(l.dispatchEvent({type:"dragend",object:r}),r=null),n.style.cursor=o?"pointer":"auto")}function m(b){const A=n.getBoundingClientRect();To.x=(b.clientX-A.left)/A.width*2-1,To.y=-(b.clientY-A.top)/A.height*2+1}c(),this.enabled=!0,this.transformGroup=!1,this.activate=c,this.deactivate=f,this.dispose=d,this.getObjects=p,this.getRaycaster=g}}function IC(i,e,t){var n,r=1;i==null&&(i=0),e==null&&(e=0),t==null&&(t=0);function o(){var u,l=n.length,c,f=0,d=0,p=0;for(u=0;u<l;++u)c=n[u],f+=c.x||0,d+=c.y||0,p+=c.z||0;for(f=(f/l-i)*r,d=(d/l-e)*r,p=(p/l-t)*r,u=0;u<l;++u)c=n[u],f&&(c.x-=f),d&&(c.y-=d),p&&(c.z-=p)}return o.initialize=function(u){n=u},o.x=function(u){return arguments.length?(i=+u,o):i},o.y=function(u){return arguments.length?(e=+u,o):e},o.z=function(u){return arguments.length?(t=+u,o):t},o.strength=function(u){return arguments.length?(r=+u,o):r},o}function OC(i){const e=+this._x.call(null,i);return uv(this.cover(e),e,i)}function uv(i,e,t){if(isNaN(e))return i;var n,r=i._root,o={data:t},u=i._x0,l=i._x1,c,f,d,p,g;if(!r)return i._root=o,i;for(;r.length;)if((d=e>=(c=(u+l)/2))?u=c:l=c,n=r,!(r=r[p=+d]))return n[p]=o,i;if(f=+i._x.call(null,r.data),e===f)return o.next=r,n?n[p]=o:i._root=o,i;do n=n?n[p]=new Array(2):i._root=new Array(2),(d=e>=(c=(u+l)/2))?u=c:l=c;while((p=+d)==(g=+(f>=c)));return n[g]=r,n[p]=o,i}function NC(i){Array.isArray(i)||(i=Array.from(i));const e=i.length,t=new Float64Array(e);let n=1/0,r=-1/0;for(let o=0,u;o<e;++o)isNaN(u=+this._x.call(null,i[o]))||(t[o]=u,u<n&&(n=u),u>r&&(r=u));if(n>r)return this;this.cover(n).cover(r);for(let o=0;o<e;++o)uv(this,t[o],i[o]);return this}function FC(i){if(isNaN(i=+i))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(i))+1;else{for(var n=t-e||1,r=this._root,o,u;e>i||i>=t;)switch(u=+(i<e),o=new Array(2),o[u]=r,r=o,n*=2,u){case 0:t=e+n;break;case 1:e=t-n;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function zC(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function BC(i){return arguments.length?this.cover(+i[0][0]).cover(+i[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Yi(i,e,t){this.node=i,this.x0=e,this.x1=t}function kC(i,e){var t,n=this._x0,r,o,u=this._x1,l=[],c=this._root,f,d;for(c&&l.push(new Yi(c,n,u)),e==null?e=1/0:(n=i-e,u=i+e);f=l.pop();)if(!(!(c=f.node)||(r=f.x0)>u||(o=f.x1)<n))if(c.length){var p=(r+o)/2;l.push(new Yi(c[1],p,o),new Yi(c[0],r,p)),(d=+(i>=p))&&(f=l[l.length-1],l[l.length-1]=l[l.length-1-d],l[l.length-1-d]=f)}else{var g=Math.abs(i-+this._x.call(null,c.data));g<e&&(e=g,n=i-g,u=i+g,t=c.data)}return t}function UC(i){if(isNaN(c=+this._x.call(null,i)))return this;var e,t=this._root,n,r,o,u=this._x0,l=this._x1,c,f,d,p,g;if(!t)return this;if(t.length)for(;;){if((d=c>=(f=(u+l)/2))?u=f:l=f,e=t,!(t=t[p=+d]))return this;if(!t.length)break;e[p+1&1]&&(n=e,g=p)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[p]=o:delete e[p],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(n?n[g]=t:this._root=t),this):(this._root=o,this)}function GC(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function HC(){return this._root}function VC(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function WC(i){var e=[],t,n=this._root,r,o,u;for(n&&e.push(new Yi(n,this._x0,this._x1));t=e.pop();)if(!i(n=t.node,o=t.x0,u=t.x1)&&n.length){var l=(o+u)/2;(r=n[1])&&e.push(new Yi(r,l,u)),(r=n[0])&&e.push(new Yi(r,o,l))}return this}function jC(i){var e=[],t=[],n;for(this._root&&e.push(new Yi(this._root,this._x0,this._x1));n=e.pop();){var r=n.node;if(r.length){var o,u=n.x0,l=n.x1,c=(u+l)/2;(o=r[0])&&e.push(new Yi(o,u,c)),(o=r[1])&&e.push(new Yi(o,c,l))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.x1);return this}function $C(i){return i[0]}function qC(i){return arguments.length?(this._x=i,this):this._x}function cv(i,e){var t=new Bf(e??$C,NaN,NaN);return i==null?t:t.addAll(i)}function Bf(i,e,t){this._x=i,this._x0=e,this._x1=t,this._root=void 0}function Ug(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var In=cv.prototype=Bf.prototype;In.copy=function(){var i=new Bf(this._x,this._x0,this._x1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Ug(e),i;for(t=[{source:e,target:i._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(2)}):e.target[r]=Ug(n));return i};In.add=OC;In.addAll=NC;In.cover=FC;In.data=zC;In.extent=BC;In.find=kC;In.remove=UC;In.removeAll=GC;In.root=HC;In.size=VC;In.visit=WC;In.visitAfter=jC;In.x=qC;function XC(i){const e=+this._x.call(null,i),t=+this._y.call(null,i);return fv(this.cover(e,t),e,t,i)}function fv(i,e,t,n){if(isNaN(e)||isNaN(t))return i;var r,o=i._root,u={data:n},l=i._x0,c=i._y0,f=i._x1,d=i._y1,p,g,_,y,v,m,b,A;if(!o)return i._root=u,i;for(;o.length;)if((v=e>=(p=(l+f)/2))?l=p:f=p,(m=t>=(g=(c+d)/2))?c=g:d=g,r=o,!(o=o[b=m<<1|v]))return r[b]=u,i;if(_=+i._x.call(null,o.data),y=+i._y.call(null,o.data),e===_&&t===y)return u.next=o,r?r[b]=u:i._root=u,i;do r=r?r[b]=new Array(4):i._root=new Array(4),(v=e>=(p=(l+f)/2))?l=p:f=p,(m=t>=(g=(c+d)/2))?c=g:d=g;while((b=m<<1|v)===(A=(y>=g)<<1|_>=p));return r[A]=o,r[b]=u,i}function YC(i){var e,t,n=i.length,r,o,u=new Array(n),l=new Array(n),c=1/0,f=1/0,d=-1/0,p=-1/0;for(t=0;t<n;++t)isNaN(r=+this._x.call(null,e=i[t]))||isNaN(o=+this._y.call(null,e))||(u[t]=r,l[t]=o,r<c&&(c=r),r>d&&(d=r),o<f&&(f=o),o>p&&(p=o));if(c>d||f>p)return this;for(this.cover(c,f).cover(d,p),t=0;t<n;++t)fv(this,u[t],l[t],i[t]);return this}function ZC(i,e){if(isNaN(i=+i)||isNaN(e=+e))return this;var t=this._x0,n=this._y0,r=this._x1,o=this._y1;if(isNaN(t))r=(t=Math.floor(i))+1,o=(n=Math.floor(e))+1;else{for(var u=r-t||1,l=this._root,c,f;t>i||i>=r||n>e||e>=o;)switch(f=(e<n)<<1|i<t,c=new Array(4),c[f]=l,l=c,u*=2,f){case 0:r=t+u,o=n+u;break;case 1:t=r-u,o=n+u;break;case 2:r=t+u,n=o-u;break;case 3:t=r-u,n=o-u;break}this._root&&this._root.length&&(this._root=l)}return this._x0=t,this._y0=n,this._x1=r,this._y1=o,this}function KC(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function JC(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function wn(i,e,t,n,r){this.node=i,this.x0=e,this.y0=t,this.x1=n,this.y1=r}function QC(i,e,t){var n,r=this._x0,o=this._y0,u,l,c,f,d=this._x1,p=this._y1,g=[],_=this._root,y,v;for(_&&g.push(new wn(_,r,o,d,p)),t==null?t=1/0:(r=i-t,o=e-t,d=i+t,p=e+t,t*=t);y=g.pop();)if(!(!(_=y.node)||(u=y.x0)>d||(l=y.y0)>p||(c=y.x1)<r||(f=y.y1)<o))if(_.length){var m=(u+c)/2,b=(l+f)/2;g.push(new wn(_[3],m,b,c,f),new wn(_[2],u,b,m,f),new wn(_[1],m,l,c,b),new wn(_[0],u,l,m,b)),(v=(e>=b)<<1|i>=m)&&(y=g[g.length-1],g[g.length-1]=g[g.length-1-v],g[g.length-1-v]=y)}else{var A=i-+this._x.call(null,_.data),S=e-+this._y.call(null,_.data),M=A*A+S*S;if(M<t){var w=Math.sqrt(t=M);r=i-w,o=e-w,d=i+w,p=e+w,n=_.data}}return n}function e3(i){if(isNaN(d=+this._x.call(null,i))||isNaN(p=+this._y.call(null,i)))return this;var e,t=this._root,n,r,o,u=this._x0,l=this._y0,c=this._x1,f=this._y1,d,p,g,_,y,v,m,b;if(!t)return this;if(t.length)for(;;){if((y=d>=(g=(u+c)/2))?u=g:c=g,(v=p>=(_=(l+f)/2))?l=_:f=_,e=t,!(t=t[m=v<<1|y]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(n=e,b=m)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[m]=o:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[b]=t:this._root=t),this):(this._root=o,this)}function t3(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function n3(){return this._root}function i3(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function r3(i){var e=[],t,n=this._root,r,o,u,l,c;for(n&&e.push(new wn(n,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!i(n=t.node,o=t.x0,u=t.y0,l=t.x1,c=t.y1)&&n.length){var f=(o+l)/2,d=(u+c)/2;(r=n[3])&&e.push(new wn(r,f,d,l,c)),(r=n[2])&&e.push(new wn(r,o,d,f,c)),(r=n[1])&&e.push(new wn(r,f,u,l,d)),(r=n[0])&&e.push(new wn(r,o,u,f,d))}return this}function a3(i){var e=[],t=[],n;for(this._root&&e.push(new wn(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var r=n.node;if(r.length){var o,u=n.x0,l=n.y0,c=n.x1,f=n.y1,d=(u+c)/2,p=(l+f)/2;(o=r[0])&&e.push(new wn(o,u,l,d,p)),(o=r[1])&&e.push(new wn(o,d,l,c,p)),(o=r[2])&&e.push(new wn(o,u,p,d,f)),(o=r[3])&&e.push(new wn(o,d,p,c,f))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function o3(i){return i[0]}function s3(i){return arguments.length?(this._x=i,this):this._x}function l3(i){return i[1]}function u3(i){return arguments.length?(this._y=i,this):this._y}function hv(i,e,t){var n=new kf(e??o3,t??l3,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function kf(i,e,t,n,r,o){this._x=i,this._y=e,this._x0=t,this._y0=n,this._x1=r,this._y1=o,this._root=void 0}function Gg(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var Mn=hv.prototype=kf.prototype;Mn.copy=function(){var i=new kf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Gg(e),i;for(t=[{source:e,target:i._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(4)}):e.target[r]=Gg(n));return i};Mn.add=XC;Mn.addAll=YC;Mn.cover=ZC;Mn.data=KC;Mn.extent=JC;Mn.find=QC;Mn.remove=e3;Mn.removeAll=t3;Mn.root=n3;Mn.size=i3;Mn.visit=r3;Mn.visitAfter=a3;Mn.x=s3;Mn.y=u3;function c3(i){const e=+this._x.call(null,i),t=+this._y.call(null,i),n=+this._z.call(null,i);return dv(this.cover(e,t,n),e,t,n,i)}function dv(i,e,t,n,r){if(isNaN(e)||isNaN(t)||isNaN(n))return i;var o,u=i._root,l={data:r},c=i._x0,f=i._y0,d=i._z0,p=i._x1,g=i._y1,_=i._z1,y,v,m,b,A,S,M,w,P,I,T;if(!u)return i._root=l,i;for(;u.length;)if((M=e>=(y=(c+p)/2))?c=y:p=y,(w=t>=(v=(f+g)/2))?f=v:g=v,(P=n>=(m=(d+_)/2))?d=m:_=m,o=u,!(u=u[I=P<<2|w<<1|M]))return o[I]=l,i;if(b=+i._x.call(null,u.data),A=+i._y.call(null,u.data),S=+i._z.call(null,u.data),e===b&&t===A&&n===S)return l.next=u,o?o[I]=l:i._root=l,i;do o=o?o[I]=new Array(8):i._root=new Array(8),(M=e>=(y=(c+p)/2))?c=y:p=y,(w=t>=(v=(f+g)/2))?f=v:g=v,(P=n>=(m=(d+_)/2))?d=m:_=m;while((I=P<<2|w<<1|M)===(T=(S>=m)<<2|(A>=v)<<1|b>=y));return o[T]=u,o[I]=l,i}function f3(i){Array.isArray(i)||(i=Array.from(i));const e=i.length,t=new Float64Array(e),n=new Float64Array(e),r=new Float64Array(e);let o=1/0,u=1/0,l=1/0,c=-1/0,f=-1/0,d=-1/0;for(let p=0,g,_,y,v;p<e;++p)isNaN(_=+this._x.call(null,g=i[p]))||isNaN(y=+this._y.call(null,g))||isNaN(v=+this._z.call(null,g))||(t[p]=_,n[p]=y,r[p]=v,_<o&&(o=_),_>c&&(c=_),y<u&&(u=y),y>f&&(f=y),v<l&&(l=v),v>d&&(d=v));if(o>c||u>f||l>d)return this;this.cover(o,u,l).cover(c,f,d);for(let p=0;p<e;++p)dv(this,t[p],n[p],r[p],i[p]);return this}function h3(i,e,t){if(isNaN(i=+i)||isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,o=this._z0,u=this._x1,l=this._y1,c=this._z1;if(isNaN(n))u=(n=Math.floor(i))+1,l=(r=Math.floor(e))+1,c=(o=Math.floor(t))+1;else{for(var f=u-n||1,d=this._root,p,g;n>i||i>=u||r>e||e>=l||o>t||t>=c;)switch(g=(t<o)<<2|(e<r)<<1|i<n,p=new Array(8),p[g]=d,d=p,f*=2,g){case 0:u=n+f,l=r+f,c=o+f;break;case 1:n=u-f,l=r+f,c=o+f;break;case 2:u=n+f,r=l-f,c=o+f;break;case 3:n=u-f,r=l-f,c=o+f;break;case 4:u=n+f,l=r+f,o=c-f;break;case 5:n=u-f,l=r+f,o=c-f;break;case 6:u=n+f,r=l-f,o=c-f;break;case 7:n=u-f,r=l-f,o=c-f;break}this._root&&this._root.length&&(this._root=d)}return this._x0=n,this._y0=r,this._z0=o,this._x1=u,this._y1=l,this._z1=c,this}function d3(){var i=[];return this.visit(function(e){if(!e.length)do i.push(e.data);while(e=e.next)}),i}function p3(i){return arguments.length?this.cover(+i[0][0],+i[0][1],+i[0][2]).cover(+i[1][0],+i[1][1],+i[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Tt(i,e,t,n,r,o,u){this.node=i,this.x0=e,this.y0=t,this.z0=n,this.x1=r,this.y1=o,this.z1=u}function g3(i,e,t,n){var r,o=this._x0,u=this._y0,l=this._z0,c,f,d,p,g,_,y=this._x1,v=this._y1,m=this._z1,b=[],A=this._root,S,M;for(A&&b.push(new Tt(A,o,u,l,y,v,m)),n==null?n=1/0:(o=i-n,u=e-n,l=t-n,y=i+n,v=e+n,m=t+n,n*=n);S=b.pop();)if(!(!(A=S.node)||(c=S.x0)>y||(f=S.y0)>v||(d=S.z0)>m||(p=S.x1)<o||(g=S.y1)<u||(_=S.z1)<l))if(A.length){var w=(c+p)/2,P=(f+g)/2,I=(d+_)/2;b.push(new Tt(A[7],w,P,I,p,g,_),new Tt(A[6],c,P,I,w,g,_),new Tt(A[5],w,f,I,p,P,_),new Tt(A[4],c,f,I,w,P,_),new Tt(A[3],w,P,d,p,g,I),new Tt(A[2],c,P,d,w,g,I),new Tt(A[1],w,f,d,p,P,I),new Tt(A[0],c,f,d,w,P,I)),(M=(t>=I)<<2|(e>=P)<<1|i>=w)&&(S=b[b.length-1],b[b.length-1]=b[b.length-1-M],b[b.length-1-M]=S)}else{var T=i-+this._x.call(null,A.data),D=e-+this._y.call(null,A.data),U=t-+this._z.call(null,A.data),ee=T*T+D*D+U*U;if(ee<n){var Z=Math.sqrt(n=ee);o=i-Z,u=e-Z,l=t-Z,y=i+Z,v=e+Z,m=t+Z,r=A.data}}return r}function m3(i){if(isNaN(g=+this._x.call(null,i))||isNaN(_=+this._y.call(null,i))||isNaN(y=+this._z.call(null,i)))return this;var e,t=this._root,n,r,o,u=this._x0,l=this._y0,c=this._z0,f=this._x1,d=this._y1,p=this._z1,g,_,y,v,m,b,A,S,M,w,P;if(!t)return this;if(t.length)for(;;){if((A=g>=(v=(u+f)/2))?u=v:f=v,(S=_>=(m=(l+d)/2))?l=m:d=m,(M=y>=(b=(c+p)/2))?c=b:p=b,e=t,!(t=t[w=M<<2|S<<1|A]))return this;if(!t.length)break;(e[w+1&7]||e[w+2&7]||e[w+3&7]||e[w+4&7]||e[w+5&7]||e[w+6&7]||e[w+7&7])&&(n=e,P=w)}for(;t.data!==i;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[w]=o:delete e[w],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[P]=t:this._root=t),this):(this._root=o,this)}function v3(i){for(var e=0,t=i.length;e<t;++e)this.remove(i[e]);return this}function _3(){return this._root}function x3(){var i=0;return this.visit(function(e){if(!e.length)do++i;while(e=e.next)}),i}function y3(i){var e=[],t,n=this._root,r,o,u,l,c,f,d;for(n&&e.push(new Tt(n,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!i(n=t.node,o=t.x0,u=t.y0,l=t.z0,c=t.x1,f=t.y1,d=t.z1)&&n.length){var p=(o+c)/2,g=(u+f)/2,_=(l+d)/2;(r=n[7])&&e.push(new Tt(r,p,g,_,c,f,d)),(r=n[6])&&e.push(new Tt(r,o,g,_,p,f,d)),(r=n[5])&&e.push(new Tt(r,p,u,_,c,g,d)),(r=n[4])&&e.push(new Tt(r,o,u,_,p,g,d)),(r=n[3])&&e.push(new Tt(r,p,g,l,c,f,_)),(r=n[2])&&e.push(new Tt(r,o,g,l,p,f,_)),(r=n[1])&&e.push(new Tt(r,p,u,l,c,g,_)),(r=n[0])&&e.push(new Tt(r,o,u,l,p,g,_))}return this}function b3(i){var e=[],t=[],n;for(this._root&&e.push(new Tt(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();){var r=n.node;if(r.length){var o,u=n.x0,l=n.y0,c=n.z0,f=n.x1,d=n.y1,p=n.z1,g=(u+f)/2,_=(l+d)/2,y=(c+p)/2;(o=r[0])&&e.push(new Tt(o,u,l,c,g,_,y)),(o=r[1])&&e.push(new Tt(o,g,l,c,f,_,y)),(o=r[2])&&e.push(new Tt(o,u,_,c,g,d,y)),(o=r[3])&&e.push(new Tt(o,g,_,c,f,d,y)),(o=r[4])&&e.push(new Tt(o,u,l,y,g,_,p)),(o=r[5])&&e.push(new Tt(o,g,l,y,f,_,p)),(o=r[6])&&e.push(new Tt(o,u,_,y,g,d,p)),(o=r[7])&&e.push(new Tt(o,g,_,y,f,d,p))}t.push(n)}for(;n=t.pop();)i(n.node,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);return this}function w3(i){return i[0]}function M3(i){return arguments.length?(this._x=i,this):this._x}function S3(i){return i[1]}function E3(i){return arguments.length?(this._y=i,this):this._y}function T3(i){return i[2]}function A3(i){return arguments.length?(this._z=i,this):this._z}function pv(i,e,t,n){var r=new Uf(e??w3,t??S3,n??T3,NaN,NaN,NaN,NaN,NaN,NaN);return i==null?r:r.addAll(i)}function Uf(i,e,t,n,r,o,u,l,c){this._x=i,this._y=e,this._z=t,this._x0=n,this._y0=r,this._z0=o,this._x1=u,this._y1=l,this._z1=c,this._root=void 0}function Hg(i){for(var e={data:i.data},t=e;i=i.next;)t=t.next={data:i.data};return e}var dn=pv.prototype=Uf.prototype;dn.copy=function(){var i=new Uf(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,n;if(!e)return i;if(!e.length)return i._root=Hg(e),i;for(t=[{source:e,target:i._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(n=e.source[r])&&(n.length?t.push({source:n,target:e.target[r]=new Array(8)}):e.target[r]=Hg(n));return i};dn.add=c3;dn.addAll=f3;dn.cover=h3;dn.data=d3;dn.extent=p3;dn.find=g3;dn.remove=m3;dn.removeAll=v3;dn.root=_3;dn.size=x3;dn.visit=y3;dn.visitAfter=b3;dn.x=M3;dn.y=E3;dn.z=A3;function qi(i){return function(){return i}}function $i(i){return(i()-.5)*1e-6}function C3(i){return i.index}function Vg(i,e){var t=i.get(e);if(!t)throw new Error("node not found: "+e);return t}function P3(i){var e=C3,t=g,n,r=qi(30),o,u,l,c,f,d,p=1;i==null&&(i=[]);function g(b){return 1/Math.min(c[b.source.index],c[b.target.index])}function _(b){for(var A=0,S=i.length;A<p;++A)for(var M=0,w,P,I,T=0,D=0,U=0,ee,Z;M<S;++M)w=i[M],P=w.source,I=w.target,T=I.x+I.vx-P.x-P.vx||$i(d),l>1&&(D=I.y+I.vy-P.y-P.vy||$i(d)),l>2&&(U=I.z+I.vz-P.z-P.vz||$i(d)),ee=Math.sqrt(T*T+D*D+U*U),ee=(ee-o[M])/ee*b*n[M],T*=ee,D*=ee,U*=ee,I.vx-=T*(Z=f[M]),l>1&&(I.vy-=D*Z),l>2&&(I.vz-=U*Z),P.vx+=T*(Z=1-Z),l>1&&(P.vy+=D*Z),l>2&&(P.vz+=U*Z)}function y(){if(u){var b,A=u.length,S=i.length,M=new Map(u.map((P,I)=>[e(P,I,u),P])),w;for(b=0,c=new Array(A);b<S;++b)w=i[b],w.index=b,typeof w.source!="object"&&(w.source=Vg(M,w.source)),typeof w.target!="object"&&(w.target=Vg(M,w.target)),c[w.source.index]=(c[w.source.index]||0)+1,c[w.target.index]=(c[w.target.index]||0)+1;for(b=0,f=new Array(S);b<S;++b)w=i[b],f[b]=c[w.source.index]/(c[w.source.index]+c[w.target.index]);n=new Array(S),v(),o=new Array(S),m()}}function v(){if(u)for(var b=0,A=i.length;b<A;++b)n[b]=+t(i[b],b,i)}function m(){if(u)for(var b=0,A=i.length;b<A;++b)o[b]=+r(i[b],b,i)}return _.initialize=function(b,...A){u=b,d=A.find(S=>typeof S=="function")||Math.random,l=A.find(S=>[1,2,3].includes(S))||2,y()},_.links=function(b){return arguments.length?(i=b,y(),_):i},_.id=function(b){return arguments.length?(e=b,_):e},_.iterations=function(b){return arguments.length?(p=+b,_):p},_.strength=function(b){return arguments.length?(t=typeof b=="function"?b:qi(+b),v(),_):t},_.distance=function(b){return arguments.length?(r=typeof b=="function"?b:qi(+b),m(),_):r},_}var L3={value:()=>{}};function gv(){for(var i=0,e=arguments.length,t={},n;i<e;++i){if(!(n=arguments[i]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new vl(t)}function vl(i){this._=i}function R3(i,e){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}vl.prototype=gv.prototype={constructor:vl,on:function(i,e){var t=this._,n=R3(i+"",t),r,o=-1,u=n.length;if(arguments.length<2){for(;++o<u;)if((r=(i=n[o]).type)&&(r=D3(t[r],i.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<u;)if(r=(i=n[o]).type)t[r]=Wg(t[r],i.name,e);else if(e==null)for(r in t)t[r]=Wg(t[r],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new vl(i)},call:function(i,e){if((r=arguments.length-2)>0)for(var t=new Array(r),n=0,r,o;n<r;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(o=this._[i],n=0,r=o.length;n<r;++n)o[n].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,o=n.length;r<o;++r)n[r].value.apply(e,t)}};function D3(i,e){for(var t=0,n=i.length,r;t<n;++t)if((r=i[t]).name===e)return r.value}function Wg(i,e,t){for(var n=0,r=i.length;n<r;++n)if(i[n].name===e){i[n]=L3,i=i.slice(0,n).concat(i.slice(n+1));break}return t!=null&&i.push({name:e,value:t}),i}var Wa=0,No=0,Ao=0,mv=1e3,wl,Fo,Ml=0,jr=0,Ul=0,Xo=typeof performance=="object"&&performance.now?performance:Date,vv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function _v(){return jr||(vv(I3),jr=Xo.now()+Ul)}function I3(){jr=0}function cf(){this._call=this._time=this._next=null}cf.prototype=xv.prototype={constructor:cf,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?_v():+t)+(e==null?0:+e),!this._next&&Fo!==this&&(Fo?Fo._next=this:wl=this,Fo=this),this._call=i,this._time=t,ff()},stop:function(){this._call&&(this._call=null,this._time=1/0,ff())}};function xv(i,e,t){var n=new cf;return n.restart(i,e,t),n}function O3(){_v(),++Wa;for(var i=wl,e;i;)(e=jr-i._time)>=0&&i._call.call(void 0,e),i=i._next;--Wa}function jg(){jr=(Ml=Xo.now())+Ul,Wa=No=0;try{O3()}finally{Wa=0,F3(),jr=0}}function N3(){var i=Xo.now(),e=i-Ml;e>mv&&(Ul-=e,Ml=i)}function F3(){for(var i,e=wl,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:wl=t);Fo=i,ff(n)}function ff(i){if(!Wa){No&&(No=clearTimeout(No));var e=i-jr;e>24?(i<1/0&&(No=setTimeout(jg,i-Xo.now()-Ul)),Ao&&(Ao=clearInterval(Ao))):(Ao||(Ml=Xo.now(),Ao=setInterval(N3,mv)),Wa=1,vv(jg))}}const z3=1664525,B3=1013904223,$g=4294967296;function k3(){let i=1;return()=>(i=(z3*i+B3)%$g)/$g}var qg=3;function Gc(i){return i.x}function Xg(i){return i.y}function U3(i){return i.z}var G3=10,H3=Math.PI*(3-Math.sqrt(5)),V3=Math.PI*20/(9+Math.sqrt(221));function W3(i,e){e=e||2;var t=Math.min(qg,Math.max(1,Math.round(e))),n,r=1,o=.001,u=1-Math.pow(o,1/300),l=0,c=.6,f=new Map,d=xv(_),p=gv("tick","end"),g=k3();i==null&&(i=[]);function _(){y(),p.call("tick",n),r<o&&(d.stop(),p.call("end",n))}function y(b){var A,S=i.length,M;b===void 0&&(b=1);for(var w=0;w<b;++w)for(r+=(l-r)*u,f.forEach(function(P){P(r)}),A=0;A<S;++A)M=i[A],M.fx==null?M.x+=M.vx*=c:(M.x=M.fx,M.vx=0),t>1&&(M.fy==null?M.y+=M.vy*=c:(M.y=M.fy,M.vy=0)),t>2&&(M.fz==null?M.z+=M.vz*=c:(M.z=M.fz,M.vz=0));return n}function v(){for(var b=0,A=i.length,S;b<A;++b){if(S=i[b],S.index=b,S.fx!=null&&(S.x=S.fx),S.fy!=null&&(S.y=S.fy),S.fz!=null&&(S.z=S.fz),isNaN(S.x)||t>1&&isNaN(S.y)||t>2&&isNaN(S.z)){var M=G3*(t>2?Math.cbrt(.5+b):t>1?Math.sqrt(.5+b):b),w=b*H3,P=b*V3;t===1?S.x=M:t===2?(S.x=M*Math.cos(w),S.y=M*Math.sin(w)):(S.x=M*Math.sin(w)*Math.cos(P),S.y=M*Math.cos(w),S.z=M*Math.sin(w)*Math.sin(P))}(isNaN(S.vx)||t>1&&isNaN(S.vy)||t>2&&isNaN(S.vz))&&(S.vx=0,t>1&&(S.vy=0),t>2&&(S.vz=0))}}function m(b){return b.initialize&&b.initialize(i,g,t),b}return v(),n={tick:y,restart:function(){return d.restart(_),n},stop:function(){return d.stop(),n},numDimensions:function(b){return arguments.length?(t=Math.min(qg,Math.max(1,Math.round(b))),f.forEach(m),n):t},nodes:function(b){return arguments.length?(i=b,v(),f.forEach(m),n):i},alpha:function(b){return arguments.length?(r=+b,n):r},alphaMin:function(b){return arguments.length?(o=+b,n):o},alphaDecay:function(b){return arguments.length?(u=+b,n):+u},alphaTarget:function(b){return arguments.length?(l=+b,n):l},velocityDecay:function(b){return arguments.length?(c=1-b,n):1-c},randomSource:function(b){return arguments.length?(g=b,f.forEach(m),n):g},force:function(b,A){return arguments.length>1?(A==null?f.delete(b):f.set(b,m(A)),n):f.get(b)},find:function(){var b=Array.prototype.slice.call(arguments),A=b.shift()||0,S=(t>1?b.shift():null)||0,M=(t>2?b.shift():null)||0,w=b.shift()||1/0,P=0,I=i.length,T,D,U,ee,Z,j;for(w*=w,P=0;P<I;++P)Z=i[P],T=A-Z.x,D=S-(Z.y||0),U=M-(Z.z||0),ee=T*T+D*D+U*U,ee<w&&(j=Z,w=ee);return j},on:function(b,A){return arguments.length>1?(p.on(b,A),n):p.on(b)}}}function j3(){var i,e,t,n,r,o=qi(-30),u,l=1,c=1/0,f=.81;function d(y){var v,m=i.length,b=(e===1?cv(i,Gc):e===2?hv(i,Gc,Xg):e===3?pv(i,Gc,Xg,U3):null).visitAfter(g);for(r=y,v=0;v<m;++v)t=i[v],b.visit(_)}function p(){if(i){var y,v=i.length,m;for(u=new Array(v),y=0;y<v;++y)m=i[y],u[m.index]=+o(m,y,i)}}function g(y){var v=0,m,b,A=0,S,M,w,P,I=y.length;if(I){for(S=M=w=P=0;P<I;++P)(m=y[P])&&(b=Math.abs(m.value))&&(v+=m.value,A+=b,S+=b*(m.x||0),M+=b*(m.y||0),w+=b*(m.z||0));v*=Math.sqrt(4/I),y.x=S/A,e>1&&(y.y=M/A),e>2&&(y.z=w/A)}else{m=y,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do v+=u[m.data.index];while(m=m.next)}y.value=v}function _(y,v,m,b,A){if(!y.value)return!0;var S=[m,b,A][e-1],M=y.x-t.x,w=e>1?y.y-t.y:0,P=e>2?y.z-t.z:0,I=S-v,T=M*M+w*w+P*P;if(I*I/f<T)return T<c&&(M===0&&(M=$i(n),T+=M*M),e>1&&w===0&&(w=$i(n),T+=w*w),e>2&&P===0&&(P=$i(n),T+=P*P),T<l&&(T=Math.sqrt(l*T)),t.vx+=M*y.value*r/T,e>1&&(t.vy+=w*y.value*r/T),e>2&&(t.vz+=P*y.value*r/T)),!0;if(y.length||T>=c)return;(y.data!==t||y.next)&&(M===0&&(M=$i(n),T+=M*M),e>1&&w===0&&(w=$i(n),T+=w*w),e>2&&P===0&&(P=$i(n),T+=P*P),T<l&&(T=Math.sqrt(l*T)));do y.data!==t&&(I=u[y.data.index]*r/T,t.vx+=M*I,e>1&&(t.vy+=w*I),e>2&&(t.vz+=P*I));while(y=y.next)}return d.initialize=function(y,...v){i=y,n=v.find(m=>typeof m=="function")||Math.random,e=v.find(m=>[1,2,3].includes(m))||2,p()},d.strength=function(y){return arguments.length?(o=typeof y=="function"?y:qi(+y),p(),d):o},d.distanceMin=function(y){return arguments.length?(l=y*y,d):Math.sqrt(l)},d.distanceMax=function(y){return arguments.length?(c=y*y,d):Math.sqrt(c)},d.theta=function(y){return arguments.length?(f=y*y,d):Math.sqrt(f)},d}function $3(i,e,t,n){var r,o,u=qi(.1),l,c;typeof i!="function"&&(i=qi(+i)),e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function f(p){for(var g=0,_=r.length;g<_;++g){var y=r[g],v=y.x-e||1e-6,m=(y.y||0)-t||1e-6,b=(y.z||0)-n||1e-6,A=Math.sqrt(v*v+m*m+b*b),S=(c[g]-A)*l[g]*p/A;y.vx+=v*S,o>1&&(y.vy+=m*S),o>2&&(y.vz+=b*S)}}function d(){if(r){var p,g=r.length;for(l=new Array(g),c=new Array(g),p=0;p<g;++p)c[p]=+i(r[p],p,r),l[p]=isNaN(c[p])?0:+u(r[p],p,r)}}return f.initialize=function(p,...g){r=p,o=g.find(_=>[1,2,3].includes(_))||2,d()},f.strength=function(p){return arguments.length?(u=typeof p=="function"?p:qi(+p),d(),f):u},f.radius=function(p){return arguments.length?(i=typeof p=="function"?p:qi(+p),d(),f):i},f.x=function(p){return arguments.length?(e=+p,f):e},f.y=function(p){return arguments.length?(t=+p,f):t},f.z=function(p){return arguments.length?(n=+p,f):n},f}var Gf=X3,q3=Sf;function X3(i){if(i=i||{},"uniqueLinkId"in i&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),i.multigraph=i.uniqueLinkId),i.multigraph===void 0&&(i.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,n={},r=0,o=i.multigraph?M:S,u=[],l=V,c=V,f=V,d=V,p={version:20,addNode:v,addLink:A,removeLink:T,removeNode:b,getNode:m,getNodeCount:w,getLinkCount:P,getEdgeCount:P,getLinksCount:P,getNodesCount:w,getLinks:I,forEachNode:_e,forEachLinkedNode:j,forEachLink:Z,beginUpdate:f,endUpdate:d,clear:ee,hasLink:U,hasNode:m,getLink:U};return q3(p),g(),p;function g(){var J=p.on;p.on=pe;function pe(){return p.beginUpdate=f=ie,p.endUpdate=d=ae,l=_,c=y,p.on=J,J.apply(p,arguments)}}function _(J,pe){u.push({link:J,changeType:pe})}function y(J,pe){u.push({node:J,changeType:pe})}function v(J,pe){if(J===void 0)throw new Error("Invalid node identifier");f();var $=m(J);return $?($.data=pe,c($,"update")):($=new Y3(J,pe),c($,"add")),e.set(J,$),d(),$}function m(J){return e.get(J)}function b(J){var pe=m(J);if(!pe)return!1;f();var $=pe.links;return $&&($.forEach(D),pe.links=null),e.delete(J),c(pe,"remove"),d(),!0}function A(J,pe,$){f();var fe=m(J)||v(J),le=m(pe)||v(pe),Q=o(J,pe,$),W=t.has(Q.id);return t.set(Q.id,Q),Yg(fe,Q),J!==pe&&Yg(le,Q),l(Q,W?"update":"add"),d(),Q}function S(J,pe,$){var fe=hl(J,pe),le=t.get(fe);return le?(le.data=$,le):new Zg(J,pe,$,fe)}function M(J,pe,$){var fe=hl(J,pe),le=n.hasOwnProperty(fe);if(le||U(J,pe)){le||(n[fe]=0);var Q="@"+ ++n[fe];fe=hl(J+Q,pe+Q)}return new Zg(J,pe,$,fe)}function w(){return e.size}function P(){return t.size}function I(J){var pe=m(J);return pe?pe.links:null}function T(J,pe){return pe!==void 0&&(J=U(J,pe)),D(J)}function D(J){if(!J||!t.get(J.id))return!1;f(),t.delete(J.id);var pe=m(J.fromId),$=m(J.toId);return pe&&pe.links.delete(J),$&&$.links.delete(J),l(J,"remove"),d(),!0}function U(J,pe){if(!(J===void 0||pe===void 0))return t.get(hl(J,pe))}function ee(){f(),_e(function(J){b(J.id)}),d()}function Z(J){if(typeof J=="function")for(var pe=t.values(),$=pe.next();!$.done;){if(J($.value))return!0;$=pe.next()}}function j(J,pe,$){var fe=m(J);if(fe&&fe.links&&typeof pe=="function")return $?F(fe.links,J,pe):O(fe.links,J,pe)}function O(J,pe,$){for(var fe,le=J.values(),Q=le.next();!Q.done;){var W=Q.value,q=W.fromId===pe?W.toId:W.fromId;if(fe=$(e.get(q),W),fe)return!0;Q=le.next()}}function F(J,pe,$){for(var fe,le=J.values(),Q=le.next();!Q.done;){var W=Q.value;if(W.fromId===pe&&(fe=$(e.get(W.toId),W),fe))return!0;Q=le.next()}}function V(){}function ie(){r+=1}function ae(){r-=1,r===0&&u.length>0&&(p.fire("changed",u),u.length=0)}function _e(J){if(typeof J!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+J);for(var pe=e.values(),$=pe.next();!$.done;){if(J($.value))return!0;$=pe.next()}}}function Y3(i,e){this.id=i,this.links=null,this.data=e}function Yg(i,e){i.links?i.links.add(e):i.links=new Set([e])}function Zg(i,e,t,n){this.fromId=i,this.toId=e,this.data=t,this.id=n}function hl(i,e){return i.toString()+"👉 "+e.toString()}var Sl={},Z3={get exports(){return Sl},set exports(i){Sl=i}},ja={},K3={get exports(){return ja},set exports(i){ja=i}},yv=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const J3=yv;var qa=function(e){return t;function t(n,r){let o=r&&r.indent||0,u=r&&r.join!==void 0?r.join:`
`,l=Array(o+1).join(" "),c=[];for(let f=0;f<e;++f){let d=J3(f),p=f===0?"":l;c.push(p+n.replace(/{var}/g,d))}return c.join(u)}};const bv=qa;K3.exports=Q3;ja.generateCreateBodyFunctionBody=wv;ja.getVectorCode=Sv;ja.getBodyCode=Mv;function Q3(i,e){let t=wv(i,e),{Body:n}=new Function(t)();return n}function wv(i,e){return`
${Sv(i,e)}
${Mv(i)}
return {Body: Body, Vector: Vector};
`}function Mv(i){let e=bv(i),t=e("{var}",{join:", "});return`
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
};`}function Sv(i,e){let t=bv(i),n="";return e&&(n=`${t(`
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
  };`}var Ki={},eP={get exports(){return Ki},set exports(i){Ki=i}};const Hf=qa,pr=yv;eP.exports=tP;Ki.generateQuadTreeFunctionBody=Ev;Ki.getInsertStackCode=Lv;Ki.getQuadNodeCode=Pv;Ki.isSamePosition=Tv;Ki.getChildBodyCode=Cv;Ki.setChildBodyCode=Av;function tP(i){let e=Ev(i);return new Function(e)()}function Ev(i){let e=Hf(i),t=Math.pow(2,i);return`
${Lv()}
${Pv(i)}
${Tv(i)}
${Cv(i)}
${Av(i)}

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
${u("      node.")}
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
        if ((node.max_${pr(0)} - node.min_${pr(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
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

`;function r(l){let c=[],f=Array(l+1).join(" ");for(let d=0;d<i;++d)c.push(f+`if (${pr(d)} > max_${pr(d)}) {`),c.push(f+`  quadIdx = quadIdx + ${Math.pow(2,d)};`),c.push(f+`  min_${pr(d)} = max_${pr(d)};`),c.push(f+`  max_${pr(d)} = node.max_${pr(d)};`),c.push(f+"}");return c.join(`
`)}function o(){let l=Array(11).join(" "),c=[];for(let f=0;f<t;++f)c.push(l+`if (node.quad${f}) {`),c.push(l+`  queue[pushIdx] = node.quad${f};`),c.push(l+"  queueLength += 1;"),c.push(l+"  pushIdx += 1;"),c.push(l+"}");return c.join(`
`)}function u(l){let c=[];for(let f=0;f<t;++f)c.push(`${l}quad${f} = null;`);return c.join(`
`)}}function Tv(i){let e=Hf(i);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Av(i){var e=Math.pow(2,i);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let n=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";n.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return n.join(`
`)}}function Cv(i){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],n=Math.pow(2,i);for(let r=0;r<n;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function Pv(i){let e=Hf(i),t=Math.pow(2,i);var n=`
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
`;return n;function r(o){let u=[];for(let l=0;l<t;++l)u.push(`${o}quad${l} = null;`);return u.join(`
`)}}function Lv(){return`
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
`}var El={},nP={get exports(){return El},set exports(i){El=i}};nP.exports=rP;El.generateFunctionBody=Rv;const iP=qa;function rP(i){let e=Rv(i);return new Function("bodies","settings","random",e)}function Rv(i){let e=iP(i);return`
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
`}var Tl={},aP={get exports(){return Tl},set exports(i){Tl=i}};const oP=qa;aP.exports=sP;Tl.generateCreateDragForceFunctionBody=Dv;function sP(i){let e=Dv(i);return new Function("options",e)}function Dv(i){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${oP(i)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Al={},lP={get exports(){return Al},set exports(i){Al=i}};const uP=qa;lP.exports=cP;Al.generateCreateSpringForceFunctionBody=Iv;function cP(i){let e=Iv(i);return new Function("options","random",e)}function Iv(i){let e=uP(i);return`
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
`}var Cl={},fP={get exports(){return Cl},set exports(i){Cl=i}};const hP=qa;fP.exports=dP;Cl.generateIntegratorFunctionBody=Ov;function dP(i){let e=Ov(i);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Ov(i){let e=hP(i);return`
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
`}var Hc,Kg;function pP(){if(Kg)return Hc;Kg=1,Hc=i;function i(e,t,n,r){this.from=e,this.to=t,this.length=n,this.coefficient=r}return Hc}var Vc,Jg;function gP(){if(Jg)return Vc;Jg=1,Vc=i;function i(e,t){var n;if(e||(e={}),t){for(n in t)if(t.hasOwnProperty(n)){var r=e.hasOwnProperty(n),o=typeof t[n],u=!r||typeof e[n]!==o;u?e[n]=t[n]:o==="object"&&(e[n]=i(e[n],t[n]))}}return e}return Vc}var Na={},mP={get exports(){return Na},set exports(i){Na=i}},Qg;function vP(){if(Qg)return Na;Qg=1,mP.exports=i,Na.random=i,Na.randomIterator=l;function i(c){var f=typeof c=="number"?c:+new Date;return new e(f)}function e(c){this.seed=c}e.prototype.next=u,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=t;function t(){var c,f,d;do f=this.nextDouble()*2-1,d=this.nextDouble()*2-1,c=f*f+d*d;while(c>=1||c===0);return f*Math.sqrt(-2*Math.log(c)/c)}e.prototype.levy=n;function n(){var c=1.5,f=Math.pow(r(1+c)*Math.sin(Math.PI*c/2)/(r((1+c)/2)*c*Math.pow(2,(c-1)/2)),1/c);return this.gaussian()*f/Math.pow(Math.abs(this.gaussian()),1/c)}function r(c){return Math.sqrt(2*Math.PI/c)*Math.pow(1/Math.E*(c+1/(12*c-1/(10*c))),c)}function o(){var c=this.seed;return c=c+2127912214+(c<<12)&4294967295,c=(c^3345072700^c>>>19)&4294967295,c=c+374761393+(c<<5)&4294967295,c=(c+3550635116^c<<9)&4294967295,c=c+4251993797+(c<<3)&4294967295,c=(c^3042594569^c>>>16)&4294967295,this.seed=c,(c&268435455)/268435456}function u(c){return Math.floor(this.nextDouble()*c)}function l(c,f){var d=f||i();if(typeof d.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:g,shuffle:p};function p(){var _,y,v;for(_=c.length-1;_>0;--_)y=d.next(_+1),v=c[y],c[y]=c[_],c[_]=v;return c}function g(_){var y,v,m;for(y=c.length-1;y>0;--y)v=d.next(y+1),m=c[v],c[v]=c[y],c[y]=m,_(m);c.length&&_(c[0])}}return Na}var Nv=SP,_P=ja,xP=Ki,yP=El,bP=Tl,wP=Al,MP=Cl,em={};function SP(i){var e=pP(),t=gP(),n=Sf;if(i){if(i.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(i.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}i=t(i,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=em[i.dimensions];if(!r){var o=i.dimensions;r={Body:_P(o,i.debug),createQuadTree:xP(o),createBounds:yP(o),createDragForce:bP(o),createSpringForce:wP(o),integrate:MP(o)},em[o]=r}var u=r.Body,l=r.createQuadTree,c=r.createBounds,f=r.createDragForce,d=r.createSpringForce,p=r.integrate,g=F=>new u(F),_=vP().random(42),y=[],v=[],m=l(i,_),b=c(y,i,_),A=d(i,_),S=f(i),M=0,w=[],P=new Map,I=0;U("nbody",j),U("spring",O);var T={bodies:y,quadTree:m,springs:v,settings:i,addForce:U,removeForce:ee,getForces:Z,step:function(){for(var F=0;F<w.length;++F)w[F](I);var V=p(y,i.timeStep,i.adaptiveTimeStepWeight);return I+=1,V},addBody:function(F){if(!F)throw new Error("Body is required");return y.push(F),F},addBodyAt:function(F){if(!F)throw new Error("Body position is required");var V=g(F);return y.push(V),V},removeBody:function(F){if(F){var V=y.indexOf(F);if(!(V<0))return y.splice(V,1),y.length===0&&b.reset(),!0}},addSpring:function(F,V,ie,ae){if(!F||!V)throw new Error("Cannot add null spring to force simulator");typeof ie!="number"&&(ie=-1);var _e=new e(F,V,ie,ae>=0?ae:-1);return v.push(_e),_e},getTotalMovement:function(){return M},removeSpring:function(F){if(F){var V=v.indexOf(F);if(V>-1)return v.splice(V,1),!0}},getBestNewBodyPosition:function(F){return b.getBestNewPosition(F)},getBBox:D,getBoundingBox:D,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(F){return F!==void 0?(i.gravity=F,m.options({gravity:F}),this):i.gravity},theta:function(F){return F!==void 0?(i.theta=F,m.options({theta:F}),this):i.theta},random:_};return EP(i,T),n(T),T;function D(){return b.update(),b.box}function U(F,V){if(P.has(F))throw new Error("Force "+F+" is already added");P.set(F,V),w.push(V)}function ee(F){var V=w.indexOf(P.get(F));V<0||(w.splice(V,1),P.delete(F))}function Z(){return P}function j(){if(y.length!==0){m.insertBodies(y);for(var F=y.length;F--;){var V=y[F];V.isPinned||(V.reset(),m.updateBodyForce(V),S.update(V))}}}function O(){for(var F=v.length;F--;)A.update(v[F])}}function EP(i,e){for(var t in i)TP(i,e,t)}function TP(i,e,t){if(i.hasOwnProperty(t)&&typeof e[t]!="function"){var n=Number.isFinite(i[t]);n?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return i[t]=r,e}return i[t]}:e[t]=function(r){return r!==void 0?(i[t]=r,e):i[t]}}}Z3.exports=CP;Sl.simulator=Nv;var AP=Sf;function CP(i,e){if(!i)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Nv,n=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=i.version>19?j:Z;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,u={},l=0,c=n.settings.springTransform||PP;S(),m();var f=!1,d={step:function(){if(l===0)return p(!0),!0;var O=n.step();d.lastMove=O,d.fire("step");var F=O/l,V=F<=.01;return p(V),V},getNodePosition:function(O){return ee(O).pos},setNodePosition:function(O){var F=ee(O);F.setPosition.apply(F,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(O){var F=u[O];if(F)return{from:F.from.pos,to:F.to.pos}},getGraphRect:function(){return n.getBBox()},forEachBody:g,pinNode:function(O,F){var V=ee(O.id);V.isPinned=!!F},isNodePinned:function(O){return ee(O.id).isPinned},dispose:function(){i.off("changed",A),d.fire("disposed")},getBody:v,getSpring:y,getForceVectorLength:_,simulator:n,graph:i,lastMove:0};return AP(d),d;function p(O){f!==O&&(f=O,b(O))}function g(O){o.forEach(O)}function _(){var O=0,F=0;return g(function(V){O+=Math.abs(V.force.x),F+=Math.abs(V.force.y)}),Math.sqrt(O*O+F*F)}function y(O,F){var V;if(F===void 0)typeof O!="object"?V=O:V=O.id;else{var ie=i.hasLink(O,F);if(!ie)return;V=ie.id}return u[V]}function v(O){return o.get(O)}function m(){i.on("changed",A)}function b(O){d.fire("stable",O)}function A(O){for(var F=0;F<O.length;++F){var V=O[F];V.changeType==="add"?(V.node&&M(V.node.id),V.link&&P(V.link)):V.changeType==="remove"&&(V.node&&w(V.node),V.link&&I(V.link))}l=i.getNodesCount()}function S(){l=0,i.forEachNode(function(O){M(O.id),l+=1}),i.forEachLink(P)}function M(O){var F=o.get(O);if(!F){var V=i.getNode(O);if(!V)throw new Error("initBody() was called with unknown node id");var ie=V.position;if(!ie){var ae=T(V);ie=n.getBestNewBodyPosition(ae)}F=n.addBodyAt(ie),F.id=O,o.set(O,F),D(O),U(V)&&(F.isPinned=!0)}}function w(O){var F=O.id,V=o.get(F);V&&(o.delete(F),n.removeBody(V))}function P(O){D(O.fromId),D(O.toId);var F=o.get(O.fromId),V=o.get(O.toId),ie=n.addSpring(F,V,O.length);c(O,ie),u[O.id]=ie}function I(O){var F=u[O.id];if(F){var V=i.getNode(O.fromId),ie=i.getNode(O.toId);V&&D(V.id),ie&&D(ie.id),delete u[O.id],n.removeSpring(F)}}function T(O){var F=[];if(!O.links)return F;for(var V=Math.min(O.links.length,2),ie=0;ie<V;++ie){var ae=O.links[ie],_e=ae.fromId!==O.id?o.get(ae.fromId):o.get(ae.toId);_e&&_e.pos&&F.push(_e)}return F}function D(O){var F=o.get(O);if(F.mass=r(O),Number.isNaN(F.mass))throw new Error("Node mass should be a number")}function U(O){return O&&(O.isPinned||O.data&&O.data.isPinned)}function ee(O){var F=o.get(O);return F||(M(O),F=o.get(O)),F}function Z(O){var F=i.getLinks(O);return F?1+F.length/3:1}function j(O){var F=i.getLinks(O);return F?1+F.size/3:1}}function PP(){}function hf(i,e,t){var n,r,o,u,l;e==null&&(e=100);function c(){var d=Date.now()-u;d<e&&d>=0?n=setTimeout(c,e-d):(n=null,t||(l=i.apply(o,r),o=r=null))}var f=function(){o=this,r=arguments,u=Date.now();var d=t&&!n;return n||(n=setTimeout(c,e)),d&&(l=i.apply(o,r),o=r=null),l};return f.clear=function(){n&&(clearTimeout(n),n=null)},f.flush=function(){n&&(l=i.apply(o,r),o=r=null,clearTimeout(n),n=null)},f}hf.debounce=hf;var LP=hf;function RP(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,u,l=[],c=!0,f=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(d){f=!0,r=d}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw r}}return l}}function DP(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function tm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,kP(n.key),n)}}function IP(i,e,t){return e&&tm(i.prototype,e),t&&tm(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function OP(i,e){return NP(i)||RP(i,e)||FP(i,e)||zP()}function NP(i){if(Array.isArray(i))return i}function FP(i,e){if(i){if(typeof i=="string")return nm(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return nm(i,e)}}function nm(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function zP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BP(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function kP(i){var e=BP(i,"string");return typeof e=="symbol"?e:String(e)}var UP=IP(function i(e,t){var n=t.default,r=n===void 0?null:n,o=t.triggerUpdate,u=o===void 0?!0:o,l=t.onChange,c=l===void 0?function(f,d){}:l;DP(this,i),this.name=e,this.defaultVal=r,this.triggerUpdate=u,this.onChange=c});function Vf(i){var e=i.stateInit,t=e===void 0?function(){return{}}:e,n=i.props,r=n===void 0?{}:n,o=i.methods,u=o===void 0?{}:o,l=i.aliases,c=l===void 0?{}:l,f=i.init,d=f===void 0?function(){}:f,p=i.update,g=p===void 0?function(){}:p,_=Object.keys(r).map(function(y){return new UP(y,r[y])});return function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(y):t,{initialised:!1}),m={};function b(M){return A(M,y),S(),b}var A=function(w,P){d.call(b,w,v,P),v.initialised=!0},S=LP(function(){v.initialised&&(g.call(b,v,m),m={})},1);return _.forEach(function(M){b[M.name]=w(M);function w(P){var I=P.name,T=P.triggerUpdate,D=T===void 0?!1:T,U=P.onChange,ee=U===void 0?function(O,F){}:U,Z=P.defaultVal,j=Z===void 0?null:Z;return function(O){var F=v[I];if(!arguments.length)return F;var V=O===void 0?j:O;return v[I]=V,ee.call(b,V,v,F),!m.hasOwnProperty(I)&&(m[I]=F),D&&S(),b}}}),Object.keys(u).forEach(function(M){b[M]=function(){for(var w,P=arguments.length,I=new Array(P),T=0;T<P;T++)I[T]=arguments[T];return(w=u[M]).call.apply(w,[b,v].concat(I))}}),Object.entries(c).forEach(function(M){var w=OP(M,2),P=w[0],I=w[1];return b[P]=b[I]}),b.resetProps=function(){return _.forEach(function(M){b[M.name](M.defaultVal)}),b},b.resetProps(),v._rerender=S,b}}var mt=function(i){return i instanceof Function?i:typeof i=="string"?function(e){return e[i]}:function(e){return i}};class im extends Map{constructor(e,t=VP){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[n,r]of e)this.set(n,r)}get(e){return super.get(rm(this,e))}has(e){return super.has(rm(this,e))}set(e,t){return super.set(GP(this,e),t)}delete(e){return super.delete(HP(this,e))}}function rm({_intern:i,_key:e},t){const n=e(t);return i.has(n)?i.get(n):t}function GP({_intern:i,_key:e},t){const n=e(t);return i.has(n)?i.get(n):(i.set(n,t),t)}function HP({_intern:i,_key:e},t){const n=e(t);return i.has(n)&&(t=i.get(n),i.delete(n)),t}function VP(i){return i!==null&&typeof i=="object"?i.valueOf():i}function WP(i,e){let t;if(e===void 0)for(const n of i)n!=null&&(t<n||t===void 0&&n>=n)&&(t=n);else{let n=-1;for(let r of i)(r=e(r,++n,i))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function jP(i,e){let t;if(e===void 0)for(const n of i)n!=null&&(t>n||t===void 0&&n>=n)&&(t=n);else{let n=-1;for(let r of i)(r=e(r,++n,i))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function $P(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,u,l=[],c=!0,f=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(d){f=!0,r=d}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw r}}return l}}function qP(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function XP(i,e){if(i==null)return{};var t=qP(i,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function YP(i,e){return JP(i)||$P(i,e)||Fv(i,e)||tL()}function ZP(i){return KP(i)||QP(i)||Fv(i)||eL()}function KP(i){if(Array.isArray(i))return df(i)}function JP(i){if(Array.isArray(i))return i}function QP(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Fv(i,e){if(i){if(typeof i=="string")return df(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return df(i,e)}}function df(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function eL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nL(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function iL(i){var e=nL(i,"string");return typeof e=="symbol"?e:String(e)}var am=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(l){return{keyAccessor:l,isProp:!(l instanceof Function)}}),o=i.reduce(function(l,c){var f=l,d=c;return r.forEach(function(p,g){var _=p.keyAccessor,y=p.isProp,v;if(y){var m=d,b=m[_],A=XP(m,[_].map(iL));v=b,d=A}else v=_(d,g);g+1<r.length?(f.hasOwnProperty(v)||(f[v]={}),f=f[v]):t?(f.hasOwnProperty(v)||(f[v]=[]),f[v].push(d)):f[v]=d}),l},{});t instanceof Function&&function l(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;f===r.length?Object.keys(c).forEach(function(d){return c[d]=t(c[d])}):Object.values(c).forEach(function(d){return l(d,f+1)})}(o);var u=o;return n&&(u=[],function l(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];f.length===r.length?u.push({keys:f,vals:c}):Object.entries(c).forEach(function(d){var p=YP(d,2),g=p[0],_=p[1];return l(_,[].concat(ZP(f),[g]))})}(o),e instanceof Array&&e.length===0&&u.length===1&&(u[0].keys=[])),u};function rL(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,u,l=[],c=!0,f=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(d){f=!0,r=d}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw r}}return l}}function om(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function aL(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?om(Object(t),!0).forEach(function(n){zv(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):om(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function zv(i,e,t){return e=pL(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function oL(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function sL(i,e){if(i==null)return{};var t=oL(i,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function Bv(i,e){return uL(i)||rL(i,e)||kv(i,e)||hL()}function Pl(i){return lL(i)||cL(i)||kv(i)||fL()}function lL(i){if(Array.isArray(i))return pf(i)}function uL(i){if(Array.isArray(i))return i}function cL(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function kv(i,e){if(i){if(typeof i=="string")return pf(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pf(i,e)}}function pf(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function fL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dL(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function pL(i){var e=dL(i,"string");return typeof e=="symbol"?e:String(e)}var gL=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function mL(i,e,t){var n={enter:[],update:[],exit:[]};if(t){var u=am(i,t,!1),l=am(e,t,!1),c=Object.assign({},u,l);Object.entries(c).forEach(function(f){var d=Bv(f,2),p=d[0],g=d[1],_=u.hasOwnProperty(p)?l.hasOwnProperty(p)?"update":"exit":"enter";n[_].push(_==="update"?[u[p],l[p]]:g)})}else{var r=new Set(i),o=new Set(e);new Set([].concat(Pl(r),Pl(o))).forEach(function(f){var d=r.has(f)?o.has(f)?"update":"exit":"enter";n[d].push(d==="update"?[f,f]:f)})}return n}function vL(i,e,t){var n=t.objBindAttr,r=n===void 0?"__obj":n,o=t.dataBindAttr,u=o===void 0?"__data":o,l=t.idAccessor,c=t.purge,f=c===void 0?!1:c,d=function(m){return m.hasOwnProperty(u)},p=e.filter(function(v){return!d(v)}),g=e.filter(d).map(function(v){return v[u]}),_=i,y=f?{enter:_,exit:g,update:[]}:mL(g,_,l);return y.update=y.update.map(function(v){var m=Bv(v,2),b=m[0],A=m[1];return b!==A&&(A[r]=b[r],A[r][u]=A),A}),y.exit=y.exit.concat(p.map(function(v){return zv({},r,v)})),y}function _L(i,e,t,n,r){var o=r.createObj,u=o===void 0?function(T){return{}}:o,l=r.updateObj,c=l===void 0?function(T,D){}:l,f=r.exitObj,d=f===void 0?function(T){}:f,p=r.objBindAttr,g=p===void 0?"__obj":p,_=r.dataBindAttr,y=_===void 0?"__data":_,v=sL(r,gL),m=vL(i,e,aL({objBindAttr:g,dataBindAttr:y},v)),b=m.enter,A=m.update,S=m.exit;S.forEach(function(T){var D=T[g];delete T[g],d(D),n(D)});var M=P(b),w=[].concat(Pl(b),Pl(A));I(w),M.forEach(t);function P(T){var D=[];return T.forEach(function(U){var ee=u(U);ee&&(ee[y]=U,U[g]=ee,D.push(ee))}),D}function I(T){T.forEach(function(D){var U=D[g];U&&(U[y]=D,c(U,D))})}}function xL(i,e){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(e).domain(i);break}return this}const sm=Symbol("implicit");function Uv(){var i=new im,e=[],t=[],n=sm;function r(o){let u=i.get(o);if(u===void 0){if(n!==sm)return n;i.set(o,u=e.push(o)-1)}return t[u%t.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],i=new im;for(const u of o)i.has(u)||i.set(u,e.push(u)-1);return r},r.range=function(o){return arguments.length?(t=Array.from(o),r):t.slice()},r.unknown=function(o){return arguments.length?(n=o,r):n},r.copy=function(){return Uv(e,t).unknown(n)},xL.apply(r,arguments),r}function yL(i){for(var e=i.length/6|0,t=new Array(e),n=0;n<e;)t[n]="#"+i.slice(n*6,++n*6);return t}const bL=yL("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function Ll(i){return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ll(i)}var wL=/^\s+/,ML=/\s+$/;function Ue(i,e){if(i=i||"",e=e||{},i instanceof Ue)return i;if(!(this instanceof Ue))return new Ue(i,e);var t=SL(i);this._originalInput=i,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Ue.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,n,r,o,u,l;return t=e.r/255,n=e.g/255,r=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),n<=.03928?u=n/12.92:u=Math.pow((n+.055)/1.055,2.4),r<=.03928?l=r/12.92:l=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*u+.0722*l},setAlpha:function(e){return this._a=Gv(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=um(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=um(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=lm(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=lm(this._r,this._g,this._b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return cm(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return CL(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Nt(this._r,255)*100)+"%",g:Math.round(Nt(this._g,255)*100)+"%",b:Math.round(Nt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Nt(this._r,255)*100)+"%, "+Math.round(Nt(this._g,255)*100)+"%, "+Math.round(Nt(this._b,255)*100)+"%)":"rgba("+Math.round(Nt(this._r,255)*100)+"%, "+Math.round(Nt(this._g,255)*100)+"%, "+Math.round(Nt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:UL[cm(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+fm(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=Ue(e);n="#"+fm(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0,o=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return Ue(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(DL,arguments)},brighten:function(){return this._applyModification(IL,arguments)},darken:function(){return this._applyModification(OL,arguments)},desaturate:function(){return this._applyModification(PL,arguments)},saturate:function(){return this._applyModification(LL,arguments)},greyscale:function(){return this._applyModification(RL,arguments)},spin:function(){return this._applyModification(NL,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(BL,arguments)},complement:function(){return this._applyCombination(FL,arguments)},monochromatic:function(){return this._applyCombination(kL,arguments)},splitcomplement:function(){return this._applyCombination(zL,arguments)},triad:function(){return this._applyCombination(hm,[3])},tetrad:function(){return this._applyCombination(hm,[4])}};Ue.fromRatio=function(i,e){if(Ll(i)=="object"){var t={};for(var n in i)i.hasOwnProperty(n)&&(n==="a"?t[n]=i[n]:t[n]=zo(i[n]));i=t}return Ue(i,e)};function SL(i){var e={r:0,g:0,b:0},t=1,n=null,r=null,o=null,u=!1,l=!1;return typeof i=="string"&&(i=WL(i)),Ll(i)=="object"&&(Wi(i.r)&&Wi(i.g)&&Wi(i.b)?(e=EL(i.r,i.g,i.b),u=!0,l=String(i.r).substr(-1)==="%"?"prgb":"rgb"):Wi(i.h)&&Wi(i.s)&&Wi(i.v)?(n=zo(i.s),r=zo(i.v),e=AL(i.h,n,r),u=!0,l="hsv"):Wi(i.h)&&Wi(i.s)&&Wi(i.l)&&(n=zo(i.s),o=zo(i.l),e=TL(i.h,n,o),u=!0,l="hsl"),i.hasOwnProperty("a")&&(t=i.a)),t=Gv(t),{ok:u,format:i.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function EL(i,e,t){return{r:Nt(i,255)*255,g:Nt(e,255)*255,b:Nt(t,255)*255}}function lm(i,e,t){i=Nt(i,255),e=Nt(e,255),t=Nt(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),o,u,l=(n+r)/2;if(n==r)o=u=0;else{var c=n-r;switch(u=l>.5?c/(2-n-r):c/(n+r),n){case i:o=(e-t)/c+(e<t?6:0);break;case e:o=(t-i)/c+2;break;case t:o=(i-e)/c+4;break}o/=6}return{h:o,s:u,l}}function TL(i,e,t){var n,r,o;i=Nt(i,360),e=Nt(e,100),t=Nt(t,100);function u(f,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?f+(d-f)*6*p:p<1/2?d:p<2/3?f+(d-f)*(2/3-p)*6:f}if(e===0)n=r=o=t;else{var l=t<.5?t*(1+e):t+e-t*e,c=2*t-l;n=u(c,l,i+1/3),r=u(c,l,i),o=u(c,l,i-1/3)}return{r:n*255,g:r*255,b:o*255}}function um(i,e,t){i=Nt(i,255),e=Nt(e,255),t=Nt(t,255);var n=Math.max(i,e,t),r=Math.min(i,e,t),o,u,l=n,c=n-r;if(u=n===0?0:c/n,n==r)o=0;else{switch(n){case i:o=(e-t)/c+(e<t?6:0);break;case e:o=(t-i)/c+2;break;case t:o=(i-e)/c+4;break}o/=6}return{h:o,s:u,v:l}}function AL(i,e,t){i=Nt(i,360)*6,e=Nt(e,100),t=Nt(t,100);var n=Math.floor(i),r=i-n,o=t*(1-e),u=t*(1-r*e),l=t*(1-(1-r)*e),c=n%6,f=[t,u,o,o,l,t][c],d=[l,t,t,u,o,o][c],p=[o,o,l,t,t,u][c];return{r:f*255,g:d*255,b:p*255}}function cm(i,e,t,n){var r=[gi(Math.round(i).toString(16)),gi(Math.round(e).toString(16)),gi(Math.round(t).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function CL(i,e,t,n,r){var o=[gi(Math.round(i).toString(16)),gi(Math.round(e).toString(16)),gi(Math.round(t).toString(16)),gi(Hv(n))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function fm(i,e,t,n){var r=[gi(Hv(n)),gi(Math.round(i).toString(16)),gi(Math.round(e).toString(16)),gi(Math.round(t).toString(16))];return r.join("")}Ue.equals=function(i,e){return!i||!e?!1:Ue(i).toRgbString()==Ue(e).toRgbString()};Ue.random=function(){return Ue.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function PL(i,e){e=e===0?0:e||10;var t=Ue(i).toHsl();return t.s-=e/100,t.s=Gl(t.s),Ue(t)}function LL(i,e){e=e===0?0:e||10;var t=Ue(i).toHsl();return t.s+=e/100,t.s=Gl(t.s),Ue(t)}function RL(i){return Ue(i).desaturate(100)}function DL(i,e){e=e===0?0:e||10;var t=Ue(i).toHsl();return t.l+=e/100,t.l=Gl(t.l),Ue(t)}function IL(i,e){e=e===0?0:e||10;var t=Ue(i).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Ue(t)}function OL(i,e){e=e===0?0:e||10;var t=Ue(i).toHsl();return t.l-=e/100,t.l=Gl(t.l),Ue(t)}function NL(i,e){var t=Ue(i).toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,Ue(t)}function FL(i){var e=Ue(i).toHsl();return e.h=(e.h+180)%360,Ue(e)}function hm(i,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Ue(i).toHsl(),n=[Ue(i)],r=360/e,o=1;o<e;o++)n.push(Ue({h:(t.h+o*r)%360,s:t.s,l:t.l}));return n}function zL(i){var e=Ue(i).toHsl(),t=e.h;return[Ue(i),Ue({h:(t+72)%360,s:e.s,l:e.l}),Ue({h:(t+216)%360,s:e.s,l:e.l})]}function BL(i,e,t){e=e||6,t=t||30;var n=Ue(i).toHsl(),r=360/t,o=[Ue(i)];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,o.push(Ue(n));return o}function kL(i,e){e=e||6;for(var t=Ue(i).toHsv(),n=t.h,r=t.s,o=t.v,u=[],l=1/e;e--;)u.push(Ue({h:n,s:r,v:o})),o=(o+l)%1;return u}Ue.mix=function(i,e,t){t=t===0?0:t||50;var n=Ue(i).toRgb(),r=Ue(e).toRgb(),o=t/100,u={r:(r.r-n.r)*o+n.r,g:(r.g-n.g)*o+n.g,b:(r.b-n.b)*o+n.b,a:(r.a-n.a)*o+n.a};return Ue(u)};Ue.readability=function(i,e){var t=Ue(i),n=Ue(e);return(Math.max(t.getLuminance(),n.getLuminance())+.05)/(Math.min(t.getLuminance(),n.getLuminance())+.05)};Ue.isReadable=function(i,e,t){var n=Ue.readability(i,e),r,o;switch(o=!1,r=jL(t),r.level+r.size){case"AAsmall":case"AAAlarge":o=n>=4.5;break;case"AAlarge":o=n>=3;break;case"AAAsmall":o=n>=7;break}return o};Ue.mostReadable=function(i,e,t){var n=null,r=0,o,u,l,c;t=t||{},u=t.includeFallbackColors,l=t.level,c=t.size;for(var f=0;f<e.length;f++)o=Ue.readability(i,e[f]),o>r&&(r=o,n=Ue(e[f]));return Ue.isReadable(i,n,{level:l,size:c})||!u?n:(t.includeFallbackColors=!1,Ue.mostReadable(i,["#fff","#000"],t))};var gf=Ue.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},UL=Ue.hexNames=GL(gf);function GL(i){var e={};for(var t in i)i.hasOwnProperty(t)&&(e[i[t]]=t);return e}function Gv(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function Nt(i,e){HL(i)&&(i="100%");var t=VL(i);return i=Math.min(e,Math.max(0,parseFloat(i))),t&&(i=parseInt(i*e,10)/100),Math.abs(i-e)<1e-6?1:i%e/parseFloat(e)}function Gl(i){return Math.min(1,Math.max(0,i))}function Hn(i){return parseInt(i,16)}function HL(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1}function VL(i){return typeof i=="string"&&i.indexOf("%")!=-1}function gi(i){return i.length==1?"0"+i:""+i}function zo(i){return i<=1&&(i=i*100+"%"),i}function Hv(i){return Math.round(parseFloat(i)*255).toString(16)}function dm(i){return Hn(i)/255}var ci=function(){var i="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+i+")",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Wi(i){return!!ci.CSS_UNIT.exec(i)}function WL(i){i=i.replace(wL,"").replace(ML,"").toLowerCase();var e=!1;if(gf[i])i=gf[i],e=!0;else if(i=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=ci.rgb.exec(i))?{r:t[1],g:t[2],b:t[3]}:(t=ci.rgba.exec(i))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=ci.hsl.exec(i))?{h:t[1],s:t[2],l:t[3]}:(t=ci.hsla.exec(i))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=ci.hsv.exec(i))?{h:t[1],s:t[2],v:t[3]}:(t=ci.hsva.exec(i))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=ci.hex8.exec(i))?{r:Hn(t[1]),g:Hn(t[2]),b:Hn(t[3]),a:dm(t[4]),format:e?"name":"hex8"}:(t=ci.hex6.exec(i))?{r:Hn(t[1]),g:Hn(t[2]),b:Hn(t[3]),format:e?"name":"hex"}:(t=ci.hex4.exec(i))?{r:Hn(t[1]+""+t[1]),g:Hn(t[2]+""+t[2]),b:Hn(t[3]+""+t[3]),a:dm(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=ci.hex3.exec(i))?{r:Hn(t[1]+""+t[1]),g:Hn(t[2]+""+t[2]),b:Hn(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function jL(i){var e,t;return i=i||{level:"AA",size:"small"},e=(i.level||"AA").toUpperCase(),t=(i.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function $L(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,u,l=[],c=!0,f=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(d){f=!0,r=d}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw r}}return l}}function pm(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Vv(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pm(Object(t),!0).forEach(function(n){Wf(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):pm(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function mf(i){return mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mf(i)}function qL(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function gm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,qv(n.key),n)}}function XL(i,e,t){return e&&gm(i.prototype,e),t&&gm(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function Wf(i,e,t){return e=qv(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function YL(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&Dl(i,e)}function Rl(i){return Rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Rl(i)}function Dl(i,e){return Dl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Dl(i,e)}function Wv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _l(i,e,t){return Wv()?_l=Reflect.construct.bind():_l=function(r,o,u){var l=[null];l.push.apply(l,o);var c=Function.bind.apply(r,l),f=new c;return u&&Dl(f,u.prototype),f},_l.apply(null,arguments)}function ZL(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function KL(i,e){if(i==null)return{};var t=ZL(i,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function jv(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function JL(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jv(i)}function QL(i){var e=Wv();return function(){var n=Rl(i),r;if(e){var o=Rl(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return JL(this,r)}}function mm(i,e){return tR(i)||$L(i,e)||$v(i,e)||rR()}function fi(i){return eR(i)||nR(i)||$v(i)||iR()}function eR(i){if(Array.isArray(i))return vf(i)}function tR(i){if(Array.isArray(i))return i}function nR(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function $v(i,e){if(i){if(typeof i=="string")return vf(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vf(i,e)}}function vf(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function iR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aR(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function qv(i){var e=aR(i,"string");return typeof e=="symbol"?e:String(e)}var oR=function i(e){e instanceof Array?e.forEach(i):(e.map&&e.map.dispose(),e.dispose())},sR=function i(e){e.geometry&&e.geometry.dispose(),e.material&&oR(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(i)},_f=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),sR(t)}},lR=["objFilter"];function Co(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.objFilter,r=n===void 0?function(){return!0}:n,o=KL(t,lR);return _L(i,e.children.filter(r),function(u){return e.add(u)},function(u){e.remove(u),_f(u)},Vv({objBindAttr:"__threeObj"},o))}var Po=function(e){return isNaN(e)?parseInt(Ue(e).toHex(),16):e},Wc=function(e){return isNaN(e)?Ue(e).getAlpha():1},uR=Uv(bL);function vm(i,e,t){!e||typeof t!="string"||i.filter(function(n){return!n[t]}).forEach(function(n){n[t]=uR(e(n))})}function cR(i,e){var t=i.nodes,n=i.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,u=o===void 0?function(){return!0}:o,l=r.onLoopError,c=l===void 0?function(_){throw"Invalid DAG structure! Found cycle in node path: ".concat(_.join(" -> "),".")}:l,f={};t.forEach(function(_){return f[e(_)]={data:_,out:[],depth:-1,skip:!u(_)}}),n.forEach(function(_){var y=_.source,v=_.target,m=M(y),b=M(v);if(!f.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!f.hasOwnProperty(b))throw"Missing target node with id: ".concat(b);var A=f[m],S=f[b];A.out.push(S);function M(w){return mf(w)==="object"?e(w):w}});var d=[];g(Object.values(f));var p=Object.assign.apply(Object,[{}].concat(fi(Object.entries(f).filter(function(_){var y=mm(_,2),v=y[1];return!v.skip}).map(function(_){var y=mm(_,2),v=y[0],m=y[1];return Wf({},v,m.depth)}))));return p;function g(_){for(var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var w=_[b];if(y.indexOf(w)!==-1){var P=[].concat(fi(y.slice(y.indexOf(w))),[w]).map(function(I){return e(I.data)});return d.some(function(I){return I.length===P.length&&I.every(function(T,D){return T===P[D]})})||(d.push(P),c(P)),"continue"}v>w.depth&&(w.depth=v,g(w.out,[].concat(fi(y),[w]),v+(w.skip?0:1)))},b=0,A=_.length;b<A;b++)var S=m()}}var qe=window.THREE?window.THREE:{Group:Oa,Mesh:pi,MeshLambertMaterial:MC,Color:xt,BufferGeometry:Dn,BufferAttribute:ti,Matrix4:Ft,Vector3:H,SphereGeometry:kl,CylinderGeometry:Bl,TubeGeometry:zf,ConeGeometry:Ff,Line:sC,LineBasicMaterial:nv,QuadraticBezierCurve3:Nf,CubicBezierCurve3:rv,Box3:$r},_m={graph:Gf,forcelayout:Sl},fR=2,xm=new qe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",dl=new qe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",hR=Vf({props:{jsonUrl:{onChange:function(e,t){var n=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),n.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var n=t.d3ForceLayout.force("charge");n&&n.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(o,u){o.forEach(function(l){delete l[u],delete l["v".concat(u)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(n){return n.fx=n.fy=n.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,n){return n===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,n),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&n(),r(),o(),this;function n(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var u=mt(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(g){var _=g.__threeObj;if(_){var y=t?g:e.layout.getNodePosition(g[e.nodeId]),v=u(g);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?_.children[0]:_,{x:y.x,y:y.y,z:y.z},g)||v)&&(_.position.x=y.x,_.position.y=y.y||0,_.position.z=y.z||0)}});var l=mt(e.linkWidth),c=mt(e.linkCurvature),f=mt(e.linkCurveRotation),d=mt(e.linkThreeObjectExtend);e.graphData.links.forEach(function(g){var _=g.__lineObj;if(_){var y=t?g:e.layout.getLinkPosition(e.layout.graph.getLink(g.source,g.target).id),v=y[t?"source":"from"],m=y[t?"target":"to"];if(!(!v||!m||!v.hasOwnProperty("x")||!m.hasOwnProperty("x"))){p(g);var b=d(g);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(b?_.children[1]:_,{start:{x:v.x,y:v.y,z:v.z},end:{x:m.x,y:m.y,z:m.z}},g)&&!b)){var A=30,S=g.__curve,M=_.children.length?_.children[0]:_;if(M.type==="Line"){if(S)M.geometry.setFromPoints(S.getPoints(A));else{var w=M.geometry.getAttribute("position");(!w||!w.array||w.array.length!==6)&&M.geometry[xm]("position",w=new qe.BufferAttribute(new Float32Array(2*3),3)),w.array[0]=v.x,w.array[1]=v.y||0,w.array[2]=v.z||0,w.array[3]=m.x,w.array[4]=m.y||0,w.array[5]=m.z||0,w.needsUpdate=!0}M.geometry.computeBoundingSphere()}else if(M.type==="Mesh")if(S){M.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(M.position.set(0,0,0),M.rotation.set(0,0,0),M.scale.set(1,1,1));var Z=Math.ceil(l(g)*10)/10,j=Z/2,O=new qe.TubeGeometry(S,A,j,e.linkResolution,!1);M.geometry.dispose(),M.geometry=O}else{if(!M.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var P=Math.ceil(l(g)*10)/10,I=P/2,T=new qe.CylinderGeometry(I,I,1,e.linkResolution,1,!1);T[dl](new qe.Matrix4().makeTranslation(0,1/2,0)),T[dl](new qe.Matrix4().makeRotationX(Math.PI/2)),M.geometry.dispose(),M.geometry=T}var D=new qe.Vector3(v.x,v.y||0,v.z||0),U=new qe.Vector3(m.x,m.y||0,m.z||0),ee=D.distanceTo(U);M.position.x=D.x,M.position.y=D.y,M.position.z=D.z,M.scale.z=ee,M.parent.localToWorld(U),M.lookAt(U)}}}}});function p(g){var _=t?g:e.layout.getLinkPosition(e.layout.graph.getLink(g.source,g.target).id),y=_[t?"source":"from"],v=_[t?"target":"to"];if(!(!y||!v||!y.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var m=c(g);if(!m)g.__curve=null;else{var b=new qe.Vector3(y.x,y.y||0,y.z||0),A=new qe.Vector3(v.x,v.y||0,v.z||0),S=b.distanceTo(A),M,w=f(g);if(S>0){var P=v.x-y.x,I=v.y-y.y||0,T=new qe.Vector3().subVectors(A,b),D=T.clone().multiplyScalar(m).cross(P!==0||I!==0?new qe.Vector3(0,0,1):new qe.Vector3(0,1,0)).applyAxisAngle(T.normalize(),w).add(new qe.Vector3().addVectors(b,A).divideScalar(2));M=new qe.QuadraticBezierCurve3(b,D,A)}else{var U=m*70,ee=-w,Z=ee+Math.PI/2;M=new qe.CubicBezierCurve3(b,new qe.Vector3(U*Math.cos(Z),U*Math.sin(Z),0).add(b),new qe.Vector3(U*Math.cos(ee),U*Math.sin(ee),0).add(b),A)}g.__curve=M}}}}function r(){var u=mt(e.linkDirectionalArrowRelPos),l=mt(e.linkDirectionalArrowLength),c=mt(e.nodeVal);e.graphData.links.forEach(function(f){var d=f.__arrowObj;if(d){var p=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=p[t?"source":"from"],_=p[t?"target":"to"];if(!(!g||!_||!g.hasOwnProperty("x")||!_.hasOwnProperty("x"))){var y=Math.cbrt(Math.max(0,c(g)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,c(_)||1))*e.nodeRelSize,m=l(f),b=u(f),A=f.__curve?function(T){return f.__curve.getPoint(T)}:function(T){var D=function(ee,Z,j,O){return Z[ee]+(j[ee]-Z[ee])*O||0};return{x:D("x",g,_,T),y:D("y",g,_,T),z:D("z",g,_,T)}},S=f.__curve?f.__curve.getLength():Math.sqrt(["x","y","z"].map(function(T){return Math.pow((_[T]||0)-(g[T]||0),2)}).reduce(function(T,D){return T+D},0)),M=y+m+(S-y-v-m)*b,w=A(M/S),P=A((M-m)/S);["x","y","z"].forEach(function(T){return d.position[T]=P[T]});var I=_l(qe.Vector3,fi(["x","y","z"].map(function(T){return w[T]})));d.parent.localToWorld(I),d.lookAt(I)}}})}function o(){var u=mt(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(l){var c=l.__photonsObj&&l.__photonsObj.children,f=l.__singleHopPhotonsObj&&l.__singleHopPhotonsObj.children;if(!((!f||!f.length)&&(!c||!c.length))){var d=t?l:e.layout.getLinkPosition(e.layout.graph.getLink(l.source,l.target).id),p=d[t?"source":"from"],g=d[t?"target":"to"];if(!(!p||!g||!p.hasOwnProperty("x")||!g.hasOwnProperty("x"))){var _=u(l),y=l.__curve?function(m){return l.__curve.getPoint(m)}:function(m){var b=function(S,M,w,P){return M[S]+(w[S]-M[S])*P||0};return{x:b("x",p,g,m),y:b("y",p,g,m),z:b("z",p,g,m)}},v=[].concat(fi(c||[]),fi(f||[]));v.forEach(function(m,b){var A=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=A?0:b/c.length),m.__progressRatio+=_,m.__progressRatio>=1)if(!A)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),_f(m);return}var S=m.__progressRatio,M=y(S);["x","y","z"].forEach(function(w){return m.position[w]=M[w]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var n=new qe.Group;n.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=n,e.graphScene.add(n)}var r=mt(e.linkDirectionalParticleWidth),o=Math.ceil(r(t)*10)/10/2,u=e.linkDirectionalParticleResolution,l=new qe.SphereGeometry(o,u,u),c=mt(e.linkColor),f=mt(e.linkDirectionalParticleColor),d=f(t)||c(t)||"#f0f0f0",p=new qe.Color(Po(d)),g=e.linkOpacity*3,_=new qe.MeshLambertMaterial({color:p,transparent:!0,opacity:g});t.__singleHopPhotonsObj.add(new qe.Mesh(l,_))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var n=function r(o){var u=[];if(o.geometry){o.geometry.computeBoundingBox();var l=new qe.Box3;l.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),u.push(l)}return u.concat.apply(u,fi((o.children||[]).filter(function(c){return!c.hasOwnProperty("__graphObjType")||c.__graphObjType==="node"&&t(c.__data)}).map(r)))}(e.graphScene);return n.length?Object.assign.apply(Object,fi(["x","y","z"].map(function(r){return Wf({},r,[jP(n,function(o){return o.min[r]}),WP(n,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:W3().force("link",P3()).force("charge",j3()).force("center",IC()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var n=function(Q){return Q.some(function(W){return t.hasOwnProperty(W)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&n(["nodeAutoColorBy","graphData","nodeColor"])&&vm(e.graphData.nodes,mt(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&n(["linkAutoColorBy","graphData","linkColor"])&&vm(e.graphData.links,mt(e.linkAutoColorBy),e.linkColor),e._flushObjects||n(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=mt(e.nodeThreeObject),o=mt(e.nodeThreeObjectExtend),u=mt(e.nodeVal),l=mt(e.nodeColor),c=mt(e.nodeVisibility),f={},d={};Co(e.graphData.nodes.filter(c),e.graphScene,{purge:e._flushObjects||n(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(Q){return Q.__graphObjType==="node"},createObj:function(Q){var W=r(Q),q=o(Q);W&&e.nodeThreeObject===W&&(W=W.clone());var oe;return W&&!q?oe=W:(oe=new qe.Mesh,oe.__graphDefaultObj=!0,W&&q&&oe.add(W)),oe.__graphObjType="node",oe},updateObj:function(Q,W){if(Q.__graphDefaultObj){var q=u(W)||1,oe=Math.cbrt(q)*e.nodeRelSize,ye=e.nodeResolution;(!Q.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||Q.geometry.parameters.radius!==oe||Q.geometry.parameters.widthSegments!==ye)&&(f.hasOwnProperty(q)||(f[q]=new qe.SphereGeometry(oe,ye,ye)),Q.geometry.dispose(),Q.geometry=f[q]);var xe=l(W),Ne=new qe.Color(Po(xe||"#ffffaa")),Ie=e.nodeOpacity*Wc(xe);(Q.material.type!=="MeshLambertMaterial"||!Q.material.color.equals(Ne)||Q.material.opacity!==Ie)&&(d.hasOwnProperty(xe)||(d[xe]=new qe.MeshLambertMaterial({color:Ne,transparent:!0,opacity:Ie})),Q.material.dispose(),Q.material=d[xe])}}})}if(e._flushObjects||n(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var p=mt(e.linkThreeObject),g=mt(e.linkThreeObjectExtend),_=mt(e.linkMaterial),y=mt(e.linkVisibility),v=mt(e.linkColor),m=mt(e.linkWidth),b={},A={},S={},M=e.graphData.links.filter(y);if(Co(M,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||n(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(Q){return Q.__graphObjType==="link"},exitObj:function(Q){var W=Q.__data&&Q.__data.__singleHopPhotonsObj;W&&(W.parent.remove(W),_f(W),delete Q.__data.__singleHopPhotonsObj)},createObj:function(Q){var W=p(Q),q=g(Q);W&&e.linkThreeObject===W&&(W=W.clone());var oe;if(!W||q){var ye=!!m(Q);if(ye)oe=new qe.Mesh;else{var xe=new qe.BufferGeometry;xe[xm]("position",new qe.BufferAttribute(new Float32Array(2*3),3)),oe=new qe.Line(xe)}}var Ne;return W?q?(Ne=new qe.Group,Ne.__graphDefaultObj=!0,Ne.add(oe),Ne.add(W)):Ne=W:(Ne=oe,Ne.__graphDefaultObj=!0),Ne.renderOrder=10,Ne.__graphObjType="link",Ne},updateObj:function(Q,W){if(Q.__graphDefaultObj){var q=Q.children.length?Q.children[0]:Q,oe=Math.ceil(m(W)*10)/10,ye=!!oe;if(ye){var xe=oe/2,Ne=e.linkResolution;if(!q.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||q.geometry.parameters.radiusTop!==xe||q.geometry.parameters.radialSegments!==Ne){if(!b.hasOwnProperty(oe)){var Ie=new qe.CylinderGeometry(xe,xe,1,Ne,1,!1);Ie[dl](new qe.Matrix4().makeTranslation(0,1/2,0)),Ie[dl](new qe.Matrix4().makeRotationX(Math.PI/2)),b[oe]=Ie}q.geometry.dispose(),q.geometry=b[oe]}}var ke=_(W);if(ke)q.material=ke;else{var Ye=v(W),yt=new qe.Color(Po(Ye||"#f0f0f0")),vt=e.linkOpacity*Wc(Ye),ft=ye?"MeshLambertMaterial":"LineBasicMaterial";if(q.material.type!==ft||!q.material.color.equals(yt)||q.material.opacity!==vt){var St=ye?A:S;St.hasOwnProperty(Ye)||(St[Ye]=new qe[ft]({color:yt,transparent:vt<1,opacity:vt,depthWrite:vt>=1})),q.material.dispose(),q.material=St[Ye]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var w=mt(e.linkDirectionalArrowLength),P=mt(e.linkDirectionalArrowColor);Co(M.filter(w),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(Q){return Q.__linkThreeObjType==="arrow"},createObj:function(){var Q=new qe.Mesh(void 0,new qe.MeshLambertMaterial({transparent:!0}));return Q.__linkThreeObjType="arrow",Q},updateObj:function(Q,W){var q=w(W),oe=e.linkDirectionalArrowResolution;if(!Q.geometry.type.match(/^Cone(Buffer)?Geometry$/)||Q.geometry.parameters.height!==q||Q.geometry.parameters.radialSegments!==oe){var ye=new qe.ConeGeometry(q*.25,q,oe);ye.translate(0,q/2,0),ye.rotateX(Math.PI/2),Q.geometry.dispose(),Q.geometry=ye}var xe=P(W)||v(W)||"#f0f0f0";Q.material.color=new qe.Color(Po(xe)),Q.material.opacity=e.linkOpacity*3*Wc(xe)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var I=mt(e.linkDirectionalParticles),T=mt(e.linkDirectionalParticleWidth),D=mt(e.linkDirectionalParticleColor),U={},ee={};Co(M.filter(I),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(Q){return Q.__linkThreeObjType==="photons"},createObj:function(){var Q=new qe.Group;return Q.__linkThreeObjType="photons",Q},updateObj:function(Q,W){var q=Math.round(Math.abs(I(W))),oe=!!Q.children.length&&Q.children[0],ye=Math.ceil(T(W)*10)/10/2,xe=e.linkDirectionalParticleResolution,Ne;oe&&oe.geometry.parameters.radius===ye&&oe.geometry.parameters.widthSegments===xe?Ne=oe.geometry:(ee.hasOwnProperty(ye)||(ee[ye]=new qe.SphereGeometry(ye,xe,xe)),Ne=ee[ye],oe&&oe.geometry.dispose());var Ie=D(W)||v(W)||"#f0f0f0",ke=new qe.Color(Po(Ie)),Ye=e.linkOpacity*3,yt;oe&&oe.material.color.equals(ke)&&oe.material.opacity===Ye?yt=oe.material:(U.hasOwnProperty(Ie)||(U[Ie]=new qe.MeshLambertMaterial({color:ke,transparent:!0,opacity:Ye})),yt=U[Ie],oe&&oe.material.dispose()),Co(fi(new Array(q)).map(function(vt,ft){return{idx:ft}}),Q,{idAccessor:function(ft){return ft.idx},createObj:function(){return new qe.Mesh(Ne,yt)},updateObj:function(ft){ft.geometry=Ne,ft.material=yt}})}})}}if(e._flushObjects=!1,n(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(le){le.source=le[e.linkSource],le.target=le[e.linkTarget]});var Z=e.forceEngine!=="ngraph",j;if(Z){(j=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var O=e.d3ForceLayout.force("link");O&&O.id(function(le){return le[e.nodeId]}).links(e.graphData.links);var F=e.dagMode&&cR(e.graphData,function(le){return le[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),V=Math.max.apply(Math,fi(Object.values(F||[]))),ie=e.dagLevelDistance||e.graphData.nodes.length/(V||1)*fR*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var ae=function(Q,W){return function(q){return Q?(F[q[e.nodeId]]-V/2)*ie*(W?-1:1):void 0}},_e=ae(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),J=ae(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),pe=ae(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(le){le.fx=_e(le),le.fy=J(le),le.fz=pe(le)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?$3(function(le){var Q=F[le[e.nodeId]]||-1;return(e.dagMode==="radialin"?V-Q:Q)*ie}).strength(function(le){return e.dagNodeFilter(le)?1:0}):null)}else{var $=_m.graph();e.graphData.nodes.forEach(function(le){$.addNode(le[e.nodeId])}),e.graphData.links.forEach(function(le){$.addLink(le.source,le.target)}),j=_m.forcelayout($,Vv({dimensions:e.numDimensions},e.ngraphPhysics)),j.graph=$}for(var fe=0;fe<e.warmupTicks&&!(Z&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);fe++)j[Z?"tick":"step"]();e.layout=j,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function dR(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=function(r){YL(u,r);var o=QL(u);function u(){var l;qL(this,u);for(var c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];return l=o.call.apply(o,[this].concat(f)),l.__kapsuleInstance=i().apply(void 0,[].concat(fi(t?[jv(l)]:[]),f)),l}return XL(u)}(e);return Object.keys(i()).forEach(function(r){return n.prototype[r]=function(){var o,u=(o=this.__kapsuleInstance)[r].apply(o,arguments);return u===this.__kapsuleInstance?this:u}}),n}var pR=window.THREE?window.THREE:{Group:Oa},Xv=dR(hR,pR.Group,!0);const jc={type:"change"},$c={type:"start"},qc={type:"end"};class gR extends vi{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.target=new H;const o=1e-6,u=new H;let l=1,c=r.NONE,f=r.NONE,d=0,p=0,g=0;const _=new H,y=new Ee,v=new Ee,m=new H,b=new Ee,A=new Ee,S=new Ee,M=new Ee,w=[],P={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const q=n.domElement.getBoundingClientRect(),oe=n.domElement.ownerDocument.documentElement;n.screen.left=q.left+window.pageXOffset-oe.clientLeft,n.screen.top=q.top+window.pageYOffset-oe.clientTop,n.screen.width=q.width,n.screen.height=q.height};const I=function(){const q=new Ee;return function(ye,xe){return q.set((ye-n.screen.left)/n.screen.width,(xe-n.screen.top)/n.screen.height),q}}(),T=function(){const q=new Ee;return function(ye,xe){return q.set((ye-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-xe))/n.screen.width),q}}();this.rotateCamera=function(){const q=new H,oe=new mi,ye=new H,xe=new H,Ne=new H,Ie=new H;return function(){Ie.set(v.x-y.x,v.y-y.y,0);let Ye=Ie.length();Ye?(_.copy(n.object.position).sub(n.target),ye.copy(_).normalize(),xe.copy(n.object.up).normalize(),Ne.crossVectors(xe,ye).normalize(),xe.setLength(v.y-y.y),Ne.setLength(v.x-y.x),Ie.copy(xe.add(Ne)),q.crossVectors(Ie,_).normalize(),Ye*=n.rotateSpeed,oe.setFromAxisAngle(q,Ye),_.applyQuaternion(oe),n.object.up.applyQuaternion(oe),m.copy(q),g=Ye):!n.staticMoving&&g&&(g*=Math.sqrt(1-n.dynamicDampingFactor),_.copy(n.object.position).sub(n.target),oe.setFromAxisAngle(m,g),_.applyQuaternion(oe),n.object.up.applyQuaternion(oe)),y.copy(v)}}(),this.zoomCamera=function(){let q;c===r.TOUCH_ZOOM_PAN?(q=d/p,d=p,n.object.isPerspectiveCamera?_.multiplyScalar(q):n.object.isOrthographicCamera?(n.object.zoom/=q,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(q=1+(A.y-b.y)*n.zoomSpeed,q!==1&&q>0&&(n.object.isPerspectiveCamera?_.multiplyScalar(q):n.object.isOrthographicCamera?(n.object.zoom/=q,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?b.copy(A):b.y+=(A.y-b.y)*this.dynamicDampingFactor)},this.panCamera=function(){const q=new Ee,oe=new H,ye=new H;return function(){if(q.copy(M).sub(S),q.lengthSq()){if(n.object.isOrthographicCamera){const Ne=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Ie=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;q.x*=Ne,q.y*=Ie}q.multiplyScalar(_.length()*n.panSpeed),ye.copy(_).cross(n.object.up).setLength(q.x),ye.add(oe.copy(n.object.up).setLength(q.y)),n.object.position.add(ye),n.target.add(ye),n.staticMoving?S.copy(M):S.add(q.subVectors(M,S).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(_.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,_.setLength(n.maxDistance)),b.copy(A)),_.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,_.setLength(n.minDistance)),b.copy(A)))},this.update=function(){_.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,_),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),u.distanceToSquared(n.object.position)>o&&(n.dispatchEvent(jc),u.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(u.distanceToSquared(n.object.position)>o||l!==n.object.zoom)&&(n.dispatchEvent(jc),u.copy(n.object.position),l=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,f=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),_.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(jc),u.copy(n.object.position),l=n.object.zoom};function D(q){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(q.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",ee)),fe(q),q.pointerType==="touch"?_e(q):F(q))}function U(q){n.enabled!==!1&&(q.pointerType==="touch"?J(q):V(q))}function ee(q){n.enabled!==!1&&(q.pointerType==="touch"?pe(q):ie(),le(q),w.length===0&&(n.domElement.releasePointerCapture(q.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",ee)))}function Z(q){le(q)}function j(q){n.enabled!==!1&&(window.removeEventListener("keydown",j),f===r.NONE&&(q.code===n.keys[r.ROTATE]&&!n.noRotate?f=r.ROTATE:q.code===n.keys[r.ZOOM]&&!n.noZoom?f=r.ZOOM:q.code===n.keys[r.PAN]&&!n.noPan&&(f=r.PAN)))}function O(){n.enabled!==!1&&(f=r.NONE,window.addEventListener("keydown",j))}function F(q){if(c===r.NONE)switch(q.button){case n.mouseButtons.LEFT:c=r.ROTATE;break;case n.mouseButtons.MIDDLE:c=r.ZOOM;break;case n.mouseButtons.RIGHT:c=r.PAN;break}const oe=f!==r.NONE?f:c;oe===r.ROTATE&&!n.noRotate?(v.copy(T(q.pageX,q.pageY)),y.copy(v)):oe===r.ZOOM&&!n.noZoom?(b.copy(I(q.pageX,q.pageY)),A.copy(b)):oe===r.PAN&&!n.noPan&&(S.copy(I(q.pageX,q.pageY)),M.copy(S)),n.dispatchEvent($c)}function V(q){const oe=f!==r.NONE?f:c;oe===r.ROTATE&&!n.noRotate?(y.copy(v),v.copy(T(q.pageX,q.pageY))):oe===r.ZOOM&&!n.noZoom?A.copy(I(q.pageX,q.pageY)):oe===r.PAN&&!n.noPan&&M.copy(I(q.pageX,q.pageY))}function ie(){c=r.NONE,n.dispatchEvent(qc)}function ae(q){if(n.enabled!==!1&&n.noZoom!==!0){switch(q.preventDefault(),q.deltaMode){case 2:b.y-=q.deltaY*.025;break;case 1:b.y-=q.deltaY*.01;break;default:b.y-=q.deltaY*25e-5;break}n.dispatchEvent($c),n.dispatchEvent(qc)}}function _e(q){switch(Q(q),w.length){case 1:c=r.TOUCH_ROTATE,v.copy(T(w[0].pageX,w[0].pageY)),y.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const oe=w[0].pageX-w[1].pageX,ye=w[0].pageY-w[1].pageY;p=d=Math.sqrt(oe*oe+ye*ye);const xe=(w[0].pageX+w[1].pageX)/2,Ne=(w[0].pageY+w[1].pageY)/2;S.copy(I(xe,Ne)),M.copy(S);break}n.dispatchEvent($c)}function J(q){switch(Q(q),w.length){case 1:y.copy(v),v.copy(T(q.pageX,q.pageY));break;default:const oe=W(q),ye=q.pageX-oe.x,xe=q.pageY-oe.y;p=Math.sqrt(ye*ye+xe*xe);const Ne=(q.pageX+oe.x)/2,Ie=(q.pageY+oe.y)/2;M.copy(I(Ne,Ie));break}}function pe(q){switch(w.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(T(q.pageX,q.pageY)),y.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let oe=0;oe<w.length;oe++)if(w[oe].pointerId!==q.pointerId){const ye=P[w[oe].pointerId];v.copy(T(ye.x,ye.y)),y.copy(v);break}break}n.dispatchEvent(qc)}function $(q){n.enabled!==!1&&q.preventDefault()}function fe(q){w.push(q)}function le(q){delete P[q.pointerId];for(let oe=0;oe<w.length;oe++)if(w[oe].pointerId==q.pointerId){w.splice(oe,1);return}}function Q(q){let oe=P[q.pointerId];oe===void 0&&(oe=new Ee,P[q.pointerId]=oe),oe.set(q.pageX,q.pageY)}function W(q){const oe=q.pointerId===w[0].pointerId?w[1]:w[0];return P[oe.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",ee),window.removeEventListener("keydown",j),window.removeEventListener("keyup",O)},this.domElement.addEventListener("contextmenu",$),this.domElement.addEventListener("pointerdown",D),this.domElement.addEventListener("pointercancel",Z),this.domElement.addEventListener("wheel",ae,{passive:!1}),window.addEventListener("keydown",j),window.addEventListener("keyup",O),this.handleResize(),this.update()}}const ym={type:"change"},Xc={type:"start"},bm={type:"end"};class mR extends vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:fa.ROTATE,TWO:fa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",At),this._domElementKeyEvents=k},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ym),n.update(),o=r.NONE},this.update=function(){const k=new H,te=new mi().setFromUnitVectors(e.up,new H(0,1,0)),Le=te.clone().invert(),Re=new H,Pe=new mi,ze=2*Math.PI;return function(){const tt=n.object.position;k.copy(tt).sub(n.target),k.applyQuaternion(te),l.setFromVector3(k),n.autoRotate&&o===r.NONE&&D(I()),n.enableDamping?(l.theta+=c.theta*n.dampingFactor,l.phi+=c.phi*n.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let at=n.minAzimuthAngle,bt=n.maxAzimuthAngle;return isFinite(at)&&isFinite(bt)&&(at<-Math.PI?at+=ze:at>Math.PI&&(at-=ze),bt<-Math.PI?bt+=ze:bt>Math.PI&&(bt-=ze),at<=bt?l.theta=Math.max(at,Math.min(bt,l.theta)):l.theta=l.theta>(at+bt)/2?Math.max(at,l.theta):Math.min(bt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=f,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),k.setFromSpherical(l),k.applyQuaternion(Le),tt.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),f=1,p||Re.distanceToSquared(n.object.position)>u||8*(1-Pe.dot(n.object.quaternion))>u?(n.dispatchEvent(ym),Re.copy(n.object.position),Pe.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ue),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",ft),n.domElement.removeEventListener("wheel",Jt),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",vt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",At)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const u=1e-6,l=new uf,c=new uf;let f=1;const d=new H;let p=!1;const g=new Ee,_=new Ee,y=new Ee,v=new Ee,m=new Ee,b=new Ee,A=new Ee,S=new Ee,M=new Ee,w=[],P={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function D(k){c.theta-=k}function U(k){c.phi-=k}const ee=function(){const k=new H;return function(Le,Re){k.setFromMatrixColumn(Re,0),k.multiplyScalar(-Le),d.add(k)}}(),Z=function(){const k=new H;return function(Le,Re){n.screenSpacePanning===!0?k.setFromMatrixColumn(Re,1):(k.setFromMatrixColumn(Re,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(Le),d.add(k)}}(),j=function(){const k=new H;return function(Le,Re){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;k.copy(ze).sub(n.target);let Fe=k.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*Le*Fe/Pe.clientHeight,n.object.matrix),Z(2*Re*Fe/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(Le*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),Z(Re*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(k){n.object.isPerspectiveCamera?f/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(k){n.object.isPerspectiveCamera?f*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(k){g.set(k.clientX,k.clientY)}function ie(k){A.set(k.clientX,k.clientY)}function ae(k){v.set(k.clientX,k.clientY)}function _e(k){_.set(k.clientX,k.clientY),y.subVectors(_,g).multiplyScalar(n.rotateSpeed);const te=n.domElement;D(2*Math.PI*y.x/te.clientHeight),U(2*Math.PI*y.y/te.clientHeight),g.copy(_),n.update()}function J(k){S.set(k.clientX,k.clientY),M.subVectors(S,A),M.y>0?O(T()):M.y<0&&F(T()),A.copy(S),n.update()}function pe(k){m.set(k.clientX,k.clientY),b.subVectors(m,v).multiplyScalar(n.panSpeed),j(b.x,b.y),v.copy(m),n.update()}function $(k){k.deltaY<0?F(T()):k.deltaY>0&&O(T()),n.update()}function fe(k){let te=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(-n.keyPanSpeed,0),te=!0;break}te&&(k.preventDefault(),n.update())}function le(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),te=.5*(w[0].pageY+w[1].pageY);g.set(k,te)}}function Q(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),te=.5*(w[0].pageY+w[1].pageY);v.set(k,te)}}function W(){const k=w[0].pageX-w[1].pageX,te=w[0].pageY-w[1].pageY,Le=Math.sqrt(k*k+te*te);A.set(0,Le)}function q(){n.enableZoom&&W(),n.enablePan&&Q()}function oe(){n.enableZoom&&W(),n.enableRotate&&le()}function ye(k){if(w.length==1)_.set(k.pageX,k.pageY);else{const Le=He(k),Re=.5*(k.pageX+Le.x),Pe=.5*(k.pageY+Le.y);_.set(Re,Pe)}y.subVectors(_,g).multiplyScalar(n.rotateSpeed);const te=n.domElement;D(2*Math.PI*y.x/te.clientHeight),U(2*Math.PI*y.y/te.clientHeight),g.copy(_)}function xe(k){if(w.length===1)m.set(k.pageX,k.pageY);else{const te=He(k),Le=.5*(k.pageX+te.x),Re=.5*(k.pageY+te.y);m.set(Le,Re)}b.subVectors(m,v).multiplyScalar(n.panSpeed),j(b.x,b.y),v.copy(m)}function Ne(k){const te=He(k),Le=k.pageX-te.x,Re=k.pageY-te.y,Pe=Math.sqrt(Le*Le+Re*Re);S.set(0,Pe),M.set(0,Math.pow(S.y/A.y,n.zoomSpeed)),O(M.y),A.copy(S)}function Ie(k){n.enableZoom&&Ne(k),n.enablePan&&xe(k)}function ke(k){n.enableZoom&&Ne(k),n.enableRotate&&ye(k)}function Ye(k){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",yt),n.domElement.addEventListener("pointerup",vt)),we(k),k.pointerType==="touch"?z(k):St(k))}function yt(k){n.enabled!==!1&&(k.pointerType==="touch"?R(k):pt(k))}function vt(k){Se(k),w.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",vt)),n.dispatchEvent(bm),o=r.NONE}function ft(k){Se(k)}function St(k){let te;switch(k.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Si.DOLLY:if(n.enableZoom===!1)return;ie(k),o=r.DOLLY;break;case Si.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;ae(k),o=r.PAN}else{if(n.enableRotate===!1)return;V(k),o=r.ROTATE}break;case Si.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;V(k),o=r.ROTATE}else{if(n.enablePan===!1)return;ae(k),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Xc)}function pt(k){switch(o){case r.ROTATE:if(n.enableRotate===!1)return;_e(k);break;case r.DOLLY:if(n.enableZoom===!1)return;J(k);break;case r.PAN:if(n.enablePan===!1)return;pe(k);break}}function Jt(k){n.enabled===!1||n.enableZoom===!1||o!==r.NONE||(k.preventDefault(),n.dispatchEvent(Xc),$(k),n.dispatchEvent(bm))}function At(k){n.enabled===!1||n.enablePan===!1||fe(k)}function z(k){switch(Ae(k),w.length){case 1:switch(n.touches.ONE){case fa.ROTATE:if(n.enableRotate===!1)return;le(),o=r.TOUCH_ROTATE;break;case fa.PAN:if(n.enablePan===!1)return;Q(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case fa.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(),o=r.TOUCH_DOLLY_PAN;break;case fa.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Xc)}function R(k){switch(Ae(k),o){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(k),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(k),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(k),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(k),n.update();break;default:o=r.NONE}}function ue(k){n.enabled!==!1&&k.preventDefault()}function we(k){w.push(k)}function Se(k){delete P[k.pointerId];for(let te=0;te<w.length;te++)if(w[te].pointerId==k.pointerId){w.splice(te,1);return}}function Ae(k){let te=P[k.pointerId];te===void 0&&(te=new Ee,P[k.pointerId]=te),te.set(k.pageX,k.pageY)}function He(k){const te=k.pointerId===w[0].pointerId?w[1]:w[0];return P[te.pointerId]}n.domElement.addEventListener("contextmenu",ue),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",ft),n.domElement.addEventListener("wheel",Jt,{passive:!1}),this.update()}}const vR={type:"change"};class _R extends vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const n=this,r=1e-6,o=new mi,u=new H;this.tmpQuaternion=new mi,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new H(0,0,0),this.rotationVector=new H(0,0,0),this.keydown=function(g){if(!g.altKey){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(g){if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(!this.dragToLook||this.status>0){const _=this.getContainerDimensions(),y=_.size[0]/2,v=_.size[1]/2;this.moveState.yawLeft=-(g.pageX-_.offset[0]-y)/y,this.moveState.pitchDown=(g.pageY-_.offset[1]-v)/v,this.updateRotationVector()}},this.pointerup=function(g){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(g){const _=g*n.movementSpeed,y=g*n.rollSpeed;n.object.translateX(n.moveVector.x*_),n.object.translateY(n.moveVector.y*_),n.object.translateZ(n.moveVector.z*_),n.tmpQuaternion.set(n.rotationVector.x*y,n.rotationVector.y*y,n.rotationVector.z*y,1).normalize(),n.object.quaternion.multiply(n.tmpQuaternion),(u.distanceToSquared(n.object.position)>r||8*(1-o.dot(n.object.quaternion))>r)&&(n.dispatchEvent(vR),o.copy(n.object.quaternion),u.copy(n.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",wm),this.domElement.removeEventListener("pointerdown",c),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",f),window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)};const l=this.pointermove.bind(this),c=this.pointerdown.bind(this),f=this.pointerup.bind(this),d=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",wm),this.domElement.addEventListener("pointerdown",c),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",f),window.addEventListener("keydown",d),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}function wm(i){i.preventDefault()}const xR={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hl{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yR=new Df(-1,1,1,-1,0,1),jf=new Dn;jf.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3));jf.setAttribute("uv",new Yt([0,2,0,0,2,0],2));class bR{constructor(e){this._mesh=new pi(jf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wR extends Hl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$m.clone(e.uniforms),this.material=new Zi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bR(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Mm extends Hl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,l;this.inverse?(u=0,l=1):(u=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,u,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class MR extends Hl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class SR{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ee);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new br(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wR(xR),this.clock=new sv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,o=this.passes.length;r<o;r++){const u=this.passes[r];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),u.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Mm!==void 0&&(u instanceof Mm?n=!0:u instanceof MR&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ER extends Hl{constructor(e,t,n,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let o,u;this.overrideMaterial!==void 0&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=u),e.autoClear=r}}function xf(){return xf=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},xf.apply(this,arguments)}function TR(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Yo(i,e){return Yo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Yo(i,e)}function AR(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,Yo(i,e)}function yf(i){return yf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yf(i)}function CR(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function PR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xl(i,e,t){return PR()?xl=Reflect.construct.bind():xl=function(r,o,u){var l=[null];l.push.apply(l,o);var c=Function.bind.apply(r,l),f=new c;return u&&Yo(f,u.prototype),f},xl.apply(null,arguments)}function bf(i){var e=typeof Map=="function"?new Map:void 0;return bf=function(n){if(n===null||!CR(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return xl(n,arguments,yf(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Yo(r,n)},bf(i)}var Fa=function(i){AR(e,i);function e(t){var n;return n=i.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,TR(n)}return e}(bf(Error));function Yc(i){return Math.round(i*255)}function LR(i,e,t){return Yc(i)+","+Yc(e)+","+Yc(t)}function Sm(i,e,t,n){if(n===void 0&&(n=LR),e===0)return n(t,t,t);var r=(i%360+360)%360/60,o=(1-Math.abs(2*t-1))*e,u=o*(1-Math.abs(r%2-1)),l=0,c=0,f=0;r>=0&&r<1?(l=o,c=u):r>=1&&r<2?(l=u,c=o):r>=2&&r<3?(c=o,f=u):r>=3&&r<4?(c=u,f=o):r>=4&&r<5?(l=u,f=o):r>=5&&r<6&&(l=o,f=u);var d=t-o/2,p=l+d,g=c+d,_=f+d;return n(p,g,_)}var Em={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function RR(i){if(typeof i!="string")return i;var e=i.toLowerCase();return Em[e]?"#"+Em[e]:i}var DR=/^#[a-fA-F0-9]{6}$/,IR=/^#[a-fA-F0-9]{8}$/,OR=/^#[a-fA-F0-9]{3}$/,NR=/^#[a-fA-F0-9]{4}$/,Zc=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,FR=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,zR=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,BR=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function $f(i){if(typeof i!="string")throw new Fa(3);var e=RR(i);if(e.match(DR))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(IR)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(OR))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(NR)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var r=Zc.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=FR.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var u=zR.exec(e);if(u){var l=parseInt(""+u[1],10),c=parseInt(""+u[2],10)/100,f=parseInt(""+u[3],10)/100,d="rgb("+Sm(l,c,f)+")",p=Zc.exec(d);if(!p)throw new Fa(4,e,d);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10)}}var g=BR.exec(e.substring(0,50));if(g){var _=parseInt(""+g[1],10),y=parseInt(""+g[2],10)/100,v=parseInt(""+g[3],10)/100,m="rgb("+Sm(_,y,v)+")",b=Zc.exec(m);if(!b)throw new Fa(4,e,m);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new Fa(5)}var kR=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},Tm=kR;function Ra(i){var e=i.toString(16);return e.length===1?"0"+e:e}function Am(i,e,t){if(typeof i=="number"&&typeof e=="number"&&typeof t=="number")return Tm("#"+Ra(i)+Ra(e)+Ra(t));if(typeof i=="object"&&e===void 0&&t===void 0)return Tm("#"+Ra(i.red)+Ra(i.green)+Ra(i.blue));throw new Fa(6)}function UR(i,e,t,n){if(typeof i=="string"&&typeof e=="number"){var r=$f(i);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof i=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?Am(i,e,t):"rgba("+i+","+e+","+t+","+n+")";if(typeof i=="object"&&e===void 0&&t===void 0&&n===void 0)return i.alpha>=1?Am(i.red,i.green,i.blue):"rgba("+i.red+","+i.green+","+i.blue+","+i.alpha+")"}throw new Fa(7)}function Yv(i,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?i.apply(this,r):Yv(i,e,r)}}function GR(i){return Yv(i,i.length,[])}function HR(i,e,t){return Math.max(i,Math.min(e,t))}function VR(i,e){if(e==="transparent")return e;var t=$f(e),n=typeof t.alpha=="number"?t.alpha:1,r=xf({},t,{alpha:HR(0,1,(n*100+parseFloat(i)*100)/100)});return UR(r)}var WR=GR(VR),jR=WR,Ho={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-Ho.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Ho.Bounce.In(i*2)*.5:Ho.Bounce.Out(i*2-1)*.5+.5}}},Bo;typeof self>"u"&&typeof process<"u"&&process.hrtime?Bo=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Bo=self.performance.now.bind(self.performance):Date.now!==void 0?Bo=Date.now:Bo=function(){return new Date().getTime()};var Br=Bo,Zv=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=Br()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var o=this._tweens[n[r]],u=!t;o&&o.update(e,u)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),za={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),o=za.Utils.Linear;return e<0?o(i[0],i[1],n):e>1?o(i[t],i[t-1],t-n):o(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,o=za.Utils.Bernstein,u=0;u<=n;u++)t+=r(1-e,n-u)*r(e,u)*i[u]*o(n,u);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),o=za.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),o(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(o(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(o(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):o(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=za.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var o=(t-i)*.5,u=(n-e)*.5,l=r*r,c=r*l;return(2*e-2*t+o+u)*c+(-3*e+3*t-2*o-u)*l+o*r+e}}},qf=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Kv=new Zv,$R=function(){function i(e,t){t===void 0&&(t=Kv),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ho.Linear.None,this._interpolationFunction=za.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=qf.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Br()+parseFloat(e):e:Br(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,r){for(var o in n){var u=e[o],l=Array.isArray(u),c=l?"array":typeof u,f=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(f){var d=n[o];if(d.length===0)continue;d=d.map(this._handleRelativeValue.bind(this,u)),n[o]=[u].concat(d)}if((c==="object"||l)&&u&&!f){t[o]=l?[]:{};for(var p in u)t[o][p]=u[p];r[o]=l?[]:{},this._setupProperties(u,t[o],n[o],r[o])}else typeof t[o]>"u"&&(t[o]=u),l||(t[o]*=1),f?r[o]=n[o].slice().reverse():r[o]=t[o]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=Br()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=Br()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=Br()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var u=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,u),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var l=0,c=this._chainedTweens.length;l<c;l++)this._chainedTweens[l].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var o in n)if(t[o]!==void 0){var u=t[o]||0,l=n[o],c=Array.isArray(e[o]),f=Array.isArray(l),d=!c&&f;d?e[o]=this._interpolationFunction(l,r):typeof l=="object"&&l?this._updateProperties(e[o],u,l,r):(l=this._handleRelativeValue(u,l),typeof l=="number"&&(e[o]=u+(l-u)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),qR="18.6.4",XR=qf.nextId,Ai=Kv,YR=Ai.getAll.bind(Ai),ZR=Ai.removeAll.bind(Ai),KR=Ai.add.bind(Ai),JR=Ai.remove.bind(Ai),QR=Ai.update.bind(Ai),Lo={Easing:Ho,Group:Zv,Interpolation:za,now:Br,Sequence:qf,nextId:XR,Tween:$R,VERSION:qR,getAll:YR,removeAll:ZR,add:KR,remove:JR,update:QR};function eD(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var tD=`.scene-nav-info {
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
}`;eD(tD);function nD(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,o,u,l=[],c=!0,f=!1;try{if(o=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=o.call(t)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(d){f=!0,r=d}finally{try{if(!c&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw r}}return l}}function iD(i,e,t){return e=fD(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function rD(i,e){return oD(i)||nD(i,e)||Jv(i,e)||uD()}function Ro(i){return aD(i)||sD(i)||Jv(i)||lD()}function aD(i){if(Array.isArray(i))return wf(i)}function oD(i){if(Array.isArray(i))return i}function sD(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Jv(i,e){if(i){if(typeof i=="string")return wf(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wf(i,e)}}function wf(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function lD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cD(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function fD(i){var e=cD(i,"string");return typeof e=="symbol"?e:String(e)}var Bt=window.THREE?window.THREE:{WebGLRenderer:ev,Scene:rC,PerspectiveCamera:ei,Raycaster:lv,TextureLoader:AC,Vector2:Ee,Vector3:H,Box3:$r,Color:xt,Mesh:pi,SphereGeometry:kl,MeshBasicMaterial:Pf,BackSide:Ln,EventDispatcher:vi,MOUSE:Si,Quaternion:mi,Spherical:uf,Clock:sv},Qv=Vf({props:{width:{default:window.innerWidth,onChange:function(e,t,n){isNaN(e)&&(t.width=n)}},height:{default:window.innerHeight,onChange:function(e,t,n){isNaN(e)&&(t.height=n)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var n=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,u){return e.hoverOrderComparator(o.object,u.object)}),r=n.length?n[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&mt(e.tooltipContent)(t)||"",e.hoverObj=t)}Lo.update()}return this},getPointerPos:function(e){var t=e.pointerPos,n=t.x,r=t.y;return{x:n,y:r}},cameraPosition:function(e,t,n,r){var o=e.camera;if(t&&e.initialised){var u=t,l=n||{x:0,y:0,z:0};if(!r)d(u),p(l);else{var c=Object.assign({},o.position),f=g();new Lo.Tween(c).to(u,r).easing(Lo.Easing.Quadratic.Out).onUpdate(d).start(),new Lo.Tween(f).to(l,r/3).easing(Lo.Easing.Quadratic.Out).onUpdate(p).start()}return this}return Object.assign({},o.position,{lookAt:g()});function d(_){var y=_.x,v=_.y,m=_.z;y!==void 0&&(o.position.x=y),v!==void 0&&(o.position.y=v),m!==void 0&&(o.position.z=m)}function p(_){var y=new Bt.Vector3(_.x,_.y,_.z);e.controls.target?e.controls.target=y:o.lookAt(y)}function g(){return Object.assign(new Bt.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),u=3;u<r;u++)o[u-3]=arguments[u];return this.fitToBbox(this.getBbox.apply(this,o),t,n)},fitToBbox:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(t){var u=new Bt.Vector3(0,0,0),l=Math.max.apply(Math,Ro(Object.entries(t).map(function(_){var y=rD(_,2),v=y[0],m=y[1];return Math.max.apply(Math,Ro(m.map(function(b){return Math.abs(u[v]-b)})))})))*2,c=(1-r*2/e.height)*o.fov,f=l/Math.atan(c*Math.PI/180),d=f/o.aspect,p=Math.max(f,d);if(p>0){var g=u.clone().sub(o.position).normalize().multiplyScalar(-p);this.cameraPosition(g,u,n)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},n=new Bt.Box3(new Bt.Vector3(0,0,0),new Bt.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(o){return n.expandByObject(o)}),Object.assign.apply(Object,Ro(["x","y","z"].map(function(o){return iD({},o,[n.min[o],n.max[o]])})))):null},getScreenCoords:function(e,t,n,r){var o=new Bt.Vector3(t,n,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new Bt.Vector2(t/e.width*2-1,-(n/e.height)*2+1),u=new Bt.Raycaster;return u.setFromCamera(o,e.camera),Object.assign({},u.ray.at(r,new Bt.Vector3))},intersectingObjects:function(e,t,n){var r=new Bt.Vector2(t/e.width*2-1,-(n/e.height)*2+1),o=new Bt.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new Bt.Scene,camera:new Bt.PerspectiveCamera,clock:new Bt.Clock}},init:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.controlType,o=r===void 0?"trackball":r,u=n.rendererConfig,l=u===void 0?{}:u,c=n.extraRenderers,f=c===void 0?[]:c,d=n.waitForLoadComplete,p=d===void 0?!0:d;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new Bt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(g){return t.container.addEventListener(g,function(_){if(g==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&_.type==="pointermove"&&(_.pressure>0||t.isPointerPressed)&&(_.pointerType!=="touch"||_.movementX===void 0||[_.movementX,_.movementY].some(function(m){return Math.abs(m)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var y=v(t.container);t.pointerPos.x=_.pageX-y.left,t.pointerPos.y=_.pageY-y.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(m){var b=m.getBoundingClientRect(),A=window.pageXOffset||document.documentElement.scrollLeft,S=window.pageYOffset||document.documentElement.scrollTop;return{top:b.top+S,left:b.left+A}}},{passive:!0})}),t.container.addEventListener("pointerup",function(g){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){g.button===0&&t.onClick(t.hoverObj||null,g,t.intersectionPoint),g.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,g,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(g){t.onRightClick&&g.preventDefault()}),t.renderer=new Bt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},l)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=f,t.extraRenderers.forEach(function(g){g.domElement.style.position="absolute",g.domElement.style.top="0px",g.domElement.style.pointerEvents="none",t.container.appendChild(g.domElement)}),t.postProcessingComposer=new SR(t.renderer),t.postProcessingComposer.addPass(new ER(t.scene,t.camera)),t.controls=new{trackball:gR,orbit:mR,fly:_R}[o](t.camera,t.renderer.domElement),o==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Ro(t.extraRenderers)).forEach(function(g){return g.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new Bt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!p,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Ro(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new Bt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var n=$f(e.backgroundColor).alpha;n===void 0&&(n=1),e.renderer.setClearColor(new Bt.Color(jR(1,e.backgroundColor)),n)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new Bt.TextureLoader().load(e.backgroundImageUrl,function(o){e.skysphere.material=new Bt.MeshBasicMaterial({map:o,side:Bt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function hD(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(!i||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var dD=`.graph-info-msg {
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
}`;hD(dD);function Cm(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function pl(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Cm(Object(t),!0).forEach(function(n){es(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Cm(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function es(i,e,t){return e=xD(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Vl(i){return pD(i)||gD(i)||mD(i)||vD()}function pD(i){if(Array.isArray(i))return Mf(i)}function gD(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function mD(i,e){if(i){if(typeof i=="string")return Mf(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mf(i,e)}}function Mf(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function vD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _D(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function xD(i){var e=_D(i,"string");return typeof e=="symbol"?e:String(e)}function e0(i,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(u,l){l[i][r](u)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var u=o[i],l=arguments.length,c=new Array(l>1?l-1:0),f=1;f<l;f++)c[f-1]=arguments[f];var d=u[r].apply(u,c);return d===u?this:d}}}}var Pm=window.THREE?window.THREE:{AmbientLight:RC,DirectionalLight:LC,Vector3:H},yD=170,t0=e0("forceGraph",Xv),bD=Object.assign.apply(Object,Vl(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(i){return es({},i,t0.linkProp(i))}))),wD=Object.assign.apply(Object,Vl(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(i){return es({},i,t0.linkMethod(i))}))),yl=e0("renderObjs",Qv),MD=Object.assign.apply(Object,Vl(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(i){return es({},i,yl.linkProp(i))}))),SD=Object.assign.apply(Object,Vl(["cameraPosition","postProcessingComposer"].map(function(i){return es({},i,yl.linkMethod(i))})).concat([{graph2ScreenCoords:yl.linkMethod("getScreenCoords"),screen2GraphCoords:yl.linkMethod("getSceneCoords")}])),ED=Vf({props:pl(pl({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var n=t.renderObjs.controls();n&&(n.enabled=e,e&&n.domElement&&n.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},bD),MD),methods:pl(pl({zoomToFit:function(e,t,n){for(var r,o=arguments.length,u=new Array(o>3?o-3:0),l=3;l<o;l++)u[l-3]=arguments[l];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,u),t,n),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},wD),SD),stateInit:function(e){var t=e.controlType,n=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new Xv,renderObjs:Qv({controlType:t,rendererConfig:n,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var n=document.createElement("div");t.container.appendChild(n),t.renderObjs(n);var r=t.renderObjs.camera(),o=t.renderObjs.renderer(),u=t.renderObjs.controls();u.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var l;t.container.appendChild(l=document.createElement("div")),l.className="graph-info-msg",l.textContent="",t.forceGraph.onLoading(function(){l.textContent="Loading..."}).onFinishLoading(function(){l.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*yD)}).onFinishUpdate(function(){if(t._dragControls){var c=t.graphData.nodes.find(function(d){return d.__initialFixedPos&&!d.__disposeControlsAfterDrag});c?c.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var f=t._dragControls=new DC(t.graphData.nodes.map(function(d){return d.__threeObj}).filter(function(d){return d}),r,o.domElement);f.addEventListener("dragstart",function(d){u.enabled=!1,d.object.__initialPos=d.object.position.clone(),d.object.__prevPos=d.object.position.clone();var p=ji(d.object).__data;!p.__initialFixedPos&&(p.__initialFixedPos={fx:p.fx,fy:p.fy,fz:p.fz}),!p.__initialPos&&(p.__initialPos={x:p.x,y:p.y,z:p.z}),["x","y","z"].forEach(function(g){return p["f".concat(g)]=p[g]}),o.domElement.classList.add("grabbable")}),f.addEventListener("drag",function(d){var p=ji(d.object);if(!d.object.hasOwnProperty("__graphObjType")){var g=d.object.__initialPos,_=d.object.__prevPos,y=d.object.position;p.position.add(y.clone().sub(_)),_.copy(y),y.copy(g)}var v=p.__data,m=p.position,b={x:m.x-v.x,y:m.y-v.y,z:m.z-v.z};["x","y","z"].forEach(function(A){return v["f".concat(A)]=v[A]=m[A]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,b)}),f.addEventListener("dragend",function(d){delete d.object.__initialPos,delete d.object.__prevPos;var p=ji(d.object).__data;p.__disposeControlsAfterDrag&&(f.dispose(),delete p.__disposeControlsAfterDrag);var g=p.__initialFixedPos,_=p.__initialPos,y={x:_.x-p.x,y:_.y-p.y,z:_.z-p.z};g&&(["x","y","z"].forEach(function(v){var m="f".concat(v);g[m]===void 0&&delete p[m]}),delete p.__initialFixedPos,delete p.__initialPos,p.__dragged&&(delete p.__dragged,t.onNodeDragEnd(p,y))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(u.enabled=!0,u.domElement&&u.domElement.ownerDocument&&u.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new Pm.AmbientLight(12303291),new Pm.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(c,f){var d=ji(c);if(!d)return 1;var p=ji(f);if(!p)return-1;var g=function(y){return y.__graphObjType==="node"};return g(p)-g(d)}).tooltipContent(function(c){var f=ji(c);return f&&mt(t["".concat(f.__graphObjType,"Label")])(f.__data)||""}).hoverDuringDrag(!1).onHover(function(c){var f=ji(c);if(f!==t.hoverObj){var d=t.hoverObj?t.hoverObj.__graphObjType:null,p=t.hoverObj?t.hoverObj.__data:null,g=f?f.__graphObjType:null,_=f?f.__data:null;if(d&&d!==g){var y=t["on".concat(d==="node"?"Node":"Link","Hover")];y&&y(null,p)}if(g){var v=t["on".concat(g==="node"?"Node":"Link","Hover")];v&&v(_,d===g?p:null)}o.domElement.classList[f&&t["on".concat(g==="node"?"Node":"Link","Click")]||!f&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=f}}).clickAfterDrag(!1).onClick(function(c,f){var d=ji(c);if(d){var p=t["on".concat(d.__graphObjType==="node"?"Node":"Link","Click")];p&&p(d.__data,f)}else t.onBackgroundClick&&t.onBackgroundClick(f)}).onRightClick(function(c,f){var d=ji(c);if(d){var p=t["on".concat(d.__graphObjType==="node"?"Node":"Link","RightClick")];p&&p(d.__data,f)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(f)}),this._animationCycle()}});function ji(i){for(var e=i;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}var Zo={},TD={get exports(){return Zo},set exports(i){Zo=i}},Xf=Il;function Il(i,e){if(!(this instanceof Il))return new Il(i,e);if(Array.isArray(i)||(e=i,i=[]),e=e||{},this.data=i||[],this.length=this.data.length,this.compare=e.compare||CD,this.setNodeId=e.setNodeId||AD,this.length>0)for(var t=this.length>>1;t>=0;t--)this._down(t);if(e.setNodeId)for(var t=0;t<this.length;++t)this.setNodeId(this.data[t],t)}function AD(){}function CD(i,e){return i-e}Il.prototype={push:function(i){this.data.push(i),this.setNodeId(i,this.length),this.length++,this._up(this.length-1)},pop:function(){if(this.length!==0){var i=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this.setNodeId(this.data[0],0),this._down(0)),this.data.pop(),i}},peek:function(){return this.data[0]},updateItem:function(i){this._down(i),this._up(i)},_up:function(i){for(var e=this.data,t=this.compare,n=this.setNodeId,r=e[i];i>0;){var o=i-1>>1,u=e[o];if(t(r,u)>=0)break;e[i]=u,n(u,i),i=o}e[i]=r,n(r,i)},_down:function(i){for(var e=this.data,t=this.compare,n=this.length>>1,r=e[i],o=this.setNodeId;i<n;){var u=(i<<1)+1,l=u+1,c=e[u];if(l<this.length&&t(e[l],c)<0&&(u=l,c=e[l]),t(c,r)>=0)break;e[i]=c,o(c,i),i=u}e[i]=r,o(r,i)}};function PD(i){this.node=i,this.parent=null,this.closed=!1,this.open=0,this.distanceToSource=Number.POSITIVE_INFINITY,this.fScore=Number.POSITIVE_INFINITY,this.heapIndex=-1}function LD(){var i=0,e=[];return{createNewState:n,reset:t};function t(){i=0}function n(r){var o=e[i];return o?(o.node=r,o.parent=null,o.closed=!1,o.open=0,o.distanceToSource=Number.POSITIVE_INFINITY,o.fScore=Number.POSITIVE_INFINITY,o.heapIndex=-1):(o=new PD(r),e[i]=o),i++,o}}var n0=LD,Yf={l2:RD,l1:DD};function RD(i,e){var t=i.x-e.x,n=i.y-e.y;return Math.sqrt(t*t+n*n)}function DD(i,e){var t=i.x-e.x,n=i.y-e.y;return Math.abs(t)+Math.abs(n)}var i0=[];typeof Object.freeze=="function"&&Object.freeze(i0);var Zf={heuristic:ID,distance:OD,compareFScore:ND,NO_PATH:i0,setHeapIndex:FD,setH1:kD,setH2:UD,compareF1Score:zD,compareF2Score:BD};function ID(){return 0}function OD(){return 1}function ND(i,e){var t=i.fScore-e.fScore;return t}function FD(i,e){i.heapIndex=e}function zD(i,e){return i.f1-e.f1}function BD(i,e){return i.f2-e.f2}function kD(i,e){i.h1=e}function UD(i,e){i.h2=e}TD.exports=WD;var GD=Xf,HD=n0,r0=Yf,ko=Zf,VD=ko.NO_PATH;Zo.l2=r0.l2;Zo.l1=r0.l1;function WD(i,e){e=e||{};var t=e.oriented,n=e.heuristic;n||(n=ko.heuristic);var r=e.distance;r||(r=ko.distance);var o=HD();return{find:u};function u(l,c){var f=i.getNode(l);if(!f)throw new Error("fromId is not defined in this graph: "+l);var d=i.getNode(c);if(!d)throw new Error("toId is not defined in this graph: "+c);o.reset();var p=new Map,g=new GD({compare:ko.compareFScore,setNodeId:ko.setHeapIndex}),_=o.createNewState(f);p.set(l,_),_.fScore=n(f,d),_.distanceToSource=0,g.push(_),_.open=1;for(var y;g.length>0;){if(y=g.pop(),jD(y,d))return $D(y);y.closed=!0,i.forEachLinkedNode(y.node.id,v,t)}return VD;function v(m,b){var A=p.get(m.id);if(A||(A=o.createNewState(m),p.set(m.id,A)),!A.closed){A.open===0&&(g.push(A),A.open=1);var S=y.distanceToSource+r(m,y.node,b);S>=A.distanceToSource||(A.parent=y,A.distanceToSource=S,A.fScore=S+n(A.node,d),g.updateItem(A.heapIndex))}}}}function jD(i,e){return i.node===e}function $D(i){for(var e=[i.node],t=i.parent;t;)e.push(t.node),t=t.parent;return e}var Ko={},qD={get exports(){return Ko},set exports(i){Ko=i}};qD.exports=ZD;var Lm=Xf,XD=n0,a0=Yf,Nr=Zf,Do=1,Kc=2,YD=Nr.NO_PATH;Ko.l2=a0.l2;Ko.l1=a0.l1;function ZD(i,e){e=e||{};var t=e.oriented,n=e.heuristic;n||(n=Nr.heuristic);var r=e.distance;r||(r=Nr.distance);var o=XD();return{find:u};function u(l,c){var f=i.getNode(l);if(!f)throw new Error("fromId is not defined in this graph: "+l);var d=i.getNode(c);if(!d)throw new Error("toId is not defined in this graph: "+c);if(f===d)return[f];o.reset();var p=t?T:I,g=new Map,_=new Lm({compare:Nr.compareFScore,setNodeId:Nr.setHeapIndex}),y=new Lm({compare:Nr.compareFScore,setNodeId:Nr.setHeapIndex}),v=o.createNewState(f);g.set(l,v),v.fScore=n(f,d),v.distanceToSource=0,_.push(v),v.open=Do;var m=o.createNewState(d);m.fScore=n(d,f),m.distanceToSource=0,y.push(m),m.open=Kc;for(var b=Number.POSITIVE_INFINITY,A,S,M=_,w=Do;_.length>0&&y.length>0;){_.length<y.length?(w=Do,M=_):(w=Kc,M=y);var P=M.pop();if(P.closed=!0,!(P.distanceToSource>b)&&(i.forEachLinkedNode(P.node.id,p),A&&S))return U(A,S)}return YD;function I(Z,j){return ee(Z,j,P)}function T(Z,j){if(w===Do){if(j.fromId===P.node.id)return ee(Z,j,P)}else if(w===Kc&&j.toId===P.node.id)return ee(Z,j,P)}function D(Z){var j=Z.open;return!!(j&&j!==w)}function U(Z,j){for(var O=[],F=Z;F;)O.push(F.node),F=F.parent;for(var V=j;V;)O.unshift(V.node),V=V.parent;return O}function ee(Z,j,O){var F=g.get(Z.id);if(F||(F=o.createNewState(Z),g.set(Z.id,F)),!F.closed){if(D(F)){var V=F.distanceToSource+O.distanceToSource;V<b&&(A=F,S=O,b=V);return}var ie=O.distanceToSource+r(F.node,O.node,j);if(!(ie>=F.distanceToSource)){var ae=w===Do?d:f,_e=ie+n(F.node,ae);_e>=b||(F.fScore=_e,F.open===0&&(M.push(F),M.updateItem(F.heapIndex),F.open=w),F.parent=O,F.distanceToSource=ie)}}}}}var Jo={},KD={get exports(){return Jo},set exports(i){Jo=i}},JD=eI;function QD(i){this.node=i,this.p1=null,this.p2=null,this.closed=!1,this.g1=Number.POSITIVE_INFINITY,this.g2=Number.POSITIVE_INFINITY,this.f1=Number.POSITIVE_INFINITY,this.f2=Number.POSITIVE_INFINITY,this.h1=-1,this.h2=-1}function eI(){var i=0,e=[];return{createNewState:n,reset:t};function t(){i=0}function n(r){var o=e[i];return o?(o.node=r,o.p1=null,o.p2=null,o.closed=!1,o.g1=Number.POSITIVE_INFINITY,o.g2=Number.POSITIVE_INFINITY,o.f1=Number.POSITIVE_INFINITY,o.f2=Number.POSITIVE_INFINITY,o.h1=-1,o.h2=-1):(o=new QD(r),e[i]=o),i++,o}}KD.exports=iI;var Rm=Xf,o0=Yf,Fr=Zf,tI=JD,nI=Fr.NO_PATH;Jo.l2=o0.l2;Jo.l1=o0.l1;function iI(i,e){e=e||{};var t=e.oriented,n=e.quitFast,r=e.heuristic;r||(r=Fr.heuristic);var o=e.distance;o||(o=Fr.distance);var u=tI();return{find:l};function l(c,f){var d=i.getNode(c);if(!d)throw new Error("fromId is not defined in this graph: "+c);var p=i.getNode(f);if(!p)throw new Error("toId is not defined in this graph: "+f);u.reset();var g=t?O:ee,_=t?j:Z,y=new Map,v=new Rm({compare:Fr.compareF1Score,setNodeId:Fr.setH1}),m=new Rm({compare:Fr.compareF2Score,setNodeId:Fr.setH2}),b,A=Number.POSITIVE_INFINITY,S=u.createNewState(d);y.set(c,S),S.g1=0;var M=r(d,p);S.f1=M,v.push(S);var w=u.createNewState(p);y.set(f,w),w.g2=0;var P=M;w.f2=P,m.push(w);for(var I;m.length&&v.length&&(v.length<m.length?D():U(),!(n&&b)););var T=rI(b);return T;function D(){I=v.pop(),!I.closed&&(I.closed=!0,I.f1<A&&I.g1+P-r(d,I.node)<A&&i.forEachLinkedNode(I.node.id,g),v.length>0&&(M=v.peek().f1))}function U(){I=m.pop(),!I.closed&&(I.closed=!0,I.f2<A&&I.g2+M-r(I.node,p)<A&&i.forEachLinkedNode(I.node.id,_),m.length>0&&(P=m.peek().f2))}function ee(F,V){var ie=y.get(F.id);if(ie||(ie=u.createNewState(F),y.set(F.id,ie)),!ie.closed){var ae=I.g1+o(I.node,F,V);ae<ie.g1&&(ie.g1=ae,ie.f1=ae+r(ie.node,p),ie.p1=I,ie.h1<0?v.push(ie):v.updateItem(ie.h1));var _e=ie.g1+ie.g2;_e<A&&(A=_e,b=ie)}}function Z(F,V){var ie=y.get(F.id);if(ie||(ie=u.createNewState(F),y.set(F.id,ie)),!ie.closed){var ae=I.g2+o(I.node,F,V);ae<ie.g2&&(ie.g2=ae,ie.f2=ae+r(d,ie.node),ie.p2=I,ie.h2<0?m.push(ie):m.updateItem(ie.h2));var _e=ie.g1+ie.g2;_e<A&&(A=_e,b=ie)}}function j(F,V){if(V.toId===I.node.id)return Z(F,V)}function O(F,V){if(V.fromId===I.node.id)return ee(F,V)}}}function rI(i){if(!i)return nI;for(var e=[i.node],t=i.p1;t;)e.push(t.node),t=t.p1;for(var n=i.p2;n;)e.unshift(n.node),n=n.p2;return e}var aI={aStar:Zo,aGreedy:Ko,nba:Jo};function dI(i,e){let t=Gf(),n=aI.aStar(t,{oriented:!0});if(!i.hasNode(e))return t;const r=i.getNode(e);let o=[r];for(t.addNode(e,r.data);o.length>0;){let u=o.shift();const l=[...i.getLinks(u.id)??[]].filter(c=>c.fromId==u.id);for(const c of l){if(t.hasLink(c.fromId,c.toId)||t.hasNode(c.toId)&&t.hasNode(c.fromId)&&n.find(c.toId,c.fromId).length>0)continue;const f=i.getNode(c.toId);t.addNode(f.id,f.data),t.addLink(c.fromId,c.toId,c.data),o.push(f)}}return t}function pI(i,e){let t=Gf();if(!i.hasNode(e))return t;let n=[i.getNode(e)];for(;n.length>0;){let r=n.shift();const o=[...t.getLinks(r.id)??[]].filter(c=>c.toId==r.id),u=(o.length?Vo.sumBy(o,"data.backingUsd"):r.data.mcap)??0;t.addNode(r.id,{...r.data,mcap:u});const l=[...i.getLinks(r.id)??[]].filter(c=>c.fromId==r.id);for(const c of l){const f=i.getNode(c.toId);let d=0;c.data.backingUsd&&(d=c.data.backingUsd/Vo.sumBy(l,"data.backingUsd")*u),t.addLink(c.fromId,c.toId,{...c.data,backingUsd:d}),n.push(f)}}return t}function gI(i){return ED()(i).linkSource("fromId").linkTarget("toId").backgroundColor("#00000000")}export{vp as A,xt as C,gI as F,Pf as M,Hl as P,oC as S,AC as T,$m as U,Ee as V,br as W,hI as a,lI as b,WP as c,pI as d,sI as e,oI as f,dI as g,cI as h,xL as i,uI as j,Zi as k,Vo as l,jP as m,Sf as n,H as o,xR as p,bR as q};
