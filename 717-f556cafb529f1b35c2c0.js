(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1335:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n(0),o=n.n(r),u=n(22);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(){var t=a(Object(r.useState)(!1),2),e=t[0],n=t[1],i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=document.activeElement;return i&&i.current.focus(),function(){setTimeout((function(){t&&(t.focus(),n(!1))}),200)}})),o.a.createElement("div",null,o.a.createElement(u.default,{id:"modal-open-button",text:"Open Modal",onClick:function(){return n(!0)}}),o.a.createElement("dialog",{open:e},"This is an open dialog window",o.a.createElement("button",{ref:i,type:"button"},"Test Button")))}}}]);