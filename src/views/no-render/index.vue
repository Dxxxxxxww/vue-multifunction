<template>
  <div>
    <no-render-comp v-slot:default="{ exampleProp }">
      <h1>
        {{ exampleProp }}
      </h1>
    </no-render-comp>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus"></style>
