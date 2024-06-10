import{_ as W,O as J,Q as k,C as L,y as q,a5 as P,q as x,R as K,S as T,D as u,V as D,W as j,o as n,c as r,a as A,Z as p,N as g,l as m,G as B,X as Z,k as V,Y as b,m as E,d as C,t as w,J as F,r as U,aj as ce,ah as ge,U as fe,a1 as ve,h as me,b as G,a2 as ye,au as pe,L as be,I as he,ab as O,av as ke}from"./B8adq5HH.js";const $e={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},Ie={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},S=J(k.ui.strategy,k.ui.alert,$e),ze=L({components:{UIcon:q,UAvatar:P,UButton:x},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>S.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>S.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>S.default.color,validator(e){return[...k.ui.colors,...Object.keys(S.color)].includes(e)}},variant:{type:String,default:()=>S.default.variant,validator(e){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(l=>Object.keys(l))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:l,attrs:i}=K("alert",T(e,"ui"),S),a=u(()=>{var c,o;const d=((o=(c=l.value.color)==null?void 0:c[e.color])==null?void 0:o[e.variant])||l.value.variant[e.variant];return D(j(l.value.wrapper,l.value.rounded,l.value.shadow,l.value.padding,d==null?void 0:d.replaceAll("{color}",e.color)),e.class)});function f(d){d.click&&d.click()}return{ui:l,attrs:i,alertClass:a,onAction:f,twMerge:D}}});function Se(e,l,i,a,f,d){const c=q,o=P,y=x;return n(),r("div",b({class:e.alertClass},e.attrs),[A("div",{class:g(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[p(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(n(),V(c,{key:0,name:e.icon,ui:e.ui.icon.base},null,8,["name","ui"])):m("",!0)]),p(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(n(),V(o,b({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):m("",!0)]),A("div",{class:g(e.ui.inner)},[e.title||e.$slots.title?(n(),r("p",{key:0,class:g(e.ui.title)},[p(e.$slots,"title",{title:e.title},()=>[C(w(e.title),1)])],2)):m("",!0),e.description||e.$slots.description?(n(),r("p",{key:1,class:g(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[p(e.$slots,"description",{description:e.description},()=>[C(w(e.description),1)])],2)):m("",!0),(e.description||e.$slots.description)&&e.actions.length?(n(),r("div",{key:2,class:g(e.ui.actions)},[(n(!0),r(B,null,Z(e.actions,(v,t)=>(n(),V(y,b({key:t,ref_for:!0},{...e.ui.default.actionButton||{},...v},{onClick:E(h=>e.onAction(v),["stop"])}),null,16,["onClick"]))),128))],2)):m("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(n(),r("div",{key:0,class:g(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(n(!0),r(B,{key:0},Z(e.actions,(v,t)=>(n(),V(y,b({key:t,ref_for:!0},{...e.ui.default.actionButton||{},...v},{onClick:E(h=>e.onAction(v),["stop"])}),null,16,["onClick"]))),128)):m("",!0),e.closeButton?(n(),V(y,b({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:l[0]||(l[0]=E(v=>e.$emit("close"),["stop"]))}),null,16)):m("",!0)],2)):m("",!0)],2)],16)}const qe=W(ze,[["render",Se]]),Be=(e,l)=>{const i=F("form-events",void 0),a=F("form-group",void 0),f=F("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),f&&(f.value[a.name.value]=a.inputId.value));const d=U(!1);function c(t,h){i&&i.emit({type:t,path:h})}function o(){c("blur",a==null?void 0:a.name.value),d.value=!0}function y(){c("change",a==null?void 0:a.name.value)}const v=ce(()=>{(d.value||a!=null&&a.eagerValidation.value)&&c("input",a==null?void 0:a.name.value)},300);return{inputId:u(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:u(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:u(()=>{var h;const t=l.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??t??((h=l==null?void 0:l.default)==null?void 0:h.size)}),color:u(()=>{var t;return(t=a==null?void 0:a.error)!=null&&t.value?"red":e==null?void 0:e.color}),emitFormBlur:o,emitFormInput:v,emitFormChange:y}},$=J(k.ui.strategy,k.ui.input,ge),Ce=L({components:{UIcon:q},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>$.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys($.size).includes(e)}},color:{type:String,default:()=>$.default.color,validator(e){return[...k.ui.colors,...Object.keys($.color)].includes(e)}},variant:{type:String,default:()=>$.default.variant,validator(e){return[...Object.keys($.variant),...Object.values($.color).flatMap(l=>Object.keys(l))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:l,slots:i}){const{ui:a,attrs:f}=K("input",T(e,"ui"),$,T(e,"class")),{size:d,rounded:c}=fe({ui:a,props:e}),{emitFormBlur:o,emitFormInput:y,size:v,color:t,inputId:h,name:_}=Be(e,$),I=u(()=>d.value||v.value),N=U(ve({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),Y=U(null),ee=()=>{var s;e.autofocus&&((s=Y.value)==null||s.focus())},H=s=>{N.value.trim&&(s=s.trim()),(N.value.number||e.type==="number")&&(s=ye(s)),l("update:modelValue",s),y()},ae=s=>{N.value.lazy||H(s.target.value)},le=s=>{if(e.type==="file"){const z=s.target.files;l("change",z)}else{const z=s.target.value;l("change",z),N.value.lazy&&H(z),N.value.trim&&(s.target.value=z.trim())}},ne=s=>{o(),l("blur",s)};me(()=>{setTimeout(()=>{ee()},e.autofocusDelay)});const te=u(()=>{var z,X;const s=((X=(z=a.value.color)==null?void 0:z[t.value])==null?void 0:X[e.variant])||a.value.variant[e.variant];return D(j(a.value.base,a.value.form,c.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[I.value],e.padded?a.value.padding[I.value]:"p-0",s==null?void 0:s.replaceAll("{color}",t.value),(M.value||i.leading)&&a.value.leading.padding[I.value],(Q.value||i.trailing)&&a.value.trailing.padding[I.value]),e.inputClass)}),M=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),Q=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),ie=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),re=u(()=>e.loading&&!M.value?e.loadingIcon:e.trailingIcon||e.icon),oe=u(()=>j(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[I.value])),se=u(()=>j(a.value.icon.base,t.value&&k.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[I.value],e.loading&&a.value.icon.loading)),ue=u(()=>j(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[I.value])),de=u(()=>j(a.value.icon.base,t.value&&k.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[I.value],e.loading&&!M.value&&a.value.icon.loading));return{ui:a,attrs:f,name:_,inputId:h,input:Y,isLeading:M,isTrailing:Q,inputClass:te,leadingIconName:ie,leadingIconClass:se,leadingWrapperIconClass:oe,trailingIconName:re,trailingIconClass:de,trailingWrapperIconClass:ue,onInput:ae,onChange:le,onBlur:ne}}}),we=["id","name","value","type","required","placeholder","disabled"];function Oe(e,l,i,a,f,d){const c=q;return n(),r("div",{class:g(e.ui.wrapper)},[A("input",b({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:l[0]||(l[0]=(...o)=>e.onInput&&e.onInput(...o)),onBlur:l[1]||(l[1]=(...o)=>e.onBlur&&e.onBlur(...o)),onChange:l[2]||(l[2]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,we),p(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(n(),r("span",{key:0,class:g(e.leadingWrapperIconClass)},[p(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[G(c,{name:e.leadingIconName,class:g(e.leadingIconClass)},null,8,["name","class"])])],2)):m("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(n(),r("span",{key:1,class:g(e.trailingWrapperIconClass)},[p(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[G(c,{name:e.trailingIconName,class:g(e.trailingIconClass)},null,8,["name","class"])])],2)):m("",!0)],2)}const Ee=W(Ce,[["render",Oe]]),je=Symbol.for("nuxt:client-only"),Ae="data-n-ids",Ne="-";function Ve(e){var f,d,c,o,y,v;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const l=pe(),i=be();if(!i)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");l._id||(l._id=0),i._nuxtIdIndex||(i._nuxtIdIndex={}),(f=i._nuxtIdIndex)[e]||(f[e]=0);const a=e+Ne+i._nuxtIdIndex[e]++;if(l.payload.serverRendered&&l.isHydrating&&!F(je,!1)){const t=((d=i.vnode.el)==null?void 0:d.nodeType)===8&&((o=(c=i.vnode.el)==null?void 0:c.nextElementSibling)!=null&&o.getAttribute)?(y=i.vnode.el)==null?void 0:y.nextElementSibling:i.vnode.el,h=JSON.parse(((v=t==null?void 0:t.getAttribute)==null?void 0:v.call(t,Ae))||"{}");if(h[a])return h[a]}return e+"_"+l._id++}const R=J(k.ui.strategy,k.ui.formGroup,Ie),Fe=L({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(R.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:l,attrs:i}=K("formGroup",T(e,"ui"),R,T(e,"class")),a=F("form-errors",null),f=u(()=>{var o,y;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(y=(o=a==null?void 0:a.value)==null?void 0:o.find(v=>v.path===e.name))==null?void 0:y.message}),d=u(()=>l.value.size[e.size??R.default.size]),c=U(Ve("$K7dDJpdOWE"));return he("form-group",{error:f,inputId:c,name:u(()=>e.name),size:u(()=>e.size),eagerValidation:u(()=>e.eagerValidation)}),{ui:l,attrs:i,inputId:c,size:d,error:f}}}),Te=["for"];function Me(e,l,i,a,f,d){return n(),r("div",b({class:e.ui.wrapper},e.attrs),[A("div",{class:g(e.ui.inner)},[e.label||e.$slots.label?(n(),r("div",{key:0,class:g([e.ui.label.wrapper,e.size])},[A("label",{for:e.inputId,class:g([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?p(e.$slots,"label",O(b({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),r(B,{key:1},[C(w(e.label),1)],64))],10,Te),e.hint||e.$slots.hint?(n(),r("span",{key:0,class:g([e.ui.hint])},[e.$slots.hint?p(e.$slots,"hint",O(b({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),r(B,{key:1},[C(w(e.hint),1)],64))],2)):m("",!0)],2)):m("",!0),e.description||e.$slots.description?(n(),r("p",{key:1,class:g([e.ui.description,e.size])},[e.$slots.description?p(e.$slots,"description",O(b({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),r(B,{key:1},[C(w(e.description),1)],64))],2)):m("",!0)],2),A("div",{class:g([e.label?e.ui.container:""])},[p(e.$slots,"default",O(ke({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(n(),r("p",{key:0,class:g([e.ui.error,e.size])},[e.$slots.error?p(e.$slots,"error",O(b({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),r(B,{key:1},[C(w(e.error),1)],64))],2)):e.help||e.$slots.help?(n(),r("p",{key:1,class:g([e.ui.help,e.size])},[e.$slots.help?p(e.$slots,"help",O(b({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),r(B,{key:1},[C(w(e.help),1)],64))],2)):m("",!0)],2)],16)}const Re=W(Fe,[["render",Me]]);export{Re as _,Ee as a,qe as b,Ve as c,Be as u};
