<template>
  <div id="operated_container">
      <div class="operated_header">
          <span>八号地自营商品</span>
      </div>
      <!-- 八号地自营详情页 -->
      <div class="operated_title">
         <span>八号地旗下目前拥有5个系列的自主产品；从最早的蜂蜜系列到最受大家欢迎的八号地豆浆粉。八号地一直坚信好吃而健康的食品才会受到消费者的青睐。</span>
      </div>
      <div class="img_detail">
          <div class="left_img">
              <div class="header_img">
                  <img src="../assets/images/BF5814C7-A5D5-4773-8330-495771114DF2.png" alt="">
              </div>
              <div class="main_img">
                  <img src="../assets/images/doujiang.png" alt="">
                  <img src="../assets/images/blueberry.png" alt="">
                  <img src="../assets/images/hawthorn.png" alt="">
                  <img src="../assets/images/honey.png" alt="">
              </div>
          </div>    
          <div class="right_img">
              <div class="jump">
                  <button>
                      <a href="http://www.baidu.com">点我进百度</a>
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" scoped>
#operated_container
    width 100%
    height 940px
    background-color #EDEDED
    .operated_header
        width 100%
        height 98px
        background-color pink 
        text-align center
        line-height 103px
        >span 
            display block
            font-size 50px
            font-weight 400
            font-family "SourceHanSansCN-Regular"
            color:rgba(68,68,68,1)
    .operated_title
        width 100%
        height 132px
        background-color yellow
        display flex
        justify-content center
        text-align center
        >span 
            display block
            width 848px
            height 132px
            background-color red
            font-size:33px
            font-family:"SourceHanSansCN-Regular"
            font-weight:400
            color:rgba(68,68,68,1)
            line-height:40px
    .img_detail
        width 100%
        height 680px
        background-color #eee
        padding 16px 348px 35px 349px
        box-sizing border-box
        .left_img
            width 680px
            height 280px
            .header_img
                width 680px
                height 280px
                >img 
                    width 680px
                    height 280px
            .main_img
                width 674px
                height 347px
                margin-top 40px
                display flex
                justify-content space-between
                flex-direction: row;
                flex-wrap: wrap;
                >img 
                    width 320px
                    height 140px


</style>
