<template>
  <el-col style="width: 100%;height: 100%">
    <!--    背景-->
    <div :style="background" class="bgBackground"></div>
    <TitleComponent></TitleComponent>
  </el-col>
</template>

<script>


import TitleComponent from "@/components/Title.vue";

export default {
  name: "HomeView",
  components: {
    TitleComponent
  },
  data() {
    return {
      provinceName: null,
      visible: false,
      mouseX: 0,
      mouseY: 0,

      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/background/bg1.jpg') + ')',
        // 背景图片是否重复
        backgroundRepeat: 'no-repeat',
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        backgroundColor: '#000',
        // 背景图片位置
        backgroundPosition: 'center top'
      }
    }
  },
  mounted() {

  },
  beforeUnmount() {

  },
  methods: {

  }
}
</script>

<style scoped>

.bgBackground {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}

</style>