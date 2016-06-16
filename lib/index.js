/**
 * HTTP server for SUGOS
 * @module sg-server
 */

'use strict'

const sgServer = require('./sg_server')

let lib = sgServer.bind(this)

Object.assign(lib, sgServer, {
  sgServer
})

module.exports = lib
