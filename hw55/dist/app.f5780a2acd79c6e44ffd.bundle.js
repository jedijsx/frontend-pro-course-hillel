/*! For license information please see app.f5780a2acd79c6e44ffd.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={100:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,"body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,dl,dd,ol,ul,figure,form,fieldset,legend,label,input,textarea,button,th,td{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1.5}body,button,input,select,textarea{font-family:sans-serif}img{vertical-align:middle}button,input,select,textarea{font-size:100%;vertical-align:baseline}button,input,optgroup,select,textarea{cursor:pointer}a{text-decoration:none}ol,ul{list-style:none}*,*::after,*::before{box-sizing:inherit}body{background-color:#fff}.container{height:100vh;max-width:1280px;margin:0 auto;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;padding-top:64px}.container-title{margin-bottom:16px;color:#9370db;font-size:14px}.list-item{font-weight:bolder;padding:4px 16px}.list-item:hover{background-color:#9370db;color:#fff;border-radius:16px}.shop{width:1000px;display:flex;justify-content:space-between;padding:8px}.container-categories{width:160px;height:400px;padding:4px}.container-products{width:580px;padding:4px;display:flex;justify-content:flex-start;align-content:flex-start;flex-wrap:wrap;gap:8px}.container-info{width:220px;padding:4px}.product{width:180px;background-color:#fff;padding:8px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;border-radius:16px;border:1px solid #f2f2f2}.product-info{border:1px solid #9acd32}img{width:100%;height:auto}button{background-color:#9acd32;color:#fff}.title{font-weight:bolder}.description{font-size:13px}.btn{border:none;color:#fff;text-transform:uppercase;font-size:12px;padding:16px 48px;font-weight:bolder;border-radius:24px}[data-action=info]{background-color:#9370db}[data-action=buy]{background-color:#9acd32}.hide{display:none}.info{width:200px;height:460px;padding:24px;background-color:#fff;border:none}.price{color:green;font-weight:bolder}form{display:flex;flex-direction:column;gap:8px}form>*{border:2px solid #9acd32;border-radius:4px;padding:8px}.order-container{display:flex;flex-direction:column;gap:8px;margin-top:48px;padding:48px;background-color:#fcfce4;border-radius:8px}.order-title{font-size:18px}.order-title-header{font-weight:bolder}",""]);const c=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var p=0;p<t.length;p++){var s=[].concat(t[p]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],p=r.base?u[0]+r.base:u[0],s=i[p]||0,l="".concat(p," ").concat(s);i[p]=s+1;var d=n(l),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),p=0;p<i.length;p++){var s=n(i[p]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=u}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t={smartphones:[{title:"Apple",description:"Dynamic Island.For when things just pop up.",price:"$1600",src:"../img/product2.png"},{title:"Samsung",description:"Dynamic Island.For when things just pop up.",price:"$899",src:"../img/product3.png"},{title:"Google",description:"Dynamic Island.For when things just pop up.",price:"$899",src:"../img/product7.png"},{title:"Xiaomi",description:"Dynamic Island.For when things just pop up.",price:"$400",src:"../img/product8.png"},{title:"Asus",description:"Dynamic Island.For when things just pop up.",price:"$515",src:"../img/product6.png"},{title:"Motorola",description:"Dynamic Island.For when things just pop up.",price:"$600",src:"../img/product4.png"}],tablets:[{title:"Microsoft",description:"Dynamic Island.For when things just pop up.",price:"$360",src:"../img/product5.png"}],watches:[{title:"Garmin",description:"Dynamic Island.For when things just pop up.",price:"$1500",src:"../img/product1.png"}]},e=function(t,e,n,r){var o=document.createElement(t);return e&&e.split(" ").forEach((function(t){return o.classList.add(t)})),n&&(o.innerText=n),r&&(o.dataset.action=r),o},r=function(t,n,r){var o=e("button",t,n);return r&&(o.dataset.action=r),o},o=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)};var i=n(72),a=n.n(i),c=n(825),u=n.n(c),p=n(659),s=n.n(p),l=n(56),d=n.n(l),f=n(540),h=n.n(f),y=n(113),g=n.n(y),m=n(100),v={};function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function x(){x=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new F(r||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",y="completed",g={};function m(){}function v(){}function w(){}var L={};p(L,a,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(N([])));j&&j!==n&&r.call(j,a)&&(L=j);var S=w.prototype=m.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var p=u.arg,s=p.value;return s&&"object"==b(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){p.value=t,a(p)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,n,r){var o=d;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=I(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var p=l(e,n,r);if("normal"===p.type){if(o=r.done?y:f,p.arg===g)continue;return{value:p.arg,done:r.done}}"throw"===p.type&&(o=y,r.method="throw",r.arg=p.arg)}}}function I(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=l(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(b(e)+" is not iterable")}return v.prototype=w,o(S,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=p(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,p(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},k(O.prototype),p(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(S),p(S,u,"Generator"),p(S,a,(function(){return this})),p(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),p=r.call(a,"finallyLoc");if(u&&p){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!p)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function w(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}v.styleTagTransform=g(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=h(),a()(m.A,v),m.A&&m.A.locals&&m.A.locals;var L=document.querySelector(".shop"),E=document.querySelector(".container-products"),j=document.querySelector(".container-info"),S=document.querySelector(".order-info"),k=function(n){o(E),o(j),o(S),t[n].forEach((function(t){E.append(function(t){var n=e("div","product"),o=e("img"),i=e("p","description hide",t.description),a=e("p","title",t.title),c=e("p","price",t.price),u=r("btn","Info","info"),p=r("btn hide","Buy","buy");return o.src=t.src,n.appendChild(o),n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(u),n.appendChild(p),n}(t))}))},O={"open-smartphones":function(){return k("smartphones")},"open-tablets":function(){return k("tablets")},"open-watches":function(){return k("watches")},info:function(){return function(){o(j);var t=event.target.closest(".product").cloneNode(!0);t.querySelectorAll(".hide").forEach((function(t){t.classList.remove("hide")})),t.querySelector('button[data-action="info"]').classList.add("hide"),t.classList.add("product-info"),j.appendChild(t)}()},buy:function(){return(t=document.createElement("form")).innerHTML='\n    <input type="text" name="fullName" placeholder="ПІБ" required>\n    <select name="city" required>\n      <option value="">Куди відправляємо?</option>\n      <option value="Київ">Київ</option>\n      <option value="Харків">Харків</option>\n    </select>\n    <input type="text" name="postOffice" placeholder="Склад Нової пошти" required>\n    <select name="paymentMethod" required>\n      <option value="">Виберіть спосіб оплати</option>\n      <option value="card">Банківська картка</option>\n      <option value="cash">Післяплата</option>\n      <option value="fop">Реквізити ФОП</option>\n    </select>\n    <input type="number" name="quantity" min="1" placeholder="Кількість" required>\n    <textarea name="comment" placeholder="Коментар до замовлення"></textarea>\n    <button type="submit">Підтвердити замовлення</button>\n  ',t.addEventListener("submit",(function(e){e.preventDefault();var n=new FormData(t),r='\n    <div class="order-container">\n      <p class="order-title-header">Інформація про замовлення</p>\n      <p class="order-title">ПІБ: '.concat(n.get("fullName"),'</p>\n      <p class="order-title">Місто: ').concat(n.get("city"),'</p>\n      <p class="order-title">Склад Нової пошти: ').concat(n.get("postOffice"),'</p>\n      <p class="order-title">Спосіб оплати: ').concat(n.get("paymentMethod"),'</p>\n      <p class="order-title">Кількість: ').concat(n.get("quantity"),'</p>\n      <p class="order-title">Коментар: ').concat(n.get("comment"),"</p>\n    </div>\n    ");S.innerHTML=r,o(j)})),void S.appendChild(t);var t}};function C(){var t;return t=x().mark((function t(){var e;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(JSON.stringify({a:1,b:2}));case 2:e=t.sent,console.log(e,"payload");case 4:case"end":return t.stop()}}),t)})),C=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){w(i,r,o,a,c,"next",t)}function c(t){w(i,r,o,a,c,"throw",t)}a(void 0)}))},C.apply(this,arguments)}L.addEventListener("click",(function(t){var e=t.target.dataset.action;"function"==typeof O[e]&&O[e]()})),function(){C.apply(this,arguments)}()})()})();