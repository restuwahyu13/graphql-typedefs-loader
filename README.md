# Graphql Typedefs loader

[![Build Status](https://travis-ci.com/restuwahyu13/graphql-typedefs-loader.svg?branch=main)](https://travis-ci.com/restuwahyu13/graphql-typedefs-loader)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/restuwahyu13/midtrans-node.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/restuwahyu13/gtlcontext:javascript) [![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/graphql-typedefs-loader/badge.svg?branch=main)](https://coveralls.io/github/restuwahyu13/graphql-typedefs-loader?branch=main) [![codebeat badge](https://codebeat.co/badges/857cbfb1-53a4-41e5-a9a0-38152987a7d4)](https://codebeat.co/projects/github-com-restuwahyu13-graphql-typedefs-loader-main) ![node-current](https://img.shields.io/node/v/gtl?style=flat-square) ![npm](https://img.shields.io/npm/dm/gtl) ![npm bundle size](https://img.shields.io/bundlephobia/min/gtl) ![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/gtl) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/gtl?style=flat-square) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/gtlblob/main/CONTRIBUTING.md)

**Graphql Typedefs Loader** is simple multiple loader schema for GraphQL, you can load many schema files with extension `.graphql` in your GraphQL project, please check more example usage, how about this module it works.

- [Installation](#installation)
- [Example Usage](#example-usage)
- [Testing](#testing)
- [Bugs](#bugs)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
$ npm install gtl -S or yarn add gtl -S
```

## Example Usage

  + ##### Example Usage Multiple File Inside Directory

    - ##### Example Usage Using CommonJs

    ```javascript
      const http from = require('http')
      const { ApolloServer } = require('apollo-server-express')
      const { applyMiddleware } = require('graphql-middleware')
      const { makeExecutableSchema } = require('@graphql-tools/schema')
      const playground = require('graphql-playground-middleware-express')
      const express = require('express')
      // import module like this
      const { gtl } = require('gtl')

      // change with your graphql schema location folder
      const typeDefs = gtl({ directory: 'graphql/typeDefs', pattern: '**/*', extension: 'graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

    - ##### Example Usage Using ES6

    ```javascript
      import http from 'http'
      import { ApolloServer } from 'apollo-server-express'
      import { applyMiddleware } from 'graphql-middleware'
      import { makeExecutableSchema } from '@graphql-tools/schema'
      import playground from 'graphql-playground-middleware-express'
      import express from 'express'
      // import module like this
      import { gtl } from 'gtl'

      // change with your graphql schema location folder
      const typeDefs = gtl({ directory: 'graphql/typeDefs', pattern: '**/*', extension: 'graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```
  + ##### Example Usage Multiple File Outside Directory

    - ##### Example Usage Using CommonJs

    ```javascript
      const http from = require('http')
      const { ApolloServer } = require('apollo-server-express')
      const { applyMiddleware } = require('graphql-middleware')
      const { makeExecutableSchema } = require('@graphql-tools/schema')
      const playground = require('graphql-playground-middleware-express')
      const express = require('express')
      // import module like this
      const { gtl } = require('gtl')

      // change with your graphql schema location folder
      const typeDefs = gtl({ pattern: '**/*', extension: 'graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

    - ##### Example Usage Using ES6

    ```javascript
      import http from 'http'
      import { ApolloServer } from 'apollo-server-express'
      import { applyMiddleware } from 'graphql-middleware'
      import { makeExecutableSchema } from '@graphql-tools/schema'
      import playground from 'graphql-playground-middleware-express'
      import express from 'express'
      // import module like this
      import { gtl } from 'gtl'

      // change with your graphql schema location folder
      const typeDefs = gtl({ pattern: '**/*', extension: 'graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

  + ##### Example Usage Single File Inside Directory

    - ##### Example Usage Using CommonJs

    ```javascript
      const http from = require('http')
      const { ApolloServer } = require('apollo-server-express')
      const { applyMiddleware } = require('graphql-middleware')
      const { makeExecutableSchema } = require('@graphql-tools/schema')
      const playground = require('graphql-playground-middleware-express')
      const express = require('express')
      // import module like this
      const { gtl } = require('gtl')

      // change with your graphql schema location folder
      const typeDefs = gtl({ directory: 'graphql/typedefs' , fileName: 'schema.graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

    - ##### Example Usage Using ES6

    ```javascript
      import http from 'http'
      import { ApolloServer } from 'apollo-server-express'
      import { applyMiddleware } from 'graphql-middleware'
      import { makeExecutableSchema } from '@graphql-tools/schema'
      import playground from 'graphql-playground-middleware-express'
      import express from 'express'
      // import module like this
      import { gtl } from 'gtl'

      // change with your graphql schema location folder
      const typeDefs = gtl({ directory: 'graphql/typedefs' , fileName: 'schema.graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

  + ##### Example Usage Single File Outside Directory

    - ##### Example Usage Using CommonJs

    ```javascript
      const http from = require('http')
      const { ApolloServer } = require('apollo-server-express')
      const { applyMiddleware } = require('graphql-middleware')
      const { makeExecutableSchema } = require('@graphql-tools/schema')
      const playground = require('graphql-playground-middleware-express')
      const express = require('express')
      // import module like this
      const { gtl } = require('gtl')

      // change with your graphql schema location folder
      const typeDefs = gtl({ fileName: 'schema.graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

    - ##### Example Usage Using ES6

    ```javascript
      import http from 'http'
      import { ApolloServer } from 'apollo-server-express'
      import { applyMiddleware } from 'graphql-middleware'
      import { makeExecutableSchema } from '@graphql-tools/schema'
      import playground from 'graphql-playground-middleware-express'
      import express from 'express'
      // import module like this
      import { gtl } from 'gtl'

      // change with your graphql schema location folder
      const typeDefs = gtl({ fileName: 'schema.graphql' }) 
      const { resolvers } = require('./graphql/resolvers')
      const graphqlPlayground = playground.default

      (async function () {
        const apolloServer = new ApolloServer({
          schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
        })

        const app = express()
        const server = http.createServer(app)

        app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

        await apolloServer.start()
        apolloServer.applyMiddleware({ app })
        server.listen(process.env.PORT || 3000, () => console.log(`Apollo server running on ${server.address().port}`))
      })()
    ```

### Testing

- Testing Via Local

  ```sh
  npm test or make test
  ```

- Testing Via Local And Build

  ```sh
  make build
  ```

- Testing Via Docker

  ```sh
  docker build -t gtl or make dkb tag=gtl
  ```

### Bugs

For information on bugs related to package libraries, please visit [here](https://github.com/restuwahyu13/graphql-typedefs-loader/issues)

### Contributing

Want to make **GTL** more perfect ? Let's contribute and follow the [contribution guide.](https://github.com/restuwahyu13/graphql-typedefs-loader/blob/main/CONTRIBUTING.md)

### License

- [MIT License](https://github.com/restuwahyu13/graphql-typedefs-loader/blob/main/LICENSE.md)

<p align="right" style="padding: 5px; border-radius: 100%; background-color: red; font-size: 2rem;">
  <b><a href="#graphql-typedefs-loader">BACK TO TOP</a></b>
</p>
