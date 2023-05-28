<template>
  <div id="sanci" style="height: 100%;width: 100%;"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "qg_sanci",
  mounted() {
    var chartDom = document.getElementById("sanci");
    var myChart = echarts.init(chartDom);
    var option;

    const colors = ['#ecc898', 'rgb(173,120,81)', '#ECECEC'];

    option = {
      color: colors,
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        right: "30%",
        left: "15%",
        bottom:"40%"
      },
      textStyle:{
        color:"#a1a1a1"
      },
      legend: {
        textStyle:{
          color:"#a1a1a1" // set the color of the legend text to black
        },
        data: ["人数", "受教育年限", "产业产值"],
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          data: [
            "第一产业",
            "第二产业",
            "第三产业",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "人数",
          position: "right",
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[0],
            },
          },
          axisLabel: {
            formatter: "{value} 万人",
          },
        },
        {
          type: "value",
          name: "受教育年限",
          position: "right",
          alignTicks: true,
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1],
            },
          },
          axisLabel: {
            formatter: "{value} 年",
          },
        },
        {
          type: "value",
          name: "产业产值",
          position: "left",
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[2],
            },
          },
          axisLabel: {
            formatter: "{value} 亿元",
          },
        },
      ],
      series: [
        {
          name: "人数",
          type: "bar",
          data: [
            17072.00,
            21712.00,
            35868.00,

          ],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#ecc898' },
                    { offset: 1, color: 'rgba(236,200,152,0.31)' },
                  ]
              )
            }
          }
        },
        {
          name: "受教育年限",
          type: "bar",
          yAxisIndex: 1,
          data: [
            12.5,
            13.0,
            14.5,

          ],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#7b5c3e' },
                    { offset: 1, color: 'rgba(123,92,62,0.34)' },
                  ]
              )
            }
          }
        },
        {
          name: "产业产值",
          type: "bar",
          yAxisIndex: 2,
          data: [88345,483164,638698,],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#c1c1c1' },
                    { offset: 1, color: 'rgba(193,193,193,0.26)' },
                  ]
              )
            }
          }
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style scoped>

</style>