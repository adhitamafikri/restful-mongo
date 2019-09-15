import { Router } from 'express'
import { BASE_URL } from '@config/url'
import HomeRoutes from './home'
import PostsRoutes from './posts'

/**
 * @param {express} app an express instance
 */
const loadRoutes = (app) => {
  console.log('#######router loader function')
  const router = Router()

  app.use(`${BASE_URL}/`, HomeRoutes(router))
  // app.use(`${BASE_URL}/posts`, PostsRoute(router))
}


export default loadRoutes
