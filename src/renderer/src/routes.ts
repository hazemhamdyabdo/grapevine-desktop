import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./pages/home.vue') },
  { path: '/about', component: () => import('./pages/about.vue') }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
