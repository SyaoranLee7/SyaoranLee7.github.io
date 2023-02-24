<template>
  <view class="mine-info">
	  <view class="alert">信息由政府授权机构管理，安全无虞（出自体检报告，暂不可更改）</view>
	  <view class="info">
		  <!-- 头像 -->
		  <view class="avatar">
			  <img src="@/static/img/mine/avatar-background.svg" class="avatar-background" />
			  <view class="avatar-main">
				  <img :src="vuex_user.sex && vuex_user.sex === '0' ? avatarMale : avatarFemale" class="img" />
			  </view>
			  <view class="avatar-id">{{ userId }}</view>
			  <view class="avatar-healthy">健康号：{{ healthyId }}</view>
		  </view>

		  <!-- 信息 -->
		  <view class="detail">
			  <view class="item">
			  	<view class="item-inner">
			  		<view class="item-label">姓名</view>
			  		<view class="item-value">{{ vuex_user.realName }}</view>
			  	</view>
			  </view>
			  <view class="item">
			  	<view class="item-inner">
			  		<view class="item-label">性别</view>
			  		<view class="item-value">-</view>
			  	</view>
			  </view>
			  <view class="item">
			  	<view class="item-inner">
			  		<view class="item-label">出生日期</view>
			  		<view class="item-value">-</view>
			  	</view>
			  </view>
			  <view class="item">
			  	<view class="item-inner">
			  		<view class="item-label">所在地</view>
			  		<view class="item-value">-</view>
			  	</view>
			  </view>
			  <view class="item">
			  	<view class="item-inner">
			  		<view class="item-label">手机号</view>
			  		<view class="item-value">{{ vuex_user.mobile }}</view>
			  	</view>
			  </view>
			  <view class="item">
			  	<view class="item-inner">
			  		<view class="item-label">工作单位</view>
			  		<view class="item-value">{{ vuex_user.organName || "-"}}</view>
			  	</view>
			  </view>
		  </view>
	  </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
		userId: "微信ID",
		healthyId: "E423353432",
		avatarMale: "https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-m.png",
		avatarFemale: "https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-w.png"
    };
  },

  onLoad () {
  },

  methods: {
  },
};
</script>

<style lang="scss">
page {
  background: #F3F6FC;
}
.mine-info {
	.alert {
		color: #773A00;
		background-color: rgba(119,58,0,.2);
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 14px;
		padding: 2px 10px;
		margin: 10px;
		letter-spacing: 1px;
		text-align: center;
	}
	.info {
		background-color: #FFFFFF;
		margin: 0 10px 10px 10px;
		border-radius: 5px;
		.avatar {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 40px 0;
			text-align: center;
			&-background {
				width: 100%;
				position: absolute;
			}
			&-main {
				img {
					border-radius: 50%;
					width: 64px;
					height: 64px;
					border: 3px #fff solid;
					-webkit-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.1);
					box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.1);
				}
			}
			&-id {
				height: 50px;
				line-height: 50px;
				font-size: 24px;
				font-weight: 700;
			}
			&-healthy {
				height: 30px;
				line-height: 30px;
				font-size: 14px;
			}
		}
	}
	.detail {
		background-color: #FFFFFF;
		margin: 0 10px;
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
			}
		}
	}
}
</style>
