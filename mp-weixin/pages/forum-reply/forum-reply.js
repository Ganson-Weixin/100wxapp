(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{3770:function(n,t,e){},"70d5":function(n,t,e){"use strict";var r=e("3770"),u=e.n(r);u.a},"79b8":function(n,t,e){"use strict";var r,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}))},"924d":function(n,t,e){"use strict";e.r(t);var r=e("79b8"),u=e("e34d");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("70d5");var i,o=e("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=s.exports},e318:function(n,t,e){"use strict";(function(n){e("d87e"),e("921b");r(e("66fd"));var t=r(e("924d"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},e34d:function(n,t,e){"use strict";e.r(t);var r=e("f12b"),u=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=u.a},f12b:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,r,u,a,i){try{var o=n[a](i),s=o.value}catch(c){return void e(c)}o.done?t(s):Promise.resolve(s).then(r,u)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var i=n.apply(t,e);function o(n){a(i,r,u,o,s,"next",n)}function s(n){a(i,r,u,o,s,"throw",n)}o(void 0)}))}}var o={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(){var t=i(r.default.mark((function t(e){var u,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.pid=e.pid,u=n.getStorageSync("nowTable"),t.next=4,this.$api.session(u);case 4:a=t.sent,this.user=a.data,"yonghu"==u&&(this.username=this.user.zhanghao),"dianzhu"==u&&(this.username=this.user.dianzhuzhanghao);case 8:case"end":return t.stop()}}),t,this)})));function e(n){return t.apply(this,arguments)}return e}(),methods:{onReplyTap:function(){var n=i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$api.save("forum",{parentid:this.pid,content:this.contont,username:this.username});case 2:this.$utils.msgBack("回复成功");case 3:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}()}};t.default=o}).call(this,e("543d")["default"])}},[["e318","common/runtime","common/vendor"]]]);