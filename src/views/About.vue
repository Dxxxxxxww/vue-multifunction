<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  props: {
    id: String
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log('id', this.id)
  }
}
</script>
