import {  paymentPay, paymentReport } from "@/api/order";
export function payWx(sn) {
    return new Promise(function (resolve, reject) {
        let req = {
            orderSN: sn,
            payChannelTwo: 'wxpay_v3_jsapi'
        }
        paymentPay(req).then(resData => {
            if (resData.code == '0' && resData.data) {
                paymentReport({ paySN: resData.data.paySN }).then(res => {
                    if (res.code == '0') {
                        resolve(1)
                    }else{
                        reject('-1')
                    }
                })
            }else{
                reject('-2')
            }
        })
    })

}
