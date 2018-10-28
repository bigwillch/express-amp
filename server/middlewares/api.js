const api = (req, res, next) => {
  const api = {
    id: process.env.CONTENTFUL_SPACE_ID,
    token: process.env.CONTENTFUL_DELIVERY_TOKEN
  };
  req.api = api;
  next()
}

export default api;
