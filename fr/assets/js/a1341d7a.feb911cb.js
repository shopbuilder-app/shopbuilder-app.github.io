"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||s;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const s={title:"Firebase Push Notifications (FCM)",sidebar_position:6,slug:"firebase-push-notification"},r=void 0,o={unversionedId:"Features/Firebase Push Notifications (FCM)",id:"Features/Firebase Push Notifications (FCM)",title:"Firebase Push Notifications (FCM)",description:"Push Notifications is a useful Flutter plugin. With this plugin, your Flutter app can receive and process push notifications on Android and iOS.",source:"@site/docs/Features/Firebase Push Notifications (FCM).md",sourceDirName:"Features",slug:"/Features/firebase-push-notification",permalink:"/fr/Features/firebase-push-notification",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Firebase Push Notifications (FCM)",sidebar_position:6,slug:"firebase-push-notification"},sidebar:"tutorialSidebar",previous:{title:"Firebase Settings",permalink:"/fr/Features/firebase-settings"},next:{title:"Dynamic Link (Deeplink)",permalink:"/fr/Features/dynamic-link"}},l={},p=[{value:"1. Push Notifications in iOS",id:"1-push-notifications-in-ios",level:2},{value:"2. Push Notifications on Android",id:"2-push-notifications-on-android",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Push Notifications is a useful Flutter plugin. With this plugin, your Flutter app can receive and process push notifications on Android and iOS."),(0,a.kt)("p",null,"This guide shows you the way to setup Firebase Cloud Messaging(FCM) to push notifications."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remember to ","[disable OneSignal]","(/Features/OneSignal Push Notifications.md) if you push notifications using Firebase ")),(0,a.kt)("h2",{id:"1-push-notifications-in-ios"},"1. Push Notifications in iOS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precondition"),': refer to "',"[1. iOS]",'(/Features/Firebase Settings.md)" to create an IOS application on Firebase.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": Install Cloud Messaging to enable push notifications on iOS. Click Cloud Messaging as shown:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2996).Z,width:"800",height:"416"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installing Cloud Messaging requires you to upload the auth key APNs here")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5165).Z,width:"800",height:"443"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get this key, you must have an apple developer account. Visit page\xa0",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/"},"https://developer.apple.com"),"\xa0select\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Account")),"\xa0as shown:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8437).Z,width:"800",height:"465"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then choose\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Certificates, identifiers & Profiles"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/0LUQvAZjDOJux4sWeWpiJNvtgSLrfGkBHCIoBLpa.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select Keys on the left menu, then click the plus icon to add a new key:"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: 1 developer apple account can only create 2 keys, please consider before creating. But you can still delete them if needed.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9197).Z,width:"800",height:"467"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the key name and select Apple Push Notification service (APNs) then click\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"continue")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9466).Z,width:"800",height:"417"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Register")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5100).Z,width:"800",height:"417"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Download")),"\xa0to download the APNs key file")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4085).Z,width:"800",height:"428"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Return to the firebase console to update the APNs auth key. Click\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Upload")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(801).Z,width:"800",height:"418"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the Browse button then select the downloaded key:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(493).Z,width:"800",height:"416"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7179).Z,width:"800",height:"347"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8054).Z,width:"800",height:"446"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The key ID is the back part of the downloaded key file name:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6266).Z,width:"800",height:"445"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter Team ID, if you do not know where Team ID is coming from, please click on the question mark as shown in the picture, then click on the\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"membership tab")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5517).Z,width:"800",height:"443"})),(0,a.kt)("p",null,"This is Team ID, copy it and enter the form in firebase:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9023).Z,width:"800",height:"317"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click\xa0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Upload")),":")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(449).Z,width:"800",height:"418"})),(0,a.kt)("p",null,"In some cases, this error will be displayed (in some cases it will not be). If this is the case, please click\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Upload")),"\xa0again:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6938).Z,width:"800",height:"433"})),(0,a.kt)("p",null,"If the following screen appears, congratulations, you have successfully configured:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8413).Z,width:"800",height:"437"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),": Get Server Key "),(0,a.kt)("p",null,"Go to the following path\xa0",(0,a.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/project/_/settings/cloudmessaging"},(0,a.kt)("inlineCode",{parentName:"a"},"Cloud Messaging")),"\xa0and select your Firebase Console project to get\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Server Key")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(231).Z,width:"1161",height:"517"})),(0,a.kt)("p",null,"Input your Server Key:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7693).Z,width:"823",height:"636"})),(0,a.kt)("p",null,"Then send a message to push notification."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Server Key taken must be the Server Key of that project."),(0,a.kt)("li",{parentName:"ul"},"Absolutely do not share Server Key.")),(0,a.kt)("h2",{id:"2-push-notifications-on-android"},"2. Push Notifications on Android"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Precondition"),': refer to "',"[2. Android]",'(/Features/Firebase Settings.md)" to create an Android application on Firebase.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps"),":Go to the following path\xa0",(0,a.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/project/_/settings/cloudmessaging"},(0,a.kt)("inlineCode",{parentName:"a"},"Cloud Messaging")),"\xa0and select your Firebase Console project to get\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Server Key")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(231).Z,width:"1161",height:"517"})),(0,a.kt)("p",null,"Input your Server Key:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7693).Z,width:"823",height:"636"})),(0,a.kt)("p",null,"Then send a message to push notification."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Server Key taken must be the Server Key of that project."),(0,a.kt)("li",{parentName:"ul"},"Absolutely do not share Server Key.")))}u.isMDXComponent=!0},5100:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1163522322-1490f4e5b92a86898296341052e9bad8.png"},7179:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1293269754-fba1c7d17991f8b40a7411be7878d313.jpg"},4085:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1366196576-9d27b456ca91b6aaf44b0320979fda36.png"},231:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1374375467-16c37c4b34e1e5f6c22544acceffa87b.png"},7693:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/154180661-3104dc255092b040800744af2a8a8357.png"},6266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1639018531-0d8eea7b63aa470e428cd7557df05f66.png"},8054:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1695118630-ce3a616ae462591add1b273663543dc5.jpg"},9466:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1774685132-5738819a399ee4296e140b9439b39d43.png"},801:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1886192487-a2661b5b86cfe0101006baeb33b79b23.png"},9023:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1937147782-4454a2bbf39f50f878f12c3f49cc6308.png"},449:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1994006301-130b68623b8608f4d8952e060dd926dd.png"},2996:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/287739075-d030febf1e4661546760ec906844b351.png"},493:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/342573223-347559d1e879d3dfca4219b83cded421.jpg"},5517:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/375042114-429e5ee5a0eaea9045391afe03c78029.png"},8413:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/468260701-8c0d7f47f04144e3cca477bab40fa6e4.png"},6938:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/762185796-ebcfe8df68b39f27d42dfb38467fb2b8.png"},9197:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/80596745-fe073d08b217b55363a6c855141273dc.png"},5165:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/867808410-6fe7eb9fec994431f3ef1327b1df1dc3.png"},8437:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/933075509-58313e11d57e82a240b3a25aa765408b.png"}}]);