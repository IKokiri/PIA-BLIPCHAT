(this["webpackJsonppia-blipchat"]=this["webpackJsonppia-blipchat"]||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),c=a.n(o),r=(a(26),a(27),a(28),a(16)),i=function(e){var t=new r.BlipChat;function a(){var e,a=localStorage.getItem("appKey");!function(e){t.withAppKey(e)}(a),e=function(){var e=localStorage.getItem("withStyle");if(null!==e){e="{"+(e=e.substring(0,e.length-1))+"}",e=JSON.parse(e);var a="";for(var n in e)"header"===n&&(a+="#blip-chat-header {background-color: "+e[n]+" ! important} "),"enviadas"===n&&(a+="div.bubble.right {background-color: "+e[n]+" ! important} "),"recebidas"===n&&(a+="div.bubble.left {background-color: "+e[n]+" ! important} "),"background"===n&&(a+="#messages-list {background-color: "+e[n]+" ! important} ");return t.withCustomStyle(a),a}}(),t.withButton({icon:localStorage.getItem("withButton")}),t.build(),t.toogleChat(),function(e,t,a){localStorage.setItem("code",'<script src="https://unpkg.com/blip-chat-widget" type="text/javascript">\n      <\/script>\n      <script>\n          (function () {\n              window.onload = function () {\n                  new BlipChat()\n                  .withAppKey("'+t+'")\n                  .withButton({"icon":"'+a+'"})\n                  .withCustomStyle("'+e+'")\n                  .withCustomCommonUrl("https://chat.blip.ai")\n                  .build();\n              }\n          })();\n      <\/script>')}(e,a,localStorage.getItem("withButton"))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return a()}},"V"),l.a.createElement("button",{onClick:function(){t.destroy()}},"X"))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",onChange:function(){return function(){var e=document.querySelector("#appKey").value;localStorage.setItem("appKey",e)}()},className:"form-control",id:"appKey","aria-describedby":"appKeyHelp",placeholder:"APP KEY"}),l.a.createElement("p",{id:"appKeyHelp"},l.a.createElement("small",null,"Inserir key do seu chat boot."))))},s=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{readOnly:!0,className:"form-control",id:"codeArea",rows:"3",value:localStorage.getItem("code")},localStorage.getItem("code")),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("ul",{className:"nav justify-content-center"},l.a.createElement("li",{className:"nav-item",style:{cursor:"pointer"},onClick:function(){return function(){var e=document.getElementById("codeArea");e.select(),e.value&&document.execCommand("copy")}()}},l.a.createElement("svg",{className:"bi bi-clipboard",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z",clipRule:"evenodd"})))))))},u=a(4),d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fixed-bottom"},l.a.createElement("ul",{className:"nav justify-content-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/"},l.a.createElement("svg",{className:"bi bi-house-door-fill",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z",clipRule:"evenodd"})))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",onClick:function(){return localStorage.setItem("withButton",""),localStorage.setItem("withStyle",""),localStorage.setItem("appKey",""),void localStorage.setItem("code","")},href:"/"},l.a.createElement("svg",{className:"bi bi-trash",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z",clipRule:"evenodd"})))))))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fixed-bottom",style:{margin:"3em"}},l.a.createElement("ul",{className:"nav justify-content-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/ListColorHeader"},l.a.createElement("svg",{className:"bi bi-card-heading",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M3 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z",clipRule:"evenodd"}),l.a.createElement("path",{d:"M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1z"})))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/ListColorSend"},l.a.createElement("svg",{className:"bi bi-box-arrow-right",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M11.646 11.354a.5.5 0 010-.708L14.293 8l-2.647-2.646a.5.5 0 01.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M4.5 8a.5.5 0 01.5-.5h9a.5.5 0 010 1H5a.5.5 0 01-.5-.5z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M2 13.5A1.5 1.5 0 01.5 12V4A1.5 1.5 0 012 2.5h7A1.5 1.5 0 0110.5 4v1.5a.5.5 0 01-1 0V4a.5.5 0 00-.5-.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V12A1.5 1.5 0 019 13.5H2z",clipRule:"evenodd"})))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/ListColorReicived"},l.a.createElement("svg",{className:"bi bi-box-arrow-in-right",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8.146 11.354a.5.5 0 010-.708L10.793 8 8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 011 8z",clipRule:"evenodd"}),l.a.createElement("path",{fillRule:"evenodd",d:"M13.5 14.5A1.5 1.5 0 0015 13V3a1.5 1.5 0 00-1.5-1.5h-8A1.5 1.5 0 004 3v1.5a.5.5 0 001 0V3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8A.5.5 0 015 13v-1.5a.5.5 0 00-1 0V13a1.5 1.5 0 001.5 1.5h8z",clipRule:"evenodd"})))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/ListColorBackground"},l.a.createElement("svg",{className:"bi bi-card-image",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z",clipRule:"evenodd"}),l.a.createElement("path",{d:"M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V13h-14v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",clipRule:"evenodd"})))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/ChatIcon"},l.a.createElement("svg",{className:"bi bi-chat-quote-fill",width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 9.333 4 8.587 4 7.667 4 6.747 4.776 6 5.734 6c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 9.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z",clipRule:"evenodd"})))))))},v=a(6),p=a(19),f=a(20),g=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,null,[{key:"getColors",value:function(){var e;return new Promise((function(t,a){fetch("http://www.colr.org/json/scheme/latest",{method:"GET"}).then((function(e){return e.json()})).then((function(n){(e=n)?t(e):a()}))}))}}]),e}(),E=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){g.getColors().then((function(e){o(e.schemes[0].colors)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Cabe\xe7alho"),l.a.createElement("div",{className:"row colors container"}),a.map((function(e){return l.a.createElement(N,{color:e,key:e,local:"header"})})))},w=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){g.getColors().then((function(e){o(e.schemes[0].colors)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Background"),l.a.createElement("div",{className:"row colors container"}),a.map((function(e){return l.a.createElement(N,{color:e,key:e,local:"background"})})))},b=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){g.getColors().then((function(e){o(e.schemes[0].colors)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Enviadas"),l.a.createElement("div",{className:"row colors container"}),a.map((function(e){return l.a.createElement(N,{color:e,key:e,local:"enviadas"})})))},C=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){g.getColors().then((function(e){o(e.schemes[0].colors)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Recebidas"),l.a.createElement("div",{className:"row colors container"}),a.map((function(e){return l.a.createElement(N,{color:e,key:e,local:"recebidas"})})))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Chat"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",onChange:function(){return function(){var e=document.querySelector("#chatIcon").value;localStorage.setItem("withButton",e)}()},className:"form-control",id:"chatIcon","aria-describedby":"ChatIConKeyHelp",placeholder:"URL CHAT ICON"}),l.a.createElement("p",{id:"ChatIConKeyHelp"},l.a.createElement("small",null,"Inserir o caminho da imagem para o icone do seu chat boot."))))},N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return function(e,t){var a=null===localStorage.getItem("withStyle")?"":localStorage.getItem("withStyle");a+='"'+t+'":"#'+e+'",',localStorage.setItem("withStyle",a)}(e.color,e.local)},style:{backgroundColor:"#"+e.color},className:"btn"},"\xa0\xa0\xa0\xa0"))},R=a(7);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a,null,l.a.createElement(R.c,null,l.a.createElement(R.a,{path:"/ChatIcon",exact:!0,component:y}),l.a.createElement(R.a,{path:"/ListColorSend",exact:!0,component:b}),l.a.createElement(R.a,{path:"/ListColorReicived",exact:!0,component:C}),l.a.createElement(R.a,{path:"/ListColorBackground",exact:!0,component:w}),l.a.createElement(R.a,{path:"/ListColorHeader",exact:!0,component:E})),l.a.createElement(h,null),l.a.createElement(d,null)),l.a.createElement(m,null),l.a.createElement(i,null),l.a.createElement(s,null)))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pia-blipchat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pia-blipchat","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.957e4481.chunk.js.map