(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbuttons {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n/**\n * Sidebar CSS\n */\n\n#sidebar {\n  background-color: #2196f3;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n/**\n * Content CSS\n */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n\n.floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n\n.modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n\n.modal > h1 {\n  text-align: center;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}\n\n.error {\n  color: red;\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){return e.length>=10}function t(e,t){const n=document.createElement("div");n.classList.add("modal");const r=`\n    <h1>${e}</h1>\n    <div class="modal-content">${t}</div>\n  `;n.innerHTML=r,mui.overlay("on",n)}class r{static create(e){return fetch("https://podcast-krbln-default-rtdb.firebaseio.com/questoins.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.id=t.name,e))).then(o).then(r.renderList())}static fetch(e){return e?fetch(`https://podcast-krbln-default-rtdb.firebaseio.com/questoins.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=i(),t=e.length?e.map(a).join(""):'<div class="mui--text-headline">Вы еще ничего не спрашивали</div>';document.getElementById("list").innerHTML=t}static listToHTML(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function o(e){const t=i();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(e){return`\n  <div class="mui--text-black-54">\n    ${new Date(e.date).toLocaleDateString()} \n    ${new Date(e.date).toLocaleTimeString()}\n  </div>\n  <div>${e.text}</div>\n  <br>\n  `}var s=n(379),c=n.n(s),d=n(795),l=n.n(d),u=n(569),p=n.n(u),f=n(565),m=n.n(f),h=n(216),v=n.n(h),b=n(589),y=n.n(b),g=n(426),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),c()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S["question-input"],L=S.button;function E(e){e.preventDefault();const t=e.target.querySelector("button"),n=e.target.querySelector("#email").value,o=e.target.querySelector("#password").value;t.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCkHiefc278JrmlOjsq058leShlULN0Sc",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(n,o).then(r.fetch).then(j).then((()=>t.disabled=!1))}function j(e){"string"==typeof e?t("Ошибка",e):t("Список вопросов",r.listToHTML(e))}window.addEventListener("load",r.renderList),S.addEventListener("submit",(function(t){if(t.preventDefault(),e(T.value)){const e={text:T.value.trim(),date:(new Date).toJSON()};L.disabled=!0,r.create(e).then((()=>{T.value="",T.className="mui--is-empty",L.disabled=!1})).then((()=>{r.renderList()}))}})),w.addEventListener("click",(function(){t("Авторизация",'\n    <form class="mui-form" id="form-auth">\n      <div class="mui-textfield mui-textfield--float-label">\n        <input id="email" type="email" required>\n        <label for="email">E-mail</label>\n      </div>\n      <div class="mui-textfield mui-textfield--float-label">\n        <input id="password" type="password" required>\n        <label for="password">Пароль</label>\n      </div>\n      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>\n    </form>\n  '),document.getElementById("form-auth").addEventListener("submit",E,{once:!0})})),T.addEventListener("input",(()=>{L.disabled=!e(T.value)}))})()})();