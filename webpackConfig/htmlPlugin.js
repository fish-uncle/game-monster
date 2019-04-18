'use strict';
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');
const data = require('../config/config');
const env = require('./env');
const htmlPlugin = data.map(item => new HTMLPlugin(
  {
    favicon: 'favicon.ico',
    template: path.resolve(__dirname, '../template/' + item.template),
    filename: item.key + '.html',
    title: item.title,
    minify: {
      removeComments: true,
      collapseWhitespace: false,
      removeAttributeQuotes: true
    },
    chunks: item.type === 'h5' ? [item.key, '__h5__'] : [item.key]
  }
));

env ? void 0 : htmlPlugin.push(new HTMLPlugin(
  {
    favicon: 'favicon.ico',
    template: path.resolve(__dirname, '../template/h5.html'),
    filename: '__catalog__.html',
    title: '目录',
    minify: {
      removeComments: true,
      collapseWhitespace: false,
      removeAttributeQuotes: true
    },
    chunks: ['__catalog__', '__h5__']
  }
));

module.exports = htmlPlugin;