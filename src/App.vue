<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/images/404.gif">-->
    <Index msg="Welcome to My Vue.js APP" />
  </div>
</template>

<script>
import Index from "./components/Index.vue";
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
