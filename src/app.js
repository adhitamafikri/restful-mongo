import express from 'express'
import dotenv from 'dotenv'
import 'dotenv/config'

import appRoutes from '@routes'

import { ConnectDB } from '@database/connection'

const app = express()

// Middlewares

// Routes
app.use('/restful/v1', appRoutes)

// Connect DB
ConnectDB()

app.listen('4005',function() {
  console.log('running on :4005')
})
