import{r as m,n as N,_ as w,I as $,K as g,A as C,L as j,M as S,N as U,B as f,O,P as p,o as c,c as y,S as _,d as R,t as A,Q as k,G as B,a7 as I,a as x,R as u,F as D,i as h,j as z}from"./DE6Mul_y.js";const F={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},G={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},q=(e,a="GET",l=null)=>{const n=`${N().public.apiBase}${e}`,r=m(null),t=m(null),s=m(!1);return{data:r,error:t,loading:s,fetchData:async()=>{s.value=!0;try{const d=await $fetch(n,{method:a,body:l});r.value=d}catch(d){d.data&&d.data.errors?t.value=d.data.errors:t.value={message:d.message}}finally{s.value=!1}}}},o=$(g.ui.strategy,g.ui.badge,F),M=C({inheritAttrs:!1,props:{size:{type:String,default:()=>o.default.size,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...g.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(a=>Object.keys(a))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:l}=j("badge",S(e,"ui"),o),{size:i,rounded:n}=U({ui:a,props:e}),r=f(()=>{var s,v;const t=((v=(s=a.value.color)==null?void 0:s[e.color])==null?void 0:v[e.variant])||a.value.variant[e.variant];return O(p(a.value.base,a.value.font,n.value,a.value.size[i.value],t==null?void 0:t.replaceAll("{color}",e.color)),e.class)});return{attrs:l,badgeClass:r}}});function V(e,a,l,i,n,r){return c(),y("span",k({class:e.badgeClass},e.attrs),[_(e.$slots,"default",{},()=>[R(A(e.label),1)])],16)}const J=w(M,[["render",V]]),b=$(g.ui.strategy,g.ui.divider,G),E=C({components:{UIcon:B,UAvatar:I},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>b.default.size,validator(e){return Object.keys(b.border.size.horizontal).includes(e)||Object.keys(b.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:l}=j("divider",S(e,"ui"),b),i=f(()=>O(p(a.value.wrapper.base,a.value.wrapper[e.orientation]),e.class)),n=f(()=>p(a.value.container.base,a.value.container[e.orientation])),r=f(()=>p(a.value.border.base,a.value.border[e.orientation],a.value.border.size[e.orientation][e.size],a.value.border.type[e.type]));return{ui:a,attrs:l,wrapperClass:i,containerClass:n,borderClass:r}}});function P(e,a,l,i,n,r){const t=B,s=I;return c(),y("div",k({class:e.wrapperClass},e.attrs),[x("div",{class:u(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(c(),y(D,{key:0},[x("div",{class:u(e.containerClass)},[_(e.$slots,"default",{},()=>[e.label?(c(),y("span",{key:0,class:u(e.ui.label)},A(e.label),3)):e.icon?(c(),h(t,{key:1,name:e.icon,class:u(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(c(),h(s,k({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):z("",!0)])],2),x("div",{class:u(e.borderClass)},null,2)],64)):z("",!0)],16)}const K=w(E,[["render",P]]);export{J as _,K as a,q as u};
