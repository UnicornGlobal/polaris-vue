const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new CleanWebpackPlugin(['lib'])
  ],
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      sourceMap: false,
      parallel: true,
      extractComments: true,
      uglifyOptions: {
        topLevel: true,
        compress: {
          drop_console: true,
          hoist_funs: true,
          toplevel: true,
        },
        mangle: {
          toplevel: true
        }
      }
    })],
    usedExports: true,
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: 'VuePolaris',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: 'vue'
  }
})
