import controllers from '@controllers'

/**
 * @param {express.Router} router
 * @return {express.Router}
 */
function PostsRoutes(router) {
  router.get('/', controllers.PostsController.getPosts)
  router.post('/', controllers.PostsController.saveNewPost)

  return router
}

export default PostsRoutes
