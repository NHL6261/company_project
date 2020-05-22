<template>
  <div id="comprehensive_container">
    <div class="comprehenive_header">
      <p>综合零售系统</p>
    </div>
    <div class="comprehenive_bottom">
      <div class="left_img">
        <img src="../assets/images/后台系统.png" alt />
      </div>
      <div class="right_content">
        <div class="right_content_header">
          <p>综合零售系统具有强大的后台管理功能，连通线上线下，提升管理效率，达到商品，库存，会员，财务等全面数字化管理，更方便公司的统一精细化管理</p>
        </div>
        <div class="jiange0"></div>
        <div class="right_content_main">
          <div class="icon_title">
            <img src="../assets/images/商品管理.png" alt />
            <span>商品管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/库存管理.png" alt />
            <span>库存管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/采购管理.png" alt />
            <span>采购管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/销售管理.png" alt />
            <span>销售管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/促销管理.png" alt />
            <span>促销管理</span>
          </div>
        </div>
        <div class="jiange0"></div>
        <div class="right_content_main">
          <div class="icon_title">
            <img src="../assets/images/财务i管理.png" alt />
            <span>财务管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/会员管理.png" alt />
            <span>会员管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/采购管理.png" alt />
            <span>商品管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/系统管理.png" alt />
            <span>系统管理</span>
          </div>
          <div class="icon_title">
            <img src="../assets/images/广告管理.png" alt />
            <span>广告管理</span>
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
#comprehensive_container {
  width: 100%;
  height: 692px;
  background-color: #fff7ef;
}
.comprehenive_header {
  width: 100%;
  height: 134px;
  text-align: center;
}
.comprehenive_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  padding-top: 83px;
}
.comprehenive_bottom {
  width: 100%;
  height: 385px;
  margin-top: 96px;
  padding: 0 324px 77px 276px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.comprehenive_bottom .left_img {
  width: 688px;
  height: 385px;
}
.comprehenive_bottom .left_img > img {
  width: 688px;
  height: 385px;
}
.comprehenive_bottom .right_content {
  width: 541px;
  height: 245px;
  display: flex;
  flex-direction: column;
}
.comprehenive_bottom > .right_content > .right_content_header {
  width: 541px;
  height: 66px;
}
.comprehenive_bottom > .right_content.right_content_header > p {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 24px;
}
.comprehenive_bottom > .right_content > .right_content_main {
  width: 541px;
  height: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title {
  width: 56px;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 35px;
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title img{
  width: 43px;
  height: 51px;
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title span{
  height: 12px;
}
.jiange0 {
  width: 541px;
  height: 50px;
}
</style>
