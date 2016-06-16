/**
 * Wrap Koa#use function to take multiple middlewares
 * @function wrapUse
 * @return {function} - Wrapped use
 */
'use strict'

/** @lends wrapUse */
function wrapUse (use) {
  return function useWrap (middlewares) {
    let app = this
    middlewares = [].concat(middlewares || []).reduce((a, b) => [].concat(a, b), [])
    for (let middleware of middlewares) {
      use.call(app, middleware)
    }
    return app
  }
}

module.exports = wrapUse
