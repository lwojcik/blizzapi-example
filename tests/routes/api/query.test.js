const request = require('supertest');
const app = require('../../../src/app');

jest.mock('blizzapi', () => ({
  BlizzAPI: jest.fn().mockImplementation(() => ({
    query: (endpoint) => {
      if (endpoint === 'wrongEndpoint') {
        throw new Error('wrong response');
      }
      return Promise.resolve({
        data: `sample data for ${endpoint}`,
      });
    }
  })),
}));

describe('/query/:region/?endpoint=:endpoint', () => {
  const route = `/api/query/us?endpoint=/sample/endpoint`;
  const wrongRoute = `/api/query/us?endpoint=wrongEndpoint`;
  test('should return 200', async () => {
    const response = await request(app).get(route);
    expect(response.statusCode).toBe(200);
  });

  test('should match snapshot', async () => {
    const response = await request(app).get(route);
    expect(response.body).toMatchSnapshot();
  });

  test('should send status code 400 in case of error', async () => {
    const response = await request(app).get(wrongRoute);
    expect(response.statusCode).toBe(400);
  });

  test('error response should match snapshot', async () => {
    const response = await request(app).get(wrongRoute);
    expect(response.body).toMatchSnapshot();
  });
});
