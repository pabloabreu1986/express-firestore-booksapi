'use-strict'

import { Router } from 'express'
import { checkSchema } from 'express-validator'

import { CREATEBOOKSCHEMA } from '../middlewares/schemas.js'
import { ISVALIDBOOK } from '../middlewares/validators.js'
import { ISVALIDUSER } from '../middlewares/auth.js'

import { CREATE } from '../controllers/books.js'

export const ROUTER = Router()

ROUTER.post(
	'/books',
	[checkSchema(CREATEBOOKSCHEMA), ISVALIDBOOK, ISVALIDUSER],
	async (req, res) => {
		const _NEWBOOK = req.body

		try {
			const _ID = await CREATE(_NEWBOOK)
			res.status(201).json({
				CREATED: true,
				id: _ID
			})
		} catch (error) {
			return res.status(400).json({
				OK: false,
				error: {
					context: 'Error creating book',
					error
				}
			})
		}
	}
)
