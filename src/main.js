import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import router from "./router";
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css';

import axios from 'axios';
Vue.prototype.$axios = axios;

import './mock/mock.js';
import store from "./store/store.js";

Vue.use(ElementUI).use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
