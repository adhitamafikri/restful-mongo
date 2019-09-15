const express = require('express');
const dotenv = require('dotenv')

const app = express()
dotenv.Load()
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


app.listen('4005',function() {
  console.log('running on :4005')
})
