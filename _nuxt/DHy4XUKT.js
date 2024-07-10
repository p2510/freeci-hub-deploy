import{_ as w}from"./Cp1V7vQo.js";import{_ as z,a as U}from"./Bt5b1ZVN.js";import{_ as I}from"./Bby845Hw.js";import{g as B,r as a,c as F,a as o,h as m,i as b,j as H,b as t,w as d,l as N,o as x}from"./C3EGuF6Z.js";import{u as R}from"./CszmEnh-.js";import{u as q}from"./C0ybsrIt.js";import{_ as E}from"./DBBH0bIv.js";import"./tCz79pYD.js";import"./B8T-Zw5C.js";const S={class:"bg-gray-50 dark:bg-gray-900"},j={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},G=o("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[o("img",{class:"h-14 mr-2",src:E,alt:"logo de Freeci HUB"})],-1),A={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},D={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},M=o("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," S'inscrire ",-1),O={class:"space-y-4 md:space-y-6",action:"#",enctype:"multipart/form-data"},T={class:"space-y-5"},ee={__name:"inscription",setup($){const p=B(),s=a(null),_=a(null),f=a("Informatique"),g=a(null);let n=a(!1),r=a(null);const{data:y}=R(),V=async()=>{n.value=!0;let{data:h}=await p.from("usersinfo").select("*").eq("email",s.value);if(h.length>0)r.value=0;else{const{data:e,error:i}=await p.from("usersinfo").insert([{name:_.value,email:s.value,category:f.value,phone:g.value}]).select();await p.auth.signInWithOtp({email:s.value,options:{emailRedirectTo:"https://hub.freeci.ci/confirm"}}),i?(n.value=!1,r.value=0):(n.value=!1,r.value=1)}};return q({title:"Inscription - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Inscription - Freeci Hub",description:"Inscrivez-vous sur Freeci Hub pour accéder à une plateforme qui vous permet de trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(h,e)=>{const i=w,v=U,u=z,C=I,k=N;return x(),F("div",null,[o("section",S,[o("div",j,[G,o("div",A,[m(r)==1?(x(),b(i,{key:0,description:"Vous avez reçu un email de vérification.",title:"Email !",color:"primary",variant:"subtle"})):m(r)==0?(x(),b(i,{key:1,description:"Une erreur est survenue",title:"Erreur",color:"red",variant:"subtle"})):H("",!0),o("div",D,[M,o("form",O,[o("div",T,[t(u,{label:"Email",description:"Renseignez votre adresse email.",class:"col-span-full"},{default:d(()=>[t(v,{placeholder:"eric@gmail.com",color:"#132C87",size:"lg",type:"email",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),autofocus:""},null,8,["modelValue"])]),_:1}),t(u,{label:"Nom de votre entreprise",description:"Renseignez le nom de votre entreprise.",class:"col-span-full"},{default:d(()=>[t(v,{placeholder:"Hambo Group",color:"#132C87",size:"lg",type:"text",modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=l=>_.value=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"Numéro de téléphone",description:"Renseignez le numéro de téléphone.",class:"col-span-full"},{default:d(()=>[t(v,{placeholder:"0160485654",color:"#132C87",size:"lg",type:"text",modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=l=>g.value=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"Catégorie",description:"Choisissez la catégorie de votre entreprise.",class:"col-span-full md:col-span-4"},{default:d(()=>{var l;return[t(C,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=c=>f.value=c),options:(l=m(y))==null?void 0:l.categories.map(c=>({label:c.name,value:c.id})),color:"#132C87",icon:"i-heroicons-tag",size:"md"},null,8,["modelValue","options"])]}),_:1})]),t(k,{onClick:V,color:"blue",variant:"solid",label:"S'inscrire",trailing:!1,class:"col-start-6 col-end-8 flex justify-center text-lg shadow-md",size:"md",loading:m(n)},null,8,["loading"])])])])])])])}}};export{ee as default};
