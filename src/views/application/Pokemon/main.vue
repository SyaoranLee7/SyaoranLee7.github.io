<template>
    <div class="pg">

        <el-button type="primary" @click="type = 'database'">图鉴</el-button>
        <el-button type="primary" @click="goGame">冒险</el-button>
        <el-button type="primary" @click="type = 'type'">属性相克表</el-button>

        <pokemon-database v-if="type === 'database'" class="pg-main"></pokemon-database>
        <pokemon-type v-else-if="type === 'type'" class="pg-main"></pokemon-type>

    </div>
</template>

<script>
import PokemonDatabase from "./PokemonDatabase";
import PokemonType from "./PokemonType";
export default {
    name: "Pokemon",

    components: {
        PokemonDatabase,
        PokemonType
    },

    data () {
        return {
            type: "database"
        };
    },

    created () {
    },

    methods: {
        goGame () {}
    }
};
</script>

<style lang="scss" scoped>
.pg {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(20, 40px);
    gap: 20px 20px;
    &-main {
        grid-area: 2 / 1 / 20 / 13;
    }
}
</style>
