/**
 * Find a freeport
 * @function freeport
 */
'use strict'

const aport = require('aport')

/** @lends freeport */
async function freeport () {
  return await aport()
}

module.exports = freeport
