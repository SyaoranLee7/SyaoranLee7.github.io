<template>
    <div class="myplan">

        <div class="myplan-tools">
        </div>

        <el-calendar
            v-model="value"
            class="myplan--main">
        </el-calendar>

    </div>
</template>

<script>
export default {
    name: "MyPlan",

    data () {
        return {};
    },

    created () {},

    mounted () {},

    methods: {}
};
</script>

<style lang="scss" scoped>
.myplan {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(15, 39px);
    gap: 20px 20px;
    margin: 20px;

    &-tools {
        grid-area: 1 / 1 / 2 / 13;
    }

    &--main {
        grid-area: 2 / 1 / 16 / 13;
    }
}
</style>
