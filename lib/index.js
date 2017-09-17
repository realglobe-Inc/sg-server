/**
 * HTTP server for SUGOS
 * @module sg-server
 */

'use strict'

const sgServer = require('./sg_server')
const freeport = require('./freeport')
const compose = require('./compose')

const lib = sgServer.bind(this)

Object.assign(lib, sgServer, {
  sgServer,
  compose,
  freeport
})

module.exports = lib
