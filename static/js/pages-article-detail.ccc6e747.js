(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-detail"],{"0b0a":function(t,e,i){i("ac1f"),i("1276");var a={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),a=i.length;a--;)e[i[a]]=!0;return e}t.exports=a},"1ed1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-01dfbd2e{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-01dfbd2e{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},2423:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.queryArticleTree=o,e.queryArticles=s,e.getArticles=c;var r=a(i("e143")),n=i("f62d");function o(t){return r.default.prototype.$u.post(n.api_spec.app+"/app/cms/articleCategory/getTree",t)}function s(t){return r.default.prototype.$u.post(n.api_spec.app+"/app/cms/article/query",t)}function c(t){return r.default.prototype.$u.post(n.api_spec.app+"/app/cms/article/get",t)}},"3d49":function(t,e,i){"use strict";i.r(e);var a=i("50c6"),r=i("8c50");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("8866");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"d42ec22e",null,!1,a["a"],o);e["default"]=c.exports},"40b9":function(t,e,i){"use strict";var a=i("8042"),r=i.n(a);r.a},"40bd":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=a(i("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,c=(o.platform,i("0b0a")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,a=e.split("://")[0],r=a.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;a+=Math.random()>.5?i.toUpperCase():i}return a+=e.substr(r),this[t]=a}if(this[t]=e,e.includes("data:image")){var n=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!n)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var a=document.createElement("div");e?this.rtf?this.rtf.appendChild(a):this.rtf=a:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=a),a.innerHTML=this._handleHtml(t,e);for(var r,o=this.rtf.getElementsByTagName("style"),l=0;r=o[l++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,a=0;e=t[a++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var d=this,u=this.rtf.getElementsByTagName("title");u.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:u[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var p,h=this.rtf.getElementsByTagName("img"),v=0,g=0;p=h[v];v++)parseInt(p.style.width||p.getAttribute("width"))>s&&(p.style.height="auto"),f(p),p.hasAttribute("ignore")||"A"==p.parentElement.nodeName||(p.i=g++,d.imgList.push(p.getAttribute("original-src")||p.src||p.getAttribute("data-src")),p.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},d.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:d.imgList})}),p.onerror=function(){c.errorImg&&(d.imgList[this.i]=this.src=c.errorImg),d.$emit("error",{source:"img",target:this})},d.lazyLoad&&this._observer&&p.src&&0!=p.i&&(p.setAttribute("data-src",p.src),p.removeAttribute("src"),this._observer.observe(p));var m,b=this.rtf.getElementsByTagName("a"),y=(0,n.default)(b);try{for(y.s();!(m=y.n()).done;){var x=m.value;x.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(d.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])d.useAnchor&&d.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(S){y.e(S)}finally{y.f()}var _=this.rtf.getElementsByTagName("video");d.videoContexts=_;for(var w,T=0;w=_[T++];)f(w),w.style.maxWidth="100%",w.onerror=function(){d.$emit("error",{source:"video",target:this})},w.onplay=function(){if(d.autopause)for(var t,e=0;t=d.videoContexts[e++];)t!=this&&t.pause()};var A,C,k=this.rtf.getElementsByTagName("audio"),B=(0,n.default)(k);try{for(B.s();!(A=B.n()).done;){var I=A.value;f(I),I.onerror=function(){d.$emit("error",{source:"audio",target:this})}}}catch(S){B.e(S)}finally{B.f()}if(this.autoscroll){var L,N=this.rtf.getElementsByTagName("table"),O=(0,n.default)(N);try{for(O.s();!(L=O.n()).done;){var $=L.value,E=document.createElement("div");E.style.overflow="scroll",$.parentNode.replaceChild(E,$),E.appendChild($)}}catch(S){O.e(S)}finally{O.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==C&&(i.$emit("ready",i.rect),clearInterval(i._timer)),C=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",a=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?a.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():a.selectViewport().scrollOffset(),a.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var a=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=a:uni.pageScrollTo({scrollTop:a,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var a in c.userAgentStyles)i+="".concat(a,"{").concat(c.userAgentStyles[a],"}");for(a in this.tagStyle)i+="".concat(a,"{").concat(this.tagStyle[a],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},4655:function(t,e,i){"use strict";i.r(e);var a=i("40bd"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"50c6":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uParse:i("6e2f").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app-article-detail"},[i("v-uni-view",{staticClass:"app-article-detail-header"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.data.title))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"user-name"},[t._v(t._s(t.data.source))])],1),i("v-uni-view",{staticClass:"tips"},[t._v("本文国贸荟编辑审核")])],1),i("v-uni-view",{staticClass:"app-article-detail-content"},[t.data.content&&"imgtext"==t.data.style?i("u-parse",{attrs:{html:t.data.content,"tag-style":t.style}}):t._e(),t.data.content&&"video"==t.data.style?i("v-uni-video",{staticClass:"video",attrs:{id:"myVideo",src:t.data.content,controls:!0}}):t._e()],1)],1)},n=[]},"5bb0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2423"),r={data:function(){return{articleNo:"",data:{},style:{p:"font-size:32rpx; margin-bottom:30rpx",span:"font-size: 32rpx",img:"margin:24px 0px"}}},onLoad:function(t){t&&(null===t||void 0===t?void 0:t.id)&&(this.articleNo=t.id,this.getDetails())},methods:{getDetails:function(){var t=this;(0,a.getArticles)({articleNo:this.articleNo}).then((function(e){(null===e||void 0===e?void 0:e.code)&&e.data&&(t.data=e.data)}))}}};e.default=r},"6e2f":function(t,e,i){"use strict";i.r(e);var a=i("88f8"),r=i("4655");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("40b9");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"01dfbd2e",null,!1,a["a"],o);e["default"]=c.exports},8042:function(t,e,i){var a=i("1ed1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("0f4789de",a,!0,{sourceMap:!1,shadowMode:!1})},8866:function(t,e,i){"use strict";var a=i("ae04"),r=i.n(a);r.a},"88f8":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},n=[]},"8c50":function(t,e,i){"use strict";i.r(e);var a=i("5bb0"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},ae04:function(t,e,i){var a=i("fb6f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("b534a29c",a,!0,{sourceMap:!1,shadowMode:!1})},fb6f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/**\n*  请定义在上面的模版里 按照 ·$u-属性-值· 命名如 $u-font-sm\n*/uni-page-body[data-v-d42ec22e]{background-color:#fff}.app-article-detail[data-v-d42ec22e]{padding:18px}.app-article-detail-header[data-v-d42ec22e]{font-size:24px;font-weight:600;padding:20px 0}.app-article-detail-header .title[data-v-d42ec22e]{margin:14px 0}.app-article-detail-header .info[data-v-d42ec22e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.app-article-detail-header .info .user-logo[data-v-d42ec22e]{width:32px;height:32px;background:#eee;border-radius:50%;margin-right:8px}.app-article-detail-header .info .user-name[data-v-d42ec22e]{font-size:14px;color:#3873fe;font-weight:400}.app-article-detail-header .tips[data-v-d42ec22e]{margin-top:14px;border-top:1px #eee solid;font-size:12px;font-weight:400;color:#999;padding:14px 0}.app-article-detail-content[data-v-d42ec22e]{line-height:1.8}.app-article-detail-content img[data-v-d42ec22e]{margin:14px 0}.video[data-v-d42ec22e]{width:100%}body.?%PAGE?%[data-v-d42ec22e]{background-color:#fff}',""]),t.exports=e}}]);