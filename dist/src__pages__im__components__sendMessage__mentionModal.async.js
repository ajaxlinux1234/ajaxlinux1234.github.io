"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[364],{15621:function(H,d,t){t.r(d),t.d(d,{default:function(){return C}});var M=t(54306),i=t.n(M),a=t(93236),g=t(52473),l={"mention-modal":"mention-modal___lKEs6"},u=t(62086);function C(s){var x=(0,a.useState)(""),c=i()(x,2),y=c[0],j=c[1],p=(0,a.useState)(""),m=i()(p,2),E=m[0],L=m[1],A=(0,a.useState)(""),f=i()(A,2),r=f[0],K=f[1],N=(0,a.useState)([{id:"a",name:"\u5F20\u4E09"},{id:"b",name:"\u674E\u56DB"},{id:"c",name:"\u5C0F\u660E"},{id:"d",name:"\u5C0F\u674E"},{id:"e",name:"\u5C0F\u7EA2"}]),R=i()(N,1),v=R[0],S=(0,a.useMemo)(function(){var e=r.trim().toLowerCase();return v.filter(function(n){var o=n.name.toLowerCase();return o.indexOf(e)>=0})},[r,v]);(0,a.useEffect)(function(){var e=document.getSelection(),n=e==null?void 0:e.getRangeAt(0);if(n!=null){var o=n.getBoundingClientRect();j("".concat(o.top+20,"px")),L("".concat(o.left+5,"px"))}},[]);function T(e){if(e.key==="Escape"&&s.hideMentionModal(),e.key==="Enter"){var n=S[0];if(n){var o=n.id,k=n.name;h(o,k)}}}function h(e,n){s.insertMention(e,n),s.hideMentionModal()}return(0,u.jsxs)("div",{className:l["mention-modal"],style:{top:y,left:E},children:[(0,u.jsx)(g.Z,{className:l["mention-input"],value:r,onChange:function(n){return K(n.target.value)},autoFocus:!0,onKeyUp:T}),(0,u.jsx)("ul",{className:l["mention-list"],children:S.map(function(e){return(0,u.jsx)("li",{onClick:function(){return h(e.id,e.name)},children:e.name},e.id)})})]})}}}]);
