<template>
  <view class="ronin-questionnaire">
    <view class="head">
      <u-image
        width="136rpx"
        height="136rpx"
        src="@/static/img/icon7.png"
      ></u-image>
      <view class="text-box">
        <view class="top">疾病风险排筛</view>
        <view class="bottom">一分钟测试多一份健康</view>
      </view>

      <u-image
        class="bg"
        width="320rpx"
        height="218rpx"
        src="@/static/img/bg1.png"
      ></u-image>
    </view>

    <view class="content">
      <view class="title"
        >{{ index + 1 }}. {{ item.title }}
        <!-- <text>*</text> -->
      </view>
      <text class="des" v-if="item.subTitle">（{{ item.subTitle }}）</text>

      <view class="topic" v-if="item.type != 'input'">
        <!-- <u-button
          class="btn"
          :hair-line="false"
          :type="ele.check ? 'primary' : ''"
          
          >{{ ele.n }}</u-button
        > -->
        <view v-if="item.type == 'checkbox'" class="btn-box">
          <view
            class="btn btn-checkbox"
            :class="ele.check ? 'btn-check' : ''"
            v-for="(ele, index) in item.listContent.items"
            :key="index + 'aa'"
            @click="onClickCheck(index)"
          >
            {{ ele.n }}
          </view>
        </view>

         <view v-if="item.type == 'radio'">
          <view
            class="btn"
            :class="ele.check ? 'btn-check' : ''"
            v-for="(ele, index) in item.listContent.items"
            :key="index + 'aa'"
            @click="onClickCheck(index)"
          >
            {{ ele.n }}
          </view>
        </view>

        <!-- <u-button class="btn" type="primary" :hair-line="false">酗酒</u-button>
        <u-button class="btn" :hair-line="false">吸烟</u-button> -->
      </view>
      <view v-if="item.type == 'input'" class="input-box">
        <u-input v-model="item.checkModel" :border="true" />
      </view>
    </view>
    <view class="bottom-box">
      <u-button
        class="btn"
        :class="index == 0 ? 'btn-null' : ''"
        @click="onClickUp"
        :hair-line="false"
        >上一步</u-button
      >
      <view class="line"></view>
      <u-button
        class="btn"
        @click="onClickSubmit"
        v-if="index == list.length - 1"
        :hair-line="false"
        >提交</u-button
      >
      <u-button class="btn" v-else @click="onClickNext" :hair-line="false"
        >下一步</u-button
      >
    </view>
  </view>
</template>

<script>
import { infoFull, startWrite2ItemBatch } from "@/api/questionnaire";
// require("../../utils/binding.js");
export default {
  data() {
    return {
      index: 0,
      list: [],
      item: { listContent: { items: [] } },
      id: "",
      js: "",
    };
  },
  onLoad(e) {
    console.log(e);
    if (e?.id) {
      this.id = e.id;
    }

    this.init();
  },
  methods: {
    init() {
      infoFull({ id: this.id }).then((res) => {
        if (res.code == "0" && res.data.items) {
          this.list = this.updateList( res.data.items);
          this.item = this.list[this.index];
          this.js = res.data.scriptContent;
        }
      });
    },
    updateList(list){
     
      list.forEach(element=>{
          console.log(element,'开始')
        if(element.listContent?.items){
          element.listContent.items.forEach(item=>{
            if(item.isv == 'Y'){
              item.check = true
            }
          })
        }
      })
      console.log(list)
      return list
    },
    onClickUp() {
      if (this.index == 0) {
      } else {
        this.index = this.index - 1;

        this.item = this.list[this.index];
        if (this.list[this.index].checkModel) {
          this.item.checkModel = this.list[this.index].checkModel;
        } else {
          this.item.checkModel = "";
        }
        this.$forceUpdate();
      }
    },
    onClickNext() {
      if (this.index + 1 >= this.list.length) {
      } else {
        this.index = this.index + 1;
        console.log(this.index == this.list.length - 1, "数据哈哈哈");
        this.item = this.list[this.index];
        if (this.list[this.index].checkModel) {
          this.item.checkModel = this.list[this.index].checkModel;
        } else {
          this.item.checkModel = "";
        }
        this.$forceUpdate();
      }
    },
    onClickSubmit() {
      //   console.log(this.list);
      //   return
      let items = [];
      this.list.forEach((item) => {
        if (item.type == "input") {
          items.push({
            resultVal: item.checkModel,
            scaleItemConfigId: item.id,
          });
        } else {
          let val = "";
          if (item.listContent.items) {
            item.listContent.items.forEach((ele) => {
              if (ele.check) {
                if (item.type == "checkbox") {
                  val = val + ele.v + ",";
                } else {
                  val = ele.v;
                }
              }
            });
            if (item.type == "checkbox") {
              val = val.slice(0, val.length - 1);
            }
          }
          items.push({
            resultVal: val,
            scaleItemConfigId: item.id,
          });
        }
      });

      // let resultVal =   wx.binding.eval(this.js)
      // var currentWebview = this.$scope.$getAppWebview();
      // let wv = currentWebview.children()[0];
      // let resultVal = wv.evalJS(this.js);

      //  console.log(wx.binding.eval("(1 + 2) * 4 / 2")); //console 6
      // console.log(resultVal,'脚本数据')

      let req = {
        items: items,
        scaleConfigId: this.id,
      };
      startWrite2ItemBatch(req).then((res) => {
        if (res.code == "0") {
          // uni.navigateTo({
          //   url: `/pages/risk/index?id=${res.data.id}`,
          // });
          uni.navigateTo({
            url: `/pages/check-item/list?id=${res.data.id}`,
          });
        }
      });
      return;
    },
    onClickCheck(index) {
      if (this.item?.listContent?.items[index].check) {
        this.item.listContent.items[index].check = false;
      } else {
        if (this.item.type == "radio" || this.item.type == "select") {
          this.item.listContent.items.forEach((element) => {
            element.check = false;
          });
        }
        this.item.listContent.items[index].check = true;
         if (this.item.type == "radio" || this.item.type == "select") {
          this.onClickNext()
         }
      }

      console.log(this.item, "显示数据11");
      // this.$forceUpdate();
    },

    //---------------------------------------结束-----------------------------------
  },
};
</script>

<style lang="scss" scoped>
.ronin-questionnaire {
  background: #f6fafe;
  width: 100%;
  height: 100%;
  .head {
    padding-top: 52rpx;
    padding-left: 14rpx;
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 80rpx;
    .text-box {
      margin-left: 14rpx;
      padding-top: 12rpx;
    }
    .top {
      font-size: 36rpx;
      font-weight: 600;
      color: #333;
    }
    .bottom {
      font-size: 28rpx;
    }
    .bg {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .content {
    padding: 0 28rpx;
    .title {
      margin-bottom: 0rpx;
      font-size: 32rpx;
      font-weight: 600;
    }
    .des {
      margin-bottom: 30px;
      margin-left: 10px;
      color: #666;
    }
    .input-box {
      margin-top: 64rpx;
    }
    .topic {
      margin-top: 64rpx;
      .btn {
        display: block;
        margin-top: 24rpx;
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        background: rgb(247, 247, 247);
        text-align: center;
        border-radius: 6rpx;
        border: 1px #ccc solid;
      }
      .btn-checkbox{
        display:inline;
        padding: 4px 10px;
        margin-right: 10px;
        word-break: break-all;
      }

      .btn-check {
        background: #3873fe;
        border: 1px #3873fe solid;
        color: #fff;
      }
    }
  }

  .bottom-box {
    height: 120rpx;
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .btn {
      flex: 1;
    }
    .line {
      height: 64rpx;
      width: 1rpx;
      background: #f0f0f0;
    }
    ::v-deep.u-btn {
      border: 0px solid #000 !important;
      color: #3873fe;
    }
    .btn-null {
      opacity: 0.3;
    }
  }
}
.btn-box{
 
 
}
</style>

