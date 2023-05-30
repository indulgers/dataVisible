<!--菜单栏组件-->
<template>
  <div v-show="!visible" class="pull-ring" :class="{ 'visible': visible }" @click="toggleVisibility">
    <i class="fas fa-chevron-down"></i>
  </div>
  <el-col v-show="!visible">
    <div style="height: 40px"></div>
  </el-col>
  <el-col v-show="visible" :span="5" :offset="10">
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        background-color="transport"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        style="width: 100%;  justify-content: space-between;opacity: 0.8;height: 40px;z-index: 99"
    >
      <el-menu-item index="1">主页</el-menu-item>
      <el-menu-item index="2">数据库</el-menu-item>

      <el-menu-item index="3">政策</el-menu-item>
      <el-menu-item index="4">分析</el-menu-item>
    </el-menu>
  </el-col>

</template>

<script>

export default {
  data() {
    return {
      visible: true,
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key,) {
      // console.log(key, keyPath);
      switch (key) {
        case '1':
          this.$router.push({name: 'home'})
          break;
        case '2':
          this.$router.push({name: 'data'})
          break;
        case '3':
          this.$router.push({name: 'policy'})
          break;
        case '4':
          this.$router.push({name: 'analyse'})
          break;
        default:
          break;
      }
      this.visible = !this.visible;
    },
    toggleVisibility() {
      this.visible = !this.visible
    },
    dataMethod(){

    }
  }
}
</script>
<style scoped>
.pull-ring {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 25px;
  background: linear-gradient(to right, #ecc898, #7a5427);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.pull-ring:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(245, 233, 134, 0.4);
  opacity: 0.4;
  animation: pulse 1.5s infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
    box-shadow: 0 0 0 0 rgba(245, 233, 134, 0.4);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
    box-shadow: 0 0 0 50px rgba(245, 233, 134, 0);
  }
}
</style>