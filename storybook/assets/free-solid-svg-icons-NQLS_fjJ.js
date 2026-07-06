import{a as e,c as t,i as n,s as r}from"./preload-helper-B45gAKPr.js";import{t as i}from"./react-CymAsZIc.js";import{t as a}from"./prop-types-m2s_ZvQW.js";function o(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?s(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function u(e){var t=l(e,`string`);return typeof t==`symbol`?t:t+``}function d(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[j]}})}function f(e){var t=O.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function p(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}function m(e){return L.push(e),()=>{L.splice(L.indexOf(e),1)}}function h(e){if(!e||!A)return;let t=O.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=O.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return O.head.insertBefore(t,r),e}function g(){let e=12,t=``;for(;e-->0;)t+=Dn[Math.random()*62|0];return t}function _(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function v(e){return e.classList?_(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function y(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function b(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${y(e[n])}" `,``).trim()}function x(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function S(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function ee(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function te(e){let{transform:t,width:n=tn,height:r=tn,startCentered:i=!1}=e,a=``;return i&&St?a+=`translate(${t.x/R-n/2}em, ${t.y/R-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/R}em), calc(-50% + ${t.y/R}em)) `:a+=`translate(${t.x/R}em, ${t.y/R}em) `,a+=`scale(${t.size/R*(t.flipX?-1:1)}, ${t.size/R*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}function ne(){let e=nn,t=rn,n=I.cssPrefix,r=I.replacementClass,i=On;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function re(){I.autoAddCss&&!kn&&(h(ne()),kn=!0)}function ie(e){A&&(H?setTimeout(e,0):jn.push(e))}function ae(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?y(e):`<${t} ${b(n)}>${r.map(ae).join(``)}</${t}>`}function oe(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function se(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ce(e){let t=se(e);return t.length===1?t[0].toString(16):null}function le(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ue(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function de(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=ue(t);typeof V.hooks.addPack==`function`&&!n?V.hooks.addPack(e,ue(t)):V.styles[e]=c(c({},V.styles[e]||{}),r),e===`fas`&&de(`fa`,t)}function fe(e){return~Tn.indexOf(e)}function pe(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!fe(i)?i:null}function me(e,t){return(zn[e]||{})[t]}function he(e,t){return(Bn[e]||{})[t]}function C(e,t){return(Un[e]||{})[t]}function ge(e){return Vn[e]||{prefix:null,iconName:null}}function _e(e){let t=Hn[e],n=me(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function w(){return Rn}function ve(e){let t=j,n=In.reduce((e,t)=>(e[t]=`${I.cssPrefix}-${t}`,e),{});return kt.forEach(r=>{(e.includes(n[r])||e.some(e=>Ln[r].includes(e)))&&(t=r)}),t}function ye(e){let{family:t=j}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=mn[t][e];if(t===Ot&&!e)return`fad`;let r=gn[t][e]||gn[t][n],i=e in V.styles?e:null;return r||i||null}function be(e){let t=[],n=null;return e.forEach(e=>{let r=pe(I.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function xe(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function Se(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Yt.concat(Ut),i=xe(e.filter(e=>r.includes(e))),a=xe(e.filter(e=>!Yt.includes(e))),[o=null]=i.filter(e=>(n=e,!Dt.includes(e))),s=ve(i),l=c(c({},be(a)),{},{prefix:ye(o,{family:s})});return c(c(c({},l),we({values:e,family:s,styles:U,config:I,canonical:l,givenPrefix:n})),Ce(t,n,l))}function Ce(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?ge(i):{},o=C(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!U.far&&U.fas&&!I.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function we(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===Ot,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Kn.includes(n)&&(Object.keys(a).find(e=>qn.includes(e))||o.autoFetchSvg)&&(r.prefix=Mt.get(n).defaultShortPrefixId,r.iconName=C(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=w()||`fas`),r}function Te(e,t){let{mixoutsTo:n}=t;return Yn=e,W={},Object.keys(G).forEach(e=>{Xn.indexOf(e)===-1&&delete G[e]}),Yn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{W[e]||(W[e]=[]),W[e].push(t[e])})}e.provides&&e.provides(G)}),n}function Ee(e,t){var n=[...arguments].slice(2);return(W[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function T(e){var t=[...arguments].slice(1);(W[e]||[]).forEach(e=>{e.apply(null,t)})}function E(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function De(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||w();if(t)return t=C(n,t)||t,oe(Zn.definitions,n,t)||oe(V.styles,n,t)}function Oe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>ae(e))}}),Object.defineProperty(e,"node",{get:function(){if(!A)return;let t=O.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function ke(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(S(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=x(c(c({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Ae(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${I.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:c(c({},i),{},{id:o}),children:r}]}]}function je(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:l,titleId:u,extra:d,watchable:f=!1}=e,{width:p,height:m}=n.found?n:t,h=Rt.includes(r),_=[I.replacementClass,i?`${I.cssPrefix}-${i}`:``].filter(e=>d.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(d.classes).join(` `),v={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:_,role:d.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${p} ${m}`})},y=h&&!~d.classes.indexOf(`fa-fw`)?{width:`${p/m*16*.0625}em`}:{};f&&(v.attributes[N]=``),s&&(v.children.push({tag:`title`,attributes:{id:v.attributes[`aria-labelledby`]||`title-${u||g()}`},children:[s]}),delete v.attributes.title);let b=c(c({},v),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:a,symbol:o,styles:c(c({},y),d.styles)}),{children:x,attributes:S}=n.found&&t.found?E(`generateAbstractMask`,b)||{children:[],attributes:{}}:E(`generateAbstractIcon`,b)||{children:[],attributes:{}};return b.children=x,b.attributes=S,o?Ae(b):ke(b)}function Me(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,l=c(c(c({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(l[N]=``);let u=c({},o.styles);S(i)&&(u.transform=te({transform:i,startCentered:!0,width:n,height:r}),u[`-webkit-transform`]=u.transform);let d=x(u);d.length>0&&(l.style=d);let f=[];return f.push({tag:`span`,attributes:l,children:[t]}),a&&f.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),f}function Ne(e){let{content:t,title:n,extra:r}=e,i=c(c(c({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=x(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}function Pe(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${I.cssPrefix}-${wn.GROUP}`},children:[{tag:`path`,attributes:{class:`${I.cssPrefix}-${wn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${I.cssPrefix}-${wn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function Fe(e,t){!fn&&!I.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Ie(e,t){let n=t;return t===`fa`&&I.styleDefault!==null&&(t=w()),new Promise((r,i)=>{if(n===`fa`){let n=ge(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&er[t]&&er[t][e]){let n=er[t][e];return r(Pe(n))}Fe(e,t),r(c(c({},tr),{},{icon:I.showMissingIcons&&e&&E(`missingIconAbstract`)||{}}))})}function Le(e){return typeof(e.getAttribute?e.getAttribute(N):null)==`string`}function Re(e){let t=e.getAttribute?e.getAttribute(sn):null,n=e.getAttribute?e.getAttribute(cn):null;return t&&n}function ze(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Be(){return I.autoReplaceSvg===!0?Y.replace:Y[I.autoReplaceSvg]||Y.replace}function Ve(e){return O.createElementNS(`http://www.w3.org/2000/svg`,e)}function He(e){return O.createElement(e)}function Ue(e){let{ceFn:t=e.tag===`svg`?Ve:He}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return O.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Ue(e,{ceFn:t}))}),n}function We(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function Ge(e){e()}function Ke(e,t){let n=typeof t==`function`?t:J;if(e.length===0)n();else{let t=Ge;I.mutateApproach===un&&(t=D.requestAnimationFrame||Ge),t(()=>{let t=Be(),r=or.begin(`mutate`);e.map(t),r(),n()})}}function qe(){sr=!0}function Je(){sr=!1}function Ye(e){if(!xt||!I.observeMutations)return;let{treeCallback:t=J,nodeCallback:n=J,pseudoElementsCallback:r=J,observeMutationsRoot:i=O}=e;X=new xt(e=>{if(sr)return;let i=w();_(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!Le(e.addedNodes[0])&&(I.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&I.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&Le(e.target)&&~Cn.indexOf(e.attributeName))if(e.attributeName===`class`&&Re(e.target)){let{prefix:t,iconName:n}=Se(v(e.target));e.target.setAttribute(sn,t||i),n&&e.target.setAttribute(cn,n)}else ze(e.target)&&n(e.target)})}),A&&X.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Xe(){X&&X.disconnect()}function Ze(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Qe(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Se(v(e));return i.prefix||=w(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=he(i.prefix,e.innerText)||me(i.prefix,ce(e.innerText))),!i.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function $e(e){let t=_(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return I.autoA11y&&(n?t[`aria-labelledby`]=`${I.replacementClass}-title-${r||g()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function et(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=Qe(e),a=$e(e),o=Ee(`parseNodeAttributes`,{},e),s=t.styleParser?Ze(e):[];return c({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}function nt(e){let t=I.autoReplaceSvg===`nest`?tt(e,{styleParser:!1}):tt(e);return~t.extra.classes.indexOf(xn)?E(`generateLayersText`,e,t):E(`generateSvgReplacementMutation`,e,t)}function rt(){return[...Pt,...Yt]}function it(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();let n=O.documentElement.classList,r=e=>n.add(`${ln}-${e}`),i=e=>n.remove(`${ln}-${e}`),a=I.autoFetchSvg?rt():Dt.concat(Object.keys(cr));a.includes(`fa`)||a.push(`fa`);let o=[`.${xn}:not([${N}])`].concat(a.map(e=>`.${e}:not([${N}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=_(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=or.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=nt(t);n&&e.push(n)}catch(e){fn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Ke(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function at(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nt(e).then(e=>{e&&Ke([e],t)})}function ot(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:De(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:De(i||{}),e(r,c(c({},n),{},{mask:i}))}}function st(e){let t=e.replace(mr,``),n=le(t,0),r=n>=hr[0]&&n<=hr[1],i=t.length===2?t[0]===t[1]:!1;return{value:ce(i?t[0]:t),isSecondary:r||i}}function ct(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(_r[n]||{})[i]||vr[n]}function lt(e,t){let n=`${on}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=_(e.children).filter(e=>e.getAttribute(an)===t)[0],o=D.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),l=s.match(Sn),u=o.getPropertyValue(`font-weight`),d=o.getPropertyValue(`content`);if(a&&!l)return e.removeChild(a),r();if(l&&d!==`none`&&d!==``){let d=o.getPropertyValue(`content`),f=ct(s,u),{value:p,isSecondary:m}=st(d),h=l[0].startsWith(`FontAwesome`),g=me(f,p),_=g;if(h){let e=_e(p);e.iconName&&e.prefix&&(g=e.iconName,f=e.prefix)}if(g&&!m&&(!a||a.getAttribute(sn)!==f||a.getAttribute(cn)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);let o=et(),{extra:s}=o;s.attributes[an]=t,Ie(g,f).then(i=>{let a=je(c(c({},o),{},{icons:{main:i,mask:Gn()},prefix:f,iconName:_,extra:s,watchable:!0})),l=O.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=a.map(e=>ae(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ut(e){return Promise.all([lt(e,`::before`),lt(e,`::after`)])}function dt(e){return e.parentNode!==document.head&&!~dn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(an)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function ft(e){if(A)return new Promise((t,n)=>{let r=_(e.querySelectorAll(`*`)).filter(dt).map(ut),i=or.begin(`searchPseudoElements`);qe(),Promise.all(r).then(()=>{i(),Je(),t()}).catch(()=>{i(),Je(),n()})})}function pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function mt(e){return e.tag===`g`?e.children:[e]}var ht,gt,_t,vt,yt,bt,D,O,xt,k,A,St,Ct,wt,Tt,Et,Dt,j,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,M,tn,nn,rn,N,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,P,En,F,I,L,R,z,Dn,On,kn,An,B,V,jn,Mn,H,Nn,Pn,U,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,W,G,Xn,Zn,Qn,K,$n,er,tr,nr,rr,q,ir,ar,or,J,Y,sr,X,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr=n((()=>{ht=()=>{},gt={},_t={},vt=null,yt={mark:ht,measure:ht};try{typeof window<`u`&&(gt=window),typeof document<`u`&&(_t=document),typeof MutationObserver<`u`&&(vt=MutationObserver),typeof performance<`u`&&(yt=performance)}catch{}({userAgent:bt=``}=gt.navigator||{}),D=gt,O=_t,xt=vt,k=yt,D.document,A=!!O.documentElement&&!!O.head&&typeof O.addEventListener==`function`&&typeof O.createElement==`function`,St=~bt.indexOf(`MSIE`)||~bt.indexOf(`Trident/`),Ct=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Tt={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},Et={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Dt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],j=`classic`,Ot=`duotone`,kt=[j,Ot,`sharp`,`sharp-duotone`],At={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},jt={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},Mt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),Nt={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},Pt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Ft={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},It=[`kit`],Lt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Rt=[`fak`,`fakd`],zt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Bt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Vt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ht=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],Ut=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Wt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Gt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},Kt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},qt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},Jt=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Yt=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...Ht,...Jt],Xt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Zt=[1,2,3,4,5,6,7,8,9,10],Qt=Zt.concat([11,12,13,14,15,16,17,18,19,20]),$t=[...Object.keys(Kt),...Xt,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,Vt.GROUP,Vt.SWAP_OPACITY,Vt.PRIMARY,Vt.SECONDARY].concat(Zt.map(e=>`${e}x`),Qt.map(e=>`w-${e}`)),en={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},M=`___FONT_AWESOME___`,tn=16,nn=`fa`,rn=`svg-inline--fa`,N=`data-fa-i2svg`,an=`data-fa-pseudo-element`,on=`data-fa-pseudo-element-pending`,sn=`data-prefix`,cn=`data-icon`,ln=`fontawesome-i2svg`,un=`async`,dn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],fn=(()=>{try{return!0}catch{return!1}})(),pn=c({},Tt),pn[j]=c(c(c(c({},{"fa-duotone":`duotone`}),Tt[j]),Ft.kit),Ft[`kit-duotone`]),mn=d(pn),hn=c({},Nt),hn[j]=c(c(c(c({},{duotone:`fad`}),hn[j]),Bt.kit),Bt[`kit-duotone`]),gn=d(hn),_n=c({},qt),_n[j]=c(c({},_n[j]),zt.kit),vn=d(_n),yn=c({},Gt),yn[j]=c(c({},yn[j]),Lt.kit),d(yn),bn=Ct,xn=`fa-layers-text`,Sn=wt,d(c({},At)),Cn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],wn=Et,Tn=[...It,...$t],P=D.FontAwesomeConfig||{},O&&typeof O.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=p(f(t));r!=null&&(P[n]=r)}),En={styleDefault:`solid`,familyDefault:j,cssPrefix:nn,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},P.familyPrefix&&(P.cssPrefix=P.familyPrefix),F=c(c({},En),P),F.autoReplaceSvg||(F.observeMutations=!1),I={},Object.keys(En).forEach(e=>{Object.defineProperty(I,e,{enumerable:!0,set:function(t){F[e]=t,L.forEach(e=>e(I))},get:function(){return F[e]}})}),Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){F.cssPrefix=e,L.forEach(e=>e(I))},get:function(){return F.cssPrefix}}),D.FontAwesomeConfig=I,L=[],R=tn,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},Dn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,On=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`,kn=!1,An={mixout(){return{dom:{css:ne,insertCss:re}}},hooks(){return{beforeDOMElementCreation(){re()},beforeI2svg(){re()}}}},B=D||{},B[M]||(B[M]={}),B[M].styles||(B[M].styles={}),B[M].hooks||(B[M].hooks={}),B[M].shims||(B[M].shims=[]),V=B[M],jn=[],Mn=function(){O.removeEventListener(`DOMContentLoaded`,Mn),H=1,jn.map(e=>e())},H=!1,A&&(H=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),H||O.addEventListener(`DOMContentLoaded`,Mn)),Nn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Pn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Nn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},{styles:U,shims:Fn}=V,In=Object.keys(vn),Ln=In.reduce((e,t)=>(e[t]=Object.keys(vn[t]),e),{}),Rn=null,zn={},Bn={},Vn={},Hn={},Un={},Wn=()=>{let e=e=>Pn(U,(t,n,r)=>(t[r]=Pn(n,e,{}),t),{});zn=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Bn=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Un=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in U||I.autoFetchSvg,n=Pn(Fn,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Vn=n.names,Hn=n.unicodes,Rn=ye(I.styleDefault,{family:I.familyDefault})},m(e=>{Rn=ye(e.styleDefault,{family:I.familyDefault})}),Wn(),Gn=()=>({prefix:null,iconName:null,rest:[]}),Kn=kt.filter(e=>e!==j||e!==Ot),qn=Object.keys(qt).filter(e=>e!==j).map(e=>Object.keys(qt[e])).flat(),Jn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=c(c({},this.definitions[t]||{}),e[t]),de(t,e[t]);let n=vn[j][t];n&&de(n,e[t]),Wn()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},Yn=[],W={},G={},Xn=Object.keys(G),Zn=new Jn,Qn=()=>{I.autoReplaceSvg=!1,I.observeMutations=!1,T(`noAuto`)},K={noAuto:Qn,config:I,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(T(`beforeI2svg`,e),E(`pseudoElements2svg`,e),E(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,ie(()=>{$n({autoReplaceSvgRoot:t}),T(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:C(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ye(e[0]);return{prefix:n,iconName:C(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${I.cssPrefix}-`)>-1||e.match(bn))){let t=Se(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||w(),iconName:C(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=w();return{prefix:t,iconName:C(t,e)||e}}}},library:Zn,findIconDefinition:De,toHtml:ae},$n=function(){let{autoReplaceSvgRoot:e=O}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(V.styles).length>0||I.autoFetchSvg)&&A&&I.autoReplaceSvg&&K.dom.i2svg({node:e})},{styles:er}=V,tr={found:!1,width:512,height:512},nr=()=>{},rr=I.measurePerformance&&k&&k.mark&&k.measure?k:{mark:nr,measure:nr},q=`FA "6.7.2"`,ir=e=>(rr.mark(`${q} ${e} begins`),()=>ar(e)),ar=e=>{rr.mark(`${q} ${e} ends`),rr.measure(`${q} ${e}`,`${q} ${e} begins`,`${q} ${e} ends`)},or={begin:ir,end:ar},J=()=>{},Y={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(Ue(e),t)}),t.getAttribute(N)===null&&I.keepOriginalSource){let e=O.createComment(We(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~v(t).indexOf(I.replacementClass))return Y.replace(e);let r=RegExp(`${I.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===I.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>ae(e)).join(`
`);t.setAttribute(N,``),t.innerHTML=i}},sr=!1,X=null,{styles:cr}=V,lr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=z,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:l=[],attributes:u={},styles:d={}}=t;if(!e)return;let{prefix:f,iconName:p,icon:m}=e;return Oe(c({type:`icon`},e),()=>(T(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),I.autoA11y&&(o?u[`aria-labelledby`]=`${I.replacementClass}-title-${s||g()}`:(u[`aria-hidden`]=`true`,u.focusable=`false`)),je({icons:{main:Pe(m),mask:i?Pe(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:c(c({},z),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:u,styles:d,classes:l}})))},ur={mixout(){return{icon:ot(lr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=it,e.nodeCallback=at,e}}},provides(e){e.i2svg=function(e){let{node:t=O,callback:n=()=>{}}=e;return it(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Ie(n,a),c.iconName?Ie(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,je({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=x(a);o.length>0&&(n.style=o);let s;return S(i)&&(s=E(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},dr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Oe({type:`layer`},()=>{T(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${I.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},fr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Oe({type:`counter`,content:e},()=>(T(`beforeDOMElementCreation`,{content:e,params:t}),Ne({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${I.cssPrefix}-layers-counter`,...r]}})))}}}},pr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=z,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Oe({type:`text`,content:e},()=>(T(`beforeDOMElementCreation`,{content:e,params:t}),Me({content:e,transform:c(c({},z),n),title:r,extra:{attributes:a,styles:o,classes:[`${I.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(St){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return I.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,Me({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},mr=RegExp(`"`,`ug`),hr=[1105920,1112319],gr=c(c(c(c({},{FontAwesome:{normal:`fas`,400:`fas`}}),jt),en),Wt),_r=Object.keys(gr).reduce((e,t)=>(e[t.toLowerCase()]=gr[t],e),{}),vr=Object.keys(_r).reduce((e,t)=>{let n=_r[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{}),yr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ft,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=O}=e;I.searchPseudoElements&&ft(t)}}},br=!1,xr={mixout(){return{dom:{unwatch(){qe(),br=!0}}}},hooks(){return{bootstrap(){Ye(Ee(`mutationObserverCallbacks`,{}))},noAuto(){Xe()},watch(e){let{observeMutationsRoot:t}=e;br?Je():Ye(Ee(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Sr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Cr={mixout(){return{parse:{transform:e=>Sr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Sr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:c({},a.outer),children:[{tag:`g`,attributes:c({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:c(c({},t.icon.attributes),a.path)}]}]}}}},wr={x:0,y:0,width:`100%`,height:`100%`},Te([An,ur,dr,fr,pr,yr,xr,Cr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?Se(n.split(` `).map(e=>e.trim())):Gn();return r.prefix||=w(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:l}=r,{width:u,icon:d}=i,f=ee({transform:o,containerWidth:u,iconWidth:s}),p={tag:`rect`,attributes:c(c({},wr),{},{fill:`white`})},m=l.children?{children:l.children.map(pt)}:{},h={tag:`g`,attributes:c({},f.inner),children:[pt(c({tag:l.tag,attributes:c(c({},l.attributes),f.path)},m))]},_={tag:`g`,attributes:c({},f.outer),children:[h]},v=`mask-${a||g()}`,y=`clip-${a||g()}`,b={tag:`mask`,attributes:c(c({},wr),{},{id:v,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[p,_]},x={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:y},children:mt(d)},b]};return t.push(x,{tag:`rect`,attributes:c({fill:`currentColor`,"clip-path":`url(#${y})`,mask:`url(#${v})`},wr)}),{children:t,attributes:n}}}},{provides(e){let t=!1;D.matchMedia&&(t=D.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:c(c({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=c(c({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:c(c({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:c(c({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:c(c({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:c(c({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:c(c({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:c(c({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:c(c({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:K}),K.noAuto,K.config,K.library,K.dom,Tr=K.parse,K.findIconDefinition,K.toHtml,Er=K.icon,K.layer,K.text,K.counter})),Or=e({author:()=>Nr,bugs:()=>Mr,default:()=>Gr,dependencies:()=>Ir,description:()=>kr,engines:()=>Fr,exports:()=>Ur,homepage:()=>jr,keywords:()=>Ar,license:()=>`MIT`,main:()=>zr,module:()=>Br,name:()=>Rr,repository:()=>Pr,sideEffects:()=>Wr,style:()=>Vr,types:()=>Hr,version:()=>Lr}),kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr=n((()=>{kr=`The iconic font, CSS, and SVG framework`,Ar=[`font`,`awesome`,`fontawesome`,`icon`,`svg`,`bootstrap`],jr=`https://fontawesome.com`,Mr={url:`https://github.com/FortAwesome/Font-Awesome/issues`},Nr=`The Font Awesome Team (https://github.com/orgs/FortAwesome/people)`,Pr={type:`git`,url:`https://github.com/FortAwesome/Font-Awesome`},Fr={node:`>=6`},Ir={"@fortawesome/fontawesome-common-types":`6.7.2`},Lr=`6.7.2`,Rr=`@fortawesome/fontawesome-svg-core`,zr=`index.js`,Br=`index.mjs`,Vr=`styles.css`,Hr=`./index.d.ts`,Ur={".":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,style:`./styles.css`,default:`./index.js`},"./index":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,default:`./index.js`},"./index.js":{types:`./index.d.ts`,module:`./index.mjs`,import:`./index.mjs`,require:`./index.js`,default:`./index.js`},"./plugins":{types:`./index.d.ts`,module:`./plugins.mjs`,import:`./plugins.mjs`,default:`./plugins.mjs`},"./import.macro":`./import.macro.js`,"./import.macro.js":`./import.macro.js`,"./styles":`./styles.css`,"./styles.css":`./styles.css`,"./package.json":`./package.json`},Wr=[`./index.js`,`./index.mjs`,`./styles.css`],Gr={description:kr,keywords:Ar,homepage:jr,bugs:Mr,author:Nr,repository:Pr,engines:Fr,dependencies:Ir,version:Lr,name:Rr,main:zr,module:Br,"jsnext:main":`index.mjs`,style:Vr,license:`MIT`,types:Hr,exports:Ur,sideEffects:Wr}}));function qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Jr(e){if(Array.isArray(e))return e}function Yr(e){if(Array.isArray(e))return qr(e)}function Z(e,t,n){return(t=oi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Zr(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Qr(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $r(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ei(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ei(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ti(e,t){if(e==null)return{};var n,r,i=ni(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ni(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ri(e,t){return Jr(e)||Zr(e,t)||ci(e,t)||Qr()}function ii(e){return Yr(e)||Xr(e)||ci(e)||$r()}function ai(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function oi(e){var t=ai(e,`string`);return typeof t==`symbol`?t:t+``}function si(e){"@babel/helpers - typeof";return si=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},si(e)}function ci(e,t){if(e){if(typeof e==`string`)return qr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qr(e,t):void 0}}function li(e){var t=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,a=e.shake,o=e.flash,s=e.spin,c=e.spinPulse,l=e.spinReverse,u=e.pulse,d=e.fixedWidth,f=e.inverse,p=e.border,m=e.listItem,h=e.flip,g=e.size,_=e.rotation,v=e.pull,y=e.swapOpacity,b=e.rotateBy,x=e.widthAuto,S=ui(xi,bi),ee=Z(Z(Z(Z(Z(Z({"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h===`horizontal`||h===`both`,"fa-flip-vertical":h===`vertical`||h===`both`},`fa-${g}`,g!=null),`fa-rotate-${_}`,_!=null&&_!==0),`fa-pull-${v}`,v!=null),`fa-swap-opacity`,y),`fa-rotate-by`,S&&b),`fa-width-auto`,S&&x);return Object.keys(ee).map(function(e){return ee[e]?e:null}).filter(function(e){return e})}function ui(e,t){for(var n=ri(e.split(`-`),2),r=n[0],i=n[1],a=ri(t.split(`-`),2),o=a[0],s=a[1],c=r.split(`.`),l=o.split(`.`),u=0;u<Math.max(c.length,l.length);u++){var d=c[u]||`0`,f=l[u]||`0`,p=parseInt(d,10),m=parseInt(f,10);if(p!==m)return p>m}for(var h=0;h<Math.max(c.length,l.length);h++){var g=c[h]||`0`,_=l[h]||`0`;if(g!==_&&g.length!==_.length)return g.length<_.length}return!(i&&!s)}function di(e){return e-=0,e===e}function fi(e){return di(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}function pi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function mi(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=fi(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith(`webkit`)?e[pi(r)]=i:e[r]=i,e},{})}function hi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t==`string`)return t;var r=(t.children||[]).map(function(t){return hi(e,t)}),i=Object.keys(t.attributes||{}).reduce(function(e,n){var r=t.attributes[n];switch(n){case`class`:e.attrs.className=r,delete t.attributes.class;break;case`style`:e.attrs.style=mi(r);break;default:n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[fi(n)]=r}return e},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=ti(n,Si);return i.attrs.style=Q(Q({},i.attrs.style),o),e.apply(void 0,[t.tag,Q(Q({},i.attrs),s)].concat(ii(r)))}function gi(){if(!Ci&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function _i(e){if(e&&si(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Tr.icon)return Tr.icon(e);if(e===null)return null;if(e&&si(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function vi(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}var $,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di=n((()=>{Dr(),$=t(a()),yi=t(i()),bi=`7.0.0`;try{xi=(Kr(),r(Or).default).version}catch{xi=typeof process<`u`&&{}.FA_VERSION||`7.0.0`}Si=[`style`],Ci=!1;try{Ci=!0}catch{}wi={border:!1,className:``,mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Ti=yi.forwardRef(function(e,t){var n=Q(Q({},wi),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=_i(r),d=vi(`classes`,[].concat(ii(li(n)),ii((o||``).split(` `)))),f=vi(`transform`,typeof n.transform==`string`?Tr.transform(n.transform):n.transform),p=vi(`mask`,_i(i)),m=Er(u,Q(Q(Q(Q({},d),f),p),{},{symbol:a,title:s,titleId:c,maskId:l}));if(!m)return gi(`Could not find icon`,u),null;var h=m.abstract,g={ref:t};return Object.keys(n).forEach(function(e){wi.hasOwnProperty(e)||(g[e]=n[e])}),Ei(h[0],g)}),Ti.displayName=`FontAwesomeIcon`,Ti.propTypes={beat:$.default.bool,border:$.default.bool,beatFade:$.default.bool,bounce:$.default.bool,className:$.default.string,fade:$.default.bool,flash:$.default.bool,mask:$.default.oneOfType([$.default.object,$.default.array,$.default.string]),maskId:$.default.string,fixedWidth:$.default.bool,inverse:$.default.bool,flip:$.default.oneOf([!0,!1,`horizontal`,`vertical`,`both`]),icon:$.default.oneOfType([$.default.object,$.default.array,$.default.string]),listItem:$.default.bool,pull:$.default.oneOf([`right`,`left`]),pulse:$.default.bool,rotation:$.default.oneOf([0,90,180,270]),rotateBy:$.default.bool,shake:$.default.bool,size:$.default.oneOf([`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`]),spin:$.default.bool,spinPulse:$.default.bool,spinReverse:$.default.bool,symbol:$.default.oneOfType([$.default.bool,$.default.string]),title:$.default.string,titleId:$.default.string,transform:$.default.oneOfType([$.default.string,$.default.object]),swapOpacity:$.default.bool,widthAuto:$.default.bool},Ei=hi.bind(null,yi.createElement)})),Oi,ki,Ai,ji,Mi=n((()=>{Oi={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z`]},ki=Oi,Ai={prefix:`fas`,iconName:`circle-xmark`,icon:[512,512,[61532,`times-circle`,`xmark-circle`],`f057`,`M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z`]},ji=Ai}));export{Di as a,Ti as i,ji as n,Mi as r,ki as t};