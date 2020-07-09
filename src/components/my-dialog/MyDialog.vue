<template>
  <div class="my-dialog" @click="innerClick" v-show="show">
    <el-dialog
      :visible.sync="visi"
      :title="title"
      v-bind="$attrs"
      width="30%"
      v-on="$listeners"
    >
      <span slot="footer">
        <el-button @click="changeSyncProp">修改 .sync</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// $attrs $listeners 实现
// :visible.sync="visi" 这里的 visi 不能是 MyDialog 的父级组件的 sync 。el-dialog 触发了 update:visible 是直接修改 visi 的值，而不是通过 update:visi 去触发 MyDialog 的事件，所以会报 不能直接修改父级属性 错误
// innerClick 即便已经独立出来声明使用， 依然会在 $listeners 中

export default {
  name: 'MyDialog',
  inheritAttrs: false,
  props: {
    show: Boolean,
    title: String
  },
  data() {
    return {
      pp: {
        a: 'a',
        b: 'b',
        c: 'c'
      },
      // show: false
      visi: true
    }
  },
  created() {
    // this.show = this.$attrs.show
    console.log(this.abc, this.s)
  },
  computed: {
    // 需要设置 set
    // show() {
    //   return this.$attrs.show
    // }
  },
  // watch: {
  //   $attrs: {
  //     handler(nv) {
  //       console.log(nv.show)
  //       this.show = nv.show
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    changeSyncProp() {
      console.log(this.$attrs, this.$listeners)
      this.$emit('update:show', true)
    },
    innerClick() {
      console.log('innerClick')
      this.$emit('update:title', 'xixihaha')
    }
  },
  inject: {
    abc: {
      from: 'content',
      default: 'abc'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
