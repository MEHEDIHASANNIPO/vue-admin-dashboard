import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router
