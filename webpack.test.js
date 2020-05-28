const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

console.log('webpack.test')

const config = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: 'VuePolaris',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.svg', '.css'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      'vue$': 'vue/dist/vue.esm.js',
      '*': path.join(__dirname, 'src')
    }
  }
}

module.exports = merge(common, config)
