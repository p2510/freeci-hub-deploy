import{r as g,E as U,V as A,_ as z,I,K as P,A as V,l as O,L as W,M as E,aj as X,ak as D,al as K,B as v,O as Q,o as r,c as i,a as $,F as j,x as S,R as d,S as p,j as f,Q as k,i as N}from"./hVa5h8aK.js";const T={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},q=e=>{const l=g(0);function u(a){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",l.value=a.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",c)}function c(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",c)}function o(a){a.preventDefault();const s=a.pageX-l.value;l.value=a.pageX,e.value.scrollBy(-s,0)}U(()=>{e.value&&e.value.addEventListener("mousedown",u)}),A(()=>{e.value&&e.value.removeEventListener("mousedown",u)})},w=I(P.ui.strategy,P.ui.carousel,T),G=V({components:{UButton:O},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>w.default.prevButton},nextButton:{type:Object,default:()=>w.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:l}){const{ui:u,attrs:c}=W("carousel",E(e,"ui"),w,E(e,"class")),o=g(),a=g(0),{x:s}=X(o,{behavior:"smooth"}),{width:t}=D(o);q(o),K(o,b=>{var L,M;const[y]=b;a.value=((M=(L=y==null?void 0:y.target)==null?void 0:L.firstElementChild)==null?void 0:M.clientWidth)||0});const n=v(()=>a.value?Math.round(s.value/a.value)+1:0),m=v(()=>a.value?e.items.length-Math.round(t.value/a.value)+1:0),F=v(()=>n.value<=1),R=v(()=>n.value===m.value);function B(){s.value+=a.value}function h(){s.value-=a.value}function C(b){s.value=(b-1)*a.value}return l({pages:m,page:n,prev:h,next:B,select:C}),{ui:u,attrs:c,isFirst:F,isLast:R,carouselRef:o,pages:m,currentPage:n,onClickNext:B,onClickPrev:h,onClick:C,twMerge:Q}}}),H=["role"],J=["aria-selected","aria-label","onClick"];function Y(e,l,u,c,o,a){const s=O;return r(),i("div",k({class:e.ui.wrapper},e.attrs),[$("div",{ref:"carouselRef",class:d([e.ui.container,"no-scrollbar"])},[(r(!0),i(j,null,S(e.items,(t,n)=>(r(),i("div",{key:n,class:d(e.ui.item),role:e.indicators?"tabpanel":null},[p(e.$slots,"default",{item:t,index:n},void 0,!0)],10,H))),128))],2),e.arrows?(r(),i("div",{key:0,class:d(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(r(),N(s,k({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):f("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(r(),N(s,k({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):f("",!0)]},!0)],2)):f("",!0),e.indicators?(r(),i("div",{key:1,role:"tablist",class:d(e.ui.indicators.wrapper)},[(r(!0),i(j,null,S(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[$("button",{type:"button",role:"tab","aria-selected":t===e.currentPage,class:d([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:n=>e.onClick(t)},null,10,J)],!0)),128))],2)):f("",!0)],16)}const x=z(G,[["render",Y],["__scopeId","data-v-ea54307d"]]);export{x as _};
