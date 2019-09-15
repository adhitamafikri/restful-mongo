import { Router } from 'express'
import { BASE_URL } from '@config/url'
import HomeRoutes from './home'
import PostsRoutes from './posts'

/**
 * @param {express.Router} router
 */
const loadRoutes = () => {
  console.log('#######router loader function')
  const router = Router()

  const routeStack = [
    HomeRoutes(router),
    PostsRoutes(router),
  ]

  router.use(routeStack)

  return router
}


export default loadRoutes
