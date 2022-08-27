"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"Advertisement",sidebar_position:12,slug:"advertisement"},i=void 0,p={unversionedId:"Features/Advertisement",id:"Features/Advertisement",title:"Advertisement",description:"Google AdMob and Facebook Ads are available on the app. Let's check out the way to configure them.",source:"@site/docs/Features/Advertisement.md",sourceDirName:"Features",slug:"/Features/advertisement",permalink:"/Features/advertisement",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Advertisement",sidebar_position:12,slug:"advertisement"},sidebar:"tutorialSidebar",previous:{title:"Google Maps",permalink:"/Features/google-map"},next:{title:"Design UI",permalink:"/Build Apps/design-ui"}},l={},s=[{value:"1. App Tracking Transparency",id:"1-app-tracking-transparency",level:2},{value:"2. Google AdMob",id:"2-google-admob",level:2},{value:"1. Setup Google AdMob app and Ad Units",id:"1-setup-google-admob-app-and-ad-units",level:3},{value:"2. Setup Google AdMob on Builder",id:"2-setup-google-admob-on-builder",level:3},{value:"3. Facebook Ads",id:"3-facebook-ads",level:2},{value:"4.\xa0Add a new Ads",id:"4add-a-new-ads",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Google AdMob and Facebook Ads are available on the app. Let's check out the way to configure them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Table of contents"),":"),(0,o.kt)("h2",{id:"1-app-tracking-transparency"},"1. App Tracking Transparency"),(0,o.kt)("p",null,"The App Tracking Transparency is supported to allow you to display iOS 14+ tracking authorization dialog and request permission to collect data. Collected data is crucial for ad networks to work efficiently on ios 14+ devices. This also prevents your app from being rejected by App Store by violating Legal - Privacy - Data Use and Sharing session."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3650).Z,width:"1080",height:"2340"})),(0,o.kt)("h2",{id:"2-google-admob"},"2. Google AdMob"),(0,o.kt)("h3",{id:"1-setup-google-admob-app-and-ad-units"},"1. Setup Google AdMob app and Ad Units"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Because Flutter is a multi-platform SDK, you need to add an app and ad units for both Android and iOS in AdMob.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": In\xa0",(0,o.kt)("a",{parentName:"p",href:"https://apps.admob.com/v2/home"},"AdMob Console"),", create a new Android App."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8420).Z,width:"3780",height:"1532"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'If you choose "',(0,o.kt)("inlineCode",{parentName:"p"},"Yes"),'" when being asked "',(0,o.kt)("inlineCode",{parentName:"p"},"Is the app listed on a supported app store?"),'", your advertisement setup must be reviewed and approved before being available to use.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Create\xa0 Ad Units (Banner, Reward, Interstitial, and Native)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4329).Z,width:"3584",height:"1018"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),": Repeat Step 1 and Step 2 to create iOS App and Ad units for iOS App."),(0,o.kt)("h3",{id:"2-setup-google-admob-on-builder"},"2. Setup Google AdMob on Builder"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Android App ID"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"iOS App ID"),"\xa0share the same format\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"),"\xa0. These 2 values can be found at\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Apps > VIEW ALL APPS"),"\xa0at the left-hand side menu bar.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4733).Z,width:"811",height:"332"})),(0,o.kt)("h2",{id:"3-facebook-ads"},"3. Facebook Ads"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Payment Information on Facebook Developer must be completed."),(0,o.kt)("li",{parentName:"ul"},"Your app needs Facebook Approval."),(0,o.kt)("li",{parentName:"ul"},"You can test your app even if it hasn't been published on Google Play/ App Store yet thanks to testingID that we supported. However, keep in mind that you need to update your information at Google Developer when you released your app in order to continue using this feature.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You might see different illustrations compared with the below instructions because of different versions in Facebook Developer Console by the time these documents were written.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:"),"\xa0Integrate your app in\xa0",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook Developer Console")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": In Dashboard, click on Setup Audience Network and fill out all of the necessary information:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(290).Z,width:"3332",height:"734"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:"),"\xa0When you finish to register your Audience Network information, click\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Go to Monetization Manager")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5762).Z,width:"1604",height:"1112"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Select the platform you want to implement your Ads on. Let's say Android, then click + Add"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8696).Z,width:"1460",height:"1028"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:"),"\xa0Declare your app information whether your app has been released on Google Play / App Store or not."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3172).Z,width:"1856",height:"778"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:"),"\xa0Select your first placement, then choose the type of ads placement."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently, the placements supported are Banner, Interstitial, Native, and Reward. Remember to create those placements when you finish\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Add Android / iOS App"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5075).Z,width:"1506",height:"1548"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7:"),"\xa0At\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm Audience Network SDK Integration"),"\xa0step, check\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"The Audience Network SDK has been integrated into my app"),"\xa0and click\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm Manually")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8:"),"\xa0At\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Enter your business payment account information"),"\xa0step, click\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Add payment account"),"\xa0and finish your payment registration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 9:"),"\xa0Go back to\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Monetization Manager"),"\xa0home page, click on\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Integration > Properties"),"\xa0on the left-hand side menu bar and select your project property >\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Ad Space Property"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(698).Z,width:"1962",height:"1136"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 10:"),"\xa0Successfully creating Banner, Native, Reward and Interstitial Placement Ads would lead to the result as below. Click on\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Copy ID"),"\xa0at the end of each Ad Placement and save those values for later uses."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3586).Z,width:"2455",height:"1220"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 11:"),"\xa0Repeat from step 4 to step 10 to create placements for iOS platform, and to create 4 types of placement just like Android (Banner, Interstitial, Native, and Reward). After that, click on\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Copy ID"),"\xa0at the end of each Ad Placement and save those values for later uses."),(0,o.kt)("h2",{id:"4add-a-new-ads"},"4.\xa0Add a new Ads"),(0,o.kt)("p",null,"Below is an example of adding a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Banner"),"\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Google AdMob"),"\xa0into\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Category"),"\xa0Screen. The written guide could be found below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1357).Z,width:"815",height:"499"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": Open Builder, choose\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Features"),"\xa0>\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Advertisement"),".\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Advertisement")," and start adding your first Ads by clicking on\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ADD NEW ITEM"),"."),(0,o.kt)("p",null,"Each Ad item including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Type"),"\xa0which could be\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Banner"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Reward"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Interstitial"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Native")),(0,o.kt)("li",{parentName:"ul"},"A Provider which could be\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Facebook"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Google")),(0,o.kt)("li",{parentName:"ul"},"An\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Android ID"),"\xa0which could be obtained from Step 2, session 2 - Google Admob depending on its\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Type")),(0,o.kt)("li",{parentName:"ul"},"An\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"iOS ID"),"\xa0which you could obtain from Step 10, session 3 - Facebook Ads depending on its\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Type")),(0,o.kt)("li",{parentName:"ul"},"A\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Delay time to show"),"\xa0\xa0to control the delayed time of an Ads to be shown, in second."),(0,o.kt)("li",{parentName:"ul"},"Multiple\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Screens"),"\xa0that you want to display your Ads on")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Click on UPDATE to update your Advertisement Config."),(0,o.kt)("p",null,"That\u2019s all \ud83d\ude42"))}c.isMDXComponent=!0},4329:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1170470020-cea5443cc3a461b2ed14a951770f7926.png"},8420:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1188204655-cfb1ba3ea2249a4488236c78cdf48afc.png"},5762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1199161862-fecd46be8db384238b9319dd2454a1c0.png"},290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1269311340-66b9d5e55ebde007760935f1ea39c860.png"},4733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1876919018-24682223dfac9ae8a9a5541305661bb5.png"},698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1884295057-04ef994df2f431197c95dac4eefdded1.png"},3586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1923984308-09685f3dd71aecfd4b90bbb39786c9a6.png"},1357:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/296934165-4ae23e138c4edd78e95c4b14a517fff7.png"},5075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/378608748-3939acd5a898092a063afcad5301c0ab.png"},3650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/532347469-f5eb1d18ec18999f607439170fcee943.png"},3172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/652356096-c303b6f6a3b17f6879c7a9a132c97b05.png"},8696:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/745441239-c9e225c3a996d4a7089e4321c8ab93c3.png"}}]);