"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,r=new Array(p);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<p;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const p={title:"Create Bundle Id for iOS app",sidebar_position:16,slug:"create-bundle-id-ios"},r=void 0,l={unversionedId:"Build Apps/Create Bundle Id for iOS app",id:"Build Apps/Create Bundle Id for iOS app",title:"Create Bundle Id for iOS app",description:"You can create Bundle ID for the app (or iOS app) without using Mac. This tutorial guides to creating Bundle ID for iOS on Windows, you also can do these steps on Mac device. Please follow the steps below:",source:"@site/docs/Build Apps/Create Bundle Id for iOS app.md",sourceDirName:"Build Apps",slug:"/Build Apps/create-bundle-id-ios",permalink:"/fr/Build Apps/create-bundle-id-ios",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Create Bundle Id for iOS app",sidebar_position:16,slug:"create-bundle-id-ios"},sidebar:"tutorialSidebar",previous:{title:"Create Keystore file",permalink:"/fr/Build Apps/create-keystore-file"},next:{title:"App Performance",permalink:"/fr/Build Apps/app-performance"}},o={},s=[{value:"Video guide",id:"video-guide",level:2},{value:"Manual guide",id:"manual-guide",level:2},{value:"Step 1: Create Bundle ID group",id:"step-1-create-bundle-id-group",level:3},{value:"Step 2: Create Bundle ID",id:"step-2-create-bundle-id",level:3},{value:"Step 3: Create Bundle ID\xa0OneSignal",id:"step-3-create-bundle-idonesignal",level:3}],u={toc:s};function c(e){let{components:t,...p}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can create Bundle ID for the app (or iOS app) without using Mac. This tutorial guides to creating Bundle ID for iOS on Windows, you also can do these steps on Mac device. Please follow the steps below:"),(0,i.kt)("h2",{id:"video-guide"},"Video guide"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/ZYQoKhsv2-I"},"image")),(0,i.kt)("h2",{id:"manual-guide"},"Manual guide"),(0,i.kt)("h3",{id:"step-1-create-bundle-id-group"},"Step 1: Create Bundle ID group"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open and login to the website:\xa0",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/"},"https://developer.apple.com")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/HzEDFuHKpgSwLKbQLZ7vlQ8FaUaFw5eBIVQ41O7g.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login with your Developer account, then click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/0LUQvAZjDOJux4sWeWpiJNvtgSLrfGkBHCIoBLpa.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles"),"\xa0screen, select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),"\xa0, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0icon as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/rad4NRniGf4QOHVHPgaEbP6ZsVYXsQsto8RzRgOv.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/SfNsWZejzPqDRDyRtwM1YNVlhoDJMQ5Ph68Ix8tu.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier"),"\xa0as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/XBqsFyVXG6PHHPtcr4ORtDoRjyD0xANVJh1tA4vT.jpg",alt:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),":\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier"),"\xa0must be set with the bundle id of the project and have the onesignal extension. E.g.: bundle id of project is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.demoapp.fluxstore"),", the Identifier App group will be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"group.com.demoapp.fluxstore.onesignal")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),", then\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Register"),"\xa0button:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/ehZkZk9jyHG8PqfdjR7VTZ0v56a7OJKbpnLFHTlH.jpg",alt:null})))),(0,i.kt)("h3",{id:"step-2-create-bundle-id"},"Step 2: Create Bundle ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles"),"\xa0screen, select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),"\xa0, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0icon as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/rad4NRniGf4QOHVHPgaEbP6ZsVYXsQsto8RzRgOv.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App IDs"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/2tPT3i1wTDYFdUk27aJi1Yw1nNEEJqR5ROThjYW5.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Coutinue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/rqxl0sDalDPpQpxhvCJjsrrWOSQsA0WKq0b1WUwd.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle ID"),", select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Explicit"),"\xa0option. In Capabilities, select the checkboxes below:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App Groups")),(0,i.kt)("p",null,"+\xa0Associated Domain"),(0,i.kt)("p",null,"+\xa0Push Notifications"),(0,i.kt)("p",null,"+\xa0Sign In with Apple (if you have used this feature)"),(0,i.kt)("p",null,"Then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Register"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(480).Z,width:"1900",height:"1194"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After creating the Identifier for the project, click on the newly created identifier to access the update page:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/2NjGbg0vzBmJallQI7ixTHA7q3gXY946VaiSJkBA.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0configuration, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Configure"),"\xa0button:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/cs5GIkc2IlfhuxpPeNkcIAFfMdJ7qaIRZTL45WI0.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier App Groups"),"\xa0created earlier, click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/ofSp5SjZXDyADsp6MCekmdhfVlZyirJkUQ36d34n.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/TETv84YRlN87KWuIOFTgBW7qXzIe2laXgToaUOvA.jpg",alt:null})))),(0,i.kt)("h3",{id:"step-3-create-bundle-idonesignal"},"Step 3: Create Bundle ID\xa0OneSignal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles"),"\xa0screen, select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),"\xa0, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0icon as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/rad4NRniGf4QOHVHPgaEbP6ZsVYXsQsto8RzRgOv.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App IDs"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/2tPT3i1wTDYFdUk27aJi1Yw1nNEEJqR5ROThjYW5.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Coutinue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/rqxl0sDalDPpQpxhvCJjsrrWOSQsA0WKq0b1WUwd.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle ID"),"\xa0of OneSignal, select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Explicit"),"\xa0option. In Capabilities, select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0checkbox.\xa0Then click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Register"),":",(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Bundle id Onesignal is required to be generated from the Bundle Id of the project and ends with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"onesignal"),". E.g.: Bundle id Project is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.demoapp.fluxstore"),", so Bundle id OneSginal must be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.demoapp.fluxstore.onesignal")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/f0bVXZJsiuxEhrm46k3gCk7FVSt2c03Agxgbu1se.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After creating the Identifier for the onesignal, click on the newly created identifier to access the update page:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/agMl04y4kUt7xKrUPnNYKexc9T9thxRsExzcASSO.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0configuration, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Configure"),"\xa0button:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/VvxzdXYnoCcgmvoCLtAdwjLrFL6TXBlWY3nQg0ke.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier App Groups"),"\xa0created earlier, click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/eJZWu0daTy1R0KJpkrm6zpsWz7cNaKLhR0TP8UfF.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://support.inspireui.com/storage/article_images/7OYUAjbKwFF5f3xVQLLeJS86EWFOhNcQTaC6L9l1.jpg",alt:null})))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"That's all!\n")))}c.isMDXComponent=!0},480:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/800069504-32537647b82773c931a081a8f0c1240a.jpg"}}]);