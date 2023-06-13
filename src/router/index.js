import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    }, {
      path: '/register',
      name: 'register',
      component: () => import("../views/Register.vue")
    }, {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login.vue")
    }, {
      path: '/search-map',
      name: 'search-map',
      component: () => import("../views/SearchMap.vue")
    }, {
      path: '/fee-map',
      name: 'fee-map',
      component: () => import("../views/FeeMap.vue")
    }, {
      path: '/calculate',
      name: 'calculate',
      component: () => import("../views/calculate.vue")
    }, {
      path: '/member-info',
      name: 'member-info',
      component: () => import("../views/MemberInfo.vue"),
      children: [
        {
          path: '/active',
          name: 'active',
          component: () => import("../views/Active.vue")
        }, {
          path: '/update',
          name: 'update',
          component: () => import("../views/Update.vue")
        }, {
          path: '/member-search',
          name: 'member-search',
          component: () => import("../views/MemberSearch.vue")
        }, {
          path: '/upgrade',
          name: 'upgrade',
          component: () => import("../views/Upgrade.vue")
        }, {
          path: '/deleteVIP',
          name: 'deleteVIP',
          component: () => import("../views/DeleteVIP.vue")
        },
      ]
    },
    {
      path: '/administrator-login',
      name: 'administrator-login',
      component: () => import("../views/AdministratorLogin.vue"),
    } ,{
      path: '/administrator',
      name: 'administrator',
      component: () => import("../views/Administrator.vue"),
      children: [
        {
          path: '/vehicle-add-car',
          name: 'VehicleAddCar',
          component: () => import("../views/VehicleAddCar.vue")
        }, {
          path: '/vehicle-find-car-and-update',
          name: 'VehicleFindCarAndUpdate',
          component: () => import("../views/VehicleFindCarAndUpdate.vue")
        }, {
          path: '/vehicle-scrap-car',
          name: 'VehicleScrapCar',
          component: () => import("../views/VehicleScrapCar.vue")
        }, {
          path: '/AddCar',
          name: 'AddCar',
          component: () => import("../views/AddCar.vue")
        }, {
          path: '/ResearchCar',
          name: 'ResearchCar',
          component: () => import("../views/researchCar.vue")
        }, {
          path: '/DeleteCar',
          name: 'DeleteCar',
          component: () => import("../views/deleteCar.vue")
        }, {
          path: '/FinishCar',
          name: 'FinishCar',
          component: () => import("../views/finishCar.vue")
        }, {
          path: '/feeManager',
          name: 'feeManager',
          component: () => import("../views/FeeManage.vue"),
        }, {
          path: '/location-manage',
          name: 'location-manage',
          component: () => import("../views/LocationManage.vue")
        }, {
          path: '/location-vehicle',
          name: 'location-vehicle',
          component: () => import("../views/LocationVehicle.vue")
        }, {
          path: '/finance',
          name: 'finance',
          component: () => import("../views/Finance.vue")
        }
      ]
    }
  ]
})

export default router
