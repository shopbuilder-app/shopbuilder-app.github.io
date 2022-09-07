"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[467],{9544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905)),r=n(2004);const o={title:"Dynamic Link (Deeplink)",sidebar_position:7,slug:"dynamic-link"},p=void 0,s={unversionedId:"Features/Dynamic Link (Deeplink)",id:"Features/Dynamic Link (Deeplink)",title:"Dynamic Link (Deeplink)",description:"This guide shows how to configure the Deep Links using Firebase Dynamic Link.",source:"@site/docs/Features/Dynamic Link (Deeplink).md",sourceDirName:"Features",slug:"/Features/dynamic-link",permalink:"/fr/Features/dynamic-link",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Dynamic Link (Deeplink)",sidebar_position:7,slug:"dynamic-link"},sidebar:"tutorialSidebar",previous:{title:"Firebase Push Notifications (FCM)",permalink:"/fr/Features/firebase-push-notification"},next:{title:"Firebase Realtime Chat",permalink:"/fr/Features/firebase-realtime-chat"}},l={},c=[{value:"1. Preconditions",id:"1-preconditions",level:2},{value:"2. URL Prefix",id:"2-url-prefix",level:2},{value:"3. For iOS app",id:"3-for-ios-app",level:2},{value:"4. Execute the Dynamic Link",id:"4-execute-the-dynamic-link",level:2},{value:"5. Test",id:"5-test",level:2},{value:"6. Share",id:"6-share",level:2},{value:"7. Dynamic link for Notification",id:"7-dynamic-link-for-notification",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide shows how to configure the Deep Links using Firebase Dynamic Link."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How does Firebase Dynamic Link work?")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7026).Z,width:"597",height:"255"})),(0,a.kt)("h2",{id:"1-preconditions"},"1. Preconditions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your app must be successfully connected with Firebase following\xa0",(0,a.kt)("a",{parentName:"li",href:"https://docs.shopbuilder.app/Features/firebase-settings/"},"https://docs.shopbuilder.app/Features/firebase-settings/")),(0,a.kt)("li",{parentName:"ul"},"Your app must be released on Google Play and App Store.")),(0,a.kt)("h2",{id:"2-url-prefix"},"2. URL Prefix"),(0,a.kt)("p",null,"This step guides to configure the URL Prefix as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Go to Firebase console and select your Firebase project."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://docs.inspireui.com/static/257262c48aafb87da8c99fa9cbcd6754/29d74/dynamic_link01.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In Dynamic Links screen, click on\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Get Started")),"\xa0button if this is your first time working with Firebase Dynamic Link. Otherwise, click on the current existing URL Prefix dropdown button, and click on\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"add URL prefix"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://docs.inspireui.com/static/54f4cf9c214c8eafe72d55d78460695b/18ed7/dynamic_link02.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type the domain name you want to use for your Dynamic Links. You can use the domain you own (for example,\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"yourdomain.com")),"\xa0or\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"app.yourdomain.com")),"), or a free Google-provided domain (for example,\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"yourapp.page.link")),"). In this project, we are using\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"fluxstoreinspireui.page.link")),"\xa0for testing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finish the following steps: Configure, Verify and Finish to get URL prefix."))),(0,a.kt)("h2",{id:"3-for-ios-app"},"3. For iOS app"),(0,a.kt)("p",null,"If you need the iOS app, follow this guide to configure more:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open your firebase project console, click the gear icon in the upper left corner and select\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Project settings")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In general tab, click on your project on iOS apps list, then edit your\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"App Store ID")),". You can find your App Store ID in your app\u2019s URL. In the example below,\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"1469772800")),"\xa0is the App Store ID at\xa0",(0,a.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/yourapp/id1469772800"},"https://itunes.apple.com/us/app/yourapp/id1469772800")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://docs.inspireui.com/static/67ea52c9e8311fb3d02e58c6c176a59e/29d74/dynamic_link03.png",alt:null})))),(0,a.kt)("h2",{id:"4-execute-the-dynamic-link"},"4. Execute the Dynamic Link"),(0,a.kt)("p",null,"Update the information as the image below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5986).Z,width:"815",height:"506"})),(0,a.kt)("h2",{id:"5-test"},"5. Test"),(0,a.kt)("p",null,"This step guides to test your Firebase Dynamic Link: ",(0,a.kt)("em",{parentName:"p"},"(a link will open the app directly or refer to App Stores to download the app)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When your app is already installed:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4959).Z,width:"600",height:"1233"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When your app is not installed:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3941).Z,width:"600",height:"1233"})),(0,a.kt)("h2",{id:"6-share"},"6. Share"),(0,a.kt)("p",null,"This step guides to share a specific product with Firebase Dynamic Link:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure you have done from step 1 to step 5."),(0,a.kt)("li",{parentName:"ul"},"Go to Admin Dashboard > Settings > Permalinks. At Product permalinks, edit Custom base:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"product/"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9126).Z,width:"1942",height:"96"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'You now can get Dynamic Link by click on "Share" in a product. This is how this feature should work:\xa0',(0,a.kt)("a",{parentName:"li",href:"https://www.loom.com/share/df34aefde54c435fb53f64e012d5ca13?from_recorder=1&focus_title=1"},"Android demo reference"),"\xa0&\xa0",(0,a.kt)("a",{parentName:"li",href:"https://www.loom.com/share/66a1c81056324df0b7a11c21d0733736?from_recorder=1&focus_title=1"},"iOS demo reference"))),(0,a.kt)("h2",{id:"7-dynamic-link-for-notification"},"7. Dynamic link for Notification"),(0,a.kt)("p",null,"The feature allows sending a Notification with the Product URL. When users open Notification, App is launched with that product."),(0,a.kt)("p",null,"Only Android devices support the feature currently."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Video guide"),":"),(0,a.kt)(r.Z,{controls:!0,url:"https://www.youtube.com/watch?v=r3xpjZajze8",mdxType:"ReactPlayer"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manual guide:")),(0,a.kt)("p",null,"To make the feature work, go to the\xa0",(0,a.kt)("strong",{parentName:"p"},"Cloud Messaging"),"\xa0from\xa0",(0,a.kt)("strong",{parentName:"p"},"Firebase Console"),", and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Send your first message"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2934).Z,width:"2136",height:"1006"})),(0,a.kt)("p",null,"Then, on the\xa0",(0,a.kt)("strong",{parentName:"p"},"Compose Notification"),"\xa0screen, fill in the necessary information in all steps\xa0",(0,a.kt)("strong",{parentName:"p"},"Information"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"Target"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"Scheduling"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"Conversion"),"\xa0",(0,a.kt)("strong",{parentName:"p"},"events"),"\xa0",(0,a.kt)("strong",{parentName:"p"},"(optional)"),", and\xa0",(0,a.kt)("strong",{parentName:"p"},"Additional options (optional)"),"."),(0,a.kt)("p",null,"In step 4 -\xa0",(0,a.kt)("strong",{parentName:"p"},"Additional options (optional)"),"\xa0- you will add a\xa0",(0,a.kt)("strong",{parentName:"p"},"Key-Value"),"\xa0for the\xa0",(0,a.kt)("strong",{parentName:"p"},"Custom Data"),", fill\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic_link"),"\xa0for\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Key"),"\xa0and the Product URL for\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Value"),"."),(0,a.kt)("p",null,"That's all \ud83d\ude42"))}u.isMDXComponent=!0},3941:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1713843796-b8de40c5445548d3cbcdb4f06806a1cf.gif"},4959:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1714767317-1a6aa71954a21d1123d3b02ec22e89f1.gif"},9126:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1802444167-dd4075a0cc20f273c65902ac1682e05b.png"},5986:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/295853786-b6264044d53c694c396957b32cddd1c7.png"},2934:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/672952907-5801c9ec43069049d2330e3d051cbdf7.png"},7026:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/737713327-bee3759805e0e4c01e090751f71de28c.png"}}]);