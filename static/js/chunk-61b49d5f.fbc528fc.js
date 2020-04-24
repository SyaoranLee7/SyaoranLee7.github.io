(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b49d5f"],{"05cd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lan-main-three"},[n("div",{attrs:{id:"canvas"}}),t._v(" "),n("lan-setting",{attrs:{maxWidth:300}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"质点A的质量kg"}},[n("el-input",{model:{value:t.form.massA,callback:function(e){t.$set(t.form,"massA",e)},expression:"form.massA"}},[n("template",{slot:"append"},[t._v("x10^24kg")])],2)],1),t._v(" "),n("el-form-item",{attrs:{label:"质点A的坐标"}},[n("el-input",{model:{value:t.form.locA,callback:function(e){t.$set(t.form,"locA",e)},expression:"form.locA"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"质点A的速度向量"}},[n("el-input",{model:{value:t.form.speedA,callback:function(e){t.$set(t.form,"speedA",e)},expression:"form.speedA"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"质点B的质量kg"}},[n("el-input",{model:{value:t.form.massB,callback:function(e){t.$set(t.form,"massB",e)},expression:"form.massB"}},[n("template",{slot:"append"},[t._v("x10^24kg")])],2)],1),t._v(" "),n("el-form-item",{attrs:{label:"质点B的坐标"}},[n("el-input",{model:{value:t.form.locB,callback:function(e){t.$set(t.form,"locB",e)},expression:"form.locB"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"质点B的速度向量"}},[n("el-input",{model:{value:t.form.speedB,callback:function(e){t.$set(t.form,"speedB",e)},expression:"form.speedB"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"运动速度值"}},[n("el-input",{model:{value:t.form.speed,callback:function(e){t.$set(t.form,"speed",e)},expression:"form.speed"}})],1)],1),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.start}},[t._v("开始")])],1)],1)},i=[],r=(n("c5f6"),n("28a5"),n("5a89")),a=(n("b3fd"),n("3191")),s=n.n(a),c=n("d545"),u=.5,l={getPointObjectPosition:function(t){var e=t.split(","),n=new r["k"](new r["u"](u,32,32),new r["l"]({color:"#FFFFFF"}));return n.position.set(e[0],0,e[1]),n},getCentroidPosition:function(t,e,n,o){var i=(e*Number(t[0])+o*Number(n[0]))/(e+o),a=(e*Number(t[1])+o*Number(n[1]))/(e+o),s=new r["k"](new r["u"](u/2,32,32),new r["l"]({color:"#FF0000"}));return s.position.set(i,0,a),s},getCentroidSpeed:function(t,e,n,o){var i=(t[0]*e+n[0]*o)/(e+o),r=(t[1]*e+n[1]*o)/(e+o);return[i,r]},getDistance:function(t,e){var n=c["a"].getEuclideanDistance(t,e),o=c["a"].VectorOperation(e,t,"-"),i=Math.sqrt(Math.pow(o[0],2)+Math.pow(o[1],2));return[o[0]/i*n,o[1]/i*n]},getGravitation:function(t,e,n){var o=6.754*Math.pow(10,-11),i=Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2))*Math.pow(10,8),r=o*t*e/Math.pow(i,2);return r},getLinearVelocity:function(t,e,n){var o=Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)),i=Math.sqrt(n*o*Math.pow(10,8)/t);return i},getPosition:function(t,e,n,o,i,r){var a=[Number(t.split(",")[0]),Number(t.split(",")[1])],s=(c["a"].getEuclideanDistance(t,e),Math.pow(10,8),n/o),u=s*this.getResolve(c["a"].VectorOperation(t,e,"-"),"x"),l=s*this.getResolve(c["a"].VectorOperation(t,e,"-"),"y"),p=this.getResolve(i,"x"),f=this.getResolve(i,"y"),d=p*r+.5*u*r*r+a[0],h=f*r+.5*l*r*r+a[1];return[d,h]},getVelocity:function(t,e,n,o,i,r){var a=n/o,s=a*this.getResolve(c["a"].VectorOperation(t,e,"-"),"x"),u=a*this.getResolve(c["a"].VectorOperation(t,e,"-"),"y"),l=this.getResolve(i,"x"),p=this.getResolve(i,"y");time,time},getResolve:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",n=t[0],o=t[1];return"x"===e?n/Math.sqrt(n*n+o*o):"y"===e?o/Math.sqrt(n*n+o*o):void 0}},p=l,f=n("abaa"),d={name:"Astronomy",components:{LanSetting:f["a"]},data:function(){return{scene:"",camera:"",renderer:"",stats:"",controls:"",aspect:window.innerWidth/window.innerHeight,startAnimation:!1,form:{massA:20,locA:"-5, 5",speedA:"-1, -1",massB:20,locB:"5, 5",speedB:"1, 1",speed:3},pA:"",speedA:[0,0],pB:"",speedB:[0,0],centroid:"",speenC:[0,0]}},computed:{},mounted:function(){this.init(),this.animate()},methods:{start:function(){if(!this.startAnimation){this.$logger.log("start");var t=this.form.locA.split(","),e=this.form.locB.split(",");this.centroid=p.getCentroidPosition([Number(t[0]),Number(t[1])],Number(this.form.massA),[Number(e[0]),Number(e[1])],Number(this.form.massB));var n=this.form.speedA.split(","),o=this.form.speedB.split(",");this.speedA=[Number(n[0]),Number(n[1])],this.speedB=[Number(o[0]),Number(o[1])],this.speedC=p.getCentroidSpeed(this.speedA,this.form.massA,this.speedB,this.form.massB),this.scene.add(this.centroid)}this.startAnimation=!this.startAnimation,this.$logger.log("speedC:",this.speedC)},init:function(){var t=new r["t"];this.scene=t;var e=new r["h"](100,100,"#C0C0C0","#303030");t.add(e);var n=new r["m"](45,this.aspect,1,1e3);n.position.x=0,n.position.y=-120,n.position.z=0,n.lookAt(0,0,0),t.add(n),this.camera=n,this.pA=p.getPointObjectPosition(this.form.locA),this.pB=p.getPointObjectPosition(this.form.locB),t.add(this.pA),t.add(this.pB);var o=document.createElement("div");document.getElementById("canvas").appendChild(o);var i=new r["y"]({antialias:!0});i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),o.appendChild(i.domElement),this.renderer=i,this.stats=new s.a,o.appendChild(this.stats.dom)},animate:function(){requestAnimationFrame(this.animate),this.stats.update(),this.render()},render:function(){if(this.startAnimation){var t=.01*Number(this.form.speed),e=this.pA,n=this.pB,o=this.centroid,i=e.position.x+","+e.position.z,r=n.position.x+","+n.position.z,a=o.position.x+","+o.position.z;this.$logger.log("la. lb. lc:",i,r,a);var s=c["a"].VectorOperation(i,r,"-"),u=(c["a"].getEuclideanDistance(i,a),p.getGravitation(Number(this.form.massA)*Math.pow(10,24),Number(this.form.massB)*Math.pow(10,24),s)),l=p.getPosition(i,a,u,Number(this.form.massA)*Math.pow(10,24),this.speedA,t);this.speedA=p.getVelocity(i,u,Number(this.form.massA)*Math.pow(10,24),this.speedA,t),e.position.x=l[0],e.position.y=l[1];var f=o.x+this.speedC[0]*speed,d=o.z+this.speedC[1]*speed;o.position.x+=f,o.position.z+=d}this.renderer.render(this.scene,this.camera)}}},h=d,m=n("2877"),v=Object(m["a"])(h,o,i,!1,null,"210fe10e",null);e["default"]=v.exports},"0f5c":function(t,e,n){},"11e9":function(t,e,n){var o=n("52a7"),i=n("4630"),r=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},"1c4c":function(t,e,n){"use strict";var o=n("9b43"),i=n("5ca1"),r=n("4bf8"),a=n("1fa8"),s=n("33a4"),c=n("9def"),u=n("f1ae"),l=n("27ee");i(i.S+i.F*!n("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,p,f=r(t),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,g=0,b=l(f);if(v&&(m=o(m,h>2?arguments[2]:void 0,2)),void 0==b||d==Array&&s(b))for(e=c(f.length),n=new d(e);e>g;g++)u(n,g,v?m(f[g],g):f[g]);else for(p=b.call(f),n=new d;!(i=p.next()).done;g++)u(n,g,v?a(p,m,[i.value,g],!0):i.value);return n.length=g,n}})},"2e08":function(t,e,n){var o=n("9def"),i=n("9744"),r=n("be13");t.exports=function(t,e,n,a){var s=String(r(t)),c=s.length,u=void 0===n?" ":String(n),l=o(e);if(l<=c||""==u)return s;var p=l-c,f=i.call(u,Math.ceil(p/u.length));return f.length>p&&(f=f.slice(0,p)),a?f+s:s+f}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3b2b":function(t,e,n){var o=n("7726"),i=n("5dbc"),r=n("86cc").f,a=n("9093").f,s=n("aae3"),c=n("0bfb"),u=o.RegExp,l=u,p=u.prototype,f=/a/g,d=/a/g,h=new u(f)!==f;if(n("9e1e")&&(!h||n("79e5")((function(){return d[n("2b4c")("match")]=!1,u(f)!=f||u(d)==d||"/a/i"!=u(f,"i")})))){u=function(t,e){var n=this instanceof u,o=s(t),r=void 0===e;return!n&&o&&t.constructor===u&&r?t:i(h?new l(o&&!r?t.source:t,e):l((o=t instanceof u)?t.source:t,o&&r?c.call(t):e),n?this:p,u)};for(var m=function(t){t in u||r(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=a(l),g=0;v.length>g;)m(v[g++]);p.constructor=u,u.prototype=p,n("2aba")(o,"RegExp",u)}n("7a56")("RegExp")},"456d":function(t,e,n){var o=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(o(t))}}))},4917:function(t,e,n){"use strict";var o=n("cb7c"),i=n("9def"),r=n("0390"),a=n("5f1b");n("214f")("match",1,(function(t,e,n,s){return[function(n){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=o(t),u=String(this);if(!c.global)return a(c,u);var l=c.unicode;c.lastIndex=0;var p,f=[],d=0;while(null!==(p=a(c,u))){var h=String(p[0]);f[d]=h,""===h&&(c.lastIndex=r(u,i(c.lastIndex),l)),d++}return 0===d?null:f}]}))},"4f7f":function(t,e,n){"use strict";var o=n("c26b"),i=n("b39a"),r="Set";t.exports=n("e0b8")(r,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(i(this,r),t=0===t?0:t,t)}},o)},"5a37":function(t,e,n){"use strict";var o=n("bd59"),i=n.n(o);i.a},"5dbc":function(t,e,n){var o=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var r,a=e.constructor;return a!==n&&"function"==typeof a&&(r=a.prototype)!==n.prototype&&o(r)&&i&&i(t,r),t}},"5df3":function(t,e,n){"use strict";var o=n("02f4")(!0);n("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},"5eda":function(t,e,n){var o=n("5ca1"),i=n("8378"),r=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*r((function(){n(1)})),"Object",a)}},"67ab":function(t,e,n){var o=n("ca5a")("meta"),i=n("d3f4"),r=n("69a8"),a=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")((function(){return c(Object.preventExtensions({}))})),l=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},p=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,o)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[o].i},f=function(t,e){if(!r(t,o)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[o].w},d=function(t){return u&&h.NEED&&c(t)&&!r(t,o)&&l(t),t},h=t.exports={KEY:o,NEED:!1,fastKey:p,getWeak:f,onFreeze:d}},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),i=n("0bfb"),r=n("9e1e"),a="toString",s=/./[a],c=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?c((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)})):s.name!=a&&c((function(){return s.call(this)}))},"8b97":function(t,e,n){var o=n("d3f4"),i=n("cb7c"),r=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},9093:function(t,e,n){var o=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},9744:function(t,e,n){"use strict";var o=n("4588"),i=n("be13");t.exports=function(t){var e=String(i(this)),n="",r=o(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"9fd9":function(t,e,n){"use strict";var o=n("0f5c"),i=n.n(o);i.a},a481:function(t,e,n){"use strict";var o=n("cb7c"),i=n("4bf8"),r=n("9def"),a=n("4588"),s=n("0390"),c=n("5f1b"),u=Math.max,l=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,m){return[function(o,i){var r=t(this),a=void 0==o?void 0:o[e];return void 0!==a?a.call(o,r,i):n.call(String(r),o,i)},function(t,e){var i=m(n,t,this,e);if(i.done)return i.value;var p=o(t),f=String(this),d="function"===typeof e;d||(e=String(e));var g=p.global;if(g){var b=p.unicode;p.lastIndex=0}var w=[];while(1){var y=c(p,f);if(null===y)break;if(w.push(y),!g)break;var E=String(y[0]);""===E&&(p.lastIndex=s(f,r(p.lastIndex),b))}for(var x="",N=0,A=0;A<w.length;A++){y=w[A];for(var O=String(y[0]),_=u(l(a(y.index),f.length),0),k=[],M=1;M<y.length;M++)k.push(h(y[M]));var j=y.groups;if(d){var C=[O].concat(k,_,f);void 0!==j&&C.push(j);var P=String(e.apply(void 0,C))}else P=v(O,f,_,k,j,e);_>=N&&(x+=f.slice(N,_)+P,N=_+O.length)}return x+f.slice(N)}];function v(t,e,o,r,a,s){var c=o+t.length,u=r.length,l=d;return void 0!==a&&(a=i(a),l=f),n.call(s,l,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var f=p(l/10);return 0===f?n:f<=u?void 0===r[f-1]?i.charAt(1):r[f-1]+i.charAt(1):n}s=r[l-1]}return void 0===s?"":s}))}}))},aa77:function(t,e,n){var o=n("5ca1"),i=n("be13"),r=n("79e5"),a=n("fdef"),s="["+a+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),p=function(t,e,n){var i={},s=r((function(){return!!a[t]()||c[t]()!=c})),u=i[t]=s?e(f):a[t];n&&(i[n]=u),o(o.P+o.F*s,"String",i)},f=p.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},abaa:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rightPanel",staticClass:"lan-setting",class:{show:t.show}},[n("div",{staticClass:"rightPanel-background"}),t._v(" "),n("div",{staticClass:"rightPanel",style:{"max-width":t.maxWidth+"px"}},[n("div",{staticClass:"handle-button",style:{top:t.buttonTop+"px"},on:{click:function(e){t.show=!t.show}}},[n("i",{class:t.show?"el-icon-close":"el-icon-setting"})]),t._v(" "),n("div",{staticClass:"rightPanel-items"},[t._t("default")],2)])])},i=[],r=(n("c5f6"),n("ed08")),a={name:"lanSetting",props:{clickNotClose:{default:!1,type:Boolean},buttonTop:{default:250,type:Number},maxWidth:{type:Number,default:260}},data:function(){return{show:!1}},watch:{show:function(t){t&&!this.clickNotClose&&this.addEventClick(),t?Object(r["a"])(document.body,"showRightPanel"):Object(r["b"])(document.body,"showRightPanel")}},mounted:function(){this.insertToBody()},beforeDestroy:function(){var t=this.$refs.rightPanel;t.remove()},methods:{addEventClick:function(){window.addEventListener("click",this.closeSidebar)},closeSidebar:function(t){var e=t.target.closest(".rightPanel");e||(this.show=!1,window.removeEventListener("click",this.closeSidebar))},insertToBody:function(){var t=this.$refs.rightPanel,e=document.querySelector("body");e.insertBefore(t,e.firstChild)}}},s=a,c=(n("9fd9"),n("5a37"),n("2877")),u=Object(c["a"])(s,o,i,!1,null,"390d38d9",null);e["a"]=u.exports},b39a:function(t,e,n){var o=n("d3f4");t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},b3fd:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("ac6a"),n("673e");var o=n("5a89"),i=function(t,e){void 0===e&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');var n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=e,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.mouseButtons={LEFT:o["i"].ROTATE,MIDDLE:o["i"].ZOOM,RIGHT:o["i"].PAN},this.target=new o["x"];var r=1e-6,a=new o["x"],s=1,c=i.NONE,u=i.NONE,l=new o["x"],p=new o["w"],f=new o["w"],d=new o["x"],h=0,m=new o["w"],v=new o["w"],g=0,b=0,w=new o["w"],y=new o["w"];this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;var E={type:"change"},x={type:"start"},N={type:"end"};this.handleResize=function(){var t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height};var A=function(){var t=new o["w"];return function(e,o){return t.set((e-n.screen.left)/n.screen.width,(o-n.screen.top)/n.screen.height),t}}(),O=function(){var t=new o["w"];return function(e,o){return t.set((e-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-o))/n.screen.width),t}}();function _(t){!1!==n.enabled&&(window.removeEventListener("keydown",_),u===i.NONE&&(t.keyCode!==n.keys[i.ROTATE]||n.noRotate?t.keyCode!==n.keys[i.ZOOM]||n.noZoom?t.keyCode!==n.keys[i.PAN]||n.noPan||(u=i.PAN):u=i.ZOOM:u=i.ROTATE))}function k(){!1!==n.enabled&&(u=i.NONE,window.addEventListener("keydown",_,!1))}function M(t){if(!1!==n.enabled){if(t.preventDefault(),t.stopPropagation(),c===i.NONE)switch(t.button){case n.mouseButtons.LEFT:c=i.ROTATE;break;case n.mouseButtons.MIDDLE:c=i.ZOOM;break;case n.mouseButtons.RIGHT:c=i.PAN;break;default:c=i.NONE}var e=u!==i.NONE?u:c;e!==i.ROTATE||n.noRotate?e!==i.ZOOM||n.noZoom?e!==i.PAN||n.noPan||(w.copy(A(t.pageX,t.pageY)),y.copy(w)):(m.copy(A(t.pageX,t.pageY)),v.copy(m)):(f.copy(O(t.pageX,t.pageY)),p.copy(f)),document.addEventListener("mousemove",j,!1),document.addEventListener("mouseup",C,!1),n.dispatchEvent(x)}}function j(t){if(!1!==n.enabled){t.preventDefault(),t.stopPropagation();var e=u!==i.NONE?u:c;e!==i.ROTATE||n.noRotate?e!==i.ZOOM||n.noZoom?e!==i.PAN||n.noPan||y.copy(A(t.pageX,t.pageY)):v.copy(A(t.pageX,t.pageY)):(p.copy(f),f.copy(O(t.pageX,t.pageY)))}}function C(t){!1!==n.enabled&&(t.preventDefault(),t.stopPropagation(),c=i.NONE,document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",C),n.dispatchEvent(N))}function P(t){if(!1!==n.enabled&&!0!==n.noZoom){switch(t.preventDefault(),t.stopPropagation(),t.deltaMode){case 2:m.y-=.025*t.deltaY;break;case 1:m.y-=.01*t.deltaY;break;default:m.y-=25e-5*t.deltaY;break}n.dispatchEvent(x),n.dispatchEvent(N)}}function S(t){if(!1!==n.enabled){switch(t.preventDefault(),t.touches.length){case 1:c=i.TOUCH_ROTATE,f.copy(O(t.touches[0].pageX,t.touches[0].pageY)),p.copy(f);break;default:c=i.TOUCH_ZOOM_PAN;var e=t.touches[0].pageX-t.touches[1].pageX,o=t.touches[0].pageY-t.touches[1].pageY;b=g=Math.sqrt(e*e+o*o);var r=(t.touches[0].pageX+t.touches[1].pageX)/2,a=(t.touches[0].pageY+t.touches[1].pageY)/2;w.copy(A(r,a)),y.copy(w);break}n.dispatchEvent(x)}}function T(t){if(!1!==n.enabled)switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:p.copy(f),f.copy(O(t.touches[0].pageX,t.touches[0].pageY));break;default:var e=t.touches[0].pageX-t.touches[1].pageX,o=t.touches[0].pageY-t.touches[1].pageY;b=Math.sqrt(e*e+o*o);var i=(t.touches[0].pageX+t.touches[1].pageX)/2,r=(t.touches[0].pageY+t.touches[1].pageY)/2;y.copy(A(i,r));break}}function R(t){if(!1!==n.enabled){switch(t.touches.length){case 0:c=i.NONE;break;case 1:c=i.TOUCH_ROTATE,f.copy(O(t.touches[0].pageX,t.touches[0].pageY)),p.copy(f);break}n.dispatchEvent(N)}}function L(t){!1!==n.enabled&&t.preventDefault()}this.rotateCamera=function(){var t,e=new o["x"],i=new o["r"],r=new o["x"],a=new o["x"],s=new o["x"],c=new o["x"];return function(){c.set(f.x-p.x,f.y-p.y,0),t=c.length(),t?(l.copy(n.object.position).sub(n.target),r.copy(l).normalize(),a.copy(n.object.up).normalize(),s.crossVectors(a,r).normalize(),a.setLength(f.y-p.y),s.setLength(f.x-p.x),c.copy(a.add(s)),e.crossVectors(c,l).normalize(),t*=n.rotateSpeed,i.setFromAxisAngle(e,t),l.applyQuaternion(i),n.object.up.applyQuaternion(i),d.copy(e),h=t):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),l.copy(n.object.position).sub(n.target),i.setFromAxisAngle(d,h),l.applyQuaternion(i),n.object.up.applyQuaternion(i)),p.copy(f)}}(),this.zoomCamera=function(){var t;c===i.TOUCH_ZOOM_PAN?(t=g/b,g=b,n.object.isPerspectiveCamera?l.multiplyScalar(t):n.object.isOrthographicCamera?(n.object.zoom*=t,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(v.y-m.y)*n.zoomSpeed,1!==t&&t>0&&(n.object.isPerspectiveCamera?l.multiplyScalar(t):n.object.isOrthographicCamera?(n.object.zoom/=t,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?m.copy(v):m.y+=(v.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){var t=new o["w"],e=new o["x"],i=new o["x"];return function(){if(t.copy(y).sub(w),t.lengthSq()){if(n.object.isOrthographicCamera){var o=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,r=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;t.x*=o,t.y*=r}t.multiplyScalar(l.length()*n.panSpeed),i.copy(l).cross(n.object.up).setLength(t.x),i.add(e.copy(n.object.up).setLength(t.y)),n.object.position.add(i),n.target.add(i),n.staticMoving?w.copy(y):w.add(t.subVectors(y,w).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(l.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,l.setLength(n.maxDistance)),m.copy(v)),l.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,l.setLength(n.minDistance)),m.copy(v)))},this.update=function(){l.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,l),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),a.distanceToSquared(n.object.position)>r&&(n.dispatchEvent(E),a.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(a.distanceToSquared(n.object.position)>r||s!==n.object.zoom)&&(n.dispatchEvent(E),a.copy(n.object.position),s=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=i.NONE,u=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),l.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(E),a.copy(n.object.position),s=n.object.zoom},this.dispose=function(){this.domElement.removeEventListener("contextmenu",L,!1),this.domElement.removeEventListener("mousedown",M,!1),this.domElement.removeEventListener("wheel",P,!1),this.domElement.removeEventListener("touchstart",S,!1),this.domElement.removeEventListener("touchend",R,!1),this.domElement.removeEventListener("touchmove",T,!1),document.removeEventListener("mousemove",j,!1),document.removeEventListener("mouseup",C,!1),window.removeEventListener("keydown",_,!1),window.removeEventListener("keyup",k,!1)},this.domElement.addEventListener("contextmenu",L,!1),this.domElement.addEventListener("mousedown",M,!1),this.domElement.addEventListener("wheel",P,!1),this.domElement.addEventListener("touchstart",S,!1),this.domElement.addEventListener("touchend",R,!1),this.domElement.addEventListener("touchmove",T,!1),window.addEventListener("keydown",_,!1),window.addEventListener("keyup",k,!1),this.handleResize(),this.update()};i.prototype=Object.create(o["e"].prototype),i.prototype.constructor=i},bd59:function(t,e,n){},c26b:function(t,e,n){"use strict";var o=n("86cc").f,i=n("2aeb"),r=n("dcbc"),a=n("9b43"),s=n("f605"),c=n("4a59"),u=n("01f9"),l=n("d53b"),p=n("7a56"),f=n("9e1e"),d=n("67ab").fastKey,h=n("b39a"),m=f?"_s":"size",v=function(t,e){var n,o=d(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,o){s(t,l,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=o&&c(o,n,t[u],t)}));return r(l.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=h(this,e),o=v(n,t);if(o){var i=o.n,r=o.p;delete n._i[o.i],o.r=!0,r&&(r.n=i),i&&(i.p=r),n._f==o&&(n._f=i),n._l==o&&(n._l=r),n[m]--}return!!o},forEach:function(t){h(this,e);var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){o(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!v(h(this,e),t)}}),f&&o(l.prototype,"size",{get:function(){return h(this,e)[m]}}),l},def:function(t,e,n){var o,i,r=v(t,e);return r?r.v=n:(t._l=r={i:i=d(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=r),o&&(o.n=r),t[m]++,"F"!==i&&(t._i[i]=r)),t},getEntry:v,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?l(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,l(1))}),n?"entries":"values",!n,!0),p(e)}}},c5f6:function(t,e,n){"use strict";var o=n("7726"),i=n("69a8"),r=n("2d95"),a=n("5dbc"),s=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,p=n("86cc").f,f=n("aa77").trim,d="Number",h=o[d],m=h,v=h.prototype,g=r(n("2aeb")(v))==d,b="trim"in String.prototype,w=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var n,o,i,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var a,c=e.slice(2),u=0,l=c.length;u<l;u++)if(a=c.charCodeAt(u),a<48||a>i)return NaN;return parseInt(c,o)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?c((function(){v.valueOf.call(n)})):r(n)!=d)?a(new m(w(e)),n,h):w(e)};for(var y,E=n("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)i(m,y=E[x])&&!i(h,y)&&p(h,y,l(m,y));h.prototype=v,v.constructor=h,n("2aba")(o,d,h)}},d545:function(t,e,n){"use strict";n("ac6a"),n("28a5"),n("c5f6");e["a"]={getPlusOrMinus:function(){var t=Math.random()-.5;return t<0?-1:1},getRandomInt:function(t){var e=Math.random()*t;return Number(e.toFixed(0))},solveQuadraticEquation:function(t,e,n){var o=Math.pow(e,2)-4*t*n;return o<0?[]:0===o?[e/2/t*-1]:[(-1*e+Math.sqrt(o))/2/t,(-1*e-Math.sqrt(o))/2/t]},VectorOperation:function(t,e,n){var o,i;return o="string"===typeof t?[Number(t.split(",")[0]),Number(t.split(",")[1])]:t,i="string"===typeof e?[Number(e.split(",")[0]),Number(e.split(",")[1])]:e,"+"===n?[i[0]+o[0],i[1]+o[1]]:"-"===n?[i[0]-o[0],i[1]-o[1]]:void 0},getNormalDistribution:function(t,e){var n=Number(t),o=Number(e),i=Math.random(),r=Math.random(),a=Math.sqrt(-2*Math.log(i)),s=2*Math.PI*r,c=a*Math.sin(s),u=n+c*o;return Number(u.toFixed(4))},getEuclideanDistance:function(t,e){var n=t.split(","),o=e.split(","),i=0;return n.forEach((function(t,e){var r=Math.pow(Number(n[e])-Number(o[e]),2);i+=r})),i=Math.sqrt(i),i},getMinkowskiDistance:function(t,e,n){var o=t.split(","),i=e.split(","),r=Number(n);if(r){var a=0;return o.forEach((function(t,e){var r=Math.abs(o[e]-i[e]);a+=Math.pow(r,n)})),a=Math.pow(a,1/n),a}if(0===r){var s=[];return o.forEach((function(t,e){var n=Math.abs(o[e]-i[e]);s.push(n)})),Math.max.apply(Math,s)}},getCosineSimilarity:function(t,e){var n=t.split(","),o=e.split(","),i=0,r=0,a=0;n.forEach((function(t,e){i+=n[e]*o[e],r+=Math.pow(n[e],2),a+=Math.pow(o[e],2)}));var s=i/(Math.sqrt(r)*Math.sqrt(a));return s}}},e0b8:function(t,e,n){"use strict";var o=n("7726"),i=n("5ca1"),r=n("2aba"),a=n("dcbc"),s=n("67ab"),c=n("4a59"),u=n("f605"),l=n("d3f4"),p=n("79e5"),f=n("5cc5"),d=n("7f20"),h=n("5dbc");t.exports=function(t,e,n,m,v,g){var b=o[t],w=b,y=v?"set":"add",E=w&&w.prototype,x={},N=function(t){var e=E[t];r(E,t,"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof w&&(g||E.forEach&&!p((function(){(new w).entries().next()})))){var A=new w,O=A[y](g?{}:-0,1)!=A,_=p((function(){A.has(1)})),k=f((function(t){new w(t)})),M=!g&&p((function(){var t=new w,e=5;while(e--)t[y](e,e);return!t.has(-0)}));k||(w=e((function(e,n){u(e,w,t);var o=h(new b,e,w);return void 0!=n&&c(n,v,o[y],o),o})),w.prototype=E,E.constructor=w),(_||M)&&(N("delete"),N("has"),v&&N("get")),(M||O)&&N(y),g&&E.clear&&delete E.clear}else w=m.getConstructor(e,t,v,y),a(w.prototype,n),s.NEED=!0;return d(w,t),x[t]=w,i(i.G+i.W+i.F*(w!=b),x),g||m.setStrong(w,t,v),w}},ed08:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));n("3b2b"),n("4917"),n("4f7f"),n("5df3"),n("1c4c"),n("28a5"),n("ac6a"),n("456d"),n("f576"),n("a481"),n("7618"),n("6b54");function o(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function i(t,e){o(t,e)||(t.className+=" "+e)}function r(t,e){if(o(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}},f1ae:function(t,e,n){"use strict";var o=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?o.f(t,e,i(0,n)):t[e]=n}},f576:function(t,e,n){"use strict";var o=n("5ca1"),i=n("2e08"),r=n("a25f"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);o(o.P+o.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);