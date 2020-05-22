<template>
  <div id="service_container">
    <div class="servite_header">
      <p>服务支持</p>
    </div>
    <div class="servite_main">
      <div class="main_container">
        <div class="left_img">
          <img src="../assets/images/售前咨询.png" alt />
        </div>
        <div class="right_content">
          <p>售前咨询</p>
          <p>专业客服随时为您答惑,全面了解</p>
        </div>
      </div>
      <div class="main_container">
        <div class="left_img">
          <img src="../assets/images/远程维护.png" alt />
        </div>
        <div class="right_content">
          <p>远程维护</p>
          <p>平台稳定,技术团队远程维护系统</p>
        </div>
      </div>
      <div class="main_container">
        <div class="left_img">
          <img src="../assets/images/操作指导.png" alt />
        </div>
        <div class="right_content">
          <p>操作指导</p>
          <p>多种指导方式，助力门店快速使用</p>
        </div>
      </div>
      <div class="main_container">
        <div class="left_img">
          <img src="../assets/images/后期保障.png" alt />
        </div>
        <div class="right_content">
          <p>后期保障</p>
          <p>团队随时高效解决问题,保障权益</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#service_container {
  width: 100%;
  height: 748px;
  background-color: #fff7ef;
}
.servite_header {
  width: 100%;
  height: 132px;
  position: relative;
}
.servite_header > p {
  width: 144px;
  height: 35px;
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  position: absolute;
  left: 50%;
  bottom: 13px;
  transform: translate(-50%);
}
.servite_main {
  width: 100%;
  height: 615px;
  padding: 62px 320px 95px 330px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.main_container {
  width: 622px;
  height: 207px;
  background-color: #fff;
  padding: 59px 127px 56px 54px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 20px 0px rgba(255, 173, 96, 0.2);
}
.main_container > .left_img {
  width: 92px;
  height: 92px;
  background-color: #ffad60;
  border-radius: 20%;
}
.main_container .right_content {
  width: 300px;
  height: 70px;
}
.main_container .right_content > p:nth-child(1) {
  width: 100%;
  height: 50px;
  font-size: 32px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.main_container .right_content > p:nth-child(2) {
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 30px;
}
.main_container > .left_img > img {
  width: 92px;
  height: 92px;
}
</style>
