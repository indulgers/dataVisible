<template>
  <div style="width: 100%;height: 100%">
    <div id="chart" v-show="!chartShow" ref="chart" style="width: 100%;height: 100%" @click="zxyfanggepi"></div>
    <el-carousel v-show="chartShow" :interval="4000" type="card" height="50vh" style="width:75%;top: 25%;margin: 0 auto">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "TitleComponent",
  data() {
    return {
      source: null,
      myChart: null,
      chartShow:false,
    }
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.chart);
      let option = {
        graphic: {
          elements: [
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: '数据职业视野',
                fontSize: 120,
                fontWeight: 'bold',
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: 'transparent',
                stroke: 'rgb(236,192,131)',
                lineWidth: 4
              },
              keyframeAnimation: {
                duration: 3000,
                loop: false,
                keyframes: [
                  {
                    percent: 0.7,
                    style: {
                      fill: 'transparent',
                      lineDashOffset: 200,
                      lineDash: [200, 0]
                    }
                  },
                  {
                    percent: 0.8,
                    style: {
                      fill: 'transparent'
                    }
                  },
                  {
                    percent: 1,
                    style: {
                      fill: 'black'
                    }
                  }
                ]
              }
            }
          ]
        }
      };
      this.myChart.setOption(option);
    },
    getData() {

    },
    zxyfanggepi(){
      this.chartShow=true;
    }
  },
  mounted() {
    this.getData();
    this.initChart();
  },
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>