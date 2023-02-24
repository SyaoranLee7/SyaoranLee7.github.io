<script>
import TIM from "tim-js-sdk";
// import COS from "cos-js-sdk-v5";
import TIMUploadPlugin from "tim-upload-plugin";
import Aegis from 'aegis-web-sdk';
const aegis = new Aegis({
		id: 'iHWefAYqKznuxWjLnr', // 项目key
		reportApiSpeed: true, // 接口测速
	});
	uni.$aegis = aegis

import logger from "./utils/logger";
import { genTestUserSig } from "./debug/GenerateTestUserSig.js";
export default {
  globalData: {
    version: "0.0.1",
    userInfo: null,
    // 个人信息
    userProfile: null,
    isTUIKit: true,
    headerHeight: 0,
    statusBarHeight: 0,
    SDKAppID: genTestUserSig("").sdkAppID,
  },
  onLaunch() {
    const SDKAppID = genTestUserSig('').sdkAppID;
			uni.$aegis.reportEvent({
					name: 'onLaunch',
					ext1: 'onLaunch-success',
					ext2: 'uniTuikitExternal',
					ext3: `${SDKAppID}`,
			})
			uni.setStorageSync(`TIM_${SDKAppID}_isTUIKit`, true);
			// 重点注意： 为了 uni-app 更好地接入使用 tim，快速定位和解决问题，请勿修改 uni.$TUIKit 命名。
			// 如果您已经接入 tim ，请将 uni.tim 修改为 uni.$TUIKit。
			uni.$TUIKit = TIM.create({
				SDKAppID: SDKAppID
			});
			// #ifndef H5
			uni.$TUIKit.registerPlugin({
				'cos-wx-sdk': COS
			});
			// #endif
			
			// #ifdef H5
			uni.$TUIKit.registerPlugin({ 'tim-upload-plugin':TIMUploadPlugin })
			// #endif
			// 将原生插件挂载在 uni 上
			// #ifdef APP-PLUS
			uni.$TUICalling = TUICalling;
			// #endif
			// 如果您已创建了 tim，请将 tim 实例挂载在 wx 上，且不可以修改 wx.$TIM（修改变量可能导致 TUICalling 组件无法正常使用）, 完成 TUICalling 初始化，
			// 如果您没有创建，可以不传
			// #ifdef MP-WEIXIN
			wx.$TIM = uni.$TUIKit;
			// #endif
			uni.$TUIKitTIM = TIM;
			uni.$TUIKitEvent = TIM.EVENT;
			uni.$TUIKitVersion = TIM.VERSION;
			uni.$TUIKitTypes = TIM.TYPES; // 监听系统级事件
			uni.$resetLoginData = this.resetLoginData();
			uni.$TUIKit.on(uni.$TUIKitEvent.SDK_READY, this.onSDKReady);
			uni.$TUIKit.on(uni.$TUIKitEvent.SDK_NOT_READY, this.onSdkNotReady);
			uni.$TUIKit.on(uni.$TUIKitEvent.KICKED_OUT, this.onKickedOut);
			uni.$TUIKit.on(uni.$TUIKitEvent.ERROR, this.onTIMError);
			uni.$TUIKit.on(uni.$TUIKitEvent.NET_STATE_CHANGE, this.onNetStateChange);
			uni.$TUIKit.on(uni.$TUIKitEvent.SDK_RELOAD, this.onSDKReload);

    return;
    setTimeout(() => {
      uni.getSystemInfo({
        success: function (res) {
          // debugger;
          that.$u.vuex("vuex_app_width", res.windowWidth);
          const SDKAppID = genTestUserSig("").sdkAppID;

          console.log(uni.$aegis);
          if (uni.$aegis) {
            uni.$aegis.reportEvent({
              name: "onLaunch",
              ext1: "onLaunch-success",
              ext2: "uniTuikitExternal",
              ext3: `${SDKAppID}`,
            });
          }

          uni.setStorageSync(`TIM_${SDKAppID}_isTUIKit`, true);
          // 重点注意： 为了 uni-app 更好地接入使用 tim，快速定位和解决问题，请勿修改 uni.$TUIKit 命名。
          // 如果您已经接入 tim ，请将 uni.tim 修改为 uni.$TUIKit。
          uni.$TUIKit = TIM.create({
            SDKAppID: genTestUserSig("").sdkAppID,
          });
          // console.log(uni.$TUIKit, "显示数据哈哈哈4567890");
          // #ifndef H5
          uni.$TUIKit.registerPlugin({
            "cos-wx-sdk": COS,
          });
          // #endif

          // #ifdef H5
          // uni.$TUIKit.registerPlugin({ 'tim-upload-plugin':TIMUploadPlugin })
          // #endif
          // 将原生插件挂载在 uni 上
          // #ifdef APP-PLUS
          uni.$TUICalling = TUICalling;
          wx.$TIM = uni.$TUIKit;
          // #endif
          uni.$TUIKitTIM = TIM;
          uni.$TUIKitEvent = TIM.EVENT;
          uni.$TUIKitVersion = TIM.VERSION;
          uni.$TUIKitTypes = TIM.TYPES; // 监听系统级事件
          uni.$resetLoginData = that.resetLoginData();
          uni.$TUIKit.on(uni.$TUIKitEvent.SDK_READY, that.onSDKReady);
          uni.$TUIKit.on(uni.$TUIKitEvent.SDK_NOT_READY, that.onSdkNotReady);
          uni.$TUIKit.on(uni.$TUIKitEvent.KICKED_OUT, that.onKickedOut);
          uni.$TUIKit.on(uni.$TUIKitEvent.ERROR, that.onTIMError);
          uni.$TUIKit.on(
            uni.$TUIKitEvent.NET_STATE_CHANGE,
            that.onNetStateChange
          );
          uni.$TUIKit.on(uni.$TUIKitEvent.SDK_RELOAD, that.onSDKReload);
        },
      });
    }, 500);
  },

  methods: {
    // TODO:
    resetLoginData() {
      this.globalData.expiresIn = "";
      this.globalData.sessionID = "";
      this.globalData.userInfo = {
        userID: "",
        userSig: "",
        token: "",
        phone: "",
      };
      this.globalData.userProfile = null;
      // this.login(genTestUserSig("").sdkAppID)
      logger.log(`| app |  resetLoginData | globalData: ${this.globalData}`);
    },

    onTIMError() {},
    onSDKReady({ name }) {
      const isSDKReady = name === uni.$TUIKitEvent.SDK_READY ? true : false;
      uni.$emit("isSDKReady", {
        isSDKReady: true,
      });
    },
    onNetStateChange() {},
    onSDKReload() {},
    onSdkNotReady() {},
    onKickedOut() {
      uni.showToast({
        title: "您被踢下线",
        icon: "error",
      });
      uni.navigateTo({
        url: "./pages/TUI-Login/login",
      });
    },
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
page {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>