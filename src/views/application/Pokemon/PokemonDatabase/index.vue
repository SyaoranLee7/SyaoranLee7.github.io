<template>
    <div class="pdb">

        <el-table
            :data="pokData"
            class="pdb-table">
            <el-table-column prop="id" label="全国图鉴" min-width="80"></el-table-column>
            <el-table-column prop="chName" label="中文名称" width="180"></el-table-column>
        </el-table>

    </div>
</template>

<script>
import helper from "./helper.js";
export default {
    name: "PokemonDatabase",

    data () {
        return {
            pokData: []
        };
    },

    created () {
        this.pokData = helper.getPokemonList();
    },

    methods: {
    }
};
</script>

<style lang="scss" scoped>
.pdb {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(20, 40px);
    gap: 20px 20px;
    &-table {
        grid-area: 1 / 1 / 21 / 13;
    }
}
</style>
