<template>
  <el-col style="width: 100%;height: 100%">
    <!--    背景-->
    <div :style="background" class="bgBackground"></div>

    <!--    大地图-->
    <ChinaMap v-if="!visible" class="bgMap" @map-clicked="handleMapClicked"></ChinaMap>

    <!--      <SearchBox class="bgSearch" placeholder="在此输入  快速查找省份" @search="handleSearch"/>-->
    <el-row v-show="visible" style="position: absolute;margin: auto;top: 20px;left: 10px;right: 0;bottom: 0;">
      <el-col :span="1">
        <el-button class="button" @click="handelBack">返回大地图主页</el-button>
      </el-col>
    </el-row>

    <el-row v-if="!visible" style="width: 100%;height: 100%">
      <el-col :span="6" style="height: 100%">
        <el-row style="height: 20%">
          <el-card class="item">
            全国城镇登记失业率走势
            <Qg_shiye style="height: 13vh"></Qg_shiye>
          </el-card>
        </el-row>
        <el-row style="height: 35%;margin-top: 2%">
          <el-card class="item">
            全国职工基本情况
            <QgSanDuan style="height: 15vh;margin-top: -20%"></QgSanDuan>
          </el-card>
        </el-row>
        <el-row style="height: 40%;margin-top: 2%">
          <el-card class="item">
            全国三次产业就业变化情况
            <Qg_sanci style="height: 45vh;width: 100%;margin-top: 10px"></Qg_sanci>
          </el-card>
        </el-row>
      </el-col>

      <el-col :span="13" style="height: 100%">
        <el-row style="height: 15%" gutter="15">
          <el-col :span="7" style="height: 100%">
            <el-card class="item" style="height: 100%;margin-left: 15px">
              123
            </el-card>
          </el-col>
          <el-col :span="7" style="height: 100%;margin-left: 15px">
            <el-card class="item" style="height: 100%">
              321
            </el-card>
          </el-col>
          <el-col :span="7" style="height: 100%;margin-left: 15px">
            <el-card class="item" style="height: 100%">
              456
            </el-card>
          </el-col>
        </el-row>
        <el-row style="height: 62%">

        </el-row>
        <el-row style="height: 20%">
          <el-col :span="7" style="height: 100%">
<!--            <el-card  class="item" style="margin-left: 15px">-->
<!--              456-->
<!--            </el-card>-->
          </el-col>

        </el-row>
        <!--        <div style="padding-top: 100px;opacity: 0.7">-->
        <!--          <el-col :offset="10" class="title">全国宏观大地图</el-col>-->
        <!--        </div>-->
      </el-col>

      <el-col :span="5" style="height: 100%">
        <el-row style="height: 45%">
          <el-card class="item">
            全国各行业平均工资排行
            <PaiXuZhu style="height: 45vh;width: 100%"></PaiXuZhu>
          </el-card>
        </el-row>
        <el-row style="height: 54%;padding-top: 5%">
          <el-card class="item">
            全国就业人数最多的六个行业
            <Qg_yuanjing></Qg_yuanjing>
          </el-card>
        </el-row>
      </el-col>
    </el-row>

    <!--    省数据页-->
    <ProvinceModel v-if="visible" :provinceName=provinceName
                   style="z-index:-1;height: 90vh;padding: 30px"></ProvinceModel>

    <!--    搜索框-->
    <el-row v-if="false">
      <el-row class="search-container">
        <div style="width: 600px">
          <SearchBox placeholder="在此输入  快速查找省份" @search="handleSearch"/>
        </div>
      </el-row>
    </el-row>
  </el-col>
</template>

<script>
import ProvinceModel from "@/components/ProvinceModel.vue";
import SearchBox from "@/components/SearchBox.vue";
import ChinaMap from "@/components/charts/ChinaMap.vue";
import PaiXuZhu from "@/components/charts/QG/qg_paihang.vue"
import Support from "@/components/charts/database/UnSupport.json"
import {ElMessage} from 'element-plus'
import Qg_shiye from "@/components/charts/QG/qg_shiye.vue";
import QgSanDuan from "@/components/charts/QG/qg_sanduan.vue"
import Qg_sanci from "@/components/charts/QG/qg_sanci.vue";
import Qg_yuanjing from "@/components/charts/QG/qg_yuanjing.vue";

export default {
  name: "DataView",
  components: {
    Qg_yuanjing,
    Qg_sanci,
    Qg_shiye,
    ProvinceModel,
    SearchBox,
    ChinaMap,
    QgSanDuan,
    PaiXuZhu,
  },
  data() {
    return {
      provinceName: null,
      visible: false,
      mouseX: 0,
      mouseY: 0,

      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/background/bg6.jpg') + ')',
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
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleSearch(value) {
      console.log("尝试搜索：" + value);
      let supportList = Support;
      let ok = true;
      for (let i in supportList) {
        if (supportList[i] === value) {
          ok = false;
          break;
        }
      }
      if (!ok) {
        ElMessage({
          message: "抱歉，暂时没有关于" + value + "的数据",
          grouping: true,
          type: 'warning',
        })
        return;
      }
      this.provinceName = value;
      this.visible = !this.visible;
      this.background.backgroundImage = 'url(' + require('@/assets/background/bg6.jpg') + ')'
    },
    handelBack() {
      this.visible = false;
      // this.background.backgroundImage='url(' + require('@/assets/background/bg6.jpg') + ')'
    },
    handleMapClicked(name) {
      console.log(`地图被点击: ${name}`);
      this.handleSearch(name);
    },
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100vw;
}

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

.bgMap {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 90%;
  z-index: 1;
}

.item {
  color: rgba(236, 200, 152, 1);
  background-color: rgba(10, 10, 10, 0.4);
  width: 100%;
  height: 100%;
  border-width: 0;
  border-color: rgba(236, 200, 152, 0.5);
  border-radius: 5px;
  z-index: 10;
}

.button {
  color: rgba(236, 200, 152, 1);
  border-color: rgba(236, 200, 152, 1);
  background-color: rgba(236, 200, 152, 0);
  animation: animated-border 1.5s infinite;
}

.button:hover {
  background-color: rgba(236, 200, 152, 0.1);
}

@keyframes animated-border {
  0% {
    box-shadow: 0 0 0 0 rgba(236, 200, 152, 0.8);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}

.title {
  width: 170px;
  color: rgba(236, 200, 152, 1);
  padding: 10px;
  font-size: 20px;

  line-height: 30px;
  font-weight: bold;
  border: 2px solid;
  border-radius: 10px;
}
</style>