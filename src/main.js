import Vue from 'vue';
import App from './App.vue';
import router from './router';

// css reset
import '@/assets/styles/reset.scss';
import '@/assets/styles/border.scss';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
