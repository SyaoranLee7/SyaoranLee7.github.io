import PokemonList from "./pokList.json";
import TypeHelper from "../PokemonType/type.js";
import { clone } from "@/utils";
const lim = 30; /* 大背景图每行展示个数 */
const funcs = {
    getPokemonList (page, pageSize) {
        const list = PokemonList;
        list.forEach(i => {
            const y = (0 - 56 * i.imgPosition.split(";")[0]) + "px";
            const x = (0 - 68 * i.imgPosition.split(";")[1]) + "px";
            i.positionStyle = {
                "background-position": x + " " + y
            };
        });

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const currentList = list.slice(start, end);
        return {
            data: currentList,
            total: list.length
        };
    }
};
export default funcs;
