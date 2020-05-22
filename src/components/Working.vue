<template>
  <div id="working_container">
    <div class="working_title">
      <p>我们的工作环境</p>
      <p>在八号地，有舒适的办公环境，有丰富的下午茶零食，有精彩的团建活动来等你</p>
    </div>
    <div class="jiange"></div>
    <!-- 轮播图区域 -->
    <div class="working_carousel">
      <el-carousel :interval="2000" type="card" height="250px">
        <el-carousel-item v-for="(item,index) in imagesbox" :key="index">
          <img class="images" :src="item.idView" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 我们寻找的人 -->
    <div class="working_looking">
      <div class="looking_title">
        <p>我们寻找这样的人</p>
      </div>
      <div class="looking_main">
        <div class="main_content">
          <div class="content_title">
            <p>如果你</p>
            <div class="leigh">
              <p>有梦想,勇于行动</p>
              <p>有才能,期待发挥</p>
              <p>有态度,脚踏实地</p>
              <p>我们给你提供发挥自我价值的平台</p>
              <p>在新零售互联平台一起成长</p>
            </div>
          </div>
        </div>
        <div class="main_img">
          <img src="../assets/images/加入我们-图.png" alt />
        </div>
      </div>
    </div>
    <!-- 我们期待您的加入 -->
    <Forward></Forward>
  </div>
</template>

<script type="text/ecmascript-6">
import carousel from "./Carousel";
import Forward from "./look_forward";
import Sattistics from "./Statistics";
export default {
  components: {
    carousel,
    Forward,
    Sattistics
  },
  data() {
    return {
      imagesbox: [
        { id: 0, idView: require("../assets/images/1.png") },
        { id: 1, idView: require("../assets/images/2.png") },
        { id: 2, idView: require("../assets/images/3.png") }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
#working_container {
  width: 100%;
  height: 600px;
}
.working_title {
  text-align: center;
}
.working_title p:nth-child(1) {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.working_title p:nth-child(2) {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  margin-top: 20px;
}

.working_looking {
  width: 100%;
  height: 600px;
}
.working_looking > .looking_title {
  width: 100%;
  height: 95px;
  text-align: center;
}
.working_looking > .looking_title > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.working_looking > .looking_main {
  width: 100%;
  height: 507px;
  padding: 0 320px 99px 370px;
  box-sizing: border-box;
  position: relative;
}
.working_looking > .looking_main > .main_content {
  width: 1270px;
  height: 507px;
  background-color: #fff3e7;
}
.working_looking > .looking_main > .main_content .content_title {
  width: 561px;
  height: 507px;
  float: right;
  padding: 134px 291px 140px 0;
  box-sizing: border-box;
}
.working_carousel {
  width: 100%;
  height: 500px;
  padding: 0px 320px;
  box-sizing: border-box;
}
.working_carousel > img{
  width: 632px;
  height: 390px;
}
.working_looking
  > .looking_main
  > .main_content
  .content_title
  > p:nth-child(1) {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.working_looking > .looking_main > .main_content .content_title > .leigh {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  margin-top: 36px;
  line-height: 36px;
}
.working_looking .looking_main > .main_img > img {
  width: 632px;
  height: 400px;
  position: absolute;
  left: 16.5%;
  top: 10%;
}
.images{
  width: 632px;
  height: 390px;
}
.jiange {
  width: 100%;
  height: 30px;
}
</style>
