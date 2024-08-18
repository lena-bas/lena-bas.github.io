LWR.define("data/contacts/v/0_0_1",["exports"],function(n){"use strict";const e=[{Title:"Sunflowers",Picture:"/assets/images/lena/flowers/01.jpg"},{Title:"Yellow",Picture:"/assets/images/lena/flowers/12.jpg"},{Title:"Bela Rada",Picture:"/assets/images/lena/flowers/13.jpg"},{Title:"TODO",Picture:"/assets/images/lena/flowers/14.jpg"},{Title:"Lokvanj",Picture:"/assets/images/lena/flowers/15.jpg"},{Title:"Red, blue, white",Picture:"/assets/images/lena/flowers/16.jpg"},{Title:"Framed picture",Picture:"/assets/images/lena/flowers/17.jpg"},{Title:"Mak",Picture:"/assets/images/lena/flowers/18.jpg"},{Title:"Lillies",Picture:"/assets/images/lena/flowers/19.jpg"},{Title:"Mrtva Priroda",Picture:"/assets/images/lena/flowers/20.jpg"},{Title:"Lidia",Picture:"/assets/images/lena/people/01.jpg"},{Title:"Doca",Picture:"/assets/images/lena/people/02.jpg"},{Title:"Marko i Luka",Picture:"/assets/images/lena/people/03.jpg"},{Title:"Unuci",Picture:"/assets/images/lena/people/04.jpg"},{Title:"Stariji unuci",Picture:"/assets/images/lena/people/05.jpg"},{Title:"Mako?",Picture:"/assets/images/lena/people/06.jpg"},{Title:"Lidia",Picture:"/assets/images/lena/people/07.jpg"},{Title:"Filip i Katarina na placu",Picture:"/assets/images/lena/people/08.jpg"},{Title:"Biciklist",Picture:"/assets/images/lena/people/09.jpg"},{Title:"Luka",Picture:"/assets/images/lena/people/10.jpg"}];n.contacts=e,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("data/wireGetContactListProvider/v/0_0_1",["exports","lwc/v/2_38_1","data/contacts/v/0_0_1"],function(n,e,y){"use strict";var p=void 0;class b{constructor(_){this.connected=!1,this.dataCallback=_}connect(){this.connected=!0,this.provideContactList()}disconnect(){this.connected=!1}update(){this.provideContactList()}provideContactList(){this.connected&&this.dataCallback({data:y.contacts})}}e.registerDecorators(b,{fields:["connected"]});var x=e.registerComponent(b,{tmpl:p});n.default=x,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(n,e){"use strict";function y(u,l,L){var t=u?"["+u+"]":"";return"@media (min-width: 48em) {.card"+t+" {padding: 2rem;}}.card"+t+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+t+" .card-header"+t+",.card"+t+" .card-body"+t+",.card"+t+" .card-footer"+t+" {padding: 0.8rem;padding-bottom: 0;}.card"+t+" .card-header:last-child"+t+",.card"+t+" .card-body:last-child"+t+",.card"+t+" .card-footer:last-child"+t+" {padding-bottom: 0.8rem;}.card"+t+" .card-body"+t+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+t+" .card-image"+t+" {padding-top: 0.8rem;}.card"+t+" .card-image:first-child"+t+" {padding-top: 0;}.card"+t+" .card-image:first-child"+t+" img"+t+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+t+" .card-image:last-child"+t+" img"+t+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+t+" .card-title"+t+" {font-size: 2rem;font-weight: 800;}.card"+t+" .card-footer"+t+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+t+" .card-title"+t+" {font-size: 1.6rem;font-weight: 600;}}"}var p=[y];const b={classMap:{card:!0},key:0},x={classMap:{"card-header":!0},key:1},s={classMap:{"card-title":!0},key:2},_={classMap:{"card-subtitle":!0},key:3},P={classMap:{"card-body":!0},key:4},k={key:5},d=[],r={classMap:{"card-footer":!0},key:6},a={attrs:{name:"footer"},key:7};function i(u,l,L,t){const{d:h,t:w,h:T,s:j}=u;return[T("div",b,[T("div",x,[l.title?T("div",s,[w(h(l.title))]):null,l.subtitle?T("div",_,[w(h(l.subtitle))]):null]),T("div",P,[j("",k,d,L)]),T("div",r,[j("footer",a,d,L)])])]}var o=e.registerTemplate(i);i.slots=["","footer"],i.stylesheets=[],p&&i.stylesheets.push.apply(i.stylesheets,p),i.stylesheetToken="ui-card_card",e.freezeTemplate(i);class c extends e.LightningElement{constructor(...l){super(...l);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}e.registerDecorators(c,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var m=e.registerComponent(c,{tmpl:o});n.default=m,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("ui/output/v/0_3_2",["exports","lwc/v/2_38_1"],function(n,e){"use strict";function y(r,a,i){var o=r?"["+r+"]":"";return".field-label"+o+" {font-size: 1.4rem;color: gray;}p"+o+" {margin: 0;}a"+o+" {text-decoration: var(--text-decoration);color: var(--color-text-link);}"}var p=[y];const b={classMap:{"field-label":!0},key:0},x={key:1};function s(r,a,i,o){const{d:c,t:m,h:u}=r;return[a.label?u("label",b,[m(c(a.label))]):null,u("p",x,[a.isDateTime?m(c(a.dateTimeValue)):null,a.isEmail?u("a",{attrs:{href:a.hrefEmail},key:2},[m(c(a.value))]):null,a.isNumber?m(c(a.formattedNumber)):null,a.isPhonenumber?u("a",{attrs:{href:a.hrefPhonenumber},key:3},[m(c(a.formattedPhonenumber))]):null,a.isText?m(c(a.value)):null])]}var _=e.registerTemplate(s);s.stylesheets=[],p&&s.stylesheets.push.apply(s.stylesheets,p),s.stylesheetToken="ui-output_output",e.freezeTemplate(s);function P(r){var a=(""+r).replace(/\D/g,""),i=a.match(/^(\d{3})(\d{3})(\d{4})$/);return i?"("+i[1]+") "+i[2]+"-"+i[3]:null}class k extends e.LightningElement{constructor(...a){super(...a);this.currencyCode=void 0,this.dateType=void 0,this.label=void 0,this.type="text",this.dateTimeValue=void 0,this.valuePrivate=void 0,this.moment=void 0,this._value=void 0}set value(a){this.valuePrivate=a,this.calculateDateTime()}get value(){return this.valuePrivate}get isDateTime(){return this.type==="datetime"}get isEmail(){return this.type==="email"}get isNumber(){return this.type==="number"}get isPhonenumber(){return this.type==="phone"}get isText(){return this.type==="text"}async calculateDateTime(){if(this.type==="datetime"){this.moment||(this.moment=await require("moment"));const a=this.moment(this._val);switch(this.dateType){case"weekOfYear":this.dateTimeValue=a.week();break;case"dayOfYear":this.dateTimeValue=a.dayOfYear();break;default:this.dateTimeValue=a.format("MMMM Do YYYY, h:mm:ss A")}}}get formattedNumber(){return this.valuePrivate?`${this.currencyCode} ${parseFloat(this.valuePrivate).toFixed(2)}`:" - "}get formattedPhonenumber(){return P(this.value)}get hrefPhonenumber(){return`tel:${this.value}`}get hrefEmail(){return`mailto:${this.value}`}}e.registerDecorators(k,{publicProps:{currencyCode:{config:0},dateType:{config:0},label:{config:0},type:{config:0},value:{config:3}},track:{dateTimeValue:1,valuePrivate:1},fields:["moment","_value"]});var d=e.registerComponent(k,{tmpl:_});n.default=d,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/contactListItemBubbling/v/0_0_1",["exports","lwc/v/2_38_1"],function(n,e){"use strict";function y(d,r,a){var i=d?"["+d+"]":"",o=d?"["+d+"-host]":"";return(r?":host {":o+" {")+"width: 300px;}a"+i+" {display: flex;margin-left: 6px;text-decoration: var(--text-decoration);color: var(--color-text-link);}p"+i+" {margin: 0 0 8px 6px;}img"+i+" {width: 30px;height: 30px;border-radius: 50%;}"}var p=[y];const b={href:"#"},x={key:2};function s(d,r,a,i){const{b:o,h:c,d:m,t:u}=d,{_m0:l}=i;return[c("a",{attrs:b,key:0,on:{click:l||(i._m0=o(r.handleSelect))}},[c("img",{attrs:{src:r.contact.Picture,alt:"Profile photo"},key:1}),c("p",x,[u(m(r.contact.Name))])])]}var _=e.registerTemplate(s);s.stylesheets=[],p&&s.stylesheets.push.apply(s.stylesheets,p),s.stylesheetToken="example-contactListItemBubbling_contactListItemBubbling",e.freezeTemplate(s);class P extends e.LightningElement{constructor(...r){super(...r);this.contact=void 0,this.budala="Bojan"}handleSelect(r){r.preventDefault();const a=new CustomEvent("contactselect",{bubbles:!0});this.dispatchEvent(a)}}e.registerDecorators(P,{publicProps:{contact:{config:0},budala:{config:0}}});var k=e.registerComponent(P,{tmpl:_});n.default=k,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/eventBubbling/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItemBubbling/v/0_0_1","ui/output/v/0_3_2","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(n,e,y,p,b,x){"use strict";function s(g){return g&&typeof g=="object"&&"default"in g?g:{default:g}}var _=s(y),P=s(p),k=s(b),d=s(x);function r(g,f,O){var v=g?"["+g+"]":"";return"img"+v+" {max-width:100%;max-height:100%;margin-bottom: 8px;}recipe-contact-list-item-bubbling"+v+" {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 2px 0 2px;}recipe-contact-list-item-bubbling"+v+":before {content: 'recipe-contact-list-item-bubbling';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}div.contacts"+v+" {display: flex;}.contact-details"+v+" {color: lightblue;padding-left: 10px;display: block;width: 5000px;max-width: 100%;}p"+v+" {margin: 0;}@media (max-width: 400px) {.contact-details"+v+" {padding-left: 10px;}}@media (max-width: 500px) {div.contacts"+v+" {display: block;}}@media (max-width: 900px) {.contact-list"+v+",\r .contact-details"+v+" {max-width: 100%;}}"}var a=[r];const i={props:{title:"EventBubbling"},key:0},o={classMap:{contacts:!0},key:2},c={"contact-list":!0},m={classMap:{"contact-details":!0},key:5},u={key:8},l={key:9},L={key:10},t={key:12};function h(g,f,O,v){const{b:N,k:R,c:M,i:W,h:C,d:D,t:S,fr:E}=g,{_m0:z}=v;return[M("ui-card",k.default,i,[f.contacts.data?E(1,[C("div",o,[C("div",{classMap:c,key:3,on:{contactselect:z||(v._m0=N(f.handleContactSelect))}},W(f.contacts.data,function(B){return M("example-contact-list-item-bubbling",_.default,{props:{contact:B},key:R(4,B.Id)})})),C("div",m,[f.selectedContact?E(6,[C("img",{attrs:{src:f.selectedContact.Picture,alt:"Profile photo"},key:7}),C("p",u,[S(D(f.selectedContact.Name))]),C("p",l,[S(D(f.selectedContact.Title))]),C("p",L,[M("ui-output",P.default,{props:{type:"phone",value:f.selectedContact.Phone},key:11})]),C("p",t,[M("ui-output",P.default,{props:{type:"email",value:f.selectedContact.Email},key:13})])],0):null])])],0):null])]}var w=e.registerTemplate(h);h.stylesheets=[],a&&h.stylesheets.push.apply(h.stylesheets,a),h.stylesheetToken="example-eventBubbling_eventBubbling",e.freezeTemplate(h);class T extends e.LightningElement{constructor(...f){super(...f);this.selectedContact=void 0,this.contacts={}}handleContactSelect(f){this.selectedContact=f.target.contact}}e.registerDecorators(T,{wire:{contacts:{adapter:d.default,config:function(g){return{}}}},fields:["selectedContact"]});var j=e.registerComponent(T,{tmpl:w});n.default=j,Object.defineProperty(n,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/eventBubbling/v/0_0_1"],function(n,e,y){"use strict";function p(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var b=p(y);function x(l,L,t){var h=l?"["+l+"]":"";return"main"+h+" {margin: 30px;display: flex;flex-direction: column;align-items: left;}h1"+h+" {color: #1798c1;}"}var s=[x];const _=e.parseFragment`<h1${3}>TODO -LWC experiments 2</h1>`,P=e.parseFragment`<br${3}>`,k=e.parseFragment`<div${3}>Experimenting again, on 17-Aug-2024</div>`,d=e.parseFragment`<br${3}>`,r={key:0},a={key:7},i={key:8};function o(l,L,t,h){const{st:w,c:T,h:j,t:g}=l;return[j("main",r,[w(_(),2),w(P(),4),w(k(),6),j("div",a,[T("example-event-bubbling",b.default,i)]),w(d(),10),g("Last build: 17-Aug-2024 5:58 PM")])]}var c=e.registerTemplate(o);o.stylesheets=[],s&&o.stylesheets.push.apply(o.stylesheets,s),o.stylesheetToken="example-app_app",e.freezeTemplate(o);class m extends e.LightningElement{}var u=e.registerComponent(m,{tmpl:c});n.default=u,Object.defineProperty(n,"__esModule",{value:!0})});