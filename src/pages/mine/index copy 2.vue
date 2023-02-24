<template>
  <view class="ronin-mine">
    <view
      class="head"
      :style="{
        backgroundImage: `url(${homeBackgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <view class="head_info">
        <img src="@/static/img/mine/img-user-avatar-w.png" alt="" />
        <view style="flex: 1">
          <view class="head_name">
            李明
          </view>
          <p>点击头像查看编辑个人资料</p>
        </view>
      </view>
      <view class="health_btn">
        <span>安全登出</span>
      </view>
    </view>

    <u-gap height="20" bg-color="#fafafa"></u-gap>


    <view class="health">
        <view class="health_title">我的服务</view>
        <view class="health_box">
          <view class="health_items">
              <img alt="" src="@/static/img/mine/0@3x.png" width="30" />
              <p>我的挂号</p>
            </view>

         <view class="health_items">
              <img alt="" src="@/static/img/mine/1@3x.png" width="30" />
              <p>我的检查</p>
            </view>
        <view class="health_items">
              <img alt="" src="@/static/img/mine/1@3x.png" width="30" />
              <p>我的检查</p>
            </view>
             <view class="health_items">
              <img alt="" src="@/static/img/mine/1@3x.png" width="30" />
              <p>我的检查</p>
            </view>
        </view>
      </view> 

      <u-gap height="20" bg-color="#fafafa"></u-gap>


    <view class="family">
      <view class="family_tabs">
        <p>我的家庭</p>
        <view class="manage_btn">管理家庭</view>
      </view>
      <view class="family_item_box">
        <view class="family_items">
          <view class="img_out">
            <img
              src="@/static/img/mine/img-user-avatar-w.png"
              class="img_out_image"
            />
          </view>
          <view class="family_name"> 本人 </view>
        </view>
      </view>
    </view>
    <view class="slider_out">
      <view class="slide_card">
        <view class="card_icon">特别推荐</view>
        <view class="card_title">敬老月,爸妈的“健康大礼包”领了吗？</view>
        <view class="card_text">
          <view class="card_point"></view>
          <p>免费健康体检及健康管理</p>
        </view>
        <view class="card_text">
          <view class="card_point"></view>
          <p>免费领取随身急救药包一个</p>
        </view>
        <view class="card_text">
          <view class="card_point"></view>
          <p>免费理疗（针灸、艾灸、推拿和刮痧，4选1）2次。</p>
        </view>

        <view class="card_box">
          <view class="box_title">65岁以上老年人 (含65岁)均可参加</view>
          <view class="box_text">免费健康体检及健康管理</view>
          <view class="box_btn">活动详情</view>
        </view>
      </view>

      <!-- <view class="slide_card">
          <view class="card_icon">特别推荐</view>
          <view class="card_title">健康评估，防范重大疾病</view>
          <view class="card_text">
            <view class="card_point"></view>
            <p>肿瘤排筛</p>
          </view>
          <view class="card_text">
            <view class="card_point"></view>
            <p>肿瘤排筛</p>
          </view>

          <view class="card_box">
            <view class="box_title">白领健康体检套餐</view>
            <view class="box_text">36项健康检查，中年人常见疾病排筛</view>
            <view class="box_btn">159元</view>
          </view>
        </view> -->
    </view>

    <!-- <view class="health">
        <view class="health_title">个人设置</view>
        <view class="health_box">
          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/20@2x.png" width="30" />
              <p>个人信息</p>
            </view>
          </router-link>
          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/21@2x.png" width="30" />
              <p>健康卡</p>
            </view>
          </router-link>

          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/18@2x.png" width="30" />
              <p>我的地址</p>
            </view>
          </router-link>
          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/22@2x.png" width="30" />
              <p>停车记录</p>
            </view>
          </router-link>
          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/16@2x.png" width="30" />
              <p>二维码名片</p>
            </view>
          </router-link>
          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/15@2x.png" width="30" />
              <p>条形码名片</p>
            </view>
          </router-link>
          <router-link :to="{ path: '/registration-record' }">
            <view class="health_items">
              <img alt="" src="@/static/img/mine/14@2x.png" width="30" />
              <p>食堂订单</p>
            </view>
          </router-link>
        </view>
      </view> -->

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
import homeBackgroundImage from "@/static/img/mine/img_person_header_bg.png";
export default {
  data() {
    return {
      homeBackgroundImage,
      userInfo: {},
    };
  },

  methods: {
    onClickToList(url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.head {
  font-weight: 400;
  
  line-height: 16px;
  font-size: 12px;
  padding-bottom: 10px;
  // background-image: url("../../assets/img/personal-center/img_person_header_bg.png");
  background-repeat: no-repeat;
  background-position: -20px -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}

.head_info {
  display: flex;
  align-items: center;
  padding: 15px 12px;
  & img {
    margin-right: 10px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    border: 3px #fff solid;
    -webkit-box-shadow: 00px 0px 10px rgba($color: #000000, $alpha: 0.1);
    box-shadow: 00px 0px 10px rgba($color: #000000, $alpha: 0.1);
  }
  & .logout {
    display: inline-block;
    padding: 0px 10px;
    color: #0088ff;
    font-size: 12px;
    margin-left: 5px;
  }
}

.head_name {
  font-size: 16px;
  line-height: 23px;
  font-weight: 500;
}

.health_btn {
  margin-right: 14px;
  font-size: 13px;
  padding: 4px 10px;
  border: solid 1px #0088ff;
  border-radius: 15px;
  color: #0088ff;
  display: flex;
  align-items: center;

  & span {
    margin-left: 2px;
  }
}

.family {
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  & .family_tabs {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    
    padding-top: 16px;
  }

  & .family_item_box {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    height: 95px;
    
    overflow-x: auto;
    display: -webkit-box;
    padding-bottom: 15px;
  }

  & .manage_btn {
    width: 78px;
    height: 23px;
    font-size: 13px;
    line-height: 23px;
    color: #0088ff;
    padding: 0 10px;
    position: relative;
  }

  & .family_name {
    padding: 0 10px;
    height: 16px;
    background: #ffa700;
    opacity: 1;
    border-radius: 9px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #ffffff;
    margin-top: -2px;
  }
}

.family_items {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 18px;
  width: 18vw;

  &.active .img_out {
    border-color: #0088ff;
  }
}

.img_out {
  width: 46px;
  height: 46px;
  opacity: 1;
}
.img_out_image {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #edf5ff;
  border: 2px solid #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
}

.slider_out {
  padding: 0px 0 0px 16px;
  display: -webkit-box;
  overflow-x: auto;
  padding-bottom: 20px;
  background-color: #fff;
}

.slide_card {
  width: 77vw;
  margin-right: 12px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.06);
  opacity: 1;
  border-radius: 5px;
  padding: 0 14px 16px;
  
}

.card_icon {
  width: 70px;
  height: 21px;
  background: #0088ff;
  border-radius: 0px 0px 2px 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  color: #ffffff;
  text-align: center;
}

.card_title {
  margin-top: 12px;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  
}

.card_text {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #8c8c8c;
  display: flex;
  align-items: center;
}

.card_point {
  width: 5px;
  height: 5px;
  background: #919191;
  border-radius: 50%;
  margin-right: 8px;
}

.card_box {
  background: #f4f9fe;
  padding: 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #1a94ff;
  margin-top: 9px;
}

.box_title {
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  
  margin-bottom: 5px;
}

.box_btn {
  width: 61px;
  height: 25px;
  background: #0088ff;
  opacity: 1;
  border-radius: 13px;
  text-align: center;
  line-height: 25px;
  font-size: 12px;
  color: #ffffff;
  margin-top: 5px;
}

.health {
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  
  background-color: #fff;
}

.health_box {
  padding: 10px 0;
  font-size: 13px;
  line-height: 16px;
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  & a {
    width: 25%;

    & .health_items {
      width: 100%;
    }
  }
}
.health_title {
  margin-top: 10px;
}
.health_items {
  width: 25%;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  p {
  }
  & img {
    margin-bottom: 8px;
  }
}
</style>