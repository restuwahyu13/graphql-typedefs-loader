import path from 'path'
import glob from 'fast-glob'
import fs from 'fs-extra'

export interface IGraphqTypeDefsLoader {
	directory?: string
	pattern?: string
	fileName?: string
	extension?: string
}

export function gtl(options: IGraphqTypeDefsLoader): string[] | Promise<string> {
	let readFile: string[]
	let typeDefsLoader: string

	if (options.extension !== undefined || options.pattern !== undefined || options.directory !== undefined) {
		readFile = glob.sync(path.join(process.cwd(), `${options.directory}/${options.pattern}.${options.extension}`))
	} else if (options.directory !== undefined) {
		readFile = glob.sync(path.join(process.cwd(), `${options.directory}/${options.fileName}`))
	} else {
		readFile = glob.sync(path.join(process.cwd(), `${options.fileName}`))
	}

	if (readFile.length > 0) {
		return readFile.map((v: string): string => {
			let data = v.replace(/.*[/]/gi, '')

			if (options.directory !== undefined) {
				typeDefsLoader = fs.readFileSync(path.join(process.cwd(), `${options.directory}/${data}`)).toString('utf-8')
			} else {
				typeDefsLoader = fs.readFileSync(path.join(process.cwd(), `${data}`)).toString('utf-8')
			}

			return typeDefsLoader
		})
	}
	return Promise.reject(new Error('.graphql not exist in directory'))
}
