// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/p/dashboard'
  },
  {
    path: '/p',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/P/Dashboard.vue')
      }
    ]
  },
  {
    path: '/hbs',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/HBS/Dashboard.vue')
      }
    ]
  },
  {
    path: '/qa',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/QA/Dashboard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router