(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-check-records-list"],{"0915":function(e,t,a){"use strict";a.r(t);var i=a("d349"),c=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=c.a},"1de5":function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"366e":function(e,t,a){e.exports=a.p+"static/img/top.7d5f9194.svg"},"3ad1":function(e,t,a){e.exports=a.p+"static/img/deco.9318fff3.svg"},"9f3c":function(e,t,a){e.exports=a.p+"static/img/empty.c5f71c8c.svg"},a744:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"app-check-records"},[i("v-uni-view",{staticClass:"bg"}),e.list.length?i("v-uni-view",[i("v-uni-view",{staticClass:"info"},[e._v("共"+e._s(e.total)+"个报告")]),e._l(e.list,(function(t,a){return i("v-uni-view",{key:a+"12345",staticClass:"app-check-records-list-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.gotoDetail(t)}}},[i("v-uni-view",{staticClass:"has-bg"},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"app-check-records-list-item-header"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(e.vuex_user.realName||"无"))]),i("v-uni-view",{staticClass:"date"},[e._v(e._s(t.testDt))])],1),i("v-uni-view",{staticClass:"app-check-records-list-item-bodyer"},[i("v-uni-view",{staticClass:"line"},[i("v-uni-view",{staticClass:"label"},[e._v("体检机构：")]),i("v-uni-view",{staticClass:"value"},[e._v(e._s(t.testCompanyName))])],1),i("v-uni-view",{staticClass:"line"},[i("v-uni-view",{staticClass:"label"},[e._v("体检号：")]),i("v-uni-view",{staticClass:"value"},[e._v("2137145218")])],1)],1),i("v-uni-view",{staticClass:"app-check-records-list-item-footer"},[i("v-uni-view",{staticClass:"btn"},[e._v("查看报告")])],1)],1)],1)],1)}))],2):i("v-uni-view",{staticClass:"no-data"},[i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{staticClass:"img",attrs:{src:a("9f3c")}})],1),i("v-uni-view",{staticClass:"text"},[e._v("暂无体检报告")])],1)],1)},s=[]},ae13:function(e,t,a){"use strict";var i=a("af5f"),c=a.n(i);c.a},af5f:function(e,t,a){var i=a("fb9b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=a("4f06").default;c("3eb34050",i,!0,{sourceMap:!1,shadowMode:!1})},d349:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a("4239"),s=i(a("23f7"));a("5e98");var n={name:"RecordsList",data:function(){return{list:[],total:0,showPdf:!1}},onLoad:function(){this.getList()},methods:{getList:function(){var e=this;(0,c.userTestReportDataList)({}).then((function(t){"0"==t.code&&t.data&&(e.list=t.data.records,e.total=t.data.records.length)}))},onClickReport:function(e){var t=this;this.showPdf=!0,this.$nextTick((function(e){t.pdfh5=new s.default("#PDF",{pdfurl:"https://hktimgs.oss-cn-shanghai.aliyuncs.com/pdf/20220608.pdf",lazy:!0,withCredentials:!0,renderType:"svg",maxZoom:3,scrollEnable:!0,zoomEnable:!0})}))},gotoDetail:function(e){uni.navigateTo({url:"/pages/check-records/detail?id=".concat(e.id)})}}};t.default=n},d4ef:function(e,t,a){"use strict";a.r(t);var i=a("a744"),c=a("0915");for(var s in c)"default"!==s&&function(e){a.d(t,e,(function(){return c[e]}))}(s);a("ae13");var n,r=a("f0c5"),o=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"1873c233",null,!1,i["a"],n);t["default"]=o.exports},fb9b:function(e,t,a){var i=a("24fb"),c=a("1de5"),s=a("366e"),n=a("3ad1");t=i(!1);var r=c(s),o=c(n);t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/uni-page-body[data-v-1873c233]{background:#fafafa}.app-check-records[data-v-1873c233]{width:100vw;background:-webkit-linear-gradient(283.49deg,hsla(0,0%,100%,.7176470588),#eff6fe);background:linear-gradient(166.51deg,hsla(0,0%,100%,.7176470588),#eff6fe)\n  /** 顶部背景 **/\n  /** 顶部信息 **/}.app-check-records .bg[data-v-1873c233]{width:100%;height:200px;background:url('+r+") no-repeat;background-size:100% auto}.app-check-records .info[data-v-1873c233]{margin:-180px %?30?% %?30?% %?30?%;color:#fff;font-size:%?26?%}.app-check-records .app-check-records-list-item[data-v-1873c233]{margin:14px;background-color:#fff;border-radius:14px;border:1px #eee solid}.app-check-records .app-check-records-list-item .has-bg[data-v-1873c233]{background:url("+o+") no-repeat;background-size:auto 100%;background-position:100% 0;width:100%;height:100%}.app-check-records .app-check-records-list-item .has-bg .inner[data-v-1873c233]{padding:%?40?%;background:-webkit-linear-gradient(291.47deg,#fff,#eff6fe);background:linear-gradient(158.53deg,#fff,#eff6fe);box-shadow:0 15px 30px 0 rgba(26,68,98,.0980392157);border-radius:14px}.app-check-records .app-check-records-list-item-header[data-v-1873c233]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:8px}.app-check-records .app-check-records-list-item-header .name[data-v-1873c233]{font-size:%?36?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.app-check-records .app-check-records-list-item-header .date[data-v-1873c233]{color:#999;font-size:12px}.app-check-records .app-check-records-list-item-bodyer[data-v-1873c233]{padding-bottom:14px;border-bottom:1px #eee solid}.app-check-records .app-check-records-list-item-bodyer .line[data-v-1873c233]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;font-size:%?26?%}.app-check-records .app-check-records-list-item-bodyer .line .label[data-v-1873c233]{color:#999}.app-check-records .app-check-records-list-item-bodyer .line .value[data-v-1873c233]{color:#333}.app-check-records .app-check-records-list-item-bodyer .info[data-v-1873c233]{font-size:13px;color:#666;line-height:1.6}.app-check-records .app-check-records-list-item-footer[data-v-1873c233]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.app-check-records .app-check-records-list-item-footer .btn[data-v-1873c233]{width:%?160?%;height:%?70?%;text-align:center;line-height:%?70?%;color:#fff;background:-webkit-linear-gradient(330.19deg,#66d5f9,#0091e2);background:linear-gradient(119.81deg,#66d5f9,#0091e2);border-radius:100px}.no-data[data-v-1873c233]{width:100vw;height:90vh;margin-top:%?100?%}.no-data .empty[data-v-1873c233]{width:100%;text-align:center}.no-data .empty .img[data-v-1873c233]{width:%?240?%;height:%?160?%}.no-data .text[data-v-1873c233]{margin-top:%?20?%;color:#999;font-size:%?24?%;text-align:center}body.?%PAGE?%[data-v-1873c233]{background:#fafafa}",""]),e.exports=t}}]);