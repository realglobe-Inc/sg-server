/**
 * Test case for compose.
 * Runs with mocha.
 */
'use strict'

const compose = require('../lib/compose.js')
const assert = require('assert')


describe('compose', function () {
  this.timeout(3000)

  before(async ( ) => {

  })

  after(async ( ) => {

  })

  it('Compose', async ( ) => {
    let composed = compose([
      () => null,
      () => null
    ])
    assert.equal(typeof composed, 'function')
  })
})

/* global describe, before, after, it */
