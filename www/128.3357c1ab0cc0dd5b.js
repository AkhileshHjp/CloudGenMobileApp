"use strict";(self.webpackChunkNgMobileApp=self.webpackChunkNgMobileApp||[]).push([[128],{5128:(Ie,Tn,xn)=>{xn.d(Tn,{c:()=>zn});const cn=typeof window<"u"?window:void 0,_=(typeof document<"u"&&document,e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e));let Z;const On=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J=e=>(void 0===Z&&(Z=void 0===e.style.animationName&&void 0!==e.style.webkitAnimationName?"-webkit-":""),Z),m=(e,t,r)=>{const a=t.startsWith("animation")?J(e):"";e.style.setProperty(a+t,r)},A=(e,t)=>{const r=t.startsWith("animation")?J(e):"";e.style.removeProperty(r+t)},fn=[],j=(e=[],t)=>{if(void 0!==t){const r=Array.isArray(t)?t:[t];return[...e,...r]}return e},zn=e=>{let t,r,a,s,f,u,p,H,R,K,k,q,c,l=[],S=[],x=[],F=!1,Q={},nn=[],en=[],tn={},$=0,V=!1,X=!1,I=!0,W=!1,M=!0,Y=!1;const un=e,rn=[],z=[],G=[],g=[],y=[],on=[],ln=[],dn=[],mn=[],hn=[],C=[],Nn="function"==typeof AnimationEffect||void 0!==cn&&"function"==typeof cn.AnimationEffect,v="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Nn,pn=()=>C,gn=(n,i)=>{const o=i.findIndex(d=>d.c===n);o>-1&&i.splice(o,1)},an=(n,i)=>((i?.oneTimeCallback?z:rn).push({c:n,o:i}),c),yn=()=>{if(v)C.forEach(n=>{n.cancel()}),C.length=0;else{const n=g.slice();_(()=>{n.forEach(i=>{A(i,"animation-name"),A(i,"animation-duration"),A(i,"animation-timing-function"),A(i,"animation-iteration-count"),A(i,"animation-delay"),A(i,"animation-play-state"),A(i,"animation-fill-mode"),A(i,"animation-direction")})})}},En=()=>{on.forEach(n=>{n?.parentNode&&n.parentNode.removeChild(n)}),on.length=0},N=()=>void 0!==f?f:p?p.getFill():"both",D=()=>void 0!==R?R:void 0!==u?u:p?p.getDirection():"normal",U=()=>V?"linear":void 0!==a?a:p?p.getEasing():"linear",w=()=>X?0:void 0!==K?K:void 0!==r?r:p?p.getDuration():0,T=()=>void 0!==s?s:p?p.getIterations():1,O=()=>void 0!==k?k:void 0!==t?t:p?p.getDelay():0,P=()=>{0!==$&&($--,0===$&&((()=>{sn(),mn.forEach(h=>h()),hn.forEach(h=>h());const n=I?1:0,i=nn,o=en,d=tn;g.forEach(h=>{const b=h.classList;i.forEach(L=>b.add(L)),o.forEach(L=>b.remove(L));for(const L in d)d.hasOwnProperty(L)&&m(h,L,d[L])}),K=void 0,R=void 0,k=void 0,rn.forEach(h=>h.c(n,c)),z.forEach(h=>h.c(n,c)),z.length=0,M=!0,I&&(W=!0),I=!0})(),p&&p.animationFinish()))},bn=(n=!0)=>{En();const i=(e=>(e.forEach(t=>{for(const r in t)if(t.hasOwnProperty(r)){const a=t[r];if("easing"===r)t["animation-timing-function"]=a,delete t[r];else{const s=On(r);s!==r&&(t[s]=a,delete t[r])}}}),e))(l);g.forEach(o=>{if(i.length>0){const d=((e=[])=>e.map(t=>{const r=t.offset,a=[];for(const s in t)t.hasOwnProperty(s)&&"offset"!==s&&a.push(`${s}: ${t[s]};`);return`${100*r}% { ${a.join(" ")} }`}).join(" "))(i);q=void 0!==e?e:(e=>{let t=fn.indexOf(e);return t<0&&(t=fn.push(e)-1),`ion-animation-${t}`})(d);const h=((e,t,r)=>{var a;const s=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(r),f=J(r),u=s.querySelector("#"+e);if(u)return u;const l=(null!==(a=r.ownerDocument)&&void 0!==a?a:document).createElement("style");return l.id=e,l.textContent=`@${f}keyframes ${e} { ${t} } @${f}keyframes ${e}-alt { ${t} }`,s.appendChild(l),l})(q,d,o);on.push(h),m(o,"animation-duration",`${w()}ms`),m(o,"animation-timing-function",U()),m(o,"animation-delay",`${O()}ms`),m(o,"animation-fill-mode",N()),m(o,"animation-direction",D());const b=T()===1/0?"infinite":T().toString();m(o,"animation-iteration-count",b),m(o,"animation-play-state","paused"),n&&m(o,"animation-name",`${h.id}-alt`),_(()=>{m(o,"animation-name",h.id||null)})}})},An=(n=!0)=>{(()=>{ln.forEach(d=>d()),dn.forEach(d=>d());const n=S,i=x,o=Q;g.forEach(d=>{const h=d.classList;n.forEach(b=>h.add(b)),i.forEach(b=>h.remove(b));for(const b in o)o.hasOwnProperty(b)&&m(d,b,o[b])})})(),l.length>0&&(v?(g.forEach(n=>{const i=n.animate(l,{id:un,delay:O(),duration:w(),easing:U(),iterations:T(),fill:N(),direction:D()});i.pause(),C.push(i)}),C.length>0&&(C[0].onfinish=()=>{P()})):bn(n)),F=!0},B=n=>{if(n=Math.min(Math.max(n,0),.9999),v)C.forEach(i=>{i.currentTime=i.effect.getComputedTiming().delay+w()*n,i.pause()});else{const i=`-${w()*n}ms`;g.forEach(o=>{l.length>0&&(m(o,"animation-delay",i),m(o,"animation-play-state","paused"))})}},vn=n=>{C.forEach(i=>{i.effect.updateTiming({delay:O(),duration:w(),easing:U(),iterations:T(),fill:N(),direction:D()})}),void 0!==n&&B(n)},wn=(n=!0,i)=>{_(()=>{g.forEach(o=>{m(o,"animation-name",q||null),m(o,"animation-duration",`${w()}ms`),m(o,"animation-timing-function",U()),m(o,"animation-delay",void 0!==i?`-${i*w()}ms`:`${O()}ms`),m(o,"animation-fill-mode",N()||null),m(o,"animation-direction",D()||null);const d=T()===1/0?"infinite":T().toString();m(o,"animation-iteration-count",d),n&&m(o,"animation-name",`${q}-alt`),_(()=>{m(o,"animation-name",q||null)})})})},E=(n=!1,i=!0,o)=>(n&&y.forEach(d=>{d.update(n,i,o)}),v?vn(o):wn(i,o),c),Cn=()=>{F&&(v?C.forEach(n=>{n.pause()}):g.forEach(n=>{m(n,"animation-play-state","paused")}),Y=!0)},xe=()=>{H=void 0,P()},sn=()=>{H&&clearTimeout(H)},Sn=n=>new Promise(i=>{n?.sync&&(X=!0,an(()=>X=!1,{oneTimeCallback:!0})),F||An(),W&&(v?(B(0),vn()):wn(),W=!1),M&&($=y.length+1,M=!1);const o=()=>{gn(d,z),i()},d=()=>{gn(o,G),i()};an(d,{oneTimeCallback:!0}),((n,i)=>{G.push({c:n,o:{oneTimeCallback:!0}})})(o),y.forEach(h=>{h.play()}),v?(C.forEach(n=>{n.play()}),(0===l.length||0===g.length)&&P()):(()=>{if(sn(),_(()=>{g.forEach(n=>{l.length>0&&m(n,"animation-play-state","running")})}),0===l.length||0===g.length)P();else{const n=O()||0,i=w()||0,o=T()||1;isFinite(o)&&(H=setTimeout(xe,n+i*o+100)),((e,t)=>{let r;const a={passive:!0},f=u=>{e===u.target&&(r&&r(),sn(),_(()=>{g.forEach(n=>{A(n,"animation-duration"),A(n,"animation-delay"),A(n,"animation-play-state")}),_(P)}))};e&&(e.addEventListener("webkitAnimationEnd",f,a),e.addEventListener("animationend",f,a),r=()=>{e.removeEventListener("webkitAnimationEnd",f,a),e.removeEventListener("animationend",f,a)})})(g[0])}})(),Y=!1}),_n=(n,i)=>{const o=l[0];return void 0===o||void 0!==o.offset&&0!==o.offset?l=[{offset:0,[n]:i},...l]:o[n]=i,c};return c={parentAnimation:p,elements:g,childAnimations:y,id:un,animationFinish:P,from:_n,to:(n,i)=>{const o=l[l.length-1];return void 0===o||void 0!==o.offset&&1!==o.offset?l=[...l,{offset:1,[n]:i}]:o[n]=i,c},fromTo:(n,i,o)=>_n(n,i).to(n,o),parent:n=>(p=n,c),play:Sn,pause:()=>(y.forEach(n=>{n.pause()}),Cn(),c),stop:()=>{y.forEach(n=>{n.stop()}),F&&(yn(),F=!1),V=!1,X=!1,M=!0,R=void 0,K=void 0,k=void 0,$=0,W=!1,I=!0,Y=!1,G.forEach(n=>n.c(0,c)),G.length=0},destroy:n=>(y.forEach(i=>{i.destroy(n)}),(n=>{yn(),n&&En()})(n),g.length=0,y.length=0,l.length=0,rn.length=0,z.length=0,F=!1,M=!0,c),keyframes:n=>{const i=l!==n;return l=n,i&&(n=>{v?pn().forEach(i=>{const o=i.effect;if(o.setKeyframes)o.setKeyframes(n);else{const d=new KeyframeEffect(o.target,n,o.getTiming());i.effect=d}}):bn()})(l),c},addAnimation:n=>{if(null!=n)if(Array.isArray(n))for(const i of n)i.parent(c),y.push(i);else n.parent(c),y.push(n);return c},addElement:n=>{if(null!=n)if(1===n.nodeType)g.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)g.push(n[i]);else console.error("Invalid addElement value");return c},update:E,fill:n=>(f=n,E(!0),c),direction:n=>(u=n,E(!0),c),iterations:n=>(s=n,E(!0),c),duration:n=>(!v&&0===n&&(n=1),r=n,E(!0),c),easing:n=>(a=n,E(!0),c),delay:n=>(t=n,E(!0),c),getWebAnimations:pn,getKeyframes:()=>l,getFill:N,getDirection:D,getDelay:O,getIterations:T,getEasing:U,getDuration:w,afterAddRead:n=>(mn.push(n),c),afterAddWrite:n=>(hn.push(n),c),afterClearStyles:(n=[])=>{for(const i of n)tn[i]="";return c},afterStyles:(n={})=>(tn=n,c),afterRemoveClass:n=>(en=j(en,n),c),afterAddClass:n=>(nn=j(nn,n),c),beforeAddRead:n=>(ln.push(n),c),beforeAddWrite:n=>(dn.push(n),c),beforeClearStyles:(n=[])=>{for(const i of n)Q[i]="";return c},beforeStyles:(n={})=>(Q=n,c),beforeRemoveClass:n=>(x=j(x,n),c),beforeAddClass:n=>(S=j(S,n),c),onFinish:an,isRunning:()=>0!==$&&!Y,progressStart:(n=!1,i)=>(y.forEach(o=>{o.progressStart(n,i)}),Cn(),V=n,F||An(),E(!1,!0,i),c),progressStep:n=>(y.forEach(i=>{i.progressStep(n)}),B(n),c),progressEnd:(n,i,o)=>(V=!1,y.forEach(d=>{d.progressEnd(n,i,o)}),void 0!==o&&(K=o),W=!1,I=!0,0===n?(R="reverse"===D()?"normal":"reverse","reverse"===R&&(I=!1),v?(E(),B(1-i)):(k=(1-i)*w()*-1,E(!1,!1))):1===n&&(v?(E(),B(i)):(k=i*w()*-1,E(!1,!1))),void 0!==n&&!p&&Sn(),c)}}}}]);