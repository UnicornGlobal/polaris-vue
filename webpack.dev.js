const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

console.log('webpack.dev')

module.exports = merge(common, {
  context: __dirname,
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: './lib',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
