<template>
  <view class="appointment-reading">

    <!-- 顶部说明 -->
    <view class="header">
      <img src="@/static/icon_svg/healthy_reading/robot.svg" class="img" />
      <view class="text">
        请仔细阅读并遵守，以保证体检顺利、结果准确
      </view>
    </view>

    <!-- 体检流程 -->
    <view class="content">
      <view class="content-title">体检流程</view>
      <view class="content-body">
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">第1步：体检预约</view>
            <view class="text">请在本平台选定体检项目，完成预约；</p>若对项目有疑问，可咨询平台健管师。
            </view>
          </view>
        </view>
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">第2步：到院体检</view>
            <view class="text">请按预约时间到院体检，部分特殊项目约单独预约，如MRI、PET-CT、胃肠镜等；</p>体检前请出示身份证或社保卡，以便工作人员确认预约。</view>
          </view>
        </view>
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">第3步：查询报告</view>
            <view class="text">体检完成后，纸质报告您可选择寄送或前往自取。</view>
          </view>
        </view>
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">第4步：报告解读</view>
            <view class="text">您可上传体检报告至本平台进行智慧解读或咨询健管师。</view>
          </view>
        </view>
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">第5步：检后管理</view>
            <view class="text">上传体检报告后，建议您在本平台完善健康档案与健康测评，启动检后智慧健康服务。</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 注意事项 -->
    <view class="content">
      <view class="content-title">注意事项</view>
      <view class="content-body">
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">男性体检</view>
            <view class="text">
              1.检前3天规律饮食，忌酒，限高脂与高蛋白饮食。注意休息、不要熬夜。
              </p>2.参加体检，应着宽松衣物、鞋子，便于穿脱。
              </p></p>3.高血压病人按常规服用降压药；糖尿病与其他慢性病患者，体检当天抽血后请及时服药。
              </p>4.体检当日抽血、B超前要保持空腹；可少量饮水，禁大量饮水。抽血、B超完成后可食用早餐。
              </p>5.进行前列腺B超检查前，需要先憋尿。
            </view>
          </view>
        </view>
        <view class="block">
          <view class="dot"></view>
          <view class="article">
            <view class="subtitle">女性体检</view>
            <view class="text">
              1.女性月经期，不宜进行妇科检查、尿检项目、宫颈刮片检查；预约体检需安排在月经结束3-5天后。
              </p>2.检前3天规律饮食，忌酒，限高脂与高蛋白饮食。注意休息、不要熬夜。
              </p>3.参加体检，应着宽松衣物、鞋子，便于穿脱。
              </p>4.高血压病人按常规服用降压药；糖尿病与其他慢性病患者，体检当天抽血后请及时服药。
              </p>5.体检当日抽血、B超前要保持空腹；可少量饮水，禁大量饮水。抽血、B超完成后可食用早餐。
              </p>6.进行妇科B超检查前，需要先憋尿；进行妇科检查前，需要先排空小便。 7.怀孕女性，请不要进行妇科检查和放射性影像检查（CT、DR等）。
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>


<script>
export default {
  name: "AppointmentReading", // 预约须知

  data () {
    return {
    };
  },

  onLoad (e) {
  },

  methods: {
  }
};
</script>


<style lang="scss" scoped>
.appointment-reading {
  background: url("../../static/icon_svg/healthy_reading/top.svg") no-repeat;
  background-size: 100% auto;

  /** 顶部说明 **/
  .header {
    position: relative;
    display: flex;
    .img {
      width: 55px;
      height: 70px;
    }
    .text {
      color: #FFFFFF;
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      padding: 0 10px;
    }
  }

  /** 内容块 **/
  .content {
    padding: 10px 5px;
    margin: 0 10px 10px 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    &-title {
      color: #333333;
      font-family: PingFang SC;
      font-weight: 700;
      font-size: 20px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #F0F0F0;
    }
    &-body {
      margin: 20px 0;
      .block {
        display: flex;
        margin-bottom: 20px;
        .dot {
          width: 20px;
          height: 20px;
          background: linear-gradient(91.19deg, #06BCBC 42%, #0099CC 100%);
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
        }
        .article {
          .subtitle {
            color: #333333;
            font-size: 16px;
            font-weight: 700;
            height: 18px;
            line-height: 18px;
          }
          .text {
            margin-top: 5px;
            color: #444444;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
