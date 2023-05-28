<template>
  <div class="echartsMapAllDemo">
    <div id="myEcharts" ref="myEcharts" style="width:100%;height:100%"></div>
  </div>
</template>
<script>
import chinaJson from "@/assets/china.json";
import * as echarts from 'echarts'

export default {
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    this.chinaEcharts();
  },
  methods: {
    chinaEcharts() {
      echarts.registerMap("china", chinaJson);
      this.myChart = echarts.init(this.$refs.myEcharts);
      let data = [
        {name: "北京", value: 177},
        {name: "天津", value: 42},
        {name: "河北", value: 102},
        {name: "山西", value: 81},
        {name: "内蒙古", value: 47},
        {name: "辽宁", value: 67},
        {name: "吉林", value: 82},
        {name: "黑龙江", value: 66},
        {name: "上海", value: 24},
        {name: "江苏", value: 92},
        {name: "浙江", value: 114},
        {name: "安徽", value: 109},
        {name: "福建", value: 116},
        {name: "江西", value: 91},
        {name: "山东", value: 119},
        {name: "河南", value: 137},
        {name: "湖北", value: 116},
        {name: "湖南", value: 114},
        {name: "重庆", value: 91},
        {name: "四川", value: 125},
        {name: "贵州", value: 62},
        {name: "云南", value: 83},
        {name: "西藏", value: 9},
        {name: "陕西", value: 80},
        {name: "甘肃", value: 56},
        {name: "青海", value: 10},
        {name: "宁夏", value: 18},
        {name: "新疆", value: 67},
        {name: "广东", value: 123},
        {name: "广西", value: 59},
        {name: "海南", value: 14},
        {name:"台湾",value:14},
        {name:"南海诸岛",value:14},
        {name: "香港", value: 14},
        {name: "澳门", value: 14}
      ];
      let option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "item",
          // formatter: "{b}<br/>{c}",

          formatter: "{b}<br/>点击可查看该省数据情况",
          backgroundColor: "rgba(0,0,0,0.7)",
          textStyle: {
            color: "#ecc898"
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          text: ['High', 'Low'],
          calculable: true,
          seriesIndex: [0],
          inRange: {
            color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"]
          }
        },
        series: [{
          type: "map",
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.8,
          showLegendSymbol: false,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "#d9d9d9"
              }
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            }
          },
          roam: true,
          animation: false,
          data: data,
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#ecc898',
            },
            emphasis: {
              areaColor: 'rgba(236,200,152,0.51)',
              borderWidth: 2,
              borderColor: '#ecc898',
            }
          },
          selectedMode : false,
        }]
      };
      this.myChart.setOption(option);

      this.myChart.on("click", params => {
        this.$emit('map-clicked', params.name);
      });
    }
  }
};
</script>
<style>
.echartsMapAllDemo {
}

</style>