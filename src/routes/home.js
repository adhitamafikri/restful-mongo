import controllers from '@controllers'

/**
 * @param {express.Router} router
 * @return {express.Router}
 */
function HomeRoutes(router) {
  console.log('In the HomeRoutes!')
  const controller = new controllers.HomeController()

  router.get('/', controller.getHome)

  return router
}

export default HomeRoutes
