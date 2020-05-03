const supertest = require('supertest');
const app = require('../app');
let { contentType, imageSvgXml, emptySvg } = require('../helpers/constants');
const svgs = require('../helpers/svgs');

imageSvgXml += '; charset=utf-8';
const status200 = 200;

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

const tex1 = 'x';
describe(`GET /?tex=${tex1}`, () => {
  let svg;

  it('does not have SVG memoized', () => {
    expect(svgs[tex1]).toBe(undefined);
  });

  it('returns with SVG', async () => {
    await agent
      .get(`/?tex=${tex1}`)
      .expect(contentType, imageSvgXml)
      .expect(status200)
      .expect(res => {
        svg = res.body.toString();
        expect(svg).toMatchSnapshot();
      });
  });

  it('has SVG memoized', () => {
    expect(svgs[tex1]).toBe(svg);
  });
});

const quadraticFormula = 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}';
const tex2 = encodeURIComponent(quadraticFormula);
describe(`GET /?tex=${tex2}`, () => {
  let svg;

  it('does not have SVG memoized', () => {
    expect(svgs[quadraticFormula]).toBe(undefined);
  });

  it('returns with SVG', async () => {
    await agent
      .get(`/?tex=${tex2}`)
      .expect(contentType, imageSvgXml)
      .expect(status200)
      .expect(res => {
        svg = res.body.toString();
        expect(svg).toMatchSnapshot();
      });
  });

  it('has SVG memoized', () => {
    expect(svgs[quadraticFormula]).toBe(svg);
  });
});
