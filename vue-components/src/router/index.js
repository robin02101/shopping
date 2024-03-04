import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shopping01',
      name: 'shopping01',
      component: () => import('../views/shopping01.vue')
    },
    {
      path: '/shopping02',
      name: 'shopping02',
      component: () => import('../views/shopping02.vue')
    },
    {
      path: '/shopping03',
      name: 'shopping03',
      component: () => import('../views/shopping03.vue')
    },
    {
      path: '/shopping04',
      name: 'shopping04',
      component: () => import('../views/shopping04.vue')
    },
  ]
})

export default router
