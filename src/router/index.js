import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Default Routes
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/form-elements',
          name: 'formElement',
          component: () => import('../views/Forms/FormElements.vue'),
        },
        {
          path: '/form-group',
          name: 'formGroup',
          component: () => import('../views/Forms/FormGroup.vue'),
        },
        {
          path: '/basic-table',
          name: 'basicTable',
          component: () => import('../views/Table/BasicTable.vue'),
        },
        {
          path: '/paginate-table',
          name: 'paginateTable',
          component: () => import('../views/Table/PaginateTable.vue'),
        },
      ]
    },

    // Other Routes
    {
      path: '/error/403',
      name: '403Error',
      component: () => import('../views/Errors/403.vue'),
    },
    {
      path: '/error/404',
      name: '404Error',
      component: () => import('../views/Errors/404.vue'),
    },
  ],
})

export default router
