sg-server
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-server
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-server
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-server.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-server
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-server.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sg-server/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-server
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-server.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-server.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-server
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-server.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-server
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-server.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

HTTP server for SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>

Using [koa](https://github.com/koajs/koa) as a base framework 


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sg-server --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------

```javascript
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
    /** Endpoint handlers */
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Signature.md.hbs" Start -->

<a name="section-doc-guides-03-signature-md"></a>
Signature
-------

#### sgServer(config) -> http.Server

Create web server

##### Args

| Name | Type | Default | Description |
| --- | ---- | --- | --- |
| config | object  |  | Server configuration |
| config.middlewares | function[]  | [] | Middlewares instance |
| config.keys | string  |  | Koa keys |
| config.context | Object  |  | Koa context prototype |
| config.onError | function  |  | Error handler |
| config.public | string  |  | Public directories. |
| config.endpoints | Object  |  | Endpoint settins |


<!-- Section from "doc/guides/03.Signature.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sg-server/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos](https://github.com/realglobe-Inc/sugos)
+ [koa](https://github.com/koajs/koa)

<!-- Links End -->
