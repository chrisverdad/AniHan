import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomepageView from '../views/HomepageView.vue'
import ChooseRoleView from '../views/ChooseRoleView.vue'

// Actor-specific register pages
import RegisterFarmerView from '../views/RegisterFarmerView.vue'
import RegisterPublicView from '../views/RegisterPublicView.vue'
import RegisterAdminView from '../views/RegisterAdminView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomepageView,
  },
  {
    path: '/register',
    name: 'ChooseRole',
    component: ChooseRoleView, // ✅ goes to role selection first
  },
  {
    path: '/register-farmer',
    name: 'RegisterFarmer',
    component: RegisterFarmerView,
  },
  {
    path: '/register-public',
    name: 'RegisterPublic',
    component: RegisterPublicView,
  },
  {
    path: '/register-admin',
    name: 'RegisterAdmin',
    component: RegisterAdminView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
