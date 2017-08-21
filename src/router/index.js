import Vue from 'vue'
import Router from 'vue-router'
// import About from '../components/About.vue'
// import Coins from '../components/Coins.vue'
import Search from '../components/Search.vue'
import Food from '../components/Food.vue'
import FoodList from '../components/FoodList.vue'
import Marketplace from '../components/Marketplace.vue'
import Restaurant from '../components/Restaurant.vue'
import Profile from '../components/Profile.vue'
import Ingredients from '../components/Ingredients.vue'
import Recipes from '../components/Recipes.vue'
import Setting from '../components/Setting.vue'
import InfoRecipe from '../components/InfoRecipe.vue'
import Login from '../components/Login.vue'
import TableBooking from '../components/TableBooking.vue'
import ThingsYouFollow from '../components/ThingsYouFollow.vue'
import Updates from '../components/Updates.vue'
import FoodTexo from '../components/FoodTexo.vue'
import FoodListTexo from '../components/FoodListTexo.vue'
import RestaurantFoodTexo from '../components/RestaurantFoodTexo.vue'
import RestaurantFoodList from '../components/RestaurantFoodList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/FoodList',
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
      path: '/Marketplace',
      name: 'Marketplace',
      component: Marketplace
    },
    {
      path: '/restaurant/:id',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Ingredients',
      name: 'Ingredients',
      component: Ingredients
    },
    {
      path: '/Recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/InfoRecipe',
      name: 'InfoRecipe',
      component: InfoRecipe
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/TableBooking',
      name: 'TableBooking',
      component: TableBooking
    },
    {
      path: '/ThingsYouFollow',
      name: 'ThingsYouFollow',
      component: ThingsYouFollow
    },
    {
      path: '/Updates',
      name: 'Updates',
      component: Updates
    },
    {
      path: '/FoodTexo',
      name: 'FoodTexo',
      component: FoodTexo
    },
    {
      path: '/get-all-term-food/:id',
      name: 'FoodListTexo',
      component: FoodListTexo
    },
    {
      path: '/RestaurantFoodTexo/:id',
      name: 'RestaurantFoodTexo',
      component: RestaurantFoodTexo
    },
    {
      path: '/get-all-food/:id',
      name: 'RestaurantFoodList',
      component: RestaurantFoodList
    }
  ]
})
