<template>
  <div id="Advantage_container">
    <!-- header -->
    <div class="Advantage_header">
      <p>WHY CHOOSE US</p>
    </div>
    <!-- content区域 -->
    <div class="Advantage_content">
      <p>我们的优势</p>
    </div>
    <!-- 底部优势列表区域 -->
    <div class="Advantage_list">
      <div class="offline">
        <div class="left_img">
          <img src="../assets/images/warehouse12.png" alt />
        </div>
        <div class="right_text">
          <p>线上线下300家门店库房</p>
        </div>
      </div>
      <div class="offline">
        <div class="left_img">
          <img src="../assets/images/electric bicycle.png" alt />
        </div>
        <div class="right_text">
          <p>门店会员专享专员配送</p>
        </div>
      </div>
      <div class="offline">
        <div class="left_img">
          <img src="../assets/images/customer_service.png" alt />
        </div>
        <div class="right_text">
          <p>专享心选客服服务热线</p>
        </div>
      </div>
      <div class="offline">
        <div class="left_img">
          <img src="../assets/images/invited.png" alt />
        </div>
        <div class="right_text">
          <p>推荐好友加入app兑现金</p>
        </div>
      </div>
      <div class="offline">
        <div class="left_img">
          <img src="../assets/images/icon_clock.png" alt />
        </div>
        <div class="right_text">
          <p>每日尽享限时特购产品</p>
        </div>
      </div>
      <div class="offline">
        <div class="left_img">
          <img src="../assets/images/coupon1.png" alt />
        </div>
        <div class="right_text">
          <p>登录送满减优惠券</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#Advantage_container {
  width: 100%;
  height: 770px;
  background-image: url("../assets/images/back_34.png");
  background-repeat: no-repeat;
}
.Advantage_header {
  width: 100%;
  height: 119px;
  text-align: center;
}
.Advantage_header > p {
  font-family: "SourceHanSansCN-Bold";
  font-weight: bold;
  font-size: 21px;
  color: #ffffff;
  line-height: 216px;
}
.Advantage_content {
  width: 100%;
  height: 48px;
  margin-top: 22px;
}
.Advantage_content > p {
  font-size: 50px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 43px;
  text-align: center;
}
.Advantage_list {
  width: 100%;
  height: 410px;
  margin-top: 64px;
  padding: 0 350px 0 346px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.Advantage_list > .offline {
  width: 380px;
  height: 160px;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
}
.Advantage_list > .offline > .left_img {
  width: 130px;
  height: 160px;
  background-color: #ffad60;
  padding: 63px 46px 62px 46px;
  box-sizing: border-box;
  position: relative;
}
.Advantage_list > .offline > .left_img > img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.Advantage_list > .offline > .right_text {
  width: 250px;
  height: 160px;
  padding: 53px 48px 51px 37px;
  box-sizing: border-box;
  background-color: #fff;
}
.Advantage_list > .offline > .right_text > p {
  width: 173px;
  height: 56px;
  font-size: 25px;
  font-family: "SourceHanSansCN-Normal";
  font-weight: 400;
  color:rgba(68,68,68,1);
  line-height: 33px;
}
</style>
