'use strinct'

export const ISVALIDUSER = (req, res, next) => {
	// implement user validation here and use it before create, delete or update
	// we assume the user is valid ;)
	next()
}
