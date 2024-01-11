'use-strict'

import { Router } from 'express'
import { ISVALIDUSER } from '../middlewares/auth.js'

import { UPDATE } from '../controllers/books.js'
export const ROUTER = Router()

ROUTER.put('/books/:id', [ISVALIDUSER], async (req, res) => {
	const _ID = req.params.id
	const _BOOK = req.body

	try {
		const _MSG = await UPDATE(_ID, _BOOK)
		res.json({
			UPDATED: true,
			message: _MSG
		})
	} catch (error) {
		return res.status(400).json({
			OK: false,
			err
		})
	}
})
