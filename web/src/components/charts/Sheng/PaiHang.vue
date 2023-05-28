<template>
  <div>
    <div style="color: #ecc898;font-size: 20px;width: 100%;height: 5%">
      {{ provinceName }}城镇行业就业人数排行
    </div>
    <div id="chart" ref="chart" style="width: 100%;height: 100%"></div>
    <el-empty v-if="nothing" description="暂无数据" style="opacity: 0.7;height: 100%"></el-empty>
  </div>
</template>

<script>
import * as echarts from "echarts";
import JiuYe from "@/components/charts/database/JiuYeSheng.json";

export default {
  props: {
    provinceName: String
  },
  name: "PaiHang",
  data() {
    return {
      source: null,
      myChart: null,
      nothing:null,

      yearOption: [
        {
          value: "2021",
          label: "2021",
        },
        {
          value: "2020",
          label: "2020",
        },
        {
          value: "2019",
          label: "2019",
        },
        {
          value: "2018",
          label: "2018",
        },
        {
          value: "2017",
          label: "2017",
        },
        {
          value: "2016",
          label: "2016",
        },
      ],
    };
  },
  methods: {
    initChart() {
      if (!this.source) return;
      this.myChart = echarts.init(this.$refs.chart);
      let option = {

        dataset: [
          {
            dimensions: ["name", "score"],
            source: this.source,
          },
          {
            transform: {
              type: "sort",
              config: { dimension: "score", order: "desc" },
            },
          },
        ],
        textStyle: {
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          color: '#d7d7d7',
        },
        grid:{
          left:"15%",   //grid 组件离容器左侧的距离
          right:"0", //grid 组件离容器右侧的距离
          bottom:"40%"  //grid 组件离容器下边距的距离
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: {
          type: "category",
          axisLabel: { interval: 0, rotate: 50 },
        },
        yAxis: {},
        series: {
          type: "bar",
          encode: { x: "name", y: "score" },
          datasetIndex: 1,
          barCategoryGap: "30%", // 增加柱子间距
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: '#ecc898'},
              {offset: 1, color: 'rgba(122,84,39,0.06)'}
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: '#e8aa6a'},
                {offset: 1, color: 'rgba(122,84,39,0)'}
              ])
            }
          },
        },
      };
      this.myChart.setOption(option);
    },
    getData() {
      let tempSource = [];
      for (let i in JiuYe) {
        if (JiuYe[i]["name"] === this.provinceName) {
          for (let key in JiuYe[i]) {
            // console.log(key + ":" + JiuYe[i]);
            if (key === "name") continue;
            tempSource.push([
              key,
              JiuYe[i][key],
            ]);
          }
          break;
        }
      }
      this.source = tempSource;
      this.initChart();
    },
  },
  mounted() {
    this.getData();
  },
  watch: {
    targetYear() {
      console.log("Year changed!");
      this.getData();
    },
  },
};
</script>

<style scoped>

</style>