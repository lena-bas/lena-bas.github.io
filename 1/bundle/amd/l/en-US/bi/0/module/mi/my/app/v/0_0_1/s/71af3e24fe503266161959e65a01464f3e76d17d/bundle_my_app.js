LWR.define("navigo/v/8_11_1",["exports"],function(T){"use strict";var U=(x,w)=>()=>(w||(w={exports:{}},x(w.exports,w)),w.exports),S=U((x,w)=>{(function($,_){typeof x=="object"&&typeof w=="object"?w.exports=_():typeof define=="function"&&define.amd?define("Navigo",[],_):typeof x=="object"?x.Navigo=_():$.Navigo=_()})(typeof self!="undefined"?self:x,function(){return function(){var $={407:function(m,g,p){p.d(g,{default:function(){return ke}});var V=/([:*])(\w+)/g,z=/\*/g,Q=/\/\?/g;function d(e){return e===void 0&&(e="/"),X()?location.pathname+location.search+location.hash:e}function s(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function L(e){return typeof e=="string"}function k(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function E(e){var n=s(e).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function b(e){for(var n={},r=e.split("&"),o=0;o<r.length;o++){var i=r[o].split("=");if(i[0]!==""){var c=decodeURIComponent(i[0]);n[c]?(Array.isArray(n[c])||(n[c]=[n[c]]),n[c].push(decodeURIComponent(i[1]||""))):n[c]=decodeURIComponent(i[1]||"")}}return n}function W(e,n){var r,o=E(s(e.currentLocationPath)),i=o[0],c=o[1],v=c===""?null:b(c),f=[];if(L(n.path)){if(r="(?:/^|^)"+s(n.path).replace(V,function(A,N,O){return f.push(O),"([^/]+)"}).replace(z,"?(?:.*)").replace(Q,"/?([^/]+|)")+"$",s(n.path)===""&&s(i)==="")return{url:i,queryString:c,hashString:k(e.to),route:n,data:null,params:v}}else r=n.path;var C=new RegExp(r,""),j=i.match(C);if(j){var q=L(n.path)?function(A,N){return N.length===0?null:A?A.slice(1,A.length).reduce(function(O,B,K){return O===null&&(O={}),O[N[K]]=decodeURIComponent(B),O},null):null}(j,f):j.groups?j.groups:j.slice(1);return{url:s(i.replace(new RegExp("^"+e.instance.root),"")),queryString:c,hashString:k(e.to),route:n,data:q,params:v}}return!1}function D(){return!(typeof window=="undefined"||!window.history||!window.history.pushState)}function M(e,n){return e[n]===void 0||e[n]===!0}function X(){return typeof window!="undefined"}function ve(e,n){return e===void 0&&(e=[]),n===void 0&&(n={}),e.filter(function(r){return r}).forEach(function(r){["before","after","already","leave"].forEach(function(o){r[o]&&(n[o]||(n[o]=[]),n[o].push(r[o]))})}),n}function P(e,n,r){var o=n||{},i=0;(function c(){e[i]?Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](o)?e[i][1]:e[i][2])),c()):e[i](o,function(v){v===void 0||v===!0?(i+=1,c()):r&&r(o)}):r&&r(o)})()}function te(e,n){e.currentLocationPath===void 0&&(e.currentLocationPath=e.to=d(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),n()}function Y(e,n){for(var r=0;r<e.instance.routes.length;r++){var o=W(e,e.instance.routes[r]);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),e.resolveOptions.strategy==="ONE"))return void n()}n()}function ge(e,n){e.navigateOptions&&(e.navigateOptions.shouldResolve!==void 0&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),e.navigateOptions.silent!==void 0&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function me(e,n){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),n(!1)):n()}P.if=function(e,n,r){return Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]),[e,n,r]};var ne=X(),ye=D();function _e(e,n){if(M(e.navigateOptions,"updateBrowserURL")){var r=("/"+e.to).replace(/\/\//g,"/"),o=ne&&e.resolveOptions&&e.resolveOptions.hash===!0;ye?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+r:r),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!o){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):ne&&(window.location.href=e.to)}n()}function re(e,n){var r=e.instance;r.lastResolved()?P(r.lastResolved().map(function(o){return function(i,c){if(o.route.hooks&&o.route.hooks.leave){var v=!1,f=e.instance.matchLocation(o.route.path,e.currentLocationPath,!1);v=o.route.path!=="*"?!f:!(e.matches&&e.matches.find(function(C){return o.route.path===C.route.path})),M(e.navigateOptions,"callHooks")&&v?P(o.route.hooks.leave.map(function(C){return function(j,q){return C(function(A){A===!1?e.instance.__markAsClean(e):q()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return c()}])):c()}else c()}}),{},function(){return n()}):n()}function ae(e,n){M(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),n()}var oe=[function(e,n){var r=e.instance.lastResolved();if(r&&r[0]&&r[0].route===e.match.route&&r[0].url===e.match.url&&r[0].queryString===e.match.queryString)return r.forEach(function(o){o.route.hooks&&o.route.hooks.already&&M(e.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(i){return i(e.match)})}),void n(!1);n()},function(e,n){e.match.route.hooks&&e.match.route.hooks.before&&M(e.navigateOptions,"callHooks")?P(e.match.route.hooks.before.map(function(r){return function(o,i){return r(function(c){c===!1?e.instance.__markAsClean(e):i()},e.match)}}).concat([function(){return n()}])):n()},function(e,n){M(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),n()},function(e,n){e.match.route.hooks&&e.match.route.hooks.after&&M(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(r){return r(e.match)}),n()}],ie=[re,function(e,n){var r=e.instance._notFoundRoute;if(r){e.notFoundHandled=!0;var o=E(e.currentLocationPath),i=o[0],c=o[1],v=k(e.to);r.path=s(i);var f={url:r.path,queryString:c,hashString:v,data:null,route:r,params:c!==""?b(c):null};e.matches=[f],e.match=f}n()},P.if(function(e){return e.notFoundHandled},oe.concat([ae]),[function(e,n){e.resolveOptions&&e.resolveOptions.noMatchWarning!==!1&&e.resolveOptions.noMatchWarning!==void 0||console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),n()},function(e,n){e.instance._setCurrent(null),n()}])];function se(){return(se=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function ce(e,n){var r=0;re(e,function o(){r!==e.matches.length?P(oe,se({},e,{match:e.matches[r]}),function(){r+=1,o()}):ae(e,n)})}function Z(e){e.instance.__markAsClean(e)}function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var le="[data-navigo]";function ke(e,n){var r,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:le},i=this,c="/",v=null,f=[],C=!1,j=D(),q=X();function A(t){return t.indexOf("#")>=0&&(t=o.hash===!0?t.split("#")[1]||"/":t.split("#")[0]),t}function N(t){return s(c+"/"+s(t))}function O(t,a,u,h){return t=L(t)?N(t):t,{name:h||s(String(t)),path:t,handler:a,hooks:ve(u)}}function B(t,a){if(!i.__dirty){i.__dirty=!0,t=t?s(c)+"/"+s(t):void 0;var u={instance:i,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:ue({},o,a)};return P([te,Y,P.if(function(h){var l=h.matches;return l&&l.length>0},ce,ie)],u,Z),!!u.matches&&u.matches}i.__waiting.push(function(){return i.resolve(t,a)})}function K(t,a){if(i.__dirty)i.__waiting.push(function(){return i.navigate(t,a)});else{i.__dirty=!0,t=s(c)+"/"+s(t);var u={instance:i,to:t,navigateOptions:a||{},resolveOptions:a&&a.resolveOptions?a.resolveOptions:o,currentLocationPath:A(t)};P([ge,me,Y,P.if(function(h){var l=h.matches;return l&&l.length>0},ce,ie),_e,Z],u,Z)}}function he(){if(q)return(q?[].slice.call(document.querySelectorAll(o.linksSelector||le)):[]).forEach(function(t){t.getAttribute("data-navigo")!=="false"&&t.getAttribute("target")!=="_blank"?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(a){if((a.ctrlKey||a.metaKey)&&a.target.tagName.toLowerCase()==="a")return!1;var u=t.getAttribute("href");if(u==null)return!1;if(u.match(/^(http|https)/)&&typeof URL!="undefined")try{var h=new URL(u);u=h.pathname+h.search}catch(R){}var l=function(R){if(!R)return{};var y,ee=R.split(","),F={};return ee.forEach(function(Oe){var I=Oe.split(":").map(function(we){return we.replace(/(^ +| +$)/g,"")});switch(I[0]){case"historyAPIMethod":F.historyAPIMethod=I[1];break;case"resolveOptionsStrategy":y||(y={}),y.strategy=I[1];break;case"resolveOptionsHash":y||(y={}),y.hash=I[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":F[I[0]]=I[1]==="true"}}),y&&(F.resolveOptions=y),F}(t.getAttribute("data-navigo-options"));C||(a.preventDefault(),a.stopPropagation(),i.navigate(s(u),l))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)}),i}function fe(t,a,u){var h=f.find(function(y){return y.name===t}),l=null;if(h){if(l=h.path,a)for(var R in a)l=l.replace(":"+R,a[R]);l=l.match(/^\//)?l:"/"+l}return l&&u&&!u.includeRoot&&(l=l.replace(new RegExp("^/"+c),"")),l}function pe(t){var a=E(s(t)),u=a[0],h=a[1],l=h===""?null:b(h);return{url:u,queryString:h,hashString:k(t),route:O(u,function(){},[r],u),data:null,params:l}}function G(t,a,u){return typeof a=="string"&&(a=de(a)),a?(a.hooks[t]||(a.hooks[t]=[]),a.hooks[t].push(u),function(){a.hooks[t]=a.hooks[t].filter(function(h){return h!==u})}):(console.warn("Route doesn't exists: "+a),function(){})}function de(t){return typeof t=="string"?f.find(function(a){return a.name===N(t)}):f.find(function(a){return a.handler===t})}e?c=s(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=c,this.routes=f,this.destroyed=C,this.current=v,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,a,u){var h=this;return typeof t!="object"||t instanceof RegExp?(typeof t=="function"&&(u=a,a=t,t=c),f.push(O(t,a,[r,u])),this):(Object.keys(t).forEach(function(l){if(typeof t[l]=="function")h.on(l,t[l]);else{var R=t[l],y=R.uses,ee=R.as,F=R.hooks;f.push(O(l,y,[r,F],ee))}}),this)},this.off=function(t){return this.routes=f=f.filter(function(a){return L(t)?s(a.path)!==s(t):typeof t=="function"?t!==a.handler:String(a.path)!==String(t)}),this},this.resolve=B,this.navigate=K,this.navigateByName=function(t,a,u){var h=fe(t,a);return h!==null&&(K(h.replace(new RegExp("^/?"+c),""),u),!0)},this.destroy=function(){this.routes=f=[],j&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=C=!0},this.notFound=function(t,a){return i._notFoundRoute=O("*",t,[r,a],"__NOT_FOUND__"),this},this.updatePageLinks=he,this.link=function(t){return"/"+c+"/"+s(t)},this.hooks=function(t){return r=t,this},this.extractGETParameters=function(t){return E(A(t))},this.lastResolved=function(){return v},this.generate=fe,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var a={instance:i,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return Y(a,function(){}),!!a.matches&&a.matches},this.matchLocation=function(t,a,u){a===void 0||u!==void 0&&!u||(a=N(a));var h={instance:i,to:a,currentLocationPath:a};return te(h,function(){}),typeof t=="string"&&(t=u===void 0||u?N(t):t),W(h,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return pe(s(d(c)).replace(new RegExp("^"+c),""))},this.addBeforeHook=G.bind(this,"before"),this.addAfterHook=G.bind(this,"after"),this.addAlreadyHook=G.bind(this,"already"),this.addLeaveHook=G.bind(this,"leave"),this.getRoute=de,this._pathToMatchObject=pe,this._clean=s,this._checkForAHash=A,this._setCurrent=function(t){return v=i.current=t},function(){j&&(this.__popstateListener=function(){i.__freezeListening||B()},window.addEventListener("popstate",this.__popstateListener))}.call(this),he.call(this)}}},_={};function H(m){if(_[m])return _[m].exports;var g=_[m]={exports:{}};return $[m](g,g.exports,H),g.exports}return H.d=function(m,g){for(var p in g)H.o(g,p)&&!H.o(m,p)&&Object.defineProperty(m,p,{enumerable:!0,get:g[p]})},H.o=function(m,g){return Object.prototype.hasOwnProperty.call(m,g)},H(407)}().default})}),J=S();T.default=J,Object.defineProperty(T,"__esModule",{value:!0})}),LWR.define("my/app/v/0_0_1",["exports","lwr/loader/v/0_13_7","lwc/v/7_1_3","navigo/v/8_11_1"],function(T,U,S,J){"use strict";function x(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var w=x(J);function $(d,s,L){var k=d?"["+d+"]":"";return".header"+k+" {padding: 30px;text-align: center;background: #1abc9c;color: white;font-size: 30px;margin-bottom: 30px;}"}var _=[$];const H=S.parseFragment`<div class="header${0}"${2}><h1${3}>LWC Navigation</h1></div>`,m={container:!0},g={lwc:{dom:"manual"}};function p(d,s,L,k){const{st:E,b,h:W}=d,{_m0:D}=k;return[E(H,1),W("div",{classMap:m,context:g,key:2,on:{navigate:D||(k._m0=b(s.handleNavigation))}})]}var V=S.registerTemplate(p);p.stylesheets=[],p.stylesheetToken="lwc-37ioljf4m9i",p.legacyStylesheetToken="my-app_app",_&&p.stylesheets.push.apply(p.stylesheets,_),S.freezeTemplate(p);class z extends S.LightningElement{constructor(){super();this.router=new w.default(null,!0),this.router.on({"/":()=>{(async()=>{const{default:s}=await U.load("my/home/v/0_0_1");this.setPage("my-home",s)})()},"/products":()=>{(async()=>{const{default:s}=await U.load("my/products/v/0_0_1");this.setPage("my-products",s)})()},"/products/:productId":s=>{(async()=>{const{default:L}=await U.load("my/product/v/0_0_1");this.setPage("my-product",L,s)})()}}).resolve()}setPage(s,L,k={}){const E=S.createElement(s,{is:L,fallback:!1});Object.assign(E,k);let b=this.template.querySelector(".container");for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(E)}handleNavigation(s){s.detail&&this.router.navigate(s.detail.path)}renderedCallback(){this.router.updatePageLinks()}}S.registerDecorators(z,{fields:["router"]});const Q=S.registerComponent(z,{tmpl:V,sel:"my-app",apiVersion:62});T.default=Q,Object.defineProperty(T,"__esModule",{value:!0})});
