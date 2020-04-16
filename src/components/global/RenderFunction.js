export default {
  render(h) {
    return h(
      'h' + this.level,
      {
        class: 'abcd',
        props: {
          innerProp: {
            type: String
          }
        },
        on: {
          click() {
            console.log(this)
          }
        }
      },
      ['先写一些文字']
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
