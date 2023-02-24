import Vue from 'vue'
const loginAPI = Vue.prototype.$u
import { api_spec } from "@/api/utils"





/**
 * 批次列表
 * @param {*} params
 */
 export function medicalProjectBatchList(params) {

    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/batchList', params);
}


//项目列表



export function medicalProjectQueryProject(params) {

    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/queryProject', params);
}

//项目详情


export function medicalProjectInfoProject(params) {

    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/infoProject', params);
}

//增项


export function userAddProjectList(params) {

    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/userAddProjectList', params);
}

//新增预约
export function userAppointmentAdd(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/add', params);
}

//获取可用金额
export function getUserTypeFund(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/getUserTypeFund', params);
}

//预约列表
export function userAppointmentListByMy(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/listByMy', params);
}

//公司可预约列表


export function queryCompanyAppointmentConfig(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/queryCompanyAppointmentConfig', params);
}

// 预约时间


export function userAppointmentPrebook(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/prebook', params);
}

// 预约详情
export function userAppointmentInfo(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/info', params);
}


// 预约详情
export function userAddProjectBefore(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/userAddProjectBefore', params);
}

// 预约详情
export function userAppointmentCancel(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/cancel', params);
}

// // 订单信息
// export function userAppointmentInfo(params) {
//     return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/info', params);
// }


// 下单后增加项目
export function userAddProjectByAfter(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/medicalProject/userAddProjectByAfter', params);
}

//新增订单修改


export function userAppointmentUpdate(params) {
    return Vue.prototype.$u.post(api_spec.app +'/h/app/userAppointment/update', params);
}
