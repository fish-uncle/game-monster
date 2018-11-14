'use strict';
const os = require('os');
const pkg = require('./package.json');
const path = require('path');
const ip = function () {
  const ifaces = os.networkInterfaces();
  const ips = Object.values(ifaces).reduce((x, y) => x.concat(y), []);
  for (let i = 0; i < ips.length; i++) {
    const details = ips[i];
    if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
      return details.address;
    }
  }
};
const host = ip() || '127.0.0.1'; //获取内网ip
module.exports = {
  entry: {index: path.resolve(__dirname, './src/index.js')},
  devServer: {
    host: host,
    inline: true,
    port: 3333,
    quiet: false,
    hot: true, //热更新
    open: true, //打开游览器
    compress: true, //开发服务器是否启动gzip等压缩
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].js?v=[hash:7]',
    publicPath: './dist/'
  },
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/, // 忽略不用监听变更的目录
    aggregateTimeout: 500, // 防止重复保存频繁重新编译,500毫米内重复保存不打包
    poll: 1000 // 每秒询问的文件变更的次数
  },
  // devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/, use: ['style-loader', {
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
            limit: 1,
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
            name: "medias/[name].[ext]?v=[hash:7]"
          }
        },
      }
    ]
  },
};