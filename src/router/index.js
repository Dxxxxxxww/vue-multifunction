import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Snapshoot from '@/components/Snapshoot.vue'
import HelloWorld from '@/components/HelloWorld.vue'

// 解决相同路径跳转报错
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
    // 如果 props 被设置为 true，route.params 将会被设置为组件属性。
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '@/views/list-key')
  }
]

const router = new VueRouter({
  routes
})

export default router
