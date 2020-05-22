<template>
  <div id="process_container">
    <div class="process_header">
      <p>代理流程</p>
    </div>
    <div class="process_main">
        <img src="../assets/images/代理流程.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#process_container {
  width: 100%;
  height: 560px;
  background-color: #fff7ef;
}
.process_header {
  width: 100%;
  height: 134px;
  position: relative;
}
.process_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  position: absolute;
  left: 50%;
  bottom: 13px;
  transform: translate(-50%);
}
.process_main{
    width: 100%;
    height: 426px;
    padding: 100px 180px 169px 180px;
    box-sizing: border-box;
    line-height: 426px;
}
.process_main >img{
    width: 100%;
    height: 100%;
}
</style>
