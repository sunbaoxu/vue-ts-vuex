<template>
  <div class="hello">
    <div class="PSViewer" ref="psvdbg"></div>
    <!-- <img :src="img" alt=""> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class'
// import PhotoSphereViewer from 'photo-sphere-viewer';
var THREE   = require('three');
var PhotoSphereViewer   = require('photo-sphere-viewer');
// import THREE from 'three'


@Component
export default class HelloWorld extends Vue {
  @Getter private orgNo :any;
  width=798;
  height=498;
  img='head-back.png';

   init () {
    const self   = this;

    var PSV = new PhotoSphereViewer({
      // Panorama, given in base 64
      //必填参数，全景图的路径。
      panorama: self.img,

      // Container
      container: self.$refs.psvdbg,

      // Deactivate the animation
      time_anim: false,

      // Display the navigation bar
      // navbar: true,
      navbar:[
        'autorotate',
        'zoom',
        'fullscreen'
      ],
      navbar_style:{
        backgroundColor:'rgba(58,67,77,0.7)'
      },

      // Resize the panorama
      size: {
        width: '100%',
        height: '498px'
      }
    });
        }

  mounted(){
    this.init();
    // console.log(this.orgNo,'asdf');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
