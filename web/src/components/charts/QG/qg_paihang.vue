<template>
  <div style="width: 100%;height: 100%">
    <div>
      <el-select v-show="false" v-model="targetYear" placeholder="请选择年份" @change="getData">
        <el-option
            v-for="item in yearOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div id="chart" ref="chart" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import GonziPaihang from "@/components/charts/database/GongziPaihang.json";

export default {
  name: "EmptyChart",
  data() {
    return {
      source: null,
      myChart: null,
      targetYear: "2021",

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
      for (let i in GonziPaihang) {
        if (GonziPaihang[i]["时间"] === this.targetYear) {
          for (let key in GonziPaihang[i]) {
            console.log(key + ":" + GonziPaihang[i]);
            if (key === "时间") continue;
            tempSource.push([
              key.replace("职工平均工资(元)", ""),
              GonziPaihang[i][key],
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