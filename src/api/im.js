
import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"





/**
 * 量表列表
 * @param {*} params 
 */
 export function imTencentGetUserSig(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/h/app/imTencent/getUserSig', params);
}