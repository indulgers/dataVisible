<!--省数据详情-->
<template>
  <el-col style="height: 100%">
    <el-row :gutter="20" style="height: 60%">
      <el-col :span="8" style="height: 100%">
        <el-row style="width:100%;height:100%">
          <el-card class="item">
            <ShengNianLing :province-name="provinceName" style="height: 40vh"></ShengNianLing>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="8" style="height: 100%">
        <el-card class="main-item">
          <InfoSheng :province-name="provinceName"></InfoSheng>
        </el-card>
      </el-col>
      <el-col :span="8" style="height: 100%">
        <el-row style="width:100%;height: 60%">
          <el-card class="item">
            <PaiHang :province-name="provinceName" style="height: 30vh"></PaiHang>
          </el-card>
        </el-row>
        <el-row style="padding-top: 15px; width:100%;height: 40%">
          <el-card class="item">
            <ShengShiye :province-name="provinceName" style="height: 15vh"></ShengShiye>
          </el-card>
        </el-row>
      </el-col>
    </el-row>

    <el-row style="height: 40%;margin-top: 15px" :gutter="20">
      <el-col :span="8">
        <el-card class="item">
          <AverageSalary v-if="show1" :province-name="provinceName" style="height: 28vh"></AverageSalary>
        </el-card>
      </el-col>
      <el-col :span="16" style="height: 100%">
        <el-card class="item" style="height: 100%">
          <ThreeChan v-if="show1" :province-name="provinceName" style="height: 28vh"></ThreeChan>
        </el-card>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>

import ThreeChan from "@/components/charts/Sheng/ThreeChan.vue";
import AverageSalary from "@/components/charts/Sheng/AverageSalary.vue"
import ShengShiye from "@/components/charts/Sheng/ShiYe.vue";
import ShengNianLing from "@/components/charts/Sheng/age_sheng.vue";
import InfoSheng from "@/components/charts/Sheng/InfoSheng.vue";
import PaiHang from "@/components/charts/Sheng/PaiHang.vue";
export default {
  components:{
    PaiHang,
    // InfoSheng,
    ShengNianLing,
    ShengShiye,
    ThreeChan,
    AverageSalary,
    InfoSheng,
  },
  name: "DataView",
  props: {
    provinceName: String
  },
  data(){
    return{
      show1:false,
    }
  },
  mounted() {
    console.log("尝试获取"+this.provinceName+"数据")
    this.show1=true;
  }
}
</script>

<style scoped>
.item {
  background-color: rgba(255, 255, 255, 0.1);
  width:100%;height: 100%;
  border-radius: 20px; /* 将四个角落变为圆角 */
}
.item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px #FFFFFF00;
  background-color: rgba(255, 255, 255, 0.2);
}

.el-card {
  border: none;
}

.main-item {
  color: rgba(236, 200, 152, 1);
  background-color: rgba(10, 10, 10, 0.4);
  width: 100%;
  height: 100%;
  border-width: 0;
  border-color: rgba(236, 200, 152, 0.5);
  border-radius: 5px;
  z-index: 10;
}
</style>