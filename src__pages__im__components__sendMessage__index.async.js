"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[681,521,128],{24552:function(H,v,e){e.r(v),e.d(v,{default:function(){return nn}});var U=e(54306),f=e.n(U),x=e(12342),p=e.n(x),T=e(57213),y=e.n(T),c=e(93236),B=e(17607),L=e(66466),g=e(22018),K=e(22978),M=e(48721),I=e(61793),W=e(85108),F=e(6420),N=e(79766),X=e(93900),Z=e(80382),V=e(66680),G=e(88825),S={editor:"editor___AcobX",emojiBox:"emojiBox___OCwv_",count:"count___gjETG",counterOverLimit:"counterOverLimit___m7ZyI",emoji:"emoji___kcUix"},R={mention:"mention___e08UF",mentionSuggestions:"mentionSuggestions___xV0Oy",mentionSuggestionsEntryContainer:"mentionSuggestionsEntryContainer___RS_bu",mentionSuggestionsEntryContainerLeft:"mentionSuggestionsEntryContainerLeft___Obkfm",mentionSuggestionsEntryContainerRight:"mentionSuggestionsEntryContainerRight___aAbxo",mentionSuggestionsEntry:"mentionSuggestionsEntry___c0x64",mentionSuggestionsEntryFocused:"mentionSuggestionsEntryFocused___jKUAV",mentionSuggestionsEntryText:"mentionSuggestionsEntryText___uC5ih",mentionSuggestionsEntryTitle:"mentionSuggestionsEntryTitle___feT0M",mentionSuggestionsEntryAvatar:"mentionSuggestionsEntryAvatar___ar8FJ"},$=e(52007),C=e(87848),r=e(12881),n=e(62086),t=["mention","theme","searchValue","isFocused"],o=(0,I.Z)({useNativeArt:!0,positionSuggestions:function(){return{top:"10px"}}}),i=(0,W.Z)(),l=o.EmojiSuggestions,h=o.EmojiSelect,j=(0,F.Z)({component:function(m){var u=m.href,D=(0,B.Z)(m,["className"]);return(0,n.jsx)("a",y()(y()({},D),{},{style:{color:"#5e93c5",textDecoration:"none"},onClick:function(){return window.open(u,"_blank")}}))}}),E=(0,N.Z)({theme:{counter:S.counter,counterOverLimit:S.counterOverLimit}}),k=E.CharCounter,jn=g.KeyBindingUtil.hasCommandModifier;function w(d){return d.code==="KeyZ"?"undo":d.keyCode===13&&!d.shiftKey?"send-msg":(0,g.getDefaultKeyBinding)(d)}function q(d){var m=d.mention,u=d.theme,D=d.searchValue,O=d.isFocused,P=p()(d,t);return(0,n.jsx)("div",y()(y()({},P),{},{children:(0,n.jsx)("div",{className:u==null?void 0:u.mentionSuggestionsEntryContainer,children:(0,n.jsxs)("div",{className:u==null?void 0:u.mentionSuggestionsEntryContainerRight,children:[(0,n.jsx)("div",{className:u==null?void 0:u.mentionSuggestionsEntryText,children:m.name}),(0,n.jsx)("div",{className:u==null?void 0:u.mentionSuggestionsEntryTitle,children:m.title})]})})}))}function nn(d){var m=(0,c.useRef)(null),u=(0,c.useState)(function(){return g.EditorState.createEmpty()}),D=f()(u,2),O=D[0],P=D[1],en=(0,c.useState)(!1),z=f()(en,2),tn=z[0],on=z[1],rn=(0,L.tT)("im.member"),J=rn.members,sn=(0,L.tT)("im.message"),un=sn.setMessages,an=(0,c.useState)(J),Q=f()(an,2),ln=Q[0],_n=Q[1],Y=(0,c.useMemo)(function(){var a=(0,M.ZP)({entityMutability:"IMMUTABLE",theme:R,mentionPrefix:"@",supportWhitespace:!0}),s=a.MentionSuggestions,_=[a,o,i,j,E];return{plugins:_,MentionSuggestions:s}},[]),dn=Y.MentionSuggestions,mn=Y.plugins,cn=(0,c.useCallback)(function(a){P(a)},[]),gn=(0,c.useCallback)(function(a){on(a)},[]),vn=(0,c.useCallback)(function(a){var s=a.value;_n((0,M.zk)(s,J))},[]),fn=function(){var s=g.EditorState.createEmpty();P(s),setTimeout(function(){var _,b;(_=m.current)===null||_===void 0||_.blur(),(b=m.current)===null||b===void 0||b.focus()})},hn=function(){var s,_;if((s=m.current.editor.editor)!==null&&s!==void 0&&s.firstChild){var b=(0,$.createElementMap)((_=m.current.editor.editor)===null||_===void 0?void 0:_.firstChild);un({type:C.MessageType.RICHTEXT,uuid:(0,r.Z)(),sendId:"2",send:"\u674E\u56DB",message:[b],createTime:+new Date,sendType:C.SendType.OUT}),fn(),setTimeout(function(){var A;(A=d.messageRef)===null||A===void 0||A.scrollTo({top:9999999999999,behavior:"smooth"})})}},En=function(s){var _=O.getCurrentContent(),b=_.createEntity("IMAGE","IMMUTABLE",{src:s}),A=b.getLastCreatedEntityKey(),Sn=g.EditorState.set(O,{currentContent:b});return g.AtomicBlockUtils.insertAtomicBlock(Sn,A," ")},bn=function(s){var _=URL.createObjectURL(new Blob(s));P(En(_))},yn=function(s){return s==="send-msg"?(hn(),"handled"):"not-handled"};return(0,n.jsxs)("div",{className:S.editor,onClick:function(){m.current.focus()},children:[(0,n.jsx)("div",{className:S.emojiBox,children:(0,n.jsx)(h,{})}),(0,n.jsx)(K.ZP,{editorKey:"editor",editorState:O,onChange:cn,plugins:mn,ref:m,keyBindingFn:w,handleKeyCommand:yn,handlePastedFiles:bn}),(0,n.jsxs)("span",{className:S.count,children:[(0,n.jsx)(k,{limit:2e4}),"/20000"]}),(0,n.jsx)(l,{}),(0,n.jsx)(dn,{open:tn,onOpenChange:gn,suggestions:ln,onSearchChange:vn,onAddMention:function(){},entryComponent:q,popoverContainer:function(s){var _=s.children;return(0,n.jsx)("div",{style:{minWidth:"100px",position:"absolute"},children:_})}})]})}},21716:function(H,v,e){e.r(v),e.d(v,{default:function(){return p}});var U=e(93236),f=e(24552),x=e(62086);function p(T){return(0,x.jsx)(f.default,{messageRef:T.messageRef})}},52007:function(H,v,e){e.r(v),e.d(v,{camelToDash:function(){return G},createElement:function(){return N},createElementMap:function(){return X},fileToBlob:function(){return R},fileToBlobUrl:function(){return $},getAllAttributes:function(){return Z},getFileName:function(){return F},getSuffix:function(){return W},nodeToString:function(){return S},objToString:function(){return V}});var U=e(25359),f=e.n(U),x=e(49811),p=e.n(x),T=e(37635),y=e.n(T),c=e(93525),B=e.n(c),L=e(57213),g=e.n(L),K=e(54306),M=e.n(K),I=e(17607),W=function(n){var t;return((t=/[^.]*$/g.exec(n))===null||t===void 0?void 0:t[0])||""},F=function(n){var t;return((t=/[^/]*(?=\?)/g.exec(n)||/[^/]*$/g.exec(n))===null||t===void 0?void 0:t[0])||""},N=function r(n){if(typeof n=="string")return document.createTextNode(n);var t=document.createElement(n.type),o=(0,I.Z)(n,["type","children"]);if(Object.entries(o).forEach(function(l){var h=M()(l,2),j=h[0],E=h[1];t.setAttribute(j,V(E))}),n.children){var i=n.children.map(function(l){return r(l)});i.forEach(function(l){return t.appendChild(l)})}return t},X=function r(n){if(!(n instanceof HTMLElement))return{type:"span"};var t=n.tagName.toLocaleLowerCase(),o=Z(n),i=n.children;return g()(g()({type:t},o),{},{children:i.length?B()(i).map(function(l){return r(l)}):[n.innerText]})},Z=function(n){var t=B()(n.attributes).map(function(o){return o.name});return Object.fromEntries(t.map(function(o){return[o,n.getAttribute(o)]}))},V=function(n){return y()(n)!=="object"?n:Object.entries(n).map(function(t){var o=M()(t,2),i=o[0],l=o[1];return"".concat(G(i),":").concat(l,";")}).join("")};function G(r){return r.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()})}var S=function(n){if(typeof n=="string")return n;var t=document.createElement("div");return t.appendChild(n),t.innerHTML};function R(r){var n=new FileReader;return new Promise(function(t){n.addEventListener("load",function(o){var i,l,h;if(y()((i=o.target)===null||i===void 0?void 0:i.result)==="object"&&(l=o.target)!==null&&l!==void 0&&l.result){var j;h=new Blob([(j=o.target)===null||j===void 0?void 0:j.result])}else{var E;h=(E=o.target)===null||E===void 0?void 0:E.result}t(h)}),n.readAsArrayBuffer(r)})}function $(r){return C.apply(this,arguments)}function C(){return C=p()(f()().mark(function r(n){var t;return f()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,R(n);case 2:return t=i.sent,i.abrupt("return",URL.createObjectURL(t));case 4:case"end":return i.stop()}},r)})),C.apply(this,arguments)}}}]);
