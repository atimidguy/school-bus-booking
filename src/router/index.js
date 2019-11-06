import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import(/* webpackChunkName: "group-foo" */ '../views/Ticket.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "group-foo" */ '../views/Login.vue'),
  },
  {
    path: '/outplogin',
    name: 'outplogin',
    component: () => import(/* webpackChunkName: "group-foo" */ '../views/Outplogin.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
