<template>
  <view class="ronin-order-item-sample">
    <view class="card-des">
      <view class="card-title">
        <view>样本信息</view>
        <view style="color: #2979ff" v-if="showCheck" @click="onClickType">{{upStateType?'取消': '去采样'}}</view>
      </view>
      <view class="cell" v-if="length !== 1"
        ><u-icon name="error-circle-fill" size="40"></u-icon
        >请采集样本前先对试管扫码</view
      >

      <view class="cell-sub" v-if="length !== 1"></view>

      <view class="box" v-for="(item, index) in itemList" :key="index">
        <view class="card-company">
          <u-image
            class="img"
            width="112"
            height="114"
            src="/static/img/tube.png"
          ></u-image>
          <view class="card-company-content">
            <view class="title">{{ item.tubeTypeName }}</view>
            <view class="sub-title"> {{ item.sampleTypeName }}3ml</view>
            <view class="sub-title"> {{showCheck ?'具体请参考采样要求' : item.testingSampleCode}}</view>
          </view>
        </view>
        <view class="input-box" v-if="upStateType ">
          <u-search
            placeholder="请输入编码号或扫码"
            search-icon="undefined"
            :show-action="false"
            :disabled="item.state == '0' && state != 110 ? false : true"
            height="72"
            v-model="item.testingSampleCode"
            @blur="onInputBlur(index)"
          ></u-search>
          <u-button
            @click="see(index)"
            :disabled="item.state == '0' && state != 110 ? false : true"
            class="btn"
            type="primary"
            shape="circle"
            size="medium"
            >扫码</u-button
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 2,
    },
    list: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: "nopay",
    },
    state: {
      type: [String, Number],
      default: 100,
    },
    upStateType: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    list: {
      handler(val) {
        let check = false
        this.itemList = this.list.map((item) => {
           if(!item.testingSampleCode){
             check = true
           }
          if (!item.code) {
            item.code = "";
          }

          return item;
        });
        if(check){
          // 有空的未填
          this.showCheck = true
        }else{
           this.showCheck = false
        }
      },
      immediate: true,
      deep: true,
    },

    length: {
      handler(val) {
        if (val == 1) {
          this.list = [{ id: "1231254132" }];
        } else {
          this.list = [{ id: "" }, { id: "" }];
        }
      },
      immediate: true,
      deep: true,
    },
    type: {
      handler(val) {
        if (val == "ingtest" || val == "complete") {
          this.list = [{ id: "sj834039024" }, { id: "dh023940234324" }];
        }
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      itemList: [],
      showCheck:false,
    };
  },
  methods: {
    onClickType() {
      this.$emit("onClickType");
    },
    onInputBlur(index) {
      // let item = this.list[index]

      // that.itemList[index].code =res.result;
      // that.list[index].code =that.itemList[index].code
      let that = this;
      that.$emit("upDateList", that.itemList);
    },
    see(index) {
      let that = this;
      //  console.log(that.itemList[index],'显示数据哈哈哈')
      // that.itemList[index].code =123;

      uni.scanCode({
        success: function (res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
          that.itemList[index].code = res.result;
          that.itemList[index].testingSampleCode = res.result;
          // that.list[index].code =res.result;
          that.$emit("upDateList", that.itemList);
          //  that.$forceUpdate()
        },
        fail: function (res) {},
      });
    },
  },
};
</script>


<style lang='scss' scoped>
.ronin-order-item-sample {
  .card-des {
    border-radius: $u-border-radius;
    margin: $u-padding-width-card $u-padding-width-outer;
    background: #fff;
    padding: $u-padding-width-card;
    padding-bottom: 40rpx;
    padding-top: 40rpx;
    position: relative;
    .card-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: $u-padding-width-within;
    }

    .card-content {
      background: $u-bg-ash;
      border-radius: $u-border-radius;
    }
    .cell {
      position: absolute;
      width: 100%;
      background: #fffaf0;
      left: 0;
      padding: 0 $u-padding-width-card;
      height: 88rpx;
      line-height: 88rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $u-type-warning;
    }
    .cell-sub {
      height: 88rpx;
      margin-bottom: $u-padding-width-within;
    }
    .box {
      margin-bottom: 30rpx;
      .card-company {
        min-height: 160rpx;
        background: #fff;

        display: flex;
        justify-content: space-between;

        .img {
          margin-right: 20rpx;
        }
        .card-company-content {
          flex: 1;
          .title {
            margin-bottom: $u-padding-text;
          }
          .sub-title {
            font-size: $u-font-size-small;
            color: $u-font-color-gray;
            margin-bottom: $u-padding-text;
          }
          .tag {
            margin-right: 10rpx;
          }
        }
      }
      .input-box {
        position: relative;
        .btn {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 100;
          ::v-deepbutton {
            height: 100% !important;
            line-height: 1;
            font-size: 28rpx;
          }
        }
      }
    }
  }
}
</style>