const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const { applyMiddleware } = require('graphql-middleware')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const graphqlPlayground = require('graphql-playground-middleware-express').default
const express = require('express')
const { gtl } = require('gtl')

const typeDefs = gtl({ directory: 'graphql/typeDefs', pattern: '**/*', extension: 'graphql' })
const { resolvers } = require('./graphql/resolvers')

;(async function () {
	const apolloServer = new ApolloServer({
		schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
	})

	const app = express()
	const server = http.createServer(app)

	app.get('/playground', graphqlPlayground({ endpoint: '/graphql', codeTheme: 'light' }))

	await apolloServer.start()
	apolloServer.applyMiddleware({ app })
	server.listen(3000, () => console.log(`Apollo server running on ${server.address().port}`))
})()
