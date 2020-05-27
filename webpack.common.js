const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const libraryName = 'polaris-vue';
const libraryNameCamelCase= 'PolarisVue';

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
    secondary: ['change-case']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    filename: '[name].[hash].js',
    library: libraryNameCamelCase,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'multiple'
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
        test: /\.css$/,
        loader: 'css-loader',
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

module.exports = config;
