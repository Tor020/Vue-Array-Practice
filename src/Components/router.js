import Vue from 'vue'
import Router from 'vue-router';
import Home from './Home.vue';
import Targets from './Targets.vue';




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/targets',
      name: 'targets',
      component: Targets
    }
  ]
})
