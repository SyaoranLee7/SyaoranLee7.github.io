
import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"



/**
 * 登录不注册
 * @param {*} params 
 */
export function login(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/login/loginByThirdNoReg', params);
}


/**
 * 罗湖三方登录
 * @param {*} params 
 */
 export function loginByThirdLH(params) {
    return Vue.prototype.$u.post(api_spec.app + '/h/app/userThirdLogin/loing2reg', params);
}


/**
 * 登录不注册
 * @param {*} params 
 */
export function thirdBindByLogin(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/login/thirdBindByLogin', params);
}

// 登录


export function loginByName2Password2CodeNoTenant(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/login/loginByName2Password2CodeNoTenant', params);
}

/**
 * 三方用户绑定用户[手机号和身份证第三方认证]
 * @param {*} params 
 * @returns 
 */
export function loginByThirdBind2IdAuth(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/bind/loginByThirdBind2IdAuth', params);
}



//发送验证码


export function sendLoginVCode(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/vcode/sendLoginVCode', params);
}

//登录并绑定



export function thirdBindByMobileNoReg(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/bind/thirdBindByMobileNoReg', params);
}

/**
 * thirdBindByMobileYesReg
 * @param {*} params 
 * @returns 
 */
export function thirdBindByMobileYesReg(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/bind/thirdBindByMobileYesReg', params);
}

/**
 * 更新用户信息
 * @param {*} params 
 * @returns 
 */
export function updateUserInfo(params) {
    return Vue.prototype.$u.post(api_spec.app + '/app/user/info/update', params);
}


// 图片校验码  
export function vcodeGetWordCaptcha(params) {
    return Vue.prototype.$u.post(api_spec.app +'/app/user/vcode/getWordCaptcha', params);
}