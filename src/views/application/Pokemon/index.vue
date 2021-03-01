<template>
    <div class="pg">

        <el-button type="info" plain @click="type = 'advance'">冒险</el-button>
        <el-button type="info" plain @click="type = 'database'">图鉴</el-button>
        <el-button type="info" plain @click="type = 'type'">属性相克表</el-button>

        <pokemon-main v-if="type === 'advance'" class="pg-main"></pokemon-main>
        <pokemon-database v-if="type === 'database'" class="pg-main"></pokemon-database>
        <pokemon-type v-else-if="type === 'type'" class="pg-main"></pokemon-type>

    </div>
</template>

<script>
import PokemonMain from "./main.vue";
import PokemonDatabase from "./PokemonDatabase";
import PokemonType from "./PokemonType";
export default {
    name: "Pokemon",

    components: {
        PokemonMain,
        PokemonDatabase,
        PokemonType
    },

    data () {
        return {
            type: "advance"
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
    grid-template-rows: repeat(auto-fill, 40px);
    gap: 10px 10px;
    background-color: #FFFFFF;
    height: 100%;
    &-main {
        // grid-area: 2 / 1 / 15 / 13;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 2;
    }
}
</style>
