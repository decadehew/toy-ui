import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Button from '@toy-ui/button/src/index.vue'
import Tag from '@toy-ui/tag/src/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/tag',
    component: Tag
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
