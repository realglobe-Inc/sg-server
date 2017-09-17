/**
 * Test case for wrapClose.
 * Runs with mocha.
 */
'use strict'

const wrapClose = require('../lib/wrappings/wrap_close.js')
const assert = require('assert')


describe('wrap-close', () => {
  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Wrap close', async ( ) => {
    assert.ok(wrapClose(() => null))
  })
})

/* global describe, before, after, it */
