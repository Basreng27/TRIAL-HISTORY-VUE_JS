import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/history',
      name: 'history',
        component: () => import('../views/History.vue')
    },
    {
      path: '/kategori',
      name: 'kategori',
        component: () => import('../views/master/Kategori.vue')
    },
    {
      path: '/genre',
      name: 'genre',
        component: () => import('../views/master/Genre.vue')
    },
    {
      path: '/history',
      name: 'history',
        component: () => import('../views/History.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
        component: () => import('../views/error/404.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
