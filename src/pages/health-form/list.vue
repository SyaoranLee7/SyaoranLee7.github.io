<template>
  <view class="examiantion-home">
    <!-- banner -->
    <view class="banner">
      <image class="banner-img" src="@/static/icon_svg/healthy_examination/banner.svg" />
    </view>

    <!-- 功能按钮 -->
    <view class="operation">
      <view class="item" @click="goMine">
        <image class="item-img" src="@/static/icon_svg/healthy_examination/my_appointment.svg" />
        <view class="item-title">我的预约</view>
        <view class="item-sub">预约详情</view>
      </view>
      <view class="item" @click="goReading">
        <image class="item-img" src="@/static/icon_svg/healthy_examination/notice.svg" />
        <view class="item-title">预约须知</view>
        <view class="item-sub">服务流程细则</view>
      </view>
      <view class="item" @click="goRecords">
        <image class="item-img" src="@/static/icon_svg/healthy_examination/reports.svg" />
        <view class="item-title">体检报告</view>
        <view class="item-sub">报告查询解读</view>
      </view>
    </view>

    <!-- 套餐选择 -->
    <view class="package module">
      <view class="header">
        <view class="title">职工年度体检</view>
        <view class="btn">
          <picker :value="companyIndex" :range="companyList" @change="selectHospital">
						<view class="btn-text">{{ companyList[companyIndex] || "筛选医院" }} ></view>
					</picker>
        </view>
      </view>
      <view v-if="list.length" class="package-list">
        <view
          v-for="(item, index) in list"
          :key="index"
          class="item"
          @click="onClickItem(item)">
          <image
            v-if="item.image"
            class="item-image"
            :src="item.image" />
          <img
            v-else
            class="item-image"
            src="@/static/icon_svg/healthy_examination/image_default.png" />
          <view class="item-content">
            <view class="title">{{ item.name }}</view>
            <view class="cost">￥ {{ item.priceSettle }}</view>
            <view class="tags">
              <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="tags-item">
                {{ tagItem }}
              </view>
            </view>
          </view>
        </view>
      </view>
      <view v-else class="package-empty">
        <image src="@/static/icon_svg/healthy_examination/no_more.svg" class="empty" />
      </view>
    </view>
  </view>
</template>

<script>
import {
  medicalProjectBatchList,
  medicalProjectQueryProject,
} from "@/api/healthForm";
export default {
  name: "ExaminationHome", // 体检首页

  data () {
    return {
      companyIndex: "", // 当前选择的医院index
      companyName: "", // 当前选择的医院名称
      companyList: [], // 体检医院列表
      companyListData: [], // 体检医院列表数据
      list: [] // 套餐列表
    };
  },

  onLoad () {
    this.getBatchList();
  },

  methods: {
    /* 获取医院列表 */
    getBatchList() {
      medicalProjectBatchList({}).then((res) => {
        if (res.code == "0" && res.data) {
          this.companyListData = res.data.medicalCompanyList; //公司列表
          this.companyList = res.data.medicalCompanyList.map(i => {
            return i.name;
          });

          // 默认选择第一个医院
          if (res.data.medicalCompanyList.length) {
            this.companyIndex = 0;
            this.companyName = res.data.medicalCompanyList[0].name;
            this.getList(res.data.medicalCompanyNo[0]);
          }
        }
      });
    },

    /* 选择医院 */
    selectHospital (val) {
      this.companyIndex = val.detail.value;
      this.companyName = this.companyListData[this.companyIndex].name;
      this.getList(this.companyListData[this.companyIndex].code);
    },

    /* 获取医院下的套餐列表 */
    getList (e) {
      let req = { type: "g" };
      if (e) req.companyNos = e;
      medicalProjectQueryProject(req).then((res) => {
        if (res.code == "0") {
          if (res.data && res.data.records) {
            // 生成tags
            res.data.records.forEach(i => {
              i.tags = [];
              if (i.gender) {
                if (i.gender === "1") i.tags.push("男用");
                else if (i.gender === "2") i.tags.push("女用");
                else if (i.gender === "3") i.tags.push("男女通用");
              }
              i.tags.push(this.companyName);
            });
            this.list = res.data.records;
          }
          else this.list = [];
        }
      });
    },

    /* 选择套餐跳转 */
    onClickItem(item) {
      uni.navigateTo({
        url: `/pages/health-form/details?id=${item.id}&batchId=${this.value1}&name=${this.companyName}`,
      });
    },

    /* 跳转 我的预约 */
    goMine () {
      uni.navigateTo({
        url: "/pages/health-form/appointmentList",
      });
    },
    /* 跳转 预约须知 */
    goReading () {
      uni.navigateTo({
        url: "/pages/health-form/reading",
      });
    },
    /* 跳转体检报告 */
    goRecords () {
      uni.navigateTo({ url: "/pages/check-records/list" });
    }
  },
};
</script>

<style lang="scss" scoped>
.examiantion-home {
  /** banner **/
  .banner {
    width: 100%;
    &-img {
      width: 100%;
    }
  }

  /** 通用模块样式 **/
  .module {
    margin: 0 10px;
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .title {
        height: 24px;
        line-height: 24px;
        border-left: 4px solid #2FA1A4;
        padding-left: 10px;
        font-size: 20px;
        color: #333333;
      }
      .btn {
        height: 24px;
        &-text {
          height: 24px;
          line-height: 24px;
          color: #666666;
          font-size: 14px;
        }
      }
    }
  }

  /** 功能按钮 **/
  .operation {
    width: calc(100% - 20px);
    position: absolute;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 20px 25px 30px 25px;
    margin: -40px 10px 10px 10px;
    border-radius: 20px;
    .item {
      text-align: center;
      &-img {
        width: 70px;
        height: 59px;
      }
      &-title {
        height: 30px;
        line-height: 30px;
        font-size: 34rpx;
        color: #333333;
      }
      &-sub {
        font-size: 26rpx;
        color: #CCCCCC;
      }
    }
  }

  /** 套餐选择 **/
  .package {
    margin-top: 140px;
    &-list {
      .item {
        display: flex;
        background-color: #FFFFFF;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 10px;
        &-image {
          width: 90px;
          height: 90px;
        }
        &-content {
          margin-left: 10px;
          width: calc(100% - 100px);
          .title {
            color: #222222;
            font-size: 20px;
            height: 34px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .cost {
            color: #FF4E00;
            font-size: 14px;
          }
          .tags {
            display: flex;
            margin-top: 13px;
            overflow: auto;
            &-item {
              background-color: #F6F7F9;
              border-radius: 4px;
              color: #666666;
              height: 24px;
              line-height: 24px;
              font-size: 12px;
              padding: 0 5px;
              margin-right: 10px;
              flex-shrink: 0;
            }
          }
        }
      }
    }
    &-empty {
      text-align: center;
      .empty {
        width: 200px;
        height: 240px;
      }
    }
  }
}
</style>
