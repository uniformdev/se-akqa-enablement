var pt=Object.create;var $e=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var gt=Object.getOwnPropertyNames;var mt=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty;var Ne=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var wt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of gt(t))!yt.call(e,r)&&r!==n&&$e(e,r,{get:()=>t[r],enumerable:!(i=vt(t,r))||i.enumerable});return e};var Q=(e,t,n)=>(n=e!=null?pt(mt(e)):{},wt(t||!e||!e.__esModule?$e(n,"default",{value:e,enumerable:!0}):n,e));var L=Ne((Tn,Ie)=>{"use strict";Ie.exports=bt;function M(e){return e instanceof Buffer?Buffer.from(e):new e.constructor(e.buffer.slice(),e.byteOffset,e.length)}function bt(e){if(e=e||{},e.circles)return Dt(e);return e.proto?i:n;function t(r,s){for(var a=Object.keys(r),o=new Array(a.length),u=0;u<a.length;u++){var l=a[u],f=r[l];typeof f!="object"||f===null?o[l]=f:f instanceof Date?o[l]=new Date(f):ArrayBuffer.isView(f)?o[l]=M(f):o[l]=s(f)}return o}function n(r){if(typeof r!="object"||r===null)return r;if(r instanceof Date)return new Date(r);if(Array.isArray(r))return t(r,n);if(r instanceof Map)return new Map(t(Array.from(r),n));if(r instanceof Set)return new Set(t(Array.from(r),n));var s={};for(var a in r)if(Object.hasOwnProperty.call(r,a)!==!1){var o=r[a];typeof o!="object"||o===null?s[a]=o:o instanceof Date?s[a]=new Date(o):o instanceof Map?s[a]=new Map(t(Array.from(o),n)):o instanceof Set?s[a]=new Set(t(Array.from(o),n)):ArrayBuffer.isView(o)?s[a]=M(o):s[a]=n(o)}return s}function i(r){if(typeof r!="object"||r===null)return r;if(r instanceof Date)return new Date(r);if(Array.isArray(r))return t(r,i);if(r instanceof Map)return new Map(t(Array.from(r),i));if(r instanceof Set)return new Set(t(Array.from(r),i));var s={};for(var a in r){var o=r[a];typeof o!="object"||o===null?s[a]=o:o instanceof Date?s[a]=new Date(o):o instanceof Map?s[a]=new Map(t(Array.from(o),i)):o instanceof Set?s[a]=new Set(t(Array.from(o),i)):ArrayBuffer.isView(o)?s[a]=M(o):s[a]=i(o)}return s}}function Dt(e){var t=[],n=[];return e.proto?s:r;function i(a,o){for(var u=Object.keys(a),l=new Array(u.length),f=0;f<u.length;f++){var d=u[f],h=a[d];if(typeof h!="object"||h===null)l[d]=h;else if(h instanceof Date)l[d]=new Date(h);else if(ArrayBuffer.isView(h))l[d]=M(h);else{var p=t.indexOf(h);p!==-1?l[d]=n[p]:l[d]=o(h)}}return l}function r(a){if(typeof a!="object"||a===null)return a;if(a instanceof Date)return new Date(a);if(Array.isArray(a))return i(a,r);if(a instanceof Map)return new Map(i(Array.from(a),r));if(a instanceof Set)return new Set(i(Array.from(a),r));var o={};t.push(a),n.push(o);for(var u in a)if(Object.hasOwnProperty.call(a,u)!==!1){var l=a[u];if(typeof l!="object"||l===null)o[u]=l;else if(l instanceof Date)o[u]=new Date(l);else if(l instanceof Map)o[u]=new Map(i(Array.from(l),r));else if(l instanceof Set)o[u]=new Set(i(Array.from(l),r));else if(ArrayBuffer.isView(l))o[u]=M(l);else{var f=t.indexOf(l);f!==-1?o[u]=n[f]:o[u]=r(l)}}return t.pop(),n.pop(),o}function s(a){if(typeof a!="object"||a===null)return a;if(a instanceof Date)return new Date(a);if(Array.isArray(a))return i(a,s);if(a instanceof Map)return new Map(i(Array.from(a),s));if(a instanceof Set)return new Set(i(Array.from(a),s));var o={};t.push(a),n.push(o);for(var u in a){var l=a[u];if(typeof l!="object"||l===null)o[u]=l;else if(l instanceof Date)o[u]=new Date(l);else if(l instanceof Map)o[u]=new Map(i(Array.from(l),s));else if(l instanceof Set)o[u]=new Set(i(Array.from(l),s));else if(ArrayBuffer.isView(l))o[u]=M(l);else{var f=t.indexOf(l);f!==-1?o[u]=n[f]:o[u]=s(l)}}return t.pop(),n.pop(),o}}});var Oe=Ne(Ae=>{"use strict";Ae.parse=Lt;Ae.serialize=en;var Zt=Object.prototype.toString,pe=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Lt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var n={},i=t||{},r=i.decode||tn,s=0;s<e.length;){var a=e.indexOf("=",s);if(a===-1)break;var o=e.indexOf(";",s);if(o===-1)o=e.length;else if(o<a){s=e.lastIndexOf(";",a-1)+1;continue}var u=e.slice(s,a).trim();if(n[u]===void 0){var l=e.slice(a+1,o).trim();l.charCodeAt(0)===34&&(l=l.slice(1,-1)),n[u]=sn(l,r)}s=o+1}return n}function en(e,t,n){var i=n||{},r=i.encode||nn;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!pe.test(e))throw new TypeError("argument name is invalid");var s=r(t);if(s&&!pe.test(s))throw new TypeError("argument val is invalid");var a=e+"="+s;if(i.maxAge!=null){var o=i.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(o)}if(i.domain){if(!pe.test(i.domain))throw new TypeError("option domain is invalid");a+="; Domain="+i.domain}if(i.path){if(!pe.test(i.path))throw new TypeError("option path is invalid");a+="; Path="+i.path}if(i.expires){var u=i.expires;if(!rn(u)||isNaN(u.valueOf()))throw new TypeError("option expires is invalid");a+="; Expires="+u.toUTCString()}if(i.httpOnly&&(a+="; HttpOnly"),i.secure&&(a+="; Secure"),i.priority){var l=typeof i.priority=="string"?i.priority.toLowerCase():i.priority;switch(l){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(i.sameSite){var f=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(f){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a}function tn(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function nn(e){return encodeURIComponent(e)}function rn(e){return Zt.call(e)==="[object Date]"||e instanceof Date}function sn(e,t){try{return t(e)}catch(n){return e}}});var Pe=Object.prototype.hasOwnProperty;function D(e,t){var n,i;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((i=e.length)===t.length)for(;i--&&D(e[i],t[i]););return i===-1}if(!n||typeof e=="object"){i=0;for(n in e)if(Pe.call(e,n)&&++i&&!Pe.call(t,n)||!(n in t)||!D(e[n],t[n]))return!1;return Object.keys(t).length===i}}return e!==e&&t!==t}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var St={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ve(e,t){function n(r,s,a){if(typeof document!="undefined"){a=X({},t,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var u in a)!a[u]||(o+="; "+u,a[u]!==!0&&(o+="="+a[u].split(";")[0]));return document.cookie=r+"="+e.write(s,r)+o}}function i(r){if(!(typeof document=="undefined"||arguments.length&&!r)){for(var s=document.cookie?document.cookie.split("; "):[],a={},o=0;o<s.length;o++){var u=s[o].split("="),l=u.slice(1).join("=");try{var f=decodeURIComponent(u[0]);if(a[f]=e.read(l,f),r===f)break}catch(d){}}return r?a[r]:a}}return Object.create({set:n,get:i,remove:function(r,s){n(r,"",X({},s,{expires:-1}))},withAttributes:function(r){return ve(this.converter,X({},this.attributes,r))},withConverter:function(r){return ve(X({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var _t=ve(St,{path:"/"}),Z=_t;function z(e){return{all:e=e||new Map,on:function(t,n){var i=e.get(t);i?i.push(n):e.set(t,[n])},off:function(t,n){var i=e.get(t);i&&(n?i.splice(i.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var i=e.get(t);i&&i.slice().map(function(r){r(n)}),(i=e.get("*"))&&i.slice().map(function(r){r(t,n)})}}}var nt=Q(L(),1);var at=Q(L(),1),ot=Q(L(),1),Ct=Object.defineProperty,Et=(e,t,n)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t,n)=>(Et(e,typeof t!="symbol"?t+"":t,n),n),Ee=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},c=(e,t,n)=>(Ee(e,t,"read from private field"),n?n.call(e):t.get(e)),v=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},y=(e,t,n,i)=>(Ee(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),w=(e,t,n)=>(Ee(e,t,"access private method"),n);function xt(e,t){let n={...e};for(let i in t){let r=qe(e,i,t,new Set([i]));r!==0&&(n[i]=r)}return n}function qe(e,t,n,i){var r;let s=0;for(let a of n[t].inputs){let o=(r=e[a.dim])!=null?r:0;if(!o&&n[a.dim]){if(i.has(a.dim))continue;let l=new Set(i);l.add(a.dim),o=qe(e,a.dim,n,l)}if(o!==0)if(a.sign==="c"){s=0;break}else a.sign==="-"?s-=o:s+=o}return s}var We="_",ee,te,kt=class{constructor(e,t,n){v(this,ee,void 0),v(this,te,void 0),N(this,"signal"),this.signal=e,y(this,ee,t),y(this,te,n)}computeSignal(e,t){if(e.scores[this.signal.id]>=this.signal.cap&&this.signal.dur!=="t")return;let i=c(this,ee).evaluate(e,this.signal.crit,t,this.signal,c(this,te)),r=this.signal.dur==="s"||this.signal.dur==="t"?"modscoreS":"modscore";if(!!i.changed){if(i.result)t.push({type:r,data:{dimension:this.signal.id,delta:this.signal.str}});else if(this.signal.dur==="t"){let s=e.visitor.sessionScores[this.signal.id];s&&t.push({type:r,data:{dimension:this.signal.id,delta:-s}})}}}};ee=new WeakMap;te=new WeakMap;var A,ne,I,Tt=class{constructor({manifest:e,evaluator:t=new He({}),onLogMessage:n=()=>{}}){N(this,"data"),v(this,A,void 0),v(this,ne,void 0),v(this,I,void 0);var i,r,s;y(this,A,(i=e.project)!=null?i:{}),this.data=e,y(this,ne,Object.entries((s=(r=c(this,A).pz)==null?void 0:r.sig)!=null?s:[]).map(([a,o])=>new kt({...o,id:a},t,n))),y(this,I,n)}rollForControlGroup(){var e,t;return Math.random()<((t=(e=c(this,A).pz)==null?void 0:e.control)!=null?t:0)}getTest(e){var t;return(t=c(this,A).test)==null?void 0:t[e]}computeSignals(e){let t=[];c(this,I).call(this,["debug",200,"GROUP"]);try{c(this,ne).forEach(n=>{c(this,I).call(this,["debug",201,"GROUP",n.signal]);try{n.computeSignal(e,t)}finally{c(this,I).call(this,["debug",201,"ENDGROUP"])}})}finally{c(this,I).call(this,["debug",200,"ENDGROUP"])}return t}computeAggregateDimensions(e){var t,n;return xt(e,(n=(t=c(this,A).pz)==null?void 0:t.agg)!=null?n:{})}getDimensionByKey(e){var t,n,i,r;let s=e.indexOf(We);return s<=0?(n=(t=c(this,A).pz)==null?void 0:t.sig)==null?void 0:n[e]:(r=(i=c(this,A).pz)==null?void 0:i.enr)==null?void 0:r[e.substring(0,s)]}};A=new WeakMap;ne=new WeakMap;I=new WeakMap;function Y(e,t){var n,i,r,s,a,o;let u=(n=t==null?void 0:t.op)!=null?n:"=";if(t.op==="*")return e!==null&&typeof e!="undefined";if(t.op==="!*")return e===null||typeof e=="undefined";if(!("rhs"in t))throw new Error(`Match expression is required for match type ${u}`);let l=(i=t.cs)!=null?i:!1,f=(l?e!=null?e:"":Ve(e)).toString(),d=(l?t.rhs:Ve(t.rhs)).toString();switch(u){case"=":return f===d;case"!=":return f!==d;case"~":return(r=f.includes(d))!=null?r:!1;case"!~":return!((s=f.includes(d))==null||s);case"//":return new RegExp(t.rhs.toString(),l?"":"i").test((a=e==null?void 0:e.toString())!=null?a:"");case"!//":return!new RegExp(t.rhs.toString(),l?"":"i").test((o=e==null?void 0:e.toString())!=null?o:"");default:throw new Error(`Unknown match type ${u}.`)}}function he(e,t){return`'${("cs"in t?t.cs:!1)?e:e==null?void 0:e.toString().toUpperCase()}' ${Be(t)}`}function Be(e){return"rhs"in e?`${e.op} '${e.cs?e.rhs:e.rhs.toString().toUpperCase()}'`:`${e.op==="*"?"exists":"does not exist"}`}function Ve(e){var t,n;return(n=(t=e==null?void 0:e.toString())==null?void 0:t.toUpperCase())!=null?n:""}var At=({update:e,criteria:t,onLogMessage:n})=>{var i,r;if(t.type!=="CK")return{result:!1,changed:!1};let s=!D(je(e.state.cookies),je((i=e.previousState)==null?void 0:i.cookies)),a=(r=e.state.cookies)==null?void 0:r[t.cookieName],u={result:Y(a,t.match),changed:s};return n==null||n(["debug",203,{criteria:t,result:u,explanation:he(a,t.match)}]),u};function je(e){if(!e)return;if(!e.ufvd)return e;let{ufvd:t,...n}=e;return n}var Ot=({update:e,criteria:t,onLogMessage:n})=>{var i,r,s;if(t.type!=="PV")return{result:!1,changed:!1};let a=(i=e.state.url)==null?void 0:i.pathname,o=!e.previousState||(a==null?void 0:a.toString())!==((s=(r=e.previousState.url)==null?void 0:r.pathname)==null?void 0:s.toString()),l={result:Y(a,t.path),changed:o};return n==null||n(["debug",203,{criteria:t,result:l,explanation:he(a,t.path)}]),l},Ut=({update:e,criteria:t,onLogMessage:n})=>{var i,r,s;if(t.type!=="EVT")return{result:!1,changed:!1};let a=(r=(i=e.state.events)==null?void 0:i.some(u=>Y(u.event,t.event)))!=null?r:!1,o={result:a,changed:a};return n==null||n(["debug",203,{criteria:t,result:o,explanation:`'${(s=e.state.events)==null?void 0:s.join("', '")}' ${Be(t.event)}`}]),o};function Qe(e,t){return`${e}${We}${t}`}function Rt(e,t){var n;if(typeof e=="undefined"||e===null)return!1;let i=Number(e);if(isNaN(i))return!1;switch((n=t==null?void 0:t.op)!=null?n:"="){case"=":return i===t.rhs;case"!=":return i!==t.rhs;case">":return i>t.rhs;case"<":return i<t.rhs;default:return console.warn(`Unknown match type ${t.op} is false.`),!1}}function $t(e,t){return`${e} ${Nt(t)}`}function Nt(e){return`${e.op} ${e.rhs}`}var ge=Qe("$pvc","v"),Ke=({update:e,criteria:t,commands:n,onLogMessage:i})=>{var r,s;if(t.type!=="PVC")return{result:!1,changed:!1};let a=Boolean(e.state.url&&(!e.previousState||((r=e.state.url)==null?void 0:r.toString())!==((s=e.previousState.url)==null?void 0:s.toString()))),u=(e.visitor.sessionScores[ge]||0)+1,l={result:!1,changed:a},f=n.some(d=>d.type==="modscoreS"&&d.data.dimension===ge);return a&&!f&&n.push({type:"modscoreS",data:{dimension:ge,delta:1}}),Rt(u,t.match)&&(l.result=!0),i==null||i(["debug",203,{criteria:t,result:l,explanation:$t(u,t.match)}]),l};Ke.alwaysExecute=!0;var Pt=({update:e,criteria:t,onLogMessage:n})=>{var i,r,s,a,o;if(t.type!=="QS")return{result:!1,changed:!1};let u=!e.previousState||((r=(i=e.state.url)==null?void 0:i.searchParams)==null?void 0:r.toString())!==((a=(s=e.previousState.url)==null?void 0:s.searchParams)==null?void 0:a.toString()),l=(o=e.state.url)==null?void 0:o.searchParams.get(t.queryName),d={result:Y(l,t.match),changed:u};return n==null||n(["debug",203,{criteria:t,result:d,explanation:he(l,t.match)}]),d},It=({update:e,criteria:t,signal:n,onLogMessage:i})=>{var r;if(t.type!=="QK")return{result:!1,changed:!1};if(typeof document=="undefined"&&e.scores[n.id]>0)return{result:!0,changed:!1};let s=e.visitor.quirks[t.key],a=(r=e.state.quirks)==null?void 0:r[t.key],o=a!=null?a:s,u=Boolean(a&&s!==a),f={result:Y(o,t.match),changed:u};return i==null||i(["debug",203,{criteria:t,result:f,explanation:he(o,t.match)}]),f},ie,He=class{constructor(e){v(this,ie,void 0),y(this,ie,e)}evaluate(e,t,n,i,r){let s=t.clauses.length>1;s&&(r==null||r(["debug",202,"GROUP",t]));try{let a=!(t.op==="&"||!t.op),o=null,u=!1;for(let f of t.clauses){let d;if(f.type==="G")d=this.evaluate(e,f,n,i,r);else{let h=c(this,ie)[f.type];if(o&&!h.alwaysExecute)continue;if(!h)throw new Error(`${f.type} signal criteria not registered`);d=h({update:e,criteria:f,commands:n,signal:i,onLogMessage:r})}d.changed&&(u=!0),!o&&d.result===a&&(o={result:a,changed:u})}let l=o!=null?o:{result:!a,changed:u};return s&&(r==null||r(["debug",204,l])),l}finally{s&&(r==null||r(["debug",202,"ENDGROUP"]))}}};ie=new WeakMap;function Vt(e,t,n,i){i==null||i(["info",301,"GROUP",{id:e,op:t==null?void 0:t.op}]);let r;try{t!=null&&t.crit?!t.op||t.op==="&"?r=t.crit.every(s=>Fe(s,n,i)):r=t.crit.some(s=>Fe(s,n,i)):(i==null||i(["info",302,{matched:!0,description:"default variation"}]),r=!0),i==null||i(["info",303,r])}finally{i==null||i(["info",301,"ENDGROUP"])}return r}function Fe(e,t,n){var i,r;let{op:s,l:a}=e,o=(i=t[a])!=null?i:0;if(s==="+"){let l=Math.max(...Object.values(t))===o&&o>0;return n==null||n(["info",302,{matched:l,description:`${e.l} has the highest score`}]),l}else if(s==="-"){let l=Math.min(...Object.values(t))===o&&o>0;return n==null||n(["info",302,{matched:l,description:`${e.l} has the lowest non-zero score`}]),l}let u;if(e.rDim?u=t[e.rDim]||0:u=parseInt(e.r,10),isNaN(u))return n==null||n(["info",302,{matched:!1,description:`${(r=e.rDim)!=null?r:e.r} has no score value`}]),!1;if(s===">"){let l=o>u;return q(n,l,e,o,u),l}else if(s===">="){let l=o>=u;return q(n,l,e,o,u),l}else if(s==="<"){let l=o<u;return q(n,l,e,o,u),l}else if(s==="<="){let l=o<=u;return q(n,l,e,o,u),l}else if(s==="="){let l=o===u;return q(n,l,e,o,u),l}else if(s==="!="){let l=o!==u;return q(n,l,e,o,u),l}else throw new Error(`Unknown op: ${s}`)}function q(e,t,n,i,r){e==null||e(["info",302,{matched:t,description:`${n.l}[${i}] ${n.op} ${n.rDim?`${n.rDim}[${r}]`:n.r}`}])}function jt({name:e,context:t,variations:n,take:i=1,onLogMessage:r}){var s,a,o;r==null||r(["info",300,"GROUP",{name:e,take:i}]);try{let u=(s=t.storage.data.controlGroup)!=null?s:!1,l=[],f=!1,d=t.scores;for(let h of n){if(l.length===i)break;if(!((a=h.pz)!=null&&a.crit.length)){r==null||r(["info",301,"GROUP",{id:h.id,op:(o=h.pz)==null?void 0:o.op}]),r==null||r(["info",302,{matched:!0,description:"default variation"}]),r==null||r(["info",303,!0]),r==null||r(["info",301,"ENDGROUP"]),l.push(h);continue}u||Vt(h.id,h.pz,d,r)&&(f=!0,l.push(h))}return{personalized:f,variations:l}}finally{r==null||r(["info",300,"ENDGROUP"])}}var Ft=e=>{let{values:t,total:n,missingDistribution:i}=e.reduce((r,s)=>(s.testDistribution?r.total+=s.testDistribution:++r.missingDistribution,r.values.push(s.testDistribution),r),{values:[],total:0,missingDistribution:0});if(n>100)throw new Error(`Total distribution ${n} is over the maximum 100.`);if(n<100){let s=(100-n)/i;t.forEach((a,o)=>{typeof a=="undefined"&&(t[o]=s)})}return t},Gt=({name:e,context:t,variations:n,onLogMessage:i})=>{i==null||i(["info",400,"GROUP",e]);try{let r,s=t.getTestVariantId(e);if(s===null)return i==null||i(["error",401,e]),{result:void 0,variantAssigned:!1};if(s&&(r=n.find(a=>a.id===s),r||i==null||i(["warn",402,{missingVariant:s,variants:n.map(a=>a.id)}])),!r){let a=Ft(n),o=Math.floor(Math.random()*100),u=0;r=n.find((l,f)=>{let d=a[f];if(o>u&&o<=u+d)return l;u+=d}),r&&(i==null||i(["info",403,r.id]),t.setTestVariantId(e,r.id))}return r&&(i==null||i(["info",404,r.id])),{result:r,variantAssigned:!s}}finally{i==null||i(["info",400,"ENDGROUP"])}},zt="__UNIFORM_DATA__",V,re,K,Mt=class{constructor({initialData:e}){v(this,V,void 0),v(this,re,void 0),v(this,K,z()),N(this,"events",{on:c(this,K).on,off:c(this,K).off}),e&&(y(this,V,e),y(this,re,e))}get data(){return c(this,V)}get initialData(){return c(this,re)}updateData(e,t){return y(this,V,t),this.handleUpdateData(e,t)}async delete(e){y(this,V,void 0),await this.handleDelete(e)}signalAsyncDataUpdate(e){D(this.data,e)||(y(this,V,e),c(this,K).emit("dataUpdatedAsync",e))}getClientTransitionState(){if(typeof document=="undefined")return;let e=document.getElementById(zt);return e!=null&&e.textContent?JSON.parse(e.textContent):void 0}};V=new WeakMap;re=new WeakMap;K=new WeakMap;var Se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ge=Se.split(""),Je=new Array(123);for(let e=0;e<Se.length;e++)Je[Se.charCodeAt(e)]=e;var Ye=e=>{if(e<0)return`-${Ye(-e)}`;let t=e>>>0,n=e/4294967296>>>0,i="";for(;n>0;)i=Ge[63&t]+i,t>>>=6,t|=(63&n)<<26,n>>>=6;let r="";do r=Ge[63&t]+r,t>>>=6;while(t>0);return r+i},qt=e=>{let t=0,n=e.charAt(0)==="-"?1:0;for(let i=n;i<e.length;i++)t=t*64+Je[e.charCodeAt(i)];return n?-t:t},me=typeof document=="undefined",xe="ufvd",W,se,Xe=class extends Mt{constructor({serverCookieValue:e,cookieName:t=xe,cookieAttributes:n={sameSite:"lax"}}){super({initialData:me?Wt(e):void 0}),v(this,W,void 0),v(this,se,void 0),y(this,W,t),y(this,se,n)}handleDelete(){return me||Z.remove(c(this,W)),Promise.resolve()}async handleUpdateData(e,t){me||(t.consent?Z.set(c(this,W),Bt(t),c(this,se)):Z.remove(c(this,W)))}};W=new WeakMap;se=new WeakMap;var Ze="~",Le="!",et="-";function Wt(e){if(!e)return;let t=e.split(Ze);if(t.length>3)return;let[n,i,r]=t;return{consent:!0,sessionScores:ze(ye(i)),scores:ze(ye(r)),tests:ye(n)}}function ye(e){return e.split(Le).map(n=>n.split(et)).reduce((n,i)=>(i.length<2||(n[i[0]]=i.slice(1).join("-")),n),{})}function ze(e){return Object.entries(e).reduce((t,[n,i])=>(t[n]=qt(i),t),{})}function Bt(e){return[we(e.tests),we(Me(e.sessionScores)),we(Me(e.scores))].join(Ze)}function Me(e){return Object.entries(e).reduce((t,[n,i])=>(t[n]=Ye(i),t),{})}function we(e){return Object.entries(e).map(t=>t.join(et)).join(Le)}var Qt,Kt;Qt=new WeakSet;Kt=async function(){let e=await new Promise(t=>{setTimeout(()=>{t(void 0)},2e3)});e&&this.signalAsyncDataUpdate(e)};var tt=()=>({quirks:{},scores:{},sessionScores:{},tests:{},consent:!1,controlGroup:!1}),Ht=(0,nt.default)();function Jt(e,t,n){let i=t?Ht(t):tt();return e.forEach(r=>{var s,a;switch(r.type){case"consent":i.consent=r.data;break;case"setquirk":i.quirks[r.data.key]=r.data.value;break;case"settest":i.tests[r.data.test]=r.data.variant;break;case"modscore":if(n)break;let o=Number(r.data.delta);if(isNaN(o))throw new Error("Non-number delta received");let u=(s=i.scores[r.data.dimension])!=null?s:0;i.scores[r.data.dimension]=u+o;break;case"modscoreS":if(n)break;let l=Number(r.data.delta);if(isNaN(l))throw new Error("Non-number delta received");let f=(a=i.sessionScores[r.data.dimension])!=null?a:0;i.sessionScores[r.data.dimension]=f+l;break;case"identify":break;case"setcontrol":i.controlGroup=r.data;break;default:throw new Error("Unknown command")}}),i}var Yt=class{constructor(){N(this,"inMemoryFallback",{}),N(this,"hasLocalStorageObject",typeof localStorage!="undefined")}get(e){let t=this.inMemoryFallback[e];if(!this.hasLocalStorageObject||t)return t;try{let n=localStorage.getItem(e);return n?JSON.parse(n):void 0}catch(n){return t}}set(e,t,n){if(this.inMemoryFallback[e]=t,!(!this.hasLocalStorageObject||!n))try{localStorage.setItem(e,JSON.stringify(t))}catch(i){console.warn(i)}}delete(e,t){t||delete this.inMemoryFallback[e];try{localStorage.removeItem(e)}catch(n){}}},ce="ufvisitor",$,B,J,m,k,U,P,j,ke,it,_e,rt,fe,be,ae,De,Xt=class{constructor(e){if(v(this,k),v(this,P),v(this,ke),v(this,_e),v(this,fe),v(this,ae),v(this,$,z()),v(this,B,new Yt),v(this,J,void 0),v(this,m,void 0),N(this,"events",{on:c(this,$).on,off:c(this,$).off}),y(this,m,e),c(this,k,U)||w(this,P,j).call(this,w(this,ae,De).call(this),!0),e.transitionStore){let t=e.transitionStore.getClientTransitionState();t&&e.onServerTransitionReceived&&e.onServerTransitionReceived(t),e.transitionStore.events.on("dataUpdatedAsync",i=>{w(this,P,j).call(this,{...c(this,k,U).visitorData,...i})});let n=e.transitionStore.data;n&&w(this,P,j).call(this,{...c(this,k,U).visitorData,...n},!0)}}get data(){var e,t;let n=c(this,k,U);if(w(this,_e,rt).call(this,n)){let{sessionScores:i,...r}=n.visitorData;return w(this,P,j).call(this,{...r,sessionScores:{}}),(t=(e=c(this,m)).onLogMessage)==null||t.call(e,["info",120]),c(this,k,U).visitorData}return n.visitorData}get decayEnabled(){return!!c(this,m).decay}get options(){return c(this,m)}async updateData(e){var t,n,i,r;if(e.length===0)return;(n=(t=c(this,m)).onLogMessage)==null||n.call(t,["debug",101,e]);let s=Jt(e,this.data,(i=c(this,k,U))==null?void 0:i.visitorData.controlGroup);e.some(a=>a.type==="consent"&&!a.data)&&c(this,B).delete(ce,!0),w(this,P,j).call(this,s),await((r=c(this,m).transitionStore)==null?void 0:r.updateData(e,c(this,k,U).visitorData))}async delete(e){var t,n,i,r,s;(n=(t=c(this,m)).onLogMessage)==null||n.call(t,["info",103,"GROUP",e]);try{c(this,B).delete(ce,!1),await((i=c(this,m).transitionStore)==null?void 0:i.delete(e)),w(this,P,j).call(this,w(this,ae,De).call(this))}finally{(s=(r=c(this,m)).onLogMessage)==null||s.call(r,["info",103,"ENDGROUP"])}}};$=new WeakMap;B=new WeakMap;J=new WeakMap;m=new WeakMap;k=new WeakSet;U=function(){return c(this,B).get(ce)};P=new WeakSet;j=function(e,t=!1){var n,i,r,s,a,o,u,l,f;let d=c(this,k,U),h=Date.now();e.controlGroup?(e.scores={},e.sessionScores={}):(w(this,fe,be).call(this,e.scores),w(this,fe,be).call(this,e.sessionScores),(i=(n=c(this,m)).decay)==null||i.call(n,{now:h,lastUpd:d==null?void 0:d.updated,scores:e.scores,sessionScores:e.sessionScores,onLogMessage:c(this,m).onLogMessage}));let p=!D(d==null?void 0:d.visitorData.scores,e.scores),_=!D(d==null?void 0:d.visitorData.sessionScores,e.sessionScores),x=!D(d==null?void 0:d.visitorData.quirks,e.quirks),b=!D(d==null?void 0:d.visitorData.tests,e.tests),F={updated:h,visitorData:e};w(this,ke,it).call(this),c(this,B).set(ce,F,!!e.consent),(s=(r=c(this,m)).onLogMessage)==null||s.call(r,["debug",102,e]),t||((p||_)&&c(this,$).emit("scoresUpdated",e),x&&c(this,$).emit("quirksUpdated",e),b&&c(this,$).emit("testsUpdated",e),((a=d==null?void 0:d.visitorData)==null?void 0:a.consent)!==e.consent&&c(this,$).emit("consentUpdated",e),((o=d==null?void 0:d.visitorData)==null?void 0:o.controlGroup)!==e.controlGroup&&(c(this,$).emit("controlGroupUpdated",e),(f=(l=c(this,m)).onLogMessage)==null||f.call(l,["debug",104,(u=e.controlGroup)!=null?u:!1])))};ke=new WeakSet;it=function(){typeof document=="undefined"||!c(this,m).visitLifespan||(c(this,J)&&window.clearTimeout(c(this,J)),y(this,J,window.setTimeout(()=>{this.data},c(this,m).visitLifespan+50)))};_e=new WeakSet;rt=function(e){let t=c(this,m).visitLifespan;return t?e.updated+t<Date.now():!1};fe=new WeakSet;be=function(e){var t,n;if(!!c(this,m).manifest)for(let i in e){let r=e[i],s=c(this,m).manifest.getDimensionByKey(i);!s||r>s.cap&&((n=(t=c(this,m)).onLogMessage)==null||n.call(t,["debug",110,{dim:i,score:r,cap:s.cap}]),e[i]=s.cap)}};ae=new WeakSet;De=function(){var e,t,n;return{...tt(),consent:(e=c(this,m).defaultConsent)!=null?e:!1,controlGroup:(n=(t=c(this,m).manifest)==null?void 0:t.rollForControlGroup())!=null?n:!1}};var C,R,O,oe,g,le,Ce,H,ue,de,Te,st=class{constructor(e){v(this,le),v(this,H),v(this,de),N(this,"manifest"),v(this,C,void 0),v(this,R,{}),v(this,O,void 0),v(this,oe,{}),v(this,g,z()),N(this,"events",{on:c(this,g).on,off:c(this,g).off}),N(this,"storage");var t,n;let{manifest:i,...r}=e;y(this,O,{}),(t=e.plugins)==null||t.forEach(s=>{!s.logDrain||c(this,g).on("log",s.logDrain)}),c(this,g).emit("log",["info",1,"GROUP"]);try{this.manifest=new Tt({onLogMessage:s=>c(this,g).emit("log",s),manifest:i,evaluator:new He({CK:At,QS:Pt,QK:It,PVC:Ke,EVT:Ut,PV:Ot})}),this.storage=new Xt({...r,manifest:this.manifest,onServerTransitionReceived:s=>{y(this,C,s),s.ssv&&(y(this,R,s.ssv),c(this,g).emit("log",["debug",130,s]))},onLogMessage:s=>c(this,g).emit("log",s)}),this.storage.events.on("scoresUpdated",w(this,H,ue).bind(this)),c(this,C)||w(this,H,ue).call(this,this.storage.data),this.storage.events.on("quirksUpdated",s=>{let a=this.manifest.computeSignals({scores:c(this,R),state:c(this,O),previousState:c(this,O),visitor:this.storage.data});this.storage.updateData(a),c(this,g).emit("quirksUpdated",s.quirks),c(this,g).emit("log",["info",4,s.quirks])}),(n=e.plugins)==null||n.forEach(s=>{!s.init||s.init(this)})}finally{c(this,g).emit("log",["info",1,"ENDGROUP"])}}get scores(){return c(this,R)}get quirks(){var e,t;return(t=(e=c(this,C))==null?void 0:e.quirks)!=null?t:this.storage.data.quirks}async update(e){var t,n,i;let r=[],s={};if((t=c(this,C))!=null&&t.quirks&&(e={...e,quirks:{...c(this,C).quirks,...e.quirks||{}}}),(n=c(this,C))!=null&&n.tests){let a=Object.entries(c(this,C).tests);if(a.length>0){let o=[];a.forEach(([u,l])=>{this.storage.data.tests[u]||(o.push([u,l]),s[u]=l)}),r.push(...o.map(([u,l])=>({type:"settest",data:{test:u,variant:l}})))}}try{c(this,g).emit("log",["info",2,"GROUP",{...e,url:(i=e.url)==null?void 0:i.toString()}]),e.quirks&&r.push(...Object.entries(e.quirks).map(([a,o])=>({type:"setquirk",data:{key:a,value:o}}))),e.enrichments&&e.enrichments.forEach(a=>{let o=Qe(a.cat,a.key);this.manifest.getDimensionByKey(o)?r.push({type:"modscore",data:{dimension:o,delta:a.str}}):c(this,g).emit("log",["warn",5,a])}),r.push(...this.manifest.computeSignals({state:e,previousState:c(this,O),visitor:this.storage.data,scores:c(this,C)?w(this,de,Te).call(this,this.storage.data):c(this,R)})),y(this,O,{...c(this,O),...e}),await this.storage.updateData(r),c(this,C)&&(w(this,H,ue).call(this,this.storage.data),Object.entries(s).forEach(([a,o])=>{w(this,le,Ce).call(this,{name:a,variantId:o,variantAssigned:!0})}),y(this,C,void 0),c(this,g).emit("log",["debug",131]))}finally{c(this,g).emit("log",["info",2,"ENDGROUP"])}}getTestVariantId(e){var t,n,i,r;let s=this.manifest.getTest(e);return s?(r=(i=s.wv)!=null?i:(n=(t=c(this,C))==null?void 0:t.tests)==null?void 0:n[e])!=null?r:this.storage.data.tests[e]:(c(this,g).emit("log",["warn",401,e]),null)}setTestVariantId(e,t){this.storage.updateData([{type:"settest",data:{test:e,variant:t}}])}log(...e){c(this,g).emit("log",e)}test(e){var t,n;let i=Gt({...e,context:this,onLogMessage:r=>c(this,g).emit("log",r)});return w(this,le,Ce).call(this,{name:e.name,variantId:(n=(t=i.result)==null?void 0:t.id)!=null?n:void 0,variantAssigned:i.variantAssigned}),i}personalize(e){let t=jt({...e,context:this,onLogMessage:r=>c(this,g).emit("log",r)}),n=c(this,oe)[e.name],i={name:e.name,variantIds:t.variations.map(r=>{var s;return(s=r.id)!=null?s:"Unknown"}),control:this.storage.data.controlGroup,changed:!0};return n&&D(i.variantIds,n)&&(i.changed=!1),c(this,g).emit("personalizationResult",i),c(this,oe)[e.name]=i.variantIds,t}async forget(e){y(this,O,{}),await this.storage.delete(e)}getServerToClientTransitionState(){let e={quirks:this.storage.data.quirks,ssv:c(this,R),tests:{}},t=this.storage.data.tests;return Object.entries(t).map(([n,i])=>{var r,s,a;((a=(s=(r=this.storage.options.transitionStore)==null?void 0:r.initialData)==null?void 0:s.tests)==null?void 0:a[n])!==t[n]&&e.tests&&(e.tests[n]=i)}),e}};C=new WeakMap;R=new WeakMap;O=new WeakMap;oe=new WeakMap;g=new WeakMap;le=new WeakSet;Ce=function(e){c(this,g).emit("testResult",e)};H=new WeakSet;ue=function(e){let t=w(this,de,Te).call(this,e);!D(t,c(this,R))&&(y(this,R,t),c(this,g).emit("scoresUpdated",t),c(this,g).emit("log",["info",3,t]))};de=new WeakSet;Te=function(e){var t;let n={...e.scores};for(let i in e.sessionScores)n[i]=((t=n[i])!=null?t:0)+e.sessionScores[i];return n=this.manifest.computeAggregateDimensions(n),n};var Vn=(0,at.default)();var jn=(0,ot.default)();var lt=Q(Oe(),1),an=({manifest:e,request:t,options:n={}})=>new st({manifest:e,transitionStore:new on({request:t}),...n}),on=class extends Xe{constructor({request:e,...t}){var n,i;super({...t,serverCookieValue:e?(0,lt.parse)((n=e.headers.get("cookie"))!=null?n:"")[(i=t.cookieName)!=null?i:xe]:void 0})}},ln=91,un=93,cn=44,fn=60,dn={"&gt;":">","&lt;":"<"},hn={op:!0},Ue=e=>{e&&typeof e=="object"&&Object.keys(e).forEach(t=>{let n=e[t];if(hn[t]&&typeof n=="string"){let i=dn[n];e[t]=i||n}else typeof n=="object"?Ue(n):Array.isArray(n)&&n.forEach(i=>{Ue(i)})})},ut=(e,t)=>{let n=[ln];t.forEach((r,s)=>{s>0&&n.push(cn),n.push(...r)}),n.push(un);let i=JSON.parse(e.decode(new Uint8Array(n)));return Array.isArray(i)&&i.forEach(r=>{Ue(r)}),i},pn=({list:e,decoder:t,context:n})=>{let i,r=[],s=[];for(let h=0;h<e.fragments.length;h++){let p=e.fragments[h];p.type==="list-start"?i=p:p.type==="item-settings"?r.push(p):p.type==="item-html"&&s.push({listIndex:h})}if(r.length!==s.length)throw new Error("Item settings and HTML mismatch");if(!i)throw new Error("List settings are missing");let[a,...o]=ut(t,[i.content,...r.map(h=>h.content)]),u=a,l=n.personalize({...u,variations:o.map((h,p)=>{let _=s[p];return{...h,..._}})}),f=[],d=0;for(let h=0;h<e.fragments.length;h++){let p=e.fragments[h];if(p.type==="text")f.push(...p.content);else if(p.type==="item-html"){let _=l.variations[d];if(typeof _!="undefined"){let x=e.fragments[_.listIndex];if(!x)throw new Error("Invalid HTML index");f.push(...x.content)}++d}}return{bytes:f}},vn=({test:e,decoder:t,context:n})=>{let i,r=[],s=[];for(let h=0;h<e.fragments.length;h++){let p=e.fragments[h];p.type==="test-start"?i=p:p.type==="item-settings"?r.push(p):p.type==="item-html"&&s.push({listIndex:h})}if(r.length!==s.length)throw new Error("Item settings and HTML mismatch");if(!i)throw new Error("List settings are missing");let[a,...o]=ut(t,[i.content,...r.map(h=>h.content)]),u=a,l=n.test({...u,name:u.name,variations:o.map((h,p)=>{let _=s[p];return{id:h.id,..._}})}),f=[],d;for(let h=0;h<e.fragments.length;h++){let p=e.fragments[h];if(p.type==="text")f.push(...p.content);else if(p.type==="item-html"&&!d&&l.result){let _=e.fragments[l.result.listIndex];if(!_)throw new Error("Invalid HTML index");f.push(..._.content),d=l.result.id}}return{bytes:f,selectedId:d,testName:u.name}},gn={[110]:!0,[47]:!0,[115]:!0},mn={[101]:!0,[110]:!0,[99]:!0,[115]:!0},yn=()=>({["list-start"]:{pattern:[60,110,101,115,105,116,97,103,32,100,97,116,97,45,116,121,112,101,61,34,110,101,115,105,45,108,105,115,116,45,115,116,97,114,116,34,62],count:0},["item-settings"]:{pattern:[60,110,101,115,105,116,97,103,32,100,97,116,97,45,116,121,112,101,61,34,110,101,115,105,45,108,105,115,116,45,105,116,101,109,45,115,101,116,116,105,110,103,115,34,62],count:0},["item-html"]:{pattern:[60,110,101,115,105,116,97,103,32,100,97,116,97,45,116,121,112,101,61,34,110,101,115,105,45,108,105,115,116,45,105,116,101,109,45,104,116,109,108,34,62],count:0},["list-end"]:{pattern:[60,110,101,115,105,116,97,103,32,100,97,116,97,45,116,121,112,101,61,34,110,101,115,105,45,108,105,115,116,45,101,110,100,34,62],count:0},["end-tag"]:{pattern:[60,47,110,101,115,105,116,97,103,62],count:0},["test-start"]:{pattern:[60,110,101,115,105,116,97,103,32,100,97,116,97,45,116,121,112,101,61,34,110,101,115,105,45,116,101,115,116,45,115,116,97,114,116,34,62],count:0},["test-end"]:{pattern:[60,110,101,115,105,116,97,103,32,100,97,116,97,45,116,121,112,101,61,34,110,101,115,105,45,116,101,115,116,45,101,110,100,34,62],count:0},["page-state"]:{pattern:[60,115,99,114,105,112,116,32,105,100,61,34,95,95,85,78,73,70,79,82,77,95,68,65,84,65,95,95,34,32,116,121,112,101,61,34,97,112,112,108,105,99,97,116,105,111,110,47,106,115,111,110,34,62],count:0},["end-script-tag"]:{pattern:[60,47,115,99,114,105,112,116,62],count:0}}),wn=({writer:e})=>{let t=!0,n=[];return{length:()=>n.length,add:i=>{!t||(typeof i=="number"?n.push(i):n.push(...i))},write:()=>{e.write(new Uint8Array(n))},disable:()=>{t=!1},enable:()=>{t=!0},get:()=>n}},Sn=({value:e,state:t,stateKeys:n,patternState:i,sections:r,writeBuffer:s,encoder:a,decoder:o,context:u,pageTestState:l})=>{if(e)for(let f=0;f<e.length;f++){let d=e[f],h=!1;(t.activeSearchers||d===fn&&(f+1>=e.length||gn[e[f+1]])&&(f+2>=e.length||mn[e[f+2]]))&&n.forEach(p=>{var _,x;let b=i[p],F=b.pattern[b.count];if(d===F)b.count===0&&++t.activeSearchers,h=!0,++b.count;else if(b.count){if(--t.activeSearchers,!t.activeSearchers)for(let S=0;S<b.count;S++)t.currentFragment?t.currentFragment.content.push(b.pattern[S]):s.add(b.pattern[S]);b.count=0}if(b.count===b.pattern.length)if(--t.activeSearchers,b.count=0,h=!0,p==="end-tag"){let S=!0,E;if(((_=t.currentFragment)==null?void 0:_.type)==="list-end"){let T=r.shift(),{bytes:G}=pn({list:T,decoder:o,context:u});E=G}else if(((x=t.currentFragment)==null?void 0:x.type)==="test-end"){let T=r.shift(),{testName:G,selectedId:Re,bytes:ht}=vn({test:T,decoder:o,context:u});Re&&(l[G]=Re),E=ht}if(E!=null&&E.length){let[T]=r;if(T){let G=T.fragments[T.fragments.length-1];G.content.push(...E),t.currentFragment=G,S=!1}else s.add(E)}S&&(t.currentFragment=void 0)}else if(p==="page-state"){let S=u.getServerToClientTransitionState(),E=JSON.stringify(S),T=a.encode(E);s.add(i["page-state"].pattern),s.add([].slice.call(T)),s.disable()}else if(p==="end-script-tag")s.enable(),s.add(i["end-script-tag"].pattern);else{let S={content:[],type:p};if(t.currentFragment=S,S.type==="list-start"||S.type==="test-start")r.unshift({fragments:[S]});else{let[E]=r;if(!E)throw new Error("Not in a list!");E.fragments.push(S)}}}),h||(r.length&&!t.currentFragment&&(t.currentFragment={content:[],type:"text"},r[0].fragments.push(t.currentFragment)),t.currentFragment?t.currentFragment.content.push(d):s.add(d))}},_n=({reader:e,state:t,stateKeys:n,patternState:i,sections:r,writeBuffer:s,encoder:a,decoder:o,context:u,pageTestState:l})=>new Promise(f=>{let d=()=>{e.read().then(({done:h,value:p})=>{Sn({value:p,state:t,stateKeys:n,patternState:i,sections:r,writeBuffer:s,encoder:a,decoder:o,context:u,pageTestState:l}),h?f():d()})};d()}),bn=({reader:e,writer:t,encoder:n,decoder:i,context:r})=>{let s=yn(),a={},o=[],u=Object.keys(s),l=wn({writer:t});return _n({reader:e,decoder:i,encoder:n,context:r,pageTestState:a,patternState:s,sections:o,state:{activeSearchers:0,currentFragment:void 0},stateKeys:u,writeBuffer:l}).then(()=>{l.length()&&l.write()}).then(t.close)},ct=()=>async({response:e,context:t,encoder:n,decoder:i})=>{let r=e.headers.get("Content-Type");if(!((r==null?void 0:r.includes("text/html"))&&e.ok&&!!e.body))return{processed:!1,response:e};let{readable:s,writable:a}=new TransformStream,o=new Response(s,e),u=e.body.getReader(),l=a.getWriter();return bn({context:t,decoder:i,encoder:n,reader:{read:async()=>{let{done:f,value:d}=await u.read();return{done:f,value:d}}},writer:{write:f=>{l.write(f)},close:()=>l.close()}}),{processed:!0,response:o}};var ft=Q(Oe()),Ln=()=>async({request:e,response:t,context:n,quirks:i})=>(await n.update({cookies:(0,ft.parse)(e.headers.get("cookie")||""),url:new URL(e.url),quirks:i}),await ct()({context:n,response:t,encoder:new TextEncoder,decoder:new TextDecoder}));var Dn=(s=>(s.CountryCode="ntl-country-code",s.CountryName="ntl-country-name",s.SubdivisionCode="ntl-subdiv-code",s.SubdivisionName="ntl-subdiv-name",s.City="ntl-city",s))(Dn||{});var dt={missingQuirkValue:"unknown",geo:{country:{code:!0},subdivision:{code:!0},city:!0}},ni=(e,t=dt)=>{var s,a,o,u,l,f,d,h,p,_,x,b,F,S;let n=t==null?void 0:t.geo;if(!n)return{};let i=(s=t.missingQuirkValue)!=null?s:dt.missingQuirkValue,r={};return(a=n.country)!=null&&a.code&&(r["ntl-country-code"]=(u=(o=e.geo.country)==null?void 0:o.code)!=null?u:i),(l=n.country)!=null&&l.name&&(r["ntl-country-name"]=(d=(f=e.geo.country)==null?void 0:f.name)!=null?d:i),(h=n.subdivision)!=null&&h.code&&(r["ntl-subdiv-code"]=(_=(p=e.geo.subdivision)==null?void 0:p.code)!=null?_:i),(x=n.subdivision)!=null&&x.name&&(r["ntl-subdiv-name"]=(F=(b=e.geo.subdivision)==null?void 0:b.name)!=null?F:i),n.city&&(r["ntl-city"]=(S=e.geo.city)!=null?S:i),r};export{Dn as NetlifyQuirks,ni as buildNetlifyQuirks,an as createEdgeContext,Ln as createUniformEdgeHandler};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! js-cookie v3.0.1 | MIT */
