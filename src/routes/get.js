'use-strict'

import { Router } from 'express'
import { GETBYID } from '../controllers/books.js'
export const ROUTER = Router()

ROUTER.get('/books/:id', async (req, res) => {
	const _ID = req.params.id //VG8rQwHDeDb2b2R1j5Xx

	try {
		const _ALLBOOKS = await GETBYID(_ID)
		res.json({
			OK: true,
			found: _ALLBOOKS.lenght,
			books: _ALLBOOKS
		})
	} catch (error) {
		return res.status(404).json({
			OK: false,
			message: 'Book not found'
		})
	}
})
