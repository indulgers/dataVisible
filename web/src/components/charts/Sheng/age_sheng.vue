<template>
  <div style="width: 100%;height: 100%">
    <div style="color: #ecc898;font-size: 20px;width: 100%;height: 5%">
      {{ provinceName }}男女性就业各年龄段人数情况
    </div>
    <div v-if="!nothing" style="width: 100%;height: 100%;padding-top: 5%" ref="ageChart"></div>
    <el-empty v-if="nothing" description="暂无数据" style="opacity: 0.7"></el-empty>
  </div>

</template>

<script>
import * as echarts from 'echarts';
import NianLing from '@/components/charts/database/NianLing.json'
export default {
  props: {
    provinceName: String
  },
  name:"ShengNianLing",
  data(){
    return{
      men:[],
      women:[],
      nothing:false,
    }
  },
  mounted() {
    this.getData(this.provinceName);
    this.initChart();
  },
  methods:{
    initChart(){
      const chartDom = this.$refs.ageChart;
      const myChart = echarts.init(chartDom);
      let option = {
        angleAxis: {},
        radiusAxis: {
          type: 'category',
          data: ['16~19', '20~24', '25~29', '30~34','35~49','50~54','55~59','60~64','65~69','70~74','75及以上'],
          z: 10,
          axisLabel: {
            show: true,
            interval: 0
          }
        },
        grid: {},
        textStyle: {
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          color: '#d7d7d7',
        },
        polar: {
          radius: '70%' // Set the radius of the polar chart to 80%
        },
        series: [
          {
            type: 'bar',
            data: this.men,
            coordinateSystem: 'polar',
            name: '男性',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              color: '#ecc898' // Set the bar color for the "女性" series to pink
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
            },
            itemStyle:{
              color:'rgba(236,236,236,0.55)'
            }
          }
        ],
        legend: {
          show: true,
          data: ['男性', '女性'],
          top: 0, // Set the distance from the top edge of the chart
          textStyle: {
            color: '(236, 200, 152, 1)' // Change the text color of the legend
          }
        }
      };
      option && myChart.setOption(option);
    },
    getData(name){
      let Men=NianLing["男"];
      let Women=NianLing["女"];
      let cnt=0;
      for (let i in Men) {
        if (Men[i]["name"] === name) {
          for (let key in Men[i]) {
            if (key === "name") continue;
            this.men.push(parseFloat(Men[i][key]))
          }
          cnt++;
          break;
        }
      }
      for (let i in Women) {
        if (Women[i]["name"] === name) {
          for (let key in Men[i]) {
            if (key === "name") continue;
            this.women.push(parseFloat(Women[i][key]))
          }
          cnt++;
          break;
        }
      }
      console.log(this.men);
      console.log(this.women);
      return cnt === 2;
    }
  }
};
</script>
