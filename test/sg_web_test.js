/**
 * Test case for sgWeb.
 * Runs with mocha.
 */
'use strict'

const sgWeb = require('../lib/sg_web.js')
const assert = require('assert')
const co = require('co')
const apemanport = require('apemanport')
const apemanrequest = require('apemanrequest')

describe('sg-web', () => {
  let server, baseUrl
  let request = apemanrequest.create({ jar: true })
  before(() => co(function * () {
    let port = yield apemanport.find()
    server = sgWeb({
      public: `${__dirname}/../doc/mocks`,
      middlewares: [
        co.wrap(function * saySay (ctx, next) {
          ctx.set({ foo: 'bar' })
          yield next()
        })
      ],
      routes: {
        '/api/foo': {
          'POST': (ctx) => {
            ctx.body = 'This is foo'
          }
        }
      }
    })
    yield server.listen(port)
    baseUrl = `http://localhost:${port}`
  }))

  after(() => co(function * () {
    yield server.close()
  }))

  it('Sg web', () => co(function * () {
    let { statusCode, body, headers } = yield request({
      method: 'POST',
      url: `${baseUrl}/api/foo`,
      json: true,
      body: {
        foo: 'bar'
      }
    })
    assert.equal(statusCode, 200)
    assert.equal(body, 'This is foo')
    assert.equal(headers.foo, 'bar')
  }))
})

/* global describe, before, after, it */
