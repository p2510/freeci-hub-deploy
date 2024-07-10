import{_ as oe,K as J,af as se,L as p,ag as re,A as de,G as K,a7 as Z,M as W,N as L,B as u,a5 as ce,Z as ge,r as be,$ as pe,a0 as y,ah as fe,ai as me,a1 as ve,s as ye,P as h,o as t,i as M,w as I,a as C,T as i,b as m,S as G,c as d,R as A,j as b,U as he,F as Me,x as Ie,a9 as Ce,t as Q,d as D}from"./C3EGuF6Z.js";import{u as Ae}from"./tCz79pYD.js";import{l as Se,n as ke,e as Oe,r as Be,g as ze,d as qe}from"./CszmEnh-.js";import{b as we}from"./B8T-Zw5C.js";import{u as Ne}from"./Bt5b1ZVN.js";const s=J(p.ui.strategy,p.ui.input,se),T=J(p.ui.strategy,p.ui.inputMenu,re),He=de({components:{HCombobox:Se,HComboboxButton:ke,HComboboxOptions:Oe,HComboboxOption:Be,HComboboxInput:ze,UIcon:K,UAvatar:Z},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>T.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...p.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},searchLazy:{type:Boolean,default:!1},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:r,slots:q}){const{ui:a,attrs:E}=W("input",L(e,"ui"),s,L(e,"class")),{ui:w}=W("inputMenu",L(e,"uiMenu"),T),S=u(()=>ce({},e.popper,w.value.popper)),[f,k]=qe(S.value),{size:N,rounded:H}=ge({ui:a,props:e}),{emitFormBlur:V,emitFormChange:$,inputId:j,color:n,size:U,name:v}=Ne(e,s),o=u(()=>N.value||U.value),O=be(""),c=u({get(){return e.query??O.value},set(l){O.value=l,r("update:query",l)}}),X=u(()=>{if(e.modelValue)if(e.valueAttribute){const l=e.options.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),Y=u(()=>{var g,z;const l=((z=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:z[e.variant])||a.value.variant[e.variant];return pe(y(a.value.base,a.value.form,H.value,a.value.placeholder,a.value.size[o.value],e.padded?a.value.padding[o.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(B.value||q.leading)&&a.value.leading.padding[o.value],(P.value||q.trailing)&&a.value.trailing.padding[o.value]),e.inputClass)}),B=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),P=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=u(()=>e.loading&&!B.value?e.loadingIcon:e.trailingIcon||e.icon),ee=u(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[o.value])),ae=u(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),ne=u(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[o.value])),le=u(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&!B.value&&a.value.icon.loading)),R=e.search&&typeof e.search=="function"?fe(e.search,e.debounce):void 0,ie=me(async()=>R?await R(c.value):c.value===""?e.options:e.options.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(z=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const F=ve(l,z);return F!=null&&String(F).search(new RegExp(c.value,"i"))!==-1})}),[],{lazy:e.searchLazy});ye(k,l=>{l?r("open"):(r("close"),V())});function ue(l){c.value="",r("update:modelValue",l),r("change",l),$()}function te(l){c.value=l.target.value}return we(()=>Ae("$2NLPEfaykI")),{ui:a,uiMenu:w,attrs:E,name:v,inputId:j,popper:S,trigger:f,container:k,label:X,isLeading:B,isTrailing:P,inputClass:Y,leadingIconName:_,leadingIconClass:ae,leadingWrapperIconClass:ee,trailingIconName:x,trailingIconClass:le,trailingWrapperIconClass:ne,filteredOptions:ie,query:c,onUpdate:ue,onQueryChange:te}}}),Ve={class:"truncate"};function $e(e,r,q,a,E,w){const S=h("HComboboxInput"),f=K,k=h("HComboboxButton"),N=Z,H=h("HComboboxOption"),V=h("HComboboxOptions"),$=h("HCombobox");return t(),M($,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:i(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:I(({open:j})=>[C("div",{class:i(e.uiMenu.trigger)},[m(S,G({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onQueryChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(t(),d("span",{key:0,class:i(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[m(f,{name:e.leadingIconName,class:i(e.leadingIconClass)},null,8,["name","class"])])],2)):b("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(t(),M(k,{key:1,ref:"trigger",class:i(e.trailingWrapperIconClass)},{default:I(()=>[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[m(f,{name:e.trailingIconName,class:i(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):b("",!0)],2),j?(t(),d("div",{key:0,ref:"container",class:i([e.uiMenu.container,e.uiMenu.width])},[m(he,G({appear:""},e.uiMenu.transition),{default:I(()=>[C("div",null,[e.popper.arrow?(t(),d("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.uiMenu.arrow))},null,2)):b("",!0),m(V,{static:"",class:i([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:I(()=>[(t(!0),d(Me,null,Ie(e.filteredOptions,(n,U)=>(t(),M(H,{key:U,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:I(({active:v,selected:o,disabled:O})=>[C("li",{class:i([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,v?e.uiMenu.option.active:e.uiMenu.option.inactive,o&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[C("div",{class:i(e.uiMenu.option.container)},[A(e.$slots,"option",{option:n,active:v,selected:o},()=>[n.icon?(t(),M(f,{key:0,name:n.icon,class:i([e.uiMenu.option.icon.base,v?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(t(),M(N,G({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(t(),d("span",{key:2,class:i(e.uiMenu.option.chip.base),style:Ce({background:`#${n.chip}`})},null,6)):b("",!0),C("span",Ve,Q(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),o?(t(),d("span",{key:0,class:i([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[m(f,{name:e.selectedIcon,class:i(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):b("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(t(),d("p",{key:0,class:i(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[D(' No results for "'+Q(e.query)+'". ',1)])],2)):e.filteredOptions.length?b("",!0):(t(),d("p",{key:1,class:i(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[D(" No options. ")])],2))]),_:3},8,["class"])])]),_:3},16)],2)):b("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const Te=oe(He,[["render",$e]]);export{Te as _};
