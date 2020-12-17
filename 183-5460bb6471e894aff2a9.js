(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1781:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Q}));var r=t(0),a=t.n(r),o=t(309),l=t(815),c=t(314),i=t(4),p=t.n(i),m=t(808),u=p.a.bind(m.a),s=function(){return a.a.createElement(c.default,{help:"Shades of blue and green.",label:"Colors",maxSelectionCount:3,placeholder:"Select a size",selectId:"max-selection-field",variant:"multiple",className:u("form-select")},a.a.createElement(c.default.OptGroup,{label:"Shades of Blue"},a.a.createElement(c.default.Option,{value:"blue",display:"Blue"}),a.a.createElement(c.default.Option,{value:"cyan",display:"Cyan"}),a.a.createElement(c.default.Option,{disabled:!0,value:"teal",display:"Teal"}),a.a.createElement(c.default.Option,{value:"azul",display:"Azul"}),a.a.createElement(c.default.Option,{value:"aqua",display:"Aqua"})),a.a.createElement(c.default.OptGroup,{label:"Shades of Green"},a.a.createElement(c.default.Option,{value:"green",display:"Green"}),a.a.createElement(c.default.Option,{value:"forest",display:"Forest Green"}),a.a.createElement(c.default.Option,{disabled:!0,value:"dark",display:"Dark Green"}),a.a.createElement(c.default.Option,{value:"neon",display:"Neon Green"}),a.a.createElement(c.default.Option,{value:"emerald",display:"Emerald"})))};function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b={};function x(e){var n=e.components,t=f(e,["components"]);return Object(o.mdx)("wrapper",d({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SelectField from \'terra-form-select/lib/SelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MaxSelectionExample = () => (\n  <SelectField help="Shades of blue and green." label="Colors" maxSelectionCount={3} placeholder="Select a size" selectId="max-selection-field" variant="multiple" className={cx(\'form-select\')}>\n    <SelectField.OptGroup label="Shades of Blue">\n      <SelectField.Option value="blue" display="Blue" />\n      <SelectField.Option value="cyan" display="Cyan" />\n      <SelectField.Option disabled value="teal" display="Teal" />\n      <SelectField.Option value="azul" display="Azul" />\n      <SelectField.Option value="aqua" display="Aqua" />\n    </SelectField.OptGroup>\n    <SelectField.OptGroup label="Shades of Green">\n      <SelectField.Option value="green" display="Green" />\n      <SelectField.Option value="forest" display="Forest Green" />\n      <SelectField.Option disabled value="dark" display="Dark Green" />\n      <SelectField.Option value="neon" display="Neon Green" />\n      <SelectField.Option value="emerald" display="Emerald" />\n    </SelectField.OptGroup>\n  </SelectField>\n);\n\nexport default MaxSelectionExample;\n\n')))}x.isMDXComponent=!0;var O=t(800),y=t.n(O),v=t(809),j=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(y.a,{title:n||"Max Selection",description:t,example:a.a.createElement(s,null),exampleCssSrc:a.a.createElement(v.a,null),exampleSrc:a.a.createElement(x,null),isExpanded:r})},h=p.a.bind(m.a),g=function(){return a.a.createElement(c.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:h("form-select")},a.a.createElement(c.default.Option,{value:"xSmall",display:"Extra Small"}),a.a.createElement(c.default.Option,{value:"small",display:"Small"}),a.a.createElement(c.default.Option,{value:"medium",display:"Medium"}),a.a.createElement(c.default.Option,{value:"large",display:"Large"}),a.a.createElement(c.default.Option,{value:"xLarge",display:"Extra Large"}))};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function M(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var w={};function D(e){var n=e.components,t=M(e,["components"]);return Object(o.mdx)("wrapper",S({},w,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",S({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SelectField from \'terra-form-select/lib/SelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SelectFieldExample = () => (\n  <SelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SelectField.Option value="xSmall" display="Extra Small" />\n    <SelectField.Option value="small" display="Small" />\n    <SelectField.Option value="medium" display="Medium" />\n    <SelectField.Option value="large" display="Large" />\n    <SelectField.Option value="xLarge" display="Extra Large" />\n  </SelectField>\n);\n\nexport default SelectFieldExample;\n\n')))}D.isMDXComponent=!0;var X=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(y.a,{title:n||"Select Field",description:t,example:a.a.createElement(g,null),exampleCssSrc:a.a.createElement(v.a,null),exampleSrc:a.a.createElement(D,null),isExpanded:r})},E=p.a.bind(m.a),C=function(){return a.a.createElement(c.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:E("form-select")},a.a.createElement(c.default.Option,{value:"xSmall",display:"Extra Small"}),a.a.createElement(c.default.Option,{value:"small",display:"Small"}),a.a.createElement(c.default.Option,{value:"medium",display:"Medium"}),a.a.createElement(c.default.Option,{value:"large",display:"Large"}),a.a.createElement(c.default.Option,{value:"xLarge",display:"Extra Large"}))};function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function L(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var N={};function F(e){var n=e.components,t=L(e,["components"]);return Object(o.mdx)("wrapper",T({},N,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SelectField from \'terra-form-select/lib/SelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SelectFieldExample = () => (\n  <SelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SelectField.Option value="xSmall" display="Extra Small" />\n    <SelectField.Option value="small" display="Small" />\n    <SelectField.Option value="medium" display="Medium" />\n    <SelectField.Option value="large" display="Large" />\n    <SelectField.Option value="xLarge" display="Extra Large" />\n  </SelectField>\n);\n\nexport default SelectFieldExample;\n\n')))}F.isMDXComponent=!0;var q=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(y.a,{title:n||"Required Select Field",description:t,example:a.a.createElement(C,null),exampleCssSrc:a.a.createElement(v.a,null),exampleSrc:a.a.createElement(F,null),isExpanded:r})},V=p.a.bind(m.a),I=function(){return a.a.createElement(c.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:V("form-select")},a.a.createElement(c.default.Option,{value:"xSmall",display:"Extra Small"}),a.a.createElement(c.default.Option,{value:"small",display:"Small"}),a.a.createElement(c.default.Option,{value:"medium",display:"Medium"}),a.a.createElement(c.default.Option,{value:"large",display:"Large"}),a.a.createElement(c.default.Option,{value:"xLarge",display:"Extra Large"}))};function z(){return(z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var k={};function G(e){var n=e.components,t=P(e,["components"]);return Object(o.mdx)("wrapper",z({},k,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",z({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SelectField from \'terra-form-select/lib/SelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SelectFieldExample = () => (\n  <SelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SelectField.Option value="xSmall" display="Extra Small" />\n    <SelectField.Option value="small" display="Small" />\n    <SelectField.Option value="medium" display="Medium" />\n    <SelectField.Option value="large" display="Large" />\n    <SelectField.Option value="xLarge" display="Extra Large" />\n  </SelectField>\n);\n\nexport default SelectFieldExample;\n\n')))}G.isMDXComponent=!0;var A=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(y.a,{title:n||"Incomplete Select Field",description:t,example:a.a.createElement(I,null),exampleCssSrc:a.a.createElement(v.a,null),exampleSrc:a.a.createElement(G,null),isExpanded:r})},R=t(803),W=t.n(R);function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function U(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _=function(){return Object(o.mdx)(W.a,{rows:[{name:"allowClear",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether a clear option is available to clear the selection.\nThis is not applicable to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"multiple")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"tag")," variants since the selection can already be deselected using the tag."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select options."))}return n.isMDXComponent=!0,n({})}},{name:"label",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The field label."))}return n.isMDXComponent=!0,n({})}},{name:"defaultValue",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "array"\n },\n {\n  "name": "number"\n },\n {\n  "name": "string"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return n.isMDXComponent=!0,n({})}},{name:"disabled",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the input is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"error",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Error message displayed when the select is invalid."))}return n.isMDXComponent=!0,n({})}},{name:"help",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Help message to display with the select."))}return n.isMDXComponent=!0,n({})}},{name:"hideRequired",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide the required indicator on the label."))}return n.isMDXComponent=!0,n({})}},{name:"isIncomplete",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(o.mdx)("em",{parentName:"p"},"(usage note: ",Object(o.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return n.isMDXComponent=!0,n({})}},{name:"isInline",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return n.isMDXComponent=!0,n({})}},{name:"isInvalid",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return n.isMDXComponent=!0,n({})}},{name:"isLabelHidden",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return n.isMDXComponent=!0,n({})}},{name:"isTouchAccessible",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),Object(o.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."),Object(o.mdx)("p",null,"Only applicable to variants that include an input (e.g. ",Object(o.mdx)("inlineCode",{parentName:"p"},"combobox"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"multiple"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"search"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"tag"),")."))}return n.isMDXComponent=!0,n({})}},{name:"labelAttrs",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"{}",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the label."))}return n.isMDXComponent=!0,n({})}},{name:"maxHeight",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The max height of the dropdown."))}return n.isMDXComponent=!0,n({})}},{name:"maxSelectionCount",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored.\nOnly applicable to variants allowing multiple selections (e.g.; ",Object(o.mdx)("inlineCode",{parentName:"p"},"multiple"),"; ",Object(o.mdx)("inlineCode",{parentName:"p"},"tag"),")."))}return n.isMDXComponent=!0,n({})}},{name:"maxWidth",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Set the max-width of a field using ",Object(o.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(o.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return n.isMDXComponent=!0,n({})}},{name:"onChange",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return n.isMDXComponent=!0,n({})}},{name:"placeholder",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Placeholder text."))}return n.isMDXComponent=!0,n({})}},{name:"required",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is required."))}return n.isMDXComponent=!0,n({})}},{name:"selectAttrs",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"{}",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the select."))}return n.isMDXComponent=!0,n({})}},{name:"selectId",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return n.isMDXComponent=!0,n({})}},{name:"showOptional",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return n.isMDXComponent=!0,n({})}},{name:"value",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "array"\n },\n {\n  "name": "number"\n },\n {\n  "name": "string"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return n.isMDXComponent=!0,n({})}},{name:"variant",type:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-json"}),'[\n "Variants.COMBOBOX",\n "Variants.DEFAULT",\n "Variants.MULTIPLE",\n "Variants.SEARCH",\n "Variants.TAG"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'default'",description:function(){var e={};function n(n){var t=n.components,r=U(n,["components"]);return Object(o.mdx)("wrapper",B({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select variant. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"combobox"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"multiple"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"tag"),", or ",Object(o.mdx)("inlineCode",{parentName:"p"},"search"),"."))}return n.isMDXComponent=!0,n({})}}]})};function H(){return(H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function J(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var K={};function Q(e){var n=e.components,t=J(e,["components"]);return Object(o.mdx)("wrapper",H({},K,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-form-select-field"},"Terra Form Select Field"),Object(o.mdx)("p",null,"A convenience wrapper assembling a ",Object(o.mdx)("a",H({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select"}),"terra-form-select")," within a ",Object(o.mdx)("a",H({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"}),"terra-form-field"),"."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",H({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",H({parentName:"pre"},{className:"language-jsx"}),"import SelectField from 'terra-form-select/lib/SelectField';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"}),"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(X,{title:"Select Field Example",mdxType:"SelectFieldExample"}),Object(o.mdx)(q,{title:"Required Select Field Example",mdxType:"RequiredSelectFieldExample"}),Object(o.mdx)(j,{title:"Maximum Selection (applies to only 'multiple' and 'tag')",description:"A multiple selection variant that allows up to a set number of selections. (Not applicable to 'default', 'combobox', and 'search' variants)",mdxType:"MaxSelectionExample"}),Object(o.mdx)(A,{title:"Incomplete Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSelectFieldExample"}),Object(o.mdx)("h2",{id:"select-field-props"},"Select Field Props"),Object(o.mdx)(_,{mdxType:"SelectFieldPropsTable"}))}Q.isMDXComponent=!0},804:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var n=l({},e);return a.a.createElement(o.a,n,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},n.default=c},808:function(e,n,t){"use strict";n.a={"form-select":"FormSelectDocCommon-module__form-select___m9WxS"}},809:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(0);var r=t(309);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={};function c(e){var n=e.components,t=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}c.isMDXComponent=!0},815:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),a=t.n(r),o=t(801),l=t.n(o),c=function(e){var n=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.22.0",url:n})}}}]);