<template>
  <div id="gowhere" style="width: 100vw;height: 100vh"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "GoWhere",
  mounted() {
    var chartDom = document.getElementById('gowhere');
    var myChart = echarts.init(chartDom);
    var option;

    var datas = [
      ////////////////////////////////////////
      [
        { name: '单位就业', value: 50.4 },
        { name: '慢就业（暂无具体打算）', value: 15.9 },
        { name: '自由职业', value: 18.6 },
        { name: '国内继续学习', value: 9.3 },
        { name: '其他', value: 2.6 },
        { name: '创业', value: 1.9 },
        { name: '出国继续学习', value: 1.3}
      ],
      // ////////////////////////////////////////
      [
        { name: '单位就业', value: 57.6 },
        { name: '慢就业（暂无具体打算）', value: 18.9 },
        { name: '自由职业', value: 13.2 },
        { name: '国内继续学习', value: 4.9 },
        { name: '其他', value: 4.1 },
        { name: '创业', value: 0.7 },
        { name: '出国继续学习', value: 0.7}
      ]
    ];
    option = {
      title: {
        text: '阅读书籍分布',
        left: 'center',
        textStyle: {
          color: '#999',
          fontWeight: 'normal',
          fontSize: 14
        }
      },
      series: datas.map(function (data, idx) {
        var left = idx * 50;
        return {
          type: 'pie',
          radius: [20, 60],
          left: left + '%',
          width: '33.33%',
          top: 'center',
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c} %}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            }
          },
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80
          },
          labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart.getWidth() / 2;
            const points = params.labelLinePoints;
            // Update the end point.
            points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
            return {
              labelLinePoints: points
            };
          },
          data: data
        };
      })
    };

    option && myChart.setOption(option);
  }
}
</script>

<style scoped>

</style>
