import { gtl } from '../src'
import fs from 'fs-extra'
import path from 'path'

describe('GTL Testing Group', function () {
	beforeAll(function () {
		fs.writeFileSync(path.join(process.cwd(), 'schema.graphql'), 'hello wordl', { encoding: 'utf-8' })
	})

	afterAll(function () {
		fs.unlinkSync(path.join(process.cwd(), 'schema.graphql'))
	})

	it('Should be gtl function is defined', function () {
		const graphqlLoader = gtl({ fileName: 'schema.graphql' })
		expect(graphqlLoader).toBeDefined()
	})

	it('Should be gtl read file success', function () {
		const graphqlLoader = gtl({ fileName: 'schema.graphql' })
		expect(graphqlLoader).toBeInstanceOf(Array)
	})
})
