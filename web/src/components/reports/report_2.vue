<template>
  <div class="scrollable-content">
    <el-col class="chart">
      <el-row style="height:20%">
        <p style="margin: auto;color: white;font-size: 50px;">职业大会</p>
      </el-row>

      <el-row style="height: 70%">
        <el-card class="item"></el-card>
      </el-row>
    </el-col>

    <el-row style="height: 40%">
      <el-col :span="19">
        <el-card class="item">
          2020
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="item"></el-card>
      </el-col>
    </el-row>
    <el-row style="height: 40%">
      <el-col :span="19">
        <el-card class="item">
          2021
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="item">

        </el-card>
      </el-col>
    </el-row>
    <el-row style="height: 40%">
      <el-col :span="19">
        <el-card class="item">
          2022
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="item"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Report_2"
}
</script>

<style scoped>

.scrollable-content {
  height: 85vh;
  width: 100%;
  overflow-y: auto; /* 设置容器的垂直滚动 */
}
/* 隐藏水平和垂直拖拽条 */
::-webkit-scrollbar {
  display: none;
}
.chart{
  height: 60%;
  margin-bottom: 3%;
}
.item{
  height: 100%;
  width: 100%;
}
</style>