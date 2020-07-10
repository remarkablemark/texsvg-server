const {
  contentType,
  imageSvgXml,
  cacheControl,
  cacheOneYear,
} = require('./constants');

/**
 * Sends SVG as response.
 *
 * @param {express.Response} res
 * @param {String} svg
 */
const sendSvg = (res, svg) => {
  res.set(contentType, imageSvgXml);
  res.set(cacheControl, cacheOneYear);
  res.send(svg);
};

module.exports = {
  sendSvg,
};
