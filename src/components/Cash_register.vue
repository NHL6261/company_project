<template>
  <div id="cash_container">
    <div class="cash_banner">
      <!-- 左边图片区域 -->
      <div class="cash_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <!-- title区域 -->
      <div class="cash_title">
        <p>云 服 务 收 银 系 统</p>
      </div>
      <div class="cash_detail">
        <p>日积月累 强身健体</p>
      </div>
    </div>
    <div class="cash_management">
      <div class="jiange"></div>
      <div class="wisdom_management">
        <p>智慧门店</p>
        <p>轻松管理</p>
      </div>
      <div class="center_img">
        <img src="../assets/images/智能门店轻松管理-pc.png" alt />
      </div>
      <div class="jiange1"></div>
      <!-- 综合零售系统 -->
      <Comprehensive></Comprehensive>
      <!-- 线上完美数据页面 -->
      <Perfect></Perfect>
      <!-- 手机APP助力员工轻松配送页面 -->
      <Delivery></Delivery>
      <!-- 十分钟轻松上手的收银系统 -->
      <Relaxed></Relaxed>
      <div class="cash_footer">
        <div class="footer_header">
          <p>配套智能硬件</p>
        </div>
        <div class="footer_main">
          <div class="footer_img_content" :style="'margin-top: 0'">
            <div class="top_img">
              <img src="../assets/images/收音机.png" alt />
            </div>
            <div class="bottom_text">
              <p class="first">台式收银机</p>
              <p class="last">高清大屏，十点触控，英特尔处理器，快速运转</p>
            </div>
          </div>
          <div class="footer_img_content" :style="'margin-top: 0'">
            <div class="top_img">
              <img :style="'margin-right: 25px,'" src="../assets/images/扫码枪.png" class="size" alt />
            </div>
            <div class="bottom_text">
              <p class="first">影像式扫码枪</p>
              <p class="last">精准摄像头，智能读取，快速识别</p>
            </div>
          </div>
          <div class="footer_img_content">
            <div class="top_img">
              <img class="change" src="../assets/images/打印机.png" alt />
            </div>
            <div class="bottom_text">
              <p class="first">热敏票据打印机</p>
              <p class="last">清晰打印，免碳带色带墨水高效低耗材</p>
            </div>
          </div>
          <div class="footer_img_content">
            <div class="top_img">
              <img class="imgsize" src="../assets/images/钱箱.png" alt />
            </div>
            <div class="bottom_text">
              <p class="first">收银专用钱箱</p>
              <p class="last">坚固材质，安全可靠，收银更安心</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Comprehensive from "./Comprehensive";
import Perfect from "./perfect_data";
import Delivery from "./Delivery";
import Relaxed from "./Relaxed";
export default {
  components: {
    Comprehensive,
    Perfect,
    Delivery,
    Relaxed
  }
};
</script>

<style lang="less" scoped>
#cash_container {
  width: 100%;
}
.cash_banner {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/云收银系统PC-banner.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
}
.cash_img {
  width: 108px;
  height: 60px;
  margin-left: 373px;
}
.cash_img > img {
  width: 108px;
  height: 60px;
  margin-top: 4px;
}
.cash_title {
  width: 100%;
  height: 98px;
  margin-top: 195px;
  text-align: center;
}
.cash_title > p {
  font-size: 100px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 90px;
}
.cash_detail {
  width: 100%;
  height: 65px;
  margin-top: 27px;
  text-align: center;
}
.cash_detail > p {
  font-size: 67px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
}
.cash_management {
  width: 100%;
  background-color: #fff;
}
.cash_management .wisdom_management {
  width: 100%;
  height: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.cash_management .wisdom_management > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  margin-right: 30px;
}
.center_img {
  width: 100%;
  height: 575px;
  padding: 0px 338px 0px 320px;
  box-sizing: border-box;
  margin-top: 60px;
}
.center_img > img {
  width: 1262px;
  height: 575px;
}
.cash_footer {
  width: 100%;
  height: 1582px;
  background: rgba(246, 246, 246, 1);
}
.footer_header {
  width: 100%;
  height: 130px;
  padding: 64px 320px 106px 320px;
  box-sizing: border-box;
  position: relative;
}
.footer_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
}
.cash_footer .footer_main {
  width: 100%;
  height: 1380px;
  padding: 64px 320px 106px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.cash_footer .footer_main .footer_img_content {
  width: 621px;
  height: 612px;
  margin-top: 39px;
  background-color: #fff;
}
.cash_footer .footer_main .footer_img_content .top_img {
  width: 621px;
  height: 472px;
  padding: 81px 39px 68px 57px;
  box-sizing: border-box;
  text-align: center;
}
.cash_footer .footer_main .footer_img_content .top_img > img {
  width: 525px;
  height: 323px;
}
.cash_footer .footer_main .footer_img_content .bottom_text {
  width: 622px;
  height: 140px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 0px 0px rgba(255, 173, 96, 1);
  padding: 30px 0 34px 40px;
  box-sizing: border-box;
}
.cash_footer .footer_main .footer_img_content .bottom_text .first {
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.cash_footer .footer_main .footer_img_content .bottom_text .last {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  margin-top: 13px;
}
.jiange {
  width: 100%;
  height: 80px;
}
.jiange1 {
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.cash_footer .footer_main .footer_img_content .top_img > .size {
  width: 221px;
  height: 388px;
}
.cash_footer .footer_main .footer_img_content .top_img > .change {
  width: 304px;
  height: 396px;
}
.cash_footer .footer_main .footer_img_content .top_img > .imgsize {
  width: 537px;
  height: 314px;
}
</style>
