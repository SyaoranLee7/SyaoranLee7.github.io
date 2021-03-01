<template>
    <div class="lan-main-three">
        <div id="canvas"></div>
    </div>
</template>

<script>
import * as THREE from "three";
import { TrackballControls } from "@/assets/js/TrackballControls.js";
import Stats from "stats.js";
import helper from "./helper.js";
import MegaMath from "@/utils/MegaMath.js";

export default {
    name: "Astronomy",

    data () {
        return {
            scene: "", // 场景
            camera: "", // 相机
            renderer: "", // 渲染器
            stats: "", // 性能器
            controls: "", // 控制器
            aspect: window.innerWidth / window.innerHeight,

            cube: [] // 方阵数组
        };
    },

    computed: {
    },

    mounted () {
        this.init();
        this.AddScene();
        this.animate();
    },

    methods: {
        init () {
            /* 场景 */
            const scene = new THREE.Scene();
            this.scene = scene;

            /* 网格辅助 */
            // const gridHelper = new THREE.GridHelper( 100, 100, "#C0C0C0", "#303030" );
            // scene.add( gridHelper );

            /* 相机 */
            const camera = new THREE.PerspectiveCamera( 45, this.aspect, 1, 1000 );
            camera.position.x = 150;
            camera.position.y = 150;
            camera.position.z = 150;
            camera.lookAt( 0, 0, 0 );
            scene.add( camera );
            this.camera = camera;

            /* 渲染器 */
            const container = document.createElement("div");
            document.getElementById("canvas").appendChild(container);
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);
            this.renderer = renderer;

            /* Stats */
            this.stats = new Stats();
            container.appendChild(this.stats.dom );

            /* 添加控制器 */
            const controls = new TrackballControls(camera, renderer.domElement);
            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;
            controls.keys = [65, 83, 68];
            this.controls = controls;
        },

        /* 添加场景中各种物体 */
        AddScene () {
            const cube = helper.getRoom( { x: 0, y: 0, z: 0 }, 2 );
            this.cube = cube;
            console.log("cube:", cube);
            cube.forEach(obj => {
                this.scene.add( obj );
            });
        },

        animate () {
            requestAnimationFrame(this.animate);
            this.controls.update();
            this.stats.update();
            this.render();
        },

        render () {
            this.renderer.render( this.scene, this.camera );
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
