const router = require('express').Router();

const { env } = process;
const { BattleNetApi } = require('../../../../../blizzard-battlenet-api');

/** Regions */

router.get('/connect', async (req, res) => {
  const clientId = env.API_BATTLENET_KEY;
  const clientSecret = env.API_BATTLENET_SECRET;
  const region = 'eu';
  const BnetApi = new BattleNetApi(region, clientId, clientSecret);
  await BnetApi.connect();
  const response = await BnetApi.query('/sc2/profile/2/1/5593296');
  res.json(response);
});

module.exports = router;
