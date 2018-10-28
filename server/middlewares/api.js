const axios = require('axios');

const endpoint = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`;

const endpointFetch = (req, res, next) => {

  axios.get(endpoint, {
    params: {
      content_type: 'blogPost'
    },
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`
    },
    timeout: 1000,
  })
  .then(function ({ data }) {
    req.data = data;
    next();
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default endpointFetch;