<template>
  <div>
    <span>新闻</span><input type="radio" name="abc" id="news" @change="handleToggle" />
    <span>娱乐</span><input type="radio" name="abc" id="fun" @change="handleToggle" />
    <ul>
      <!-- <li v-for="item of list" :key="item" @click="handleSelected"> -->
      <li v-for="(item, index) of list" :key="index" @click="handleSelected">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
// 测试 不加 key 与 key 为index
// 结果，不加 key 与 key 为index 结果是相同的，vue会复用元素，并不会销毁和重建
// 除非 key 是唯一值，才会销毁和重建
export default {
  name: 'ListKey',
  data() {
    return {
      newsList: [1, 2, 3, 4, 5, 6],
      funList: ['a', 'b', 'c', 'd', 'e', 'f'],
      flag: true
    }
  },
  computed: {
    list() {
      return this.flag ? this.newsList : this.funList
    }
  },
  methods: {
    handleToggle() {
      this.flag ? (this.flag = false) : (this.flag = true)
    },
    handleSelected(e) {
      console.log(e)
      e.target.style.color = 'red'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
