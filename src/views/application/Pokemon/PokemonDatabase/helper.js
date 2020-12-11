import PokemonList from "./pokemonList.js";
import TypeHelper from "../PokemonType/type.js";
const funcs = {
    getPokemonList () {
        const list = PokemonList.map((i, index) => {
            let id = 0;
            if (index < 10) id = "00" + index;
            else if (index < 100) id = "0" + index;
            else id = index;
            return {
                id,
                chName: i.cn,
                enName: i.en,
                type: TypeHelper.getTypeName(i.type)
            };
        });
        return list;
    }
};
export default funcs;
