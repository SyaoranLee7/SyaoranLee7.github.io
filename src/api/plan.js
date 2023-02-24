import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"


/**
 * 服务分类列表   /h/mgr/serviceGroup/list
 * @param {*} params 
 */
 export function serviceGroupList(params) {  
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/service/serviceGroupList', params);
}


/**
 * 服务内容列表 
 * @param {*} params 
 */
 export function serviceList(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/service/query', params);
}


// 风险列表
export function myRiskList(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/risk/getRiskListByUser', params);
}

//风险详情


export function myRiskInfo(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/risk/info', params);
}

// 根据用户风险获取服务列表  
export function serviceListByRisk(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/service/serviceListByRisk', params);
}

//健康任务目标服务
export function queryServiceTask(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/serviceTask/queryServiceTask', params);
}

//执行任务


export function exeServiceTask(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/serviceTask/exeServiceTask', params);
}



//根据量表结果获取风险列表

export function getRiskListByScaleResult(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/risk/getRiskListByScaleResult', params);
}


export function serviceAddBatch(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/service/addBatch', params);
}


export function userServiceGroupAdd(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userServiceGroup/addOne', params);
}





