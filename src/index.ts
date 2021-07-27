import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import { isType } from 'is-any-type'
import { optionsValidator, propertyValidator } from './utils/validatorCheck'
import { fileCheck } from './utils/fileCheck'
import { GtlOptions } from './types/index'
import { GtlNodeError } from './utils/customError'

export function gtl(options: GtlOptions): string[] | Promise<any> {
	let data: string
	let readFileCheck: string[]
	let readFile: Buffer
	let compress: Buffer
	let response: string

	if (isType(optionsValidator(options)) === 'boolean') {
		if (isType(propertyValidator(options)[0]) === 'boolean') {
			readFileCheck = fileCheck(options)
			if (readFileCheck.length > 0) {
				return readFileCheck.map((v: string): string => {
					data = v.replace(/.*[/]/gi, '')
					if (options.directory !== undefined) {
						readFile = fs.readFileSync(path.resolve(process.cwd(), `${options.directory}/${data.trim()}`))
						compress = zlib.brotliCompressSync(readFile, { chunkSize: 999999999, maxOutputLength: 999999999 })
						response = zlib.brotliDecompressSync(compress, { chunkSize: 999999999, maxOutputLength: 999999999 }).toString('utf-8')
					} else {
						readFile = fs.readFileSync(path.resolve(process.cwd(), `${data.trim()}`))
						compress = zlib.brotliCompressSync(readFile, { chunkSize: 999999999, maxOutputLength: 999999999 })
						response = zlib.brotliDecompressSync(compress, { chunkSize: 999999999, maxOutputLength: 999999999 }).toString('utf-8')
					}
					return response
				})
			}
		}
	}
	return Promise.reject(new GtlNodeError('.graphql or .gql file not exist in directory'))
}
