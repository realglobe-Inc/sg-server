/**
 * Test case for freeport.
 * Runs with mocha.
 */
'use strict'

const freeport = require('../lib/freeport.js')
const assert = require('assert')


describe('freeport', () => {
  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Freeport', async ( ) => {
    let port = await freeport()
    assert.ok(port)
  })
})

/* global describe, before, after, it */
