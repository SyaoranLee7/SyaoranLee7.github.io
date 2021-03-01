<template>
    <div class="pp">

        <el-table
            :data="myPokList"
            :height="760"
            class="pdb__table">
            <el-table-column prop="pokedex" label="全国图鉴" min-width="80"></el-table-column>
            <el-table-column label="图像" width="100">
                <template slot-scope="{row}">
                    <div class="pdb__table-background" :style="row.positionStyle"></div>
                </template>
            </el-table-column>
            <el-table-column prop="ch" label="中文名称" min-width="180"></el-table-column>
            <el-table-column prop="type" label="属性" min-width="180">
                <template slot-scope="{row}">
                    {{ row.type | formatType }}
                </template>
            </el-table-column>
            <el-table-column prop="ability" label="特性" min-width="180"></el-table-column>
            <el-table-column label="努力值">
                <el-table-column prop="hp" label="生命" width="60"></el-table-column>
                <el-table-column prop="at" label="攻击" width="60"></el-table-column>
                <el-table-column prop="de" label="防御" width="60"></el-table-column>
                <el-table-column prop="st" label="特攻" width="60"></el-table-column>
                <el-table-column prop="sd" label="特防" width="60"></el-table-column>
                <el-table-column prop="sp" label="速度" width="60"></el-table-column>
                <el-table-column prop="speciesStrength" label="总和" width="60"></el-table-column>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import PokemonType from "./PokemonType";
export default {
    name: "MyPokemon",

    data () {
        return {
            myPokList: []
        };
    },

    filters: {
        formatType (type) {
            return PokemonType.getTypeName(type);
        },
        formatBasePoints (bp) {
            const bpList = ["生命", "攻击", "防御", "特攻", "特防", "速度"];
            let str = "";
            bp.split(";").forEach((i, index) => {
                if (Number(i)) {
                    str += bpList[index] + "+" + i + "、";
                }
            });
            return str.slice(0, str.length - 1);
        }
    },

    created () {},

    mounted () {},

    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
