import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"
/**
 * 报告解读列表
 * @param {*} params 
 */
export function performServiceTask(params) {
    return Vue.prototype.$u.post(api_spec.app + '/h/app/serviceTask/performServiceTask', params);
}


/**
 * 获取数据历史
 * @param {*} params 
 * @returns 
 */
export function queryDataHistoryById(params) {
    return Vue.prototype.$u.post(api_spec.app + '/h/app/serviceTask/taskRecordDataList', params);
}


