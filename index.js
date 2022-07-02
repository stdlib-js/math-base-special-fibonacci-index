// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r=Math.floor,o=function(n){return r(n)===n},e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,f=i,u=function(n){return f.call(n)},c=Object.prototype.hasOwnProperty,a=function(n,t){return null!=n&&c.call(n,t)},y="function"==typeof Symbol?Symbol.toStringTag:"",l=a,p=y,A=i,b=u,d=function(n){var t,r,o;if(null==n)return A.call(n);r=n[p],t=l(n,p);try{n[p]=void 0}catch(t){return A.call(n)}return o=A.call(n),t?n[p]=r:delete n[p],o},U=e&&"symbol"==typeof Symbol.toStringTag?d:b,m=U,w="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,s=function(n){return w&&n instanceof Uint32Array||"[object Uint32Array]"===m(n)},v=h,N=function(){var n,t;if("function"!=typeof v)return!1;try{t=new v(t=[1,3.14,-3.14,4294967296,4294967297]),n=s(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},I="function"==typeof Uint32Array?Uint32Array:void 0,F=function(){throw new Error("not implemented")},S=N()?I:F,T=U,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,E=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===T(n)},x=j,O=function(){var n,t;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,NaN]),n=E(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},M="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=O()?M:P,Y=U,_="function"==typeof Uint8Array,G="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return _&&n instanceof Uint8Array||"[object Uint8Array]"===Y(n)},q=G,z=function(){var n,t;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),n=k(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,H=U,J="function"==typeof Uint16Array,K="function"==typeof Uint16Array?Uint16Array:null,L=function(n){return J&&n instanceof Uint16Array||"[object Uint16Array]"===H(n)},Q=K,R=function(){var n,t;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,65536,65537]),n=L(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},W="function"==typeof Uint16Array?Uint16Array:void 0,X=function(){throw new Error("not implemented")},Z={uint16:R()?W:X,uint8:D};(n=new Z.uint16(1))[0]=4660;var $=52===new Z.uint8(n.buffer)[0],nn=S,tn=!0===$?1:0,rn=new V(1),on=new nn(rn.buffer),en=function(n){return rn[0]=n,on[tn]},fn=S,un=!0===$?1:0,cn=new V(1),an=new fn(cn.buffer),yn=function(n,t){return cn[0]=n,an[un]=t>>>0,cn[0]},ln=yn,pn=Number.NEGATIVE_INFINITY,An=en,bn=ln,dn=t,Un=pn,mn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},wn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},hn=.6931471803691238,sn=1.9082149292705877e-10,vn=1048575,Nn=function(n){var t,r,o,e,i,f,u,c,a,y,l;return 0===n?Un:dn(n)||n<0?NaN:(e=0,(r=An(n))<1048576&&(e-=54,r=An(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(u=614244+(r&=vn)&1048576|0)>>20|0,f=(n=bn(n,r|1072693248^u))-1,(vn&2+r)<3?0===f?0===e?0:e*hn+e*sn:(i=f*f*(.5-.3333333333333333*f),0===e?f-i:e*hn-(i-e*sn-f)):(u=r-398458|0,c=440401-r|0,o=(y=(l=(a=f/(2+f))*a)*l)*mn(y),i=l*wn(y)+o,(u|=c)>0?(t=.5*f*f,0===e?f-(t-a*(t+i)):e*hn-(t-(a*(t+i)+e*sn)-f)):0===e?f-a*(f-i):e*hn-(a*(f-i)-e*sn-f))))},In=Math.round,Fn=Number.POSITIVE_INFINITY,Sn=Nn(1.618033988749895);return function(n){return t(n)||!1===o(n)||n<=1||n===Fn?NaN:In(Nn(2.23606797749979*n+.5)/Sn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).fibonacciIndex=t();
//# sourceMappingURL=index.js.map