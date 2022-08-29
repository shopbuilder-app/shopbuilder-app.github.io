"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(d,i(i({ref:t},f),{},{components:n})):a.createElement(d,i({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Firebase Remote Config",sidebar_position:9,slug:"firebase-remote-config"},i=void 0,p={unversionedId:"Features/Firebase Remote Config",id:"Features/Firebase Remote Config",title:"Firebase Remote Config",description:"After publishing your Apps to App Stores, sometimes you need to update the **Features** of your apps. This guide shows you the way to change the app Features without re-publishing to Apple Store and Google Play, which is very convenient, right?",source:"@site/docs/Features/Firebase Remote Config.md",sourceDirName:"Features",slug:"/Features/firebase-remote-config",permalink:"/fr/Features/firebase-remote-config",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Firebase Remote Config",sidebar_position:9,slug:"firebase-remote-config"},sidebar:"tutorialSidebar",previous:{title:"Firebase Realtime Chat",permalink:"/fr/Features/firebase-realtime-chat"},next:{title:"OneSignal Push Notifications",permalink:"/fr/Features/onesignal"}},l={},s=[{value:"1. Create a new private key",id:"1-create-a-new-private-key",level:2},{value:"2. Execute the Firebase Remote Config",id:"2-execute-the-firebase-remote-config",level:2}],f={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After publishing your Apps to App Stores, sometimes you need to ",(0,r.kt)("em",{parentName:"p"},"update the")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Features"))," ",(0,r.kt)("em",{parentName:"p"},"of your apps"),". This guide shows you the way to ",(0,r.kt)("em",{parentName:"p"},"change the app Features without re-publishing to Apple Store and Google Play"),", which is very convenient, right?"),(0,r.kt)("h2",{id:"1-create-a-new-private-key"},"1. Create a new private key"),(0,r.kt)("p",null,"This step helps to generate a new private key to use for configuring updates to Firebase Remote Config."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Precondition"),": refer to\xa0","[this guide]","(/Features/Firebase Settings.md)\xa0to create your application on Firebase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": open firebase console your project\xa0",(0,r.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the gear icon, then select\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Project settings"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/594d714f470f245593183c34a7c92900414e3c7f423669ca5eb1136cfd00bbbb/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334383537393839395f696d6167652e706e67",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Service accounts"),"\xa0tab:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/edf60cbfc93d749f9d1d5da920526eed1134d8533853c3cf38933ac8c02babc2/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334383733323030335f696d6167652e706e67",alt:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Add role \u201cFirebase Remote Config Admin\u201d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Manage service account permissions"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/03f31fe063c95a5176d6fddb88b53246e6fb6e308872d5fceabfb116b207e465/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334383930343831325f696d6167652e706e67",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"IAM"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/8f212a9fda12b72c93112b4fff8beae78becd6eed7fb00fe3b8d9294cdef20bf/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334393037393237355f696d6167652e706e67",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),"\xa0that matches the member name in the Firebase Console:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/fd03527129b91798598242a47edefacc69255800273af97bec53e67a9f437e87/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334393635373933365f696d6167652e706e67",alt:null})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"![](https://camo.githubusercontent.com/b796ade12f379506d262a9c892fde2bc1d090c0ca9002e995fa6ff57dddfa1fb/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334393535313931315f696d6167652e706e67)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the edit icon:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/31347e03228feb04f3ce1420a9e8c0d28ea7f285bfad041745f32964f5e4cf25/68747470733a2f2f70617065722d6174746163686d656e74732e64726f70626f782e636f6d2f735f384538303233373834353536433234424334374230354133324534363135353042433046303736323237364246314631453135373938313934373639414532445f313631303334393739333033345f53637265656e2b53686f742b323032312d30312d31312b61742b31342e32322e34352e706e67",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add new Role with Role is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase Remote Config Admin"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/jwIOh9TNTnuTXnlfKXjvPoTAcUyZZISvFlvaEigY.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE"),"\xa0button."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Now we go back to the firebase console to download the key by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Generate new private key")," button:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5306).Z,width:"1540",height:"813"})),(0,r.kt)("h2",{id:"2-execute-the-firebase-remote-config"},"2. Execute the Firebase Remote Config"),(0,r.kt)("p",null,"Go to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Features"),",\xa0select\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase Remote Config"),", enable the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase Remote Config"),", refer to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase remote config.json"),"\xa0file which is the downloaded key file in Step 3:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(318).Z,width:"807",height:"498"})),(0,r.kt)("p",null,"The system will load to see if your project has configs. If it is a new project you will not be able to choose the version. Otherwise, you will have 2 options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ADD NEW VERSION"),"\xa0to create the latest config."),(0,r.kt)("li",{parentName:"ul"},"Select the version and click\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"LOAD VERSION"),"\xa0to reload the old version.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8154).Z,width:"674",height:"919"})),(0,r.kt)("p",null,"Finally, click the button\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Update"),"\xa0in the upper right corner to update data. Now when you build your app, the features of your app will follow the Remote Config on Firebase, so whenever you want to change the features, just need to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\xa0here."))}c.isMDXComponent=!0},5306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1241488372-08efdeb73209818656a9468303e0e65d.png"},318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1750159476-2b2ca4057e0341f12431191f0c0fced6.png"},8154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/891596496-d84e4173e19d6b36b0324b449d52c8fc.png"}}]);