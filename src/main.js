// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.css';
import '@/styles/index.less';


import Vue from 'vue';
import Vuex from 'vuex';
import Mint from 'mint-ui';
import App from './App';
import store from './store';
import router from './router';
import message from './components/message';
import toast from './components/toast';
import headerTitle from './directives/titleInHtmlHeader/index';
// import './tools/rem';


Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(message);
Vue.use(toast);
Vue.use(headerTitle);
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
