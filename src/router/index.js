import { createRouter, createWebHistory } from 'vue-router';
import AddCar from '../views/addCar.vue';
import ResearchCar from '../views/researchCar.vue';
import DeleteCar from '../views/deleteCar.vue';
import FinishCar from '../views/finishCar.vue';

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
    },
    {
      path: '/vehicle-add-car',
      name: 'VehicleAddCar',
      component: () => import("../views/VehicleAddCar.vue")
    },
    {
      path: '/vehicle-find-car-and-update',
      name: 'VehicleFindCarAndUpdate',
      component: () => import("../views/VehicleFindCarAndUpdate.vue")
    },
    {
      path: '/vehicle-scrap-car',
      name: 'VehicleScrapCar',
      component: () => import("../views/VehicleScrapCar.vue")
    },
    {
      path: '/AddCar',
      name: 'AddCar',
      component: AddCar
    },
    {
      path: '/ResearchCar',
      name: 'ResearchCar',
      component: ResearchCar
    },
    {
      path: '/DeleteCar',
      name: 'DeleteCar',
      component: DeleteCar
    },
    {
      path: '/FinishCar',
      name: 'FinishCar',
      component: FinishCar
    }

  ]
})

export default router
