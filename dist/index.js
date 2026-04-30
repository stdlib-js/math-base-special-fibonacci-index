"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=n(function(P,a){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-assert-is-integer/dist'),i=require('@stdlib/math-base-special-ln/dist'),s=require('@stdlib/math-base-special-round/dist'),q=require('@stdlib/constants-float64-phi/dist'),c=require('@stdlib/constants-float64-pinf/dist'),o=2.23606797749979,I=i(q);function f(r){var e;return t(r)||v(r)===!1||r<=1||r===c?NaN:(e=r*o+.5,s(i(e)/I))}a.exports=f
});var x=u();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
