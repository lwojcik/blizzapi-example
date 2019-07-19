const request = require('supertest');
const app = require('../../../src/app');

jest.mock('blizzapi', () => jest.fn().mockImplementation(
  () => ({
    getAccessToken: (region) => {
      throw new Error('wrong response');
    }
  }),
));

describe('/getAccessToken/:region (error 400)', () => {
  const wrongRoute = '/api/getAccessToken/wrong';

  test('should send status code 400 in case of error', async () => {
    const response = await request(app).get(wrongRoute);
    expect(response.statusCode).toBe(400);
  });

  test('error response should match snapshot', async () => {
    const response = await request(app).get(wrongRoute);
    expect(response.body).toMatchSnapshot();
  });
});