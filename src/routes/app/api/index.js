const router = require('express').Router();

const { env } = process;
const { BattleNetApi } = require('../../../../../blizzard-battlenet-api');

/** Regions */

router.get('/query/:region', async (req, res) => {
  try {
    const { region } = req.params;
    const { endpoint, accessToken } = req.query;
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const BnetApi = new BattleNetApi(region, clientId, clientSecret, accessToken);
    const response = await BnetApi.query(endpoint);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
});

router.get('/querySearch/:region', async (req, res) => {
  try {
    const { region } = req.params;
    const { endpoint, accessToken, selector } = req.query;
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const BnetApi = new BattleNetApi(region, clientId, clientSecret, accessToken);
    const response = await BnetApi.querySearch(endpoint, selector);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
});

router.get('/queryBatch', async (req, res) => {
  try {
    const region = 'us';
    const endpoints = [
      '/sc2/profile/1/1/1465407',
      '/sc2/profile/1/2/242838',
    ];
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const BnetApi = new BattleNetApi(region, clientId, clientSecret);
    const response = await BnetApi.queryBatch(endpoints);
    res.json(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
