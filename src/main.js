import Vue from 'vue'
import App from './App.vue'
// 引入插件，放在此处引用是为了下面的router和store中可能会用到某些插件的功能。
import './plugins/index'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './components/global/RenderFunction'
import './directive/index'
import './filters/index'
import '@/utils/util'

import 'styles/index.styl'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// async function async1() {
//   console.log(1)
//   await async2()
//   console.log(2)
// }

// async function async2() {
//   console.log(3)
// }

// console.log(4)
// setTimeout(() => {
//   console.log(5)
// }, 0)

// async1()

// new Promise(resolve => {
//   console.log(6)
//   resolve()
// }).then(() => {
//   console.log(7)
// })

// console.log(8)
