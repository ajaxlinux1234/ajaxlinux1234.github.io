"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[128],{52007:function(I,d,r){r.r(d),r.d(d,{camelToDash:function(){return p},createElement:function(){return L},createElementMap:function(){return y},fileToBlob:function(){return E},fileToBlobUrl:function(){return R},getAllAttributes:function(){return h},getFileName:function(){return C},getSuffix:function(){return M},nodeToString:function(){return B},objToString:function(){return v}});var D=r(25359),c=r.n(D),j=r(49811),T=r.n(j),x=r(37635),m=r.n(x),O=r(93525),b=r.n(O),U=r(57213),f=r.n(U),A=r(54306),g=r.n(A),P=r(17607),M=function(e){var n;return((n=/[^.]*$/g.exec(e))===null||n===void 0?void 0:n[0])||""},C=function(e){var n;return((n=/[^/]*$/g.exec(e))===null||n===void 0?void 0:n[0])||""},L=function u(e){if(typeof e=="string")return document.createTextNode(e);var n=document.createElement(e.type),_=(0,P.Z)(e,["type","children"]);if(Object.entries(_).forEach(function(o){var a=g()(o,2),i=a[0],l=a[1];n.setAttribute(i,v(l))}),e.children){var t=e.children.map(function(o){return u(o)});t.forEach(function(o){return n.appendChild(o)})}return n},y=function u(e){if(!(e instanceof HTMLElement))return{type:"span"};var n=e.tagName.toLocaleLowerCase(),_=h(e),t=e.children;return f()(f()({type:n},_),{},{children:t.length?b()(t).map(function(o){return u(o)}):[e.innerText]})},h=function(e){var n=b()(e.attributes).map(function(_){return _.name});return Object.fromEntries(n.map(function(_){return[_,e.getAttribute(_)]}))},v=function(e){return m()(e)!=="object"?e:Object.entries(e).map(function(n){var _=g()(n,2),t=_[0],o=_[1];return"".concat(p(t),":").concat(o,";")}).join("")};function p(u){return u.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}var B=function(e){if(typeof e=="string")return e;var n=document.createElement("div");return n.appendChild(e),n.innerHTML};function E(u){var e=new FileReader;return new Promise(function(n){e.addEventListener("load",function(_){var t,o,a;if(m()((t=_.target)===null||t===void 0?void 0:t.result)==="object"&&(o=_.target)!==null&&o!==void 0&&o.result){var i;a=new Blob([(i=_.target)===null||i===void 0?void 0:i.result])}else{var l;a=(l=_.target)===null||l===void 0?void 0:l.result}n(a)}),e.readAsArrayBuffer(u)})}function R(u){return s.apply(this,arguments)}function s(){return s=T()(c()().mark(function u(e){var n;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:return n=t.sent,t.abrupt("return",URL.createObjectURL(n));case 4:case"end":return t.stop()}},u)})),s.apply(this,arguments)}}}]);
