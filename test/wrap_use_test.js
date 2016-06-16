/**
 * Test case for wrapUse.
 * Runs with mocha.
 */
'use strict'

const wrapUse = require('../lib/wrappings/wrap_use.js')
const assert = require('assert')
const co = require('co')

describe('wrap-use', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Wrap use', () => co(function * () {
    assert.ok(wrapUse(() => null))
  }))
})

/* global describe, before, after, it */
