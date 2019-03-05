<template>
  <div id="app">
    <!-- <Login></Login> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './views/login/login.vue'
export default {
  name: 'App'
  // components: {
  //   Login
  // }
}
</script>

<style>
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
