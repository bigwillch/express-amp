const express = require('express');
const axios = require('axios');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const endpoint = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

app.get('/', (req, res) => {

  axios.get(endpoint, {
    // params: {
    //   ID: 12345
    // }
    headers: { 
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`
    },
    timeout: 1000,
  })
    .then(function ({data}) {
      console.log(data);
      res.render('index',
        {
          title: data.name
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});