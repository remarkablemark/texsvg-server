const express = require('express');
const texsvg = require('texsvg');

const app = express();

const contentType = 'Content-Type';
const imageSvgXml = 'image/svg+xml';

app.get('/', async (req, res, next) => {
  const { tex } = req.query;
  try {
    const svg = await texsvg(tex);
    res.setHeader(contentType, imageSvgXml);
    res.send(svg);
  } catch (err) {
    next(err);
  }
});

const port = process.env.port || 3000;
const hostname = process.env.HOST;
app.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname || 'localhost'}:${port}/`),
);
