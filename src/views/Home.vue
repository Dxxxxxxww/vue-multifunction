<template>
  <div class="home">
    <h1>VKeyboard</h1>
    <button @click="handleToList">to list</button>
    <div @click="handleSnapshootEnter">to child route</div>
    <v-keyboard></v-keyboard>
    <div id='hoc'></div>
    <comp text='wahaha' :num='123' @my-click='handleClick'></comp>
    <router-view name="Snapshoot"></router-view>
    <router-view name="HelloWorld"></router-view>
  </div>
</template>

<script>
import VKeyboard from '@components/virtual-keyboard'
import Hoc from '@components/hoc/HOC'
import wrapped from '@/components/hoc/wrapped'

const comp = Hoc(wrapped)

export default {
  name: 'Home',
  props: {
    query: String
  },
  components: {
    VKeyboard,
    comp
  },
  data() {
    return {
      inputData: ''
    }
  },
  mounted() {
    // console.log('q', this.query)
    // console.log('this.$slots', this.$slots)
  },
  methods: {
    handleSnapshootEnter() {
      this.$router.push('/snapshoot')
    },
    handleToList() {
      this.$router.push('List')
    },
    handleClick() {
      console.log(arguments)
    }
  }
}
</script>

<style lang="stylus" scoped>
.input {
  border: 1px solid #ccc;
}
</style>
