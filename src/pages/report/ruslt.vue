<template>
  <view class="app-plan">
    <view class="no-data">
      <view class="no-date-item">
        <image
          src="https://htl001.oss-cn-hangzhou.aliyuncs.com/images/no-data.png"
          mode="widthFix"
        />
        <view class="no-date-title"> 提交成功,我们会尽快联系您</view>
        <u-button type="primary" style="width: 34vw" @click="onTap"
          >返回首页</u-button
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      current: 0,
      show: false,
      tabs: [],
      data: [],
      item: {},
    };
  },

  filters: {},

  onLoad() {},
  methods: {
    onTap() {
      uni.redirectTo({
        url: "/pages/guomao/guomao",
      });
    },
  },
};
</script>

<style lang="scss" >
page {
  background: #fafafa;
}
.warp {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .warp-box {
    width: 80vw;
    background: #fff;
    border-radius: 14px;
    padding-bottom: 20px;
    overflow: hidden;

    .warp-box-header {
      background: #e5fef4;
      padding-bottom: 20px;

      .warp-box-image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;

        .image {
          width: 120px;
          height: 70px;
          object-fit: cover;
        }
      }
    }
    .warp-box-title {
      margin-top: 14px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .warp-box-des {
      padding: 0px 20px;
      margin-bottom: 30px;
      line-height: 1.4;
      color: #999;
    }
    .warp-box-btn {
      margin: 20px 20px;
      margin-bottom: 0px;
      height: 32px;
      border-radius: 16px;
      background: #38cb89;
      line-height: 32px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.app-plan {
  width: 100vw;
}

.app-plan-list {
  width: 100vw;
}
.app-plan-list-date {
  margin: 18px 14px;
  font-weight: 600;
  font-size: 16px;
}
.app-plan-list-item {
  margin: 14px;
  height: 110px;
  background: #fff;
  border-radius: 10px;
  padding: 0px 14px;
  padding-bottom: 14px;

  .app-plan-list-item-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    .app-plan-list-item-header-icon {
      width: 44px;
      height: 44px;
      margin-right: 10px;
      margin-top: 10px;
      .app-plan-list-item-header-icon-images {
        width: 44px;
        height: 44px;
        border-radius: 22px;
      }
    }
    .app-plan-list-item-header-status {
      width: 48px;
      height: 54px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: center;
      .app-plan-list-item-header-status-txt {
        margin-top: 10px;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin-top: 6px;
      }
      .app-plan-list-item-header-status-icon {
        width: 20px;
        height: 20px;
        margin-top: 4px;
      }
    }
    .app-plan-list-item-header-info {
      flex: 1;
      margin-top: 10px;
      .app-plan-list-item-header-info-title {
        font-size: 16px;
        font-weight: 600;
      }
      .app-plan-list-item-header-info-des {
        margin-top: 4px;
        color: #999;
      }
    }
  }
  .app-plan-list-item-bodyer {
    overflow: hidden;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 12px;
    line-height: 1.4;
  }
}
.bg-finish {
  background: #38cb89;
}
.bg-wait {
  background: #ffc040;
}
.no-data {
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .no-date-item {
    width: 80vw;
    .no-date-title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 14px;
      font-weight: bold;
    }
  }
}
</style>