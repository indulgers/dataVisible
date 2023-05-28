<template>
  <div id="bubbleChart" style="height: 500px;width: 100%;"></div>
</template>

<script setup>
import { onMounted } from "vue";

import * as echarts from "echarts";

onMounted(() => {
// 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector("#bubbleChart"));

  let demoDataList = [
    {
      label: "农林牧渔业",
      value: 13496012,
    },
    {
      label: "制造业",
      value: 11853428,
    },
    {
      label: "批发和零售业",
      value: 9262396,
    },
    {
      label: "建筑业",
      value: 7400010,
    },
    {
      label: "运输业",
      value: 3277208,
    },
    {
      label: "住宿餐饮业",
      value: 3217357,
    },
  ];

// 绘制图表
  myChart.setOption(getOption(demoDataList));
});

function getOption(dataList) {
// 先找出数组的最大值，这样可以知道每个元素与最大元素的比例，方便调整尺寸的大小
  let maxValue = 1; // 防止数据全都为 0，后面会除以  maxValue，为 0 会出错
  let valueList = dataList.map((item) => item.value);
  maxValue = Math.max(maxValue, ...valueList);

// 设定尺寸的大小
  let minSymbolSize = 90; // 最小尺寸 防止太小的情况，看情况调整
  let symbolSize = 170; // 大小
  let repulsion = symbolSize * 2; // 斥力 为了防止重叠，斥力最好大于 symbolSize

// 可以根据数据的多少，动态调整 symbolSize 的大小
  let valueListLen = valueList.length;
  if (valueListLen < 3) {
    symbolSize = 120;
  } else if (valueListLen < 5) {
    symbolSize = 100;
  }

  repulsion = symbolSize * 2;

// 获取要渲染的数据
  let data = dataList.map((item) => {
// 根据比例与最小尺寸，算出每个元素的大小
    let size = Math.max(symbolSize * (item.value / maxValue), minSymbolSize);

    return {
      name: item.label,
      value: item.value,
      symbolSize: size,
    };
  });

  return {
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        data,
        type: "graph", // 关系图
        layout: "force", // 采用力引导布局
        force: {
// 力引导布局相关的配置项
          repulsion, // 值越大则斥力越大 每个元素间隔越大
        },
// 高亮状态的图形样式
        emphasis: {
          scale: 1.5,
        },
// 设置 label
        label: {
          show: true,
          position: "inside",
          formatter: ['{title|{b}}', '{num|{c}}'].join("\n"),
          rich: {
            title: {
              align: "center",
              fontSize: 13,
              lineHeight: 18,
              color: "#FFF",
            },
            num: {
              align: "center",
              fontSize: "15",
              lineHeight: 21,
              fontWeight: 500,
              color: "#FFF",
            },
          },
        },
// 设置元素的样式
        itemStyle: {
          borderWidth: 1,
          color: function(params) {
            let colorList = [
              "rgba(236, 200, 152, 0.8)", "rgb(196,143,74, 0.8)", "rgb(238,136,1, 0.8)",
              "rgb(107,86,58, 0.8)","rgb(180,164,143, 0.8)", "rgb(162,112,45, 0.8)",
            ];
            return colorList[params.dataIndex];
          }
        },
      },
    ],
  };
}

</script>

<style scoped>
.bubble-chart {
  height: 100%;
  width: 100%;
}
</style>
