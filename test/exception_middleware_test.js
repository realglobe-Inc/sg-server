/**
 * Test case for exceptionMiddleware.
 * Runs with mocha.
 */
'use strict'

const exceptionMiddleware = require('../lib/middlewares/exception_middleware.js')
const assert = require('assert')
const co = require('co')

describe('exception-middleware', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Exception middleware', () => co(function * () {
    assert.ok(exceptionMiddleware())
  }))
})

/* global describe, before, after, it */
