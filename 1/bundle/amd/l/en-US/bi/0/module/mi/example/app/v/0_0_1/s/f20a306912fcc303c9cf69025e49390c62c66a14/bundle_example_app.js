LWR.define("example/contactListItem/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(r,e,_){"use strict";function m(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var y=m(_);const p=e.parseFragment`<br${3}>`,n={key:1};function f(i,t,s,o){const{b:l,d:u,t:d,st:g,h:L,c:a}=i,{_m0:C}=o;return[a("ui-card",y.default,{key:0,on:{click:C||(o._m0=l(t.handleClick))}},[L("div",n,[d(u(t.contact.Name)),g(p(),3),d(u(t.contact.Picture))]),L("img",{attrs:{src:t.contact.Picture,alt:"Profile photo",width:"500"},key:4})])]}var h=e.registerTemplate(f);f.stylesheets=[],f.stylesheetToken="example-contactListItem_contactListItem",e.freezeTemplate(f);class x extends e.LightningElement{constructor(...t){super(...t);this.contact=void 0}handleClick(){let t=new CustomEvent("contactselected",{detail:this.contact.Id});this.dispatchEvent(t)}}e.registerDecorators(x,{publicProps:{contact:{config:0}}});var c=e.registerComponent(x,{tmpl:h});r.default=c,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/eventWithData/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItem/v/0_0_1","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(r,e,_,m,y){"use strict";function p(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var n=p(_),f=p(m),h=p(y);const x={props:{title:"Event With Data"},key:0};function c(o,l,u,d){const{k:g,b:L,c:a,i:C,t:D,d:b,fr:j,f:k}=o,{_m0:v}=d;return[a("ui-card",f.default,x,k([C(l.contacts.data,function(P){return a("example-contact-list-item",n.default,{props:{contact:P},key:g(1,P.Id),on:{contactselected:v||(d._m0=L(l.handleContactSelected))}})}),D("selected contact:"),l.selectedContact?j(2,[D(b(l.selectedContact.Name))],0):null,D("after")]))]}var i=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-eventWithData_eventWithData",e.freezeTemplate(c);class t extends e.LightningElement{constructor(...l){super(...l);this.selectedContact=void 0,this.contacts={}}handleContactSelected(l){const u=l.detail;this.selectedContact=this.contacts.data.find(d=>d.Id===u)}}e.registerDecorators(t,{wire:{contacts:{adapter:h.default,config:function(o){return{}}}},fields:["selectedContact"]});var s=e.registerComponent(t,{tmpl:i});r.default=s,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("data/contacts/v/0_0_1",["exports"],function(r){"use strict";const e=[{Id:"0031700000pJRRSAA4",Name:"Amy Taylor",Title:"VP of Engineering",Phone:"4152568563",Email:"amy@demo.net",Picture:"/assets/images/demo/amy_taylor.jpg"},{Id:"0031700000pJRRTAA4",Name:"Michael Jones",Title:"VP of Sales",Phone:"4158526633",Email:"michael@demo.net",Picture:"/assets/images/demo/michael_jones.jpg"},{Id:"0031700000pJRRUAA4",Name:"Jennifer Wu",Title:"CEO",Phone:"4158521463",Email:"jennifer@demo.net",Picture:"/assets/images/demo/jennifer_wu.jpg"},{Id:"0031700000pJRRVAA4",Name:"Anup Gupta",Title:"VP of Products",Phone:"4158526398",Email:"anup@demo.net",Picture:"/assets/images/demo/anup_gupta.jpg"},{Id:"0031700000pJRRWAA4",Name:"Caroline Kingsley",Title:"VP of Technology",Phone:"4158753654",Email:"caroline@demo.net",Picture:"/assets/images/demo/caroline_kingsley.jpg"},{Id:"0031700000pJRRXAA4",Name:"Jonathan Bradley",Title:"VP of Opearations",Phone:"4158885522",Email:"jonathan@demo.net",Picture:"/assets/images/demo/jonathan_bradley.jpg"}];r.contacts=e,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("data/wireGetContactListProvider/v/0_0_1",["exports","lwc/v/2_38_1","data/contacts/v/0_0_1"],function(r,e,_){"use strict";var m=void 0;class y{constructor(f){this.connected=!1,this.dataCallback=f}connect(){this.connected=!0,this.provideContactList()}disconnect(){this.connected=!1}update(){this.provideContactList()}provideContactList(){this.connected&&this.dataCallback({data:_.contacts})}}e.registerDecorators(y,{fields:["connected"]});var p=e.registerComponent(y,{tmpl:m});r.default=p,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("ui/output/v/0_3_2",["exports","lwc/v/2_38_1"],function(r,e){"use strict";function _(i,t,s){var o=i?"["+i+"]":"";return".field-label"+o+" {font-size: 1.4rem;color: gray;}p"+o+" {margin: 0;}a"+o+" {text-decoration: var(--text-decoration);color: var(--color-text-link);}"}var m=[_];const y={classMap:{"field-label":!0},key:0},p={key:1};function n(i,t,s,o){const{d:l,t:u,h:d}=i;return[t.label?d("label",y,[u(l(t.label))]):null,d("p",p,[t.isDateTime?u(l(t.dateTimeValue)):null,t.isEmail?d("a",{attrs:{href:t.hrefEmail},key:2},[u(l(t.value))]):null,t.isNumber?u(l(t.formattedNumber)):null,t.isPhonenumber?d("a",{attrs:{href:t.hrefPhonenumber},key:3},[u(l(t.formattedPhonenumber))]):null,t.isText?u(l(t.value)):null])]}var f=e.registerTemplate(n);n.stylesheets=[],m&&n.stylesheets.push.apply(n.stylesheets,m),n.stylesheetToken="ui-output_output",e.freezeTemplate(n);function h(i){var t=(""+i).replace(/\D/g,""),s=t.match(/^(\d{3})(\d{3})(\d{4})$/);return s?"("+s[1]+") "+s[2]+"-"+s[3]:null}class x extends e.LightningElement{constructor(...t){super(...t);this.currencyCode=void 0,this.dateType=void 0,this.label=void 0,this.type="text",this.dateTimeValue=void 0,this.valuePrivate=void 0,this.moment=void 0,this._value=void 0}set value(t){this.valuePrivate=t,this.calculateDateTime()}get value(){return this.valuePrivate}get isDateTime(){return this.type==="datetime"}get isEmail(){return this.type==="email"}get isNumber(){return this.type==="number"}get isPhonenumber(){return this.type==="phone"}get isText(){return this.type==="text"}async calculateDateTime(){if(this.type==="datetime"){this.moment||(this.moment=await require("moment"));const t=this.moment(this._val);switch(this.dateType){case"weekOfYear":this.dateTimeValue=t.week();break;case"dayOfYear":this.dateTimeValue=t.dayOfYear();break;default:this.dateTimeValue=t.format("MMMM Do YYYY, h:mm:ss A")}}}get formattedNumber(){return this.valuePrivate?`${this.currencyCode} ${parseFloat(this.valuePrivate).toFixed(2)}`:" - "}get formattedPhonenumber(){return h(this.value)}get hrefPhonenumber(){return`tel:${this.value}`}get hrefEmail(){return`mailto:${this.value}`}}e.registerDecorators(x,{publicProps:{currencyCode:{config:0},dateType:{config:0},label:{config:0},type:{config:0},value:{config:3}},track:{dateTimeValue:1,valuePrivate:1},fields:["moment","_value"]});var c=e.registerComponent(x,{tmpl:f});r.default=c,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/contactListItemBubbling/v/0_0_1",["exports","lwc/v/2_38_1"],function(r,e){"use strict";function _(c,i,t){var s=c?"["+c+"]":"",o=c?"["+c+"-host]":"";return(i?":host {":o+" {")+"width: 300px;}a"+s+" {display: flex;margin-left: 6px;text-decoration: var(--text-decoration);color: var(--color-text-link);}p"+s+" {margin: 0 0 8px 6px;}img"+s+" {width: 30px;height: 30px;border-radius: 50%;}"}var m=[_];const y={href:"#"},p={key:2};function n(c,i,t,s){const{b:o,h:l,d:u,t:d}=c,{_m0:g}=s;return[l("a",{attrs:y,key:0,on:{click:g||(s._m0=o(i.handleSelect))}},[l("img",{attrs:{src:i.contact.Picture,alt:"Profile photo"},key:1}),l("p",p,[d(u(i.contact.Name))])])]}var f=e.registerTemplate(n);n.stylesheets=[],m&&n.stylesheets.push.apply(n.stylesheets,m),n.stylesheetToken="example-contactListItemBubbling_contactListItemBubbling",e.freezeTemplate(n);class h extends e.LightningElement{constructor(...i){super(...i);this.contact=void 0,this.budala="Bojan"}handleSelect(i){i.preventDefault();const t=new CustomEvent("contactselect",{bubbles:!0});this.dispatchEvent(t)}}e.registerDecorators(h,{publicProps:{contact:{config:0},budala:{config:0}}});var x=e.registerComponent(h,{tmpl:f});r.default=x,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/eventBubbling/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItemBubbling/v/0_0_1","ui/output/v/0_3_2","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(r,e,_,m,y,p){"use strict";function n(k){return k&&typeof k=="object"&&"default"in k?k:{default:k}}var f=n(_),h=n(m),x=n(y),c=n(p);function i(k,v,P){var T=k?"["+k+"]":"";return"img"+T+" {width: 80px;height: 80px;border-radius: 50%;margin-bottom: 8px;}recipe-contact-list-item-bubbling"+T+" {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 2px 0 2px;}recipe-contact-list-item-bubbling"+T+":before {content: 'recipe-contact-list-item-bubbling';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}div.contacts"+T+" {display: flex;}.contact-details"+T+" {padding-left: 10px;display: block;max-width: 50%;}p"+T+" {margin: 0;}@media (max-width: 400px) {.contact-details"+T+" {padding-left: 10px;}}@media (max-width: 500px) {div.contacts"+T+" {display: block;}}@media (max-width: 900px) {.contact-list"+T+",\r .contact-details"+T+" {max-width: 100%;}}"}var t=[i];const s={props:{title:"EventBubbling"},key:0},o={classMap:{contacts:!0},key:2},l={"contact-list":!0},u={classMap:{"contact-details":!0},key:5},d={key:8},g={key:9},L={key:10},a={key:12};function C(k,v,P,T){const{b:S,k:M,c:E,i:I,h:w,d:R,t:W,fr:A}=k,{_m0:O}=T;return[E("ui-card",x.default,s,[v.contacts.data?A(1,[w("div",o,[w("div",{classMap:l,key:3,on:{contactselect:O||(T._m0=S(v.handleContactSelect))}},I(v.contacts.data,function(N){return E("example-contact-list-item-bubbling",f.default,{props:{contact:N},key:M(4,N.Id)})})),w("div",u,[v.selectedContact?A(6,[w("img",{attrs:{src:v.selectedContact.Picture,alt:"Profile photo"},key:7}),w("p",d,[W(R(v.selectedContact.Name))]),w("p",g,[W(R(v.selectedContact.Title))]),w("p",L,[E("ui-output",h.default,{props:{type:"phone",value:v.selectedContact.Phone},key:11})]),w("p",a,[E("ui-output",h.default,{props:{type:"email",value:v.selectedContact.Email},key:13})])],0):null])])],0):null])]}var D=e.registerTemplate(C);C.stylesheets=[],t&&C.stylesheets.push.apply(C.stylesheets,t),C.stylesheetToken="example-eventBubbling_eventBubbling",e.freezeTemplate(C);class b extends e.LightningElement{constructor(...v){super(...v);this.selectedContact=void 0,this.contacts={}}handleContactSelect(v){this.selectedContact=v.target.contact,alert("Test"+v.target.budala)}}e.registerDecorators(b,{wire:{contacts:{adapter:c.default,config:function(k){return{}}}},fields:["selectedContact"]});var j=e.registerComponent(b,{tmpl:D});r.default=j,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(r,e){"use strict";function _(d,g,L){var a=d?"["+d+"]":"";return"@media (min-width: 48em) {.card"+a+" {padding: 2rem;}}.card"+a+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+a+" .card-header"+a+",.card"+a+" .card-body"+a+",.card"+a+" .card-footer"+a+" {padding: 0.8rem;padding-bottom: 0;}.card"+a+" .card-header:last-child"+a+",.card"+a+" .card-body:last-child"+a+",.card"+a+" .card-footer:last-child"+a+" {padding-bottom: 0.8rem;}.card"+a+" .card-body"+a+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+a+" .card-image"+a+" {padding-top: 0.8rem;}.card"+a+" .card-image:first-child"+a+" {padding-top: 0;}.card"+a+" .card-image:first-child"+a+" img"+a+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+a+" .card-image:last-child"+a+" img"+a+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+a+" .card-title"+a+" {font-size: 2rem;font-weight: 800;}.card"+a+" .card-footer"+a+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+a+" .card-title"+a+" {font-size: 1.6rem;font-weight: 600;}}"}var m=[_];const y={classMap:{card:!0},key:0},p={classMap:{"card-header":!0},key:1},n={classMap:{"card-title":!0},key:2},f={classMap:{"card-subtitle":!0},key:3},h={classMap:{"card-body":!0},key:4},x={key:5},c=[],i={classMap:{"card-footer":!0},key:6},t={attrs:{name:"footer"},key:7};function s(d,g,L,a){const{d:C,t:D,h:b,s:j}=d;return[b("div",y,[b("div",p,[g.title?b("div",n,[D(C(g.title))]):null,g.subtitle?b("div",f,[D(C(g.subtitle))]):null]),b("div",h,[j("",x,c,L)]),b("div",i,[j("footer",t,c,L)])])]}var o=e.registerTemplate(s);s.slots=["","footer"],s.stylesheets=[],m&&s.stylesheets.push.apply(s.stylesheets,m),s.stylesheetToken="ui-card_card",e.freezeTemplate(s);class l extends e.LightningElement{constructor(...g){super(...g);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}e.registerDecorators(l,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var u=e.registerComponent(l,{tmpl:o});r.default=u,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/hello/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(r,e,_){"use strict";function m(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var y=m(_);const p=e.parseFragment`<img src="/assets/images/demo/amy_taylor.jpg" alt="" width="200"${3}>`,n={props:{title:"Hello"},key:0},f={key:1};function h(t,s,o,l){const{d:u,t:d,h:g,st:L,c:a}=t;return[a("ui-card",y.default,n,[g("div",f,[d("Hello, "+u(s.greeting)+"!")]),L(p(),3)])]}var x=e.registerTemplate(h);h.stylesheets=[],h.stylesheetToken="example-hello_hello",e.freezeTemplate(h);class c extends e.LightningElement{constructor(...s){super(...s);this.greeting="World"}}e.registerDecorators(c,{fields:["greeting"]});var i=e.registerComponent(c,{tmpl:x,sel:"example-hello",apiVersion:60});r.default=i,Object.defineProperty(r,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/hello/v/0_0_1","example/eventBubbling/v/0_0_1","example/eventWithData/v/0_0_1"],function(r,e,_,m,y){"use strict";function p(P){return P&&typeof P=="object"&&"default"in P?P:{default:P}}var n=p(_),f=p(m),h=p(y);function x(P,T,S){var M=P?"["+P+"]":"";return"main"+M+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+M+" {color: #1798c1;}"}var c=[x];const i=e.parseFragment`<img src="/assets/recipes-logo.png" alt="logo"${3}>`,t=e.parseFragment`<h1${3}>TODO -LWC experiments 1</h1>`,s=e.parseFragment`<br${3}>`,o=e.parseFragment`<br${3}>`,l=e.parseFragment`<a href="/index-old.html"${3}>Old site</a>`,u={key:0},d={key:7},g={key:8},L={key:11},a={key:12},C={key:13},D={key:14};function b(P,T,S,M){const{st:E,c:I,h:w}=P;return[w("main",u,[E(i(),2),E(t(),4),E(s(),6),w("div",d,[I("example-hello",n.default,g)]),E(o(),10),w("div",L,[I("example-event-bubbling",f.default,a)]),w("div",C,[I("example-event-with-data",h.default,D)]),E(l(),16)])]}var j=e.registerTemplate(b);b.stylesheets=[],c&&b.stylesheets.push.apply(b.stylesheets,c),b.stylesheetToken="example-app_app",e.freezeTemplate(b);class k extends e.LightningElement{}var v=e.registerComponent(k,{tmpl:j});r.default=v,Object.defineProperty(r,"__esModule",{value:!0})});
