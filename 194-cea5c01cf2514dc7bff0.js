(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1833:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var l=n(0),a=n.n(l),o=n(309),r=n(816),i=n(842);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(l=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var u=function(){var e,t=c(Object(l.useState)([]),2),n=t[0],o=t[1],s=function(e,t){e.preventDefault(),o(r.a.toggleArrayValue(n,t.key))};return a.a.createElement(r.b,{summaryId:"example-multi-select",summary:"This table shows an implementation of multiple row selection.","aria-multiselectable":!0,rowStyle:"toggle",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"both",headerData:{selectAllColumn:{checkLabel:"Multi Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=i.a,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),isDisabled:!r.a.canToggleArrayValue(3,n,t.key),toggleAction:{metaData:{key:t.key},onToggle:s,isToggled:n.indexOf(t.key)>=0,toggleLabel:t.toggleText}};var t,l})))}]})};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function y(e){var t=e.components,n=m(e,["components"]);return Object(o.mdx)("wrapper",d({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table, {\n  Utils,\n} from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst maxSectionCount = 3;\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst MultiSelectTable = () => {\n  const [selectedKeys, setSelectedKeys] = useState([]);\n\n  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n    setSelectedKeys(Utils.toggleArrayValue(selectedKeys, metaData.key));\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      isDisabled: !Utils.canToggleArrayValue(maxSectionCount, selectedKeys, rowData.key),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n        isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n        toggleLabel: rowData.toggleText,\n      },\n    }\n  );\n\n  const createRows = data => data.map(childItem => createRow(childItem));\n\n  return (\n    <Table\n      summaryId=\"example-multi-select\"\n      summary=\"This table shows an implementation of multiple row selection.\"\n      aria-multiselectable\n      rowStyle=\"toggle\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      dividerStyle=\"both\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Multi Selection',\n        },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n        ],\n      }}\n      bodyData={[\n        {\n          rows: createRows(mockData),\n        },\n      ]}\n    />\n  );\n};\n\nexport default MultiSelectTable;\n\n")))}y.isMDXComponent=!0;var g=n(800),f=n.n(g),h=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(f.a,{title:t||"Multi Select Table",description:n,example:a.a.createElement(u,null),exampleSrc:a.a.createElement(y,null),isExpanded:l})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={};function k(e){var t=e.components,n=w(e,["components"]);return Object(o.mdx)("wrapper",b({},x,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-multi-select-table"},"Terra Table - Implementing a Multi Select Table"),Object(o.mdx)("p",null,"This guide will show you how to implement that state within a multiple row selection variant of table. To enable row selection, terra-table requires selection state to be managed by the consuming component. As a result selections from the consuming components state are applied at generation of the table rows."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"The state of selection needs to be managed for the table in an ancestor component. In this example we are going to use a unique key, but the type of state used is open to the individual implementation."),Object(o.mdx)("p",null," First defaulting our state to a null value with the useState hook."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const [selectedKey, setSelectedKey] = useState([]);\n")),Object(o.mdx)("p",null,'Next creating an event handler callback method to pass to the table row\'s "onToggle" prop. The "onToggle" will return the metaData prop passed it each row.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+  const handleRowToggle = (event, metaData) => {\n\n+  };\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  const handleRowToggle = (event, metaData) => {\n+   event.preventDefault();\n  };\n")),Object(o.mdx)("p",null,"Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method ",Object(o.mdx)("inlineCode",{parentName:"p"},"toggleArrayValue"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n+   setSelectedKeys(Utils.toggleArrayValue(selectedKeys, metaData.key));\n  }\n")),Object(o.mdx)("p",null,"Setting state will trigger another render. In the render method we need generate our table rows with the updated isSelected and isSelectable props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.\n",Object(o.mdx)("a",b({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+  const createRow = rowData => (\n+    {\n+      key: rowData.key,\n+      cells: createCellsForRow(rowData.cells),\n+    }\n+  );\n")),Object(o.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onToggle" to our handler.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n+     toggleAction: {\n+       metaData: { key: rowData.key },\n+       onToggle: handleRowToggle,\n+     }\n    }\n  );\n")),Object(o.mdx)("p",null,"Next we need to check if the row is selected. As we support IE10 & 11, we cannot use ",Object(o.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(o.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  const createRow = (rowData) => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n+       isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n+       toggleLabel: rowData.toggleText,\n      }\n    }\n  };\n")),Object(o.mdx)("p",null,"For multi-select tables we need to set selectability based upon whether or not we have reached our max selection count.  Terra Table provides a helper for this, namely ",Object(o.mdx)("inlineCode",{parentName:"p"},"canToggleArrayValue"),", by providing our count, the currently selected key, and the key of the associated item."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  const createRow = (rowData) => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n        isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n        toggleLabel: rowData.toggleText,\n      }\n+     isDisabled: !Utils.canToggleArrayValue(maxSectionCount, selectedKeys, rowData.key),\n    }\n  };\n")),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(o.mdx)("p",null,"Finally we can implement a method to loop through our data and create the table row with our methods and call it from our render method.\nEnsuring that we add the appropriate aria label for multiple selections."),Object(o.mdx)("pre",null,Object(o.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"+ const createRows = data => data.map(childItem => createRow(childItem));\n\n...\n  return (\n+   <Table\n+     summaryId=\"example-multi-select\"\n+     summary=\"This table shows an implementation of multiple row selection.\"\n+     aria-multiselectable\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     rowStyle=\"toggle\"\n+     headerData={{\n+       selectAllColumn: {\n+         checkLabel: 'Multi Selection',\n+       },\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n+       ],\n+     }}\n+     bodyData={[\n+       {\n+         rows: createRows(mockData),\n+       },\n+     ]}\n+   </Table>\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(h,{mdxType:"MultiSelectTable"}))}k.isMDXComponent=!0},800:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=m(n(1)),r=m(n(4)),i=n(97),c=m(n(804)),s=m(n(159)),u=n(9),d=m(n(805));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(l=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var f=r.default.bind(d.default),h={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,r=e.description,d=e.isExpanded,m=y((0,a.useState)(d),2),p=m[0],g=m[1],h=y((0,a.useState)(!1),2),x=h[0],k=h[1],v=a.default.useContext(i.ThemeContext),O=void 0!==l,T=function(){k(!x),p&&g(!p)},_=function(){g(!p),x&&k(!x)},j=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:f("template",v.className)},a.default.createElement("div",{className:f("header")},o&&a.default.createElement("h2",{className:f("title")},o)),a.default.createElement("div",{className:f("content")},r&&a.default.createElement("div",{className:f("description")},r),t),a.default.createElement("div",{className:f("footer")},n?a.default.createElement("div",{className:f("button-container")},O&&a.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":x}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:b,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:f("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(s.default,{className:f("chevron")})),a.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":p}),onClick:_,onKeyDown:function(e){return j(e,_)},onBlur:b,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:f("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(s.default,{className:f("chevron")}))):null,a.default.createElement("div",null,x&&a.default.createElement("div",{className:f("css")},l),p&&a.default.createElement("div",{className:f("code")},n))))};x.propTypes=h,x.defaultProps={isExpanded:!1};var k=x;t.default=k},804:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),o=n(12);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var i=function(e){var t=r({},e);return a.a.createElement(o.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=i},805:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}},842:function(e,t,n){"use strict";t.a=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}]}}]);