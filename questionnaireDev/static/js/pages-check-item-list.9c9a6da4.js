(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-check-item-list"],{"15d4":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getTestingListByScaleResult=n;var c=i(a("e143")),d=a("f62d");c.default.prototype.$u;function n(e){return c.default.prototype.$u.post(d.api_spec.app+"/h/app/htp/getTestingListByScaleResult",e)}},"3b84":function(e,t,a){"use strict";a.r(t);var i=a("f7f2"),c=a("a16c");for(var d in c)"default"!==d&&function(e){a.d(t,e,(function(){return c[e]}))}(d);a("e8aa");var n,p=a("f0c5"),s=Object(p["a"])(c["default"],i["b"],i["c"],!1,null,"5f7d42a0",null,!1,i["a"],n);t["default"]=s.exports},6484:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/uni-page-body[data-v-5f7d42a0]{background:#f2f2f2}.bottom_bar[data-v-5f7d42a0]{background:#fff;padding:20px;position:fixed;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.bottom_bar .btn-info[data-v-5f7d42a0]{width:42vw;border:1px #377dff solid;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#377dff;border-radius:4px}.bottom_bar .btn-ok[data-v-5f7d42a0]{width:42vw;border:1px #377dff solid;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;background:#377dff;border-radius:4px}.app-check-detail[data-v-5f7d42a0]{padding:20px;padding-bottom:100px}.app-check-detail .app-check-detail-group-header[data-v-5f7d42a0]{height:70px;background:#fef3f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:14px}.app-check-detail .app-check-detail-group-header .app-check-detail-group-header-box-info-title[data-v-5f7d42a0]{color:#e94732;font-size:18px;font-weight:700}.app-check-detail .app-check-detail-group-header .app-check-detail-group-header-box-info-des[data-v-5f7d42a0]{color:#666;font-size:12px;margin-top:4px}.app-check-detail .app-check-detail-group-header-normal[data-v-5f7d42a0]{margin-top:20px;background:#effaf6}.app-check-detail .app-check-detail-group-header-normal .app-check-detail-group-header-box-info-title[data-v-5f7d42a0]{color:#333;font-size:18px;font-weight:700}.app-check-detail .app-check-detail-group-header-normal .app-check-detail-group-header-box-info-des[data-v-5f7d42a0]{color:#666;font-size:12px;margin-top:4px}.app-check-detail .app-check-detail-item[data-v-5f7d42a0]{background:#fff;padding:14px}.app-check-detail .app-check-detail-item .app-check-detail-item-header[data-v-5f7d42a0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:34px;margin-bottom:10px}.app-check-detail .app-check-detail-item .app-check-detail-item-header-title[data-v-5f7d42a0]{font-size:16px;font-weight:700}.app-check-detail .app-check-detail-item .app-check-detail-item-header-control[data-v-5f7d42a0]{font-size:14px;color:#999}.app-check-detail .app-check-detail-item .app-check-detail-item-bodyer[data-v-5f7d42a0]{font-size:14px;line-height:1.4}.app-check-detail .app-check-detail-item .app-check-detail-item-bodyer-des[data-v-5f7d42a0]{margin-top:10px;color:#666}.app-check-detail .app-check-detail-item .app-check-detail-item-bodyer-des-tips[data-v-5f7d42a0]{margin-bottom:4px}body.?%PAGE?%[data-v-5f7d42a0]{background:#f2f2f2}',""]),e.exports=t},a16c:function(e,t,a){"use strict";a.r(t);var i=a("b705"),c=a.n(i);for(var d in i)"default"!==d&&function(e){a.d(t,e,(function(){return i[e]}))}(d);t["default"]=c.a},b705:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(a("b85c")),d=a("15d4"),n={data:function(){return{id:"",middleList:[],highList:[],listItem:[],arr:[]}},onLoad:function(e){e&&(this.id=e.id,this.getList())},methods:{onTap:function(){uni.switchTab({url:"/pages/home/home"})},onTap2:function(){uni.showModal({title:"提示",content:"体检项目需对接至平台"})},getList:function(){var e=this;(0,d.getTestingListByScaleResult)({scaleResultId:this.id}).then((function(t){if("0"==t.code&&t.data){var a,i=t.data,d=(0,c.default)(i);try{for(d.s();!(a=d.n()).done;){var n=a.value;"低"===n.level&&e.middleList.push(n),"高"===n.level&&e.highList.push(n)}}catch(p){d.e(p)}finally{d.f()}}}))}}};t.default=n},d0d3:function(e,t,a){var i=a("6484");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=a("4f06").default;c("2d2bf1d6",i,!0,{sourceMap:!1,shadowMode:!1})},e8aa:function(e,t,a){"use strict";var i=a("d0d3"),c=a.n(i);c.a},f7f2:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return i}));var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"app-check-detail"},[a("v-uni-view",{staticClass:"app-check-detail-group-header"},[a("v-uni-view",{staticClass:"app-check-detail-group-header-box"},[a("v-uni-view",{staticClass:"app-check-detail-group-header-box-info"},[a("v-uni-view",{staticClass:"app-check-detail-group-header-box-info-title"},[e._v("重点筛查项目")]),a("v-uni-view",{staticClass:"app-check-detail-group-header-box-info-des"},[e._v("专业筛查存在较高患病风险的疾病")])],1),a("v-uni-view",{staticClass:"app-check-detail-group-header-box-nums"})],1)],1),e._l(e.highList,(function(t){return a("v-uni-view",{key:"items"+t.id,staticClass:"app-check-detail-item"},[a("v-uni-view",{staticClass:"app-check-detail-item-header"},[a("v-uni-view",{staticClass:"app-check-detail-item-header-title"},[e._v(e._s(t.name))]),a("v-uni-view",{staticClass:"app-check-detail-item-header-control"})],1),a("v-uni-view",{staticClass:"app-check-detail-item-bodyer"},[a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-info"},[e._v(e._s(t.remark))]),a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-des"},[a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-des-tips"},[e._v("检查频次: "+e._s(t.frequency))]),a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-des-tips"},[e._v("推荐原因:"+e._s(t.reason))])],1)],1)],1)})),a("v-uni-view",{staticClass:"app-check-detail-group-header app-check-detail-group-header-normal"},[a("v-uni-view",{staticClass:"app-check-detail-group-header-box"},[a("v-uni-view",{staticClass:"app-check-detail-group-header-box-info"},[a("v-uni-view",{staticClass:"app-check-detail-group-header-box-info-title"},[e._v("常规检查项目")]),a("v-uni-view",{staticClass:"app-check-detail-group-header-box-info-des"},[e._v("筛查有一定患病风险的疾病")])],1),a("v-uni-view",{staticClass:"app-check-detail-group-header-box-nums"})],1)],1),e._l(e.middleList,(function(t){return a("v-uni-view",{key:"items"+t.id,staticClass:"app-check-detail-item"},[a("v-uni-view",{staticClass:"app-check-detail-item-header"},[a("v-uni-view",{staticClass:"app-check-detail-item-header-title"},[e._v(e._s(t.name))]),a("v-uni-view",{staticClass:"app-check-detail-item-header-control"})],1),a("v-uni-view",{staticClass:"app-check-detail-item-bodyer"},[a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-info"},[e._v(e._s(t.remark))]),a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-des"},[a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-des-tips"},[e._v("检查频次: "+e._s(t.frequency))]),a("v-uni-view",{staticClass:"app-check-detail-item-bodyer-des-tips"},[e._v("推荐原因:"+e._s(t.reason))])],1)],1)],1)})),a("v-uni-view",{staticClass:"bottom_bar"},[a("v-uni-view",{staticClass:"btn-info",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap.apply(void 0,arguments)}}},[e._v("回到首页")]),a("v-uni-view",{staticClass:"btn-ok",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap2.apply(void 0,arguments)}}},[e._v("立即预约")])],1)],2)},d=[]}}]);