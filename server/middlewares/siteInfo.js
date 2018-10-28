import siteInfoJson from '../config/site.json';

const siteInfo = (req, res, next) => {
  req.siteInfo = siteInfoJson;
  next()
}

export default siteInfo;