export const isIphoneX = () => {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      // iPhone XR
      devicePixelRatio: 2,
      width: 414,
      height: 896
    },
    {
      // iPhone XR
      devicePixelRatio: 2,
      width: 375,
      height: 812
    },
    {
      // iPhone12 mini
      devicePixelRatio: 3,
      width: 360,
      height: 780
    },
    {
      // iPhone12 pro & iPhone12
      devicePixelRatio: 3,
      width: 390,
      height: 844
    },
    {
      // iPhone12 pro max
      devicePixelRatio: 3,
      width: 428,
      height: 926
    }
  ] // h5
  if (typeof window !== 'undefined' && window) {
    // const isIOS = /iphone/gi.test(window.navigator.userAgent);
    const isiOS = !!window.navigator.userAgent.match(
      /\(i[^;]+;( U;)? CPU.+Mac OS X/
    ) // ios终端
    if (!isiOS) return false
    const { devicePixelRatio, screen } = window
    const { width, height } = screen
    return xSeriesConfig.some(
      (item) =>
        item.devicePixelRatio === devicePixelRatio &&
        item.width === width &&
        item.height === height
    )
  }
  return false
}

export function getUA() {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或者uc浏览器
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  return {
    isAndroid,
    isiOS
  }
}
