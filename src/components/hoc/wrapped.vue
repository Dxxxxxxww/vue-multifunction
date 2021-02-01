<template>
  <div>
    <div @click="handleClick">{{ text }} -- {{ num }}</div>
  </div>
</template>

<script>
export default {
  name: 'Wrapped',
  props: {
    text: String,
    num: Number
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('my-click', 'lalalala')
    }
  }
}
</script>
