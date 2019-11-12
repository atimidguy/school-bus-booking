import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

// css reset
import '@/assets/styles/reset.scss';
import '@/assets/styles/border.scss';
import store from './store';

// eslint-disable-next-line
import ElementUI from "./plugins/element.js";
Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
