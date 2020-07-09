<template>
  <div>
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from './Grandson'
export default {
  name: 'Child',
  data() {
    return {}
  },
  components: {
    Grandson
  }
}
</script>

<style scoped lang="stylus"></style>
