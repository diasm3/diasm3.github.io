(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{34693:(e,t,o)=>{Promise.resolve().then(o.bind(o,74727)),Promise.resolve().then(o.bind(o,85578))},74727:(e,t,o)=>{"use strict";o.d(t,{WikiContent:()=>u});var r=o(34650),n=o(25598),i=o(92551),d=o(2783),l=o(16277),c=o(53064);function a(){let[e,t]=(0,c.useState)([]),[o,n]=(0,c.useState)("");return(0,c.useEffect)(()=>{t(Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6:not(footer):not(.comments)")).map(e=>{var t;let o=e.id||(null===(t=e.textContent)||void 0===t?void 0:t.toLowerCase().replace(/\W+/g,"-"))||"";return e.id=o,{id:o,title:e.textContent||"",level:parseInt(e.tagName.substring(1))||1}}));let e=()=>{for(let e of document.querySelectorAll("h1, h2, h3, h4, h5, h6")){let t=e.getBoundingClientRect();if(t.top>=0&&t.top<=150){n(e.id);break}}};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsxs)(s,{children:[(0,r.jsx)(m,{children:"목차"}),(0,r.jsx)(h,{children:e.map((e,t)=>(0,r.jsx)(p,{level:e.level,$isActive:o===e.id,children:(0,r.jsx)(g,{href:"#".concat(e.id),onClick:t=>{var o;t.preventDefault(),null===(o=document.getElementById(e.id))||void 0===o||o.scrollIntoView({behavior:"smooth"})},children:e.title})},"toc-".concat(e.id,"-").concat(t)))})]})}let s=n.ZP.nav.withConfig({componentId:"sc-dfa917c-0"})(["position:sticky;top:2rem;max-height:calc(100vh - 4rem);overflow-y:auto;padding:1rem;margin-left:2rem;background:white;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);width:250px;"]),m=n.ZP.h2.withConfig({componentId:"sc-dfa917c-1"})(["font-size:1.2rem;margin-bottom:1rem;padding-bottom:0.5rem;border-bottom:1px solid ",";"],e=>{let{theme:t}=e;return t.colors.border}),h=n.ZP.ul.withConfig({componentId:"sc-dfa917c-2"})(["list-style:none;padding:0;margin:0;"]),p=n.ZP.li.withConfig({componentId:"sc-dfa917c-3"})(["margin:0.5rem 0;padding-left:",";border-left:2px solid ",";"],e=>e.level-1+"rem",e=>e.$isActive?e.theme.colors.primary:"transparent"),g=n.ZP.a.withConfig({componentId:"sc-dfa917c-4"})(["color:",";text-decoration:none;font-size:0.9rem;display:block;padding:0.2rem 0;transition:color 0.2s;outline:none;&:hover{color:",";}"],e=>{let{theme:t}=e;return t.colors.text},e=>{let{theme:t}=e;return t.colors.primary});function u(e){let{content:t,frontMatter:o}=e;return(0,r.jsxs)(b,{children:[(0,r.jsxs)(f,{children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(w,{children:o.title}),o.date&&(0,r.jsx)(v,{children:new Date(o.date).toLocaleDateString()}),o.tags&&o.tags.length>0&&(0,r.jsx)(C,{children:o.tags.map((e,t)=>(0,r.jsxs)(j,{children:["#",e]},"".concat(o.title,"-").concat(e,"-").concat(t)))})]}),(0,r.jsx)(y,{children:(0,r.jsx)(i.D,{components:{code(e){let{inline:t,className:o,children:n,...i}=e,c=/language-(\w+)/.exec(o||""),a=c?c[1]:"";return!t&&a?(0,r.jsx)(P,{children:(0,r.jsx)(d.Z,{style:l.YC,language:a,PreTag:"div",showLineNumbers:!0,children:String(n).replace(/\n$/,"")})}):t?(0,r.jsx)(I,{...i,children:n}):(0,r.jsx)(P,{children:(0,r.jsx)(d.Z,{style:l.YC,language:"text",PreTag:"div",children:String(n).replace(/\n$/,"")})})}},children:t})})]}),(0,r.jsx)(a,{})]})}let b=n.ZP.div.withConfig({componentId:"sc-1e5bb7f4-0"})(["display:grid;grid-template-columns:1fr 250px;gap:2rem;max-width:1200px;margin:0 auto;padding:2rem;@media (max-width:1024px){grid-template-columns:1fr;}"]),f=n.ZP.article.withConfig({componentId:"sc-1e5bb7f4-1"})(["max-width:800px;"]),x=n.ZP.header.withConfig({componentId:"sc-1e5bb7f4-2"})(["margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid ",";"],e=>{let{theme:t}=e;return t.colors.border}),w=n.ZP.h1.withConfig({componentId:"sc-1e5bb7f4-3"})(["font-size:2.5rem;margin-bottom:1rem;"]),v=n.ZP.div.withConfig({componentId:"sc-1e5bb7f4-4"})(["color:",";margin-bottom:1rem;"],e=>{let{theme:t}=e;return t.colors.secondary}),C=n.ZP.div.withConfig({componentId:"sc-1e5bb7f4-5"})(["display:flex;flex-wrap:wrap;gap:0.5rem;"]),j=n.ZP.span.withConfig({componentId:"sc-1e5bb7f4-6"})(["background:",";padding:0.25rem 0.75rem;border-radius:15px;font-size:0.8rem;color:",";"],e=>{let{theme:t}=e;return t.colors.background},e=>{let{theme:t}=e;return t.colors.secondary}),y=n.ZP.div.withConfig({componentId:"sc-1e5bb7f4-7"})(["line-height:1.6;h1,h2,h3,h4,h5,h6{margin:1.5em 0 0.5em;font-weight:600;}p{margin:1em 0;}ul,ol{margin:1em 0;padding-left:2em;}blockquote{margin:1em 0;padding-left:1em;border-left:4px solid ",";color:",";}img{max-width:100%;height:auto;}table{width:100%;border-collapse:collapse;margin:1em 0;}th,td{border:1px solid ",";padding:0.5em;}th{background:",";}"],e=>{let{theme:t}=e;return t.colors.border},e=>{let{theme:t}=e;return t.colors.secondary},e=>{let{theme:t}=e;return t.colors.border},e=>{let{theme:t}=e;return t.colors.background}),P=n.ZP.div.withConfig({componentId:"sc-1e5bb7f4-8"})(["margin:1em 0;border-radius:8px;overflow:hidden;pre{margin:0 !important;padding:1em !important;& > div{background:none !important;}}"]),I=n.ZP.code.withConfig({componentId:"sc-1e5bb7f4-9"})(["background:",';padding:0.2em 0.4em;border-radius:4px;font-family:"Consolas",monospace;font-size:0.9em;'],e=>{let{theme:t}=e;return t.colors.background})},85578:(e,t,o)=>{"use strict";o.d(t,{Comments:()=>d});var r=o(34650),n=o(53064),i=o(25598);function d(e){let{slug:t}=e,o=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=o.current;if(!e)return;let t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"diasm3/diasm3.github.io","issue-term":"pathname",label:"comment",theme:"github-light",crossorigin:"anonymous"}).forEach(e=>{let[o,r]=e;t.setAttribute(o,r)}),t.async=!0;let r=e.querySelector(".utterances");return r&&r.remove(),e.appendChild(t),()=>{e.contains(t)&&e.removeChild(t)}},[t]),(0,r.jsxs)(l,{children:[(0,r.jsx)(c,{children:"Comments"}),(0,r.jsx)("div",{ref:o})]})}let l=i.ZP.div.withConfig({componentId:"sc-45b99449-0"})(["margin:2rem auto;max-width:800px;padding:2rem;background:white;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);"]),c=i.ZP.h2.withConfig({componentId:"sc-45b99449-1"})(["margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid ",";"],e=>{let{theme:t}=e;return t.colors.border})}},e=>{var t=t=>e(e.s=t);e.O(0,[598,444,947,170,744],()=>t(34693)),_N_E=e.O()}]);