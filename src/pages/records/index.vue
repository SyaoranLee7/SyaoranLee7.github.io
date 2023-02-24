<template>
  <view class="app-record">
    <view class="">
      <view class="app-record-header">
        <view class="app-record-header-info" v-if="chart_date.length > 0">
          <view class="date">{{ chart_date[chart_date.length - 1] }}</view>
          <view class="info">
            <view class="nums">{{ chart_value[chart_value.length - 1] }}</view>
            <view class="unit">
              <view class="tags tags_error" v-if="levels === 'error'">{{
                ruslt
              }}</view>
              <view class="tags tags_success" v-if="levels === 'success'">{{
                ruslt
              }}</view>
              <view class="units">{{ records_data.unit }}</view>
            </view>
          </view>
        </view>
        <view class="app-record-header-info" v-else>
          <view class="info">
            <view class="nums2">无数据</view>
          </view>
        </view>
        <view class="app-record-header-btn" @click="onTap()">
          <u-icon name="plus"></u-icon> 添加记录
        </view>
      </view>
      <view class="app-record-chart">
        <view class="app-record-chart-header">
          <view class="title">{{ records_data.name }} 近7天指标趋势</view>
        </view>
        <canvas
          canvas-id="husfiVOlUCYUOvrgQRKYBktPCTnAPohJ"
          id="husfiVOlUCYUOvrgQRKYBktPCTnAPohJ"
          class="charts"
          @touchend="tap"
        />
        <view class="" v-if="chart_date.length == 0">
          近7天没有{{ records_data.name }}
          数据，无法进行系统分析，快去测试1笔吧。
        </view>
      </view>
    </view>
    <view class=""> </view>
  </view>
</template>

<script>
import { performServiceTask, queryDataHistoryById } from "@/api/records";
import {
  userSummaryDayReportList,
  getUserSummaryDataByMdcode,
} from "@/api/report";
import { columnCfgList } from "@/api/health";
import { sevenDaysSE } from "@/utils/utils_date";
import uCharts from "@/js_sdk/u-charts.min.js";
var uChartsInstance = {};
export default {
  data() {
    return {
      taskId: "",
      objid: "",
      cWidth: 750,
      cHeight: 500,
      data: [],
      mdColCode: "",
      records_data: {},
      chart_date: [],
      chart_value: [],
      chart_name: "",
      ruslt: "",
      isLoad: false
    };
  },
  onReady() {
    //这里的 750 对应 css .charts 的 width
    this.cWidth = uni.upx2px(638);
    //这里的 500 对应 css .charts 的 height
    this.cHeight = uni.upx2px(400);

    this.init();
  },
  onShow(){

  },
  onLoad(opt) {
    if (opt?.objid) {
      this.objid = opt.objid;
    }
    if (opt?.taskid) {
      this.taskId = opt.taskid;
    }
    this.getConfigList();
    this.getDataByKey();
  },
  methods: {
    getConfigList() {
      let req = {
        tableId: this.objid,
      };
      columnCfgList(req).then((res) => {
        if (res.code == "0" && res.data) {
          if (res.data.length > 0) {
            this.records_data = res.data[0];
            this.chart_name = res.data[0].name;
            //alert(JSON.stringify(this.records_data))
            // this.records_data = res.data[0];
            this.getDataList();
          }
        }
      });
    },
    getDataList() {
      let obj = sevenDaysSE(7);
      let params = {
        mdColCode: this.records_data.mdsdCode,
        endDate: obj.end,
        mdTableId: this.objid,
        page: 1,
        rows: 10,
        startDate: obj.start,
      };
      queryDataHistoryById(params).then((res) => {
        if (res.code === "0" && res.data) {
          for (let v of res.data) {
            if (v.content) {
              var mapObject = v.content;
              this.chart_date.push(v.cdt);
              // 依次获取map对象值
              for (var key in mapObject) {
                var value = mapObject[key];
                this.chart_value.push(Number(value));
              }
            }
          }
          this.getServerData();
          this.getRuslt();
        } else {
          this.getServerData();
        }
      });
    },
    getRuslt() {
      if (this.chart_value.length > 0) {
        debugger;
        
        let value 
        if (this.chart_value.length > 1) {
        value = Number(this.chart_value[length - 1]);
        }
        else{
        value = Number(this.chart_value[length]);

        }
        let up = Number(this.records_data.valNum.re);
        let down = Number(this.records_data.valNum.rs);
        if (value < down) {
          this.ruslt = "异常降低";
          this.levels = "error";
        } else if (value > up) {
          this.ruslt = "异常上升";
          this.levels = "error";
        } else {
          this.ruslt = "正常";
          this.levels = "success";
        }
      }
    },
    getServerData() {
      let res = {
        categories: this.chart_date,
        series: [
          {
            name: this.chart_name,
            data: this.chart_value,
          },
        ],
      };
      this.drawCharts("husfiVOlUCYUOvrgQRKYBktPCTnAPohJ", res);
    },
    drawCharts(id, data) {
      const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id] = new uCharts({
        type: "line",
        context: ctx,
        width: this.cWidth,
        height: this.cHeight,
        categories: data.categories,
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
        padding: [15, 10, 0, 15],
        fontSize: 13,
        fontColor: "#666666",
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: "hollow",
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        legend: {
          show: true,
          position: "bottom",
          float: "center",
          padding: 5,
          margin: 5,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          fontSize: 13,
          fontColor: "#666666",
          lineHeight: 11,
          hiddenColor: "#CECECE",
          itemGap: 10,
        },
        xAxis: {
          disableGrid: true,
          disabled: false,
          axisLine: true,
          axisLineColor: "#CCCCCC",
          calibration: false,
          fontColor: "#666666",
          fontSize: 13,
          rotateLabel: false,
          rotateAngle: 45,
          itemCount: 5,
          boundaryGap: "center",
          splitNumber: 5,
          gridColor: "#CCCCCC",
          gridType: "solid",
          dashLength: 4,
          gridEval: 1,
          scrollShow: false,
          scrollAlign: "left",
          scrollColor: "#A6A6A6",
          scrollBackgroundColor: "#EFEBEF",
          formatter: "",
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2,
          disabled: false,
          disableGrid: false,
          splitNumber: 5,
          gridColor: "#CCCCCC",
          padding: 10,
          showTitle: false,
          data: [],
        },
        extra: {
          line: {
            type: "straight",
            width: 2,
            activeType: "hollow",
          },
          tooltip: {
            showBox: true,
            showArrow: true,
            showCategory: false,
            borderWidth: 0,
            borderRadius: 0,
            borderColor: "#000000",
            borderOpacity: 0.7,
            bgColor: "#000000",
            bgOpacity: 0.7,
            gridType: "solid",
            dashLength: 4,
            gridColor: "#CCCCCC",
            fontColor: "#FFFFFF",
            splitLine: true,
            horizentalLine: false,
            xAxisLabel: false,
            yAxisLabel: false,
            labelBgColor: "#FFFFFF",
            labelBgOpacity: 0.7,
            labelFontColor: "#666666",
          },
          markLine: {
            type: "solid",
            dashLength: 4,
            data: [],
          },
        },
      });
    },
    tap(e) {
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    },
    getDataByKey() {
      let params = {
        dataDt: "",
        mdCodes: ["DATA_H_GLU"],
      };
      getUserSummaryDataByMdcode(params).then((res) => {
        if (res.code) {
        }
      });
    },
    init() {
      console.log("this.$refs.exponentChart", this.$refs);
      if (this.data.length == 0) {
        return;
      }
      this.$refs.chart.init((config) => {
        const chart = new F2.Chart(config);
        chart.source(this.baseData);
        chart.interval().position("genre*sold").color("genre");
        chart.render();
        // 需要把 chart 返回
        return chart;
      });
    },
    onTap() {
      // this.records();
      uni.navigateTo({
        url: `/pages/records/add?objid=${this.objid}&taskid=${this.taskId}`,
      });
    },
    getDataRuslt() {
      let params = {
        taskRecordContent: [
          {
            DATA_H_GLU: "6.3",
          },
        ],
      };
      userSummaryDayReportList(params).then((res) => {
        if (res.code === "0") {
        }
      });
    },
    records() {
      //TODO: 调用的表字段 获取记录表字段
      let content = [
        {
          DATA_H_GLU: "6.3",
        },
      ];
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
  },
};
</script>

<style lang='scss' scoped>
page {
  background: #eee;
}
.app-record {
  padding: 28rpx;
  .app-record-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-info {
      width: 60vw;
      .date {
        color: #999;
      }
      .info {
        display: flex;
        align-items: center;
        .nums {
          font-weight: 600;
          font-size: 42px;
          font-family: Arial, Helvetica, sans-serif;
          margin-right: 20rpx;
        }
        .nums2 {
          font-weight: 600;
          font-size: 28px;
          font-family: Arial, Helvetica, sans-serif;
          margin-right: 20rpx;
        }
        .unit {
          .tags {
            border: 1px #ff5630 solid;
            text-align: center;
            color: #ff5630;
            border-radius: 2px;
            font-size: 12px;
            margin-bottom: 2px;
            padding: 0 4px;
          }
          .units {
            font-size: 12px;
            color: #666;
          }
        }
      }
    }
    &-btn {
      background: #eee;
      padding: 10px;
      font-size: 16px;
      border-radius: 20px;
      color: #fff;
      background: #3974fe;
    }
  }
}
.app-record-chart {
  margin-top: 20px;
  background: #fff;
  padding: 28rpx;
  border-radius: 10px;

  &-header {
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20rpx;
    }
  }
}
.charts {
  width: 638rpx;
  height: 400rpx;
}
</style>