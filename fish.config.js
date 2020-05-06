const path = require('path');

module.exports = {
  postCssPlugins:[
    require('postcss-pxtorem')({
      rootValue: 75, propList: ['*', '!letter-spacing']
    })
  ]
};
