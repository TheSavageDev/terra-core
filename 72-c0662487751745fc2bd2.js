(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1807:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(0),r=n.n(a),o=n(309),i=n(867),l=n(844),c=n(22),s=n(903),u=n(4),p=n.n(u),m=n(962);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=p.a.bind(m.a),x=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(r.a.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,a,o=h(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={content:x(),currentPage:1},t.changePages=t.changePages.bind(y(t)),t}return t=i,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:P("paginator-wrapper")},r.a.createElement(l.a,{header:r.a.createElement("h1",null,"Page",this.state.currentPage),footer:r.a.createElement(s.a,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10})},r.a.createElement("div",null,r.a.createElement(c.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),r.a.createElement(c.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),r.a.createElement(c.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&g(t.prototype,n),a&&g(t,a),i}(r.a.Component);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w={};function E(e){var t=e.components,n=j(e,["components"]);return Object(o.mdx)("wrapper",C({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}E.isMDXComponent=!0;var S=n(800),_=n.n(S),D=n(963),N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(_.a,{title:t||"Controlled Paginator Example",description:n,example:r.a.createElement(O,null),exampleCssSrc:r.a.createElement(D.a,null),exampleSrc:r.a.createElement(E,null),isExpanded:a})};function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=p.a.bind(m.a),R=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(r.a.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},L=function(){var e=R(),t=M(Object(a.useState)(1),2),n=t[0],o=t[1];return r.a.createElement("div",{className:T("paginator-wrapper")},r.a.createElement(l.a,{header:r.a.createElement("h1",null,"Page",n),footer:r.a.createElement(s.a,{onPageChange:function(e){o(e)},selectedPage:n})},r.a.createElement("div",null,r.a.createElement(c.default,{text:"Set Page to 9",onClick:function(){o(9)}}),r.a.createElement(c.default,{text:"Set Page to 15",onClick:function(){o(15)}}),r.a.createElement(c.default,{text:"Set Page to 45",onClick:function(){o(45)}})),e))};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q={};function B(e){var t=e.components,n=I(e,["components"]);return Object(o.mdx)("wrapper",X({},q,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",X({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nconst ControlledPaginatorExample = () => {\n  const content = buildPage();\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Page\n            {currentPage}\n          </h1>\n        )}\n        footer={<ControlledPaginator onPageChange={changePages} selectedPage={currentPage} />}\n      >\n        <div>\n          <Button text=\"Set Page to 9\" onClick={() => { setCurrentPage(9); }} />\n          <Button text=\"Set Page to 15\" onClick={() => { setCurrentPage(15); }} />\n          <Button text=\"Set Page to 45\" onClick={() => { setCurrentPage(45); }} />\n        </div>\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default ControlledPaginatorExample;\n\n")))}B.isMDXComponent=!0;var A=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(_.a,{title:t||"Controlled Paginator No Pages Example",description:n,example:r.a.createElement(L,null),exampleCssSrc:r.a.createElement(D.a,null),exampleSrc:r.a.createElement(B,null),isExpanded:a})},K=n(803),F=n.n(K);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var G=function(){return Object(o.mdx)(F.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=V(t,["components"]);return Object(o.mdx)("wrapper",U({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))}return t.isMDXComponent=!0,t({})}}]})};function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var z={};function W(e){var t=e.components,n=Y(e,["components"]);return Object(o.mdx)("wrapper",J({},z,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-controlled-paginator"},"Terra Controlled Paginator"),Object(o.mdx)("p",null,"Controlled version of the ",Object(o.mdx)("a",J({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/paginator"}),"Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",J({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",J({parentName:"pre"},{className:"language-jsx"}),"import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",J({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",J({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",J({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(N,{mdxType:"ControlledPaginatorExample"}),Object(o.mdx)(A,{mdxType:"ControlledPaginatorNoPagesExample"}),Object(o.mdx)("h2",{id:"controlled-paginator-props"},"Controlled Paginator Props"),Object(o.mdx)(G,{mdxType:"ControlledPaginatorPropsTable"}))}W.isMDXComponent=!0},804:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.a.createElement(o.a,t,r.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=l},844:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(10),c=n.n(l),s=n(4),u=n.n(s),p=n(6),m=n.n(p),d=n(22),g=n(56),f=n(11);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=u.a.bind({"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___1WEjj","orion-fusion-theme":"Dialog-module__orion-fusion-theme___gSod4",dialog:"Dialog-module__dialog___1oGDk","dialog-header":"Dialog-module__dialog-header___2yNqn","dialog-header-title":"Dialog-module__dialog-header-title___2n4e5","dialog-header-close":"Dialog-module__dialog-header-close___39X5p","close-icon":"Dialog-module__close-icon___qidsR","dialog-body":"Dialog-module__dialog-body___31vvf","dialog-footer":"Dialog-module__dialog-footer___2A1uR"}),v={children:i.a.node,footer:i.a.node.isRequired,header:i.a.node.isRequired,intl:i.a.shape({formatMessage:i.a.func}).isRequired,onClose:i.a.func},P=function(e){var t=e.children,n=e.footer,a=e.header,o=e.intl,i=e.onClose,l=b(e,["children","footer","header","intl","onClose"]),s=r.a.useContext(m.a),u=c()(y("dialog",s.className),l.className),p=i?r.a.createElement("div",{className:y("dialog-header-close")},r.a.createElement(d.default,{variant:"utility",text:o.formatMessage({id:"Terra.dialog.close"}),onClick:i,isIconOnly:!0,icon:r.a.createElement("span",{className:y("close-icon")})})):null,f=r.a.createElement("div",{className:y("dialog-header")},r.a.createElement("div",{className:y("dialog-header-title")},a),p);return r.a.createElement("div",h({},l,{className:u}),r.a.createElement(g.default,{fill:!0,header:f,footer:r.a.createElement("div",{className:y("dialog-footer")},n)},r.a.createElement("div",{className:y("dialog-body")},t)))};P.propTypes=v,P.defaultProps={onClose:null,children:null};t.a=Object(f.injectIntl)(P)},867:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(801),i=n.n(o),l=function(e){var t=e.url;return r.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.67.0",url:t})}},903:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(4),c=n.n(l),s=n(6),u=n.n(s),p=n(11),m=n(206),d=n(160),g=n(9),f=n(851),h=n(856),b=n(857);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=c.a.bind(f.a),E={onPageChange:i.a.func.isRequired,selectedPage:i.a.number.isRequired,totalCount:i.a.number,itemCountPerPage:i.a.number,intl:i.a.shape({formatMessage:i.a.func}).isRequired},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(i,e);var t,n,a,o=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handlePageChange=t.handlePageChange.bind(C(t)),t.buildPageButtons=t.buildPageButtons.bind(C(t)),t.reducedPaginator=t.reducedPaginator.bind(C(t)),t.setPaginator=t.setPaginator.bind(C(t)),t.state={showReducedPaginator:!1},t}return t=i,(n=[{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.nativeEvent.keyCode!==g.KEY_RETURN&&n.nativeEvent.keyCode!==g.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),!1)}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"buildPageButtons",value:function(e,t){var n=this.props,a=n.totalCount,o=n.itemCountPerPage,i=n.selectedPage,l=n.intl,c=Object(h.b)(i,Object(h.a)(a,o)),s=[];return c.forEach((function(n){var a=w(["nav-link",n===i?"is-selected":null]);n>e||s.push(r.a.createElement(b.a,{ariaLabel:l.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),ariaCurrent:n===i,className:a,key:"pageButton_".concat(n),onClick:t(n),onKeyDown:t(n),tabIndex:n===i?"-1":"0"},n))})),s}},{key:"defaultPaginator",value:function(){var e=this.context,t=this.props,n=t.selectedPage,a=t.intl,o=t.totalCount,i=t.itemCountPerPage,l=Object(h.a)(o,i),c=1===n?1:n-1,s=n===l?l:n+1;return r.a.createElement("div",{className:w("paginator",!o&&"pageless",e.className)},o&&r.a.createElement(b.a,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"})),r.a.createElement(b.a,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.a.createElement("span",{className:w("icon")}),a.formatMessage({id:"Terra.paginator.previous"})),o&&this.buildPageButtons(l,this.handlePageChange),r.a.createElement(b.a,{ariaDisabled:n===l,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","right-controls","next",n===l&&"is-disabled"]),disabled:n===l,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},a.formatMessage({id:"Terra.paginator.next"}),r.a.createElement("span",{className:w("icon")})),o&&r.a.createElement(b.a,{ariaDisabled:n===l,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link","right-controls",n===l&&"is-disabled"]),disabled:n===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},a.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.context,t=this.props,n=t.selectedPage,a=t.intl,o=t.totalCount,i=t.itemCountPerPage,l=Object(h.a)(o,i),c=1===n?1:n-1,s=n===l?l:n+1;return r.a.createElement("div",{className:w("paginator",!o&&"pageless",e.className),role:"navigation","aria-label":"pagination"},o&&r.a.createElement(b.a,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"})),r.a.createElement(b.a,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.a.createElement("span",{className:w("icon")}),a.formatMessage({id:"Terra.paginator.previous"})),o&&a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),r.a.createElement(b.a,{ariaDisabled:n===l,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","right-controls","next","icon-only",n===l&&"is-disabled"]),disabled:n===l,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},r.a.createElement(d.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),r.a.createElement("span",{className:w("icon")})),o&&r.a.createElement(b.a,{ariaDisabled:n===l,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link","right-controls",n===l&&"is-disabled"]),disabled:n===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},a.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return r.a.createElement(m.a,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&v(t.prototype,n),a&&v(t,a),i}(r.a.Component);S.propTypes=E,S.contextType=u.a,t.a=Object(p.injectIntl)(S)},962:function(e,t,n){"use strict";t.a={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___1ajCX"}},963:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var a=n(309);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={};function l(e){var t=e.components,n=o(e,["components"]);return Object(a.mdx)("wrapper",r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-scss"}),":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}l.isMDXComponent=!0}}]);