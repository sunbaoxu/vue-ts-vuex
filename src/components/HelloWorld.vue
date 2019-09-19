<template>
  <div class="hello">
    <div class="PSViewer" ref="psvdbg"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class'
var PhotoSphereViewer   = require('photo-sphere-viewer');


@Component
export default class HelloWorld extends Vue {
  @Getter private orgNo :any;
  width=798;
  height=498;
  img='head-back.jpg';
  init () {
    var PSV = new PhotoSphereViewer({
      //必填参数，全景图的路径。
      panorama: this.img,
      // 必填参数，放置全景图的div元素。
      container: this.$refs.psvdbg,
      // 默认2000毫秒后动画，false禁用
      time_anim: false,
      navbar:[
        'autorotate',
        'zoom',
        'fullscreen'
      ],
      navbar_style:{
        backgroundColor:'rgba(58,67,77,0.7)'
      },
      size: {
        width: '100%',
        height: '498px'
      }
    });
  }

  mounted(){
    this.init();
  }
}
</script>

