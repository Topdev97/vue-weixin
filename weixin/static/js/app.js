webpackJsonp([2,1],[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(14),o=i(r),u=n(12),d=i(u),a=n(3),c=i(a);n(6),n(2),o.default.use(d.default);var s=new d.default({routes:c.default,mode:"hash",strict:!1});new o.default({router:s}).$mount("#weixin")},,function(e,t){"use strict";!function(e,t){var n=e.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(i,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(document,window)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=i(r);t.default=[{path:"/",components:o.default,children:[{path:"",redirect:"/dialogue"}]}]},,,function(e,t){},,function(e,t,n){var i,r,o=n(10);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=i},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"weixin"}},[t("router-view")])},staticRenderFns:[]}}]);