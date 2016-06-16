/**
 * @function wrapListen
 */
'use strict'

const co = require('co')

/** @lends wrapListen */
function wrapListen (listen) {
  return co.wrap(function * listenWrap (port) {
    let server = this
    yield new Promise((resolve, reject) =>
      listen.call(server, port, (err) => err ? reject(err) : resolve())
    )
    return server
  })
}

module.exports = wrapListen
