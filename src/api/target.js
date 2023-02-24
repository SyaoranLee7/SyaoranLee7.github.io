import Vue from 'vue'
const serviceAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"


/**
 * 查询目标
 * @param {*} params 
 */
 export function queryServiceGroup(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/serviceGroup/list', params);
}


/**
 * 添加单个服务
 * @param {*} params 
 * @returns 
 */
export function addUserServiceGroup(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userServiceGroup/addOne', params);
}



export function queryUserServiceGroup(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userServiceGroup/list', params);
}




export function getUserServiceInfoByCode(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/serviceGroup/infoByCode', params);
}


