const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')

console.log('webpack.dev')

module.exports = merge(common, {
  context: __dirname,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './lib',
    index: 'index.html',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'polaris-vue.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: 'VuePolaris',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
