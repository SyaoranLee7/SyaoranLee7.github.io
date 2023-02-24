import Vue from 'vue'
import App from './App'
import * as filters from './filters'
import common from '@/common/common'


Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

Vue.config.productionTip = false
App.mpType = 'app'
// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

import Mixin from './polyfill/mixins';
Vue.mixin(Mixin);

// import Mixin from './polyfill/mixins';
// Vue.mixin(Mixin);


// vuex使用
import store from '@/store'

// vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')

Vue.mixin(vuexStore)

Vue.prototype.$common = common

const app = new Vue({
  store,
  ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)
console.log(Vue.prototype,'显示数据')
app.$mount();
