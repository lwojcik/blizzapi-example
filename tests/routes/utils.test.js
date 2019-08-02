const request = require('supertest');
const app = require('../../src/app');

const regionIds = [ 1, 2, 3, 5 ];

const wrongRegionIds = [ 9, 0 ];

const regionNames = [ 'us', 'eu', 'kr', 'tw', 'cn' ];

const wrongRegionNames = [ 'aaa', '1', 'zzz' ];

const locales = [
  'en_US',
  'es_MX',
  'pt_BR',
  'en_GB',
  'es_ES',
  'fr_FR',
  'ru_RU',
  'de_DE',
  'pt_PT',
  'it_IT',
  'ko_KR',
  'zh_TW',
  'zh_CN',
];

const sc2Realms = [ 1, 2 ];

const getParams = (params1, params2) =>
  [].concat(
    ...params1.map(param1 =>
      params2.map(param2 =>
        `${param1}/${param2}`
      )
    )
  );

const getRouteArray = (routeName, params) =>
  params.map(param => `/utils/${routeName}/${param}`);

const routes = [
  '/utils/getAllRegions',
  '/utils/getAllRegionIds',
  '/utils/getAllRegionNames',
  ...getRouteArray('getRegionNameById', regionIds),
  ...getRouteArray('getRegionIdByName', regionNames),
  ...getRouteArray('validateRegionId', regionIds),
  ...getRouteArray('validateRegionId', wrongRegionIds),
  ...getRouteArray('validateRegionName', regionNames),
  ...getRouteArray('validateRegionName', wrongRegionNames),
  '/utils/getAllLocales',
  '/utils/getAllLocaleNames',
  ...getRouteArray('getLocalesByRegionId', regionIds),
  ...getRouteArray('checkIfLocaleLooksValid', locales),
  ...getRouteArray('validateLocale', locales),
  ...getRouteArray('isLocaleValidForRegionId', getParams(locales, regionIds)),
  '/utils/getAllDefaultLocaleNames',
  ...getRouteArray('getDefaultLocaleNameForRegionId', regionIds),
  '/utils/getAllSc2Realms',
  '/utils/getAllAvailableSc2Realms',
  ...getRouteArray('getSc2RealmsByRegionId', regionIds),
  ...getRouteArray('checkIfSc2RealmLooksValid', sc2Realms),
  ...getRouteArray('validateSc2Realm', sc2Realms),
  ...getRouteArray('isSc2RealmValidForRegionId', getParams(sc2Realms, regionIds)),
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