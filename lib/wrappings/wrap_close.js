/**
 * Wrap server close to promise interface
 * @function wrapClose
 */
'use strict'

const co = require('co')

/** @lends wrapClose */
function wrapClose (close) {
  return co.wrap(function * wrapClose () {
    let server = this
    yield new Promise((resolve, reject) =>
      close.call(server, (err) => err ? reject(err) : resolve())
    )
    return server
  })
}

module.exports = wrapClose
