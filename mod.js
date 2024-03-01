// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,i="function"==typeof a?a.toStringTag:"";var f=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,a,f,u;if(null==r)return o.call(r);t=r[i],u=i,n=null!=(f=r)&&e.call(f,u);try{r[i]=void 0}catch(n){return o.call(r)}return a=o.call(r),n?r[i]=t:delete r[i],a}:function(r){return o.call(r)},u="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var c,l="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,n,t;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var v=c,p="function"==typeof Float64Array;var A="function"==typeof Float64Array?Float64Array:null;var U,w="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var b=U,m="function"==typeof Uint8Array;var d="function"==typeof Uint8Array?Uint8Array:null;var N,h="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var F=N,I="function"==typeof Uint16Array;var S="function"==typeof Uint16Array?Uint16Array:null;var s,E="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var j,T={uint16:s,uint8:F};(j=new T.uint16(1))[0]=4660;var g=52===new T.uint8(j.buffer)[0],O=!0===g?1:0,x=new b(1),M=new v(x.buffer);function P(r){return x[0]=r,M[O]}var V=!0===g?1:0,Y=new b(1),_=new v(Y.buffer);var G=1023,k=Number.NEGATIVE_INFINITY;var q=.6931471803691238,z=1.9082149292705877e-10,B=0x40000000000000,C=.3333333333333333,D=1048575,H=2146435072,J=1048576,K=1072693248;function L(n){var t,o,e,a,i,f,u,y,c,l,v,p;return 0===n?k:r(n)||n<0?NaN:(i=0,(o=P(n))<J&&(i-=54,o=P(n*=B)),o>=H?n+n:(i+=(o>>20)-G|0,i+=(y=(o&=D)+614244&1048576|0)>>20|0,u=(n=function(r,n){return Y[0]=r,_[V]=n>>>0,Y[0]}(n,o|y^K))-1,(D&2+o)<3?0===u?0===i?0:i*q+i*z:(f=u*u*(.5-C*u),0===i?u-f:i*q-(f-i*z-u)):(y=o-398458|0,c=440401-o|0,a=(v=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+a,(y|=c)>0?(t=.5*u*u,0===i?u-(t-l*(t+f)):i*q-(t-(l*(t+f)+i*z)-u)):0===i?u-l*(u-f):i*q-(l*(u-f)-i*z-u))))}var Q=Math.round,R=Number.POSITIVE_INFINITY,W=L(1.618033988749895);function X(t){return r(t)||!1===function(r){return n(r)===r}(t)||t<=1||t===R?NaN:Q(L(2.23606797749979*t+.5)/W)}export{X as default};
//# sourceMappingURL=mod.js.map
