// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=Math.floor;var t=function(n){return r(n)===n};var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return o&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,i=a;var u=function(n){return i.call(n)},f=Object.prototype.hasOwnProperty;var c=function(n,r){return null!=n&&f.call(n,r)},y="function"==typeof Symbol?Symbol.toStringTag:"",l=c,v=y,p=a;var A=u,U=function(n){var r,t,o;if(null==n)return p.call(n);t=n[v],r=l(n,v);try{n[v]=void 0}catch(r){return p.call(n)}return o=p.call(n),r?n[v]=t:delete n[v],o},w=e()?U:A,b=w,m="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null,d=function(n){return m&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},h=N;var F=function(){var n,r;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,4294967296,4294967297]),n=d(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var I="function"==typeof Uint32Array?Uint32Array:void 0,S=function(){throw new Error("not implemented")},s=F()?I:S,E=w,j="function"==typeof Float64Array;var T="function"==typeof Float64Array?Float64Array:null,g=function(n){return j&&n instanceof Float64Array||"[object Float64Array]"===E(n)},O=T;var x=function(){var n,r;if("function"!=typeof O)return!1;try{r=new O([1,3.14,-3.14,NaN]),n=g(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var M="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=x()?M:P,Y=w,_="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return _&&n instanceof Uint8Array||"[object Uint8Array]"===Y(n)},q=G;var z=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,256,257]),n=k(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,H=w,J="function"==typeof Uint16Array;var K="function"==typeof Uint16Array?Uint16Array:null,L=function(n){return J&&n instanceof Uint16Array||"[object Uint16Array]"===H(n)},Q=K;var R=function(){var n,r;if("function"!=typeof Q)return!1;try{r=new Q(r=[1,3.14,-3.14,65536,65537]),n=L(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var W,X="function"==typeof Uint16Array?Uint16Array:void 0,Z=function(){throw new Error("not implemented")},$={uint16:R()?X:Z,uint8:D};(W=new $.uint16(1))[0]=4660;var nn=52===new $.uint8(W.buffer)[0],rn=s,tn=!0===nn?1:0,on=new V(1),en=new rn(on.buffer);var an=function(n){return on[0]=n,en[tn]},un=s,fn=!0===nn?1:0,cn=new V(1),yn=new un(cn.buffer);var ln=function(n,r){return cn[0]=n,yn[fn]=r>>>0,cn[0]},vn=ln,pn=Number.NEGATIVE_INFINITY;var An=an,Un=vn,wn=n,bn=pn,mn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},Nn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},dn=.6931471803691238,hn=1.9082149292705877e-10;var Fn=function(n){var r,t,o,e,a,i,u,f,c,y,l;return 0===n?bn:wn(n)||n<0?NaN:(e=0,(t=An(n))<1048576&&(e-=54,t=An(n*=0x40000000000000)),t>=2146435072?n+n:(e+=(t>>20)-1023|0,e+=(u=(t&=1048575)+614244&1048576|0)>>20|0,i=(n=Un(n,t|1072693248^u))-1,(1048575&2+t)<3?0===i?0===e?0:e*dn+e*hn:(a=i*i*(.5-.3333333333333333*i),0===e?i-a:e*dn-(a-e*hn-i)):(u=t-398458|0,f=440401-t|0,o=(y=(l=(c=i/(2+i))*c)*l)*mn(y),a=l*Nn(y)+o,(u|=f)>0?(r=.5*i*i,0===e?i-(r-c*(r+a)):e*dn-(r-(c*(r+a)+e*hn)-i)):0===e?i-c*(i-a):e*dn-(c*(i-a)-e*hn-i))))},In=Math.round,Sn=Number.POSITIVE_INFINITY,sn=Fn(1.618033988749895);function En(r){return n(r)||!1===t(r)||r<=1||r===Sn?NaN:In(Fn(2.23606797749979*r+.5)/sn)}export{En as default};
//# sourceMappingURL=mod.js.map
