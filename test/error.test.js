const supertest = require('supertest');
const app = require('../app');
let { contentType } = require('../helpers/constants');
const svgs = require('../helpers/svgs');

jest.mock('texsvg', () => jest.fn().mockRejectedValue('error'));

const textHtml = 'text/html; charset=utf-8';
const status500 = 500;

const agent = supertest.agent(app);

const tex = 'x^2';
describe(`GET /?tex=${tex}`, () => {
  it('catches error', async () => {
    await agent
      .get(`/?tex=${tex}`)
      .expect(contentType, textHtml)
      .expect(status500, status500.toString())
      .expect(res => {
        expect(res.text).toBe('500');
        expect(res.error).toMatchSnapshot();
      });
  });
});
