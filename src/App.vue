<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ path: '/', query: { q: '123' } }">Home</router-link>|
      <router-link to="/about/123">About</router-link>|
      <!-- <router-link to="/snapshoot">HomeChildren</router-link> -->
      <router-link to="/no-render">no-render-comp</router-link>|
      <router-link to="/drawer">drawer</router-link>
    </div>
    <router-view />
  </div>
</template>

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
