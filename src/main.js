
import Vue from 'vue';

import App from './App.vue';
import router from './router';



import style from './sass_Assets/style.scss';  //retarded error
Vue.config.productionTip = false;




new Vue({
  router,
  render: h => h(App)
}).$mount('#root')





