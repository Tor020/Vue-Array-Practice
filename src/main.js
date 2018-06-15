import Vue from 'vue';
import Main from './Main.vue';
import router from './router';

// import style from './sass/style.scss';
// import style from './assets/sass/style.scss'
import style from './sass_Assets/style.scss';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Main)
}).$mount('#root')









// new Vue({
  //   el: '#root',
  //   template: `
  //   <div>
  //   <Rating :grade="3" :maxStars="5" :hasCounter="true"/>
  //   <Rating :grade="4" :maxStars="10"/>
  //   <Rating :grade="0" :maxStars="1" :hasCounter="true"/>
  //   </div>
  // `,  components: { Rating }
  // })