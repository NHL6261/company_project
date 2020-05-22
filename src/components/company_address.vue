<template>
  <div id="address_container">
    <div class="about_main">
      <div class="main_img">
        <img src="../assets/images/合肥办公室.png" alt />
      </div>
      <div class="postion_content">
        <p>合肥八号地信息技术有限公司</p>
        <p>小标题小标题小标题小标题</p>
        <p>南京八号地信息技术有限公司依托全球原产地、优品、甄选资源及八号地品牌优势,打造八号地食品网络购物平台。并在线上设有八号地的天猫淘宝京东商城,致力于为顾客提供更放心的购物体验。</p>
        <p>
          公司地址：安徽省合肥市包河区滨湖金融港B3座501室
          公司电话：400-818-5900
          公司邮箱：8haodi@8haodi.com
          公共交通：公交60路、62路的滨湖会展中心西站
          地铁1号线滨湖会展中心站
        </p>
        <div class="postion_color"></div>
      </div>
      <div class="left_img">
        <img src="../assets/images/合肥地址切图.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#address_container {
  width: 100%;
  height: 980px;
}
.about_main {
  width: 100%;
  padding: 80px 469px 98px 482px;
  box-sizing: border-box;
  position: relative;
}
.main_img {
  width: 100%;
  height: 400px;
}
.main_img > img {
  width: 100%;
  height: 400px;
}
.left_img {
  width: 375px;
  height: 375px;
  text-align: right;
}
.left_img > img {
  width: 375px;
  height: 375px;
  margin-top: 19px;
  transition: all 0.5s;
  transform-origin: bottom right;
  position: absolute;
  right: 24.5%;
}
.left_img > img:hover {
  transform: scale(1.5);
  z-index: 10;
  cursor: pointer;
}
.about_img {
  width: 108px;
  height: 60px;
  margin-left: 373px;
}
.about_img > img {
  width: 108px;
  height: 60px;
  margin-top: 4px;
}
.postion_content {
  width: 530px;
  height: 513px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  left: 26%;
  top: 38%;
  display: block;
  padding: 39px 46px 53px 47px;
  box-sizing: border-box;
}
.postion_content > p:nth-child(1) {
  font-size: 33px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(35, 35, 35, 1);
}
.postion_content > p:nth-child(2) {
  font-size: 21px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(35, 35, 35, 1);
}
.postion_content > p:nth-child(3) {
  font-size: 21px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 25px;
  margin-top: 23px;
}
.postion_content > p:nth-child(4) {
  font-size: 21px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height:33px;
  margin-top: 27px;
}
.postion_color {
  width: 80px;
  height: 8px;
  background: #ffad60;
  position: absolute;
  left: 46px;
  bottom: 0;
}
</style>
