import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/Acceso/SignUp.vue'
import SignIn from '../components/Acceso/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    redirect: '/sign-in'
    
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
      
    }
  ]
})

export default router
