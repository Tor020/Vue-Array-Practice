import Vue from 'vue'
import Router from 'vue-router';
import Home from './Components/Home.vue';
import MainArrayTests from './Components/MainArrayTests.vue';
import Debug from './Components/Debug.vue';




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/MainArrayTests',
      name: 'MainArrayTests',
      component: MainArrayTests
    },
    {
      path: '/Debug',
      name: 'Debug',
      component: Debug
    }
  ]
})
