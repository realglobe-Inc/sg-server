/**
 * Test case for publicMiddleware.
 * Runs with mocha.
 */
'use strict'

const publicMiddleware = require('../lib/middlewares/public_middleware.js')
const assert = require('assert')
const co = require('co')

describe('public-middleware', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Public middleware', () => co(function * () {
    assert.ok(publicMiddleware('hoge'))
  }))
})

/* global describe, before, after, it */
