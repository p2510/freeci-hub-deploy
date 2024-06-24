import{D as Xe,F as pt,G as te,z as Ce,B as De,A as j,S as q,o as E,H as Ze,u as z,P as fe,g as W,J as Ye,K as mt,L as gt,M as ge,I as Ne,l as xe,i as L,w as ht,N as Ae,e as yt,Q as bt,R as U,t as wt,T as Et,k as Tt}from"./8JtfTv8O.js";import{W as O,r as v,A as D,B as f,E as C,V as R,ah as T,F as $t,s as X,am as St,D as H,y as P,an as Ft,ao as Lt,ap as Ct,X as Dt,R as N,_ as _e,I as et,K as me,L as tt,M as Pe,O as At,P as Pt,o as J,i as ke,w as Q,c as Te,S as ce,j as ve,Q as pe,a5 as kt,a2 as ue,b as $e,a as Se}from"./5DcRCtml.js";import{b as Bt}from"./CXZu91cu.js";const Ot={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},Rt={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function at(e,t,a,n){Xe.isServer||O(l=>{e=e??window,e.addEventListener(t,a,n),l(()=>e.removeEventListener(t,a,n))})}var ee=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ee||{});function Ht(){let e=v(0);return pt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function nt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let n=E(a);n instanceof HTMLElement&&t.add(n)}return t}var lt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(lt||{});let x=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:n}){let l=v(null);n({el:l,$el:l});let r=f(()=>te(l)),o=v(!1);C(()=>o.value=!0),R(()=>o.value=!1),Nt({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let i=jt({ownerDocument:r,container:l,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));It({ownerDocument:r,container:l,containers:e.containers,previousActiveElement:i},f(()=>o.value&&!!(e.features&8)));let u=Ht();function s(g){let m=E(l);m&&(w=>w())(()=>{z(u.value,{[ee.Forwards]:()=>{fe(m,W.First,{skipElements:[g.relatedTarget]})},[ee.Backwards]:()=>{fe(m,W.Last,{skipElements:[g.relatedTarget]})}})})}let d=v(!1);function b(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(g){if(!o.value)return;let m=nt(e.containers);E(l)instanceof HTMLElement&&m.add(E(l));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(rt(m,w)||(d.value?fe(E(l),z(u.value,{[ee.Forwards]:()=>W.Next,[ee.Backwards]:()=>W.Previous})|W.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&q(g.target)))}return()=>{let g={},m={ref:l,onKeydown:b,onFocusout:c},{features:w,initialFocus:y,containers:M,...$}=e;return T($t,[!!(w&4)&&T(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:De.Focusable}),j({ourProps:m,theirProps:{...t,...$},slot:g,attrs:t,slots:a,name:"FocusTrap"}),!!(w&4)&&T(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:De.Focusable})])}}}),{features:lt});function Mt(e){let t=v(Ye.slice());return X([e],([a],[n])=>{n===!0&&a===!1?Ze(()=>{t.value.splice(0)}):n===!1&&a===!0&&(t.value=Ye.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(n=>n!=null&&n.isConnected))!=null?a:null}}function Nt({ownerDocument:e},t){let a=Mt(t);C(()=>{O(()=>{var n,l;t.value||((n=e.value)==null?void 0:n.activeElement)===((l=e.value)==null?void 0:l.body)&&q(a())},{flush:"post"})}),R(()=>{t.value&&q(a())})}function jt({ownerDocument:e,container:t,initialFocus:a},n){let l=v(null),r=v(!1);return C(()=>r.value=!0),R(()=>r.value=!1),C(()=>{X([t,a,n],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!n.value)return;let u=E(t);u&&Ze(()=>{var s,d;if(!r.value)return;let b=E(a),c=(s=e.value)==null?void 0:s.activeElement;if(b){if(b===c){l.value=c;return}}else if(u.contains(c)){l.value=c;return}b?q(b):fe(u,W.First|W.NoScroll)===mt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function It({ownerDocument:e,container:t,containers:a,previousActiveElement:n},l){var r;at((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!l.value)return;let i=nt(a);E(t)instanceof HTMLElement&&i.add(E(t));let u=n.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?rt(i,s)?(n.value=s,q(s)):(o.preventDefault(),o.stopPropagation(),q(u)):q(n.value)},!0)}function rt(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function Vt(e){let t=St(e.getSnapshot());return R(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Wt(e,t){let a=e(),n=new Set;return{getSnapshot(){return a},subscribe(l){return n.add(l),()=>n.delete(l)},dispatch(l,...r){let o=t[l].call(a,...r);o&&(a=o,n.forEach(i=>i()))}}}function Ut(){let e;return{before({doc:t}){var a;let n=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-n.clientWidth},after({doc:t,d:a}){let n=t.documentElement,l=n.clientWidth-n.offsetWidth,r=e-l;a.style(n,"paddingRight",`${r}px`)}}}function Yt(){return gt()?{before({doc:e,d:t,meta:a}){function n(l){return a.containers.flatMap(r=>r()).some(r=>r.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=ge();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let r=(l=window.scrollY)!=null?l:window.pageYOffset,o=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!n(d)&&(o=d)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(n(i.target)){let u=i.target;for(;u.parentElement&&n(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(n(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;r!==u&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function zt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let Y=Wt(()=>new Map,{PUSH(e,t){var a;let n=(a=this.get(e))!=null?a:{doc:e,count:0,d:ge(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let n={doc:e,d:t,meta:zt(a)},l=[Yt(),Ut(),qt()];l.forEach(({before:r})=>r==null?void 0:r(n)),l.forEach(({after:r})=>r==null?void 0:r(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Y.subscribe(()=>{let e=Y.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let n=t.get(a.doc)==="hidden",l=a.count!==0;(l&&!n||!l&&n)&&Y.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&Y.dispatch("TEARDOWN",a)}});function Gt(e,t,a){let n=Vt(Y),l=f(()=>{let r=e.value?n.value.get(e.value):void 0;return r?r.count>0:!1});return X([e,t],([r,o],[i],u)=>{if(!r||!o)return;Y.dispatch("PUSH",r,a);let s=!1;u(()=>{s||(Y.dispatch("POP",i??r,a),s=!0)})},{immediate:!0}),l}let Fe=new Map,_=new Map;function qe(e,t=v(!0)){O(a=>{var n;if(!t.value)return;let l=E(e);if(!l)return;a(function(){var o;if(!l)return;let i=(o=_.get(l))!=null?o:1;if(i===1?_.delete(l):_.set(l,i-1),i!==1)return;let u=Fe.get(l);u&&(u["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",u["aria-hidden"]),l.inert=u.inert,Fe.delete(l))});let r=(n=_.get(l))!=null?n:0;_.set(l,r+1),r===0&&(Fe.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}function Kt({defaultContainers:e=[],portals:t,mainTreeNodeRef:a}={}){let n=v(null),l=te(n);function r(){var o,i,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(o=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?o:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(n))||d.contains((u=(i=E(n))==null?void 0:i.getRootNode())==null?void 0:u.host)||s.some(b=>d.contains(b))||s.push(d));return s}return{resolveContainers:r,contains(o){return r().some(i=>i.contains(o))},mainTreeNodeRef:n,MainTreeNode(){return a!=null?null:T(Ce,{features:De.Hidden,ref:n})}}}let ot=Symbol("ForcePortalRootContext");function Qt(){return P(ot,!1)}let ze=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:a}){return H(ot,e.force),()=>{let{force:n,...l}=e;return j({theirProps:l,ourProps:{},slot:{},slots:t,attrs:a,name:"ForcePortalRoot"})}}}),it=Symbol("StackContext");var Be=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Be||{});function Jt(){return P(it,()=>{})}function Xt({type:e,enabled:t,element:a,onUpdate:n}){let l=Jt();function r(...o){n==null||n(...o),l(...o)}C(()=>{X(t,(o,i)=>{o?r(0,e,a):i===!0&&r(1,e,a)},{immediate:!0,flush:"sync"})}),R(()=>{t.value&&r(1,e,a)}),H(it,r)}let Zt=Symbol("DescriptionContext");function xt({slot:e=v({}),name:t="Description",props:a={}}={}){let n=v([]);function l(r){return n.value.push(r),()=>{let o=n.value.indexOf(r);o!==-1&&n.value.splice(o,1)}}return H(Zt,{register:l,slot:e,name:t,props:a}),f(()=>n.value.length>0?n.value.join(" "):void 0)}function _t(e){let t=te(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let a=t.getElementById("headlessui-portal-root");if(a)return a;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}const Oe=new WeakMap;function ea(e){var t;return(t=Oe.get(e))!=null?t:0}function Ge(e,t){let a=t(ea(e));return a<=0?Oe.delete(e):Oe.set(e,a),a}let ta=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:a}){let n=v(null),l=f(()=>te(n)),r=Qt(),o=P(ut,null),i=v(r===!0||o==null?_t(n.value):o.resolveTarget());i.value&&Ge(i.value,c=>c+1);let u=v(!1);C(()=>{u.value=!0}),O(()=>{r||o!=null&&(i.value=o.resolveTarget())});let s=P(Re,null),d=!1,b=Ct();return X(n,()=>{if(d||!s)return;let c=E(n);c&&(R(s.register(c),b),d=!0)}),R(()=>{var c,g;let m=(c=l.value)==null?void 0:c.getElementById("headlessui-portal-root");!m||i.value!==m||Ge(i.value,w=>w-1)||i.value.children.length>0||(g=i.value.parentElement)==null||g.removeChild(i.value)}),()=>{if(!u.value||i.value===null)return null;let c={ref:n,"data-headlessui-portal":""};return T(Ft,{to:i.value},j({ourProps:c,theirProps:e,slot:{},attrs:a,slots:t,name:"Portal"}))}}}),Re=Symbol("PortalParentContext");function aa(){let e=P(Re,null),t=v([]);function a(r){return t.value.push(r),e&&e.register(r),()=>n(r)}function n(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let l={register:a,unregister:n,portals:t};return[t,D({name:"PortalWrapper",setup(r,{slots:o}){return H(Re,l),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let ut=Symbol("PortalGroupContext"),na=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:a}){let n=Lt({resolveTarget(){return e.target}});return H(ut,n),()=>{let{target:l,...r}=e;return j({theirProps:r,ourProps:{},slot:{},attrs:t,slots:a,name:"PortalGroup"})}}});var la=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(la||{});let He=Symbol("DialogContext");function st(e){let t=P(He,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,st),a}return t}let se="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ra=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:se},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:l}){var r,o;let i=(r=e.id)!=null?r:`headlessui-dialog-${Ne()}`,u=v(!1);C(()=>{u.value=!0});let s=!1,d=f(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=v(0),c=xe(),g=f(()=>e.open===se&&c!==null?(c.value&L.Open)===L.Open:e.open),m=v(null),w=f(()=>te(m));if(l({el:m,$el:m}),!(e.open!==se||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===se?void 0:e.open}`);let y=f(()=>u.value&&g.value?0:1),M=f(()=>y.value===0),$=f(()=>b.value>1),I=P(He,null)!==null,[ae,ne]=aa(),{resolveContainers:G,mainTreeNodeRef:le,MainTreeNode:re}=Kt({portals:ae,defaultContainers:[f(()=>{var p;return(p=K.panelRef.value)!=null?p:m.value})]}),ye=f(()=>$.value?"parent":"leaf"),oe=f(()=>c!==null?(c.value&L.Closing)===L.Closing:!1),be=f(()=>I||oe.value?!1:M.value),we=f(()=>{var p,h,S;return(S=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("body > *"))!=null?h:[]).find(F=>F.id==="headlessui-portal-root"?!1:F.contains(E(le))&&F instanceof HTMLElement))!=null?S:null});qe(we,be);let A=f(()=>$.value?!0:M.value),Z=f(()=>{var p,h,S;return(S=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(F=>F.contains(E(le))&&F instanceof HTMLElement))!=null?S:null});qe(Z,A),Xt({type:"Dialog",enabled:f(()=>y.value===0),element:m,onUpdate:(p,h)=>{if(h==="Dialog")return z(p,{[Be.Add]:()=>b.value+=1,[Be.Remove]:()=>b.value-=1})}});let k=xt({name:"DialogDescription",slot:f(()=>({open:g.value}))}),B=v(null),K={titleId:B,panelRef:v(null),dialogState:y,setTitleId(p){B.value!==p&&(B.value=p)},close(){t("close",!1)}};H(He,K);let Ve=f(()=>!(!M.value||$.value));ht(G,(p,h)=>{p.preventDefault(),K.close(),Dt(()=>h==null?void 0:h.focus())},Ve);let We=f(()=>!($.value||y.value!==0));at((o=w.value)==null?void 0:o.defaultView,"keydown",p=>{We.value&&(p.defaultPrevented||p.key===yt.Escape&&(p.preventDefault(),p.stopPropagation(),K.close()))});let Ue=f(()=>!(oe.value||y.value!==0||I));return Gt(w,Ue,p=>{var h;return{containers:[...(h=p.containers)!=null?h:[],G]}}),O(p=>{if(y.value!==0)return;let h=E(m);if(!h)return;let S=new ResizeObserver(F=>{for(let Ee of F){let ie=Ee.target.getBoundingClientRect();ie.x===0&&ie.y===0&&ie.width===0&&ie.height===0&&K.close()}});S.observe(h),p(()=>S.disconnect())}),()=>{let{open:p,initialFocus:h,...S}=e,F={...a,ref:m,id:i,role:d.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":B.value,"aria-describedby":k.value},Ee={open:y.value===0};return T(ze,{force:!0},()=>[T(ta,()=>T(na,{target:m.value},()=>T(ze,{force:!1},()=>T(x,{initialFocus:h,containers:G,features:M.value?z(ye.value,{parent:x.features.RestoreFocus,leaf:x.features.All&~x.features.FocusLock}):x.features.None},()=>T(ne,{},()=>j({ourProps:F,theirProps:{...S,...a},slot:Ee,attrs:a,slots:n,visible:y.value===0,features:Ae.RenderStrategy|Ae.Static,name:"Dialog"})))))),T(re)])}}}),oa=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:n}){var l;let r=(l=e.id)!=null?l:`headlessui-dialog-panel-${Ne()}`,o=st("DialogPanel");n({el:o.panelRef,$el:o.panelRef});function i(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:r,ref:o.panelRef,onClick:i};return j({ourProps:s,theirProps:u,slot:{open:o.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}}),Ke=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Qe(e){var t,a;let n=(t=e.innerText)!=null?t:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return n;let r=!1;for(let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),r=!0;let o=r?(a=l.innerText)!=null?a:"":n;return Ke.test(o)&&(o=o.replace(Ke,"")),o}function ia(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let a=e.getAttribute("aria-labelledby");if(a){let n=a.split(" ").map(l=>{let r=document.getElementById(l);if(r){let o=r.getAttribute("aria-label");return typeof o=="string"?o.trim():Qe(r).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return Qe(e).trim()}function Sa(e){let t=v(""),a=v("");return()=>{let n=E(e);if(!n)return"";let l=n.innerText;if(t.value===l)return a.value;let r=ia(n).trim().toLowerCase();return t.value=l,a.value=r,r}}function ua(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function Le(e,...t){e&&t.length>0&&e.classList.add(...t)}function de(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Me=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Me||{});function sa(e,t){let a=ge();if(!e)return a.dispose;let{transitionDuration:n,transitionDelay:l}=getComputedStyle(e),[r,o]=[n,l].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return r!==0?a.setTimeout(()=>t("finished"),r+o):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Je(e,t,a,n,l,r){let o=ge(),i=r!==void 0?ua(r):()=>{};return de(e,...l),Le(e,...t,...a),o.nextFrame(()=>{de(e,...a),Le(e,...n),o.add(sa(e,u=>(de(e,...n,...t),Le(e,...l),i(u))))}),o.add(()=>de(e,...t,...a,...n,...l)),o.add(()=>i("cancelled")),o.dispose}function V(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let je=Symbol("TransitionContext");var da=(e=>(e.Visible="visible",e.Hidden="hidden",e))(da||{});function fa(){return P(je,null)!==null}function ca(){let e=P(je,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function va(){let e=P(Ie,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ie=Symbol("NestingContext");function he(e){return"children"in e?he(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function dt(e){let t=v([]),a=v(!1);C(()=>a.value=!0),R(()=>a.value=!1);function n(r,o=U.Hidden){let i=t.value.findIndex(({id:u})=>u===r);i!==-1&&(z(o,{[U.Unmount](){t.value.splice(i,1)},[U.Hidden](){t.value[i].state="hidden"}}),!he(t)&&a.value&&(e==null||e()))}function l(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>n(r,U.Unmount)}return{children:t,register:l,unregister:n}}let ft=Ae.RenderStrategy,ct=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:l}){let r=v(0);function o(){r.value|=L.Opening,t("beforeEnter")}function i(){r.value&=~L.Opening,t("afterEnter")}function u(){r.value|=L.Closing,t("beforeLeave")}function s(){r.value&=~L.Closing,t("afterLeave")}if(!fa()&&bt())return()=>T(vt,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},n);let d=v(null),b=f(()=>e.unmount?U.Unmount:U.Hidden);l({el:d,$el:d});let{show:c,appear:g}=ca(),{register:m,unregister:w}=va(),y=v(c.value?"visible":"hidden"),M={value:!0},$=Ne(),I={value:!1},ae=dt(()=>{!I.value&&y.value!=="hidden"&&(y.value="hidden",w($),s())});C(()=>{let A=m($);R(A)}),O(()=>{if(b.value===U.Hidden&&$){if(c.value&&y.value!=="visible"){y.value="visible";return}z(y.value,{hidden:()=>w($),visible:()=>m($)})}});let ne=V(e.enter),G=V(e.enterFrom),le=V(e.enterTo),re=V(e.entered),ye=V(e.leave),oe=V(e.leaveFrom),be=V(e.leaveTo);C(()=>{O(()=>{if(y.value==="visible"){let A=E(d);if(A instanceof Comment&&A.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function we(A){let Z=M.value&&!g.value,k=E(d);!k||!(k instanceof HTMLElement)||Z||(I.value=!0,c.value&&o(),c.value||u(),A(c.value?Je(k,ne,G,le,re,B=>{I.value=!1,B===Me.Finished&&i()}):Je(k,ye,oe,be,re,B=>{I.value=!1,B===Me.Finished&&(he(ae)||(y.value="hidden",w($),s()))})))}return C(()=>{X([c],(A,Z,k)=>{we(k),M.value=!1},{immediate:!0})}),H(Ie,ae),wt(f(()=>z(y.value,{visible:L.Open,hidden:L.Closed})|r.value)),()=>{let{appear:A,show:Z,enter:k,enterFrom:B,enterTo:K,entered:Ve,leave:We,leaveFrom:Ue,leaveTo:p,...h}=e,S={ref:d},F={...h,...g.value&&c.value&&Xe.isServer?{class:N([a.class,h.class,...ne,...G])}:{}};return j({theirProps:F,ourProps:S,slot:{},slots:n,attrs:a,features:ft,visible:y.value==="visible",name:"TransitionChild"})}}}),pa=ct,vt=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n}){let l=xe(),r=f(()=>e.show===null&&l!==null?(l.value&L.Open)===L.Open:e.show);O(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(r.value?"visible":"hidden"),i=dt(()=>{o.value="hidden"}),u=v(!0),s={show:r,appear:f(()=>e.appear||!u.value)};return C(()=>{O(()=>{u.value=!1,r.value?o.value="visible":he(i)||(o.value="hidden")})}),H(Ie,i),H(je,s),()=>{let d=Et(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return j({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[T(pa,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...b,...d},n.default)]},attrs:{},features:ft,visible:o.value==="visible",name:"Transition"})}}});const ma=et(me.ui.strategy,me.ui.card,Ot),ga=D({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:a}=tt("card",Pe(e,"ui"),ma),n=f(()=>At(Pt(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:a,cardClass:n}}});function ha(e,t,a,n,l,r){return J(),ke(kt(e.$attrs.onSubmit?"form":e.as),pe({class:e.cardClass},e.attrs),{default:Q(()=>[e.$slots.header?(J(),Te("div",{key:0,class:N([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[ce(e.$slots,"header")],2)):ve("",!0),e.$slots.default?(J(),Te("div",{key:1,class:N([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[ce(e.$slots,"default")],2)):ve("",!0),e.$slots.footer?(J(),Te("div",{key:2,class:N([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[ce(e.$slots,"footer")],2)):ve("",!0)]),_:3},16,["class"])}const Fa=_e(ga,[["render",ha]]),ya=et(me.ui.strategy,me.ui.modal,Rt),ba=D({components:{HDialog:ra,HDialogPanel:oa,TransitionRoot:vt,TransitionChild:ct},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:a,attrs:n}=tt("modal",Pe(e,"ui"),ya,Pe(e,"class")),l=f({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),r=f(()=>e.transition?{...a.value.transition}:{});function o(u){if(e.preventClose){t("close-prevented");return}l.value=u,t("close")}const i=()=>{t("after-leave")};return Tt(()=>Bt("$HAJMhYDoe7")),{ui:a,attrs:n,isOpen:l,transitionClass:r,onAfterLeave:i,close:o}}});function wa(e,t,a,n,l,r){const o=ue("TransitionChild"),i=ue("HDialogPanel"),u=ue("HDialog"),s=ue("TransitionRoot");return J(),ke(s,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:Q(()=>[$e(u,pe({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:Q(()=>[e.overlay?(J(),ke(o,pe({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:Q(()=>[Se("div",{class:N([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):ve("",!0),Se("div",{class:N(e.ui.inner)},[Se("div",{class:N([e.ui.container,!e.fullscreen&&e.ui.padding])},[$e(o,pe({as:"template",appear:e.appear},e.transitionClass),{default:Q(()=>[$e(i,{class:N([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:Q(()=>[ce(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const La=_e(ba,[["render",wa]]);export{Fa as _,La as a,Sa as p};
