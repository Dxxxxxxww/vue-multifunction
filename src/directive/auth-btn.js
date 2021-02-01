import Vue from 'vue'
import { getPopeBtn } from '@/utils/util'
import store from '@/store'

const directives = {
  authbtn: {
    inserted(el, binding, vnode) {
      const { arg, value } = binding
      const roleMap = store.state.auth.roleMap
      let roleList = roleMap && roleMap.get(value)
      if (!arg) {
        throw new Error('need arg')
      }
      if (!value || !Array.isArray(value)) {
        throw new Error('value should be an array')
      }
      // 缓存下，避免重复请求
      if (!roleList) {
        roleList = getPopeBtn(value).map(v => v.popedomId)
        // roleMap.set(value, roleList)
        store.commit('auth/setRoleMap', { key: value, value: roleList })
      }
      // 如果没有对应权限按钮，直接移除
      if (!roleList.includes(arg)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    },
    unbind() {
      const roleMap = store.state.auth.roleMap
      if (roleMap.size) {
        store.commit('auth/clearRoleMap')
      }
    }
  }
}

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
