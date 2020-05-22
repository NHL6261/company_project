<template>
  <div id="b2b_container">
    <div class="b2b_banner">
      <!-- 左边图片区域 -->
      <div class="b2b_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <!-- title区域 -->
      <div class="b2b_title">
        <p>B 2 B 代 理</p>
      </div>
      <div class="b2b_detail">
        <p>加入代理,助力门店智慧收银</p>
      </div>
    </div>
    <div class="Four_problems">
      <div class="problems">
        <p>致力解决以下4大问题</p>
      </div>
      <div class="slow_container">
        <div class="slow_text">
          <div class="slow">
            <p>慢</p>
          </div>
          <p>收银效率低，结账慢</p>
        </div>
        <div class="slow_text">
          <div class="slow">
            <p>耗</p>
          </div>
          <p>结算繁琐，耗费人力</p>
        </div>
        <div class="slow_text">
          <div class="slow">
            <p>乱</p>
          </div>
          <p>数据凌乱，不便整理</p>
        </div>
        <div class="slow_text">
          <div class="slow">
            <p>少</p>
          </div>
          <p>受地区限制，顾客范围小</p>
        </div>
      </div>
    </div>
    <!-- 服务支持页面 -->
    <Service_Page></Service_Page>
    <!-- 为什么选择我页面 -->
    <Choose></Choose>
    <!-- 代理流程页面 -->
    <Agent_process></Agent_process>
    <!-- 底部footer -->
    <win_win></win_win>
  </div>
</template>

<script type="text/ecmascript-6">
import Service_Page from './Service_Page'
import Choose from './choose_us'
import Agent_process from './Agent_process'
import win_win from './Win_win'
export default {
  components:{
    Service_Page,
    Choose,
    Agent_process,
    win_win
  }
};
</script>

<style lang="less" scoped>
#b2b_container {
  width: 100%;
  background-color: #fff;
}
.b2b_banner {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/加入代理-banner.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
}
.b2b_img {
  width: 108px;
  height: 60px;
  margin-left: 373px;
}
.b2b_img > img {
  width: 108px;
  height: 60px;
  margin-top: 4px;
}
.b2b_title {
  width: 100%;
  height: 98px;
  margin-top: 195px;
  text-align: center;
}
.b2b_title > p {
  font-size: 100px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 90px;
}
.b2b_detail {
  width: 100%;
  height: 65px;
  margin-top: 30px;
  text-align: center;
}
.b2b_detail > p {
  font-size: 67px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
}
.Four_problems {
  width: 100%;
  height: 573px;
}

.problems {
  width: 100%;
  height: 142px;
  text-align: center;
  position: relative;
}
.problems > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
}
.slow_container {
  width: 100%;
  height: 431px;
  padding: 88px 379px 88px 370px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.Four_problems .slow_container > .slow_text {
  text-align: center;
}
.Four_problems .slow_container > .slow_text .slow {
  width: 200px;
  height: 200px;
  border: 1px dashed #ffad60;
  background-color: #fff;
  border-radius: 50%;
  z-index: 100;
  position: relative;
}
.Four_problems .slow_container > .slow_text .slow:hover {
  background-color: #ffad60;
}
.Four_problems .slow_container > .slow_text .slow > p {
  width: 100%;
  height: 100%;
  font-size: 72px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 173, 96, 1);
  position: absolute;
  left: 49%;
  top: 71%;
  transform: translate(-50%,-50%);
}
.Four_problems .slow_container > .slow_text .slow > p:hover{
  color: #fff;
}
.Four_problems .slow_container > .slow_text p {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 104px;
}
</style>
