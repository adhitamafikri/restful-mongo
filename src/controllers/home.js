import services from '@services'

function HomeController() {
  this._name = 'sdfsd'
  console.log('Welcome to HomeController!', this._name)
}

HomeController.prototype = {
  getHome: function(req, res, next) {
    console.log('Getting Home')
    res.json({
      result: 'Yeay'
    })
  }
}

export default HomeController
