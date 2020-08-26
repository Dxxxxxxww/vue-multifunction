<template>
  <div class="drawer">
    <!-- // $attrs $listeners 实现 -->
    <my-dialog
      :show.sync="visible"
      :title.sync="form.title"
      :test-attr="testAttr"
      @close="handleTrace"
    ></my-dialog>
    <child></child>
    <button type="button" @click="handleToggle">toggle</button>
    <transition name="fade">
      <div class="test" v-show="showRef"></div>
    </transition>
    <router-link to="/drawer/use-vant">to use-vant</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import MyDialog from '@components/my-dialog/MyDialog'
import Child from '@components/test-component-child/Child'
import { obj } from '@/utils/testExportObj'

export default {
  name: 'Drawer',
  data() {
    return {
      visible: true,
      form: {
        title: '123'
      },
      testAttr: 'testAttr',
      showRef: true
    }
  },
  mounted() {
    console.log(obj)
  },
  methods: {
    // $attrs $listeners 实现。 主要用于爷孙间的通信
    handleTrace() {
      console.log('handleTrace')
    },
    handleClick(msg) {
      console.log(msg)
    },
    handleToggle() {
      this.showRef = !this.showRef
    }
  },
  provide() {
    return {
      content: 'content'
    }
  },
  components: {
    MyDialog,
    Child
  }
}
</script>

<style scoped lang="stylus">
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  transform: translateX(0);
  opacity: 1;
}
.test
  width 100px
  height 100px
  background-color red
.drawer
  margin-top 20px
  background-color #fff
</style>
