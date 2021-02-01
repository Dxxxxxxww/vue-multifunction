// 动态获取菜单
/*
import router from './index'
import store from '@/store'
import NProgress from 'nprogress'
import { gSStore } from '@/utils/utils'

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (gSStore('userInfo')) {
    const menu = store.getters.menuRoutes
    try {
      // 如果刷新了的话就重新请求菜单，重新进行 router.addRoutes
      if (!menu.length) {
        await store.dispatch('permission/generateRoutes')
        // 就是router.addRoutes之后的next()可能会失效，因为可能next()的时候路由并没有完全add完成
        // 可以简单的通过next(to)巧妙的避开
        setTimeout(() => {
          next({ ...to, replace: true })
        }, 20)
        return
      }
      if (to.path !== '/login') {
        await store.dispatch('permission/setTab', to)
      }
      next()
    } catch (e) {
      console.log(e?.message)
    }
  } else {
    // 防止没有获取到用户信息时，路由重定向到 login 时栈溢出问题
    if (to.path === '/login') {
      next()
      return
    }
    next({ path: '/login', replace: true })
  }
})

router.afterEach(() => {
  NProgress.done()
})
 */
