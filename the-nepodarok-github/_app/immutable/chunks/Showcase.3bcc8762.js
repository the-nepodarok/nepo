import{s as _e,e as be,j as ce,d as v,u as Se,g as $e,h as Ce,n as ke}from"./scheduler.4f657698.js";import{S as pe,i as ge,d as W,z as re,v as ve,j as w,s as T,o as B,k as b,l as L,c as E,p as q,g,D as G,m as h,a as N,B as d,q as K,f as M,t as F,A as ye,u as ie,w as ue,x as he,y as fe}from"./index.5370c9f8.js";import{b as J}from"./paths.128a5344.js";const A="C:/OpenServer/domains/the-nepodarok-github/src/lib/components/compositional/ShowcaseCard.svelte";function de(a,e,s){const n=a.slice();return n[3]=e[s],n}function V(a){let e,s=a[3]+"",n,i;const r={c:function(){e=w("li"),n=B(s),i=T(),this.h()},l:function(t){e=b(t,"LI",{});var l=L(e);n=q(l,s),i=E(l),l.forEach(g),this.h()},h:function(){v(e,A,20,12,591)},m:function(t,l){N(t,e,l),d(e,n),d(e,i)},p:function(t,l){l&1&&s!==(s=t[3]+"")&&K(n,s)},d:function(t){t&&g(e)}};return W("SvelteRegisterBlock",{block:r,id:V.name,type:"each",source:"(20:4) {#each content.details.split('. ').filter(i => i) as task}",ctx:a}),r}function ee(a){let e,s,n,i,r,o,t=a[0].title+"",l,_,C,m,k="Что из себя представляет:",j,Z,X=a[0].description+"",O,H,z,ne="Чем занимался:",Y,I,x,y,R=re(a[0].details.split(". ").filter(me)),p=[];for(let $=0;$<R.length;$+=1)p[$]=V(de(a,R,$));const Q=a[2].default,S=be(Q,a,a[1],null),ae={c:function(){e=w("li"),s=w("a"),n=w("img"),r=T(),o=w("h2"),l=B(t),C=T(),m=w("h3"),m.textContent=k,j=T(),Z=w("p"),O=B(X),H=T(),z=w("h3"),z.textContent=ne,Y=T(),I=w("ul");for(let c=0;c<p.length;c+=1)p[c].c();x=T(),S&&S.c(),this.h()},l:function(c){e=b(c,"LI",{class:!0});var u=L(e);s=b(u,"A",{class:!0,href:!0,target:!0});var f=L(s);n=b(f,"IMG",{src:!0,alt:!0,class:!0}),r=E(f),o=b(f,"H2",{class:!0});var P=L(o);l=q(P,t),P.forEach(g),f.forEach(g),C=E(u),m=b(u,"H3",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-1i72lz2"&&(m.textContent=k),j=E(u),Z=b(u,"P",{class:!0});var oe=L(Z);O=q(oe,X),oe.forEach(g),H=E(u),z=b(u,"H3",{class:!0,"data-svelte-h":!0}),G(z)!=="svelte-1gdq7oz"&&(z.textContent=ne),Y=E(u),I=b(u,"UL",{class:!0});var le=L(I);for(let U=0;U<p.length;U+=1)p[U].l(le);le.forEach(g),x=E(u),S&&S.l(u),u.forEach(g),this.h()},h:function(){ce(n.src,i=J+"/img/"+a[0].img+"-screen.png")||h(n,"src",i),h(n,"alt","Скриншот веб-страницы"),h(n,"class","s-zAIAXTZoWyT0"),v(n,A,8,8,195),h(o,"class","card-title s-zAIAXTZoWyT0"),v(o,A,9,8,279),h(s,"class","showcase-card-link s-zAIAXTZoWyT0"),h(s,"href",_=a[0].href),h(s,"target","_blank"),v(s,A,7,4,118),h(m,"class","s-zAIAXTZoWyT0"),v(m,A,13,4,358),h(Z,"class","card_text s-zAIAXTZoWyT0"),v(Z,A,14,4,397),h(z,"class","s-zAIAXTZoWyT0"),v(z,A,17,4,462),h(I,"class","card-details s-zAIAXTZoWyT0"),v(I,A,18,4,490),h(e,"class","showcase-card s-zAIAXTZoWyT0"),v(e,A,6,0,87)},m:function(c,u){N(c,e,u),d(e,s),d(s,n),d(s,r),d(s,o),d(o,l),d(e,C),d(e,m),d(e,j),d(e,Z),d(Z,O),d(e,H),d(e,z),d(e,Y),d(e,I);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(I,null);d(e,x),S&&S.m(e,null),y=!0},p:function(c,[u]){if((!y||u&1&&!ce(n.src,i=J+"/img/"+c[0].img+"-screen.png"))&&h(n,"src",i),(!y||u&1)&&t!==(t=c[0].title+"")&&K(l,t),(!y||u&1&&_!==(_=c[0].href))&&h(s,"href",_),(!y||u&1)&&X!==(X=c[0].description+"")&&K(O,X),u&1){R=re(c[0].details.split(". ").filter(me));let f;for(f=0;f<R.length;f+=1){const P=de(c,R,f);p[f]?p[f].p(P,u):(p[f]=V(P),p[f].c(),p[f].m(I,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=R.length}S&&S.p&&(!y||u&2)&&Se(S,Q,c,c[1],y?Ce(Q,c[1],u,null):$e(c[1]),null)},i:function(c){y||(M(S,c),y=!0)},o:function(c){F(S,c),y=!1},d:function(c){c&&g(e),ye(p,c),S&&S.d(c)}};return W("SvelteRegisterBlock",{block:ae,id:ee.name,type:"component",source:"",ctx:a}),ae}const me=a=>a;function Ae(a,e,s){let{$$slots:n={},$$scope:i}=e;ve("ShowcaseCard",n,["default"]);let{content:r={}}=e;const o=["content"];return Object.keys(e).forEach(t=>{!~o.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<ShowcaseCard> was created with unknown prop '${t}'`)}),a.$$set=t=>{"content"in t&&s(0,r=t.content),"$$scope"in t&&s(1,i=t.$$scope)},a.$capture_state=()=>({base:J,content:r}),a.$inject_state=t=>{"content"in t&&s(0,r=t.content)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[r,i,n]}class te extends pe{constructor(e){super(e),ge(this,e,Ae,ee,_e,{content:0}),W("SvelteRegisterComponent",{component:this,tagName:"ShowcaseCard",options:e,id:ee.name})}get content(){throw new Error("<ShowcaseCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set content(e){throw new Error("<ShowcaseCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const D="C:/OpenServer/domains/the-nepodarok-github/src/lib/components/compositional/Showcase.svelte";function we(a){let e,s,n,i="whatevernumber",r,o,t,l="Репозиторий";const _={c:function(){e=w("p"),s=B("Работал над проектом в паре с "),n=w("a"),n.textContent=i,r=T(),o=w("p"),t=w("a"),t.textContent=l,this.h()},l:function(m){e=b(m,"P",{class:!0});var k=L(e);s=q(k,"Работал над проектом в паре с "),n=b(k,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),G(n)!=="svelte-18hox1w"&&(n.textContent=i),k.forEach(g),r=E(m),o=b(m,"P",{class:!0});var j=L(o);t=b(j,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),G(t)!=="svelte-1i94np3"&&(t.textContent=l),j.forEach(g),this.h()},h:function(){h(n,"class","github-link s-00NLZ0DeG5Nm"),h(n,"href","https://github.com/whatevernumber"),h(n,"target","_blank"),v(n,D,31,42,1791),h(e,"class","coop"),v(e,D,30,8,1732),h(t,"class","github-link s-00NLZ0DeG5Nm"),h(t,"href","https://github.com/the-nepodarok/pigs"),h(t,"target","_blank"),v(t,D,36,12,1964),h(o,"class","repository-github"),v(o,D,35,8,1922)},m:function(m,k){N(m,e,k),d(e,s),d(e,n),N(m,r,k),N(m,o,k),d(o,t)},p:ke,d:function(m){m&&(g(e),g(r),g(o))}};return W("SvelteRegisterBlock",{block:_,id:we.name,type:"slot",source:'(30:4) <ShowcaseCard content=\\"{projects.pigs}\\">',ctx:a}),_}function se(a){let e,s,n,i,r;s=new te({props:{content:a[0].pigs,$$slots:{default:[we]},$$scope:{ctx:a}},$$inline:!0}),i=new te({props:{content:a[0].readme},$$inline:!0});const o={c:function(){e=w("ul"),ie(s.$$.fragment),n=T(),ie(i.$$.fragment),this.h()},l:function(l){e=b(l,"UL",{class:!0});var _=L(e);ue(s.$$.fragment,_),n=E(_),ue(i.$$.fragment,_),_.forEach(g),this.h()},h:function(){h(e,"class","showcase s-00NLZ0DeG5Nm"),v(e,D,28,0,1657)},m:function(l,_){N(l,e,_),he(s,e,null),d(e,n),he(i,e,null),r=!0},p:function(l,[_]){const C={};_&2&&(C.$$scope={dirty:_,ctx:l}),s.$set(C)},i:function(l){r||(M(s.$$.fragment,l),M(i.$$.fragment,l),r=!0)},o:function(l){F(s.$$.fragment,l),F(i.$$.fragment,l),r=!1},d:function(l){l&&g(e),fe(s),fe(i)}};return W("SvelteRegisterBlock",{block:o,id:se.name,type:"component",source:"",ctx:a}),o}function Te(a,e,s){let{$$slots:n={},$$scope:i}=e;ve("Showcase",n,[]);const r={pigs:{title:"Домик для бездомных поросят",img:"pigs",description:"Сайт для волонтёрского проекта по оказанию помощи морским свинкам",details:"Весь дизайн сайта (картинки для дизайна генерировал нейросетями), половина фронта (сделано на SvelteKit) и большая часть бэкенда (REST на Yii2). После Laravel в Yii уже не хватало некоторых вещей, но также благодаря Laravel написать REST на Yii и заставить его работать с SQLite (который практически не поддерживается фреймворком) оказалось плёвым делом. В ходе работы над проектом использовал подход DRY, написал парочку своих хелперов, оптимизировал запросы к БД, получил небольшой опыт администрирования.",href:"https://domiksvinok.ru/"},readme:{title:"readme",img:"readme",description:"Учебный проект на PHP, который я сам переделал полностью на Laravel и задеплоил на хостинг",details:'При самостоятельном переносе столкнулся с задачами, которые выходят за рамки просто учебного проекта: фоновые задачи (Laravel Queues), скоупы моделей, Laravel компоненты, средства локализации, middlewares и вообще много всего интересного. Для демонстрации можно авторизоваться через "demo@demo.demo" / "demo"',href:"http://nepo.lovestoblog.com/public"}},o=[];return Object.keys(e).forEach(t=>{!~o.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Showcase> was created with unknown prop '${t}'`)}),a.$capture_state=()=>({ShowcaseCard:te,projects:r}),[r]}class Ie extends pe{constructor(e){super(e),ge(this,e,Te,se,_e,{}),W("SvelteRegisterComponent",{component:this,tagName:"Showcase",options:e,id:se.name})}}export{Ie as S};
