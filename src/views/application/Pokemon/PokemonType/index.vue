<template>
    <div class="pdb">

        <div id="pdb-top" class="table-top"></div>

        <div id="pdb-left" class="table-left"></div>

        <div id="pdb-main" class="table-main"></div>

    </div>
</template>

<script>
import Type from "./type.js";
import { clone } from "@/utils";

export default {
    name: "PokemonType",

    data () {
        return {
            list: []
        };
    },

    created () {
        this.list = Type.getTypeList();
    },

    mounted () {
        this.init();
        this.initTable();
    },

    methods: {
        init () {
            const topDom = document.getElementById("pdb-top");
            const leftDom = document.getElementById("pdb-left");

            const nullDiv = document.createElement("div");
            nullDiv.className = "table-block";
            nullDiv.innerHTML = "进攻 | 防守";
            nullDiv.style.color = "#000000";
            topDom.appendChild(nullDiv);
            for (let i = 0; i < this.list.length; i++) {
                const div = document.createElement("div");
                div.className = "table-block";
                div.style.background = this.list[i].typeColor;
                div.innerHTML = this.list[i].typeName;
                topDom.appendChild(div);
            }
            for (let i = 0; i < this.list.length; i++) {
                const div = document.createElement("div");
                div.className = "table-block";
                div.style.background = this.list[i].typeColor;
                div.innerHTML = this.list[i].typeName;
                leftDom.appendChild(div);
            }
        },

        initTable () {
            const dom = document.getElementById("pdb-main");
            for (let a = 0; a < this.list.length; a++) {
                for (let b = 0; b < this.list.length; b++) {
                    const div = document.createElement("div");
                    const rate = Type.getTypeRate(a, b);
                    switch (rate) {
                        case 0:
                            div.className = "rate-invalid rate-block";
                            div.innerHTML = "×";
                            break;
                        case 1:
                            div.className = "rate-normal rate-block";
                            break;
                        case 0.5:
                            div.className = "rate-bad rate-block";
                            div.innerHTML = "△";
                            break;
                        case 2:
                            div.className = "rate-good rate-block";
                            div.innerHTML = "◎";
                            break;
                        default:
                            div.className = "rate-normal rate-block";
                    }
                    // div.classList.add("row-" + a);
                    // div.classList.add("column-" + b);
                    // div.onmouseover = this.highlightTable;
                    dom.appendChild(div);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.pdb {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(20, 40px);

    .table-top {
        grid-area: 1 / 1 / 2 / 21;
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: 40px;
    }
    .table-left {
        grid-area: 2 / 1 / 21 / 2;
    }
    .table-main {
        grid-area: 2 / 2 / 21 / 21;
        grid-auto-flow: row;
        display: grid;
        grid-template-columns: repeat(19, 1fr);
        grid-template-rows: repeat(19, 40px);
    }
}
</style>
<style lang="scss">
.pdb {
    .table-block {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #FFFFFF;
        border: 1px solid #D8D8D8;
    }
    .rate-block {
        height: 40px;
        line-height: 40px;
        font-size: 28px;
        text-align: center;
        color: #000000;
        border: 1px solid #D8D8D8;
    }
}
</style>
