<template>
  <view class="app-check-detail">
    <view class="app-check-detail-group-header">
      <view class="app-check-detail-group-header-box">
        <view class="app-check-detail-group-header-box-info">
          <view class="app-check-detail-group-header-box-info-title"
            >重点筛查项目</view
          >
          <view class="app-check-detail-group-header-box-info-des"
            >专业筛查存在较高患病风险的疾病</view
          >
        </view>
        <view class="app-check-detail-group-header-box-nums"></view>
      </view>
    </view>

    <view
      class="app-check-detail-item"
      v-for="item of highList"
      :key="'items' + item.id"
    >
      <view class="app-check-detail-item-header">
        <view class="app-check-detail-item-header-title">{{ item.name }}</view>
        <view class="app-check-detail-item-header-control"></view>
      </view>
      <view class="app-check-detail-item-bodyer">
        <view class="app-check-detail-item-bodyer-info">
          {{ item.remark }}
        </view>
        <view class="app-check-detail-item-bodyer-des">
          <view class="app-check-detail-item-bodyer-des-tips"
            >检查频次: {{ item.frequency }}</view
          >
          <view class="app-check-detail-item-bodyer-des-tips"
            >推荐原因:{{ item.reason }}</view
          >
        </view>
      </view>
    </view>

    <view
      class="app-check-detail-group-header app-check-detail-group-header-normal"
    >
      <view class="app-check-detail-group-header-box">
        <view class="app-check-detail-group-header-box-info">
          <view class="app-check-detail-group-header-box-info-title"
            >常规检查项目</view
          >
          <view class="app-check-detail-group-header-box-info-des"
            >筛查有一定患病风险的疾病</view
          >
        </view>
        <view class="app-check-detail-group-header-box-nums"></view>
      </view>
    </view>

    <view
      class="app-check-detail-item"
      v-for="item of middleList"
      :key="'items' + item.id"
    >
      <view class="app-check-detail-item-header">
        <view class="app-check-detail-item-header-title">{{ item.name }}</view>
        <view class="app-check-detail-item-header-control"></view>
      </view>
      <view class="app-check-detail-item-bodyer">
        <view class="app-check-detail-item-bodyer-info">
          {{ item.remark }}
        </view>
        <view class="app-check-detail-item-bodyer-des">
          <view class="app-check-detail-item-bodyer-des-tips"
            >检查频次: {{ item.frequency }}</view
          >
          <view class="app-check-detail-item-bodyer-des-tips"
            >推荐原因:{{ item.reason }}</view
          >
        </view>
      </view>
    </view>
    <view class="bottom_bar">
      <view class="btn-info" @click="onTap">回到首页</view>
      <view class="btn-ok" @click="onTap2">立即预约</view>
    </view>
  </view>
</template>

<script>
import { getTestingListByScaleResult } from "@/api/check";
export default {
  data() {
    return {
      id: "",
      middleList: [],
      highList: [],
      listItem: [],
      arr: [],
    };
  },
  onLoad(e) {
    if (e) {
      this.id = e.id;
      this.getList();
    }
  },
  methods: {
    onTap(){
      uni.switchTab({
        url:'/pages/home/home'
      })
    },
    onTap2(){
      uni.showModal({
        title:'提示',
        content:'体检项目需对接至平台'
      })
    },
    getList() {
      getTestingListByScaleResult({ scaleResultId: this.id }).then((res) => {
        if (res.code == "0" && res.data) {
          //this.updateData(res.data);
          let list = res.data;
          for (let v of list) {
            if (v.level === "低") {
              this.middleList.push(v);
            }
            if (v.level === "高") {
              this.highList.push(v);
            }
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background: #f2f2f2;
}
.bottom_bar{
  background: #fff;
  padding: 20px;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn-info{
    width: 42vw;
    border: 1px #377dff solid;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #377dff;
    border-radius: 4px;
  }
  .btn-ok{
    width: 42vw;
    border: 1px #377dff solid;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #377dff;
    border-radius: 4px;
  }
}
.app-check-detail {
  padding: 20px;
  padding-bottom: 100px;
  .app-check-detail-group-header {
    height: 70px;
    background: #fef3f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;

    .app-check-detail-group-header-box {
      &-info {
        &-title {
          color: #e94732;
          font-size: 18px;
          font-weight: bold;
        }
        &-des {
          color: #666;
          font-size: 12px;
          margin-top: 4px;
        }
      }
    }
  }
  .app-check-detail-group-header-normal {
    margin-top: 20px;
    background: #effaf6;
    .app-check-detail-group-header-box {
      &-info {
        &-title {
          color: #333;
          font-size: 18px;
          font-weight: bold;
        }
        &-des {
          color: #666;
          font-size: 12px;
          margin-top: 4px;
        }
      }
    }
  }
  .app-check-detail-item {
    background: #fff;
    padding: 14px;
    .app-check-detail-item-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 34px;
      margin-bottom: 10px;
      &-title {
        font-size: 16px;
        font-weight: bold;
      }
      &-control {
        font-size: 14px;
        color: #999;
      }
    }
    .app-check-detail-item-bodyer {
      font-size: 14px;
      line-height: 1.4;
      &-des {
        margin-top: 10px;
        color: #666;
        &-tips {
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>