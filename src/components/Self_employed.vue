<template>
  <div id="self_container">
    <!-- 自营产品banner区域 -->
    <div class="self_banner">
      <div class="self_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <div class="self_title">
        <p>自 营 商 品</p>
      </div>
      <div class="self_assured">
        <p>我 们 只 提 供 安 全 放 心 的 购 物</p>
      </div>
      <!-- 四个按钮 -->
      <div class="four_btn">
        <button>
          <!-- 左边icon -->
          <div class="left_icon">
            <img src="../assets/images/taobao_97.png" alt />
          </div>
          <!-- 右边title -->
          <div class="right_title">
            <a href="##">淘宝店铺</a>
          </div>
        </button>
        <button>
          <!-- 左边icon -->
          <div class="left_icon">
            <img src="../assets/images/jingdong.png" alt />
          </div>
          <!-- 右边title -->
          <div class="right_title">
            <a href="##">京东旗舰</a>
          </div>
        </button>
        <button>
          <!-- 左边icon -->
          <div class="left_icon">
            <img src="../assets/images/tianmaoxingxiang2.png" alt />
          </div>
          <!-- 右边title -->
          <div class="right_title">
            <a href="##">天猫商城</a>
          </div>
        </button>
        <button>
          <!-- 左边icon -->
          <div class="left_icon">
            <img src="../assets/images/jingdong_.png" alt />
          </div>
          <!-- 右边title -->
          <div class="right_title">
            <a href="##">京东专卖</a>
          </div>
        </button>
      </div>
      <div class="three_text">
        <p>*八号地电商代理运营</p>
      </div>
      <div class="four_text">
        <p>*八号地电商代理运营</p>
      </div>
    </div>
    <!-- 中间内容区域 -->
    <div class="pulp_powder">
      <div class="toubujiange"></div>
      <div class="pulp_header">
        <!-- 左边图片 -->
        <div class="pupl_left_img">
          <img src="../assets/images/豆浆粉.png" alt />
        </div>
        <!-- 右边文本 -->
        <div class="pupl_right_title">
          <span>八号地豆浆粉</span>
          <div class="eighty-four"></div>
          <div class="title_detail">
            <p>
              选用东北特色大豆，产自黑龙江省绥化市，黑土地肥沃，长出的大豆品质优良。
              利用现代化先进设备和技术， 保留了大豆营养成分，提供植物蛋白。
              采用先进的16道精致工艺，高温灭菌、提香、脱皮、去芽、脱渣、灭菌、豆香醇厚、口感顺滑、安全放心。
            </p>
          </div>
          <!--下边四个按钮 -->
          <div class="btn_container">
            <p>非 转 基 因</p>
            <p>速 溶 好 口 感</p>
            <p>绿 色 健 康</p>
            <p>独 立 小 包 装</p>
          </div>
        </div>
        <!-- 中间区域底部定位 -->
        <div class="line_content"></div>
      </div>
      <div class="pulp_bottom">
        <div class="pulp_bottom_header">
          <!-- 左边单独的图片 -->
          <div class="bottom_left_img">
            <img src="../assets/images/干果1.png" alt />
          </div>
          <!-- 右边图片区域 -->
          <div class="bottom_right_img">
            <div class="right_img_left">
              <img src="../assets/images/干果2.png" alt />
            </div>
            <div class="right_img_right">
              <img src="../assets/images/干果标题.png" alt />
            </div>
          </div>
        </div>
        <div class="pulp_bottom_content">
          <!-- 左边俩图片 -->
          <div class="bottom_content_img">
            <div class="left_img">
              <img src="../assets/images/干果3.png" alt />
            </div>
            <div class="right_img">
              <img src="../assets/images/干果4.png" alt />
            </div>
          </div>
          <!-- 右边文本 -->
          <div class="bottom_content_text">
            <p>这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 蜂蜜区域 -->
    <Honey></Honey>
    <!-- 山楂区域 -->
    <Hawthorn></Hawthorn>
    <!-- 蓝莓区域 -->
    <Blueberry></Blueberry>
    <!-- 间隔 -->
    <div class="jiange"></div>
    <!-- 自营产品Footer区域 -->
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Hawthorn from "./Hawthorn_series";
import Honey from "./Honey_series";
import Footer from "./Footer";
import Blueberry from "./Blueberry_series";
export default {
  components: {
    Footer,
    Honey,
    Hawthorn,
    Blueberry
  }
};
</script>

<style lang="less" scoped>
#self_container {
  width: 100%;
}
.self_banner {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/自营产品-PCbanner.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
  position: relative;
}
.self_img {
  width: 108px;
  height: 60px;
  margin-left: 373px;
}
.self_img > img {
  width: 108px;
  height: 60px;
  margin-top: 4px;
}
.self_title {
  width: 100%;
  height: 97px;
  margin-top: 126px;
  text-align: center;
}
.self_title > p {
  font-size: 100px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 88px;
}
.self_assured {
  width: 100%;
  height: 65px;
  margin-top: 28px;
  text-align: center;
}
.self_assured > p {
  font-size: 67px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
}
.four_btn {
  width: 100%;
  height: 80px;
  padding: 0px 351px 0px 350px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 73px;
  position: relative;
}
.four_btn > button {
  width: 240px;
  height: 80px;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  background-color: #ffeead;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.four_btn > button > .left_icon {
  width: 70px;
  height: 80px;
  position: relative;
}
.four_btn > button > .left_icon > img {
  width: 80px;
  height: 60px;
  color: #000000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.four_btn > button > .right_title {
  width: 170px;
  height: 80px;
  text-align: center;
}
.four_btn > button > .right_title > a {
  line-height: 78px;
  font-size: 33px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
}
.pulp_powder {
  width: 100%;
  height: 1852px;
  background-color: #fff;
}
.pulp_powder > .pulp_header {
  width: 100%;
  height: 715px;
  padding: 0px 353px 0px 99px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.pulp_powder > .pulp_bottom {
  width: 100%;
  height: 774px;
  margin-top: 243px;
}
.pulp_powder > .pulp_bottom > .pulp_bottom_header {
  width: 100%;
  height: 180px;
  padding: 0 63px 0 350px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.pulp_powder > .pulp_bottom > .pulp_bottom_content {
  width: 100%;
  height: 194px;
  margin-top: 69px;
  padding: 0 401px 0 350px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.pulp_bottom > .pulp_bottom_content .bottom_content_img {
  width: 555px;
  height: 194px;
  display: flex;
  justify-content: space-between;
}
.pulp_bottom > .pulp_bottom_content > .bottom_content_text {
  width: 514px;
  height: 194px;
}
.pulp_bottom > .pulp_bottom_content > .bottom_content_text {
  font-size: 29px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
}
.pulp_bottom > .pulp_bottom_header .bottom_left_img {
  width: 300px;
  height: 180px;
}
.pulp_bottom > .pulp_bottom_header .bottom_right_img {
  width: 1132px;
  height: 180px;
  display: flex;
  justify-content: space-between;
}
.pulp_bottom > .pulp_bottom_header .bottom_right_img .right_img_right > img {
  width: 941px;
  height: 156px;
}
.pulp_bottom > .pulp_bottom_header .bottom_left_img > img {
  width: 300px;
  height: 180px;
}
.pulp_powder > .pulp_header .pupl_left_img > img {
  width: 870px;
  height: 711px;
  vertical-align: middle;
}
.pulp_powder > .pulp_header > .pupl_right_title {
  width: 519px;
  height: 700px;
  text-align: center;
}
.pulp_powder > .pulp_header .pupl_right_title > span {
  display: block;
  width: 519px;
  height: 50px;
  line-height: 50px;
  font-size: 50px;
  font-family: "Source Han Sans CN";
  font-weight: 800;
  color: rgba(35, 35, 35, 1);
}
.pulp_powder > .pulp_header .pupl_right_title > .title_detail {
  width: 519px;
  height: 364px;
}
.pulp_powder > .pulp_header .pupl_right_title > .title_detail > p {
  font-size: 33px;
  font-family: Source Han Sans CN;
  color: rgba(125, 125, 125, 1);
}
.pulp_powder > .pulp_header .pupl_right_title > .btn_container {
  width: 519px;
  height: 159px;
  margin-top: 54px;
  padding: 0 52px 0 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.pulp_powder > .pulp_header .pupl_right_title > .btn_container > p {
  width: 206px;
  height: 64px;
  border-radius: 32px;
  background-color: #ededed;
  line-height: 64px;
  font-size: 28px;
  font-family: "Source Han Sans CN";
  font-weight: 800;
  color: rgba(150, 206, 180, 1);
}
.pulp_powder > .pulp_header > .line_content {
  width: 128px;
  height: 4px;
  background: #96ceb4;
  position: absolute;
  left: 69.5%;
  top: 10%;
  transform: translate(-69.5%, -10%);
}
.right_img_left > img {
  width: 180px;
  height: 180px;
}
.bottom_content_img > .left_img > img {
  width: 180px;
  height: 180px;
}
.bottom_content_img > .right_img > img {
  width: 300px;
  height: 180px;
}
.eighty-four {
  width: 519px;
  height: 64px;
  background-color: #fff;
}
.three_text {
  height: 9px;
  position: absolute;
  left: 59%;
  bottom: 20%;
}
.three_text > p {
  transform: translate(-50%, -10%);
  font-size: 8px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(166, 166, 166, 1);
}
.four_text {
  height: 9px;
  position: absolute;
  left: 76%;
  bottom: 20%;
}
.four_text >p {
  transform: translate(-50%, -10%);
  font-size: 8px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(166, 166, 166, 1);
}
.toubujiange {
  width: 100%;
  height: 248px;
}
.jiange {
  width: 100%;
  height: 34px;
  background-color: #fff;
}
</style>
