(function(e){function t(t){for(var n,i,o=t[0],s=t[1],l=t[2],b=0,d=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,o=1;o<c.length;o++){var s=c[o];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/TIG_WEB_2021/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"05b7":function(e,t,c){},1826:function(e,t,c){},"18d7":function(e,t,c){"use strict";c("f864")},"2bb0":function(e,t,c){},"2d1b":function(e,t,c){"use strict";c("a4e6")},"2da1":function(e,t,c){"use strict";c("ffa3")},3262:function(e,t,c){e.exports=c.p+"img/tishiki_thumbnail.58365467.png"},"34ed":function(e,t,c){e.exports=c.p+"img/gallery7.09fa21c0.jpeg"},3815:function(e,t,c){"use strict";c("fd03")},"3d69":function(e,t,c){},"3fc3":function(e,t,c){"use strict";c("1826")},"4be7":function(e,t,c){"use strict";c("c538")},"4ef8":function(e,t,c){"use strict";c("9f04")},"4f88":function(e,t,c){e.exports=c.p+"img/landing.713a312e.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function r(e,t){var c=Object(n["C"])("router-view");return Object(n["u"])(),Object(n["d"])(c)}c("18d7");const a={};a.render=r;var i=a,o=c("6c02"),s={id:"home"};function l(e,t,c,r,a,i){var o=Object(n["C"])("drawing"),l=Object(n["C"])("landing"),u=Object(n["C"])("concept"),b=Object(n["C"])("about"),d=Object(n["C"])("projects"),j=Object(n["C"])("news"),p=Object(n["C"])("gallery"),f=Object(n["C"])("page-footer");return Object(n["u"])(),Object(n["f"])("div",s,[Object(n["i"])(o),Object(n["i"])(l),Object(n["i"])(u),Object(n["i"])(b),Object(n["i"])(d),Object(n["i"])(j),Object(n["i"])(p),Object(n["i"])(f)])}function u(e,t,c,r,a,i){var o=Object(n["C"])("camera"),s=Object(n["C"])("point-light"),l=Object(n["C"])("lambert-material"),u=Object(n["C"])("noisy-sphere"),b=Object(n["C"])("scene"),d=Object(n["C"])("renderer");return Object(n["u"])(),Object(n["d"])(d,{ref:"renderer",antialias:"",resize:"window"},{default:Object(n["I"])((function(){return[Object(n["i"])(o,{position:{z:10}}),Object(n["i"])(b,{ref:"scene"},{default:Object(n["I"])((function(){return[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.lights,(function(e){return Object(n["u"])(),Object(n["d"])(s,{key:e.color,color:e.color,intensity:e.intensity,position:{x:e.position[0],y:e.position[1],z:e.position[2]}},null,8,["color","intensity","position"])})),128)),Object(n["i"])(u,{ref:"sphere",radius:3.7,widthSegments:64,heightSegments:64,timeCoef:6e-4,noiseCoef:.25,dispCoef:.9},{default:Object(n["I"])((function(){return[Object(n["i"])(l)]})),_:1},8,["radius","timeCoef","noiseCoef","dispCoef"])]})),_:1},512)]})),_:1},512)}var b=c("a66c"),d=c("af1e"),j={components:{NoisySphere:b["a"],Renderer:d["d"],Camera:d["a"],Scene:d["e"],PointLight:d["c"],LambertMaterial:d["b"]},setup:function(){var e=Object(n["z"])(null),t=Object(n["z"])(null),c=Object(n["z"])(null),r=30,a=.9,i=[{color:"#e2007e",intensity:a,position:[r*Math.cos(-.25*Math.PI),r*Math.sin(-.25*Math.PI),-12]},{color:"#019fe8",intensity:a,position:[r*Math.cos(.25*Math.PI),r*Math.sin(.25*Math.PI),-12]},{color:"#fff000",intensity:a,position:[r*Math.cos(125/180*Math.PI),r*Math.sin(125/180*Math.PI),-12]},{color:"#eeeeee",intensity:a,position:[r*Math.cos(-125/180*Math.PI),r*Math.sin(-125/180*Math.PI),-12]}];return{renderer:e,scene:t,sphere:c,lights:i}}};c("3815");j.render=u;var p=j;Object(n["x"])("data-v-3fcb3a16");var f={class:"landing"},O={class:"title"},g={class:"title-tsukuba"},v=Object(n["g"])("span",null,"T",-1),m={class:"title-innovation"},y=Object(n["g"])("span",null,"I",-1),h={class:"title-gallery"},_=Object(n["g"])("span",null,"G",-1),w=Object(n["g"])("div",{class:"date"}," 2021.11.6-7 ",-1),I=Object(n["g"])("div",{class:"organizer"},[Object(n["g"])("div",{class:"presents"}," presents by "),Object(n["g"])("div",{class:"nu-ink"}," Nu ink. ")],-1);function x(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",f,[Object(n["g"])("div",O,[Object(n["g"])("div",g,[v,(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.revealTitles[0],(function(e,t){return Object(n["u"])(),Object(n["f"])("span",{class:"title-hidden__tsukuba",key:t},Object(n["E"])(e),1)})),128))]),Object(n["g"])("div",m,[y,(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.revealTitles[1],(function(e,t){return Object(n["u"])(),Object(n["f"])("span",{class:"title-hidden__innovation",key:t},Object(n["E"])(e),1)})),128))]),Object(n["g"])("div",h,[_,(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.revealTitles[2],(function(e,t){return Object(n["u"])(),Object(n["f"])("span",{class:"title-hidden__gallery",key:t},Object(n["E"])(e),1)})),128))])]),w,I])}Object(n["v"])();c("a630"),c("3ca3");var N=c("cffa"),k={setup:function(){var e=[Array.from("SUKUBA"),Array.from("NNOVATION"),Array.from("ALLERY")],t=3;return Object(n["s"])((function(){N["a"].from(".title-tsukuba",{duration:2.5,delay:t,left:"48%",ease:"expo.out"}),N["a"].from(".title-innovation",{duration:2.5,delay:t,left:"49%",ease:"expo.out"}),N["a"].from(".title-gallery",{duration:2.5,delay:t,left:"48%",ease:"expo.out"}),N["a"].from(".title-hidden__tsukuba",{duration:2.5,delay:t,opacity:0,stagger:.1,ease:"expo.out"}),N["a"].from(".title-hidden__innovation",{duration:2.5,delay:t,opacity:0,stagger:.1,ease:"expo.out"}),N["a"].from(".title-hidden__gallery",{duration:2.5,delay:t,opacity:0,stagger:.1,ease:"expo.out"}),N["a"].from(".date",{duration:2.5,opacity:0,delay:t+3,left:"50%",ease:"expo.out"}),N["a"].from(".organizer",{duration:1.5,delay:t,top:"67%",ease:"expo.out"})})),{revealTitles:e}}};c("7583");k.render=x,k.__scopeId="data-v-3fcb3a16";var C=k;Object(n["x"])("data-v-5dc39041");var S=Object(n["g"])("div",{class:"concept-title"}," New Normal ",-1),T=Object(n["g"])("div",{class:"concept-subTitle"}," ~新たなありかたの模索~ ",-1),A=Object(n["g"])("div",{class:"concept-sentence"},[Object(n["h"])(" コロナ禍において"),Object(n["g"])("br"),Object(n["h"])(" 不要不急と切り捨てられてきた"),Object(n["g"])("br"),Object(n["h"])(" エンタメや文化・芸術が"),Object(n["g"])("br"),Object(n["h"])(" 新しい日常においてどうあるべきかを"),Object(n["g"])("br"),Object(n["h"])(" テクノロジーの視点から"),Object(n["g"])("br"),Object(n["h"])(" 見つめ直し、想像し、"),Object(n["g"])("br"),Object(n["h"])(" 体験できる場を創出する ")],-1);function M(e,t,c,r,a,i){var o=Object(n["C"])("section-base");return Object(n["u"])(),Object(n["d"])(o,{isWrapperFull:!0,class:"concept"},{content:Object(n["I"])((function(){return[S,T,A]})),_:1})}Object(n["v"])(),Object(n["x"])("data-v-72a0b9dd");var F={key:0,class:"section-base__header"},E={class:"section-base__content"};function P(e,t,c,r,a,i){var o=Object(n["C"])("section-header"),s=Object(n["C"])("wrapper");return Object(n["u"])(),Object(n["d"])(s,{isFull:c.isWrapperFull,class:"section-base"},{default:Object(n["I"])((function(){return[Object(n["g"])("div",{class:Object(n["o"])(["section-base__wrapper",{"section-base__wrapperRight":c.isRight}])},[r.isTitleNeeded?(Object(n["u"])(),Object(n["f"])("div",F,[Object(n["i"])(o,{title:c.title},null,8,["title"])])):Object(n["e"])("",!0),Object(n["g"])("div",E,[Object(n["B"])(e.$slots,"content",{},void 0,!0)])],2)]})),_:3},8,["isFull"])}function U(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",{class:Object(n["o"])(["wrapper",r.wrapperClass])},[Object(n["B"])(e.$slots,"default",{},void 0,!0)],2)}Object(n["v"])();var R={props:{isFull:{type:Boolean,required:!0}},setup:function(e){var t=Object(n["b"])((function(){return e.isFull?"wrapper-full":"wrapper-restricted"}));return{wrapperClass:t}}};c("d0f6");R.render=U,R.__scopeId="data-v-7c192478";var B=R;Object(n["x"])("data-v-b161d952");var L={class:"section-header"},z={class:"section-title"};function W(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("header",L,[Object(n["g"])("div",z,Object(n["E"])(r.sectionTitle),1)])}Object(n["v"])();var q={props:{title:{type:String,required:!0}},setup:function(e){var t=Object(n["b"])((function(){return e.title.toUpperCase()}));return{sectionTitle:t}}};c("4be7");q.render=W,q.__scopeId="data-v-b161d952";var G=q,V={components:{Wrapper:B,SectionHeader:G},props:{isWrapperFull:{type:Boolean,required:!0},title:{type:String,default:""},isRight:{type:Boolean,default:!1}},setup:function(e){var t=Object(n["b"])((function(){return""!==e.title}));return{isTitleNeeded:t}}};c("5b40");V.render=P,V.__scopeId="data-v-72a0b9dd";var D=V,J={components:{SectionBase:D}};c("2da1");J.render=M,J.__scopeId="data-v-5dc39041";var K=J,H=c("7e27"),Y=c.n(H);Object(n["x"])("data-v-1aeb7a8a");var X={class:"about-image"},$={src:Y.a,ref:"imageRef"},Q={class:"about-sentence"};function Z(e,t,c,r,a,i){var o=Object(n["C"])("section-base");return Object(n["u"])(),Object(n["d"])(o,{isWrapperFull:!1,isRight:!0,title:"about",class:"about",style:Object(n["p"])(r.imgPadding)},{content:Object(n["I"])((function(){return[Object(n["g"])("div",X,[Object(n["g"])("img",$,null,512)]),Object(n["g"])("div",Q,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.sentences,(function(e){return Object(n["u"])(),Object(n["f"])("div",{key:e,class:"about-paragraph"},Object(n["E"])(e),1)})),128))])]})),_:1},8,["style"])}Object(n["v"])();c("d3b7"),c("25f0");var ee={components:{SectionBase:D},setup:function(){var e=Object(n["z"])(null),t=Object(n["z"])(0);Object(n["s"])((function(){e.value.addEventListener("load",(function(){t.value=e.value.clientHeight}))}));var c=Object(n["b"])((function(){var e=.618*t.value;return{"padding-bottom":e.toString()+"px"}})),r=["Innovation World Festa (通称イノフェス)は筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェスです。","例年は J-WAVE と共催していましたが今年はNu ink.単独で、イノフェスのサテライトイベントとして「Tsukuba Innovation Gallery」を開催します。"];return{imageRef:e,imgPadding:c,sentences:r}}};c("b5a2");ee.render=Z,ee.__scopeId="data-v-1aeb7a8a";var te=ee;function ce(e,t,c,r,a,i){var o=Object(n["C"])("projects-overview"),s=Object(n["C"])("project-list"),l=Object(n["C"])("section-base");return Object(n["u"])(),Object(n["d"])(l,{isWrapperFull:!1,title:"projects",class:"projects"},{content:Object(n["I"])((function(){return[Object(n["i"])(o),Object(n["i"])(s,{projects:r.projects},null,8,["projects"])]})),_:1})}Object(n["x"])("data-v-092d3d2e");var ne={class:"projects-overview"},re=Object(n["g"])("div",{class:"projects-overview__intro"}," TIGでは次の5つの企画を実施します。 ",-1),ae=Object(n["g"])("div",{class:"projects-overview__titles"},[Object(n["h"])(" 「知識人と歩く筑波大学」「音楽実験」「ラジオ」 "),Object(n["g"])("br"),Object(n["h"])(" 「プロジェクションマッピング」「トークセッション」 ")],-1),ie=Object(n["g"])("div",{class:"projects-overview__comment"}," 各企画は筑波大学学園祭「雙峰祭」に合わせて随時公開するのでお見逃しなく! ",-1),oe=[re,ae,ie];function se(e,t){return Object(n["u"])(),Object(n["f"])("div",ne,oe)}Object(n["v"])();c("64b7");const le={};le.render=se,le.__scopeId="data-v-092d3d2e";var ue=le;c("a4d3"),c("e01a");Object(n["x"])("data-v-2aa20d0c");var be={class:"project-list"};function de(e,t,c,r,a,i){var o=Object(n["C"])("project");return Object(n["u"])(),Object(n["f"])("div",be,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(c.projects,(function(e,t){return Object(n["u"])(),Object(n["d"])(o,{key:e.title,order:t+1,title:e.title,description:e.description,collaborators:e.collaborators,isReleased:e.isReleased,projectUrl:e.projectUrl,imageName:e.imageName},null,8,["order","title","description","collaborators","isReleased","projectUrl","imageName"])})),128))])}Object(n["v"])(),Object(n["x"])("data-v-32a97bfc");var je={class:"project"},pe={class:"project-thumbnail"},fe={key:0},Oe={key:1},ge={class:"project-title"},ve={class:"project-description"},me={key:0,class:"project-collaboration"},ye=Object(n["h"])(" 協力者 ");function he(e,t,c,r,a,i){var o=Object(n["C"])("thumbnail"),s=Object(n["C"])("upcoming-board");return Object(n["u"])(),Object(n["f"])("div",je,[Object(n["g"])("div",pe,[c.isReleased?(Object(n["u"])(),Object(n["f"])("div",fe,[Object(n["i"])(o,{url:c.projectUrl,imageName:c.imageName},null,8,["url","imageName"])])):(Object(n["u"])(),Object(n["f"])("div",Oe,[Object(n["i"])(s)]))]),Object(n["g"])("div",ge,Object(n["E"])(c.title),1),Object(n["g"])("div",ve,Object(n["E"])(c.description),1),c.collaborators.length>0?(Object(n["u"])(),Object(n["f"])("div",me,[ye,(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(c.collaborators,(function(e){return Object(n["u"])(),Object(n["f"])("div",{class:"project-collaborators",key:e},Object(n["E"])(e),1)})),128))])):Object(n["e"])("",!0)])}Object(n["v"])();c("a9e3");Object(n["x"])("data-v-622922cc");var _e={class:"upcoming-board"},we={class:"upcoming-board__content"},Ie={class:"upcoming-board__sentence"},xe=Object(n["h"])(" 公開まで "),Ne={class:"upcoming-board__time"};function ke(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",_e,[Object(n["g"])("div",we,[Object(n["g"])("div",Ie,[xe,Object(n["g"])("div",Ne,Object(n["E"])(r.displayTime),1)])])])}Object(n["v"])();var Ce={setup:function(){Object(n["s"])((function(){setInterval(a,1e3)}));var e=Object(n["z"])(0),t=Object(n["z"])(0),c=Object(n["z"])(0),r=Object(n["z"])(0),a=function(){var n=new Date,a=new Date("2021-11-06T00:00:00"),i=a.getTime()-n.getTime();e.value=i/864e5,t.value=24*(e.value-Math.floor(e.value)),c.value=60*(t.value-Math.floor(t.value)),r.value=60*(c.value-Math.floor(c.value))},i=Object(n["b"])((function(){return Math.floor(e.value).toString()+"日"+Math.floor(t.value).toString()+"時間"+Math.floor(c.value).toString()+"分"+Math.floor(r.value).toString()+"秒"}));return{displayTime:i}}};c("64d3");Ce.render=ke,Ce.__scopeId="data-v-622922cc";var Se=Ce;Object(n["x"])("data-v-054c88d8");var Te={class:"thumbnail"},Ae=["href"],Me=["src"];function Fe(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",Te,[Object(n["g"])("a",{href:c.url},[Object(n["g"])("img",{src:r.imgSrc,alt:"projectThumbnail"},null,8,Me)],8,Ae)])}Object(n["v"])();var Ee={props:{url:{type:String,required:!0},imageName:{type:String,required:!0}},setup:function(e){var t=Object(n["b"])((function(){return c("7584")("./".concat(e.imageName))}));return{imgSrc:t}}};c("d55e");Ee.render=Fe,Ee.__scopeId="data-v-054c88d8";var Pe=Ee,Ue={components:{UpcomingBoard:Se,Thumbnail:Pe},props:{order:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},collaborators:{type:Array,default:function(){return[]}},isReleased:{type:Boolean,default:!1},projectUrl:{type:String,default:""},imageName:{type:String,default:""}}};c("be6d");Ue.render=he,Ue.__scopeId="data-v-32a97bfc";var Re=Ue,Be={components:{Project:Re},props:{projects:{type:Array,required:!0}}};c("3fc3");Be.render=de,Be.__scopeId="data-v-2aa20d0c";var Le=Be,ze={components:{SectionBase:D,ProjectsOverview:ue,ProjectList:Le},setup:function(){var e=[{title:"Strolling in Tsukuba Univ. with Intellectuals",description:"持っている知識によって同じ景色も違って見える。筑波大学の教員はどのような視点から日常を見ているのだろうか。様々な知識人と共に筑波大学を歩くことで、新たな日常の見方を発見しよう！あなたならではの視点も募集中！",collaborators:[],isReleased:!0,projectUrl:"https://mimunojun.github.io/0808web/",imageName:"tishiki_thumbnail.png"},{title:"Music Experiment",description:"人工知能を用いて楽曲を制作する自動作曲技術の紹介、実演を行う。情報技術によって創作が身近なものとなっていることを体感できる内容になっている。本イベントのコンセプト「New Normal」のもと新時代の音楽のあり方を紐解く!",collaborators:[],isReleased:!1,projectUrl:"",imageName:""},{title:"Radio",description:"今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!",collaborators:["ヨビノリたくみ (教育系YouTuber)"],isReleased:!1,projectUrl:"",imageName:""},{title:"Projection Mapping",description:"プロジェクションマッピングとストリートダンスの融合、その美しさをお伝えします。映像コンテンツでは味わいにくい臨場感を大切にしながら、私たちの思いも詰め込みました。唯一無二の作品となっておりますので、ぜひお楽しみください。",collaborators:["TParty (筑波大学生により構成されるDigital Creative集団)","土佐凛斗（筑波大学ダンスサークルRealjam）"],isReleased:!1,projectUrl:"",imageName:""},{title:"Talk Session",description:"今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!",collaborators:["山口 香 (筑波大学体育系教授)","松井 崇 (筑波大学体育系助教)","渡辺 謙 (早稲田大学 客員研究員)","すいのこ (プロゲーマー兼ライター)"],isReleased:!1,projectUrl:"",imageName:""}];return{projects:e}}};c("875e");ze.render=ce,ze.__scopeId="data-v-1c008bbe";var We=ze;Object(n["x"])("data-v-178617d0");var qe={class:"news-content"},Ge={class:"news-list"},Ve={key:0,class:"news-twitter"},De=Object(n["g"])("div",{class:"news-twitter__wrapper"},[Object(n["g"])("blockquote",{class:"twitter-tweet"},[Object(n["g"])("p",{lang:"ja",dir:"ltr"},[Object(n["h"])(" 【告知】"),Object(n["g"])("br"),Object(n["h"])(" Nu ink.では、今秋11月5〜7日にイベント、TSUKUBA INNOVATION GALLERY (TIG) を開催する運びとなりました！"),Object(n["g"])("br"),Object(n["h"])(" 筑波大学の先生方をはじめ、多数のプロフェッショナルの協力のもとで、トークセッションやラジオ企画、音楽を使った実験など、他にも多くの企画を予定しております。 "),Object(n["g"])("a",{href:"https://t.co/bUhwkVkvMJ"},"pic.twitter.com/bUhwkVkvMJ")]),Object(n["h"])(" — Nu ink. @筑波大学 (@NuinkTSUKUBA) "),Object(n["g"])("a",{href:"https://twitter.com/NuinkTSUKUBA/status/1422754169006419970?ref_src=twsrc%5Etfw"},"August 4, 2021")])],-1),Je=[De];function Ke(e,t,c,r,a,i){var o=Object(n["C"])("news-item"),s=Object(n["C"])("section-base");return Object(n["u"])(),Object(n["d"])(s,{isWrapperFull:!1,title:"news",class:"news"},{content:Object(n["I"])((function(){return[Object(n["g"])("div",qe,[Object(n["g"])("div",Ge,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.newsList,(function(e){return Object(n["u"])(),Object(n["d"])(o,{key:e.content,date:e.date,content:e.content},null,8,["date","content"])})),128))]),r.tweetLoaded?(Object(n["u"])(),Object(n["f"])("div",Ve,Je)):Object(n["e"])("",!0)])]})),_:1})}Object(n["v"])(),Object(n["x"])("data-v-2353506f");var He={class:"news-item"},Ye={class:"news-item__date"},Xe={class:"news-item__dateText"},$e={class:"news-item__content"},Qe={class:"news-item__contentText"};function Ze(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",He,[Object(n["g"])("div",Ye,[Object(n["g"])("div",Xe,Object(n["E"])(c.date),1)]),Object(n["g"])("div",$e,[Object(n["g"])("div",Qe,Object(n["E"])(c.content),1)])])}Object(n["v"])();var et={props:{date:{type:String,required:!0},content:{type:String,required:!0}}};c("2d1b");et.render=Ze,et.__scopeId="data-v-2353506f";var tt=et,ct={components:{SectionBase:D,NewsItem:tt},setup:function(){var e=Object(n["z"])(!1);Object(n["s"])((function(){var t=document.createElement("script");t.setAttribute("src","https://platform.twitter.com/widgets.js"),t.setAttribute("async","true"),document.head.appendChild(t),e.value=!0}));var t=[{date:"2021.10.24",content:"Tsukuba Innovation Galleryのwebサイトを公開しました。"},{date:"2021.10.24",content:"企画「知識人と歩く筑波大学」を公開しました。"}];return{tweetLoaded:e,newsList:t}}};c("4ef8");ct.render=Ke,ct.__scopeId="data-v-178617d0";var nt=ct;c("fb6a");function rt(e,t,c,r,a,i){var o=Object(n["C"])("gallery-image-list"),s=Object(n["C"])("section-base");return Object(n["u"])(),Object(n["d"])(s,{isWrapperFull:!0,title:"gallery",class:"gallery"},{content:Object(n["I"])((function(){return[Object(n["i"])(o,{imageFiles:r.imageFiles.slice(0,r.imageFiles.length/2)},null,8,["imageFiles"]),Object(n["i"])(o,{imageFiles:r.imageFiles.slice(r.imageFiles.length/2,r.imageFiles.length)},null,8,["imageFiles"])]})),_:1})}Object(n["x"])("data-v-d1da7598");var at={class:"gallery-image__list"};function it(e,t,c,r,a,i){var o=Object(n["C"])("gallery-image");return Object(n["u"])(),Object(n["f"])("div",at,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(c.imageFiles,(function(e){return Object(n["u"])(),Object(n["d"])(o,{key:e,filename:e},null,8,["filename"])})),128))])}Object(n["v"])(),Object(n["x"])("data-v-51c6af65");var ot={class:"gallery-image"},st=["src"];function lt(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",ot,[Object(n["g"])("img",{src:r.imgSrc},null,8,st)])}Object(n["v"])();var ut={props:{filename:{type:String,required:!0}},setup:function(e){var t=Object(n["b"])((function(){return c("7584")("./".concat(e.filename))}));return{imgSrc:t}}};c("76f7");ut.render=lt,ut.__scopeId="data-v-51c6af65";var bt=ut,dt={components:{GalleryImage:bt},props:{imageFiles:{type:Array,required:!0}}};c("d86a");dt.render=it,dt.__scopeId="data-v-d1da7598";var jt=dt,pt={components:{SectionBase:D,GalleryImageList:jt},setup:function(){var e=Array.from({length:8},(function(e,t){return"gallery".concat(t+1,".jpeg")}));return{imageFiles:e}}};pt.render=rt;var ft=pt,Ot=c("91c5"),gt=c.n(Ot);Object(n["x"])("data-v-df907f42");var vt={class:"page-footer"},mt=Object(n["g"])("h1",null,"footer",-1),yt=Object(n["g"])("img",{src:gt.a,class:"logo-tsukuba"},null,-1),ht=Object(n["g"])("img",{src:gt.a,class:"logo-nuink"},null,-1),_t=Object(n["g"])("div",{class:"footer-exprein"},[Object(n["g"])("div",{style:{display:"flex"}},[Object(n["g"])("h3",null,"筑波大学学生団体 Nu ink."),Object(n["g"])("p",null,"official website")]),Object(n["g"])("p",null,'筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェス INNOVATION WORLD FESTA (イノフェス)の筑波大学学生運営チーム。普段なら交わらない"人"や"学問"をつないでイノベーションを起こすという目標を掲げて活動中！')],-1),wt=Object(n["g"])("div",{class:"copyright"},[Object(n["g"])("p",null,"© Nu ink. 20XX. All rights reserved.")],-1),It=[mt,yt,ht,_t,wt];function xt(e,t,c,r,a,i){return Object(n["u"])(),Object(n["f"])("div",vt,It)}Object(n["v"])();var Nt={setup:function(){}};c("d512");Nt.render=xt,Nt.__scopeId="data-v-df907f42";var kt=Nt,Ct={components:{Drawing:p,Landing:C,Concept:K,About:te,Projects:We,News:nt,Gallery:ft,PageFooter:kt}};Ct.render=l;var St=Ct,Tt=[{path:"/",name:"Home",component:St}],At=Object(o["a"])({history:Object(o["b"])("/TIG_WEB_2021/"),routes:Tt}),Mt=At;Object(n["c"])(i).use(Mt).mount("#app")},"5b40":function(e,t,c){"use strict";c("97b4")},"61f8":function(e,t,c){},"64b7":function(e,t,c){"use strict";c("61f8")},"64d3":function(e,t,c){"use strict";c("e5e7")},"67fd":function(e,t,c){e.exports=c.p+"img/gallery6.6f802efd.jpeg"},"6edc":function(e,t,c){e.exports=c.p+"img/gallery3.04494252.jpeg"},7386:function(e,t,c){e.exports=c.p+"img/gallery8.bd184fb5.jpeg"},7583:function(e,t,c){"use strict";c("2bb0")},7584:function(e,t,c){var n={"./Nu-logo-01.png":"adfc","./Nu-logo-02.png":"91c5","./Nu-logo-03.png":"fcd2","./about.jpeg":"7e27","./gallery1.jpeg":"8623","./gallery2.jpeg":"78fd","./gallery3.jpeg":"6edc","./gallery4.jpeg":"836d","./gallery5.jpeg":"e127","./gallery6.jpeg":"67fd","./gallery7.jpeg":"34ed","./gallery8.jpeg":"7386","./landing.jpg":"4f88","./tishiki_thumbnail.png":"3262"};function r(e){var t=a(e);return c(t)}function a(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="7584"},"76f7":function(e,t,c){"use strict";c("7df7")},"77a4":function(e,t,c){},"78fd":function(e,t,c){e.exports=c.p+"img/gallery2.8db0497a.jpeg"},"7df7":function(e,t,c){},"7e27":function(e,t,c){e.exports=c.p+"img/about.6db805bb.jpeg"},"836d":function(e,t,c){e.exports=c.p+"img/gallery4.b6573d0a.jpeg"},8623:function(e,t,c){e.exports=c.p+"img/gallery1.7d46c76a.jpeg"},"875e":function(e,t,c){"use strict";c("3d69")},"91c5":function(e,t,c){e.exports=c.p+"img/Nu-logo-02.b5f3ffa3.png"},"97b4":function(e,t,c){},"9f04":function(e,t,c){},a4e6:function(e,t,c){},adfc:function(e,t,c){e.exports=c.p+"img/Nu-logo-01.336cd189.png"},b5a2:function(e,t,c){"use strict";c("b617")},b617:function(e,t,c){},be6d:function(e,t,c){"use strict";c("77a4")},c538:function(e,t,c){},d0f6:function(e,t,c){"use strict";c("ff5e")},d512:function(e,t,c){"use strict";c("05b7")},d55e:function(e,t,c){"use strict";c("f854")},d86a:function(e,t,c){"use strict";c("df759")},df759:function(e,t,c){},e127:function(e,t,c){e.exports=c.p+"img/gallery5.81b12d1e.jpeg"},e5e7:function(e,t,c){},f854:function(e,t,c){},f864:function(e,t,c){},fcd2:function(e,t,c){e.exports=c.p+"img/Nu-logo-03.bff3543d.png"},fd03:function(e,t,c){},ff5e:function(e,t,c){},ffa3:function(e,t,c){}});
//# sourceMappingURL=app.1709499e.js.map