import{_ as Qe}from"./j5N2mJdv.js";import{A as J,r as j,B as f,ae as q,D as Xe,E as ie,s as se,ak as ce,F as ne,H as Ve,I as Ye,a3 as _,y as Ae,_ as me,J as be,Y as Je,K as N,al as Ze,G as ge,a7 as ze,L as pe,M as le,a5 as _e,Z as et,$ as Se,a0 as Q,ah as tt,ai as at,a1 as lt,O as Re,o as v,i as U,w as D,c as O,S as h,j as L,aa as oe,Q as E,a as S,R as ee,b as B,t as X,T as nt,x as ve,a9 as ot,d as Oe,l as Ie,am as it,an as st,ao as ut,k as rt,h as R,z as Be,p as dt,f as ct,n as pt}from"./DYBjf8ye.js";import{u as $e}from"./CK26FUvL.js";import{j as Pe,f as vt,c as T,w as ft,a as mt,h as bt,k as gt,m as je,o as De,b as ht,O as yt,p as wt,l as kt,n as Ct,e as Ot,r as St,g as It,d as Mt,u as Bt}from"./2eJZJmot.js";import{u as Y,o as x,t as Lt,i as fe,E as xe,A as ue,T as Te,I as he,s as He,l as Vt,N as Le,a as P,b as Ue}from"./UE33LfnU.js";import{p as At,a as zt,_ as Rt}from"./BQnaQMBg.js";import{u as Ee,_ as $t,a as Pt}from"./D1Ftz5oK.js";import{u as jt,_ as Dt,a as xt}from"./Dr-FdFOR.js";import{u as Tt}from"./ffT2bDCD.js";const Ht={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Ut={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}};function Et(e,m){return e===m}var Nt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Nt||{}),Ft=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ft||{}),qt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(qt||{});function Wt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ne=Symbol("ListboxContext");function ye(e){let m=Ae(Ne,null);if(m===null){let d=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,ye),d}return m}let Gt=J({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Et},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:m,attrs:d,emit:o}){let u=j(1),i=j(null),t=j(null),s=j(null),r=j([]),y=j(""),k=j(null),n=j(1);function l(a=c=>c){let c=k.value!==null?r.value[k.value]:null,b=yt(a(r.value.slice()),V=>x(V.dataRef.domRef)),w=c?b.indexOf(c):null;return w===-1&&(w=null),{options:b,activeOptionIndex:w}}let I=f(()=>e.multiple?1:0),[p,M]=Pe(f(()=>e.modelValue),a=>o("update:modelValue",a),f(()=>e.defaultValue)),$=f(()=>p.value===void 0?Y(I.value,{1:[],0:void 0}):p.value),C={listboxState:u,value:$,mode:I,compare(a,c){if(typeof e.by=="string"){let b=e.by;return(a==null?void 0:a[b])===(c==null?void 0:c[b])}return e.by(a,c)},orientation:f(()=>e.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:t,optionsRef:s,disabled:f(()=>e.disabled),options:r,searchQuery:y,activeOptionIndex:k,activationTrigger:n,closeListbox(){e.disabled||u.value!==1&&(u.value=1,k.value=null)},openListbox(){e.disabled||u.value!==0&&(u.value=0)},goToOption(a,c,b){if(e.disabled||u.value===1)return;let w=l(),V=vt(a===T.Specific?{focus:T.Specific,id:c}:{focus:a},{resolveItems:()=>w.options,resolveActiveIndex:()=>w.activeOptionIndex,resolveId:H=>H.id,resolveDisabled:H=>H.dataRef.disabled});y.value="",k.value=V,n.value=b??1,r.value=w.options},search(a){if(e.disabled||u.value===1)return;let c=y.value!==""?0:1;y.value+=a.toLowerCase();let b=(k.value!==null?r.value.slice(k.value+c).concat(r.value.slice(0,k.value+c)):r.value).find(V=>V.dataRef.textValue.startsWith(y.value)&&!V.dataRef.disabled),w=b?r.value.indexOf(b):-1;w===-1||w===k.value||(k.value=w,n.value=1)},clearSearch(){e.disabled||u.value!==1&&y.value!==""&&(y.value="")},registerOption(a,c){let b=l(w=>[...w,{id:a,dataRef:c}]);r.value=b.options,k.value=b.activeOptionIndex},unregisterOption(a){let c=l(b=>{let w=b.findIndex(V=>V.id===a);return w!==-1&&b.splice(w,1),b});r.value=c.options,k.value=c.activeOptionIndex,n.value=1},theirOnChange(a){e.disabled||M(a)},select(a){e.disabled||M(Y(I.value,{0:()=>a,1:()=>{let c=q(C.value.value).slice(),b=q(a),w=c.findIndex(V=>C.compare(b,q(V)));return w===-1?c.push(b):c.splice(w,1),c}}))}};ft([t,s],(a,c)=>{var b;C.closeListbox(),mt(c,bt.Loose)||(a.preventDefault(),(b=x(t))==null||b.focus())},f(()=>u.value===0)),Xe(Ne,C),Lt(f(()=>Y(u.value,{0:fe.Open,1:fe.Closed})));let g=f(()=>{var a;return(a=x(t))==null?void 0:a.closest("form")});return ie(()=>{se([g],()=>{if(!g.value||e.defaultValue===void 0)return;function a(){C.theirOnChange(e.defaultValue)}return g.value.addEventListener("reset",a),()=>{var c;(c=g.value)==null||c.removeEventListener("reset",a)}},{immediate:!0})}),()=>{let{name:a,modelValue:c,disabled:b,form:w,...V}=e,H={open:u.value===0,disabled:b,value:$.value};return ce(ne,[...a!=null&&$.value!=null?gt({[a]:$.value}).map(([te,ae])=>ce(je,xe({features:De.Hidden,key:te,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:w,disabled:b,name:te,value:ae}))):[],ue({ourProps:{},theirProps:{...d,...Te(V,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:H,slots:m,attrs:d,name:"Listbox"})])}}}),Kt=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:m,slots:d,expose:o}){var u;let i=(u=e.id)!=null?u:`headlessui-listbox-button-${he()}`,t=ye("ListboxButton");o({el:t.buttonRef,$el:t.buttonRef});function s(n){switch(n.key){case P.Space:case P.Enter:case P.ArrowDown:n.preventDefault(),t.openListbox(),_(()=>{var l;(l=x(t.optionsRef))==null||l.focus({preventScroll:!0}),t.value.value||t.goToOption(T.First)});break;case P.ArrowUp:n.preventDefault(),t.openListbox(),_(()=>{var l;(l=x(t.optionsRef))==null||l.focus({preventScroll:!0}),t.value.value||t.goToOption(T.Last)});break}}function r(n){switch(n.key){case P.Space:n.preventDefault();break}}function y(n){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),_(()=>{var l;return(l=x(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(n.preventDefault(),t.openListbox(),Wt(()=>{var l;return(l=x(t.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let k=He(f(()=>({as:e.as,type:m.type})),t.buttonRef);return()=>{var n,l;let I={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{...p}=e,M={ref:t.buttonRef,id:i,type:k.value,"aria-haspopup":"listbox","aria-controls":(n=x(t.optionsRef))==null?void 0:n.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(l=x(t.labelRef))==null?void 0:l.id,i].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:s,onKeyup:r,onClick:y};return ue({ourProps:M,theirProps:p,slot:I,attrs:m,slots:d,name:"ListboxButton"})}}}),Qt=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:m,slots:d,expose:o}){var u;let i=(u=e.id)!=null?u:`headlessui-listbox-options-${he()}`,t=ye("ListboxOptions"),s=j(null);o({el:t.optionsRef,$el:t.optionsRef});function r(n){switch(s.value&&clearTimeout(s.value),n.key){case P.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case P.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeOptionIndex.value!==null){let l=t.options.value[t.activeOptionIndex.value];t.select(l.dataRef.value)}t.mode.value===0&&(t.closeListbox(),_(()=>{var l;return(l=x(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case Y(t.orientation.value,{vertical:P.ArrowDown,horizontal:P.ArrowRight}):return n.preventDefault(),n.stopPropagation(),t.goToOption(T.Next);case Y(t.orientation.value,{vertical:P.ArrowUp,horizontal:P.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),t.goToOption(T.Previous);case P.Home:case P.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToOption(T.First);case P.End:case P.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToOption(T.Last);case P.Escape:n.preventDefault(),n.stopPropagation(),t.closeListbox(),_(()=>{var l;return(l=x(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case P.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(t.search(n.key),s.value=setTimeout(()=>t.clearSearch(),350));break}}let y=Vt(),k=f(()=>y!==null?(y.value&fe.Open)===fe.Open:t.listboxState.value===0);return()=>{var n,l;let I={open:t.listboxState.value===0},{...p}=e,M={"aria-activedescendant":t.activeOptionIndex.value===null||(n=t.options.value[t.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(l=x(t.buttonRef))==null?void 0:l.id,"aria-orientation":t.orientation.value,id:i,onKeydown:r,role:"listbox",tabIndex:0,ref:t.optionsRef};return ue({ourProps:M,theirProps:p,slot:I,attrs:m,slots:d,features:Le.RenderStrategy|Le.Static,visible:k.value,name:"ListboxOptions"})}}}),Xt=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:m,attrs:d,expose:o}){var u;let i=(u=e.id)!=null?u:`headlessui-listbox-option-${he()}`,t=ye("ListboxOption"),s=j(null);o({el:s,$el:s});let r=f(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===i:!1),y=f(()=>Y(t.mode.value,{0:()=>t.compare(q(t.value.value),q(e.value)),1:()=>q(t.value.value).some(a=>t.compare(q(a),q(e.value)))})),k=f(()=>Y(t.mode.value,{1:()=>{var a;let c=q(t.value.value);return((a=t.options.value.find(b=>c.some(w=>t.compare(q(w),q(b.dataRef.value)))))==null?void 0:a.id)===i},0:()=>y.value})),n=At(s),l=f(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:s}));ie(()=>t.registerOption(i,l)),Ve(()=>t.unregisterOption(i)),ie(()=>{se([t.listboxState,y],()=>{t.listboxState.value===0&&y.value&&Y(t.mode.value,{1:()=>{k.value&&t.goToOption(T.Specific,i)},0:()=>{t.goToOption(T.Specific,i)}})},{immediate:!0})}),Ye(()=>{t.listboxState.value===0&&r.value&&t.activationTrigger.value!==0&&_(()=>{var a,c;return(c=(a=x(s))==null?void 0:a.scrollIntoView)==null?void 0:c.call(a,{block:"nearest"})})});function I(a){if(e.disabled)return a.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),_(()=>{var c;return(c=x(t.buttonRef))==null?void 0:c.focus({preventScroll:!0})}))}function p(){if(e.disabled)return t.goToOption(T.Nothing);t.goToOption(T.Specific,i)}let M=ht();function $(a){M.update(a)}function C(a){M.wasMoved(a)&&(e.disabled||r.value||t.goToOption(T.Specific,i,0))}function g(a){M.wasMoved(a)&&(e.disabled||r.value&&t.goToOption(T.Nothing))}return()=>{let{disabled:a}=e,c={active:r.value,selected:y.value,disabled:a},{value:b,disabled:w,...V}=e,H={id:i,ref:s,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":y.value,disabled:void 0,onClick:I,onFocus:p,onPointerenter:$,onMouseenter:$,onPointermove:C,onMousemove:C,onPointerleave:g,onMouseleave:g};return ue({ourProps:H,theirProps:V,slot:c,attrs:d,slots:m,name:"ListboxOption"})}}}),Yt=Symbol("GroupContext"),Jt=J({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:m,attrs:d,slots:o,expose:u}){var i;let t=(i=e.id)!=null?i:`headlessui-switch-${he()}`,s=Ae(Yt,null),[r,y]=Pe(f(()=>e.modelValue),g=>m("update:modelValue",g),f(()=>e.defaultChecked));function k(){y(!r.value)}let n=j(null),l=s===null?n:s.switchRef,I=He(f(()=>({as:e.as,type:d.type})),l);u({el:l,$el:l});function p(g){g.preventDefault(),k()}function M(g){g.key===P.Space?(g.preventDefault(),k()):g.key===P.Enter&&wt(g.currentTarget)}function $(g){g.preventDefault()}let C=f(()=>{var g,a;return(a=(g=x(l))==null?void 0:g.closest)==null?void 0:a.call(g,"form")});return ie(()=>{se([C],()=>{if(!C.value||e.defaultChecked===void 0)return;function g(){y(e.defaultChecked)}return C.value.addEventListener("reset",g),()=>{var a;(a=C.value)==null||a.removeEventListener("reset",g)}},{immediate:!0})}),()=>{let{name:g,value:a,form:c,tabIndex:b,...w}=e,V={checked:r.value},H={id:t,ref:l,role:"switch",type:I.value,tabIndex:b===-1?0:b,"aria-checked":r.value,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:p,onKeyup:M,onKeypress:$};return ce(ne,[g!=null&&r.value!=null?ce(je,xe({features:De.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:r.value,form:c,disabled:w.disabled,name:g,value:a})):null,ue({ourProps:H,theirProps:{...d,...Te(w,["modelValue","defaultChecked"])},slot:V,attrs:d,slots:o,name:"Switch"})])}}});const K=be(N.ui.strategy,N.ui.select,Je),de=be(N.ui.strategy,N.ui.selectMenu,Ze),Zt=J({components:{HCombobox:kt,HComboboxButton:Ct,HComboboxOptions:Ot,HComboboxOption:St,HComboboxInput:It,HListbox:Gt,HListboxButton:Kt,HListboxOptions:Qt,HListboxOption:Xt,UIcon:ge,UAvatar:ze},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>K.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>K.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>de.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},searchableLazy:{type:Boolean,default:!1},clearSearchOnClose:{type:Boolean,default:()=>de.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>de.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(K.size).includes(e)}},color:{type:String,default:()=>K.default.color,validator(e){return[...N.ui.colors,...Object.keys(K.color)].includes(e)}},variant:{type:String,default:()=>K.default.variant,validator(e){return[...Object.keys(K.variant),...Object.values(K.color).flatMap(m=>Object.keys(m))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:m,slots:d}){const{ui:o,attrs:u}=pe("select",le(e,"ui"),K,le(e,"class")),{ui:i}=pe("selectMenu",le(e,"uiMenu"),de),t=f(()=>_e({},e.popper,i.value.popper)),[s,r]=Mt(t.value),{size:y,rounded:k}=et({ui:o,props:e}),{emitFormBlur:n,emitFormChange:l,inputId:I,color:p,size:M,name:$}=Ee(e,K),C=f(()=>y.value||M.value),g=j(""),a=f({get(){return e.query??g.value},set(z){g.value=z,m("update:query",z)}}),c=f(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue!==void 0&&e.modelValue!==null)if(e.valueAttribute){const z=e.options.find(F=>F[e.valueAttribute]===e.modelValue);return z?z[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),b=f(()=>{var F,re;const z=((re=(F=o.value.color)==null?void 0:F[p.value])==null?void 0:re[e.variant])||o.value.variant[e.variant];return Se(Q(o.value.base,i.value.select,k.value,o.value.size[C.value],o.value.gap[C.value],e.padded?o.value.padding[C.value]:"p-0",z==null?void 0:z.replaceAll("{color}",p.value),(w.value||d.leading)&&o.value.leading.padding[C.value],(V.value||d.trailing)&&o.value.trailing.padding[C.value]),e.placeholder&&e.modelValue===void 0&&e.modelValue===null&&o.value.placeholder,e.selectClass)}),w=f(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),V=f(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),H=f(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),te=f(()=>e.loading&&!w.value?e.loadingIcon:e.trailingIcon||e.icon),ae=f(()=>Q(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[C.value])),A=f(()=>Q(o.value.icon.base,p.value&&N.ui.colors.includes(p.value)&&o.value.icon.color.replaceAll("{color}",p.value),o.value.icon.size[C.value],e.loading&&o.value.icon.loading)),W=f(()=>Q(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[C.value])),G=f(()=>Q(o.value.icon.base,p.value&&N.ui.colors.includes(p.value)&&o.value.icon.color.replaceAll("{color}",p.value),o.value.icon.size[C.value],e.loading&&!w.value&&o.value.icon.loading)),Me=typeof e.searchable=="function"?tt(e.searchable,e.debounce):void 0,we=at(async()=>e.searchable&&Me?await Me(a.value):a.value===""?e.options:e.options.filter(z=>{var F;return((F=e.searchAttributes)!=null&&F.length?e.searchAttributes:[e.optionAttribute]).some(re=>{if(["string","number"].includes(typeof z))return String(z).search(new RegExp(a.value,"i"))!==-1;const ke=lt(z,re);return ke!=null&&String(ke).search(new RegExp(a.value,"i"))!==-1})}),[],{lazy:e.searchableLazy}),qe=f(()=>a.value===""||e.showCreateOptionWhen==="empty"&&we.value.length||e.showCreateOptionWhen==="always"&&we.value.find(F=>["string","number"].includes(typeof F)?F===a.value:F[e.optionAttribute]===a.value)?null:["string","number"].includes(typeof e.modelValue)?a.value:{[e.optionAttribute]:a.value});function We(){e.clearSearchOnClose&&(a.value="")}se(r,z=>{z?m("open"):(We(),m("close"),n())});function Ge(z){m("update:modelValue",z),m("change",z),l()}function Ke(z){a.value=z.target.value}return Ue(()=>$e("$YMH7mn4R4k")),{ui:o,uiMenu:i,attrs:u,name:$,inputId:I,popper:t,trigger:s,container:r,label:c,isLeading:w,isTrailing:V,selectClass:b,leadingIconName:H,leadingIconClass:A,leadingWrapperIconClass:ae,trailingIconName:te,trailingIconClass:G,trailingWrapperIconClass:W,filteredOptions:we,createOption:qe,query:a,onUpdate:Ge,onQueryChange:Ke}}}),_t=["value","required"],ea=["id","disabled"],ta={class:"truncate"};function aa(e,m,d,o,u,i){const t=ge,s=Re("HComboboxInput"),r=ze;return v(),U(oe(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:h(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:D(({open:y})=>[e.required?(v(),O("input",{key:0,value:e.modelValue,required:e.required,class:h(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,_t)):L("",!0),(v(),U(oe(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:h(e.uiMenu.trigger)},{default:D(()=>[E(e.$slots,"default",{open:y,disabled:e.disabled,loading:e.loading},()=>[S("button",ee({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(v(),O("span",{key:0,class:h(e.leadingWrapperIconClass)},[E(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[B(t,{name:e.leadingIconName,class:h(e.leadingIconClass)},null,8,["name","class"])])],2)):L("",!0),E(e.$slots,"label",{},()=>[e.label?(v(),O("span",{key:0,class:h(e.uiMenu.label)},X(e.label),3)):(v(),O("span",{key:1,class:h(e.uiMenu.label)},X(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(v(),O("span",{key:1,class:h(e.trailingWrapperIconClass)},[E(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[B(t,{name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):L("",!0)],16,ea)])]),_:2},1032,["class"])),y?(v(),O("div",{key:1,ref:"container",class:h([e.uiMenu.container,e.uiMenu.width])},[B(nt,ee({appear:""},e.uiMenu.transition),{default:D(()=>[S("div",null,[e.popper.arrow?(v(),O("div",{key:0,"data-popper-arrow":"",class:h(Object.values(e.uiMenu.arrow))},null,2)):L("",!0),(v(),U(oe(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:h([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:D(()=>{var k,n;return[e.searchable?(v(),U(s,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:h(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):L("",!0),(v(!0),O(ne,null,ve(e.filteredOptions,(l,I)=>(v(),U(oe(e.searchable?"HComboboxOption":"HListboxOption"),{key:I,as:"template",value:e.valueAttribute?l[e.valueAttribute]:l,disabled:l.disabled},{default:D(({active:p,selected:M,disabled:$})=>[S("li",{class:h([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,p?e.uiMenu.option.active:e.uiMenu.option.inactive,M&&e.uiMenu.option.selected,$&&e.uiMenu.option.disabled])},[S("div",{class:h(e.uiMenu.option.container)},[E(e.$slots,"option",{option:l,active:p,selected:M},()=>[l.icon?(v(),U(t,{key:0,name:l.icon,class:h([e.uiMenu.option.icon.base,p?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,l.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):l.avatar?(v(),U(r,ee({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...l.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):l.chip?(v(),O("span",{key:2,class:h(e.uiMenu.option.chip.base),style:ot({background:`#${l.chip}`})},null,6)):L("",!0),S("span",ta,X(["string","number"].includes(typeof l)?l:l[e.optionAttribute]),1)])],2),M?(v(),O("span",{key:0,class:h([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[B(t,{name:e.selectedIcon,class:h(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):L("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(v(),U(oe(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:D(({active:l,selected:I})=>[S("li",{class:h([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,l?e.uiMenu.option.active:e.uiMenu.option.inactive])},[S("div",{class:h(e.uiMenu.option.container)},[E(e.$slots,"option-create",{option:e.createOption,active:l,selected:I},()=>[S("span",{class:h(e.uiMenu.option.create)},'Create "'+X(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((k=e.filteredOptions)!=null&&k.length)?(v(),O("p",{key:2,class:h(e.uiMenu.option.empty)},[E(e.$slots,"option-empty",{query:e.query},()=>[Oe(' No results for "'+X(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?L("",!0):(v(),O("p",{key:3,class:h(e.uiMenu.empty)},[E(e.$slots,"empty",{query:e.query},()=>[Oe(" No options. ")])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):L("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const la=me(Zt,[["render",aa]]),Z=be(N.ui.strategy,N.ui.toggle,Ut),na=J({components:{HSwitch:Jt,UIcon:ge},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>Z.default.onIcon},offIcon:{type:String,default:()=>Z.default.offIcon},loadingIcon:{type:String,default:()=>Z.default.loadingIcon},color:{type:String,default:()=>Z.default.color,validator(e){return N.ui.colors.includes(e)}},size:{type:String,default:()=>Z.default.size,validator(e){return Object.keys(Z.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:m}){const{ui:d,attrs:o}=pe("toggle",le(e,"ui"),Z),{emitFormChange:u,color:i,inputId:t,name:s}=Ee(e),r=f({get(){return e.modelValue},set(p){m("update:modelValue",p),m("change",p),u()}}),y=f(()=>Se(Q(d.value.base,d.value.size[e.size],d.value.rounded,i.value&&d.value.ring.replaceAll("{color}",i.value),i.value&&(r.value?d.value.active:d.value.inactive).replaceAll("{color}",i.value)),e.class)),k=f(()=>Q(d.value.container.base,d.value.container.size[e.size],r.value?d.value.container.active[e.size]:d.value.container.inactive)),n=f(()=>Q(d.value.icon.size[e.size],i.value&&d.value.icon.on.replaceAll("{color}",i.value))),l=f(()=>Q(d.value.icon.size[e.size],i.value&&d.value.icon.off.replaceAll("{color}",i.value))),I=f(()=>Q(d.value.icon.size[e.size],i.value&&d.value.icon.loading.replaceAll("{color}",i.value)));return Ue(()=>$e("$mRW6KdlcYH")),{ui:d,attrs:o,name:s,inputId:t,active:r,switchClass:y,containerClass:k,onIconClass:n,offIconClass:l,loadingIconClass:I}}});function oa(e,m,d,o,u,i){const t=ge,s=Re("HSwitch");return v(),U(s,ee({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":m[0]||(m[0]=r=>e.active=r),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:D(()=>[S("span",{class:h(e.containerClass)},[e.loading?(v(),O("span",{key:0,class:h([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[B(t,{name:e.loadingIcon,class:h(e.loadingIconClass)},null,8,["name","class"])],2)):L("",!0),!e.loading&&e.onIcon?(v(),O("span",{key:1,class:h([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[B(t,{name:e.onIcon,class:h(e.onIconClass)},null,8,["name","class"])],2)):L("",!0),!e.loading&&e.offIcon?(v(),O("span",{key:2,class:h([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[B(t,{name:e.offIcon,class:h(e.offIconClass)},null,8,["name","class"])],2)):L("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const ia=me(na,[["render",oa]]),sa=e=>{const m=j(0);function d(i){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",m.value=i.pageX,window.addEventListener("mousemove",u),window.addEventListener("mouseup",o)}function o(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",o)}function u(i){i.preventDefault();const t=i.pageX-m.value;m.value=i.pageX,e.value.scrollBy(-t,0)}ie(()=>{e.value&&e.value.addEventListener("mousedown",d)}),Ve(()=>{e.value&&e.value.removeEventListener("mousedown",d)})},Ce=be(N.ui.strategy,N.ui.carousel,Ht),ua=J({components:{UButton:Ie},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>Ce.default.prevButton},nextButton:{type:Object,default:()=>Ce.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:m}){const{ui:d,attrs:o}=pe("carousel",le(e,"ui"),Ce,le(e,"class")),u=j(),i=j(0),{x:t}=it(u,{behavior:"smooth"}),{width:s}=st(u);sa(u),ut(u,M=>{var C,g;const[$]=M;i.value=((g=(C=$==null?void 0:$.target)==null?void 0:C.firstElementChild)==null?void 0:g.clientWidth)||0});const r=f(()=>i.value?Math.round(t.value/i.value)+1:0),y=f(()=>i.value?e.items.length-Math.round(s.value/i.value)+1:0),k=f(()=>r.value<=1),n=f(()=>r.value===y.value);function l(){t.value+=i.value}function I(){t.value-=i.value}function p(M){t.value=(M-1)*i.value}return m({pages:y,page:r,prev:I,next:l,select:p}),{ui:d,attrs:o,isFirst:k,isLast:n,carouselRef:u,pages:y,currentPage:r,onClickNext:l,onClickPrev:I,onClick:p,twMerge:Se}}}),ra=["role"],da=["aria-selected","aria-label","onClick"];function ca(e,m,d,o,u,i){const t=Ie;return v(),O("div",ee({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:h([e.ui.container,"no-scrollbar"])},[(v(!0),O(ne,null,ve(e.items,(s,r)=>(v(),O("div",{key:r,class:h(e.ui.item),role:e.indicators?"tabpanel":null},[E(e.$slots,"default",{item:s,index:r},void 0,!0)],10,ra))),128))],2),e.arrows?(v(),O("div",{key:0,class:h(e.ui.arrows.wrapper)},[E(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var s;return[e.prevButton?(v(),U(t,ee({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(s=e.prevButton)==null?void 0:s.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):L("",!0)]},!0),E(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var s;return[e.nextButton?(v(),U(t,ee({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(s=e.nextButton)==null?void 0:s.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):L("",!0)]},!0)],2)):L("",!0),e.indicators?(v(),O("div",{key:1,role:"tablist",class:h(e.ui.indicators.wrapper)},[(v(!0),O(ne,null,ve(e.pages,s=>E(e.$slots,"indicator",{key:s,onClick:e.onClick,active:s===e.currentPage,page:s},()=>[S("button",{type:"button",role:"tab","aria-selected":s===e.currentPage,class:h([e.ui.indicators.base,s===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${s}`,onClick:r=>e.onClick(s)},null,10,da)],!0)),128))],2)):L("",!0)],16)}const pa=me(ua,[["render",ca],["__scopeId","data-v-ea54307d"]]),Fe=e=>(dt("data-v-2aa03788"),e=e(),ct(),e),va={class:"pt-4",id:"wrapper"},fa=Fe(()=>S("h1",{class:"mt-4 text-[1.75rem] font-extrabold leading-9 tracking-tight text-[#132C87] md:text-4xl"}," Commencez à recruter plus rapidment. ",-1)),ma={class:"grid grid-cols-12 gap-4 items-center pt-8"},ba=["innerHTML"],ga={key:1,class:"col-span-12 w-full"},ha={key:0},ya={class:"flex items-center justify-between"},wa=Fe(()=>S("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Recherche ",-1)),ka={class:"p-4 h-full"},Ca={key:0,class:"col-span-12 sm:col-span-11"},Oa={key:0,class:"w-full"},Sa={class:"mt-1 text-md font-extrabold leading-9 tracking-tight text-slate-900 md:text-xl"},Ia={draggable:"false",class:"shadow-md w-full bg-white border border-gray-200 rounded-lg px-3"},Ma={class:"flex justify-around items-center py-3"},Ba={class:"flex justify-between gap-4 items-center"},La=["src"],Va=["src"],Aa={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white lowercase"},za={class:"text-sm text-gray-500 dark:text-gray-400"},Ra={class:"flex justify-around gap-4 pb-2 mx-10"},$a=["href"],Pa=["href"],ja={__name:"recrutement",setup(e){const m=pt(),{data:d}=Bt();let o=j({category:[],tags:[],cv:!0,profil_photo:!0}),u=j(!1),i=j(null);const{data:t,loading:s,fetchData:r,error:y}=jt("/hub/mission/recrutement-rapide","POST",o.value);se(t,(I,p)=>{I!==p&&(i.value=I==null?void 0:I.data,u.value=!u.value)});const k=async()=>{r()},n=j(!0),l=()=>{n.value=!1,t.value=null,setTimeout(()=>{n.value=!0},0)};return Tt({title:"Tableau de bord - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Tableau de bord - Freeci Hub",description:"Le tableau de bord Freeci Hub vous permet de gérer et de trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(I,p)=>{var ae;const M=Qe,$=la,C=$t,g=Pt,a=ia,c=Ie,b=Dt,w=xt,V=pa,H=Rt,te=zt;return v(),O("div",va,[B(M,{icon:"i-heroicons-bolt",color:"white",variant:"solid",title:"Recrutement rapide!",description:"Recrutez plus rapidement un ou plusieurs talents maintenant. "}),fa,S("section",ma,[S("form",{class:"col-span-12 xl:col-span-10 grid grid-cols-12 gap-6 h-96",onSubmit:rt(k,["prevent"])},[R(y)?(v(),U(M,{key:0,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full my-4 z-50",color:"red",variant:"solid"},{title:D(({title:A})=>[S("span",{innerHTML:A},null,8,ba)]),description:D(()=>[S("ul",null,[(v(!0),O(ne,null,ve(R(y),(A,W)=>(v(),O("li",{key:W},X(A[0]),1))),128))])]),_:1})):L("",!0),B(C,{class:"col-span-12 lg:col-span-6",label:"Sélectionnez catégories",description:"Sélectionnez un ou plusieurs catégories."},{default:D(()=>{var A;return[B($,{modelValue:R(o).category,"onUpdate:modelValue":p[0]||(p[0]=W=>R(o).category=W),options:(A=R(d))==null?void 0:A.categories.map(W=>W.name),multiple:"",color:"#132C87",icon:"i-heroicons-tag",size:"lg",placeholder:"Sélectionner"},null,8,["modelValue","options"])]}),_:1}),B(C,{class:"col-span-12 lg:col-span-6",label:"Compétences",description:"Séparez chaque compétence par une virgule."},{default:D(()=>[B(g,{placeholder:"Exemple : React , Node.js , Devops",icon:"i-heroicons-hashtag",color:"#132C87",size:"lg",modelValue:R(o).tags,"onUpdate:modelValue":p[1]||(p[1]=A=>R(o).tags=A)},null,8,["modelValue"])]),_:1}),B(C,{class:"col-span-6",label:"Avec un CV ",description:"Ayant un CV sur son compte ? "},{default:D(()=>[B(a,{"on-icon":"i-heroicons-check-20-solid","off-icon":"i-heroicons-x-mark-20-solid",modelValue:R(o).cv,"onUpdate:modelValue":p[2]||(p[2]=A=>R(o).cv=A),size:"lg"},null,8,["modelValue"])]),_:1}),B(C,{class:"col-span-6",label:"Photo de profile",description:"Ayant une photo de profile sur son compte ? "},{default:D(()=>[B(a,{"on-icon":"i-heroicons-check-20-solid","off-icon":"i-heroicons-x-mark-20-solid",modelValue:R(o).profil_photo,"onUpdate:modelValue":p[3]||(p[3]=A=>R(o).profil_photo=A),size:"lg"},null,8,["modelValue"])]),_:1}),B(c,{color:"blue",variant:"solid",trailing:!1,label:"Démarrer",class:"col-start-4 col-end-8 flex justify-center text-lg shadow-md mt-6 p-0",size:"lg",loading:R(s),type:"submit"},null,8,["loading"]),R(t)?(v(),O("div",ga,[((ae=R(t))==null?void 0:ae.data.length)==0?(v(),O("div",ha,[n.value?(v(),U(M,{key:0,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"gray",variant:"link",padded:!1},onClose:l,icon:"i-heroicons-information-circle",color:"yellow",variant:"soft",title:"Oups , aucun!",description:"Aucun profil ne correspond à avotre demande."})):L("",!0)])):L("",!0)])):L("",!0)],32),B(te,{modelValue:R(u),"onUpdate:modelValue":p[5]||(p[5]=A=>Be(u)?u.value=A:u=A),fullscreen:"","prevent-close":""},{default:D(()=>[B(H,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:D(()=>[S("div",ya,[wa,B(c,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:p[4]||(p[4]=A=>Be(u)?u.value=!1:u=!1)})])]),default:D(()=>{var A,W;return[S("div",ka,[R(t)?(v(),O("div",Ca,[((A=R(t))==null?void 0:A.data.length)>0?(v(),O("div",Oa,[S("h1",Sa,X((W=R(t))==null?void 0:W.data.length)+" Profile(s) trouvé(s) ",1),B(V,{items:R(i),ui:{item:"basis-full",container:"rounded-lg"},"prev-button":{color:"gray",icon:"i-heroicons-arrow-left-20-solid",class:"-left-12"},"next-button":{color:"gray",icon:"i-heroicons-arrow-right-20-solid",class:"-right-12"},arrows:"",class:"w-3/4 mx-auto"},{default:D(({item:G})=>[S("div",Ia,[S("div",Ma,[S("div",Ba,[G.profil_photo?(v(),O("img",{key:0,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:R(m).public.urlBase+"/storage/profil_photo/"+G.profil_photo,alt:"Profile image"},null,8,La)):(v(),O("img",{key:1,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+G.name+"&background=132C87&color=fff",alt:"Profile image"},null,8,Va)),S("div",null,[S("h5",Aa,X(G.name),1),S("span",za,X(G.email),1)])]),B(b,{ui:{rounded:"rounded-full"},size:"md",color:"green"},{default:D(()=>[Oe(X(G.job),1)]),_:2},1024)]),B(w,{class:"py-4 pr-3"}),S("div",Ra,[S("a",{href:R(m).public.urlBase+"freelancer/"+G.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,$a),S("a",{href:"https://wa.me/2250161333655?text=Freeci Hub , besoin du CV et  numréo de : "+G.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Obtenir CV + Numéro ",8,Pa)])])]),_:1},8,["items"])])):L("",!0)])):L("",!0)])]}),_:1})]),_:1},8,["modelValue"])])])}}},Wa=me(ja,[["__scopeId","data-v-2aa03788"]]);export{Wa as default};
