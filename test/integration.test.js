const supertest = require('supertest');
const app = require('../app');

const agent = supertest.agent(app);

describe('GET /heartbeat', () => {
  it('returns with 200 OK', async () => {
    await agent.get('/heartbeat').expect(200, 'OK');
  });
});
