import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Layout from './components/Layout';
import store from '@/store/index';


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  store,
  router,
  render: h => h(Layout),
}).$mount('#app')
