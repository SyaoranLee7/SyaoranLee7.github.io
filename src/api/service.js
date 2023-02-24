import Vue from 'vue'
const serviceAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"


/**
 * 第三方服务
 * @param {*} params 
 */
 export function registerThirdService(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userOpenThirdService/registerThirdService', params);
}

/**
 * 第三方登录
 * @param {*} params 
 * @returns 
 */
export function thirdJumpAuth(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userOpenThirdService/thirdJumpAuth', params);
}


/**
 * 获取每日目标数据
 * @param {*} params 
 * @returns 
 */
 export function getUserTargetDataByDay(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userTargetData/getUserTargetDataByDay', params);
}



/**
 * 查询检查项目
 * @param {*} params 
 * @returns 
 */
 export function queryHtp(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/htp/query', params);
}


/**
 * 
 * @param {*} params 
 * @returns 
 */
export function getMnToken(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userOpenThirdService/getMnToken', params);
}


/**
 * 查询食物
 * @param {*} params 
 * @returns 
 */
export function queryFoods(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/food/query', params);
}


/**
 * 运动
 * @param {*} params 
 * @returns 
 */
export function querySports(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/sport/query', params);
}
