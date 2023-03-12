<template>
  <div>
    <h1>学生名称：{{name}}</h1>
    <h1>学生地址：{{address}}</h1>
  </div>
</template>

<script>
export default Student = Vue.extend({
  data() {
    return {
      name: '大斌',
      address: '大菊家'
    }
  }
})
</script>

<style>

</style>
