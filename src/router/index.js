import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/TasksView'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/NewView')
  },
  {
    path: '/task/:id',
    name: 'task',
    props: true,
    component: () => import('../views/TaskView')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
