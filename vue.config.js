/*
 * @Description: vue project config for cli3
 * @Author: bayesba
 * @Date: 2019-02-13 14:07:26
 * @LastEditTime: 2019-07-19 14:32:08
 * @LastEditors: Please set LastEditors
 */

module.exports = {
  // chainWebpack:  config => {
  //   config
  //   .entry('index')
  //     .add('babel-polyfill')
  // },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://api-test.shjj-gcop.maiunsoft.top',
        // target: 'http://47.93.35.179:8070',
        // target: 'http://121.37.161.44:30090',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true
      },
      '/file': {
        target: 'http://api-test.shjj-gcop.maiunsoft.top',
        // target: 'http://47.93.35.179:8070',
        // target: 'http://121.37.161.44:30090',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  }
}
