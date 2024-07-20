import{r as v,o as d,c as _,b as t,w as a,a as o,h as e,i as T,F as E,x as H,t as z,j as L,k as K,n as P,l as S,y as Z,s as Q,d as O,z as de,A as ue,B as W,C as ce,D as J,m as pe,E as me}from"./RsG6uWRm.js";import{_ as X}from"./Cq_8sspE.js";import{a as R,_ as Y}from"./31Z0-56N.js";import{_ as ee}from"./Bac_z8zq.js";import{_ as te,a as fe,b as _e,c as ge}from"./DdWiSJWp.js";import{_ as q,a as G}from"./CjspY66u.js";import{u as N}from"./iN2IYPej.js";import{u as oe}from"./BokIVowj.js";import{u as j,_ as ae,a as be}from"./CuEpZtVR.js";import{u as ve}from"./CHTnhQQ5.js";import"./Bx6TyMWy.js";import"./WYT0wCjd.js";const he={class:"flex items-center justify-between"},xe=o("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Publier une nouvelle offre ",-1),ye=["innerHTML"],Ce={class:"grid grid-cols-12 gap-4 w-full"},ke=o("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Ve=o("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Ue={__name:"AddContrat",setup(B){var $;const{userInfo:D}=N();P().public.apiBase;const g=v(!1),{data:b}=oe();let r=v({title:"",type_mission:"En ligne",category:"Informatique",description:"",location:null,budget_max:null,budget_min:null,tags:null,phone:($=D.value)==null?void 0:$.phone});const{data:s,loading:h,fetchData:U,error:p}=j("/hub/contrat/publier","POST",r.value),w=async()=>{var x;r.value.phone=(x=D.value)==null?void 0:x.phone,U()};return(x,l)=>{const c=S,n=X,y=R,C=Y,M=ee,k=te,m=q,I=G;return d(),_("div",null,[t(c,{onClick:l[0]||(l[0]=i=>g.value=!0),icon:"i-heroicons-plus",size:"xl",variant:"ghost",label:" Publier une nouvelle offre",trailing:!1,class:"bg-green-600 text-white hover:bg-green-600/80 transition duration-300 ease-in-out"}),t(I,{modelValue:g.value,"onUpdate:modelValue":l[9]||(l[9]=i=>g.value=i),fullscreen:""},{default:a(()=>[t(m,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:a(()=>[o("div",he,[xe,t(c,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:l[1]||(l[1]=i=>g.value=!1)})])]),default:a(()=>[e(s)?(d(),T(n,{key:0,icon:"i-heroicons-check",color:"emerald",variant:"solid",title:"Bravo , offre publiée!",description:"Votre offre a été publiée avec succès . Voici le code  : "+e(s).data.code,class:"mb-4"},null,8,["description"])):e(p)?(d(),T(n,{key:1,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full mb-4",color:"red",variant:"solid"},{title:a(({title:i})=>[o("span",{innerHTML:i},null,8,ye)]),description:a(()=>[o("ul",null,[(d(!0),_(E,null,H(e(p),(i,u)=>(d(),_("li",{key:u},z(i[0]),1))),128))])]),_:1})):L("",!0),o("form",{class:"grid grid-cols-12 gap-8 pb-4 w-full",onSubmit:K(w,["prevent"])},[t(C,{label:"Titre",description:"Donnez un titre à votre offre.",class:"col-span-full md:col-span-4"},{default:a(()=>[t(y,{placeholder:"Exemple : Ingénieur Devops automatisation",icon:"i-heroicons-pencil",color:"#132C87",size:"lg",modelValue:e(r).title,"onUpdate:modelValue":l[2]||(l[2]=i=>e(r).title=i)},null,8,["modelValue"])]),_:1}),t(C,{label:"Catégorie",description:"Choisissez la catégorie de votre offre.",class:"col-span-full md:col-span-4"},{default:a(()=>[t(M,{modelValue:e(r).category,"onUpdate:modelValue":l[3]||(l[3]=i=>e(r).category=i),options:e(b).categories.map(i=>i.name),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]),_:1}),t(C,{label:"Lieu",description:"Lieu de travail.",class:"col-span-full md:col-span-4"},{default:a(()=>[t(y,{placeholder:"Abidjan , Côte d'ivoire",icon:"i-heroicons-map-pin",color:"#132C87",size:"lg",modelValue:e(r).location,"onUpdate:modelValue":l[4]||(l[4]=i=>e(r).location=i)},null,8,["modelValue"])]),_:1}),t(C,{label:"Salaire mensuel",description:"Combien avez vous alloué pour ce poste?",class:"col-span-full md:col-span-6"},{default:a(()=>[o("div",Ce,[t(y,{placeholder:"Budget Minimum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:e(r).budget_min,"onUpdate:modelValue":l[5]||(l[5]=i=>e(r).budget_min=i)},{trailing:a(()=>[ke]),_:1},8,["modelValue"]),t(y,{placeholder:"Budget Maximum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:e(r).budget_max,"onUpdate:modelValue":l[6]||(l[6]=i=>e(r).budget_max=i)},{trailing:a(()=>[Ve]),_:1},8,["modelValue"])])]),_:1}),t(C,{label:"Compétences requises (optionnel)",description:"Une virgule pour séparer les différentes compétences.",class:"col-span-full md:col-span-6"},{default:a(()=>[t(y,{placeholder:"Exemple : PHP , Sage , Word ...",color:"#132C87",size:"md",modelValue:e(r).tags,"onUpdate:modelValue":l[7]||(l[7]=i=>e(r).tags=i)},null,8,["modelValue"])]),_:1}),t(C,{label:"Décrivez votre offre",description:"Caractère minimum ( 20 caractères ).",class:"col-span-full"},{default:a(()=>[t(k,{placeholder:"Nous recherchons un développeur Ruby pour prendre en main une application web déjà existante. Il sera amené à travailler à long terme avec nous, car nous avons plusieurs autres fonctionnalités prévues pour la suite. Une bonne connaissance en Ruby est obligatoire pour ce projet ...",color:"#132C87",size:"md",rows:8,modelValue:e(r).description,"onUpdate:modelValue":l[8]||(l[8]=i=>e(r).description=i)},null,8,["modelValue"])]),_:1}),t(c,{color:"blue",variant:"solid",label:"Publier l'offre",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"lg",loading:e(h),type:"submit"},null,8,["loading"])],32)]),_:1})]),_:1},8,["modelValue"])])}}},we={class:"flex items-center justify-between"},$e={class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},De={key:0,class:"grid grid-cols-12 gap-4"},ze={class:"flex justify-around items-center py-3"},Be={class:"flex justify-start gap-4 items-center"},Me=["src"],Ie=["src"],Te={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white lowercase break-words w-3/4"},je={class:"text-sm text-gray-500 dark:text-gray-400"},Fe={class:"pb-2"},Le=["href"],Se={class:"flex justify-around gap-4 pb-2 mx-10"},Oe=["href"],Pe=["href"],Ae={key:1,class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center w-full"},Ee={key:1},He={__name:"FreelanceCard",setup(B){const D=P(),V=Z("missionId"),g=Z("isOpen"),b=v(null),r=v(null),s=v(!1),h=async()=>{const{data:U,error:p,loading:w,fetchData:$}=j(`/hub/contrat/voir-freelancer/${V.value}`,"GET");s.value=w.value,await $(),p.value?r.value=p.value:b.value=U.value};return Q([g,V],([U,p])=>{U&&p&&h()}),(U,p)=>{const w=S,$=ae,x=be,l=q,c=G;return d(),_("section",null,[t(c,{modelValue:e(g),"onUpdate:modelValue":p[1]||(p[1]=n=>de(g)?g.value=n:null),fullscreen:""},{default:a(()=>[t(l,null,{header:a(()=>[o("div",we,[o("h3",$e," Découvrez la liste des candidats à ce poste. #ID "+z(e(V)),1),t(w,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:p[0]||(p[0]=n=>g.value=!1)})])]),default:a(()=>[b.value&&b.value.data.length>0?(d(),_("div",De,[(d(!0),_(E,null,H(b.value.data,(n,y)=>(d(),_("div",{key:y,class:"col-span-12 sm:col-span-6 lg:col-span-4 shadow-md w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3"},[o("div",ze,[o("div",Be,[n.profil_photo?(d(),_("img",{key:0,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:e(D).public.urlBase+"storage/profil_photo/"+n.profil_photo,alt:"Profile image"},null,8,Me)):(d(),_("img",{key:1,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+n.name+"&background=132C87&color=fff",alt:"Profile image"},null,8,Ie)),o("div",null,[o("h5",Te,z(n.name),1),o("div",je,[o("p",Fe,z(n.email),1)])])]),o("a",{target:"_blank",href:"https://wa.me/2250161333655?text=Freeci Hub , besoin du numréo de : "+n.name,class:"animate-pulse"},[t($,{color:"green",variant:"subtle"},{default:a(()=>[O(" Obtenir Téléphone")]),_:1})],8,Le)]),t(x,{class:"py-4 pr-3"}),o("div",Se,[o("a",{href:e(D).public.urlBase+"freelancer/"+n.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,Oe),n.cv?(d(),_("a",{key:0,href:e(D).public.urlBase+"storage/cv/"+n.cv,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Voir son CV ",8,Pe)):(d(),_("p",Ae," Pas de CV "))])]))),128))])):(d(),_("div",Ee,"Pas de candidature"))]),_:1})]),_:1},8,["modelValue"])])}}},Re={class:"flex pr-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},qe={class:"flex justify-end pr-3 py-3.5 border-t border-gray-200 dark:border-gray-700"},A=8,Ge=ue({__name:"AllContract",props:["data1"],emits:["updateData","updateStatut"],setup(B,{emit:D}){let V=P();const g=[{key:"id",label:"ID"},{key:"title",label:"Titre",sortable:!0},{key:"budget_min",label:"Salaire Min",sortable:!0},{key:"budget_max",label:"Salaire Max",sortable:!0},{key:"statut",label:"Statut",sortable:!0,direction:"desc"},{key:"code",label:"Code"},{key:"created_at",label:"Diffusé"},{key:"actions"}];let b=B;const r=v(""),s=W(()=>r.value?b.data1.filter(c=>Object.values(c).some(n=>String(n).toLowerCase().includes(r.value.toLowerCase()))):b.data1),h=v(1),U=W(()=>s.value.slice((h.value-1)*A,h.value*A)),p=D,w=ce();let $=v(null),x=v(!1);J("missionId",$),J("isOpen",x);const l=c=>[[{label:"Modifier",icon:"i-heroicons-pencil-square-20-solid",click:()=>{p("updateData",c.id)}},{label:"Candidature",icon:"i-heroicons-user-group-20-solid",click:()=>{$.value=c.id,x.value=!0}},{label:"Partager le lien",icon:"i-heroicons-share-20-solid",click:()=>{navigator.clipboard.writeText(V.public.urlBase+"en-regie/"+c.title),w.add({title:"Lien copié : "+V.public.urlBase+"en-regie/"+c.title})}}],[{label:"Changer le statut",icon:"i-heroicons-arrow-path-20-solid",click:()=>{const{data:n,loading:y,fetchData:C,error:M}=j(`/hub/contrat/fermer/${c.id}`,"PATCH");C(),n&&(p("updateStatut",c.id),w.add({title:"L'offre est désormais fermée "}))}}]];return v(!1),(c,n)=>{const y=R,C=ae,M=S,k=fe,m=_e,I=ge,i=He;return d(),_("section",null,[o("div",Re,[t(y,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=u=>r.value=u),placeholder:"Recherche...",color:"#132C87",size:"md"},null,8,["modelValue"])]),t(m,{modelValue:c.selected,"onUpdate:modelValue":n[1]||(n[1]=u=>c.selected=u),columns:g,rows:U.value,"empty-state":{icon:"i-heroicons-circle-stack-20-solid",label:"Aucun contrat."}},{"title-data":a(({row:u})=>[O(z(u.title.substring(0,20))+" ... ",1)]),"budget_min-data":a(({row:u})=>[O(z(u.budget_min.toLocaleString("fr-FR")),1)]),"budget_max-data":a(({row:u})=>[O(z(u.budget_max.toLocaleString("fr-FR")),1)]),"statut-data":a(({row:u})=>[t(C,{size:"xs",label:u.statut==1?"Ouvert":"Terminé",color:u.statut==1?"emerald":"orange",variant:"subtle"},null,8,["label","color"])]),"actions-data":a(({row:u})=>[t(k,{items:l(u)},{default:a(()=>[t(M,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})]),_:2},1032,["items"])]),_:1},8,["modelValue","rows"]),o("div",qe,[t(I,{modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=u=>h.value=u),"page-count":A,total:e(b).data1.length},null,8,["modelValue","total"])]),t(i)])}}}),Ne={class:"flex items-center justify-between"},Ze=o("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Modifier l'offre ",-1),We=["innerHTML"],Je={class:"grid grid-cols-12 gap-4 w-full"},Ke=o("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Qe=o("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"F",-1),Xe={__name:"UpdateContract",props:["id"],emits:["close"],setup(B,{emit:D}){N(),P().public.apiBase;let g=B;const b=v(!0),{data:r}=oe();let s=v({title:"",location:"",category:"Informatique",description:"",budget_max:null,budget_min:null});const{data:h,fetchData:U}=j(`/hub/contrat/voir/${g.id}`,"GET"),p=v(!0),w=v(null);(async()=>{p.value=!0,await U(),w.value=h.value,p.value=!1})(),Q(h,(k,m)=>{k!==m&&(console.log("New Value:",k),w.value=k,s.value.title=k.data.title,s.value.category=k.data.category,s.value.location=k.data.location,s.value.budget_max=k.data.budget_max,s.value.budget_min=k.data.budget_min,s.value.description=k.data.description)});const{data:x,loading:l,fetchData:c,error:n}=j(`/hub/contrat/modifier/${g.id}`,"PATCH",s.value),y=async()=>{c()},C=D;let M=()=>{b.value=!1,C("close")};return(k,m)=>{const I=S,i=X,u=R,F=Y,le=ee,ne=te,se=q,ie=G;return d(),_("div",null,[t(ie,{modelValue:b.value,"onUpdate:modelValue":m[6]||(m[6]=f=>b.value=f),fullscreen:""},{default:a(()=>[t(se,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:a(()=>[o("div",Ne,[Ze,t(I,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:e(M)},null,8,["onClick"])])]),default:a(()=>[e(x)?(d(),T(i,{key:0,icon:"i-heroicons-check",color:"emerald",variant:"solid",title:"Bravo , offre modifiée!",description:`\r
            Bravo , Votre offre a été modifiée\r
\r
          `,class:"mb-4"})):e(n)?(d(),T(i,{key:1,title:"Oups <i>Erreur </i>!",icon:"i-heroicons-exclamation-triangle",class:"col-span-full mb-4",color:"red",variant:"solid"},{title:a(({title:f})=>[o("span",{innerHTML:f},null,8,We)]),description:a(()=>[o("ul",null,[(d(!0),_(E,null,H(e(n),(f,re)=>(d(),_("li",{key:re},z(f[0]),1))),128))])]),_:1})):L("",!0),o("form",{class:"grid grid-cols-12 gap-8 pb-4 w-full",onSubmit:K(y,["prevent"])},[t(F,{label:"Titre",description:"Donnez un titre à votre offre.",class:"col-span-full md:col-span-6"},{default:a(()=>[t(u,{placeholder:"Exemple : Ingénieur Devops automatisation",icon:"i-heroicons-pencil",color:"#132C87",size:"lg",modelValue:e(s).title,"onUpdate:modelValue":m[0]||(m[0]=f=>e(s).title=f)},null,8,["modelValue"])]),_:1}),t(F,{label:"Catégorie",description:"Choisissez la catégorie de votre offre.",class:"col-span-full md:col-span-6"},{default:a(()=>[t(le,{modelValue:e(s).category,"onUpdate:modelValue":m[1]||(m[1]=f=>e(s).category=f),options:e(r).categories.map(f=>f.name),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]),_:1}),t(F,{label:"Lieu",description:"Lieu de travail.",class:"col-span-full md:col-span-6"},{default:a(()=>[t(u,{placeholder:"Abidjan , Côte d'ivoire",icon:"i-heroicons-map-pin",color:"#132C87",size:"lg",modelValue:e(s).location,"onUpdate:modelValue":m[2]||(m[2]=f=>e(s).location=f)},null,8,["modelValue"])]),_:1}),t(F,{label:"Salaire mensuel",description:"Combien avez vous alloué pour ce poste?",class:"col-span-full md:col-span-6"},{default:a(()=>[o("div",Je,[t(u,{placeholder:"Budget Minimum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:e(s).budget_min,"onUpdate:modelValue":m[3]||(m[3]=f=>e(s).budget_min=f)},{trailing:a(()=>[Ke]),_:1},8,["modelValue"]),t(u,{placeholder:"Budget Maximum",color:"#132C87",size:"lg",class:"col-span-6",type:"number",modelValue:e(s).budget_max,"onUpdate:modelValue":m[4]||(m[4]=f=>e(s).budget_max=f)},{trailing:a(()=>[Qe]),_:1},8,["modelValue"])])]),_:1}),t(F,{label:"Décrivez votre offre",description:"Caractère minimum ( 20 caractères ).",class:"col-span-full"},{default:a(()=>[t(ne,{placeholder:"Nous recherchons un développeur Ruby pour prendre en main une application web déjà existante. Il sera amené à travailler à long terme avec nous, car nous avons plusieurs autres fonctionnalités prévues pour la suite. Une bonne connaissance en Ruby est obligatoire pour ce projet ...",color:"#132C87",size:"md",rows:8,modelValue:e(s).description,"onUpdate:modelValue":m[5]||(m[5]=f=>e(s).description=f)},null,8,["modelValue"])]),_:1}),t(I,{color:"blue",variant:"solid",label:"Mofifier l'offre",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"lg",loading:e(l),type:"submit"},null,8,["loading"])],32)]),_:1})]),_:1},8,["modelValue"])])}}},Ye={class:"pt-4"},et={class:"bg-[#132C87] rounded-xl shadow-md w-full p-4 flex items-center justify-between relative"},tt={key:0,class:"fixed w-full max-w-7xl h-full z-20 bottom-0"},ot=o("div",{class:"flex justify-center items-center h-full w-full",role:"status"},[o("svg",{"aria-hidden":"true",class:"w-1/3 h-1/3 text-[#132C87] animate-spin fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),o("span",{class:"sr-only"},"Loading...")],-1),at=[ot],lt={class:"flex gap-4"},bt={__name:"index",setup(B){var $;pe();const{userInfo:D}=N(),{data:V,loading:g,fetchData:b,error:r}=j(`/hub/contrat/${($=D.value)==null?void 0:$.phone}`,"GET");function s(x){V&&V.value.data.map(l=>{l.id==x&&(l.statut=l.statut==0?1:0)})}let h=v(!1),U=v(null);function p(x){U.value=x,h.value=!0}function w(){h.value=!1,id.value=null,b()}return me(()=>{b()}),ve({title:"Les contrats - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Les contrats - Freeci Hub",description:"Explorez les missions disponibles sur Freeci Hub pour trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(x,l)=>{const c=S,n=Ue,y=Ge,C=Xe;return d(),_("div",Ye,[o("div",et,[e(g)?(d(),_("div",tt,at)):L("",!0),o("ul",lt,[o("li",null,[t(c,{icon:"i-heroicons-briefcase",size:"sm",variant:"ghost",label:"Mes contrats",trailing:!1,class:"bg-white text-[#132C87] transition duration-300 ease-in-out"})])]),t(n)]),e(V)?(d(),T(y,{key:0,data1:e(V).data,onUpdateStatut:s,onUpdateData:p},null,8,["data1"])):L("",!0),e(h)?(d(),T(C,{key:1,onClose:w,id:e(U)},null,8,["id"])):L("",!0)])}}};export{bt as default};
