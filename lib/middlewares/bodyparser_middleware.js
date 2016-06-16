/**
 * @function bodyparserMiddleware
 */
'use strict'

const koaBodyparser = require('koa-bodyparser')

/** @lends bodyparserMiddleware */
function bodyparserMiddleware (options) {
  return koaBodyparser(options)
}

module.exports = bodyparserMiddleware
