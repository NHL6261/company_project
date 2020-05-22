import Vue from "vue";
import VueRouter from "vue-router";
const Home = resolve => require(["../components/Home.vue"], resolve);
const Heart = resolve => require(["../components/Heart_selection.vue"], resolve);
const Cash = resolve => require(["../components/Cash_register.vue"], resolve);
const Self = resolve => require(["../components/Self_employed.vue"], resolve);
const Join = resolve => require(["../components/Join_us.vue"], resolve);
const About = resolve => require(["../components/About_us.vue"], resolve);
const B2Bpages = resolve => require(["../components/B2Bpages.vue"], resolve);
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/heart",
    name: "Heart",
    component: Heart,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/cash",
    name: Cash,
    component: Cash,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/self",
    name: Self,
    component: Self,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/join",
    component: Join,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/about",
    name: About,
    component: About,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/b2bpages",
    component: B2Bpages,
    meta: {
      isShowList: true
    }
  },
  {
    path: "/",
    redirect: "/home"
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
