import Vue from 'vue';
import App from './App.vue';
import router from './router';




// https://github.com/jgthms/bulma-website/issues/25
// https://github.com/jgthms/bulma/issues/1651
// import style from './sass/style.scss';
// import style from './assets/sass/style.scss'
// import 



import style from './sass_Assets/style.scss';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')


let list = document.querySelectorAll('label.label');




f



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