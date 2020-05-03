const isDevelopment = process.env.NODE_ENV === 'development';
const contentType = 'Content-Type';
const imageSvgXml = 'image/svg+xml';
const emptySvg = '<svg xmlns="http://www.w3.org/2000/svg"/>';

const constants = {
  isDevelopment,
  contentType,
  imageSvgXml,
  emptySvg,
};

module.exports = constants;
