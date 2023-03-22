<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddIncrement">奇数+</button>
    <button @click="syncIncrement">sync+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 0,
      n: 1
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() { },
    oddIncrement() { },
    syncIncrement() { },
  }
}
</script>

<style>
* {
  margin-right: 2px;
}
</style>