// env
const isDevelopment = process.env.NODE_ENV === 'development';

// response headers
const contentType = 'Content-Type';
const imageSvgXml = 'image/svg+xml';

const cacheControl = 'Cache-Control';
const cacheOneYear = 'public,max-age=31557600,immutable';

// svg
const emptySvg = '<svg xmlns="http://www.w3.org/2000/svg"/>';

const constants = {
  isDevelopment,
  contentType,
  cacheControl,
  cacheOneYear,
  imageSvgXml,
  emptySvg,
};

module.exports = constants;
