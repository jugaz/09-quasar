(()=>{"use strict";var e={4647:(e,t,r)=>{r(8964),r(702);var n=r(1957),o=r(1947),a=r(499),i=r(9835);function s(e,t,r,n,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var u=r(1639);const c=(0,u.Z)(l,[["render",s]]),d=c;var p=r(7610),f=r(3340),h=r(8910);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(119)]).then(r.bind(r,1119)),children:[{path:"",name:"",component:()=>Promise.all([r.e(736),r.e(344)]).then(r.bind(r,8344))},{path:"typography",name:"typography",component:()=>Promise.all([r.e(736),r.e(687)]).then(r.bind(r,7687))},{path:"flex",name:"flex",component:()=>Promise.all([r.e(736),r.e(993)]).then(r.bind(r,3993))},{path:"dialogs",name:"dialogs",component:()=>Promise.all([r.e(736),r.e(93)]).then(r.bind(r,5093))},{path:"forms",name:"forms",component:()=>Promise.all([r.e(736),r.e(520)]).then(r.bind(r,8520))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],v=m,g=(0,f.BC)((function(){const e=h.PO,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/09-quasar/")});return t}));async function b(e,t){const n=e(d);n.use(o.Z,t);const i="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,7610)),l=(0,a.Xl)("function"===typeof g?await g({store:i}):g);return i.$router=l,{app:n,store:i,storeKey:s,router:l}}var y=r(8781),w=r(5541),O=r(4328);const P={config:{},iconSet:y.Z,plugins:{Dialog:w.Z,Notify:O.Z}},S="/09-quasar/",k=/\/\//,C=e=>(S+e).replace(k,"/");async function j({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return C(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:S})}catch(u){return u&&u.url?void s(u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}b(n.ri,P).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var n=r(3340),o=r(9981),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},7610:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n={};r.r(n),r.d(n,{isSlideMenuOpen:()=>c,someGetter:()=>u});var o={};r.r(o),r.d(o,{someMutation:()=>d,toggleSlideMenu:()=>p});var a={};r.r(a),r.d(a,{someAction:()=>f});var i=r(3340),s=r(3100);function l(){return{isSideMenuOpen:!0}}function u(){}function c(e){return e.isSideMenuOpen}function d(){}function p(e){e.isSideMenuOpen=!e.isSideMenuOpen}function f(){}const h={namespaced:!0,getters:n,mutations:o,actions:a,state:l},m=(0,i.h)((function(){const e=(0,s.MT)({modules:{ui:h},strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{93:"242f5e02",119:"524a046d",344:"f5512adc",520:"c2961509",687:"fe10f71f",862:"f9ead83a",993:"6677e99e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",736:"f86285a9",993:"2b58b4c3"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="09-quasar:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/09-quasar/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={993:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var c=l(r)}for(t&&t(n);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=globalThis["webpackChunk_09_quasar"]=globalThis["webpackChunk_09_quasar"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(4647)));n=r.O(n)})();