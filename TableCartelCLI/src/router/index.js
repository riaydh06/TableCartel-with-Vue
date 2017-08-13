import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Coins from '../components/Coins.vue'
import Food from '../components/Food.vue'
import FoodList from '../components/FoodList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FoodList',
      component: FoodList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/food/:id',
      name: 'Food',
      component: Food
    }
  ]
})
