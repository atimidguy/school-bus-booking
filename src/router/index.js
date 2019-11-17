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
    component: () => import('../views/Ticket.vue'),
  },
  {
    path: '/ticket/:from - :to',
    component: () => import('@/components/ticket/TicketDetail.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/ticket/TicketMoreDetail.vue'),
      },
      {
        path: ':id',
        component: () => import('@/components/ticket/TicketMoreDetail.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/outplogin',
    name: 'outplogin',
    component: () => import('../views/Outplogin.vue'),
  },
];

const router = new VueRouter({
  routes,
  // linkActiveClass: 'active',
});

// router.beforeEach((to, from, next) => {
//   if (from.path === `${to.path}/${to.params.id}`) {
//   }
//   next();
// });

export default router;
