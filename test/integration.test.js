const supertest = require('supertest');
const app = require('../app');
let { contentType, imageSvgXml, emptySvg } = require('../helpers/constants');
const svgs = require('../helpers/svgs');

imageSvgXml += '; charset=utf-8';
const status200 = 200;
let tex;

const agent = supertest.agent(app);

describe('GET /heartbeat', () => {
  it('returns with 200 OK', async () => {
    await agent.get('/heartbeat').expect(status200, 'OK');
  });
});

describe('GET /', () => {
  it('returns with empty SVG', async () => {
    await agent
      .get('/')
      .expect(contentType, imageSvgXml)
      .expect(status200)
      .expect(res => {
        expect(res.body.toString()).toBe(emptySvg);
      });
  });
});

tex = 'x';
describe(`GET /?tex=${tex}`, () => {
  let svg;

  it('does not have SVG memoized', () => {
    expect(svgs[tex]).toBe(undefined);
  });

  it('returns with SVG', async () => {
    await agent
      .get(`/?tex=${tex}`)
      .expect(contentType, imageSvgXml)
      .expect(status200)
      .expect(res => {
        svg = res.body.toString();
        expect(svg).toMatchSnapshot();
      });
  });

  it('has SVG memoized', () => {
    expect(svgs[tex]).toBe(svg);
  });
});
