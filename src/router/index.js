import Vue from 'vue';
import Router from 'vue-router';

import Page1 from '@/views/shuiguo/page1';
import Page2 from '@/views/shuiguo/page2';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: '页面1',
      meta: {
        title: '页面1',
      },
      path: '/',
      component: Page1,
    },
    {
      name: '页面1',
      meta: {
        title: '页面1',
      },
      path: '/page1',
      component: Page1,
    },
    {
      name: '页面2',
      meta: {
        title: '页面2',
      },
      path: '/page2',
      component: Page2,
    },
  ],
});
