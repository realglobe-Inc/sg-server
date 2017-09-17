/**
 * Test case for exceptionMiddleware.
 * Runs with mocha.
 */
'use strict'

const exceptionMiddleware = require('../lib/middlewares/exception_middleware.js')
const assert = require('assert')


describe('exception-middleware', () => {
  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Exception middleware', async ( ) => {
    assert.ok(exceptionMiddleware())
  })
})

/* global describe, before, after, it */
