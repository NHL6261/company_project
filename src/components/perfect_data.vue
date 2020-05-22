<template>
  <div id="perfect_container">
    <div class="perfect_header">
      <p>打造完整线上数据</p>
    </div>
    <!-- 图片区域 -->
    <div class="perfect_img">
        <img src="../assets/images/数据图形-pc.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#perfect_container {
  width: 100%;
  background-color: #fff;
}
.perfect_header {
  width: 100%;
  height: 138px;
  position: relative;
}
.perfect_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
}
.perfect_img{
    width: 100%;
    text-align: center;
    margin-top: 87px;
    margin-bottom: 103px;
    padding: 0 435px 0 440px;
    box-sizing: border-box;
}
.perfect_img >img{
  width: 100%;
  height: 100%;
}
</style>
