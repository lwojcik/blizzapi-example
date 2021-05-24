const request = require('supertest');
const app = require('../../../src/app');

jest.mock('blizzapi', () => ({
  BlizzAPI: jest.fn().mockImplementation(() => ({
    validateAccessToken: (region, accessToken) => {
      if (region === 'wrongRegion' && accessToken === 'wrongAccessToken') {
        throw new Error('wrong response');
      }
      return Promise.resolve(true);
    },
  })),
}));

describe('/validateAccessToken/:region/:accessToken', () => {
  const route = `/api/validateAccessToken/us/sampleAccessToken`;
  const wrongRoute = `/api/validateAccessToken/wrongRegion/wrongAccessToken`;

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