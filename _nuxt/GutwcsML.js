import{_ as w,a as U,b as z}from"./0NLuZhy4.js";import{_ as I}from"./CXrW18_i.js";import{g as B,r as a,h as q,i as F,n as H,c as N,a as o,j as d,k as x,l as R,b as t,w as m,q as S,o as h}from"./c-UNJ2p2.js";import{u as E}from"./BIUUIC9Y.js";import{u as j}from"./DDKYcSLa.js";import{_ as G}from"./B0i3E2tw.js";import"./CIPqueLy.js";const M={class:"bg-gray-50 dark:bg-gray-900"},T={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},A=o("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[o("img",{class:"h-14 mr-2",src:G,alt:"logo de Freeci HUB"})],-1),D={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},O={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},W=o("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," S'inscrire ",-1),$={class:"space-y-4 md:space-y-6",action:"#",enctype:"multipart/form-data"},J={class:"space-y-5"},te={__name:"inscription",setup(K){const p=B(),s=a(null),_=a(null),f=a("Informatique"),g=a(null);let r=a(!1),n=a(null);const{data:y}=E(),V=async()=>{r.value=!0;let{data:v}=await p.from("usersinfo").select("*").eq("email",s.value);if(v.length>0)n.value=0;else{const{data:e,error:i}=await p.from("usersinfo").insert([{name:_.value,email:s.value,category:f.value,phone:g.value}]).select();await p.auth.signInWithOtp({email:s.value,options:{emailRedirectTo:"https://hub.freeci.ci/confirm"}}),i?(r.value=!1,n.value=0):(r.value=!1,n.value=1)}};return q(()=>{F()&&H("/dashboard")}),j({title:"Inscription - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Inscription - Freeci Hub",description:"Inscrivez-vous sur Freeci Hub pour accéder à une plateforme qui vous permet de trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(v,e)=>{const i=z,b=U,u=w,k=I,C=S;return h(),N("div",null,[o("section",M,[o("div",T,[A,o("div",D,[d(n)==1?(h(),x(i,{key:0,description:"Vous avez reçu un email de vérification.",title:"Email !",color:"primary",variant:"subtle"})):d(n)==0?(h(),x(i,{key:1,description:"Une erreur est survenue",title:"Erreur",color:"red",variant:"subtle"})):R("",!0),o("div",O,[W,o("form",$,[o("div",J,[t(u,{label:"Email",description:"Renseignez votre adresse email.",class:"col-span-full"},{default:m(()=>[t(b,{placeholder:"eric@gmail.com",color:"#132C87",size:"lg",type:"email",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),autofocus:""},null,8,["modelValue"])]),_:1}),t(u,{label:"Nom de votre entreprise",description:"Renseignez le nom de votre entreprise.",class:"col-span-full"},{default:m(()=>[t(b,{placeholder:"Hambo Group",color:"#132C87",size:"lg",type:"text",modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=l=>_.value=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"Numéro de téléphone",description:"Renseignez le numéro de téléphone.",class:"col-span-full"},{default:m(()=>[t(b,{placeholder:"0160485654",color:"#132C87",size:"lg",type:"text",modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=l=>g.value=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"Catégorie",description:"Choisissez la catégorie de votre entreprise.",class:"col-span-full md:col-span-4"},{default:m(()=>{var l;return[t(k,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=c=>f.value=c),options:(l=d(y))==null?void 0:l.categories.map(c=>({label:c.name,value:c.id})),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]}),_:1})]),t(C,{onClick:V,color:"blue",variant:"solid",label:"S'inscrire",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"md",loading:d(r)},null,8,["loading"])])])])])])])}}};export{te as default};
