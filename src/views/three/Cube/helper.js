import * as THREE from "three";
import MegaMath from "@/utils/MegaMath.js";
import { getRandomColor } from "@/utils";

const PI = Math.PI;
const color = "#B0B0B0";
const boxLength = 50; // 空间立方体边长
const pipeRadius = 7; // 管道半径
const pipeLength = 20; // 管道长度的一半
const cubeLength = boxLength + pipeLength * 2; // 单个房间长度

const funcs = {
    /**
     * 生成全阵
     * @param {Object} center: 全阵中心点坐标 { x, y, z }
     * @param {Number} l: 边长，即每边有多少个房间
     */
    getRoom ( center, l = 10 ) {
        let length = Math.ceil( l );
        if ( length % 2 === 1 ) length++;

        /* 循环生成cube */
        let arr = [];
        for ( let x = center.x - length / 2 * cubeLength; x <= center.x + length / 2 * cubeLength; x = x + cubeLength ) {
            for ( let y = center.y - length / 2 * cubeLength; y <= center.y + length / 2 * cubeLength; y = y + cubeLength ) {
                for ( let z = center.z - length / 2 * cubeLength; z <= center.z + length / 2 * cubeLength; z = z + cubeLength ) {
                    arr.push( this.getCube({ x, y, z }) );
                }
            }
        }
        return arr;
    },

    /**
     * 生成单个cube阵
     */
    getCube ( center ) {
        const group = new THREE.Geometry();

        /* 空间主体 */
        const box = new THREE.Mesh(
            new THREE.BoxGeometry( boxLength, boxLength, boxLength ),
            new THREE.MeshBasicMaterial({ color })
        );
        box.position.set( center.x, center.y, center.z );
        box.updateMatrix();
        group.merge(box.geometry, box.matrix);

        /* 六面通道 */
        const pipe = new THREE.Mesh(
            new THREE.CylinderGeometry( pipeRadius, pipeRadius, pipeLength, 32 ),
            new THREE.MeshBasicMaterial({ color })
        );

        // 上方
        pipe.position.set( center.x, center.y + boxLength / 2 + pipeLength / 2, center.z );
        pipe.updateMatrix();
        group.merge( pipe.geometry, pipe.matrix );

        // 下方
        pipe.position.set( center.x, -1 * (center.y + boxLength / 2 + pipeLength / 2), center.z );
        pipe.updateMatrix();
        group.merge( pipe.geometry, pipe.matrix );

        // 前方
        pipe.position.set( center.x, center.y, center.z + boxLength / 2 + pipeLength / 2 );
        pipe.rotation.x += PI / 2;
        pipe.updateMatrix();
        group.merge( pipe.geometry, pipe.matrix );

        // 后方
        pipe.position.set( center.x, center.y, -1 * (center.z + boxLength / 2 + pipeLength / 2) );
        pipe.updateMatrix();
        group.merge( pipe.geometry, pipe.matrix );

        // 左方
        pipe.position.set( center.x + boxLength / 2 + pipeLength / 2, center.y, center.z );
        pipe.rotation.x -= PI / 2;
        pipe.rotation.z += PI / 2;
        pipe.updateMatrix();
        group.merge( pipe.geometry, pipe.matrix );

        // 右方
        pipe.position.set( -1 * (center.x + boxLength / 2 + pipeLength / 2), center.y, center.z );
        pipe.updateMatrix();
        group.merge( pipe.geometry, pipe.matrix );

        const geometry = new THREE.Mesh(
            group,
            new THREE.MeshBasicMaterial({ color: getRandomColor() })
        );
        geometry.realCoordinate = { x: center.x, y: center.y, z: center.z }; // 真实坐标

        return geometry;
    },

    /* 加密某个房间的真实坐标 */
    getCubeCoordinate ( center ) {}
};
export default funcs;
