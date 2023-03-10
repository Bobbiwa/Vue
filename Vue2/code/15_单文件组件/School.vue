<template>
  <div class='schoolContainer'>
    <h1>学校名称：{{name}}</h1>
    <h1>学校地址：{{address}}</h1>
    <hr>
    <Student/>
  </div>
</template>

<script>
import Student from './student.vue'
export default School = Vue.extend({
  data() {
    return {
      name: '西邮',
      address: '红砖南路'
    }
  },
  components:{
    Student
  }
})
</script>

<style>
.schoolContainer {
  background-color: tomato;
}
</style>
