require('module-alias/register')
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

import siteInfo from './middlewares/siteInfo';
import api from './middlewares/api';
const routes = require('./routes');

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middlewares
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', siteInfo);

app.use('/', api);

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});