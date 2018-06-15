import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Zed from './pages/ZED/Zed.vue';


// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './sass/style.scss';

import './sass/localStorageStyles.js';


Vue.config.productionTip = false;
const root = document.querySelector('#root');
new Vue({
    Zed,
    router,
    render: h => h(App)
}).$mount(root);




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