import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vehicle-add-car',
      name: 'VehicleAddCar',
      component: () => import ("../views/VehicleAddCar.vue")
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
    }
  ]
})

export default router
