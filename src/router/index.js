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

        // Dashboard Route
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard,
        },

        // Form Routes
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

        // Table Routes
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

        // Ecommerce Routes
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/Ecommerce/Products.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('../views/Ecommerce/Pricing.vue'),
        },

        // Charts Route
        {
          path: '/charts',
          name: 'Charts',
          component: () => import('../views/Chart/Charts.vue'),
        },

        // Widget Route
        {
          path: '/widgets',
          name: 'Widget',
          component: () => import('../views/Widget/Widget.vue'),
        },

        // Profile Routes
        {
          path: '/update-profile',
          name: 'updateProfile',
          component: () => import('../views/Profile/UpdateProfile.vue'),
        },
        {
          path: '/update-password',
          name: 'updatePassword',
          component: () => import('../views/Profile/UpdatePassword.vue'),
        },
      ]
    },

    // Authentication Routes
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Registration.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
    },
    
    // Error Routes
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
