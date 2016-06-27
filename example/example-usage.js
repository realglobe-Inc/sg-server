'use strict'

const sgServer = require('sg-server')
const co = require('co')

co(function * () {
  let server = sgServer({
    /** Static directories to serve */
    public: [ 'public' ],
    /** Koa middlewares to use */
    middlewares: [
      co.wrap(function * customEndpoint (ctx, next) {
        /* ... */
        yield next()
      })
    ],
    /** Routing handler */
    endpoints: {
      '/api/foo': {
        'POST': (ctx) => {
          ctx.body = 'This is foo'
        }
      }
    }
  })

  yield server.listen(3000)

  // To close server.
  // yield server.close()
}).catch((err) => console.error(err))
