const { contentType, imageSvgXml } = require('./constants');

/**
 * Sends SVG as response.
 *
 * @param {express.Response} res
 * @param {String} svg
 */
const sendSvg = (res, svg) => {
  res.setHeader(contentType, imageSvgXml);
  res.send(svg);
};

module.exports = {
  sendSvg,
};
