<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

.PSViewer{
  overflow : hidden;
  display : block;
  width : 100%;
  height : inherit;
  position : relative;
  .fix{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    width: 200px;
  }
  .psv-hud{
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 35px;
    z-index: 10;
    svg{
      display: block;
      width: 100%;
      height: 100%
    }
  }
  .psv-container{
    display: block;
    width: 100%;
    height: inherit;
    .psv-loader-container{
      width: 50px;
      height: 50px;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -25px;
      *{
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .psv-canvas-container{
    display: block;
    width: 100%;
    height: inherit;
    canvas{
      display: block;
      width: 100%;
      height: inherit;
    }
  }
  .psv-navbar{
    &.psv-navbar--open{
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 60;
      padding: 8px 0;
      display: block;
      background-color: rgba(255,255,255,0.7);
      .psv-caption{
        display: inline-block;
      }
      .psv-button{
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        float: left;
        &.psv-zoom-button{
          float: left;
          width: auto;
          .psv-zoom-button-minus{
            width: 20px;
            float: left;
            height: 20px;
            background-color: transparent;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
          }
          .psv-zoom-button-range{
            float: left;
            padding: 10px 8px 0 8px;
            background-color: transparent;
            cursor: pointer;
            .psv-zoom-button-line{
              width: 50px;
              height: 2px;
              background-color: rgba(0, 0, 0, 0.7);
              position: relative;
              .psv-zoom-button-handle{
                position: absolute;
                top: -3px;
                left: -3.5px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.7);
              }
            }
          }
          .psv-zoom-button-plus{
            width: 20px;
            float: left;
            height: 20px;
            background-color: transparent;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
          }
        }
        &.psv-autorotate-button{
          margin-right: 8px;
          margin-left: 8px;
        }
        &.psv-fullscreen-button{
          float:right;
          margin-right: 8px;
        }
      }
      .psv-caption{
        height: inherit;
      }
    }
  }
}
</style>
