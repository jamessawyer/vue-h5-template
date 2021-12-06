import Vue from 'vue'
import store from '@/store'
import router from './router'
import App from './App.vue'
import VConsole from 'vconsole'

Vue.config.productionTip = false

// 生产环境去掉console
if (process.env.NODE_ENV === 'production') {
  window.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  }
}

// 开发环境开启vconsole
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-unused-vars
  const vConsole = new VConsole()
}

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
