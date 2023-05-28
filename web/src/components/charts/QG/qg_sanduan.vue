<template>

  <div style="width: 100%">
    <highcharts :options="chartOptions1"></highcharts>
  </div>

</template>
<script>
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import Highcharts3d from 'highcharts/highcharts-3d'

Highcharts3d(Highcharts)

export default {
  name: 'QgSanduan',
  components: {
    'highcharts': Chart
  },
  data() {
    return {
      chartOptions1: {
        credits: {
          enabled: false
        },
        exporting: {enabled: false},
        chart: {
          type: 'pie',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          backgroundColor: null,

          options3d: {
            enabled: true,
            // 延y轴向内的倾斜角度
            alpha: 75,
            // 外旋转角度
            beta: 0
          }
        },
        title: {
          text: null
        },
        tooltip: {
          // 数据提示框的背景颜色
          backgroundColor: 'rgba(0,0,0,0.31)',
          // 边框颜色
          // borderColor:'rgba(206,94,74,.9)',
          style: {
            fontSize: 24,
            color: '#16D8E9'
          },
          useHTML: true, // 是否使用HTML编辑提示信息
          formatter: function () {
            // console.log(this) // 控制台输出可以看到有很多属性
            if (this.point.name === '农民工') {
              return '<span style="color:#ecc898; font-size: 20px">' + this.series.name + '</span>' + '<br>' + '<span style="color:#E9F4FF; font-size: 16px">' + this.point.name + ' : ' + '</span>' + '<span style="color:#ecc898; font-size: 24px; font-weight: bold">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>';
            } else if (this.point.name === '新形态就业者') {
              return '<span style="color:#ecc898; font-size: 20px">' + this.series.name + '</span>' + '<br>' + '<span style="color:#E9F4FF; font-size: 16px">' + this.point.name + ' : ' + '</span>' + '<span style="color:rgb(173,120,81); font-size: 24px; font-weight: bold">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>';
            } else if (this.point.name === '其他') {
              return '<span style="color:#ecc898; font-size: 20px">' + this.series.name + '</span>' + '<br>' + '<span style="color:#E9F4FF; font-size: 16px">' + this.point.name + ' : ' + '</span>' + '<span style="color:rgba(196,190,189,0.69); font-size: 24px; font-weight: bold">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>';
            }
          },
          valueDecimals: 2 // 数据值保留小数位数
        },
        legend: {
          itemStyle: {
            fontSize: 18,
            color: '#ecc898',
            fontFamily: 'MicrosoftYaHei',
            fontWeight: 400
          }
        },
        plotOptions: {
          pie: {
            // 每个扇块能否选中
            allowPointSelect: false,
            // 鼠标指针
            cursor: 'pointer',
            // 饼图的厚度
            depth: 35,
            // 空心
            innerSize: '50%',
            textShadow: false,
            shadow: false,
            // 提示信息
            dataLabels: {
              // 是否显示饼图的线形tip
              enabled: true,
              // 设置引导线的长度
              distance: 25,
              style: {
                color: '#E9F4FF',
                fontSize: 14,
                fontWeight: 'bold'
              },
              formatter: function () { // 设置字体与引导线和饼图颜色一致
                if (this.point.name === '农民工') {
                  return '<span style="color:#ecc898; font-size: 20px">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>';
                  // return '<span style="color:#26C4FF; font-size: 24px">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>' + '<br>' + '<span style="color:#E9F4FF; font-size: 16px">' + this.point.name + '</span>';
                } else if (this.point.name === '新形态就业者') {
                  return '<span style="color:rgb(173,120,81); font-size: 20px">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>';
                } else if (this.point.name === '其他') {
                  return '<span style="color:rgba(196,190,189,0.69); font-size: 20px">' + Highcharts.numberFormat(this.percentage, 2) + '%' + '</span>';
                }
              }
            },
            states: {
              inactive: {
                opacity: 0.7,
                size: '120%'
              },
              hover: {
                halo: {
                  size: '120%',
                  attributes: {
                    fill: Highcharts.getOptions().colors[2],
                    'stroke-width': 2,
                    stroke: Highcharts.getOptions().colors[1]
                  }
                }
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: '全国职工队伍基本情况',
          size: '65%',
          startAngle: 220, // 调整饼图的角度   方向：顺时针
          showInLegend: true, // 是否打开图例
          colorByPoint: true,
          data: [
            {
              name: '农民工',
              y: 72.89,
              h: 50, // 高度
              sliced: true, // 修改为true
              selected: false // 是否一直不透明
            },
            {
              name: '新形态就业者', // 修改为“新形态就业者”
              y: 20.90,
              h: 10, // 高度
              sliced: true, // 修改为true
              selected: false // 是否一直不透明
            },
            {
              name: '其他',
              y: 6.21,
              h: 5, // 高度
              sliced: true, // 修改为true
              selected: false // 是否一直不透明
            }
          ]
        }]

      }
    }
  },
  created() {
    // 设置颜色渐变
    this.setcolor()
    // 设置饼图高度
    this.setOptonHeight()
  },
  mounted() {

  },
  methods: {
    setcolor() {
      // 颜色的填充
      let color1 = ['#ecc898', 'rgb(173,120,81)', 'rgba(255,255,255,0.38)']
      let color2 = ['rgba(236,200,152,0.51)', 'rgba(173,120,81,0.45)', 'rgba(194,194,194,0.22)']
      Highcharts.getOptions().colors = Highcharts.map(
          Highcharts.getOptions().colors,
          function (color, index) {
            return {
              radialGradient: {cx: 0.5, cy: 0.3, r: 0.7},
              // radialGradient: { cx: 1, cy: 1, r: 1 },
              stops: [
                [0, color1[index]],
                [1, color2[index]] // darken
              ]
            }
          }
      )
    },
    setOptonHeight() {
      var each = Highcharts.each,
          round = Math.round,
          cos = Math.cos,
          sin = Math.sin,
          deg2rad = Math.deg2rad
      Highcharts.wrap(
          Highcharts.seriesTypes.pie.prototype,
          'translate',
          function (proceed) {
            proceed.apply(this, [].slice.call(arguments, 1))
            // Do not do this if the chart is not 3D
            if (!this.chart.is3d()) {
              return
            }
            var series = this,
                chart = series.chart,
                options = chart.options,
                seriesOptions = series.options,
                depth = seriesOptions.depth || 0,
                options3d = options.chart.options3d,
                alpha = options3d.alpha,
                beta = options3d.beta,
                z = seriesOptions.stacking
                    ? (seriesOptions.stack || 0) * depth
                    : series._i * depth
            z += depth / 2
            if (seriesOptions.grouping !== false) {
              z = 0
            }
            each(series.data, function (point) {
              var shapeArgs = point.shapeArgs,
                  angle
              point.shapeType = 'arc3d'
              var ran = point.options.h
              shapeArgs.z = z
              shapeArgs.depth = depth * 0.75 + ran
              shapeArgs.alpha = alpha
              shapeArgs.beta = beta
              shapeArgs.center = series.center
              shapeArgs.ran = ran
              angle = (shapeArgs.end + shapeArgs.start) / 2
              point.slicedTranslation = {
                translateX: round(
                    cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
                ),
                translateY: round(
                    sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
                )
              }
            })
          }
      )
      ;(function (H) {
        H.wrap(Highcharts.SVGRenderer.prototype, 'arc3dPath', function (
            proceed
        ) {
          // Run original proceed method
          var ret = proceed.apply(this, [].slice.call(arguments, 1))
          ret.zTop = (ret.zOut + 0.5) / 100
          return ret
        })
      })(Highcharts)
    }
  }
}
</script>
