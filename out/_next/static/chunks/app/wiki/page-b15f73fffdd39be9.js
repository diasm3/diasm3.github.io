(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{5341:(e,t,r)=>{Promise.resolve().then(r.bind(r,4763))},4763:(e,t,r)=>{"use strict";r.d(t,{WikiList:()=>h});var n=r(4650),i=r(3064),o=r(2531),s=r(5598),a=Object.defineProperty,d=new Map,l=new WeakMap,c=0,p=void 0;i.Component;let m=s.ZP.div.withConfig({componentId:"sc-debf4691-0"})(["margin-bottom:2rem;h1{font-size:2rem;margin-bottom:1rem;}p{color:",";}"],e=>{let{theme:t}=e;return t.colors.secondary}),u=s.ZP.div.withConfig({componentId:"sc-debf4691-1"})(["display:grid;grid-template-columns:1fr;gap:1rem;","{grid-template-columns:repeat(2,1fr);}","{grid-template-columns:repeat(3,1fr);}"],e=>{let{theme:t}=e;return t.media.tablet},e=>{let{theme:t}=e;return t.media.laptop}),f=s.ZP.article.withConfig({componentId:"sc-debf4691-2"})(["background:white;border-radius:8px;padding:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,0.1);transition:transform 0.2s ease,box-shadow 0.2s ease;&:hover{transform:translateY(-4px);box-shadow:0 4px 8px rgba(0,0,0,0.1);}h2{font-size:1.25rem;margin-bottom:0.5rem;color:",";}p{font-size:0.9rem;color:",";}"],e=>{let{theme:t}=e;return t.colors.primary},e=>{let{theme:t}=e;return t.colors.text});function h(e){let{wikiFiles:t}=e,[r,s]=(0,i.useState)([]),[a,h]=(0,i.useState)(1),[C,I]=function(){var e;let{threshold:t,delay:r,trackVisibility:n,rootMargin:o,root:s,triggerOnce:a,skip:m,initialInView:u,fallbackInView:f,onChange:h}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[g,b]=i.useState(null),x=i.useRef(),[w,v]=i.useState({inView:!!u,entry:void 0});x.current=h,i.useEffect(()=>{let e;if(!m&&g)return e=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if(void 0===window.IntersectionObserver&&void 0!==n){let i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:o,elements:s}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return"".concat(t,"_").concat("root"===t?(r=e.root)?(l.has(r)||(c+=1,l.set(r,c.toString())),l.get(r)):"0":e[t])}).toString(),r=d.get(t);if(!r){let n;let i=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var r;let o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach(e=>{e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},d.set(t,r)}return r}(r),a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),d.delete(i))}}(g,(t,r)=>{v({inView:t,entry:r}),x.current&&x.current(t,r),r.isIntersecting&&a&&e&&(e(),e=void 0)},{root:s,rootMargin:o,threshold:t,trackVisibility:n,delay:r},f),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,g,s,o,a,m,n,f,r]);let y=null==(e=w.entry)?void 0:e.target,j=i.useRef();g||!y||a||m||j.current===y||(j.current=y,v({inView:!!u,entry:void 0}));let C=[b,w.inView,w.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}(),[k,P]=(0,i.useState)(!1),S=(0,i.useRef)(t),Z=(0,i.useCallback)(()=>{P(!0);let e=(a-1)*10,t=10*a,r=S.current.slice(e,t);setTimeout(()=>{s(e=>[...e,...r]),h(e=>e+1),P(!1)},500)},[a]);return(0,i.useEffect)(()=>{I&&!k&&Z()},[I,k,Z]),(0,n.jsxs)(g,{children:[(0,n.jsxs)(m,{children:[(0,n.jsx)("h1",{children:"Wiki"}),(0,n.jsxs)("p",{children:["Total ",S.current.length," articles"]})]}),(0,n.jsx)(u,{children:r.map((e,t)=>(0,n.jsx)(o.default,{href:"/wiki/".concat(e.slug),style:{textDecoration:"none"},children:(0,n.jsxs)(f,{children:[(0,n.jsx)("h2",{children:e.title}),e.description&&(0,n.jsx)("p",{children:e.description}),e.aiSummary&&(0,n.jsxs)(b,{children:[(0,n.jsx)("strong",{children:"AI 요약:"})," ",e.aiSummary]}),e.tags&&e.tags.length>0&&(0,n.jsx)(x,{children:e.tags.map(e=>(0,n.jsxs)(w,{children:["#",e]},e))})]})},"".concat(e.slug,"-").concat(t)))}),k&&(0,n.jsx)(v,{children:(0,n.jsx)(y,{})}),(0,n.jsx)(j,{ref:C})]})}let g=s.ZP.div.withConfig({componentId:"sc-debf4691-3"})(["padding:1rem;max-width:1200px;margin:0 auto;","{padding:2rem;}"],e=>{let{theme:t}=e;return t.media.tablet}),b=s.ZP.p.withConfig({componentId:"sc-debf4691-4"})(["font-style:italic;color:",";margin-top:0.5rem;font-size:0.9rem;"],e=>{let{theme:t}=e;return t.colors.secondary}),x=s.ZP.div.withConfig({componentId:"sc-debf4691-5"})(["display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1rem;"]),w=s.ZP.span.withConfig({componentId:"sc-debf4691-6"})(["background:",";padding:0.25rem 0.75rem;border-radius:15px;font-size:0.8rem;color:",";"],e=>{let{theme:t}=e;return t.colors.background},e=>{let{theme:t}=e;return t.colors.secondary}),v=s.ZP.div.withConfig({componentId:"sc-debf4691-7"})(["display:flex;justify-content:center;padding:2rem;"]),y=s.ZP.div.withConfig({componentId:"sc-debf4691-8"})(["width:40px;height:40px;border:3px solid #f3f3f3;border-top:3px solid ",";border-radius:50%;animation:spin 1s linear infinite;@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"],e=>{let{theme:t}=e;return t.colors.primary}),j=s.ZP.div.withConfig({componentId:"sc-debf4691-9"})(["height:10px;margin:2rem 0;"])}},e=>{var t=t=>e(e.s=t);e.O(0,[598,531,947,170,744],()=>t(5341)),_N_E=e.O()}]);