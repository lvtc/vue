webpackJsonp([2],{"/Luh":function(t,n,e){(function(n){
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
!function(n){"use strict";"function"==typeof bootstrap?bootstrap("promise",n):t.exports=n()}(function(){"use strict";var t=!1;try{throw new Error}catch(n){t=!!n.stack}var e,r=b(),o=function(){},i=function(){var t={task:void 0,next:null},e=t,r=!1,o=void 0,u=!1,c=[];function s(){for(var n,e;t.next;)n=(t=t.next).task,t.task=void 0,(e=t.domain)&&(t.domain=void 0,e.enter()),a(n,e);for(;c.length;)a(n=c.pop());r=!1}function a(t,n){try{t()}catch(t){if(u)throw n&&n.exit(),setTimeout(s,0),n&&n.enter(),t;setTimeout(function(){throw t},0)}n&&n.exit()}if(i=function(t){e=e.next={task:t,domain:u&&n.domain,next:null},r||(r=!0,o())},"object"==typeof n&&"[object process]"===n.toString()&&n.nextTick)u=!0,o=function(){n.nextTick(s)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,s):function(){setImmediate(s)};else if("undefined"!=typeof MessageChannel){var f=new MessageChannel;f.port1.onmessage=function(){o=p,f.port1.onmessage=s,s()};var p=function(){f.port2.postMessage(0)};o=function(){setTimeout(s,0),p()}}else o=function(){setTimeout(s,0)};return i.runAfter=function(t){c.push(t),r||(r=!0,o())},i}(),u=Function.call;function c(t){return function(){return u.apply(t,arguments)}}var s,a=c(Array.prototype.slice),f=c(Array.prototype.reduce||function(t,n){var e=0,r=this.length;if(1===arguments.length)for(;;){if(e in this){n=this[e++];break}if(++e>=r)throw new TypeError}for(;e<r;e++)e in this&&(n=t(n,this[e],e));return n}),p=c(Array.prototype.indexOf||function(t){for(var n=0;n<this.length;n++)if(this[n]===t)return n;return-1}),l=c(Array.prototype.map||function(t,n){var e=this,r=[];return f(e,function(o,i,u){r.push(t.call(n,i,u,e))},void 0),r}),d=Object.create||function(t){function n(){}return n.prototype=t,new n},h=Object.defineProperty||function(t,n,e){return t[n]=e.value,t},v=c(Object.prototype.hasOwnProperty),y=Object.keys||function(t){var n=[];for(var e in t)v(t,e)&&n.push(e);return n},m=c(Object.prototype.toString);s="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var k="From previous event:";function j(n,e){if(t&&e.stack&&"object"==typeof n&&null!==n&&n.stack){for(var r=[],o=e;o;o=o.source)o.stack&&(!n.__minimumStackCounter__||n.__minimumStackCounter__>o.stackCounter)&&(h(n,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),r.unshift(o.stack));r.unshift(n.stack);var i=function(t){for(var n=t.split("\n"),e=[],r=0;r<n.length;++r){var o=n[r];!w(o)&&(-1===(i=o).indexOf("(module.js:")&&-1===i.indexOf("(node.js:"))&&o&&e.push(o)}var i;return e.join("\n")}(r.join("\n"+k+"\n"));h(n,"stack",{value:i,configurable:!0})}}function g(t){var n=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(n)return[n[1],Number(n[2])];var e=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(e)return[e[1],Number(e[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function w(t){var n=g(t);if(!n)return!1;var o=n[0],i=n[1];return o===e&&i>=r&&i<=J}function b(){if(t)try{throw new Error}catch(t){var n=t.stack.split("\n"),r=g(n[0].indexOf("@")>0?n[1]:n[2]);if(!r)return;return e=r[0],r[1]}}function _(t){return t instanceof O?t:D(t)?(n=t,e=T(),_.nextTick(function(){try{n.then(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}}),e.promise):L(t);var n,e}_.resolve=_,_.nextTick=i,_.longStackSupport=!1;var x=1;function T(){var n,e=[],r=[],o=d(T.prototype),i=d(O.prototype);if(i.promiseDispatch=function(t,o,i){var u=a(arguments);e?(e.push(u),"when"===o&&i[1]&&r.push(i[1])):_.nextTick(function(){n.promiseDispatch.apply(n,u)})},i.valueOf=function(){if(e)return i;var t=S(n);return N(t)&&(n=t),t},i.inspect=function(){return n?n.inspect():{state:"pending"}},_.longStackSupport&&t)try{throw new Error}catch(t){i.stack=t.stack.substring(t.stack.indexOf("\n")+1),i.stackCounter=x++}function u(o){n=o,_.longStackSupport&&t&&(i.source=o),f(e,function(t,n){_.nextTick(function(){o.promiseDispatch.apply(o,n)})},void 0),e=void 0,r=void 0}return o.promise=i,o.resolve=function(t){n||u(_(t))},o.fulfill=function(t){n||u(L(t))},o.reject=function(t){n||u(F(t))},o.notify=function(t){n||f(r,function(n,e){_.nextTick(function(){e(t)})},void 0)},o}function R(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var n=T();try{t(n.resolve,n.reject,n.notify)}catch(t){n.reject(t)}return n.promise}function C(t){return R(function(n,e){for(var r=0,o=t.length;r<o;r++)_(t[r]).then(n,e)})}function O(t,n,e){void 0===n&&(n=function(t){return F(new Error("Promise does not support operation: "+t))}),void 0===e&&(e=function(){return{state:"unknown"}});var r=d(O.prototype);if(r.promiseDispatch=function(e,o,i){var u;try{u=t[o]?t[o].apply(r,i):n.call(r,o,i)}catch(t){u=F(t)}e&&e(u)},r.inspect=e,e){var o=e();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=e();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function E(t,n,e,r){return _(t).then(n,e,r)}function S(t){if(N(t)){var n=t.inspect();if("fulfilled"===n.state)return n.value}return t}function N(t){return t instanceof O}function D(t){return(n=t)===Object(n)&&"function"==typeof t.then;var n}"object"==typeof n&&n&&Object({NODE_ENV:"production"})&&Object({NODE_ENV:"production"}).Q_DEBUG&&(_.longStackSupport=!0),_.defer=T,T.prototype.makeNodeResolver=function(){var t=this;return function(n,e){n?t.reject(n):arguments.length>2?t.resolve(a(arguments,1)):t.resolve(e)}},_.Promise=R,_.promise=R,R.race=C,R.all=G,R.reject=F,R.resolve=_,_.passByCopy=function(t){return t},O.prototype.passByCopy=function(){return this},_.join=function(t,n){return _(t).join(n)},O.prototype.join=function(t){return _([this,t]).spread(function(t,n){if(t===n)return t;throw new Error("Q can't join: not the same: "+t+" "+n)})},_.race=C,O.prototype.race=function(){return this.then(_.race)},_.makePromise=O,O.prototype.toString=function(){return"[object Promise]"},O.prototype.then=function(t,n,e){var r=this,o=T(),i=!1;return _.nextTick(function(){r.promiseDispatch(function(n){i||(i=!0,o.resolve(function(n){try{return"function"==typeof t?t(n):n}catch(t){return F(t)}}(n)))},"when",[function(t){i||(i=!0,o.resolve(function(t){if("function"==typeof n){j(t,r);try{return n(t)}catch(t){return F(t)}}return F(t)}(t)))}])}),r.promiseDispatch(void 0,"when",[void 0,function(t){var n,r=!1;try{n=function(t){return"function"==typeof e?e(t):t}(t)}catch(t){if(r=!0,!_.onerror)throw t;_.onerror(t)}r||o.notify(n)}]),o.promise},_.tap=function(t,n){return _(t).tap(n)},O.prototype.tap=function(t){return t=_(t),this.then(function(n){return t.fcall(n).thenResolve(n)})},_.when=E,O.prototype.thenResolve=function(t){return this.then(function(){return t})},_.thenResolve=function(t,n){return _(t).thenResolve(n)},O.prototype.thenReject=function(t){return this.then(function(){throw t})},_.thenReject=function(t,n){return _(t).thenReject(n)},_.nearer=S,_.isPromise=N,_.isPromiseAlike=D,_.isPending=function(t){return N(t)&&"pending"===t.inspect().state},O.prototype.isPending=function(){return"pending"===this.inspect().state},_.isFulfilled=function(t){return!N(t)||"fulfilled"===t.inspect().state},O.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},_.isRejected=function(t){return N(t)&&"rejected"===t.inspect().state},O.prototype.isRejected=function(){return"rejected"===this.inspect().state};var P,$,A,M=[],Q=[],U=[],I=!0;function V(){M.length=0,Q.length=0,I||(I=!0)}function F(t){var e=O({when:function(e){return e&&function(t){if(I){var e=p(Q,t);-1!==e&&("object"==typeof n&&"function"==typeof n.emit&&_.nextTick.runAfter(function(){var r=p(U,t);-1!==r&&(n.emit("rejectionHandled",M[e],t),U.splice(r,1))}),Q.splice(e,1),M.splice(e,1))}}(this),e?e(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return function(t,e){I&&("object"==typeof n&&"function"==typeof n.emit&&_.nextTick.runAfter(function(){-1!==p(Q,t)&&(n.emit("unhandledRejection",e,t),U.push(t))}),Q.push(t),e&&void 0!==e.stack?M.push(e.stack):M.push("(no stack) "+e))}(e,t),e}function L(t){return O({when:function(){return t},get:function(n){return t[n]},set:function(n,e){t[n]=e},delete:function(n){delete t[n]},post:function(n,e){return null===n||void 0===n?t.apply(void 0,e):t[n].apply(t,e)},apply:function(n,e){return t.apply(n,e)},keys:function(){return y(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function B(t,n,e){return _(t).spread(n,e)}function q(t,n,e){return _(t).dispatch(n,e)}function G(t){return E(t,function(t){var n=0,e=T();return f(t,function(r,o,i){var u;N(o)&&"fulfilled"===(u=o.inspect()).state?t[i]=u.value:(++n,E(o,function(r){t[i]=r,0==--n&&e.resolve(t)},e.reject,function(t){e.notify({index:i,value:t})}))},void 0),0===n&&e.resolve(t),e.promise})}function H(t){if(0===t.length)return _.resolve();var n=_.defer(),e=0;return f(t,function(r,o,i){var u=t[i];e++,E(u,function(t){n.resolve(t)},function(t){if(0==--e){var r=t||new Error(""+t);r.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+r.message,n.reject(r)}},function(t){n.notify({index:i,value:t})})},void 0),n.promise}function z(t){return E(t,function(t){return t=l(t,_),E(G(l(t,function(t){return E(t,o,o)})),function(){return t})})}_.resetUnhandledRejections=V,_.getUnhandledReasons=function(){return M.slice()},_.stopUnhandledRejectionTracking=function(){V(),I=!1},V(),_.reject=F,_.fulfill=L,_.master=function(t){return O({isDef:function(){}},function(n,e){return q(t,n,e)},function(){return _(t).inspect()})},_.spread=B,O.prototype.spread=function(t,n){return this.all().then(function(n){return t.apply(void 0,n)},n)},_.async=function(t){return function(){function n(t,n){var i;if("undefined"==typeof StopIteration){try{i=e[t](n)}catch(t){return F(t)}return i.done?_(i.value):E(i.value,r,o)}try{i=e[t](n)}catch(t){return function(t){return"[object StopIteration]"===m(t)||t instanceof s}(t)?_(t.value):F(t)}return E(i,r,o)}var e=t.apply(this,arguments),r=n.bind(n,"next"),o=n.bind(n,"throw");return r()}},_.spawn=function(t){_.done(_.async(t)())},_.return=function(t){throw new s(t)},_.promised=function(t){return function(){return B([this,G(arguments)],function(n,e){return t.apply(n,e)})}},_.dispatch=q,O.prototype.dispatch=function(t,n){var e=this,r=T();return _.nextTick(function(){e.promiseDispatch(r.resolve,t,n)}),r.promise},_.get=function(t,n){return _(t).dispatch("get",[n])},O.prototype.get=function(t){return this.dispatch("get",[t])},_.set=function(t,n,e){return _(t).dispatch("set",[n,e])},O.prototype.set=function(t,n){return this.dispatch("set",[t,n])},_.del=_.delete=function(t,n){return _(t).dispatch("delete",[n])},O.prototype.del=O.prototype.delete=function(t){return this.dispatch("delete",[t])},_.mapply=_.post=function(t,n,e){return _(t).dispatch("post",[n,e])},O.prototype.mapply=O.prototype.post=function(t,n){return this.dispatch("post",[t,n])},_.send=_.mcall=_.invoke=function(t,n){return _(t).dispatch("post",[n,a(arguments,2)])},O.prototype.send=O.prototype.mcall=O.prototype.invoke=function(t){return this.dispatch("post",[t,a(arguments,1)])},_.fapply=function(t,n){return _(t).dispatch("apply",[void 0,n])},O.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},_.try=_.fcall=function(t){return _(t).dispatch("apply",[void 0,a(arguments,1)])},O.prototype.fcall=function(){return this.dispatch("apply",[void 0,a(arguments)])},_.fbind=function(t){var n=_(t),e=a(arguments,1);return function(){return n.dispatch("apply",[this,e.concat(a(arguments))])}},O.prototype.fbind=function(){var t=this,n=a(arguments);return function(){return t.dispatch("apply",[this,n.concat(a(arguments))])}},_.keys=function(t){return _(t).dispatch("keys",[])},O.prototype.keys=function(){return this.dispatch("keys",[])},_.all=G,O.prototype.all=function(){return G(this)},_.any=H,O.prototype.any=function(){return H(this)},_.allResolved=(P=z,$="allResolved",A="allSettled",function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn($+" is deprecated, use "+A+" instead.",new Error("").stack),P.apply(P,arguments)}),O.prototype.allResolved=function(){return z(this)},_.allSettled=function(t){return _(t).allSettled()},O.prototype.allSettled=function(){return this.then(function(t){return G(l(t,function(t){function n(){return t.inspect()}return(t=_(t)).then(n,n)}))})},_.fail=_.catch=function(t,n){return _(t).then(void 0,n)},O.prototype.fail=O.prototype.catch=function(t){return this.then(void 0,t)},_.progress=function(t,n){return _(t).then(void 0,void 0,n)},O.prototype.progress=function(t){return this.then(void 0,void 0,t)},_.fin=_.finally=function(t,n){return _(t).finally(n)},O.prototype.fin=O.prototype.finally=function(t){if(!t||"function"!=typeof t.apply)throw new Error("Q can't apply finally callback");return t=_(t),this.then(function(n){return t.fcall().then(function(){return n})},function(n){return t.fcall().then(function(){throw n})})},_.done=function(t,n,e,r){return _(t).done(n,e,r)},O.prototype.done=function(t,e,r){var o=function(t){_.nextTick(function(){if(j(t,i),!_.onerror)throw t;_.onerror(t)})},i=t||e||r?this.then(t,e,r):this;"object"==typeof n&&n&&n.domain&&(o=n.domain.bind(o)),i.then(void 0,o)},_.timeout=function(t,n,e){return _(t).timeout(n,e)},O.prototype.timeout=function(t,n){var e=T(),r=setTimeout(function(){n&&"string"!=typeof n||((n=new Error(n||"Timed out after "+t+" ms")).code="ETIMEDOUT"),e.reject(n)},t);return this.then(function(t){clearTimeout(r),e.resolve(t)},function(t){clearTimeout(r),e.reject(t)},e.notify),e.promise},_.delay=function(t,n){return void 0===n&&(n=t,t=void 0),_(t).delay(n)},O.prototype.delay=function(t){return this.then(function(n){var e=T();return setTimeout(function(){e.resolve(n)},t),e.promise})},_.nfapply=function(t,n){return _(t).nfapply(n)},O.prototype.nfapply=function(t){var n=T(),e=a(t);return e.push(n.makeNodeResolver()),this.fapply(e).fail(n.reject),n.promise},_.nfcall=function(t){var n=a(arguments,1);return _(t).nfapply(n)},O.prototype.nfcall=function(){var t=a(arguments),n=T();return t.push(n.makeNodeResolver()),this.fapply(t).fail(n.reject),n.promise},_.nfbind=_.denodeify=function(t){if(void 0===t)throw new Error("Q can't wrap an undefined function");var n=a(arguments,1);return function(){var e=n.concat(a(arguments)),r=T();return e.push(r.makeNodeResolver()),_(t).fapply(e).fail(r.reject),r.promise}},O.prototype.nfbind=O.prototype.denodeify=function(){var t=a(arguments);return t.unshift(this),_.denodeify.apply(void 0,t)},_.nbind=function(t,n){var e=a(arguments,2);return function(){var r=e.concat(a(arguments)),o=T();return r.push(o.makeNodeResolver()),_(function(){return t.apply(n,arguments)}).fapply(r).fail(o.reject),o.promise}},O.prototype.nbind=function(){var t=a(arguments,0);return t.unshift(this),_.nbind.apply(void 0,t)},_.nmapply=_.npost=function(t,n,e){return _(t).npost(n,e)},O.prototype.nmapply=O.prototype.npost=function(t,n){var e=a(n||[]),r=T();return e.push(r.makeNodeResolver()),this.dispatch("post",[t,e]).fail(r.reject),r.promise},_.nsend=_.nmcall=_.ninvoke=function(t,n){var e=a(arguments,2),r=T();return e.push(r.makeNodeResolver()),_(t).dispatch("post",[n,e]).fail(r.reject),r.promise},O.prototype.nsend=O.prototype.nmcall=O.prototype.ninvoke=function(t){var n=a(arguments,1),e=T();return n.push(e.makeNodeResolver()),this.dispatch("post",[t,n]).fail(e.reject),e.promise},_.nodeify=function(t,n){return _(t).nodeify(n)},O.prototype.nodeify=function(t){if(!t)return this;this.then(function(n){_.nextTick(function(){t(null,n)})},function(n){_.nextTick(function(){t(n)})})},_.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var J=b();return _})}).call(n,e("W2nU"))},AlrD:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("c2Ch"),o=(e("/Luh"),{name:"Valine",data:function(){return{listdeail:null}},watch:{$route:{handler:function(t,n){t&&(this.articledea(),this.github())},deep:!0}},methods:{articledea:function(){var t=this;Object(r.c)("deail&ids="+this.$route.params.id).then(function(n){n&&(t.listdeail=n.data,t.$store.commit("titles",n.data[0].title),console.log(t.$store.getters.title))})},github:function(){var t=this.$route.path;console.log(t),new Gitment({id:t,owner:"lvtc",repo:"vue",oauth:{client_id:"8fbef2280b8588327542",client_secret:"f03c52821ef353f0cab28524fd707d5746cf5e30"}}).render("container")}},created:function(){this.articledea()},mounted:function(){this.github(),document.querySelector(".gitment-footer-container").remove()}}),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"box",staticClass:"content"},[t._l(t.listdeail,function(n,r){return e("div",{key:r,staticClass:"deail"},[e("div",{staticClass:"titles"},[e("h1",[t._v(t._s(n.title))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"deail-icon"},[e("span",[e("i",{staticClass:"iconfont icon-iconfontyonghu"}),t._v("\n          "+t._s(n.author)+"\n        ")]),t._v(" "),e("span",[e("i",{staticClass:"iconfont icon-shijianzhou"}),t._v("\n          "+t._s(t.$times(n.time))+"\n        ")]),t._v(" "),e("span",[e("i",{staticClass:"iconfont icon-liulancishu"}),t._v("\n          "+t._s(n.ciicks)+"\n        ")]),t._v(" "),null!=n.tags?e("span",[e("i",{staticClass:"iconfont icon-biaoqian"}),t._v("\n          "+t._s(n.tags)+"\n        ")]):t._e()])]),t._v(" "),e("div",{staticClass:"details",domProps:{innerHTML:t._s(n.content)}},[t._v(t._s(n.content))])])}),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"deail"},[n("div",{staticStyle:{"border-top":"2px solid #eaecef","padding-top":"1rem","margin-top":"2rem"}},[n("div",{attrs:{id:"container"}})])])}]};var u=e("VU/8")(o,i,!1,function(t){e("O7mM")},"data-v-c37093d2",null);n.default=u.exports},O7mM:function(t,n){}});