const BlizzAPI = jest.fn().mockImplementation(() => {
  return {
    getAccessToken: () => Promise.resolve('sample access token'),

    query: (endpoint) => Promise.resolve({
      data: `sample data for ${endpoint}`,
    }),

    validateAccessToken: (region, accessToken) => {
      if (accessToken === 'wrong access token') {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    }
  }
});
  // constructor() {}

  // getAccessToken() {
  //   return Promise.resolve('sample access token');
  // }

  // query(endpoint) {
  //   return Promise.resolve({
  //     data: `sample data for ${endpoint}`,
  //   });
  // }

  // validateAccessToken(region, accessToken) {
  //   if (accessToken === 'wrong access token') {
  //     return Promise.resolve(false);
  //   }
  //   return Promise.resolve(true);
  // }
// });

module.exports = BlizzAPI;