(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{1697:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),u=n(816),o=n(979);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,u=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=["column-0","column-1","column-2"];t.default=function(){var e,t=a(Object(r.useState)({key:c[0],sortDesc:!1}),2),n=t[0],l=t[1],y=function(e,t){e.preventDefault(),n.key!==t.key?l({key:t.key,sortDesc:!1}):l({key:t.key,sortDesc:!n.sortDesc})},f=function(e,t){return{key:e,id:"header-".concat(e),metaData:{key:e},onSortAction:y,isSortDesc:n.key===e&&n.sortDesc,isSortActive:n.key===e,children:t}};return i.a.createElement(u.b,{summaryId:"example-sorted-table",summary:"This table shows an implementation of sorted table.",numberOfColumns:3,cellPaddingStyle:"standard",headerData:{cells:[f(c[0],"Breakfast"),f(c[1],"Animals"),f(c[2],"Flatware")]},bodyData:[{rows:(e=o.a,function(e,t){if(!t)return e;var n=s([],e);return n.sort((function(e,n){var r=e.cells[c.indexOf(t.key)].title.toLowerCase(),i=n.cells[c.indexOf(t.key)].title.toLowerCase();return r<i?-1:r>i?1:0})),t.sortDesc?n.reverse():n}(e,n).map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,n})))}]})}},979:function(e,t,n){"use strict";t.a=[{key:"unique-0",cells:[{key:"unique-0-0",title:"Pancakes"},{key:"unique-0-1",title:"Dogs"},{key:"unique-0-2",title:"Forks"}]},{key:"unique-1",cells:[{key:"unique-1-0",title:"Bacon"},{key:"unique-1-1",title:"Mice"},{key:"unique-1-2",title:"Knives"}]},{key:"unique-2",cells:[{key:"unique-2-0",title:"Waffles"},{key:"unique-2-1",title:"Cats"},{key:"unique-2-2",title:"Chopsticks"}]},{key:"unique-3",cells:[{key:"unique-3-0",title:"Fruit"},{key:"unique-3-1",title:"Sheep"},{key:"unique-3-2",title:"Spoons"}]},{key:"unique-4",cells:[{key:"unique-4-0",title:"Eggs"},{key:"unique-4-1",title:"Pigs"},{key:"unique-4-2",title:"Sporks"}]}]}}]);