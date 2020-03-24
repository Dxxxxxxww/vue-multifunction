<template>
  <div>this is a snapshoot but not build yet</div>
</template>

<script>
export default {
  name: 'Snapshoot',
  props: {
    abcId: Boolean
  },
  mounted() {
    console.log('abcId', this.abcId)
  }
}
</script>
