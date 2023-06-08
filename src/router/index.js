import { createRouter, createWebHistory } from 'vue-router';
import AddCar from '../views/addCar.vue';
import ResearchCar from '../views/researchCar.vue';
import DeleteCar from '../views/deleteCar.vue';
import FinishCar from '../views/finishCar.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
