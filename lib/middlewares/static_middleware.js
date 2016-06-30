/**
 * Create a buildin static middleware
 * @function staticMiddleware
 * @param {string|string{]} root - Root directory name
 * @returns {function[]} - middlewares to use
 */
'use strict'

const koaStatic = require('koa-static')

/** @lends staticMiddleware */
function staticMiddleware (root, options) {
  return [].concat(root)
    .map((root) => koaStatic(root, options))
}

module.exports = staticMiddleware
