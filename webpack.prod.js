const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['lib'])
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: 'VuePolaris',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
