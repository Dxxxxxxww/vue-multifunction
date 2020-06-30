<template>
  <div class="about">
    <h1 @click="handleClickTitle">This is an about page</h1>
    <HelloWorld
      v-show="toggle"
      ref="helloworld"
      msg="Welcome to Your Vue.js App"
    />
    <render-function :level="1" :innerProp="'abcd'"></render-function>
    <el-input
      v-model="num.num"
      type="text"
      v-number-input
      @input="handleInput"
    ></el-input>
    <button @click="handleToList">to list</button>
  </div>
</template>

<script type="module">
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import { debounce } from '@/utils/util.js'

const vNumberInput = Vue.directive('number-input')
const filterCapitalize = Vue.filter('capitalize')

export default {
  name: 'About',
  props: {
    id: String
  },
  data() {
    return {
      toggle: false,
      num: {
        num: ''
      }
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log('id', this.id)
    console.log(vNumberInput) // 返回的是对象，{bind: ƒ}
    console.log(filterCapitalize) // 返回的是过滤器函数，
    // ƒ (value) {
    //   if (!value) return '';
    //   value = value.toString();
    //   return value.charAt(0).toUpperCase() + value.slice(1);
    // }
  },
  methods: {
    handleClickTitle() {
      console.log(this.$refs.helloworld)
      this.toggle = !this.toggle
    },
    handleToList() {
      this.$router.push('/list')
    },
    handleInput: debounce(function() {
      console.log(123, this)
    }, 300)
  }
}
</script>
