<template>
  <div class="home">
    <button @click="handleToList">to list</button>
    <input
      class="input"
      ref="input"
      v-model="inputData"
      type="number"
      @focus="focus"
      readonly
    />
    <img
      alt="snapshoot enter"
      src="../assets/logo.png"
      @click="handleSnapshootEnter"
    />
    <router-view name="Snapshoot"></router-view>
    <router-view name="HelloWorld"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    query: String
  },
  data() {
    return {
      inputData: ''
    }
  },
  mounted() {
    console.log('q', this.query)
    // this.$refs.input.focus()
    console.log('this.$slots', this.$slots)
  },
  methods: {
    handleSnapshootEnter() {
      this.$router.push('/snapshoot')
    },
    focus(e) {
      e.preventDefault()
      document.activeElement.blur()
      console.log(e)
    },
    handleToList() {
      this.$router.push('List')
    }
  }
}
</script>

<style lang="stylus">
.input {
  border: 1px solid #ccc;
}
</style>
