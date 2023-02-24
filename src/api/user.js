import Vue from 'vue'
const serviceAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"

/**
 * 获取用户信息
 * @param {*} params
 */
 export function getUserInfo (params) {
    return Vue.prototype.$u.post(api_spec.app +'/app/user/info/get', params);
}
