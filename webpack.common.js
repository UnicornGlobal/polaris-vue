const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const onceImporter = require('node-sass-once-importer')

const libraryName = 'polaris-vue';
const libraryNameCamelCase= 'PolarisVue';

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: libraryNameCamelCase,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin()
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
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
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
        loader: 'vue-svg-loader'
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  externals: {
    vue: 'vue'
  }
};
