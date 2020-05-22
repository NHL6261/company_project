<template>
  <div id="delivery">
    <div class="delivery_header">
      <p>手机APP助力员工轻松配送</p>
    </div>
    <div class="delivery_main">
      <div class="delivery_left">
        <div class="left_text">
          <p>便捷抢单</p>
          <p>高效抢单，不错过任何生意</p>
        </div>
        <div class="left_text">
          <p>抢单结算</p>
          <p>抢单商分清晰可见</p>
        </div>
        <div class="left_text">
          <p>支持放弃订单</p>
          <p>无法配送，随时放弃</p>
        </div>
      </div>
      <div class="delivery_right">
        <img src="../assets/images/抢单APP.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#delivery {
  width: 100%;
  height: 996px;
  background-image: url("../assets/images/配送-背景.png");
  background-repeat: no-repeat;
}
.delivery_header {
  width: 100%;
  height: 151px;
  position: relative;
}
.delivery_header > p {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.delivery_main {
  width: 100%;
  height: 845px;
  padding: 143px 323px 0px 336px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.delivery_left{
  width: 216px;
  height: 408px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 90px;
}

.left_text {
  width: 216px;
  height: 136px;
  line-height: 50px;
}
.left_text > p:nth-child(1) {
  font-size: 32px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.left_text > p:nth-child(2) {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
}
.delivery_right{
  width: 712px;
  height: 591px;
}
.delivery_right >img{
  width: 712px;
  height: 591px;
}
</style>
