<template>
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
  <!-- v-model="fee1" -->
</template>

<script>
import { debounce } from '@/utils/util'
// 不能使用 vmodel 获取值，因为即便限定了只保留 2位 小数，在显示的时候确实只有 2位，但是
// 获取实际值却有 3位。例： 显示 12.12，值 12.123
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
  data() {
    return {
      fee1: '' // 不能使用 vmodel 获取值，因为即便限定了只保留 2位 小数，在显示的时候确实只有 2位，但是
      // 获取实际值却有 3位。例： 显示 12.12，值 12.123
    }
  },
  methods: {
    handleFocus() {
      this.$emit('focus', this.$refs.ipt)
    },
    handleInput: debounce(function() {
      this.$emit('update:fee', this.$refs.ipt.value)
    }, 60),
    // handleInput() {
    //   debounce(() => {
    //     this.$emit('update:fee', this.$refs.ipt.value)
    //   }, this.wait)
    // },
    handleBlur() {
      // console.log(this.fee1)
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
