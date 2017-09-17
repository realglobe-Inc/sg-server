/**
 * Test case for bodyparserMiddleware.
 * Runs with mocha.
 */
'use strict'

const bodyparserMiddleware = require('../lib/middlewares/bodyparser_middleware.js')
const assert = require('assert')

describe('bodyparser-middleware', () => {
  before(async () => {

  })

  after(async () => {

  })

  it('Bodyparser middleware', async () => {
    assert.ok(bodyparserMiddleware())
  })
})

/* global describe, before, after, it */
