<template>
  <div id="about_container">
    <div class="about_header">
      <!-- 左边图片 -->
      <div class="about_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <div class="about_title">
        <div class="about_top">
          <p>关 于 我 们</p>
        </div>
        <div class="about_bottom">
          <p>日 积 月 累</p>
          <p>强 身 健 体</p>
        </div>
      </div>
    </div>
    <div class="about_main">
      <div class="main_img">
        <img src="../assets/images/公司-北京.png" alt />
      </div>
      <div class="postion_content">
        <p>北京八号地信息技术有限公司</p>
        <p>小标题小标题小标题小标题</p>
        <p>北京八号地信息技术有限公司是拥有一支实力雄厚且经验丰富的团队，核心成员拥有数十年的行业经验，团队经过多年的锤炼在核心队伍的带领下，凭借一流的企业管理方法和高效的技术团队支持，以“原产地、优品、甄选”为核心，致力于为广大消费者严格甄选好的产品。</p>
        <div class="address">
          <p>公司地址：北京市丰台区金茂广场3号楼1001室</p>
          <p>公司电话：010-64222400</p>
          <p>公司邮箱：8haodi@8haodi.com</p>
          <p>公共交通：地铁9号线丰台科技园站C口</p>
        </div>
        <div class="postion_color"></div>
      </div>
      <div class="left_img">
        <img src="../assets/images/北京地址切图.jpg" alt />
      </div>
    </div>
    <company_address></company_address>
    <!-- 我们的成长史页面 -->
    <growing_up></growing_up>
    <!-- 底部footer -->
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import company_address from "./company_address";
import growing_up from "./growing_up";
import Footer from "./Footer";
export default {
  components: {
    company_address,
    growing_up,
    Footer
  }
};
</script>

<style lang="less" scoped>
#about_container {
  width: 100%;
  background-color: #ededed;
}
.about_header {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/关于我们banner.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
}
.about_main {
  width: 100%;
  padding: 80px 469px 50px 482px;
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
}
.left_img > img {
  width: 375px;
  height: 375px;
  margin-top: 19px;
  transition: all 0.5s;
  transform-origin: bottom left;
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
  height: 550px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  right: 26%;
  top: 39.5%;
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
  line-height: 30px;
  margin-top: 23px;
}

.postion_color {
  width: 80px;
  height: 8px;
  background: #ffad60;
  position: absolute;
  left: 46px;
  bottom: 0;
}
.about_title {
  width: 100%;
  height: 127px;
  margin-top: 150px;
  text-align: center;
}
.about_top > p {
  font-size: 100px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.about_bottom {
  display: flex;
  justify-content: center;
}
.about_bottom > p {
  font-size: 67px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.about_bottom > p:nth-child(1) {
  margin-right: 40px;
}
.address {
  width: 100%;
  background-color: red;
}
.address > p {
  font-size: 21px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 33px;
}
</style>
