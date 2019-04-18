'use strict';
require('@/lib/flexible.js');
const env = require('../webpackConfig/env');
if (!env) {
  require('@/lib/eruda.min.js');
  window.eruda.init();
}



