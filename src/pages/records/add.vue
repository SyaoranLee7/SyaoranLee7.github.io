<template>
  <view class="app-record">
    <view class="app-record-box">
      <view class="app-record-box-title" v-if="records_data != {}"
        >目标{{ records_data.name }} {{ records_data.valNum.rs }}-{{
          records_data.valNum.re
        }}
        {{ records_data.unit }}</view
      >
      <view class="app-record-box-charts">
        <canvas
          canvas-id="VlQXaTAGoXHEFlGOtwHvyciGrYBTttTn"
          id="VlQXaTAGoXHEFlGOtwHvyciGrYBTttTn"
          class="charts"
          @touchend="tap"
        />
        <view class="inputs">
          <view class="input-box">
            <u-input
              v-model="nums"
              :focus="focus"
              ref="nums"
              type="number"
              input-align="center"
              placeholder=""
              @input="onInput"
              confirm-type="done"
              style="font-size: 24px"
            ></u-input>
          </view>
          <view class="input-unit"> {{ records_data.unit }}</view>
        </view>
      </view>
      <view class="app-record-box-button" @click="onTap">提交</view>
    </view>

    <view class="warp" v-if="show">
      <view class="warp-box">
        <view class="warp-box-header">
          <view class="warp-box-image">
            <image src="@/static/img/plan/img-plan-alert.png" class="image" />
          </view>
        </view>
        <view class="warp-box-title">{{ tips }}</view>
        <!-- <view class="warp-box-des">{{tips}}</view> -->
        <view class="warp-box-btn" @click="onOk"
          ><u-icon
            name="clock"
            color="#ffffff"
            size="32"
            style="margin-right: 4px"
          ></u-icon>
          完成</view
        >
      </view>
    </view>
  </view>
</template>

<script>
import { performServiceTask, queryDataHistoryById } from "@/api/records";
import {
  userSummaryDayReportList,
  getUserSummaryDataByMdcode,
} from "@/api/report";
import { columnCfgList } from "@/api/health";
import { listToStr } from "@/utils/index";
import uCharts from "@/js_sdk/u-charts.min.js";
var uChartsInstance = {};
export default {
  data() {
    return {
      cWidth: 375,
      cHeight: 375,
      nums: "",
      focus: true,
      show: false,
      objid: "",
      taskId: "",
      records_data: {},
      tips: "",
      low: false,
      high: false,
      normal: false,
      p: 0,
    };
  },
  onReady() {
    //这里的 750 对应 css .charts 的 width
    this.cWidth = uni.upx2px(375);
    //这里的 500 对应 css .charts 的 height
    this.cHeight = uni.upx2px(375);
    this.getServerData();
  },
  onLoad(opt) {
    if (opt?.objid) {
      this.objid = opt.objid;
    }
    if (opt?.taskid) {
      this.taskId = opt.taskid;
    }
    this.getConfigList();
  },
  methods: {
    onOk() {
      uni.navigateBack();
    },
    onTap() {
      this.records();
    },
    onInput(e) {
      this.low = false;
      this.high = false;
      this.normal = false;
      if (Number(e) > Number(this.records_data.valNum.re)) {
        this.high = true;
      }
      if (Number(e) < Number(this.records_data.valNum.rs)) {
        this.low = true;
      }
      if (
        Number(e) >= Number(this.records_data.valNum.rs) &&
        Number(e) <= Number(this.records_data.valNum.re)
      ) {
        this.normal = true;
      }
      this.p = Number(e) / Number(this.records_data.valNum.re);
      if (this.p > 1) {
        this.p = 1;
      }
      setTimeout(this.getServerData(), 1000);
    },
    getConfigList() {
      let req = {
        tableId: this.objid,
      };
      columnCfgList(req).then((res) => {
        if (res.code == "0" && res.data) {
          if (res.data.length > 0) {
            this.records_data = res.data[0];

            //alert(JSON.stringify(this.records_data))
            // this.records_data = res.data[0];
            // this.getrecords_data();
          }
        }
      });
    },
    getDataRuslt() {
      let data = {};
      for (let key in this.records_data) {
        console.log(key);
        if (key == "code") {
          data[this.records_data[key]] = this.nums;
        }
      }

      let params = {
        taskRecordContent: [data],
      };
      userSummaryDayReportList(params).then((res) => {
        if (res.code === "0" && res.data?.summary) {
          this.tips = listToStr(res.data.summary);
          this.show = true;
        }
      });
    },
    records() {
      //TODO: 调用的表字段 获取记录表字段
      let data = {};
      for (let key in this.records_data) {
        console.log(key);
        if (key == "code") {
          data[this.records_data[key]] = this.nums;
        }
      }

      let content = [data];
      let params = {
        content: content,
        mdTableId: this.objid,
        remark: "",
        taskId: this.taskId,
      };
      performServiceTask(params).then((res) => {
        if (res.code == "0") {
          ///userSummaryDayReportList
          this.getDataRuslt();
        }
      });
    },
    getServerData() {
      //模拟从服务器获取数据时的延时
      let color;
      if (this.low) {
        color = "#FF5630";
      }
      if (this.normal) {
        color = "#38CB89";
      }
      if (this.high) {
        color = "#FF5630";
      }

      let res = {
        series: [
          {
            name: "正确率",
            color: color,
            data: this.p,
          },
        ],
      };
      this.drawCharts("VlQXaTAGoXHEFlGOtwHvyciGrYBTttTn", res);
    },
    drawCharts(id, data) {
      const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id] = new uCharts({
        type: "arcbar",
        context: ctx,
        width: this.cWidth,
        height: this.cHeight,
        series: data.series,
        animation: true,
        timing: "easeOut",
        duration: 1000,
        rotate: false,
        rotateLock: false,
        background: "#FFFFFF",
        color: [
          "#1890FF",
          "#91CB74",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc",
        ],
        padding: undefined,
        fontSize: 13,
        fontColor: "#666666",
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: "solid",
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        title: {
          name: "",
          fontSize: 25,
          color: "#00FF00",
          offsetX: 0,
          offsetY: 0,
        },
        subtitle: {
          name: "",
          fontSize: 15,
          color: "#666666",
          offsetX: 0,
          offsetY: 0,
        },
        extra: {
          arcbar: {
            type: "circle",
            width: 8,
            backgroundColor: "#E9E9E9",
            startAngle: 0,
            endAngle: 0,
            gap: 2,
            direction: "cw",
            lineCap: "round",
            centerX: 0,
            centerY: 0,
            linearType: "none",
          },
        },
      });
    },
    tap(e) {
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    },
  },
};
</script>

<style lang='scss' scoped>
page {
  background: #eee;
}
::v-deep .u-input__input {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}
.app-record-box {
  padding: 40px;
  display: flex;
  justify-content: center;

  &-title {
    position: absolute;
    font-size: 32rpx;
    color: #888;
  }
  &-button {
    width: 80vw;
    height: 72rpx;
    background: #3873fe;
    color: #fff;
    position: fixed;
    bottom: 5vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 4px;
  }
  &-charts {
    margin-top: 40px;
    width: 375rpx;
    height: 375rpx;
    position: absolute;
    .charts {
      width: 375rpx;
      height: 375rpx;
      position: absolute;
    }

    .inputs {
      width: 375rpx;
      padding-top: 140rpx;
      position: absolute;
      text-align: center;
      .input-box {
        width: 180rpx;
        border-bottom: 1px #999 solid;
        margin: 0 auto;
      }
      .input-unit {
        margin-top: 10px;
        font-size: 16px;
        color: #999;
      }
    }
  }
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
</style>