import { createRouter, createWebHistory } from 'vue-router'

import Register from '../views/Register.vue'
import Active from '../views/Active.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Update from '../views/Update.vue'
import Upgrade from '../views/Upgrade.vue'
import DeleteVIP from '../views/DeleteVIP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
    },{
      path:'/register',
      name: 'register',
      component: Register
    },{
      path:'/active',
      name: 'active',
      component: Active
    },{
      path:'/login',
      name: 'login',
      component: Login
    },{
      path:'/search',
      name: 'search',
      component: Search
    },{
      path:'/update',
      name: 'update',
      component: Update
    },{
      path:'/upgrade',
      name: 'upgrade',
      component: Upgrade
    },{
      path:'/deleteVIP',
      name: 'deleteVIP',
      component: DeleteVIP
    }
  ]
})

export default router
