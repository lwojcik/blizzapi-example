const router = require('express').Router();
const { BattleNetApi } = require('../../../../../blizzard-battlenet-api');

/** Regions */

router.get('/connect', (req, res) => {
  const clientId = '123';
  const clientSecret = '456';
  const region = 'us';
  const BnetApi = new BattleNetApi(region, clientId, clientSecret);
  console.log(BnetApi);
  res.json(BnetApi.connect());
});

module.exports = router;
