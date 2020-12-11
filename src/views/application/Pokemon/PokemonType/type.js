const nameList = [ "一般", "火", "水", "电", "草", "冰", "格斗", "毒", "地面", "飞行", "超能力", "虫", "岩石", "幽灵", "龙", "恶", "钢", "妖精", "???"];
//                  0,     1     2     3     4     5     6       7   8       9         10    11      12    13      14    15    16    17    18
const colorList = [
    "rgba(145, 153, 161, 1)", "rgba(254, 156, 84, 1)", "rgba(79, 144, 213, 1)", "rgba(244, 210, 60, 1)", "rgba(98, 187, 90, 1)",
    "rgba(115, 206, 191, 1)", "rgba(205, 64, 106, 1)", "rgba(169, 106, 200, 1)", "rgba(216, 120, 68, 1)", "rgba(142, 168, 222, 1)",
    "rgba(249, 113, 120, 1)", "rgba(145, 192, 46, 1)", "rgba(187, 183, 139, 1)", "rgba(82, 105, 172, 1)", "rgba(10, 109, 194, 1)",
    "rgba(90, 83, 101, 1)", "rgba(90, 141, 161, 1)", "rgba(235, 143, 230, 1)", "rgba(68, 104, 94, 1)"
];
const rate = [
    { invalid: [13], bad: [12, 16], good: [] }, // 一般
    { invalid: [], bad: [1, 2, 12, 14], good: [4, 5, 11, 16] }, // 火
    { invalid: [], bad: [2, 4, 14], good: [1, 8, 12] }, // 水
    { invalid: [8], bad: [3, 4, 14], good: [2, 9] }, // 电
    { invalid: [], bad: [1, 4, 7, 9, 11, 14, 16], good: [3, 8, 12] }, // 草
    { invalid: [], bad: [1, 2, 5, 16], good: [4, 8, 9, 14] }, // 冰
    { invalid: [13], bad: [7, 9, 10, 11, 17], good: [0, 5, 12, 15, 16] }, // 格斗
    { invalid: [16], bad: [7, 8, 12, 13], good: [4, 17] }, // 毒
    { invalid: [9], bad: [4, 11], good: [1, 3, 7, 12] }, // 地面
    { invalid: [], bad: [3, 12, 16], good: [4, 6, 11] }, // 飞行
    { invalid: [15], bad: [10, 16], good: [6, 7] }, // 超能力
    { invalid: [], bad: [1, 6, 7, 9, 13, 16, 17], good: [4, 10, 15] }, // 虫
    { invalid: [], bad: [6, 8, 16], good: [1, 5, 9, 11] }, // 岩石
    { invalid: [0], bad: [15], good: [10, 13] }, // 幽灵
    { invalid: [17], bad: [16], good: [14] }, // 龙
    { invalid: [], bad: [6, 15, 17], good: [10, 13] }, // 恶
    { invalid: [], bad: [1, 2, 3, 16], good: [6, 12, 17] }, // 钢
    { invalid: [], bad: [1, 7, 16], good: [6, 14, 15] }, // 妖精
    { invalid: [], bad: [], good: [] }
];
const funcs = {
    /* 获取属性列表 */
    getTypeList () {
        const list = [];
        nameList.forEach((i, index) => {
            list.push({
                typeId: index,
                typeName: i,
                typeColor: colorList[index]
            });
        });
        return list;
    },

    /**
     * 计算A对B造成伤害时的属性倍率. ab分别为属性id
     */
    getTypeRate (a, b) {
        const aType = rate[a];
        if (aType.invalid.find(i => i === b)) return 0;
        else if (aType.bad.find(i => i === b)) return 0.5;
        else if (aType.good.find(i => i === b)) return 2;
        else return 1;
    },

    /* 获取属性的中文名称 */
    getTypeName (id) {
        console.log("id:", id);
        if (typeof(id) === "number") return nameList[id];
        else if (typeof(id) === "string") return nameList[Number(id)];
        else {
            let name = "";
            id.forEach(i => {
                name += nameList[Number(i)] + "、";
            });
            return name.slice(0, name.length - 1);
        }
    }
};
export default funcs;
