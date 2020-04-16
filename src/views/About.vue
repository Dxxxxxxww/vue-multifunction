<template>
  <div class="about">
    <h1 @click="handleClickTitle">This is an about page</h1>
    <HelloWorld
      v-show="toggle"
      ref="helloworld"
      msg="Welcome to Your Vue.js App"
    />
    <render-function :level="1" :innerProp="'abcd'"></render-function>
    <button @click="handleToList">to list</button>
  </div>
</template>

<script type="module">
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  props: {
    id: String
  },
  data() {
    return {
      toggle: false
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log('id', this.id)
  },
  methods: {
    handleClickTitle() {
      console.log(this.$refs.helloworld)
      this.toggle = !this.toggle
    },
    handleToList() {
      this.$router.push('/list')
    }
  }
}
</script>
