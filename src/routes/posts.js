import express from 'express'

const router = express.Router()

router.get('/posts', (req, res) => {
  res.json({
    message: {
      result: {
        message: 'All Posts'
      }
    }
  })
})

export default router
