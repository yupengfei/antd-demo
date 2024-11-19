import { createRouter, createWebHistory } from 'vue-router'
import CompanyView from '../views/CompanyView.vue'
import BrokerageServiceView from '../views/BrokerageServiceView.vue'
const routes = [
  {
    path: '/company',
    name: 'Company',
    component: CompanyView
  },
  {
    path: '/brokerage-service',
    name: 'BrokerageService',
    component: BrokerageServiceView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
