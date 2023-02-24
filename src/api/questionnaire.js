


import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"





/**
 * 量表列表
 * @param {*} params 
 */
 export function scaleConfigList(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/scaleConfig/query', params);
}

//填写量表 /h/mgr/scaleResult/queryResult


export function scaleConfigQueryResult(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/scaleResult/myScaleResultQuery', params);
}




/**
 * 量表列表
 * @param {*} params 
 */
 export function infoFull(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/scaleConfig/infoFull', params);
}


/**
 * 量表填写
 * @param {*} params 
 */
 export function startWrite2ItemBatch(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/scaleResult/writeScale2Item', params);
}


//根据量表结果获取风险列表

export function getRiskByScaleResult(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/risk/getRiskByScaleResult', params);
}



