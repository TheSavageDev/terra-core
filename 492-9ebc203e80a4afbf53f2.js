(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{1372:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(840);a.default=function(){return n.a.createElement(l.a,{id:"deceased-demographics",applicationContent:n.a.createElement("span",{className:"risk-score"},"5%"),age:"25 Years",dateOfBirth:"May 9, 1992",deceasedDate:"March 12, 2017",gender:"Male",identifiers:{MRN:12343,REA:"3JSDA"},personName:"Johnathon Doe",preferredFirstName:"John"})}},840:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(1),s=t.n(l),i=t(11),o=t(206),c={"clinical-lowlight-theme":"DemographicsBanner-module__clinical-lowlight-theme___2ONji","orion-fusion-theme":"DemographicsBanner-module__orion-fusion-theme___321pJ","demographics-banner":"DemographicsBanner-module__demographics-banner___gQJKE","profile-photo":"DemographicsBanner-module__profile-photo___2LZr5",value:"DemographicsBanner-module__value___1NFmA","value-text":"DemographicsBanner-module__value-text___2aUcU","value-label":"DemographicsBanner-module__value-label___1Q_7n","person-name":"DemographicsBanner-module__person-name___1I5IU",identifiers:"DemographicsBanner-module__identifiers___1_CV_","person-details":"DemographicsBanner-module__person-details___1ifOa","preferred-first-name":"DemographicsBanner-module__preferred-first-name___3t5PP",deceased:"DemographicsBanner-module__deceased___2rigd",abbreviation:"DemographicsBanner-module__abbreviation___14tCb",row:"DemographicsBanner-module__row___1lUDO",content:"DemographicsBanner-module__content___1b4uW","application-content":"DemographicsBanner-module__application-content___oJbDs","large-demographics-banner":"DemographicsBanner-module__large-demographics-banner___2WQMq"},d=t(10),p=t.n(d),g=t(4),u=t.n(g),m=t(6),f=t.n(m),h=t(160),b=u.a.bind(c),_=function(e){var a,t=e.label,r=e.value,l=e.abbrTitle;return t&&l?a=n.a.createElement("span",{className:b("value-label")},n.a.createElement("abbr",{className:b("abbreviation"),title:l,"aria-hidden":"true"},"".concat(t,":"))):t&&(a=n.a.createElement("span",{className:b("value-label")},"".concat(t,":"))),n.a.createElement("span",{className:b("value")},l&&n.a.createElement(h.default,{text:l}),a,n.a.createElement("span",{className:b("value-text")},r))},O={personDetails:function(e){var a=[n.a.createElement(_,{key:"age",value:e.age}),n.a.createElement(_,{key:"gender",value:e.gender}),n.a.createElement(_,{key:"dob",abbrTitle:e.dateOfBirthFullText,label:e.dateOfBirthLabel,value:e.dateOfBirth})];return e.gestationalAge&&a.push(n.a.createElement(_,{key:"ga",abbrTitle:e.gestationalAgeFullText,label:e.gestationalAgeLabel,value:e.gestationalAge})),e.postMenstrualAge&&a.push(n.a.createElement(_,{key:"pma",abbrTitle:e.postMenstrualAgeFullText,label:e.postMenstrualAgeLabel,value:e.postMenstrualAge})),e.deceasedDate&&a.push(n.a.createElement(_,{key:"deceased",label:e.deceasedDateLabel,value:e.deceasedDate})),a},applicationIdentifiers:function(e){var a=e.identifiers;return a?Object.keys(a).map((function(e){return n.a.createElement(_,{key:"identifier-".concat(e),label:e,value:a[e]})})):null}};function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function A(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var B=u.a.bind(c),N=function(e){e.age;var a=e.applicationContent,t=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),r=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),l=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),s=A(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),i=n.a.useContext(f.a),o=p()(B("demographics-banner",{deceased:t},i.className),s.className);return delete s.className,n.a.createElement("section",v({className:o},s),n.a.createElement("h1",{className:B("person-name")},n.a.createElement("span",null,r,l&&n.a.createElement("span",{className:B("preferred-first-name")},l))),n.a.createElement("div",{className:B("person-details")},O.personDetails(e),O.applicationIdentifiers(e)),n.a.createElement("div",{className:B("application-content")},a))};function D(){return(D=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function M(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var y=u.a.bind(c),T=function(e){e.age;var a=e.applicationContent,t=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),r=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),l=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),s=M(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),i=n.a.useContext(f.a),o=p()(y("demographics-banner","large-demographics-banner",{deceased:t},i.className),s.className);return delete s.className,n.a.createElement("section",D({className:o},s),e.photo&&n.a.createElement("div",{className:y("profile-photo")},e.photo),n.a.createElement("div",{className:y("content")},n.a.createElement("div",{className:y("row")},n.a.createElement("h1",{className:y("person-name")},r,l&&n.a.createElement("span",{className:y("preferred-first-name")},l)),n.a.createElement("div",{className:y("application-content")},a)),n.a.createElement("div",{className:y("row")},n.a.createElement("div",{className:y("person-details")},O.personDetails(e)),n.a.createElement("div",{className:y("identifiers")},O.applicationIdentifiers(e)))))},E={applicationContent:s.a.node,age:s.a.string,dateOfBirth:s.a.string,dateOfBirthLabel:s.a.string,dateOfBirthFullText:s.a.string,deceasedDate:s.a.string,deceasedDateLabel:s.a.string,gender:s.a.string,gestationalAge:s.a.string,gestationalAgeLabel:s.a.string,gestationalAgeFullText:s.a.string,identifiers:s.a.object,personName:s.a.string,photo:s.a.node,postMenstrualAge:s.a.string,postMenstrualAgeLabel:s.a.string,postMenstrualAgeFullText:s.a.string,preferredFirstName:s.a.string},x=function(e){return n.a.createElement(o.a,{tiny:n.a.createElement(N,e),small:n.a.createElement(T,e)})};x.propTypes=E,x.defaultProps={applicationContent:null,age:"--",dateOfBirth:"--",dateOfBirthLabel:"DOB",dateOfBirthFullText:"Date of Birth",deceasedDate:null,deceasedDateLabel:"Deceased",gender:"--",gestationalAge:null,gestationalAgeLabel:"GA",gestationalAgeFullText:"Gestational Age",identifiers:{},personName:"--",photo:null,postMenstrualAge:null,postMenstrualAgeLabel:"PMA",postMenstrualAgeFullText:"Post Menstrual Age",preferredFirstName:null};var F=x;function L(){return(L=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function j(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var w={applicationContent:s.a.node,age:s.a.string,dateOfBirth:s.a.string,deceasedDate:s.a.string,gender:s.a.string,gestationalAge:s.a.string,identifiers:s.a.object,intl:s.a.shape({formatMessage:s.a.func}).isRequired,personName:s.a.string,photo:s.a.node,postMenstrualAge:s.a.string,preferredFirstName:s.a.string},P={applicationContent:null,age:void 0,dateOfBirth:void 0,deceasedDate:null,gender:void 0,gestationalAge:null,identifiers:{},personName:void 0,photo:null,postMenstrualAge:null,preferredFirstName:null},k=function(e){var a=e.age,t=e.dateOfBirth,r=e.gender,l=e.intl,s=e.personName,i=j(e,["age","dateOfBirth","gender","intl","personName"]),o=l.formatMessage({id:"Terra.demographicsBanner.noDataProvided"});return n.a.createElement(F,L({},i,{age:a||o,dateOfBirth:t||o,gender:r||o,personName:s||o,dateOfBirthLabel:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirth"}),dateOfBirthFullText:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirthFullText"}),deceasedDateLabel:l.formatMessage({id:"Terra.demographicsBanner.deceased"}),gestationalAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.gestationalAge"}),gestationalAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.gestationalAgeFullText"}),postMenstrualAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAge"}),postMenstrualAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAgeFullText"})}))};k.propTypes=w,k.defaultProps=P;a.a=Object(i.injectIntl)(k)}}]);