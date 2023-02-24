<template>
  <view class="mainBox bg-white">
    <view class="mainTitle"></view>
    <view class="mainPerson"></view>
    <view class="scBox">
      <view class="innerBox">
        <!-- 防疫咨询 -->
        <view class="innerItem consult" @click="onTapIM()"> </view>

        <!-- 防疫物资需求 -->
        <view class="innerItem goods" @click="onTapQA()"> </view>

        <!-- 新冠就诊指导 -->
        <view class="innerItem guide" @click="goGuide"> </view>

        <!-- 发烧护理指南 -->
        <view class="innerItem fever" @click="goFever"> </view>

        <!-- 备药与物资指导 -->
        <view class="innerItem store" @click="goStore"> </view>

        <!-- 防护指南 -->
        <view class="innerItem fence" @click="goFence"> </view>
      </view>
    </view>
  </view>
</template>


<script>
// import TUIConversationItem from "@/components/tui-conversation/conversation-item/index";
// import userItem from "@/components/tui-conversation/conversation-item/userItem";
// import TUIMessageList from "@/components/tui-chat/message-list/index";
import TIM from "tim-js-sdk";
import TIMUploadPlugin from "tim-upload-plugin";
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";

// 初始化 SDK 实例
const tim = TIM.create({
  SDKAppID: process.env.VUE_APP_SDK_APP_ID,
});

// 日志级别
tim.setLogLevel(0);

// 注册腾讯云即时通信 IM 上传插件
tim.registerPlugin({ "tim-upload-plugin": TIMUploadPlugin });

import { imTencentGetUserSig } from "@/api/im";
import { genTestUserSig } from "@/debug/GenerateTestUserSig.js";
export default {
  data() {
    return {
      userSig: "",
      userId: "",
      homeBackgroundImage,
      SwiperHeight: 0,
      loading: false,
      list: [
        {
          name: "健康管理师",
        },
        {
          name: "体检师",
        },
        {
          name: "视频家医",
          cate_count: 5,
        },
      ],
      banners: [
        {
          image:
            "https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-chat-1.png",
        },
        {
          image:
            "https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-chat-2.png",
        },
      ],
      current: 0,
    };
  },
  onLoad() {
    // 登入后拉去会话列表
    setTimeout((item) => {
      this.getUserSig();
    }, 1000);
    this.SwiperHeight = this.getSwiperHeight() * 2;
    this.$forceUpdate();
  },
  filters: {},
  methods: {
    change(index) {
      this.current = index;
    },
    goGuide() {
      window.location.href =
        "https://mp.weixin.qq.com/s?__biz=Mzg5OTg0NTc0NA==&mid=2247483729&idx=1&sn=08037bdafa4655887e0af6b8f9bae6e3&chksm=c04c5a4ef73bd358fe70fcd2360838f90731be0930ceb0b3ac459034185b375e749c8a02bfe9#rd";
    },
    goFever() {
      window.location.href =
        "https://mp.weixin.qq.com/s?__biz=Mzg5OTg0NTc0NA==&mid=2247483714&idx=1&sn=6546c38e6c4a5d55803b2c1e0f4231bd&chksm=c04c5a5df73bd34b180e244e15f05d2b688bb07389ae2b87a0ff98b7d03e8e54d97fdc406890#rd";
    },
    goStore() {
      window.location.href =
        "https://mp.weixin.qq.com/s?__biz=Mzg5OTg0NTc0NA==&mid=2247483726&idx=1&sn=09e80ad2c4d2202a429ad802b5418e34&chksm=c04c5a51f73bd347a5789d9a9f404627d3c1e4b5b1f341cfb045c9fa66fbfff4e29b764807e6#rd";
    },
    goFence() {
      window.location.href =
        "https://mp.weixin.qq.com/s?__biz=Mzg5OTg0NTc0NA==&mid=2247483715&idx=1&sn=4733e661931a8525bd9a1dc0f62c75a5&chksm=c04c5a5cf73bd34aadd0a766d96b630c3db02aee197b2ca8a3539338babfe611b87618524c51#rd";
    },
    onTapQA() {
      uni.navigateTo({
        url: "/pages/report/questionnaire?id=SCID1602935015594008576",
      });
    },
    onTapIM() {
      this.handleRoute("U1562697613134934016");
    },
    getSwiperHeight() {
      const { windowWidth, windowHeight } = uni.getSystemInfoSync();
      let w = windowWidth - 28 * 2;
      w = w * 0.5419161676646707;
      return w;
    },

    getUserSig() {
      imTencentGetUserSig({}).then((res) => {
        if (res.code == "0") {
          this.userSig = res.data.userSig;
          this.userId = res.data.userId;
          this.login();
        }
      });
    },
    login() {
      //   console.log(uni.$TUIKit, "聊天iddap");
      let req = { userID: this.userId, userSig: this.userSig };
      uni.showLoading();
      tim.login(req).then((res) => {
        if (res.code == "0") {
          uni.hideLoading();
          this.loading = true;
        }
      });

      //   uni.$TUIKit
      //     .login(req)
      //     .then((res) => {
      //       //   setTimeout(() => {
      //       //     that.getConversationList();
      //       //     uni.$TUIKit.on(
      //       //       uni.$TUIKitEvent.CONVERSATION_LIST_UPDATED,
      //       //       that.onConversationListUpdated
      //       //     );
      //       //   }, 500);
      //     })
      //     .catch((res) => {
      //       console.log("我走倒这里了哈哈");
      //     });
    },

    handleRoute(id) {
      if (!this.loading) {
        return;
      }
      const url = `/pages/TUI-Chat/chat?conversationID=${"C2C" + id}`;
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>




<style lang="scss" scoped>
.mainBox {
  background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/background.svg")
    no-repeat;
  background-size: 100% auto;
  width: 750rpx;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
  background-color: #69D0CF;
  .mainTitle {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/title.svg")
      no-repeat;
    background-size: 100% auto;
    width: 750rpx;
    height: 685rpx;
    position: absolute;
  }
  .mainPerson {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/person.png")
      no-repeat;
    background-size: 70% auto;
    background-position: center bottom;
    width: 750rpx;
    height: 685rpx;
    position: relative;
  }
  .scBox {
    width: 750rpx;
    // height: 500rpx;
    position: relative;
    background: #4fcbd1;
    border-radius: 20rpx;
    top: -10px;
    padding: 20rpx 20rpx;
    .innerBox {
      width: 100%;
      padding: 25rpx 0rpx;
      background-color: #08b4b8;
      border-radius: 20rpx;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .innerItem {
        width: calc(50% - 20rpx);
        margin: 10rpx 10rpx;
        height: 160rpx;
        border-radius: 10rpx;
        display: flex;
        padding: 0 10rpx;
        background-size: 100% auto;
      }
    }
  }

  .consult {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/1.svg");
  }
  .goods {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/2.svg");
  }
  .guide {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/3.svg");
  }
  .fever {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/4.svg");
  }
  .store {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/5.svg");
  }
  .fence {
    background: url("https://hktimgs.oss-cn-shanghai.aliyuncs.com/svg/6.svg");
  }
}
</style>

