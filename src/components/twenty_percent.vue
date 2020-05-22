<template>
  <div class="twenty">
    <div class="twenty_left">
      <div class="left_bootom"></div>
      <p>2020.04.18</p>
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="twenty_right">
      <p>八号地旗下的朗勤心选App苹果iOS版1.0公测版上架App Store</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
.twenty {
  width: 100%;
  height: 229px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.twenty_left {
  width: 50%;
  height: 229px;
  position: relative;
}
.center_content {
  width: 1%;
  height: 140px;
  background-color: #bfbfbf;
  position: relative;
}
.twenty_right {
  width: 49%;
  height: 229px;
  position: relative;
}
.twenty_right > p {
  width: 450px;
  height: 58px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 182px;
  top: 0;
}
.left_bootom {
  width: 100px;
  height: 10px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: 7%;
  right: 10%;
}
.twenty_left > p {
  width: 212px;
  height: 33px;
  font-size: 42px;
  font-family: " Source Han Sans CN";
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  left: 27%;
  bottom: 13%;
}

.sphere {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffad60;
  position: absolute;
  left: -19px;
  top: 130%;
}
</style>
