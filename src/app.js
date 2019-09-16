import express from 'express'
import bodyParser from 'body-parser'
import 'module-alias/register'
import 'dotenv/config'

import { BASE_URL } from '@config/url'
import { ConnectDB } from '@database/mongo/connection'
import loadRoutes from '@routes'

const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use(`${BASE_URL}`, loadRoutes())

// Connect DB
ConnectDB()

app.listen('4005', () => {
  console.log('running on :4005')
})
