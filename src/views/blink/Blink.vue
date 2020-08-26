<template>
  <div>
    <div class="border-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Blink',
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
.border-right
  height 20px
  width 0
  margin-left 20px
  border-right 1px solid #000
  // 这种写法能使动画闪烁表现成硬切闪烁 源自 css揭秘
  animation blink 1s infinite steps(1)

@keyframes blink {
  50% {
    // 这种写法能使动画闪烁表现成硬切闪烁
    opacity 0
  }
}
</style>
