<template>
  <div id="four_container">
    <div class="four_swiper">
      <div class="four_alone">
        <div class="alone_top">
          <img src="../assets/images/register.png" alt />
        </div>
        <div class="alone_bottom">
          <p>触屏双面收银机</p>
        </div>
      </div>
      <div class="four_alone">
        <div class="alone_top">
          <img src="../assets/images/dayinji.png" alt />
        </div>
        <div class="alone_bottom">
          <p>热敏小票打印机</p>
        </div>
      </div>
      <div class="four_alone">
        <div class="alone_top">
          <img src="../assets/images/till.png" alt />
        </div>
        <div class="alone_bottom">
          <p>5格3档收钱箱</p>
        </div>
      </div>
      <div class="four_alone">
        <div class="alone_top">
          <img src="../assets/images/scanning.png" alt />
        </div>
        <div class="alone_bottom">
          <p>二维码支付扫码枪</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#four_container {
  width: 100%;
}
.four_swiper {
  width: 100%;
  height: 460px;
  padding: 0px 412px 162px 412px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.four_alone {
  width: 220px;
  height: 300px;
  background-color: red;
}
.alone_top {
  width: 220px;
  height: 50%;
  background-color: #ededed;
  padding: 18px 14px 12px 19px;
  box-sizing: border-box;
}
.alone_top > img {
  width: 187px;
  height: 120px;
}
.alone_bottom {
  width: 220px;
  height: 50%;
  background-color: #ffad60;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.alone_bottom > p {
  width: 200px;
  height: 25px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
