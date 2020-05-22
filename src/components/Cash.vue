<template>
  <div id="cash_container">
      <div class="jiange"></div>
      <div class="cash_header">
          <p>云服务收银系统</p>
      </div>
      <div class="jiange"></div>
      <div class="warehouse">
          <img src="../assets/images/warehouse.png" alt="此图片暂时无法显示">
      </div>
      <div class="warehouse_text">
          <p class="warehouse_text1">岗位分配</p>
          <p class="warehouse_text2">供应链</p>
          <p class="warehouse_text3">质量审核</p>
      </div>
      <div class="jiange1"></div>
      <div class="center_content">
          <div class="cloud_service">
                <div class="cloud_img"> 
                    <img src="../assets/images/cloud.png" alt="此图片暂时无法显示">
                </div>
                <div class="cloud_text">
                    <p>权限管理</p>
                    <p>即时更新</p>
                    <p>数据安全备份</p>
                </div>
          </div>
          <div class="footer_content">
            <div class="footer_left">
                <img src="../assets/images/store1.png" alt="">
            </div>
            <div class="left_text">
                <p>全种类支付</p>
                <p>触屏收银</p>
                <p>营销</p>
                <p>会员管理</p>
            </div>
            <div class="container_content">
                <p>无缝连接相互引流</p>
            </div>
            <div class="footer_right">
                <img src="../assets/images/online market.png" alt="">
            </div>
          </div>
          <div class="right_text">
            <p>快递接单</p>
            <p>商城</p>
            <p>大批量购进</p>
            <p>配送</p>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {
    },
  }
</script>

<style lang="stylus" scoped>
#cash_container
    width 100%
    height 1000px
    background-color #fff
    .jiange
        width 100%
        height 20px
    .cash_header
        width 100%
        margin-left 559px
        >p
            font-size 50px
            color rgba(68,68,68,1);
            font-weight 400
            font-family "SourceHanSansCN-Regular"
    .warehouse
        width 100%
        height 185px
        margin-top 20px
        text-align center
        >img 
            width 331px
            height 185px
    .warehouse_text
        position relative
        background-color red
        .warehouse_text1,.warehouse_text2,.warehouse_text3
            font-size 25px
            font-family "SourceHanSansCN-Regular"
            font-weight 400
            color:rgba(125,125,125,1)
        .warehouse_text1
            position absolute
            left 1130px
            top -160px
        .warehouse_text2
            position absolute
            left 50%
            top 20px
            transform translate(-50%)
        .warehouse_text3
            position absolute
            left 37%
            top -100px
            transform translate(-37%)
    .jiange1
        width 100%
        height 40px
    .center_content
        width 100%
        height 1110px
        margin-top 57px
        position relative
        .cloud_service
            width 100%
            height 280px
            text-align center
            position relative
            .cloud_img
                width 521px
                height 280px
                margin 0 auto
                >img 
                    width 521px
                    height 280p
            .cloud_text
                >p:nth-child(1)
                    position absolute
                    left 40%
                    top -30px
                    transform translate(-50%)
                    width:120px;
                    font-size:25px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(125,125,125,1);
                >p:nth-child(2)
                    position absolute
                    left 30%
                    top 50%
                    transform translate(-30%)
                    width:120px;
                    font-size:25px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(125,125,125,1);
                >p:nth-child(3)
                    position absolute
                    right 25%
                    top 25%
                    transform translate(-25%,25%)
                    width:160px;
                    font-size:25px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(125,125,125,1);
        .footer_content
            width 100%
            height 260px
            padding 74px 407px 0 411px
            box-sizing border-box
            display flex
            justify-content space-between
            position relative
            .footer_left
                width 331px
                height 185px
                >img 
                   width 331px
                   height 185px
            .left_text >p:nth-child(1)
                width:125px;
                height:25px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                left 23%
                top 35px
                transform translate(-23%)
            .left_text >p:nth-child(2)
                width:125px;
                height:25px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                left 35%
                top 35px
                transform translate(-23%)
            .left_text >p:nth-child(3)
                width:125px;
                height:25px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                left  42%
                top 57%
                transform translate(-23%)
            .left_text >p:nth-child(4)
                width:125px;
                height:25px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                left  20%
                top 98%
                transform translate(-23%)
            .container_content
                >p
                    width:220px;
                    font-size:25px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(125,125,125,1);
                    position absolute
                    left 50%
                    top 85%
                    transform translate(-50%,-75%)
            .footer_right
                width 331px
                height 185px
                >img 
                   width 331px
                   height 185px
        .right_text 
            >p:nth-child(1)
                width:100px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                right 35%
                top 31%
            >p:nth-child(2)
                width:60px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                right 24%
                top 28%
            >p:nth-child(3)
                width:150px;
                height:25px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                right 33%
                top 49%
            >p:nth-child(4)
                width:150px;
                height:25px;
                font-size:25px;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(125,125,125,1);
                position absolute
                right 13%
                top 47%
    .four_pictures
        width 100%
        height 460px
        background-color red
</style>
