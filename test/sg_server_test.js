/**
 * Test case for sgServer.
 * Runs with mocha.
 */
'use strict'

const sgServer = require('../lib/sg_server.js')
const { equal, ok } = require('assert')
const co = require('co')
const aport = require('aport')
const arequest = require('arequest')

describe('sg-server', () => {
  let server, baseUrl, port
  let request = arequest.create({ jar: true })
  let setupDone = false
  let teardownDone = false
  before(() => co(function * () {
    port = yield aport()
    server = sgServer({
      public: `${__dirname}/../doc/mocks`,
      middlewares: [
        co.wrap(function * saySay (ctx, next) {
          equal(ctx.hoge, 'fuge')
          ctx.set({ quz: 'This is quz' })
          yield next()
        })
      ],
      endpoints: {
        '/api/foo': {
          'POST': (ctx) => {
            let { body } = ctx.request
            equal(body.hoge, 'This is hoge')
            ctx.body = 'This is foo'
          }
        },
        '/api/bar': (ctx) => {
          ctx.body = 'This is bar'
        },
        '/api/baz': '/api/bar' // Alias
      },
      context: {
        hoge: 'fuge'
      },
      setup () {
        setupDone = true
      },
      teardown () {
        teardownDone = true
      }
    })
    server.use((ctx, next) => {
      console.log('Not handled!', ctx.path)
      next()
    })
    ok(!setupDone)
    yield server.listen(port)
    baseUrl = `http://localhost:${port}`
    ok(setupDone)
  }))

  after(() => co(function * () {
    ok(!teardownDone)
    yield server.close()
    ok(teardownDone)
  }))

  it('Sg server', () => co(function * () {
    equal(server.port, port)
    {
      let { statusCode, body, headers } = yield request({
        method: 'POST',
        url: `${baseUrl}/api/foo`,
        json: true,
        body: { 'hoge': 'This is hoge' }
      })
      equal(statusCode, 200)
      equal(body, 'This is foo')
      equal(headers.quz, 'This is quz')
    }
    {
      let { statusCode, body, headers } = yield request({
        method: 'GET',
        url: `${baseUrl}/api/bar`,
        json: true,
        body: { 'hoge': 'This is hoge' }
      })
      equal(statusCode, 200)
      equal(body, 'This is bar')
      equal(headers.quz, 'This is quz')
    }
    {
      let { statusCode, body, headers } = yield request({
        method: 'GET',
        url: `${baseUrl}/api/baz`,
        json: true,
        body: { 'hoge': 'This is hoge' }
      })
      equal(statusCode, 200)
      equal(body, 'This is bar')
      equal(headers.quz, 'This is quz')
    }
    {
      let { statusCode, body, headers } = yield request({
        method: 'GET',
        url: `${baseUrl}/api/__not_exists`
      })
      equal(statusCode, 404)
    }
  }))
})

/* global describe, before, after, it */
