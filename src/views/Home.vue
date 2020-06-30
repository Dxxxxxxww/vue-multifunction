<template>
  <div class="home">
    <h1>VKeyboard</h1>
    <button @click="handleToList">to list</button>
    <div @click="handleSnapshootEnter">to child route</div>
    <v-keyboard></v-keyboard>
    <router-view name="Snapshoot"></router-view>
    <router-view name="HelloWorld"></router-view>
  </div>
</template>

<script>
import VKeyboard from '@components/virtual-keyboard'

export default {
  name: 'Home',
  props: {
    query: String
  },
  components: {
    VKeyboard
  },
  data() {
    return {
      inputData: ''
    }
  },
  mounted() {
    console.log('q', this.query)
    console.log('this.$slots', this.$slots)
  },
  methods: {
    handleSnapshootEnter() {
      this.$router.push('/snapshoot')
    },
    handleToList() {
      this.$router.push('List')
    }
  }
}
</script>

<style lang="stylus" scoped>
.input {
  border: 1px solid #ccc;
}
</style>
