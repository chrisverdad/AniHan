import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomepageView from '../views/HomepageView.vue'
import ChooseRoleView from '../views/ChooseRoleView.vue'
import DashboardView from '../views/DashboardView.vue'

// Actor-specific register pages
import RegisterFarmerView from '../views/RegisterFarmerView.vue'
import RegisterPublicView from '../views/RegisterPublicView.vue'
import RegisterAdminView from '../views/RegisterAdminView.vue'

// Dashboard Farmer/Vendors
import SurplusView from '../views/SurplusView.vue'
import TransactionView from '../views/TransactionView.vue'

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
    path: '/dash',
    name: 'Dash',
    component: DashboardView,
  },
  {
    path: '/register',
    name: 'ChooseRole',
    component: ChooseRoleView,
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

  // Farmer Dashboard
  {
    path: '/submit-waste',
    name: 'SubmitWaste',
    component: SurplusView,
  },

  {
    path: '/transaction',
    name: 'Transaction',
    component: TransactionView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
