/**
 * Test case for wrapListen.
 * Runs with mocha.
 */
'use strict'

const wrapListen = require('../lib/wrappings/wrap_listen.js')
const assert = require('assert')
const co = require('co')

describe('wrap-listen', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Wrap listen', () => co(function * () {
    assert.ok(wrapListen(() => null))
  }))
})

/* global describe, before, after, it */
