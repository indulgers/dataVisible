<template>
  <div style="height: 100vh;width: 100vw" id="xueli"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "XueLi",
  mounted() {
    var chartDom = document.getElementById('xueli');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          return params[0].name + ': ' + params[0].value;
        }
      },
      xAxis: {
        data: ['普本本科', '双一流本科', '普本硕士', '双一流硕士'],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: '#e54035'
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }
      },
      color: ['#e54035'],
      series: [
        {
          name: 'hill',
          type: 'pictorialBar',
          barCategoryGap: '-130%',
          // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
          itemStyle: {
            opacity: 0.5
          },
          emphasis: {
            itemStyle: {
              opacity: 1
            }
          },
          data: [46.6, 54.3, 50.5, 65.9],
          z: 10
        },
        {
          name: 'glyph',
          type: 'pictorialBar',
          barGap: '-100%',
          symbolPosition: 'end',
          symbolSize: 50,
          symbolOffset: [0, '-120%'],
          label: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            color:'#e54035'
          },
          data: [
            {
              value: 46.4,
              // symbol: pathSymbols.reindeer,
              // symbolSize: [60, 60]
            },
            {
              value: 54.3,
              // symbol: pathSymbols.rocket,
              // symbolSize: [50, 60]
            },
            {
              value: 50.5,
              // symbol: pathSymbols.plane,
              // symbolSize: [65, 35]
            },
            {
              value: 65.9,
              // symbol: pathSymbols.train,
              // symbolSize: [50, 30]
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }
}
</script>

<style scoped>

</style>
