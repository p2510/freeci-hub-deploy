import{_ as Ue,J as ze,$ as $e,K as Q,A as me,G as pe,L as Ie,M as ie,a0 as Ae,B as I,a1 as Me,a2 as Z,o as d,c as m,a,F as H,x as X,t as O,R as Se,S as K,Q as re,b as l,j as P,a3 as ee,r as U,w as i,h as t,i as W,k as ge,n as te,l as Y,y as ue,s as fe,z as de,d as q,C as Be,D as ce,m as De,E as je}from"./IFBo_SSO.js";import{_ as ae}from"./CZPKIl7N.js";import{u as Oe,a as oe,_ as ve}from"./DoPOH9ol.js";import{_ as _e}from"./DDh2JxCg.js";import{_ as be,a as Te,b as Fe,c as Pe}from"./d1wLOMWX.js";import{_ as ne,a as se}from"./CVPWx_lf.js";import{u as he}from"./Dq5zt_zZ.js";import{u as ye}from"./Dj-Zg3sP.js";import{u as N,a as Le,_ as Ce}from"./DEHPrGBw.js";import{u as Ee}from"./8EotfcCE.js";import"./DTgwEGPW.js";import"./BOAUna7T.js";import"./CXHJB8Eu.js";import"./DtlkRunP.js";import"./DK_urX-g.js";const F=ze(Q.ui.strategy,Q.ui.select,$e),qe=me({components:{UIcon:pe},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>F.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>F.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(F.size).includes(e)}},color:{type:String,default:()=>F.default.color,validator(e){return[...Q.ui.colors,...Object.keys(F.color)].includes(e)}},variant:{type:String,default:()=>F.default.variant,validator(e){return[...Object.keys(F.variant),...Object.values(F.color).flatMap(v=>Object.keys(v))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:v,slots:h}){const{ui:r,attrs:y}=Ie("select",ie(e,"ui"),F,ie(e,"class")),{size:A,rounded:B}=Ae({ui:r,props:e}),{emitFormChange:s,inputId:C,color:n,size:z,name:M}=Oe(e,F),b=I(()=>A.value||z.value),D=_=>{v("update:modelValue",_.target.value)},g=_=>{v("change",_.target.value),s()},c=_=>ee(_,e.valueAttribute,ee(_,e.optionAttribute)),o=_=>ee(_,e.optionAttribute,ee(_,e.valueAttribute)),V=_=>["string","number","boolean"].includes(typeof _)?{[e.valueAttribute]:_,[e.optionAttribute]:_}:{..._,[e.valueAttribute]:c(_),[e.optionAttribute]:o(_)},$=I(()=>e.options.map(_=>V(_))),S=I(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...$.value]:$.value),w=I(()=>{const _=V(e.modelValue),E=S.value.find(G=>G[e.valueAttribute]===_[e.valueAttribute]);return E?E[e.valueAttribute]:""}),T=I(()=>{var E,G;const _=((G=(E=r.value.color)==null?void 0:E[n.value])==null?void 0:G[e.variant])||r.value.variant[e.variant];return Me(Z(r.value.base,r.value.form,B.value,r.value.size[b.value],e.padded?r.value.padding[b.value]:"p-0",_==null?void 0:_.replaceAll("{color}",n.value),(j.value||h.leading)&&r.value.leading.padding[b.value],(u.value||h.trailing)&&r.value.trailing.padding[b.value]),e.placeholder&&!e.modelValue&&r.value.placeholder,e.selectClass)}),j=I(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=I(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),k=I(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),f=I(()=>e.loading&&!j.value?e.loadingIcon:e.trailingIcon||e.icon),p=I(()=>Z(r.value.icon.leading.wrapper,r.value.icon.leading.pointer,r.value.icon.leading.padding[b.value])),R=I(()=>Z(r.value.icon.base,n.value&&Q.ui.colors.includes(n.value)&&r.value.icon.color.replaceAll("{color}",n.value),r.value.icon.size[b.value],e.loading&&r.value.icon.loading)),J=I(()=>Z(r.value.icon.trailing.wrapper,r.value.icon.trailing.pointer,r.value.icon.trailing.padding[b.value])),L=I(()=>Z(r.value.icon.base,n.value&&Q.ui.colors.includes(n.value)&&r.value.icon.color.replaceAll("{color}",n.value),r.value.icon.size[b.value],e.loading&&!j.value&&r.value.icon.loading));return{ui:r,attrs:y,name:M,inputId:C,normalizedOptionsWithPlaceholder:S,normalizedValue:w,isLeading:j,isTrailing:u,selectClass:T,leadingIconName:k,leadingIconClass:R,leadingWrapperIconClass:p,trailingIconName:f,trailingIconClass:L,trailingWrapperIconClass:J,onInput:D,onChange:g}}}),Ne=["id","name","value","required","disabled"],Re=["value","label"],Ge=["value","selected","disabled","textContent"],He=["value","selected","disabled","textContent"];function We(e,v,h,r,y,A){const B=pe;return d(),m("div",{class:K(e.ui.wrapper)},[a("select",Se({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:v[0]||(v[0]=(...s)=>e.onInput&&e.onInput(...s)),onChange:v[1]||(v[1]=(...s)=>e.onChange&&e.onChange(...s))}),[(d(!0),m(H,null,X(e.normalizedOptionsWithPlaceholder,(s,C)=>(d(),m(H,null,[s.children?(d(),m("optgroup",{key:`${s[e.valueAttribute]}-optgroup-${C}`,value:s[e.valueAttribute],label:s[e.optionAttribute]},[(d(!0),m(H,null,X(s.children,(n,z)=>(d(),m("option",{key:`${n[e.valueAttribute]}-${C}-${z}`,value:n[e.valueAttribute],selected:n[e.valueAttribute]===e.normalizedValue,disabled:n.disabled,textContent:O(n[e.optionAttribute])},null,8,Ge))),128))],8,Re)):(d(),m("option",{key:`${s[e.valueAttribute]}-${C}`,value:s[e.valueAttribute],selected:s[e.valueAttribute]===e.normalizedValue,disabled:s.disabled,textContent:O(s[e.optionAttribute])},null,8,He))],64))),256))],16,Ne),e.isLeading&&e.leadingIconName||e.$slots.leading?(d(),m("span",{key:0,class:K(e.leadingWrapperIconClass)},[re(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[l(B,{name:e.leadingIconName,class:K(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):P("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(d(),m("span",{key:1,class:K(e.trailingWrapperIconClass)},[re(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[l(B,{name:e.trailingIconName,class:K(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):P("",!0)],2)}const xe=Ue(qe,[["render",We],["__scopeId","data-v-931b50ef"]]),Je={class:"flex items-center justify-between"},Ze=a("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Publier une nouvelle mission ",-1),Ke=["innerHTML"],Qe={class:"grid grid-cols-12 gap-4 w-full"},Xe=a("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Ye=a("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),et={__name:"AddMission",setup(e){var D,g;const{userInfo:v}=he();te().public.apiBase;const r=U(!1),y=["En ligne","Sur place"],A=["Une seule fois","Par Jour"],{data:B}=ye();let s=U({title:"",email:(D=v.value)==null?void 0:D.email,type_mission:"En ligne",type_budget:"Une seule fois",category:"Informatique",description:"",budget_max:null,budget_min:null,tags:null,phone:(g=v.value)==null?void 0:g.phone});const{data:C,loading:n,fetchData:z,error:M}=N("/hub/mission/publier","POST",s.value),b=async()=>{var c,o;s.value.email=(c=v.value)==null?void 0:c.email,s.value.phone=(o=v.value)==null?void 0:o.phone,z()};return(c,o)=>{const V=Y,$=ae,S=oe,w=ve,T=xe,j=_e,u=be,k=ne,f=se;return d(),m("div",null,[l(V,{onClick:o[0]||(o[0]=p=>r.value=!0),icon:"i-heroicons-plus",size:"xl",variant:"ghost",label:"Publier une mission",trailing:!1,class:"bg-green-600 text-white hover:bg-green-600/80 transition duration-300 ease-in-out"}),l(f,{modelValue:r.value,"onUpdate:modelValue":o[10]||(o[10]=p=>r.value=p),fullscreen:""},{default:i(()=>[l(k,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:i(()=>[a("div",Je,[Ze,l(V,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:o[1]||(o[1]=p=>r.value=!1)})])]),default:i(()=>[t(C)?(d(),W($,{key:0,icon:"i-heroicons-check",color:"emerald",variant:"solid",title:"Bravo , Mission publiée!",description:"Votre mission a été publiée avec succès . Voici le code de la mission : "+t(C).data.code,class:"mb-4"},null,8,["description"])):t(M)?(d(),W($,{key:1,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full mb-4",color:"red",variant:"solid"},{title:i(({title:p})=>[a("span",{innerHTML:p},null,8,Ke)]),description:i(()=>[a("ul",null,[(d(!0),m(H,null,X(t(M),(p,R)=>(d(),m("li",{key:R},O(p[0]),1))),128))])]),_:1})):P("",!0),a("form",{class:"grid grid-cols-12 gap-8 pb-4 w-full",onSubmit:ge(b,["prevent"])},[l(w,{label:"Titre",description:"Donnez un titre à votre offre.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(S,{placeholder:"Exemple : Ingénieur Devops automatisation",icon:"i-heroicons-pencil",color:"#132C87",size:"lg",modelValue:t(s).title,"onUpdate:modelValue":o[2]||(o[2]=p=>t(s).title=p)},null,8,["modelValue"])]),_:1}),l(w,{label:"Mode de travail",description:"Choisissez le mode de travail du freelancer.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(T,{modelValue:t(s).type_mission,"onUpdate:modelValue":o[3]||(o[3]=p=>t(s).type_mission=p),options:y,color:"#132C87",icon:"i-heroicons-globe-alt",size:"lg"},null,8,["modelValue"])]),_:1}),l(w,{label:"Catégorie",description:"Choisissez la catégorie de votre mission.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(j,{modelValue:t(s).category,"onUpdate:modelValue":o[4]||(o[4]=p=>t(s).category=p),options:t(B).categories.map(p=>p.name),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]),_:1}),l(w,{label:"Modéle de paiement",description:"Souhaitez-vous payer le freelancer par jour ou une seule fois ?",class:"col-span-full md:col-span-4"},{default:i(()=>[l(T,{modelValue:t(s).type_budget,"onUpdate:modelValue":o[5]||(o[5]=p=>t(s).type_budget=p),options:A,color:"#132C87",icon:"i-heroicons-banknotes",size:"lg"},null,8,["modelValue"])]),_:1}),l(w,{label:"Budget de la mission",description:"Combien avez vous alloué pour cette mission ?",class:"col-span-full md:col-span-4"},{default:i(()=>[a("div",Qe,[l(S,{placeholder:"Budget Minimum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:t(s).budget_min,"onUpdate:modelValue":o[6]||(o[6]=p=>t(s).budget_min=p)},{trailing:i(()=>[Xe]),_:1},8,["modelValue"]),l(S,{placeholder:"Budget Maximum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:t(s).budget_max,"onUpdate:modelValue":o[7]||(o[7]=p=>t(s).budget_max=p)},{trailing:i(()=>[Ye]),_:1},8,["modelValue"])])]),_:1}),l(w,{label:"Compétences requises (optionnel)",description:"Une virgule pour séparer les différentes compétences.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(S,{placeholder:"Exemple : PHP , Sage , Word ...",color:"#132C87",size:"md",modelValue:t(s).tags,"onUpdate:modelValue":o[8]||(o[8]=p=>t(s).tags=p)},null,8,["modelValue"])]),_:1}),l(w,{label:"Décrivez votre mission",description:"Caractère minimum ( 20 caractères ).",class:"col-span-full"},{default:i(()=>[l(u,{placeholder:"Nous recherchons un développeur Ruby pour prendre en main une application web déjà existante. Il sera amené à travailler à long terme avec nous, car nous avons plusieurs autres fonctionnalités prévues pour la suite. Une bonne connaissance en Ruby est obligatoire pour ce projet ...",color:"#132C87",size:"md",rows:8,modelValue:t(s).description,"onUpdate:modelValue":o[9]||(o[9]=p=>t(s).description=p)},null,8,["modelValue"])]),_:1}),l(V,{color:"blue",variant:"solid",label:"Publier la mission",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"lg",loading:t(n),type:"submit"},null,8,["loading"])],32)]),_:1})]),_:1},8,["modelValue"])])}}},tt={class:"flex items-center justify-between"},lt={class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},at={key:0},ot={key:0,class:"grid grid-cols-12"},nt=a("h1",{class:"text-center col-span-12 mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"},[a("span",null,"Ce recrutement est "),a("span",{class:"w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#132C87] to-purple-600"}," clôturé ")],-1),st={class:"col-start-3 col-end-11 shadow-md w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3"},it={class:"flex justify-around freelancerSelecteds-center py-3"},rt={class:"flex justify-start gap-4 freelancerSelecteds-center"},ut=["src"],dt=["src"],ct={class:"flex gap-8 divide-x-2 justify-center items-center"},mt={class:"mb-1 text-2xl font-medium text-gray-900 dark:text-white lowercase"},pt={class:"pl-8 text-md text-gray-500 dark:text-gray-400"},gt={class:"pb-2"},ft={class:"pl-8 text-md text-gray-500 dark:text-gray-400"},vt={class:"pb-2"},_t={class:"flex justify-around gap-4 pb-2 mx-10"},bt=["href"],ht=["href"],yt={key:1,class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center w-full"},Ct={class:"grid grid-cols-12 gap-4"},xt={class:"col-span-12"},kt=a("p",null," Êtes-vous sûr de choisir ce profil ? Une fois sélectionné, vous ne verrez plus les autres candidats. ",-1),Vt={class:"flex justify-around items-center py-3"},wt={class:"flex justify-start gap-4 items-center"},Ut=["src"],zt=["src"],$t={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white lowercase"},It={class:"text-sm text-gray-500 dark:text-gray-400"},At={class:"pb-2"},Mt=["href"],St={class:"flex justify-around mt-1 px-4"},Bt=a("p",{class:"py-2 px-4 text-md font-medium text-gray-900"}," Il propose ",-1),Dt=["onClick"],jt={class:"flex justify-around gap-4 pb-2 mx-10"},Ot=["href"],Tt=["href"],Ft={key:1,class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center w-full"},Pt={key:1},Lt={__name:"FreelanceCard",setup(e){const v=te(),h=ue("missionId"),r=ue("isOpen"),y=U(null),A=U(null),B=U(!1),s=async()=>{const{data:c,error:o,loading:V,fetchData:$}=N(`/hub/mission/voir-freelancer/${h.value}`,"GET");B.value=V.value,await $(),o.value?A.value=o.value:y.value=c.value};fe([r,h],([c,o])=>{c&&o&&s()});let C=U(!1),n=U(!1),z=U(0),M=c=>{z.value=c,C.value=!0},b=()=>{const{data:c,loading:o,fetchData:V,error:$}=N(`/hub/mission/accepter-freelancer/${z.value}/${h.value}`,"PATCH");V(),n.value=o.value,setTimeout(()=>{var S;n.value=o.value,C.value=o.value,(S=y.value)==null||S.data.map(w=>{w.id==z.value&&(w.accepted=1)})},2e3)},D=I(()=>{var c;return(c=y.value)==null?void 0:c.data.some(o=>o.accepted==1)}),g=I(()=>{var c;return(c=y.value)==null?void 0:c.data.find(o=>o.accepted==1)});return(c,o)=>{const V=Y,$=Le,S=ae,w=ne,T=se,j=Ce;return d(),m("section",null,[l(T,{modelValue:t(r),"onUpdate:modelValue":o[2]||(o[2]=u=>de(r)?r.value=u:null),fullscreen:""},{default:i(()=>[l(w,null,{header:i(()=>[a("div",tt,[a("h3",lt," Découvrez la liste des candidats à cette mission. #ID "+O(t(h)),1),l(V,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:o[0]||(o[0]=u=>r.value=!1)})])]),default:i(()=>[y.value&&y.value.data.length>0?(d(),m("div",at,[t(D)?(d(),m("div",ot,[nt,a("div",st,[a("div",it,[a("div",rt,[t(g).profil_photo?(d(),m("img",{key:0,class:"w-40 h-40 mb-3 rounded-full shadow-lg",src:t(v).public.urlBase+"storage/profil_photo/"+t(g).profil_photo,alt:"Profile image"},null,8,ut)):(d(),m("img",{key:1,class:"w-40 h-40 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+t(g).name+"&background=132C87&color=fff",alt:"Profile image"},null,8,dt))])]),a("div",ct,[a("h5",mt,O(t(g).name),1),a("div",pt,[a("p",gt,O(t(g).email),1)]),a("div",ft,[a("p",vt,O(t(g).phone),1)])]),l($,{class:"py-4 pr-3"}),a("div",_t,[a("a",{href:t(v).public.urlBase+"freelancer/"+t(g).name,target:"_bank",class:"p-2 rounded-md shadow-md text-white border-2 border-[#132C87] text-center bg-[#132C87] hover:bg-[#132C87]/90 transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,bt),t(g).cv?(d(),m("a",{key:0,href:t(v).public.urlBase+"storage/cv/"+t(g).cv,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Voir son CV ",8,ht)):(d(),m("p",yt," Pas de CV "))])])])):P("",!0),a("div",Ct,[a("div",xt,[l(S,{icon:"i-heroicons-command-line",color:"emerald",variant:"soft",title:"À savoir!",description:"Les recruteurs ne paient aucun frais de recrutement, tandis que les freelances versent des commissions pour chaque mission obtenue. Il est nécessaire de faire votre choix sur le site en cliquant sur 'Mon choix' pour notifier Freeci en amont. "})]),(d(!0),m(H,null,X(y.value.data,(u,k)=>(d(),m("div",{key:k,class:"col-span-12 sm:col-span-6 lg:col-span-4 shadow-md w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3"},[l(T,{modelValue:t(C),"onUpdate:modelValue":o[1]||(o[1]=f=>de(C)?C.value=f:C=f)},{default:i(()=>[l(w,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:i(()=>[q(" À savoir ")]),footer:i(()=>[l(V,{color:"green",variant:"solid",onClick:t(b),loading:t(n)},{default:i(()=>[q("Confirmer")]),_:1},8,["onClick","loading"])]),default:i(()=>[kt]),_:1})]),_:1},8,["modelValue"]),a("div",Vt,[a("div",wt,[u.profil_photo?(d(),m("img",{key:0,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:t(v).public.urlBase+"storage/profil_photo/"+u.profil_photo,alt:"Profile image"},null,8,Ut)):(d(),m("img",{key:1,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+u.name+"&background=132C87&color=fff",alt:"Profile image"},null,8,zt)),a("div",null,[a("h5",$t,O(u.name),1),a("div",It,[a("p",At,O(u.email),1)])])]),a("a",{target:"_blank",href:"https://wa.me/2250161333655?text=Freeci Hub besoin du numréo de : "+u.name,class:"animate-pulse"},[l(j,{color:"green",variant:"subtle"},{default:i(()=>[q(" Obtenir Téléphone")]),_:1})],8,Mt)]),a("div",St,[Bt,l(j,{color:"green",variant:"soft",size:"md"},{default:i(()=>[q(O(u.budget.toLocaleString("fr-FR"))+" F",1)]),_:2},1024),t(D)?P("",!0):(d(),m("button",{key:0,onClick:f=>t(M)(u.user_id),class:"px-4 inline-flex items-center py-2 text-md font-medium text-center text-[#132C87] border-2 border-[#132C87] hover:text-white hover:bg-[#132C87] transition-all ease-in-out duration-300"}," Mon choix ",8,Dt))]),l($,{class:"py-4 pr-3"}),a("div",jt,[a("a",{href:t(v).public.urlBase+"freelancer/"+u.name,target:"_bank",class:"p-2 rounded-md shadow-md text-white border-2 border-[#132C87] text-center bg-[#132C87] hover:bg-[#132C87]/90 transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,Ot),u.cv?(d(),m("a",{key:0,href:t(v).public.urlBase+"storage/cv/"+u.cv,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Voir son CV ",8,Tt)):(d(),m("p",Ft," Pas de CV "))])]))),128))])])):(d(),m("div",Pt,"Pas de candidature"))]),_:1})]),_:1},8,["modelValue"])])}}},Et={class:"flex pr-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},qt={class:"flex justify-end pr-3 py-3.5 border-t border-gray-200 dark:border-gray-700"},le=8,Nt=me({__name:"AllMission",props:["data1"],emits:["updateData","updateStatut"],setup(e,{emit:v}){let h=te();const r=[{key:"id",label:"ID"},{key:"title",label:"Titre",sortable:!0},{key:"budget_min",label:"Budget Min",sortable:!0},{key:"budget_max",label:"Budget Max",sortable:!0},{key:"statut",label:"Statut",sortable:!0,direction:"desc"},{key:"code",label:"Code"},{key:"created_at",label:"Diffusé"},{key:"actions"}];let y=e;const A=U(""),B=I(()=>A.value?y.data1.filter(g=>Object.values(g).some(c=>String(c).toLowerCase().includes(A.value.toLowerCase()))):y.data1),s=U(1),C=I(()=>B.value.slice((s.value-1)*le,s.value*le)),n=v,z=Be();let M=U(null),b=U(!1);ce("missionId",M),ce("isOpen",b);const D=g=>[[{label:"Modifier",icon:"i-heroicons-pencil-square-20-solid",click:()=>{n("updateData",g.id)}},{label:"Candidature",icon:"i-heroicons-user-group-20-solid",click:()=>{M.value=g.id,b.value=!0}},{label:"Partager le lien",icon:"i-heroicons-share-20-solid",click:()=>{navigator.clipboard.writeText(h.public.urlBase+"mission/"+g.id),z.add({title:"Lien copié : "+h.public.urlBase+"mission/"+g.id})}}],[{label:"Changer le statut",icon:"i-heroicons-arrow-path-20-solid",click:()=>{const{data:c,loading:o,fetchData:V,error:$}=N(`/hub/mission/fermer/${g.id}`,"PATCH");V(),c&&(n("updateStatut",g.id),z.add({title:"Cette mission est désormais fermée "}))}}]];return U(!1),(g,c)=>{const o=oe,V=Ce,$=Y,S=Te,w=Fe,T=Pe,j=Lt;return d(),m("section",null,[a("div",Et,[l(o,{modelValue:A.value,"onUpdate:modelValue":c[0]||(c[0]=u=>A.value=u),placeholder:"Recherche...",color:"#132C87",size:"md"},null,8,["modelValue"])]),l(w,{modelValue:g.selected,"onUpdate:modelValue":c[1]||(c[1]=u=>g.selected=u),columns:r,rows:C.value,"empty-state":{icon:"i-heroicons-circle-stack-20-solid",label:"Aucune mission."}},{"title-data":i(({row:u})=>[q(O(u.title.substring(0,20))+" ... ",1)]),"budget_min-data":i(({row:u})=>[q(O(u.budget_min.toLocaleString("fr-FR")),1)]),"budget_max-data":i(({row:u})=>[q(O(u.budget_max.toLocaleString("fr-FR")),1)]),"statut-data":i(({row:u})=>[l(V,{size:"xs",label:u.statut==1?"Ouvert":"Terminé",color:u.statut==1?"emerald":"orange",variant:"subtle"},null,8,["label","color"])]),"actions-data":i(({row:u})=>[l(S,{items:D(u)},{default:i(()=>[l($,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})]),_:2},1032,["items"])]),_:1},8,["modelValue","rows"]),a("div",qt,[l(T,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),"page-count":le,total:t(y).data1.length},null,8,["modelValue","total"])]),l(j)])}}}),Rt={class:"flex items-center justify-between"},Gt=a("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Modifier la mission ",-1),Ht=["innerHTML"],Wt={class:"grid grid-cols-12 gap-4 w-full"},Jt=a("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Zt=a("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Kt={__name:"UpdateMission",props:["id"],emits:["close"],setup(e,{emit:v}){var j,u;const{userInfo:h}=he();te().public.apiBase;let y=e;const A=U(!0),B=["En ligne","Sur place"],s=["Une seule fois","Par Jour"],{data:C}=ye();let n=U({title:"",email:(j=h.value)==null?void 0:j.email,type_mission:"En ligne",type_budget:"Une seule fois",category:"Informatique",description:"",budget_max:null,budget_min:null,phone:(u=h.value)==null?void 0:u.phone});const{data:z,fetchData:M}=N(`/hub/mission/voir/${y.id}`,"GET"),b=U(!0),D=U(null);(async()=>{b.value=!0,await M(),D.value=z.value,b.value=!1})(),fe(z,(k,f)=>{k!==f&&(console.log("New Value:",k),D.value=k,n.value.title=k.data.title,n.value.category=k.data.category,n.value.budget_max=k.data.budget_max,n.value.budget_min=k.data.budget_min,n.value.description=k.data.description,k.data.type_budget=="1"?n.value.type_budget="Une seule fois":n.value.type_budget="Par Jour",k.data.type_mission=="1"?n.value.type_mission="En ligne":n.value.type_mission="Sur place")});const{data:c,loading:o,fetchData:V,error:$}=N(`/hub/mission/modifier/${y.id}`,"PATCH",n.value),S=async()=>{var k,f;n.value.email=(k=h.value)==null?void 0:k.email,n.value.phone=(f=h.value)==null?void 0:f.phone,V()},w=v;let T=()=>{A.value=!1,w("close")};return(k,f)=>{const p=Y,R=ae,J=oe,L=ve,_=xe,E=_e,G=be,ke=ne,Ve=se;return d(),m("div",null,[l(Ve,{modelValue:A.value,"onUpdate:modelValue":f[7]||(f[7]=x=>A.value=x),fullscreen:""},{default:i(()=>[l(ke,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:i(()=>[a("div",Rt,[Gt,l(p,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:t(T)},null,8,["onClick"])])]),default:i(()=>[t(c)?(d(),W(R,{key:0,icon:"i-heroicons-check",color:"emerald",variant:"solid",title:"Bravo , Mission modifiée!",description:`\r
            Bravo , Votre mission a été modifiée\r
\r
          `,class:"mb-4"})):t($)?(d(),W(R,{key:1,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full mb-4",color:"red",variant:"solid"},{title:i(({title:x})=>[a("span",{innerHTML:x},null,8,Ht)]),description:i(()=>[a("ul",null,[(d(!0),m(H,null,X(t($),(x,we)=>(d(),m("li",{key:we},O(x[0]),1))),128))])]),_:1})):P("",!0),a("form",{class:"grid grid-cols-12 gap-8 pb-4 w-full",onSubmit:ge(S,["prevent"])},[l(L,{label:"Titre",description:"Donnez un titre à votre offre.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(J,{placeholder:"Exemple : Ingénieur Devops automatisation",icon:"i-heroicons-pencil",color:"#132C87",size:"lg",modelValue:t(n).title,"onUpdate:modelValue":f[0]||(f[0]=x=>t(n).title=x)},null,8,["modelValue"])]),_:1}),l(L,{label:"Mode de travail",description:"Choisissez le mode de travail du freelancer.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(_,{modelValue:t(n).type_mission,"onUpdate:modelValue":f[1]||(f[1]=x=>t(n).type_mission=x),options:B,color:"#132C87",icon:"i-heroicons-globe-alt",size:"lg"},null,8,["modelValue"])]),_:1}),l(L,{label:"Catégorie",description:"Choisissez la catégorie de votre mission.",class:"col-span-full md:col-span-4"},{default:i(()=>[l(E,{modelValue:t(n).category,"onUpdate:modelValue":f[2]||(f[2]=x=>t(n).category=x),options:t(C).categories.map(x=>x.name),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]),_:1}),l(L,{label:"Modéle de paiement",description:"Souhaitez-vous payer le freelancer par jour ou une seule fois ?",class:"col-span-full md:col-span-4"},{default:i(()=>[l(_,{modelValue:t(n).type_budget,"onUpdate:modelValue":f[3]||(f[3]=x=>t(n).type_budget=x),options:s,color:"#132C87",icon:"i-heroicons-banknotes",size:"lg"},null,8,["modelValue"])]),_:1}),l(L,{label:"Budget de la mission",description:"Combien avez vous alloué pour cette mission ?",class:"col-span-full md:col-span-8"},{default:i(()=>[a("div",Wt,[l(J,{placeholder:"Budget Minimum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:t(n).budget_min,"onUpdate:modelValue":f[4]||(f[4]=x=>t(n).budget_min=x)},{trailing:i(()=>[Jt]),_:1},8,["modelValue"]),l(J,{placeholder:"Budget Maximum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:t(n).budget_max,"onUpdate:modelValue":f[5]||(f[5]=x=>t(n).budget_max=x)},{trailing:i(()=>[Zt]),_:1},8,["modelValue"])])]),_:1}),l(L,{label:"Décrivez votre mission",description:"Caractère minimum ( 20 caractères ).",class:"col-span-full"},{default:i(()=>[l(G,{placeholder:"Nous recherchons un développeur Ruby pour prendre en main une application web déjà existante. Il sera amené à travailler à long terme avec nous, car nous avons plusieurs autres fonctionnalités prévues pour la suite. Une bonne connaissance en Ruby est obligatoire pour ce projet ...",color:"#132C87",size:"md",rows:8,modelValue:t(n).description,"onUpdate:modelValue":f[6]||(f[6]=x=>t(n).description=x)},null,8,["modelValue"])]),_:1}),l(p,{color:"blue",variant:"solid",label:"Mofifier la mission",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"lg",loading:t(o),type:"submit"},null,8,["loading"])],32)]),_:1})]),_:1},8,["modelValue"])])}}},Qt={class:"pt-4"},Xt={class:"bg-[#132C87] rounded-xl shadow-md w-full p-4 flex items-center justify-between relative"},Yt={key:0,class:"fixed w-full max-w-7xl h-full z-20 bottom-0"},el=a("div",{class:"flex justify-center items-center h-full w-full",role:"status"},[a("svg",{"aria-hidden":"true",class:"w-1/3 h-1/3 text-[#132C87] animate-spin fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),a("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),a("span",{class:"sr-only"},"Loading...")],-1),tl=[el],ll={class:"flex gap-4"},bl={__name:"index",setup(e){const v=De(),{data:h,loading:r,fetchData:y,error:A}=N(`/hub/mission/${v.value.email}`,"GET");function B(M){h&&h.value.data.map(b=>{b.id==M&&(b.statut=b.statut==0?1:0)})}let s=U(!1),C=U(null);function n(M){C.value=M,s.value=!0}function z(){s.value=!1,id.value=null,y()}return je(()=>{y()}),Ee({title:"Les missions - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Les missions - Freeci Hub",description:"Explorez les missions disponibles sur Freeci Hub pour trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(M,b)=>{const D=Y,g=et,c=Nt,o=Kt;return d(),m("div",Qt,[a("div",Xt,[t(r)?(d(),m("div",Yt,tl)):P("",!0),a("ul",ll,[a("li",null,[l(D,{icon:"i-heroicons-briefcase",size:"sm",variant:"ghost",label:"Mes missions",trailing:!1,class:"bg-white text-[#132C87] transition duration-300 ease-in-out"})])]),l(g)]),t(h)?(d(),W(c,{key:0,data1:t(h).data,onUpdateStatut:B,onUpdateData:n},null,8,["data1"])):P("",!0),t(s)?(d(),W(o,{key:1,onClose:z,id:t(C)},null,8,["id"])):P("",!0)])}}};export{bl as default};
