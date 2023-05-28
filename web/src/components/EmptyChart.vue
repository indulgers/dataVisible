<template>
  <div style="width: 100%;height: 100%">
    <div>空图</div>
    <div id="chart" ref="chart" style="width: 100%;height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "EmptyChart",
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
    this.getData();
    this.initChart();
  }
}
</script>

<style scoped>

</style>