import { decrypt } from '@/utils/ase'
// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: process.env.VUE_APP_BASE_API,
		// 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
		// 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
		// originalData: true,
		// 设置自定义头部content-type
		// header: {
		// 	'content-type': 'xxx'
		// }
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {

		config.header.token = vm.vuex_token;
		config.header.tenant = 'HT'; //默认平台公司
		config.header.shareNo = vm.vuex_share_code;
		config.header.Authorization = vm.vuex_token;
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// config.header.token = vm.token;

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		// const token = uni.getStorageSync('token');
		// config.header.token = token;


		let context = process.env.VUE_APP_API_PATH
		//let context = 'healthy'
		if (vm.vuex_user.id == "-1"
			&& config.url != '/api/' + context + '/app/user/bind/thirdBindByMobileNoReg'
			&& config.url != '/api/' + context + '/app/user/vcode/sendLoginVCode'
			&& config.url != '/api/' + context + '/app/user/login/loginByThirdNoReg'
			&& config.url != '/api/' + context + '/app/user/login/loginByName2Password2CodeNoTenant'
			&& config.url != '/api/' + context + '/app/user/bind/thirdBindByMobileYesReg'
			&& config.url != '/api/' + context + '/app/user/vcode/getWordCaptchag'
		) {
			return config;
			// uni.navigateTo({
			// 	url: '/pages/login/newLogin'
			// });
		}
		return config;

	}
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res, header) => {
		// 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
		// 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果



		if (res?.code !== '0') {
			if (res.code === '-3') {
				if (vm.vuex_token) {
					uni.showModal({
						content: '您的登录已失效,是否重新登录',
						success: function (resU) {
							if (resU.confirm) {
								//清除缓存
								uni.removeStorage({
									key: 'lifeData',
									success: function () {
										uni.navigateTo({
											url: '/pages/auth/auth'
										});
									}
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}else{
					uni.navigateTo({
						url: '/pages/auth/auth'
					});
				}
			} else {
				uni.showToast({
					title: res.msg,
					icon: 'none',
					duration: 2000,
				});
			}

		}

		if(typeof res === 'string'){
			//TODO：山寨代码以后要改掉
			return decrypt(res);
		}
		else{
			return res;
		}


		// debugger;
		// if (res.code == 0 ||  res.repCode === "0000") {
		// 	// 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
		// 	return res;
		// } else return false;
	}
}

export default {
	install
}
