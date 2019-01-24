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

module.exports = router;
