(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbd02590"],{"01d7":function(t,e,i){},3592:function(t,e,i){t.exports=i.p+"static/img/add.00aea76a.svg"},3698:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order mt-list"},[i("div",{staticClass:"mt-list-filter"},[i("el-form",{ref:"form",attrs:{model:t.filter,"label-width":"80px"}},[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"订单号"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.filter.orderId,callback:function(e){t.$set(t.filter,"orderId",e)},expression:"filter.orderId"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"物流单号"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.filter.logisticsId,callback:function(e){t.$set(t.filter,"logisticsId",e)},expression:"filter.logisticsId"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"物流渠道"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.filter.logisticsChannel,callback:function(e){t.$set(t.filter,"logisticsChannel",e)},expression:"filter.logisticsChannel"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"创建时间"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.filter.createTime,callback:function(e){t.$set(t.filter,"createTime",e)},expression:"filter.createTime"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"mt-list-filter-btn"},[i("mt-button",{on:{click:t.addBtn}},[t._v("新建")]),t._v(" "),i("mt-button",{on:{click:t.readList}},[t._v("搜索")]),t._v(" "),i("mt-button",{attrs:{type:"submain"},on:{click:t.resetSearch}},[t._v("重置")])],1)])],1)],1)],1),t._v(" "),i("el-table",{staticClass:"mt-list-table table",attrs:{data:t.list,height:"auto"}},[i("el-table-column",{attrs:{prop:"orderId",label:"订单号","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"status",label:"订单状态","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"origin",label:"始发地","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"destination",label:"目的地","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{prop:"logisticsId",label:"物流单号","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("mt-button",{attrs:{type:"table"},on:{click:function(i){return t.logisticsDetail(e.row)}}},[t._v("\n          "+t._s(e.row.logisticsId)+"\n        ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"logisticsChannel",label:"物流渠道","min-width":"180"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"更多",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("mt-button",{attrs:{type:"table"},on:{click:function(i){return t.goDetail(e.row.orderId)}}},[t._v("订单详情")]),t._v(" "),i("mt-button",{attrs:{type:"table"}},[t._v("编辑")]),t._v(" "),i("mt-button",{attrs:{type:"table"}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"mt-list-footer"},[i("div",{staticClass:"totaldata"},[t._v("共"+t._s(t.total)+"条")]),t._v(" "),i("div",{staticClass:"page"},[i("el-pagination",{staticClass:"mt-page",staticStyle:{float:"right"},attrs:{"current-page":t.page,"page-size":t.pageSize,"page-sizes":t.pageSizes,total:t.total,background:"",layout:t.pageLayout},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t._v(" "),i("logistics-dialog",{ref:"LogisticsDialog"})],1)},n=[],a=(i("96cf"),i("1da1")),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:"物流详情",visible:t.dialogVisible,width:"40%","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.handleClose,"custom-class":"logistics-dialog"},on:{"update:visible":function(e){t.dialogVisible=e}}},["edit"===t.type?s("el-form",{attrs:{"label-width":"80px","label-position":"left"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[s("el-form-item",{attrs:{label:"物流渠道"}},[s("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.logisticsChannel,callback:function(e){t.$set(t.form,"logisticsChannel",e)},expression:"form.logisticsChannel"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"始发地"}},[s("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.origin,callback:function(e){t.$set(t.form,"origin",e)},expression:"form.origin"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"目的地"}},[s("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.destination,callback:function(e){t.$set(t.form,"destination",e)},expression:"form.destination"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"物流信息"}},[t._l(t.form.logisticsList,(function(e,n){return s("div",{key:e.id,staticClass:"item"},[s("el-date-picker",{staticStyle:{width:"calc(30% - 20px)","margin-right":"10px"},attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.time,callback:function(i){t.$set(e,"time",i)},expression:"item.time"}}),t._v(" "),s("mt-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请输入路段信息",width:"calc(30% - 20px)"},model:{value:e.location,callback:function(i){t.$set(e,"location",i)},expression:"item.location"}}),t._v(" "),s("mt-input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请输入其他信息",width:"calc(30% - 20px)"},model:{value:e.other,callback:function(i){t.$set(e,"other",i)},expression:"item.other"}}),t._v(" "),s("div",{staticClass:"item-btn",on:{click:function(e){return t.addLine(n)}}},[s("img",{attrs:{src:i("3592")}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.form.logisticsList.length>1,expression:"form.logisticsList.length > 1"}],staticClass:"item-btn"},[s("img",{attrs:{src:i("b248")}})])],1)})),t._v(" "),s("div",{staticClass:"add-btn",on:{click:function(e){return t.addLine("last")}}},[t._v("添加")])],2)],1):t._e(),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("mt-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确定")]),t._v(" "),s("mt-button",{on:{click:t.handleClose}},[t._v("取消")])],1)],1)},o=[],r={name:"LogisticsDialog",data:function(){return{form:{logisticsChannel:"",origin:"",destination:"",logisticsList:[]},type:"edit",dialogVisible:!1,inputWidth:"calc(100% - 120px)"}},created:function(){},mounted:function(){},methods:{open:function(t){this._.assign(this.form,t),this.dialogVisible=!0},addLine:function(t){var e={id:this._.uniqueId("logisticsList_"),time:"",location:"",other:""};"last"===t?this.form.logisticsList.push(e):this.form.logisticsList.splice(t+1,0,e)},handleSubmit:function(){this.handleClose()},handleClose:function(){this.dialogVisible=!1}}},c=r,d=(i("a2a4"),i("2877")),u=Object(d["a"])(c,l,o,!1,null,"ff688f6a",null),f=u.exports,h=i("839d"),p=(i("ed08"),{name:"OrderList",components:{LogisticsDialog:f},data:function(){return{filter:{orderId:"",logisticsId:"",logisticsChannel:"",createTime:""},inputWidth:"calc(100% - 1rem)"}},mixins:[h["a"]],created:function(){this.readList()},mounted:function(){},methods:{readList:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:({departName:this.filter.departName,page:this.page,pageSize:this.pageSize}),this.list=[{orderId:"00001",logisticsId:"00001",logisticsChannel:"00001",createTime:"2024-10-10 10:10",status:0,origin:"厦门",destination:"上海"}],this.total=0;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goDetail:function(t){this.$router.push("/order/detail?id="+t)},logisticsDetail:function(t){this.$refs.LogisticsDialog.open(t)}}}),m=p,g=(i("8fff"),Object(d["a"])(m,s,n,!1,null,"6f3b69e1",null));e["default"]=g.exports},"839d":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("20d6"),i("7514"),i("c5f6"),i("ac6a"),i("28a5"),i("a481");var s=i("ed08"),n=(document.querySelector("body").offsetHeight,{data:function(){return{list:[],listKey:"",listRowStyle:{cursor:"pointer"},tableHeight:"auto",tableHeightFixed:"20rem",inputWidth:"calc(100% - 40px)",selected:[],total:0,page:1,pageSize:20,pageSizes:[20,50,100,200],pageLayout:"sizes, prev, pager, next",activeRow:0,fixedBottom:!1}},mounted:function(){var t=this;window.onresize=function(){t.fixedBottom=document.documentElement.clientHeight<window.screen.height};var e=document.querySelector(".app-main");e.onscroll=function(){e.scrollTop+document.body.clientHeight>=e.scrollHeight?t.fixedBottom=!1:t.fixedBottom=!0}},watch:{list:{deep:!0,handler:function(){1===this.page||this.list.length||(this.page--,this.readList())}}},computed:{totalSelected:function(){return this.selected.length},listBtnDisabled:function(){return!this.totalSelected},isStripe:function(){return this.$store.state.settings.isStripe}},filters:{formatMoney:function(t){for(var e=2,i=parseFloat((t+"").replace(/[^\d\.-]/g,"")).toFixed(e)+"",s=i.split(".")[0].split("").reverse(),n=i.split(".")[1],a="",l=0;l<s.length;l++)a+=s[l]+((l+1)%3==0&&l+1!=s.length?",":"");return"￥"+a.split("").reverse().join("")+"."+n},formatDate:function(t){var e=t.split("、"),i="";return e.forEach((function(t){var e=t.split("-"),s=Number(e[1])>9?e[1]:"0"+e[1],n=Number(e[2])>9?e[2]:"0"+e[2];i+=e[0]+"年"+s+"月"+n+"日、"})),i.substring(0,i.length-1)}},methods:{readList:function(){},resetSearch:function(){Object(s["c"])(this.filter),this.page=1,this.pageSize=20,this.readList()},emptyFormatter:function(t,e){return e.property&&(t[e.property]||0===t[e.property])?t[e.property]:"--"},adSearch:function(){this.page=1,this.readList()},autoSelectList:function(){var t=this,e=this.listKey,i=this.$refs.tableList;i&&this.list.forEach((function(s,n){var a=t.selected.find((function(t){return t[e]===s[e]}));a&&setTimeout((function(){i.toggleRowSelection(t.list[n],!0)}),50)}))},tableRowClassName:function(t){var e=t.row;t.rowIndex;if(e===this.activeRow)return"active-row"},handleSelect:function(t,e){var i=this.listKey,s=!!t.find((function(t){return t[i]===e[i]})),n=this.selected.findIndex((function(t){return console.log(t,e),t[i]===e[i]}));s&&-1===n&&this.selected.push(e),s||-1===n||this.selected.splice(n,1)},handleSelectAll:function(t){var e=this,i=this.listKey;t.length?t.forEach((function(t){var s=e.selected.find((function(e){return e[i]===t[i]}));s||e.selected.push(t)})):this.list.forEach((function(t){var s=e.selected.findIndex((function(e){return e[i]===t[i]}));-1!==s&&e.selected.splice(s,1)}))},handleSelectedChange:function(t){},handleSizeChange:function(t){this.pageSize=t,this.page=1,this.readList()},handleCurrentChange:function(t){this.page=t,this.readList()}}})},"8fff":function(t,e,i){"use strict";i("01d7")},a2a4:function(t,e,i){"use strict";i("b2a3")},b248:function(t,e,i){t.exports=i.p+"static/img/delete.3d484683.svg"},b2a3:function(t,e,i){}}]);