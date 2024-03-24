var C=Object.defineProperty;var M=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(M(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as v,l as g,m as j,p as b,q as I,w as E,x as A,y as B,z as L,A as R,B as T,C as P}from"./scheduler.4f657698.js";let y=!1;function H(){y=!0}function q(){y=!1}function z(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const a=t[l];a.claim_order!==void 0&&r.push(a)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,a=(s>0&&t[n[s]].claim_order<=l?s+1:z(1,s,h=>t[n[h]].claim_order,l))-1;i[r]=n[a]+1;const u=a+1;n[u]=r,s=Math.max(u,s)}const f=[],o=[];let c=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);c>=r;c--)o.push(t[c]);c--}for(;c>=0;c--)o.push(t[c]);f.reverse(),o.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<o.length;r++){for(;l<f.length&&o[r].claim_order>=f[l].claim_order;)l++;const a=l<f.length?f[l]:null;e.insertBefore(o[r],a)}}function D(e,t){if(y){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function F(e,t,n){y&&!n?D(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function G(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function fe(){return x(" ")}function ue(){return x("")}function U(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function W(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function O(e,t,n,i,s=!1){K(e);const f=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const c=e[o];if(t(c)){const r=n(c);return r===void 0?e.splice(o,1):e[o]=r,s||(e.claim_info.last_index=o),c}}for(let o=e.claim_info.last_index-1;o>=0;o--){const c=e[o];if(t(c)){const r=n(c);return r===void 0?e.splice(o,1):e[o]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function Q(e,t,n,i){return O(e,s=>s.nodeName===t,s=>{const f=[];for(let o=0;o<s.attributes.length;o++){const c=s.attributes[o];n[c.name]||f.push(c.name)}f.forEach(o=>s.removeAttribute(o))},()=>i(t))}function de(e,t,n){return Q(e,t,n,G)}function X(e,t){return O(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function _e(e){return X(e," ")}function me(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function he(e,t,n){e.classList.toggle(t,!!n)}function Y(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function $e(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const f=s.textContent.trim();f===`HEAD_${e}_END`?(i-=1,n.push(s)):f===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}const $=new Set;let _;function pe(){_={r:0,c:[],p:_}}function ye(){_.r||p(_.c),_=_.p}function Z(e,t){e&&e.i&&($.delete(e),e.i(t))}function ve(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),_.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function k(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function xe(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function we(e){e&&e.c()}function Se(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),b(()=>{const f=e.$$.on_mount.map(L).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...f):p(f),e.$$.on_mount=[]}),s.forEach(b)}function te(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(T.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,s,f,o=null,c=[-1]){const r=I;E(e);const l=e.$$={fragment:null,ctx:[],props:f,update:v,not_equal:s,bound:g(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:g(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};o&&o(l.root);let a=!1;if(l.ctx=n?n(e,t.props||{},(u,h,...w)=>{const S=w.length?w[0]:h;return l.ctx&&s(l.ctx[u],l.ctx[u]=S)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](S),a&&ne(e,u)),h}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){H();const u=J(t.target);l.fragment&&l.fragment.l(u),u.forEach(N)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),q(),j()}E(r)}class ie{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){te(this,1),this.$destroy=v}$on(t,n){if(!A(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const se="4.2.12",re="4";function d(e,t){document.dispatchEvent(Y(e,{version:se,...t},{bubbles:!0}))}function be(e,t){d("SvelteDOMInsert",{target:e,node:t}),D(e,t)}function Ee(e,t,n){d("SvelteDOMInsert",{target:e,node:t,anchor:n}),F(e,t,n)}function Ae(e){d("SvelteDOMRemove",{node:e}),N(e)}function De(e,t,n,i,s,f,o){const c=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];s&&c.push("preventDefault"),f&&c.push("stopPropagation"),o&&c.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:c});const r=U(e,t,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:c}),r()}}function Ne(e,t,n){W(e,t,n),n==null?d("SvelteDOMRemoveAttribute",{node:e,attribute:t}):d("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function Oe(e,t){t=""+t,e.data!==t&&(d("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ce(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)&&!(typeof Symbol=="function"&&e&&Symbol.iterator in e))throw new Error("{#each} only works with iterable values.");return k(e)}function Me(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function je(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:s}=i;throw typeof s=="string"&&s.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ie extends ie{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();m(this,"$$prop_def");m(this,"$$events_def");m(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{ce as A,be as B,he as C,ae as D,De as E,xe as F,$e as G,Ie as S,Ee as a,ye as b,_e as c,d,ue as e,Z as f,Ae as g,je as h,ge as i,G as j,de as k,J as l,Ne as m,me as n,x as o,X as p,Oe as q,pe as r,fe as s,ve as t,we as u,Me as v,Se as w,ee as x,te as y,Ce as z};
