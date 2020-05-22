<template>
  <div id="relaxed_container">
    <div class="relaxed_header">
      <p>十分钟轻松上手的收银系统</p>
    </div>
    <div class="relaxed_main">
      <div class="left_img">
        <img src="../assets/images/收银系统-带屏幕.png" alt />
      </div>
      <div class="right_img">
        <div class="right_text">
          <div class="text_header">
            <img src="../assets/images/对号.png" alt />
            <p>界面简单,操作便捷</p>
          </div>
          <div class="text_bottom">
            <p>十分钟培训,店员轻松上手</p>
          </div>
        </div>
        <div class="right_text">
          <div class="text_header">
            <img src="../assets/images/对号.png" alt />
            <p>支持全场景支付</p>
          </div>
          <div class="text_bottom">
            <p>对接微信、支付宝,银行卡支付,快速入账</p>
          </div>
        </div>
        <div class="right_text">
          <div class="text_header">
            <img src="../assets/images/对号.png" alt />
            <p>智能功能,高效工作</p>
          </div>
          <div class="text_bottom">
            <p>折扣,会员优惠,交班,快速设置,自动运算</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script> 

<style lang="less" scoped>
#relaxed_container {
  width: 100%;
  height: 800px;
  background-color: #fff;
}
.relaxed_header {
  width: 100%;
  height: 138px;
  position: relative;
}
.relaxed_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
}
.relaxed_main {
  width: 100%;
  height: 722px;
  padding: 101px 401px 114px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.relaxed_main .left_img {
  width: 631px;
  height: 507px;
}
.relaxed_main .left_img >img{
  width: 631px;
  height: 507px;
}
.right_img > .text_header {
  width: 390px;
}
.right_img .right_text {
  margin-top: 65px;
}
.right_img .right_text > .text_header {
  display: flex;
  line-height: 29px;
}
.right_img .right_text > .text_header > img {
  width: 30px;
  height: 29px;
}
.right_img .right_text > .text_header > p {
  font-size: 32px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  margin-left: 2px;
}
.right_img .right_text > .text_bottom > p {
  margin-left: 35px;
  margin-top: 23px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 177, 104, 1);
}
</style>
