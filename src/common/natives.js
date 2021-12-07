import { getUA } from '@utils'

/**
 * 调用原生方法
 * @param {String} name 定义的原生方法名
 * @param {Object} data 传递数据
 */
export function usingNative(name, data = '') {
  const { isAndroid, isiOS } = getUA()
  if (isAndroid) {
    if (data) {
      window.nativeMethod[name](JSON.stringify(data))
    }
    window.nativeMethod[name]()
  }
  if (isiOS) {
    if (data) {
      window.webkit.messageHandlers[name].postMessage(JSON.stringify(data))
    }
    window.webkit.messageHandlers[name].postMessage()
  }
}
