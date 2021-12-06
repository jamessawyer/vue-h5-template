<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to about</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import { add } from '@utils/time.js'

export default {
  components: {},
  computed: {},
  mounted() {
    console.log('VUE_APP_SERVER_URL')
    console.log(process.env.VUE_APP_SERVER_URL)
    console.log('----------------------------------------')
    console.log('NODE_ENV', add(20, 20))
    console.log(process.env.NODE_ENV)
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
  margin-top: 60px;
}
</style>
