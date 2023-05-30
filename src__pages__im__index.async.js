"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[704,975,619,647,839],{22833:function(c,s,e){e.r(s),e.d(s,{default:function(){return y}});var n=e(52510),d=e.n(n),i=e(84875),t=e.n(i),f={avatar:"avatar___V3O9H"},j=e(62086),h;(function(u){u.CIRCLE="circle",u.SQUARE="square"})(h||(h={}));function y(u){var T=u.info.shape===h.SQUARE,l=t()({"h-8":!0,"w-8":!0,"min-w-max":!0}),M=t()(d()({"h-full w-8 bg-sky-400 content-center":!0,rounded:T,"rounded-full":!T},f.avatar,!0));if(u.info.avatar)return(0,j.jsx)("div",{className:l,children:(0,j.jsx)("img",{className:"h-full w-full",src:u.info.avatar})});var m=(u.info.nickname||u.info.name)[0];return(0,j.jsx)("div",{className:l,children:(0,j.jsx)("div",{className:M,children:m})})}},83773:function(c,s,e){e.r(s),e.d(s,{IN:function(){return n}});var n="in"},80038:function(c,s,e){e.r(s),e.d(s,{default:function(){return T}});var n=e(52510),d=e.n(n),i=e(84875),t=e.n(i),f={box:"box___k83VP",msgBox:"msgBox___CLTFk",in:"in___FxKfJ",out:"out___dQC37",system:"system___fGfxg",systemText:"systemText___emM3a"},j=e(87848),h=e(83773),y=e(22833),u=e(62086);function T(l){var M;if(l.message.type===j.MessageType.SYSTEM)return typeof l.message.message!="string"?null:(0,u.jsx)("div",{className:f.system,children:(0,u.jsx)("div",{className:f.systemText,children:l.message.message})});var m=l.message.sendType===h.IN,r=t()((M={},d()(M,f.in,m),d()(M,f.out,!m),d()(M,f.box,!0),M)),z=t()({"flex flex-col":!0,"ml-2":m,"mr-2":!m}),P=t()({"text-xs text-gray-300":!0,"text-right":!m}),o=l.member.nickname||l.member.name;return(0,u.jsxs)("div",{className:r,children:[(0,u.jsx)(y.default,{info:l.member}),(0,u.jsxs)("div",{className:z,children:[(0,u.jsx)("p",{className:P,children:o}),(0,u.jsx)("p",{className:f.msgBox,children:l.children})]})]})}},87848:function(c,s,e){e.r(s),e.d(s,{MessageType:function(){return n},SendType:function(){return d}});var n;(function(i){i.TEXT="text",i.VOICE="voice",i.VIDEO="video",i.FILE="file",i.RICHTEXT="richtext",i.ROBOT="robot",i.QUOTE="quote",i.SYSTEM="system"})(n||(n={}));var d;(function(i){i.IN="in",i.OUT="out"})(d||(d={}))},31420:function(c,s,e){e.r(s),e.d(s,{default:function(){return M}});var n=e(21627),d=e(80038),i=e(23336),t=e(93588),f=e(94338),j=e(98857),h=e(79872),y=e(84544),u=e(74229),T=e(61002),l=e(62086);function M(m){return(0,n.Z)(m.list,"length")?(0,l.jsx)("div",{className:"p-4",children:m.list.map(function(r){var z=m.members.find(function(P){return P.id===r.sendId})||{id:String(+new Date),name:""};return(0,l.jsx)(d.default,{member:z,message:r,children:{system:(0,l.jsx)(i.default,{message:r}),text:(0,l.jsx)(t.default,{message:r}),voice:(0,l.jsx)(f.default,{message:r}),video:(0,l.jsx)(j.default,{message:r}),file:(0,l.jsx)(h.default,{message:r}),robot:(0,l.jsx)(y.default,{message:r}),richtext:(0,l.jsx)(u.default,{message:r}),quote:(0,l.jsx)(T.default,{message:r})}[r.type]},r.uuid)})}):null}},79872:function(c,s,e){e.r(s),e.d(s,{default:function(){return j}});var n=e(62086),d=function(){return(0,n.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15887",width:"200",height:"200",children:[(0,n.jsx)("path",{d:"M292.921 805.631h293.314v-397.16h-68.698v328.426H292.921z",fill:"#BD3C20","p-id":"15888"}),(0,n.jsx)("path",{d:"M728.455 64.223H224.078v251.432h68.699V132.957h378.91v187.609h186.951v569.259H292.777V678.449h-68.699v280.11h703.259V256.311z",fill:"#819292","p-id":"15889"}),(0,n.jsx)("path",{d:"M660.375 418.082h129.24v67.016h-129.24zM660.375 577.919h129.24v67.016h-129.24zM660.375 737.756h129.24v67.016h-129.24z",fill:"#819292","p-id":"15890"}),(0,n.jsx)("path",{d:"M225.642 428.656h114.832v53.005H225.642z",fill:"#BD3C20","p-id":"15891"}),(0,n.jsx)("path",{d:"M460.614 678.449V315.655H98.004v362.794h362.61zM220.823 541.803v83.383h-60.447V368.512h60.447v0.002h128.654c28.181 0 51.108 24.427 51.108 54.452v64.386c0 30.025-22.927 54.452-51.108 54.452H220.823z",fill:"#BD3C20","p-id":"15892"}),(0,n.jsx)("path",{d:"M349.477 541.803c28.181 0 51.108-24.427 51.108-54.452v-64.386c0-30.025-22.927-54.452-51.108-54.452H220.823v-0.002h-60.447v256.674h60.447v-83.383h128.654zM225.642 428.656h114.832v53.005H225.642v-53.005z",fill:"#FFFFFF","p-id":"15893"})]})},i=function(){return _jsxs("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16040",width:"200",height:"200",children:[_jsx("path",{d:"M727.949 64.223H223.977v250.866h68.644V132.802h378.605v187.187h186.801v567.978H292.621V677.066h-68.644v279.48H926.67V255.879z",fill:"#819292","p-id":"16041"}),_jsx("path",{d:"M659.923 417.285h129.136v66.865H659.923zM659.923 576.763h129.136v66.865H659.923zM659.923 736.24h129.136v66.865H659.923z",fill:"#819292","p-id":"16042"}),_jsx("path",{d:"M292.765 803.962h293.078V407.696h-68.644v327.687H292.765z",fill:"#287CB0","p-id":"16043"}),_jsx("path",{d:"M460.322 677.066V315.089H98.004v361.977h362.318z m-239.598-53.143l-0.335-0.335v0.741h-60.063V367.827h60.063v159.446l58.178-58.123 0.254 0.254 1.112-1.111 58.005 57.95V367.827h60.063v255.644h-60.063v-0.568l-0.162 0.162-58.097-58.042-58.955 58.9z",fill:"#287CB0","p-id":"16044"}),_jsx("path",{d:"M337.775 623.065l0.163-0.162v0.568h60.063V367.827h-60.063v158.416l-58.005-57.951-1.112 1.112-0.255-0.254-58.177 58.122V367.827h-60.063v256.501h60.063v-0.74l0.335 0.335 58.955-58.899z",fill:"#FFFFFF","p-id":"16045"})]})},t=function(){return _jsxs("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16192",width:"200",height:"200",children:[_jsx("path",{d:"M292.887 806.826H586.15V408.445h-68.687v329.436H292.887z",fill:"#DE5934","p-id":"16193"}),_jsx("path",{d:"M728.345 63.14H224.056v252.205h68.687v-183.26h378.844V320.27h186.917v571.008H292.743V679.252h-68.687v280.971h703.135V255.819z",fill:"#819292","p-id":"16194"}),_jsx("path",{d:"M660.276 418.086h129.217v67.221H660.276zM660.276 578.414h129.217v67.221H660.276zM660.276 738.742h129.217v67.221H660.276z",fill:"#819292","p-id":"16195"}),_jsx("path",{d:"M153.415 615.473c-0.071 0.868-0.191 2.319 3.378 4.31 1.85 1.032 3.838 1.533 6.079 1.533 15.83 0 40.741-23.869 63.986-60.169-44.866 19.745-72.561 43.601-73.443 54.326z",fill:"#DE5934","p-id":"16196"}),_jsx("path",{d:"M460.55 679.252V315.345H98.004v363.908H460.55z m-297.678-40.7c-5.163 0-10.015-1.246-14.419-3.702-11.532-6.432-12.563-15.789-12.151-20.794 2.166-26.339 53.854-58.453 104.834-77.227 13.764-25.553 24.693-52.454 31.088-76.504-12.704-18.632-22.722-35.513-29.066-48.992-8.791-18.678-10.874-31.236-6.555-39.518 1.741-3.338 6.166-8.937 16.249-8.937 2.853 0 5.944 0.434 9.449 1.328 11.783 3.003 26.864 11.759 31.802 36.421 3.003 14.994 1.881 33.92-3.331 56.301 14.28 20.406 31.117 42.029 47.932 61.552 38.823 1.538 65.211 17.411 76.433 46.054l0.218 0.557 0.139 0.582c2.753 11.489 2.225 18.85-1.712 23.868-2.57 3.276-6.405 5.082-10.799 5.084h-0.013c-5.375 0-14.008-2.177-33.201-19.101-11.241-9.913-24.665-23.669-38.967-39.924-22.839 0.226-49.629 5.489-77.775 15.272-13.471 23.998-52.774 87.68-90.155 87.68z",fill:"#DE5934","p-id":"16197"}),_jsx("path",{d:"M399.969 576.394c-0.118-1.42-0.407-3.402-1.031-6.105-6.997-17.321-21.427-28.222-43.023-32.557 23.996 25.761 37.925 35.748 44.054 38.662zM316.391 519.054l-0.843-0.968 0.322 0.004a829 829 0 0 1-30.537-39.219l-0.082 0.328-0.467-0.675c-5.15 16.154-11.97 33.114-20.043 49.84l0.824-0.295-0.493 0.897c15.32-4.419 33.101-8.361 51.319-9.912zM258.075 380.911c-2.076-0.529-3.834-0.797-5.224-0.797-0.526 0-0.897 0.04-1.143 0.082-0.307 1.494-0.686 7.583 7.124 24.088 4.357 9.208 10.593 20.192 18.342 32.345 3.422-23.549 2.201-50.289-19.099-55.718z",fill:"#DE5934","p-id":"16198"}),_jsx("path",{d:"M330.803 535.599c14.302 16.256 27.726 30.012 38.967 39.924 19.193 16.924 27.826 19.101 33.201 19.101h0.013c4.394-0.003 8.228-1.809 10.799-5.084 3.937-5.019 4.465-12.379 1.712-23.868l-0.139-0.582-0.218-0.557c-11.222-28.643-37.61-44.516-76.433-46.054-16.815-19.524-33.652-41.146-47.932-61.552 5.212-22.381 6.334-41.307 3.331-56.301-4.938-24.661-20.02-33.418-31.802-36.421-3.505-0.893-6.596-1.328-9.449-1.328-10.083 0-14.508 5.599-16.249 8.937-4.318 8.282-2.236 20.84 6.555 39.518 6.344 13.479 16.362 30.361 29.066 48.992-6.395 24.049-17.324 50.95-31.088 76.504-50.98 18.774-102.668 50.888-104.834 77.227-0.412 5.005 0.62 14.362 12.151 20.794 4.405 2.457 9.256 3.702 14.419 3.702 37.381 0 76.684-63.682 90.157-87.681 28.145-9.782 54.934-15.045 77.773-15.271z m68.134 34.69c0.624 2.703 0.913 4.685 1.031 6.105-6.129-2.914-20.057-12.901-44.055-38.662 21.597 4.335 36.028 15.236 43.024 32.557z m-236.065 51.026c-2.241 0-4.23-0.501-6.079-1.533-3.569-1.99-3.449-3.442-3.378-4.31 0.882-10.725 28.577-34.581 73.443-54.326-23.245 36.3-48.156 60.169-63.986 60.169z m95.96-217.031c-7.81-16.505-7.431-22.594-7.124-24.088a6.741 6.741 0 0 1 1.143-0.082c1.39 0 3.147 0.268 5.224 0.797 21.301 5.429 22.521 32.169 19.099 55.718-7.749-12.153-13.985-23.137-18.342-32.345z m5.91 124.08c8.072-16.726 14.893-33.686 20.043-49.84l0.467 0.675 0.082-0.328a830.025 830.025 0 0 0 30.537 39.219l-0.322-0.004 0.843 0.968c-18.219 1.551-35.999 5.492-51.319 9.913l0.493-0.897-0.824 0.294z",fill:"#FFFFFF","p-id":"16199"})]})},f=function(){return _jsxs("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16358",width:"200",height:"200",children:[_jsx("path",{d:"M728.345 64.223H224.056V321.34h68.687V133.019h378.844v187.78h186.917v569.777H292.743v-84.271h-0.715v-68.796h0.715v-53.046h-68.687v274.909h703.135V256.486z",fill:"#819292","p-id":"16359"}),_jsx("path",{d:"M660.276 418.403h129.217v67.077H660.276zM660.276 578.386h129.217v67.077H660.276zM660.276 738.369h129.217v67.077H660.276z",fill:"#819292","p-id":"16360"}),_jsx("path",{d:"M586.15 408.784h-68.687v328.725H292.028v68.796H586.15z",fill:"#50A135","p-id":"16361"}),_jsx("path",{d:"M460.55 684.463V321.34H98.004v363.123H460.55z m-234.043-70.305l-85.787 0.722 93.843-110.912-93.843-113.045 81.805 0.225 53.747 63.523 53.747-63.523 81.805-0.225-93.843 113.044 93.843 110.912-85.787-0.722-49.765-59.948-49.765 59.949z",fill:"#50A135","p-id":"16362"}),_jsx("path",{d:"M326.038 614.158l85.787 0.722-93.843-110.913 93.843-113.044-81.805 0.225-53.747 63.524-53.748-63.524-81.805-0.225 93.844 113.044L140.72 614.88l85.787-0.722 49.766-59.948z",fill:"#FFFFFF","p-id":"16363"})]})};function j(h){return(0,n.jsx)("div",{children:(0,n.jsx)(d,{})})}},61002:function(c,s,e){e.r(s),e.d(s,{default:function(){return d}});var n=e(62086);function d(i){return(0,n.jsx)("div",{})}},74229:function(c,s,e){e.r(s),e.d(s,{default:function(){return d}});var n=e(62086);function d(i){return(0,n.jsx)("div",{})}},84544:function(c,s,e){e.r(s),e.d(s,{default:function(){return d}});var n=e(62086);function d(i){return(0,n.jsx)("div",{})}},23336:function(c,s,e){e.r(s),e.d(s,{default:function(){return d}});var n=e(62086);function d(i){return(0,n.jsx)("div",{})}},93588:function(c,s,e){e.r(s),e.d(s,{default:function(){return d}});var n=e(62086);function d(i){return typeof i.message.message!="string"?null:(0,n.jsx)("div",{children:i.message.message})}},98857:function(c,s,e){e.r(s),e.d(s,{default:function(){return i}});var n={videoBox:"videoBox___FBzcz"},d=e(62086);function i(t){return typeof t.message.message!="string"?(0,d.jsx)("span",{children:"\u6682\u65F6\u65E0\u6CD5\u64AD\u653E"}):(0,d.jsx)("div",{className:n.videoBox,children:(0,d.jsx)("video",{src:t.message.message,controls:!0})})}},94338:function(c,s,e){e.r(s),e.d(s,{default:function(){return i}});var n={audioBox:"audioBox___fR4ti"},d=e(62086);function i(t){return typeof t.message.message!="string"?(0,d.jsx)("span",{children:"\u6682\u65F6\u65E0\u6CD5\u64AD\u653E"}):(0,d.jsx)("div",{className:n.audioBox,children:(0,d.jsx)("audio",{src:t.message.message,controls:!0})})}},86751:function(c,s,e){e.r(s),e.d(s,{default:function(){return f}});var n=e(31420),d=e(90918),i={box:"box___IpXK4",messages:"messages___GotYm",send:"send___nFnTt"},t=e(62086);function f(){return(0,t.jsxs)("div",{className:i.box,children:[(0,t.jsx)("div",{className:i.messages,children:(0,t.jsx)(n.default,{list:d.messages,members:d.members})}),(0,t.jsx)("div",{className:i.send})]})}},90918:function(c,s,e){e.r(s),e.d(s,{members:function(){return R},messages:function(){return S}});let n;const d=new Uint8Array(16);function i(){if(!n&&(n=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(d)}const t=[];for(let a=0;a<256;++a)t.push((a+256).toString(16).slice(1));function f(a,v=0){return(t[a[v+0]]+t[a[v+1]]+t[a[v+2]]+t[a[v+3]]+"-"+t[a[v+4]]+t[a[v+5]]+"-"+t[a[v+6]]+t[a[v+7]]+"-"+t[a[v+8]]+t[a[v+9]]+"-"+t[a[v+10]]+t[a[v+11]]+t[a[v+12]]+t[a[v+13]]+t[a[v+14]]+t[a[v+15]]).toLowerCase()}function j(a,v=0){const B=f(a,v);if(!validate(B))throw TypeError("Stringified UUID is invalid");return B}var h=null;let y,u,T=0,l=0;function M(a,v,B){let E=v&&B||0;const g=v||new Array(16);a=a||{};let H=a.node||y,D=a.clockseq!==void 0?a.clockseq:u;if(H==null||D==null){const x=a.random||(a.rng||i)();H==null&&(H=y=[x[0]|1,x[1],x[2],x[3],x[4],x[5]]),D==null&&(D=u=(x[6]<<8|x[7])&16383)}let O=a.msecs!==void 0?a.msecs:Date.now(),I=a.nsecs!==void 0?a.nsecs:l+1;const F=O-T+(I-l)/1e4;if(F<0&&a.clockseq===void 0&&(D=D+1&16383),(F<0||O>T)&&a.nsecs===void 0&&(I=0),I>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");T=O,l=I,u=D,O+=122192928e5;const C=((O&268435455)*1e4+I)%4294967296;g[E++]=C>>>24&255,g[E++]=C>>>16&255,g[E++]=C>>>8&255,g[E++]=C&255;const V=O/4294967296*1e4&268435455;g[E++]=V>>>8&255,g[E++]=V&255,g[E++]=V>>>24&15|16,g[E++]=V>>>16&255,g[E++]=D>>>8|128,g[E++]=D&255;for(let x=0;x<6;++x)g[E+x]=H[x];return v||f(g)}var m=M,r=e.p+"static/voice.1b7d9b3e.mp3",z=e.p+"static/video.4c15cf89.mp4",P=e.p+"static/file.2d420f57.pdf",o=e(87848),S=[{uuid:m(),type:o.MessageType.SYSTEM,sendId:"2",send:"system",message:"\u5F20\u4E09\u674E\u56DB\u52A0\u5165\u7FA4\u804A",createTime:+new Date,sendType:o.SendType.OUT},{uuid:m(),type:o.MessageType.TEXT,sendId:"1",send:"\u5F20\u4E09",message:"\u8FD9\u662F\u6587\u672C".repeat(5),createTime:+new Date,sendType:o.SendType.IN},{uuid:m(),type:o.MessageType.TEXT,sendId:"2",send:"\u674E\u56DB",message:"\u8FD9\u662F\u6587\u672C".repeat(100),createTime:+new Date,sendType:o.SendType.OUT},{uuid:m(),type:o.MessageType.VOICE,sendId:"1",send:"\u5F20\u4E09",message:r,createTime:+new Date,sendType:o.SendType.IN},{uuid:m(),type:o.MessageType.VIDEO,sendId:"2",send:"\u674E\u56DB",message:z,createTime:+new Date,sendType:o.SendType.OUT},{uuid:m(),type:o.MessageType.FILE,sendId:"2",send:"\u674E\u56DB",message:P,createTime:+new Date,sendType:o.SendType.OUT}],R=[{id:"1",name:"\u5F20\u4E09"},{id:"2",name:"\u674E\u56DB"}]}}]);