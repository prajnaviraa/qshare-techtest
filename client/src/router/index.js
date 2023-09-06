import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import NewOrder from '../views/NewOrder.vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'orders',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/orderForm',
      name: 'orderForm',
      component: NewOrder
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.access_token
  if (to.name === 'login' && isLoggedIn) {
    next({ name: 'orders' })
  } else if (to.name === 'register' && isLoggedIn) {
    next({ name: 'orders' })
  } else if (to.name === 'orders' && !isLoggedIn) {
    toast.error('Please log in first')
    next({ name: 'login' })
  } else if (to.name === 'orderForm' && !isLoggedIn) {
    toast.error('Please log in first')
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
