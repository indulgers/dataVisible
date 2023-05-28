<template>
  <div id="test_app">
    <!--echarts的容器-->
    <div id="qg_shiye" style="width: 100%;height: 100%;background: rgba(0,0,0,0)"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'qg_shiye',
  data() {
    return {
      charts: '',
      opinionData: [6.0, 5.9, 5.7, 5.7, 5.6, 5.4, 5.3, 5.2, 5.2, 5.4, 5.5, 5.3, 5.1, 5.0, 5.0, 5.1, 5.1, 4.9, 4.9, 5.0, 5.1, 5.3, 5.5, 5.8, 6.1, 5.9, 5.5, 5.4, 5.3, 5.5, 5.5, 5.7, 5.5, 5.5, 5.6],//数据
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
          align: 'right',//文字在前图标在后
          left: '3%',
          top: '15%',
          data: ['变化率']
        },
        grid: {
          top: '30%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true //保证刻度线和标签对齐
          },
          data: ["2020年4月", "2020年5月", "2020年6月", "2020年7月", "2020年8月", "2020年9月", "2020年10月", "2020年11月", "2020年12月", "2021年1月", "2021年2月", "2021年3月", "2021年4月", "2021年5月", "2021年6月", "2021年7月", "2021年8月", "2021年9月", "2021年10月", "2021年11月", "2021年12月", "2022年1月", "2022年2月", "2022年3月", "2022年4月", "2022年5月", "2022年6月", "2022年7月", "2022年8月", "2022年9月", "2022年10月", "2022年11月", "2022年12月", "2023年1月", "2023年2月"] //x坐标的名称

        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          splitNumber: 4, //纵坐标数
          interval: 0.5, //强制设置坐标轴分割间隔
          min: 4.5, //y轴最小值
          max: 6.5, //y轴最大值
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
            color: {
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
    }
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.drawLine()
    })
  }
}
</script>

<style scoped>

</style>
