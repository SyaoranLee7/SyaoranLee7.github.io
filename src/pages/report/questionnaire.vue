<template>
  <view class="ronin-questionnaire">
    <view class="head">
      <u-image
        width="136rpx"
        height="136rpx"
        src="@/static/img/icon7.png"
      ></u-image>
      <view class="text-box">
        <view class="top">{{ qData.name }}</view>
        <view class="bottom">{{ qData.remark }}</view>
      </view>

      <u-image
        class="bg"
        width="320rpx"
        height="218rpx"
        src="@/static/img/bg1.png"
      ></u-image>
    </view>

    <!-- <view class="des" style="padding-bottom: 30px">
      <view class="bottom tips_bt">
        <span
          style="
            font-size: 36rpx;
            font-weight: 600;
            margin-bottom: 10px;
            color: #333;
          "
          >【登记须知】</span
        ><br /><br />
        亲爱的国贸家人们:<br />
        <p>
          <span style="margin-right: 14px"></span>本问卷仅为收集已感染同事的缺医少药需求，服务团队收到需求会尽力帮大家共同搜寻物资渠道。但因新冠相关物资普遍短缺，不能保证按需协调到位，敬请理解。
        </p>
        <p>
          <span style="margin-right: 14px"></span>非感染同事请继续做好防护，不要登记本问卷，把沟通渠道让给更有需要的同事；若登记，将仅作为需求记录，暂无法联络处理，感谢理解！
        </p>
        <p>
          <span style="margin-right: 14px"></span>愿你我守望相助，共享疫散春光！
        </p>
      </view>
    </view> -->

    <view class="content" v-if="dataType == 'one'">
      <view class="title"
        >{{ index + 1 }}. {{ item.title }}
        <!-- <text>*</text> -->
      </view>
      <text class="des" v-if="item.subTitle">（{{ item.subTitle }}）</text>

      <view class="topic" v-if="item.type != 'input'">
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
      </view>
      <view v-if="item.type == 'input'" class="input-box">
        <u-input v-model="item.checkModel" :border="true" />
      </view>
    </view>
    <view class="bottom-box" v-if="dataType == 'one'">
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

    <view v-if="dataType == 'all'">
      <view
        class="content"
        v-for="(element, eleIndex) in list"
        :key="eleIndex + '678'"
      >
        <view class="title"
          >{{ eleIndex + 1 }}. {{ element.title }}
          <!-- <text>*</text> -->
        </view>
        <text class="des" v-if="element.subTitle"
          >（{{ element.subTitle }}）</text
        >

        <view class="topic" v-if="element.type != 'input'">
          <view
            v-if="element.type == 'checkbox' && element.listContent"
            class="btn-box"
          >
            <view
              class="btn btn-checkbox"
              :class="ele.check ? 'btn-check' : ''"
              v-for="(ele, index) in element.listContent.items"
              :key="index + 'aa'"
              @click="onClickCheckAll(index, eleIndex)"
            >
              {{ ele.n }}
            </view>
          </view>

          <view
            v-if="
              (element.type == 'radio' || element.type == 'select') &&
              element.listContent
            "
          >
            <view
              class="btn"
              :class="ele.check ? 'btn-check' : ''"
              v-for="(ele, index) in element.listContent.items"
              :key="index + 'aa'"
              @click="onClickCheckAll(index, eleIndex)"
            >
              {{ ele.n }}
            </view>
          </view>
        </view>
        <view v-if="element.type == 'input'" class="input-box">
          <u-input v-model="element.checkModel" :border="true" />
        </view>
      </view>
    </view>
    <view class="btn-bottom-box" v-if="dataType == 'all'">
      <u-button class="btn" type="primary" @click="onClickSubmit"
        >提交</u-button
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
      qData: {},
      dataType: "all", // one一个一个显示   all全部显示
    };
  },
  onLoad(e) {
    console.log(e);
    if (e?.id) {
      this.id = e.id;
    }
    if (e?.type) {
      this.type = e.type;
    }
    if (e?.dataType) {
      this.dataType = e.dataType;
    }
    this.init();
  },
  methods: {
    init() {
      infoFull({ id: this.id }).then((res) => {
        if (res.code == "0" && res.data.items) {
          this.qData = res.data;
          this.list = this.updateList(res.data.items);
          this.item = this.list[this.index];
          this.js = res.data.scriptContent;
        }
      });
    },
    updateList(list) {
      list.forEach((element) => {
        console.log(element, "开始");
        if (element.listContent?.items) {
          element.listContent.items.forEach((item) => {
            if (item.isv == "Y") {
              item.check = true;
            }
          });
        }
      });
      console.log(list);
      return list;
    },
    onClickUp() {
      if (this.index == 0) {
      } else {
        this.index = this.index - 1;
        //  console.log(this.index ,this.list[this.index], "数据哈哈哈shang");
        // this.item = this.list[this.index];
        this.item = this.list[this.index];
        if (this.list[this.index].checkModel) {
          this.item.checkModel = this.list[this.index].checkModel;
        } else {
          //this.item.checkModel = "";
        }
      }
    },
    onClickNext() {
      if (this.index + 1 >= this.list.length) {
      } else {
        this.index = this.index + 1;
        // console.log(this.index ,this.list[this.index], "数据哈哈哈");
        this.item = this.list[this.index];
        if (this.list[this.index].checkModel) {
          this.item.checkModel = this.list[this.index].checkModel;
        } else {
          //this.item.checkModel = "";
        }
        console.log(this.item, "我走了");
        // this.$forceUpdate();
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
          if (this.type) {
            uni.navigateTo({
              url: `/pages/check-item/list?id=${res.data.id}`,
            });
          } else {
            uni.navigateTo({
              url: `/pages/report/ruslt`,
            });
          }
        }
      });
    },

    onClickCheckAll(index, listIndex) {
      let item = this.list[listIndex];

      if (item?.listContent?.items[index].check) {
        item.listContent.items[index].check = false;
      } else {
        if (item.type == "radio" || item.type == "select") {
          item.listContent.items.forEach((element) => {
            element.check = false;
          });
        }
        item.listContent.items[index].check = true;
      }
      this.$forceUpdate();
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
          this.onClickNext();
        }
      }
      this.$forceUpdate();

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
  padding-bottom: 140rpx;

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

  // .des {
  //   padding: 0 32rpx;
  //   margin-bottom: 32rpx;
  // }

  .content {
    padding: 0 28rpx;
    margin-bottom: 64rpx;
    .title {
      margin-bottom: 10rpx;
      font-size: 32rpx;
      font-weight: 600;
    }
    .des {
      margin-bottom: 30px;
      margin-top: 8px;
      margin-left: 10px;
      color: #666;
    }
    .input-box {
      margin-top: 24rpx;
    }
    .topic {
      margin-top: 22rpx;
      .btn {
        display: block;
        margin-top: 24rpx;

        height: 80rpx;
        line-height: 80rpx;
        background: rgb(247, 247, 247);
        text-align: center;
        border-radius: 6rpx;
        border: 1px #ccc solid;
      }
      .btn-checkbox {
        display: inline-block;
        padding: 0px 10px;
        margin-right: 10px;
        word-break: break-word;
        height: 80rpx;
        line-height: 80rpx;
      }

      .btn-check {
        background: #3873fe;
        border: 1px #3873fe solid;
        color: #fff;
        width: auto;
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

  .btn-bottom-box {
    height: 120rpx;
    width: 100%;
    padding: 0 32rpx;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    padding-top: 20rpx;
    box-shadow: 10rpx -14rpx 14rpx -14rpx rgba(0, 0, 0, 0.1);
  }
}
.btn-box {
}
</style>

