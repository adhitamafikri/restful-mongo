import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import 'dotenv/config'

import loadRoutes from '@routes'

import { ConnectDB } from '@database/mongo/connection'

const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
loadRoutes(app)

// Connect DB
ConnectDB()

app.listen('4005',function() {
  console.log('running on :4005')
})
