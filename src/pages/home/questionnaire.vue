<template>
  <view
    class="plan-flow"
   
  >
    <!-- <view class="plan-flow-history" @click="onClickHistory">历史计划书</view> -->
    <view class="plan-flow-card">
      <view class="plan-flow-card-icon"></view>
      <view class="plan-flow-card-stepper">
        <view class="now">{{ index + 1 }}</view>
        <view class="all">/{{ list.length }}</view>
      </view>
      <view class="plan-flow-card-title">{{ title }}</view>
      <view class="plan-flow-card-des">{{ description }}</view>
      <!-- 按钮 -->
      <view
        v-for="(item, answerIndex) in answerList"
        :key="answerIndex"
        @click="onClickButtom(answerIndex)"
      >

       <m-buttom
          :value="item.name"
          color="#2281FF"
         
        ></m-buttom>
      
      </view>

      <view class="plan-flow-card-button">
        <u-button
          class="button-up"
          type="info"
          :plain="true"
          :round="true"
          @click="onClickUp"
          >{{ index === 0 ? "" : "上一步" }}</u-button
        >
        <u-button
          class="button-next"
          type="info"
          :round="true"
          size='small'
          v-if="showRuler || list.length - 1 == index"
          @click="onClickNext"
          >{{ index === list.length - 1 ? "生成计划书" : "下一步" }}</u-button
        >
      </view>

      <!-- 刻度尺 -->
      <view class="plan-flow-ruler">
        <view class="plan-flow-ruler-item" v-if="showRuler">
          <!-- <ruler @post-NumValue="rulerNum" :NowNum="age"></ruler> -->
        </view>
      </view>
    </view>

  
  </view>
</template>

<script>
// import {
//   getFlowQuestionOptions,
//   getCustomerQuestionsInfo,
//   getQuestionUserId,
// } from "@/api/plan";

// import { setNavTitle } from "@/utils/withdraw";
// import { Notify } from "vant";

import MButtom from "./MButtom.vue";

export default {
  components: { MButtom },
  data() {
    return {
      value: 60,
      show: false,
      username: "",
      showPront: false,

      list: [], //全部问题
      answerList: [
          {name:'答案一'}
      ], //问题列表
      description: "", //问题描述
      title: "", //问题
      index: 0, //问题进度
      age: 18, //年龄
      showRuler: false,
      showNotify: false,
      requestList: [],
    };
  },
  
  onLoad() {
    console.log(this)
    this.init();
  },
  methods: {
    onClickHistory() {
      this.$router.push({
        path: "/plan/history",
      });
    },
    init() {
      this.getDetails();
    },
    getDetails() {
    //   getFlowQuestionOptions().then((res) => {
    //     if (res && res.data && res.code === "0000") {
    //       this.list = res.data;
    //       this.showMessage();
    //     }
    //   });
    },
    showMessage() {
      //切换问题显示页面
      if (this.list && this.list[this.index]) {
        this.answerList = [];
        this.showRuler = false;
        let message = this.list[this.index];
        this.title = message.titile;
        this.description = message.description;
        let answerObj = message.answerList; // [{a: "帅哥", b: "美女"}] 这样的数据
        if (message.optionType == 2) {
          //刻度尺
          this.showRuler = true;
        }
        if (answerObj && typeof answerObj[0] === "object") {
          let listQuestion = Object.keys(answerObj[0]);
          if (listQuestion.length !== 0) {
            this.answerList = listQuestion.map((res) => {
              return { key: res, name: answerObj[0][res] };
            });
          }
        }
      }
    },

    onClickUp() {
      if (this.index == 0) {
        return;
      }
      this.index--;
      this.showMessage();
    },
    onClickNext() {
      if (this.index < this.list.length) {
        if (typeof this.list[this.index].checkIndex == "number") {
          this.pushRequestList();
          if (
            this.requestList.length == this.list.length &&
            this.index == this.list.length - 1
          ) {
            //在这里唤起提交

            this.show = true;
          } else {
            this.index++;
            this.showMessage();
          }
        } else {
          if (this.list[this.index].optionType == 2) {
            //这是年龄
            this.pushRequestList();
            if (
              this.requestList.length == this.list.length &&
              this.index == this.list.length - 1
            ) {
              //在这里唤起提交
              this.show = true;
            } else {
              this.index++;
              this.showMessage();
            }
          } else {
            //提示选择
            // Notify({ type: "success", message: "请选择", duration: 1000 });
          }
        }
      }
    },
    //点击答案的按钮
    onClickButtom(index) {
      this.$set(this.list[this.index], "checkIndex", index);
      this.list[this.index].checkIndex = index;

      if (this.list.length - 1 == this.index || this.showRuler) {
        //最后一步
        return;
      }
      //没有下一步按钮的需要触发一下
      this.onClickNext();
    },
    //添加问题答案选项
    pushRequestList() {
      //  typeof this.list[this.index].checkIndex == "number"
      try {
        if (this.requestList.length > this.index) {
          //已经添加过的
          if (this.list[this.index].optionType == 2) {
            this.requestList[this.index].optionName = this.age;
          } else {
            this.requestList[this.index].optionName = this.answerList[
              this.list[this.index].checkIndex
            ].name;

            this.requestList[this.index].optionKey = this.answerList[
              this.list[this.index].checkIndex
            ].key;
          }
        } else {
          //添加新的
          if (this.list[this.index].optionType == 2) {
            this.requestList.push({
              id: this.list[this.index].id,

              optionName: this.age,
              optionType: 2,
            });
          } else {
            this.requestList.push({
              id: this.list[this.index].id,
              optionKey: this.answerList[this.list[this.index].checkIndex].key,
              optionName: this.answerList[this.list[this.index].checkIndex]
                .name,
              optionType: 1,
            });
          }
        }
      } catch (error) {
        console.log('数据出问题了')
      }
    },
    onClickSubmit() {
      if (this.showPront) {
        return;
      }
      if (this.username) {
        let data = {
          customerName: this.username,
          list: this.requestList,
          type:1
        };
        //把数据传到计划书页面
        this.$bus.$emit("plan_book", data);

        getQuestionUserId(data).then((res) => {
          if (res && res.data && res.code == "0000") {
            this.$router.push({
              path: "/plan/book",
              query: {
                share: 1,
                id: res.data,
              },
            });
          }
        });
      } else {
        this.showPront = true;
      }
    },
    handleInput() {
      if (/^[\u4e00-\u9fa5]+$/i.test(this.username)) {
        this.showPront = false;
      } else {
        this.showPront = true;
      }
    },
    rulerNum(value) {
      this.age = value;
    },
    focus() {},
  },
};
</script>

<style lang="scss">
.plan-flow {
  height: 100vh;
  background: linear-gradient(180deg, #333e7a 0%, #2e3b73 100%);
  //background: url("../../../assets/images/plan/img-bg-plan@2x.png") #333e7a;
  background-size: cover;
  
  padding: 0 32rpx;

  .plan-flow-history {
    position: absolute;
    height: 108rpx;
    line-height: 108rpx;
    top: 0;
    width: calc(100% - 64rpx);
    text-align: right;
    color: #ffffff;
    font-size: 32rpx;
  }
  .plan-flow-card {
    position: absolute;
    width: calc(100% - 64rpx);
    min-height: 864rpx;
    top: 108rpx;
    border-radius: 32rpx;
    // background: url("../../../assets/images/plan/img-bg-card@2x.png") #fff
    //   no-repeat;
    background: #fff;
    background-size: 80vw;
    background-position: top right;
    padding-left: 43rpx;
    padding-right: 43rpx;
    padding-bottom: 100rpx;
    touch-action: none;
    .plan-flow-card-icon {
      position: absolute;
      width: 112rpx;
      height: 130rpx;
      left: 78.57%;
      right: 5.1%;
      top: 3.42%;
      bottom: 83.09%;
    //   background: url("../../../assets/images/plan/icon-plan@2x.png");
      background-size: cover;
    }
    .plan-flow-card-stepper {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      color: #2281ff;
      padding-top: 48rpx;
      padding-bottom: 32rpx;
      .now {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 82rpx;
        height: 94rpx;
        line-height: 94rpx;
        margin: 0;
      }

      .all {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 28rpx;
        height: 32rpx;
        line-height: 32rpx;
        margin: 0;
        opacity: 0.6;
      }
    }
    .plan-flow-card-title {
      font-weight: 600;
      font-size: 40rpx;
      height: 48rpx;
      font-style: normal;
      line-height: 48rpx;
      display: flex;
      align-items: center;
      color: #323233;
      padding-bottom: 13rpx;
    }
    .plan-flow-card-des {
      font-family: PingFang SC;
      font-style: normal;
      font-weight: normal;
      font-size: 24rpx;
      line-height: 32rpx;
      display: flex;
      align-items: center;
      color: #969799;
      padding-bottom: 48rpx;
    }
    .plan-flow-card-scale {
      width: 32rpx;
      height: 300rpx;
      border-left: 1rpx solid #ccc;
      overflow: hidden;
      .swiper {
        width: 100%;
        height: 100%;

        overflow-y: scroll;
        .swiper-top {
          height: 150rpx;
        }
        .swiper-item {
          border-top: 1rpx solid #ccc;
          height: 20rpx;
        }
      }
      .swiper::-webkit-scrollbar {
        display: none;
      }
    }
    .plan-flow-card-button {
      position: absolute;
      bottom: 56rpx;
      width: calc(100% - 86rpx);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .button-up {
        border: 0;
        height: 64rpx;
        color: #646566;
        &::before {
          background-color: transparent;
        }
        &:active {
          color: #323233;
        }
      }
      .button-next {
        border: 0;
        // height: 64rpx;
       
      }
       .van-button--small{
          padding: 0 32rpx;
        }
    }
    .m-plan-button .van-button--plain {
      &:active {
        background-color: #e8f2ff;
      }
      &::before {
        background-color: transparent;
      }
    }
    .plan-flow-ruler {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .plan-flow-ruler-item {
        width: 260rpx;
        height: 347rpx;
      }
    }
  }
  .plan-flow-popup {
    padding: 48rpx;
    padding-bottom: 32rpx;
    // width: calc(100% - 128rpx);
    width: 622rpx;
    // width: calc(82% - 96rpx);
    // height: 280rpx;
    height: 404rpx;
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    .plan-flow-popup-title {
      text-align: center;
      // font-family: PingFangSC;
      line-height: 48rpx;
      font-weight: 600;
      color: #323233;
    }

    ::v-deep .popup-field {
      width: 526rpx;
      height: 88rpx;
      margin-top: 16rpx;
      padding: 10rpx 16rpx;
      background: #f7f8fa;
      border-radius: 16rpx;
      display: flex;
      align-items: center;
      &::after {
        display: none;
      }
    }
    .popup-prompt {
      color: #ee0a24;
      font-size: 26rpx;
      margin: 16rpx 0 48rpx;
    }
    .popup-button {
      width: calc(100% - 96rpx);
      position: absolute;
      bottom: 32rpx;
    }
  }
}
</style>
