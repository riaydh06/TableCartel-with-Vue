import Vue from 'vue'
import Router from 'vue-router'
// import About from '../components/About.vue'
// import Coins from '../components/Coins.vue'
import Food from '../components/Food.vue'
import FoodList from '../components/FoodList.vue'
import RestaurantList from '../components/RestaurantList.vue'
import Restaurant from '../components/Restaurant.vue'
// import Marketplace from '../components/Marketplace.vue'
// import Prifile from '../components/Prifile.vue'
// import Ingredients from '../components/Ingredients.vue'
// import InfoRecipe from '../components/InfoRecipe.vue'
// import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FoodList',
      component: FoodList
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    // {
    //   path: '/coins/:id',
    //   name: 'Coins',
    //   component: Coins
    // },
    {
      path: '/food/:id',
      name: 'Food',
      component: Food
    },
    {
      path: '/RestaurantList',
      name: 'RestaurantList',
      component: RestaurantList
    },
    {
      path: '/restaurant/:id',
      name: 'Restaurant',
      component: Restaurant
    }
    // {
    //   path: '/Marketplace',
    //   name: 'Marketplace',
    //   component: Marketplace
    // },
    // {
    //   path: '/Prifile',
    //   name: 'Prifile',
    //   component: Prifile
    // }
    // {
    //   path: '/Ingredients',
    //   name: 'Ingredients',
    //   component: Ingredients
    // }
    // {
    //   path: '/InfoRecipe',
    //   name: 'InfoRecipe',
    //   component: InfoRecipe
    // }
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // }
  ]
})
