/**
 * Test case for compose.
 * Runs with mocha.
 */
'use strict'

const compose = require('../lib/compose.js')
const assert = require('assert')
const co = require('co')

describe('compose', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Compose', () => co(function * () {
    let composed = compose([
      () => null,
      () => null
    ])
    assert.equal(typeof composed, 'function')
  }))
})

/* global describe, before, after, it */
