import { gtl } from '../src'
import fs from 'fs-extra'
import path from 'path'

describe('GTL Testing Group', function () {
	beforeAll(function () {
		fs.writeFileSync(path.resolve(process.cwd(), 'src', 'isf.graphql'), 'hello wordl', { encoding: 'utf-8' })
		fs.writeFileSync('osf.graphql', 'hello wordl', { encoding: 'utf-8' })
	})

	afterAll(function () {
		fs.unlinkSync(path.resolve(process.cwd(), 'src', 'isf.graphql'))
		fs.unlinkSync('osf.graphql')
	})

	it('Should be gtl read file inside multiple directory success', function () {
		const graphqlLoader = gtl({ directory: 'src', pattern: '**/*', fileName: 'isf.graphql' })
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl read file outside multiple directory success', function () {
		const graphqlLoader = gtl({ pattern: '**/*', fileName: 'osf.graphql' })
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl read file inside single directory success', function () {
		const graphqlLoader = gtl({ directory: 'src', fileName: 'isf.graphql' })
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl read file outside directory success', function () {
		const graphqlLoader = gtl({ fileName: 'osf.graphql' })
		expect(graphqlLoader).toBeInstanceOf(Array)
	})
})
