<template>
  <MyMenu></MyMenu>
  <router-view style="height: 92vh"></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SecondTest from './views/ConverModel.vue'
import MyMenu from './components/MyMenu.vue'
// import MainTab from './views/HomeView.vue'
export default {
  name: 'App',
  components: {
    MyMenu,
  }
}
</script>

<style>

</style>
