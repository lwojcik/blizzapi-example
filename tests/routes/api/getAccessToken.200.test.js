const { BlizzAPI } = require('blizzapi');
const request = require('supertest');
const app = require('../../../src/app');

jest.mock('blizzapi', () => ({
  BlizzAPI: jest.fn().mockImplementation(() => ({
    getAccessToken: () => Promise.resolve('sample access token'),
  })),
}));

describe('/getAccessToken/:region', () => {
  const route = '/api/getAccessToken/us';

  test('should return 200', async () => {
    const response = await request(app).get(route);
    expect(response.statusCode).toBe(200);
  });

  test('should match snapshot', async () => {
    const response = await request(app).get(route);
    expect(response.body).toMatchSnapshot();
  });
});