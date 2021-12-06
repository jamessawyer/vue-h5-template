const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  chainWebpack: (config) => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@assets', resolve('src/assets'))
      .set('@common', resolve('src/common'))
      .set('@components', resolve('src/components'))
      .set('@pages', resolve('src/pages'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    // 设置开发环境的服务
    open: true,
    port: 8888
  }
}
