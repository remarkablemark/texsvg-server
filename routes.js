const { Router } = require('express');
const texsvg = require('texsvg');
const svgs = require('./svgs');

const router = Router();

const isDevelopment = process.env.NODE_ENV === 'development';

const contentType = 'Content-Type';
const imageSvgXml = 'image/svg+xml';

/**
 * GET /
 *
 * @example
 *   /?tex=\frac{a}{b}
 */
router.get('/', async (req, res, next) => {
  try {
    // decode tex
    let { tex } = req.query;
    tex = decodeURIComponent(tex);

    // return svg (if memoized)
    if (svgs.hasOwnProperty(tex)) {
      res.setHeader(contentType, imageSvgXml);
      return res.send(svgs[tex]);
    }

    // generate, memoize, and return svg
    const svg = await texsvg(tex);
    svgs[tex] = svg;
    res.setHeader(contentType, imageSvgXml);
    res.send(svg);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /heartbeat
 */
router.get('/heartbeat', (req, res, next) => {
  res.send('OK');
});

/**
 * 404
 */
router.use((req, res, next) => {
  res.status(404).send('404');
});

/**
 * Error
 */
router.use((err, req, res, next) => {
  if (isDevelopment) {
    return next(err);
  }
  res.status(500).send('500');
});

module.exports = router;
