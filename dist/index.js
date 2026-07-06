"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=u(function(h,d){
var p=require('@stdlib/math-base-special-floor/dist');function y(a,r,e,i){var n,t;return a<=0?NaN:(n=a/2,t=p(n),n===t?(r[i+t*e]+r[i+(t-1)*e])/2:r[i+t*e])}d.exports=y
});var v=u(function(j,o){
var f=require('@stdlib/strided-base-stride2offset/dist'),l=s();function x(a,r,e){return l(a,r,e,f(a,e))}o.exports=x
});var m=u(function(k,c){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=s();O(q,"ndarray",R);c.exports=q
});var b=m();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
