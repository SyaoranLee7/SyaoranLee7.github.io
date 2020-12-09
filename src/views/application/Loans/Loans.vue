<template>
    <div class="loans">

        <el-form
            :model="basic"
            class="loans-basic"
            label-width="140px"
            label-position="left">
            <el-form-item label="贷款金额">
                <el-input v-model="basic.money" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="贷款期限">
                <el-select v-model="basic.deadline" placeholder="">
                    <el-option
                        v-for="item in deadlineList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
export default {
    name: "Loans",

    data () {
        return {
            basic: {
                money: ""
            }
        };
    },

    created () {
    }
};
</script>

<style lang="scss" scoped>
.loans {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(20, 40px);
    gap: 20px 20px;

    &-basic {
        grid-area: 1 / 1 / 10 / 5;
    }
}
</style>
