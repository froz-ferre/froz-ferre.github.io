var Le=Object.defineProperty;var De=(e,n,t)=>n in e?Le(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var O=(e,n,t)=>(De(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var j,g,ye,L,se,be,K,P={},ee=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ne=Array.isArray;function A(e,n){for(var t in n)e[t]=n[t];return e}function Se(e){var n=e.parentNode;n&&n.removeChild(e)}function $e(e,n,t){var i,o,r,l={};for(r in n)r=="key"?i=n[r]:r=="ref"?o=n[r]:l[r]=n[r];if(arguments.length>2&&(l.children=arguments.length>3?j.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return B(e,l,i,o,null)}function B(e,n,t,i,o){var r={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++ye,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(r),r}function C(e){return e.children}function U(e,n){this.props=e,this.context=n}function R(e,n){if(n==null)return e.__?R(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?R(e):null}function Oe(e,n,t){var i,o=e.__v,r=o.__e,l=e.__P;if(l)return(i=A({},o)).__v=o.__v+1,g.vnode&&g.vnode(i),te(l,i,o,e.__n,l.ownerSVGElement!==void 0,32&o.__u?[r]:null,n,r??R(o),!!(32&o.__u),t),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&Ne(i),i}function Ne(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Ne(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!M.__r++||se!==g.debounceRendering)&&((se=g.debounceRendering)||be)(M)}function M(){var e,n,t,i=[],o=[];for(L.sort(K);e=L.shift();)e.__d&&(t=L.length,n=Oe(e,i,o)||n,t===0||L.length>t?(Y(i,n,o),o.length=i.length=0,n=void 0,L.sort(K)):n&&g.__c&&g.__c(n,ee));n&&Y(i,n,o),M.__r=0}function ke(e,n,t,i,o,r,l,c,d,a,h){var s,v,u,S,y,f=i&&i.__k||ee,p=n.length;for(t.__d=d,Pe(t,n,f),d=t.__d,s=0;s<p;s++)(u=t.__k[s])!=null&&typeof u!="boolean"&&typeof u!="function"&&(v=u.__i===-1?P:f[u.__i]||P,u.__i=s,te(e,u,v,o,r,l,c,d,a,h),S=u.__e,u.ref&&v.ref!=u.ref&&(v.ref&&oe(v.ref,null,u),h.push(u.ref,u.__c||S,u)),y==null&&S!=null&&(y=S),65536&u.__u||v.__k===u.__k?d=Ie(u,d,e):typeof u.type=="function"&&u.__d!==void 0?d=u.__d:S&&(d=S.nextSibling),u.__d=void 0,u.__u&=-196609);t.__d=d,t.__e=y}function Pe(e,n,t){var i,o,r,l,c,d=n.length,a=t.length,h=a,s=0;for(e.__k=[],i=0;i<d;i++)l=i+s,(o=e.__k[i]=(o=n[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?B(null,o,null,null,null):ne(o)?B(C,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?B(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,c=xe(o,t,l,h),o.__i=c,r=null,c!==-1&&(h--,(r=t[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):c!==l&&(c===l+1?s++:c>l?h>d-l?s+=c-l:s--:c<l?c==l-1&&(s=c-l):s=0,c!==i+s&&(o.__u|=65536))):(r=t[l])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=R(r)),J(r,r,!1),t[l]=null,h--);if(h)for(i=0;i<a;i++)(r=t[i])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=R(r)),J(r,r))}function Ie(e,n,t){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,n=Ie(i[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function xe(e,n,t,i){var o=e.key,r=e.type,l=t-1,c=t+1,d=n[t];if(d===null||d&&o==d.key&&r===d.type&&!(131072&d.__u))return t;if(i>(d!=null&&!(131072&d.__u)?1:0))for(;l>=0||c<n.length;){if(l>=0){if((d=n[l])&&!(131072&d.__u)&&o==d.key&&r===d.type)return l;l--}if(c<n.length){if((d=n[c])&&!(131072&d.__u)&&o==d.key&&r===d.type)return c;c++}}return-1}function ce(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||Re.test(n)?t:t+"px"}function H(e,n,t,i,o){var r;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(n in i)t&&n in t||ce(e.style,n,"");if(t)for(n in t)i&&t[n]===i[n]||ce(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")r=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?i?t.u=i.u:(t.u=Date.now(),e.addEventListener(n,r?ae:le,r)):e.removeEventListener(n,r?ae:le,r);else{if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="width"&&n!=="height"&&n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n!=="rowSpan"&&n!=="colSpan"&&n!=="role"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function le(e){if(this.l){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(g.event?g.event(e):e)}}function ae(e){if(this.l)return this.l[e.type+!0](g.event?g.event(e):e)}function te(e,n,t,i,o,r,l,c,d,a){var h,s,v,u,S,y,f,p,m,b,T,$,re,x,V,E=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(d=!!(32&t.__u),r=[c=n.__e=t.__e]),(h=g.__b)&&h(n);e:if(typeof E=="function")try{if(p=n.props,m=(h=E.contextType)&&i[h.__c],b=h?m?m.props.value:h.__:i,t.__c?f=(s=n.__c=t.__c).__=s.__E:("prototype"in E&&E.prototype.render?n.__c=s=new E(p,b):(n.__c=s=new U(p,b),s.constructor=E,s.render=He),m&&m.sub(s),s.props=p,s.state||(s.state={}),s.context=b,s.__n=i,v=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),E.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=A({},s.__s)),A(s.__s,E.getDerivedStateFromProps(p,s.__s))),u=s.props,S=s.state,s.__v=n,v)E.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(E.getDerivedStateFromProps==null&&p!==u&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(p,b),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(p,s.__s,b)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(s.props=p,s.state=s.__s,s.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(F){F&&(F.__=n)}),T=0;T<s._sb.length;T++)s.__h.push(s._sb[T]);s._sb=[],s.__h.length&&l.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(p,s.__s,b),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(u,S,y)})}if(s.context=b,s.props=p,s.__P=e,s.__e=!1,$=g.__r,re=0,"prototype"in E&&E.prototype.render){for(s.state=s.__s,s.__d=!1,$&&$(n),h=s.render(s.props,s.state,s.context),x=0;x<s._sb.length;x++)s.__h.push(s._sb[x]);s._sb=[]}else do s.__d=!1,$&&$(n),h=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++re<25);s.state=s.__s,s.getChildContext!=null&&(i=A(A({},i),s.getChildContext())),v||s.getSnapshotBeforeUpdate==null||(y=s.getSnapshotBeforeUpdate(u,S)),ke(e,ne(V=h!=null&&h.type===C&&h.key==null?h.props.children:h)?V:[V],n,t,i,o,r,l,c,d,a),s.base=n.__e,n.__u&=-161,s.__h.length&&l.push(s),f&&(s.__E=s.__=null)}catch(F){n.__v=null,d||r!=null?(n.__e=c,n.__u|=d?160:32,r[r.indexOf(c)]=null):(n.__e=t.__e,n.__k=t.__k),g.__e(F,n,t)}else r==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=Fe(t.__e,n,t,i,o,r,l,d,a);(h=g.diffed)&&h(n)}function Y(e,n,t){for(var i=0;i<t.length;i++)oe(t[i],t[++i],t[++i]);g.__c&&g.__c(n,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){g.__e(r,o.__v)}})}function Fe(e,n,t,i,o,r,l,c,d){var a,h,s,v,u,S,y,f=t.props,p=n.props,m=n.type;if(m==="svg"&&(o=!0),r!=null){for(a=0;a<r.length;a++)if((u=r[a])&&"setAttribute"in u==!!m&&(m?u.localName===m:u.nodeType===3)){e=u,r[a]=null;break}}if(e==null){if(m===null)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,p.is&&p),r=null,c=!1}if(m===null)f===p||c&&e.data===p||(e.data=p);else{if(r=r&&j.call(e.childNodes),f=t.props||P,!c&&r!=null)for(f={},a=0;a<e.attributes.length;a++)f[(u=e.attributes[a]).name]=u.value;for(a in f)u=f[a],a=="children"||(a=="dangerouslySetInnerHTML"?s=u:a==="key"||a in p||H(e,a,null,u,o));for(a in p)u=p[a],a=="children"?v=u:a=="dangerouslySetInnerHTML"?h=u:a=="value"?S=u:a=="checked"?y=u:a==="key"||c&&typeof u!="function"||f[a]===u||H(e,a,u,f[a],o);if(h)c||s&&(h.__html===s.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),n.__k=[];else if(s&&(e.innerHTML=""),ke(e,ne(v)?v:[v],n,t,i,o&&m!=="foreignObject",r,l,r?r[0]:t.__k&&R(t,0),c,d),r!=null)for(a=r.length;a--;)r[a]!=null&&Se(r[a]);c||(a="value",S!==void 0&&(S!==e[a]||m==="progress"&&!S||m==="option"&&S!==f[a])&&H(e,a,S,f[a],!1),a="checked",y!==void 0&&y!==e[a]&&H(e,a,y,f[a],!1))}return e}function oe(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(i){g.__e(i,t)}}function J(e,n,t){var i,o;if(g.unmount&&g.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||oe(i,null,n)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){g.__e(r,n)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&J(i[o],n,t||typeof e.type!="function");t||e.__e==null||Se(e.__e),e.__=e.__e=e.__d=void 0}function He(e,n,t){return this.constructor(e,t)}function Be(e,n,t){var i,o,r,l;g.__&&g.__(e,n),o=(i=typeof t=="function")?null:t&&t.__k||n.__k,r=[],l=[],te(n,e=(!i&&t||n).__k=$e(C,null,[e]),o||P,P,n.ownerSVGElement!==void 0,!i&&t?[t]:o?null:n.firstChild?j.call(n.childNodes):null,r,!i&&t?t:o?o.__e:n.firstChild,i,l),e.__d=void 0,Y(r,e,l)}j=ee.slice,g={__e:function(e,n,t,i){for(var o,r,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,i||{}),l=o.__d),l)return o.__E=o}catch(c){e=c}throw e}},ye=0,U.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},t),this.props)),e&&A(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),_e(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},U.prototype.render=C,L=[],be=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(e,n){return e.__v.__b-n.__v.__b},M.__r=0;var G,k,z,de,X=0,Ee=[],q=[],I=g,ue=I.__b,fe=I.__r,he=I.diffed,pe=I.__c,me=I.unmount,ve=I.__;function Ce(e,n){I.__h&&I.__h(k,e,X||n),X=0;var t=k.__H||(k.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:q}),t.__[e]}function N(e){return X=1,Ue(we,e)}function Ue(e,n,t){var i=Ce(G++,2);if(i.t=e,!i.__c&&(i.__=[t?t(n):we(void 0,n),function(c){var d=i.__N?i.__N[0]:i.__[0],a=i.t(d,c);d!==a&&(i.__N=[a,i.__[1]],i.__c.setState({}))}],i.__c=k,!k.u)){var o=function(c,d,a){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(v){return!!v.__c});if(h.every(function(v){return!v.__N}))return!r||r.call(this,c,d,a);var s=!1;return h.forEach(function(v){if(v.__N){var u=v.__[0];v.__=v.__N,v.__N=void 0,u!==v.__[0]&&(s=!0)}}),!(!s&&i.__c.props===c)&&(!r||r.call(this,c,d,a))};k.u=!0;var r=k.shouldComponentUpdate,l=k.componentWillUpdate;k.componentWillUpdate=function(c,d,a){if(this.__e){var h=r;r=void 0,o(c,d,a),r=h}l&&l.call(this,c,d,a)},k.shouldComponentUpdate=o}return i.__N||i.__}function w(e,n){var t=Ce(G++,3);!I.__s&&Me(t.__H,n)&&(t.__=e,t.i=n,k.__H.__h.push(t))}function qe(){for(var e;e=Ee.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(Z),e.__H.__h=[]}catch(n){e.__H.__h=[],I.__e(n,e.__v)}}I.__b=function(e){k=null,ue&&ue(e)},I.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),ve&&ve(e,n)},I.__r=function(e){fe&&fe(e),G=0;var n=(k=e.__c).__H;n&&(z===k?(n.__h=[],k.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=q,t.__N=t.i=void 0})):(n.__h.forEach(Q),n.__h.forEach(Z),n.__h=[],G=0)),z=k},I.diffed=function(e){he&&he(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Ee.push(n)!==1&&de===I.requestAnimationFrame||((de=I.requestAnimationFrame)||Qe)(qe)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==q&&(t.__=t.__V),t.i=void 0,t.__V=q})),z=k=null},I.__c=function(e,n){n.some(function(t){try{t.__h.forEach(Q),t.__h=t.__h.filter(function(i){return!i.__||Z(i)})}catch(i){n.some(function(o){o.__h&&(o.__h=[])}),n=[],I.__e(i,t.__v)}}),pe&&pe(e,n)},I.unmount=function(e){me&&me(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Q(i)}catch(o){n=o}}),t.__H=void 0,n&&I.__e(n,t.__v))};var ge=typeof requestAnimationFrame=="function";function Qe(e){var n,t=function(){clearTimeout(i),ge&&cancelAnimationFrame(n),setTimeout(e)},i=setTimeout(t,100);ge&&(n=requestAnimationFrame(t))}function Q(e){var n=k,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),k=n}function Z(e){var n=k;e.__c=e.__(),k=n}function Me(e,n){return!e||e.length!==n.length||n.some(function(t,i){return t!==e[i]})}function we(e,n){return typeof n=="function"?n(e):n}var Ge=0;function _(e,n,t,i,o,r){var l,c,d={};for(c in n)c=="ref"?l=n[c]:d[c]=n[c];var a={type:e,props:d,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ge,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(l=e.defaultProps))for(c in l)d[c]===void 0&&(d[c]=l[c]);return g.vnode&&g.vnode(a),a}function Ae(e){return _("button",{className:"btn",onClick:()=>e.onClick(),children:"← Вернуться к списку сессий"})}function je(e){const[n,t]=N(!1),[i,o]=N([]),[r,l]=N(!1),[c,d]=N(""),[a,h]=N(null);w(()=>{r&&y()},[r]),w(()=>{s()},[e.form]);const s=()=>{const{name:f,image:p,qrAmount:m,...b}=e.form;f&&d(f),p&&h(p),b&&o(Array.from(Object.keys(b)).map(T=>({key:T,value:b[T]})))},v=()=>{const f=document.querySelector("#new_field");S("",f.value),l(!0),t(!1)},u=f=>{const p={image:f};e.onDescriptionChanged(p)},S=(f,p)=>{const m={};m[p]=f,e.onDescriptionChanged(m)},y=()=>{if(!(i!=null&&i.length))return;const f=i[i.length-1].key,p=document.getElementById(f);p&&p.focus()};return _("div",{className:"product-description",children:[_(ze,{image:a,onImageChanged:u}),_("section",{className:"product-description--fields",children:[_("h2",{children:"Заполните информацию о продукте:"}),_(D,{label:"Название",value:c,placeholder:"Введите название сессии",onInput:f=>e.onDescriptionChanged({name:f})}),i.map((f,p)=>_("section",{className:"d-flex align-center w-100",children:[_(D,{id:f.key,label:f.key,value:f.value,onInput:m=>S(m,f.key)},p),_("button",{className:"btn btn-danger ms-2",onClick:()=>e.onRemoveField(f.key),children:"Удалить"})]})),!n&&_("button",{className:"btn w-100",onClick:()=>t(!0),children:"+ Добавить поле"}),n&&_("div",{className:"product-description--new-field",children:[_(D,{id:"new_field",label:"Название нового поля",placeholder:"Введите название нового поля"}),_("button",{className:"btn ms-2",onClick:v,children:"Добавить"}),_("button",{className:"btn btn-danger ms-2",onClick:()=>t(!1),children:"Отмена"})]})]})]})}function We({form:e,onAmountChange:n}){return _(C,{children:_("div",{className:"d-flex justify-center",children:_("section",{children:[_("h2",{children:"Сколько нужно сгенерировать QR-кодов?:"}),_(D,{type:"number",label:"Количество QR-кодов",value:e.qrAmount,onInput:t=>n({qrAmount:t})})]})})})}const Ve=10*1024*1024;function ze({image:e,onImageChanged:n}){const[t,i]=N(!1),[o,r]=N(null),[l,c]=N(!1);w(()=>{e&&S(e)},[e]);const d=()=>{i(!0)},a=()=>{i(!1)},h=m=>{m.preventDefault()},s=m=>{m.preventDefault(),i(!1);const b=m.dataTransfer.files[0];S(b)},v=()=>{document.querySelector("#imgInput").click()},u=m=>{const b=m.target.files[0];S(b)},S=m=>{m.size>=Ve||(y(m),n(m))},y=m=>{const b=new FileReader;b.onloadend=()=>{r(b.result)},b.readAsDataURL(m)};return _("div",{children:_("form",{className:"upload-form",onDragEnter:d,onDragLeave:a,onDragOver:h,onDrop:s,onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:v,style:{borderStyle:t?"dashed":"solid"},children:[o&&_("img",{className:`uploaded-img ${l||t?"uploaded-img__hover":""}`,src:o,alt:"Preview"}),(!o||l||t)&&_("div",{className:"support-text",children:t?_("span",{children:"Отпустите изображение здесь ..."}):_("span",{children:["Перетащите изображение или кликните здесь для загрузки",_("br",{}),_("p",{className:"mt-2 text-danger",children:"Изображения больше 10MB игнорируются!"})]})}),_("input",{id:"imgInput",type:"file",onChange:u,style:{display:"none"},accept:"image/*"})]})})}function D({value:e,type:n,label:t,placeholder:i,id:o,onInput:r,readonly:l}){return _(C,{children:_("div",{className:"input-wrapper",children:[t&&_("div",{className:"input-label",children:t}),_("input",{id:o,className:"input-element",type:n||"text",value:e,placeholder:i,readOnly:l||!1,onInput:c=>{var d;return r&&r((d=c.target)==null?void 0:d.value)}})]})})}const Ke=({children:e,isActive:n})=>_("div",{className:`step ${n?"active":""}`,children:n&&_("div",{className:"step-content",children:e})}),Ye=e=>{const[n,t]=N(e.activeStep);w(()=>{t(e.activeStep)},[e.activeStep]);const i=3,o=()=>{n<i&&t(n+1)},r=()=>{n>1&&t(n-1)},l=c=>{t(c)};return _(C,{children:[_("div",{className:"stepper-header",children:e.steps.map(c=>_("div",{className:`step-header ${n===c.order?"active":""}`,onClick:()=>l(c.order),children:[_("span",{className:"step-number",children:c.order}),_("span",{className:"step-title",children:c.title})]}))}),_("div",{className:"stepper-container",children:e.steps.map(c=>_(Ke,{isActive:n===c.order,children:[_("section",{className:"stepper-content",children:c.content}),_("div",{className:"step-actions",children:[c.order>1&&_("button",{className:"btn btn-danger",onClick:r,children:"Назад"}),c.order<e.steps.length&&_("button",{className:"btn ms-2",onClick:o,children:"Далее"}),c.order===e.steps.length&&_("button",{className:"btn ms-2",onClick:e.onConfirm,children:"Сгенерировать"})]})]},c.order))})]})};function Te(e){return _(C,{children:_("div",{className:"loader-outlet",children:[_("div",{className:"dynamic-indicator"}),_("div",{className:"loader-text",children:"Подождите, идет загрузка..."})]})})}function Je(e){return _("div",{className:"d-flex w-100 h-100 column align-center justify-center",children:[_("div",{children:"При выполнении операции возникла ошибка."}),_("div",{children:"Попробуйте еще раз позже."}),_("button",{className:"btn",onClick:()=>e.onRetry(),children:"Повторить попытку"})]})}function ie(e){const[n,t]=N([]),i=o=>{const r=o.split(";").map(l=>l.trim().split(": ")).filter(l=>l.length===2);t(r)};return w(()=>{i(e.sessionInfo.desc)},[e]),_("section",{class:"session-info",children:[_("div",{class:"session-info--img",children:_("img",{src:e.sessionInfo.imageURL?e.sessionInfo.imageURL:window.location.origin+"/default-product.jpg"})}),_("div",{class:"session-info--inner",children:[_("h2",{children:"Информация о продукте:"}),_(D,{label:"Название",placeholder:"Название сессии",value:e.sessionInfo.name,type:"text",id:"session-name",readonly:!0}),n.map(([o,r],l)=>_("section",{className:"d-flex align-center w-100",children:_(D,{label:o,value:r,readonly:!0},l)}))]})]})}function Xe({form:e}){const[n,t]=N(null);w(()=>{i(e.image)},[e.image]);const i=o=>{if(!o)return;const r=new FileReader;r.onloadend=()=>{t(r.result)},r.readAsDataURL(o)};return _("section",{className:"d-flex column align-center justify-center",children:[_("h1",{children:["Проверьте правильность данных для сессии ",e.name||"",":"]}),n&&_(ie,{sessionInfo:{...e,imageURL:n}}),_("div",{children:[_("span",{className:"bold",children:"Количество qr-кодов:"})," ",e.qrAmount]})]})}class Ze{constructor(){O(this,"DOMAIN","http://45.77.60.247");O(this,"PORT","8081");O(this,"API_BASE_URL",`${this.DOMAIN}:${this.PORT}`);O(this,"CLIENT_ID",location.pathname.replace("/",""))}async generateSession(n){const t=`/api/v1/clients/${this.CLIENT_ID}/createSession`,i=this.API_BASE_URL+t,o=new FormData;return Object.entries(n).forEach(([r,l])=>{o.append(r,l)}),fetch(i,{method:"POST",body:o}).then(r=>r.json())}async getSessionInfo(n){const t=`/api/v1/clients/${this.CLIENT_ID}/getSessions/${n}`,i=this.API_BASE_URL+t;return fetch(i,{method:"GET"}).then(o=>o.json())}async getSessions(){const n=`/api/v1/clients/${this.CLIENT_ID}/getSessions`,t=this.API_BASE_URL+n;return fetch(t,{method:"GET"}).then(i=>i.json())}async checkQR(n){const t=`/api/v1/checkQR/${n}`,i=this.API_BASE_URL+t;return fetch(i,{method:"GET"}).then(o=>o.json())}}const W=new Ze;function en(e){const[n,t]=N({}),[i,o]=N(!1),[r,l]=N(1),c=[{order:1,title:"Описание Товара",content:_(je,{form:n,onDescriptionChanged:s=>h(s),onRemoveField:s=>handleOnRemoveFiled(s)})},{order:2,title:"Количество QR-кодов",content:_(We,{form:n,onAmountChange:s=>h(s)})},{order:3,title:"Генерация QR-кодов",content:_(Xe,{form:n})}],d=async()=>{try{const s=await W.generateSession(n);e.onSessionCreated(s)}catch(s){console.error("Error while upload info: ",s),o(!0)}},a=()=>{l(1),o(!1)},h=s=>{t({...n,...s})};return _(C,{children:[_(Ae,{onClick:()=>e.onBackToTable()}),i?_(Je,{onRetry:()=>a()}):_(Ye,{steps:c,activeStep:r,onConfirm:d})]})}function nn(e){const[n,t]=N(null),[i,o]=N(!1),[r,l]=N([]),[c,d]=N(50);w(()=>{a(e.sessionId)},[e.sessionId]);const a=async y=>{o(!0);try{const f=await W.getSessionInfo(y);t(f),h(f)}catch(f){console.error(f)}o(!1)},h=y=>{const f=y.qrs.map(p=>y.clientDomain+"/qr-check/?qr_param="+p);l(f)},s=y=>{d(y)},v=async()=>{o(!0);const y=async(p,m)=>new Promise(b=>{setTimeout(()=>{new QRCode(document.getElementById("code-"+m),{text:p,width:c,height:c,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H}),b()},0)}),f=5;for(let p=0;p<r.length;p+=f){const m=[];for(let b=p;b<Math.min(p+f,r.length);b++)m.push(y(r[b],b));await Promise.all(m)}o(!1),window.print()};return _(C,{children:[i||!n?(()=>_("div",{className:"h-100 d-flex align-center",children:_(Te,{})}))():(()=>_("section",{children:[_("div",{className:"d-flex justify-between",children:[_(Ae,{onClick:()=>e.onBackToTable()}),_("div",{class:"d-flex",children:[_("div",{class:"qrs-action--size",children:_(D,{label:"Ширина (px)",placeholder:"мин 50",value:c,type:"number",id:"session-name",onInput:y=>s(y)})}),_("button",{className:"qrs-action--print btn",onClick:v,children:["🖨 ",_("span",{className:"ms-2",children:"Распечатать QR-коды"})]})]})]}),_(ie,{sessionInfo:n})]}))(),_("section",{id:"printableArea",children:r.map((y,f)=>_("div",{id:"code-"+f},f))})]})}function tn(e){var i;const n=o=>{e.onOpenInfo(o)},t=()=>{e.onGenerateNewSessionClick()};return _(C,{children:[_("button",{className:"btn",onClick:()=>t(),children:"+ Сгенерировать QR для продукта"}),_("table",{className:"table",children:[_("thead",{children:_("tr",{children:[_("th",{children:"№"}),_("th",{children:"Название"}),_("th",{children:"Дата и время"}),_("th",{children:"Количество QR кодов"})]})}),_("tbody",{children:((i=e.sessionData)==null?void 0:i.length)&&e.sessionData.map(o=>_("tr",{onClick:()=>n(o.id),children:[_("td",{children:o.id}),_("td",{children:o.name}),_("td",{children:new Date(o.created).toLocaleString()}),_("td",{children:o.amount})]},o.id))})]})]})}function on(){const[e,n]=N(null),[t,i]=N(!1),o=async()=>{const r=window.location.pathname,l=r.lastIndexOf("/"),c=r.substring(l+1);i(!0);try{const d=await W.checkQR(c);n(d)}catch(d){console.error(d)}i(!1)};return w(()=>{o()},[]),_(C,{children:t||!e?_(Te,{}):_("div",{children:[_(ie,{sessionInfo:e.sessionDTO}),_("section",{children:e.dates.length===0?_("p",{class:"first-check",children:"Поздравляем с покупкой. У вас оригинальньій товар!"}):_("div",{class:"multi-check",children:[_("div",{class:"multi-check--text",children:[_("p",{class:"multi-check--text-primary",children:["Товар уже проверялся ",e.dates.length,"-раз(a)."]}),_("p",{children:"Если это были не вы - возможно у вас подделка. Обратитесь к продавцу или напишите нашим консультантам."})]}),_("table",{className:"table",children:[_("thead",{children:_("tr",{children:_("th",{children:"Дата проверок"})})}),_("tbody",{children:e.dates.slice(-10).map((r,l)=>_("tr",{children:_("td",{children:new Date(r).toLocaleString()})}))})]})]})})]})})}function rn(){const e={SESSION_TABLE:"session-table",SESSION_INFO:"session-info",GENERATE_SESSION:"generate-session",CHECK_QR:"check-qr"},[n,t]=N([]),[i,o]=N(e.SESSION_TABLE),[r,l]=N(null),c={[e.SESSION_TABLE]:_(tn,{sessionData:n,onOpenInfo:s=>d(s),onGenerateNewSessionClick:()=>h()}),[e.SESSION_INFO]:_(nn,{sessionId:r,onBackToTable:()=>a()}),[e.GENERATE_SESSION]:_(en,{onBackToTable:()=>a(),onSessionCreated:s=>d(s.id)}),[e.CHECK_QR]:_(on,{})},d=s=>{l(s),o(e.SESSION_INFO)},a=()=>{o(e.SESSION_TABLE)},h=()=>{o(e.GENERATE_SESSION)};return w(()=>{window.location.pathname.includes("/qr-check")?o(e.CHECK_QR):W.getSessions().then(s=>{t(s)}).catch(s=>{console.error("Error fetching sessions:",s)})},[]),_("section",{className:"wrapper",children:c[i]})}Be(_(rn,{}),document.getElementById("app"));
