const request = require('supertest');
const app = require('../src/app');

const routes = [
  '/utils/getAllRegions',
  '/utils/getAllApiHosts',
];

routes.map(route => {
  describe(route, () => {
    test('should return 200', async () => {
      const response = await request(app).get(route);
      expect(response.statusCode).toBe(200);
    });

    test('should match snapshot', async () => {
      const response = await request(app).get(route);
      expect(response.body).toMatchSnapshot();
    });
  });
})