(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-index"],{"035d":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"nodata"},[i("v-uni-view",{staticClass:"nodata-content"},[i("v-uni-view",{staticClass:"text-view a-i-c j-c-c t-a-c"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.textTypes[t.networkType]))])],1),i("v-uni-view",{staticClass:"icon-view"}),i("v-uni-view",{staticClass:"opera-view"},["none"!=t.networkType?i("v-uni-view",{staticClass:"btn btn-default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.retry.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"btn-text"},[t._v("重试")])],1):t._e(),"none"==t.networkType?i("v-uni-view",{staticClass:"btn btn-default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSettings.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"btn-text"},[t._v("设置")])],1):t._e()],1)],1)],1)},o=[]},"0d4d":function(t,e,i){"use strict";i.r(e);var a=i("79de"),n=i("a4e1");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("468f");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6976da19",null,!1,a["a"],r);e["default"]=d.exports},1214:function(t,e,i){var a=i("2524");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("43afc2d9",a,!0,{sourceMap:!1,shadowMode:!1})},"1eb5":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"media-item view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"view",style:{flexDirection:1===t.newsItem.article_type||2===t.newsItem.article_type?2===t.newsItem.article_type?"row":"row-reverse":"column"}},[i("v-uni-text",{staticClass:"media-title",class:{"media-title2":1===t.newsItem.article_type||2===t.newsItem.article_type}},[t._v(t._s(t.newsItem.title))]),t.newsItem.image_list||t.newsItem.image_url?i("v-uni-view",{staticClass:"image-section flex-row",class:{"image-section-right":2===t.newsItem.article_type,"image-section-left":1===t.newsItem.article_type}},[t.newsItem.image_url?i("v-uni-image",{staticClass:"image-list1",class:{"image-list2":1===t.newsItem.article_type||2===t.newsItem.article_type},attrs:{"fade-show":!1,src:t.newsItem.image_url}}):t._e(),t.newsItem.image_list?t._l(t.newsItem.image_list,(function(t,e){return i("v-uni-image",{key:e,staticClass:"image-list3",attrs:{"fade-show":!1,src:t.url}})})):t._e()],2):t._e()],1),i("v-uni-view",{staticClass:"media-foot flex-row"},[i("v-uni-view",{staticClass:"media-info flex-row"},[i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.newsItem.source))]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.newsItem.comment_count)+"条评论")]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.newsItem.datetime))])],1),i("v-uni-view",{staticClass:"close-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"close-l close-h"}),i("v-uni-view",{staticClass:"close-l close-v"})],1)],1),i("v-uni-view",{staticClass:"media-item-line",staticStyle:{position:"absolute"}})],1)},o=[]},"1ef0":function(t,e,i){"use strict";var a=i("1214"),n=i.n(a);n.a},2524:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-load-more[data-v-021cf590]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:40px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-021cf590]{font-size:15px}.uni-load-more__img[data-v-021cf590]{width:24px;height:24px;margin-right:8px}.uni-load-more__img--nvue[data-v-021cf590]{color:#666}.uni-load-more__img--android[data-v-021cf590],\n\t.uni-load-more__img--ios[data-v-021cf590]{width:24px;height:24px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n.uni-load-more__img--android[data-v-021cf590]{-webkit-animation:loading-ios-data-v-021cf590 1s 0s linear infinite;animation:loading-ios-data-v-021cf590 1s 0s linear infinite}.uni-load-more__img--ios[data-v-021cf590]{-webkit-animation:loading-ios-data-v-021cf590 1s 0s step-end infinite;animation:loading-ios-data-v-021cf590 1s 0s step-end infinite}@-webkit-keyframes loading-android-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-ios-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-ios-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n.uni-load-more__img--android-H5[data-v-021cf590]{-webkit-animation:loading-android-H5-rotate-data-v-021cf590 2s linear infinite;animation:loading-android-H5-rotate-data-v-021cf590 2s linear infinite;-webkit-transform-origin:center center;transform-origin:center center}.uni-load-more__img--android-H5>circle[data-v-021cf590]{display:inline-block;-webkit-animation:loading-android-H5-dash-data-v-021cf590 1.5s ease-in-out infinite;animation:loading-android-H5-dash-data-v-021cf590 1.5s ease-in-out infinite;stroke:currentColor;stroke-linecap:round}@-webkit-keyframes loading-android-H5-rotate-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-H5-rotate-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-android-H5-dash-data-v-021cf590{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes loading-android-H5-dash-data-v-021cf590{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}.uni-load-more__img--ios-H5[data-v-021cf590]{position:relative;-webkit-animation:loading-ios-H5-data-v-021cf590 1s 0s step-end infinite;animation:loading-ios-H5-data-v-021cf590 1s 0s step-end infinite}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]{position:absolute;height:6px;width:2px;left:11px;top:0;-webkit-transform-origin:1px 12px;transform-origin:1px 12px}\n\n\t/* @for $i from 1 through 12 {\n */\n\n\t/* \t.uni-load-more__img--ios-H5>view:nth-child(#{$i}) {\n */\n\n\t/* \t\ttransform: rotate(360deg - ($i - 1) * 30deg);\n */\n\n\t/* \t\topacity: 1 - $i * 0.08;\n */\n\n\t/* \t}\n */\n\n\t/* }\n */.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(1){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.92}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(2){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.84}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(3){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.76}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(4){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.68}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(5){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.6}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(6){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.52}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.44}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(8){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.36}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(9){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.28}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(10){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.2}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(11){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.12}.uni-load-more__img--ios-H5>uni-view[data-v-021cf590]:nth-child(12){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:.04}@-webkit-keyframes loading-ios-H5-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-ios-H5-data-v-021cf590{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n\n",""]),t.exports=e},"253d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".view[data-v-6891e860]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-row[data-v-6891e860]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-col[data-v-6891e860]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list-cell[data-v-6891e860]{padding:0 15px}.uni-list-cell-hover[data-v-6891e860]{background-color:#eee}.media-item[data-v-6891e860]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:10px 15px 10px 15px}.media-item-line[data-v-6891e860]{position:absolute;left:15px;right:15px;bottom:0;height:1px;background-color:#ebebeb}.media-image-right[data-v-6891e860]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.media-image-left[data-v-6891e860]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.media-title[data-v-6891e860]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.media-title[data-v-6891e860]{lines:3;text-overflow:ellipsis;font-size:15px;color:#555}.media-title2[data-v-6891e860]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-top:3px;line-height:20px;margin-left:10px;overflow:hidden;text-overflow:ellipsis;display:box;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.image-section[data-v-6891e860]{margin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.image-section-right[data-v-6891e860]{margin-top:0;margin-left:5px;width:112px;height:73px}.image-section-left[data-v-6891e860]{margin-top:0;margin-right:5px;width:112px;height:73px}.image-list1[data-v-6891e860]{height:240px}.image-list2[data-v-6891e860]{width:112px;height:73px}.image-list3[data-v-6891e860]{width:112px;height:73px}.media-info[data-v-6891e860]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.info-text[data-v-6891e860]{margin-right:10px;color:#999;font-size:12px}.media-foot[data-v-6891e860]{margin-top:12px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.close-view[data-v-6891e860]{position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:20px;height:15px;line-height:15px;border-width:%?1?%;border-style:solid;border-color:#aaa;border-radius:4px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.close-l[data-v-6891e860]{position:absolute;width:9px;height:1px;background-color:#aaa}.close-h[data-v-6891e860]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-v[data-v-6891e860]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.exports=e},2776:function(t,e,i){"use strict";var a=i("2ee9"),n=i.n(a);n.a},"2ee9":function(t,e,i){var a=i("253d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("89bbdd96",a,!0,{sourceMap:!1,shadowMode:!1})},"2eec":function(t,e,i){"use strict";i.r(e);var a=i("9955"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2fd1":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("d81d"),i("a434"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ade3")),o=i("325c"),r=a(i("5d2b")),s=a(i("a7c6")),d=a(i("a011")),c={components:{uniLoadMore:s.default,noData:d.default,newsItem:r.default},props:{nid:{type:[Number,String],default:""}},data:function(){var t;return t={dataList:[],navigateFlag:!1,pulling:!1,refreshing:!1,refreshFlag:!1,refreshText:"",isLoading:!1,loadingText:"加载中...",isNoData:!1},(0,n.default)(t,"pulling",!1),(0,n.default)(t,"angle",0),(0,n.default)(t,"loadingMoreText",{contentdown:"",contentrefresh:"",contentnomore:""}),(0,n.default)(t,"refreshIcon","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="),t},created:function(){var t=this;this.pullTimer=null,this.requestParams={columnId:this.nid,minId:0,pageSize:10,column:"id,post_id,title,author_name,cover,published_at,comments_count"},this._isWidescreen=!1;var e=uni.createMediaQueryObserver(this);e.observe({minWidth:768},(function(e){t._isWidescreen=e}))},methods:{loadData:function(t){var e=this;if(!this.isLoading){this.isLoading=!0,this.isNoData=!1,this.requestParams.time=(new Date).getTime()+"";new Date;uni.request({url:"https://unidemo.dcloud.net.cn/api/news",data:this.requestParams,success:function(i){new Date;var a=i.data;e.isNoData=a.length<=0;var n=a.map((function(t){return{id:e.newGuid()+t.id,newsid:t.id,article_type:1,datetime:(0,o.friendlyDate)(new Date(t.published_at.replace(/\-/g,"/")).getTime()),title:t.title,image_url:t.cover,source:t.author_name,comment_count:t.comments_count,post_id:t.post_id}}));t?(e.dataList=n,e.requestParams.minId=0):(e.dataList=e.dataList.concat(n),e.requestParams.minId=a[a.length-1].id),e.dataList.length>0&&e._isWidescreen&&e.dataList.length<=10&&e.goDetail(e.dataList[0])},fail:function(t){0==e.dataList.length&&(e.isNoData=!0)},complete:function(i){e.isLoading=!1,t&&(e.refreshing=!1,e.refreshFlag=!1,e.refreshText="已刷新",e.pullTimer&&clearTimeout(e.pullTimer),e.pullTimer=setTimeout((function(){e.pulling=!1}),1e3))}})}},loadMore:function(t){this.loadData()},clear:function(){this.dataList.length=0,this.requestParams.minId=0},goDetail:function(t){this._isWidescreen?uni.$emit("updateDetail",{detail:encodeURIComponent(JSON.stringify(t))}):uni.navigateTo({url:"./detail?query="+encodeURIComponent(JSON.stringify(t))})},closeItem:function(t){var e=this;uni.showModal({content:"不感兴趣？",success:function(i){i.confirm&&e.dataList.splice(t,1)}})},refreshData:function(){this.isLoading||(this.pulling=!0,this.refreshing=!0,this.refreshText="正在刷新...",this.loadData(!0))},onrefresh:function(t){this.refreshData()},onpullingdown:function(t){this.refreshing||(this.pulling=!1,Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(this.refreshFlag=!0,this.refreshText="释放立即刷新"):(this.refreshFlag=!1,this.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=c},"325c":function(t,e,i){"use strict";function a(t){var e={year:"%n% 年前",month:"%n% 月前",day:"%n% 天前",hour:"%n% 小时前",minute:"%n% 分钟前",second:"%n% 秒前"},i=Date.now(),a=Math.floor((i-t)/1e3),n=Math.floor(a/60),o=Math.floor(n/60),r=Math.floor(o/24),s=Math.floor(r/30),d=Math.floor(s/12),c="",l=0;return d>0?(c="year",l=d):s>0?(c="month",l=s):r>0?(c="day",l=r):o>0?(c="hour",l=o):n>0?(c="minute",l=n):(c="second",l=0===a?a=1:a),e[c].replace("%n%",l)}i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.friendlyDate=a},"32e4":function(t,e,i){"use strict";i.r(e);var a=i("6aec"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"468f":function(t,e,i){"use strict";var a=i("596d"),n=i.n(a);n.a},4962:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"\nuni-page-body[data-v-68c7bf7a]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.tabs[data-v-68c7bf7a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fff;\n}.tab-bar[data-v-68c7bf7a]{\n\nheight:42px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwhite-space:nowrap\n}\n.tab-bar[data-v-68c7bf7a] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\n.scroll-view-indicator[data-v-68c7bf7a]{position:relative;height:2px;background-color:initial}.scroll-view-underline[data-v-68c7bf7a]{position:absolute;top:0;bottom:0;width:0;background-color:#007aff}.scroll-view-animation[data-v-68c7bf7a]{-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:left;transition-property:left}.tab-bar-line[data-v-68c7bf7a]{height:1px;background-color:#ccc}.tab-box[data-v-68c7bf7a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab-item[data-v-68c7bf7a]{\ndisplay:inline-block;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:20px;padding-right:20px}.uni-tab-item-title[data-v-68c7bf7a]{color:#555;font-size:15px;height:40px;line-height:40px;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-68c7bf7a]{color:#007aff}.swiper-item[data-v-68c7bf7a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-item[data-v-68c7bf7a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:absolute;left:0;top:0;right:0;bottom:0}",""]),t.exports=e},5725:function(t,e,i){"use strict";i.r(e);var a=i("fa78"),n=i("2eec");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b7f3");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"68c7bf7a",null,!1,a["a"],r);e["default"]=d.exports},"596d":function(t,e,i){var a=i("9a72");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0104a5bd",a,!0,{sourceMap:!1,shadowMode:!1})},"5c74":function(t,e,i){"use strict";var a=i("de48"),n=i.n(a);n.a},"5d2b":function(t,e,i){"use strict";i.r(e);var a=i("1eb5"),n=i("e81b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2776");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6891e860",null,!1,a["a"],r);e["default"]=d.exports},"6aec":function(t,e,i){"use strict";(function(t){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),o={name:"nodata",data:function(){return{textTypes:{none:"暂无网络"},isConnected:!1,networkType:"none"}},mounted:function(){var t=this;this.isIOS="ios"===uni.getSystemInfoSync().platform,uni.onNetworkStatusChange((function(e){t.isConnected=e.isConnected,t.networkType=e.networkType})),uni.getNetworkType({success:function(e){t.networkType=e.networkType}})},methods:{retry:function(){this.$emit("retry")},openSettings:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("none"!=t.networkType){e.next=3;break}return t.openSystemSettings(),e.abrupt("return");case 3:case"end":return e.stop()}}),e)})))()},openAppSettings:function(){this.gotoAppSetting()},openSystemSettings:function(){this.isIOS?this.gotoiOSSetting():this.gotoAndroidSetting()},network:function(){var e=null,i=plus.ios.newObject("CTCellularData"),a=i.plusGetAttribute("restrictedState");return 0==a?(e=null,t.log("StateUnknown")):2==a?(e=1,t.log("已经开启了互联网权限:NotRestricted")):1==a&&(e=2,t.log("Restricted")),plus.ios.deleteObject(i),e},gotoAppSetting:function(){if(this.isIOS){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),i=plus.ios.import("NSURL"),a=i.URLWithString("app-settings:");e.openURL(a),plus.ios.deleteObject(a),plus.ios.deleteObject(i),plus.ios.deleteObject(e)}else{var n=plus.android.importClass("android.content.Intent"),o=plus.android.importClass("android.provider.Settings"),r=plus.android.importClass("android.net.Uri"),s=plus.android.runtimeMainActivity(),d=new n;d.setAction(o.ACTION_APPLICATION_DETAILS_SETTINGS);var c=r.fromParts("package",s.getPackageName(),null);d.setData(c),s.startActivity(d)}},gotoiOSSetting:function(){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),i=plus.ios.import("NSURL"),a=i.URLWithString("App-prefs:root=General");e.openURL(a),plus.ios.deleteObject(a),plus.ios.deleteObject(i),plus.ios.deleteObject(e)},gotoAndroidSetting:function(){var t=plus.android.importClass("android.content.Intent"),e=plus.android.importClass("android.provider.Settings"),i=plus.android.runtimeMainActivity(),a=new t(e.ACTION_SETTINGS);i.startActivity(a)}}};e.default=o}).call(this,i("5a52")["default"])},"79de":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-news"},[i("v-uni-scroll-view",{staticClass:"listview",staticStyle:{flex:"1"},attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore()}}},[t._l(t.dataList,(function(e,a){return i("v-uni-view",{key:e.id},[i("news-item",{attrs:{newsItem:e},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeItem(a)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}})],1)})),t.isLoading||t.dataList.length>4?i("v-uni-view",{staticClass:"loading-more"},[i("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(t.loadingText))])],1):t._e()],2),t.isNoData?i("no-data",{staticClass:"no-data",on:{retry:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}}):t._e()],1)},o=[]},"83fe":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[("circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform)&&"loading"===t.status&&t.showIcon?i("svg",{staticClass:"uni-load-more__img uni-load-more__img--android-H5",attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[i("circle",{style:{color:t.color},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"3"}})]):"loading"===t.status&&t.showIcon?i("v-uni-view",{staticClass:"uni-load-more__img uni-load-more__img--ios-H5"},[i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}}),i("v-uni-view",{style:{backgroundColor:t.color}})],1):t._e(),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]},9955:function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("c975"),i("a434"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0d4d")),o=100,r=3,s=1,d={components:{newsPage:n.default},data:function(){return{tabList:[{id:"tab01",name:"最新",newsid:0},{id:"tab02",name:"大公司",newsid:23},{id:"tab03",name:"内容",newsid:223},{id:"tab04",name:"消费",newsid:221},{id:"tab05",name:"娱乐",newsid:225},{id:"tab06",name:"区块链",newsid:208}],tabbar_index:3,tabIndex:0,cacheTab:[],scrollInto:"",navigateFlag:!1,indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=[];for(var t=0;t<this.tabList.length;t++){var e=this.$refs["page"+t];Array.isArray(e)?this.pageList.push(e[0]):this.pageList.push(e)}this.switchTab(this.tabIndex),this.selectorQuery()},methods:{ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var i=this.tabListSize[e];this.updateIndicator(i.left,i.width),this._touchTabIndex=e,this.switchTab(e)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var e=t.detail.dx,i=this._lastTabIndex;if(e>s?i++:e<-s&&i--,!(i===this._lastTabIndex||i<0||i>this.pageList.length-1)){0===this.pageList[i].dataList.length&&this.loadTabData(i);var a=Math.abs(this.swiperWidth/e),n=this.tabListSize[this._lastTabIndex],o=this.tabListSize[i],r=n.left+(o.left-n.left)/a,d=n.width+(o.width-n.width)/a;this.updateIndicator(r,d)}}},animationfinish:function(t){var e=t.detail.current;this._touchTabIndex===e&&(this.isTap=!1),this._lastTabIndex=e,this.switchTab(e),this.updateIndicator(this.tabListSize[e].left,this.tabListSize[e].width)},selectorQuery:function(){var t=this;uni.createSelectorQuery().in(this).select(".tab-box").fields({dataset:!0,size:!0},(function(e){t.swiperWidth=e.width})).exec(),uni.createSelectorQuery().in(this).selectAll(".uni-tab-item").boundingClientRect((function(e){e.forEach((function(e){t.tabListSize[e.dataset.id]=e})),t.updateIndicator(t.tabListSize[t.tabIndex].left,t.tabListSize[t.tabIndex].width)})).exec()},getElementSize:function(t,e,i){var a=this;t.getComponentRect(e,(function(t){a.tabListSize[i]=t.size}))},updateIndicator:function(t,e){this.indicatorLineLeft=t,this.indicatorLineWidth=e},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>o){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabList[t].id,this.cacheTab.length>r){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var e=this.$refs["tabitem"+t][0],i=0;t>0&&(i=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(i=this.tabListSize[0].width)),dom.scrollToElement(e,{offset:-i})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};e.default=d},"9a72":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".no-data[data-v-6976da19]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;top:0;right:0;bottom:0;z-index:10}.page-news[data-v-6976da19]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;left:0;top:0;right:0;bottom:0}.listview[data-v-6976da19]{position:absolute;left:0;top:0;right:0;bottom:0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\nflex-direction:column\n}.refresh[data-v-6976da19]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-view[data-v-6976da19]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?750?%;height:64px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-icon[data-v-6976da19]{width:32px;height:32px;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-6976da19]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading-icon[data-v-6976da19]{width:28px;height:28px;margin-right:5px;color:grey}.loading-text[data-v-6976da19]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-6976da19]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:14px;padding-bottom:14px;text-align:center}.loading-more-text[data-v-6976da19]{font-size:%?28?%;color:#999}",""]),t.exports=e},a011:function(t,e,i){"use strict";i.r(e);var a=i("035d"),n=i("32e4");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5c74");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4d7d1af6",null,!1,a["a"],r);e["default"]=d.exports},a4e1:function(t,e,i){"use strict";i.r(e);var a=i("2fd1"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},a7c6:function(t,e,i){"use strict";i.r(e);var a=i("83fe"),n=i("fc5d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("1ef0");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"021cf590",null,!1,a["a"],r);e["default"]=d.exports},b7f3:function(t,e,i){"use strict";var a=i("fdd8"),n=i.n(a);n.a},c395:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:a}},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};e.default=n},de48:function(t,e,i){var a=i("e468");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b29ff908",a,!0,{sourceMap:!1,shadowMode:!1})},e020:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{newsItem:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")},close:function(t){t.stopPropagation(),this.$emit("close")}}};e.default=a},e468:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".a-i-c[data-v-4d7d1af6]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.j-c-c[data-v-4d7d1af6]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.t-a-c[data-v-4d7d1af6]{text-align:center}.nodata[data-v-4d7d1af6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:30px;background-color:#f8f8f8}.nodata-content[data-v-4d7d1af6]{-webkit-transform:translateY(-50px);transform:translateY(-50px)}.text-view[data-v-4d7d1af6]{margin-bottom:40px}.title[data-v-4d7d1af6]{color:#999;font-size:18px}.opera-view[data-v-4d7d1af6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.btn[data-v-4d7d1af6]{padding:5px 10px;width:128px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.btn-text[data-v-4d7d1af6]{color:#999;font-size:15px}.btn-default[data-v-4d7d1af6]{border-color:#999;border-style:solid;border-width:1px;border-radius:3px}",""]),t.exports=e},e81b:function(t,e,i){"use strict";i.r(e);var a=i("e020"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},fa78:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uTabbar:i("7af3").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabs"},[i("v-uni-scroll-view",{ref:"tabbar1",staticClass:"tab-bar",attrs:{id:"tab-bar",scroll:!1,"scroll-x":!0,"show-scrollbar":!1,"scroll-into-view":t.scrollInto}},[i("v-uni-view",{staticStyle:{"flex-direction":"column"}},[i("v-uni-view",{staticStyle:{"flex-direction":"row"}},t._l(t.tabList,(function(e,a){return i("v-uni-view",{key:e.id,ref:"tabitem"+a,refInFor:!0,staticClass:"uni-tab-item",attrs:{id:e.id,"data-id":a,"data-current":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"scroll-view-indicator"},[i("v-uni-view",{ref:"underline",staticClass:"scroll-view-underline",class:t.isTap?"scroll-view-animation":"",style:{left:t.indicatorLineLeft+"px",width:t.indicatorLineWidth+"px"}})],1)],1)],1),i("v-uni-view",{staticClass:"tab-bar-line"}),i("v-uni-swiper",{ref:"swiper1",staticClass:"tab-box",attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onswiperchange.apply(void 0,arguments)},transition:function(e){arguments[0]=e=t.$handleEvent(e),t.onswiperscroll.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)},onAnimationEnd:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.tabList,(function(t,e){return i("v-uni-swiper-item",{key:e,staticClass:"swiper-item"},[i("newsPage",{ref:"page"+e,refInFor:!0,staticClass:"page-item",attrs:{nid:t.newsid}})],1)})),1),i("u-tabbar",{attrs:{list:t.vuex_company_tabbar,"active-color":"#3873fe","inactive-color":"#B1AFB8",fontSize:"8px","icon-size":42},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap(t.index)}},model:{value:t.tabbar_index,callback:function(e){t.tabbar_index=e},expression:"tabbar_index"}})],1)},o=[]},fc5d:function(t,e,i){"use strict";i.r(e);var a=i("c395"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},fdd8:function(t,e,i){var a=i("4962");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1d479b0e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);