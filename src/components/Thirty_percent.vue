<template>
  <div class="tenpercent">
    <div class="tenpercent_left">
      <p>八号地旗下的朗勤心选App安卓1.0公测版上架安卓商城</p>
    </div>
    <div class="center_content">
      <div class="sphere"></div>
    </div>
    <div class="tenpercent_right">
      <div class="right_bootom"></div>
      <p>2019.05.16</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#thirty {
  width: 100%;
  height: 300px;
  background-color: red;
  margin-top: 20px;
}
.tenpercent {
  width: 100%;
  height: 229px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.tenpercent_left {
  width: 50%;
  height: 229px;
  position: relative;
}
.tenpercent_left > p {
  width: 450px;
  height: 58px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  right: 182px;
  top: 0;
  text-align: right;
}
.center_content {
  width: 1%;
  height: 140px;
  background-color: #bfbfbf;
  position: relative;
}
.tenpercent_right {
  width: 49%;
  height: 229px;
  position: relative;
}
.tenpercent_right > p {
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(96, 96, 96, 1);
  position: absolute;
  right: 27%;
  bottom: 13%;
}
.right_bootom {
  width: 100px;
  height: 10px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: 7%;
  left: 10%;
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
