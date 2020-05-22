<template>
  <div id="laingqin_container">
    <!-- 详情页区域 -->
    <div class="edition_heart">
      <!-- 头部header区域 -->
      <div class="edition_header">
        <p>朗勤心选App</p>
      </div>
      <!-- 中间详情简介区域 -->
      <div class="edition_details">
        <p>朗勤心选是八号地为手机用户推出的满足生活消费和线上购物需求的软件,为消费者提供原产地甄选的健康食材和品质商品,致力于为消费者提供迅速、便捷的线上线下一体式购物体验。</p>
      </div>
      <!-- 图片 -->
      <div class="img_container">
        <!-- 手机图片切换区域 -->
        <div class="mobile">
          <img src="../assets/images/mobilecase.png" alt="此图片无法显示" />
        </div>
        <!-- 右边icon区域 -->
        <!-- <div class="icon_content">
          <div class="icon_title" v-for="(item,index) in imgUrl.data" :key="index">
            <img :src="item.icon" alt="此图片暂时无法显示" />
            <p @mouseenter="showtime(index)">{{item.title}}</p>
          </div>
        </div>-->
        <div class="title_icon">
          <ul class="title_swiper">
            <li
              class="title_child"
              v-for="(item,index) in imgUrl.data"
              :key="index"
              @mouseenter="showtime(index)"
            >
              <img :src="item.icon" alt="此图片暂时无法显示" />
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
        <img class="imgSize" :src="imgUrl.data[imgSrc].img" alt="此图片暂时无法显示" />
      </div>
      <!-- 底部隔阂区域 -->
      <div class="white_content"></div>
    </div>
    <!-- 线上线下急速配送 -->
    <div class="delivery_container">
      <div class="jiange"></div>
      <div class="delivery_header">
        <p>线上线下急速配送</p>
      </div>
      <div class="map_content">
        <div class="map_detail">
          <img class="img_setting" src="../assets/images/map.png" alt="此图片暂时无法显示" />
        </div>
        <div class="explain">
          <div class="distributed">
            <img class="img_three" src="../assets/images/store.png" alt="此图片无法显示" />
            <p class="first">门店及库房数</p>
            <p class="last">400+</p>
          </div>
          <div class="distributed">
            <img class="img_one" src="../assets/images/users.png" alt="此图片无法显示" />
            <p class="first">用户量</p>
            <p class="last">60万+</p>
          </div>
          <div class="distributed">
            <img class="img_two" src="../assets/images/chengshijianshe.png" alt="此图片无法显示" />
            <p class="first">地级市数</p>
            <p class="last">80+</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 收银系统页面 -->
    <Cash></Cash>
    <!-- 四张图片区域 -->
    <four></four>
    <!-- 自营产品区域 -->
    <proprietary></proprietary>
    <!-- 物流区域 -->
    <logistics></logistics>
    <!-- 乳产品 -->
    <dairy></dairy>
  </div>
</template>

<script type="text/ecmascript-6">
import Cash from "./Cash";
import four from "./four_pictures";
import proprietary from "./Proprietary_goods";
import logistics from "./Logistics_detail";
import dairy from "./Dairy_Factory";
import imgData from "../assets/data/imgdata.json";
export default {
  components: {
    Cash,
    four,
    proprietary,
    logistics,
    dairy,
    imgSerialnumber: 0
  },
  data() {
    return {
      imageDataSource: [
        { id: 1, img: require("../assets/images/main.png") },
        { id: 2, img: require("../assets/images/activity.png") },
        { id: 3, img: require("../assets/images/mine.png") },
        { id: 4, img: require("../assets/images/classify.png") },
        { id: 5, img: require("../assets/images/shopping_cart.png") },
        { id: 6, img: require("../assets/images/coupon.png") }
      ],
      imgUrl: [], //图片的地址
      imgSrc: 0
    };
  },
  created() {
    this.imgUrl = imgData;
    console.log("图片的地址是:", this.imgUrl);
  },
  methods: {
    showtime(index) {
      this.imgSrc = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
#laingqin_container {
  width: 100%;
  overflow: hidden;

  .edition_heart {
    width: 100%;
    position: relative;

    .edition_header {
      margin-top: 70px;

      >p {
        margin-left: 558px;
        font-weight: 400;
        color: #000000;
        font-size: 50px;
        font-family: 'SourceHanSansCN-Regular';
      }
    }

    .edition_details {
      margin-top 5px
      width: 831px;
      margin-left: 558px;
      >p {
        font-size: 33.33px;
        font-weight: 400;
        font-family: 'SourceHanSansCN-Regular';
        color: #000000;
        line-height 50px
      }
    }

    .img_container {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;

      .mobile {
        width: 317px;
        height: 680px;
        margin-left: 570px;

        >img {
          width: 317px;
          height: 680px;
        }
      }

      .icon_content {
        margin-right: 660px;
        line-height: 96px;

        .icon_title {
          width: 190px;
          display: flex;
          align-items: center;
          background-color: red;
          display: flex;
          justify-content: space-between;

          >img {
            width: 41px;
            height: 46px;
          }

          >p {
            font-size: 33px;
            font-family: 'Source Han Sans CN';
            font-weight: 500;
            color: rgba(125, 125, 125, 1);
            text-align: left;
          }
        }
      }
    }

    .white_content {
      width: 100%;
      height: 50px;
      background-color: #fff;
    }
  }

  .delivery_container {
    width: 100%;
    height: 600px;
    background-color: #FFAD60;

    .jiange {
      width: 100%;
      height: 36px;
    }

    .delivery_header {
      text-align: center;

      >p {
        font-size: 50px;
        font-family: 'SourceHanSansCN-Regular';
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    .map_content {
      display: flex;
      justify-content: space-between;

      .map_detail {
        margin-top: 20px;
        margin-left: 350px;
      }

      .explain {
        margin-top: 150px;
        margin-right: 180px;
        display: flex;
        justify-content: space-between;

        .distributed {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 60px;
          margin-right: 60px;
          display: flex;
          align-items: center;

          >.img_three {
            width: 59px;
            height: 59px;
          }

          .first {
            font-family: 'SourceHanSansCN-Regular';
            font-weight: 400;
            font-size: 20.83px;
            color: #fff;
          }

          .last {
            font-family: 'SourceHanSansCN-Medium';
            font-size: 33.33px;
            color: #fff;
            font-size: 33px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}

.title_icon {
  background-color: #323232;
  margin-right: 628px;
}

.title_swiper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.title_child {
  width: 210px;
  height: 51px;
  display: flex;
  align-items: center;
}
.title_child:hover>img{
  transform scale(1.5)
  background-color red
} 
.title_child:hover>p{
  transform scale(1.1)
  color red
}
.title_child >img{
  transition: all 0.5s;
}
.title_child >p{
  transition: all 0.5s;
}

#box:hover>img {
  transform: scale(1.2);
}

.title_child >p {
  font-size: 33px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(125, 125, 125, 1);
}

.title_child:nth-child(1) > img {
  width: 51px;
  height: 51px;
}

.title_child:nth-child(2) > img {
  width: 42px;
  height: 42px;
}

.title_child:nth-child(3) > img {
  width: 52px;
  height: 63px;
}

.title_child:nth-child(4) > img {
  width: 43px;
  height: 38px;
}

.title_child:nth-child(5) > img {
  width: 51px;
  height: 51px;
}

.title_child:nth-child(6) > img {
  width: 46px;
  height: 46px;
}

.delivery_container >.map_content >.map_detail > .img_setting {
  width: 562px;
  height: 462px;
}

.imgSize {
  width: 280px;
  height: 660px;
  position: absolute;
  left: 30.5%;
  top: 30%;
  border-radius: 5%;
}

.icon_content >.icon_title p:hover {
  color: #FFAD60;
}

.explain >.distributed >.img_one {
  width: 77px;
  height: 58px;
  display: block;
}

.explain >.distributed >.img_two {
  width: 63px;
  height: 61px;
  display: block;
}
</style>
