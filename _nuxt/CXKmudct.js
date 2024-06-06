import{u as Oe,c as Ce,b as Ee,_ as _e,a as We}from"./CnNS5TEg.js";import{C as Z,r as P,D as c,I as Ge,h as se,x as te,F as re,G as ce,E as Ke,B as Qe,M as X,J as ke,ad as N,_ as he,O as ye,P as Je,Q as W,am as Ye,y as pe,a5 as Ie,R as ge,S as ie,a1 as Xe,U as Ze,V as Me,W as _,aj as ea,ak as aa,$ as ta,a4 as Ve,o as d,k as $,w as j,c as k,N as y,l as D,a3 as ee,Z as G,a as M,Y as ue,b as L,t as F,a8 as la,X as Ae,a7 as na,d as ae,m as oa,j as x,q as ia,p as ua,f as sa,s as ra}from"./CRczJCI3.js";import{L as xe,a as K,v as da,x as U,h as ca,m as pa,n as va,o as T,p as fa,g as de,M as ba,f as ze,Q as Le,u as Be,A as le,C as Re,I as ve,s as De,l as ma,j as Se,r as ga,O as ha,k as B,R as ya,F as wa,G as Sa,H as Oa,J as Ca,K as ka,E as Ia,D as je}from"./CQp5AU6f.js";import{p as Ma}from"./BakZFxIE.js";import{u as Va,_ as Aa,a as xa}from"./D57Fz6IT.js";import{_ as za}from"./B3-S_5x5.js";import{u as La}from"./D7AKbwRX.js";import{u as Ba}from"./B2S4EmZ-.js";const Ra={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}};function Da(e,v){return e===v}var ja=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ja||{}),Pa=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Pa||{}),Ta=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ta||{});function Ha(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Pe=Symbol("ListboxContext");function fe(e){let v=ke(Pe,null);if(v===null){let s=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,fe),s}return v}let Ua=Z({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Da},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:v,attrs:s,emit:o}){let h=P(1),u=P(null),a=P(null),m=P(null),r=P([]),w=P(""),g=P(null),n=P(1);function l(t=i=>i){let i=g.value!==null?r.value[g.value]:null,p=ha(t(r.value.slice()),V=>T(V.dataRef.domRef)),b=i?p.indexOf(i):null;return b===-1&&(b=null),{options:p,activeOptionIndex:b}}let S=c(()=>e.multiple?1:0),[O,z]=xe(c(()=>e.modelValue),t=>o("update:modelValue",t),c(()=>e.defaultValue)),R=c(()=>O.value===void 0?K(S.value,{1:[],0:void 0}):O.value),I={listboxState:h,value:R,mode:S,compare(t,i){if(typeof e.by=="string"){let p=e.by;return(t==null?void 0:t[p])===(i==null?void 0:i[p])}return e.by(t,i)},orientation:c(()=>e.horizontal?"horizontal":"vertical"),labelRef:u,buttonRef:a,optionsRef:m,disabled:c(()=>e.disabled),options:r,searchQuery:w,activeOptionIndex:g,activationTrigger:n,closeListbox(){e.disabled||h.value!==1&&(h.value=1,g.value=null)},openListbox(){e.disabled||h.value!==0&&(h.value=0)},goToOption(t,i,p){if(e.disabled||h.value===1)return;let b=l(),V=da(t===U.Specific?{focus:U.Specific,id:i}:{focus:t},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:H=>H.id,resolveDisabled:H=>H.dataRef.disabled});w.value="",g.value=V,n.value=p??1,r.value=b.options},search(t){if(e.disabled||h.value===1)return;let i=w.value!==""?0:1;w.value+=t.toLowerCase();let p=(g.value!==null?r.value.slice(g.value+i).concat(r.value.slice(0,g.value+i)):r.value).find(V=>V.dataRef.textValue.startsWith(w.value)&&!V.dataRef.disabled),b=p?r.value.indexOf(p):-1;b===-1||b===g.value||(g.value=b,n.value=1)},clearSearch(){e.disabled||h.value!==1&&w.value!==""&&(w.value="")},registerOption(t,i){let p=l(b=>[...b,{id:t,dataRef:i}]);r.value=p.options,g.value=p.activeOptionIndex},unregisterOption(t){let i=l(p=>{let b=p.findIndex(V=>V.id===t);return b!==-1&&p.splice(b,1),p});r.value=i.options,g.value=i.activeOptionIndex,n.value=1},theirOnChange(t){e.disabled||z(t)},select(t){e.disabled||z(K(S.value,{0:()=>t,1:()=>{let i=N(I.value.value).slice(),p=N(t),b=i.findIndex(V=>I.compare(p,N(V)));return b===-1?i.push(p):i.splice(b,1),i}}))}};ca([a,m],(t,i)=>{var p;I.closeListbox(),pa(i,va.Loose)||(t.preventDefault(),(p=T(a))==null||p.focus())},c(()=>h.value===0)),Ge(Pe,I),fa(c(()=>K(h.value,{0:de.Open,1:de.Closed})));let f=c(()=>{var t;return(t=T(a))==null?void 0:t.closest("form")});return se(()=>{te([f],()=>{if(!f.value||e.defaultValue===void 0)return;function t(){I.theirOnChange(e.defaultValue)}return f.value.addEventListener("reset",t),()=>{var i;(i=f.value)==null||i.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{name:t,modelValue:i,disabled:p,form:b,...V}=e,H={open:h.value===0,disabled:p,value:R.value};return re(ce,[...t!=null&&R.value!=null?ba({[t]:R.value}).map(([Q,C])=>re(ze,Le({features:Be.Hidden,key:Q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:b,disabled:p,name:Q,value:C}))):[],le({ourProps:{},theirProps:{...s,...Re(V,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:H,slots:v,attrs:s,name:"Listbox"})])}}}),$a=Z({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:v,slots:s,expose:o}){var h;let u=(h=e.id)!=null?h:`headlessui-listbox-button-${ve()}`,a=fe("ListboxButton");o({el:a.buttonRef,$el:a.buttonRef});function m(n){switch(n.key){case B.Space:case B.Enter:case B.ArrowDown:n.preventDefault(),a.openListbox(),X(()=>{var l;(l=T(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(U.First)});break;case B.ArrowUp:n.preventDefault(),a.openListbox(),X(()=>{var l;(l=T(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(U.Last)});break}}function r(n){switch(n.key){case B.Space:n.preventDefault();break}}function w(n){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),X(()=>{var l;return(l=T(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(n.preventDefault(),a.openListbox(),Ha(()=>{var l;return(l=T(a.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let g=De(c(()=>({as:e.as,type:v.type})),a.buttonRef);return()=>{var n,l;let S={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...O}=e,z={ref:a.buttonRef,id:u,type:g.value,"aria-haspopup":"listbox","aria-controls":(n=T(a.optionsRef))==null?void 0:n.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(l=T(a.labelRef))==null?void 0:l.id,u].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:m,onKeyup:r,onClick:w};return le({ourProps:z,theirProps:O,slot:S,attrs:v,slots:s,name:"ListboxButton"})}}}),qa=Z({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:v,slots:s,expose:o}){var h;let u=(h=e.id)!=null?h:`headlessui-listbox-options-${ve()}`,a=fe("ListboxOptions"),m=P(null);o({el:a.optionsRef,$el:a.optionsRef});function r(n){switch(m.value&&clearTimeout(m.value),n.key){case B.Space:if(a.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),a.search(n.key);case B.Enter:if(n.preventDefault(),n.stopPropagation(),a.activeOptionIndex.value!==null){let l=a.options.value[a.activeOptionIndex.value];a.select(l.dataRef.value)}a.mode.value===0&&(a.closeListbox(),X(()=>{var l;return(l=T(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case K(a.orientation.value,{vertical:B.ArrowDown,horizontal:B.ArrowRight}):return n.preventDefault(),n.stopPropagation(),a.goToOption(U.Next);case K(a.orientation.value,{vertical:B.ArrowUp,horizontal:B.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),a.goToOption(U.Previous);case B.Home:case B.PageUp:return n.preventDefault(),n.stopPropagation(),a.goToOption(U.First);case B.End:case B.PageDown:return n.preventDefault(),n.stopPropagation(),a.goToOption(U.Last);case B.Escape:n.preventDefault(),n.stopPropagation(),a.closeListbox(),X(()=>{var l;return(l=T(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case B.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(a.search(n.key),m.value=setTimeout(()=>a.clearSearch(),350));break}}let w=ma(),g=c(()=>w!==null?(w.value&de.Open)===de.Open:a.listboxState.value===0);return()=>{var n,l;let S={open:a.listboxState.value===0},{...O}=e,z={"aria-activedescendant":a.activeOptionIndex.value===null||(n=a.options.value[a.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(l=T(a.buttonRef))==null?void 0:l.id,"aria-orientation":a.orientation.value,id:u,onKeydown:r,role:"listbox",tabIndex:0,ref:a.optionsRef};return le({ourProps:z,theirProps:O,slot:S,attrs:v,slots:s,features:Se.RenderStrategy|Se.Static,visible:g.value,name:"ListboxOptions"})}}}),Na=Z({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:v,attrs:s,expose:o}){var h;let u=(h=e.id)!=null?h:`headlessui-listbox-option-${ve()}`,a=fe("ListboxOption"),m=P(null);o({el:m,$el:m});let r=c(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===u:!1),w=c(()=>K(a.mode.value,{0:()=>a.compare(N(a.value.value),N(e.value)),1:()=>N(a.value.value).some(t=>a.compare(N(t),N(e.value)))})),g=c(()=>K(a.mode.value,{1:()=>{var t;let i=N(a.value.value);return((t=a.options.value.find(p=>i.some(b=>a.compare(N(b),N(p.dataRef.value)))))==null?void 0:t.id)===u},0:()=>w.value})),n=Ma(m),l=c(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:m}));se(()=>a.registerOption(u,l)),Ke(()=>a.unregisterOption(u)),se(()=>{te([a.listboxState,w],()=>{a.listboxState.value===0&&w.value&&K(a.mode.value,{1:()=>{g.value&&a.goToOption(U.Specific,u)},0:()=>{a.goToOption(U.Specific,u)}})},{immediate:!0})}),Qe(()=>{a.listboxState.value===0&&r.value&&a.activationTrigger.value!==0&&X(()=>{var t,i;return(i=(t=T(m))==null?void 0:t.scrollIntoView)==null?void 0:i.call(t,{block:"nearest"})})});function S(t){if(e.disabled)return t.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),X(()=>{var i;return(i=T(a.buttonRef))==null?void 0:i.focus({preventScroll:!0})}))}function O(){if(e.disabled)return a.goToOption(U.Nothing);a.goToOption(U.Specific,u)}let z=ga();function R(t){z.update(t)}function I(t){z.wasMoved(t)&&(e.disabled||r.value||a.goToOption(U.Specific,u,0))}function f(t){z.wasMoved(t)&&(e.disabled||r.value&&a.goToOption(U.Nothing))}return()=>{let{disabled:t}=e,i={active:r.value,selected:w.value,disabled:t},{value:p,disabled:b,...V}=e,H={id:u,ref:m,role:"option",tabIndex:t===!0?void 0:-1,"aria-disabled":t===!0?!0:void 0,"aria-selected":w.value,disabled:void 0,onClick:S,onFocus:O,onPointerenter:R,onMouseenter:R,onPointermove:I,onMousemove:I,onPointerleave:f,onMouseleave:f};return le({ourProps:H,theirProps:V,slot:i,attrs:s,slots:v,name:"ListboxOption"})}}}),Fa=Symbol("GroupContext"),Ea=Z({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:v,attrs:s,slots:o,expose:h}){var u;let a=(u=e.id)!=null?u:`headlessui-switch-${ve()}`,m=ke(Fa,null),[r,w]=xe(c(()=>e.modelValue),f=>v("update:modelValue",f),c(()=>e.defaultChecked));function g(){w(!r.value)}let n=P(null),l=m===null?n:m.switchRef,S=De(c(()=>({as:e.as,type:s.type})),l);h({el:l,$el:l});function O(f){f.preventDefault(),g()}function z(f){f.key===B.Space?(f.preventDefault(),g()):f.key===B.Enter&&ya(f.currentTarget)}function R(f){f.preventDefault()}let I=c(()=>{var f,t;return(t=(f=T(l))==null?void 0:f.closest)==null?void 0:t.call(f,"form")});return se(()=>{te([I],()=>{if(!I.value||e.defaultChecked===void 0)return;function f(){w(e.defaultChecked)}return I.value.addEventListener("reset",f),()=>{var t;(t=I.value)==null||t.removeEventListener("reset",f)}},{immediate:!0})}),()=>{let{name:f,value:t,form:i,tabIndex:p,...b}=e,V={checked:r.value},H={id:a,ref:l,role:"switch",type:S.value,tabIndex:p===-1?0:p,"aria-checked":r.value,"aria-labelledby":m==null?void 0:m.labelledby.value,"aria-describedby":m==null?void 0:m.describedby.value,onClick:O,onKeyup:z,onKeypress:R};return re(ce,[f!=null&&r.value!=null?re(ze,Le({features:Be.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:r.value,form:i,disabled:b.disabled,name:f,value:t})):null,le({ourProps:H,theirProps:{...s,...Re(b,["modelValue","defaultChecked"])},slot:V,attrs:s,slots:o,name:"Switch"})])}}});const E=ye(W.ui.strategy,W.ui.select,Je),oe=ye(W.ui.strategy,W.ui.selectMenu,Ye),_a=Z({components:{HCombobox:wa,HComboboxButton:Sa,HComboboxOptions:Oa,HComboboxOption:Ca,HComboboxInput:ka,HListbox:Ua,HListboxButton:$a,HListboxOptions:qa,HListboxOption:Na,UIcon:pe,UAvatar:Ie},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>E.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>E.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>oe.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},searchableLazy:{type:Boolean,default:!1},clearSearchOnClose:{type:Boolean,default:()=>oe.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>oe.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(E.size).includes(e)}},color:{type:String,default:()=>E.default.color,validator(e){return[...W.ui.colors,...Object.keys(E.color)].includes(e)}},variant:{type:String,default:()=>E.default.variant,validator(e){return[...Object.keys(E.variant),...Object.values(E.color).flatMap(v=>Object.keys(v))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:v,slots:s}){const{ui:o,attrs:h}=ge("select",ie(e,"ui"),E,ie(e,"class")),{ui:u}=ge("selectMenu",ie(e,"uiMenu"),oe),a=c(()=>Xe({},e.popper,u.value.popper)),[m,r]=Ia(a.value),{size:w,rounded:g}=Ze({ui:o,props:e}),{emitFormBlur:n,emitFormChange:l,inputId:S,color:O,size:z,name:R}=Oe(e,E),I=c(()=>w.value||z.value),f=P(""),t=c({get(){return e.query??f.value},set(A){f.value=A,v("update:query",A)}}),i=c(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue!==void 0&&e.modelValue!==null)if(e.valueAttribute){const A=e.options.find(q=>q[e.valueAttribute]===e.modelValue);return A?A[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),p=c(()=>{var q,ne;const A=((ne=(q=o.value.color)==null?void 0:q[O.value])==null?void 0:ne[e.variant])||o.value.variant[e.variant];return Me(_(o.value.base,u.value.select,g.value,o.value.size[I.value],o.value.gap[I.value],e.padded?o.value.padding[I.value]:"p-0",A==null?void 0:A.replaceAll("{color}",O.value),(b.value||s.leading)&&o.value.leading.padding[I.value],(V.value||s.trailing)&&o.value.trailing.padding[I.value]),e.placeholder&&e.modelValue===void 0&&e.modelValue===null&&o.value.placeholder,e.selectClass)}),b=c(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),V=c(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),H=c(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Q=c(()=>e.loading&&!b.value?e.loadingIcon:e.trailingIcon||e.icon),C=c(()=>_(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[I.value])),J=c(()=>_(o.value.icon.base,O.value&&W.ui.colors.includes(O.value)&&o.value.icon.color.replaceAll("{color}",O.value),o.value.icon.size[I.value],e.loading&&o.value.icon.loading)),He=c(()=>_(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[I.value])),Ue=c(()=>_(o.value.icon.base,O.value&&W.ui.colors.includes(O.value)&&o.value.icon.color.replaceAll("{color}",O.value),o.value.icon.size[I.value],e.loading&&!b.value&&o.value.icon.loading)),we=typeof e.searchable=="function"?ea(e.searchable,e.debounce):void 0,be=aa(async()=>e.searchable&&we?await we(t.value):t.value===""?e.options:e.options.filter(A=>{var q;return((q=e.searchAttributes)!=null&&q.length?e.searchAttributes:[e.optionAttribute]).some(ne=>{if(["string","number"].includes(typeof A))return String(A).search(new RegExp(t.value,"i"))!==-1;const me=ta(A,ne);return me!=null&&String(me).search(new RegExp(t.value,"i"))!==-1})}),[],{lazy:e.searchableLazy}),$e=c(()=>t.value===""||e.showCreateOptionWhen==="empty"&&be.value.length||e.showCreateOptionWhen==="always"&&be.value.find(q=>["string","number"].includes(typeof q)?q===t.value:q[e.optionAttribute]===t.value)?null:["string","number"].includes(typeof e.modelValue)?t.value:{[e.optionAttribute]:t.value});function qe(){e.clearSearchOnClose&&(t.value="")}te(r,A=>{A?v("open"):(qe(),v("close"),n())});function Ne(A){v("update:modelValue",A),v("change",A),l()}function Fe(A){t.value=A.target.value}return je(()=>Ce("$YMH7mn4R4k")),{ui:o,uiMenu:u,attrs:h,name:R,inputId:S,popper:a,trigger:m,container:r,label:i,isLeading:b,isTrailing:V,selectClass:p,leadingIconName:H,leadingIconClass:J,leadingWrapperIconClass:C,trailingIconName:Q,trailingIconClass:Ue,trailingWrapperIconClass:He,filteredOptions:be,createOption:$e,query:t,onUpdate:Ne,onQueryChange:Fe}}}),Wa=["value","required"],Ga=["id","disabled"],Ka={class:"truncate"};function Qa(e,v,s,o,h,u){const a=pe,m=Ve("HComboboxInput"),r=Ie;return d(),$(ee(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:y(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:j(({open:w})=>[e.required?(d(),k("input",{key:0,value:e.modelValue,required:e.required,class:y(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,Wa)):D("",!0),(d(),$(ee(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:y(e.uiMenu.trigger)},{default:j(()=>[G(e.$slots,"default",{open:w,disabled:e.disabled,loading:e.loading},()=>[M("button",ue({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(d(),k("span",{key:0,class:y(e.leadingWrapperIconClass)},[G(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[L(a,{name:e.leadingIconName,class:y(e.leadingIconClass)},null,8,["name","class"])])],2)):D("",!0),G(e.$slots,"label",{},()=>[e.label?(d(),k("span",{key:0,class:y(e.uiMenu.label)},F(e.label),3)):(d(),k("span",{key:1,class:y(e.uiMenu.label)},F(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(d(),k("span",{key:1,class:y(e.trailingWrapperIconClass)},[G(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[L(a,{name:e.trailingIconName,class:y(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):D("",!0)],16,Ga)])]),_:2},1032,["class"])),w?(d(),k("div",{key:1,ref:"container",class:y([e.uiMenu.container,e.uiMenu.width])},[L(la,ue({appear:""},e.uiMenu.transition),{default:j(()=>[M("div",null,[e.popper.arrow?(d(),k("div",{key:0,"data-popper-arrow":"",class:y(Object.values(e.uiMenu.arrow))},null,2)):D("",!0),(d(),$(ee(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:y([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:j(()=>{var g,n;return[e.searchable?(d(),$(m,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:y(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):D("",!0),(d(!0),k(ce,null,Ae(e.filteredOptions,(l,S)=>(d(),$(ee(e.searchable?"HComboboxOption":"HListboxOption"),{key:S,as:"template",value:e.valueAttribute?l[e.valueAttribute]:l,disabled:l.disabled},{default:j(({active:O,selected:z,disabled:R})=>[M("li",{class:y([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,O?e.uiMenu.option.active:e.uiMenu.option.inactive,z&&e.uiMenu.option.selected,R&&e.uiMenu.option.disabled])},[M("div",{class:y(e.uiMenu.option.container)},[G(e.$slots,"option",{option:l,active:O,selected:z},()=>[l.icon?(d(),$(a,{key:0,name:l.icon,class:y([e.uiMenu.option.icon.base,O?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,l.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):l.avatar?(d(),$(r,ue({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...l.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):l.chip?(d(),k("span",{key:2,class:y(e.uiMenu.option.chip.base),style:na({background:`#${l.chip}`})},null,6)):D("",!0),M("span",Ka,F(["string","number"].includes(typeof l)?l:l[e.optionAttribute]),1)])],2),z?(d(),k("span",{key:0,class:y([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[L(a,{name:e.selectedIcon,class:y(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):D("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(d(),$(ee(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:j(({active:l,selected:S})=>[M("li",{class:y([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,l?e.uiMenu.option.active:e.uiMenu.option.inactive])},[M("div",{class:y(e.uiMenu.option.container)},[G(e.$slots,"option-create",{option:e.createOption,active:l,selected:S},()=>[M("span",{class:y(e.uiMenu.option.create)},'Create "'+F(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((g=e.filteredOptions)!=null&&g.length)?(d(),k("p",{key:2,class:y(e.uiMenu.option.empty)},[G(e.$slots,"option-empty",{query:e.query},()=>[ae(' No results for "'+F(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?D("",!0):(d(),k("p",{key:3,class:y(e.uiMenu.empty)},[G(e.$slots,"empty",{query:e.query},()=>[ae(" No options. ")])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):D("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const Ja=he(_a,[["render",Qa]]),Y=ye(W.ui.strategy,W.ui.toggle,Ra),Ya=Z({components:{HSwitch:Ea,UIcon:pe},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>Y.default.onIcon},offIcon:{type:String,default:()=>Y.default.offIcon},loadingIcon:{type:String,default:()=>Y.default.loadingIcon},color:{type:String,default:()=>Y.default.color,validator(e){return W.ui.colors.includes(e)}},size:{type:String,default:()=>Y.default.size,validator(e){return Object.keys(Y.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:v}){const{ui:s,attrs:o}=ge("toggle",ie(e,"ui"),Y),{emitFormChange:h,color:u,inputId:a,name:m}=Oe(e),r=c({get(){return e.modelValue},set(O){v("update:modelValue",O),v("change",O),h()}}),w=c(()=>Me(_(s.value.base,s.value.size[e.size],s.value.rounded,u.value&&s.value.ring.replaceAll("{color}",u.value),u.value&&(r.value?s.value.active:s.value.inactive).replaceAll("{color}",u.value)),e.class)),g=c(()=>_(s.value.container.base,s.value.container.size[e.size],r.value?s.value.container.active[e.size]:s.value.container.inactive)),n=c(()=>_(s.value.icon.size[e.size],u.value&&s.value.icon.on.replaceAll("{color}",u.value))),l=c(()=>_(s.value.icon.size[e.size],u.value&&s.value.icon.off.replaceAll("{color}",u.value))),S=c(()=>_(s.value.icon.size[e.size],u.value&&s.value.icon.loading.replaceAll("{color}",u.value)));return je(()=>Ce("$mRW6KdlcYH")),{ui:s,attrs:o,name:m,inputId:a,active:r,switchClass:w,containerClass:g,onIconClass:n,offIconClass:l,loadingIconClass:S}}});function Xa(e,v,s,o,h,u){const a=pe,m=Ve("HSwitch");return d(),$(m,ue({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":v[0]||(v[0]=r=>e.active=r),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:j(()=>[M("span",{class:y(e.containerClass)},[e.loading?(d(),k("span",{key:0,class:y([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[L(a,{name:e.loadingIcon,class:y(e.loadingIconClass)},null,8,["name","class"])],2)):D("",!0),!e.loading&&e.onIcon?(d(),k("span",{key:1,class:y([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[L(a,{name:e.onIcon,class:y(e.onIconClass)},null,8,["name","class"])],2)):D("",!0),!e.loading&&e.offIcon?(d(),k("span",{key:2,class:y([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[L(a,{name:e.offIcon,class:y(e.offIconClass)},null,8,["name","class"])],2)):D("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const Za=he(Ya,[["render",Xa]]),Te=e=>(ua("data-v-ecad9fcf"),e=e(),sa(),e),et={class:"pt-4",id:"wrapper"},at=Te(()=>M("h1",{class:"mt-4 text-[1.75rem] font-extrabold leading-9 tracking-tight text-[#132C87] md:text-4xl"}," Commencez à recruter plus rapidment. ",-1)),tt={class:"grid grid-cols-12 gap-4 items-center pt-8"},lt=["innerHTML"],nt={key:1,class:"col-span-12 w-full"},ot={key:0},it={key:0,class:"col-span-12 sm:col-span-11"},ut={key:0,class:"w-full"},st={class:"mt-1 text-md font-extrabold leading-9 tracking-tight text-slate-900 md:text-xl"},rt={draggable:"false",class:"shadow-md w-full bg-white border border-gray-200 rounded-lg px-3"},dt={class:"flex justify-around items-center py-3"},ct={class:"flex justify-between gap-4 items-center"},pt=["src"],vt=["src"],ft={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white lowercase"},bt={class:"text-sm text-gray-500 dark:text-gray-400"},mt={class:"flex justify-between mt-4 px-4"},gt=Te(()=>M("p",{class:"py-2 px-4 text-md font-medium text-gray-900"}," Contact ",-1)),ht={class:"flex justify-around gap-4 pb-2 mx-10"},yt=["href"],wt=["href"],St={key:1,class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center w-full"},Ot={__name:"recrutement",setup(e){const v=ra(),{data:s}=La();let o=P({category:[],tags:[],cv:!0,profil_photo:!0}),h=P(null);const{data:u,loading:a,fetchData:m,error:r}=Va("/hub/mission/recrutement-rapide","POST",o.value);te(u,(l,S)=>{l!==S&&(h.value=l==null?void 0:l.data)});const w=async()=>{m()},g=P(!0),n=()=>{g.value=!1,u.value=null,setTimeout(()=>{g.value=!0},0)};return Ba({title:"Tableau de bord - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Tableau de bord - Freeci Hub",description:"Le tableau de bord Freeci Hub vous permet de gérer et de trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(l,S)=>{var V,H,Q;const O=Ee,z=Ja,R=_e,I=We,f=Za,t=ia,i=Aa,p=xa,b=za;return d(),k("div",et,[L(O,{icon:"i-heroicons-bolt",color:"white",variant:"solid",title:"Recrutement rapide!",description:"Recrutez plus rapidement un ou plusieurs talents maintenant. "}),at,M("section",tt,[M("form",{class:"col-span-12 xl:col-span-7 grid grid-cols-12 gap-6",onSubmit:oa(w,["prevent"])},[x(r)?(d(),$(O,{key:0,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full my-4",color:"red",variant:"solid"},{title:j(({title:C})=>[M("span",{innerHTML:C},null,8,lt)]),description:j(()=>[M("ul",null,[(d(!0),k(ce,null,Ae(x(r),(C,J)=>(d(),k("li",{key:J},F(C[0]),1))),128))])]),_:1})):D("",!0),L(R,{class:"col-span-12 lg:col-span-6",label:"Sélectionnez catégories",description:"Sélectionnez un ou plusieurs catégories."},{default:j(()=>{var C;return[L(z,{modelValue:x(o).category,"onUpdate:modelValue":S[0]||(S[0]=J=>x(o).category=J),options:(C=x(s))==null?void 0:C.categories.map(J=>J.name),multiple:"",color:"#132C87",icon:"i-heroicons-tag",size:"lg",placeholder:"Sélectionner"},null,8,["modelValue","options"])]}),_:1}),L(R,{class:"col-span-12 lg:col-span-6",label:"Compétences",description:"Séparez chaque compétence par une virgule."},{default:j(()=>[L(I,{placeholder:"Exemple : React , Node.js , Devops",icon:"i-heroicons-hashtag",color:"#132C87",size:"lg",modelValue:x(o).tags,"onUpdate:modelValue":S[1]||(S[1]=C=>x(o).tags=C)},null,8,["modelValue"])]),_:1}),L(R,{class:"col-span-6",label:"Avec un CV ",description:"Ayant un CV sur son compte ? "},{default:j(()=>[L(f,{"on-icon":"i-heroicons-check-20-solid","off-icon":"i-heroicons-x-mark-20-solid",modelValue:x(o).cv,"onUpdate:modelValue":S[2]||(S[2]=C=>x(o).cv=C),size:"lg"},null,8,["modelValue"])]),_:1}),L(R,{class:"col-span-6",label:"Photo de profile",description:"Ayant une photo de profile sur son compte ? "},{default:j(()=>[L(f,{"on-icon":"i-heroicons-check-20-solid","off-icon":"i-heroicons-x-mark-20-solid",modelValue:x(o).profil_photo,"onUpdate:modelValue":S[3]||(S[3]=C=>x(o).profil_photo=C),size:"lg"},null,8,["modelValue"])]),_:1}),L(t,{color:"blue",variant:"solid",trailing:!1,label:"Démarrer",class:"col-start-3 col-end-10 flex justify-center text-lg shadow-md mt-6",size:"lg",loading:x(a),type:"submit"},null,8,["loading"]),x(u)?(d(),k("div",nt,[((V=x(u))==null?void 0:V.data.length)==0?(d(),k("div",ot,[g.value?(d(),$(O,{key:0,"close-button":{icon:"i-heroicons-x-mark-20-solid",color:"gray",variant:"link",padded:!1},onClose:n,icon:"i-heroicons-information-circle",color:"yellow",variant:"soft",title:"Oups , aucun!",description:"Aucun profil ne correspond à avotre demande."})):D("",!0)])):D("",!0)])):D("",!0)],32),x(u)?(d(),k("div",it,[((H=x(u))==null?void 0:H.data.length)>0?(d(),k("div",ut,[M("h1",st,F((Q=x(u))==null?void 0:Q.data.length)+" Profile(s) trouvé(s) ",1),L(b,{items:x(h),ui:{item:"basis-full",container:"rounded-lg"},"prev-button":{color:"gray",icon:"i-heroicons-arrow-left-20-solid",class:"-left-12"},"next-button":{color:"gray",icon:"i-heroicons-arrow-right-20-solid",class:"-right-12"},arrows:"",class:"w-3/4 mx-auto"},{default:j(({item:C})=>[M("div",rt,[M("div",dt,[M("div",ct,[C.profil_photo?(d(),k("img",{key:0,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:x(v).public.urlBase+"/storage/profil_photo/"+C.profil_photo,alt:"Profile image"},null,8,pt)):(d(),k("img",{key:1,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+C.name+"&background=132C87&color=fff",alt:"Profile image"},null,8,vt)),M("div",null,[M("h5",ft,F(C.name),1),M("span",bt,F(C.email),1)])]),L(i,{ui:{rounded:"rounded-full"},size:"md",color:"green"},{default:j(()=>[ae(F(C.job),1)]),_:2},1024)]),M("div",mt,[gt,C.phone?(d(),$(i,{key:0,color:"green",variant:"subtle"},{default:j(()=>[ae(F(C==null?void 0:C.phone),1)]),_:2},1024)):(d(),$(i,{key:1,color:"green",variant:"subtle"},{default:j(()=>[ae(" Inconnu")]),_:1}))]),L(p,{class:"py-4 pr-3"}),M("div",ht,[M("a",{href:x(v).public.urlBase+"/freelancer/"+C.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,yt),C.cv?(d(),k("a",{key:0,href:x(v).public.urlBase+"/storage/cv/"+C.cv,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Voir son CV ",8,wt)):(d(),k("p",St," Pas de CV "))])])]),_:1},8,["items"])])):D("",!0)])):D("",!0)])])}}},Lt=he(Ot,[["__scopeId","data-v-ecad9fcf"]]);export{Lt as default};
