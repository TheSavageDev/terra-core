(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1718:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(819);e.default=function(){return a.a.createElement(o.a,{id:"animatedToggle",closedButtonText:"Custom Text",isAnimated:!0},a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"text-input"},"Text input"),a.a.createElement("input",{id:"text-input",type:"text"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"select-field",defaultValue:"Option 01"},"Select field"),a.a.createElement("select",{id:"select-field"},a.a.createElement("option",null,"Option 01"),a.a.createElement("option",null,"Option 02"))),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"textarea"},"Textarea"),a.a.createElement("textarea",{id:"textarea",cols:"30",rows:"5",defaultValue:"Textarea text"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("button",{type:"button",id:"button"},"button")))}},810:function(t,e,n){"use strict";var i=n(0),a=n.n(i),o=n(1),r=n.n(o),s=n(4),l=n.n(s),u=n(811),c=n.n(u);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.a.bind({toggle:"Toggle-module__toggle___1Qy4y"}),m={children:r.a.node.isRequired,isAnimated:r.a.bool,isOpen:r.a.bool},d=function(t){var e,n=t.isAnimated,i=t.isOpen,o=t.children,r=f(t,["isAnimated","isOpen","children"]),s=i?"auto":0;return e=n?a.a.createElement(c.a,{duration:250,height:s,easing:"ease-out"},o):i&&o,a.a.createElement("div",h({},r,{className:p("toggle",r.className),"aria-hidden":!i}),e)};d.propTypes=m,d.defaultProps={isAnimated:!1,isOpen:!1};e.a=d},811:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),s=u(n(1)),l=u(n(10));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},h,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.delay,s=o.duration,u=o.height,h=o.onAnimationEnd,f=o.onAnimationStart;if(this.contentElement&&u!==t.height){var p;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=s+r,O=null,S={height:null,overflow:"hidden"},T="auto"===e.height;d(u)?(O=u<0||"0"===u?0:u,S.height=O):g(u)?(O="0%"===u?0:u,S.height=O):(O=b,S.height="auto",S.overflow=null),T&&(S.height=O,O=b);var C=(0,l.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(p,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(p,this.animationStateClasses.animatingToHeightZero,0===S.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),c(p,this.animationStateClasses.animatingToHeightSpecific,S.height>0),p)),w=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:C,height:O,overflow:"hidden",shouldUseTransitions:!T}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),T?(S.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(S),y(f,{newHeight:S.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:w,shouldUseTransitions:!1}),a.hideContent(S.height),y(h,{newHeight:S.height})}),v)):(y(f,{newHeight:O}),this.timeoutID=setTimeout((function(){S.animationStateClasses=w,S.shouldUseTransitions=!1,a.setState(S),"auto"!==u&&a.hideContent(O),y(h,{newHeight:O})}),v))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,u=n.className,h=n.contentClassName,m=n.delay,d=n.duration,g=n.easing,y=n.id,b=n.style,v=this.state,O=v.height,S=v.overflow,T=v.animationStateClasses,C=v.shouldUseTransitions,w=a({},b,{height:O,overflow:S||b.overflow});C&&o&&(w.transition="height "+d+"ms "+g+" "+m+"ms",b.transition&&(w.transition=b.transition+", "+w.transition),w.WebkitTransition=w.transition);var E={};i&&(E.transition="opacity "+d+"ms "+g+" "+m+"ms",E.WebkitTransition=E.transition,0===O&&(E.opacity=0));var _=(0,l.default)((c(t={},T,!0),c(t,u,u),t)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===O;return r.default.createElement("div",a({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":j,className:_,id:y,style:w}),r.default.createElement("div",{className:h,style:E,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},819:function(t,e,n){"use strict";var i=n(0),a=n.n(i),o=n(1),r=n.n(o),s=n(4),l=n.n(s),u=n(22),c=n(159),h=n(810);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=O(t);if(e){var a=O(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=l.a.bind({"toggle-button":"ToggleButton-module__toggle-button___Nyogt",icon:"ToggleButton-module__icon___2IKaD","is-open":"ToggleButton-module__is-open___1zDcD","is-icon-animated":"ToggleButton-module__is-icon-animated___Upjep","button-text":"ToggleButton-module__button-text___2ULyt"}),T={children:r.a.node.isRequired,closedButtonText:r.a.string.isRequired,buttonAttrs:r.a.object,icon:r.a.element,isAnimated:r.a.bool,isIconAnimated:r.a.bool,isIconOnly:r.a.bool,isInitiallyOpen:r.a.bool,onClose:r.a.func,onOpen:r.a.func,openedButtonText:r.a.string},C={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:a.a.createElement(c.default,null)},w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(r,t);var e,n,i,o=y(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,t)).state={isOpen:t.isInitiallyOpen},e.handleOnClick=e.handleOnClick.bind(v(e)),e}return e=r,(n=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),i=t.icon,o=(t.isAnimated,t.isIconAnimated),r=t.isIconOnly,s=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),l=m(t,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),c=s||n,f=this.state.isOpen?c:n,d=r?n:f,g=S(["button",{"is-open":this.state.isOpen},{"is-icon-animated":o},l.className]),y=a.a.createElement(u.default,p({},e,{isIconOnly:r,icon:a.a.createElement("span",{className:S("icon")},i),"aria-expanded":this.state.isOpen,text:d,onClick:this.handleOnClick}));return a.a.createElement("div",p({},l,{className:g}),y,a.a.createElement(h.a,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&d(e.prototype,n),i&&d(e,i),r}(a.a.Component);w.propTypes=T,w.defaultProps=C;e.a=w}}]);