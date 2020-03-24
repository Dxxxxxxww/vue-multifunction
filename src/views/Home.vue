<template>
  <div class="home">
    <img alt="snapshoot enter" src="../assets/logo.png" @click="handleSnapshootEnter"/>
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
  mounted() {
    console.log('q', this.query)
  },
  methods: {
    handleSnapshootEnter() {
      this.$router.push('/snapshoot')
    }
  }
}
</script>
