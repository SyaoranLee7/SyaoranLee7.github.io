<template>
    <div class="pok">

        <div class="pok-menu">
            <el-button type="primary" @click="activeModel = 'myPok'">我的精灵</el-button>
        </div>

        <div class="pok-main">
        </div>

    </div>
</template>

<script>
// import MyPokemon from "./myPok.vue";
export default {
    name: "PokemonMain",

    components: {
        // MyPokemon
    },

    data () {
        return {
            activeModel: "myPok" // 当前模块
        };
    },

    created () {},

    mounted () {},

    methods: {}
};
</script>

<style lang="scss" scoped>
.pok {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(auto-fill, 40px);
    gap: 20px 20px;
    height: 100%;
    &-menu {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    &-main {
      grid-column-start: 2;
      grid-column-end: 13;
    }
}
</style>
