(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newMedia"],{1276:function(e,r,t){"use strict";var l=t("d784"),n=t("44e7"),a=t("825a"),o=t("1d80"),i=t("4840"),u=t("8aa5"),s=t("50c4"),c=t("14c3"),d=t("9263"),p=t("d039"),m=[].push,f=Math.min,b=4294967295,v=!p((function(){return!RegExp(b,"y")}));l("split",2,(function(e,r,t){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var l=String(o(this)),a=void 0===t?b:t>>>0;if(0===a)return[];if(void 0===e)return[l];if(!n(e))return r.call(l,e,a);var i,u,s,c=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,v=new RegExp(e.source,p+"g");while(i=d.call(v,l)){if(u=v.lastIndex,u>f&&(c.push(l.slice(f,i.index)),i.length>1&&i.index<l.length&&m.apply(c,i.slice(1)),s=i[0].length,f=u,c.length>=a))break;v.lastIndex===i.index&&v.lastIndex++}return f===l.length?!s&&v.test("")||c.push(""):c.push(l.slice(f)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,t){var n=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n,t):l.call(String(n),r,t)},function(e,n){var o=t(l,e,this,n,l!==r);if(o.done)return o.value;var d=a(e),p=String(this),m=i(d,RegExp),_=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),g=new m(v?d:"^(?:"+d.source+")",h),x=void 0===n?b:n>>>0;if(0===x)return[];if(0===p.length)return null===c(g,p)?[p]:[];var y=0,F=0,w=[];while(F<p.length){g.lastIndex=v?F:0;var k,$=c(g,v?p:p.slice(F));if(null===$||(k=f(s(g.lastIndex+(v?0:F)),p.length))===y)F=u(p,F,_);else{if(w.push(p.slice(y,F)),w.length===x)return w;for(var E=1;E<=$.length-1;E++)if(w.push($[E]),w.length===x)return w;F=y=k}}return w.push(p.slice(y)),w}]}),!v)},"14c3":function(e,r,t){var l=t("c6b6"),n=t("9263");e.exports=function(e,r){var t=e.exec;if("function"===typeof t){var a=t.call(e,r);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==l(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,r)}},"1836e":function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"wrap"},[t("el-breadcrumb",{staticStyle:{"padding-left":"30px"},attrs:{separator:"/"}},[t("el-breadcrumb-item",[e._v("流量合作")]),t("el-breadcrumb-item",{attrs:{to:{path:"/media"}}},[e._v("我的媒体")]),t("el-breadcrumb-item",[e._v("新建媒体")])],1),t("div",{staticClass:"formWrap"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"系统平台",required:""}},[t("el-button",{class:{active:"H5"===e.ruleForm.media_type},on:{click:function(r){e.ruleForm.media_type="H5"}}},[e._v("H5")]),t("el-button",{class:{active:"公众号"===e.ruleForm.media_type},on:{click:function(r){e.ruleForm.media_type="公众号"}}},[e._v("公众号")])],1),t("el-form-item",{attrs:{label:"媒体名称",prop:"",required:""}},[t("el-input",{attrs:{placeholder:"请填写公众号名称以及（代理商简称），如「天天趣闻（推啊）」"},model:{value:e.ruleForm.media_name,callback:function(r){e.$set(e.ruleForm,"media_name",r)},expression:"ruleForm.media_name"}})],1),t("el-form-item",{attrs:{label:"用户偏好行业广告",prop:""}},[t("el-select",{staticStyle:{width:"550px"},attrs:{multiple:"",placeholder:"可多选"},model:{value:e.ruleForm.preference_industry_id,callback:function(r){e.$set(e.ruleForm,"preference_industry_id",r)},expression:"ruleForm.preference_industry_id"}},e._l(e.options,(function(e,r){return t("el-option",{key:r,attrs:{label:e,value:r}})})),1)],1),t("el-form-item",{attrs:{label:"支持下载类广告",required:""}},[t("el-radio-group",{model:{value:e.ruleForm.support_download_ads,callback:function(r){e.$set(e.ruleForm,"support_download_ads",r)},expression:"ruleForm.support_download_ads"}},[t("el-radio",{attrs:{label:!0}},[e._v("支持")]),t("el-radio",{attrs:{label:!1}},[e._v("不支持")])],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"公众号"===e.ruleForm.media_type,expression:"ruleForm.media_type === '公众号'"}]},[t("el-form-item",{attrs:{label:"公众号名称",required:""}},[t("el-input",{attrs:{placeholder:"请输入公众号名称及微信号，格式如：爱尚沐沐（微信号：aishangmumu）"},model:{value:e.ruleForm.name_of_public_address,callback:function(r){e.$set(e.ruleForm,"name_of_public_address",r)},expression:"ruleForm.name_of_public_address"}})],1),t("el-form-item",{attrs:{label:"公众号类型",required:""}},[t("el-radio-group",{model:{value:e.ruleForm.type_of_public_address,callback:function(r){e.$set(e.ruleForm,"type_of_public_address",r)},expression:"ruleForm.type_of_public_address"}},[t("el-radio",{attrs:{label:"订阅号"}},[e._v("订阅号")]),t("el-radio",{attrs:{label:"服务号"}},[e._v("服务号")])],1)],1),t("el-form-item",{attrs:{label:"公众号主体",required:""}},[t("el-radio-group",{model:{value:e.ruleForm.main_body_of_public_adress,callback:function(r){e.$set(e.ruleForm,"main_body_of_public_adress",r)},expression:"ruleForm.main_body_of_public_adress"}},[t("el-radio",{attrs:{label:"企业"}},[e._v("企业")]),t("el-radio",{attrs:{label:"个人"}},[e._v("个人")])],1)],1)],1),t("el-form-item",{attrs:{label:"网站域名",required:""}},[t("el-input",{attrs:{placeholder:"请输入网站域名，如http://www.baidu.com"},model:{value:e.ruleForm.website_domain_name,callback:function(r){e.$set(e.ruleForm,"website_domain_name",r)},expression:"ruleForm.website_domain_name"}})],1),t("el-form-item",{attrs:{label:"媒体关键词",required:""}},[t("el-input",{attrs:{placeholder:"填写媒体性质或主要用途"},model:{value:e.ruleForm.media_keyword,callback:function(r){e.$set(e.ruleForm,"media_keyword",r)},expression:"ruleForm.media_keyword"}})],1),t("el-form-item",{attrs:{label:"媒体简介",required:""}},[t("el-input",{attrs:{placeholder:"正确填写媒体简介能够提高广告的匹配度及收益（40个字以上）"},model:{value:e.ruleForm.description,callback:function(r){e.$set(e.ruleForm,"description",r)},expression:"ruleForm.description"}})],1),t("el-button",{on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("下一步")]),t("el-button",{on:{click:function(r){return e.$router.replace({path:"/media"})}}},[e._v("取消")])],1)],1)],1)},n=[],a=(t("d81d"),t("1276"),t("d4ec")),o=t("bee2"),i=t("99de"),u=t("7e84"),s=t("262e"),c=t("9ab4"),d=t("60a3"),p=function(e){function r(){var e;return Object(a["a"])(this,r),e=Object(i["a"])(this,Object(u["a"])(r).call(this)),e.ruleForm={media_type:"H5",preference_industry_id:[],support_dowload_ads:!0},e.options=e.$store.state.media.preference_industry,e.rules={},e}return Object(s["a"])(r,e),Object(o["a"])(r,[{key:"created",value:function(){var e=this,r=e.$route.params;console.log(r),r.id&&(e.ruleForm=r,e.ruleForm.preference_industry_id=r.preference_industry_id.split(",").map((function(e){return+e})))}},{key:"submitForm",value:function(e){var r=this;console.log(r.ruleForm),r.$store.commit("updateTempMedia",r.ruleForm),r.$router.push({path:"/validmedia"})}}]),r}(d["b"]);p=c["a"]([Object(d["a"])({components:{}})],p);var m=p,f=m,b=(t("6dc9"),t("2877")),v=Object(b["a"])(f,l,n,!1,null,"313f7707",null);r["default"]=v.exports},"44e7":function(e,r,t){var l=t("861d"),n=t("c6b6"),a=t("b622"),o=a("match");e.exports=function(e){var r;return l(e)&&(void 0!==(r=e[o])?!!r:"RegExp"==n(e))}},"679b":function(e,r,t){},"6dc9":function(e,r,t){"use strict";var l=t("679b"),n=t.n(l);n.a},"8aa5":function(e,r,t){"use strict";var l=t("6547").charAt;e.exports=function(e,r,t){return r+(t?l(e,r).length:1)}},9263:function(e,r,t){"use strict";var l=t("ad6d"),n=RegExp.prototype.exec,a=String.prototype.replace,o=n,i=function(){var e=/a/,r=/b*/g;return n.call(e,"a"),n.call(r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),u=void 0!==/()??/.exec("")[1],s=i||u;s&&(o=function(e){var r,t,o,s,c=this;return u&&(t=new RegExp("^"+c.source+"$(?!\\s)",l.call(c))),i&&(r=c.lastIndex),o=n.call(c,e),i&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),u&&o&&o.length>1&&a.call(o[0],t,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),e.exports=o},d784:function(e,r,t){"use strict";var l=t("9112"),n=t("6eeb"),a=t("d039"),o=t("b622"),i=t("9263"),u=o("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c=!a((function(){var e=/(?:)/,r=e.exec;e.exec=function(){return r.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,r,t,d){var p=o(e),m=!a((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=m&&!a((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!m||!f||"replace"===e&&!s||"split"===e&&!c){var b=/./[p],v=t(p,""[e],(function(e,r,t,l,n){return r.exec===i?m&&!n?{done:!0,value:b.call(r,t,l)}:{done:!0,value:e.call(t,r,l)}:{done:!1}})),_=v[0],h=v[1];n(String.prototype,e,_),n(RegExp.prototype,p,2==r?function(e,r){return h.call(e,this,r)}:function(e){return h.call(e,this)}),d&&l(RegExp.prototype[p],"sham",!0)}}},d81d:function(e,r,t){"use strict";var l=t("23e7"),n=t("b727").map,a=t("d039"),o=t("1dde"),i=o("map"),u=i&&!a((function(){[].map.call({length:-1,0:1},(function(e){throw e}))}));l({target:"Array",proto:!0,forced:!i||!u},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);