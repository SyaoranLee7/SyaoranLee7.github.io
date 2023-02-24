<template>
  <view class="ronin-helth-form">
    <view class="head">
      <u-image
        class="bg"
        width="686rpx"
        height="200rpx"
        src="@/static/img/img-list-head.jpg">
      </u-image>
      <view class="text title">健康管理师定制体检项目</view>
      <view class="text">专业健康分析 疾病排筛</view>
    </view>

    <!-- <u-tabs
      :list="companyList"
      :is-scroll="false"
      :current="current"
      @change="change"
    ></u-tabs> -->
    <view
      class="section"
      :class="'section' + indexEle"
      v-for="(element, indexEle) in list"
      :key="indexEle + '6789ok1m'"
    >
      <view class="titles">{{ element.name }}</view>
      <view
        class="item"
        v-for="(item, index) in element.list"
        :key="index + '6789okm'"
        @click="onClickItem(item)"
      >
        <u-image
          class="img"
          width="160rpx"
          height="160rpx"
          :src="item.img || src"
        ></u-image>
        <view class="item-content">
          <view class="title">{{ item.name }}</view>
          <view class="sub-title">{{ item.remark }}</view>
          <view class="bottom">
            <view v-if="item.priceSettle">
              <text class="price">¥</text>
              <text class="price price-big">{{ item.priceSettle }}</text>
              <text class="old-price">¥{{ item.price }}</text>
            </view>
          </view>
        </view>
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
  data() {
    return {
      src: "https://fc1tn.baidu.com/it/u=1636824733,1780640873&fm=202&src=766&fc=tdmatt&mola=new&crop=v1",
      list: [],
      batchList: [], //批次列表
      companyList: [], //公司列表
      current: 0,
      value1: "",
      options: [
        {
          label: "默认排序",
          value: 1,
        },
        {
          label: "距离优先",
          value: 2,
        },
        {
          label: "价格优先",
          value: 3,
        },
      ],
    };
  },
  onLoad() {
    this.getBatchList();
  },
  methods: {
    change(e) {
      this.current = e;

      let name = ".section" + e;

      uni
        .createSelectorQuery()
        .select(name)
        .boundingClientRect((data) => {
          console.log(data,'显示数据哈哈哈')
          //目标位置的节点：类或者id
          uni
            .createSelectorQuery()
            .select(".ronin-helth-form")
            .boundingClientRect((res) => {
              //最外层盒子的节点：类或者id
              uni.pageScrollTo({
                duration: 100, //过渡时间
                scrollTop: data.top - res.top, //到达距离顶部的top值
              });
            })
            .exec();
        })
        .exec();
    },
    getBatchList() {
      medicalProjectBatchList({}).then((res) => {
        if (res.code == "0" && res.data) {
          this.companyList = res.data.medicalCompanyList; //公司列表
          this.companyName = this.companyList[0].name;
          this.value1 = res.data.id;
          this.getList(res.data.medicalCompanyNo);
        }
      });
    },

    getList(e) {
      let req = { type: "g" };
      if (e) {
        req.companyNos = e;
      }
      medicalProjectQueryProject(req).then((res) => {
        if (res.code == "0" && res.data?.records) {
          let data = res.data.records;
          let arr = [];
          data.forEach((element) => {
            let check = true;
            arr.forEach((item) => {
              if (item.companyNo == element.companyNo) {
                check = false;
                item.list.push(element);
              }
            });
            if (check) {
              arr.push({
                companyNo: element.companyNo,
                name: element.companyName,
                list: [element],
              });
            }
          });
          this.list = arr;
        }
      });
    },
    onClickItem(item) {
      uni.navigateTo({
        url: `/pages/health-form/details?id=${item.id}&batchId=${this.value1}`,
      });
    },

    //------------ 事件结束----
  },

  //export 结束
};
</script>

<style lang='scss' scoped>
.ronin-helth-form {
  ::v-deep.u-dropdown__menu__item {
    justify-content: flex-start;
    padding-left: 30rpx;
  }
  .head {
    width: 100%;
    height: 262rpx;
    position: relative;
    padding: 32rpx;
    background: #fff;
    .bg {
      position: absolute;
      top: 32rpx;
      left: 32rpx;
      z-index: 1;
    }
    .text {
      position: relative;
      z-index: 10;
      font-size: 24rpx;
      margin-bottom: 8rpx;
      margin-left: 40rpx;
    }
    .title {
      font-size: 36rpx;
      padding-top: 62rpx;
      font-weight: bold;

    }
  }
  .item {
    background: #fff;
    display: flex;
    flex-direction: row;
    border-bottom: 1px #eee solid;
    margin: 10px 0px;
    padding-bottom: 10px;
    .item-content {
      flex: 1;
      padding-left: 20rpx;
      display: flex;
      flex-direction: column;
      .title {
        align-self: flex-start;
        font-size: 30rpx;
        margin-bottom: 10rpx;

      }
      .sub-title {
        font-size: 24rpx;
        color: #b0aeae;

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .bottom {
        flex: 1;
        font-size: 24rpx;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .price {
          color: #ff5d16;
          margin-right: 6rpx;
        }
        .price-big {
          font-weight: 600;
          font-size: 32rpx;
        }
        .old-price {
          color: #cccccc;
          text-decoration: line-through;
        }
      }
    }
  }
}
.section {
  margin: 14px;
  background: #fff;
  border-radius: 14px;
  padding: 10px 14px;
  .titles {
    font-size: 32rpx;
    margin-bottom: 32rpx;
    margin-top: 10rpx;
    font-weight: bold;

  }
}
</style>
