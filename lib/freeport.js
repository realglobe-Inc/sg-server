/**
 * Find a freeport
 * @function freeport
 */
'use strict'

const apemanport = require('apemanport')
const co = require('co')

/** @lends freeport */
function freeport () {
  return co(function * () {
    return yield apemanport.find()
  })
}

module.exports = freeport
