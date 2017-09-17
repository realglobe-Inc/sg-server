/**
 * Test case for wrapListen.
 * Runs with mocha.
 */
'use strict'

const wrapListen = require('../lib/wrappings/wrap_listen.js')
const assert = require('assert')


describe('wrap-listen', () => {
  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Wrap listen', async ( ) => {
    assert.ok(wrapListen(() => null))
  })
})

/* global describe, before, after, it */
