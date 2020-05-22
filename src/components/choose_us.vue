<template>
  <div id="choose_container">
    <div class="choose_header">
      <p>为什么选择我们</p>
    </div>
    <div class="choose_main">
      <div class="left_img_container">
        <div class="left_top_img">
          <p>技术优势</p>
          <p>由资深工程师带领的专业团队</p>
        </div>
        <div class="left_bottom_img">
          <p>数据安全</p>
          <p>数据在云端加密存储,保障安全</p>
        </div>
      </div>
      <div class="center_img_container">
        <img src="../assets/images/logo-圆.png" alt="此图片暂时无法显示" />
      </div>
      <div class="right_img_container">
        <div class="right_top_img">
          <p class="technologya">产品易用</p>
          <p class="teama">创造简单易用的新零售平台</p>
        </div>
        <div class="right_bottom_img">
          <p class="technologyb">专业客服</p>
          <p class="teamb">7*12小时专业售后指导</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#choose_container {
  width: 100%;
  height: 716px;
}
.choose_header {
  width: 100%;
  height: 132px;
  position: relative;
}
.choose_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  position: absolute;
  left: 50%;
  bottom: 13px;
  transform: translate(-50%);
}
.choose_main {
  width: 100%;
  height: 584px;
  padding: 106px 320px 132px 303px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.choose_main > .left_img_container,
.right_img_container {
  width: 447px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.choose_main > .left_img_container > .left_top_img,
.left_bottom_img {
  width: 447px;
  height: 134px;
  background-image: url("../assets/images/技术优势PC背景.png");
  background-size: 100% 134px;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
}
.choose_main > .left_img_container > .left_top_img > p:nth-child(1),
.left_bottom_img > p:nth-child(1) {
  width: 100%;
  height: 35px;
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.choose_main > .left_img_container > .left_top_img > p:nth-child(2),
.left_bottom_img > p:nth-child(2) {
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  margin-top: 15px;
}
.choose_main > .center_img_container {
  width: 330px;
  height: 330px;
}
.choose_main > .center_img_container > img {
  width: 100%;
  height: 100%;
}
.choose_main > .left_img_container > .left_bottom_img {
  width: 447px;
  height: 134px;
  background-image: url("../assets/images/数据安全PC背景.png");
  background-size: 100% 134px;
}
.choose_main > .right_img_container > .right_top_img,
.right_bottom_img {
  width: 100%;
  height: 134px;
  background-image: url("../assets/images/产品易用PC背景.png");
  background-size: 100% 134px;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
}
.choose_main > .right_img_container > .right_bottom_img {
  background-image: url("../assets/images/专业客服PC背景.png");
}
.choose_main > .right_img_container > .right_top_img > .technologya {
  width: 100%;
  height: 35px;
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.choose_main > .right_img_container > .right_top_img > .teama {
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  margin-top: 15px;
}
.choose_main > .right_img_container > .right_bottom_img > .technologyb {
  width: 100%;
  height: 35px;
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.choose_main > .right_img_container > .right_bottom_img > .teamb {
  width: 100%;
  height: 18px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  margin-top: 15px;
}
</style>
