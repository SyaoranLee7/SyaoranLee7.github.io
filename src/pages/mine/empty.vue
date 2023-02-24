<template>
  <view class="mine-empty">
	  <image src="@/static/img/empty.svg" class="imgs" />
	  <view class="footer">
		  ITG健康大数据
	  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {
  },
};
</script>

<style lang="scss">
page {
  background: #F3F6FC;
}
.mine-empty {
	width: 100%;
	height: 100%;
	.imgs {
		width: 100%;
		height: 200px;
		text-align: center;
		margin: 0 auto;
		margin-top: 200px;
	}
	.footer {
		color: #999999CC;
		font-family: PingFang SC;
		font-weight: regular;
		font-size: 12px;
		line-height: 53.28px;
		letter-spacing: 2px;
		text-align: center;
		margin-top: 200px;
	}
}
</style>