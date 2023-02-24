<template>
  <view class="app-health-records">
    <view class="app-health-records-steps">
      <u-steps :list="numList" :current="step" mode="number"></u-steps>
    </view>

    <view class="">
      <view v-for="(element, eleIndex) in data" :key="eleIndex + 'box'">
        <view class="title" v-if="element.type">{{ element.type }}</view>
        <view class="app-section">
          <u-form-item
            v-for="(item, index) in element.list"
            :key="index + '998'"
            label-width="200"
            :label="item.name"
          >
            <view class="flex" v-if="item.type == 'dict'">{{
              item.valName
            }}</view>
            <view class="flex" v-else>
              <u-input
                v-model="item.value"
                type="number"
                :placeholder="'请输入' + item.name "
                :custom-style="{ paddingLeft: '3vw' }"
              />
            </view>

            <view v-if="item.type == 'dict'" slot="right">
              <!-- <u-switch v-model="item.value" size="40"></u-switch> -->

              <u-icon
                @click="onClickAddSelect(item, eleIndex, index)"
                name="arrow-right"
                size="40"
              ></u-icon>
            </view>
            <view slot="right" v-else class="units">{{ item.unit }}</view>
          </u-form-item>
        </view>
      </view>

      <!-- <view class="app-section">
        <u-form-item label="BMI">
          <view class="BMI_txt">19.6</view>
        </u-form-item>
        <view class="form-description"
          >BMI在输入身高、体重、腰围后自动计算得出。BMI体质指数可判断衡量人体胖瘦程度以及是否健康的一个标准。</view
        >
      </view> -->
    </view>

    <view class="app-bottom-box" v-if="step === 0">
      <u-button type="primary" @click="goNext()">下一步</u-button>
    </view>
    <view class="app-bottom-box app-bottom-box-col" v-if="step !== 0">
      <u-button class="app-bottom-box-btns" @click="goPrv()">上一步</u-button>
      <u-button class="app-bottom-box-btns" type="primary" @click="goNext()"
        >下一步</u-button
      >
    </view>

    <u-popup class="pop-select" v-model="show" mode="bottom" height="400">
      <view class="pop-title">
        <text @click="show = false">取消</text>
        <text class="ok" @click="onClickOk">确认</text>
      </view>

      <scroll-view scroll-y="true" style="height: 280rpx;margin-bottom:50rpx">
        <view
          class="item"
          @click="onItemCheck(item, index)"
          :class="item.check ? 'item-check' : ''"
          v-for="(item, index) in list"
          :key="index"
          >{{ item.v }}</view
        >
      </scroll-view>
    </u-popup>
  </view>
</template>

<script>
import {
  dataModelConfigList,
  userHealthyArchivesData,
  columnCfgList,
  userHealthyArchivesDataSave,
} from "@/api/health";
export default {
  data() {
    return {
      step: 0,
      numList: [],
      form: {
        name: "",
        intro: "",
        sex: "",
        smokeing: false,
      },
      userId: "",
      dataList: [],
      data: [],
      objData: {},
      show: false,
      vm2o: "",
      list: [],
      eleindex: "",
      index: "",
    };
  },
  onLoad(e) {
    this.userId = this.vuex_user.id;
    this.getTopList();
  },
  methods: {
    onClickAddSelect(item, eleindex, index) {
      console.log(item, "显示数据ces");
      this.eleindex = eleindex;
      this.index = index;
      let data = JSON.parse(item.valConfig);
      this.list = data.items;
      this.upDateCheckList(this.list, item.value);
      this.vm2o = data.vm2o;
      this.show = true;
      console.log(this.list);
    },
    upDateCheckList(list, val) {
      if(!val){
        return
      }
      let arrList = val.split(",");

      if (arrList.length > 0) {
        arrList.forEach((ele) => {
          list.forEach((e) => {
            if (e.k == ele) {
              e.check = true;
            }
          });
        });
        this.list = list;
      }
    },
    onItemCheck(data, index) {
      if (this.vm2o == "one") {
        this.list.forEach((item) => {
          item.check = false;
        });
      }
      if (this.list[index].check) {
        this.list[index].check = false;
      } else {
        this.list[index].check = true;
      }

      this.$forceUpdate();
    },
    onClickOk() {
      let val = "";
      let name = "";
      this.list.forEach((item) => {
        if (item.check) {
          val += item.k + ",";
          name += item.v + ",";
        }
      });
      if (name) {
        name = name.slice(0, name.length - 1);
      }
      if (val) {
        val = val.slice(0, val.length - 1);
      }

      if (this.data[this.eleindex]?.list[this.index]) {
        this.data[this.eleindex].list[this.index].value = val;
        this.data[this.eleindex].list[this.index].valName = name;
        this.$forceUpdate();
        // console.log(val, "显示数据哈哈哈");
      }
      this.show = false;
    },
    getTopList() {
      dataModelConfigList({ categoryCode: "MDA1581277425169342464" }).then(
        (res) => {
          if (res.code == "0" && res.data) {
            this.numList = res.data;
            this.getData();
          }
        }
      );
    },
    getData() {
      let id = this.numList[this.step].id;
      let req = {
        mdTableId: id,
      };
      userHealthyArchivesData(req).then((res) => {
        if (res.code == "0" && res.data) {
          this.objData = res.data.data;
          this.getConfigList();
        } else {
          this.objData = {};
          this.getConfigList();
        }
      });
    },
    getConfigList() {
      let req = {
        tableId: this.numList[this.step].id,
      };
      columnCfgList(req).then((res) => {
        if (res.code == "0" && res.data) {
          this.dataList = res.data.map((item) => {
            // console.log(item,this.objData,'显示数据123')
            if (item.type == "dict") {
              if (JSON.stringify(this.objData) != "{}") {
                item.value = this.objData[item.code];
                let name = this.getDictName(item, this.objData[item.code]);
                if(!name){
                    let jsonData = item.valDict.items
                    jsonData.forEach(ele=>{
                      if(ele.d == "Y"){
                        name = ele.v
                      }
                    })
                }
                item.valName = name;
              } else {
                item.value = "";
              }
            } else {
              if (JSON.stringify(this.objData) != "{}") {
                item.value = this.objData[item.code];
              } else {
                item.value = "";
              }
            }

            return item;
          });
          this.updateData();
        }
      });
    },

    updateData() {
      let data = [];
      let lastType = "null";
      this.dataList.forEach((item) => {
        if (item.mdsdType) {
          let check = true;
          lastType = "null";
          data.forEach((Element) => {
            if (Element.type == item.mdsdType) {
              check = false;
              Element.list.push(item);
            }
          });
          if (check) {
            data.push({
              type: item.mdsdType,
              list: [item],
            });
          }
        } else {
          if (lastType == "null") {
            data.push({
              type: undefined,
              list: [item],
            });
            lastType = "addNull";
          } else {
            let index = data.length - 1;
            data[index].list.push(item);
            lastType = "addNull";
          }
        }
      });
      this.data = data;
    },
    getDictName(item, val) {
      if( !val){
        return ''
      }
      console.log(item, val);
      let data = JSON.parse(item.valConfig);
      let list = data.items;
      let arrList = val.split(",");
      let name = "";
      arrList.forEach((ele) => {
        list.forEach((e) => {
          if (e.k == ele) {
            name += e.v + ",";
          }
        });
      });

      name = name.slice(0, name.length - 1);
      return name;
    },

    goNext() {
      let data = {};

      this.dataList.map((item) => {
        data[item.code] = item.value;
      });
      let req = {
        data,
        mdTableId: this.numList[this.step].id,
        userId: this.userId,
      };
      userHealthyArchivesDataSave(req).then((res) => {
        if (res.code == "0") {
         
          if (this.step == this.numList.length - 1) {
            console.log('我走到这里了哈哈哈哈6789')
            uni.navigateTo({
              url: `/pages/risk/index`,
            });
          } else {
            console.log('我走到这里了哈哈哈哈')
            this.step = this.step + 1;
            this.getData();
          }
        }
      });
    },
    goPrv() {
      this.step = this.step - 1;
      this.getData();
    },
  },
};
</script>

<style lang="scss">
page {
  background: #fafafa;
}
.app-health-records {
  width: 100vw;
  padding-bottom: 100px;
  .app-health-records-steps {
    padding: 20px 0px;
    background: #fff;
  }
  .title {
    font-size: 30rpx;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
    margin: 14px;
  }

  .app-section {
    margin: 14px;
    background: #fff;
    padding: 14px 20px;
    border-radius: 14px;
    .flex {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.units {
  
  height: 24px;
  border-radius: 12px;
  background: #3873fe;
  color: #fff;
  display: flex;
  padding: 0 8px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
}
.BMI_txt {
  text-align: right;
  flex: 1;
}
.form-description {
  font-size: 12px;
  padding: 14px 0px;
  color: #8ca5b7;
  line-height: 1.4;
}
.app-bottom-box {
  width: 100vw;
  height: 68px;
  background: #fff;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 12px 14px;
  z-index: 999;
}

.app-bottom-box-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-bottom-box-btns {
  width: 48%;
}

.pop-select {
  .pop-title {
    padding: 0 32rpx;
    padding-top: 32rpx;
    padding-bottom: 16rpx;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(241, 240, 240);
    margin-bottom: 20rpx;
    .ok {
      color: #3873fe;
    }
  }
  .item {
    margin: 0 32rpx;
    padding: 16rpx;
    background: #fafafa;
    border-radius: 8rpx;
    margin-bottom: 10rpx;
    text-align: center;
    // border:1px solid #f0f0f0;
  }
  .item-check {
    background: #3873fe;
    color: #fff;
  }
}

::v-deep.u-form-item--left__content__label{
  line-height: 1.2;
}
</style>