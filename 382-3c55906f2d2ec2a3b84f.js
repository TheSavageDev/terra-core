(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1748:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ge}));var r=t(0),a=t.n(r),o=t(309),i=t(910),l=t(85),c=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Default Action Header"}),a.a.createElement("br",null))};function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m={};function s(e){var n=e.components,t=u(e,["components"]);return Object(o.mdx)("wrapper",p({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Default Action Header\"\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n\n")))}s.isMDXComponent=!0;var d=t(800),b=t.n(d),f=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Default Action Header",description:t,example:a.a.createElement(c,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},x=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Back Action Header",onBack:function(){return alert("You clicked back!")}}),a.a.createElement("br",null))};function O(){return(O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function j(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var y={};function v(e){var n=e.components,t=j(e,["components"]);return Object(o.mdx)("wrapper",O({},y,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Action Header\"\n      onBack={() => alert('You clicked back!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}v.isMDXComponent=!0;var h=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Back Action Header",description:t,example:a.a.createElement(x,null),exampleSrc:a.a.createElement(v,null),isExpanded:r})},g=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Back Close Action Header",onClose:function(){return alert("You clicked close!")},onBack:function(){return alert("You clicked back!")}}),a.a.createElement("br",null))};function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function E(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var C={};function N(e){var n=e.components,t=E(e,["components"]);return Object(o.mdx)("wrapper",w({},C,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onBack={() => alert('You clicked back!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}N.isMDXComponent=!0;var k=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Back Close Action Header",description:t,example:a.a.createElement(g,null),exampleSrc:a.a.createElement(N,null),isExpanded:r})},M=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Close Action Header",onClose:function(){return alert("You clicked close!")}}),a.a.createElement("br",null))};function A(){return(A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function H(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var D={};function X(e){var n=e.components,t=H(e,["components"]);return Object(o.mdx)("wrapper",A({},D,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",A({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}X.isMDXComponent=!0;var T=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Close Action Header",description:t,example:a.a.createElement(M,null),exampleSrc:a.a.createElement(X,null),isExpanded:r})},P=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Maximize Close Action Header",onClose:function(){return alert("You clicked close!")},onMaximize:function(){return alert("You clicked maximize!")}}),a.a.createElement("br",null))};function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function S(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var z={};function B(e){var n=e.components,t=S(e,["components"]);return Object(o.mdx)("wrapper",L({},z,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",L({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Maximize Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onMaximize={() => alert('You clicked maximize!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}B.isMDXComponent=!0;var Y=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Maximize Close Action Header",description:t,example:a.a.createElement(P,null),exampleSrc:a.a.createElement(B,null),isExpanded:r})},V=t(4),I=t.n(V),q=t(814),R={"placeholder-wrapper":"ActionHeaderDocCommon__placeholder-wrapper___1Vl6x"},_=I.a.bind(R),J=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Minimize Custom Button Action Header",onMinimize:function(){return alert("You clicked minimize!")},onClose:function(){return alert("You clicked close!")}},a.a.createElement(q.c,{className:_("placeholder-wrapper"),title:"Collapsible Menu View"})),a.a.createElement("br",null))};function W(){return(W=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function F(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var G={};function U(e){var n=e.components,t=F(e,["components"]);return Object(o.mdx)("wrapper",W({},G,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",W({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport { Placeholder } from '@cerner/terra-docs';\nimport styles from './ActionHeaderDocCommon.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader title=\"Minimize Custom Button Action Header\" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </ActionHeader>\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}function K(){return(K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Q(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}U.isMDXComponent=!0;var Z={};function $(e){var n=e.components,t=Q(e,["components"]);return Object(o.mdx)("wrapper",K({},Z,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",K({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder-wrapper {\n    height: 30px !important;\n    padding: 0;\n  }\n}\n\n")))}$.isMDXComponent=!0;var ee=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Minimize Custom Button Action Header",description:t,example:a.a.createElement(J,null),exampleCssSrc:a.a.createElement($,null),exampleSrc:a.a.createElement(U,null),isExpanded:r})},ne=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Back Close Previous Next Action Header",onClose:function(){return alert("You clicked close!")},onBack:function(){return alert("You clicked back!")},onPrevious:function(){return alert("You clicked previous!")},onNext:function(){return alert("You clicked next!")}}),a.a.createElement("br",null))};function te(){return(te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function re(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ae={};function oe(e){var n=e.components,t=re(e,["components"]);return Object(o.mdx)("wrapper",te({},ae,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",te({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Close Previous Next Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onBack={() => alert('You clicked back!')}\n      onPrevious={() => alert('You clicked previous!')}\n      onNext={() => alert('You clicked next!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}oe.isMDXComponent=!0;var ie=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Back Previous Next Close Action Header",description:t,example:a.a.createElement(ne,null),exampleSrc:a.a.createElement(oe,null),isExpanded:r})},le=I.a.bind(R),ce=function(){return a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement(l.default,{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien. Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat. Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida. Nulla accumsan non nisl sed elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",onMinimize:function(){return alert("You clicked minimize!")},onClose:function(){return alert("You clicked close!")}},a.a.createElement(q.c,{className:le("placeholder-wrapper"),title:"Collapsible Menu View"})),a.a.createElement("br",null))};function pe(){return(pe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ue(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var me={};function se(e){var n=e.components,t=ue(e,["components"]);return Object(o.mdx)("wrapper",pe({},me,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",pe({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport { Placeholder } from '@cerner/terra-docs';\nimport styles from './ActionHeaderDocCommon.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien.\n      Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat.\n      Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida.\n      Nulla accumsan non nisl sed elementum.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n      onMinimize={() => alert('You clicked minimize!')}\n      onClose={() => alert('You clicked close!')}\n    >\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </ActionHeader>\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}se.isMDXComponent=!0;var de=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(b.a,{title:n||"Long Wrapping Text Header",description:t,example:a.a.createElement(ce,null),exampleCssSrc:a.a.createElement($,null),exampleSrc:a.a.createElement(se,null),isExpanded:r})},be=t(803),fe=t.n(be);function xe(){return(xe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Oe(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var je=function(){return Object(o.mdx)(fe.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Displays a single terra ",Object(o.mdx)("inlineCode",{parentName:"p"},"Collapsible Menu View")," (",Object(o.mdx)("em",{parentName:"p"},"Not provided by ",Object(o.mdx)("inlineCode",{parentName:"em"},"Action Header")),") child element on the right end of the header."))}return n.isMDXComponent=!0,n({})}},{name:"level",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",xe({parentName:"pre"},{className:"language-json"}),'[\n "1",\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"1",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Optionally sets the heading level. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"1"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"6"),". Default ",Object(o.mdx)("inlineCode",{parentName:"p"},"level=1"),". This helps screen readers to announce appropriate heading levels.\nChanging 'level' will not visually change the style of the content."))}return n.isMDXComponent=!0,n({})}},{name:"onClose",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function for when the close button is clicked.\nOn small viewports, this will be triggered by a back button if onBack is not set."))}return n.isMDXComponent=!0,n({})}},{name:"onBack",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function for when the back button is clicked. The back button will not display if this is not set."))}return n.isMDXComponent=!0,n({})}},{name:"onMaximize",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function for when the expand button is clicked.\nThe expand button will not display if this is not set or on small viewports.\nOnly the expand button will be rendered if onMaximize and onMinimize are set."),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Note: If ",Object(o.mdx)("inlineCode",{parentName:"em"},"onBack")," is set, the maximize button will not appear and a custom maximize button must be provided\nas a child inside a ",Object(o.mdx)("inlineCode",{parentName:"em"},"Collapsible Menu View"),".")))}return n.isMDXComponent=!0,n({})}},{name:"onMinimize",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function for when the minimize button is clicked.\nThe minimize button will not display if this is not set or on small viewports.\nOnly the expand button will be rendered if both onMaximize and onMinimize are set."),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Note: If ",Object(o.mdx)("inlineCode",{parentName:"em"},"onBack")," is set, the minimize button will not appear and a custom minimize button must be provided\nas a child inside a ",Object(o.mdx)("inlineCode",{parentName:"em"},"Collapsible Menu View"),".")))}return n.isMDXComponent=!0,n({})}},{name:"onNext",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function for when the next button is clicked. The previous-next button group will display if either this or onPrevious is set but the button for the one not set will be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"onPrevious",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"title",type:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=Oe(n,["components"]);return Object(o.mdx)("wrapper",xe({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Text to be displayed as the title in the header bar."))}return n.isMDXComponent=!0,n({})}}]})};function ye(){return(ye=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ve(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var he={};function ge(e){var n=e.components,t=ve(e,["components"]);return Object(o.mdx)("wrapper",ye({},he,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-action-header"},"Terra Action Header"),Object(o.mdx)("p",null,"The terra-action-header component is a header bar containing a title and optional actionable items such as links and buttons."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",ye({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-action-header"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",ye({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",ye({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",ye({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",ye({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",ye({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",ye({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",ye({parentName:"tr"},{align:null}),"react-intl"),Object(o.mdx)("td",ye({parentName:"tr"},{align:null}),"^2.8.0")))),Object(o.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(o.mdx)("p",null,"The Action-Header component must be composed inside the ",Object(o.mdx)("a",ye({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-base/src/terra-dev-site/doc/base/Base.1.doc.mdx"}),"Base")," component with a locale in order for it to load the correct translation strings."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",ye({parentName:"pre"},{className:"language-jsx"}),"import ActionHeader from 'terra-action-header';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ye({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ye({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ye({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ye({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ye({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ye({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"}),"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(f,{mdxType:"DefaultActionHeader"}),Object(o.mdx)(h,{mdxType:"BackActionHeader"}),Object(o.mdx)(T,{mdxType:"CloseActionHeader"}),Object(o.mdx)(k,{mdxType:"BackCloseActionHeader"}),Object(o.mdx)(ie,{mdxType:"BackPreviousNextCloseActionHeader"}),Object(o.mdx)(Y,{mdxType:"MaximizeCloseActionHeader"}),Object(o.mdx)(ee,{mdxType:"MinimizeCustomButtonActionHeader"}),Object(o.mdx)(de,{mdxType:"LongWrappingTextHeader"}),Object(o.mdx)("h2",{id:"action-header-props"},"Action Header Props"),Object(o.mdx)(je,{mdxType:"ActionHeaderPropsTable"}))}ge.isMDXComponent=!0},804:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=function(e){var n=i({},e);return a.a.createElement(o.a,n,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},n.default=l},910:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r),o=t(801),i=t.n(o),l=function(e){var n=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-header",name:"terra-action-header",version:"2.61.0",url:n})}}}]);