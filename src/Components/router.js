import Vue from 'vue'
import Router from 'vue-router';
import Home from './Home.vue';
import MainArrayTests from './MainArrayTests.vue';




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
    }
  ]
})
