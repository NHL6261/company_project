<template>
  <div id="growing_container">
    <div class="growing_headers">
      <p>我们的成长</p>
    </div>
    <!-- 时间区域轴 -->
    <div class="timeline">
      <!-- 百分之十区域 -->
      <div class="tenpercent">
        <div class="tenpercent_left"></div>
        <div class="center_content">
          <div class="sphere"></div>
        </div>
        <div class="tenpercent_right">
          <div class="right_bootom"></div>
          <p>2020.04.28</p>
        </div>
      </div>
      <!-- 百分之二十区域 -->
      <twenty></twenty>
      <!-- 百分之三十区域 -->
      <thirty></thirty>
      <!-- 百分之四十区域 -->
      <fortypercent></fortypercent>
      <!-- 百分之五十区域 -->
      <fiftypercent></fiftypercent>
      <!-- 百分之五十五区域 -->
      <fifty_five></fifty_five>
      <!-- 百分之六十区域 -->
      <sixty></sixty>
      <!-- 百分之六十五区域 -->
      <sixty_five></sixty_five>
      <!-- 百分之七十区域 -->
      <seventy></seventy>
      <!-- 百分之七十五 -->
      <seventy_five></seventy_five>
      <!-- 百分之八十区域 -->
      <eighty></eighty>
      <!-- 百分之八十五区域 -->
      <eighty_five></eighty_five>
      <!-- 百分之九十区域 -->
      <ninety></ninety>
      <!-- 百分之九十五区域 -->
      <ninety_five></ninety_five>
      <!-- 百分之百区域 -->
      <hundred></hundred>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import twenty from "./twenty_percent";
import thirty from "./Thirty_percent";
import fortypercent from "./Forty_percent";
import fiftypercent from "./Fifty_percent";
import fifty_five from "./Fifty-five_percent";
import sixty from "./Sixty_percent";
import sixty_five from "./Sixty-five_percent";
import seventy from './Seventy_percent';
import seventy_five from './Seventy_five';
import eighty from './Eighty_percent';
import eighty_five from './Eighty-five_percent';
import ninety from './Ninety_percent';
import ninety_five from './Ninety-five_percent';
import hundred from './hundred_percent'
export default {
  components: {
    twenty,
    thirty,
    fortypercent,
    fiftypercent,
    fifty_five,
    sixty,
    sixty_five,
    seventy,
    seventy_five,
    eighty,
    eighty_five,
    ninety,
    ninety_five,
    hundred
  }
};
</script>

<style lang="less" scoped>
#growing_container {
  width: 100%;
  height: 6500px;
  background-color: #fff;
}
.growing_headers {
  width: 100%;
  height: 231px;
  position: relative;
}
.growing_headers > p {
  font-size: 67px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 51%;
  bottom: 13px;
  transform: translate(-50%);
}
.timeline {
  width: 100%;
  height: 1000px;
  padding: 51px 397px 0px 410px;
  box-sizing: border-box;
}
.tenpercent {
  width: 100%;
  height: 229px;
  display: flex;
  justify-content: space-between;
}

.tenpercent_left {
  width: 50%;
  height: 229px;
}
.center_content {
  width: 1%;
  height: 140px;
  background-color: #bfbfbf;
  position: relative;
}
.tenpercent_right {
  width: 49%;
  height: 229px;
  position: relative;
}
.tenpercent_right > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  right: 27%;
  bottom: 13%;
}
.right_bootom {
  width: 100px;
  height: 10px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: 7%;
  left: 10%;
}
.sphere {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffad60;
  position: absolute;
  left: -19px;
  top: 130%;
}
</style>
