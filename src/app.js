import express from 'express'
import dotenv from 'dotenv'
import 'dotenv/config'

import routes from '@routes'

import { ConnectDB } from '@database/connection'

const router = express()

// Middlewares

// Routes
routes(router)

// Connect DB
ConnectDB()

router.listen('4005',function() {
  console.log('running on :4005')
})
