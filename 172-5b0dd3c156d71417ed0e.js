(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1659:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(824);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar. Vivamus sapien nibh, dignissim id semper non, consectetur et felis. Duis mattis odio tortor, eu mattis lectus lobortis mattis. Ut sit amet risus pellentesque, imperdiet mi eu, sodales massa. Aenean quis lacus rutrum, lobortis urna vel, congue est. Vivamus viverra efficitur viverra. Integer sit amet metus dolor. Nullam imperdiet vehicula tincidunt. Duis consequat congue magna, eu imperdiet magna venenatis et. Quisque eget vulputate massa. Donec vel diam vel nulla gravida blandit sit amet sed quam. Donec sed feugiat magna, eget consequat mi. Ut quis arcu non libero tempus semper nec in sem. Nunc in quam leo. Donec risus eros, dapibus ut nisi vitae, ullamcorper faucibus nisl. Suspendisse finibus urna vel mi sodales, a pharetra nisl convallis. Phasellus sed turpis non ipsum scelerisque pellentesque at cursus lectus. Nunc ut velit nec odio ultrices sodales.",d=p.substring(0,280),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(c,t);var e,n,i,r=l(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=r.call(this,t)).state={isOpen:!0},e.toggleShowHide=e.toggleShowHide.bind(h(e)),e}return e=c,(n=[{key:"toggleShowHide",value:function(){this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){return o.a.createElement(a.a,{preview:d,isOpen:this.state.isOpen,onChange:this.toggleShowHide},p)}}])&&s(e.prototype,n),i&&s(e,i),c}(o.a.Component);e.default=m},810:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),r=n.n(a),s=n(4),u=n.n(s),l=n(811),c=n.n(l);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=u.a.bind({toggle:"Toggle-module__toggle___1Qy4y"}),d={children:r.a.node.isRequired,isAnimated:r.a.bool,isOpen:r.a.bool},m=function(t){var e,n=t.isAnimated,i=t.isOpen,a=t.children,r=f(t,["isAnimated","isOpen","children"]),s=i?"auto":0;return e=n?o.a.createElement(c.a,{duration:250,height:s,easing:"ease-out"},a):i&&a,o.a.createElement("div",h({},r,{className:p("toggle",r.className),"aria-hidden":!i}),e)};m.propTypes=d,m.defaultProps={isAnimated:!1,isOpen:!1};e.a=m},811:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=l(n(0)),s=l(n(1)),u=l(n(10));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=t[s])}return o}function d(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},h,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,r=a.delay,s=a.duration,l=a.height,h=a.onAnimationEnd,f=a.onAnimationStart;if(this.contentElement&&l!==t.height){var p;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=s+r,_=null,w={height:null,overflow:"hidden"},S="auto"===e.height;m(l)?(_=l<0||"0"===l?0:l,w.height=_):y(l)?(_="0%"===l?0:l,w.height=_):(_=b,w.height="auto",w.overflow=null),S&&(w.height=_,_=b);var O=(0,u.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===t.height||l<t.height),c(p,this.animationStateClasses.animatingDown,"auto"===l||l>t.height),c(p,this.animationStateClasses.animatingToHeightZero,0===w.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(p,this.animationStateClasses.animatingToHeightSpecific,w.height>0),p)),C=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:O,height:_,overflow:"hidden",shouldUseTransitions:!S}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),S?(w.shouldUseTransitions=!0,d(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(w),g(f,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:C,shouldUseTransitions:!1}),o.hideContent(w.height),g(h,{newHeight:w.height})}),v)):(g(f,{newHeight:_}),this.timeoutID=setTimeout((function(){w.animationStateClasses=C,w.shouldUseTransitions=!1,o.setState(w),"auto"!==l&&o.hideContent(_),g(h,{newHeight:_})}),v))}}},{key:"componentWillUnmount",value:function(){d(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,u.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,l=n.className,h=n.contentClassName,d=n.delay,m=n.duration,y=n.easing,g=n.id,b=n.style,v=this.state,_=v.height,w=v.overflow,S=v.animationStateClasses,O=v.shouldUseTransitions,C=o({},b,{height:_,overflow:w||b.overflow});O&&a&&(C.transition="height "+m+"ms "+y+" "+d+"ms",b.transition&&(C.transition=b.transition+", "+C.transition),C.WebkitTransition=C.transition);var E={};i&&(E.transition="opacity "+m+"ms "+y+" "+d+"ms",E.WebkitTransition=E.transition,0===_&&(E.opacity=0));var T=(0,u.default)((c(t={},S,!0),c(t,l,l),t)),j="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===_;return r.default.createElement("div",o({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":j,className:T,id:g,style:C}),r.default.createElement("div",{className:h,style:E,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||y(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},824:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(1),r=n.n(a),s=n(810),u=n(11),l=n(4),c=n.n(l),h=n(10),f=n.n(h),p=n(6),d=n.n(p),m=n(9);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=c.a.bind({"clinical-lowlight-theme":"_ShowHideButton-module__clinical-lowlight-theme___19e_n","orion-fusion-theme":"_ShowHideButton-module__orion-fusion-theme___NtaDp",button:"_ShowHideButton-module__button___2Mat1",icon:"_ShowHideButton-module__icon___vffPr","is-focused":"_ShowHideButton-module__is-focused___aH7dv","is-hovered":"_ShowHideButton-module__is-hovered___LSDMp",inner:"_ShowHideButton-module__inner___5KqSD",text:"_ShowHideButton-module__text___1TQL7","icon-holder":"_ShowHideButton-module__icon-holder___30bX1"}),T={onClick:r.a.func,onBlur:r.a.func,onFocus:r.a.func,onKeyDown:r.a.func,onKeyUp:r.a.func,refCallback:r.a.func,text:r.a.string.isRequired},j={refCallback:void 0},D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(r,t);var e,n,i,a=w(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=a.call(this,t)).state={active:!1,focused:!1},e.handleKeyDown=e.handleKeyDown.bind(O(e)),e.handleKeyUp=e.handleKeyUp.bind(O(e)),e.handleOnBlur=e.handleOnBlur.bind(O(e)),e}return e=r,(n=[{key:"handleOnBlur",value:function(t){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(t)}},{key:"handleKeyDown",value:function(t){t.nativeEvent.keyCode===m.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):t.nativeEvent.keyCode===m.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(t)}},{key:"handleKeyUp",value:function(t){t.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!1}),t.nativeEvent.keyCode===m.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(t)}},{key:"render",value:function(){var t=this.props,e=t.text,n=t.onClick,i=(t.onBlur,t.onFocus),a=(t.onKeyDown,t.onKeyUp,t.refCallback),r=b(t,["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"]),s=this.context,u=f()(E(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},s.className]),r.className);return o.a.createElement("button",g({},r,{className:u,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:i,ref:a}),o.a.createElement("span",{className:E("inner")},o.a.createElement("span",{className:E("text")},e),o.a.createElement("span",{className:E("icon-holder")},o.a.createElement("span",{className:E("icon")}))))}}])&&v(e.prototype,n),i&&v(e,i),r}(o.a.Component);D.propTypes=T,D.defaultProps=j,D.contextType=d.a;var k=D;function H(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var P=c.a.bind({"show-hide":"ShowHide-module__show-hide___2LrZD",start:"ShowHide-module__start___2RslR",center:"ShowHide-module__center___1_Ql0",end:"ShowHide-module__end___1JBpL"}),x={children:r.a.node.isRequired,intl:r.a.shape({formatMessage:r.a.func}).isRequired,onChange:r.a.func.isRequired,buttonAlign:r.a.string,buttonText:r.a.string,isOpen:r.a.bool,preview:r.a.node},A={buttonAlign:"start",isOpen:!1,preview:void 0},N=function(t){var e=t.buttonAlign,n=t.buttonText,i=t.children,a=t.onChange,r=t.preview,u=t.intl,l=t.isOpen,c=H(t,["buttonAlign","buttonText","children","onChange","preview","intl","isOpen"]),h=P(["show-hide","button",e,c.className]),f="";return n||(f=l?u.formatMessage({id:"Terra.showhide.hide"}):u.formatMessage({id:"Terra.showhide.showmore"})),o.a.createElement("div",c,!l&&r,o.a.createElement(s.a,{isOpen:l},i),o.a.createElement("div",{className:P("show-hide")},o.a.createElement(k,{"aria-expanded":l,text:n||f,onClick:a,className:h})))};N.propTypes=x,N.defaultProps=A;e.a=Object(u.injectIntl)(N)}}]);