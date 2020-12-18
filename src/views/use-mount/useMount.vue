<template>
  <div></div>
</template>

<script>
import Vue from 'vue'
import Dia from '@/components/dia-mount/index'

// Vue.extend 以及 手动挂载 mount 的实验

export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    changeTask() {
      const DiaConstructor = Vue.extend(Dia)
      const dia = new DiaConstructor({
        el: document.createElement('div')
        // propsData: {
        //   parentTitle: 'title abc',
        //   parentMsg: 'msg def'
        // }
      })
      // 这个跟上面 propsData 传递 props 可替换
      dia.parentTitle = 'title abc'
      dia.parentMsg = 'msg def'

      dia.title = 10
      dia.message = '娃哈哈'
      // 因为是手动挂载，不知道如何做事件监听，所以目前的解决办法是传入回调
      // element 的 messageBox 也是这么做的
      dia.beforeClose = (num) => {
        console.log(num)
      }
      document.body.appendChild(dia.$el)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
