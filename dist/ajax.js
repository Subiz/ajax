!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,function(){return n={},o.m=r=[function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";var n=r(2);n.env.XMLHttpRequest=window.XMLHttpRequest,n.env.window=window,e.exports=n},function(e,t,r){var s=r(3),i="Content-Type",u="application/x-www-form-urlencoded",c="application/json; charset=utf-8";function o(e,t){return Object.assign(e.clone(),t)}var a=function(e,t){var r=s.stringify(e.query);r=r&&"?"+r;var n=new d.XMLHttpRequest;for(var o in n.onreadystatechange=function(e){4===n.readyState&&(t&&t(void 0,n.responseText,n.status),t=void 0)},n.onerror=function(){t&&t("network_error",n.responseText),t=void 0},console.log("SENDING",e.baseurl+r),n.open(e.method,e.baseurl+r),e.headers)n.setRequestHeader(o,e.headers[o]);e.content_type&&n.setRequestHeader(i,e.content_type),n.send(e.body)};function f(e){return(e||"").trim()}function n(e){return e}var d={XMLHttpRequest:{}};function l(e){return e&&"[object Function]"==={}.toString.call(e)}function h(t,r,n){if(!t||0===t.length)return n(r);var e=t.shift();if(!l(e))return h(t,r,n);e(r,function(e){return!1===e?n(r):h(t,r,n)})}var p,y=(p={parse:n,beforehooks:[],afterhooks:[],baseurl:"",query:{},meta:{},clone:function(){return Object.assign({},this,{query:Object.assign({},this.query),meta:Object.assign({},this.meta)})},addQuery:function(e,t){var r=this.clone();return r.query[e]=t,r},removeQuery:function(e){var t=this.clone();return void 0!==t.query[e]&&(t.query[e]=void 0),t},setQuery:function(e){return o(this,{query:e})},clearHooks:function(){var e=this.clone({nohook:!0});return e.hooks=[],e.beforehooks=[],e.afterhooks=[],e},beforeHook:function(e){var t=this.clone();return t.beforehooks=t.beforehooks.slice(),t.beforehooks.push(e),t},afterHook:function(e){var t=this.clone();return t.afterhooks=t.afterhooks.slice(),t.afterhooks.push(e),t},setHeader:function(e){var t=this.clone();return t.headers=Object.assign({},this.headers,e),t.headers[i]=void 0,t}},["put","head","patch","delete","post","get"].map(function(n){p[n]=function(e,t,r){!function(n,e,o){var i;new Promise(function(e){i=e});o=o||function(){},l(e)&&(o=e,e=void 0),e&&((n=n.clone()).content_type===c?n.body=JSON.stringify(e):n.content_type===u?n.body=s.stringify(e):n.body=e),h(n.beforehooks.slice(),{request:n},function(e){if(e.error)return i({body:void 0,code:0,error:e.error}),o(e.error,void 0,0);a(e.request,function(e,t,r){h(n.afterhooks.slice(),{request:n,code:r,body:t,err:e},function(t){var e;try{e=n.parse(t.body)}catch(e){t.err=e}try{i({body:e,code:t.code,error:t.err}),o(t.err,e,t.code)}catch(e){}})})})}(o(this,{method:n,baseurl:function(e,t){return e=f(e),(t=f(t))&&e?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("//")?t:(e.endsWith("/")||(e+="/"),t.startsWith("/")&&(t=t.substring(1)),e+t):e+t}(this.baseurl,e)}),t,r)}}),p.setBaseUrl=function(e){return o(this,{baseurl:e})},p.contentTypeJson=function(){return o(this,{content_type:c})},p.contentTypeForm=function(){return o(this,{content_type:u})},p.setContentType=function(e){return o(this,{content_type:f(e)})},p.setParser=function(e){var t=this.clone();switch(f(e)){case"json":t.parse=function(e){if(void 0!==e)return JSON.parse(e)};break;default:t.parse=n}return t},p.setBody=function(e){var t=this.clone();return t.body=e,t},p.setMeta=function(e,t){var r=this.clone();return r.meta[e]=t,r},p);y.env=d,y.waterfall=h,e.exports=y},function(e,t){function d(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}e.exports={stringify:function(e){if(!e)return"";for(var t,r,n=Object.keys(e),o=[],i=0;i<n.length;i++){var s=n[i],u="",c=e[s];if(void 0!==c){if(null===c)u=d(s);else if(Array.isArray(c)){for(var a=[],f=0;f<c.length;f++)void 0!==c[f]&&a.push((t=s,r=c[f],a.length,null===r?d(t):[d(t),"=",d(r)].join("")));u=a.join("&")}else u=d(s)+"="+d(c);0<u.length&&o.push(u)}}return o.join("&")}}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});