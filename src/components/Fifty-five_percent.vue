<template>
  <div class="fifty_five">
    <div class="forty_left">
      <div class="left_bootom"></div>
      <p>2018.05.23</p>
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="forty_right">
      <p>八号地乳品有限公司成立，落户云山农场。 黑龙江农垦总局发改委主任于省元、牡丹江管理局副局长周茂芳、虎林市副市长刘明洋、云山农场场长孙文宏及在家场领导、垦荒人董事长兼创始人张洪江、及社会各界人士共百余人出席了奠基仪式。</p>
      <img src="../assets/images/图层2.png" alt="此图片暂时无法显示" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
.fifty_five {
  width: 100%;
  height: 556px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

.forty_left {
  width: 50%;
  height: 556px;
  position: relative;
}
.center_content {
  width: 1%;
  height: 500px;
  background-color: #bfbfbf;
  position: relative;
}
.forty_right {
  width: 49%;
  height: 556px;
  position: relative;
}

.forty_right > p {
  width: 399px;
  height: 205px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 182px;
  top: -90px;
}
.forty_right > img {
  width: 400px;
  height: 260px;
  position: absolute;
  left: 34%;
  bottom: 16%;
}
.left_bootom {
  width: 100px;
  height: 10px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: 0%;
  right: 10%;
}
.forty_left > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 27%;
  bottom: 5%;
}

.sphere {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffad60;
  position: absolute;
  left: -19px;
  top: 105%;
}
</style>
