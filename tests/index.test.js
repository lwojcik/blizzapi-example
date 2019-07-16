const request = require('supertest');
const app = require('../src/app');

describe('/', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should match snapshot', async () => {
    const response = await request(app).get('/');
    expect(response.body).toMatchSnapshot();
  });
})