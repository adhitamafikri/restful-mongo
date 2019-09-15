import * as PostsController from '@controllers/posts'

/**
 * @param {express.Router} router
 * @return {express.Router}
 */
function PostsRoutes(router) {
  router.get('/posts', PostsController.getPosts)
  router.post('/posts', PostsController.saveNewPost)

  return router
}

export default PostsRoutes
