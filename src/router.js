import Vue from 'vue'
import Router from 'vue-router';
import Home from './Components/Home.vue';
import MainArrayTests from './Components/MainArrayTests.vue';
import Debug from './Components/Debug.vue';

/* Bulma Blocks */

import BulmaBlocks1 from './Components/BulmaBlocks1.vue';
import BulmaBlocks2 from './Components/BulmaBlocks2.vue';
import BulmaBlocks3 from './Components/BulmaBlocks3.vue';
import BulmaBlocks4 from './Components/BulmaBlocks4.vue';
import BulmaBlocks5 from './Components/BulmaBlocks5.vue';
import BulmaBlocks6 from './Components/BulmaBlocks6.vue';
import BulmaBlocks7 from './Components/BulmaBlocks7.vue';
// import BulmaBlocks8 from './Components/BulmaBlocks4.vue';


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
    },
    {
      path: '/BulmaBlocks1',
      name: 'BulmaBlocks1',
      component: BulmaBlocks1
    },
    {
      path: '/BulmaBlocks2',
      name: 'BulmaBlocks2',
      component: BulmaBlocks2
    },
    {
      path: '/BulmaBlocks3',
      name: 'BulmaBlocks3',
      component: BulmaBlocks3
    },
    {
      path: '/BulmaBlocks4',
      name: 'BulmaBlocks4',
      component: BulmaBlocks4
    },
    {
      path: '/BulmaBlocks5',
      name: 'BulmaBlocks5',
      component: BulmaBlocks5
    },
    {
      path: '/BulmaBlocks6',
      name: 'BulmaBlocks6',
      component: BulmaBlocks6
    },
    {
      path: '/BulmaBlocks7',
      name: 'BulmaBlocks7',
      component: BulmaBlocks7
    },
  ]
})
