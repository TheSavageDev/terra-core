(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1326:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(855);t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{text:"Default",id:"default-badge"})," ",i.a.createElement(r.a,{intent:"primary",text:"Primary",id:"primary-badge"})," ",i.a.createElement(r.a,{intent:"secondary",text:"Secondary",id:"secondary-badge"})," ",i.a.createElement(r.a,{intent:"positive",text:"Positive",id:"positive-badge"})," ",i.a.createElement(r.a,{intent:"negative",text:"Negative",id:"negative-badge"})," ",i.a.createElement(r.a,{intent:"warning",text:"Warning",id:"warning-badge"})," ",i.a.createElement(r.a,{intent:"info",text:"Info",id:"info-badge"}))}},855:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),l=n.n(r),o=n(10),d=n.n(o),_=n(4),u=n.n(_),c=n(6),s=n.n(c),g=n(160),m={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___1_NSn","orion-fusion-theme":"Badge-module__orion-fusion-theme___1_VxE",badge:"Badge-module__badge___3cyVx","is-reversed":"Badge-module__is-reversed___Q8Ud9","has-icon":"Badge-module__has-icon___EOPgO",text:"Badge-module__text___h_fHm",tiny:"Badge-module__tiny___1iDFx",small:"Badge-module__small___3jOYg",medium:"Badge-module__medium___1w2t1",large:"Badge-module__large___1thYY",huge:"Badge-module__huge___1P84W",default:"Badge-module__default___1UKop",primary:"Badge-module__primary___3CfWa",secondary:"Badge-module__secondary___dFSf3",positive:"Badge-module__positive___O_KD0",negative:"Badge-module__negative___tRub0",warning:"Badge-module__warning___3Fw_u",info:"Badge-module__info___3yimG"};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var v=u.a.bind(m),O={children:l.a.node,icon:l.a.element,intent:l.a.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:l.a.bool,size:l.a.oneOf(["tiny","small","medium","large","huge"]),text:l.a.string,visuallyHiddenText:l.a.string},h={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},x=function(e){var t=e.size,n=e.intent,a=e.isReversed,r=e.text,l=e.icon,o=e.visuallyHiddenText,_=b(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),u=i.a.useContext(s.a),c=d()(v("badge",{"has-icon":l},{"is-reversed":a},t,n,u.className),_.className),f=r?i.a.createElement("span",{className:m.text,"aria-hidden":"true"},r):null,y=o?i.a.createElement(g.default,{text:o}):null,O=a?[y,f,l,_.children]:[l,y,f,_.children];return i.a.createElement.apply(i.a,["span",p(p({},_),{},{className:c})].concat(O))};x.propTypes=O,x.defaultProps=h;t.a=x}}]);