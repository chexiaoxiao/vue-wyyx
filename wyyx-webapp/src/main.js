import Vue from 'vue'
import App from './App.vue'
import router from '../router/router'
import "../src/assets/style.css"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.use(router);
Vue.use(swiper);
Vue.use(swiperSlide);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
