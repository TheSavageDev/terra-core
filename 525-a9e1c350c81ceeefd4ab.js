(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1431:function(e,l,n){"use strict";n.r(l);var t=n(0),d=n.n(t),i=n(957);l.default=function(){return d.a.createElement(i.a,{id:"populated-fieldset",legend:"Do you have any children?",legendAttrs:{className:"healtheintent-application"},name:"children_present",value:"children_present",help:"Families are eligible for family package plans",required:!0})}},957:function(e,l,n){"use strict";var t=n(0),d=n.n(t),i=n(1),r=n.n(i),a=n(10),s=n.n(a),o=n(4),c=n.n(o),u=n(6),_=n.n(u);function f(){return(f=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function p(e,l){if(null==e)return{};var n,t,d=function(e,l){if(null==e)return{};var n,t,d={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],l.indexOf(n)>=0||(d[n]=e[n]);return d}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var h=c.a.bind({"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___3t2xi","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___30dHA",fieldset:"Fieldset-module__fieldset___288Ll","fieldset-required":"Fieldset-module__fieldset-required___2qdQq",legend:"Fieldset-module__legend___z993f","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___3tCgx","help-text":"Fieldset-module__help-text___3D6sI","fieldset-children":"Fieldset-module__fieldset-children___v80HG"}),g={children:r.a.node,help:r.a.node,legend:r.a.string,legendAttrs:r.a.object,required:r.a.bool,isLegendHidden:r.a.bool},m=function(e){var l=e.children,n=e.help,t=e.legend,i=e.legendAttrs,r=e.isLegendHidden,a=e.required,o=p(e,["children","help","legend","legendAttrs","isLegendHidden","required"]),c=d.a.useContext(_.a),u=s()(h(["fieldset",{"fieldset-required":a},c.className]),o.className),g=h(["legend",i.className,{"legend-visually-hidden":r}]);return d.a.createElement("fieldset",f({},o,{className:u}),t&&d.a.createElement("legend",f({},i,{className:g}),t),n&&d.a.createElement("small",{className:h("help-text"),tabIndex:"-1"},n),d.a.createElement("div",{className:h("fieldset-children")},l))};m.propTypes=g,m.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};l.a=m}}]);