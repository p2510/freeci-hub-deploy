import{g as l,i as c,al as o,h as i}from"./DW60q1GZ.js";const m=()=>{const u=l(),s=c(),a=o("userinfo",()=>null),r=o("error",()=>null),n=async()=>{if(s.value)try{const{data:e,error:t}=await u.from("usersinfo").select("*").eq("email",s.value.email);if(t)throw t;a.value=e.length?e[0]:null}catch(e){r.value=e.message}};return i(()=>{n()}),{userInfo:a,error:r}};export{m as u};
