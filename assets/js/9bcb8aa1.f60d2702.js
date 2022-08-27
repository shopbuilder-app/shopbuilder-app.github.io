"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[54],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(o),g=n,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return o?r.createElement(m,l(l({ref:t},u),{},{components:o})):r.createElement(m,l({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5150:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={title:"Google Maps",sidebar_position:11,slug:"google-map"},l=void 0,i={unversionedId:"02/Google Maps",id:"02/Google Maps",title:"Google Maps",description:"This guide shows you the basic way to configure Google API Key. Then you can use your Google API Key for Auto-Fill Address from Map.",source:"@site/docs/02/Google Maps.md",sourceDirName:"02",slug:"/02/google-map",permalink:"/02/google-map",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Google Maps",sidebar_position:11,slug:"google-map"},sidebar:"defaultSidebar",previous:{title:"OneSignal Push Notifications",permalink:"/02/onesignal"},next:{title:"Advertisement",permalink:"/02/advertisement"}},p={},s=[{value:"Step 1: Create Google API Key",id:"step-1-create-google-api-key",level:2},{value:"1. Video guide",id:"1-video-guide",level:3},{value:"2. Manual Guide",id:"2-manual-guide",level:3},{value:"3. Important to do",id:"3-important-to-do",level:3},{value:"Step 2: edit on Builder",id:"step-2-edit-on-builder",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide shows you the basic way to configure Google API Key. Then you can use your Google API Key for Auto-Fill Address from Map. "),(0,n.kt)("p",null,"Google Map Address is the Address Filling feature via Google Map:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(3278).Z,width:"895",height:"672"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Table of contents"),":"),(0,n.kt)("h2",{id:"step-1-create-google-api-key"},"Step 1: Create Google API Key"),(0,n.kt)("h3",{id:"1-video-guide"},"1. Video guide"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/h3vnH1j57v4"},"image")),(0,n.kt)("h3",{id:"2-manual-guide"},"2. Manual Guide"),(0,n.kt)("p",null,"If you have not got an API key yet, get an API key at ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/maps-platform/?source=post_page---------------------------"},"https://cloud.google.com/maps-platform/"),' > select "Get Started" > follow the guided steps from the video above.'),(0,n.kt)("h3",{id:"3-important-to-do"},"3. Important to do"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You\xa0",(0,n.kt)("strong",{parentName:"p"},"need to enable Billing"),"\xa0on the Google Cloud Project at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/project/_/billing/enable"},"https://console.cloud.google.com/project/_/billing/enable"),"\xa0to use the Maps feature. Learn more at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/gmp-get-started"},"https://developers.google.com/maps/gmp-get-started"),"\xa0- If the map does not display, it's because of your billing.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You need\xa0",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"enable")),"\xa0",(0,n.kt)("strong",{parentName:"p"},"Maps Static API"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/BlLfo5Syy2T5flkaHjlaOdb5LdVMV8GbXZFGcorD.jpg",alt:null}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To protect your keys, log in to\xa0",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials/key?source=post_page---------------------------"},"https://console.cloud.google.com/apis/credentials/key"),"\xa0and manage the restrictions per-app bundle id:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/aC1YCK8G8tDILxL1Srei8HJFnymeO0I24EIkdIls.png",alt:null})))),(0,n.kt)("h2",{id:"step-2-edit-on-builder"},"Step 2: edit on Builder"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7104).Z,width:"812",height:"495"})))}c.isMDXComponent=!0},3278:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/279372758-8be09038c4b472bfc5423bc37a3c853e.gif"},7104:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/92451633-e106b2d852b0c7f145d64fd14b4d6c92.png"}}]);