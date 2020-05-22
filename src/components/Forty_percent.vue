<template>
  <div class="forty">
    <div class="forty_left">
      <div class="left_bootom"></div>
      <p>2019.01.04</p>
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="forty_right">
      <p>合肥八号地信息技术有限公司成立</p>
      <img src="../assets/images/公司.png" alt="此图片暂时无法显示" />
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
  bottom: 7%;
  right: 10%;
}
.forty_left > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 27%;
  bottom: 13%;
}
.forty_right > img {
  width: 400px;
  height: 260px;
  position: absolute;
  left: 34%;
  bottom: 19%;
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
