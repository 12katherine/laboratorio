import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import { store } from './store/store';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify'
//import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import {routes} from "./routes/routes.js"

axios.defaults.baseURL = 'https://app-laboratorio.vercel.app/api';


Vue.use(VueRouter);
Vue.config.productionTip = false
//Vue.use(BootstrapVue)
//Vue.use(BootstrapVueIcons)
 
const router =new VueRouter({
  routes,
  mode:'history'
})




new Vue({
  vuetify,
  axios,
  store,
  router,
  
  render: h => h(App),
  
}).$mount('#app')
