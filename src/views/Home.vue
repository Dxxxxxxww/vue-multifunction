<template>
  <div class="home">
    <img
      alt="snapshoot enter"
      src="../assets/logo.png"
      @click="handleSnapshootEnter"
    />
    <router-view name="Snapshoot"></router-view>
    <router-view name="HelloWorld"></router-view>
    <input
      ref="input"
      v-model="inputData"
      type="number"
      @focus="focus"
      autofocus
    />
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
      inputData: '123'
    }
  },
  mounted() {
    console.log('q', this.query)
    this.$refs.input.focus()
  },
  methods: {
    handleSnapshootEnter() {
      this.$router.push('/snapshoot')
    },
    focus(e) {
      // document.activeElement.blur()
      e.preventDefault()
      console.log(e)
    }
  }
}
</script>
