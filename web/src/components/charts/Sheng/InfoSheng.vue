<template>
  <div style="width: 100%;height: 100%">
    <el-row justify="center" style="color: #ecc898;font-size: 40px;width: 100%;height: 5%;">
      {{ provinceName }}
    </el-row>
    <div style="width: 100%;height: 100%;padding-top: 5%;opacity: 0.7;">
      <div :style="pic"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    provinceName: String
  },
  name: "InfoSheng",
  data(){
    return{
      fit:'cover',
      url:null,
      imagePath: '/北京.jpg',
      pic: {
        width: '100%',
        height: '35vh',
        paddingTop: '5%',
        borderRadius: '20px',
        backgroundImage: 'url(' + require('@/assets/images/'+this.provinceName+'.jpg') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }

    }
  },
  mounted() {
    let path = '../images/' + this.provinceName + '.jpg';
    console.log("图片路径"+path)
    try {
      this.url = require(path);
    } catch (error) {
      console.log(`没找到 ${this.provinceName} 图片`);
    }
  }
}
</script>

<style scoped>

</style>