(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1820:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(0),a=n.n(r),o=n(309),i=n(864),c=n(1),p=n.n(c),l=n(161);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,t);var n,r,o,i=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).handleOnSelect=t.handleOnSelect.bind(b(t)),t.state={colorVariant:"auto",size:void 0,variant:"single-user"},t}return n=c,(r=[{key:"handleOnSelect",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(e,s({color:this.state.colorVariant,variant:this.state.variant,size:this.state.size},this.props)),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"variant"},"Select a generic variant type:")),a.a.createElement("select",{id:"variant",name:"variant",value:this.state.variant,onChange:this.handleOnSelect},a.a.createElement("option",{value:"single-user"},"Single-User"),a.a.createElement("option",{value:"shared-user"},"Shared-User"),a.a.createElement("option",{value:"provider"},"Provider")),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"colorVariant"},"Select a color variant:")),a.a.createElement("select",{id:"colorVariant",name:"colorVariant",value:this.state.colorVariant,onChange:this.handleOnSelect},a.a.createElement("option",{value:"auto"},"Auto"),a.a.createElement("option",{value:"neutral"},"Neutral"),a.a.createElement("option",{value:"one"},"One"),a.a.createElement("option",{value:"two"},"Two"),a.a.createElement("option",{value:"three"},"Three"),a.a.createElement("option",{value:"four"},"Four"),a.a.createElement("option",{value:"five"},"Five"),a.a.createElement("option",{value:"six"},"Six"),a.a.createElement("option",{value:"seven"},"Seven"),a.a.createElement("option",{value:"eight"},"Eight"),a.a.createElement("option",{value:"nine"},"Nine"),a.a.createElement("option",{value:"ten"},"Ten")),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"size"},"Select a size:")),a.a.createElement("select",{id:"size",name:"size",value:this.state.size,onChange:this.handleOnSelect},a.a.createElement("option",{value:"1em"},"Default"),a.a.createElement("option",{value:"2em"},"2em"),a.a.createElement("option",{value:"3em"},"3em")))}}])&&m(n.prototype,r),o&&m(n,o),c}(a.a.Component)};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x={color:p.a.string,size:p.a.string,variant:p.a.string},j=function(e){var t=h({},e);return a.a.createElement(l.Generic,{variant:t.variant,alt:t.variant,color:t.color,size:t.size})};j.propTypes=x;var g=y(j);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function N(e){var t=e.components,n=E(e,["components"]);return Object(o.mdx)("wrapper",w({},C,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { Generic } from 'terra-avatar';\nimport GenericAvatarVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/generic/GenericAvatarVariantsWrapper';\n\nconst propTypes = { color: PropTypes.string, size: PropTypes.string, variant: PropTypes.string };\n\nconst GenericAvatarVariants = ({\n  ...props\n}) => (\n  <Generic variant={props.variant} alt={props.variant} color={props.color} size={props.size} />\n);\n\nGenericAvatarVariants.propTypes = propTypes;\nexport default GenericAvatarVariantsWrapper(GenericAvatarVariants);\n\n")))}N.isMDXComponent=!0;var S=n(800),D=n.n(S),T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(D.a,{title:t||"Generic Avatar Variants",description:n,example:a.a.createElement(g,null),exampleSrc:a.a.createElement(N,null),isExpanded:r})},M=n(803),X=n.n(M);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G=function(){return Object(o.mdx)(X.a,{rows:[{name:"alt",type:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Specifies the alternative text for the image."))}return t.isMDXComponent=!0,t({})}},{name:"color",type:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",P({parentName:"pre"},{className:"language-json"}),'[\n "auto",\n "neutral",\n "one",\n "two",\n "three",\n "four",\n "five",\n "six",\n "seven",\n "eight",\n "nine",\n "ten"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'auto'",description:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the background color. Defaults to ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),". Accepted color variants are theme specific.\nOne of: ",Object(o.mdx)("inlineCode",{parentName:"p"},"'auto'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'neutral'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'one'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'two'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'three'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'four'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'five'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'six'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'seven'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'eight'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'nine'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'ten'"),"."))}return t.isMDXComponent=!0,t({})}},{name:"hashValue",type:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Value used for the hash function when color is set to ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),". If not provided, hash function utilizes alt."))}return t.isMDXComponent=!0,t({})}},{name:"isAriaHidden",type:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide avatar from the accessibility tree."))}return t.isMDXComponent=!0,t({})}},{name:"size",type:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Overrides the default size."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",P({parentName:"pre"},{className:"language-json"}),'[\n "single-user",\n "shared-user",\n "provider"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'single-user'",description:function(){var e={};function t(t){var n=t.components,r=V(t,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the Generic Avatar type to One of the following variants ",Object(o.mdx)("inlineCode",{parentName:"p"},"single-user"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"shared-user"),", or ",Object(o.mdx)("inlineCode",{parentName:"p"},"provider"),"."))}return t.isMDXComponent=!0,t({})}}]})};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A={};function k(e){var t=e.components,n=L(e,["components"]);return Object(o.mdx)("wrapper",z({},A,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"generic"},"Generic"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"Generic")," variant represents multiple users - it displays a shared user icon in a circular frame."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",z({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-avatar"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",z({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Generic } from 'terra-avatar';\n\n<Generic\n  alt=\"Generic Users\"\n/>\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(T,{title:"Generic Avatar - Icons",mdxType:"GenericAvatarVariants"}),Object(o.mdx)("h2",{id:"shared-user-props"},"Shared User Props"),Object(o.mdx)(G,{mdxType:"GenericPropsTable"}))}k.isMDXComponent=!0},804:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=i({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=c},864:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(801),i=n.n(o),c=function(e){var t=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.10.0",url:t})}}}]);