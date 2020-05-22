<template>
  <div id="proprietary_container">
    <div class="proprietary_header">
      <p>八号地自营商品</p>
    </div>
    <div class="proprietary_detail">
      <p>八号地旗下目前拥有5个系列的自主产品；从最早的蜂蜜系列到最受大家欢迎的八号地豆浆粉。八号地一直坚信好吃而健康的食品才会受到消费者的青睐。</p>
    </div>
    <div class="proprietary_botimg">
      <div class="left_img">
        <div class="left_header_img">
          <img src="../assets/images/ad.png" alt="此图片暂时无法显示" />
        </div>
        <div class="left_bottom_img">
          <img src="../assets/images/doujiang.png" alt="此图片暂时无法显示" />
          <img src="../assets/images/blueberry.png" alt="此图片暂时无法显示" />
          <img src="../assets/images/hawthorn.png" alt="此图片暂时无法显示" />
          <img src="../assets/images/honey.png" alt="此图片暂时无法显示" />
        </div>
      </div>
      <div class="right_button">
        <button>
          <div class="icon_container">
            <div class="left_icon">
              <img src="../assets/images/taobao_97.png" alt="此图片暂时无法显示" />
            </div>
            <div class="right_text">
              <a href="##" target="_blank">淘宝店铺</a>
            </div>
          </div>
        </button>
        <button>
          <div class="icon_container">
            <div class="left_icon">
              <img src="../assets/images/jingdong.png" alt="此图片暂时无法显示" />
            </div>
            <div class="right_text">
              <a href="https://www.jd.com" target="_blank">京东店铺</a>
            </div>
          </div>
        </button>
        <button>
          <div class="icon_container">
            <div class="left_icon">
              <img src="../assets/images/tianmaoxingxiang2.png" alt="此图片暂时无法显示" />
            </div>
            <div class="right_text">
              <a href="https://www.tmall.com" target="_blank">天猫商城</a>
            </div>
          </div>
        </button>
        <button>
          <div class="icon_container">
            <div class="left_icon">
              <img src="../assets/images/jingdong.png" alt="此图片暂时无法显示" />
            </div>
            <div class="right_text">
              <a href="https://www.jd.com" target="_blank">京东专卖</a>
            </div>
          </div>
        </button>
      </div>
      <div class="title">
        <p>*八号地电商代理运营</p>
      </div>
      <div class="title_two">
        <p>*八号地电商代理运营</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#proprietary_container {
  width: 100%;
  height: 940px;
  background-color: #ededed;
}
.proprietary_header {
  width: 100%;
  height: 98px;
  text-align: center;
  position: relative;
}
.proprietary_header > p {
  width: 360px;
  font-size: 50px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.proprietary_detail {
  width: 100%;
  height: 132px;
  text-align: center;
  position: relative;
}
.proprietary_detail > p {
  width: 848px;
  height: 132px;
  font-size: 33px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  line-height: 43px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.proprietary_botimg {
  width: 100%;
  height: 684px;
  padding: 16px 348px 34px 349px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.left_img {
  width: 680px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left_header_img {
  width: 680px;
  height: 280px;
}
.left_header_img > img {
  width: 680px;
  height: 280px;
}
.left_bottom_img {
  width: 680px;
  height: 318px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.left_bottom_img > img {
  width: 320px;
  height: 140px;
}
.right_button {
  width: 360px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.right_button > button {
  width: 360px;
  height: 120px;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  background-color: #fff;
}
.icon_container {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.icon_container > .left_icon {
  width: 109px;
  height: 120px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon_container > .left_icon > img {
  width: 72px;
  height: 72px;
}
.right_text {
  width: 222px;
  height: 120px;
  position: relative;
}
.right_text > a {
  font-size: 50px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 173, 96, 1);
  line-height: 115px;
}
.right_text > p {
  font-size: 8px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(191, 191, 191, 1);
  position: absolute;
  bottom: 0;
  left: 6%;
}
.title {
  width: 360px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: absolute;
  right: 18%;
  bottom: 30%;
}
.title_two {
  width: 360px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: absolute;
  right: 18%;
  bottom: 5%;
}
.title,.title_two > p {
  font-size: 8px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(191, 191, 191, 1);
}
</style>
