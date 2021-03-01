<template>
    <div class="lan-main">

        <div class="lan-main-head">
            <div class="title">各类心形线</div>
        </div>

        <div class="lan-content">
            <div class="setting-base">
                <div class="title">参数设置</div>
                <el-form
                    :model="inputData"
                    label-width="120px"
                    label-position="left">
                    <el-form-item label="函数">
                        <el-select v-model="inputData.type" placeholder="请选择函数">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="run">
                    显示图像
                </el-button>
                <div v-if="inputData.type === 1">
                    r = [sin(t) * sqrt(abs(cos(t)))] / [sin(t) + 5/7] -2sin(t) + 2
                </div>
            </div>

            <div class="setting-result">
                <div class="title">结果展示</div>
                <div class="result">
                    <div id="result"></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import helper from "./Cardioid.js";
export default {
    data () {
        return {
            inputData: {},
            options: [
                { label: "函数1", value: 1 }
            ],

            pointsData: []
        };
    },

    computed: {
    },

    methods: {
        // 开始计算
        run () {
            this.pointsData = helper.getPoints(this.inputData.type);
            this.initEchart();
        },

        initEchart (checkData) {
            const echarts = require("echarts");
            const dom = echarts.init(document.getElementById("result"), {}, { renderer: "svg" });
            const axis = { type: "value", axisTick: { show: false } };

            /* 生成函数数据点 */
            const series = {
                type: "scatter",
                data: this.pointsData,
                symbolSize: 2,
                silent: true
            };

            const option = {
                xAxis: axis,
                yAxis: axis,
                series
            };
            dom.setOption(option);
        }
    },

    created () {
    }
};
</script>

<style lang="scss" scoped>
.lan-main {
    .result {
        #result {
            width: 100%;
            height: 700px;
            border: 1px solid #666666;
            margin: 20px;
        }
    }
}
</style>
