<template>
  <div id="List_content">
    <div class="header_container">
      <ul class="swipper">
        <li :class="{ active: $route.path === '/home' }" @click="goPath('/home')">首页</li>
        <li :class="{ active: $route.path === '/heart' }" @click="goPath('/heart')">
          心选App
          <div class="hover_show"></div>
        </li>
        <li :class="{ active: $route.path === '/cash' }" @click="goPath('/cash')">
          云服务收银系统
          <div class="hover_show"></div>
        </li>
        <li :class="{ active: $route.path === '/self' }" @click="goPath('/self')">
          自营产品
          <div class="hover_show"></div>
        </li>
        <li :class="{ active: $route.path === '/join' }" @click="goPath('/join')">
          加入我们
          <div class="hover_show"></div>
        </li>
        <li :class="{ active: $route.path === '/about' }" @click="goPath('/about')">
          关于我们
          <div class="hover_show"></div>
        </li>
      </ul>
      <div class="hover_container">
        <div class="hover_showtimer" >
          <p>员工招聘</p>
          <p @click="goPath('/b2bpages')">B2B代理</p>
        </div>
      </div>
      <div :class="{ test_data: $route.path === '/b2bpages' }"  >

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      show_container: false
    };
  },
  methods: {
    goPath(path) {
      path !== this.$route.path && this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
#List_content {
  .header_container {
    position: absolute;
    right: 355px;
    top: 25px;
  }

  .swipper {
    width: 100%;
    display: flex;
    position: relative;

    >li {
      font-size: 21px;
      font-family: 'MicrosoftYaHei';
      font-weight: 400;
      color: #FFF;
      margin-left: 24px;
      cursor: pointer;
      line-height: 40px;
      position: relative;

      &.active {
        border-radius: 2px;
        border-bottom: 4px solid #ffad60;
      }
    }

    .first_title {
      margin-left: 0;
    }
  }

  .hover_show {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #ffad60;
    position: absolute;
    left: 0;
    top: 39px;
    z-index: 500;
    visibility: hidden;
    border-radius: 2px;
  }

  .swipper >li:hover .hover_show {
    visibility: visible;
  }

  .header_container .show_container {
    width: 85px;
    height: 84px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0 4px 4px 4px;
    position: absolute;
    left: 1%;
    top: 120%;
  }

  .container_show .b2b_region >p {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 173, 96, 1);
    width: 100%;
    height: 40px;
    background-color: yellow;
  }

  .container_show .hiring >p {
    width: 100%;
    height: 40px;
    background-color: red;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 35, 35, 1);
  }

  .hover_container {
    width: 90px;
    height: 40px;
    position: absolute;
    right: 15.5%;
    top: 57%;
    cursor: pointer;
  }

  .hover_showtimer {
    width: 96px;
    height: 84px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    right: -3%;
    top: 50%;
    padding: 8px 18px 15px 15px;
    box-sizing: border-box;
    visibility: hidden;
  }

  .hover_showtimer >p:nth-child(1) {
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffbc7f;
  }

  .hover_showtimer >p:nth-child(2) {
    display: inline-block;
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 35, 35, 1);
    line-height: 40px;
  }

  .header_container >.hover_container:hover .hover_showtimer {
    visibility: visible;
  }
  .test_data{
    width 85px
    height 5px
    border-radius: 2px;
    border-bottom: 4px solid #ffad60;
    position absolute
    right 16%
    top 96%
  }
}
</style>
