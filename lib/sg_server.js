/**
 * Create web server
 * @function sgServer
 * @param {object} config - Server configuration
 * @param {function[]} [config.middlewares=[]] - Middlewares instance
 * @param {string} [config.keys] - Koa keys
 * @param {Object} [config.context] - Koa context prototype
 * @param {function} [config.onError] - Error handler
 * @param {string} [config.static] - Public directories.
 * @param {Object} [config.endpoints] - Endpoint settins
 * @returns {http.Server} - Http server instance
 */
'use strict'

const http = require('http')
const Koa = require('koa')

const bodyparserMiddleware = require('./middlewares/bodyparser_middleware')
const exceptionMiddleware = require('./middlewares/exception_middleware')
const staticMiddleware = require('./middlewares/static_middleware')
const routeMiddleware = require('./middlewares/route_middleware')

const wrapClose = require('./wrappings/wrap_close')
const wrapListen = require('./wrappings/wrap_listen')
const wrapUse = require('./wrappings/wrap_use')

// Deprecated config names
const deprecations = {
  'public': 'static'
}

/** @lends sgServer */
function sgServer (config = {}) {
  for (let name of Object.keys(deprecations)) {
    if (config[ name ]) {
      let shouldBe = deprecations[ name ]
      console.warn(`[sg-server] config.${name} is now deprecated. Use config.${shouldBe} instead.`)
      config[ shouldBe ] = config[ shouldBe ] || config[ name ]
    }
  }

  let {
    keys,
    context,
    onError,
    middlewares,
    endpoints
  } = config

  let static_ = config.static

  const app = new Koa()
  app.use = wrapUse(app.use)

  let server = http.createServer(app.callback())

  app.use(exceptionMiddleware())
  app.use(bodyparserMiddleware())

  if (static_) {
    app.use(staticMiddleware(static_))
  }

  app.use(middlewares)

  if (endpoints) {
    app.use(routeMiddleware(endpoints))
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
    close: wrapClose(server.close),
    addMiddleware (middleware) {
      app.use(middleware)
    },
    addEndpoints (endpoints) {
      app.use(routeMiddleware(endpoints))
    }
  })

  Object.defineProperties(server, {
    port: {
      get () { return server.address().port }
    }
  })

  return server
}

module.exports = sgServer
