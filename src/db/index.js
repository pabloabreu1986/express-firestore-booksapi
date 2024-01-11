import { getFirestore } from 'firebase-admin/firestore'

const _COLLECTION = process.env.COLLECTION

export const DB = getFirestore().collection(_COLLECTION)
