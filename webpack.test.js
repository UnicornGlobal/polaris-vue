const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

console.log('webpack.test')

const config = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['*', '.js', '.vue', '.svg', '.css'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}

module.exports = merge(common, config)
