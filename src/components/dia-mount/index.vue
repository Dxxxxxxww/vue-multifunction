<template>
  <div class="box">
    <h2 @click="plus">{{ parentTitle }}</h2>
    <h2>{{ parentMsg }}</h2>
    <h2>{{ title }}</h2>
    <h2 @click="click">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Dia',
  props: {
    parentTitle: String,
    parentMsg: String
  },
  data() {
    return {
      title: 0,
      message: ''
    }
  },
  methods: {
    plus() {
      this.title += 1
    },
    click() {
      if (this.beforeClose) {
        this.beforeClose(this.title)
      }
      this.$emit('select', this.title)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  position: fixed;
  top: 50px;
  bottom: 50px;
  left: 50px;
  right: 50px;
  z-index: 100;
}
</style>
