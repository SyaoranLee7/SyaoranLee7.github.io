(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-records-add"],{"19da":function(t,e,i){var a=i("f4ff");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3e96af07",a,!0,{sourceMap:!1,shadowMode:!1})},"19fd":function(t,e,i){"use strict";i.r(e);var a=i("56d74"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"340a":function(t,e,i){t.exports=i.p+"static/img/img-plan-alert.3009aa17.png"},3922:function(t,e,i){"use strict";i.r(e);var a=i("f191"),n=i("19fd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7208");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5c361d36",null,!1,a["a"],r);e["default"]=c.exports},"56d74":function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),i("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f756")),o={name:"u-input",mixins:[n.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,i=t.detail.value;this.trim&&(i=this.$u.trim(i)),this.$emit("input",i),this.defaultValue=i,setTimeout((function(){e.dispatch("u-form-item","on-form-change",i)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"6b07":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uInput:i("3922").default,uIcon:i("ece6").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app-record"},[a("v-uni-view",{staticClass:"app-record-box"},[t.records_data!={}?a("v-uni-view",{staticClass:"app-record-box-title"},[t._v("目标"+t._s(t.records_data.name)+" "+t._s(t.records_data.valNum.rs)+"-"+t._s(t.records_data.valNum.re)+"\n      "+t._s(t.records_data.unit))]):t._e(),a("v-uni-view",{staticClass:"app-record-box-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"VlQXaTAGoXHEFlGOtwHvyciGrYBTttTn",id:"VlQXaTAGoXHEFlGOtwHvyciGrYBTttTn"},on:{touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.tap.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"inputs"},[a("v-uni-view",{staticClass:"input-box"},[a("u-input",{ref:"nums",staticStyle:{"font-size":"24px"},attrs:{focus:t.focus,type:"number","input-align":"center",placeholder:"","confirm-type":"done"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)}},model:{value:t.nums,callback:function(e){t.nums=e},expression:"nums"}})],1),a("v-uni-view",{staticClass:"input-unit"},[t._v(t._s(t.records_data.unit))])],1)],1),a("v-uni-view",{staticClass:"app-record-box-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[t._v("提交")])],1),t.show?a("v-uni-view",{staticClass:"warp"},[a("v-uni-view",{staticClass:"warp-box"},[a("v-uni-view",{staticClass:"warp-box-header"},[a("v-uni-view",{staticClass:"warp-box-image"},[a("v-uni-image",{staticClass:"image",attrs:{src:i("340a")}})],1)],1),a("v-uni-view",{staticClass:"warp-box-title"},[t._v(t._s(t.tips))]),a("v-uni-view",{staticClass:"warp-box-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[a("u-icon",{staticStyle:{"margin-right":"4px"},attrs:{name:"clock",color:"#ffffff",size:"32"}}),t._v("完成")],1)],1)],1):t._e()],1)},o=[]},7208:function(t,e,i){"use strict";var a=i("cb47"),n=i.n(a);n.a},a11e:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#333;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#333;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#ff5d16!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},a6b9:function(t,e,i){"use strict";i.r(e);var a=i("eff6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},a7f5:function(t,e,i){"use strict";i.r(e);var a=i("6b07"),n=i("a6b9");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b618");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"208f1e5c",null,!1,a["a"],r);e["default"]=c.exports},b618:function(t,e,i){"use strict";var a=i("19da"),n=i.n(a);n.a},cb47:function(t,e,i){var a=i("a11e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6e0b3507",a,!0,{sourceMap:!1,shadowMode:!1})},eff6:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("0c57"),o=i("1c31"),r=i("4239"),s=i("ed08"),c=a(i("f6e8")),u={},l={data:function(){return{cWidth:375,cHeight:375,nums:"",focus:!0,show:!1,objid:"",taskId:"",records_data:{},tips:"",low:!1,high:!1,normal:!1,p:0}},onReady:function(){this.cWidth=uni.upx2px(375),this.cHeight=uni.upx2px(375),this.getServerData()},onLoad:function(t){(null===t||void 0===t?void 0:t.objid)&&(this.objid=t.objid),(null===t||void 0===t?void 0:t.taskid)&&(this.taskId=t.taskid),this.getConfigList()},methods:{onOk:function(){uni.navigateBack()},onTap:function(){this.records()},onInput:function(t){this.low=!1,this.high=!1,this.normal=!1,Number(t)>Number(this.records_data.valNum.re)&&(this.high=!0),Number(t)<Number(this.records_data.valNum.rs)&&(this.low=!0),Number(t)>=Number(this.records_data.valNum.rs)&&Number(t)<=Number(this.records_data.valNum.re)&&(this.normal=!0),this.p=Number(t)/Number(this.records_data.valNum.re),this.p>1&&(this.p=1),setTimeout(this.getServerData(),1e3)},getConfigList:function(){var t=this,e={tableId:this.objid};(0,r.columnCfgList)(e).then((function(e){"0"==e.code&&e.data&&e.data.length>0&&(t.records_data=e.data[0])}))},getDataRuslt:function(){var e=this,i={};for(var a in this.records_data)t.log(a),"code"==a&&(i[this.records_data[a]]=this.nums);var n={taskRecordContent:[i]};(0,o.userSummaryDayReportList)(n).then((function(t){var i;"0"===t.code&&(null===(i=t.data)||void 0===i?void 0:i.summary)&&(e.tips=(0,s.listToStr)(t.data.summary),e.show=!0)}))},records:function(){var e=this,i={};for(var a in this.records_data)t.log(a),"code"==a&&(i[this.records_data[a]]=this.nums);var o=[i],r={content:o,mdTableId:this.objid,remark:"",taskId:this.taskId};(0,n.performServiceTask)(r).then((function(t){"0"==t.code&&e.getDataRuslt()}))},getServerData:function(){var t;this.low&&(t="#FF5630"),this.normal&&(t="#38CB89"),this.high&&(t="#FF5630");var e={series:[{name:"正确率",color:t,data:this.p}]};this.drawCharts("VlQXaTAGoXHEFlGOtwHvyciGrYBTttTn",e)},drawCharts:function(t,e){var i=uni.createCanvasContext(t,this);u[t]=new c.default({type:"arcbar",context:i,width:this.cWidth,height:this.cHeight,series:e.series,animation:!0,timing:"easeOut",duration:1e3,rotate:!1,rotateLock:!1,background:"#FFFFFF",color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:void 0,fontSize:13,fontColor:"#666666",dataLabel:!0,dataPointShape:!0,dataPointShapeType:"solid",touchMoveLimit:60,enableScroll:!1,enableMarkLine:!1,title:{name:"",fontSize:25,color:"#00FF00",offsetX:0,offsetY:0},subtitle:{name:"",fontSize:15,color:"#666666",offsetX:0,offsetY:0},extra:{arcbar:{type:"circle",width:8,backgroundColor:"#E9E9E9",startAngle:0,endAngle:0,gap:2,direction:"cw",lineCap:"round",centerX:0,centerY:0,linearType:"none"}}})},tap:function(t){u[t.target.id].touchLegend(t),u[t.target.id].showToolTip(t)}}};e.default=l}).call(this,i("5a52")["default"])},f191:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("ece6").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[i("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[i("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[i("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},f4ff:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/uni-page-body[data-v-208f1e5c]{background:#eee}[data-v-208f1e5c] .u-input__input{font-size:28px;color:#333;margin-bottom:10px;font-weight:700}.app-record-box[data-v-208f1e5c]{padding:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.app-record-box-title[data-v-208f1e5c]{position:absolute;font-size:%?32?%;color:#888}.app-record-box-button[data-v-208f1e5c]{width:80vw;height:%?72?%;background:#3873fe;color:#fff;position:fixed;bottom:5vh;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:4px}.app-record-box-charts[data-v-208f1e5c]{margin-top:40px;width:%?375?%;height:%?375?%;position:absolute}.app-record-box-charts .charts[data-v-208f1e5c]{width:%?375?%;height:%?375?%;position:absolute}.app-record-box-charts .inputs[data-v-208f1e5c]{width:%?375?%;padding-top:%?140?%;position:absolute;text-align:center}.app-record-box-charts .inputs .input-box[data-v-208f1e5c]{width:%?180?%;border-bottom:1px #999 solid;margin:0 auto}.app-record-box-charts .inputs .input-unit[data-v-208f1e5c]{margin-top:10px;font-size:16px;color:#999}.warp[data-v-208f1e5c]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.7);z-index:9999;width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.warp .warp-box[data-v-208f1e5c]{width:80vw;background:#fff;border-radius:14px;padding-bottom:20px;overflow:hidden}.warp .warp-box .warp-box-header[data-v-208f1e5c]{background:#e5fef4;padding-bottom:20px}.warp .warp-box .warp-box-header .warp-box-image[data-v-208f1e5c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:20px}.warp .warp-box .warp-box-header .warp-box-image .image[data-v-208f1e5c]{width:120px;height:70px;object-fit:cover}.warp .warp-box .warp-box-title[data-v-208f1e5c]{margin-top:14px;text-align:center;font-size:18px;font-weight:600;margin-bottom:10px}.warp .warp-box .warp-box-des[data-v-208f1e5c]{padding:0 20px;margin-bottom:30px;line-height:1.4;color:#999}.warp .warp-box .warp-box-btn[data-v-208f1e5c]{margin:20px 20px;margin-bottom:0;height:32px;border-radius:16px;background:#38cb89;line-height:32px;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}body.?%PAGE?%[data-v-208f1e5c]{background:#eee}',""]),t.exports=e},f756:function(t,e,i){"use strict";function a(t,e,i){this.$children.map((function(n){t===n.$options.name?n.$emit.apply(n,[e].concat(i)):a.apply(n,[t,e].concat(i))}))}i("99af"),i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={methods:{dispatch:function(t,e,i){var a=this.$parent||this.$root,n=a.$options.name;while(a&&(!n||n!==t))a=a.$parent,a&&(n=a.$options.name);a&&a.$emit.apply(a,[e].concat(i))},broadcast:function(t,e,i){a.call(this,t,e,i)}}};e.default=n}}]);