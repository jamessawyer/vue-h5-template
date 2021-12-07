const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

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
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    // 设置开发环境的服务
    open: true,
    port: 8888
  }
}
