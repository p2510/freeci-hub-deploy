import{aw as C,r as y,H as w,S as b,ax as B,E as O,x as E,ar as _,au as H,ay as M,j as R,L as S,az as z,s as j}from"./DW60q1GZ.js";const x=s=>s==="defer"||s===!1;function K(...s){var m;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[e,u,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=H(),p=u,g=()=>null,v=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??g,a.getCachedData=a.getCachedData??v,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??C.deep,a.dedupe=a.dedupe??"cancel";const f=()=>a.getCachedData(e,t)!=null;if(!t._asyncData[e]||!a.immediate){(m=t.payload._errors)[e]??(m[e]=null);const i=a.deep?y:w;t._asyncData[e]={data:i(a.getCachedData(e,t)??a.default()),pending:y(!f()),error:b(t.payload._errors,e),status:y("idle")}}const r={...t._asyncData[e]};r.refresh=r.execute=(i={})=>{if(t._asyncDataPromises[e]){if(x(i.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if((i._initial||t.isHydrating&&i._initial!==!1)&&f())return Promise.resolve(a.getCachedData(e,t));r.pending.value=!0,r.status.value="pending";const l=new Promise((c,o)=>{try{c(p(t))}catch(d){o(d)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=T(o,a.pick)),t.payload.data[e]=o,r.data.value=o,r.error.value=null,r.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];r.error.value=M(c),r.data.value=R(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},r.clear=()=>N(t,e);const D=()=>r.refresh({_initial:!0}),P=a.server!==!1&&t.payload.serverRendered;{const i=S();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;B(()=>{o.forEach(d=>{d()}),o.splice(0,o.length)}),O(()=>o.splice(0,o.length))}P&&t.isHydrating&&(r.error.value||f())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const l=z();if(a.watch){const o=E(a.watch,()=>r.refresh());l&&_(o)}const c=t.hook("app:data:refresh",async o=>{(!o||o.includes(e))&&await r.refresh()});l&&_(c)}const h=Promise.resolve(t._asyncDataPromises[e]).then(()=>r);return Object.assign(h,r),h}function N(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function T(s,n){const e={};for(const u of n)e[u]=s[u];return e}const F=()=>{const n=j().public.apiBase,{data:e,pending:u,error:a,refresh:t}=K("categories",()=>$fetch(`${n}/freelancer-category`));return{data:e,error:a}};export{F as u};
