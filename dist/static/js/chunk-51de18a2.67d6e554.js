(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51de18a2"],{"11e9":function(t,e,a){var n=a("52a7"),r=a("4630"),i=a("6821"),s=a("6a99"),o=a("69a8"),c=a("c69a"),u=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?u:function(t,e){if(t=i(t),e=s(e,!0),c)try{return u(t,e)}catch(a){}if(o(t,e))return r(!n.f.call(t,e),t[e])}},2231:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lan-main"},[t._m(0),t._v(" "),a("div",{staticClass:"lan-content"},[a("div",{staticClass:"setting-base"},[a("div",{staticClass:"title"},[t._v("参数设置")]),t._v(" "),a("el-form",{attrs:{model:t.inputData,"label-width":"120px","label-position":"left"}},[a("el-form-item",{attrs:{label:"函数"}},[a("el-select",{attrs:{placeholder:"请选择函数"},model:{value:t.inputData.type,callback:function(e){t.$set(t.inputData,"type",e)},expression:"inputData.type"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.run}},[t._v("\n                显示图像\n            ")]),t._v(" "),1===t.inputData.type?a("div",[t._v("\n                r = [sin(t) * sqrt(abs(cos(t)))] / [sin(t) + 5/7] -2sin(t) + 2\n            ")]):t._e()],1),t._v(" "),t._m(1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lan-main-head"},[a("div",{staticClass:"title"},[t._v("各类心形线")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-result"},[a("div",{staticClass:"title"},[t._v("结果展示")]),t._v(" "),a("div",{staticClass:"result"},[a("div",{attrs:{id:"result"}})])])}],i=(a("d545"),Math.PI),s={getPoints:function(t){var e=[];switch(t){case 1:for(var a=-2*i;a<2*i;a+=.01){var n=Math.sin(a)*Math.sqrt(Math.abs(Math.cos(a))),r=Math.sin(a)+1.4,s=n/r-2*Math.sin(a)+2;e.push([s*Math.cos(a),s*Math.sin(a)])}break;default:}return console.log("list:",e),e}},o=s,c={data:function(){return{inputData:{},options:[{label:"函数1",value:1}],pointsData:[]}},computed:{},methods:{run:function(){this.pointsData=o.getPoints(this.inputData.type),this.initEchart()},initEchart:function(t){var e=a("313e"),n=e.init(document.getElementById("result"),{},{renderer:"svg"}),r={type:"value",axisTick:{show:!1}},i={type:"scatter",data:this.pointsData,symbolSize:2,silent:!0},s={xAxis:r,yAxis:r,series:i};n.setOption(s)}},created:function(){}},u=c,l=(a("ad70"),a("2877")),f=Object(l["a"])(u,n,r,!1,null,"53e82a3b",null);e["default"]=f.exports},"5dbc":function(t,e,a){var n=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var i,s=e.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&n(i)&&r&&r(t,i),t}},"8b97":function(t,e,a){var n=a("d3f4"),r=a("cb7c"),i=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},9093:function(t,e,a){var n=a("ce10"),r=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},"9a45":function(t,e,a){},aa77:function(t,e,a){var n=a("5ca1"),r=a("be13"),i=a("79e5"),s=a("fdef"),o="["+s+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t,e,a){var r={},o=i((function(){return!!s[t]()||c[t]()!=c})),u=r[t]=o?e(p):s[t];a&&(r[a]=u),n(n.P+n.F*o,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},ad70:function(t,e,a){"use strict";var n=a("9a45"),r=a.n(n);r.a},c5f6:function(t,e,a){"use strict";var n=a("7726"),r=a("69a8"),i=a("2d95"),s=a("5dbc"),o=a("6a99"),c=a("79e5"),u=a("9093").f,l=a("11e9").f,f=a("86cc").f,p=a("aa77").trim,h="Number",v=n[h],d=v,b=v.prototype,m=i(a("2aeb")(b))==h,_="trim"in String.prototype,M=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():p(e,3);var a,n,r,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if(s=c.charCodeAt(u),s<48||s>r)return NaN;return parseInt(c,n)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof v&&(m?c((function(){b.valueOf.call(a)})):i(a)!=h)?s(new d(M(e)),a,v):M(e)};for(var y,g=a("9e1e")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;g.length>N;N++)r(d,y=g[N])&&!r(v,y)&&f(v,y,l(d,y));v.prototype=b,b.constructor=v,a("2aba")(n,h,v)}},d545:function(t,e,a){"use strict";a("ac6a"),a("28a5"),a("c5f6");e["a"]={getPlusOrMinus:function(){var t=Math.random()-.5;return t<0?-1:1},getRandomInt:function(t){var e=Math.random()*t;return Number(e.toFixed(0))},solveQuadraticEquation:function(t,e,a){var n=Math.pow(e,2)-4*t*a;return n<0?[]:0===n?[e/2/t*-1]:[(-1*e+Math.sqrt(n))/2/t,(-1*e-Math.sqrt(n))/2/t]},VectorOperation:function(t,e,a){var n,r;return n="string"===typeof t?[Number(t.split(",")[0]),Number(t.split(",")[1])]:t,r="string"===typeof e?[Number(e.split(",")[0]),Number(e.split(",")[1])]:e,"+"===a?[r[0]+n[0],r[1]+n[1]]:"-"===a?[r[0]-n[0],r[1]-n[1]]:void 0},getNormalDistribution:function(t,e){var a=Number(t),n=Number(e),r=Math.random(),i=Math.random(),s=Math.sqrt(-2*Math.log(r)),o=2*Math.PI*i,c=s*Math.sin(o),u=a+c*n;return Number(u.toFixed(4))},getEuclideanDistance:function(t,e){var a=t.split(","),n=e.split(","),r=0;return a.forEach((function(t,e){var i=Math.pow(Number(a[e])-Number(n[e]),2);r+=i})),r=Math.sqrt(r),r},getMinkowskiDistance:function(t,e,a){var n=t.split(","),r=e.split(","),i=Number(a);if(i){var s=0;return n.forEach((function(t,e){var i=Math.abs(n[e]-r[e]);s+=Math.pow(i,a)})),s=Math.pow(s,1/a),s}if(0===i){var o=[];return n.forEach((function(t,e){var a=Math.abs(n[e]-r[e]);o.push(a)})),Math.max.apply(Math,o)}},getCosineSimilarity:function(t,e){var a=t.split(","),n=e.split(","),r=0,i=0,s=0;a.forEach((function(t,e){r+=a[e]*n[e],i+=Math.pow(a[e],2),s+=Math.pow(n[e],2)}));var o=r/(Math.sqrt(i)*Math.sqrt(s));return o}}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);