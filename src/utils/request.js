import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 10 * 1000
})

service.defaults.headers['Content-Type'] = 'application/json'

// 用于存放使用表单请求的APIS
const FORM_URLS = []
// 不需要使用token的APIS
const NO_AUTH = ['/login']
// 用于将请求加入到数值中，然后全局显示或者隐藏loading
let requestCount = 0 // 正在请求的数量
let isLoading = false // 是否已经显示loading

function setLoading(config) {
  if (config.showLoading) {
    // 在自定义配置中是否显示loading，默认是true
    requestCount++
  }
  console.log('_request_count', requestCount)
  if (requestCount > 0 && !isLoading) {
    // 如果请求数量大于1 并且没有显示isLoading, 则全局显示loading
    isLoading = true
    // console.log('####显示loading###')

    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    })
  }
}

function hideLoading() {
  if (requestCount > 0) {
    // 如果已经完成，则将其从 requestQueue 中移除
    requestCount--
  }
  if (requestCount === 0 && isLoading) {
    // 如果请求队列中没有任务了，并且isLoading为true, 则隐藏全局的loading
    isLoading = false
    // console.log('####隐藏loading success###')
    Toast.clear()
  }
}

service.interceptors.request.use(
  async (config) => {
    if (FORM_URLS.includes(config.url)) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    if (!NO_AUTH.includes(config.url)) {
      const token = await localStorage.getItem('TOKEN')
      if (token) {
        config.headers.Authorization = token
      }
    }
    // console.log('config.url', config.url)
    // console.log('config', config)
    setLoading(config)

    // console.log('axios interceptors')
    return config
  },
  (err) => {
    hideLoading()
    // console.log('request err', err)

    if (err.message === 'Network Error') {
      // message.warning('网络连接异常！')
      console.log('网络连接异常')
    }
    if (err.code === 'ECONNABORTED') {
      // message.warning('请求超时，请重试')
      Toast('网络异常，请稍后重试！')

      console.log('请求超时')
    }
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (response) => {
    // console.log('response', response)
    hideLoading()
    return response
  },
  (err) => {
    hideLoading()
    // console.log('response err', err)
    return Promise.reject(err)
  }
)

const get = (url, params, config = { showLoading: true }) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'GET',
      url,
      params,
      ...config
    })
      .then((response) => {
        resolve(response)
      })
      .catch((err) => reject(err))
  })
}

const post = (url, data, config = { showLoading: true }) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'POST',
      url,
      data,
      ...config
    })
      .then((response) => {
        resolve(response)
      })
      .catch((err) => reject(err))
  })
}

export default { get, post }
