import Vue from 'vue'
import { api_spec } from "@/api/utils"

/**
 * 设置医嘱
 * @param {*} params 
 */
 export function setMsg(params) {
    return Vue.prototype.$u.post3rd('', params);
}



/**
 * 获取三方地址
 * @param {*} params 
 * @returns 
 */
export function getUserBy3rds(params) {
    return Vue.prototype.$u.get3rdUser('', params);
}
