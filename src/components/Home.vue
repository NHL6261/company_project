<template>
  <el-col :span="24">
    <div id="banner_content">
      <!-- header区域 -->
      <div class="page_list">
        <!-- 列表区域 -->
        <div class="page_header">
          <!-- 图片区域 -->
          <div class="img_content">
            <img src="../assets/images/logo.png" alt />
          </div>
        </div>
        <!-- 八号地图片区域 -->
        <div class="img_container">
          <img src="../assets/images/logo_text.png" alt />
        </div>
        <!-- 种子的魅力 -->
        <div class="seed">
          <span>源 于 1 颗 种 子 的 魄 力</span>
        </div>
        <!-- Android and Ios  -->
        <div class="btn_setting">
          <div class="btn_download">
            <button>
              <div class="btn_title">
                <img src="../assets/images/anzhuo.png" alt="此图片无法显示" />
                <span>安卓下载</span>
              </div>
              <!-- 鼠标移入显示区域 -->
              <div class="qr_show1">
                <img src="../assets/images/anzhuo1.png" alt />
              </div>
            </button>
            <button>
              <div class="btn_title">
                <img src="../assets/images/iconfontapple2.png" alt="此图片无法显示" />
                <span>iOS下载</span>
              </div>
              <!-- 鼠标移入显示区域 -->
              <div class="qr_show2">
                <img src="../assets/images/ios1.png" alt />
              </div>
            </button>
          </div>
        </div>
        <!-- 新用户区域 -->
        <div class="new_user">
          <div class="user_title">
            <p>新 用 户 可 享 100 减 30</p>
          </div>
        </div>
        <!-- 天天好惊喜 -->
        <div class="surprise">
          <div class="surprise_content">
            <p>App每日享专属特价商品 天天好惊喜</p>
          </div>
        </div>
      </div>
      <!-- 中间良勤心选App区域 -->
      <Liangqin></Liangqin>
      <Footer></Footer>
    </div>
  </el-col>
</template>

<script type="text/ecmascript-6">
import Footer from "./Footer";
import Liangqin from "./Liangqin";
export default {
  components: {
    Footer,
    Liangqin
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>#banner_content {
  width: 100%;
  overflow: hidden;

  .page_list {
    width: 100%;
    height: 650px;
    background: url('../assets/images/banner.png');
    background-repeat: no-repeat;
    background-size: 100% 650px;

    .page_header {
      width: 100%;
      height: 104px;
      padding-left: 373px;
      padding-right: 355px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .img_content {
        width: 108px;
        height: 60px;
        >img {
          width: 100%;
          height: 100%;
          margin-top: 4px;
        }
      }

      .list_content {
        margin-top: 25px;
        box-sizing: border-box;

        .swiper_content {
          display: flex;
          justify-content: space-between;

          >li {
            font-size: 21px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: #FFFFFF;
            margin-left: 24px;
            cursor: pointer;
          }

          .cancel {
            margin-left: 0px;
          }
        }
      }
    }

    .img_container {
      width: 100%;

      >img {
        margin-left: 489px;
        width: 551px;
        height: 129px;
      }
    }

    .seed {
      width: 100%;

      >span {
        display: block;
        font-size: 66.67px;
        color: #FFFFFF;
        font-family: 'SourceHanSansCN-Regular';
        font-weight: 400;
        margin-left: 500px;
      }
    }

    .btn_setting {
      margin-left: 497px;
      margin-top: 47px;
      position: relative;

      .btn_download {
        width: 447px;
        height: 50px;
        display: flex;
        justify-content: space-between;

        >button:nth-child(1), >button:nth-child(2) {
          width: 200px;
          height: 50px;
          margin: 0;
          padding: 0;
          border: 1px solid transparent;
          outline: none;
          border-radius: 5px;
          background-color: #FFAD60;

          .btn_title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            margin-bottom: 2px;

            >img {
              width: 28px;
              height: 31px;
              margin-left: 28px;
            }

            >span {
              font-size: 25px;
              font-family: 'SourceHanSansCN-Normal';
              font-weight: Normal;
              color: #fff;
              margin-right: 25px;
            }
          }

          .qr_show1, .qr_show2 {
            position: absolute;
            top: 60px;
            display: none;
            z-index: 10;
          }
        }
      }
    }

    .qr_show1 >img {
      width: 200px;
      height: 200px;
    }

    .qr_show2 >img {
      width: 200px;
      height: 200px;
    }

    .btn_setting >.btn_download >button:nth-child(1):hover .qr_show1 {
      display: block;
    }

    .btn_setting >.btn_download >button:nth-child(2):hover .qr_show2 {
      display: block;
    }

    .new_user {
      width: 100%;
      height: 60px;
      margin: 90px 638px 80px 646px;
      position: relative;

      .user_title {
        width: 636px;
        height: 60px;
        background-color: #FFFFFF;
        border-radius: 35px;
        text-align: center;
        line-height: 60px;

        >p {
          color: #FFAD60;
          cursor: pointer;
          font-size: 42px;
          font-family: 'Source Han Sans CN';
          font-weight: bold;
          color: rgba(255, 173, 96, 1);
        }
      }
    }

    .surprise {
      .surprise_content {
        width: 100%;
        height: 37px;
        position: relative;

        >p {
          text-align: center;
          font-weight: 400;
          color: #FFFFFF;
          font-size: 33px;
          font-family: 'Source Han Sans CN';
          color: rgba(255, 255, 255, 1);
          position: absolute;
          left: 36%;
          bottom: 166%;
        }
      }
    }
  }
}
</style>
