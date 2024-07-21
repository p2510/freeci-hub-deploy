import{o as b,u as A,A as P}from"./BOAUna7T.js";import{a5 as S,I as g,r as O,B as M,A as T}from"./IFBo_SSO.js";function I(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function $(){let e=[],t={addEventListener(n,r,i,o){return n.addEventListener(r,i,o),t.add(()=>n.removeEventListener(r,i,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return I(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=$();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}var D=Object.defineProperty,k=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n)=>(k(e,typeof t!="symbol"?t+"":t,n),n);class H{constructor(){y(this,"current",this.detect()),y(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let E=new H;function L(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var _=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(_||{}),C=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(C||{}),q=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(q||{});function F(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(h)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var N=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(N||{});function x(e,t=0){var n;return e===((n=L(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(h)},1(){let r=e;for(;r!==null;){if(r.matches(h))return!0;r=r.parentElement}return!1}})}function ee(e){let t=L(e);S(()=>{t&&!x(t.activeElement,0)&&K(e)})}var j=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(j||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function K(e){e==null||e.focus({preventScroll:!0})}let G=["textarea","input"].join(",");function R(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,G))!=null?n:!1}function U(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),o=t(r);if(i===null||o===null)return 0;let a=i.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function te(e,t){return V(F(),t,{relativeTo:e})}function V(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,u=Array.isArray(e)?n?U(e):e:F(e);i.length>0&&u.length>1&&(u=u.filter(l=>!i.includes(l))),r=r??a.activeElement;let w=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},v=0,f=u.length,c;do{if(v>=f||v+f<=0)return 0;let l=s+v;if(t&16)l=(l+f)%f;else{if(l<0)return 3;if(l>=f)return 1}c=u[l],c==null||c.focus(d),v+=w}while(c!==a.activeElement);return t&6&&R(c)&&c.select(),2}function W(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function X(){return/Android/gi.test(window.navigator.userAgent)}function B(){return W()||X()}function p(e,t,n){E.isServer||g(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function z(e,t,n){E.isServer||g(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function ne(e,t,n=M(()=>!0)){function r(o,a){if(!n.value||o.defaultPrevented)return;let u=a(o);if(u===null||!u.getRootNode().contains(u))return;let w=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of w){if(s===null)continue;let d=s instanceof HTMLElement?s:b(s);if(d!=null&&d.contains(u)||o.composed&&o.composedPath().includes(d))return}return!x(u,N.Loose)&&u.tabIndex!==-1&&o.preventDefault(),t(o,u)}let i=O(null);p("pointerdown",o=>{var a,u;n.value&&(i.value=((u=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:u[0])||o.target)},!0),p("mousedown",o=>{var a,u;n.value&&(i.value=((u=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:u[0])||o.target)},!0),p("click",o=>{B()||i.value&&(r(o,()=>i.value),i.value=null)},!0),p("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),z("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});let re=T({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:i,...o}=e,a={"aria-hidden":(i&2)===2?!0:(r=o["aria-hidden"])!=null?r:void 0,hidden:(i&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(i&4)===4&&(i&2)!==2&&{display:"none"}}};return P({ourProps:a,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Q(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let m=[];Q(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&m[0]!==t.target&&(m.unshift(t.target),m=m.filter(n=>n!=null&&n.isConnected),m.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});export{_ as N,U as O,V as P,K as S,C as T,ee as _,x as a,z as b,E as c,I as d,W as e,re as f,N as h,L as i,B as n,$ as o,m as t,J as u,te as v,ne as w};
