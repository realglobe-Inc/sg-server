/**
 * Create a buildin public middleware
 * @function publicMiddleware
 * @param {string|string{]} root - Root directory name
 * @returns {function[]} - middlewares to use
 */
'use strict'

const koaStatic = require('koa-static')

/** @lends publicMiddleware */
function publicMiddleware (root, options) {
  return [].concat(root)
    .map((root) => koaStatic(root, options))
}

module.exports = publicMiddleware
