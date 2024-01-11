'use-strict'

import { Router } from 'express'

import { GETALL } from '../controllers/books.js'

export const ROUTER = Router()

ROUTER.get('/books', async (req, res) => {
	try {
		const _ALLBOOKS = await GETALL()
		res.json({
			OK: true,
			count: _ALLBOOKS.length,
			books: _ALLBOOKS
		})
	} catch (error) {
		return res.status(400).json({
			OK: false,
			error: {
				context: 'Error getting all books',
				error
			}
		})
	}
})
