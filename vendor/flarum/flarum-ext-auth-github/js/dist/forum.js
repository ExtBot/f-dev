module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/LogInButtons"]},function(t,e){t.exports=flarum.core.compat["components/LogInButton"]},,,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),u=n.n(r),a=n(2),i=n.n(a),c=n(3),f=n.n(c);u.a.initializers.add("flarum-auth-github",function(){Object(o.extend)(i.a.prototype,"items",function(t){t.add("github",m(f.a,{className:"Button LogInButton--github",icon:"fab fa-github",path:"/auth/github"},u.a.translator.trans("flarum-auth-github.forum.log_in.with_github_button")))})})}]);
//# sourceMappingURL=forum.js.map