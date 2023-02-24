<template>
  <view class="ronin-mine">
    <!-- 顶部背景 -->
    <view class="bg"></view>

    <view class="head">
      <view class="head_info">
        <img
          :src="
            vuex_user.sex && vuex_user.sex == '0'
              ? 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-m.png'
              : 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-w.png'
          " />
        <view style="flex: 1">
          <view class="head_name">{{ vuex_user.realName || "微信ID"}}</view>
		  <view class="head_name">健康号：{{ vuex_user.realName || "--"}}</view>
          <!-- <p>点击头像查看编辑个人资料</p> -->
        </view>
      </view>
	  <view class="health_btn" @click="sign">
	    <span>签到</span>
	  </view>
    </view>

    <view class="person-pointer">
		<view class="person-pointer-items">
			<view class="value">0</view>
			<img src="@/static/img/mine/point.svg" class="icon" />
		</view>
      <view class="person-pointer-items">
		  <view class="value">0</view>
		  <img src="@/static/img/mine/drive.svg" class="icon" />
	  </view>
      <view class="person-pointer-items">
		  <view class="value">0</view>
		  <img src="@/static/img/mine/target.svg" class="icon" />
	  </view>
    </view>

    <view class="person-member">
      <!-- <view class="person-member-header">
        <image src="@/static/img/mine/icon-member.png" class="imgs" />
        <view class="">超级会员</view>
      </view>
      <view class="person-member-bodyer">
        <view class="items">
          <view class="title">会员权益</view>
          <view class="des">24小时在线服务</view>
        </view>
        <image src="@/static/img/mine/img-line.png" class="line" />
        <view class="items">
          <view class="title">健康咨询</view>
          <view class="des">24小时在线服务</view>
        </view>
        <image src="@/static/img/mine/img-line.png" class="line" />
        <view class="items">
          <view class="title">专病专家</view>
          <view class="des">24小时在线服务</view>
        </view>
      </view> -->
    </view>

	<view class="person-operation">
		<view class="operation-item" @click="onClickToList('/pages/health-form/appointmentList')">
			<image src="@/static/img/mine/appointment-record.svg" class="imgs" />
			<view class="title">预约记录</view>
		</view>
    <view class="operation-item" @click="onClickToList('/pages/check-records/list')">
			<image src="@/static/img/mine/my-exam.svg" class="imgs" />
			<view class="title">我的体检</view>
		</view>
		<view class="operation-item" @click="onClickToList('/pages/mine/empty')">
			<image src="@/static/img/mine/health-plan.svg" class="imgs" />
			<view class="title">会员权益</view>
		</view>
		<view class="operation-item" @click="onClickToList('/pages/mine/empty')">
			<image src="@/static/img/mine/card-activate.svg" class="imgs" />
			<view class="title">卡券激活</view>
		</view>
	</view>

	<view class="person-title">我的信息</view>
	<view class="person-list">
		<view class="item" @click="onClickToList('/pages/mine/info')">
			<view class="item-inner">
				<view class="item-label">个人信息</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
		<view class="item" @click="onClickToList('/pages/health-records/index')">
			<view class="item-inner">
				<view class="item-label">健康档案</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
		<view class="item" @click="onClickToList('/pages/mine/empty')">
			<view class="item-inner">
				<view class="item-label">咨询记录</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
		<view class="item" @click="onClickToList('/pages/mine/empty')">
			<view class="item-inner">
				<view class="item-label">浏览记录</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
		<view class="item" @click="onClickToList('/pages/mine/empty')">
			<view class="item-inner">
				<view class="item-label">知识收藏</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
		<view class="item" @click="onClickToList('/pages/mine/empty')">
			<view class="item-inner">
				<view class="item-label">我的关注</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
	</view>

	<view class="person-title">其他</view>
	<view class="person-list">
		<view class="item" @click="onClickToList('/pages/mine/empty')">
			<view class="item-inner">
				<view class="item-label">客户服务</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
		</view>
		<view class="item" @click="onClickToList('/pages/mine/empty')">
			<view class="item-inner">
				<view class="item-label">意见反馈</view>
				<view class="item-icon">
          <img src="@/static/icon_svg/mine/array_right_black.svg" class="img" />
        </view>
			</view>
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
import homeBackgroundImage from "@/static/img/mine/img_person_header_bg.png";
import { userTestReportDataList } from "@/api/health";
import {
  userAppointmentListByMy,

} from "@/api/healthForm";
export default {
  data() {
    return {
      homeBackgroundImage,
      userInfo: {},
      reportNum: 0,
      aNum:0,
    };
  },
  onLoad(e) {
    this.getData();
  },
  methods: {
  	// 签到
  	sign () {
  		alert("已签到");
  	},

    getData () {
      let req = {};
      userTestReportDataList(req).then((res) => {
        if (res && res.code == "0" && res.data) {
          this.reportNum = res.data.total;
        }
      });

      let req2 = { type: "g" };

      userAppointmentListByMy(req2).then((res) => {
        if (res.code == "0" && res.data) {
          this.aNum = res.data.length

        }
        else{
          this.aNum =0
        }
      });
    },

    onClickToList(url) {
      uni.navigateTo({
        url,
      });
    },

    onTap() {
      //  uni.showToast('敬请期待')
    }

  }
};
</script>

<style lang="scss">
page {
  background: #F3F6FC;
}
.person-pointer {
  margin: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-items {
	  width: 33.33%;
	  color: #999;
	  text-align: center;
	  .value {
		  font-weight: bold;
		  font-size: 20px;
		  margin-left: 8px;
		  color: #333;
	  }
	  .icon {
		  width: 50px;
		  height: 50px;
	  }
  }
}
.person-member {
  border-radius: 14px;
  background: #394156;
  margin: 14px;
  overflow: hidden;
  background: url("../../static/icon_svg/mine/vip_bg.svg") no-repeat;
  background-size: 100% auto;
  width: calc(100% - 28px);
  height: 200rpx;
  .person-member-header {
    height: 36px;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #f0f5f7;
    border-bottom: 1px #41465c solid;

    .imgs {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
  .person-member-bodyer {
    // background: #42475d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fae9db;
    padding: 14px 14px;

    .line {
      width: 2px;
      height: 40px;
    }
    .items {
      width: 30%;
      text-align: center;
      .title {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .des {
        font-size: 10px;
      }
    }
  }
}
.person-operation {
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	.operation-item {
		text-align: center;
		.imgs {
			width: 50px;
			height: 50px;
		}
		.title {
			color: #333333;
			font-size: 16px;
		}
	}
}
.person-title {
  margin: 24px 14px;
  font-size: 16px;
}
.person-list {
	background-color: #FFFFFF;
	width: 90%;
	margin: 20px;
	border-radius: 4px;
	.item {
		padding: 0 20px;
		&-inner {
			height: 50px;
			width: 100%;
			line-height: 50px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #F5F5F5;
			.item-label {
				color: #333333;
				font-size: 14px;
			}
      .item-icon {
        width: 14rpx;
        .img {
          width: 100%;
          height: 100%;
        }
      }
		}
	}
}

/** 顶部背景 **/
.bg {
  background: url("@/static/icon_svg/mine/top_bg.svg") no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 400rpx;;
}

.head {
  font-weight: 400;
  line-height: 16px;
  font-size: 12px;
  background-repeat: no-repeat;
  background-position: -20px -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  padding-bottom: 0px;
  margin-top: -400rpx;
  // background-color: #fff;
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
    -webkit-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.1);
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.1);
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
  font-weight: 600;
  margin-left: 4px;
}

.health_btn {
  margin-right: 14px;
  font-size: 13px;
  padding: 4px 10px;
  border: solid 1px #FF3200;
  border-radius: 15px;
  color: #FF3200;
  display: flex;
  align-items: center;

  & span {
    margin-left: 2px;
  }
}
</style>
