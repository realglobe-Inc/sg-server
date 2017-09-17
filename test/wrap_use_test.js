/**
 * Test case for wrapUse.
 * Runs with mocha.
 */
'use strict'

const wrapUse = require('../lib/wrappings/wrap_use.js')
const assert = require('assert')


describe('wrap-use', () => {
  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Wrap use', async ( ) => {
    assert.ok(wrapUse(() => null))
  })
})

/* global describe, before, after, it */
