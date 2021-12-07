function IsPC() {
  const userAgentInfo = navigator.userAgent
  const Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

function setupWebViewJavascriptBridge(callback) {
  if (!IsPC()) {
    // console.log("no pc");
    if (window.WebViewJavascriptBridge) {
      // eslint-disable-next-line no-undef
      return callback(WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback] // 创建一个 WVJBCallbacks 全局属性数组，并将 callback 插入到数组中。
    const WVJBIframe = document.createElement('iframe') // 创建一个 iframe 元素
    WVJBIframe.style.display = 'none' // 不显示
    // WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__' // 设置 iframe 的 src 属性
    WVJBIframe.src = 'https://__BRIDGE_LOADED__' // 设置 iframe 的 src 属性
    document.documentElement.appendChild(WVJBIframe) // 把 iframe 添加到当前文导航上。
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
}

export default {
  callhandler(name, data, callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(name, data, callback)
    })
  },

  registerhandler(name, callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.registerHandler(name, function (data, responseCallback) {
        callback(data, responseCallback)
      })
    })
  }
}
