import{_ as oe,O as J,ah as se,Q as p,ai as re,C as de,y as K,a5 as X,R,S as G,D as u,a1 as ce,U as ge,r as be,V as pe,W as y,aj as fe,ak as me,$ as ve,x as ye,a4 as h,o as t,k as I,w as M,a as C,N as i,b as m,Y as L,c as d,Z as S,l as b,a8 as he,G as Ie,X as Me,a7 as Ce,t as T,d as P}from"./B8adq5HH.js";import{u as Se,c as Ae}from"./LGTw4oUr.js";import{F as ke,G as Oe,H as ze,J as Be,K as qe,E as we,D as He}from"./C9plLxLi.js";const s=J(p.ui.strategy,p.ui.input,se),E=J(p.ui.strategy,p.ui.inputMenu,re),Ne=de({components:{HCombobox:ke,HComboboxButton:Oe,HComboboxOptions:ze,HComboboxOption:Be,HComboboxInput:qe,UIcon:K,UAvatar:X},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>E.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>E.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...p.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},searchLazy:{type:Boolean,default:!1},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:r,slots:q}){const{ui:a,attrs:W}=R("input",G(e,"ui"),s,G(e,"class")),{ui:w}=R("inputMenu",G(e,"uiMenu"),E),A=u(()=>ce({},e.popper,w.value.popper)),[f,k]=we(A.value),{size:H,rounded:N}=ge({ui:a,props:e}),{emitFormBlur:V,emitFormChange:$,inputId:j,color:n,size:U,name:v}=Se(e,s),o=u(()=>H.value||U.value),O=be(""),c=u({get(){return e.query??O.value},set(l){O.value=l,r("update:query",l)}}),Y=u(()=>{if(e.modelValue)if(e.valueAttribute){const l=e.options.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),Z=u(()=>{var g,B;const l=((B=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:B[e.variant])||a.value.variant[e.variant];return pe(y(a.value.base,a.value.form,N.value,a.value.placeholder,a.value.size[o.value],e.padded?a.value.padding[o.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(z.value||q.leading)&&a.value.leading.padding[o.value],(D.value||q.trailing)&&a.value.trailing.padding[o.value]),e.inputClass)}),z=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),D=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=u(()=>e.loading&&!z.value?e.loadingIcon:e.trailingIcon||e.icon),ee=u(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[o.value])),ae=u(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),ne=u(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[o.value])),le=u(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&!z.value&&a.value.icon.loading)),Q=e.search&&typeof e.search=="function"?fe(e.search,e.debounce):void 0,ie=me(async()=>Q?await Q(c.value):c.value===""?e.options:e.options.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(B=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const F=ve(l,B);return F!=null&&String(F).search(new RegExp(c.value,"i"))!==-1})}),[],{lazy:e.searchLazy});ye(k,l=>{l?r("open"):(r("close"),V())});function ue(l){c.value="",r("update:modelValue",l),r("change",l),$()}function te(l){c.value=l.target.value}return He(()=>Ae("$2NLPEfaykI")),{ui:a,uiMenu:w,attrs:W,name:v,inputId:j,popper:A,trigger:f,container:k,label:Y,isLeading:z,isTrailing:D,inputClass:Z,leadingIconName:_,leadingIconClass:ae,leadingWrapperIconClass:ee,trailingIconName:x,trailingIconClass:le,trailingWrapperIconClass:ne,filteredOptions:ie,query:c,onUpdate:ue,onQueryChange:te}}}),Ve={class:"truncate"};function $e(e,r,q,a,W,w){const A=h("HComboboxInput"),f=K,k=h("HComboboxButton"),H=X,N=h("HComboboxOption"),V=h("HComboboxOptions"),$=h("HCombobox");return t(),I($,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:i(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:M(({open:j})=>[C("div",{class:i(e.uiMenu.trigger)},[m(A,L({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onQueryChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(t(),d("span",{key:0,class:i(e.leadingWrapperIconClass)},[S(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[m(f,{name:e.leadingIconName,class:i(e.leadingIconClass)},null,8,["name","class"])])],2)):b("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(t(),I(k,{key:1,ref:"trigger",class:i(e.trailingWrapperIconClass)},{default:M(()=>[S(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[m(f,{name:e.trailingIconName,class:i(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):b("",!0)],2),j?(t(),d("div",{key:0,ref:"container",class:i([e.uiMenu.container,e.uiMenu.width])},[m(he,L({appear:""},e.uiMenu.transition),{default:M(()=>[C("div",null,[e.popper.arrow?(t(),d("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.uiMenu.arrow))},null,2)):b("",!0),m(V,{static:"",class:i([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:M(()=>[(t(!0),d(Ie,null,Me(e.filteredOptions,(n,U)=>(t(),I(N,{key:U,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:M(({active:v,selected:o,disabled:O})=>[C("li",{class:i([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,v?e.uiMenu.option.active:e.uiMenu.option.inactive,o&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[C("div",{class:i(e.uiMenu.option.container)},[S(e.$slots,"option",{option:n,active:v,selected:o},()=>[n.icon?(t(),I(f,{key:0,name:n.icon,class:i([e.uiMenu.option.icon.base,v?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(t(),I(H,L({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(t(),d("span",{key:2,class:i(e.uiMenu.option.chip.base),style:Ce({background:`#${n.chip}`})},null,6)):b("",!0),C("span",Ve,T(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),o?(t(),d("span",{key:0,class:i([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[m(f,{name:e.selectedIcon,class:i(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):b("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(t(),d("p",{key:0,class:i(e.uiMenu.option.empty)},[S(e.$slots,"option-empty",{query:e.query},()=>[P(' No results for "'+T(e.query)+'". ',1)])],2)):e.filteredOptions.length?b("",!0):(t(),d("p",{key:1,class:i(e.uiMenu.empty)},[S(e.$slots,"empty",{query:e.query},()=>[P(" No options. ")])],2))]),_:3},8,["class"])])]),_:3},16)],2)):b("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const Ge=oe(Ne,[["render",$e]]);export{Ge as _};
