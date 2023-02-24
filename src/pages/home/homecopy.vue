<!-- app首页（c端） -->
<template>
  <view class="ronin-home">
    <!-- <view class="home-head">
 
      <view class="head-img">
        <u-image
          @click="onClickLogin"
          width="43rpx"
          height="68rpx"
          src="/static/img/head.png"
        ></u-image>
      </view>

      <view class="head-name" @click="onClickLogin">
        {{ vuex_user.userName || "立即登录" }}
      </view>

      <u-image
        class="head-bg-img"
        width="140rpx"
        height="176rpx"
        src="/static/img/bg.png"
      ></u-image>
    </view> -->

    <view class="home-list">
      <!-- <view class="home-title">
        <view class="icon"></view>
        <text>问卷列表</text>
      </view> -->

      <view class="list-item"  v-for="(item,index) in list" :key='index'>
        <u-button  :hair-line="false" @click='onClickTo(item)' class="btn">{{item.name}}</u-button>
      </view>
    </view>

   

    <ui-login-popup
      :isShow="isShowLoginPopup"
      @ON-LOGIN="toLogin"
      @ON-CLOSE="onClose"
    ></ui-login-popup>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
// import { getPage2DataByPosition } from "@/api/cms";

import { login } from "@/api/login";
import {scaleConfigList} from "@/api/questionnaire"
export default {
  onLoad() {
    // return
    if (this.vuex_token && this.vuex_user) {
      this.isLogistics();
    } else {
      this.isShowLoginPopup = true;
    }
    // uni.hideTabBar({});
  },
  data() {
    return {
      isShowLoginPopup: false,
      current: 0,
      list:[]

     
    };
  },
  computed: {},
  onLoad(){
    this.init()
  },
  onPullDownRefresh() {
    this.getData();
  },
  methods: {
    onClickTo(e){
      console.log('显示数据哈哈哈')
      uni.navigateTo({
        url: `/pages/report/questionnaire?id=${e.id}`,
      });
    },
    init(){
      scaleConfigList({}).then(res=>{
        if(res.code=='0' && res.data?.records){
          this.list = res.data.records
        }
      })
    },
    isLogistics() {
      if (this.vuex_user?.userTypeTwo == "logi") {
      } else if (this.vuex_user?.userTypeTwo == "nurse") {
      }
    },
    login() {
      let that = this;
      uni.login({
        scopes: "auth_base", //静默登录
        success: (res) => {
          let params = {
            appNo: "H",
            code: res.code,
            thirdAppCode: "t_wx_mini",
            userTypeOne: "1",
          };

          login(params).then((res) => {
            if (res.code == "0") {
              that.$u.vuex("vuex_token", res.data.token);
              that.$u.vuex("vuex_user", res.data);
              if (res.data.id == "-1") {
                this.isShowLoginPopup = true;
              }
            }
          });
        },
      });
    },
    toLogin() {},
    onClickLogin() {
      this.isShowLoginPopup = true;
    },
    onClose() {
      this.isLogistics();
      this.isShowLoginPopup = false;
    },
  },
};
</script>


<style lang="scss">
.ronin-home {
  background: #f6fafe;
  height: 100%;
  .home-head {
    width: 100%;
    height: 356rpx;
    background: $u-type-primary;
    display: flex;
    padding: 0 $u-padding-width-outer;
    padding-top: $u-padding-width-within;
    padding-top: 176rpx;
    position: relative;

    .head-img {
      width: 88rpx;
      height: 88rpx;
      background: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .head-name {
      height: 88rpx;
      line-height: 88rpx;
      font-size: $u-font-size-bg;
      color: $u-font-color-wite;
      margin-left: $u-padding-width-within;
    }
    .head-bg-all-img {
      top: 0;
      left: 0;
      position: absolute;
    }
    .head-bg-img {
      width: 140rpx;
      height: 176rpx;
      position: absolute;
      right: 60rpx;
      bottom: 0;
    }
  }

  .home-title {
    font-weight: 600;
    font-size: 36rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30rpx;
    .icon {
      width: 8rpx;
      height: 30rpx;
      border-radius: 4rpx;
      background: #3873fe;
      margin-right: 10rpx;
    }
  }
  .home-list {
    padding: 0 28rpx;
    padding-top: 80rpx;

    .list-item{
      margin-bottom: 32rpx;

      .btn {
        display: block;
        ::v-deep.u-btn {
          border: 0px solid #000;
        }
      }
    }
  }
}
</style>
