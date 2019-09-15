import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import 'dotenv/config'

import { BASE_URL } from '@config/url'
import loadRoutes from '@routes'
import { ConnectDB } from '@database/mongo/connection'

const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use(`${BASE_URL}`, loadRoutes())

// Connect DB
ConnectDB()

app.listen('4005',function() {
  console.log('running on :4005')
})
