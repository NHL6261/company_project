<template>
  <div id="footer_container">
    <div class="footer_top">
      <div class="footer_logo">
        <img src="../assets/images/logo.png" alt="此图片暂时无法显示" />
      </div>
      <div class="center_text">
        <p>北京地址：北京市丰台区金茂广场3号楼1001室</p>
        <p>合肥地址：安徽省合肥市包河区滨湖金融港B3座501室</p>
        <p>北京电话：010-64222400 / 合肥电话：400-818-5900</p>
        <p>公司邮箱：8haodi@8haodi.com</p>
      </div>
      <div class="qr_container">
        <div class="container">
          <div class="white_container"></div>
          <div class="white_text">
            <p>安卓下载</p>
          </div>
        </div>
        <div class="container">
          <div class="white_container"></div>
          <div class="white_text">
            <p>ios下载</p>
          </div>
        </div>
        <div class="container">
          <div class="white_container"></div>
          <div class="white_text">
            <p>微信公众号</p>
          </div>
        </div>
        <div class="container">
          <div class="white_container"></div>
          <div class="white_text">
            <p>微博官方号</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <p>© 8haodi.com. All Rights Reserved. 京ICP备16001304号</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#footer_container {
  width: 100%;
  height: 152px;
  background-color: #444444;
}
.footer_top {
  width: 100%;
  height: 130.5px;
  padding: 18px 575px 21px 577px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 2px solid #606060;
  justify-content: space-between;
}
.footer_bottom {
  width: 100%;
  text-align: center;
}
.footer_bottom > p {
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(125, 125, 125, 1);
}
.footer_logo {
  width: 113.5px;
  height: 63px;
}
.footer_logo > img {
  width: 113.5px;
  height: 63px;
}
.center_text {
  height: 61px;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
}
.qr_container {
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
}
.container {
  width: 100%;
  height: 65px;
  text-align: center;
}
.white_container {
  width: 70px;
  height: 65px;
  background-color: #fff;
  text-align: center;
}
.white_text > p {
  margin-top: 5px;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
