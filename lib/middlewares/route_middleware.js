/**
 * Create a routing middleware
 * @function routeMiddleware
 * @param {Object} routes - Routing settings
 * @returns {function[]} - Routing middlewares
 */
'use strict'

const KoaRouter = require('koa-router')

/** @lends routeMiddleware */
function routeMiddleware (routes) {
  let router = new KoaRouter()
  for (let pathname of Object.keys(routes)) {
    for (let route of [].concat(routes[ pathname ])) {
      if (typeof route === 'function') {
        router.all(pathname, route)
      }
      for (let method of Object.keys(route)) {
        let name = String(method).toLowerCase()
        if (!router[ name ]) {
          throw new Error(`Unknown method: ${method}`)
        }
        router[ name ](pathname, route[ method ])
      }
    }
  }
  return [
    router.routes(),
    router.allowedMethods()
  ]
}

module.exports = routeMiddleware
