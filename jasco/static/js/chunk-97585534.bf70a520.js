(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97585534"],{"11f6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-navbar"},[a("div",{staticClass:"logo",on:{click:function(e){return t.goMenu("home")}}},[a("img",{attrs:{src:i("9d64")}})]),t._v(" "),a("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[a("div",{staticClass:"menu menu-dropdown"},[a("div",{staticClass:"menu-btn"},[t._v("Services")]),t._v(" "),a("img",{staticClass:"menu-icon",attrs:{src:i("426d")}})]),t._v(" "),a("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){return t.goMenu("SmartoDoor")}}},[a("span",{staticStyle:{display:"block"}},[t._v("SmartoDoor")])]),t._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.goMenu("Freight")}}},[a("span",{staticStyle:{display:"block"}},[t._v("Freight Solutions")])]),t._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.goMenu("WareHousing")}}},[a("span",{staticStyle:{display:"block"}},[t._v("Warehousing Services")])]),t._v(" "),a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.goMenu("Additional")}}},[a("span",{staticStyle:{display:"block"}},[t._v("Additional Services")])])],1)],1),t._v(" "),a("div",{staticClass:"menu about",on:{click:function(e){return t.goMenu("About")}}},[a("div",{staticClass:"menu-btn"},[t._v("About")])]),t._v(" "),a("div",{staticClass:"menu login"},[a("div",{staticClass:"menu-btn",on:{click:t.goLogin}},[t._v("Log in")])]),t._v(" "),a("jasco-email",{ref:"jascoEmail"})],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"jasco-email",attrs:{title:"",visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"title"},[t._v("GET A SOLUTION")]),t._v(" "),i("el-form",[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"First Name"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"Last Name"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"Email"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"Phone Number"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"Commodity"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.commodity,callback:function(e){t.$set(t.form,"commodity",e)},expression:"form.commodity"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"HS code"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.hs,callback:function(e){t.$set(t.form,"hs",e)},expression:"form.hs"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"Destination"}},[i("mt-input",{attrs:{width:t.inputWidth},model:{value:t.form.destination,callback:function(e){t.$set(t.form,"destination",e)},expression:"form.destination"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"Your message"}},[i("mt-input",{attrs:{type:"textarea",rows:4,width:t.inputWidth},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)},n=[],r={name:"JascoEmail",data:function(){return{form:{firstName:"",lastName:"",email:"",phone:"",commodity:"",hs:"",destination:"",message:""},dialogVisible:!1,inputWidth:"calc(100% - 20px)"}},created:function(){},mounted:function(){},methods:{open:function(){this.dialogVisible=!0}}},l=r,c=(i("b5af"),i("2877")),u=Object(c["a"])(l,s,n,!1,null,"352d29be",null),d=u.exports,m={name:"DashboardNavbar",data:function(){return{}},components:{JascoEmail:d},created:function(){},mounted:function(){},methods:{goMenu:function(t){"SmartoDoor"===t?this.$router.push("/SmartoDoor"):"Freight"===t?this.$router.push("/Freight"):"WareHousing"===t?this.$router.push("/WareHousing"):"Additional"===t?this.$router.push("/Additional"):"About"===t?this.$router.push("/About"):"home"===t&&this.$router.push("/index")},openEmail:function(){this.$refs.jascoEmail.open()},goLogin:function(){this.$router.push("/login")}}},v=m,p=(i("1826"),i("43fd"),Object(c["a"])(v,a,o,!1,null,"04872ce6",null));e["a"]=p.exports},1826:function(t,e,i){"use strict";i("64d9")},"27c1":function(t,e,i){t.exports=i.p+"static/img/wh2.9597eabd.png"},"40f0":function(t,e,i){},"426d":function(t,e,i){t.exports=i.p+"static/img/dropdown.3a824ff0.svg"},"43fd":function(t,e,i){"use strict";i("a03c")},"64d9":function(t,e,i){},6696:function(t,e,i){"use strict";i("40f0")},"6bc2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:i("9d64")}})]),t._v(" "),a("div",{staticClass:"footer-text"},[a("div",{staticClass:"footer-text-inner"},[a("p",[t._v("Room 505, E Hall, No. 151 Yuehua Road,")]),t._v(" "),a("p",[t._v("Huli District,")]),t._v(" "),a("p",[t._v("Xiamen City")])])]),t._v(" "),a("div",{staticClass:"footer-text"},[a("p",[t._v("E-mail:")]),t._v(" "),a("p",[t._v("jason@cljasco.com")]),t._v(" "),a("p",[t._v("sales@cljasco.com")])]),t._v(" "),a("div",{staticClass:"footer-text",staticStyle:{"border-right":"0px solid #D3D3D3"}},[a("p",[t._v("Mob/WeChat/WhatsApp:")]),t._v(" "),a("p",[t._v("+86 138 5009 3595")])])])}],s={name:"DashboardFooter",data:function(){return{}},created:function(){},mounted:function(){},methods:{}},n=s,r=(i("6696"),i("2877")),l=Object(r["a"])(n,a,o,!1,null,"51a655cf",null);e["a"]=l.exports},"84b8":function(t,e,i){t.exports=i.p+"static/img/wh3.db0bc5f2.jpeg"},"87ce":function(t,e,i){},9353:function(t,e,i){"use strict";i("87ce")},"9c74":function(t,e,i){},"9d64":function(t,e,i){t.exports=i.p+"static/img/logo.9ad7f383.png"},a03c:function(t,e,i){t.exports={menuText:"rgba(25,28,34,0.8)",menuActiveText:"#4D9BD5",subMenuActiveText:"#4D9BD5",menuBg:"#fff",menuHover:"rgba(77,155,213,0.2)",subMenuBg:"#F4F5F9",subMenuHover:"rgba(77,155,213,0.2)",sideBarWidth:"240px",activeBg:"rgba(77,155,213,0.1)",hoverBg:"rgba(25,28,34,0.05)"}},a881:function(t,e,i){t.exports=i.p+"static/img/wh1.5ce2fe60.png"},b5af:function(t,e,i){"use strict";i("9c74")},d0a3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ware-housing"},[i("navbar"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("dashbord-footer")],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"j1"},[i("div",{staticClass:"title"},[t._v("Warehousing & Logistics")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j2"},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-text"},[a("div",{staticClass:"title"},[t._v("Warehouse & Supply Chain")]),t._v(" "),a("div",{staticClass:"text"},[t._v("\n          Warehouse and supply chain plays an important role for an industry to grow from primary to bigger development.\n          Supply chain system helps enterprises to manage and optimize the distribution process,\n          and makes the order processing more organized.\n          Warehouse as a carrier plays a vital role in implementation and simplification.\n          Our agent network warehouse will provide a good foundation for your business development layout around the world,\n          while providing efficient and cost-effective warehouse operation services for your overall industrial chain.\n        ")])]),t._v(" "),a("div",{staticClass:"item-image"},[a("img",{attrs:{src:i("a881")}})])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-text"},[a("div",{staticClass:"title"},[t._v("More Space, More Types")]),t._v(" "),a("div",{staticClass:"text"},[t._v("\n          With more than 5 million sq. ft. of warehouse space in key locations,\n          our robust warehouse solutions allow you to manage your inventory and distribute product quickly.\n          We’ll keep your planned and unplanned freight moving so you can maximize your supply chain spend.\n        ")])]),t._v(" "),a("div",{staticClass:"item-image"},[a("img",{attrs:{src:i("27c1")}})])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-text"},[a("div",{staticClass:"title"},[t._v("Systematic Management")]),t._v(" "),a("div",{staticClass:"text"},[t._v("\n          Our warehouse system will enable you to have more visual results of warehouse inventory situation\n          and order management analysis. Whether at the origin or destination,\n          you can maintain the clearest and most honest data about your products.\n          Our robust warehouse solutions allow you to manage your inventory and distribute product quickly.\n          We’ll keep your planned and unplanned freight moving so you can maximize your supply chain spend.\n        ")])]),t._v(" "),a("div",{staticClass:"item-image"},[a("img",{attrs:{src:i("84b8")}})])])])}],s=i("11f6"),n=i("6bc2"),r={name:"WareHousing",components:{Navbar:s["a"],DashbordFooter:n["a"]},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},l=r,c=(i("9353"),i("2877")),u=Object(c["a"])(l,a,o,!1,null,"2bbb9bcd",null);e["default"]=u.exports}}]);