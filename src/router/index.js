import { createRouter, createWebHistory } from 'vue-router'
const LoginView = () => import('../views/LoginView.vue')
const RegisterView = () => import('../views/RegisterView.vue')
const DashboardView = () => import('../views/DashboardView.vue')
const NotFound = () => import('../views/404.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path:'/register',
      name: 'register',
      component:RegisterView
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: DashboardView
    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component: NotFound
    }
  ]
})

export default router
