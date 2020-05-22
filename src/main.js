import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import './plugins/iview.js';
// 适配 
import './assets/lib-flexible/flexible'
import './assets/css/global.css'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
