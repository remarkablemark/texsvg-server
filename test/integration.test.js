const supertest = require('supertest');
const app = require('../app');
let { contentType, imageSvgXml, emptySvg } = require('../helpers/constants');

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

describe('GET /?tex=x', () => {
  it('returns with SVG', async () => {
    await agent
      .get('/?tex=x')
      .expect(contentType, imageSvgXml)
      .expect(status200)
      .expect(res => {
        expect(res.body.toString()).toMatchSnapshot();
      });
  });
});
