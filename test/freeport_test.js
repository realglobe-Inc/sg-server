/**
 * Test case for freeport.
 * Runs with mocha.
 */
'use strict'

const freeport = require('../lib/freeport.js')
const assert = require('assert')
const co = require('co')

describe('freeport', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Freeport', () => co(function * () {
    let port = yield freeport()
    assert.ok(port)
  }))
})

/* global describe, before, after, it */
