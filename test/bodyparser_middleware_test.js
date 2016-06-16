/**
 * Test case for bodyparserMiddleware.
 * Runs with mocha.
 */
'use strict'

const bodyparserMiddleware = require('../lib/middlewares/bodyparser_middleware.js')
const assert = require('assert')
const co = require('co')

describe('bodyparser-middleware', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Bodyparser middleware', () => co(function * () {
    assert.ok(bodyparserMiddleware())
  }))
})

/* global describe, before, after, it */
