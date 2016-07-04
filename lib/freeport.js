/**
 * Find a freeport
 * @function freeport
 */
'use strict'

const aport = require('aport')
const co = require('co')

/** @lends freeport */
function freeport () {
  return co(function * () {
    return yield aport()
  })
}

module.exports = freeport
