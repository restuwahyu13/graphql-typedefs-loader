exports.resolvers = {
	Query: {
		resultName(root, arg, ctx) {
			return { id: 1, name: 'restu wahyu saputra' }
		}
	},
	Mutation: {
		createUser(root, { input: { id, name } }, ctx) {
			return { id, name }
		}
	}
}
