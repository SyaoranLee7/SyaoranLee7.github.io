<script>
import logger from "./utils/logger";
export default {
  globalData: {
    version: "0.0.1",
    userInfo: null,
    // 个人信息
    userProfile: null,
    headerHeight: 0,
    statusBarHeight: 0,
  },
  onLaunch() {


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