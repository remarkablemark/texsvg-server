const { Router } = require('express');
const texsvg = require('texsvg');
const { isDevelopment } = require('../helpers/constants');
const { sendSvg } = require('../helpers/express');
const svgs = require('../helpers/svgs');

const router = Router();

/**
 * GET /
 *
 * @example
 *   /?tex=\frac{a}{b}
 */
router.get('/', async (req, res, next) => {
  try {
    // decode tex
    const tex = req.query.tex || '';

    // generate svg (if not memoized)
    if (!svgs.hasOwnProperty(tex)) {
      svgs[tex] = await texsvg(tex);
    }

    // return svg
    sendSvg(res, svgs[tex]);
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
