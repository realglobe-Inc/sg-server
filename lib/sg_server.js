/**
 * Create web server
 * @function sgServer
 * @param {object} config - Server configuration
 * @param {function[]} config.middlewares - Middlewares instance
 * @param {string} [options.keys] - Koa keys
 * @param {Object} [options.context] - Koa context prototype
 * @param {function} [options.onError] - Error handler
 * @param {string|string[]} [options.public] - Public directories.
 * @param {Object} [options.routes] - Routers
 * @returns {http.Server} - Http server instance
 */
'use strict'

const http = require('http')
const Koa = require('koa')

const exceptionMiddleware = require('./middlewares/exception_middleware')
const publicMiddleware = require('./middlewares/public_middleware')
const routeMiddleware = require('./middlewares/route_middleware')

const wrapClose = require('./wrappings/wrap_close')
const wrapListen = require('./wrappings/wrap_listen')
const wrapUse = require('./wrappings/wrap_use')

/** @lends sgServer */
function sgServer (config = {}) {
  let { keys, context, onError, middlewares, routes } = config
  let public_ = config.public

  const app = new Koa()
  app.use = wrapUse(app.use)

  let server = http.createServer(app.callback())

  app.use(exceptionMiddleware())

  if (public_) {
    app.use(publicMiddleware(public_))
  }

  app.use(middlewares)

  if (routes) {
    app.use(routeMiddleware(routes))
  }

  if (keys) {
    app.keys = keys
  }

  if (onError) {
    app.on('error', onError)
  }

  Object.assign(app.context, { server }, context)

  Object.assign(server, {
    // Wrap listen
    listen: wrapListen(server.listen),
    close: wrapClose(server.close)
  })

  return server
}

module.exports = sgServer
