import { isType } from 'is-any-type'
import { matchProperty } from './matchProperty'

export const validatorCheck = (options: Record<string, any>): any => {
	let defaultProperty: Record<string, any> = { directory: null, pattern: null, fileName: null, extension: null }
	let inOptions: boolean = matchProperty(defaultProperty, options)

	if (isType(options) !== 'object' && !(options instanceof Object)) {
		return Promise.reject(new Error('options is required'))
	} else if (inOptions !== true) {
		return Promise.reject(new Error('options property not exist'))
	} else {
		let fileName: string = options.fileName
		let extension: string = options.extension
		let pathExt: string

		if (fileName !== undefined) {
			pathExt = fileName.split('.')[1]
		} else {
			pathExt = extension
		}

		let extPattern: boolean = /[graphql]/gi.test(pathExt)
		if (extPattern !== true) {
			return Promise.reject(new Error('extension file not supported'))
		} else {
			return true
		}
	}
}
