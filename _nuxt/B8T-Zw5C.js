import{D as w,y as j,r as P,E as T,J as C,av as D,ak as H,F as U}from"./C3EGuF6Z.js";let O=Symbol("headlessui.useid"),N=0;function J(){return j(O,()=>`${++N}`)()}function V(e){w(O,e)}function b(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function E(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}function v(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Y(e,t){let n=P(v(e.value.type,e.value.as));return T(()=>{n.value=v(e.value.type,e.value.as)}),C(()=>{var r;n.value||b(t)&&b(t)instanceof HTMLButtonElement&&!((r=b(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var R=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(R||{}),L=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(L||{});function q({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var s;let i=A(r,n),u=Object.assign(o,{props:i});if(e||t&2&&i.static)return m(u);if(t&1){let p=(s=i.unmount)==null||s?0:1;return E(p,{0(){return null},1(){return m({...o,props:{...i,hidden:!0,style:{display:"none"}}})}})}return m(u)}function m({props:e,attrs:t,slots:n,slot:r,name:o}){var s,i;let{as:u,...p}=x(e,["unmount","static"]),l=(s=n.default)==null?void 0:s.call(n,r),g={};if(r){let c=!1,h=[];for(let[d,f]of Object.entries(r))typeof f=="boolean"&&(c=!0),f===!0&&h.push(d);c&&(g["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(l=$(l??[]),Object.keys(p).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!B(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(a=>a.trim()).filter((a,y,S)=>S.indexOf(a)===y).sort((a,y)=>a.localeCompare(y)).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let d=A((i=c.props)!=null?i:{},p,g),f=D(c,d,!0);for(let a in d)a.startsWith("on")&&(f.props||(f.props={}),f.props[a]=d[a]);return f}return Array.isArray(l)&&l.length===1?l[0]:l}return H(u,Object.assign({},p,g),{default:()=>l})}function $(e){return e.flatMap(t=>t.type===U?$(t.children):[t])}function A(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...s){let i=n[r];for(let u of i){if(o instanceof Event&&o.defaultPrevented)return;u(o,...s)}}});return t}function z(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function x(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function B(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let k=Symbol("Context");var M=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(M||{});function G(){return F()!==null}function F(){return j(k,null)}function K(e){w(k,e)}var W=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(W||{});export{q as A,z as E,J as I,R as N,L as S,x as T,W as a,V as b,G as c,M as i,F as l,b as o,Y as s,K as t,E as u};
