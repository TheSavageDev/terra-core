(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1437:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(869),u=n(820);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=i.a.bind(u.a),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,r,a=f(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={isInvalid:!1,isIncomplete:!1,required:!1},e.toggleInvalid=e.toggleInvalid.bind(b(e)),e.toggleIncomplete=e.toggleIncomplete.bind(b(e)),e}return t=i,(n=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"toggleIncomplete",value:function(){this.setState((function(e){return{isIncomplete:!e.isIncomplete,required:!e.required}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:m("content-wrapper")},o.a.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),o.a.createElement("button",{type:"button",id:"incomplete-toggle",onClick:this.toggleIncomplete},"Toggle Incomplete"),o.a.createElement(l.a,{inputId:"test-input",defaultValue:"Value",error:"Error message.",help:"Help message.",hideRequired:!0,inputAttrs:{name:"test",type:"text"},isInvalid:this.state.isInvalid,isIncomplete:this.state.isIncomplete,required:this.state.required,label:"Label Text",labelAttrs:{className:"label"},showOptional:!0}))}}])&&p(t.prototype,n),r&&p(t,r),i}(o.a.Component);t.default=h},812:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(10),u=n.n(l),c=n(4),p=n.n(c),s=n(6),f=n.n(s);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=p.a.bind({"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2i8DL","orion-fusion-theme":"Input-module__orion-fusion-theme___2Cscj","form-input":"Input-module__form-input___3YNQv","form-error":"Input-module__form-error___DFrVY","form-incomplete":"Input-module__form-incomplete___1Jx-6"}),P={defaultValue:i.a.oneOfType([i.a.string,i.a.number]),disabled:i.a.bool,isIncomplete:i.a.bool,isInvalid:i.a.bool,onBlur:i.a.func,onChange:i.a.func,onFocus:i.a.func,onInput:i.a.func,name:i.a.string,pattern:i.a.string,refCallback:i.a.func,required:i.a.bool,type:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number]),ariaLabel:i.a.string},C={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,e);var t,n,r,a=I(i);function i(){return v(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,i=t.isInvalid,l=t.onBlur,c=t.onChange,p=t.onFocus,s=t.onInput,f=t.name,d=t.pattern,v=t.refCallback,g=t.required,O=t.type,I=t.ariaLabel,_=t.value,w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),P=this.context,C=u()(j("form-input",{"form-error":i},{"form-incomplete":a&&g&&!i},P.className),w.className);return w&&Object.prototype.hasOwnProperty.call(w,"aria-label")?e=I||w["aria-label"]:I&&(e=I),w["aria-label"]=e,g&&(w["aria-required"]="true"),void 0!==_?w.value=_:void 0!==n&&(w.defaultValue=n),w.placeholder&&(w.placeholder=null),o.a.createElement("input",b({},w,{ref:function(e){v&&v(e)},name:f,type:O,pattern:d,onBlur:l,onChange:c,onFocus:p,onInput:s,disabled:r,required:g,className:C}))}}])&&g(t.prototype,n),r&&g(t,r),i}(o.a.Component);k.propTypes=P,k.defaultProps=C,k.contextType=f.a,k.isInput=!0;t.a=k},820:function(e,t,n){"use strict";t.a={"content-wrapper":"Input-test-module__content-wrapper___38ykk","programmatic-button":"Input-test-module__programmatic-button___3RPba"}},869:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(205),u=n(128),c=n(812);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={inputId:i.a.string.isRequired,label:i.a.string.isRequired,defaultValue:i.a.oneOfType([i.a.string,i.a.number]),disabled:i.a.bool,error:i.a.node,errorIcon:i.a.element,help:i.a.node,hideRequired:i.a.bool,inputAttrs:i.a.object,isIncomplete:i.a.bool,isInline:i.a.bool,isInvalid:i.a.bool,isLabelHidden:i.a.bool,labelAttrs:i.a.object,maxWidth:i.a.string,onChange:i.a.func,onInput:i.a.func,refCallback:i.a.func,required:i.a.bool,showOptional:i.a.bool,type:i.a.string,value:i.a.oneOfType([i.a.string,i.a.number])},d={defaultValue:void 0,disabled:!1,error:null,errorIcon:o.a.createElement(u.a,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,onInput:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},b=function(e){var t,n=e.defaultValue,r=e.disabled,a=e.error,i=e.errorIcon,u=e.help,f=e.hideRequired,d=e.inputAttrs,b=e.inputId,y=e.isIncomplete,m=e.isInline,h=e.isInvalid,v=e.isLabelHidden,g=e.label,O=e.labelAttrs,I=e.maxWidth,_=e.onChange,w=e.onInput,j=e.refCallback,P=e.required,C=e.showOptional,k=e.type,q=e.value,S=s(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","onInput","refCallback","required","showOptional","type","value"]);u&&a&&h?t="".concat(b,"-error ").concat(b,"-help"):(u&&(t="".concat(b,"-help")),a&&h&&(t="".concat(b,"-error")));var R=k||d.type;return S.placeholder&&(S.placeholder=null),o.a.createElement(l.a,p({label:g,labelAttrs:O,error:a,errorIcon:i,help:u,hideRequired:f,required:P,showOptional:C,isInvalid:h,isInline:m,isLabelHidden:v,htmlFor:b,maxWidth:I},S),o.a.createElement(c.a,p({},d,{disabled:d.disabled||r,id:b,isIncomplete:y,type:R,onChange:_,onInput:w,value:q,defaultValue:n,refCallback:j,"aria-describedby":t})))};b.propTypes=f,b.defaultProps=d,t.a=b}}]);