<template>
    <div id="dev" class="lan-main-three">

    </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

export default {
    name: "DevPage",

    data () {
        return {
            scene: "", // 场景
            camera: "", // 相机
            aspect: window.innerWidth / window.innerHeight, // 相机长宽比
            renderer: "" // 渲染器
        };
    },

    mounted () {
        this.$http.get("/static/config.json").then(res => {
            console.log("json数据为:" + res.body);
        });

        // new GLTFLoader().load( "../static/models/test.gltf", function ( obj ) {
        //     console.log("obj:", obj);
        // });
        // this.initThree();
        // this.animate();
    },

    methods: {
        initThree () {
            /* 场景 */
            const scene = new THREE.Scene();

            /* 相机 */
            const camera = new THREE.PerspectiveCamera( 45, this.aspect, 1, 10000 );
            scene.add(camera);

            const axesHelper = new THREE.AxesHelper( 100 );
            scene.add( axesHelper ); // 坐标轴

            // const loader = new GLTFLoader().setPath( "/static/models/" );
            // loader.load( "test.gltf", function ( obj ) {
            //     console.log("obj:", obj);
            // });

            /* 渲染器 */
            const container = document.createElement("div");
            document.getElementById("dev").appendChild(container);
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            this.scene = scene;
            this.camera = camera;
            this.renderer = renderer;
        },

        animate () {
            requestAnimationFrame(this.animate);
            this.render();
        },

        render () {
            this.renderer.render(this.scene, this.camera);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
