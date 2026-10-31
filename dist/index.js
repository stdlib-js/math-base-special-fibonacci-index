"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var u=t(function(d,a){
var v=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-integer/dist'),i=require('@stdlib/math-base-special-ln/dist'),q=require('@stdlib/math-base-special-round/dist'),c=require('@stdlib/constants-float64-phi/dist'),o=require('@stdlib/constants-float64-pinf/dist'),I=2.23606797749979,f=i(c);function x(e){var r;return v(e)||s(e)===!1||e<=1||e===o?NaN:(r=e*I+.5,q(i(r)/f))}a.exports=x
});var N=u();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
