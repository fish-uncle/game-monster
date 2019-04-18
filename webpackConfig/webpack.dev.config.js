'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const {VueLoaderPlugin} = require('vue-loader');
const Jarvis = require('webpack-jarvis');
const ip = require('./ip');
const pkg = require('../package.json');
const base = require('./webpack.base.config');
const env = require('./env');
module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, `../dist/${pkg.name}/${env ? 'prod' : 'test'}/${pkg.version}/`),
    filename: 'js/[name].js?v=[hash:7]'
  },
  devServer: {
    clientLogLevel: 'warning',
    port: '1993',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 500,
    poll: 1000
  },
  plugins: [
    new Jarvis({
      host: ip() || '127.0.0.1',
      port: 223
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
});