function HomeService() {
  console.log('Welcome to HomService!')
}

HomeService.prototype = {
  getHome: function() {
    console.log('get home from service')
  }
}

export default HomeService
