import { BASE_URL } from '@config/url'
import homeRoute from './home'
import postsRoute from './posts'

/**
 * @param {Express} express an express instance
 */
const routes = (router) => {
  console.log('instance of express', router)
  router.use(`${BASE_URL}/`, homeRoute)
  router.use(`${BASE_URL}/posts`, postsRoute)
}


export default routes
