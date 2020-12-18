<template>
  <div>
    <p>{{ items }}</p>
    <p>{{ obj }}</p>
    <button @click="add">add</button>
    <button @click="change">change</button>
    <el-select v-model="selected" label="是否移动终端:">
      <el-option
        v-for="(item, index) of list"
        :key="index"
        :label="item"
        :value="index"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
import Vue from 'vue'

Vue.use(Select)
Vue.use(Option)

export default {
  name: 'TestSet',
  data() {
    return {
      items: [0, 1],
      obj: {
        a: 'a'
      },
      list: ['否', '是'],
      selected: '0'
    }
  },
  methods: {
    add() {
      this.items[2] = 2
      this.obj.b = 'b'
    },
    change() {
      this.items[0] = 100
      this.items[1] = 3
      // this.obj.a = 'aaa'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
