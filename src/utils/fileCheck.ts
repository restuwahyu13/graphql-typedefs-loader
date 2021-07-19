import glob from 'fast-glob'
import path from 'path'
import { isType } from 'is-any-type'

export const fileCheck = (options: Record<string, any>): string[] | any => {
	if (isType(options) !== 'object' && !(options instanceof Object)) {
		return Promise.reject(new Error('options is required'))
	}

	let readFile: string[]
	let directory: string = options.directory
	let fileName: string = options.fileName
	let pattern: string = options.pattern
	let extension: string = options.extension

	if (fileName === undefined) {
		readFile = glob.sync(path.resolve(directory, `${pattern}.${extension}`))
	} else if (pattern !== undefined && extension !== undefined) {
		readFile = glob.sync(path.resolve(directory, `${pattern}.${extension}`))
	} else if (directory !== undefined) {
		readFile = glob.sync(path.resolve(directory, `${fileName}`))
	} else {
		readFile = glob.sync(path.resolve(`${fileName}`))
	}

	return readFile
}
