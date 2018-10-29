// var Author = require('../models/article');
import axios from 'axios';
import showdown from 'showdown';

const converter = new showdown.Converter();

exports.article_list = (req, res) => {

  axios.get(`https://cdn.contentful.com/spaces/${req.api.id}/environments/master/entries`, {
    params: {
      content_type: 'blogPost'
    },
    headers: {
      Authorization: `Bearer ${req.api.token}`
    },
    timeout: 1000,
  })
    .then(function ({ data }) {
      res.render('atomic/templates/articles/ArticleList',
        {
          pageTitle: req.siteInfo.name,
          title: req.siteInfo.name,
          items: data.items
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.article_full = (req, res) => {

  axios.get(`https://cdn.contentful.com/spaces/${req.api.id}/entries?fields.slug=${req.params.alias}`, {
    params: {
      content_type: 'blogPost'
    },
    headers: {
      Authorization: `Bearer ${req.api.token}`
    },
    timeout: 1000,
  })
    .then(function ({ data }) {

      let fields = data.items[0].fields;
      fields.body = converter.makeHtml(fields.body);

      res.render('atomic/templates/articles/Article',
        {
          title: fields.title,
          image: {
            src: data.includes.Asset[0].fields.file.url,
            width: data.includes.Asset[0].fields.file.details.image.width,
            height: data.includes.Asset[0].fields.file.details.image.height,
          },
          fields: fields
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
};
