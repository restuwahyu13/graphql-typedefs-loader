import { isType } from 'is-any-type'
import { matchProperty } from './matchProperty'
import { GtlNodeError } from './customError'

export const optionsValidator = (options: Record<string, any>): boolean | Promise<any> => {
	if (isType(options) !== 'object' && !(options instanceof Object)) {
		return Promise.reject(new GtlNodeError('options is required'))
	} else {
		let defaultProperty: Record<string, any> = { directory: null, pattern: null, fileName: null, extension: null }
		let inOptions: boolean = matchProperty(defaultProperty, options)
		if (inOptions !== true) {
			return Promise.reject(new GtlNodeError('options property not exist'))
		} else {
			return true
		}
	}
}

export const propertyValidator = (options: Record<string, any>): any => {
	return [].concat(options).map((v): boolean | Promise<Error> => {
		const patternDirectory = /^[a-zA-Z./]+$/gi
		const patternFile = /^[a-zA-Z.]+$/gi
		const patternString = /^[a-zA-Z]+$/gi

		if ((patternString.test(v.directory) || patternDirectory.test(v.directory)) !== true && v.directory !== undefined) {
			return Promise.reject(new GtlNodeError('directory must be string'))
		} else if (patternString.test(v.extension) !== true && v.extension !== undefined) {
			return Promise.reject(new GtlNodeError('extension must be string'))
		} else if (patternFile.test(v.fileName) !== true && v.fileName !== undefined) {
			return Promise.reject(new GtlNodeError('filename must be string'))
		} else if (isType(v.pattern) !== 'string' && v.pattern !== undefined) {
			return Promise.reject(new GtlNodeError('pattern must be string'))
		} else if (v.pattern !== '**/*' && v.pattern !== undefined) {
			return Promise.reject(new GtlNodeError('pattern format not valid'))
		} else {
			const isValidator = fileValidator(options)
			if (isType(isValidator) === 'boolean') {
				return true
			}
		}
	})
}

export const fileValidator = (options: Record<string, any>): boolean | Promise<any> => {
	let fileName: string = options.fileName
	let extension: string = options.extension
	let pathExt: string

	if (fileName !== undefined) {
		pathExt = fileName.split('.')[1]
	} else {
		pathExt = extension
	}

	let extPattern: boolean = /(graphql|gql)/gi.test(pathExt)
	if (extPattern !== true) {
		return Promise.reject(new GtlNodeError('extension file not supported'))
	} else {
		return true
	}
}
