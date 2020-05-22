<template>
  <div id="honey_container">
    <div class="header_conten"></div>
    <div class="left_img">
      <img src="../assets/images/蜂蜜标题.png" alt />
    </div>
    <div class="bottom_text">
      <p>这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案</p>
    </div>
    <!-- 右边图片 -->
    <div class="right_img">
      <div class="img_container">
        <img src="../assets/images/蜂蜜1.png" alt />
      </div>
      <div class="img_container">
        <img src="../assets/images/蜂蜜2.png" alt />
      </div>
      <div class="img_container">
        <img src="../assets/images/蜂蜜3.png" alt />
      </div>
      <div class="img_container">
        <img src="../assets/images/蜂蜜4.png" alt />
      </div>
      <div class="img_container">
        <img src="../assets/images/蜂蜜5.png" alt />
      </div>
      <div class="img_container">
        <img src="../assets/images/蜂蜜6.png" alt />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#honey_container {
  width: 100%;
  height: 800px;
  background-color: #444444;
  position: relative;
}
.header_conten {
  width: 100%;
  height: 163px;
}
.left_img > img {
  margin-left: 93px;
  margin-top: 45px;
  width: 1053px;
  height: 161px;
}
.bottom_text {
  width: 514px;
  height: 194px;
  margin-left: 401px;
  margin-top: 50px;
}
.bottom_text > p {
  font-size: 29px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 37px;
}
.right_img {
  width: 576px;
  height: 474px;
  position: absolute;
  right: 18.5%;
  top: 18%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.img_container{
    width: 260px;
    height: 130px;
}
.img_container >img{
    width: 260px;
    height: 130px;
}
</style>
