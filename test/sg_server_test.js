/**
 * Test case for sgServer.
 * Runs with mocha.
 */
'use strict'

const sgServer = require('../lib/sg_server.js')
const assert = require('assert')
const co = require('co')
const aport = require('aport')
const arequest = require('arequest')

describe('sg-server', () => {
  let server, baseUrl, port
  let request = arequest.create({ jar: true })
  before(() => co(function * () {
    port = yield aport()
    server = sgServer({
      public: `${__dirname}/../doc/mocks`,
      middlewares: [
        co.wrap(function * saySay (ctx, next) {
          assert.equal(ctx.hoge, 'fuge')
          ctx.set({ quz: 'This is quz' })
          yield next()
        })
      ],
      endpoints: {
        '/api/foo': {
          'POST': (ctx) => {
            let { body } = ctx.request
            assert.equal(body.hoge, 'This is hoge')
            ctx.body = 'This is foo'
          }
        },
        '/api/bar': (ctx) => {
          ctx.body = 'This is bar'
        }
      },
      context: {
        hoge: 'fuge'
      }
    })
    yield server.listen(port)
    baseUrl = `http://localhost:${port}`
  }))

  after(() => co(function * () {
    yield server.close()
  }))

  it('Sg server', () => co(function * () {
    assert.equal(server.port, port)
    {
      let { statusCode, body, headers } = yield request({
        method: 'POST',
        url: `${baseUrl}/api/foo`,
        json: true,
        body: { 'hoge': 'This is hoge' }
      })
      assert.equal(statusCode, 200)
      assert.equal(body, 'This is foo')
      assert.equal(headers.quz, 'This is quz')
    }
    {
      let { statusCode, body, headers } = yield request({
        method: 'GET',
        url: `${baseUrl}/api/bar`,
        json: true,
        body: { 'hoge': 'This is hoge' }
      })
      assert.equal(statusCode, 200)
      assert.equal(body, 'This is bar')
      assert.equal(headers.quz, 'This is quz')
    }
  }))
})

/* global describe, before, after, it */
