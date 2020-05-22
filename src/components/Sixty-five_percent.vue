<template>
  <div class="forty">
    <div class="forty_left">
      <div class="left_bootom"></div>
      <p>2018.03.17</p>
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="forty_right">
      <p>八号地百香果干、黄桃干、菠萝干、芒果干、草莓干上架</p>
      <img src="../assets/images/BF5814C7-A5D5-4773-8330-495771114DF2.png" alt="此图片暂时无法显示" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
.forty {
  width: 100%;
  height: 390px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.forty_left {
  width: 50%;
  height: 390px;
  position: relative;
}
.center_content {
  width: 1%;
  height: 360px;
  background-color: #bfbfbf;
  position: relative;
}
.forty_right {
  width: 49%;
  height: 390px;
  position: relative;
}
.forty_right > p {
  width: 450px;
  height: 58px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 182px;
  top: 0;
}
.left_bootom {
  width: 100px;
  height: 10px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: -9%;
  right: 10%;
}
.forty_left > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 27%;
  bottom: -1%;
}
.forty_right > img {
  width: 400px;
  height: 260px;
  position: absolute;
  left: 33%;
  bottom: 12%;
}
.sphere {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffad60;
  position: absolute;
  left: -19px;
  top: 110%;
}
</style>
