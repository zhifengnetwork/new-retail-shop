'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  API_ROOT: '"http://new_retail_test.zhifengwangluo.com/api/"'   //线上请求前缀 测试
  // API_ROOT: '"http://www.hmylst.cn/api/"'   //线上请求前缀
  // API_ROOT: '"http://www.puruitingxls.com/api/"'   //线上请求前缀
})