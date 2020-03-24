import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Snapshoot from '@/components/Snapshoot.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return routerPush.call(this, to).catch(error => error) // console.log(error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // props 函数模式 返回的对象的 key: 就是组件 props 的属性名
    // route.query.q 的 q 是在 router-link(this.$router.push) 传递的
    props: route => {
      return { query: route.query.q }
    },
    children: [
      {
        path: 'snapshoot',
        name: 'Snapshoot',
        components: { Snapshoot, HelloWorld },
        // props 对象模式 静态的意思是，直接将 { abcId: true } 这个传递给组件
        // props: { abcId: true }
        props: { abcId: true }
      }
    ]
  },
  {
    path: '/about/:id',
    name: 'About',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
