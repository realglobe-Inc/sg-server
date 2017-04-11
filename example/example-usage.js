'use strict'

const sgServer = require('sg-server')
const co = require('co')

co(function * () {
  let server = sgServer({
    /** Static directories to serve */
    static: [ 'public' ],
    /** Koa middlewares to use */
    middlewares: [
      co.wrap(function * customEndpoint (ctx, next) {
        /* ... */
        yield next()
      })
    ],
    /** Endpoint handlers */
    endpoints: {
      '/api/foo/:id': { // Pass object to handle each HTTP verbs
        'POST': (ctx) => {
          let { id } = ctx.params
          ctx.body = `This is foo with id: "${id}"`
        }
      },
      '/api': '/api/index', // Pass string to create alias
      '/api/index': () => { /* ... */ } // Pass function to handle all HTTP verbs
    }
  })

  yield server.listen(3000)

  // To close server.
  // yield server.close()
}).catch((err) => console.error(err))
