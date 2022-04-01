// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).fibonacciIndex=t()}(this,(function(){"use strict";var n=function(n){return n!=n},t=Math.floor;var r=function(n){return t(n)===n};var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return o&&"symbol"==typeof Symbol.toStringTag},i=Object.prototype.toString,u=i;var f=function(n){return u.call(n)},a=Object.prototype.hasOwnProperty;var c=function(n,t){return null!=n&&a.call(n,t)},y="function"==typeof Symbol?Symbol.toStringTag:"",l=c,p=y,v=i;var A=f,b=function(n){var t,r,o;if(null==n)return v.call(n);r=n[p],t=l(n,p);try{n[p]=void 0}catch(t){return v.call(n)}return o=v.call(n),t?n[p]=r:delete n[p],o},d=e()?b:A,U=d,m="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null,h=function(n){return m&&n instanceof Uint32Array||"[object Uint32Array]"===U(n)},s=w;var N=function(){var n,t;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=h(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var I="function"==typeof Uint32Array?Uint32Array:void 0,F=function(){throw new Error("not implemented")},S=N()?I:F,T=d,g="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null,E=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===T(n)},x=j;var O=function(){var n,t;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,NaN]),n=E(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n};var M="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=O()?M:P,Y=d,_="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return _&&n instanceof Uint8Array||"[object Uint8Array]"===Y(n)},q=G;var z=function(){var n,t;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),n=k(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,H=d,J="function"==typeof Uint16Array;var K="function"==typeof Uint16Array?Uint16Array:null,L=function(n){return J&&n instanceof Uint16Array||"[object Uint16Array]"===H(n)},Q=K;var R=function(){var n,t;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,65536,65537]),n=L(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n};var W,X="function"==typeof Uint16Array?Uint16Array:void 0,Z=function(){throw new Error("not implemented")},$={uint16:R()?X:Z,uint8:D};(W=new $.uint16(1))[0]=4660;var nn=52===new $.uint8(W.buffer)[0],tn=S,rn=!0===nn?1:0,on=new V(1),en=new tn(on.buffer);var un=function(n){return on[0]=n,en[rn]},fn=S,an=!0===nn?1:0,cn=new V(1),yn=new fn(cn.buffer);var ln=function(n,t){return cn[0]=n,yn[an]=t>>>0,cn[0]},pn=ln,vn=Number.NEGATIVE_INFINITY;var An=un,bn=pn,dn=n,Un=vn,mn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},wn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},hn=.6931471803691238,sn=1.9082149292705877e-10,Nn=1048575;var In=function(n){var t,r,o,e,i,u,f,a,c,y,l;return 0===n?Un:dn(n)||n<0?NaN:(e=0,(r=An(n))<1048576&&(e-=54,r=An(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(f=(r&=Nn)+614244&1048576|0)>>20|0,u=(n=bn(n,r|1072693248^f))-1,(Nn&2+r)<3?0===u?0===e?0:e*hn+e*sn:(i=u*u*(.5-.3333333333333333*u),0===e?u-i:e*hn-(i-e*sn-u)):(f=r-398458|0,a=440401-r|0,o=(y=(l=(c=u/(2+u))*c)*l)*mn(y),i=l*wn(y)+o,(f|=a)>0?(t=.5*u*u,0===e?u-(t-c*(t+i)):e*hn-(t-(c*(t+i)+e*sn)-u)):0===e?u-c*(u-i):e*hn-(c*(u-i)-e*sn-u))))},Fn=Math.round,Sn=Number.POSITIVE_INFINITY,Tn=n,gn=r,jn=In,En=Fn,xn=Sn,On=jn(1.618033988749895);return function(n){return Tn(n)||!1===gn(n)||n<=1||n===xn?NaN:En(jn(2.23606797749979*n+.5)/On)}}));
//# sourceMappingURL=bundle.js.map
