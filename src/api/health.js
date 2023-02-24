import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"





/**
 * (档案/体检项目)列表 
 * @param {*} params 
 */
 export function dataModelConfigList(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/mt/app/tableCfg/query', params);
}



/**
 * 表填写结果
 * @param {*} params 
 */
 export function userHealthyArchivesData(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userHealthyArchivesData/infoByUser', params);
}

/**
 * 配置字段
 * @param {*} params 
 */
 export function columnCfgList(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/mt/app/columnCfg/listDetails', params);
}



/**
 * 配置字段
 * @param {*} params 
 */
 export function userHealthyArchivesDataSave(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userHealthyArchivesData/save2update', params);
}




// 报告列表

export function userTestReportDataList(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userTestReportData/query', params);
}


// 报告结果
export function getDetailFullByReport(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userTestReportData/getDetailFullByReport', params);
}