'use-strict'

import { Router } from 'express'

import { ISVALIDUSER } from '../middlewares/auth.js'

import { DELETE } from '../controllers/books.js'

export const ROUTER = Router()

ROUTER.delete('/books/:id', [ISVALIDUSER], async (req, res) => {
	const _ID = req.params.id
	try {
		const _MSG = await DELETE(_ID)

		res.json({
			OK: true,
			message: _MSG
		})
	} catch (err) {
		return res.status(400).json({
			OK: false,
			error: {
				context: 'Error deleting a book',
				err
			}
		})
	}
})
