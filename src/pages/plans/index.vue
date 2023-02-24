<template>
  <view class="app-home" :style="{
    backgroundImage: `url(${homeBackgroundImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }">
    <view class="app-home-title">
      <h1>健康管理会员服务</h1>
      <p>金牌团队守护 尊享健康权益</p>
    </view>
    <view class="app-home-plan">
      <u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
      <u-swiper :list="banners" :height="SwiperHeight"  @click="onTap()">

      </u-swiper>


    </view>

    <view class="person-title"> 就医管家 </view>
    <view class="person-service">
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-1.png" class="imgs" />

        <view class="info">
          <view class="title">专家门诊预约</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-3.png" class="imgs" />

        <view class="info">
          <view class="title">医院就医陪诊</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-2.png" class="imgs" />

        <view class="info">
          <view class="title">住院或手术绿通</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-4.png" class="imgs" />

        <view class="info"  @click="onTap()">
          <view class="title">家庭医生咨询</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>

    </view>
    <!-- <view class="person-title"> AI健康管理计划 </view>
    <view class="app-plan-item">
      <view class="app-plan-item-icon">

      </view>
      <view class="app-plan-item-info">
        <view class="title">体重</view>
        <view class="des">管住嘴，迈开腿</view>
      </view>
      <view class="app-plan-item-target">
        <view class="date">今天</view>
        <view class="nums">70<view class="unit">kg</view>
        </view>
      </view>
    </view>
    <view class="app-plan-item">
      <view class="app-plan-item-icon">

      </view>
      <view class="app-plan-item-info">
        <view class="title">体重</view>
        <view class="des">管住嘴，迈开腿</view>
      </view>
      <view class="app-plan-item-target">
        <view class="date">今天</view>
        <view class="nums">70<view class="unit">kg</view>
        </view>
      </view>
    </view>
    <view class="app-plan-item">
      <view class="app-plan-item-icon">

      </view>
      <view class="app-plan-item-info">
        <view class="title">体重</view>
        <view class="des">管住嘴，迈开腿</view>
      </view>
      <view class="app-plan-item-target">
        <view class="date">今天</view>
        <view class="nums">70<view class="unit">kg</view>
        </view>
      </view>
    </view>
    <view class="app-plan-item">
      <view class="app-plan-item-icon">

      </view>
      <view class="app-plan-item-info">
        <view class="title">体重</view>
        <view class="des">管住嘴，迈开腿</view>
      </view>
      <view class="app-plan-item-target">
        <view class="date">今天</view>
        <view class="nums">70<view class="unit">kg</view>
        </view>
      </view>
    </view> -->
    <u-tabbar :list="vuex_company_tabbar" active-color="#3873fe" inactive-color="#B1AFB8" :mid-button-size="168"
      fontSize="8px" :icon-size="42"></u-tabbar>
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
      list: [{
        name: '健康管理师'
      }, {
        name: '体检师'
      }, {
        name: '视频家医',
        cate_count: 5
      }],
      banners: [{
        image: 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-chat-1.png',
      },
      {
        image: 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-chat-2.png',
      }
      ],
      current: 0
    };
  },
  onLoad() {
    // 登入后拉去会话列表
    setTimeout((item) => {
      this.getUserSig();
    }, 1000);
    this.SwiperHeight = this.getSwiperHeight() * 2;
    this.$forceUpdate()
  },
  filters: {

  },
  methods: {
    change(index) {
      this.current = index;
    },
    getSwiperHeight() {
      const { windowWidth, windowHeight } = uni.getSystemInfoSync();
      let w = (windowWidth - 28 * 2);
      w = w * 0.5419161676646707;
      return w;
    },
    onTap() {
      this.handleRoute("U_Admin_HT");
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

      tim.login(req);

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
      const url = `/pages/TUI-Chat/chat?conversationID=${"C2C" + id}`;
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.app-plan-item {
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  align-content: flex-start;
  padding: 14px;
  margin-bottom: 10px;

  .app-plan-item-icon {
    width: 44px;
    height: 44px;
    background-image: url(https://linglei0824.oss-cn-shanghai.aliyuncs.com/icon_weight.png);
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 10px;
  }

  .app-plan-item-info {
    flex: 1;

    .title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .des {
      font-size: 12px;
      color: #999;
    }
  }

  .app-plan-item-target {
    width: 80px;
    text-align: right;

    .date {
      font-size: 12px;
      color: #ccc;
    }

    .nums {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      font-size: 18px;
      font-weight: 600;
      height: 20px;

      .unit {
        font-size: 12px;
        font-weight: 400;
        height: 18px;
        margin-left: 4px;
      }
    }
  }
}

.app-home {
  min-height: 60vh;
  background-position: top right;
  padding: 40rpx 28rpx;
  height: 400rpx;
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
  padding: 10px 28rpx;

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

.person-title {
  margin: 24px 0px;
  font-size: 18px;
  font-weight: bold;
}

.person-service {
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  &-items {
    width: 48.8%;
    background: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 8px;

    .imgs {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }

    .info {
      flex: 1;

      .title {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .des {
        font-size: 10px;
        color: #999;
        margin-bottom: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>