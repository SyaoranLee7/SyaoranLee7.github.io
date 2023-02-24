import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"


/**
 * 获取推荐检查项目结果
 * @param {*} params 
 */
 export function getTestingListByScaleResult(params) {  
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/htp/getTestingListByScaleResult', params);
}
