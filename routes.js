var controller = require('./controller')

module.exports = {
  index: index
}

function index(req, res) {
  var viewModel = controller.getIndexViewModel()
  res.render('index', viewModel)
}
