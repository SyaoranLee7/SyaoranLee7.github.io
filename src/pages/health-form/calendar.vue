<template>
  <div class="calender">
    <div class="top" v-if="show">
      <u-icon
        name="arrow-left-double"
        color="#2979ff"
        size="28"
        @click="handleShowLastYear"
      ></u-icon>
      <u-icon
        name="arrow-left"
        style="margin-left: 20rpx"
        color="#2979ff"
        size="28"
        @click="handleShowLastMonth"
      ></u-icon>
      <span class="top_date">{{ year }}年{{ month }}月</span>
      <u-icon
        name="arrow-right"
        color="#2979ff"
        style="margin-right: 20rpx"
        size="28"
        @click="handleShowNextMonth"
      ></u-icon>
      <u-icon
        name="arrow-right-double"
        color="#2979ff"
        size="28"
        @click="handleShowNextYear"
      ></u-icon>
    </div>
    <div class="date_wrap">
      <div class="week">
        <span class="span-item">日</span>
        <span class="span-item">一</span>
        <span class="span-item">二</span>
        <span class="span-item">三</span>
        <span class="span-item">四</span>
        <span class="span-item">五</span>
        <span class="span-item">六</span>
      </div>
      <div class="day" v-if="show">
        <span
          v-for="(item, index) in lastDays"
          :key="index"
          class="otherDay span-item"
        >
          {{ item.slice(-2) }}
        </span>
        <span
          v-for="(item, index) in days"
          :key="index + 50"
          @click="onClickGetData(item)"
          class="span-item"
        >
          <span :class="item == currentDay ? 'current' : ''" class="ronin-item">
            {{ item.slice(-2) }}
          </span>
        </span>
        <span
          v-for="(item, index) in nextDays"
          :key="index + 100"
          class="otherDay span-item"
        >
          {{ item.slice(-2) }}
        </span>
      </div>
      <div class="day" v-else>
        <span
          v-for="(item, index) in small"
          class="span-item"
          :key="index + 511"
          @click="onClickGetData(item)"
        >
          <span :class="item == currentDay ? 'current' : ''" class="ronin-item">
            {{ item.slice(-2) }}
          </span>
        </span>
      </div>

      <view class="shrink">
        <u-icon
          :name="show ? 'arrow-up' : 'arrow-down'"
          color="#2979ff"
          size="28"
          @click="onClickShrink"
        ></u-icon>
      </view>
    </div>
  </div>
</template>

<script>
let checkDate = "";
export default {
  name: "calender",
  data() {
    return {
      year: "",
      month: "",
      lastDays: [],
      days: [],
      nextDays: [],
      currentDay: "",
      nowDate: "",

      daysData: [],
      lastDaysData: [],
      nextDaysData: [],
      small: [], //缩小模式的7天
      show: false,
    };
  },
  mounted() {
    this.handleShowDateStyle();
    this.getDate();

    console.log(this.currentDay, "当前或者选中的日期");
  },
  filters: {
    className(data) {
      // let now = new Date();
    },
  },
  methods: {
    onClickShrink() {
      this.show = !this.show;
    },
    onClickGetData(item) {
      console.log("我走了哈哈哈");
      this.currentDay = item;
      this.$emit("upDate", item);
    },
    //控制当前日期显示特殊样式
    handleShowDateStyle() {
      let now = new Date();
      this.currentDay =
        now.getFullYear().toString() +
        "-" +
        this.mend(now.getMonth() + 1) +
        "-" +
        this.mend(now.getDate());
      //YYYY-MM-DD
      this.nowDate =
        now.getFullYear().toString() +
        "-" +
        this.mend(now.getMonth() + 1) +
        "-" +
        this.mend(now.getDate());

      console.log(this.nowDate);
    },

    getDate() {
      let now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth() + 1;
      this.pushDays();
    },
    mend(data) {
      let num = data;
      if (data < 10) {
        num = "0" + data;
      }
      return num;
    },
    //获取当前年月份天数
    getDays(Y, M) {
      return new Date(Y, M, 0).getDate();
    },
    //得到当前年，这个月的一号是周几
    getWeek(Y, M) {
      let now = new Date();
      now.setFullYear(this.year);
      now.setMonth(this.month - 1);
      now.setDate(1);
      return now.getDay();
    },
    pushDays() {
      //为了完整和美观，日历展示为7列*6行，一共展示42天
      //将这个月多少天加入数组days

      for (let i = 1; i <= this.getDays(this.year, this.month); i++) {
        this.daysData.push(
          `${this.year}-${this.mend(this.month)}-${this.mend(i)}`
        );
        this.days.push(`${this.year}-${this.mend(this.month)}-${this.mend(i)}`);
      }
      //将上个月后面天数加入数组lastDays
      for (let i = 0; i < this.getWeek(this.year, this.month); i++) {
        let lastMonthDays = this.getDays(this.year, this.month - 1);
        this.lastDaysData.unshift(
          `${this.year}-${this.mend(this.month - 1)}-${this.mend(
            lastMonthDays - i
          )}`
        );
        this.lastDays.unshift(
          `${this.year}-${this.mend(this.month - 1)}-${this.mend(
            lastMonthDays - i
          )}`
        );
      }
      //将下个月前几天加入数组nextDays
      let _length = this.days.length + this.lastDays.length;
      for (let i = 1; i < 43 - _length; i++) {
        this.nextDaysData.push(
          `${this.year}-${this.mend(this.month + 1)}-${this.mend(i)}`
        );
        this.nextDays.push(
          `${this.year}-${this.mend(this.month + 1)}-${this.mend(i)}`
        );
      }

      this.getNowWeek();
    },
    getNowWeek() {
      if (this.small?.length > 0) {
        return;
      }
      console.log(this.nowDate, "显示哈哈哈");
      let data = [...this.lastDaysData, ...this.daysData, ...this.nextDaysData];

      data.forEach((item, index) => {
        if (item == this.nowDate) {
          let dataIndex = Math.ceil((index + 1) / 7);
          let arr = data.splice((dataIndex - 1) * 7, 7);
          this.small = arr;
        }
      });
    },

    handleShowNextMonth() {
      this.lastDays = [];
      this.days = [];
      this.nextDays = [];
      if (this.month < 12) {
        this.month = this.month + 1;
        this.pushDays();
      } else {
        this.month = this.month = 1;
        this.year = this.year + 1;
        this.pushDays();
      }
    },
    handleShowLastMonth() {
      this.lastDays = [];
      this.days = [];
      this.nextDays = [];
      if (this.month > 1) {
        this.month = this.month - 1;
        this.pushDays();
      } else if (this.year > 1970) {
        this.month = 12;
        this.year = this.year - 1;
        this.pushDays();
      } else {
        alert("不支持查找1970年之前的日期！");
      }
    },
    handleShowNextYear() {
      this.lastDays = [];
      this.days = [];
      this.nextDays = [];
      this.year = this.year + 1;
      this.pushDays();
    },
    handleShowLastYear() {
      this.lastDays = [];
      this.days = [];
      this.nextDays = [];
      if (this.year > 1970) {
        this.year = this.year - 1;
        this.pushDays();
      } else {
        alert("不支持查找1970年之前的日期！");
      }
    },
  },
};
</script>
<style scoped>
.calender {
  width: 100%;
  margin: 0 auto;
}

.top {
  height: 30rpx;
  line-height: 30rpx;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20rpx 0;
}

.top_date {
  width: 200rpx;
  font-size: 28rpx;
  color: #2d8cf0;
  margin: 0 40rpx;
  text-align: center;
}

.date_wrap {
  padding-top: 20rpx;
}

.week {
  width: 100%;
  font-size: 17rpx;
  font-weight: 500;
  display: flex;
}

.week .span-item {
  width: 14.28%;
  text-align: center;
}



.day {
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 24rpx;
  flex-wrap: wrap;
}

.day .span-item {
  margin-top: 13rpx;
  width: 14.28%;
  font-size: 28rpx;
  text-align: center;
}
.ronin-item{
  width: 50rpx;
  height: 50rpx;
 
  line-height: 50rpx;
  display: inline-block;
  border-radius: 50%;
}

.current {
  color: #fff;
  background: #2d8cf0;
  
  line-height: 48rpx;
}



.otherDay {
  color: #c5c8ce;
}

.shrink {
  padding: 20rpx 0;
  text-align: center;
}
</style>