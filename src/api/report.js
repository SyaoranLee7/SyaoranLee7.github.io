

import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"
/**
 * 报告解读列表
 * @param {*} params 
 */
 export function reportList(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userTestReportData/getReportResultListByReportId', params);
}


/**
 * 生成和获取用户每日小结数据
 * @param {*} params 
 * @returns 
 */
export function userSummaryDayReportList(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userSummaryDay/generate', params);
}



/**
 * 获取用户小结
 * @param {*} params 
 * @returns 
 */
export function getDataUserSummaryDay(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userSummaryDay/getData', params);
}

/**
 * 获取历史用户小结
 * @param {*} params 
 * @returns 
 */
export function getDataUserSummaryDayList(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userSummaryDay/list', params);
}

/**
 * 根据元数据key获取小结
 * @param {*} params 
 * @returns 
 */
export function getUserSummaryDataByMdcode(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userSummaryDay/getUserSummaryDataByMdcode', params);
}


