// var Author = require('../models/article');

exports.article_list = (req, res) => {
  res.render('index',
    {
      title: req.siteInfo.name,
      items: req.data.items
    }
  );
};

exports.article_full = (req, res) => {
  res.send('NOT IMPLEMENTED: Article full');
};
