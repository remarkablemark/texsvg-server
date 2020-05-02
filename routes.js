const { Router } = require('express');
const texsvg = require('texsvg');

const router = Router();

const contentType = 'Content-Type';
const imageSvgXml = 'image/svg+xml';

/**
 * GET /
 *
 * @example
 *   /?tex=\frac{a}{b}
 */
router.get('/', async (req, res, next) => {
  const { tex } = req.query;
  try {
    const svg = await texsvg(tex);
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
  res.status(500).send('500');
});

module.exports = router;
