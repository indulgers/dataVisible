<template>
  <div id="test_app">
    <div style="color: #ecc898;font-size: 20px;width: 100%;height: 5%">
      {{ provinceName }}近十年失业率
    </div>
    <div v-if="!nothing" id="qg_shiye" style="width: 100%;height: 100%;background: rgba(0,0,0,0)"></div>
    <el-empty v-if="nothing" description="暂无数据" style="opacity: 0.7;height: 190%"></el-empty>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import ShengShiYe from '@/components/charts/database/ShiYeSheng.json'

export default {
  props: {
    provinceName: String
  },
  name: 'ShengShiye',
  data() {
    return {
      charts: '',
      opinionData: [],
      data:[],
      nothing:false,
    }
  },
  methods: {
    drawLine() {
      this.charts = echarts.init(document.getElementById('qg_shiye'))
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          align:'right',//文字在前图标在后
          left:'3%',
          top:'15%',
          data: ['变化率']
        },
        grid: {
          top:'30%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        textStyle: {
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          color: '#d7d7d7',
        },
        xAxis: {
          type: 'category',
          boundaryGap:true,
          axisTick:{
            alignWithLabel:true //保证刻度线和标签对齐
          },
          data: this.data,
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          splitNumber:4, //纵坐标数
          interval:1, //强制设置坐标轴分割间隔
          min: 0, //y轴最小值
          // max: 6.5 //y轴最大值


            axisLabel: {
              formatter: '{value} %'
            }
        },

        series: [{
          name: '近一周',
          type: 'line', //折线图line;柱形图bar;饼图pie
          stack: '总量',
          areaStyle: {
            //显示区域颜色---渐变效果
            color:{
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#f6c276' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255,255,255,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            color: '#ecc898', //改变折线点的颜色
            lineStyle: {
              color: '#ecc898' //改变折线颜色
            }
          },
          data: this.opinionData
        }]
      })
    },
    getData(name){
      for (let i in ShengShiYe) {
        if (ShengShiYe[i]["name"] === name) {
          for (let key in ShengShiYe[i]) {
            if (key === "name") continue;
            this.data.push(key);
            this.opinionData.push(parseFloat(ShengShiYe[i][key]));
          }
          console.log(this.opinionData);
          return true;
        }
      }
      return false;
    }
  },
  //调用
  mounted() {
    if (this.getData(this.provinceName)) {
      this.$nextTick(function() {
        this.drawLine()
      })
    } else {
      this.nothing = true;
    }
  }
}
</script>

<style scoped>

</style>
