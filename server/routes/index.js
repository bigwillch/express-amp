const routes = require('express').Router();

routes.get('/', function (req, res) {
  res.redirect('/articles');
});

routes.use('/articles', require('./articles'));

module.exports = routes;