<template>
  <div v-if="true" style="width: 100vw;height: 100vh">
    <HangyePaihang></HangyePaihang>
  </div>

</template>

<script>
import * as echarts from 'echarts';
import HangyePaihang from "@/components/charts/Ana/HangyePaihang.vue";

export default {
  components: {HangyePaihang},
  data(){
    return{
      men:null,
      women:null,
    }
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods:{
    initChart(){
      const chartDom = this.$refs.ageChart;
      const myChart = echarts.init(chartDom);
      let option = {
        angleAxis: {

        },
        radiusAxis: {
          type: 'category',
          data: ['16~19', '20~24', '25~29', '30~34','35~49','50~54','55~59','60~64','65~69','70~74','75及以上'],
          z: 10
        },
        polar: {},
        series: [
          {
            type: 'bar',
            data: this.men,
            coordinateSystem: 'polar',
            name: '男性',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: this.women,
            coordinateSystem: 'polar',
            name: '女性',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          }
        ],
        legend: {
          show: true,
          data: ['男性', '女性']
        }
      };
      option && myChart.setOption(option);
    },
    getData(){

    }
  }
};
</script>
