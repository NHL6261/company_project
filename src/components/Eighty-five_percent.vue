<template>
  <div class="eighty_five">
    <div class="eighty_five_left">
      <div class="left_bootom"></div>
      <p>2016.03.16</p>
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="eighty_five_right">
      <p>南京八号地物流有限公司正式成立</p>
      <img src="../assets/images/摄图网_500634178_banner.png" alt="此图片暂时无法显示" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
.eighty_five {
  width: 100%;
  height: 390px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

.eighty_five_left {
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
.eighty_five_right {
  width: 49%;
  height: 390px;
  position: relative;
}
.eighty_five_right > p {
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
.eighty_five_left > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 27%;
  bottom: -1%;
}
.eighty_five_right > img {
  width: 400px;
  height: 260px;
  position: absolute;
  left: 34%;
  bottom: 20%;
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
