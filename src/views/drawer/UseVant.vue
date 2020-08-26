<template>
  <div>
    <van-button type="primary">abc</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'UseVant',
  components: {
    [Button.name]: Button
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus"></style>
