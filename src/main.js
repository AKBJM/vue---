// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import './common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */

// Vue.use(VueRouter)
Vue.use(VueResource)

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       redirect: 'goods'
//     },
//     {
//       path: '/goods',
//       component: goods
//     },
//     {
//       path: '/ratings',
//       component: ratings
//     },
//     {
//       path: '/seller',
//       component: seller
//     }
//   ]
// })

// const app = new Vue({
//   el: '#app',
//   components: { App },
//   router,  
//   template: '<App/>'
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
