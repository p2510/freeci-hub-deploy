import{y as x,az as I,as as f}from"./C8vjBnMy.js";const p=Symbol.for("nuxt:client-only"),m="data-n-ids",b="-";function _(t){var i,r,d,u,a,c;if(typeof t!="string")throw new TypeError("[nuxt] [useId] key must be a string.");t=`n${t.slice(1)}`;const e=I(),n=f();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");e._id||(e._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(i=n._nuxtIdIndex)[t]||(i[t]=0);const s=t+b+n._nuxtIdIndex[t]++;if(e.payload.serverRendered&&e.isHydrating&&!x(p,!1)){const o=((r=n.vnode.el)==null?void 0:r.nodeType)===8&&((u=(d=n.vnode.el)==null?void 0:d.nextElementSibling)!=null&&u.getAttribute)?(a=n.vnode.el)==null?void 0:a.nextElementSibling:n.vnode.el,l=JSON.parse(((c=o==null?void 0:o.getAttribute)==null?void 0:c.call(o,m))||"{}");if(l[s])return l[s]}return t+"_"+e._id++}export{_ as u};
