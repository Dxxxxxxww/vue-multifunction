<template>
  <input
    class="ipt"
    type="number"
    :value="fee"
    v-number-input.float="float"
    ref="ipt"
    @focus="handleFocus"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
import { debounce } from '@/utils/util'

export default {
  name: 'InputMoney',
  props: {
    float: {
      type: Number,
      default: 2
    },
    fee: String,
    wait: {
      type: Number,
      default: 60
    }
  },
  methods: {
    handleFocus() {
      this.$emit('focus', this.$refs.ipt)
    },
    handleInput() {
      debounce(() => {
        this.$emit('update:fee', this.$refs.ipt.value)
      }, this.wait)
    },
    handleBlur() {
      this.$emit('update:fee', this.$refs.ipt.value)
      this.$emit('blur', this.$refs.ipt)
    }
  }
}
</script>

<style scoped lang="stylus">
.ipt
  border 1px solid #ccc
</style>
