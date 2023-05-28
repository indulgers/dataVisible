<template>
  <div style="width: 100%;height: 100%;">
    <div id="chart" ref="chart" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "HangyePaihang",
  data() {
    return {
      source: null,
      myChart: null,
    }
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.chart);
      let option=null;
      this.myChart.setOption(option);
    },
    getData() {

    }
  },
  mounted() {

    var app = {};

    var chartDom = document.getElementById('chart');
    var myChart = echarts.init(chartDom);
    var option;

    const posList = [
      'left',
      'right',
      'top',
      'bottom',
      'inside',
      'insideTop',
      'insideLeft',
      'insideRight',
      'insideBottom',
      'insideTopLeft',
      'insideTopRight',
      'insideBottomLeft',
      'insideBottomRight'
    ];
    app.configParameters = {
      rotate: {
        min: -90,
        max: 90
      },
      align: {
        options: {
          left: 'left',
          center: 'center',
          right: 'right'
        }
      },
      verticalAlign: {
        options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom'
        }
      },
      position: {
        options: posList.reduce(function (map, pos) {
          map[pos] = pos;
          return map;
        }, {})
      },
      distance: {
        min: 0,
        max: 100
      }
    };
    app.config = {
      rotate: 90,
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
      onChange: function () {
        const labelOption = {
          rotate: app.config.rotate,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          position: app.config.position,
          distance: app.config.distance
        };
        myChart.setOption({
          series: [
            {
              label: labelOption
            },
            {
              label: labelOption
            },
            {
              label: labelOption
            },
            {
              label: labelOption
            }
          ]
        });
      }
    };
    const labelOption = {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {}
      }
    };
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2022届', '2023届'],
        textStyle:{
          color:"#ffffff"
        },
      },
      textStyle:{
        color:"#ffffff"
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['IT/通信/电子/互联网', '文化/传媒/娱乐/体育', '汽车/生产/加工/制造', '政府/非盈利机构', '生活服务','金融业','商业服务','贸易/批发/零售/快消','能源/矿产/环保','文体教育/工艺美术','房地产/建筑业','交通/运输/物流/仓储','农林牧渔']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}%',
            textStyle:{
              color:"#ffffff"
            },
          }
        }
      ],
      series: [
        {
          name: '2022届',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series',

          },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: '#ecc898'},
            {offset: 1, color: 'rgba(122,84,39,0.06)'}
          ]),
          data: [24.1, 10.0, 6.1, 5.6,6.3,6.8,7.0,5.1,4.1,7.9,8.8,2.8,1.4]
        },
        {
          name: '2023届',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: '#ccc'},
            {offset: 1, color: 'rgba(180,180,180,0.06)'}
          ]),
          data: [25.0,8.8,8.1,7.8,7.0,7.0,6.3,6.0,5.9,5.5,5.2,2.9,1.7]
        }
      ]
    };
    option && myChart.setOption(option);
  }
}
</script>

<style scoped>

</style>