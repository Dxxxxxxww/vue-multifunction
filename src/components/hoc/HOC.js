export default function Hoc(WrappedComponent) {
  return {
    mounted() {
      console.log('mounted')
    },
    // props: {
    //
    // },
    render(h) {
      return h(WrappedComponent, {
        on: this.$listeners,
        attrs: this.$attrs
        // props: this.$props // 如果 hoc 也有需要的 props 的话，还需要将 props 传入
      })
    }
  }
}
