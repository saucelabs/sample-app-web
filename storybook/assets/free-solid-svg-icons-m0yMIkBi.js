import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./iframe-DrLPbyWR.js";function i(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?a(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function c(e){var t=s(e,`string`);return typeof t==`symbol`?t:t+``}function l(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[A]}})}function u(e){var t=D.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function d(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}function f(e){return R.push(e),()=>{R.splice(R.indexOf(e),1)}}function p(e){if(!e||!k)return;let t=D.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=D.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return D.head.insertBefore(t,r),e}function m(){let e=12,t=``;for(;e-->0;)t+=wn[Math.random()*62|0];return t}function h(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function g(e){return e.classList?h(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function _(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function v(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${_(e[n])}" `,``).trim()}function y(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function b(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function x(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function ee(e){let{transform:t,width:n=Qt,height:r=Qt,startCentered:i=!1}=e,a=``;return i&&xt?a+=`translate(${t.x/z-n/2}em, ${t.y/z-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:a+=`translate(${t.x/z}em, ${t.y/z}em) `,a+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}function te(){let e=$t,t=en,n=L.cssPrefix,r=L.replacementClass,i=Tn;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function ne(){L.autoAddCss&&!En&&(p(te()),En=!0)}function re(e){k&&(An?setTimeout(e,0):On.push(e))}function ie(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?_(e):`<${t} ${v(n)}>${r.map(ie).join(``)}</${t}>`}function ae(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function oe(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function se(e){let t=oe(e);return t.length===1?t[0].toString(16):null}function ce(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function le(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function ue(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=le(t);typeof H.hooks.addPack==`function`&&!n?H.hooks.addPack(e,le(t)):H.styles[e]=o(o({},H.styles[e]||{}),r),e===`fas`&&ue(`fa`,t)}function de(e){return~Sn.indexOf(e)}function fe(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!de(i)?i:null}function pe(e,t){return(Ln[e]||{})[t]}function me(e,t){return(Rn[e]||{})[t]}function S(e,t){return(Vn[e]||{})[t]}function he(e){return zn[e]||{prefix:null,iconName:null}}function ge(e){let t=Bn[e],n=pe(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function C(){return In}function _e(e){let t=A,n=Pn.reduce((e,t)=>(e[t]=`${L.cssPrefix}-${t}`,e),{});return Dt.forEach(r=>{(e.includes(n[r])||e.some(e=>Fn[r].includes(e)))&&(t=r)}),t}function ve(e){let{family:t=A}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=dn[t][e];if(t===j&&!e)return`fad`;let r=pn[t][e]||pn[t][n],i=e in H.styles?e:null;return r||i||null}function ye(e){let t=[],n=null;return e.forEach(e=>{let r=fe(L.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function be(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function xe(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Kt.concat(Bt),i=be(e.filter(e=>r.includes(e))),a=be(e.filter(e=>!Kt.includes(e))),[s=null]=i.filter(e=>(n=e,!Et.includes(e))),c=_e(i),l=o(o({},ye(a)),{},{prefix:ve(s,{family:c})});return o(o(o({},l),Ce({values:e,family:c,styles:U,config:L,canonical:l,givenPrefix:n})),Se(t,n,l))}function Se(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?he(i):{},o=S(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!U.far&&U.fas&&!L.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function Ce(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===j,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Wn.includes(n)&&(Object.keys(a).find(e=>Gn.includes(e))||o.autoFetchSvg)&&(r.prefix=At.get(n).defaultShortPrefixId,r.iconName=S(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=C()||`fas`),r}function we(e,t){let{mixoutsTo:n}=t;return qn=e,W={},Object.keys(G).forEach(e=>{Jn.indexOf(e)===-1&&delete G[e]}),qn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{W[e]||(W[e]=[]),W[e].push(t[e])})}e.provides&&e.provides(G)}),n}function Te(e,t){var n=[...arguments].slice(2);return(W[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function w(e){var t=[...arguments].slice(1);(W[e]||[]).forEach(e=>{e.apply(null,t)})}function T(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function Ee(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||C();if(t)return t=S(n,t)||t,ae(Yn.definitions,n,t)||ae(H.styles,n,t)}function De(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>ie(e))}}),Object.defineProperty(e,"node",{get:function(){if(!k)return;let t=D.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function Oe(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:s}=e;if(b(s)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=y(o(o({},a),{},{"transform-origin":`${r.x+s.x/16}em ${r.y+s.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function ke(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,s=a===!0?`${t}-${L.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:o(o({},i),{},{id:s}),children:r}]}]}function Ae(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:s,title:c,maskId:l,titleId:u,extra:d,watchable:f=!1}=e,{width:p,height:h}=n.found?n:t,g=It.includes(r),_=[L.replacementClass,i?`${L.cssPrefix}-${i}`:``].filter(e=>d.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(d.classes).join(` `),v={children:[],attributes:o(o({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:_,role:d.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${p} ${h}`})},y=g&&!~d.classes.indexOf(`fa-fw`)?{width:`${p/h*16*.0625}em`}:{};f&&(v.attributes[P]=``),c&&(v.children.push({tag:`title`,attributes:{id:v.attributes[`aria-labelledby`]||`title-${u||m()}`},children:[c]}),delete v.attributes.title);let b=o(o({},v),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:a,symbol:s,styles:o(o({},y),d.styles)}),{children:x,attributes:ee}=n.found&&t.found?T(`generateAbstractMask`,b)||{children:[],attributes:{}}:T(`generateAbstractIcon`,b)||{children:[],attributes:{}};return b.children=x,b.attributes=ee,s?ke(b):Oe(b)}function je(e){let{content:t,width:n,height:r,transform:i,title:a,extra:s,watchable:c=!1}=e,l=o(o(o({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(` `)});c&&(l[P]=``);let u=o({},s.styles);b(i)&&(u.transform=ee({transform:i,startCentered:!0,width:n,height:r}),u[`-webkit-transform`]=u.transform);let d=y(u);d.length>0&&(l.style=d);let f=[];return f.push({tag:`span`,attributes:l,children:[t]}),a&&f.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),f}function Me(e){let{content:t,title:n,extra:r}=e,i=o(o(o({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=y(r.styles);a.length>0&&(i.style=a);let s=[];return s.push({tag:`span`,attributes:i,children:[t]}),n&&s.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),s}function Ne(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${L.cssPrefix}-${xn.GROUP}`},children:[{tag:`path`,attributes:{class:`${L.cssPrefix}-${xn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${L.cssPrefix}-${xn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function Pe(e,t){!ln&&!L.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Fe(e,t){let n=t;return t===`fa`&&L.styleDefault!==null&&(t=C()),new Promise((r,i)=>{if(n===`fa`){let n=he(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Qn[t]&&Qn[t][e]){let n=Qn[t][e];return r(Ne(n))}Pe(e,t),r(o(o({},$n),{},{icon:L.showMissingIcons&&e&&T(`missingIconAbstract`)||{}}))})}function Ie(e){return typeof(e.getAttribute?e.getAttribute(P):null)==`string`}function Le(e){let t=e.getAttribute?e.getAttribute(rn):null,n=e.getAttribute?e.getAttribute(an):null;return t&&n}function Re(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function ze(){return L.autoReplaceSvg===!0?or.replace:or[L.autoReplaceSvg]||or.replace}function Be(e){return D.createElementNS(`http://www.w3.org/2000/svg`,e)}function Ve(e){return D.createElement(e)}function He(e){let{ceFn:t=e.tag===`svg`?Be:Ve}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return D.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(He(e,{ceFn:t}))}),n}function Ue(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function We(e){e()}function Ge(e,t){let n=typeof t==`function`?t:ar;if(e.length===0)n();else{let t=We;L.mutateApproach===sn&&(t=E.requestAnimationFrame||We),t(()=>{let t=ze(),r=ir.begin(`mutate`);e.map(t),r(),n()})}}function Ke(){sr=!0}function qe(){sr=!1}function Je(e){if(!bt||!L.observeMutations)return;let{treeCallback:t=ar,nodeCallback:n=ar,pseudoElementsCallback:r=ar,observeMutationsRoot:i=D}=e;cr=new bt(e=>{if(sr)return;let i=C();h(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!Ie(e.addedNodes[0])&&(L.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&L.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&Ie(e.target)&&~bn.indexOf(e.attributeName))if(e.attributeName===`class`&&Le(e.target)){let{prefix:t,iconName:n}=xe(g(e.target));e.target.setAttribute(rn,t||i),n&&e.target.setAttribute(an,n)}else Re(e.target)&&n(e.target)})}),k&&cr.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ye(){cr&&cr.disconnect()}function Xe(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Ze(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=xe(g(e));return i.prefix||=C(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=me(i.prefix,e.innerText)||pe(i.prefix,se(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Qe(e){let t=h(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return L.autoA11y&&(n?t[`aria-labelledby`]=`${L.replacementClass}-title-${r||m()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function $e(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=Ze(e),a=Qe(e),s=Te(`parseNodeAttributes`,{},e),c=t.styleParser?Xe(e):[];return o({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:a}},s)}function tt(e){let t=L.autoReplaceSvg===`nest`?et(e,{styleParser:!1}):et(e);return~t.extra.classes.indexOf(vn)?T(`generateLayersText`,e,t):T(`generateSvgReplacementMutation`,e,t)}function nt(){return[...Mt,...Kt]}function rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();let n=D.documentElement.classList,r=e=>n.add(`${on}-${e}`),i=e=>n.remove(`${on}-${e}`),a=L.autoFetchSvg?nt():Et.concat(Object.keys(lr));a.includes(`fa`)||a.push(`fa`);let o=[`.${vn}:not([${P}])`].concat(a.map(e=>`.${e}:not([${P}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=h(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=ir.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=tt(t);n&&e.push(n)}catch(e){ln||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Ge(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function it(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tt(e).then(e=>{e&&Ge([e],t)})}function at(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ee(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:Ee(i||{}),e(r,o(o({},n),{},{mask:i}))}}function ot(e){let t=e.replace(hr,``),n=ce(t,0),r=n>=gr[0]&&n<=gr[1],i=t.length===2?t[0]===t[1]:!1;return{value:se(i?t[0]:t),isSecondary:r||i}}function st(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(vr[n]||{})[i]||yr[n]}function ct(e,t){let n=`${nn}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=h(e.children).filter(e=>e.getAttribute(tn)===t)[0],s=E.getComputedStyle(e,t),c=s.getPropertyValue(`font-family`),l=c.match(yn),u=s.getPropertyValue(`font-weight`),d=s.getPropertyValue(`content`);if(a&&!l)return e.removeChild(a),r();if(l&&d!==`none`&&d!==``){let d=s.getPropertyValue(`content`),f=st(c,u),{value:p,isSecondary:m}=ot(d),h=l[0].startsWith(`FontAwesome`),g=pe(f,p),_=g;if(h){let e=ge(p);e.iconName&&e.prefix&&(g=e.iconName,f=e.prefix)}if(g&&!m&&(!a||a.getAttribute(rn)!==f||a.getAttribute(an)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);let s=$e(),{extra:c}=s;c.attributes[tn]=t,Fe(g,f).then(i=>{let a=Ae(o(o({},s),{},{icons:{main:i,mask:Un()},prefix:f,iconName:_,extra:c,watchable:!0})),l=D.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=a.map(e=>ie(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function lt(e){return Promise.all([ct(e,`::before`),ct(e,`::after`)])}function ut(e){return e.parentNode!==document.head&&!~cn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(tn)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function dt(e){if(k)return new Promise((t,n)=>{let r=h(e.querySelectorAll(`*`)).filter(ut).map(lt),i=ir.begin(`searchPseudoElements`);Ke(),Promise.all(r).then(()=>{i(),qe(),t()}).catch(()=>{i(),qe(),n()})})}function ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function pt(e){return e.tag===`g`?e.children:[e]}var mt,ht,gt,_t,vt,yt,E,D,bt,O,k,xt,St,Ct,wt,Tt,Et,A,j,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,M,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,N,Qt,$t,en,P,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,F,Cn,I,L,R,z,B,wn,Tn,En,Dn,V,H,On,kn,An,jn,Mn,U,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,W,G,Jn,Yn,Xn,K,Zn,Qn,$n,er,tr,q,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,J,Er,Dr,Or=e((()=>{mt=()=>{},ht={},gt={},_t=null,vt={mark:mt,measure:mt};try{typeof window<`u`&&(ht=window),typeof document<`u`&&(gt=document),typeof MutationObserver<`u`&&(_t=MutationObserver),typeof performance<`u`&&(vt=performance)}catch{}({userAgent:yt=``}=ht.navigator||{}),E=ht,D=gt,bt=_t,O=vt,E.document,k=!!D.documentElement&&!!D.head&&typeof D.addEventListener==`function`&&typeof D.createElement==`function`,xt=~yt.indexOf(`MSIE`)||~yt.indexOf(`Trident/`),St=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ct=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,wt={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},Tt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Et=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],A=`classic`,j=`duotone`,Dt=[A,j,`sharp`,`sharp-duotone`],Ot={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},kt={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},At=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),jt={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},Mt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Nt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Pt=[`kit`],Ft={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},It=[`fak`,`fakd`],Lt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Rt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},M={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},zt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],Bt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Vt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Ht={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},Ut={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},Wt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},Gt=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Kt=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...zt,...Gt],qt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Jt=[1,2,3,4,5,6,7,8,9,10],Yt=Jt.concat([11,12,13,14,15,16,17,18,19,20]),Xt=[...Object.keys(Ut),...qt,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,M.GROUP,M.SWAP_OPACITY,M.PRIMARY,M.SECONDARY].concat(Jt.map(e=>`${e}x`),Yt.map(e=>`w-${e}`)),Zt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},N=`___FONT_AWESOME___`,Qt=16,$t=`fa`,en=`svg-inline--fa`,P=`data-fa-i2svg`,tn=`data-fa-pseudo-element`,nn=`data-fa-pseudo-element-pending`,rn=`data-prefix`,an=`data-icon`,on=`fontawesome-i2svg`,sn=`async`,cn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],ln=(()=>{try{return!0}catch{return!1}})(),un=o({},wt),un[A]=o(o(o(o({},{"fa-duotone":`duotone`}),wt[A]),Nt.kit),Nt[`kit-duotone`]),dn=l(un),fn=o({},jt),fn[A]=o(o(o(o({},{duotone:`fad`}),fn[A]),Rt.kit),Rt[`kit-duotone`]),pn=l(fn),mn=o({},Wt),mn[A]=o(o({},mn[A]),Lt.kit),hn=l(mn),gn=o({},Ht),gn[A]=o(o({},gn[A]),Ft.kit),l(gn),_n=St,vn=`fa-layers-text`,yn=Ct,l(o({},Ot)),bn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],xn=Tt,Sn=[...Pt,...Xt],F=E.FontAwesomeConfig||{},D&&typeof D.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=d(u(t));r!=null&&(F[n]=r)}),Cn={styleDefault:`solid`,familyDefault:A,cssPrefix:$t,replacementClass:en,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},F.familyPrefix&&(F.cssPrefix=F.familyPrefix),I=o(o({},Cn),F),I.autoReplaceSvg||(I.observeMutations=!1),L={},Object.keys(Cn).forEach(e=>{Object.defineProperty(L,e,{enumerable:!0,set:function(t){I[e]=t,R.forEach(e=>e(L))},get:function(){return I[e]}})}),Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){I.cssPrefix=e,R.forEach(e=>e(L))},get:function(){return I.cssPrefix}}),E.FontAwesomeConfig=L,R=[],z=Qt,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},wn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,Tn=`:root, :host {
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
}`,En=!1,Dn={mixout(){return{dom:{css:te,insertCss:ne}}},hooks(){return{beforeDOMElementCreation(){ne()},beforeI2svg(){ne()}}}},V=E||{},V[N]||(V[N]={}),V[N].styles||(V[N].styles={}),V[N].hooks||(V[N].hooks={}),V[N].shims||(V[N].shims=[]),H=V[N],On=[],kn=function(){D.removeEventListener(`DOMContentLoaded`,kn),An=1,On.map(e=>e())},An=!1,k&&(An=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),An||D.addEventListener(`DOMContentLoaded`,kn)),jn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Mn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:jn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},{styles:U,shims:Nn}=H,Pn=Object.keys(hn),Fn=Pn.reduce((e,t)=>(e[t]=Object.keys(hn[t]),e),{}),In=null,Ln={},Rn={},zn={},Bn={},Vn={},Hn=()=>{let e=e=>Mn(U,(t,n,r)=>(t[r]=Mn(n,e,{}),t),{});Ln=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Rn=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Vn=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in U||L.autoFetchSvg,n=Mn(Nn,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});zn=n.names,Bn=n.unicodes,In=ve(L.styleDefault,{family:L.familyDefault})},f(e=>{In=ve(e.styleDefault,{family:L.familyDefault})}),Hn(),Un=()=>({prefix:null,iconName:null,rest:[]}),Wn=Dt.filter(e=>e!==A||e!==j),Gn=Object.keys(Wt).filter(e=>e!==A).map(e=>Object.keys(Wt[e])).flat(),Kn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=o(o({},this.definitions[t]||{}),e[t]),ue(t,e[t]);let n=hn[A][t];n&&ue(n,e[t]),Hn()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},qn=[],W={},G={},Jn=Object.keys(G),Yn=new Kn,Xn=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,w(`noAuto`)},K={noAuto:Xn,config:L,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(w(`beforeI2svg`,e),T(`pseudoElements2svg`,e),T(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,re(()=>{Zn({autoReplaceSvgRoot:t}),w(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:S(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ve(e[0]);return{prefix:n,iconName:S(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${L.cssPrefix}-`)>-1||e.match(_n))){let t=xe(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||C(),iconName:S(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=C();return{prefix:t,iconName:S(t,e)||e}}}},library:Yn,findIconDefinition:Ee,toHtml:ie},Zn=function(){let{autoReplaceSvgRoot:e=D}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(H.styles).length>0||L.autoFetchSvg)&&k&&L.autoReplaceSvg&&K.dom.i2svg({node:e})},{styles:Qn}=H,$n={found:!1,width:512,height:512},er=()=>{},tr=L.measurePerformance&&O&&O.mark&&O.measure?O:{mark:er,measure:er},q=`FA "6.7.2"`,nr=e=>(tr.mark(`${q} ${e} begins`),()=>rr(e)),rr=e=>{tr.mark(`${q} ${e} ends`),tr.measure(`${q} ${e}`,`${q} ${e} begins`,`${q} ${e} ends`)},ir={begin:nr,end:rr},ar=()=>{},or={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(He(e),t)}),t.getAttribute(P)===null&&L.keepOriginalSource){let e=D.createComment(Ue(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~g(t).indexOf(L.replacementClass))return or.replace(e);let r=RegExp(`${L.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===L.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>ie(e)).join(`
`);t.setAttribute(P,``),t.innerHTML=i}},sr=!1,cr=null,{styles:lr}=H,ur=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=B,symbol:r=!1,mask:i=null,maskId:a=null,title:s=null,titleId:c=null,classes:l=[],attributes:u={},styles:d={}}=t;if(!e)return;let{prefix:f,iconName:p,icon:h}=e;return De(o({type:`icon`},e),()=>(w(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),L.autoA11y&&(s?u[`aria-labelledby`]=`${L.replacementClass}-title-${c||m()}`:(u[`aria-hidden`]=`true`,u.focusable=`false`)),Ae({icons:{main:Ne(h),mask:i?Ne(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:o(o({},B),n),symbol:r,title:s,maskId:a,titleId:c,extra:{attributes:u,styles:d,classes:l}})))},dr={mixout(){return{icon:at(ur)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=rt,e.nodeCallback=it,e}}},provides(e){e.i2svg=function(e){let{node:t=D,callback:n=()=>{}}=e;return rt(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Fe(n,a),c.iconName?Fe(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,Ae({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=y(a);o.length>0&&(n.style=o);let s;return b(i)&&(s=T(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},fr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return De({type:`layer`},()=>{w(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${L.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},pr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return De({type:`counter`,content:e},()=>(w(`beforeDOMElementCreation`,{content:e,params:t}),Me({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${L.cssPrefix}-layers-counter`,...r]}})))}}}},mr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=B,title:r=null,classes:i=[],attributes:a={},styles:s={}}=t;return De({type:`text`,content:e},()=>(w(`beforeDOMElementCreation`,{content:e,params:t}),je({content:e,transform:o(o({},B),n),title:r,extra:{attributes:a,styles:s,classes:[`${L.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(xt){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return L.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,je({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},hr=RegExp(`"`,`ug`),gr=[1105920,1112319],_r=o(o(o(o({},{FontAwesome:{normal:`fas`,400:`fas`}}),kt),Zt),Vt),vr=Object.keys(_r).reduce((e,t)=>(e[t.toLowerCase()]=_r[t],e),{}),yr=Object.keys(vr).reduce((e,t)=>{let n=vr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{}),br={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=dt,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=D}=e;L.searchPseudoElements&&dt(t)}}},xr=!1,Sr={mixout(){return{dom:{unwatch(){Ke(),xr=!0}}}},hooks(){return{bootstrap(){Je(Te(`mutationObserverCallbacks`,{}))},noAuto(){Ye()},watch(e){let{observeMutationsRoot:t}=e;xr?qe():Je(Te(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Cr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),wr={mixout(){return{parse:{transform:e=>Cr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Cr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:o({},a.outer),children:[{tag:`g`,attributes:o({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:o(o({},t.icon.attributes),a.path)}]}]}}}},Tr={x:0,y:0,width:`100%`,height:`100%`},we([Dn,dr,fr,pr,mr,br,Sr,wr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?xe(n.split(` `).map(e=>e.trim())):Un();return r.prefix||=C(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:s}=e,{width:c,icon:l}=r,{width:u,icon:d}=i,f=x({transform:s,containerWidth:u,iconWidth:c}),p={tag:`rect`,attributes:o(o({},Tr),{},{fill:`white`})},h=l.children?{children:l.children.map(ft)}:{},g={tag:`g`,attributes:o({},f.inner),children:[ft(o({tag:l.tag,attributes:o(o({},l.attributes),f.path)},h))]},_={tag:`g`,attributes:o({},f.outer),children:[g]},v=`mask-${a||m()}`,y=`clip-${a||m()}`,b={tag:`mask`,attributes:o(o({},Tr),{},{id:v,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[p,_]},ee={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:y},children:pt(d)},b]};return t.push(ee,{tag:`rect`,attributes:o({fill:`currentColor`,"clip-path":`url(#${y})`,mask:`url(#${v})`},Tr)}),{children:t,attributes:n}}}},{provides(e){let t=!1;E.matchMedia&&(t=E.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:o(o({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=o(o({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:o(o({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:o(o({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:o(o({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:o(o({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:o(o({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:o(o({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:o(o({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:K}),K.noAuto,J=K.config,K.library,K.dom,Er=K.parse,K.findIconDefinition,K.toHtml,Dr=K.icon,K.layer,K.text,K.counter}));function kr(e){return e-=0,e===e}function Ar(e){return kr(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function jr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Mr(e){if(X.has(e))return X.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Ar(n);t[e.startsWith(`webkit`)?jr(e):e]=r}}}n=a+1}if(X.size===zr){let e=X.keys().next().value;e&&X.delete(e)}return X.set(e,t),t}function Nr(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Nr(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Mr(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Ar(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Rr)))}return e(t.tag,{...a,...u},...r)}function Pr(e){let t=J.cssPrefix||J.familyPrefix||Z;return t===Z?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Z}-`,`g`),`${t}-`)}function Fr(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Q.beat),n&&x.push(Q.fade),r&&x.push(Q.beatFade),i&&x.push(Q.bounce),a&&x.push(Q.shake),o&&x.push(Q.spin),c&&x.push(Q.spinReverse),s&&x.push(Q.spinPulse),l&&x.push(Q.pulse),u&&x.push($.fixedWidth),d&&x.push($.inverse),f&&x.push($.border),p===!0&&x.push($.flip),(p===`horizontal`||p===`both`)&&x.push($.flipHorizontal),(p===`vertical`||p===`both`)&&x.push($.flipVertical),m!=null&&x.push(Jr[m]),h!=null&&h!==0&&x.push(qr[h]),g!=null&&x.push(Kr[g]),_&&x.push($.swapOpacity),Gr()?(v&&x.push($.rotateBy),y&&x.push($.widthAuto),(J.cssPrefix||J.familyPrefix||Z)===Z?x:x.map(Pr)):x}function Ir(e){if(e)return Xr(e)?e:Er.icon(e)}function Lr(e){return Object.keys(e)}var Y,Rr,X,zr,Br,Vr,Hr,Ur,Wr,Gr,Z,Q,Kr,qr,Jr,$,Yr,Xr,Zr,Qr,$r,ei,ti=e((()=>{Y=t(n(),1),Or(),r(),Rr=(e,t)=>Y.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}}),X=new Map,zr=1e3,Br=Nr.bind(null,Y.createElement),Vr=(e,t)=>{let n=(0,Y.useId)();return e||(t?n:void 0)},Hr=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},typeof process<`u`&&{}.FA_VERSION,Ur=`searchPseudoElementsFullScan`in J&&typeof J.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Wr=Number.parseInt(Ur)>=7,Gr=()=>Wr,Z=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},Kr={left:`fa-pull-left`,right:`fa-pull-right`},qr={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Jr={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Yr={default:`fa-layers`},Xr=e=>typeof e==`object`&&`icon`in e&&!!e.icon,Zr=new Hr(`FontAwesomeIcon`),Qr={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},$r=new Set(Object.keys(Qr)),ei=Y.forwardRef((e,t)=>{let n={...Qr,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Vr(c,!!i),d=Vr(s,!!o),f=Ir(r);if(!f)return Zr.error(`Icon lookup is undefined`,r),null;let p=Fr(n),m=typeof l==`string`?Er.transform(l):l,h=Ir(i),g=Dr(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Zr.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Lr(n))$r.has(e)||(v[e]=n[e]);return Br(_[0],v)}),ei.displayName=`FontAwesomeIcon`,`${Yr.default}${$.fixedWidth}`})),ni,ri,ii,ai,oi=e((()=>{ni={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z`]},ri=ni,ii={prefix:`fas`,iconName:`circle-xmark`,icon:[512,512,[61532,`times-circle`,`xmark-circle`],`f057`,`M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z`]},ai=ii}));export{ti as a,ei as i,ai as n,oi as r,ri as t};