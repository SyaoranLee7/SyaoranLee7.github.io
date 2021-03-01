import MegaMath from "@/utils/MegaMath.js";
const PI = Math.PI;

const funcs = {
    /**
     * 获取指定函数的点集合
     * @param {Number} type: 内置函数序号
     */
    getPoints (type) {
        const list = [];
        switch (type) {
            /**
             * r=sint*sqrt(abs(cost)) / (sint + 7/5 ) -2sint + 2
             */
            case 1:
                for (let t = -2 * PI; t < 2 * PI; t = t + 0.01) {
                    const up = Math.sin(t) * Math.sqrt( Math.abs( Math.cos(t) ) );
                    const down = Math.sin(t) + 7 / 5;
                    const r = up / down - 2 * Math.sin(t) + 2;
                    list.push([r * Math.cos(t), r * Math.sin(t)]);
                }
                break;
            default:
        }
        console.log("list:", list);
        return list;
    }
};
export default funcs;
