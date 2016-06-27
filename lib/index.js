/**
 * HTTP server for SUGOS
 * @module sg-server
 */

'use strict'

const sgServer = require('./sg_server')
const freeport = require('./freeport')

let lib = sgServer.bind(this)

Object.assign(lib, sgServer, {
  sgServer,
  freeport
})

module.exports = lib
