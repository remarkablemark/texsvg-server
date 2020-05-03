const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const { isDevelopment } = require('./helpers/constants');
const routes = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(morgan(isDevelopment ? 'dev' : 'combined'));
app.use(compression());
app.use(routes);

module.exports = app;
