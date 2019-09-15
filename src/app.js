import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import 'dotenv/config'

import routes from '@routes'

import { ConnectDB } from '@database/connection'

const router = express()

// Middlewares
router.use(bodyParser.json())

// Routes
routes(router)

// Connect DB
ConnectDB()

router.listen('4005',function() {
  console.log('running on :4005')
})
