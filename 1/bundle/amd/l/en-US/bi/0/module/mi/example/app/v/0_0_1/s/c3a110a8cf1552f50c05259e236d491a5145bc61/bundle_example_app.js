LWR.define("example/contactListItem/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(c,t,k){"use strict";function h(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var y=h(k);const b=t.parseFragment`<br${3}>`,n={key:1};function g(i,e,s,l){const{b:r,d:m,t:o,st:u,h:w,c:a}=i,{_m0:P}=l;return[a("ui-card",y.default,{key:0,on:{click:P||(l._m0=r(e.handleClick))}},[w("div",n,[o(m(e.contact.Name)),u(b(),3),o(m(e.contact.Picture))]),w("img",{attrs:{src:e.contact.Picture,alt:"Profile photo",width:"500"},key:4})])]}var x=t.registerTemplate(g);g.stylesheets=[],g.stylesheetToken="example-contactListItem_contactListItem",t.freezeTemplate(g);class C extends t.LightningElement{constructor(...e){super(...e);this.contact=void 0}handleClick(){let e=new CustomEvent("contactselected",{detail:this.contact.Id});this.dispatchEvent(e)}}t.registerDecorators(C,{publicProps:{contact:{config:0}}});var d=t.registerComponent(C,{tmpl:x});c.default=d,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("example/eventWithData/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItem/v/0_0_1","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(c,t,k,h,y){"use strict";function b(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var n=b(k),g=b(h),x=b(y);const C={props:{title:"Event With Data"},key:0};function d(l,r,m,o){const{k:u,b:w,c:a,i:P,t:f,d:T,fr:L,f:v}=l,{_m0:p}=o;return[a("ui-card",g.default,C,v([P(r.contacts.data,function(E){return a("example-contact-list-item",n.default,{props:{contact:E},key:u(1,E.Id),on:{contactselected:p||(o._m0=w(r.handleContactSelected))}})}),f("selected contact:"),r.selectedContact?L(2,[f(T(r.selectedContact.Name))],0):null,f("after")]))]}var i=t.registerTemplate(d);d.stylesheets=[],d.stylesheetToken="example-eventWithData_eventWithData",t.freezeTemplate(d);class e extends t.LightningElement{constructor(...r){super(...r);this.selectedContact=void 0,this.contacts={}}handleContactSelected(r){const m=r.detail;this.selectedContact=this.contacts.data.find(o=>o.Id===m)}}t.registerDecorators(e,{wire:{contacts:{adapter:x.default,config:function(l){return{}}}},fields:["selectedContact"]});var s=t.registerComponent(e,{tmpl:i});c.default=s,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("data/contacts/v/0_0_1",["exports"],function(c){"use strict";const t=[{Title:"VP of Engineering",Picture:"/assets/images/demo/amy_taylor.jpg"},{Title:"VP of Sales",Picture:"/assets/images/demo/michael_jones.jpg"},{Title:"CEO",Picture:"/assets/images/demo/jennifer_wu.jpg"},{Title:"VP of Products",Picture:"/assets/images/demo/anup_gupta.jpg"},{Title:"VP of Technology",Picture:"/assets/images/demo/caroline_kingsley.jpg"},{Title:"VP of Opearations",Picture:"/assets/images/demo/jonathan_bradley.jpg"}];c.contacts=t,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("data/wireGetContactListProvider/v/0_0_1",["exports","lwc/v/2_38_1","data/contacts/v/0_0_1"],function(c,t,k){"use strict";var h=void 0;class y{constructor(g){this.connected=!1,this.dataCallback=g}connect(){this.connected=!0,this.provideContactList()}disconnect(){this.connected=!1}update(){this.provideContactList()}provideContactList(){this.connected&&this.dataCallback({data:k.contacts})}}t.registerDecorators(y,{fields:["connected"]});var b=t.registerComponent(y,{tmpl:h});c.default=b,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(c,t){"use strict";function k(o,u,w){var a=o?"["+o+"]":"";return"@media (min-width: 48em) {.card"+a+" {padding: 2rem;}}.card"+a+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+a+" .card-header"+a+",.card"+a+" .card-body"+a+",.card"+a+" .card-footer"+a+" {padding: 0.8rem;padding-bottom: 0;}.card"+a+" .card-header:last-child"+a+",.card"+a+" .card-body:last-child"+a+",.card"+a+" .card-footer:last-child"+a+" {padding-bottom: 0.8rem;}.card"+a+" .card-body"+a+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+a+" .card-image"+a+" {padding-top: 0.8rem;}.card"+a+" .card-image:first-child"+a+" {padding-top: 0;}.card"+a+" .card-image:first-child"+a+" img"+a+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+a+" .card-image:last-child"+a+" img"+a+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+a+" .card-title"+a+" {font-size: 2rem;font-weight: 800;}.card"+a+" .card-footer"+a+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+a+" .card-title"+a+" {font-size: 1.6rem;font-weight: 600;}}"}var h=[k];const y={classMap:{card:!0},key:0},b={classMap:{"card-header":!0},key:1},n={classMap:{"card-title":!0},key:2},g={classMap:{"card-subtitle":!0},key:3},x={classMap:{"card-body":!0},key:4},C={key:5},d=[],i={classMap:{"card-footer":!0},key:6},e={attrs:{name:"footer"},key:7};function s(o,u,w,a){const{d:P,t:f,h:T,s:L}=o;return[T("div",y,[T("div",b,[u.title?T("div",n,[f(P(u.title))]):null,u.subtitle?T("div",g,[f(P(u.subtitle))]):null]),T("div",x,[L("",C,d,w)]),T("div",i,[L("footer",e,d,w)])])]}var l=t.registerTemplate(s);s.slots=["","footer"],s.stylesheets=[],h&&s.stylesheets.push.apply(s.stylesheets,h),s.stylesheetToken="ui-card_card",t.freezeTemplate(s);class r extends t.LightningElement{constructor(...u){super(...u);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}t.registerDecorators(r,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var m=t.registerComponent(r,{tmpl:l});c.default=m,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("ui/output/v/0_3_2",["exports","lwc/v/2_38_1"],function(c,t){"use strict";function k(i,e,s){var l=i?"["+i+"]":"";return".field-label"+l+" {font-size: 1.4rem;color: gray;}p"+l+" {margin: 0;}a"+l+" {text-decoration: var(--text-decoration);color: var(--color-text-link);}"}var h=[k];const y={classMap:{"field-label":!0},key:0},b={key:1};function n(i,e,s,l){const{d:r,t:m,h:o}=i;return[e.label?o("label",y,[m(r(e.label))]):null,o("p",b,[e.isDateTime?m(r(e.dateTimeValue)):null,e.isEmail?o("a",{attrs:{href:e.hrefEmail},key:2},[m(r(e.value))]):null,e.isNumber?m(r(e.formattedNumber)):null,e.isPhonenumber?o("a",{attrs:{href:e.hrefPhonenumber},key:3},[m(r(e.formattedPhonenumber))]):null,e.isText?m(r(e.value)):null])]}var g=t.registerTemplate(n);n.stylesheets=[],h&&n.stylesheets.push.apply(n.stylesheets,h),n.stylesheetToken="ui-output_output",t.freezeTemplate(n);function x(i){var e=(""+i).replace(/\D/g,""),s=e.match(/^(\d{3})(\d{3})(\d{4})$/);return s?"("+s[1]+") "+s[2]+"-"+s[3]:null}class C extends t.LightningElement{constructor(...e){super(...e);this.currencyCode=void 0,this.dateType=void 0,this.label=void 0,this.type="text",this.dateTimeValue=void 0,this.valuePrivate=void 0,this.moment=void 0,this._value=void 0}set value(e){this.valuePrivate=e,this.calculateDateTime()}get value(){return this.valuePrivate}get isDateTime(){return this.type==="datetime"}get isEmail(){return this.type==="email"}get isNumber(){return this.type==="number"}get isPhonenumber(){return this.type==="phone"}get isText(){return this.type==="text"}async calculateDateTime(){if(this.type==="datetime"){this.moment||(this.moment=await require("moment"));const e=this.moment(this._val);switch(this.dateType){case"weekOfYear":this.dateTimeValue=e.week();break;case"dayOfYear":this.dateTimeValue=e.dayOfYear();break;default:this.dateTimeValue=e.format("MMMM Do YYYY, h:mm:ss A")}}}get formattedNumber(){return this.valuePrivate?`${this.currencyCode} ${parseFloat(this.valuePrivate).toFixed(2)}`:" - "}get formattedPhonenumber(){return x(this.value)}get hrefPhonenumber(){return`tel:${this.value}`}get hrefEmail(){return`mailto:${this.value}`}}t.registerDecorators(C,{publicProps:{currencyCode:{config:0},dateType:{config:0},label:{config:0},type:{config:0},value:{config:3}},track:{dateTimeValue:1,valuePrivate:1},fields:["moment","_value"]});var d=t.registerComponent(C,{tmpl:g});c.default=d,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("example/contactListItemBubbling/v/0_0_1",["exports","lwc/v/2_38_1"],function(c,t){"use strict";function k(d,i,e){var s=d?"["+d+"]":"",l=d?"["+d+"-host]":"";return(i?":host {":l+" {")+"width: 300px;}a"+s+" {display: flex;margin-left: 6px;text-decoration: var(--text-decoration);color: var(--color-text-link);}p"+s+" {margin: 0 0 8px 6px;}img"+s+" {width: 30px;height: 30px;border-radius: 50%;}"}var h=[k];const y={href:"#"},b={key:2};function n(d,i,e,s){const{b:l,h:r,d:m,t:o}=d,{_m0:u}=s;return[r("a",{attrs:y,key:0,on:{click:u||(s._m0=l(i.handleSelect))}},[r("img",{attrs:{src:i.contact.Picture,alt:"Profile photo"},key:1}),r("p",b,[o(m(i.contact.Name))])])]}var g=t.registerTemplate(n);n.stylesheets=[],h&&n.stylesheets.push.apply(n.stylesheets,h),n.stylesheetToken="example-contactListItemBubbling_contactListItemBubbling",t.freezeTemplate(n);class x extends t.LightningElement{constructor(...i){super(...i);this.contact=void 0,this.budala="Bojan"}handleSelect(i){i.preventDefault();const e=new CustomEvent("contactselect",{bubbles:!0});this.dispatchEvent(e)}}t.registerDecorators(x,{publicProps:{contact:{config:0},budala:{config:0}}});var C=t.registerComponent(x,{tmpl:g});c.default=C,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("example/eventBubbling/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItemBubbling/v/0_0_1","ui/output/v/0_3_2","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(c,t,k,h,y,b){"use strict";function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var g=n(k),x=n(h),C=n(y),d=n(b);function i(v,p,E){var _=v?"["+v+"]":"";return"img"+_+" {width: 80px;height: 80px;border-radius: 50%;margin-bottom: 8px;}recipe-contact-list-item-bubbling"+_+" {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 2px 0 2px;}recipe-contact-list-item-bubbling"+_+":before {content: 'recipe-contact-list-item-bubbling';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}div.contacts"+_+" {display: flex;}.contact-details"+_+" {color: lightblue;padding-left: 10px;display: block;width: 5000px;max-width: 100%;}p"+_+" {margin: 0;}@media (max-width: 400px) {.contact-details"+_+" {padding-left: 10px;}}@media (max-width: 500px) {div.contacts"+_+" {display: block;}}@media (max-width: 900px) {.contact-list"+_+",\r .contact-details"+_+" {max-width: 100%;}}"}var e=[i];const s={props:{title:"EventBubbling"},key:0},l={classMap:{contacts:!0},key:2},r={"contact-list":!0},m={classMap:{"contact-details":!0},key:5},o={key:8},u={key:9},w={key:10},a={key:12};function P(v,p,E,_){const{b:W,k:B,c:j,i:N,h:D,d:M,t:S,fr:O}=v,{_m0:V}=_;return[j("ui-card",C.default,s,[p.contacts.data?O(1,[D("div",l,[D("div",{classMap:r,key:3,on:{contactselect:V||(_._m0=W(p.handleContactSelect))}},N(p.contacts.data,function(I){return j("example-contact-list-item-bubbling",g.default,{props:{contact:I},key:B(4,I.Id)})})),D("div",m,[p.selectedContact?O(6,[D("img",{attrs:{src:p.selectedContact.Picture,alt:"Profile photo"},key:7}),D("p",o,[S(M(p.selectedContact.Name))]),D("p",u,[S(M(p.selectedContact.Title))]),D("p",w,[j("ui-output",x.default,{props:{type:"phone",value:p.selectedContact.Phone},key:11})]),D("p",a,[j("ui-output",x.default,{props:{type:"email",value:p.selectedContact.Email},key:13})])],0):null])])],0):null])]}var f=t.registerTemplate(P);P.stylesheets=[],e&&P.stylesheets.push.apply(P.stylesheets,e),P.stylesheetToken="example-eventBubbling_eventBubbling",t.freezeTemplate(P);class T extends t.LightningElement{constructor(...p){super(...p);this.selectedContact=void 0,this.contacts={}}handleContactSelect(p){this.selectedContact=p.target.contact}}t.registerDecorators(T,{wire:{contacts:{adapter:d.default,config:function(v){return{}}}},fields:["selectedContact"]});var L=t.registerComponent(T,{tmpl:f});c.default=L,Object.defineProperty(c,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/eventBubbling/v/0_0_1","example/eventWithData/v/0_0_1"],function(c,t,k,h){"use strict";function y(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var b=y(k),n=y(h);function g(f,T,L){var v=f?"["+f+"]":"";return"main"+v+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+v+" {color: #1798c1;}"}var x=[g];const C=t.parseFragment`<img src="/assets/recipes-logo.png" alt="logo"${3}>`,d=t.parseFragment`<h1${3}>TODO -LWC experiments 1</h1>`,i=t.parseFragment`<br${3}>`,e=t.parseFragment`<a href="/index-old.html"${3}>Old site</a>`,s={key:0},l={key:7},r={key:8},m={key:9},o={key:10};function u(f,T,L,v){const{st:p,c:E,h:_}=f;return[_("main",s,[p(C(),2),p(d(),4),p(i(),6),_("div",l,[E("example-event-bubbling",b.default,r)]),_("div",m,[E("example-event-with-data",n.default,o)]),p(e(),12)])]}var w=t.registerTemplate(u);u.stylesheets=[],x&&u.stylesheets.push.apply(u.stylesheets,x),u.stylesheetToken="example-app_app",t.freezeTemplate(u);class a extends t.LightningElement{}var P=t.registerComponent(a,{tmpl:w});c.default=P,Object.defineProperty(c,"__esModule",{value:!0})});
