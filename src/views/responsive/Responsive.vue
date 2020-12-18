<template>
  <div @click="change">{{ o.name }}</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      o: '000'
    }
  },
  created() {
    this.o = { name: 123 }
  },
  methods: {
    change() {
      this.o.name = 456
    }
  }
}
</script>

<style scoped lang="stylus"></style>
