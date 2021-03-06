'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  API_ROOT: '"http://xinlings_web.zhifengwangluo.com/api/"'   //线上请求前缀 测试
  // API_ROOT: '"http://www.puruitingxls.com/api/"'   //线上请求前缀
})