(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1341:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(22);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(){var t=i(Object(n.useState)(!1),2),e=t[0],r=t[1];return a.a.createElement("div",null,a.a.createElement(o.default,{isDisabled:e,text:e?"Disabled":"Click to Disable",id:"programmaticDisabledButton1",key:"test-example-button-1",onClick:function(){r(!e)}}),a.a.createElement(o.default,{text:e?"Click to Enable":"Click to Disable",id:"programmaticDisabledButton2",key:"test-example-button-2",onClick:function(){r(!e)}}))}}}]);