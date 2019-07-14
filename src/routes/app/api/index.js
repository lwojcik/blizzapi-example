const router = require('express').Router();

const {
  env,
} = process;
const BlizzAPI = require('../../../../../blizzapi1');

/** Regions */

router.get('/query/:region', async (req, res) => {
  try {
    const {
      region,
    } = req.params;
    const {
      endpoint,
      accessToken,
    } = req.query;
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const BnetApi = new BlizzAPI(region, clientId, clientSecret, accessToken);
    const response = await BnetApi.query(endpoint);
    // console.log(response);
    res.json(response);
  } catch (error) {
    // console.log(error);
    res.send(error);
  }
});

router.get('/check_token/:region/:accessToken', async (req, res) => {
  try {
    const { region, accessToken } = req.params;
    const response = await BlizzAPI.validateAccessToken(region, accessToken);
    // console.log(response);
    res.json(response);
  } catch (error) {
    // console.log(error);
    res.send(error);
  }
});

module.exports = router;
