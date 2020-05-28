const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vueLoaderConfig = require('./vue-loader.conf')
const onceImporter = require('node-sass-once-importer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const libraryName = 'polaris-vue'
const libraryNameCamelCase= 'PolarisVue'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'polaris-vue.min.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: 'VuePolaris',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'polaris-vue.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src')]
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: () => {
                return '@import "./src/resources/styles/styles.scss";'
              },
              sassOptions: {
                importer: onceImporter(),
                includePaths: [
                  path.resolve(__dirname, './src/resources/styles/styles')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true },
              { removeMetadata: true },
              { removeDesc: true },
              { removeUselessDefs: true },
              { removeXMLNS: true },
              { removeEditorsNSData: true },
              { removeEmptyAttrs: true },
              { removeHiddenmElems: true },
              { removeEmptyText: true },
              { removeEmptyContainers: true },
              { minifyStyles: true },
              { removeUnknownsAndDefaults: true },
              { removeUselessStrokeAndFill: true },
              { removeUnusedNS: true },
              { removeRasterImages: false },
              { mergePaths: true },
              { convertShapeToPath: true },
              { removeScriptElement: true }
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.svg', '.scss', '*'],
    modules: ['node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '+': resolve('src')
    }
  }
}
