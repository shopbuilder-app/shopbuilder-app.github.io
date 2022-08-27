"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Firebase Settings",sidebar_position:5,slug:"firebase-settings"},s=void 0,o={unversionedId:"Features/Firebase Settings",id:"Features/Firebase Settings",title:"Firebase Settings",description:"Firebase is from Google for building app infrastructure, improving app quality, and growing your business. This guide shows you the basic way to configure Firebase on both Android and iOS. Then you can use your Firebase for these features:",source:"@site/docs/Features/Firebase Settings.md",sourceDirName:"Features",slug:"/Features/firebase-settings",permalink:"/fr/Features/firebase-settings",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Firebase Settings",sidebar_position:5,slug:"firebase-settings"},sidebar:"tutorialSidebar",previous:{title:"Feature update",permalink:"/fr/Features/feature-update"},next:{title:"Firebase Push Notifications (FCM)",permalink:"/fr/Features/firebase-push-notification"}},l={},p=[{value:"1. iOS",id:"1-ios",level:2},{value:"2. Android",id:"2-android",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Firebase is from Google for building app infrastructure, improving app quality, and growing your business. This guide shows you the basic way to configure Firebase on both Android and iOS. Then you can use your Firebase for these features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Firebase Push Notification]","(/Features/Firebase Push Notifications (FCM).md) (FCM - firebase cloud messaging)"),(0,i.kt)("li",{parentName:"ul"},"[Dynamic Link]","(/Features/Dynamic Link (Deeplink).md) (Deeplink)"),(0,i.kt)("li",{parentName:"ul"},"[Firebase Remote Config]","(/Features/Firebase Remote Config.md)"),(0,i.kt)("li",{parentName:"ul"},"[Firebase Realtime Chat]","(/Features/Firebase Realtime Chat.md)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table of contents:")),(0,i.kt)("p",null,"Enable Firebase on the builder and follow the guide below to configure Firebase:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6149).Z,width:"781",height:"300"})),(0,i.kt)("h2",{id:"1-ios"},"1. iOS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Create Project in\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Add Firebase to your iOS app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your firebase project console, click the gear icon in the upper left corner, and select\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Project setting")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6559).Z,width:"800",height:"431"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the IOS icon in the\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Your apps")),"\xa0section")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8984).Z,width:"800",height:"446"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill in the information with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IOS bundle Id: is bundle ID taken from your application."),(0,i.kt)("li",{parentName:"ul"},"Enter app nickname (the name here is only used to distinguish between applications on firebase so you can set arbitrary)."),(0,i.kt)("li",{parentName:"ul"},"App Store ID you can omit this parameter."))),(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Register app")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2761).Z,width:"800",height:"447"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the button\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Download GoogleService-Info.plist")),"\xa0to download the\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GoogleService-Info.plist")),"\xa0to your local, you will using it when building the app.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3200).Z,width:"800",height:"443"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Next")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8302).Z,width:"800",height:"443"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Next")),"\xa0again to continue:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5561).Z,width:"800",height:"443"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Next")),"\xa0to continue")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3775).Z,width:"800",height:"444"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Next, press\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Skip the step")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(279).Z,width:"800",height:"443"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete the process of creating an IOS application on firebase.")),(0,i.kt)("h2",{id:"2-android"},"2. Android"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Open your project in\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1053).Z,width:"800",height:"443"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:"),"\xa0Open your firebase project console, click the gear icon in the upper left corner, and select Project setting"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1431).Z,width:"800",height:"432"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:"),"\xa0Select the Android icon in the Your apps section"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6886).Z,width:"800",height:"494"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:"),"\xa0Enter info your app"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6966).Z,width:"800",height:"468"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android package name is the name of packages on android. Open file\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"android/app/src/main/AndroidManifest.xml")),", in the first line, copy package name after keyword\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"package")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8001).Z,width:"800",height:"234"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill out the information and click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Register app")),"\xa0(You can omit the\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Debug signing certificate SHA-1")),"\xa0parameter)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6091).Z,width:"800",height:"504"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:"),"\xa0Download file\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"google-services.json")),"\xa0and save to your local. You will using it when building the Android app."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2325).Z,width:"800",height:"582"})),(0,i.kt)("p",null,"Make sure the file name is correct\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"google-services.json"))),(0,i.kt)("p",null,"Click next to continue..."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6:"),"\xa0This step is Add Firebase SDK, just click Next to continue."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9019).Z,width:"800",height:"430"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 7:"),"\xa0At this stage, it is possible that firebase will not detect your test device, but that's okay, just click\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Skip step")),"\xa0to continue the following steps. (In case Firebase detect can click Continue to console)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1356).Z,width:"2114",height:"1408"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete the process of creating an Android application on Firebase.")))}u.isMDXComponent=!0},6886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1013904999-3280fc968ae279728f1e5d3b7b62e298.png"},5561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1112473202-825b3906667c6055232a6c874bfc43c4.png"},8001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1258469403-2ae3fb86451b79f429ec482f1685e2c6.png"},1431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1282081787-9edc4114a060dbffd1ffa725f02e3304.png"},1053:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1315490267-662f2758c8547d2b10aadf640034a36a.png"},9019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1372642680-27f6866c1a1f9a92079f895a376e6811.png"},6091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1564596856-71efde32baa2dfb3a8554493ae88c528.png"},1356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1566142171-d9634bb6b7b302d2a69b283ba387f57a.png"},6966:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1643370503-7e4576bdb65b6e95b0657ea1e720dd19.png"},3775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/167885307-56b4d30df790b097bfe866033001ea71.png"},8984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1729092858-a5eae9e1aac925e6957ec5d37bddd7b2.png"},8302:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2071558207-185279f4eeea21574cf05f3969048da7.png"},6559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2105716210-cf58c0dcb70db73ef97311ff575d8935.png"},2761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/331495330-bd0d10a3331b174a7f584b6c992acc06.png"},3200:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/456979020-2bfbe388c0294106beeaf67579ed8d54.png"},279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/598851912-a4c887b0f3c2a482e2f467b814f56b34.png"},6149:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/629242177-f2638162e59d6c93d8fabd2c1d911bb2.png"},2325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/838140993-3337682139a70f84704f95e948d98a60.png"}}]);