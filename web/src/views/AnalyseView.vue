<template>
  <el-col v-if="true" style="width: 100%; height: 100%;padding: 40px">
    <!-- 背景 -->
    <div :style="background" class="bgBackground"></div>
    <el-row style="height: 100%;width: 100%;" >
      <el-col :span="2"  style="position: relative;height: 100%;">
        <div v-show="selected>1" @click="selected--;selectTab(selected)" style="margin-left:50%;height:30%;width: 100%;position: absolute;top: 50%;left:50%;transform: translate(-50% , -50%);">
          <div class="clickable">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="88" height="176" viewBox="0 0 88 176"><defs><filter id="master_svg0_1_3" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-20" y="-16" width="87" height="175"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4" dx="0"/><feGaussianBlur stdDeviation="5"/><feColorMatrix type="matrix" values="0 0 0 0 0.9254902005195618 0 0 0 0 0.7843137383460999 0 0 0 0 0.5960784554481506 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><g transform="matrix(-1,0,0,1,135,0)" filter="url(#master_svg0_1_3)"><path d="M68.73102,27.9727C67.089659,25.465040000000002,67.089659,21.11797,68.73102,18.61028C70.47064,15.941011,73.10096,15.786754,74.94644,18.24577L75.19474,18.61028L112.7195,78.60560000000001L112.90379999999999,78.8486C113.03190000000001,79.0106,113.15209999999999,79.18610000000001,113.2642,79.3683C114.8341,81.8659,114.9062,85.7135,113.4925,88.346L113.26820000000001,88.7308L75.33491,149.388C73.50433,152.204,70.70177,152.204,68.87119,149.388C67.320166,147.027,67.219106,142.982,68.64692,140.41L68.87119,140.018L103.8369,84.1137L68.73102,27.9727Z" fill="#ECC898" fill-opacity="1"/><path d="M103.413,84.3788L68.307081,28.2378Q66.999999,26.241039999999998,66.999999,23.2915Q66.999999,20.34196,68.312666,18.33645Q69.7546,16.123957,71.76976,16.005776Q73.80108,15.886648,75.34635,17.94565L75.35323,17.95481L75.61347,18.33686L113.1434,78.3404L112.7195,78.60560000000001L113.118,78.3035L113.3022,78.54650000000001Q113.497,78.7926,113.69,79.1063Q114.93350000000001,81.0846,114.997,83.7949Q115.06,86.4838,113.93299999999999,88.5826L113.9288,88.5903L113.69630000000001,88.9893L75.75883999999999,149.653Q74.23334,152,72.10305,152Q69.97276,152,68.451958,149.66Q67.211643,147.773,67.142147,144.991Q67.072816,142.215,68.209776,140.167L68.442145,139.761L103.413,83.8486L103.8369,84.1137L103.413,84.3788ZM104.4267,84.1137L69.2951,140.284L68.87119,140.018L69.30505,140.267L69.08407,140.65300000000002Q68.079305,142.462,68.141835,144.966Q68.204199,147.462,69.29043,149.115Q70.51548,151,72.10305,151Q73.69062,151,74.91098,149.122L112.8443,88.4657L113.26820000000001,88.7308L112.83619999999999,88.479L113.06049999999999,88.0942L113.4925,88.346L113.05199999999999,88.1095Q114.0541,86.2433,113.9973,83.8183Q113.94030000000001,81.3835,112.8383,79.6303Q112.6762,79.3668,112.5053,79.1506L112.3075,78.8897L74.77083,18.87542L75.19474,18.61028L74.7815,18.89177L74.53321,18.52726L74.94644,18.24577L74.54654,18.5459Q73.32357999999999,16.916369,71.8283,17.004061Q70.31687,17.0927,69.14937,18.8841Q68,20.64013,67.999999,23.2915Q68,25.94287,69.15496,27.7076L104.26089999999999,83.8486L104.4267,84.1137Z" fill="#F0E5D7" fill-opacity="1"/></g></svg>
          </div>
        </div>
      </el-col>
      <el-col :span="20" >
        <el-row style="height: 100%; width: 100%;">
          <el-card v-show="selected === 1" class="tab" >
            <Report_1></Report_1>
          </el-card>
          <el-card v-show="selected === 2" class="tab" >
            <Report_2></Report_2>
          </el-card>
          <el-card v-show="selected === 3" class="tab">
            报告3
          </el-card>
          <el-card v-show="selected === 4" class="tab">
            页面4
          </el-card>
          <el-card v-show="selected === 5" class="tab">
            页面5
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="2"  style="position: relative;height: 100%;">
        <div v-show="selected<3" @click="selected++;selectTab(selected);" style="margin-left:10%;height:30%;width: 100%;position: absolute;top: 50%;left:50%;transform: translate(-50% , -50%);">
          <div class="clickable" style="height: 100%;width: 70%;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="88" height="176" viewBox="0 0 88 176"><defs><filter id="master_svg0_1_3" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-20" y="-16" width="87" height="175"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4" dx="0"/><feGaussianBlur stdDeviation="5"/><feColorMatrix type="matrix" values="0 0 0 0 0.9254902005195618 0 0 0 0 0.7843137383460999 0 0 0 0 0.5960784554481506 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><g filter="url(#master_svg0_1_3)"><path d="M21.73102,27.9727C20.089659,25.465040000000002,20.089659,21.11797,21.73102,18.61028C23.47064,15.941011,26.10096,15.786754,27.94644,18.24577L28.19474,18.61028L65.7195,78.60560000000001L65.90379999999999,78.8486C66.03190000000001,79.0106,66.15209999999999,79.18610000000001,66.2642,79.3683C67.8341,81.8659,67.9062,85.7135,66.4925,88.346L66.26820000000001,88.7308L28.33491,149.388C26.50433,152.204,23.70177,152.204,21.87119,149.388C20.320166,147.027,20.219106,142.982,21.64692,140.41L21.87119,140.018L56.8369,84.1137L21.73102,27.9727Z" fill="#ECC898" fill-opacity="1"/><path d="M56.413,84.3788L21.307081,28.2378Q19.999999,26.241039999999998,19.999999,23.2915Q19.999999,20.34196,21.312666,18.33645Q22.7546,16.123957,24.769759999999998,16.005776Q26.80108,15.886648,28.34635,17.94565L28.35323,17.95481L28.61347,18.33686L66.1434,78.3404L65.7195,78.60560000000001L66.118,78.3035L66.3022,78.54650000000001Q66.497,78.7926,66.69,79.1063Q67.93350000000001,81.0846,67.997,83.7949Q68.06,86.4838,66.93299999999999,88.5826L66.9288,88.5903L66.69630000000001,88.9893L28.75884,149.653Q27.23334,152,25.10305,152Q22.97276,152,21.451958,149.66Q20.211643,147.773,20.142147,144.991Q20.072816,142.215,21.209776,140.167L21.442145,139.761L56.413,83.8486L56.8369,84.1137L56.413,84.3788ZM57.4267,84.1137L22.2951,140.284L21.87119,140.018L22.30505,140.267L22.08407,140.65300000000002Q21.079305,142.462,21.141835,144.966Q21.204199,147.462,22.29043,149.115Q23.51548,151,25.10305,151Q26.69062,151,27.910980000000002,149.122L65.8443,88.4657L66.26820000000001,88.7308L65.83619999999999,88.479L66.06049999999999,88.0942L66.4925,88.346L66.05199999999999,88.1095Q67.0541,86.2433,66.9973,83.8183Q66.94030000000001,81.3835,65.8383,79.6303Q65.6762,79.3668,65.5053,79.1506L65.3075,78.8897L27.77083,18.87542L28.19474,18.61028L27.7815,18.89177L27.53321,18.52726L27.94644,18.24577L27.54654,18.5459Q26.32358,16.916369,24.8283,17.004061Q23.31687,17.0927,22.14937,18.8841Q21,20.64013,20.999999,23.2915Q21,25.94287,22.15496,27.7076L57.2609,83.8486L57.4267,84.1137Z" fill="#F0E5D7" fill-opacity="1"/></g></svg>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
import Report_1 from "@/components/reports/report_1.vue";
import Report_2 from "@/components/reports/report_2.vue";

export default {
  components: {Report_2, Report_1},
  data() {
    return {
      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/background/bg7.jpg') + ')',
        // 背景图片是否重复
        backgroundRepeat: 'no-repeat',
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        backgroundColor: '#000',
        // 背景图片位置
        backgroundPosition: 'center top'
      },
      selected: 1
    };
  },
  methods: {
    selectTab(tab) {
      this.selected = tab;
    }
  }
};
</script>

<style scoped>
.bgBackground {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}

.button {
  font-size: 20px;
  color: rgba(236, 200, 152, 1);
  border-color: rgba(236, 200, 152, 1);
  background-color: rgba(236, 200, 152, 0);
  animation: animated-border 1.5s infinite;
}

.button:hover {
  background-color: rgba(236, 200, 152, 0.1);
}

.tab {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.5);
  color: rgba(236, 200, 152, 1);
//display: flex; /* 将 div 元素设置为 flex 容器 */
//flex-direction: column; /* 设置主轴方向为垂直方向 */
//align-items: center; /* 在交叉轴（水平方向）上居中对齐 */
}

.active {
  position: relative;
  border-bottom: 0;
}

.active .arrow {
  position: absolute;
  left: 50%;
  bottom: -20px;
  width: 0;
  height: 0;
  margin-left: -8px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid rgba(236, 200, 152, 1);
}


h2,
p {
  padding: 10px;
  text-align: center; /* 水平居中对齐 */
  margin: 0; /* 去除默认的上下外边距 */
}

.time-card {
  color: rgba(236, 200, 152, 1);
  background-color: rgba(218, 215, 215, 0.2);
  width: 100%;
  height: 100%;
  border-width: 0;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  z-index: 10;
}

.time-card:hover {
  cursor: pointer;
}
.clickable:hover{
  cursor: pointer;
}
</style>