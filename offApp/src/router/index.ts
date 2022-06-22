import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/add'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/add'
      },
      {
        path: 'add',
        component: () => import('@/views/TabPageForAdd.vue')
      },
      {
        path: 'list',
        component: () => import('@/views/TabPageForList.vue')
      },
    ]
  },
  {
    path: '/view-item/:id',
    component: () => import('@/views/ViewItemPage.vue')
  },
  {
    path: '/update-item/:id',
    component: () => import('@/views/UpdateItemPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
