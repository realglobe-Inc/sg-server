/**
 * Test case for routeMiddleware.
 * Runs with mocha.
 */
'use strict'

const routeMiddleware = require('../lib/middlewares/route_middleware.js')
const assert = require('assert')


describe('route-middleware', () => {
  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Route middleware', async ( ) => {
    assert.ok(routeMiddleware({}))
  })
})

/* global describe, before, after, it */
