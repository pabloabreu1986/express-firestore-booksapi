'use strict'

import { DB } from '../db/index.js'

export const CREATE = async book => {
	const { id } = await DB.add(book)
	return id
}

export const DELETE = async id => {
	const res = await DB.doc(id).delete()

	return `Book with id: ${id} deleted !`
}

export const GETALL = async () => {
	const _QUERYSNAPSHOT = await DB.get()

	const _ALLBOOKS = []

	_QUERYSNAPSHOT.docs.map(book => {
		_ALLBOOKS.push({
			id: book.id,
			...book.data()
		})
	})

	return _ALLBOOKS
}

export const GETBYID = async id => {
	const _BOOK = (await DB.doc(id).get()).data()

	return _BOOK
}

export const UPDATE = async (id, book) => {
	await DB.doc(id).update(book)

	return book
}
