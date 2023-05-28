<template>
  <div class="scrollable-content">
    <el-col class="chart">
      <el-row style="height: 15%">
        <el-card class="item">
          <h2 style="color: white;font-size: 30px">这个是大标题</h2>
        </el-card>
      </el-row>

      <el-row style="height: 85%;margin-top: 1%" gutter="20">
        <el-col :span="18">
          <el-card class="item">
            <HangyePaihang style="height: 50vh;margin: 0 auto;"></HangyePaihang>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="item">
            <p style="color: white;font-size: 20px">这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，
              这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，
              这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，
              这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，
              这里是介绍文案，这里是介绍文案，这里是介绍文案，这里是介绍文案，</p>
          </el-card>
        </el-col>
      </el-row>
    </el-col>

    <el-col class="chart">
      <el-row style="height: 15%">
        <el-card class="item"></el-card>
      </el-row>

      <el-row style="height: 85%">
        <el-col :span="18">
          <el-card class="item"></el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="item"></el-card>
        </el-col>
      </el-row>
    </el-col>

    <el-col class="chart">
      <el-row style="height: 15%">
        <el-card class="item"></el-card>
      </el-row>

      <el-row style="height: 85%">
        <el-col :span="18">
          <el-card class="item"></el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="item"></el-card>
        </el-col>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import HangyePaihang from "@/components/charts/Ana/HangyePaihang.vue";

export default {
  name: "report_1",
  components: {HangyePaihang}
}
</script>

<style scoped>

.scrollable-content {
  opacity: 0.8;
  height: 85vh;
  width: 100%;
  overflow-y: auto; /* 设置容器的垂直滚动 */
}
/* 隐藏水平和垂直拖拽条 */
::-webkit-scrollbar {
  display: none;
}
.chart{
  height: 70%;
  margin-bottom: 5%;
}
.item{
  background-color: rgba(255, 255, 255, 0.1);
  width:100%;height: 100%;
  border-radius: 10px;
  border-width: 4px;
}
</style>