const routes = require('express').Router();

const article_controller = require('../../controllers/articleController');

routes.get('/', article_controller.article_list);

routes.get('/:alias', article_controller.article_full);

module.exports = routes;