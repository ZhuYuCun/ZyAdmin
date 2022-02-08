import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/main.vue'
import Login from '../views/pages/login.vue'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router