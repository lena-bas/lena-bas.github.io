LWR.define("data/contacts/v/0_0_1",["exports"],function(l){"use strict";const a=[{Title:"Sunflowers",Picture:"/assets/images/lena/flowers/01.jpg"},{Title:"Yellow",Picture:"/assets/images/lena/flowers/12.jpg"},{Title:"Bela Rada",Picture:"/assets/images/lena/flowers/13.jpg"},{Title:"TODO",Picture:"/assets/images/lena/flowers/14.jpg"},{Title:"Lokvanj",Picture:"/assets/images/lena/flowers/15.jpg"},{Title:"Red, blue, white",Picture:"/assets/images/lena/flowers/16.jpg"},{Title:"Framed picture",Picture:"/assets/images/lena/flowers/17.jpg"},{Title:"Mak",Picture:"/assets/images/lena/flowers/18.jpg"},{Title:"Lillies",Picture:"/assets/images/lena/flowers/19.jpg"},{Title:"Mrtva Priroda",Picture:"/assets/images/lena/flowers/20.jpg"},{Title:"Lidia",Picture:"/assets/images/lena/people/01.jpg"},{Title:"Doca",Picture:"/assets/images/lena/people/02.jpg"},{Title:"Marko i Luka",Picture:"/assets/images/lena/people/03.jpg"},{Title:"Unuci",Picture:"/assets/images/lena/people/04.jpg"},{Title:"Stariji unuci",Picture:"/assets/images/lena/people/05.jpg"},{Title:"Mako?",Picture:"/assets/images/lena/people/06.jpg"},{Title:"Lidia",Picture:"/assets/images/lena/people/07.jpg"},{Title:"Filip i Katarina na placu",Picture:"/assets/images/lena/people/08.jpg"},{Title:"Biciklist",Picture:"/assets/images/lena/people/09.jpg"},{Title:"Luka",Picture:"/assets/images/lena/people/10.jpg"}];l.contacts=a,Object.defineProperty(l,"__esModule",{value:!0})}),LWR.define("data/wireGetContactListProvider/v/0_0_1",["exports","lwc/v/2_38_1","data/contacts/v/0_0_1"],function(l,a,P){"use strict";var m=void 0;class v{constructor(b){this.connected=!1,this.dataCallback=b}connect(){this.connected=!0,this.provideContactList()}disconnect(){this.connected=!1}update(){this.provideContactList()}provideContactList(){this.connected&&this.dataCallback({data:P.contacts})}}a.registerDecorators(v,{fields:["connected"]});var d=a.registerComponent(v,{tmpl:m});l.default=d,Object.defineProperty(l,"__esModule",{value:!0})}),LWR.define("ui/output/v/0_3_2",["exports","lwc/v/2_38_1"],function(l,a){"use strict";function P(c,e,s){var f=c?"["+c+"]":"";return".field-label"+f+" {font-size: 1.4rem;color: gray;}p"+f+" {margin: 0;}a"+f+" {text-decoration: var(--text-decoration);color: var(--color-text-link);}"}var m=[P];const v={classMap:{"field-label":!0},key:0},d={key:1};function r(c,e,s,f){const{d:u,t:y,h:i}=c;return[e.label?i("label",v,[y(u(e.label))]):null,i("p",d,[e.isDateTime?y(u(e.dateTimeValue)):null,e.isEmail?i("a",{attrs:{href:e.hrefEmail},key:2},[y(u(e.value))]):null,e.isNumber?y(u(e.formattedNumber)):null,e.isPhonenumber?i("a",{attrs:{href:e.hrefPhonenumber},key:3},[y(u(e.formattedPhonenumber))]):null,e.isText?y(u(e.value)):null])]}var b=a.registerTemplate(r);r.stylesheets=[],m&&r.stylesheets.push.apply(r.stylesheets,m),r.stylesheetToken="ui-output_output",a.freezeTemplate(r);function k(c){var e=(""+c).replace(/\D/g,""),s=e.match(/^(\d{3})(\d{3})(\d{4})$/);return s?"("+s[1]+") "+s[2]+"-"+s[3]:null}class n extends a.LightningElement{constructor(...e){super(...e);this.currencyCode=void 0,this.dateType=void 0,this.label=void 0,this.type="text",this.dateTimeValue=void 0,this.valuePrivate=void 0,this.moment=void 0,this._value=void 0}set value(e){this.valuePrivate=e,this.calculateDateTime()}get value(){return this.valuePrivate}get isDateTime(){return this.type==="datetime"}get isEmail(){return this.type==="email"}get isNumber(){return this.type==="number"}get isPhonenumber(){return this.type==="phone"}get isText(){return this.type==="text"}async calculateDateTime(){if(this.type==="datetime"){this.moment||(this.moment=await require("moment"));const e=this.moment(this._val);switch(this.dateType){case"weekOfYear":this.dateTimeValue=e.week();break;case"dayOfYear":this.dateTimeValue=e.dayOfYear();break;default:this.dateTimeValue=e.format("MMMM Do YYYY, h:mm:ss A")}}}get formattedNumber(){return this.valuePrivate?`${this.currencyCode} ${parseFloat(this.valuePrivate).toFixed(2)}`:" - "}get formattedPhonenumber(){return k(this.value)}get hrefPhonenumber(){return`tel:${this.value}`}get hrefEmail(){return`mailto:${this.value}`}}a.registerDecorators(n,{publicProps:{currencyCode:{config:0},dateType:{config:0},label:{config:0},type:{config:0},value:{config:3}},track:{dateTimeValue:1,valuePrivate:1},fields:["moment","_value"]});var o=a.registerComponent(n,{tmpl:b});l.default=o,Object.defineProperty(l,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(l,a){"use strict";function P(i,T,w){var t=i?"["+i+"]":"";return"@media (min-width: 48em) {.card"+t+" {padding: 2rem;}}.card"+t+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+t+" .card-header"+t+",.card"+t+" .card-body"+t+",.card"+t+" .card-footer"+t+" {padding: 0.8rem;padding-bottom: 0;}.card"+t+" .card-header:last-child"+t+",.card"+t+" .card-body:last-child"+t+",.card"+t+" .card-footer:last-child"+t+" {padding-bottom: 0.8rem;}.card"+t+" .card-body"+t+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+t+" .card-image"+t+" {padding-top: 0.8rem;}.card"+t+" .card-image:first-child"+t+" {padding-top: 0;}.card"+t+" .card-image:first-child"+t+" img"+t+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+t+" .card-image:last-child"+t+" img"+t+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+t+" .card-title"+t+" {font-size: 2rem;font-weight: 800;}.card"+t+" .card-footer"+t+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+t+" .card-title"+t+" {font-size: 1.6rem;font-weight: 600;}}"}var m=[P];const v={classMap:{card:!0},key:0},d={classMap:{"card-header":!0},key:1},r={classMap:{"card-title":!0},key:2},b={classMap:{"card-subtitle":!0},key:3},k={classMap:{"card-body":!0},key:4},n={key:5},o=[],c={classMap:{"card-footer":!0},key:6},e={attrs:{name:"footer"},key:7};function s(i,T,w,t){const{d:g,t:C,h:x,s:j}=i;return[x("div",v,[x("div",d,[T.title?x("div",r,[C(g(T.title))]):null,T.subtitle?x("div",b,[C(g(T.subtitle))]):null]),x("div",k,[j("",n,o,w)]),x("div",c,[j("footer",e,o,w)])])]}var f=a.registerTemplate(s);s.slots=["","footer"],s.stylesheets=[],m&&s.stylesheets.push.apply(s.stylesheets,m),s.stylesheetToken="ui-card_card",a.freezeTemplate(s);class u extends a.LightningElement{constructor(...T){super(...T);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}a.registerDecorators(u,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var y=a.registerComponent(u,{tmpl:f});l.default=y,Object.defineProperty(l,"__esModule",{value:!0})}),LWR.define("example/contactListItemBubbling/v/0_0_1",["exports","lwc/v/2_38_1"],function(l,a){"use strict";function P(n,o,c){var e=n?"["+n+"]":"",s=n?"["+n+"-host]":"";return(o?":host {":s+" {")+"width: 300px;}a"+e+" {margin-left: 6px;}p"+e+" {margin: 0 0 8px 6px;}img"+e+" {width: 30px;height: 30px;border-radius: 50%;}"}var m=[P];const v={href:"#"};function d(n,o,c,e){const{b:s,h:f}=n,{_m0:u}=e;return[f("a",{attrs:v,key:0,on:{click:u||(e._m0=s(o.handleSelect))}},[f("img",{attrs:{src:o.contact.Picture,alt:"Profile photo"},key:1})])]}var r=a.registerTemplate(d);d.stylesheets=[],m&&d.stylesheets.push.apply(d.stylesheets,m),d.stylesheetToken="example-contactListItemBubbling_contactListItemBubbling",a.freezeTemplate(d);class b extends a.LightningElement{constructor(...o){super(...o);this.contact=void 0,this.budala="Bojan"}handleSelect(o){o.preventDefault();const c=new CustomEvent("contactselect",{bubbles:!0});this.dispatchEvent(c)}}a.registerDecorators(b,{publicProps:{contact:{config:0},budala:{config:0}}});var k=a.registerComponent(b,{tmpl:r});l.default=k,Object.defineProperty(l,"__esModule",{value:!0})}),LWR.define("example/eventBubbling/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItemBubbling/v/0_0_1","ui/card/v/0_3_2","ui/output/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(l,a,P,m,v,d){"use strict";function r(_){return _&&typeof _=="object"&&"default"in _?_:{default:_}}var b=r(P),k=r(m),n=r(v),o=r(d);function c(_,p,O){var h=_?"["+_+"]":"";return"img"+h+" {max-width:100%;max-height:100%;margin-bottom: 8px;}recipe-contact-list-item-bubbling"+h+" {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 2px 0 2px;}recipe-contact-list-item-bubbling"+h+":before {content: 'recipe-contact-list-item-bubbling';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}div.contacts"+h+" {display: flex;}.contact-details"+h+" {color: lightblue;padding-left: 10px;display: block;width: 5000px;max-width: 100%;}p"+h+" {margin: 0;}@media (max-width: 400px) {.contact-details"+h+" {padding-left: 10px;}}@media (max-width: 500px) {div.contacts"+h+" {display: block;}}@media (max-width: 900px) {.contact-list"+h+",\r .contact-details"+h+" {max-width: 100%;}}"}var e=[c];const s={key:0},f={"contact-list":!0},u={props:{title:""},key:4},y={classMap:{"contact-details":!0},key:6},i={key:9},T={key:10},w={key:11},t={key:13};function g(_,p,O,h){const{b:N,k:R,c:M,i:z,h:L,fr:S,t:D,d:B}=_,{_m0:I}=h;return[M("ui-card",k.default,s,[p.contacts.data?S(1,[L("div",{classMap:f,key:2,on:{contactselect:I||(h._m0=N(p.handleContactSelect))}},z(p.contacts.data,function(E){return M("example-contact-list-item-bubbling",b.default,{props:{contact:E},key:R(3,E.Id)})}))],0):null]),M("ui-card",k.default,u,[p.contacts.data?S(5,[L("div",y,[p.selectedContact?S(7,[D("selected contact"),L("img",{attrs:{src:p.selectedContact.Picture,alt:"Profile photo"},key:8}),L("p",i,[D(B(p.selectedContact.Name))]),L("p",T,[D(B(p.selectedContact.Title))]),L("p",w,[M("ui-output",n.default,{props:{type:"phone",value:p.selectedContact.Phone},key:12})]),L("p",t,[M("ui-output",n.default,{props:{type:"email",value:p.selectedContact.Email},key:14})])],0):null])],0):null])]}var C=a.registerTemplate(g);g.stylesheets=[],e&&g.stylesheets.push.apply(g.stylesheets,e),g.stylesheetToken="example-eventBubbling_eventBubbling",a.freezeTemplate(g);class x extends a.LightningElement{constructor(...p){super(...p);this.selectedContact=void 0,this.contacts={}}handleContactSelect(p){this.selectedContact=p.target.contact}}a.registerDecorators(x,{wire:{contacts:{adapter:o.default,config:function(_){return{}}}},fields:["selectedContact"]});var j=a.registerComponent(x,{tmpl:C});l.default=j,Object.defineProperty(l,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/eventBubbling/v/0_0_1"],function(l,a,P){"use strict";function m(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var v=m(P);function d(i,T,w){var t=i?"["+i+"]":"";return"main"+t+" {margin: 30px;display: flex;flex-direction: column;align-items: left;}h1"+t+" {color: #1798c1;}"}var r=[d];const b=a.parseFragment`<h3${3}>Lena Bas - Sample Gallery</h3>`,k=a.parseFragment`<br${3}>`,n=a.parseFragment`<br${3}>`,o={key:0},c={key:5},e={key:6};function s(i,T,w,t){const{st:g,c:C,h:x,t:j}=i;return[x("main",o,[g(b(),2),g(k(),4),x("div",c,[C("example-event-bubbling",v.default,e)]),g(n(),8),j("Last build: 17-Aug-2024 5:58 PM")])]}var f=a.registerTemplate(s);s.stylesheets=[],r&&s.stylesheets.push.apply(s.stylesheets,r),s.stylesheetToken="example-app_app",a.freezeTemplate(s);class u extends a.LightningElement{}var y=a.registerComponent(u,{tmpl:f});l.default=y,Object.defineProperty(l,"__esModule",{value:!0})});
