
import Vue from 'vue'
const ossAPI = Vue.prototype.$u

/**
 * 获取阿里云oss授权
 * @param {*} params 
 */
export function getAliyunOss(params) {
    return ossAPI.get('api/basic-center/app/oss/getAliyunOss', params);
}