<template>
  <div>
    <slot :fee="fee"> </slot>
    <input
      class="ipt"
      type="number"
      v-number-input.float="float"
      :value="fee"
      ref="ipt"
      @focus="handleFocus"
      @input="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'InputMoneyV2',
  data() {
    return {
      fee: ''
    }
  },
  methods: {
    handleFocus() {},
    handleInput() {},
    handleBlur() {}
  }
}
</script>

<style scoped lang="stylus">
.ipt
  border 1px solid #ccc
</style>
