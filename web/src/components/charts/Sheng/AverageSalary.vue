<template>
  <div>
    <div style="color: #ecc898;font-size: 20px;width: 100%;height: 5%">
      {{ provinceName }}在岗职工平均工资变化情况
    </div>
    <div v-if="!nothing" id="chart" ref="chart" style="width: 100%;height: 100%;"></div>
    <el-empty v-if="nothing" description="暂无数据" style="opacity: 0.7;height: 100%"></el-empty>
  </div>

</template>

<script>
import * as echarts from 'echarts';//导入echarts
import AverageSalary from '@/components/charts/database/AverageSalary.json'//json格式数据

export default {
  props: {
    provinceName: String
  },
  name: "AverageSalary",
  data() {
    return {
      source: null,
      chart: null,
      nothing:false,
    }
  },
  methods: {
    //绘图
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      var filteredData = this.source.filter(function (item) {
        return item[0] !== null; // 过滤掉第一列数据为 null 的项
      });
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          left: 80
        },
        textStyle: {
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          color: '#d7d7d7',
        },

        xAxis: [
          {
            type: 'category',
            data: ['', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            axisLabel: {
              interval: 0,
            },

          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '平均工资',
            max: 200000,
            min: 0,
            show: true,
            axisLabel: {
              formatter: '{value}元 '
            },
          },
          {
            type: 'value',
            name: '增长率',
            min: 0,
            max:20,
            axisLabel: {
              formatter: '{value} %'
            },
          }
        ],

        series: [
          {
            name: '平均工资',
            type: 'bar',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: 'rgb(236,200,153)'},
                {offset: 0.5, color: 'rgba(236,200,153,0.24)'},
                {offset: 1, color: 'rgb(236,200,153)'}
              ])
            },

            tooltip: {
              valueFormatter: function (value) {
                return value + '元';
              }
            },
            data: filteredData[1],

          },
          {
            name: '增长率',
            type: 'line',
            yAxisIndex: 1,
            color:'white',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %';
              }
            },
            data: filteredData[2]
          }
        ],
      };


      this.chart.setOption(option);

    },
    getData(name) {
      let sourceList = AverageSalary.source;
      for (let i in sourceList) {
        if (sourceList[i]["name"] === name && sourceList[i]["data"] != null) {

          this.source = sourceList[i]["data"];
          return true;
        }
      }
      for (let i in this.source) {
        if (this.source[i] != null) {
          this.source[i] = sourceList[i]["data"];
        } else {
          1 + 1;
        }
      }

      // console.log(this.source)
      return false;
    }
  },

  mounted() {
    if (this.getData(this.provinceName)) {
      this.initChart();//如果成功拿到数据就开始绘图
    } else {
      this.nothing = true;
    }
  },
}
</script>

<style scoped>

</style>