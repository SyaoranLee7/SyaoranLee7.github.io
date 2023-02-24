import Vue from 'vue'
import { api_spec } from "@/api/utils"

/**
 * 获取文章类型
 * @param {*} params 
 */
 export function queryArticleTree(params) {
   
    return Vue.prototype.$u.post(api_spec.app +'/app/cms/articleCategory/getTree', params);
}


/**
 * 获取文章
 * @param {*} params 
 */
export function queryArticles(params){
    return Vue.prototype.$u.post(api_spec.app +'/app/cms/article/query', params);
}


/**
 * 查询文章
 * @param {*} params 
 * @returns 
 */
export function getArticles(params){
    return Vue.prototype.$u.post(api_spec.app +'/app/cms/article/get', params);
}
