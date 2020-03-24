import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { a } from './utils/util'

console.log('a---', a())
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
