import{B as v,E as w,c as s,h as l,j as i,a as e,b as c,F as y,x as k,o,t as a,i as p,w as d,d as u,n as j,l as F}from"./DJtMFKp8.js";import{u as B,_ as D,a as V}from"./CWy31s2v.js";import{u as N}from"./BBJQj5Fw.js";const z={key:0,class:"fixed w-full max-w-7xl h-full z-20 bottom-0"},M=e("div",{class:"flex justify-center items-center h-full w-full",role:"status"},[e("svg",{"aria-hidden":"true",class:"w-1/3 h-1/3 text-[#132C87] animate-spin fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),e("span",{class:"sr-only"},"Loading...")],-1),H=[M],E={key:1,class:"grid grid-cols-12 gap-4 pt-4"},L={class:"col-span-12 flex justify-end"},P={class:"flex justify-between items-center py-3"},R={class:"flex justify-start gap-4 items-center"},S=["src"],T=["src"],U={class:"mb-1 text-xl font-medium text-gray-900 dark:text-white lowercase"},Z={class:"text-sm text-gray-500 dark:text-gray-400"},q={class:"flex justify-center"},I={class:"flex justify-between mt-1 px-4"},O=e("p",{class:"py-2 px-4 text-md font-medium text-gray-900"},"TJM",-1),A={class:"px-4 inline-flex items-center py-2 text-sm font-medium text-center text-white bg-[#132C87] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},J={class:"flex justify-around gap-4 pb-2 mx-10"},G=["href"],K=["href"],Q={key:2},se={__name:"nous-recommandons",setup(W){const _=j(),{data:f,error:X,loading:h,fetchData:g}=B("/hub/mission/nous-recommandons"),r=v(()=>f.value);return w(()=>{f.value||g()}),N({title:"Nous recommandons - Freeci Hub : votre outil gratuit de recrutement freelance, CDD, intérim en Côte d'Ivoire et en Afrique de l'Ouest",ogTitle:"Nous recommandons - Freeci Hub",description:"Découvrez nos recommandations sur Freeci Hub pour trouver les meilleurs talents rapidement et efficacement en Côte d'Ivoire."}),(Y,$)=>{var m;const x=F,n=D,b=V;return o(),s("section",null,[l(h)?(o(),s("div",z,H)):i("",!0),r.value&&((m=r.value)==null?void 0:m.data.length)>0?(o(),s("div",E,[e("div",L,[c(x,{icon:"i-heroicons-cursor-arrow-rays",size:"sm",color:"indigo",variant:"solid",label:"Vous avez besoin de plus de profils ? ",trailing:!1,target:"_blank",to:"https://wa.me/2250161333655?text=Freeci Hub , j'ai besoin de plus de profils"})]),(o(!0),s(y,null,k(r.value.data,(t,C)=>(o(),s("div",{key:C,class:"col-span-12 lg:col-span-6 shadow-md w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3"},[e("div",P,[e("div",R,[t.profil_photo?(o(),s("img",{key:0,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:l(_).public.urlBase+"storage/profil_photo/"+t.profil_photo,alt:"Profile image"},null,8,S)):(o(),s("img",{key:1,class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:"https://ui-avatars.com/api/?name="+t.name+"&background=132C87&color=fff",alt:"Profile image"},null,8,T)),e("div",null,[e("h5",U,a(t.name),1),e("span",Z,a(t.email),1)])]),t.plan=="expert"?(o(),p(n,{key:0,color:"green",variant:"subtle"},{default:d(()=>[u(" Expert ")]),_:1})):i("",!0),t.plan=="pro"?(o(),p(n,{key:1,color:"yellow",variant:"subtle"},{default:d(()=>[u(" Pro ")]),_:1})):i("",!0)]),e("div",q,[c(n,{color:"indigo",variant:"soft",size:"lg"},{default:d(()=>[u(a(t.job),1)]),_:2},1024)]),e("div",I,[O,e("p",A,a(t.tjm.toLocaleString("fr-FR"))+" F ",1)]),c(b,{class:"py-4 pr-3"}),e("div",J,[e("a",{href:l(_).public.urlBase+"freelancer/"+t.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Visitez son profil ",8,G),e("a",{href:"https://wa.me/2250161333655?text=Freeci Hub , besoin du CV et  numréo de : "+t.name,target:"_bank",class:"p-2 rounded-md shadow-md text-[#132C87] border-2 border-[#132C87] text-center hover:bg-[#132C87] hover:text-white transition-all duration-300 ease-in-out w-full"}," Obtenir CV + Numéro ",8,K)])]))),128))])):(o(),s("div",Q,"Chargement"))])}}};export{se as default};
