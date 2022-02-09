import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import ErrorLayout from '@/layouts/error.vue'
import Home from '@/pages/home/index.vue'
import About from '@/pages/about/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about',
        component: About
      }
    ]
  },
  { path: '/:pathMatch(.*)*', component: ErrorLayout }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
export default router
