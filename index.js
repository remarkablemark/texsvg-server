const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const { isDevelopment } = require('./constants');
const routes = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(morgan(isDevelopment ? 'dev' : 'combined'));
app.use(compression());
app.use(routes);

const port = process.env.port || 3000;
const hostname = process.env.HOST;

app.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname || 'localhost'}:${port}/`),
);
