<template>
  <div id="lighting_container">
    <!-- header区域 -->
    <div class="lighting_header">
      <p>闪电发货</p>
    </div>
    <div class="jiange">
    </div>
    <!-- 详情区域 -->
    <div class="light_details">
      <p>心选App购买的产品，八号地后台会根据距离产品种类数量优先选择就近商店或库房配送；全国目前已有300多家线下门店，覆盖中国大多地级市。八号地愿为消费者第一时间送达我们的好产品！</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
};
</script>

<style lang="less" scoped>
#lighting_container {
  width: 100%;
  height: 600px;
  background-color: #fff;
}
.lighting_header {
  width: 100%;
  height: 189px;
  text-align: center;
}
.lighting_header > p {
  line-height: 297px;
  font-family: "SourceHanSansCN-Bold";
  font-weight: bold;
  font-size: 75px;
  color: rgba(35, 35, 35, 1);
}
.light_details {
  width: 100%;
  height: 240px;
  padding: 0 461px 0 464px;
  box-sizing: border-box;
}
.light_details > p {
  text-align: center;
  font-family: "SourceHanSansCN-Normal";
  font-weight: 400;
  font-size: 42px;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
}
.jiange{
    width: 100%;
    height: 55px;
    background-color: #fff;
}
.advantage{
    width: 100%;
    height: 770px;
    background-color: goldenrod;
}
</style>
