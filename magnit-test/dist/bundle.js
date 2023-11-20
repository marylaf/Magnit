(()=>{"use strict";var e={35:(e,i,r)=>{r.d(i,{Z:()=>o});var t=r(81),a=r.n(t),s=r(645),n=r.n(s)()(a());n.push([e.id,":root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}",""]);const o=n},231:(e,i,r)=>{r.d(i,{Z:()=>d});var t=r(81),a=r.n(t),s=r(645),n=r.n(s),o=r(667),p=r.n(o),l=new URL(r(954),r.b),w=n()(a()),c=p()(l);w.push([e.id,`/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n\n@font-face{font-family:swiper-icons;src:url(${c});font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}`,""]);const d=w},645:e=>{e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var r="",t=void 0!==i[5];return i[4]&&(r+="@supports (".concat(i[4],") {")),i[2]&&(r+="@media ".concat(i[2]," {")),t&&(r+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),r+=e(i),t&&(r+="}"),i[2]&&(r+="}"),i[4]&&(r+="}"),r})).join("")},i.i=function(e,r,t,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(t)for(var o=0;o<this.length;o++){var p=this[o][0];null!=p&&(n[p]=!0)}for(var l=0;l<e.length;l++){var w=[].concat(e[l]);t&&n[w[0]]||(void 0!==s&&(void 0===w[5]||(w[1]="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {").concat(w[1],"}")),w[5]=s),r&&(w[2]?(w[1]="@media ".concat(w[2]," {").concat(w[1],"}"),w[2]=r):w[2]=r),a&&(w[4]?(w[1]="@supports (".concat(w[4],") {").concat(w[1],"}"),w[4]=a):w[4]="".concat(a)),i.push(w))}},i}},667:e=>{e.exports=function(e,i){return i||(i={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),i.hash&&(e+=i.hash),/["'() \t\n]|(%20)/.test(e)||i.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var i=[];function r(e){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===e){r=t;break}return r}function t(e,t){for(var s={},n=[],o=0;o<e.length;o++){var p=e[o],l=t.base?p[0]+t.base:p[0],w=s[l]||0,c="".concat(l," ").concat(w);s[l]=w+1;var d=r(c),g={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==d)i[d].references++,i[d].updater(g);else{var u=a(g,t);t.byIndex=o,i.splice(o,0,{identifier:c,updater:u,references:1})}n.push(c)}return n}function a(e,i){var r=i.domAPI(i);return r.update(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap&&i.supports===e.supports&&i.layer===e.layer)return;r.update(e=i)}else r.remove()}}e.exports=function(e,a){var s=t(e=e||[],a=a||{});return function(e){e=e||[];for(var n=0;n<s.length;n++){var o=r(s[n]);i[o].references--}for(var p=t(e,a),l=0;l<s.length;l++){var w=r(s[l]);0===i[w].references&&(i[w].updater(),i.splice(w,1))}s=p}}},569:e=>{var i={};e.exports=function(e,r){var t=function(e){if(void 0===i[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}i[e]=r}return i[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var i=document.createElement("style");return e.setAttributes(i,e.attributes),e.insert(i,e.options),i}},565:(e,i,r)=>{e.exports=function(e){var i=r.nc;i&&e.setAttribute("nonce",i)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var i=e.insertStyleElement(e);return{update:function(r){!function(e,i,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),i.styleTagTransform(t,e,i.options)}(i,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)}}}},589:e=>{e.exports=function(e,i){if(i.styleSheet)i.styleSheet.cssText=e;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(e))}}},954:e=>{e.exports="data:application/font-woff;charset=utf-8;base64, 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"}},i={};function r(t){var a=i[t];if(void 0!==a)return a.exports;var s=i[t]={id:t,exports:{}};return e[t](s,s.exports,r),s.exports}r.m=e,r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),i=r.n(e),t=r(795),a=r.n(t),s=r(569),n=r.n(s),o=r(565),p=r.n(o),l=r(216),w=r.n(l),c=r(589),d=r.n(c),g=r(231),u={};u.styleTagTransform=d(),u.setAttributes=p(),u.insert=n().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=w(),i()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals;var b=r(35),A={};A.styleTagTransform=d(),A.setAttributes=p(),A.insert=n().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=w(),i()(b.Z,A),b.Z&&b.Z.locals&&b.Z.locals;var f=[{id:1,title:"Движун",imageSrc:"/images/cat.svg",background:"#ffe1e1",about:"Танцевать где угодно и когда угодно — первое правило хорошего настроения от Движуна. Если вам немного взгрустнулось, то скорее лепите его на одежду и начинайте дэнсить"},{id:2,title:"Полнолун",imageSrc:"/images/polnolun.svg",background:"#e7ecf3",about:"Полнолун — идеальное время для загадывания желаний и планирования новых начинаний. Этот символ наполнит вас вдохновением и магией лунного света."},{id:3,title:"Ааагонь",imageSrc:"/images/fire.svg",background:"#f2d7ff",about:"Ааагонь символизирует страсть и энергию. Если вам нужен заряд бодрости или искра для вдохновения, этот огонёк поможет разжечь ваши идеи."},{id:4,title:"Ееедаа",imageSrc:"/images/meal.svg",background:"#c3ffc9",about:"Ееедаа — настоящий гастрономический рай. Этот символ предназначен для любителей вкусной еды и уютных семейных ужинов."},{id:5,title:"На чиле",imageSrc:"/images/chill.svg",background:"#ffedcc",about:"На чиле — ваш напоминание о том, что порой нужно просто расслабиться. Отдых и покой — ключевые элементы для гармонии."},{id:6,title:"Поп Дог",imageSrc:"/images/dog.svg",background:"#ffe1e1",about:"Поп Дог — ваш верный друг в мире моды и стиля. Он всегда подскажет, как быть на пике поп-культуры."},{id:7,title:"Кить-коть",imageSrc:"/images/cats.svg",background:"#d9e8fb",about:"Кить-коть — символ мягкости и изящества. Он приносит уют и гармонию в любое пространство."},{id:8,title:"Пинк Пу",imageSrc:"/images/pink.svg",background:"#ffe1f0",about:"Пинк Пу — источник нежности и милоты. Этот символ поможет вам выразить вашу любовь и заботу."},{id:9,title:"Пельмешка",imageSrc:"/images/dumpling.svg",background:"#ffe1e1",about:"Пельмешка — символ домашнего уюта и семейных традиций. Он напомнит о вкусных моментах жизни."},{id:10,title:"Маска",imageSrc:"/images/mask.svg",background:"#c3fff4",about:"Маска — таинственный символ, который напоминает о маскарадах и непознанном. Она приглашает вас в мир фантазий и новых образов."},{id:11,title:"Движун",imageSrc:"/images/cat.svg",background:"#ffe1e1",about:"Как и первый Движун, этот символ подчеркивает важность движения и радости в жизни, напоминая о необходимости веселья и активности."},{id:12,title:"Полнолун",imageSrc:"/images/polnolun.svg",background:"#e7ecf3",about:"Полнолун олицетворяет мистическую и загадочную сторону ночи, призывая к размышлениям и обновлению."},{id:13,title:"Ааагонь",imageSrc:"/images/fire.svg",background:"#f2d7ff",about:"Этот символ огня символизирует внутренний свет, согревающий душу и поджигающий искру вдохновения в каждом из нас."},{id:14,title:"Ееедаа",imageSrc:"/images/meal.svg",background:"#c3ffc9",about:"Ееедаа напоминает о радости вкусной пищи и совместных приемах пищи, объединяющих друзей и семью."},{id:15,title:"На чиле",imageSrc:"/images/chill.svg",background:"#ffedcc",about:"На чиле призывает к моментам спокойствия и отдыха, напоминая о необходимости баланса между работой и личным временем."},{id:16,title:"Поп Дог",imageSrc:"/images/dog.svg",background:"#ffe1e1",about:"Поп Дог вдохновляет на бесстрашие и открытость новому, будучи символом модных тенденций и молодежной культуры."},{id:17,title:"Кить-коть",imageSrc:"/images/cats.svg",background:"#d9e8fb",about:"Кить-коть представляет собой грацию и независимость, напоминая о том, что в каждом из нас живет немного капризного, но очаровательного создания."},{id:18,title:"Пинк Пу",imageSrc:"/images/pink.svg",background:"#ffe1f0",about:"Пинк Пу наполнен чувственностью и теплотой, являясь напоминанием о необходимости заботиться о близких."},{id:19,title:"Пельмешка",imageSrc:"/images/dumpling.svg",background:"#ffe1e1",about:"Пельмешка — это символ домашнего тепла и семейного уюта, напоминая о традициях и кулинарных изысках."},{id:20,title:"Маска",imageSrc:"/images/mask.svg",background:"#c3fff4",about:"Маска подчеркивает многогранность личности и таинственную сторону каждого, приглашая к игре образов и ролей."},{id:21,title:"Движун",imageSrc:"/images/cat.svg",background:"#ffe1e1",about:"Этот Движун продолжает вдохновлять на активность и радость, напоминая о важности двигаться вперед с улыбкой."},{id:22,title:"Полнолун",imageSrc:"/images/polnolun.svg",background:"#e7ecf3",about:"Полнолун в этой итерации символизирует глубокую связь с природой и космосом, приглашая к раздумьям о величии вселенной."},{id:23,title:"Ааагонь",imageSrc:"/images/fire.svg",background:"#f2d7ff",about:"Огонь здесь продолжает греть и воодушевлять, будучи источником энергии и силы для преодоления трудностей."},{id:24,title:"Ееедаа",imageSrc:"/images/meal.svg",background:"#c3ffc9",about:"Ееедаа в этой версии напоминает о важности вкусных моментов в жизни, подчеркивая радость от общения за столом."}],v=document.querySelector(".table__container"),h=document.querySelector(".swiper-wrapper"),m=document.querySelector(".button"),y=document.querySelector(".swiper");f.forEach((function(e){var i='\n                  <div class="cell" style="background: '.concat(e.background,'" >\n                      <img class="cell__image" src="').concat(e.imageSrc,'" />\n                      <h2 class="cell__title">').concat(e.title,"</h2>\n                  </div>\n              ");v.innerHTML+=i;var r='\n              <div class="swiper-slide">\n                      <img class="slider-image" src="'.concat(e.imageSrc,'" />\n              </div>\n              ');h.innerHTML+=r})),document.querySelectorAll(".cell").forEach((function(e,i){e.addEventListener("click",(function(){k.slideTo(i),y.scrollIntoView({behavior:"smooth"})}))})),m.addEventListener("click",(function(){var e=this.querySelector(".button__icon"),i=this.querySelector(".button__subtitle"),r=v.classList.toggle("show-all");i.textContent=r?"Скрыть":"Посмотреть все Стикерсы",e.src=r?"/images/all.svg":"/images/Watches.svg"}));var x=function(e){var i=document.querySelector(".info");i.classList.remove("info-visible"),setTimeout((function(){e&&(i.innerHTML='\n        <h1 class="info__title">'.concat(e.title,'</h1>\n        <p class="info__subtitle">').concat(e.about,"</p>\n      ")),requestAnimationFrame((function(){i.classList.add("info-visible")}))}),500)},k=new Swiper(".swiper",{speed:500,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!0,keyboard:!0,on:{slideChange:function(){var e=this.activeIndex,i=f[e];x(i)}}});x(f[k.activeIndex])})()})();