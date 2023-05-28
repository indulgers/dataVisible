<template>
  <el-col v-if="true" style="width: 100%; height: 100%;padding: 40px">
    <!-- 背景 -->
    <div :style="background" class="bgBackground"></div>

    <el-row style="height: 100%;width: 100%;">
      <el-col :span="16" style="max-height: 100%;">
        <el-row style="height: 95%; width: 100%; padding-top: 50px;">
          <el-card v-show="selected === 1" class="tab">
            <el-row justify="center">
              <iframe src="http://www.npc.gov.cn/npc/c30834/202212/65f17bdcafd4426db20b659c04510041.shtml" style="height: 75vh;width:63vw;background-color: white"></iframe>
            </el-row>
          </el-card>
          <el-card v-show="selected === 2" class="tab">
            <el-row justify="center">
              <iframe src="http://www.gov.cn/xinwen/2022-10/20/content_5719969.htm" style="height: 75vh;width:63vw;background-color: white"></iframe>
            </el-row>v
          </el-card>
          <el-card v-show="selected === 3" class="tab">
            <el-row justify="center">
              <iframe src="http://chinajob.mohrss.gov.cn/c/2023-04-18/375320.shtml" style="height: 75vh;width:63vw;background-color: white"></iframe>
            </el-row>
          </el-card>
          <el-card v-show="selected === 4" class="tab">
            <el-row justify="center">
              <iframe src="http://lianghui.people.com.cn/2023/n1/2023/0311/c452473-32642126.html" style="height: 75vh;width:63vw;background-color: white"></iframe>
            </el-row>
          </el-card>
          <el-card v-show="selected === 5" class="tab">
            <el-row justify="center">
              <iframe src="http://finance.people.com.cn/n1/2022/0916/c444648-32527858.html" style="height: 75vh;width:63vw;background-color: white"></iframe>
            </el-row>
          </el-card>
          <el-card v-show="selected === 6" class="tab">
            <el-row justify="center">
              <iframe src="http://lianghui.people.com.cn/2023/n1/2023/0311/c452482-32641703.html" style="height: 75vh;width:63vw;background-color: white"></iframe>
            </el-row>
          </el-card>
        </el-row>
      </el-col>

      <el-col :span="8" style="height: 300px">
        <div style="height: 300px">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card class="time-card" @click="selectTab(1)">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card class="time-card" @click="selectTab(2)">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card class="time-card" @click="selectTab(3)">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card class="time-card" @click="selectTab(4)">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card class="time-card" @click="selectTab(5)">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card class="time-card" @click="selectTab(6)">
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      background: {
        // 背景图片地址
        backgroundImage: 'url(' + require('@/assets/background/bg4.jpg') + ')',
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
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(236, 200, 152, 1);
  color: rgba(236, 200, 152, 1);
  display: flex; /* 将 div 元素设置为 flex 容器 */
  flex-direction: column; /* 设置主轴方向为垂直方向 */
  align-items: center; /* 在交叉轴（水平方向）上居中对齐 */
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
  border-color: rgba(236, 200, 152, 0.5);
  border-radius: 5px;
  z-index: 10;
}

.time-card:hover {
  cursor: pointer;
}
</style>