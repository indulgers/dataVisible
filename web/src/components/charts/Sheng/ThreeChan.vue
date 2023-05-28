<template>
  <div style="width: 100%;height: 100%">
    <div style="color: #ecc898;font-size: 20px;width: 100%;height: 5%">
      {{ provinceName }}三次产业就业人数
    </div>
    <div v-if="!nothing" id="chart" ref="chart" style="width: 100%;height: 100%"></div>
    <el-empty v-if="nothing" description="暂无数据" style="opacity: 0.7"></el-empty>
  </div>

</template>

<script>
import * as echarts from 'echarts';//导入echarts
import ThreeChan from '../database/ThreeChan.json'//json格式数据

export default {
  props: {
    provinceName: String
  },
  name: "ThreeChan",
  data() {
    return {
      source: null,
      chart: null,
      nothing: false,
    }
  },
  methods: {
    //绘图
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      let option = {
        legend: {
          textStyle: {
            color: '#ecc898' // 设置图例文本颜色为黄色
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              color: '#ecc898',
              backgroundColor: 'rgb(77,77,77)'
            }
          }
        },
        textStyle: {
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          color: '#d7d7d7',
        },
        dataset: {
          source: this.source
        },
        xAxis: {type: 'category',},
        yAxis: {
          gridIndex: 0,
          axisLabel: {
            formatter: '{value} 万人'
          }
        },
        grid: [
          {
            left: '5%',
            right: '40%',
            top: '25%',
            bottom: '10%',
            containLabel: true
          },
        ],
        color: ['#ecc898', '#a5c7ee', '#ECECEC'],
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'},
            gridIndex: 0, // 将第一个线图放置在第一个网格中
            color: '#ecc898'
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'},
            gridIndex: 0,
            color: '#a5c7ee'
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'},
            gridIndex: 0,
            color: '#ECECEC'
          },
          {
            type: 'pie',
            id: 'pie',
            itemStyle: {
              opacity: 0.8,
            },
            radius: ['30%', '50%'],
            center: ['80%', '55%'],
            gridIndex: 1,
            emphasis: {
              focus: 'self'
            },
            height: '100%',
            label: {
              formatter: '{b}: \n{@2012} ({d}%)',
              color: '#ecc898',
            },
            encode: {
              itemName: '年份',
              value: '2012',
              tooltip: '2012',
            },
            graphic: [
              {
                type: 'sector',
                shape: {
                  cx: 165,
                  cy: 165,
                  r: 100,
                  r0: 50,
                  startAngle: 90,
                  endAngle: 120
                },
                style: {
                  fill: 'rgba(0, 0, 0, 0.1)',
                  stroke: '#666',
                  lineWidth: 1
                },
                z: 10 // 设置 z 属性，使其在 z 轴上的位置高于默认的饼图
              },
              {
                type: 'text',
                style: {
                  text: '3%',
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  fill: '#fff'
                },
                left: '47%',
                top: '40%',
                z: 11 // 设置 z 属性，使其在 z 轴上的位置高于默认的饼图和扇形图
              }
            ]
          }
        ]
      };

      this.chart.on('updateAxisPointer', event => {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          this.chart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: `{b}: \n {@[${dimension}]} ({d}%)`
              },
              encode: {
                value: dimension,
                tooltip: dimension
              },
              // itemStyle:{
              //   color: function(params) {
              //     const colorList = ['#ecc898', '#a5c7ee', '#3bf1e2'];
              //     return colorList[params.dataIndex % colorList.length];
              //   }
              // }
            }
          });
        }
      });
      this.chart.setOption(option);
    },
    //获取数据
    getData(name) {
      let sourceList = ThreeChan;
      let sourceData = [["年份", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]];
      let cnt = 0;
      for (let i in sourceList) {
        // console.log(sourceList[i]["name"]);
        if (sourceList[i]["name"] === name + ":第一产业就业人员(万人)") {
          let sourceLine = ["第一产业"];
          for (let j = 2012; j <= 2021; j++) {
            sourceLine.push(sourceList[i][j + ""]);
          }
          cnt++;
          sourceData.push(sourceLine);
        }
        if (sourceList[i]["name"] === name + ":第二产业就业人员(万人)") {
          let sourceLine = ["第二产业"];
          for (let j = 2012; j <= 2021; j++) {
            sourceLine.push(sourceList[i][j + ""]);
          }
          cnt++;
          sourceData.push(sourceLine);
        }
        if (sourceList[i]["name"] === name + ":第三产业就业人员(万人)") {
          let sourceLine = ["第三产业"];
          for (let j = 2012; j <= 2021; j++) {
            sourceLine.push(sourceList[i][j + ""]);
          }
          cnt++;
          sourceData.push(sourceLine);
        }
        if (cnt === 3) {
          // console.log(sourceData)
          this.source = sourceData;
          return true;
        }
      }
      return false;
    },

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