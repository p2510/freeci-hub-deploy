import{m as t,n as r,q as s,s as n,c,o as u,v as i}from"./D02Y58s_.js";const _={__name:"confirm",setup(l){const e=t(),a=r().public.supabase.cookieName,o=s(`${a}-redirect-path`).value;return n(e,()=>{if(e.value)return s(`${a}-redirect-path`).value=null,i(o||"/dashboard")},{immediate:!0}),(m,p)=>(u(),c("div",null,"Connexion en cours..."))}};export{_ as default};
