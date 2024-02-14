// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}var r=Math.floor;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var o=n();var e=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&a.call(t,r)}var u="function"==typeof Symbol?Symbol:void 0,f="function"==typeof u?u.toStringTag:"";var c=o&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return e.call(t);n=t[f],r=i(t,f);try{t[f]=void 0}catch(r){return e.call(t)}return o=e.call(t),r?t[f]=n:delete t[f],o}:function(t){return e.call(t)},l="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var v,p="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(l&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?p:function(){throw new Error("not implemented")};var b=v,A=n();var m=Object.prototype.toString;var S="function"==typeof Symbol?Symbol:void 0,d="function"==typeof S?S.toStringTag:"";var g=A&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return m.call(t);n=t[d],r=i(t,d);try{t[d]=void 0}catch(r){return m.call(t)}return o=m.call(t),r?t[d]=n:delete t[d],o}:function(t){return m.call(t)},w="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var h,F="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof U)return!1;try{r=new U([1,3.14,-3.14,NaN]),n=r,t=(w&&n instanceof Float64Array||"[object Float64Array]"===g(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var N=h,T=n();var s=Object.prototype.toString;var j="function"==typeof Symbol?Symbol:void 0,I="function"==typeof j?j.toStringTag:"";var E=T&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return s.call(t);n=t[I],r=i(t,I);try{t[I]=void 0}catch(r){return s.call(t)}return o=s.call(t),r?t[I]=n:delete t[I],o}:function(t){return s.call(t)},O="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var M,P="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=r,t=(O&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")};var V=M,Y=n();var _=Object.prototype.toString;var G="function"==typeof Symbol?Symbol:void 0,k="function"==typeof G?G.toStringTag:"";var q=Y&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return _.call(t);n=t[k],r=i(t,k);try{t[k]=void 0}catch(r){return _.call(t)}return o=_.call(t),r?t[k]=n:delete t[k],o}:function(t){return _.call(t)},z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null;var C,D="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var t,r,n;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,65536,65537]),n=r,t=(z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:C,uint8:V};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,Q=new N(1),R=new b(Q.buffer);function W(t){return Q[0]=t,R[L]}var X=n();var Z=Object.prototype.toString;var $="function"==typeof Symbol?Symbol:void 0,tt="function"==typeof $?$.toStringTag:"";var rt=X&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return Z.call(t);n=t[tt],r=i(t,tt);try{t[tt]=void 0}catch(r){return Z.call(t)}return o=Z.call(t),r?t[tt]=n:delete t[tt],o}:function(t){return Z.call(t)},nt="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var et,at="function"==typeof Float64Array?Float64Array:void 0;et=function(){var t,r,n;if("function"!=typeof ot)return!1;try{r=new ot([1,3.14,-3.14,NaN]),n=r,t=(nt&&n instanceof Float64Array||"[object Float64Array]"===rt(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?at:function(){throw new Error("not implemented")};var it=!0===K?1:0,ut=new et(1),ft=new b(ut.buffer);var ct=Number.NEGATIVE_INFINITY;var lt=.6931471803691238,yt=1.9082149292705877e-10;function vt(r){var n,o,e,a,i,u,f,c,l,y,v,p;return 0===r?ct:t(r)||r<0?NaN:(i=0,(o=W(r))<1048576&&(i-=54,o=W(r*=0x40000000000000)),o>=2146435072?r+r:(i+=(o>>20)-1023|0,i+=(c=(o&=1048575)+614244&1048576|0)>>20|0,f=(r=function(t,r){return ut[0]=t,ft[it]=r>>>0,ut[0]}(r,o|1072693248^c))-1,(1048575&2+o)<3?0===f?0===i?0:i*lt+i*yt:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*lt-(u-i*yt-f)):(c=o-398458|0,l=440401-o|0,a=(v=(p=(y=f/(2+f))*y)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),u=e+a,(c|=l)>0?(n=.5*f*f,0===i?f-(n-y*(n+u)):i*lt-(n-(y*(n+u)+i*yt)-f)):0===i?f-y*(f-u):i*lt-(y*(f-u)-i*yt-f))))}var pt=Math.round,bt=Number.POSITIVE_INFINITY,At=vt(1.618033988749895);function mt(n){return t(n)||!1===function(t){return r(t)===t}(n)||n<=1||n===bt?NaN:pt(vt(2.23606797749979*n+.5)/At)}export{mt as default};
//# sourceMappingURL=mod.js.map
