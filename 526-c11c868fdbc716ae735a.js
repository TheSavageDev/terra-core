(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{1446:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var r=t(0),i=t.n(r),o=t(831),a=t(853);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=p(e);if(n){var i=p(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return s(this,t)}}function s(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?f(e):n}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}(s,e);var n,t,r,l=u(s);function s(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),(n=l.call(this,e)).state={},n.handleOnChange=n.handleOnChange.bind(f(n)),n}return n=s,(t=[{key:"handleOnChange",value:function(e){this.setState({selectedAnswer:e.currentTarget.value})}},{key:"render",value:function(){return i.a.createElement(a.a,{id:"testing-radio-field",legend:"Which Department do you work for?",help:"Your work falls inline with one of these departments",isInvalid:void 0===this.state.selectedAnswer,error:"One must be selected",isInline:!0,required:!0},i.a.createElement(o.a,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),i.a.createElement(o.a,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),i.a.createElement(o.a,{id:"website-dept",name:"dept",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),i.a.createElement(o.a,{id:"events-dept",name:"dept",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&d(n.prototype,t),r&&d(n,r),s}(i.a.Component)},853:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(1),a=t.n(o),l=t(11),d=t(10),c=t.n(d),u=t(4),s=t.n(u),f=t(6),p=t.n(f),h=t(28),m=t.n(h),_=t(160);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var y=s.a.bind({"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___3b-Fy","orion-fusion-theme":"RadioField-module__orion-fusion-theme___1OOKK","radio-field":"RadioField-module__radio-field___ct8VD","is-inline":"RadioField-module__is-inline___2cCY2","legend-group":"RadioField-module__legend-group___9Aad-","legend-group-hidden":"RadioField-module__legend-group-hidden___1uTve",legend:"RadioField-module__legend___3dDrN","error-icon":"RadioField-module__error-icon___3-fM5","error-icon-hidden":"RadioField-module__error-icon-hidden___3ciPg",required:"RadioField-module__required___3B97W","required-hidden":"RadioField-module__required-hidden___RA9AV",optional:"RadioField-module__optional___2mnPg","help-text":"RadioField-module__help-text___3GS05","error-text":"RadioField-module__error-text___1Oz0b"}),v={children:a.a.node,error:a.a.node,help:a.a.node,hideRequired:a.a.bool,intl:a.a.shape({formatMessage:a.a.func}).isRequired,isInline:a.a.bool,isInvalid:a.a.bool,isLegendHidden:a.a.bool,legend:a.a.string.isRequired,legendAttrs:a.a.object,required:a.a.bool,showOptional:a.a.bool},O=function(e){var n=e.children,t=e.error,r=e.help,o=e.hideRequired,a=e.intl,l=e.isInvalid,d=e.isInline,u=e.isLegendHidden,s=e.legend,f=e.legendAttrs,h=e.required,v=e.showOptional,O=b(e,["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),w=i.a.useContext(p.a),R=c()(y("radio-field",{"is-inline":d},w.className),O.className),E=y(["legend",f.className]),q="terra-radio-field-description-".concat(m()()),x=r?"terra-radio-field-description-help-".concat(m()()):"",j=t?"terra-radio-field-description-error-".concat(m()()):"",C="".concat(q," ").concat(j," ").concat(x),F=i.a.createElement("legend",{id:q,className:y(["legend-group",{"legend-group-hidden":u}])},i.a.createElement("div",g({},f,{className:E}),l&&i.a.createElement("span",{className:y("error-icon")}),h&&(l||!o)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{"aria-hidden":"true",className:y("required")},"*"),i.a.createElement(_.default,{text:a.formatMessage({id:"Terra.form.field.required"})})),s,h&&!l&&o&&i.a.createElement("span",{className:y("required-hidden")},"*"),v&&!h&&i.a.createElement("span",{className:y("optional")},a.formatMessage({id:"Terra.form.field.optional"})),!l&&i.a.createElement("span",{className:y("error-icon-hidden")}))),N=i.a.Children.map(n,(function(e){return e&&e.type.isRadio?i.a.cloneElement(e,{inputAttrs:{"aria-describedby":C}}):e}));return i.a.createElement("fieldset",g({},O,{"aria-required":h,required:h,className:R}),F,N,l&&t&&i.a.createElement("div",{id:j,className:y("error-text")},t),r&&i.a.createElement("div",{id:x,className:y("help-text")},r))};O.propTypes=v,O.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};n.a=Object(l.injectIntl)(O)}}]);