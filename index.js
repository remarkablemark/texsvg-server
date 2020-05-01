const express = require('express');
const texsvg = require('texsvg');

const app = express();

app.get('/', async (req, res, next) => {
  const { tex } = req.query;
  try {
    const svg = await texsvg(tex);
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(svg);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
