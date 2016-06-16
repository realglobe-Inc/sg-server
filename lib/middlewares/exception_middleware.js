/**
 * Create an exceptionMiddleware
 * @function exceptionMiddleware
 */
'use strict'

const co = require('co')

/** @lends exceptionMiddleware */
function exceptionMiddleware () {
  return co.wrap(function * uncaughtErrorHandler (ctx, next) {
    try {
      yield next()
    } catch (err) {
      console.error('Uncaught exception', err)
      ctx.status = 500
    }
  })
}

module.exports = exceptionMiddleware
