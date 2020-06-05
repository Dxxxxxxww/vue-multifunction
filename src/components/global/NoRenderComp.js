export default {
  render() {
    return this.$scopedSlots.default({
      exampleProp: 'universe',
      a() {
        return 'a'
      }
    })
  }
}
