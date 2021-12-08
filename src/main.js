import Vue from 'vue'
import VConsole from 'vconsole'
import { Toast } from 'vant'
import store from '@store'
import router from './router'
import { getUA, isIphoneX } from '@utils'
import Bridge from '@common/bridge.js'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bridge = Bridge

Vue.use(Toast)

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

// 直接在body上添加全局的相应的设备信息
;(function () {
  const { isAndroid, isiOS } = getUA()
  if (isAndroid) {
    document.body.classList.add('android')
  }
  if (isiOS) {
    document.body.classList.add('ios')

    if (isIphoneX()) {
      document.body.classList.add('iphonex')
    }
  }
})()

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
