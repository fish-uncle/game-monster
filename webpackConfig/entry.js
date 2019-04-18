'use strict';
const path = require('path');
const data = require('../config/config');
const env = require('./env');
let entry = {};
data.forEach(item => {
  const _path = item.dir ? item.dir : path.resolve(__dirname, '../src/pages/' + item.key + '/index.js');
  const type = item.type.toLocaleLowerCase();
  entry[item.key] = type === 'h5' && item.language === 'react' ? ['@babel/polyfill', _path] : _path;
  item['template'] = type === 'h5' ? 'h5.html' : 'pc.html';
});
env ? void 0 :
  entry['__catalog__'] = ['@babel/polyfill', path.resolve(__dirname, '../config/__catalog__.js')];
entry['__h5__'] = [path.resolve(__dirname, '../config/__h5__.js')];
module.exports = entry;