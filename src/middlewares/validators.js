'use strinct'

import { response } from 'express'
import { validationResult } from 'express-validator'

export const ISVALIDBOOK = (req, res = response, next) => {
	const _ERRORS = validationResult(req)

	if (!_ERRORS.isEmpty()) {
		return res.status(400).json({
			OK: false,
			errors: _ERRORS.mapped()
		})
	}
	next()
}
