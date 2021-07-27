import fs from 'fs'
import path from 'path'
import { gtl } from '../src'
import { matchProperty } from './../src/utils/matchProperty'
import { fileCheck } from './../src/utils/fileCheck'
import { fileValidator, optionsValidator, propertyValidator } from './../src/utils/validatorCheck'

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

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl read file outside multiple directory success', function () {
		const graphqlLoader = gtl({ pattern: '**/*', fileName: 'osf.graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl read file inside single directory success', function () {
		const graphqlLoader = gtl({ directory: 'src', fileName: 'isf.graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl read file outside directory success', function () {
		const graphqlLoader = gtl({ fileName: 'osf.graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl matchProperty success', function () {
		const defaultProperty = { directory: null, pattern: null, fileName: null, extension: null }
		const graphqlLoader = matchProperty(defaultProperty, { directory: null, pattern: null, fileName: null, extension: null })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeTruthy()
	})

	it('Should be gtl matchProperty error', function () {
		const defaultProperty = { directory: null, pattern: null, fileName: null, extension: null }
		const graphqlLoader = matchProperty(defaultProperty, { directoryx: null, patternx: null, fileNamex: null, extensionx: null })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeFalsy()
	})

	it('Should be gtl fileCheck success', function () {
		const gtlPRoperty = { directory: 'src', fileName: 'isf.graphql' }
		const graphqlLoader = fileCheck(gtlPRoperty)

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Array)
	})

	it('Should be gtl fileValidator success', function () {
		const graphqlLoader = fileValidator({ extension: 'graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeTruthy()
	})

	it('Should be gtl fileValidator error', function () {
		const graphqlLoader = fileValidator({ extension: 'ts' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Promise)
	})

	it('Should be gtl optionsValidator success', function () {
		const graphqlLoader = optionsValidator({ directory: 'src', pattern: '**/*', fileName: 'isf.graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeTruthy()
	})

	it('Should be gtl optionsValidator error', function () {
		const graphqlLoader = optionsValidator({ directoryx: 'src', patternx: '**/*', fileNamex: 'isf.graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeInstanceOf(Promise)
	})

	it('Should be gtl propertyValidator success', function () {
		const graphqlLoader = propertyValidator({ directory: 'src', pattern: '**/*', fileName: 'isf.graphql' })

		expect(graphqlLoader).toBeDefined()
		expect(graphqlLoader).toBeTruthy()
	})
})
