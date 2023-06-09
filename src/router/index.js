import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import SearchMapView from "../views/SearchMap.vue"
import CalculateView from "../views/calculate.vue"
import Administrator from "../views/Administrator.vue"
import FeeManagerView from "../views/FeeManage.vue"
import FinanceView from "../views/Finance.vue"
import FeeAddView from "../views/FeeAdd.vue"
import FeeReviseView from "../views/FeeRevise.vue"
import FeeDropView from "../views/FeeDrop.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search-map',
      name: 'search-map',
      component: SearchMapView
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: CalculateView
    },
    {
      path: '/administrator',
      name: 'administrator',
      component: Administrator,
      children: [
        {
          path: '/feeManager',
          name: 'feeManager',
          component: FeeManagerView,
          children: [
            {
              path: '/fee-add',
              name: 'fee-add',
              component: FeeAddView
            }, {
              path: '/fee-revise',
              name: 'fee-revise',
              component: FeeReviseView
            }, {
              path: '/fee-drop',
              name: 'fee-drop',
              component: FeeDropView
            }
          ]
        },
        {
          path: '/finance',
          name: 'finance',
          component: FinanceView
        }
      ]
    }
  ]
})

export default router
