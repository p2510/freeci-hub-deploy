import{g as l,m as c,aj as o,E as i}from"./BIC8akY0.js";const m=()=>{const u=l(),s=c(),a=o("userinfo",()=>null),r=o("error",()=>null),n=async()=>{if(s.value)try{const{data:e,error:t}=await u.from("usersinfo").select("*").eq("email",s.value.email);if(t)throw t;a.value=e.length?e[0]:null}catch(e){r.value=e.message}};return i(()=>{n()}),{userInfo:a,error:r}};export{m as u};
