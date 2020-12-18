<template>
  <span id="appabcd">
    <InputMoney></InputMoney>
    <div class="nav">
      哈哈
      <!-- <router-link :to="{ path: '/', query: { q: '123' } }">Home</router-link>|
      <router-link to="/about/123">About</router-link>| -->
      <!-- <router-link to="/snapshoot">HomeChildren</router-link> -->
      <!-- <router-link to="/no-render">no-render-comp</router-link>|
      <router-link to="/drawer">drawer</router-link> -->
    </div>
    <router-view />
  </span>
</template>

<script>
import InputMoney from '@/components/input-money/InputMoney'

export default {
  name: 'AppAbcd',
  components: {
    InputMoney
  }
}
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .nav
    height 20px
    line-height 20px
</style>
