import{A as j,o as E,u as z,I as Ne,l as xe,i as L,N as Ce,a as pt,c as mt,S as W,t as gt,T as ht,b as yt}from"./Dh4h7VYx.js";import{I as O,r as v,A as D,B as f,E as C,H as R,Y as T,F as bt,s as x,ap as wt,D as H,y as P,aq as Et,ar as Tt,as as $t,a5 as St,S as N,_ as Xe,J as Ze,K as me,L as _e,M as De,a1 as Ft,a2 as Lt,o as Q,i as Ae,w as K,c as Te,Q as fe,j as ce,R as ve,ab as Ct,O as ue,b as $e,a as Se}from"./DyDD_Bmx.js";import{u as Dt}from"./N_MiMyfO.js";import{q as et,s as At,t as te,m as Pe,o as ke,S as Y,x as tt,P as pe,N as V,y as qe,T as Pt,z as kt,A as ge,w as Bt}from"./Efq7xSUV.js";const Ot={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},Rt={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function at(e,t,a,l){et.isServer||O(n=>{e=e??window,e.addEventListener(t,a,l),n(()=>e.removeEventListener(t,a,l))})}var ee=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ee||{});function Ht(){let e=v(0);return At("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function lt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let l=E(a);l instanceof HTMLElement&&t.add(l)}return t}var nt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(nt||{});let Z=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:l}){let n=v(null);l({el:n,$el:n});let r=f(()=>te(n)),o=v(!1);C(()=>o.value=!0),R(()=>o.value=!1),Nt({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let i=jt({ownerDocument:r,container:n,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));It({ownerDocument:r,container:n,containers:e.containers,previousActiveElement:i},f(()=>o.value&&!!(e.features&8)));let u=Ht();function s(g){let m=E(n);m&&(w=>w())(()=>{z(u.value,{[ee.Forwards]:()=>{pe(m,V.First,{skipElements:[g.relatedTarget]})},[ee.Backwards]:()=>{pe(m,V.Last,{skipElements:[g.relatedTarget]})}})})}let d=v(!1);function b(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(g){if(!o.value)return;let m=lt(e.containers);E(n)instanceof HTMLElement&&m.add(E(n));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(rt(m,w)||(d.value?pe(E(n),z(u.value,{[ee.Forwards]:()=>V.Next,[ee.Backwards]:()=>V.Previous})|V.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&Y(g.target)))}return()=>{let g={},m={ref:n,onKeydown:b,onFocusout:c},{features:w,initialFocus:y,containers:M,...$}=e;return T(bt,[!!(w&4)&&T(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ke.Focusable}),j({ourProps:m,theirProps:{...t,...$},slot:g,attrs:t,slots:a,name:"FocusTrap"}),!!(w&4)&&T(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ke.Focusable})])}}}),{features:nt});function Mt(e){let t=v(qe.slice());return x([e],([a],[l])=>{l===!0&&a===!1?tt(()=>{t.value.splice(0)}):l===!1&&a===!0&&(t.value=qe.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(l=>l!=null&&l.isConnected))!=null?a:null}}function Nt({ownerDocument:e},t){let a=Mt(t);C(()=>{O(()=>{var l,n;t.value||((l=e.value)==null?void 0:l.activeElement)===((n=e.value)==null?void 0:n.body)&&Y(a())},{flush:"post"})}),R(()=>{t.value&&Y(a())})}function jt({ownerDocument:e,container:t,initialFocus:a},l){let n=v(null),r=v(!1);return C(()=>r.value=!0),R(()=>r.value=!1),C(()=>{x([t,a,l],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!l.value)return;let u=E(t);u&&tt(()=>{var s,d;if(!r.value)return;let b=E(a),c=(s=e.value)==null?void 0:s.activeElement;if(b){if(b===c){n.value=c;return}}else if(u.contains(c)){n.value=c;return}b?Y(b):pe(u,V.First|V.NoScroll)===Pt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),n}function It({ownerDocument:e,container:t,containers:a,previousActiveElement:l},n){var r;at((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!n.value)return;let i=lt(a);E(t)instanceof HTMLElement&&i.add(E(t));let u=l.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?rt(i,s)?(l.value=s,Y(s)):(o.preventDefault(),o.stopPropagation(),Y(u)):Y(l.value)},!0)}function rt(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function Ut(e){let t=wt(e.getSnapshot());return R(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Vt(e,t){let a=e(),l=new Set;return{getSnapshot(){return a},subscribe(n){return l.add(n),()=>l.delete(n)},dispatch(n,...r){let o=t[n].call(a,...r);o&&(a=o,l.forEach(i=>i()))}}}function Wt(){let e;return{before({doc:t}){var a;let l=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-l.clientWidth},after({doc:t,d:a}){let l=t.documentElement,n=l.clientWidth-l.offsetWidth,r=e-n;a.style(l,"paddingRight",`${r}px`)}}}function qt(){return kt()?{before({doc:e,d:t,meta:a}){function l(n){return a.containers.flatMap(r=>r()).some(r=>r.contains(n))}t.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=ge();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let r=(n=window.scrollY)!=null?n:window.pageYOffset,o=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!l(d)&&(o=d)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let u=i.target;for(;u.parentElement&&l(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(l(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;r!==u&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Yt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function zt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let q=Vt(()=>new Map,{PUSH(e,t){var a;let l=(a=this.get(e))!=null?a:{doc:e,count:0,d:ge(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let l={doc:e,d:t,meta:zt(a)},n=[qt(),Wt(),Yt()];n.forEach(({before:r})=>r==null?void 0:r(l)),n.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let l=t.get(a.doc)==="hidden",n=a.count!==0;(n&&!l||!n&&l)&&q.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&q.dispatch("TEARDOWN",a)}});function Gt(e,t,a){let l=Ut(q),n=f(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return x([e,t],([r,o],[i],u)=>{if(!r||!o)return;q.dispatch("PUSH",r,a);let s=!1;u(()=>{s||(q.dispatch("POP",i??r,a),s=!0)})},{immediate:!0}),n}let Fe=new Map,_=new Map;function Ye(e,t=v(!0)){O(a=>{var l;if(!t.value)return;let n=E(e);if(!n)return;a(function(){var o;if(!n)return;let i=(o=_.get(n))!=null?o:1;if(i===1?_.delete(n):_.set(n,i-1),i!==1)return;let u=Fe.get(n);u&&(u["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",u["aria-hidden"]),n.inert=u.inert,Fe.delete(n))});let r=(l=_.get(n))!=null?l:0;_.set(n,r+1),r===0&&(Fe.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}function Jt({defaultContainers:e=[],portals:t,mainTreeNodeRef:a}={}){let l=v(null),n=te(l);function r(){var o,i,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(o=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?o:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(l))||d.contains((u=(i=E(l))==null?void 0:i.getRootNode())==null?void 0:u.host)||s.some(b=>d.contains(b))||s.push(d));return s}return{resolveContainers:r,contains(o){return r().some(i=>i.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return a!=null?null:T(Pe,{features:ke.Hidden,ref:l})}}}let ot=Symbol("ForcePortalRootContext");function Kt(){return P(ot,!1)}let ze=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:a}){return H(ot,e.force),()=>{let{force:l,...n}=e;return j({theirProps:n,ourProps:{},slot:{},slots:t,attrs:a,name:"ForcePortalRoot"})}}}),it=Symbol("StackContext");var Be=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Be||{});function Qt(){return P(it,()=>{})}function xt({type:e,enabled:t,element:a,onUpdate:l}){let n=Qt();function r(...o){l==null||l(...o),n(...o)}C(()=>{x(t,(o,i)=>{o?r(0,e,a):i===!0&&r(1,e,a)},{immediate:!0,flush:"sync"})}),R(()=>{t.value&&r(1,e,a)}),H(it,r)}let Xt=Symbol("DescriptionContext");function Zt({slot:e=v({}),name:t="Description",props:a={}}={}){let l=v([]);function n(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return H(Xt,{register:n,slot:e,name:t,props:a}),f(()=>l.value.length>0?l.value.join(" "):void 0)}function _t(e){let t=te(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let a=t.getElementById("headlessui-portal-root");if(a)return a;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const Oe=new WeakMap;function ea(e){var t;return(t=Oe.get(e))!=null?t:0}function Ge(e,t){let a=t(ea(e));return a<=0?Oe.delete(e):Oe.set(e,a),a}let ta=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:a}){let l=v(null),n=f(()=>te(l)),r=Kt(),o=P(ut,null),i=v(r===!0||o==null?_t(l.value):o.resolveTarget());i.value&&Ge(i.value,c=>c+1);let u=v(!1);C(()=>{u.value=!0}),O(()=>{r||o!=null&&(i.value=o.resolveTarget())});let s=P(Re,null),d=!1,b=$t();return x(l,()=>{if(d||!s)return;let c=E(l);c&&(R(s.register(c),b),d=!0)}),R(()=>{var c,g;let m=(c=n.value)==null?void 0:c.getElementById("headlessui-portal-root");!m||i.value!==m||Ge(i.value,w=>w-1)||i.value.children.length>0||(g=i.value.parentElement)==null||g.removeChild(i.value)}),()=>{if(!u.value||i.value===null)return null;let c={ref:l,"data-headlessui-portal":""};return T(Et,{to:i.value},j({ourProps:c,theirProps:e,slot:{},attrs:a,slots:t,name:"Portal"}))}}}),Re=Symbol("PortalParentContext");function aa(){let e=P(Re,null),t=v([]);function a(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let n={register:a,unregister:l,portals:t};return[t,D({name:"PortalWrapper",setup(r,{slots:o}){return H(Re,n),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let ut=Symbol("PortalGroupContext"),la=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:a}){let l=Tt({resolveTarget(){return e.target}});return H(ut,l),()=>{let{target:n,...r}=e;return j({theirProps:r,ourProps:{},slot:{},attrs:t,slots:a,name:"PortalGroup"})}}});var na=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(na||{});let He=Symbol("DialogContext");function st(e){let t=P(He,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,st),a}return t}let se="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ra=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:se},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){var r,o;let i=(r=e.id)!=null?r:`headlessui-dialog-${Ne()}`,u=v(!1);C(()=>{u.value=!0});let s=!1,d=f(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=v(0),c=xe(),g=f(()=>e.open===se&&c!==null?(c.value&L.Open)===L.Open:e.open),m=v(null),w=f(()=>te(m));if(n({el:m,$el:m}),!(e.open!==se||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===se?void 0:e.open}`);let y=f(()=>u.value&&g.value?0:1),M=f(()=>y.value===0),$=f(()=>b.value>1),I=P(He,null)!==null,[ae,le]=aa(),{resolveContainers:G,mainTreeNodeRef:ne,MainTreeNode:re}=Jt({portals:ae,defaultContainers:[f(()=>{var p;return(p=J.panelRef.value)!=null?p:m.value})]}),ye=f(()=>$.value?"parent":"leaf"),oe=f(()=>c!==null?(c.value&L.Closing)===L.Closing:!1),be=f(()=>I||oe.value?!1:M.value),we=f(()=>{var p,h,S;return(S=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("body > *"))!=null?h:[]).find(F=>F.id==="headlessui-portal-root"?!1:F.contains(E(ne))&&F instanceof HTMLElement))!=null?S:null});Ye(we,be);let A=f(()=>$.value?!0:M.value),X=f(()=>{var p,h,S;return(S=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(F=>F.contains(E(ne))&&F instanceof HTMLElement))!=null?S:null});Ye(X,A),xt({type:"Dialog",enabled:f(()=>y.value===0),element:m,onUpdate:(p,h)=>{if(h==="Dialog")return z(p,{[Be.Add]:()=>b.value+=1,[Be.Remove]:()=>b.value-=1})}});let k=Zt({name:"DialogDescription",slot:f(()=>({open:g.value}))}),B=v(null),J={titleId:B,panelRef:v(null),dialogState:y,setTitleId(p){B.value!==p&&(B.value=p)},close(){t("close",!1)}};H(He,J);let Ue=f(()=>!(!M.value||$.value));Bt(G,(p,h)=>{p.preventDefault(),J.close(),St(()=>h==null?void 0:h.focus())},Ue);let Ve=f(()=>!($.value||y.value!==0));at((o=w.value)==null?void 0:o.defaultView,"keydown",p=>{Ve.value&&(p.defaultPrevented||p.key===pt.Escape&&(p.preventDefault(),p.stopPropagation(),J.close()))});let We=f(()=>!(oe.value||y.value!==0||I));return Gt(w,We,p=>{var h;return{containers:[...(h=p.containers)!=null?h:[],G]}}),O(p=>{if(y.value!==0)return;let h=E(m);if(!h)return;let S=new ResizeObserver(F=>{for(let Ee of F){let ie=Ee.target.getBoundingClientRect();ie.x===0&&ie.y===0&&ie.width===0&&ie.height===0&&J.close()}});S.observe(h),p(()=>S.disconnect())}),()=>{let{open:p,initialFocus:h,...S}=e,F={...a,ref:m,id:i,role:d.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":B.value,"aria-describedby":k.value},Ee={open:y.value===0};return T(ze,{force:!0},()=>[T(ta,()=>T(la,{target:m.value},()=>T(ze,{force:!1},()=>T(Z,{initialFocus:h,containers:G,features:M.value?z(ye.value,{parent:Z.features.RestoreFocus,leaf:Z.features.All&~Z.features.FocusLock}):Z.features.None},()=>T(le,{},()=>j({ourProps:F,theirProps:{...S,...a},slot:Ee,attrs:a,slots:l,visible:y.value===0,features:Ce.RenderStrategy|Ce.Static,name:"Dialog"})))))),T(re)])}}}),oa=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:l}){var n;let r=(n=e.id)!=null?n:`headlessui-dialog-panel-${Ne()}`,o=st("DialogPanel");l({el:o.panelRef,$el:o.panelRef});function i(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:r,ref:o.panelRef,onClick:i};return j({ourProps:s,theirProps:u,slot:{open:o.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}}),Je=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Ke(e){var t,a;let l=(t=e.innerText)!=null?t:"",n=e.cloneNode(!0);if(!(n instanceof HTMLElement))return l;let r=!1;for(let i of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),r=!0;let o=r?(a=n.innerText)!=null?a:"":l;return Je.test(o)&&(o=o.replace(Je,"")),o}function ia(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let a=e.getAttribute("aria-labelledby");if(a){let l=a.split(" ").map(n=>{let r=document.getElementById(n);if(r){let o=r.getAttribute("aria-label");return typeof o=="string"?o.trim():Ke(r).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return Ke(e).trim()}function Fa(e){let t=v(""),a=v("");return()=>{let l=E(e);if(!l)return"";let n=l.innerText;if(t.value===n)return a.value;let r=ia(l).trim().toLowerCase();return t.value=n,a.value=r,r}}function ua(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function Le(e,...t){e&&t.length>0&&e.classList.add(...t)}function de(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Me=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Me||{});function sa(e,t){let a=ge();if(!e)return a.dispose;let{transitionDuration:l,transitionDelay:n}=getComputedStyle(e),[r,o]=[l,n].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return r!==0?a.setTimeout(()=>t("finished"),r+o):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Qe(e,t,a,l,n,r){let o=ge(),i=r!==void 0?ua(r):()=>{};return de(e,...n),Le(e,...t,...a),o.nextFrame(()=>{de(e,...a),Le(e,...l),o.add(sa(e,u=>(de(e,...l,...t),Le(e,...n),i(u))))}),o.add(()=>de(e,...t,...a,...l,...n)),o.add(()=>i("cancelled")),o.dispose}function U(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let je=Symbol("TransitionContext");var da=(e=>(e.Visible="visible",e.Hidden="hidden",e))(da||{});function fa(){return P(je,null)!==null}function ca(){let e=P(je,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function va(){let e=P(Ie,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ie=Symbol("NestingContext");function he(e){return"children"in e?he(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function dt(e){let t=v([]),a=v(!1);C(()=>a.value=!0),R(()=>a.value=!1);function l(r,o=W.Hidden){let i=t.value.findIndex(({id:u})=>u===r);i!==-1&&(z(o,{[W.Unmount](){t.value.splice(i,1)},[W.Hidden](){t.value[i].state="hidden"}}),!he(t)&&a.value&&(e==null||e()))}function n(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,W.Unmount)}return{children:t,register:n,unregister:l}}let ft=Ce.RenderStrategy,ct=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){let r=v(0);function o(){r.value|=L.Opening,t("beforeEnter")}function i(){r.value&=~L.Opening,t("afterEnter")}function u(){r.value|=L.Closing,t("beforeLeave")}function s(){r.value&=~L.Closing,t("afterLeave")}if(!fa()&&mt())return()=>T(vt,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},l);let d=v(null),b=f(()=>e.unmount?W.Unmount:W.Hidden);n({el:d,$el:d});let{show:c,appear:g}=ca(),{register:m,unregister:w}=va(),y=v(c.value?"visible":"hidden"),M={value:!0},$=Ne(),I={value:!1},ae=dt(()=>{!I.value&&y.value!=="hidden"&&(y.value="hidden",w($),s())});C(()=>{let A=m($);R(A)}),O(()=>{if(b.value===W.Hidden&&$){if(c.value&&y.value!=="visible"){y.value="visible";return}z(y.value,{hidden:()=>w($),visible:()=>m($)})}});let le=U(e.enter),G=U(e.enterFrom),ne=U(e.enterTo),re=U(e.entered),ye=U(e.leave),oe=U(e.leaveFrom),be=U(e.leaveTo);C(()=>{O(()=>{if(y.value==="visible"){let A=E(d);if(A instanceof Comment&&A.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function we(A){let X=M.value&&!g.value,k=E(d);!k||!(k instanceof HTMLElement)||X||(I.value=!0,c.value&&o(),c.value||u(),A(c.value?Qe(k,le,G,ne,re,B=>{I.value=!1,B===Me.Finished&&i()}):Qe(k,ye,oe,be,re,B=>{I.value=!1,B===Me.Finished&&(he(ae)||(y.value="hidden",w($),s()))})))}return C(()=>{x([c],(A,X,k)=>{we(k),M.value=!1},{immediate:!0})}),H(Ie,ae),gt(f(()=>z(y.value,{visible:L.Open,hidden:L.Closed})|r.value)),()=>{let{appear:A,show:X,enter:k,enterFrom:B,enterTo:J,entered:Ue,leave:Ve,leaveFrom:We,leaveTo:p,...h}=e,S={ref:d},F={...h,...g.value&&c.value&&et.isServer?{class:N([a.class,h.class,...le,...G])}:{}};return j({theirProps:F,ourProps:S,slot:{},slots:l,attrs:a,features:ft,visible:y.value==="visible",name:"TransitionChild"})}}}),pa=ct,vt=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:l}){let n=xe(),r=f(()=>e.show===null&&n!==null?(n.value&L.Open)===L.Open:e.show);O(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(r.value?"visible":"hidden"),i=dt(()=>{o.value="hidden"}),u=v(!0),s={show:r,appear:f(()=>e.appear||!u.value)};return C(()=>{O(()=>{u.value=!1,r.value?o.value="visible":he(i)||(o.value="hidden")})}),H(Ie,i),H(je,s),()=>{let d=ht(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return j({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[T(pa,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...b,...d},l.default)]},attrs:{},features:ft,visible:o.value==="visible",name:"Transition"})}}});const ma=Ze(me.ui.strategy,me.ui.card,Ot),ga=D({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:a}=_e("card",De(e,"ui"),ma),l=f(()=>Ft(Lt(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:a,cardClass:l}}});function ha(e,t,a,l,n,r){return Q(),Ae(Ct(e.$attrs.onSubmit?"form":e.as),ve({class:e.cardClass},e.attrs),{default:K(()=>[e.$slots.header?(Q(),Te("div",{key:0,class:N([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[fe(e.$slots,"header")],2)):ce("",!0),e.$slots.default?(Q(),Te("div",{key:1,class:N([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[fe(e.$slots,"default")],2)):ce("",!0),e.$slots.footer?(Q(),Te("div",{key:2,class:N([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[fe(e.$slots,"footer")],2)):ce("",!0)]),_:3},16,["class"])}const La=Xe(ga,[["render",ha]]),ya=Ze(me.ui.strategy,me.ui.modal,Rt),ba=D({components:{HDialog:ra,HDialogPanel:oa,TransitionRoot:vt,TransitionChild:ct},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:a,attrs:l}=_e("modal",De(e,"ui"),ya,De(e,"class")),n=f({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),r=f(()=>e.transition?{...a.value.transition}:{});function o(u){if(e.preventClose){t("close-prevented");return}n.value=u,t("close")}const i=()=>{t("after-leave")};return yt(()=>Dt("$HAJMhYDoe7")),{ui:a,attrs:l,isOpen:n,transitionClass:r,onAfterLeave:i,close:o}}});function wa(e,t,a,l,n,r){const o=ue("TransitionChild"),i=ue("HDialogPanel"),u=ue("HDialog"),s=ue("TransitionRoot");return Q(),Ae(s,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:K(()=>[$e(u,ve({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:K(()=>[e.overlay?(Q(),Ae(o,ve({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:K(()=>[Se("div",{class:N([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):ce("",!0),Se("div",{class:N(e.ui.inner)},[Se("div",{class:N([e.ui.container,!e.fullscreen&&e.ui.padding])},[$e(o,ve({as:"template",appear:e.appear},e.transitionClass),{default:K(()=>[$e(i,{class:N([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:K(()=>[fe(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const Ca=Xe(ba,[["render",wa]]);export{La as _,Ca as a,Fa as p};
