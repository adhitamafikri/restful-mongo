import express from 'express'
import dotenv from 'dotenv'
import 'dotenv/config'

import { ConnectDB } from '@database/connection'

const app = express()

// Middlewares

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Heyyy'
  })
})

app.get('/posts', (req, res) => {
  res.json({
    message: 'All Posts'
  })
})

// Connect DB
ConnectDB()

app.listen('4005',function() {
  console.log('running on :4005')
})
