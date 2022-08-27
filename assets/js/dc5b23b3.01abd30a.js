"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Firebase Realtime Chat",sidebar_position:8,slug:"firebase-realtime-chat"},o=void 0,l={unversionedId:"Features/Firebase Realtime Chat",id:"Features/Firebase Realtime Chat",title:"Firebase Realtime Chat",description:'This feature helps to chat between the Vendor and the Client. "Firebase" in smartChat configuration requires Cloud Firestore to work. The conversation screen of Firebase Realtime Chat will pop up when you click on the Google icon at the Smart Chat tab after you signed in with your email.',source:"@site/docs/Features/Firebase Realtime Chat.md",sourceDirName:"Features",slug:"/Features/firebase-realtime-chat",permalink:"/Features/firebase-realtime-chat",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Firebase Realtime Chat",sidebar_position:8,slug:"firebase-realtime-chat"},sidebar:"defaultSidebar",previous:{title:"Dynamic Link (Deeplink)",permalink:"/Features/dynamic-link"},next:{title:"Firebase Remote Config",permalink:"/Features/firebase-remote-config"}},s={},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'This feature helps to chat between the Vendor and the Client. "Firebase" in smartChat configuration requires Cloud Firestore to work. The conversation screen of Firebase Realtime Chat will pop up when you click on the Google icon at the Smart Chat tab after you signed in with your email.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1987).Z,width:"446",height:"746"})),(0,a.kt)("p",null,"Steps to configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ","[Firebase Settings]","(/Features/Firebase Settings.md)\xa0to create your application on Firebase."),(0,a.kt)("li",{parentName:"ul"},"Go to the Builder tool: select ",(0,a.kt)("inlineCode",{parentName:"li"},"Features")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Smart Chat")," > turn on ",(0,a.kt)("inlineCode",{parentName:"li"},"Enable Smart Chat")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Use Realtime Chat")," > enter ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin Email")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin Name")," > click ",(0,a.kt)("inlineCode",{parentName:"li"},"UPDATE"),":")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3797).Z,width:"825",height:"509"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If it is still not able to turn on this feature"),", please double-check the following instructions:"),(0,a.kt)("p",null,"Enable Cloud Firestore at your Firebase project by following\xa0",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/quickstart#create"},"Cloud Firestore Get Started Docs"),"\xa0until Step 5."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The result")," will be like this:"),(0,a.kt)("p",null,"Using Firebase SmartChat as a normal account:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6890).Z,width:"808",height:"1660"})),(0,a.kt)("p",null,"Using Firebase SmartChat as the admin account:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6307).Z,width:"792",height:"1664"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),"\xa0Your\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Admin Email"),"\xa0will be the default email that all of your users would communicate with. By signing in using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Admin Email"),", you would see the chat list containing all of the messages from your customers when choosing\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"FirebaseChat"),"\xa0at\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"SmartChat"),"."))}p.isMDXComponent=!0},6307:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1487722574-289301b21441a0f3ef88525713cf44d6.png"},6890:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1652934558-aac8a14002e76f9be7dd5443432297ca.png"},1987:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1761191741-4d32e3bf8423aa286e471e73d01fa588.jpg"},3797:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/908690100-94a077f27b633b08113baef46047845e.png"}}]);