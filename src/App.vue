<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to about</router-link>
    </p>
    <van-button type="primary" size="small">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger" @click="handleClick">危险按钮</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from 'vant'
import Request from '@utils/request'

export default {
  components: {
    [Button.name]: Button
  },
  computed: {},
  created() {
    Request.get('todos/1').then((res) => {
      console.log('res: ' + res)
    })
  },
  mounted() {
    console.log('VUE_APP_SERVER_URL')
    console.log(process.env.VUE_APP_SERVER_URL)
    console.log('----------------------------------------')
    console.log(process.env.NODE_ENV)
  },
  methods: {
    handleClick() {
      this.$toast('点击了')
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    font-size: 24px;
  }
}
</style>
