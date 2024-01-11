'use strinct'

import express from 'express'
import helmet from 'helmet'

import './configs/index.js'
import './clients/firebase.js'

import { CREATE, DELETE, GET, GETALL, UPDATE } from './routes/index.js'

const { PORT } = process.env || 3000

const APP = express()
APP.use(helmet())
APP.use(express.json())

APP.use(CREATE, DELETE, GET, GETALL, UPDATE)

APP.listen(PORT, () => {
	console.log(`Express server is up and listening on port: ${PORT}`)
})
