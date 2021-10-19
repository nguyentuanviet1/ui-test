

import Vue from 'vue'
import VueRouter from 'vue-router';
// import Routes from './routes';
    
Vue.use(VueRouter);
    
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./components/User.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ],
});
    
export default router 