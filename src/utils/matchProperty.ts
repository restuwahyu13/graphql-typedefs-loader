export const matchProperty = (data: Record<string, any>, compare: Record<string, any>): boolean => {
	const compareIn = Object.keys(compare)
	const newInData = compareIn.map((v) => `${v}` in data)
	return newInData.includes(false) ? false : true
}
