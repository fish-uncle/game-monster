'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const {VueLoaderPlugin} = require('vue-loader');
const pkg = require('../package.json');
const base = require('./webpack.base.config');
const env = require('./env');
module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, `../dist/${pkg.name}/${env ? 'prod' : 'test'}/${pkg.version}/`),
    publicPath: '//cdn.com/',
    filename: 'js/[name].js?v=[hash:7]'
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new VueLoaderPlugin()
  ]
});