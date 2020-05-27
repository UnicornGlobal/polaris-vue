const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env;

let libraryName = 'polaris-vue';
let libraryNameCamelCase= 'PolarisVue';

let plugins = [], outputFile;

if (env === 'build') {
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

plugins.push(new ExtractTextPlugin(libraryName+".css"));

const config = {
  mode: env === 'build' ? 'production' : 'development',
  entry: __dirname + '/src/index.js',
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
    secondary: ['change-case']
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    filename: outputFile,
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
  plugins: plugins,
  externals: {
    vue: 'vue'
  }
};

module.exports = config;
