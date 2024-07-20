import{_ as z,K as N,L as y,A as I,G as S,a7 as O,l as U,M as V,N as F,B as L,$ as w,a0 as R,o,c as n,a as B,R as g,T as l,j as a,F as h,x as C,i as u,S as c,k as v,d as A,t as j}from"./C8vjBnMy.js";const T={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},r=N(y.ui.strategy,y.ui.alert,T),D=I({components:{UIcon:S,UAvatar:O,UButton:U},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>r.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>r.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>r.default.color,validator(e){return[...y.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:m}=V("alert",F(e,"ui"),r),b=L(()=>{var d,p;const i=((p=(d=t.value.color)==null?void 0:d[e.color])==null?void 0:p[e.variant])||t.value.variant[e.variant];return w(R(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,i==null?void 0:i.replaceAll("{color}",e.color)),e.class)});function $(i){i.click&&i.click()}return{ui:t,attrs:m,alertClass:b,onAction:$,twMerge:w}}});function E(e,t,m,b,$,i){const d=S,p=O,f=U;return o(),n("div",c({class:e.alertClass},e.attrs),[B("div",{class:l(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[g(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(o(),u(d,{key:0,name:e.icon,ui:e.ui.icon.base},null,8,["name","ui"])):a("",!0)]),g(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(o(),u(p,c({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):a("",!0)]),B("div",{class:l(e.ui.inner)},[e.title||e.$slots.title?(o(),n("p",{key:0,class:l(e.ui.title)},[g(e.$slots,"title",{title:e.title},()=>[A(j(e.title),1)])],2)):a("",!0),e.description||e.$slots.description?(o(),n("p",{key:1,class:l(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[g(e.$slots,"description",{description:e.description},()=>[A(j(e.description),1)])],2)):a("",!0),(e.description||e.$slots.description)&&e.actions.length?(o(),n("div",{key:2,class:l(e.ui.actions)},[(o(!0),n(h,null,C(e.actions,(s,k)=>(o(),u(f,c({key:k,ref_for:!0},{...e.ui.default.actionButton||{},...s},{onClick:v(M=>e.onAction(s),["stop"])}),null,16,["onClick"]))),128))],2)):a("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),n("div",{key:0,class:l(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(o(!0),n(h,{key:0},C(e.actions,(s,k)=>(o(),u(f,c({key:k,ref_for:!0},{...e.ui.default.actionButton||{},...s},{onClick:v(M=>e.onAction(s),["stop"])}),null,16,["onClick"]))),128)):a("",!0),e.closeButton?(o(),u(f,c({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=v(s=>e.$emit("close"),["stop"]))}),null,16)):a("",!0)],2)):a("",!0)],2)],16)}const J=z(D,[["render",E]]);export{J as _};
