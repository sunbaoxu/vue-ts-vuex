<template>
  <div class="hello">
    <!-- <img :src="img" alt=""> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import PhotoSphereViewer from 'photo-sphere-viewer';
var THREE   = require('three');
let SEPARATION = 100,
  AMOUNTX = 100,
  AMOUNTY = 70;

@Component
export default class HelloWorld extends Vue {
//   camera  :any= null;
//   scene :any = null;
//   renderer:any =null;

//   particles:any =null;
//   particle :any= null;
//   count = 0;
//   // mesh6 :any =null;
//   mouseX = 85;
//   mouseY = -342;

//    windowHalfX = window.innerWidth / 2;
//    windowHalfY = window.innerHeight / 2;

//   init () {
//     var mesh6 =null;
//     var container = document.createElement("div");
//       document.body.appendChild(container);
//       this.camera = new THREE.PerspectiveCamera(
//         120,
//         window.innerWidth / window.innerHeight,
//         1,
//         10000
//       );
//       container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
//       this.camera.position.z = 1000;

//       this.scene =new THREE.Scene();

//       // this.particles = new Array();

//       // var PI2 = Math.PI * 2;
//       // console.log(THREE)
//       var material =new THREE.LineBasicMaterial({
//         color: 0xe1e1e1,
//         linewidth: 1000

//       });
//       var x= 6000;
//       var starsGeometry = new THREE.Geometry();
//           starsGeometry.vertices.push(
//             new THREE.Vector3(-x, 0, 0),
//             new THREE.Vector3(0, Math.sqrt(3 * x * x), 0),
//             new THREE.Vector3(x, 0, 0),
//             new THREE.Vector3(-x, 0, 0)
//           );

//       var loader = new THREE.JSONLoader();
//             loader.load('Sphere.json', handle_load6);

//       function handle_load6(geometry:any, material:any) {
//           var colors = [];
//           for (var i = 0; i < geometry.vertices.length; i++) {
//               colors[i] = new THREE.Color(0x6870F5);
//               var hsl = colors[i].getHSL();
//               colors[i].setHSL(hsl.h + 0.05, Math.random() * 0.4 + 0.5, Math.random() * 0.3 + 0.5);
//           }
//           geometry.colors = colors;
//           var material = new THREE.PointsMaterial({
//               size: 50,
//               opacity: 0.5,
//               map: THREE.ImageUtils.loadTexture('orb.png'),
//               transparent: true,
//               blending: THREE.AdditiveBlending,
//               depthWrite: false,
//               vertexColors: THREE.VertexColors
//           });
//           mesh6 = new THREE.Points(geometry, material);
//       }
//   }

//   onWindowResize() {
//     this.windowHalfX = window.innerWidth / 2;
//     this.windowHalfY = window.innerHeight / 2;

//     this.camera.aspect = window.innerWidth / window.innerHeight;
//     this.camera.updateProjectionMatrix();

//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//   }
//     onDocumentMouseMove(event:any) {
//       this.mouseX = event.clientX - this.windowHalfX;
//       this.mouseY = event.clientY - this.windowHalfY;
//     }
//     onDocumentTouchStart(event:any) {
//       if (event.touches.length === 1) {
//         event.preventDefault();

//         this.mouseX = event.touches[0].pageX - this.windowHalfX;
//         this.mouseY = event.touches[0].pageY - this.windowHalfY;
//       }
//     }
//     onDocumentTouchMove(event:any) {
//       if (event.touches.length === 1) {
//         event.preventDefault();

//         this.mouseX = event.touches[0].pageX - this.windowHalfX;
//         this.mouseY = event.touches[0].pageY - this.windowHalfY;
//       }
//     }
//     animate() {
//       requestAnimationFrame(this.animate);

//       this.render();
//     }
//     render() {
//       this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
//       this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
//       this.camera.lookAt(this.scene.position);

//       var i = 0;

//       for (var ix = 0; ix < AMOUNTX; ix++) {
//         for (var iy = 0; iy < AMOUNTY; iy++) {
//           this.particle = this.particles[i++];
//           this.particle.position.y =
//             Math.sin((ix + this.count) * 0.3) * 50 +
//             Math.sin((iy + this.count) * 0.5) * 50;
//           this.particle.scale.x = this.particle.scale.y =
//             (Math.sin((ix + this.count) * 0.3) + 1) * 2 +
//             (Math.sin((iy + this.count) * 0.5) + 1) * 2;
//         }
//       }

//       this.renderer.render(this.scene, this.camera);

//       this.count += 0.1;
//     }

//   mounted() {
//     // this.getImgCode();
//     this.init()
//     this.animate()
//   }
}
</script>