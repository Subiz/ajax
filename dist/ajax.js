!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,function(){return r={},o.m=n=[function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r=n(2);r.env.XMLHttpRequest=window.XMLHttpRequest,r.env.window=window,e.exports=r},function(e,t,n){var s=n(3),i="Content-Type",u="application/x-www-form-urlencoded",c="application/json; charset=utf-8";function o(e,t){return Object.assign(e.clone(),t)}var f=function(e,t){var n=s.stringify(e.query);n=n&&"?"+n;var r=new y.XMLHttpRequest;for(var o in r.onreadystatechange=function(e){4===r.readyState&&(t&&t(void 0,r.responseText,r.status),t=void 0)},r.onerror=function(){t&&t("network_error",r.responseText),t=void 0},r.open(e.method,e.baseurl+n),e.headers)r.setRequestHeader(o,e.headers[o]);e.content_type&&r.setRequestHeader(i,e.content_type),r.send(e.body)};function a(e){return(e||"").trim()}function d(e){return e&&"[object Function]"==={}.toString.call(e)}function p(t,n,r){if(!t||0===t.length)return r(n);var e=t.shift();if(!d(e))return p(t,n,r);e(n,function(e){return!1===e?r(n):p(t,n,r)})}var l,r=(l={parser:"",beforehooks:[],afterhooks:[],baseurl:"",query:{},meta:{},clone:function(){return Object.assign({},this,{query:Object.assign({},this.query),meta:Object.assign({},this.meta)})},addQuery:function(e,t){var n=this.clone();return n.query[e]=t,n},removeQuery:function(e){var t=this.clone();return void 0!==t.query[e]&&(t.query[e]=void 0),t},setQuery:function(e){return o(this,{query:e})},clearHooks:function(){return o(this,{beforehooks:[],afterhooks:[]})},beforeHook:function(e){var t=this.beforehooks.slice();return t.push(e),o(this,{beforehooks:t})},afterHook:function(e){var t=this.afterhooks.slice();return t.push(e),o(this,{afterhooks:t})},setHeader:function(e){return(e=Object.assign({},this.headers,e))[i]=void 0,o(this,{headers:e})}},["put","head","patch","delete","post","get"].map(function(r){l[r]=function(e,t,n){return function(o,e,n){n=n||function(){},d(e)&&(n=e,e=void 0);var i,t=new Promise(function(t){i=function(e){try{n(e.error,e.body,e.code)}catch(e){}t(e)}});return e&&((o=o.clone()).body=e,o.content_type===c&&(o.body=y.Jsonify(e)),o.content_type===u&&(o.body=s.stringify(e))),p(o.beforehooks.slice(),{request:o},function(e){if(e.error)return i({body:void 0,code:0,error:e.error});f(e.request,function(e,t,r){p(o.afterhooks.slice(),{request:o,code:r,body:t,err:e},function(e){var t=e.body;"json"==o.parser&&void 0!==e.body&&(t=y.ParseJson(e.body));var n=e.err;200!==r&&(n="not 200"),i({body:t,code:e.code,error:n})})})}),t}(o(this,{method:r,baseurl:function(e,t){return e=a(e),(t=a(t))&&e?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("//")?t:(e.endsWith("/")||(e+="/"),t.startsWith("/")&&(t=t.substring(1)),e+t):e+t}(this.baseurl,e)}),t,n)}}),l.setBaseUrl=function(e){return o(this,{baseurl:e})},l.contentTypeJson=function(){return o(this,{content_type:c})},l.contentTypeForm=function(){return o(this,{content_type:u})},l.setContentType=function(e){return o(this,{content_type:a(e)})},l.setParser=function(e){return o(this,{parser:a(e)})},l.setBody=function(e){return o(this,{body:e})},l.setMeta=function(e,t){var n=this.clone();return n.meta[e]=t,n},l),y={XMLHttpRequest:{},Jsonify:JSON.stringify,ParseJson:JSON.parse};r.env=y,r.waterfall=p,e.exports=r},function(e,t){function d(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}e.exports={stringify:function(e){if(!e)return"";for(var t,n,r=Object.keys(e),o=[],i=0;i<r.length;i++){var s=r[i],u="",c=e[s];if(void 0!==c){if(null===c)u=d(s);else if(Array.isArray(c)){for(var f=[],a=0;a<c.length;a++)void 0!==c[a]&&f.push((t=s,n=c[a],f.length,null===n?d(t):[d(t),"=",d(n)].join("")));u=f.join("&")}else u=d(s)+"="+d(c);0<u.length&&o.push(u)}}return o.join("&")}}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});