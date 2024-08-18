LWR.define("lwr/metrics/v/0_13_7",["exports"],function(e){"use strict";const n="lwr.bootstrap.",o=`${n}end`,a=`${n}error`,U=`${a}.count`,l=`${n}duration`,c="lwr.bootstrap.init",s=`${c}.duration`,r="lwr.bootstrap.init.module",M=`${r}.duration`,i=`${r}.count`,t="lwr.loader.",R=`${t}module.define`,E=`${R}.count`,I=`${t}module.dynamicLoad`,N=`${I}.count`,u=`${t}module.fetch`,O=`${u}.count`,d=`${u}.duration`,T=`${t}module.error`,D=`${T}.count`,_=`${t}mappings.fetch`,A=`${_}.count`,C=`${_}.duration`,P=`${t}mappings.error`,S=`${P}.count`,f="lwr.router.",m=`${f}navigate`,g=`${m}.count`,v=`${m}.duration`,L=`${f}view`,F=`${L}.duration`,p=`${f}error`,b=`${p}.count`;e.BOOTSTRAP_DURATION=l,e.BOOTSTRAP_END=o,e.BOOTSTRAP_ERROR=a,e.BOOTSTRAP_ERROR_COUNT=U,e.BOOTSTRAP_PREFIX=n,e.INIT=c,e.INIT_DURATION=s,e.INIT_MODULE=r,e.INIT_MODULE_COUNT=i,e.INIT_MODULE_DURATION=M,e.LOADER_PREFIX=t,e.MAPPINGS_ERROR=P,e.MAPPINGS_ERROR_COUNT=S,e.MAPPINGS_FETCH=_,e.MAPPINGS_FETCH_COUNT=A,e.MAPPINGS_FETCH_DURATION=C,e.MODULE_DEFINE=R,e.MODULE_DEFINE_COUNT=E,e.MODULE_DYNAMIC_LOAD=I,e.MODULE_DYNAMIC_LOAD_COUNT=N,e.MODULE_ERROR=T,e.MODULE_ERROR_COUNT=D,e.MODULE_FETCH=u,e.MODULE_FETCH_COUNT=O,e.MODULE_FETCH_DURATION=d,e.ROUTER_ERROR=p,e.ROUTER_ERROR_COUNT=b,e.ROUTER_NAV=m,e.ROUTER_NAV_COUNT=g,e.ROUTER_NAV_DURATION=v,e.ROUTER_PREFIX=f,e.ROUTER_VIEW=L,e.ROUTER_VIEW_DURATION=F,Object.defineProperty(e,"__esModule",{value:!0})}),LWR.define("lwr/init/v/0_13_7",["exports","lwr/metrics/v/0_13_7","lwr/profiler/v/0_13_7","lwc/v/7_1_3"],function(e,n,o,a){"use strict";function U(i,t,R){a.hydrateComponent(i,t,R)}function l(i,t){return a.createElement(i,{is:t})}function c(i){return i.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const s=/-([a-z])/g;function r(i){return i.replace(s,t=>t[1].toUpperCase())}function M(i,t={}){if(typeof customElements=="undefined"||typeof document=="undefined"){o.logOperationStart({id:n.BOOTSTRAP_END});return}o.logOperationStart({id:n.INIT});let R=0;for(const[E,I]of i){const N=c(E);if(!document.body.querySelector(N)){o.logOperationStart({id:n.INIT_MODULE,specifier:E,specifierIndex:++R});const O=l(N,I),d=document.querySelector("[lwr-root]");d?d.appendChild(O):document.body.appendChild(O),o.logOperationEnd({id:n.INIT_MODULE,specifier:E,specifierIndex:R,metadata:{renderMode:"spa"}});continue}const u=document.querySelectorAll(N);for(const O of u){o.logOperationStart({id:n.INIT_MODULE,specifier:E,specifierIndex:++R});const d=O.dataset.lwrPropsId;if(d){U(O,I,t[d]||{}),o.logOperationEnd({id:n.INIT_MODULE,specifier:E,specifierIndex:R,metadata:{renderMode:"ssr"}});continue}const T=l(N,I);for(const{name:_,value:A}of O.attributes){T.setAttribute(_,A);const C=r(_);C in T&&(T[C]=A)}for(;O.childNodes.length>0;)T.appendChild(O.childNodes[0]);const D=O.parentElement;D&&D.replaceChild(T,O),o.logOperationEnd({id:n.INIT_MODULE,specifier:E,specifierIndex:R,metadata:{renderMode:"csr"}})}}o.logOperationEnd({id:n.INIT}),o.logOperationStart({id:n.BOOTSTRAP_END})}e.getPropFromAttrName=r,e.init=M,e.toKebabCase=c,Object.defineProperty(e,"__esModule",{value:!0})}),LWR.define("lwr/preInit/v/0_13_7",["exports"],function(e){"use strict";const n=globalThis.LWR;n.define||n.env?globalThis.LWR=Object.freeze({define:n.define,env:n.env}):delete globalThis.LWR;function o(){return n}e.getClientBootstrapConfig=o,Object.defineProperty(e,"__esModule",{value:!0})}),LWR.define("@lwrjs/app-service/example/module/amd/v/0_13_7",["lwr/loader/v/0_13_7","lwr/preInit/v/0_13_7","lwr/init/v/0_13_7"],function(e,n,o){"use strict";const a=n.getClientBootstrapConfig(),{serverData:U,rootComponents:l}=a;Promise.all(l.map(async c=>{const s=o.toKebabCase(c);return e.load(c,"@lwrjs/app-service/example/module/amd/v/0_13_7").then(({default:r})=>{o.init([[s,r]],U)})}))});