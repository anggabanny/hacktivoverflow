import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: []
  },
  {
    path: '/ask',
    name: 'question',
    component: () => import(/* webpackChunkName: "question" */ '../views/QuestionAsk.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../components/login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../components/register.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
