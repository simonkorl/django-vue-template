<template>
  <div id="app">
    <img src="@/assets/logo-vue.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Elements',
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>