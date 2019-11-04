import Vue from 'vue'
import App from './App.vue'
import router from '../router/router'
import "../src/assets/style.css"
Vue.use(router);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
