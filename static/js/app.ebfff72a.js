(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(n,e,t){n.exports=t("56d7")},2252:function(n,e,t){},2616:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),c=(t("b20f"),t("f5df"),t("7cb2"),t("7618")),a=(t("ac6a"),/Chrome/g.test(window.navigator.userAgent)),r=!1,i="testing"===Object({NODE_ENV:"production",VUE_APP_BASE_API:"/prod-api",BASE_URL:"/"}).PACK_ENV&&!1,l={log:"inherit",info:"inherit",warn:"#f0ad4e",error:"#d9534f"},u={log:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];if(!i)return!(!r||!n)&&void(a?t&&t.length>0?(console.groupCollapsed("%c ".concat(n),"font-weight: bold; color: ".concat(l.log)),t.forEach((function(n){console.log(n)})),console.groupEnd()):console.log("%c ".concat(n),"font-weight: bold; color: ".concat(l.log)):console.log.apply(console,[n].concat(t)));console.log(n,t)},info:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];if(!i)return!(!r||!n)&&void(a?t&&t.length>0?(console.groupCollapsed("%c ".concat(n),"font-weight: bold; color: ".concat(l.info)),t.forEach((function(n){console.log(n)})),console.groupEnd()):console.log("%c ".concat(n),"font-weight: bold; color: ".concat(l.info)):console.log.apply(console,[n].concat(t)));console.log(n,t)},warn:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];if(!i)return!(!r||!n)&&void(a?t&&t.length>0?(console.groupCollapsed("%c ".concat(n),"font-weight: bold; color: ".concat(l.warn)),t.forEach((function(n){console.warn(n)})),console.groupEnd()):console.log("%c ".concat(n),"font-weight: bold; color: ".concat(l.warn)):console.log.apply(console,[n].concat(t)));console.log(n,t)},error:function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];if(i)console.log(n,t);else{if(!r||!n)return!1;if(a){if(t&&t.length>0){if(console.groupCollapsed("%c ".concat(n),"font-weight: bold; color: ".concat(l.error)),t.forEach((function(n){console.error(n)})),console.groupEnd(),r){if("object"===Object(c["a"])(n))throw n;t.forEach((function(n){if("object"===Object(c["a"])(n))throw n}))}}else if(console.error("%c ".concat(n),"font-weight: bold; color: ".concat(l.error)),r&&"object"===Object(c["a"])(n))throw n}else console.log.apply(console,[n].concat(t))}}},s=t("5c96"),f=t.n(s),h=(t("0fae"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),m=[],d={name:"App"},p=d,b=t("2877"),g=Object(b["a"])(p,h,m,!1,null,null,null),v=g.exports,k=t("8c4f"),w=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-wrapper"},[t("top-bar"),n._v(" "),t("div",{staticClass:"main-container"},[t("app-main")],1)],1)},_=[],C=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"lan-topbar"},[t("div",{staticClass:"lan-topbar-main"},[t("lan-topmenu",{staticClass:"topmenu"})],1)])},y=[],E=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"lan-topmenu"},n._l(n.menu,(function(e){return t("div",{key:e.name},[e.children?t("el-dropdown",{attrs:{"show-timeout":0,"hide-timeout":0},on:{command:n.handleCommand}},[t("div",{staticClass:"menu-item",class:{"is-active":n.active===e.name}},[n._v(n._s(e.meta.title))]),n._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},n._l(e.children,(function(e){return t("el-dropdown-item",{key:e.name,attrs:{command:e}},[n._v("\n                    "+n._s(e.meta.title)+"\n                ")])})),1)],1):t("div",{staticClass:"menu-item",class:{"is-active":n.active===e.name},on:{click:function(t){return n.handleClick(e)}}},[n._v("\n            "+n._s(e.meta.title)+"\n        ")])],1)})),0)},A=[],M=(t("28a5"),t("7f7f"),{name:"LanTopMenu",data:function(){return{menu:[],active:"Home"}},computed:{},created:function(){var n=this,e=en.options.routes.filter((function(n){return!n.hidden})),t=e.map((function(n){if(n.children&&n.children.length){n.children.map((function(e){return e.parent={name:n.name,path:n.path},e}));return n}return n}));this.menu=t;var o=this.$route.path.split("/")[1];t.forEach((function(e){e.path==="/"+o&&(n.active=e.name)}))},methods:{handleCommand:function(n){this.active=n.parent.name;var e=n.parent.path+"/"+n.path;this.$router.push(e)},handleClick:function(n){this.active=n.name,this.$router.push(n.path)}}}),j=M,O=(t("bb95"),t("ec86"),Object(b["a"])(j,E,A,!1,null,"024fadd6",null)),P=O.exports,$={name:"TopBar",components:{lanTopmenu:P}},S=$,T=(t("6e35"),Object(b["a"])(S,C,y,!1,null,"6cb04bd0",null)),L=T.exports,B=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"app-main"},[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t("router-view",{key:n.key})],1)],1)},D=[],x={name:"AppMain",computed:{key:function(){return this.$route.path}}},N=x,R=(t("95dc"),Object(b["a"])(N,B,D,!1,null,"60e86d5a",null)),G=R.exports,I={name:"Layout",components:{TopBar:L,AppMain:G}},K=I,U=(t("fd28"),Object(b["a"])(K,w,_,!1,null,"5a1706cf",null)),V=U.exports,z={path:"/math",component:V,redirect:"noRedirect",name:"Math",meta:{title:"数学"},children:[{path:"NormalDistribution",component:function(){return t.e("chunk-6f7b3ecf").then(t.bind(null,"e080"))},name:"NormalDistribution",meta:{title:"正态分布"}},{path:"MinkowskiDistance",component:function(){return t.e("chunk-e346050c").then(t.bind(null,"77a9"))},name:"MinkowskiDistance",meta:{title:"闵可夫斯基距离"}},{path:"SpaceGeometry",component:function(){return t.e("chunk-4f63b466").then(t.bind(null,"cab8"))},name:"SpaceGeometry",meta:{title:"空间几何"}},{path:"QuadraticSurface",component:function(){return t.e("chunk-558d753e").then(t.bind(null,"2ba3"))},name:"QuadraticSurface",meta:{title:"二次曲面"}},{path:"Integration",component:function(){return t.e("chunk-179ed411").then(t.bind(null,"0b4c"))},name:"Integration",meta:{title:"定积分计算"}}]},H=z,J={path:"/algorithm",component:V,redirect:"noRedirect",name:"Algorithm",meta:{title:"算法"},children:[{path:"kMeans",component:function(){return t.e("chunk-e7e74680").then(t.bind(null,"f0c9"))},name:"kMeans",meta:{title:"K-Means算法"}},{path:"kMeans3d",component:function(){return t.e("chunk-85df68f0").then(t.bind(null,"2914"))},name:"kMeans3D",meta:{title:"K-Means算法-3D"}},{path:"LevelCohesion",component:function(){return t.e("chunk-174c6778").then(t.bind(null,"cf5c"))},name:"LevelCohesion",meta:{title:"LevelCohesion层次凝聚算法"}},{path:"Prim",component:function(){return t.e("chunk-39bbdfef").then(t.bind(null,"3e0f"))},name:"Prim",meta:{title:"Prim普里姆算法"}},{path:"AStar",component:function(){return t.e("chunk-478007fa").then(t.bind(null,"7095"))},name:"AStar",meta:{title:"A-Star路径搜索算法"}}]},Q=J,q={path:"/three",component:V,redirect:"noRedirect",name:"Three",meta:{title:"Three.js"},children:[{path:"Astronomy",component:function(){return Promise.all([t.e("chunk-319494fc"),t.e("chunk-6b687f70")]).then(t.bind(null,"75b0"))},name:"Astronomy",meta:{title:"天体运动"}},{path:"Maze",component:function(){return Promise.all([t.e("chunk-319494fc"),t.e("chunk-1eb75112")]).then(t.bind(null,"b13d"))},name:"Maze",meta:{title:"迷宫"}},{path:"TwoBody",component:function(){return Promise.all([t.e("chunk-319494fc"),t.e("chunk-61b49d5f")]).then(t.bind(null,"05cd"))},name:"TwoBody",meta:{title:"二体问题(i)"}},{path:"Cube",component:function(){return Promise.all([t.e("chunk-319494fc"),t.e("chunk-791791de")]).then(t.bind(null,"3610"))},name:"Cube",meta:{title:"异次元杀阵(i)"}}]},F=q,W={path:"/application",component:V,redirect:"noRedirect",name:"Application",meta:{title:"应用"},children:[{path:"GameOfLife",component:function(){return Promise.all([t.e("chunk-f82ed5c0"),t.e("chunk-9c9fd49a")]).then(t.bind(null,"1461"))},name:"GameOfLife",meta:{title:"生命游戏"}}]},X=W;o["default"].use(k["a"]);var Y=[{path:"/404",component:function(){return t.e("chunk-7fd45234").then(t.bind(null,"8cdb"))},hidden:!0},{path:"/",component:V,redirect:"/home",hidden:!0,children:[{path:"home",name:"",component:function(){return t.e("chunk-cff51ea4").then(t.bind(null,"7abe"))},meta:{title:"首页"}}]},{path:"/home",name:"Home",component:function(){return t.e("chunk-cff51ea4").then(t.bind(null,"7abe"))},meta:{title:"首页"}},H,Q,F,X,{path:"*",redirect:"/404",hidden:!0}],Z=function(){return new k["a"]({scrollBehavior:function(){return{y:0}},routes:Y})},nn=Z(),en=nn;o["default"].use(f.a);var tn=function n(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.installed||(e.logger=u,e.prototype.$logger=u)};o["default"].use(tn),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:en,render:function(n){return n(v)}})},"59ea":function(n,e,t){},"660f":function(n,e,t){},"6e35":function(n,e,t){"use strict";var o=t("7ec9"),c=t.n(o);c.a},"7ec9":function(n,e,t){},"95dc":function(n,e,t){"use strict";var o=t("2616"),c=t.n(o);c.a},b20f:function(n,e,t){},bb95:function(n,e,t){"use strict";var o=t("660f"),c=t.n(o);c.a},ec86:function(n,e,t){"use strict";var o=t("2252"),c=t.n(o);c.a},fd28:function(n,e,t){"use strict";var o=t("59ea"),c=t.n(o);c.a}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);