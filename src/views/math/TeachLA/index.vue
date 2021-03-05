<template>
    <div id="echart" class="lan-main">
    </div>
</template>

<script>
export default {
    name: "",

    data () {
        return {
            lineData: []
        };
    },

    created () {},

    mounted () {
        this.initData();
        this.initEchart();
        setTimeout(this.animation(), 3000);
    },

    methods: {
        initData () {
            this.lineData = [
                [ [-2, -3], [0, 0] ]
            ];
        },

        initEchart () {
            const echarts = require("echarts");
            const dom = echarts.init(document.getElementById("echart"), {}, { renderer: "svg" });
            const grid = { left: 50, right: 50, top: 50, bottom: 50 };
            const axis = {
                type: "value",
                min: -10,
                max: 10,
                splitNumber: 21,
                axisTick: { show: false }
            };

            const series = [];
            this.lineData.forEach(i => {
                series.push({
                    type: "line",
                    data: i,
                    silent: true
                });
            });

            const option = {
                grid,
                xAxis: axis,
                yAxis: axis,
                series
            };
            dom.setOption(option);
        },

        animation () {
            this.clock = setInterval(() => {
                this.lineData[0][0][0] = this.lineData[0][0][0] + 0.02;
                this.lineData[0][0][1] = this.lineData[0][0][0] * 2 + 1;
                this.initEchart();
            }, 100);
        }
    }
};
</script>

<style lang="scss" scoped>
#echart {
    margin: 0 auto;
    width: 900px;
    height: 900px;
}
</style>
