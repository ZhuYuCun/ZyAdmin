import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/main.vue'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router