<template>
  <view
    class="app-home"
    :style="{
      backgroundImage: `url(${homeBackgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <view class="app-home-title">
      <h1>健康管理会员服务</h1>
      <p>金牌团队守护 尊享健康权益</p>
    </view>
    <view class="app-home-plan">
      <view class="app-home-plan-items">
        <image
          src="https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-chat-1.png"
          mode="widthFix"
          @click="onTap"
        />
      </view>
      <view class="app-home-plan-items">
        <image
          src="https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-chat-2.png"
          mode="widthFix"
          @click="onTap"
        />
      </view>
    </view>

    <u-tabbar
      :list="vuex_company_tabbar"
      active-color="#3873fe"
      inactive-color="#B1AFB8"
      :mid-button-size="168"
      fontSize="8px"
      :icon-size="42"
    ></u-tabbar>
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
      userList: [],
    };
  },
  onLoad() {
    // 登入后拉去会话列表
    setTimeout((item) => {
      this.getUserSig();
    }, 1000);
  },
  methods: {
    onTap() {
      this.handleRoute("U1562697613134934016");
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
      let req = { userID: this.userId, userSig: this.userSig };

      tim.login(req);

    
    },

    handleRoute(id) {
      const url = `/pages/TUI-Chat/chat?conversationID=${"C2C" + id}`;
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.app-home {
  min-height: 60vh;
  background-position: top right;
  padding: 20px 14px;
  height: 200px;
}

.app-home-plan-items {
  image {
    width: 100%;
  }
  margin-top: 10px;
}

.app-home-title {
  height: 90px;
   color: #fff;
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 20px;
   
  }
  p {
    font-size: 14px;
  }
}

/** 健康目标 */
.app-home-plan {
  border-radius: 10px;
  background: #fff;
  padding: 10px 14px;
  .app-home-plan-info {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px #eeeeee solid;
    .app-home-plan-info-msg {
      font-size: 18px;
      font-weight: 600;
    }
    .app-home-plan-info-btn {
      border: 1px #e8e8e8 solid;
      border-radius: 14px;
      height: 28px;
      font-size: 14px;
      padding: 0 10px;
      color: #3873fe;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .app-home-plan-title {
    margin: 8px 0px;
    color: #333;
    font-size: 14px;
  }
  .app-home-plan-list {
    width: 100%;
    .app-home-plan-list-items:last-child {
      margin-bottom: 4px;
    }
    .status-health {
      background: #effaf6;
    }
    .status-warning {
      background: #fcf0df;
    }
    .app-home-plan-list-items {
      width: 100%;
      height: 75px;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .app-home-plan-list-items-title {
        &-h1 {
          font-size: 16px;
          font-weight: 600;
        }
        &-p {
          color: #999999;
        }
      }
      .app-home-plan-list-items-info {
        width: 60vw;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &-line {
          height: 24px;
          width: 0.5px;
          background: #e6dcce;
          margin: 0px 6px;
        }
        &-item {
          padding: 10px;
          text-align: center;
          &-h1 {
            font-size: 18px;
            .tips {
              font-size: 10px;
              margin-left: 4px;
            }
          }
          &-p {
            color: #999999;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>