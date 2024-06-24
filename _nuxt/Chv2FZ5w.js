import{_ as Ue,I as Ie,J as we,K,A as de,G as ce,L as ze,M as se,N as $e,B as z,O as Me,P as J,o as d,c as m,a as s,F as q,x as X,t as S,Q as Ae,R as Z,S as ie,b as a,j as L,T as ee,r as w,w as r,h as l,i as E,k as me,n as te,l as Y,y as re,s as pe,d as Q,z as Be,C as Se,D as ue,m as De,E as je}from"./5DcRCtml.js";import{_ as ge}from"./C-JBQpxG.js";import{u as Oe,a as ae,_ as fe}from"./CXZu91cu.js";import{_ as ve}from"./kcBKktBv.js";import{_ as be,a as Te,b as Fe,c as Pe}from"./8WxLMo2d.js";import{_ as oe,a as ne}from"./CyfI7I-8.js";import{u as _e}from"./CsboYV5c.js";import{u as ye}from"./BqoFCCFv.js";import{u as H,_ as he,a as Le}from"./DubXa0ws.js";import{u as Ee}from"./CxHa9elm.js";import"./8JtfTv8O.js";const T=Ie(K.ui.strategy,K.ui.select,we),Ne=de({components:{UIcon:ce},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>T.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(T.size).includes(e)}},color:{type:String,default:()=>T.default.color,validator(e){return[...K.ui.colors,...Object.keys(T.color)].includes(e)}},variant:{type:String,default:()=>T.default.variant,validator(e){return[...Object.keys(T.variant),...Object.values(T.color).flatMap(f=>Object.keys(f))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:f,slots:_}){const{ui:n,attrs:x}=ze("select",se(e,"ui"),T,se(e,"class")),{size:I,rounded:$}=$e({ui:n,props:e}),{emitFormChange:o,inputId:C,color:t,size:U,name:k}=Oe(e,T),b=z(()=>I.value||U.value),M=p=>{f("update:modelValue",p.target.value)},y=p=>{f("change",p.target.value),o()},i=p=>ee(p,e.valueAttribute,ee(p,e.optionAttribute)),u=p=>ee(p,e.optionAttribute,ee(p,e.valueAttribute)),B=p=>["string","number","boolean"].includes(typeof p)?{[e.valueAttribute]:p,[e.optionAttribute]:p}:{...p,[e.valueAttribute]:i(p),[e.optionAttribute]:u(p)},D=z(()=>e.options.map(p=>B(p))),j=z(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...D.value]:D.value),A=z(()=>{const p=B(e.modelValue),N=j.value.find(G=>G[e.valueAttribute]===p[e.valueAttribute]);return N?N[e.valueAttribute]:""}),F=z(()=>{var N,G;const p=((G=(N=n.value.color)==null?void 0:N[t.value])==null?void 0:G[e.variant])||n.value.variant[e.variant];return Me(J(n.value.base,n.value.form,$.value,n.value.size[b.value],e.padded?n.value.padding[b.value]:"p-0",p==null?void 0:p.replaceAll("{color}",t.value),(O.value||_.leading)&&n.value.leading.padding[b.value],(v.value||_.trailing)&&n.value.trailing.padding[b.value]),e.placeholder&&!e.modelValue&&n.value.placeholder,e.selectClass)}),O=z(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),v=z(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),V=z(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),g=z(()=>e.loading&&!O.value?e.loadingIcon:e.trailingIcon||e.icon),c=z(()=>J(n.value.icon.leading.wrapper,n.value.icon.leading.pointer,n.value.icon.leading.padding[b.value])),R=z(()=>J(n.value.icon.base,t.value&&K.ui.colors.includes(t.value)&&n.value.icon.color.replaceAll("{color}",t.value),n.value.icon.size[b.value],e.loading&&n.value.icon.loading)),W=z(()=>J(n.value.icon.trailing.wrapper,n.value.icon.trailing.pointer,n.value.icon.trailing.padding[b.value])),P=z(()=>J(n.value.icon.base,t.value&&K.ui.colors.includes(t.value)&&n.value.icon.color.replaceAll("{color}",t.value),n.value.icon.size[b.value],e.loading&&!O.value&&n.value.icon.loading));return{ui:n,attrs:x,name:k,inputId:C,normalizedOptionsWithPlaceholder:j,normalizedValue:A,isLeading:O,isTrailing:v,selectClass:F,leadingIconName:V,leadingIconClass:R,leadingWrapperIconClass:c,trailingIconName:g,trailingIconClass:P,trailingWrapperIconClass:W,onInput:M,onChange:y}}}),Re=["id","name","value","required","disabled"],Ge=["value","label"],qe=["value","selected","disabled","textContent"],He=["value","selected","disabled","textContent"];function We(e,f,_,n,x,I){const $=ce;return d(),m("div",{class:Z(e.ui.wrapper)},[s("select",Ae({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:f[0]||(f[0]=(...o)=>e.onInput&&e.onInput(...o)),onChange:f[1]||(f[1]=(...o)=>e.onChange&&e.onChange(...o))}),[(d(!0),m(q,null,X(e.normalizedOptionsWithPlaceholder,(o,C)=>(d(),m(q,null,[o.children?(d(),m("optgroup",{key:`${o[e.valueAttribute]}-optgroup-${C}`,value:o[e.valueAttribute],label:o[e.optionAttribute]},[(d(!0),m(q,null,X(o.children,(t,U)=>(d(),m("option",{key:`${t[e.valueAttribute]}-${C}-${U}`,value:t[e.valueAttribute],selected:t[e.valueAttribute]===e.normalizedValue,disabled:t.disabled,textContent:S(t[e.optionAttribute])},null,8,qe))),128))],8,Ge)):(d(),m("option",{key:`${o[e.valueAttribute]}-${C}`,value:o[e.valueAttribute],selected:o[e.valueAttribute]===e.normalizedValue,disabled:o.disabled,textContent:S(o[e.optionAttribute])},null,8,He))],64))),256))],16,Re),e.isLeading&&e.leadingIconName||e.$slots.leading?(d(),m("span",{key:0,class:Z(e.leadingWrapperIconClass)},[ie(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[a($,{name:e.leadingIconName,class:Z(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):L("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(d(),m("span",{key:1,class:Z(e.trailingWrapperIconClass)},[ie(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[a($,{name:e.trailingIconName,class:Z(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):L("",!0)],2)}const Ce=Ue(Ne,[["render",We],["__scopeId","data-v-931b50ef"]]),Je={class:"flex items-center justify-between"},Ze=s("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Publier une nouvelle mission ",-1),Ke=["innerHTML"],Qe={class:"grid grid-cols-12 gap-4 w-full"},Xe=s("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Ye=s("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),et={__name:"AddMission",setup(e){var M,y;const{userInfo:f}=_e();te().public.apiBase;const n=w(!1),x=["En ligne","Sur place"],I=["Une seule fois","Par Jour"],{data:$}=ye();let o=w({title:"",email:(M=f.value)==null?void 0:M.email,type_mission:"En ligne",type_budget:"Une seule fois",category:"Informatique",description:"",budget_max:null,budget_min:null,tags:null,phone:(y=f.value)==null?void 0:y.phone});const{data:C,loading:t,fetchData:U,error:k}=H("/hub/mission/publier","POST",o.value),b=async()=>{var i,u;o.value.email=(i=f.value)==null?void 0:i.email,o.value.phone=(u=f.value)==null?void 0:u.phone,U()};return(i,u)=>{const B=Y,D=ge,j=ae,A=fe,F=Ce,O=ve,v=be,V=oe,g=ne;return d(),m("div",null,[a(B,{onClick:u[0]||(u[0]=c=>n.value=!0),icon:"i-heroicons-plus",size:"xl",variant:"ghost",label:"Publier une mission",trailing:!1,class:"bg-green-600 text-white hover:bg-green-600/80 transition duration-300 ease-in-out"}),a(g,{modelValue:n.value,"onUpdate:modelValue":u[10]||(u[10]=c=>n.value=c),fullscreen:""},{default:r(()=>[a(V,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:r(()=>[s("div",Je,[Ze,a(B,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:u[1]||(u[1]=c=>n.value=!1)})])]),default:r(()=>[l(C)?(d(),E(D,{key:0,icon:"i-heroicons-check",color:"emerald",variant:"solid",title:"Bravo , Mission publiée!",description:"Votre mission a été publiée avec succès . Voici le code de la mission : "+l(C).data.code,class:"mb-4"},null,8,["description"])):l(k)?(d(),E(D,{key:1,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full mb-4",color:"red",variant:"solid"},{title:r(({title:c})=>[s("span",{innerHTML:c},null,8,Ke)]),description:r(()=>[s("ul",null,[(d(!0),m(q,null,X(l(k),(c,R)=>(d(),m("li",{key:R},S(c[0]),1))),128))])]),_:1})):L("",!0),s("form",{class:"grid grid-cols-12 gap-8 pb-4 w-full",onSubmit:me(b,["prevent"])},[a(A,{label:"Titre",description:"Donnez un titre à votre offre.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(j,{placeholder:"Exemple : Ingénieur Devops automatisation",icon:"i-heroicons-pencil",color:"#132C87",size:"lg",modelValue:l(o).title,"onUpdate:modelValue":u[2]||(u[2]=c=>l(o).title=c)},null,8,["modelValue"])]),_:1}),a(A,{label:"Mode de travail",description:"Choisissez le mode de travail du freelancer.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(F,{modelValue:l(o).type_mission,"onUpdate:modelValue":u[3]||(u[3]=c=>l(o).type_mission=c),options:x,color:"#132C87",icon:"i-heroicons-globe-alt",size:"lg"},null,8,["modelValue"])]),_:1}),a(A,{label:"Catégorie",description:"Choisissez la catégorie de votre mission.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(O,{modelValue:l(o).category,"onUpdate:modelValue":u[4]||(u[4]=c=>l(o).category=c),options:l($).categories.map(c=>c.name),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]),_:1}),a(A,{label:"Modéle de paiement",description:"Souhaitez-vous payer le freelancer par jour ou une seule fois ?",class:"col-span-full md:col-span-4"},{default:r(()=>[a(F,{modelValue:l(o).type_budget,"onUpdate:modelValue":u[5]||(u[5]=c=>l(o).type_budget=c),options:I,color:"#132C87",icon:"i-heroicons-banknotes",size:"lg"},null,8,["modelValue"])]),_:1}),a(A,{label:"Budget de la mission",description:"Combien avez vous alloué pour cette mission ?",class:"col-span-full md:col-span-4"},{default:r(()=>[s("div",Qe,[a(j,{placeholder:"Budget Minimum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:l(o).budget_min,"onUpdate:modelValue":u[6]||(u[6]=c=>l(o).budget_min=c)},{trailing:r(()=>[Xe]),_:1},8,["modelValue"]),a(j,{placeholder:"Budget Maximum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:l(o).budget_max,"onUpdate:modelValue":u[7]||(u[7]=c=>l(o).budget_max=c)},{trailing:r(()=>[Ye]),_:1},8,["modelValue"])])]),_:1}),a(A,{label:"Compétences requises (optionnel)",description:"Une virgule pour séparer les différentes compétences.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(j,{placeholder:"Exemple : PHP , Sage , Word ...",color:"#132C87",size:"md",modelValue:l(o).tags,"onUpdate:modelValue":u[8]||(u[8]=c=>l(o).tags=c)},null,8,["modelValue"])]),_:1}),a(A,{label:"Décrivez votre mission",description:"Caractère minimum ( 20 caractères ).",class:"col-span-full"},{default:r(()=>[a(v,{placeholder:"Nous recherchons un développeur Ruby pour prendre en main une application web déjà existante. Il sera amené à travailler à long terme avec nous, car nous avons plusieurs autres fonctionnalités prévues pour la suite. Une bonne connaissance en Ruby est obligatoire pour ce projet ...",color:"#132C87",size:"md",rows:8,modelValue:l(o).description,"onUpdate:modelValue":u[9]||(u[9]=c=>l(o).description=c)},null,8,["modelValue"])]),_:1}),a(B,{color:"blue",variant:"solid",label:"Publier la mission",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"lg",loading:l(t),type:"submit"},null,8,["loading"])],32)]),_:1})]),_:1},8,["modelValue"])])}}},tt={class:"flex items-center justify-between"},lt={class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},at={key:0,class:"grid grid-cols-12 gap-4"},ot={class:"flex justify-around items-center py-3"},nt={class:"flex justify-start gap-4 items-center"},st=["src"],it=["src"],rt={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white lowercase"},ut={class:"text-sm text-gray-500 dark:text-gray-400"},dt={key:0},ct={class:"flex justify-between mt-1 px-4"},mt=s("p",{class:"py-2 px-4 text-md font-medium text-gray-900"}," Budget proposé ",-1),pt={class:"px-4 inline-flex items-center py-2 text-sm font-medium text-center text-white bg-[#132C87] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},gt={class:"flex justify-around gap-4 pb-2 mx-10"},ft=["href"],vt=["href"],bt={key:1,class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center w-full"},_t={key:1},yt={__name:"FreelanceCard",setup(e){const f=te(),_=re("missionId"),n=re("isOpen"),x=w(null),I=w(null),$=w(!1),o=async()=>{const{data:C,error:t,loading:U,fetchData:k}=H(`/hub/mission/voir-freelancer/${_.value}`,"GET");$.value=U.value,await k(),t.value?I.value=t.value:x.value=C.value};return pe([n,_],([C,t])=>{C&&t&&o()}),(C,t)=>{const U=Y,k=he,b=Le,M=oe,y=ne;return d(),m("section",null,[a(y,{modelValue:l(n),"onUpdate:modelValue":t[1]||(t[1]=i=>Be(n)?n.value=i:null),fullscreen:""},{default:r(()=>[a(M,null,{header:r(()=>[s("div",tt,[s("h3",lt," Découvrez la liste des candidats à cette mission. #ID "+S(l(_)),1),a(U,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:t[0]||(t[0]=i=>n.value=!1)})])]),default:r(()=>[x.value&&x.value.data.length>0?(d(),m("div",at,[(d(!0),m(q,null,X(x.value.data,(i,u)=>(d(),m("div",{key:u,class:"col-span-12 sm:col-span-6 lg:col-span-4 shadow-md w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3"},[s("div",ot,[s("div",nt,[i.profil_photo?(d(),m("img",{key:0,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:l(f).public.urlBase+"storage/profil_photo/"+i.profil_photo,alt:"Profile image"},null,8,st)):(d(),m("img",{key:1,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+i.name+"&background=132C87&color=fff",alt:"Profile image"},null,8,it)),s("div",null,[s("h5",rt,S(i.name),1),s("span",ut,S(i.email),1)])]),i.phone?(d(),E(k,{key:0,color:"green",variant:"subtle"},{default:r(()=>[i.country=="CI"?(d(),m("span",dt,"+225 ")):L("",!0),Q(" "+S(i==null?void 0:i.phone),1)]),_:2},1024)):(d(),E(k,{key:1,color:"green",variant:"subtle"},{default:r(()=>[Q(" Inconnu")]),_:1}))]),s("div",ct,[mt,s("p",pt,S(i.budget.toLocaleString("fr-FR"))+" F ",1)]),a(b,{class:"py-4 pr-3"}),s("div",gt,[s("a",{href:l(f).public.urlBase+"freelancer/"+i.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,ft),i.cv?(d(),m("a",{key:0,href:l(f).public.urlBase+"storage/cv/"+i.cv,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Voir son CV ",8,vt)):(d(),m("p",bt," Pas de CV "))])]))),128))])):(d(),m("div",_t,"Pas de candidature"))]),_:1})]),_:1},8,["modelValue"])])}}},ht={class:"flex pr-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},Ct={class:"flex justify-end pr-3 py-3.5 border-t border-gray-200 dark:border-gray-700"},le=8,xt=de({__name:"AllMission",props:["data1"],emits:["updateData","updateStatut"],setup(e,{emit:f}){let _=te();const n=[{key:"id",label:"ID"},{key:"title",label:"Titre",sortable:!0},{key:"budget_min",label:"Budget Min",sortable:!0},{key:"budget_max",label:"Budget Max",sortable:!0},{key:"statut",label:"Statut",sortable:!0,direction:"desc"},{key:"code",label:"Code"},{key:"created_at",label:"Diffusé"},{key:"actions"}];let x=e;const I=w(""),$=z(()=>I.value?x.data1.filter(y=>Object.values(y).some(i=>String(i).toLowerCase().includes(I.value.toLowerCase()))):x.data1),o=w(1),C=z(()=>$.value.slice((o.value-1)*le,o.value*le)),t=f,U=Se();let k=w(null),b=w(!1);ue("missionId",k),ue("isOpen",b);const M=y=>[[{label:"Modifier",icon:"i-heroicons-pencil-square-20-solid",click:()=>{t("updateData",y.id)}},{label:"Candidature",icon:"i-heroicons-user-group-20-solid",click:()=>{k.value=y.id,b.value=!0}},{label:"Partager le lien",icon:"i-heroicons-share-20-solid",click:()=>{navigator.clipboard.writeText(_.public.urlBase+"mission/"+y.id),U.add({title:"Lien copié : "+_.public.urlBase+"mission/"+y.id})}}],[{label:"Changer le statut",icon:"i-heroicons-arrow-path-20-solid",click:()=>{const{data:i,loading:u,fetchData:B,error:D}=H(`/hub/mission/fermer/${y.id}`,"PATCH");B(),i&&(t("updateStatut",y.id),U.add({title:"Cette mission est désormais fermée "}))}}]];return w(!1),(y,i)=>{const u=ae,B=he,D=Y,j=Te,A=Fe,F=Pe,O=yt;return d(),m("section",null,[s("div",ht,[a(u,{modelValue:I.value,"onUpdate:modelValue":i[0]||(i[0]=v=>I.value=v),placeholder:"Recherche...",color:"#132C87",size:"md"},null,8,["modelValue"])]),a(A,{modelValue:y.selected,"onUpdate:modelValue":i[1]||(i[1]=v=>y.selected=v),columns:n,rows:C.value,"empty-state":{icon:"i-heroicons-circle-stack-20-solid",label:"Aucune mission."}},{"title-data":r(({row:v})=>[Q(S(v.title.substring(0,20))+" ... ",1)]),"budget_min-data":r(({row:v})=>[Q(S(v.budget_min.toLocaleString("fr-FR")),1)]),"budget_max-data":r(({row:v})=>[Q(S(v.budget_max.toLocaleString("fr-FR")),1)]),"statut-data":r(({row:v})=>[a(B,{size:"xs",label:v.statut==1?"Ouvert":"Terminé",color:v.statut==1?"emerald":"orange",variant:"subtle"},null,8,["label","color"])]),"actions-data":r(({row:v})=>[a(j,{items:M(v)},{default:r(()=>[a(D,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})]),_:2},1032,["items"])]),_:1},8,["modelValue","rows"]),s("div",Ct,[a(F,{modelValue:o.value,"onUpdate:modelValue":i[2]||(i[2]=v=>o.value=v),"page-count":le,total:l(x).data1.length},null,8,["modelValue","total"])]),a(O)])}}}),kt={class:"flex items-center justify-between"},Vt=s("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Modifier la mission ",-1),Ut=["innerHTML"],It={class:"grid grid-cols-12 gap-4 w-full"},wt=s("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),zt=s("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),$t={__name:"UpdateMission",props:["id"],emits:["close"],setup(e,{emit:f}){var O,v;const{userInfo:_}=_e();te().public.apiBase;let x=e;const I=w(!0),$=["En ligne","Sur place"],o=["Une seule fois","Par Jour"],{data:C}=ye();let t=w({title:"",email:(O=_.value)==null?void 0:O.email,type_mission:"En ligne",type_budget:"Une seule fois",category:"Informatique",description:"",budget_max:null,budget_min:null,phone:(v=_.value)==null?void 0:v.phone});const{data:U,fetchData:k}=H(`/hub/mission/voir/${x.id}`,"GET"),b=w(!0),M=w(null);(async()=>{b.value=!0,await k(),M.value=U.value,b.value=!1})(),pe(U,(V,g)=>{V!==g&&(console.log("New Value:",V),M.value=V,t.value.title=V.data.title,t.value.category=V.data.category,t.value.budget_max=V.data.budget_max,t.value.budget_min=V.data.budget_min,t.value.description=V.data.description,V.data.type_budget=="1"?t.value.type_budget="Une seule fois":t.value.type_budget="Par Jour",V.data.type_mission=="1"?t.value.type_mission="En ligne":t.value.type_mission="Sur place")});const{data:i,loading:u,fetchData:B,error:D}=H(`/hub/mission/modifier/${x.id}`,"PATCH",t.value),j=async()=>{var V,g;t.value.email=(V=_.value)==null?void 0:V.email,t.value.phone=(g=_.value)==null?void 0:g.phone,B()},A=f;let F=()=>{I.value=!1,A("close")};return(V,g)=>{const c=Y,R=ge,W=ae,P=fe,p=Ce,N=ve,G=be,xe=oe,ke=ne;return d(),m("div",null,[a(ke,{modelValue:I.value,"onUpdate:modelValue":g[7]||(g[7]=h=>I.value=h),fullscreen:""},{default:r(()=>[a(xe,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:r(()=>[s("div",kt,[Vt,a(c,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:l(F)},null,8,["onClick"])])]),default:r(()=>[l(i)?(d(),E(R,{key:0,icon:"i-heroicons-check",color:"emerald",variant:"solid",title:"Bravo , Mission modifiée!",description:`\r
            Bravo , Votre mission a été modifiée\r
\r
          `,class:"mb-4"})):l(D)?(d(),E(R,{key:1,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full mb-4",color:"red",variant:"solid"},{title:r(({title:h})=>[s("span",{innerHTML:h},null,8,Ut)]),description:r(()=>[s("ul",null,[(d(!0),m(q,null,X(l(D),(h,Ve)=>(d(),m("li",{key:Ve},S(h[0]),1))),128))])]),_:1})):L("",!0),s("form",{class:"grid grid-cols-12 gap-8 pb-4 w-full",onSubmit:me(j,["prevent"])},[a(P,{label:"Titre",description:"Donnez un titre à votre offre.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(W,{placeholder:"Exemple : Ingénieur Devops automatisation",icon:"i-heroicons-pencil",color:"#132C87",size:"lg",modelValue:l(t).title,"onUpdate:modelValue":g[0]||(g[0]=h=>l(t).title=h)},null,8,["modelValue"])]),_:1}),a(P,{label:"Mode de travail",description:"Choisissez le mode de travail du freelancer.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(p,{modelValue:l(t).type_mission,"onUpdate:modelValue":g[1]||(g[1]=h=>l(t).type_mission=h),options:$,color:"#132C87",icon:"i-heroicons-globe-alt",size:"lg"},null,8,["modelValue"])]),_:1}),a(P,{label:"Catégorie",description:"Choisissez la catégorie de votre mission.",class:"col-span-full md:col-span-4"},{default:r(()=>[a(N,{modelValue:l(t).category,"onUpdate:modelValue":g[2]||(g[2]=h=>l(t).category=h),options:l(C).categories.map(h=>h.name),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]),_:1}),a(P,{label:"Modéle de paiement",description:"Souhaitez-vous payer le freelancer par jour ou une seule fois ?",class:"col-span-full md:col-span-4"},{default:r(()=>[a(p,{modelValue:l(t).type_budget,"onUpdate:modelValue":g[3]||(g[3]=h=>l(t).type_budget=h),options:o,color:"#132C87",icon:"i-heroicons-banknotes",size:"lg"},null,8,["modelValue"])]),_:1}),a(P,{label:"Budget de la mission",description:"Combien avez vous alloué pour cette mission ?",class:"col-span-full md:col-span-8"},{default:r(()=>[s("div",It,[a(W,{placeholder:"Budget Minimum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:l(t).budget_min,"onUpdate:modelValue":g[4]||(g[4]=h=>l(t).budget_min=h)},{trailing:r(()=>[wt]),_:1},8,["modelValue"]),a(W,{placeholder:"Budget Maximum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:l(t).budget_max,"onUpdate:modelValue":g[5]||(g[5]=h=>l(t).budget_max=h)},{trailing:r(()=>[zt]),_:1},8,["modelValue"])])]),_:1}),a(P,{label:"Décrivez votre mission",description:"Caractère minimum ( 20 caractères ).",class:"col-span-full"},{default:r(()=>[a(G,{placeholder:"Nous recherchons un développeur Ruby pour prendre en main une application web déjà existante. Il sera amené à travailler à long terme avec nous, car nous avons plusieurs autres fonctionnalités prévues pour la suite. Une bonne connaissance en Ruby est obligatoire pour ce projet ...",color:"#132C87",size:"md",rows:8,modelValue:l(t).description,"onUpdate:modelValue":g[6]||(g[6]=h=>l(t).description=h)},null,8,["modelValue"])]),_:1}),a(c,{color:"blue",variant:"solid",label:"Mofifier la mission",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"lg",loading:l(u),type:"submit"},null,8,["loading"])],32)]),_:1})]),_:1},8,["modelValue"])])}}},Mt={class:"pt-4"},At={class:"bg-[#132C87] rounded-xl shadow-md w-full p-4 flex items-center justify-between relative"},Bt={key:0,class:"fixed w-full max-w-7xl h-full z-20 bottom-0"},St=s("div",{class:"flex justify-center items-center h-full w-full",role:"status"},[s("svg",{"aria-hidden":"true",class:"w-1/3 h-1/3 text-[#132C87] animate-spin fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),s("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),s("span",{class:"sr-only"},"Loading...")],-1),Dt=[St],jt={class:"flex gap-4"},Wt={__name:"index",setup(e){const f=De(),{data:_,loading:n,fetchData:x,error:I}=H(`/hub/mission/${f.value.email}`,"GET");function $(k){_&&_.value.data.map(b=>{b.id==k&&(b.statut=b.statut==0?1:0)})}let o=w(!1),C=w(null);function t(k){C.value=k,o.value=!0}function U(){o.value=!1,id.value=null,x()}return je(()=>{x()}),Ee({title:"Les missions - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Les missions - Freeci Hub",description:"Explorez les missions disponibles sur Freeci Hub pour trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(k,b)=>{const M=Y,y=et,i=xt,u=$t;return d(),m("div",Mt,[s("div",At,[l(n)?(d(),m("div",Bt,Dt)):L("",!0),s("ul",jt,[s("li",null,[a(M,{icon:"i-heroicons-briefcase",size:"sm",variant:"ghost",label:"Mes missions",trailing:!1,class:"bg-white text-[#132C87] transition duration-300 ease-in-out"})])]),a(y)]),l(_)?(d(),E(i,{key:0,data1:l(_).data,onUpdateStatut:$,onUpdateData:t},null,8,["data1"])):L("",!0),l(o)?(d(),E(u,{key:1,onClose:U,id:l(C)},null,8,["id"])):L("",!0)])}}};export{Wt as default};
