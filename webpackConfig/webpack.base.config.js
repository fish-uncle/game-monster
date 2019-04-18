'use strict';
const path = require('path');
const ip = require('./ip');
const entry = require('./entry');
const htmlPlugin = require('./htmlPlugin');
const host = ip() || '127.0.0.1';
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../', 'src'),
      '_': path.resolve(__dirname),
    }
  },
  entry: entry,
  devServer: {
    openPage: '__catalog__.html',
    host: host,
    inline: true,
    quiet: false,
    hot: true,
    open: true,
    compress: true,
    proxy: {},
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/, use: ['vue-style-loader', 'style-loader', {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, 'postcss-loader']
      },
      {
        test: /\.less$/, use: ['style-loader', {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, 'less-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'imgs/[name].[ext]?v=[hash:7]'
          }
        },
      },
      {
        test: /\.(mp3|mp4)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'medias/[name].[ext]?v=[hash:7]'
          }
        },
      }
    ]
  },
  plugins: [
    ...htmlPlugin,
  ]
};