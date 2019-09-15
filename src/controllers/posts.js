import PostsService from '@services/posts'

const PostsController = {
  getPosts: function(req, res, next) {
    console.log('Getting all posts!')
    const result = PostsService.getPosts()
    res.json({
      result: result
    })
  },

  saveNewPost: function(req, res, next) {
    console.log(req.body)
    const result = PostsService.saveNewPost()
    res.json({
      result: result
    })
  }
}

export default PostsController
