<template>
  <div class="fifty">
    <div class="fifty_left">
      <p>“情暖中华 筑梦同行”光爱慈善万里行公益春晚中，八号地捐款100万元并荣获2018中国公益榜样奖</p>
      <img src="../assets/images/证书.png" alt="此图片暂时无法显示" />
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="fifty_right">
      <div class="left_bootom"></div>
      <p>2018.06.15</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
.fifty {
  width: 100%;
  height: 390px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

.fifty_left {
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
.fifty_right {
  width: 49%;
  height: 390px;
  position: relative;
}
.fifty_right > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  right: 27%;
  bottom: 13%;
}
.left_bootom {
  width: 100px;
  height: 10px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: 7%;
  left: 10%;
}
.fifty_left > p {
  width: 390px;
  height: 85px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  right: 145px;
  top: 0;
  text-align: right;
}
.fifty_left > img {
  width: 400px;
  height: 249px;
  position: absolute;
  right: 24%;
  bottom: 6%;
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
