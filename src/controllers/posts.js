import * as PostsService from '@services/posts'

export function getPosts(req, res, next) {
  console.log('Getting all posts!')
  const result = PostsService.getPosts()
  res.json({
    result: result
  })
}

export function saveNewPost(req, res, next) {
  console.log(req.body)
  const result = PostsService.saveNewPost()
  res.json({
    result: result
  })
}
