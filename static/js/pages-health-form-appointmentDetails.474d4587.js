(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-health-form-appointmentDetails"],{"0ff7":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uImage:i("7861").default,uIcon:i("ece6").default,uButton:i("7e94").default,uToast:i("6e88").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"ronin-details-new"},[n("v-uni-view",{staticClass:"head"},[n("v-uni-view",{staticClass:"order-type"},[t._v(t._s(t._f("type")(t.details.status)))]),n("v-uni-view",{staticClass:"head-content"},[n("v-uni-view",{staticClass:"item"},[t._v("预约时间："+t._s(t.details.appointmentDt))]),n("v-uni-view",{staticClass:"item"},[t._v("预约公司："+t._s(t.details.medicalCompanyName))]),n("v-uni-view",{staticClass:"item"},[t._v("套餐名称："+t._s(t.details.medicalProjectName))]),n("v-uni-view",{staticClass:"item"},[t._v("创建时间："+t._s(t.details.cdt))]),n("v-uni-view",{staticClass:"item"},[t._v("订单编号："+t._s(t.details.id))]),n("u-image",{staticClass:"img",attrs:{width:"228rpx",height:"210rpx",src:i("91b6")}})],1),n("u-image",{staticClass:"img-bg",attrs:{width:"100%",height:"210rpx",src:i("e2dd")}})],1),n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticClass:"title"},[t._v("预约项目")]),t._l(t.details.items,(function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"product-item"},[n("v-uni-view",{staticClass:"product-content"},[n("v-uni-view",{staticClass:"product"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.productName))])],1),n("v-uni-view",[t._v("¥"+t._s(e.productPrice))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticClass:"title"},[t._v("体检费用明细")]),n("v-uni-view",{staticClass:"statistic"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"left"},[t._v("公司支付")]),n("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(t.details.fundCompany))])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"left"},[t._v("自费支付")]),n("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(t.details.fundOwn))])],1),n("v-uni-view",{staticClass:"all"},[n("v-uni-text",[t._v("总订单")]),n("v-uni-text",{staticClass:"price"},[n("v-uni-text",{staticClass:"unit"},[t._v("¥")]),t._v(t._s(t.details.fund))],1)],1)],1)],1),n("v-uni-view",{staticClass:"ronin-bottom"},[n("v-uni-view",{staticClass:"left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickHome.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"38",name:"home"}}),n("v-uni-view",[t._v("首页")])],1),n("v-uni-view",{staticClass:"btn"},[n("u-button",{attrs:{type:"primary",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickSubmit.apply(void 0,arguments)}}},[t._v("返回列表")])],1)],1),n("u-toast",{ref:"uToast"})],1)},a=[]},"1c1d":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.medicalProjectBatchList=r,e.medicalProjectQueryProject=s,e.medicalProjectInfoProject=d,e.userAddProjectList=c,e.userAppointmentAdd=l,e.getUserTypeFund=u,e.userAppointmentListByMy=p,e.queryCompanyAppointmentConfig=f,e.userAppointmentPrebook=b,e.userAppointmentInfo=m,e.userAddProjectBefore=w,e.userAppointmentCancel=v,e.userAddProjectByAfter=g,e.userAppointmentUpdate=h;var o=n(i("e143")),a=i("f62d");o.default.prototype.$u;function r(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/batchList",t)}function s(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/queryProject",t)}function d(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/infoProject",t)}function c(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/userAddProjectList",t)}function l(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/add",t)}function u(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/getUserTypeFund",t)}function p(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/listByMy",t)}function f(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/queryCompanyAppointmentConfig",t)}function b(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/prebook",t)}function m(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/info",t)}function w(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/userAddProjectBefore",t)}function v(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/cancel",t)}function g(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/medicalProject/userAddProjectByAfter",t)}function h(t){return o.default.prototype.$u.post(a.api_spec.app+"/h/app/userAppointment/update",t)}},"213d":function(t,e,i){"use strict";i.r(e);var n=i("0ff7"),o=i("c5dd");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a87e");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"5d6d3d0b",null,!1,n["a"],r);e["default"]=d.exports},"2c0f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("1c1d"),o={filters:{type:function(t){return"normal"==t?"正常":"cancel"==t?"取消":"prebook"==t?"预约":"sign"==t?"签到":"complete"==t?"体检完成":"report"==t?"报告完成":void 0}},data:function(){return{details:{}}},onLoad:function(t){t.id&&(this.id=t.id,this.getDetails())},methods:{getDetails:function(){var t=this;(0,n.userAppointmentInfo)({id:this.id}).then((function(e){"0"==e.code&&(t.details=e.data)}))},onClickHome:function(){uni.navigateTo({url:"/pages/home/home"}),uni.switchTab({url:"/pages/home/home"})},onClickSubmit:function(){uni.navigateBack({delta:1})}}};e.default=o},3632:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("ece6").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]},"50b5":function(t,e,i){var n=i("ef6e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("57e558d2",n,!0,{sourceMap:!1,shadowMode:!1})},"687e":function(t,e,i){var n=i("f89a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("52a550c8",n,!0,{sourceMap:!1,shadowMode:!1})},"6e88":function(t,e,i){"use strict";i.r(e);var n=i("3632"),o=i("8151");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("c344");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"070c62ba",null,!1,n["a"],r);e["default"]=d.exports},"73b0":function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=n},8151:function(t,e,i){"use strict";i.r(e);var n=i("73b0"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"91b6":function(t,e,i){t.exports=i.p+"static/img/doctor.91d687a3.png"},a87e:function(t,e,i){"use strict";var n=i("687e"),o=i.n(n);o.a},c344:function(t,e,i){"use strict";var n=i("50b5"),o=i.n(n);o.a},c5dd:function(t,e,i){"use strict";i.r(e);var n=i("2c0f"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e2dd:function(t,e,i){t.exports=i.p+"static/img/doctorBg.4723addc.png"},ef6e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/.u-toast[data-v-070c62ba]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-070c62ba]{opacity:1}.u-icon[data-v-070c62ba]{margin-right:%?10?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-070c62ba]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-070c62ba]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-070c62ba]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-070c62ba]{color:#3873fe;background-color:#f8faff;border:1px solid #d7eafe}.u-type-success[data-v-070c62ba]{color:#38cb89;background-color:#ebfaf3;border:1px solid #bef5c8}.u-type-error[data-v-070c62ba]{color:#ff5d16;background-color:#fff8f6;border:1px solid #fde2e2}.u-type-warning[data-v-070c62ba]{color:#ffab00;background-color:#fffbf4;border:1px solid #faecd8}.u-type-info[data-v-070c62ba]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-070c62ba]{color:#fff;background-color:#585858}',""]),t.exports=e},f89a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/.ronin-details-new[data-v-5d6d3d0b]{padding-bottom:%?200?%}.ronin-details-new .head[data-v-5d6d3d0b]{height:%?600?%;background:-webkit-linear-gradient(top,#3873fe 10%,#fff);background:linear-gradient(180deg,#3873fe 10%,#fff);padding:0 %?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;position:relative}.ronin-details-new .head .order-type[data-v-5d6d3d0b]{position:absolute;top:%?120?%;left:%?56?%;color:#fff;font-size:%?60?%;font-weight:600}.ronin-details-new .head .head-content[data-v-5d6d3d0b]{height:%?334?%;background:#fff;border-radius:%?8?%;padding:0 %?24?%;padding-top:%?56?%;position:relative}.ronin-details-new .head .head-content .item[data-v-5d6d3d0b]{margin-bottom:%?16?%;font-size:%?30?%}.ronin-details-new .head .head-content .title[data-v-5d6d3d0b]{font-size:%?32?%;margin-bottom:%?72?%}.ronin-details-new .head .head-content .img[data-v-5d6d3d0b]{position:absolute;right:%?24?%;top:%?-100?%;z-index:100}.ronin-details-new .head .img-bg[data-v-5d6d3d0b]{position:absolute;top:0;left:0}.ronin-details-new .card[data-v-5d6d3d0b]{margin:%?32?%;min-height:%?200?%;background:#fff;border-radius:%?8?%;padding:%?30?% %?24?%}.ronin-details-new .card .title[data-v-5d6d3d0b]{font-size:%?32?%;margin-bottom:%?10?%}.ronin-details-new .card .product-item[data-v-5d6d3d0b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #f0f0f0}.ronin-details-new .card .product-item .product-content[data-v-5d6d3d0b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?28?% %?26?%;border-radius:%?10?%;padding-left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ronin-details-new .card .product-item .product-content .product .name[data-v-5d6d3d0b]{font-size:%?28?%}.ronin-details-new .card .product-item .product-content .product .price[data-v-5d6d3d0b]{font-size:%?24?%}.ronin-details-new .card .product-item .product-content .des[data-v-5d6d3d0b]{font-size:%?22?%;color:#ffab00;border:1px solid #ffab00;padding:%?2?% %?6?%;border-radius:%?6?%}.ronin-details-new .card .more[data-v-5d6d3d0b]{text-align:center;color:#5889fc;padding-top:%?62?%}.ronin-details-new .card .statistic[data-v-5d6d3d0b]{margin-bottom:%?66?%}.ronin-details-new .card .statistic .item[data-v-5d6d3d0b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?12?%}.ronin-details-new .card .statistic .all[data-v-5d6d3d0b]{text-align:right}.ronin-details-new .card .statistic .all .price[data-v-5d6d3d0b]{margin-left:%?16?%;font-size:%?42?%;font-weight:600;color:#ff7823}.ronin-details-new .card .statistic .all .price .unit[data-v-5d6d3d0b]{font-size:%?28?%}.ronin-details-new .ronin-bottom[data-v-5d6d3d0b]{height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-shadow:%?10?% %?-14?% %?14?% %?-14?% rgba(0,0,0,.1);position:fixed;bottom:0;left:0;right:0;background:#fff;padding-right:%?32?%;padding-left:%?32?%}.ronin-details-new .ronin-bottom .left[data-v-5d6d3d0b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#666;font-size:%?24?%}.ronin-details-new .select-box[data-v-5d6d3d0b]{padding:%?30?% %?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ronin-details-new .select-box .input-text[data-v-5d6d3d0b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border:1px solid #ccc;border-radius:%?8?%;background:#f1f1f1;color:#c1bfbf;padding:%?10?%}.ronin-details-new .select-box .input-check[data-v-5d6d3d0b]{color:#333}.ronin-details-new .btn-box[data-v-5d6d3d0b]{text-align:right;padding-right:%?32?%;padding-bottom:%?20?%}.ronin-details-new .btn-box .btn[data-v-5d6d3d0b]{margin-left:%?10?%}',""]),t.exports=e}}]);