'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
<<<<<<< HEAD
=======
  // API_ROOT: '"http://newretailweb.zhifengwangluo.com/api/"'   //线上请求前缀
>>>>>>> 1fd0ce9cddcfaa92db9454854886df498b56898c
  API_ROOT: '"http://newretailwebtest.zhifengwangluo.com/api/"'   //线上请求前缀
})