import { initializeApp, applicationDefault } from 'firebase-admin/app'
import '../configs/index.js'

initializeApp({
	credential: applicationDefault()
})
